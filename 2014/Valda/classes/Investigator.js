if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// Investigator SpellList
[
	// 1st level spells
	"alarm",
	"blood print",
	"clue",
	"comprehend languages",
	"conjure cover",
	"consecrated armor",
	"detect evil and good",
	"detect magic",
	"detect poison and disease",
	"disguise self",
	"find familiar",
	"floating disk",
	"heroism",
	"identify",
	"illusory script",
	"memorize",
	"purify food and drink",
	"rumor",
	"speak with animals",
	"transient bulwark",
	"unseen servant",
	"whispering wind",
	// 2nd level spells
	"animal messenger",
	"arcane lock",
	"arcanist's magic aura",
	"augury",
	"curse ward",
	"gentle repose",
	"jethro's instant reload",
	"knock",
	"locate animals or plants",
	"locate object",
	"magic mouth",
	"nondescript",
	"protect threshold",
	"see invisibility",
	"silence",
	"spider climb",
	"stone bones",
	"unseen accountant",
	"zone of truth",
	// 3rd level spells
	"after image",
	"benign dismemberment",
	"clairvoyance",
	"fly",
	"geomantic discernment",
	"magic circle",
	"meld into stone",
	"phantom steed",
	"remove curse",
	"séance",
	"sending",
	"speak with plants",
	"water breathing",
	"water walk",
	// 4th level spells
	"dire warning",
	"distort gravity",
	"divination",
	"false vision",
	"invisibility purge",
	"locate creature",
	"private sanctum",
	// 5th level spells
	"commune",
	"commune with nature",
	"dream",
	"legend lore",
	"scrutinize foe",
	"telepathic bond",
	// 6th level spells
	"find the path",
	"forbiddance",
	"game of fate",
	"instant summons",
].forEach(function (s) {
	if (
		SpellsList[s] &&
		SpellsList[s].classes &&
		SpellsList[s].classes.indexOf("investigator") === -1
	)
		SpellsList[s].classes.push("investigator");
});

