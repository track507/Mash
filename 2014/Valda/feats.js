var iFileName = "VSoS_Feats.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
	SourceList["VSoS"] = {
		name: "Valda's Spire of Secrets",
		abbreviation: "VSoS",
		abbreviationSpellsheet: "V",
		date: "2022/12/30", // ! Updated as of 12-30-2022 (Version 1.4)
	};
}

// ! This section adds feats

// * Near-Human feats
FeatsList["aberrant spawn"] = {
	name: "Aberrant Spawn",
	source: ["VSoS", 14],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"You were somehow mutated or created by an aberration, such as an aboleth, and you suffer from strange deformities as a result. Due to these changes, you have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on saving throws you make to avoid or end the charmed condition on yourself and against any effect that would sense your emotions or read your thoughts.\n \u2022 You have resistance to psychic damage.\n \u2022 At least one of your limbs is muscular, rubbery, and pliant, acting as a tentacle that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.",
	description:
		"Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 to any ability score.]",
	dmgres: ["Psychic"],
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*aberrant)(?=.*tentacle).*$/i,
			name: "Aberrant Tentacle",
			source: ["VSoS", 14],
			damage: [1, 6, "bludgeoning"],
			selectNow: true,
		},
	],
	savetxt: {
		adv_vs: ["charmed", "sense emotions", "read thoughts"],
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["aquanaut"] = {
	name: "Aquanaut",
	source: ["VSoS", 14],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"One of your parents is a merfolk, or you are distantly descended from the Elemental Plane of Water; consequently, you have aquatic features like gills, webbed fingers and toes, and fishlike scales, which grant you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can breathe water as well as air.\n \u2022 You have a swimming speed equal to your walking speed.",
	description: "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 to any ability score.]",
	speed: {
		swim: { spd: "walk", enc: "walk" },
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description: "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description: "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description: "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description: "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description: "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description: "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["arachne"] = {
	name: "Arachne",
	source: ["VSoS", 14],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Much like drow, humans can be corrupted by the magic of the drow goddess, becoming arachne—humans with eight eyes and coarse, black hair. Sometimes these humans are the offspring of driders or drow priestesses, while other times they bear the marks of a ritual sacrifice gone terribly awry.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.\n \u2022 You know the poison spray cantrip. Stng at 3rd level, you can cast the bane spell with this trait. Starting at 5th level, you can also cast the spider climb spell with this trait. Once you cast spider climb with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description:
		"I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
	vision: ["Darkvision", 120],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [
		{
			name: "Arachne (level 1)",
			spells: ["poison spray"],
			selection: ["poison spray"],
			firstCol: "atwill",
		},
		{
			name: "Arachne (level 3)",
			spells: ["bane"],
			selection: ["bane"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 3 ? 0 : 1;
			}),
		},
		{
			name: "Arachne (level 5)",
			spells: ["spider climb"],
			selection: ["spider climb"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 5 ? 0 : 1;
			}),
		},
	],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["beastman"] = {
	name: "Beastman",
	source: ["VSoS", 14],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"With a short tail, coarse fur covering your face, and long teeth and claws, you appear more like a ferocious beast than a man. Perhaps your parentage includes a werecreature or an intelligent beast, granting you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on Wisdom (Perception) checks made to smell.\n \u2022 You possess sharp claws, which are natural weapons that you can use to make unarmed strikes. On a hit with them, you deal slashing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
	description:
		"I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 to any ability score.]",
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*(beastman))(?=.*claw).*$/i,
			name: "Beastman Claws",
			source: ["VSoS", 14],
			damage: [1, 6, "slashing"],
			selectNow: true,
		},
	],
	vision: [["Keen Smell", 0]],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["firebrand"] = {
	name: "Firebrand",
	source: ["VSoS", 15],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Born, imbued with, or later marked by the powers of Elemental Fire, these near-humans have an affinity for fire magic. Their heritage makes them dangerous adversaries in combat, as does the volatile nature of their innate powers. Firebrands are human in shape, but have deep red skin and flames behind their eyes. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to fire damage.\n \u2022 You know the produce flame cantrip. Starting at 3rd level, you can cast the burning hands spell with this trait. Starting at 5th level, you can also cast the flaming sphere spell with this trait, without requiring a material component. Once you cast flaming sphere with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description:
		"I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
	dmgres: ["Fire"],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [
		{
			name: "Firebrand (level 1)",
			spells: ["produce flame"],
			selection: ["produce flame"],
			firstCol: "atwill",
		},
		{
			name: "Firebrand (level 3)",
			spells: ["burning hands"],
			selection: ["burning hands"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 3 ? 0 : 1;
			}),
		},
		{
			name: "Firebrand (level 5)",
			spells: ["flaming sphere"],
			selection: ["flaming sphere"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 5 ? 0 : 1;
			}),
		},
	],
	spellChanges: {
		"flaming sphere": {
			components: "V,S",
			compMaterial: "",
			changes: "Casting flaming sphere no longer requires material components",
		},
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["green skin"] = {
	name: "Green Skin",
	source: ["VSoS", 15],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Your people metabolize by basking in the sunlight. Aided by your tough, photosynthetic skin, you gain the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.\n \u2022 While you aren't wearing armor, your AC equals 12 + your Dexterity modifier.",
	description:
		"I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 to any ability score.]",
	armorOptions: {
		regExpSearch: /^(?=.*green)(?=.*skin).*$/i,
		name: "Green Skin",
		source: ["VSoS", 15],
		ac: 12,
		selectNow: true,
	},
	savetxt: {
		adv_vs: ["poisoned"],
	},
	dmgres: ["Poison"],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

// * Human is medium by default
FeatsList["grendel medium"] = {
	name: "Grendel (medium)",
	source: ["VSoS", 15],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"The children of goblins, hobgoblins, and bugbears with humans are known as grendels. Despite their varied heritage, grendels don't quite resemble either of their parents, with green- or orange-tanned skin, coarse hair, and three knuckles on each finger.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Unlike other humans, you are Medium or Small, depending on your heritage.\n \u2022 You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 You have advantage on saving throws you make to avoid or end the charmed condition on yourself.\n \u2022 On your first turn in combat, you can add your proficiency bonus to your attack rolls, ability checks, and saving throws.",
	vision: ["Darkvision", 60],
	savetxt: {
		adv_vs: ["charmed"],
	},
	description:
		"I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 to any ability score.]",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["grendel small"] = {
	name: "Grendel (Small)",
	source: ["VSoS", 15],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"The children of goblins, hobgoblins, and bugbears with humans are known as grendels. Despite their varied heritage, grendels don't quite resemble either of their parents, with green- or orange-tanned skin, coarse hair, and three knuckles on each finger.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Unlike other humans, you are Medium or Small, depending on your heritage.\n \u2022 You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 You have advantage on saving throws you make to avoid or end the charmed condition on yourself.\n \u2022 On your first turn in combat, you can add your proficiency bonus to your attack rolls, ability checks, and saving throws.",
	vision: ["Darkvision", 60],
	eval: function () {
		PickDropdown("Size Category", 4);
	},
	removeeval: function (n) {
		PickDropdown("Size Category", 3);
	},
	savetxt: {
		adv_vs: ["charmed"],
	},
	description:
		"I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 to any ability score.]",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["grue"] = {
	name: "Grue",
	source: ["VSoS", 15],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"One of your parents was a creature of darkness, such as a shadow or a native of the Plane of Shadow. Grues, such as yourself, have blackened skin and cast a shadow in all directions, even when directly in light. In shadows, you are nearly invisible. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have darkvision, the ability to see in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 When you are hidden and a creature discovers you with a successful Wisdom (Perception) check, you can reattempt your Dexterity (Stealth) check to hide. On a success, you silently reposition yourself and the creature doesn't notice you. Once you use this trait, you can't use it again until you finish a short or long rest.",
	description:
		"I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom(Perception) check, I can make a Dexterity(Stealth) check. On a success, I remain hidden. [+1 to any ability score.]",
	vision: ["Darkvision", 60],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
	usages: 1,
	recovery: "short rest",
	limfeaname: "Covert",
};

FeatsList["insectoid"] = {
	name: "Insectoid",
	source: ["VSoS", 15],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Insectoids bear one or two insectlike features, such as prominent compound eyes or chitinous plates, but almost always have a pair of sensitive antennae atop their heads.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Due to your antennae, you have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.\n \u2022 If any part of your body is amputated, but its amputation doesn't kill you, you can fully regrow that part of your body in 24 hours.",
	description:
		"I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 to any ability score.]",
	vision: ["Blindsight", 10],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["immortal"] = {
	name: "Immortal",
	source: ["VSoS", 16],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"According to legend, a human can achieve immortality by replacing their heart with a mote of celestial radiance. The secret to immortality, including the elixirs and rituals needed to achieve it, is protected by a small, clandestine sect of immortal mystics, each of who only know one component of the process. There are perhaps only a dozen true immortals in the world, but as many as hundreds if every tale can be believed.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You don't age, can't be aged magically, and suffer none of the frailty of old age. You can't die of old age.\n \u2022 You have advantage on saving throws you make to avoid or end diseases and the poisoned condition yourself. You also have resistance to poison damage.",
	savetxt: {
		adv_vs: ["poisoned"],
	},
	dmgres: ["Poison"],
	description:
		"I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 to any ability score.]",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["mul"] = {
	name: "Mul",
	source: ["VSoS", 16],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"One of your parents was a human and the other was a dwarf. Such a pairing is unlikely to have produced offspring, but you have defied the odds to join the ranks of the sturdy and resilient muls. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have darkvision, the ability to see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.\n \u2022 Your speed is not reduced by wearing heavy armor and you never have disadvantage on Dexterity (Stealth) checks as a result of wearing heavy armor.",
	description:
		"I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 to any ability score.]",
	vision: ["Darkvision", 60],
	calcChanges: {
		hp: function (totalHD) {
			return [totalHD, "Dwarven Toughness"];
		},
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["ogre-blooded"] = {
	name: "Ogre-Blooded",
	source: ["VSoS", 16],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Your coarse features and monstrous build betray that one of your parents is an ogre. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 You gain proficiency in the Athletics skill. Additionally, when you make a Strength (Athletics) check, you can treat the result as a 10, or your level plus your Strength modifier, whichever is higher.\n \u2022 You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
	description:
		"I have darkvision. I gain proficiency in Athletics, and can treat the result of Str (Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 to any ability score.]",
	vision: ["Darkvision", 60],
	skills: ["Athletics"],
	carryingCapacity: 2,
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["owlbearman"] = {
	name: "Owlbearman",
	source: ["VSoS", 16],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"You are a hulking thing of feathers, flesh, and fur; half-man, half-bear, and half-owl. None can say for sure what you are, other than the result of some mad wizard meddling in the gods' domain. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can attempt to grapple creatures two size categories larger than yourself, and you have advantage on grappling checks you make on your turn against creatures that are at least one size category smaller than you.\n \u2022 You have a long, hooked beak that you can use to make unarmed strikes. On a hit with it, you deal piercing damage equal to 1d6 + your Strength modifier instead of the bludgeoning damage normal for an unarmed strike.",
	description:
		"I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 to any ability score.]",
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*owlbearman)(?=.*beak).*$/i,
			name: "Owlbearman Beak",
			source: ["VSoS", 18],
			damage: [1, 6, "piercing"],
			selectNow: true,
		},
	],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["porterling"] = {
	name: "Porterling",
	source: ["VSoS", 16],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"You are a porterling, parented both by a human and either a gnome or a halfling. You stand about as tall as a dwarf, but are far leaner—and if fathered by a gnome, also somewhat top-heavy. Though they are often confused for dwarves, porterlings can only rarely grow large or thick beards. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on checks you make to escape grapple or to slip bindings.\n \u2022 You suffer no penalty for squeezing into a space that is only large enough for a creature that is one size smaller than you.\n \u2022 You can roll a d8 whenever you make a long or high jump, adding the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.",
	description:
		"I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 to any ability score.]",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["psionic"] = {
	name: "Psionic",
	source: ["VSoS", 17],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Most humans possess some dull psionic potential, but those who unlock their psionic spark transcend their peers. Sometimes, these humans are indistinguishable from ordinary folks, but other times their psionic awakening leaves a tell-tale mark: stark white hair, glowing pupils, or hair and clothing that float and drift around them. \n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can use your action to probe the surface level of a creature's emotions. You must be able to see the creature and it must be within 30 feet and have an Intelligence of 3 or higher. You learn the creature's emotional state and, at the GM's discretion, one of the creature's Bonds.\n \u2022 You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait.\n   Starting at 3rd level, you can cast the unseen servant spell with this trait. Starting at 5th level, you can also cast the levitate spell with this trait. Once you cast levitate with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description:
		"As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 to any ability score.]",
	features: {
		empathy: {
			name: "Empathy",
			minlevel: 1,
			action: [["action", ""]],
		},
	},
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [
		{
			name: "Psionic (level 1)",
			spells: ["mage hand"],
			selection: ["mage hand"],
			firstCol: "atwill",
		},
		{
			name: "Psionic (level 3)",
			spells: ["unseen servant"],
			selection: ["unseen servant"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 3 ? 0 : 1;
			}),
		},
		{
			name: "Psionic (level 5)",
			spells: ["levitate"],
			selection: ["levitate"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 5 ? 0 : 1;
			}),
		},
	],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["proto-man"] = {
	name: "Proto-Man",
	source: ["VSoS", 17],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"You come from a place of massive flora and ancient creatures; your people are hearty and robust, much like very early humans. You gain the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You advantage vs. saving throws against being frightened.\n \u2022 When you take a short rest, you can automatically regain 1 hit die and can choose to spend it immediately. You can't use the ability again until you finish a long rest.",
	description:
		"I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 to any ability score.]",
	savetxt: {
		adv_vs: ["Frightened"],
	},
	usages: 1,
	recovery: "long rest",
	limfeaname: "Recover 1 HD on SR",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["reptiloid"] = {
	name: "Reptiloid",
	source: ["VSoS", 18],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"You bear the abrasive skin, slitted eyes, and split tongue of a reptile—perhaps due to a dragonborn or kobold parent—which grant you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 When you take the Attack action on your turn, you can replace one of your attacks with a lob of acid from your mouth. This is a special ranged attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. On a hit, the target takes 1d10 acid damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).\n   You can use your Acid Spit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description:
		"Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 to any ability score.]",
	usages: "Prof bonus times per",
	recovery: "long rest",
	usagescalc: "event.value = What('Proficiency Bonus');",
	limfeaname: "Acid Spit",
	additional: levels.map(function (n) {
		return n < 5 ? "1d10" : n < 11 ? "2d10" : n < 17 ? "3d10" : "4d10";
	}),
	weaponOptions: [
		{
			regExpSearch: /^(?=.*acid)(?=.*spit).*$/i,
			name: "Acid Spit",
			source: ["VSoS", 18],
			ability: 2,
			type: "Natural",
			damage: ["C", 10, "acid"],
			range: "30 ft",
			description: "Replaces an attack during Attack action; prof. times per long rest",
			selectNow: true,
		},
	],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["roguean"] = {
	name: "Roguean",
	source: ["VSoS", 18],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"You hail from an icy, desolate land, prone to dramatic swings in temperature. Surviving the interminable harshness of your home gives you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to cold damage.\n \u2022 You can tolerate temperatures as low as −100 degrees Fahrenheit and as high as 300 degrees Fahrenheit.\n \u2022 You have darkvision, the ability to see in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
	description:
		"I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 to any ability score.]",
	vision: ["Darkvision", 60],
	dmgres: ["Cold"],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["stoneborn"] = {
	name: "Stoneborn",
	source: ["VSoS", 18],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"With cracked and abrasive skin, stoneborn appear as if they were roughly hewn from granite and have similarly rigid personalities. These near-humans are proud of their connection to Elemental Earth and believe themselves conquerors, fated to rule over every stone. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Your Armor Class increases by 1.\n \u2022 You have advantage on ability checks and saving throws you make to resist being knocked prone or moved against you will.\n \u2022 By placing your hand on natural stone and using your action to focus, you can feel the presence of any natural gems or metals within 100 feet of you.",
	description:
		"My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 to any ability score.]",
	limfeaname: "Sense minerals",
	action: ["action", ""],
	extraAC: [
		{
			mod: 1,
			text: "I gain a +1 bonus to AC when using my action to sense minerals",
		},
	],
	savetxt: {
		adv_vs: ["being knocked prone or moved"],
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["stheno"] = {
	name: "Stheno",
	source: ["VSoS", 18],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"The offspring of medusas—named sthenos—are usually conceived before the mother begins their transformation. With sharp features and a nest of snakes for hair, sthenos can be easily mistaken for their monstrous parent, but possess a gaze that falls short of turning people into stone.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 When you take the Attack action on your turn, you can replace one of your attacks with an immobilizing gaze. Choose a creature you can see within 60 feet of you that can see you to make a Constitution saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature that is immune to being restrained automatically succeeds this saving throw. On a failed save, the creature is incapacitated and its speed becomes 0 until the start of your next turn.\n   You can use your Immobilizing Gaze a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description:
		"Prof. times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a Con save, fail: incapacitated and speed reduced to 0 until my next turn. [+1 to any ability score.]",
	usages: "Prof bonus times per",
	recovery: "long rest",
	usagescalc: "event.value = What('Proficiency Bonus');",
	limfeaname: "Immobilizing Gaze",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		calculate:
			"event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Strength.]';",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		calculate:
			"event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Dexterity.]';",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		calculate:
			"event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Constitution.]';",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		calculate:
			"event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Intelligence.]';",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		calculate:
			"event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Wisdom.]';",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		calculate:
			"event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Charisma.]';",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["tauran"] = {
	name: "Tauran",
	source: ["VSoS", 19],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Your large nose, strong jaw, and wide head do much to reveal your distantly bovine nature, but the prominent bull-horns atop your head reveal to all that you are half-minotaur. Taurans tower over most people and can solve mazes with ease, but typically possess only a shadow of their minotaur parent's might. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You always know which direction is north, and you have advantage on any Wisdom(Survival) check you make to navigate or track.\n \u2022 On any turn in which you only move in a straight line, your speed increases by 10 feet.\n \u2022 You have two horns that you can use to effectively gore your enemies. The horns are a natural melee weapon that you can use to make unarmed strikes. On a hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
	description:
		"I always know which way is north, and have adv. on Wis(Sur) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 to any ability score.]",
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*tauran)(?=.*horns).*$/i,
			name: "Tauran Horns",
			source: ["VSoS", 19],
			damage: [1, 6, "piercing"],
			selectNow: true,
		},
	],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["troll-blooded"] = {
	name: "Troll-Blooded",
	source: ["VSoS", 19],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"With their green-tinted and boil-ridden skin, spindly fingers, and pointed teeth, few people will mark troll-blooded individuals as half-human. These half-humans exclusively favor the look of their troll parentage and have immense difficulty in human society. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You retain some of the regenerative properties of your troll parentage. Whenever you have no more than one-fourth of your maximum hit points (rounded down), you regain 1 hit point each minute. You can't use this trait if you have 0 hit points.",
	description:
		"Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 to any ability score.]",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["two-headed"] = {
	name: "Two-Headed",
	source: ["VSoS", 19],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Like ettins, you have two heads with differing personalities that jointly control your body.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on saving throws you make to avoid or end the following conditions on yourself: blinded, charmed, deafened, frightened.\n \u2022 Because one of your heads is always awake, you retain consciousness when you take a long rest.",
	description:
		"I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 to any ability score.]",
	savetxt: {
		adv_vs: ["blinded", "charmed", "deafened", "frightened"],
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description: "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description: "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description: "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description: "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["windswept"] = {
	name: "Windswept",
	source: ["VSoS", 19],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Carefree and constantly possessed of wanderlust, the extraordinarily pale windswept embody their connection to Elemental Air. Windswept humans are never likely to sleep in the same bed for two nights in a row; they are always moving, always exploring, and always following the wind. You are lighter than a normal human, capable of floating gently on the breeze, and have faint inborn power over the winds, which grant you have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to lightning damage.\n \u2022 You know the message cantrip. Starting at 3rd level, you can cast the feather fall spell with this trait. Starting at 5th level, you can also cast the gust of wind spell with this trait, without requiring a material component. Once you cast gust of wind with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n \u2022 Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description:
		"I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
	dmgres: ["Lightning"],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [
		{
			name: "Windswept (level 1)",
			spells: ["message"],
			selection: ["message"],
			firstCol: "atwill",
		},
		{
			name: "Windswept (level 3)",
			spells: ["feather fall"],
			selection: ["feather fall"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 3 ? 0 : 1;
			}),
		},
		{
			name: "Windswept (level 5)",
			spells: ["gust of wind"],
			selection: ["gust of wind"],
			firstCol: "oncelr",
			times: levels.map(function (n) {
				return n < 5 ? 0 : 1;
			}),
		},
	],
	spellChanges: {
		"gust of wind": {
			components: "V,S",
			compMaterial: "",
			changes: "Casting gust of wind no longer requires material components",
		},
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description:
			"I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description:
			"I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description:
			"I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description:
			"I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description:
			"I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description:
			"I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

FeatsList["winged"] = {
	name: "Winged",
	source: ["VSoS", 19],
	prerequisite: "Chosen at 1st level only, Near-Human variant",
	prereqeval: function (v) {
		return classes.totallevel === 1 && CurrentRace.known === "human" && CurrentRace.variant;
	},
	descriptionFull:
		"Winged humans, sometimes called Icarusians, are the offspring of aarakocra, harpies, or birdfolk. Depending on their parentage, these humans might possess feathers, talons, or beaks.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
	description: "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 to any ability score.]",
	speed: {
		fly: { spd: "walk", enc: "walk" },
	},
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	strength: {
		description: "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	dexterity: {
		description: "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	constitution: {
		description: "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
	intelligence: {
		description: "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	wisdom: {
		description: "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	charisma: {
		description: "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};

// * Chapter 4 feats

FeatsList["battle adept"] = {
	name: "Battle Adept",
	source: ["VSoS", 282],
	calculate:
		"event.value = 'I learn two maneuvers of my choice from those available to the Captain class or Grey Watchman subclass of the Warden class (2nd page \"Choose Feature\" button). The saving throw DC for this is ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Dex Mod')))) + ' (8 + proficiency bonus + Str/Dex mod). I gain one battle die (d6), which I regain when I finish a short rest or roll initiative.';",
	description: "",
	descriptionFull: "",
	// due to limitations, I have to do both separately.
	bonusClassExtrachoices: [
		{
			class: "captain",
			feature: "war tactics",
			bonus: 2,
		},
		{
			class: "warden",
			subclass: "warden-grey watchman",
			feature: "subclassfeature3",
			bonus: 2,
		},
	],
	extraLimitedFeatures: [
		{
			name: "Battle Dice",
			usages: 1,
			additional: "d6",
			recovery: "short rest",
			addToExisting: true,
		},
	],
};
