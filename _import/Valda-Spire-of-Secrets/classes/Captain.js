// ! INCOMPLETE

if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

ClassList["captain"] = {
	name: "Captain",
	regExpSearch: /captain/i,
	source: ["VSoS", 46],
	primaryAbility: "Strength/Dexterity, Charisma",
	prereqs: "Strength 13 or Dexterity 13, and Charisma 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Con", "Cha"],
	abilitySave: 6,
	spellcastingFactor: 1,
	spellcastingTable: levels.map(function (n) {
		return [0, 0, 0, 0, 0, 0, 0, 0, 0];
	}),
	spellcastingList: {
		class: "any",
		spells: [],
	},
	skillstxt: {
		primary:
			"Choose two from Animal Handling, Athletics, Deception, History, Insight, Intimidation, Perception, and Persuasion",
	},
	armorProfs: {
		primary: [true, true, false, true],
		secondary: [true, true, false, true],
	},
	weaponProfs: {
		primary: [true, true],
		secondary: [true, true],
	},
	equipment:
		"Captain starting equipment: " +
		"\n \u2022 Scale mail -or- leather armor;" +
		"\n \u2022 A warhammer -or- a longsword -or- any simple weapon;" +
		"\n \u2022 A light crossbow and 20 bolts -or- a shortbow and 20 arrows -or- 5 javelins;" +
		"\n \u2022 A diplomat's pack -or- an explorer's pack;" +
		"\n \u2022 An embroidered standard and a dagger",
	subclasses: ["Banner", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features: {
		"born leader": {
			name: "Born Leader",
			source: ["VSoS", 46],
			minlevel: 1,
			description:
				"\n    I have advantage on any Charisma (Persuasion) checks to convince someone to let me take" +
				"\n    charge of a situation or to give someone orders in a dangerous situation. I can use my" +
				"\n    Cha mod instead of Int for any ability check I make related to planning, strategy, or tactics.",
		},
		"fighting style": {
			name: "Fighting Style",
			source: ["VSoS", 47],
			minlevel: 1,
			description:
				'\n    Choose a Fighting Style using the "Choose Feature" button above',
			choices: ["Archery", "Defense", "Dueling", "Protection"],
			archery: FightingStyles.archery,
			defense: FightingStyles.defense,
			dueling: FightingStyles.dueling,
			protection: FightingStyles.protection,
		},
		// Big thanks to MorePurpleMoreBetter for the writing CalcChanges attribute that lets the user generate cohort spell sheets.
		cohort: {
			name: "Cohort",
			source: ["VSoS", 47],
			minlevel: 2,
			description:
				'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
				'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
				"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
				"\n    The previous cohort loses all abilities granted by this ability.",
			choices: [
				"Abbot: Generate Spells (6th level)",
				"Abbot: Generate Spells (14th level)",
				"Cultist: Generate Spells (1st level)",
				"Cultist: Generate Spells (6th level)",
				"Mage: Generate Spells (1st level)",
				"Mage: Generate Spells (6th level)",
				"Mage: Generate Spells (14th level)",
				"Mage: Generate Spells (18th level)",
			],
			"abbot: generate spells (6th level)": {
				name: "Abbot Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (
						!(
							classes.known.captain.level >= 6 &&
							classes.known.captain.level < 14
						)
					)
						return false;

					for (var entry in CurrentCompRace) {
						if (/\babbot\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Abbot";
					CurrentSpells["captain"].shortname = "Abbot";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							// Only do this for the 'captain' class, and not for prepared spells, and not if the selected ability score is "none"
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							// Find the "abbot" companion by looking at the known
							// This means that "abbot" needs to be part of the Creature's object name
							// (e.g. CreatureList["abbot"]), or it has to be part of the name of the creature
							// when added through creatureOptions
							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\babbot\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}

							// Stop if no match was found
							if (!prefix) return;

							// Get the abbreviation for the selected ability
							var abi = AbilityScores.abbreviations[ability - 1];

							// Get the modifier for the character and the found abbot creature
							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							// Return the difference between the two modifiers
							return creaMod - charMod;
						},
						"My Abbot cohort can cast these spells. These spells use the abbot's Wisdom for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"guidance",
							"spare the dying",
							"bless",
							"lesser restoration",
							"protection from evil and good",
						],
						name: "Abbot Cohort",
						selection: [
							"guidance",
							"spare the dying",
							"bless",
							"lesser restoration",
							"protection from evil and good",
						],
						firstCol: "atwill",
						times: 5,
						magicitemComponents: true,
						spellcastingAbility: 5,
					},
				],
			},
			"abbot: generate spells (14th level)": {
				name: "Abbot Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (!(classes.known.captain.level >= 14)) return false;

					for (var entry in CurrentCompRace) {
						if (/\babbot\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Abbot";
					CurrentSpells["captain"].shortname = "Abbot";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\babbot\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}
							if (!prefix) return;

							var abi = AbilityScores.abbreviations[ability - 1];
							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							return creaMod - charMod;
						},
						"My Abbot cohort can cast these spells. These spells use the abbot's Wisdom for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"guidance",
							"spare the dying",
							"bless",
							"lesser restoration",
							"protection from evil and good",
							"death ward",
							"revivify",
							"speak with animals",
						],
						name: "Abbot Cohort",
						selection: [
							"guidance",
							"spare the dying",
							"bless",
							"lesser restoration",
							"protection from evil and good",
							"death ward",
							"revivify",
							"speak with animals",
						],
						firstCol: "atwill",
						times: 8,
						magicitemComponents: true,
						spellcastingAbility: 5,
					},
				],
			},
			"cultist: generate spells (1st level)": {
				name: "Cultist Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (!(classes.known.captain.level < 6)) return false;

					for (var entry in CurrentCompRace) {
						if (/\bcultist\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Cultist";
					CurrentSpells["captain"].shortname = "Cultist";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\bcultist\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}
							if (!prefix) return;

							var abi = AbilityScores.abbreviations[ability - 1];
							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							return creaMod - charMod;
						},
						"My Cultist cohort can cast these spells. These spells use the cultist's Charisma for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"dancing lights",
							"mage hand",
							"minor illusion",
							"charm person",
							"detect magic",
						],
						name: "Cultist Cohort",
						selection: [
							"dancing lights",
							"mage hand",
							"minor illusion",
							"charm person",
							"detect magic",
						],
						firstCol: "atwill",
						times: 5,
						magicitemComponents: true,
						spellcastingAbility: 6,
					},
				],
			},
			"cultist: generate spells (6th level)": {
				name: "Cultist Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (!(classes.known.captain.level >= 6)) return false;

					for (var entry in CurrentCompRace) {
						if (/\bcultist\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Cultist";
					CurrentSpells["captain"].shortname = "Cultist";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\bcultist\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}
							if (!prefix) return;

							var abi = AbilityScores.abbreviations[ability - 1];

							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							return creaMod - charMod;
						},
						"My Cultist cohort can cast these spells. These spells use the cultist's Charisma for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"dancing lights",
							"mage hand",
							"minor illusion",
							"charm person",
							"detect magic",
							"disguise self",
							"false life",
							"suggestion",
						],
						name: "Cultist Cohort",
						selection: [
							"dancing lights",
							"mage hand",
							"minor illusion",
							"charm person",
							"detect magic",
							"disguise self",
							"false life",
							"suggestion",
						],
						firstCol: "atwill",
						times: 8,
						magicitemComponents: true,
						spellcastingAbility: 6,
					},
				],
			},
			"mage: generate spells (1st level)": {
				name: "Mage Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (!(classes.known.captain.level < 6)) return false;

					for (var entry in CurrentCompRace) {
						if (/\bmage\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Mage";
					CurrentSpells["captain"].shortname = "Mage";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\bmage\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}
							if (!prefix) return;

							var abi = AbilityScores.abbreviations[ability - 1];

							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							return creaMod - charMod;
						},
						"My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"mage hand",
							"prestidigitation",
							"floating disk",
							"grease",
							"mage armor",
						],
						name: "Mage Cohort",
						selection: [
							"mage hand",
							"prestidigitation",
							"floating disk",
							"grease",
							"mage armor",
						],
						firstCol: "atwill",
						times: 5,
						magicitemComponents: true,
						spellcastingAbility: 4,
					},
				],
			},
			"mage: generate spells (6th level)": {
				name: "Mage Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (
						!(
							classes.known.captain.level >= 6 &&
							classes.known.captain.level < 14
						)
					)
						return false;

					for (var entry in CurrentCompRace) {
						if (/\bmage\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Mage";
					CurrentSpells["captain"].shortname = "Mage";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\bmage\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}
							if (!prefix) return;

							var abi = AbilityScores.abbreviations[ability - 1];

							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							return creaMod - charMod;
						},
						"My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"mage hand",
							"prestidigitation",
							"floating disk",
							"grease",
							"mage armor",
							"message",
							"hold person",
							"invisibility",
						],
						name: "Mage Cohort",
						selection: [
							"mage hand",
							"prestidigitation",
							"floating disk",
							"grease",
							"mage armor",
							"message",
							"hold person",
							"invisibility",
						],
						firstCol: "atwill",
						times: 8,
						magicitemComponents: true,
						spellcastingAbility: 4,
					},
				],
			},
			"mage: generate spells (14th level)": {
				name: "Mage Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (
						!(
							classes.known.captain.level >= 14 &&
							classes.known.captain.level < 18
						)
					)
						return false;

					for (var entry in CurrentCompRace) {
						if (/\bmage\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Mage";
					CurrentSpells["captain"].shortname = "Mage";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\bmage\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}
							if (!prefix) return;

							var abi = AbilityScores.abbreviations[ability - 1];

							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							return creaMod - charMod;
						},
						"My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"mage hand",
							"prestidigitation",
							"floating disk",
							"grease",
							"mage armor",
							"message",
							"hold person",
							"invisibility",
							"dimension door",
							"polymorph",
						],
						name: "Mage Cohort",
						selection: [
							"mage hand",
							"prestidigitation",
							"floating disk",
							"grease",
							"mage armor",
							"message",
							"hold person",
							"invisibility",
							"dimension door",
							"polymorph",
						],
						firstCol: "atwill",
						times: 10,
						magicitemComponents: true,
						spellcastingAbility: 4,
					},
				],
			},
			"mage: generate spells (18th level)": {
				name: "Mage Cohort",
				description:
					'\n    I gain a cohort. Select a cohort using the "Companion Options" button on a Companion' +
					'\n    page, and generate cohort spell sheets by using the "Choose Feature" button above.  If my' +
					"\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort." +
					"\n    The previous cohort loses all abilities granted by this ability.",
				prereqeval: function (v) {
					if (!(classes.known.captain.level >= 18)) return false;

					for (var entry in CurrentCompRace) {
						if (/\bmage\b/i.test(CurrentCompRace[entry].known))
							return true;
					}
					return false;
				},
				eval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Mage";
					CurrentSpells["captain"].shortname = "Mage";
				},
				removeeval: function (lvl, chc) {
					CurrentSpells["captain"].name = "Captain";
					CurrentSpells["captain"].shortname = "Captain";
				},
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								spellcasters.indexOf("captain") == -1 ||
								type == "prepare" ||
								ability === 0
							)
								return;

							var prefix = false;
							for (var entry in CurrentCompRace) {
								if (
									/\bmage\b/i.test(
										CurrentCompRace[entry].known
									)
								) {
									prefix = entry;
									break;
								}
							}
							if (!prefix) return;

							var abi = AbilityScores.abbreviations[ability - 1];

							var charMod = Number(What(abi + " Mod"));
							var creaMod = Number(
								What(
									prefix + "Comp.Use.Ability." + abi + ".Mod"
								)
							);

							return creaMod - charMod;
						},
						"My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs.",
					],
				},
				spellcastingBonus: [
					{
						spells: [
							"mage hand",
							"prestidigitation",
							"tenser's floating disk",
							"grease",
							"mage armor",
							"message",
							"hold person",
							"invisibility",
							"dimension door",
							"polymorph",
							"otiluke's resilient sphere",
						],
						name: "Mage Cohort",
						selection: [
							"mage hand",
							"prestidigitation",
							"tenser's floating disk",
							"grease",
							"mage armor",
							"message",
							"hold person",
							"invisibility",
							"dimension door",
							"polymorph",
							"otiluke's resilient sphere",
						],
						firstCol: "atwill",
						times: 11,
						magicitemComponents: true,
						spellcastingAbility: 4,
					},
				],
			},
		},
		subclassfeature3: {
			name: "Banner",
			source: ["VSoS", 38],
			minlevel: 3,
			description:
				'\n    Choose a Banner to fly by entering it in the "Class" field.',
		},
		"war tactics": {
			name: "War Tactics",
			source: ["VSoS", 38],
			minlevel: 3,
			additional: levels.map(function (n) {
				return n < 3
					? ""
					: n < 6
					? "d8"
					: n < 10
					? "d8"
					: n < 14
					? "d10"
					: n < 18
					? "d10"
					: "d12";
			}),
			limfeaname: "Battle Dice",
			usages: levels.map(function (n) {
				return n < 3 ? 0 : n < 6 ? 2 : n < 14 ? 3 : 4;
			}),
			recovery: "SR/Init",
			description:
				"\n    I gain a pool of battle dice, which I can use to perform special maneuvers in combat." +
				"\n    I regain expended battle dice finishing a short/long rest, or when rolling initiative." +
				"\n    My battle dice change when I reach certain captain levels." +
				"\n    If a maneuver requires a saving throw, the DC is (8 + proficiency + my Charisma mod).",
			extraname: "War Tactic Maneuver",
			action: [
				["bonus action", "Brace"],
				["bonus action", "Rally"],
				["bonus action", "Staggering Strike"],
			],
			extrachoices: ["Brace", "Rally", "Staggering Strike (Captain)"],
			choicesNotInMenu: true,
			brace: {
				name: "Brace",
				source: ["VSoS", 48],
				description:
					"\n    As a bonus action, I can expend a battle die. Each allied creature within 30 feet of me that" +
					"\n    can see or hear me adds the battle die to all saves they make until the end of my next turn.",
			},
			rally: {
				name: "Rally",
				source: ["VSoS", 48],
				description:
					"\n    As a bonus action, I can expend a battle die to choose 1 ally other than myself within 60 ft of" +
					"\n    me that can see or hear me. That ally regains hit points equal to the number rolled + my" +
					"\n    Charisma modifier. I can't use this ability to heal a creature that has 0 hit points.",
			},
			"staggering strike (captain)": {
				name: "Staggering Strike",
				source: ["VSoS", 48],
				description:
					"\n    As a bonus action, when I make a weapon attack against a Large or smaller creature, I can" +
					"\n    expend a battle die. On a hit, the target must make a Constitution save or be incapacitated" +
					"\n    until the start of my next turn.",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "brace",
				},
				{
					extrachoice: "rally",
				},
				{
					extrachoice: "staggering strike (captain)",
				},
			],
		},
		blitz: {
			name: "Blitz",
			source: ["VSoS", 48],
			minlevel: 5,
			description:
				"\n    As a bonus action, I can have a cohort or friendly creature within 60 feet of me that can see" +
				"\n    or hear me use their reaction to move up to their speed or make a weapon attack.",
			action: ["bonus action", "Blitz"],
		},
		"advanced tactics": {
			name: "Advanced Tactics",
			source: ["VSoS", 48],
			minlevel: 9,
			description: "My War Tactics maneuvers improve.",
			extraname: "Advanced Maneuver",
			"advanced brace": {
				name: "Advanced Brace",
				source: ["VSoS", 49],
				description:
					"\n    When I use Brace, affected allies also add the battle die to their ability checks.",
			},
			"advanced rally": {
				name: "Advanced Rally",
				source: ["VSoS", 49],
				description:
					"\n    When I use Rally, the chosen creature also gains temp hit points equal to my captain level.",
			},
			"advanced staggering strike": {
				name: "Advanced Staggering Strike",
				source: ["VSoS", 49],
				description:
					"\n    When I use Staggering Strike, I also add the battle die to the damage roll.",
			},
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (!v.isDC && !v.isRangedWeapon && v.isMeleeWeapon) {
							var lvl = classes.known.captain.level;
							var die =
								lvl < 9
									? ""
									: "Staggering Strike +" +
									  (lvl < 10
											? "1d8"
											: lvl < 18
											? "1d10"
											: "1d12");
							fields.Description +=
								(fields.Description ? "; " : "") + die;
						}
					},
					"I add the battle die roll to my Staggering Strike damage.",
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "advanced brace",
				},
				{
					extrachoice: "advanced rally",
				},
				{
					extrachoice: "advanced staggering strike",
				},
			],
		},
		"coordi nated strike": {
			name: "Coordinated Strike",
			source: ["VSoS", 49],
			minlevel: 11,
			description:
				"\n    Once/each on my turns when I hit a creature with an attack, I can deal an extra 2d8 damage" +
				"\n    if my cohort has also hit that creature with an attack since the end of my last turn.",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (!v.isDC)
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Coordinated strike +2d8 w/Cohort";
					},
					"Once on each of my turns, when I hit a creature with an attack, I can deal an extra 2d8 damage if my cohort has also hit that creature with an attack since the end of my last turn.",
				],
			},
		},
		"lead by example": {
			name: "Lead By Example",
			source: ["VSoS", 49],
			minlevel: 15,
			description:
				"\n    When I roll a 20 on an attack roll/ability check/save, friendly creatures within 30 ft of me gain" +
				"\n    advantage when it makes the same type of roll before the start of my next turn.",
		},
		"legendary commander": {
			name: "Legendary Commander",
			source: ["VSoS", 49],
			minlevel: 20,
			additional: "3 x long rest",
			description:
				"\n    I gain 3 legendary actions. At the end of another creature's turn, I can spend a legendary" +
				"\n    action to take an action of my choice, or allow a friendly creature within 60 feet of me that" +
				"\n    can hear/see me to take an action of their choice. If the creature takes an Attack action as" +
				"\n    a legendary action, they can use features they have that gives them extra attacks.",
			extraLimitedFeatures: [
				{
					name: "Legendary Actions",
					usages: 3,
					recovery: "long rest",
				},
			],
		},
	},
};