ClassList["investigator"] = {
	name: "Investigator",
	regExpSearch: /^(?=.*investigator).*$/i,
	source: ["VSoS", 103],
	primaryAbility: "Intelligence, Strength or Dexterity",
	prereqs: "Intelligence 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Dex", "Int"],
	skillstxt: {
		primary:
			"\n\n" +
			toUni("MyClass") +
			": Choose three from Arcana, Athletics, Deception, History, Insight, Intimidation, Investigation, Medicine, Nature, Perception, Persuasion, Religion, Sleight of Hand, and Stealth.",
	},
	toolProfs: {
		primary: ["Gaming Set"],
	},
	armorProfs: {
		primary: [true, false, false, false],
	},
	weaponProfs: {
		primary: [
			true,
			false,
			[
				"Hand Crossbow",
				"Heavy Crossbow",
				"Longsword",
				"Rapier",
				"Shortsword",
			],
		],
	},
	equipment:
		"Investigator starting equipment:" +
		"\n \u2022 Leather Armor" +
		"\n \u2022 A dagger and longsword or a rapier" +
		"\n \u2022 A heavy crossbow and 20 bolts or a hand crossbow and 20 bolts" +
		"\n \u2022 A dungeoneer's pack or a priest's pack" +
		"\n \u2022 A grimoire and a component pouch",
	subclasses: ["Occult Specializations", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingAbility: 4,
	spellcastingFactor: 1,
	spellcastingTable: [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(
		levels.map(function (n) {
			return [0, 0, 0, 0, 0, 0, 0, 0, 0];
		})
	),
	spellcastingKnown: {
		spells: "book",
		prepared: false,
	},
	features: {
		expertise: (function () {
			var a = {
				name: "Expertise",
				source: ["VSoS", 104],
				minlevel: 1,
				description: desc(
					"I gain expertise with two skills I am proficient with; two more at 6th level"
				),
				skillstxt:
					"Expertise with any two skill proficiencies, and two more at 6th level",
				additional: levels.map(function (n) {
					return "with " + (n < 6 ? 2 : 4) + " skills";
				}),
				extraname: "Expertise",
				extrachoices: [
					"Acrobatics",
					"Animal Handling",
					"Arcana",
					"Athletics",
					"Deception",
					"History",
					"Insight",
					"Intimidation",
					"Investigation",
					"Medicine",
					"Nature",
					"Perception",
					"Performance",
					"Persuasion",
					"Religion",
					"Sleight of Hand",
					"Stealth",
					"Survival",
				],
				extraTimes: levels.map(function (n) {
					return n < 6 ? 2 : 4;
				}),
			};
			for (var i = 0; i < a.extrachoices.length; i++) {
				var attr = a.extrachoices[i].toLowerCase();
				if (a[attr]) continue;
				a[attr] = {
					name: a.extrachoices[i] + " Expertise",
					description: "",
					source: a.source,
					skills: [[a.extrachoices[i], "only"]],
					prereqeval: function (v) {
						return v.skillProfsLC.indexOf(v.choice) === -1
							? false
							: v.skillExpertiseLC.indexOf(v.choice) === -1
							? true
							: "markButDisable";
					},
				};
			}
			return a;
		})(),
		ritualist: {
			name: "Ritualist",
			source: ["VSoS", 104],
			minlevel: 1,
			description: desc([
				"I learn four 1st-level ritual spells from any class' spell list; Int is my spellcasting ability",
				"I can't cast spells in the grimoire except as rituals, unless from other sources",
				"I can copy spells that I find on my adventures to my grimoire (see notes)",
			]),
			toNotesPage: [
				{
					name: "Ritualist",
					note: desc([
						"\u2022 I can add spells I've found to my grimoire as long as it",
						"  is on my class's spell list and able to cast it",
						"\u2022 I treat specific spells as rituals, even w/out the",
						"  ritual tag (already included in the spell sheet)",
						"\u2022 For each level of the spell, it takes 2 hrs and 50 gp to copy it",
					]),
				},
			],
			additional: levels.map(function (n) {
				return (
					(n < 3
						? 1
						: n < 5
						? 2
						: n < 7
						? 3
						: n < 9
						? 4
						: n < 11
						? 5
						: 6) + "th level ritual spells"
				);
			}),
			spellcastingBonus: [
				{
					name: "Ritualist",
					class: "any",
					level: [1, 1],
					ritual: true, // glad to know this works
					times: 4,
				},
			],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spName === "investigator") {
							spellObj.firstCol = "markedbox";
							if (!spellObj.ritual) spellObj.ritual = true;
						}
					},
				],
			},
		},
		"myths and legends": {
			name: "Myths and Legends",
			source: ["VSoS", 105],
			minlevel: 2,
			description: desc([
				"I have adv. on Int checks related to studying crea, spells, and ancient secrets/lore",
			]),
		},
		"rushed incantation": {
			name: "Rushed Incantation",
			source: ["VSoS", 105],
			minlevel: 2,
			description: levels.map(function (n) {
				var base = [
					"I can cast a grimoire spell w/ a cast time of 1 action/bns action as a bns action",
					"If the spell requires \u2264 100 gp of material comp., I can cast it w/out the comp.",
				];
				var uses = Math.floor((n + 3) / 4); // add uses based on level
				base.push(
					"I can use this feature a number of times equal to my Int mod (min 1) + " +
						uses +
						" per long rest"
				);
				return desc(base);
			}),
			usages: "Int mod per ",
			usagescalc:
				"event.value = Math.max(1, Number(What('Int Mod'))) + (classes.known.investigator ? Math.floor((classes.known.investigator.level + 3) / 4) : 0);",
			recovery: "long rest",
		},
		subclassfeature3: {
			name: "Occult Specialization",
			source: ["VSoS", 105],
			minlevel: 3,
			description: desc([
				'Choose an Occult Specialization and put in the "Class" field',
				"Each specialization comes with trinkets, and I must be holding it to activate it",
				"When I use a trinket, I can't use it again until I finish a short or long rest",
				"I gain an additional trinket use at 5th (2), 11th (3), and 17th level (4)",
			]),
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
		},
		"exploit weakness": {
			name: "Exploit Weakness",
			source: ["VSoS", 106],
			minlevel: 5,
			description: desc([
				"When I hit a crea w/ a wea atk, the crea is treated as vulnerable to the wea's dmg",
				"This only applies to my wea dmg roll. I don't apply extra dmg from sources like",
				"spells like hunter's mark, magic items like extra fire dmg from flame tongue,",
				"feats like Great Weapon Master or Strike of the Giants, or class Features like sneak attack",
				"Until the start of my next turn, this atk, and all atks vs the target, count as magical",
			]),
			usages: 1,
			recovery: "Turn",
		},
		"opportunistic piety": {
			name: "Opportunistic Piety",
			source: ["VSoS", 106],
			minlevel: 7,
			description: desc([
				"When I use this feature, I can choose which effect from the 3rd page notes",
			]),
			action: [
				["action", "Miracle Healing"],
				["action", "Warding"],
			],
			toNotesPage: [
				{
					name: "Opportunistic Piety: Effects",
					note: desc([
						"\u2022 Banish: I cast banishment w/out a SS. If the target is Fey/Fiend/Undead",
						"  and fails the save, it takes radiant dmg equal to my character level",
						"\u2022 Miracle Healing: As an action, I can touch a willing crea to restore hp",
						"  equal to twice my investigator level. This has no effect on Constructs/Undead",
						"\u2022 Warding: As an action, I trace a holy symbol on a crea w/in 5 ft warding",
						"  it from Abber/Celest/Fey/Fiends/Undead for 1 min. If a warded crea is touched",
						"  or hit w/ a melee atk by one of these crea types, it takes 1d12 radiant dmg",
					]),
					amendTo: "Ritualist",
				},
			],
			spellcastingBonus: [
				{
					name: "Opportunistic Piety",
					spells: ["banishment"],
					selection: ["banishment"],
					times: 1,
					firstCol: "markedbox",
				},
			],
		},
		"supernatural resolve": {
			name: "Supernatural Resolve",
			source: ["VSoS", 106],
			minlevel: 9,
			description: desc([
				"I can't be possessed or charmed, and gain resistance to necrotic and psychic dmg",
			]),
			savetxt: { immune: ["charmed", "possessed"] },
			dmgres: ["Necrotic", "Psychic"],
		},
		finisher: {
			name: "Finisher",
			source: ["VSoS", 106],
			minlevel: 11,
			description: desc([
				"Once per turn, when I take the Attack action and hit a crea w/ a wea atk",
				"I can deal an extra 2d8 dmg, or 4d8 if the target is below \u00BD of its max hp",
			]),
			usages: 1,
			recovery: "Turn",
		},
		"enigma arcane": {
			name: "Enigma Arcane",
			source: ["VSoS", 106],
			minlevel: 13,
			eval: function () {
				CurrentSpells["investigator-enigma arcane"] = {
					name: "Enigma Arcane (Investigator)",
					ability: "investigator",
					list: { spells: [] },
					known: { cantrips: 0, spells: "list" },
					bonus: {
						bon1: {
							name: 'Just select "Full List"',
							spells: [],
						},
						bon2: {
							name: "on the bottom left",
							spells: [],
						},
					},
					typeList: 4,
					refType: "class",
					allowUpcasting: true,
					firstCol: "",
				};
				SetStringifieds("spells");
				CurrentUpdates.types.push("spells");
			},
			removeeval: function () {
				delete CurrentSpells["investigator-enigma arcane"];
				SetStringifieds("spells");
				CurrentUpdates.types.push("spells");
			},
			calcChanges: {
				spellList: [
					function (spList, spName, spType) {
						if (spName === "investigator-enigma arcane") {
							if (!classes.known.investigator) return;
							var cLvl = classes.known.investigator.level;
							if (cLvl > 12)
								spList.extraspells = spList.extraspells.concat([
									"mirage arcane",
									"plane shift",
									"reverse gravity",
									"sequester",
									"teleport",
								]);
							if (cLvl > 14)
								spList.extraspells = spList.extraspells.concat([
									"antimagic field",
									"glibness",
									"maze",
									"mind blank",
								]);
							if (cLvl > 16)
								spList.extraspells = spList.extraspells.concat([
									"astral projection",
									"gate",
									"weird",
								]);
						}
					},
				],
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (
							spName === "investigator-enigma arcane" &&
							[
								"mirage arcane",
								"plane shift",
								"reverse gravity",
								"sequester",
								"teleport",
								"antimagic field",
								"glibness",
								"maze",
								"mind blank",
								"astral projection",
								"gate",
								"weird",
							].indexOf(spellKey) !== -1
						) {
							spellObj.firstCol = "oncelr";
						}
					},
				],
			},
			description: levels.map(function (n) {
				var base = [
					"I can cast one of the following spells once per long rest",
					"   \u2022 mirage arcane, plane shift, reverse gravity, sequester, or teleport",
				];

				if (n > 14) {
					base.push(
						"At 15th level, I can also cast one of the following once per long rest",
						"   \u2022 antimagic field, glibness, maze, or mind blank"
					);
				}
				if (n > 16) {
					base.push(
						"Additionally at 17th level, I can cast one of the following once per long rest",
						"   \u2022 astral projection, gate, or weird"
					);
				}

				base.push(
					"Casting spells this way doesn't expend a spell slot"
				);

				return desc(base);
			}),
			usages: "1 + 1 at CL15/17",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level > 16 ? 2 : (classes.known.investigator.level > 14 ? 1 : 0)) : 0);",
			recovery: "long rest",
		},
		exorcist: {
			name: "Exorcist",
			source: ["VSoS", 106],
			minlevel: 18,
			description: desc([
				"I can cast protection from evil and good w/out material comp. or a spell slot",
			]),
			spellcastingBonus: [
				{
					name: "Exorcist",
					spells: ["protection from evil and good"],
					selection: ["protection from evil and good"],
					times: 1,
					firstCol: "oncelr",
				},
			],
			spellchanges: {
				"protection from evil and good": {
					components: "",
					compMaterial: "",
					changes:
						"I can cast protection from evil and good without expending a spell slot or material components",
				},
			},
		},
		spellbinder: {
			name: "Spellbinder",
			source: ["VSoS", 106],
			minlevel: 20,
			description: desc([
				"I can select up to 5 ritual spells from my grimoire w/ a cast time of 1 action",
				"These spells can be cast as a bns action w/out a use of Rushed Incantation",
				"If the spell requires \u2264 100 gp of material comp., I can cast it w/out the comp.",
				"I can also do this w/out my grimoire on hand",
			]),
		},
	},
};

