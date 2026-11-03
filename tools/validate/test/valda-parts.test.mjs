import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const VALDA = path.join(import.meta.dirname, "..", "..", "..", "2014", "Valda");

const parts = readdirSync(VALDA, { withFileTypes: true, recursive: true })
	.filter((entry) => entry.isFile() && entry.name.endsWith(".js") && entry.name !== "VSoS.js")
	.map((entry) => path.relative(VALDA, path.join(entry.parentPath, entry.name)).split(path.sep).join("/"))
	.sort();

const read = (part) => readFileSync(path.join(VALDA, part), "utf8");

function sheet(familiarExtras) {
	return vm.createContext({
		ClassList: { sorcerer: {} },
		ClassSubList: {},
		CompanionList: { familiar: { action: [], notes: Array.from({ length: 8 }, () => ({})), attributesChange: () => {}, ...familiarExtras } },
		CreatureList: {},
		FeatsList: {},
		MagicItemsList: {},
		RaceList: {},
		SourceList: {},
		SpellsList: {},
		WeaponsList: {},
		AddRacialVariant: () => {},
		AddSubClass: () => {},
		RequiredSheetVersion: () => {},
		RunFunctionAtEnd: () => {},
		AtHigherLevels: "",
		FightingStyles: {},
		GenericClassFeatures: { "potent spellcasting": { calcChanges: {} } },
		desc: (value) => value,
		levels: Array.from({ length: 20 }, (_, index) => index + 1),
		newObj: (value) => JSON.parse(JSON.stringify(value)),
		toUni: (value) => value,
	});
}

const runAlone = (part, familiarExtras) => vm.runInContext(read(part), sheet(familiarExtras), { filename: part });

function runAll(order) {
	const context = sheet({ attributesAdd: { notes: [{}] } });
	for (const part of order) vm.runInContext(read(part), context, { filename: part });
}

describe("Valda parts", () => {
	it("finds all 23 parts", () => {
		expect(parts).toHaveLength(23);
	});

	it.each(parts)("%s loads alone on a sheet with attributesAdd", (part) => {
		expect(() => runAlone(part, { attributesAdd: { notes: [{}] } })).not.toThrow();
	});

	it.each(parts)("%s loads alone on a sheet without attributesAdd", (part) => {
		expect(() => runAlone(part, {})).not.toThrow();
	});

	it("loads all parts in reverse order", () => {
		expect(() => runAll([...parts].reverse())).not.toThrow();
	});

	it("gives every part its own iFileName and RequiredSheetVersion", () => {
		const names = new Set();
		for (const part of parts) {
			const match = read(part).match(/^var iFileName = "(VSoS_[^"]+)";\r?\nRequiredSheetVersion\("13\.2\.3"\)/);
			expect(match, part).not.toBeNull();
			names.add(match[1]);
		}
		expect(names.size).toBe(23);
	});
});