// * Captain Subclasses

// * Dragon Banner Captain subclass
AddSubClass("captain", "dragon", {
	regExpSearch: /\bdragon banner\b/i,
	subname: "Dragon Banner",
	source: ["VSoS", 49],
	features: {
		subclassfeature3: {
			name: "Bonus Battle Die",
			source: ["VSoS", 49],
			minlevel: 3,
			description: " I gain 1 extra battle die.",
			limfeaname: "Battle Dice",
			usages: levels.map(function (n) {
				return n < 3 ? 0 : 1;
			}),
			additional: levels.map(function (n) {
				return n < 3
					? ""
					: n < 6
					? "d8"
					: n < 10
					? "d8"
					: n < 14
					? "d10"
					: n < 18
					? "d10"
					: "d12";
			}),
			recovery: "short rest",
			limfeaAddToExisting: true,
		},
		"subclassfeature3.1": {
			name: "Maneuver: Cleave",
			source: ["VSoS", 49],
			minlevel: 3,
			description: " I gain a new maneuver. See notes page.",
			extraname: "Dragon Banner Maneuver",
			cleave: {
				name: "Cleave",
				source: ["VSoS", 49],
				description:
					"\n    Once on each of my turns, when I reduce a hostile creature to 0 hit points or score a crit with" +
					"\n    a melee weapon attack, I can spend a battle die to move up to 15 ft and make another melee" +
					"\n    weapon attack as part of the same action. On hit, I add the battle die to the damage roll.",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "cleave",
				},
			],
		},
		subclassfeature7: {
			name: "Maneuver: Wade Into Battle",
			source: ["VSoS", 49],
			minlevel: 7,
			description: " I gain a new maneuver. See notes.",
			extraname: "Dragon Banner Maneuver",
			action: ["bonus action", "Wade Into Battle"],
			"wade into battle": {
				name: "Wade Into Battle",
				source: ["VSoS", 49],
				description:
					"\n    I can expend a battle die to take the Dash or Disengage action as a bonus action.",
				action: [["bonus action", "Dash/Disengage (1 Battle Dice)"]],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "wade into battle",
				},
			],
		},
		subclassfeature13: {
			name: "Maneuver: Fury Attack",
			source: ["VSoS", 50],
			minlevel: 13,
			description: " I gain a new maneuver. See notes page.",
			extraname: "Dragon Banner Maneuver",
			action: ["bonus action", "Fury Attack"],
			"fury attack": {
				name: "Fury Attack",
				source: ["VSoS", 50],
				description:
					"\n    When I take the attack action on my turn, I may spend a battle die and a bonus action to" +
					"\n    make up to 3 melee weapon attacks instead of 1. Each attack must target a different creature.",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "fury attack",
				},
			],
		},
		subclassfeature17: {
			name: "Vicious Focus",
			source: ["VSoS", 50],
			minlevel: 17,
			description:
				"\n    When I reduce a hostile creature to 0 hit points or score a crit on a melee weapon attack, for" +
				"\n    the next minute, my weapon attacks score a crit on a 19 or 20. Each time I reduce a hostile" +
				"\n    creature's hit points to 0 or score another crit during this minute, my critical hit range" +
				"\n    increases by 1, to a maximum of 16-20. If I fall unconscious, this effect ends early.",
		},
	},
});