AddSubClass("investigator", "antiquarian", {
	regExpSearch: /\bantiquarian\b/i,
	subname: "Antiquarian",
	source: ["VSoS", 107],
	features: {
		subclassfeature3: {
			name: "Artifact Historian",
			source: ["VSoS", 107],
			minlevel: 3,
			description: desc([
				"I add the identify spell to my grimoire",
				"It doesn't require material comp. when I cast it",
			]),
			spellcastingBonus: [
				{
					name: "Artifact Historian",
					spells: ["identify"],
					selection: ["identify"],
					times: 1,
					firstCol: "markedbox",
				},
			],
			spellChanges: {
				identify: {
					components: "",
					compMaterial: "",
					changes:
						"I can cast identify without expending material components",
				},
			},
		},
		"subclassfeature3.1": {
			name: "Trinkets",
			source: ["VSoS", 107],
			minlevel: 3,
			description: desc([
				"I've collected trinkets to help collect and unravel arcane secrets (page 3 notes)",
			]),
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
			toNotesPage: [
				{
					name: "Trinkets",
					page3notes: true,
					note: desc([
						"Spells cast using Trinkets doesn't expend a SS or require spell components",
						"\u2022 Hateful Arrowhead: I can cast ray of enfeeblement or scorching ray once",
						"\u2022 Mirrored Prism: I can cast blur or mirror image once, targetting myself",
						"\u2022 Razortooth Bandages: I can cast cure wounds or inflict wounds once",
					]),
					amendTo: "Ritualist",
				},
			],
			spellcastingBonus: [
				{
					name: "Trinkets",
					spells: [
						"ray of enfeeblement",
						"scorching ray",
						"blur",
						"mirror image",
						"cure wounds",
						"inflict wounds",
					],
					selection: [
						"ray of enfeeblement",
						"scorching ray",
						"blur",
						"mirror image",
						"cure wounds",
						"inflict wounds",
					],
					times: 6,
					firstCol: "markedbox",
				},
			],
			spellChanges: {
				"ray of enfeeblement": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast ray of enfeeblement without expending a spell slot or material components",
				},
				"scorching ray": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast scorching ray without expending a spell slot or material components",
				},
				blur: {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast blur without expending a spell slot or material components",
				},
				"mirror image": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast mirror image without expending a spell slot or material components",
				},
				"cure wounds": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast cure wounds without expending a spell slot or material components",
				},
				"inflict wounds": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast inflict wounds without expending a spell slot or material components",
				},
			},
		},
		subclassfeature6: {
			name: "Relics",
			source: ["VSoS", 107],
			minlevel: 6,
			description: desc([
				"I can use one of the following relics once per short or long rest:",
				"\u2022 Antediluvian Dynamo: I cast fireball or lightning bolt",
				"\u2022 Lich's Deathmask: I can cast counterspell or dispel magic",
				"\u2022 Mortal Coil: I can cast animate dead or revivify",
				"  Casting animate dead causes Undead from previous castings to revert to lifeless corpses",
				"Spells cast using Relics doesn't expend a SS or require spell components",
			]),
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature10: {
			name: "Magic Item Collection",
			source: ["VSoS", 108],
			minlevel: 10,
			description: desc([
				'When I finish a long rest, I can produce an item from the "Choose Feature" above',
			]),
			usages: 1,
			recovery: "long rest",
			choices: [],
		},
		subclassfeature14: {
			name: "Phylactery",
			source: ["VSoS", 108],
			minlevel: 14,
			description: desc([
				"I gain a magic item, the lich's phylactery, that is always attuned to me",
				"It doesn't count against my my total number of attuned magic items",
				"It has 5 charges, regaining 1d4+1 at dawn, to expend one or more from the 3rd page notes",
			]),
			usages: 5,
			recovery: "dawn",
			toNotesPage: [
				{
					name: "Lich's Phylactery",
					page3notes: true,
					note: desc([
						"\u2022 1 Charge: I cast false life at 2nd-level w/out a SS or spell comp.",
						"\u2022 1 Charge: I use my bns action to regain one expended use of my Trinkets",
						"\u2022 2 Charges: When I'm reduced to 0 hp but not killed outright, I can use",
						"  my rea to drop to 1 hp instead",
						"\u2022 3 charges: I make a melee spell atk vs a crea w/in my reach",
						"  On a hit, it takes 5d6 necrotic dmg and I regain hp equal to the necrotic dmg dealt",
					]),
					amendTo: "Ritualist",
				},
			],
		},
	},
});

AddSubClass("investigator", "archivist", {
	regExpSearch: /\barchivist\b/i,
	subname: "Archivist",
	source: ["VSoS", 108],
	features: {
		subclassfeature3: {
			name: "Trinket",
			source: ["VSoS", 108],
			minlevel: 3,
			description: desc([
				"I gain Archaic Scroll to enhance my ritual magic",
				"I can perform a ritual spell w/ my Rushed Incantation feature w/out expending a use",
			]),
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
		},
		"subclassfeature3.1": {
			name: "Thesis",
			source: ["VSoS", 108],
			minlevel: 3,
			description: desc([
				'Use the "Choose Feature" to choose a Thesis',
				"Each Thesis has a list of spells that are added to my grimoire",
				"If a spell isn't on my class's spell list, it's considered part of my class's spell list",
				"I can use my Rushed Incantation feature to cast one of my thesis spells",
			]),
			choices: ["Corpus", "Ignis", "Mortis", "Regis"],
			corpus: {
				name: "Corpus",
				source: ["VSoS", 108],
				description: desc([
					"I can add the following spells to my grimoire:",
					"   \u2022 jump, longstrider, alter self, heat metal, gaseous form, meld into stone",
					"If a spell isn't on my class's spell list, it's considered part of my class's spell list",
					"I can use my Rushed Incantation feature to cast my thesis spells",
				]),
				spellcastingExtra: [
					"jump",
					"longstrider",
					"alter self",
					"heat metal",
					"gaseous form",
					"meld into stone",
				],
				spellcastingExtraApplyNonconform: true,
			},
			ignis: {
				name: "Ignis",
				source: ["VSoS", 108],
				description: desc([
					"I can add the following spells to my grimoire:",
					"   \u2022 burning hands, thunderwave, gust of wind, scorching ray, call lightning, wind wall",
					"If a spell isn't on my class's spell list, it's considered part of my class's spell list",
					"I can use my Rushed Incantation feature to cast my thesis spells",
				]),
				spellcastingExtra: [
					"burning hands",
					"thunderwave",
					"gust of wind",
					"scorching ray",
					"call lightning",
					"wind wall",
				],
				spellcastingExtraApplyNonconform: true,
			},
			mortis: {
				name: "Mortis",
				source: ["VSoS", 108],
				description: desc([
					"I can add the following spells to my grimoire:",
					"   \u2022 bane, false life, blindness/deafness, darkness, revivify, vampiric touch",
					"If a spell isn't on my class's spell list, it's considered part of my class's spell list",
					"I can use my Rushed Incantation feature to cast my thesis spells",
				]),
				spellcastingExtra: [
					"bane",
					"false life",
					"blindness/deafness",
					"darkness",
					"revivify",
					"vampiric touch",
				],
				spellcastingExtraApplyNonconform: true,
			},
			regis: {
				name: "Regis",
				source: ["VSoS", 108],
				description: desc([
					"I can add the following spells to my grimoire:",
					"   \u2022 charm person, hideous laughter, enthrall, suggestion, dispel magic, hypnotic pattern",
					"If a spell isn't on my class's spell list, it's considered part of my class's spell list",
					"I can use my Rushed Incantation feature to cast my thesis spells",
				]),
				spellcastingExtra: [
					"charm person",
					"tasha's hideous laughter",
					"enthrall",
					"suggestion",
					"dispel magic",
					"hypnotic pattern",
				],
				spellcastingExtraApplyNonconform: true,
			},
		},
		subclassfeature6: {
			name: "Erudite Spell",
			source: ["VSoS", 109],
			minlevel: 6,
			description: desc([
				"When I cast a spell requiring a crea to make a saving throw to resist its effects",
				"I can give a target of the spell disadv. on its first saving throw vs. the spell",
			]),
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature10: {
			name: "Encyclopedic Expertise",
			source: ["VSoS", 109],
			minlevel: 10,
			description: desc([
				"I can identify any spell I witness being cast or investigate a magical effect",
				"Whether it's a spell, the magic item responsible, or the monster that produced it",
				"This fails if the effect is unique or it's not recorded in arcane texts",
			]),
		},
		subclassfeature14: {
			name: "Eidetic Memory",
			source: ["VSoS", 109],
			minlevel: 14,
			description: desc([
				"I can copy any spell I see being cast into my grimoire",
				"If the spell is 5th lvl or lower, have a cast time of 1 action, doesn't require",
				"expensive material comp, and has been cast w/in the last minute, I can use my",
				"action and spend a use of Rushed Incantation to cast the spell myself w/out a SS",
			]),
			action: ["action", ""],
		},
	},
});

AddSubClass("investigator", "detective", {
	regExpSearch: /\bdetective\b/i,
	subname: "Detective",
	source: ["VSoS", 109],
	features: {
		subclassfeature3: {
			name: "Investigator's Hunch",
			source: ["VSoS", 109],
			minlevel: 3,
			description: desc([
				"I can unravel mysteries by studying clues and documents for 10 min",
				"I make Int checks related to these clues with adv.",
			]),
		},
		"subclassfeature3.1": {
			name: "Trinkets",
			source: ["VSoS", 109],
			minlevel: 3,
			description: desc([
				"I collect magical trinkets that help in investigation and tracking (page 3 notes)",
			]),
			toNotesPage: [
				{
					name: "Trinkets",
					page3notes: true,
					note: desc([
						"I can cast the following spells as a bns action w/out a SS or spell components:",
						"\u2022 Fogstone Periapt: misty step",
						"\u2022 Glass Medallion: invisibility",
						"\u2022 Skeletons Key: knock",
					]),
					amendTo: "Ritualist",
				},
			],
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
			spellcastingBonus: [
				{
					name: "Trinkets",
					spells: ["misty step", "invisibility", "knock"],
					selection: ["misty step", "invisibility", "knock"],
					times: 3,
					firstCol: "markedbox",
				},
			],
			spellChanges: {
				"misty step": {
					components: "",
					changes:
						"I can cast misty step as a bns action w/out a SS or spell components",
				},
				invisibility: {
					components: "",
					compMaterial: "",
					range: "Self",
					time: "1 bns",
					changes:
						"I can cast invisibility on myself as a bns action w/out a SS or spell components",
				},
				knock: {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast knock as a bns action w/out a SS or spell components",
				},
			},
		},
		subclassfeature6: {
			name: "Predictive Intuition",
			source: ["VSoS", 109],
			minlevel: 6,
			description: desc([
				"As a bns action, I can analyze a visible crea's movement w/in 30 ft of me",
				"Choose one of the following effects, lasting until the start of my next turn:",
				"\u2022 I can add 1d6 to my next atk roll vs the crea",
				"\u2022 I can subtract 1d6 from the crea's next atk roll vs me",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature10: {
			name: "Interrogator's Instinct",
			source: ["VSoS", 109],
			minlevel: 10,
			description: desc([
				"I can tell if an audible crea speaking is charmed, possessed, or enchanted",
				"against their will, and I have adv on ability chks to determine if I hear a lie",
			]),
		},
		subclassfeature14: {
			name: "Power of Deduction",
			source: ["VSoS", 109],
			minlevel: 14,
			description: desc([
				"As an action, I can analyze a visible crea w/in 30 ft of me",
				"For the next min, I have adv on Int and Cha checks to interact w/ the crea",
				"Additionally, I have adv on atk rolls against it",
			]),
			usages: 1,
			recovery: "short rest",
		},
	},
});

AddSubClass("investigator", "exterminator", {
	regExpSearch: /\bexterminator\b/i,
	subname: "Exterminator",
	source: ["VSoS", 110],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiencies",
			source: ["VSoS", 110],
			minlevel: 3,
			description: desc([
				"I gain proficiancy with martial weapons and medium armor",
			]),
			armorProfs: [true, true, false, false],
			weaponProfs: [true, false],
		},
		"subclassfeature3.1": {
			name: "Trinkets",
			source: ["VSoS", 110],
			minlevel: 3,
			description: desc([
				"I've collected trinkets to eliminate monsters and other threats (page 3 notes)",
			]),
			toNotesPage: [
				{
					name: "Trinkets",
					note: desc([
						"\u2022 Consecrated Whetstone: As a bns action, I can cast magic weapon",
						"  w/out a SS or spell comp",
						"\u2022 Gilded Dragon Scale: As a bns action, I gain resistance to one",
						"  dmg type of my choice for 1 min",
						"\u2022 Wyverntooth Necklace: When I hit a crea w/ a wea atk, I can use my",
						"  bns action to deal an extra 2d6 poison dmg to the crea",
					]),
					amendTo: "Ritualist",
				},
			],
			spellcastingBonus: [
				{
					name: "Trinkets",
					spells: ["magic weapon"],
					selection: ["magic weapon"],
					times: 1,
					firstCol: "markedbox",
				},
			],
			spellChanges: {
				"magic weapon": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast magic weapon as a bns action w/out a SS or spell components",
				},
			},
		},
		subclassfeature6: {
			name: "Monster Slayer",
			source: ["VSoS", 110],
			minlevel: 6,
			description: desc([
				"When I take the atk action, I can make a wea atk as a bns action",
			]),
			usages: "Int mod per ",
			usagescalc: "event.value = Math.max(1, Number(What('Int Mod')));",
			recovery: "short rest",
			action: ["bonus action", ""],
		},
		subclassfeature10: {
			name: "Silvered Edge",
			source: ["VSoS", 110],
			minlevel: 10,
			description: desc([
				"When I deal dmg to a crea w/ a wea atk, it cant regain hp until",
				"the start of my next turn. If I reduce a crea to 0 hp, it can't",
				"raised as an Undead crea nor be returned to life by any means",
				"short of the wish spell for 7 days",
			]),
		},
		subclassfeature14: {
			name: "Killer Instinct",
			source: ["VSoS", 110],
			minlevel: 14,
			description: desc([
				"I can use my Exploit Weakness feature twice on my turn",
				"But I can't use it against the same target more than once",
			]),
		},
	},
});

AddSubClass("investigator", "inquisitor", {
	regExpSearch: /\binquisitor\b/i,
	subname: "Inquisitor",
	source: ["VSoS", 110],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiencies",
			source: ["VSoS", 110],
			minlevel: 3,
			description: desc(["I gain proficiancy with medium armor"]),
			armorProfs: [true, true, false, false],
		},
		"subclassfeature3.1": {
			name: "Exorcist's Doctrines",
			source: ["VSoS", 110],
			minlevel: 3,
			description: desc(["I gain proficiency and expertise w/ Religion"]),
			skills: ["Religion", "full"],
		},
		"subclassfeature3.2": {
			name: "Trinkets",
			source: ["VSoS", 110],
			minlevel: 3,
			description: desc([
				"I've collected trinkets to banish restless spirits and demons (page 3 notes)",
			]),
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
			toNotesPage: [
				{
					name: "Trinkets",
					note: desc([
						"I can cast the following spells as a bns action w/out a SS or spell components:",
						"\u2022 Alabaster Blam: As a bns action, I cast lesser restoration",
						"   w/out a SS or spell comp",
						"\u2022 Hallowed Chalice: I produce a cup of holy water to fill 5 flasks, lasting 24 hrs",
						"\u2022 Reliquary of Doubt: As a bns action, I cast detect thought only detecting",
						"  thoughts associated with negative emotions",
					]),
					amendTo: "Ritualist",
				},
			],
			spellcastingBonus: [
				{
					name: "Trinkets",
					spells: ["lesser restoration", "detect thoughts"],
					selection: ["lesser restoration", "detect thoughts"],
					times: 2,
					firstCol: "markedbox",
				},
			],
			spellChanges: {
				"lesser restoration": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast lesser restoration as a bns action w/out a SS or spell components",
				},
				"detect thoughts": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast detect thoughts as a bns action w/out a SS or spell components",
				},
			},
			action: ["bonus action", ""],
		},
		subclassfeature6: {
			name: "Divine Strike",
			source: ["VSoS", 110],
			minlevel: 6,
			description: desc([
				"Once per turn when I hit a crea w/ a wea atk, I can deal an extra 1d6 radiant dmg",
			]),
			usages: 1,
			recovery: "Turn",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.investigator && v.isWeapon) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Once per turn +1d6 radiant dmg";
						}
					},
				],
			},
		},
		subclassfeature10: {
			name: "Rote Piety",
			source: ["VSoS", 111],
			minlevel: 10,
			description: desc([
				"I can use my Opportunistic Piety feature three times instead of once",
			]),
			bonusClassExtrachoices: [
				{
					class: "investigator",
					feature: "opportunistic piety",
					bonus: 2,
				},
			],
		},
		subclassfeature14: {
			name: "Excommuncation",
			source: ["VSoS", 111],
			minlevel: 14,
			description: desc([
				"As an action, I can mark a crea w/in 60 ft of me. The crea must make",
				"a Con or Wis saving throw of my choice or be marked for 1 min.",
				"A marked crea cannot regain hp or ave adv on any atk roll or ability chk",
				"Additionally, whenever the crea takes an action, it takes 2d6 radiant dmg",
			]),
			usages: 1,
			recovery: "short rest",
			action: ["action", ""],
			additional: "Con or Wis save of my choice",
		},
	},
});