// * Eagle Banner Captain subclass
AddSubClass("captain", "eagle", {
	regExpSearch: /\beagle banner\b/i,
	subname: "Eagle Banner",
	source: ["VSoS", 50],
	features: {
		subclassfeature3: {
			name: "Manuever: Eagle Shot",
			source: ["VSoS", 50],
			minlevel: 3,
			description: " I gain a new maneuver. See notes page.",
			extraname: "Eagle Banner Maneuver",
			action: ["bonus action", "Eagle Shot"],
			"eagle shot": {
				name: "Eagle Shot",
				source: ["VSoS", 50],
				description:
					"\n    When I make a ranged weapon attack roll, I can use my bonus action and expend a battle die" +
					"\n    to add it to the roll. I can use this ability before/after the attack roll, but before the GM says" +
					"\n    the attack hits or misses.",
				action: [["bonus action", "Eagle Shot (1 Battle Dice)"]],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "eagle shot",
				},
			],
		},
		subclassfeature7: {
			name: "Vantage Point",
			source: ["VSoS", 50],
			minlevel: 7,
			description:
				"\n    I gain a climbing speed equal to my walking speed, and can climb difficult surfaces at half" +
				"\n    speed without making an ability check.",
			speed: { climb: { spd: "walk", enc: "walk" } },
		},
		subclassfeature13: {
			name: "Close-Quarters Shooting",
			source: ["VSoS", 50],
			minlevel: 13,
			description:
				"\n    I, and friendly creatures within 15 feet of me, don't gain disadvantage on ranged attack rolls" +
				"\n    from being within 5 feet of a hostile creature.",
		},
		subclassfeature17: {
			name: "Scattershot",
			source: ["VSoS", 50],
			minlevel: 17,
			description:
				"\n    I can use my action to make a ranged weapon attack against each creature I choose within a" +
				"\n    15 ft cone, making a separate attack roll for each target. If I target only one creature in this" +
				"\n    cone, my attack deals one additional weapon damage die.",
			action: ["action", "Scattershot"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/scattershot/i.test(v.WeaponTextName) &&
							v.isRangedWeapon &&
							!v.isDC
						) {
							fields.Range = "15 ft cone";
							fields.Description +=
								(fields.Description ? "; " : "") +
								"1 atk per target; if only 1 target, +1 dmg die";
						}
					},
					'If the word "Scattershot" is included in a ranged weapon attack, it is treated as if it is using my Scattershot feature.',
				],
			},
		},
	},
});

// * Jolly Roger Captain subclass
AddSubClass("captain", "jolly roger", {
	regExpSearch: /\bjolly roger banner\b/i,
	subname: "Jolly Roger Banner",
	source: ["VSoS", 50],
	features: {
		subclassfeature3: {
			name: "Maneuver: Double Thrust",
			source: ["VSoS", 50],
			minlevel: 3,
			description: " I gain a new maneuver. See notes.",
			extraname: "Jolly Roger Banner Maneuver",
			action: ["bonus action", "Double Thrust"],
			"double thrust": {
				name: "Double Thrust",
				source: ["VSoS", 50],
				description:
					"\n    When I make an attack with a finesse weapon as part of the Attack Action on my turn, I can" +
					"\n    spend a battle die as a bonus action to make an additional attack with that weapon. I add the" +
					"\n    battle die, instead of my ability modifier, to the weapon's damage roll.",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "double thrust",
				},
			],
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (
							/double thrust/i.test(v.WeaponTextName) &&
							/finesse/i.test(fields.Description) &&
							!v.isDC &&
							v.isMeleeWeapon &&
							classes.known.captain.level > 2
						) {
							var lvl = classes.known.captain.level;
							var die =
								lvl < 10 ? "1d8" : lvl < 18 ? "1d10" : "1d12";
							(fields.Damage_Bonus = die),
								(v.theWea.abilitytodamage = false);
						}
					},
					'When the phrase "Double Thrust" is added to an attack, I add a battle die, instead of my ability modifier, to the damage roll.',
				],
			},
		},
		subclassfeature7: {
			name: "Tricky Footwork",
			source: ["VSoS", 50],
			minlevel: 7,
			description:
				"\n    When I hit a creature of my size or smaller with a melee attack on my turn, I can switch places" +
				"\n    with the target. This movement doesn't provoke opportunity attacks.",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"On hit vs crea my size or smaller, can switch w/ target";
						}
					},
				],
			},
		},
		subclassfeature13: {
			name: "Unfair Play",
			source: ["VSoS", 50],
			minlevel: 13,
			description:
				"\n    My cohort and I can use a bonus action to take the Hide, Use an Object action, or attempt to" +
				"\n    shove a creature. I have advantage on Strength (Athletics) checks to push another creature" +
				"\n    out of a waterborne vessel.",
			action: ["bonus action", "Unfair Play"],
			calcChanges: {
				companionCallback: [
					function (prefix, oCrea, bAdd, sCompType) {
						if (sCompType !== "cohort") return;
						var str =
							"\u25C6 Unfair Play: (bonus action) The cohort can take the Hide, Use an Object action, or attempt to shove a creature.";
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", str, true);
					},
				],
			},
		},
		subclassfeature17: {
			name: "All Hands On Deck",
			source: ["VSoS", 50],
			minlevel: 17,
			description:
				"\n    I can use my action on my turn to direct each friendly creature within 60 feet of me that can" +
				"\n    see me or hear me to use their reaction to take an action of my choice. This action cannot be" +
				"\n    the Attack, Cast a Spell, Dodge, or Use a Magic Item action.",
			action: ["action", "All Hands On Deck"],
		},
	},
});