AddSubClass("investigator", "medium", {
	regExpSearch: /\bmedium\b/i,
	subname: "Medium",
	source: ["VSoS", 111],
	features: {
		subclassfeature3: {
			name: "Fortelling",
			source: ["VSoS", 111],
			minlevel: 3,
			description: desc([
				"When I finish a long rest, I roll two d20s and record the results",
				"I can replace any ability check, atk roll, or saving throw with it",
				"I can choose myself or must be able to see the crea to do so",
				"But must choose before they roll, and only replacing a roll once per turn",
				"As an action, I can use Rushed Incantation to make an extra foretold roll",
				"I can have up to 3 foretold rolls at a time, each only being used once",
				"I lose any unused foretold rolls on a long rest",
			]),
			additional: "max 3",
			usages: 1,
			recovery: "long rest",
		},
		"subclassfeature3.1": {
			name: "Trinkets",
			source: ["VSoS", 111],
			minlevel: 3,
			description: desc([
				"I've collected trinkets to help me attune to the afterlife (page 3 notes)",
			]),
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
			toNotesPage: [
				{
					name: "Trinkets",
					note: desc([
						"\u2022 Dead Ringer: As an action, I can cast speak with dead once",
						"  w/out a SS or spell comp., asking only one question",
						"\u2022 Heptagonal Spectacles: As a bns action, I can cast see invisibility",
						"  once w/out a SS or spell comp.",
						"\u2022 Lucent Mirror: As a bns action, I can phase into the Ethereal Plane for a min",
						"  For the duration I can move through crea(s) and obj(s) as if it were",
						"  difficult terrain, taking 1d10 forcedmg if I end my turn inside of a crea or obj",
						"  I also gain resistance to all dmg while like this",
						"  This effect ends early if I take any dmg",
					]),
					amendTo: "Ritualist",
				},
			],
			spellcastingBonus: [
				{
					name: "Trinkets",
					spells: ["speak with dead", "see invisibility"],
					selection: ["speak with dead", "see invisibility"],
					times: 2,
					firstCol: "markedbox",
				},
			],
			spellChanges: {
				"speak with dead": {
					components: "",
					compMaterial: "",
					time: "1 action",
					description:
						"1 corpse with mouth answers a question with what it knew in life; can cast on same every 10 days",
					changes:
						"I can cast speak with dead as an action w/out a SS or spell components. I can only ask the corpse one question.",
				},
				"see invisibility": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast see invisibility as a bns action w/out a SS or spell components.",
				},
			},
			action: [
				["action", " (Dead Ringer)"],
				["bonus action", " (Heptagonal Spectacles)"],
				["bonus action", " (Lucent Mirror)"],
			],
		},
		subclassfeautre6: {
			name: "Forewarning Presence",
			source: ["VSoS", 112],
			minlevel: 6,
			description: desc([
				"I can reroll an atk roll, ability check, or saving throw and must use the new roll",
				"I can do this after I make the roll, but before the GM determines the outcome",
			]),
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature10: {
			name: "Whispers From Beyond",
			source: ["VSoS", 112],
			minlevel: 10,
			description: desc([
				"As an action I receive a one-word hint from the GM for the best course of action",
			]),
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature14: {
			name: "Third Eye",
			source: ["VSoS", 112],
			minlevel: 14,
			description: desc([
				"As a bns action, I can cast true seeing w/out a SS or spell components",
			]),
			action: ["bonus action", ""],
			spellcastingBonus: [
				{
					name: "Third Eye",
					spells: ["true seeing"],
					selection: ["true seeing"],
					times: 1,
					firstCol: "oncelr",
				},
			],
		},
	},
});

AddSubClass("investigator", "occultist", {
	regExpSearch: /occultist/i,
	subname: "Occultist",
	source: ["VSoS", 112],
	spellcastingTable: [
		,
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 2, 0, 0, 0, 0, 0],
		[0, 0, 0, 2, 0, 0, 0, 0, 0],
	],
	features: {
		subclassfeature3: {
			name: "Trinket",
			source: ["VSoS", 112],
			minlevel: 3,
			description: desc([
				"I've gained the Rune Keeper's Eyeglass",
				"As a bns action, I can activate it to gain the ability to read all writing for 1 hr",
			]),
			action: ["bonus action", ""],
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
		},
		"subclassfeature3.1": {
			name: "Pact Magic",
			source: ["VSoS", 112],
			minlevel: 3,
			description: desc([
				"I can cast known warlock spells/cantrips using Int as my spellcasting ability",
				"When I gain a lvl in this class, I can replace one of my spells with another warlock spell",
				"I regain expended spell slots on a short/long rest",
			]),
			eval: function () {
				var lvl =
					classes.known.investigator &&
					classes.known.investigator.level
						? classes.known.investigator.level
						: 0;
				CurrentSpells["investigator-occultist"] = {
					name: "Pact Magic (Investigator)",
					ability: "investigator",
					level: lvl,
					typeSp: "known",
					refType: "class",
					list: {
						class: "warlock",
					},
					known: {
						cantrips: [
							0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3,
							3, 3, 3,
						],
						spells: [
							0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
							9, 10, 11,
						],
						factor: [6, "warlock"],
						spellsTable: false,
					},
					allowUpcasting: true,
				};
			},
			removeeval: function () {
				delete CurrentSpells["investigator-occultist"];
				SetStringifieds("spells");
				CurrentUpdates.types.push("spells");
			},
		},
		subclassfeature6: {
			name: "Eldritch Ruin",
			source: ["VSoS", 113],
			minlevel: 6,
			description: desc([
				"I can forgo dealing extra dmg w/ Exploit Weakness to cast a cantrip as a bns action",
			]),
			action: ["bonus action", " (w/Exploit Weakness)"],
		},
		subclassfeature10: {
			name: "Eyes of Another World",
			source: ["VSoS", 113],
			minlevel: 10,
			description: desc([
				"I can see invis. crea. and obj. or if they're on the Ethereal Plane",
				"I can see the true form of shapechangers or crea. whose form has been altered by magic",
				"Additionally, I can immediately detect if a visible crea is possessed",
			]),
			vision: [
				["Invis. crea/obj or on Ethereal Plane", 0],
				["Shapechangers/crea altered by magic true form", 0],
				["Possessed crea.", 0],
			],
		},
		subclassfeature14: {
			name: "Maleficium",
			source: ["VSoS", 113],
			minlevel: 14,
			description: desc([
				"I can cast bestow curse as a bns action when I use Exploit Weakness",
				"This doesn't require a SS, spell components, and the target has disadv. on the save",
			]),
			usages: 1,
			recovery: "short rest",
			spellcastingBonus: [
				{
					name: "Maleficium",
					spells: ["bestow curse"],
					selection: ["bestow curse"],
					times: 1,
					firstCol: "oncelr",
				},
			],
			spellChanges: {
				"bestow curse": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast bestow curse without expending a spell slot or material components as a bonus action",
				},
			},
		},
	},
});

AddSubClass("investigator", "spy", {
	regExpSearch: /spy/i,
	subname: "Spy",
	source: ["VSoS", 113],
	features: {
		subclassfeature3: {
			name: "Bravado",
			source: ["VSoS", 113],
			minlevel: 3,
			description: desc([
				"I gain proficiency in Deception, and can use Int instead of Cha for Deception checks",
			]),
			skills: ["Deception"],
			addMod: {
				type: "skill",
				field: "Deception",
				mod: "max(Int-Cha|0)",
			},
		},
		"subclassfeature3.1": {
			name: "Trinkets",
			source: ["VSoS", 113],
			minlevel: 3,
			description: desc([
				"I've collected trinkets to aid in espionage (page 3 notes)",
			]),
			action: ["bonus action", ""],
			usages: "1 + 1 at CL5/11/17 ",
			usagescalc:
				"event.value = 1 + (classes.known.investigator ? (classes.known.investigator.level >= 17 ? 3 : classes.known.investigator.level >= 11 ? 2 : classes.known.investigator.level >= 5 ? 1 : 0) : 0);",
			recovery: "short rest",
			toNotesPage: [
				{
					name: "Trinkets",
					note: desc([
						"\u2022 Glass Dust: As a bns action, I throw dust in the air, becoming invisible",
						"  until the start of my next turn. This ends early if I take dmg",
						"\u2022 Horn-Rimmed Glasses: As a bns action, I cast disguise self w/out",
						"  a SS or spell comp.",
						"\u2022 Martini Glass: As a bns action, I cast suggestion w/out a SS or spell comp.",
					]),
					amendTo: "Ritualist",
				},
			],
			spellcastingBonus: [
				{
					name: "Trinkets",
					spells: ["disguise self", "suggestion"],
					selection: ["disguise self", "suggestion"],
					times: 2,
					firstCol: "oncelr",
				},
			],
			spellChanges: {
				"disguise self": {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast disguise self without expending a spell slot or spell components as a bonus action",
				},
				suggestion: {
					components: "",
					compMaterial: "",
					time: "1 bns",
					changes:
						"I can cast suggestion without expending a spell slot or spell components as a bonus action",
				},
			},
		},
		subclassfeature6: {
			name: "Cloak and Dagger",
			source: ["VSoS", 113],
			minlevel: 6,
			description: desc([
				"I can roll max dmg on my wea's dmg dice if I make an atk roll vs",
				"a surprised crea or if they haven't taken their turn in combat yet",
			]),
		},
		subclassfeature10: {
			name: "Shaken Not Stirred",
			source: ["VSoS", 113],
			minlevel: 10,
			description: desc([
				"I can reroll a failed Deception or Persuasion check, but must use the new roll",
			]),
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature14: {
			name: "Body Double",
			source: ["VSoS", 113],
			minlevel: 14,
			description: desc([
				"If I reduce a Humanoid to 0 hp, I can use my rea to assume their appearance",
				"as per disguise self; All physical evidence of its death becomes invis. for 8 hrs",
				"This also works on Humanoid corpse's if they're dead fewer than 24 hrs",
			]),
			usages: 1,
			recovery: "long rest",
		},
	},
});

RunFunctionAtEnd(function () {
	if (ClassList["investigator"] && ClassSubList["investigator-antiquarian"]) {
		var subclassFea =
			ClassSubList["investigator-antiquarian"].features[
				"subclassfeature10"
			];
		var choices = [
			"Carpet of Flying",
			"Cloak of the Bat",
			"Flame Tongue",
			"Gauntlets of Ogre Power",
			"Daern's Instant Fortress",
			"Ring of Regeneration",
			"Ring of Telekinesis",
			"Sun Blade",
			"Wand of Wonder",
		];

		for (var i = 0; i < choices.length; i++) {
			var choice = choices[i];
			var cLC = choice.toLowerCase();
			if (!MagicItemsList[cLC]) continue;
			var item = MagicItemsList[cLC];
			// If the magic item has choices
			if (item.choices) {
				for (var j = 0; j < item.choices.length; j++) {
					var cNameLC = item.choices[j].toLowerCase();
					var theChoice = item[cNameLC];
					if (
						!theChoice.name ||
						subclassFea[theChoice.name.toLowerCase()]
					)
						continue;
					subclassFea[theChoice.name.toLowerCase()] = {
						name: theChoice.name,
						source: theChoice.source,
						description: "",
						magicitemsAdd: [theChoice.name],
						additional: theChoice.attunement
							? "requires attunement"
							: undefined,
					};
					if (choices.indexOf(theChoice.name) === -1)
						choices.push(theChoice.name);
				}
				// Remove the original choice, and instead add it's choices
				if (choices.indexOf(choice) === -1) continue;
				choices.splice(choices.indexOf(choice), 1);
				i--;
			} else {
				//magic item doenst have choices
				var nameLC = item.name.toLowerCase();
				if (subclassFea[nameLC]) continue;
				subclassFea[nameLC] = {
					name: item.name,
					source: item.source,
					description: "",
					magicitemsAdd: [item.name],
					additional: item.attunement
						? "requires attunement"
						: undefined,
				};
			}
		}
		subclassFea.choices = choices;
	}
});
