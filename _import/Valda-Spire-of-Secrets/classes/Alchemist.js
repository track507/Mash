if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// * Alchemist class
ClassList["alchemist"] = {
	name: "Alchemist",
	regExpSearch: /alchemist/i,
	source: ["VSoS", 28],
	primaryAbility: "Intelligence or Dexterity",
	prereqs: "Intelligence 13",
	die: 6,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5],
	saves: ["Dex", "Int"],
	abilitySave: 4,
	skillstxt: {
		primary:
			"Choose three from Arcana, History, Insight, Medicine, Nature, Perception, Sleight of Hand, Survival",
	},
	toolProfs: {
		primary: ["Alchemist's supplies", "herbalism kit"],
		secondary: ["Alchemist's supplies"],
	},
	armorProfs: {
		primary: [true, false, false, false],
		secondary: [true, false, false, false],
	},
	weaponProfs: {
		primary: [true, false, ["bombs"]],
		secondary: [false, false, ["bombs"]],
	},
	equipment:
		"Alchemist starting equipment: " +
		"\n \u2022 light crossbow and 20 bolts or any simple weapon;" +
		"\n \u2022 An explorer's pack or a scholar's pack;" +
		"\n \u2022 Alchemist's supplies;" +
		"\n \u2022 A vial of acid or a flask of alchemist's fire or a vial of basic poison;" +
		"\n \u2022 Leather armor and a dagger",
	subclasses: ["Field of Study", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features: {
		"natural philosopher": {
			name: "Natural Philosopher",
			source: ["VSoS", 28],
			minlevel: 1,
			description: desc([
				"I can add half my prof. bonus rounded up to any ability check to identify herbs, potions,",
				"poisons, or other alchemical substances, on top of any normal prof. bonus.",
			]),
		},
		bombs: {
			name: "Bombs",
			source: ["VSoS", 29],
			minlevel: 1,
			description: desc([
				"On short or long rest, create bombs with necessary materials that go inert after 24 hours.",
				"My bomb save DC is 8 + prof. bonus + my Int mod. Once per turn I can take the Use an",
				"Object action to prime and throw a bomb. This bomb can use Int mod for the damage roll.",
				"Primed bomb damage increases to 2d10 at 5th, 3d10 at 11th, and 4d10 at 17th.",
			]),
			weaponOptions: [
				{
					name: "Primed Bomb",
					regExpSearch: /primed bomb/i,
					source: ["VSoS", 29],
					baseWeapon: "bomb",
					damage: ["C", 10, "Fire"],
					tooltip:
						'Special: Once per turn, I can use the "Use an Object" action to prime and throw a bomb. When priming a bomb, I get to add my Intelligence modifier instead of my Dexterity to the bomb\'s damage roll.' +
						"\n   Additionally, I can use a bonus action to empty some of the bomb's explosive material to permanently remove the blast radius from this bomb, dealing damage only to the bomb's target.",
					selectNow: true,
				},
				{
					name: "Bomb (Alchemist)",
					regExpSearch: /bomb \(alchemist\)/i,
					source: ["VSoS", 29],
					baseWeapon: "bomb",
					description:
						"Finesse, special, Dex save or \u00BD dmg to all in 7.5 ft; See tool tip",
					tooltip:
						"   Special: When a bomb hits a target, it explodes in a 5-foot radius and is destroyed. The bomb can be thrown at an unoccupied space within its range. Each creature other than the target within the blast radius must succeed on an Intelligence saving throw, taking half the damage rolled on a failed save or no damage on a successful one.\n   Additionally, as a bonus action, you can empty some of the bomb's explosive material to permanently remove the blast radius from this bomb, dealing damage only to the bomb's target.",
					damage: ["C", 10, "Fire"],
					selectNow: true,
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/bomb/i.test(v.WeaponTextName)) {
							// * Proficient in all bombs
							// * This replaces the bombs normal Dex save to an Int save
							fields.Description = fields.Description.replace(
								/dc \d+ dex save/i,
								"Dex save"
							);
							fields.Description_Tooltip =
								fields.Description_Tooltip.replace(
									/on a DC 11 Dexterity/i,
									"an Intelligence"
								);
							fields.Proficiency = true;
							fields.Mod = 4;
						}
					},
				],
				atkCalc: [
					function (fields, v, output) {
						if (
							(/bomb/i.test(v.WeaponTextName) ||
								v.baseWeapon == "bomb") &&
							/\(?primed\)?/i.test(v.WeaponTextName)
						) {
							// * Only applies to primed bombs
							/*
							 * Since this only applies to primed bombs, abilitytodamage is set to true
							 * But we changed the ability to 4 and used dc true to show the Save DC of 8 + PB + Int mod
							 * So currently primed bombs are adding int mod to the damage instead of dex from the original
							 * We need to change it back to Dex if it is higher than Int
							 */
							var mod =
								What("Str Mod") > What("Dex Mod")
									? What("Str Mod")
									: What("Dex Mod");
							if (What("Int Mod") < mod) {
								output.extraDmg = Math.max(
									mod - What("Int Mod"),
									0
								);
							}
						}
						if (
							/bomb/i.test(v.WeaponTextName) &&
							!/\(?primed\)?/i.test(v.WeaponTextName) &&
							!v.theWea.excludeBombDamage
						) {
							// * Only applies to non-primed bombs that CAN do damage
							output.extraDmg =
								(What("Str Mod") > What("Dex Mod")
									? What("Str Mod")
									: What("Dex Mod")) - What("Int Mod");
						}
					},
					"When priming a bomb, I can add my Intelligence modifier instead of my Dexterity to the bomb's damage roll.",
				],
			},
			usages: "10 + 2\xD7 my alchemist level of Bombs per ",
			usagescalc: "event.value = 2 * classes.known.alchemist.level + 10;",
			recovery: "short rest",
			action: [
				["action", "Prime & Throw a Bomb"],
				["bonus action", "Remove Some of the Bomb's Material"],
			],
			extraLimitedFeatures: [
				{
					name: "Prime a Bomb",
					usages: 1,
					recovery: "Turn",
				},
			],
		},
		"bomb formulae": {
			name: "Bomb Formulae",
			source: [
				["VSoS", 29],
				["VSoS", 31],
			],
			minlevel: 2,
			additional: levels.map(function (n) {
				return n < 2
					? ""
					: (n < 5
							? "3"
							: n < 7
							? "4"
							: n < 9
							? "5"
							: n < 11
							? "6"
							: n < 13
							? "7"
							: n < 15
							? "8"
							: n < 17
							? "9"
							: n < 19
							? "10"
							: "11") + " bomb formulae known";
			}),
			description: desc([
				"I learn bomb formulae I can use once per turn to modify my bombs when I prime them.",
				'Use the "Choose Feature" button above to add Bomb Formulae to the notes pages.',
				"When I gain a level in this class, I can replace a bomb formula I know with another.",
			]),
			toNotesPage: [
				{
					name: "Known Bomb Formulae",
					source: ["VSoS", 29],
					note: [
						"I know these formulae and can apply them once per turn when I prime a bomb.",
						"Known Bomb formulae are written here as follows:\n" +
							"\u25C6Bomb Formula [Damage Die, Type - Saving Throw]",
						"Description of additional effects written here.",
					],
				},
			],
			extraname: "Bomb Formulae",
			extrachoices: [
				"Acid Bomb",
				"Bramble Bomb",
				"Cryo Bomb",
				"Holy Bomb",
				"Impact Bomb",
				"Incendiary Bomb",
				"Laughing Gas Bomb",
				"Lightning Bomb",
				"Nonlethal Bomb",
				"Oil Bomb",
				"Prismatic Bomb",
				"Psionic Bomb",
				"Quiet Bomb",
				"Seeking Bomb",
				"Smoke Bomb",
				"Sonic Bomb",
				"Stink Bomb",
				"Teleportation Bomb",
				"Thermobaric Bomb",
				"Withering Bomb",
			],
			extraTimes: levels.map(function (n) {
				return n < 2
					? 0
					: n < 5
					? 3
					: n < 7
					? 4
					: n < 9
					? 5
					: n < 11
					? 6
					: n < 13
					? 7
					: n < 15
					? 8
					: n < 17
					? 9
					: n < 19
					? 10
					: 11;
			}),
			"acid bomb": {
				name: "Acid Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Acid Bomb [d6 Acid - Dexterity]",
						note: "All affected take the same amount of damage again at the end of their next turn",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Acid Bomb",
						source: ["VSoS", 31],
						regExpSearch: /acid bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 4, "Acid"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bacid\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Crea(s) take same dmg at end of next turn";
							}
						},
						"When the word 'Acid' is added to the title one of my Bomb attacks, the attack is treated as one of my Acid Bombs.",
					],
				},
			},
			"bramble bomb": {
				name: "Bramble Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Bramble Bomb [No Damage - No Save]",
						note: "\nBlast radius becomes difficult terrain for 1 minute; prone creatures must Str save before it can move or stand",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Bramble Bomb",
						source: ["VSoS", 31],
						regExpSearch: /bramble bomb/i,
						baseWeapon: "bomb",
						ability: 0,
						abilitytodamage: false,
						excludeBombDamage: true,
						damage: ["", "", ""],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bbramble\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save or \u00BD dmg to all in 7\.5 ft/i,
									"Diff. terrain in 7.5 ft for 1 min, if prone on detonate, Str save to move or stand"
								);
							}
						},
						"When the word 'Bramble' is added to the title one of my Bomb attacks, the attack is treated as one of my Bramble Bombs.",
					],
				},
			},
			"cryo bomb": {
				name: "Cryo Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Cryo Bomb [d8 Cold - Constitution]",
						note: "\nAll affected get -10 ft move speed until the end of their next turn",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Cryo Bomb",
						source: ["VSoS", 31],
						regExpSearch: /cryo bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, "Cold"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bcryo\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save/i,
									"Con save"
								).replace(
									/dmg to all/i,
									"dmg and -10 ft speed to all"
								);
								fields.Description_Tooltip =
									fields.Description_Tooltip.replace(
										/an intelligence/i,
										"on a Constitution"
									);
							}
						},
						"When the word 'Cryo' is added to the title one of my Bomb attacks, the attack is treated as one of my Cryo Bombs.",
					],
				},
			},
			"holy bomb": {
				name: "Holy Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Holy Bomb [d8 Radiant - Dexterity]",
						note: "\nThis bomb's damage dice are d6s vs Celestials, or d12s vs Fiends/Undead",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Holy Bomb",
						source: ["VSoS", 31],
						regExpSearch: /holy bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 10, "Radiant"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bholy\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"d6 vs Celestials; d12 vs Fiends/Undead";
							}
						},
						"When the word 'Holy' is added to the title one of my Bomb attacks, the attack is treated as one of my Holy Bombs",
					],
				},
			},
			"impact bomb": {
				name: "Impact Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Impact Bomb [d8 Force - Dexterity]",
						note: "\nAll affected are pushed 5 feet away from the blast",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Impact Bomb",
						source: ["VSoS", 31],
						regExpSearch: /impact bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, "Force"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bimpact\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dmg to all/i,
									"dmg and pushed 5 ft away to all"
								);
							}
						},
						"When the word 'Impact' is added to the title one of my Bomb attacks, the attack is treated as one of my Impact Bombs.",
					],
				},
			},
			"incendiary bomb": {
				name: "Incendiary Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Incendiary Bomb [d6 Fire - Dexterity]",
						note:
							"\nUntil start of my next turn, creatures that end turn in blast radius take half damage." +
							" Flammable objects that aren't being worn or carried ignite",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Incendiary Bomb",
						source: ["VSoS", 32],
						regExpSearch: /incendiary bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 6, "Force"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bincendiary\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Crea(s) still in rad. next turn take \u00BD dmg";
							}
						},
						"When the word 'Incendiary' is added to the title one of my Bomb attacks, the attack is treated as one of my Incendiary Bombs.",
					],
				},
			},
			"laughing gas bomb": {
				name: "Laughing Gas Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Laughing Gas Bomb [d6 Poison - Constitution]",
						note: "\nAll affected fall prone and are immune to this effect for 24 hours",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Laughing Gas Bomb",
						source: ["VSoS", 32],
						regExpSearch: /laughing gas bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 6, "Poison"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\blaughing gas\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save/i,
									"Con save"
								).replace(
									/dmg to all/i,
									"dmg and fall prone to all"
								);
							}
						},
						"When the word 'Laughing Gas' is added to the title one of my Bomb attacks, the attack is treated as one of my Laughing Gas Bombs.",
					],
				},
			},
			"lightning bomb": {
				name: "Lightning Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Lightning Bomb [d8 Lightning - Dexterity]",
						note: "\nAll affected can't take reactions until the end of their next turn",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Lightning Bomb",
						source: ["VSoS", 32],
						regExpSearch: /lightning bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, "Lightning"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\blightning\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/in 7\.5 ft/i,
									"in 7.5 ft and no rea. til end of next turn"
								);
							}
						},
						"When the word 'Lightning' is added to the title one of my Bomb attacks, the attack is treated as one of my Lightning Bombs.",
					],
				},
			},
			"nonlethal bomb": {
				name: "Nonlethal Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Nonlethal Bomb [d8 Bludgeoning - Dexterity]",
						note: "\nBlast radius ignores 1/2 & 3/4 cover. Creatures dropped to 0 hp are K.O'd, stable.",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Nonlethal Bomb",
						source: ["VSoS", 32],
						regExpSearch: /nonlethal bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, "Bludgeoning"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bnonlethal\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Blast ignores all but full cover";
							}
						},
						"When the word 'Nonlethal' is added to the title one of my Bomb attacks, the attack is treated as one of my Nonlethal Bombs.",
					],
				},
			},
			"oil bomb": {
				name: "Oil Bomb Formula",
				description: " See notes",
				additional: levels.map(function (n) {
					return "Max oil damage: " + Math.ceil(n / 2) + "d6";
				}),
				toNotesPage: [
					{
						name: "Oil Bomb [d8 Bludgeoning - Dexterity]",
						note:
							"\nBlast radius coats creatures in oil. Oil can be removed with a gallon of water." +
							"\nThe next fire damage to coated creature deals +1d6 fire damage per damage die rolled. Extra fire damage dice added cannot exceed half my alchemist level, rounded up",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Oil Bomb",
						source: ["VSoS", 32],
						regExpSearch: /oil bomb/i,
						baseWeapon: "bomb",
						ability: 0,
						abilitytodamage: false,
						excludeBombDamage: true,
						damage: ["", "", ""],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\boil\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save or \u00BD dmg to all in 7\.5 ft/i,
									"Dex save or covered in oil to all in 7.5 ft"
								);
							}
						},
						"When the word 'Oil' is added to the title one of my Bomb attacks, the attack is treated as one of my Oil Bombs.",
					],
				},
			},
			"prismatic bomb": {
				name: "Prismatic Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Prismatic Bomb [d8 damage dice]",
						note:
							"\nDamage type and save ability are determined by rolling on the below tables." +
							"\nd6    Damage Type        d6    Saving Throw" +
							"\n1      Acid                      1-2    Dexterity" +
							"\n2      Cold                      3-4    Constitution" +
							"\n3      Fire                        5-6   Wisdom" +
							"\n4      Lightning" +
							"\n5      Poison" +
							"\n6      Radiant",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Prismatic Bomb",
						source: ["VSoS", 32],
						regExpSearch: /prismatic bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, ""],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bprismatic\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description =
									fields.Description.replace(
										/dex save/i,
										"Save"
									) +
									(fields.Description ? "; " : "") +
									"See Table for dmg & save type";
							}
						},
						"When the word 'Prismatic' is added to the title one of my Bomb attacks, the attack is treated as one of my Prismatic Bombs.",
					],
				},
			},
			"psionic bomb": {
				name: "Psionic Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Psionic Bomb [d6 Psychic - Wisdom]",
						note: "\nAll affected have disadv. on concentration saves until the end of their next turn, including against this bomb's damage.",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Psionic Bomb",
						source: ["VSoS", 33],
						regExpSearch: /psionic bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 6, "Psychic"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bpsionic\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save/i,
									"Wis save"
								).replace(
									/dmg to all/i,
									"dmg and disadv. on Conc. saves til end of next turn to all"
								);
							}
						},
						"When the word 'Psionic' is added to the title one of my Bomb attacks, the attack is treated as one of my Psionic Bombs.",
					],
				},
			},
			"quiet bomb": {
				name: "Quiet Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Quiet Bomb [d6 Fire - Dexterity]",
						note: "\nOnly audible out 10 ft, makes no light. Disadv. on ability checks to detect blast",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Quiet Bomb",
						source: ["VSoS", 33],
						regExpSearch: /quiet bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, "Fire"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bquiet\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Disadv. on ability checks to detect blast";
							}
						},
						"When the word 'Quiet' is added to the title one of my Bomb attacks, the attack is treated as one of my Quiet Bombs.",
					],
				},
			},
			"seeking bomb": {
				name: "Seeking Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Seeking Bomb [d6 Fire - Dexterity]",
						note: "\nRanged attack rolls with this bomb don't get disadv. when within 5 ft of a hostile",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Seeking Bomb",
						source: ["VSoS", 33],
						regExpSearch: /seeking bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 6, "Fire"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bseeking\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"No disadv. when within 5 ft of a hostile";
							}
						},
						"When the word 'Seeking' is added to the title one of my Bomb attacks, the attack is treated as one of my Seeking Bombs.",
					],
				},
			},
			"smoke bomb": {
				name: "Smoke Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Smoke Bomb [No Damage - No Save]",
						note: "\nFills a 10 ft rad. sphere with heavily-obscuring smoke that lasts (Int mod min 1) rounds. Wind speeds of at least 10 miles/hour disperses it. The smoke spreads around corners. Once thrown, I cannot throw another smoke bomb for 1 minute",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Smoke Bomb",
						source: ["VSoS", 33],
						regExpSearch: /smoke bomb/i,
						baseWeapon: "bomb",
						ability: 0,
						abilitytodamage: false,
						excludeBombDamage: true,
						damage: ["", "", ""],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bsmoke\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description =
									fields.Description.replace(
										/dex save or \u00BD dmg to all in 7\.5 ft/i,
										"Smoke fills 10 ft rad. sphere"
									) +
									(fields.Description ? "; " : "") +
									"Lasts " +
									Math.max(What("Int Mod"), 1) +
									" round(s)";
							}
						},
						"When the word 'Smoke' is added to the title one of my Bomb attacks, the attack is treated as one of my Sonic Bombs.",
					],
				},
			},
			"sonic bomb": {
				name: "Sonic Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Sonic Bomb [d6 Thunder - Constitution]",
						note: "\nCreatures affected by this bomb are deafened until the end of their next turn",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Sonic Bomb",
						source: ["VSoS", 33],
						regExpSearch: /sonic bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 6, "Thunder"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bsonic\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save/i,
									"Con save"
								).replace(
									/dmg to all/i,
									"dmg and deaf til end of next turn to all"
								);
							}
						},
						"When the word 'Sonic' is added to the title one of my Bomb attacks, the attack is treated as one of my Sonic Bombs.",
					],
				},
			},
			"stink bomb": {
				name: "Stink Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Stink Bomb [d8 Poison - Constitution]",
						note: "\nAffected have disadv. on ability checks they make until the end of their next turn",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Stink Bomb",
						source: ["VSoS", 33],
						regExpSearch: /stink bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, "Poison"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bstink\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save/i,
									"Con save"
								).replace(
									/dmg to all/i,
									"dmg and disadv. on ability checks til end of next turn to all"
								);
							}
						},
						"When the word 'Stink' is added to the title one of my Bomb attacks, the attack is treated as one of my Stink Bombs.",
					],
				},
			},
			"teleportation bomb": {
				name: "Teleportation Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Teleportation Bomb [No Damage - No Save]",
						note: "\nInstantly teleports me to where it explodes. Fails if it explodes over 30 ft away",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Teleportation Bomb",
						source: ["VSoS", 33],
						regExpSearch: /teleportation bomb/i,
						baseWeapon: "bomb",
						ability: 0,
						abilitytodamage: false,
						excludeBombDamage: true,
						damage: ["", "", ""],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bteleportation\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save or \u00BD dmg to all in 7\.5 ft/i,
									"Teleport to where it explodes"
								);
								fields.Range = "30 ft";
							}
						},
						"When the word 'Teleportation' is added to the title one of my Bomb attacks, the attack is treated as one of my Thermobaric Bombs.",
					],
				},
			},
			"thermobaric bomb": {
				name: "Thermobaric Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Thermobaric Bomb [d6 Fire - Dexterity]",
						note: "\nThis bomb's blast radius is 10 feet instead of 15 feet",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Thermobaric Bomb",
						source: ["VSoS", 33],
						regExpSearch: /thermobaric bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 6, "Fire"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bthermobaric\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/7\.5 ft/i,
									"10 ft"
								);
							}
						},
						"When the word 'Thermobaric' is added to the title one of my Bomb attacks, the attack is treated as one of my Thermobaric Bombs.",
					],
				},
			},
			"withering bomb": {
				name: "Withering Bomb Formula",
				description: " See notes",
				toNotesPage: [
					{
						name: "Withering Bomb [d8 Necrotic - Constitution]",
						note: "\nAll affected by this bomb cannot regain hit points until the end of their next turn",
						amendTo: "Known Bomb Formulae",
					},
				],
				weaponOptions: [
					{
						name: "Withering Bomb",
						source: ["VSoS", 33],
						regExpSearch: /withering bomb/i,
						baseWeapon: "bomb",
						damage: ["C", 8, "Necrotic"],
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bwithering\b/i.test(v.WeaponTextName) &&
								/\bbomb\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dex save/i,
									"Con save"
								).replace(
									/dmg to all/i,
									"dmg and can't regain HP til end of next turn to all"
								);
							}
						},
						"When the word 'Withering' is added to the title one of my Bomb attacks, the attack is treated as one of my Withering Bombs.",
					],
				},
			},
		},
		subclassfeature2: {
			name: "Field of Study",
			source: ["VSoS", 29],
			minlevel: 2,
			description:
				"\n    " + 'Choose a Field of Study in the "Class" field.',
		},
		reagent: {
			name: "Reagent",
			source: ["VSoS", 29],
			minlevel: 3,
			description: desc([
				"I gain a pool of Reagent dice. I can expend reagent dice to:",
				"\u2022 add them to the damage of a primed bomb (number added can't exceed proficiency bonus).",
				"\u2022 Spend 10 min to brew potions that use my bomb save DC & retain potency for 24 hours.",
				"1/LR after a short rest, I can regain spent reagent dice I didn't use to brew potions.",
			]),
			toNotesPage: [
				{
					name: "Reagent Potions Table",
					note: [
						"I can brew these potions by expending reagent dice, as long as I meet",
						"the Alchemist level requirement.",
						"Potion                                     Cost        Alchemist Level",
						"Potion of Climbing                 1 die           3rd",
						"Potion of Growth                    1 die           3rd",
						"Potion of Healing                    1 die           3rd",
						"Potion of Water Breathing      1 die           3rd",
						"Universal Solvent                    1 die           3rd",
						"Cure-All                                  2 dice          7th",
						"Potion of Greater Healing       2 dice          7th",
						"Potion of Heroism                   2 dice          7th",
						"Potion of Resistance               2 dice          7th",
						"Sovereign Glue (1 ounce)        2 dice          7th",
						"Potion of Dimunition               3 dice         14th",
						"Potion of Flying                       4 dice          14th",
						"Potion of Hill Giant Strength    4 dice         14th",
						"Potion of Invisibility                 4 dice          14th",
						"Potion of Superior Healing       4 dice         14th",
					],
					popupName: "Alchemist's Reagent Potions Table",
					amendTo: "Poisoner's Poisons Table",
				},
			],
			additional: levels.map(function (n) {
				return n + " reagent dice";
			}),
			extraLimitedFeatures: [
				{
					name: "Reagent Synthesis",
					usages: 1,
					recovery: "long rest",
				},
				{
					name: "Reagent Dice (d10)",
					usages: "Alchemist level",
					usagescalc:
						"event.value = classes.known.alchemist.level < 3 ? 0 : classes.known.alchemist.level;",
					recovery: "long rest",
				},
			],
		},
		discoveries: {
			name: "Discoveries",
			source: ["VSoS", 30],
			minlevel: 4,
			additional: levels.map(function (n) {
				return n < 4
					? ""
					: (n < 6
							? "2"
							: n < 9
							? "3"
							: n < 13
							? "4"
							: n < 17
							? "5"
							: "6") + " discoveries known";
			}),
			description: desc([
				'Choose discoveries to learn by clicking the "Choose Feature" button above.',
				"When I gain a level in this class, I may replace a discovery I know with another.",
			]),
			extraname: "Discoveries",
			extrachoices: [
				"Fire in The Hole (prereq: 9th level Alchemist)",
				"Advanced Poisoner (prereq: 13th level Venomsmith)",
				"Alchemy of Ascendancy (prereq: 17th level Alchemist)",
				"Alchemy of Influence (prereq: 13th level Alchemist)",
				"Alchemy of Transformation (prereq: 13th level Alchemist)",
				"Arcane Study",
				"Ballistics Research",
				"Battle Training",
				"Beguiling Haze (prereq: 13th level Amorist)",
				"Buffered Metabolism (prereq: 13th level Xenoalchemist)",
				"Clotting Agent",
				"Craft Homonculus",
				"Demolition Spree (prereq: 13th level Mad Bomber)",
				"Explosive Missile",
				"Fire Brand",
				"Fire Eater",
				"Fortified Serum (prereq: 13th level Apothecary)",
				"Grenadier",
				"Dynamo Charger (prereq: 13th level Dynamo Engineer)",
				"Hemoreagent (prereq: 17th level Alchemist)",
				"Lazarus Bolt (prereq: 9th level Alchemist)",
				"Magnified Blast (prereq: 17th level Alchemist)",
				"Ooze Cowboy (prereq: 13th level Ooze Rancher)",
				"Poisoner",
				"Precision Explosives",
				"Reactionary Gulp (prereq: 17th level Alchemist)",
				"Recycled Potions",
				"Syringe",
				"Tri-Mutation (prereq: 13th level Mutagenist)",
			],
			extraTimes: [
				0, 0, 0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
			],
			"advanced poisoner (prereq: 13th level venomsmith)": {
				name: "Advanced Poisoner",
				source: ["VSoS", 34],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf(
							"venomsmith"
						) !== -1
					);
				},
				description:
					"\n   " +
					"I can brew the poisons found on the notes page using reagent dice.",
				toNotesPage: [
					{
						name: "Advanced Poisons Table",
						note: [
							"I can brew these poisons by expending reagent dice.",
							"Poison                                 Cost",
							"Burnt Othur Fumes            3 dice",
							"Crawler Mucus                   3 dice,",
							"Drow Poison                      3 dice",
							"Pale Tinture                       4 dice",
							"Midnight Tears                  5 dice",
							"Wyvern Poison                  6 dice",
						],
						popupName: "Advanced Poisoner's Poisons Table",
						amendTo: "Reagent Potions Table",
					},
				],
			},
			"alchemy of ascendancy (prereq: 17th level alchemist)": {
				name: "Alchemy of Ascendancy",
				source: ["VSoS", 34],
				submenu: "[17th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 17;
				},
				description:
					"\n   " +
					"I can brew new potions found on the notes page using reagent dice.",
				toNotesPage: [
					{
						name: "Alchemy of Ascendancy Potions Table",
						note: [
							"I can brew these potions by expending reagent dice.",
							"Potion                                             Cost",
							"Necromantic Draught                    4 dice",
							"Oil of Etherealness                          4 dice,",
							"Potion of Speed                              4 dice",
							"Potion of Stone Giant Strength       4 dice",
						],
						amendTo: "Reagent Potions Table",
						popupName: "Alchemy of Ascendancy Potions Table",
					},
				],
			},
			"alchemy of influence (prereq: 13th level alchemist)": {
				name: "Alchemy of Influence",
				source: ["VSoS", 34],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 13;
				},
				description:
					"\n   " +
					"I can brew new potions found on the notes page using reagent dice.",
				toNotesPage: [
					{
						name: "Alchemy of Influence Potions Table",
						note: [
							"I can brew these potions by expending reagent dice.",
							"Potion                                             Cost",
							"Potion of Animal Friendship           1 die",
							"Philter of Love                                2 dice",
							"Potion of Clairvoyance                   3 dice",
							"Potion of Mind Reading                  3 dice",
						],
						amendTo: "Reagent Potions Table",
						popupName: "Alchemy of Influence Potions Table",
					},
				],
			},
			"alchemy of transformation (prereq: 13th level alchemist)": {
				name: "Alchemy of Transformation",
				source: ["VSoS", 34],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 13;
				},
				description:
					"\n   " +
					"I can brew new potions found on the notes page using reagent dice.",
				toNotesPage: [
					{
						name: "Alchemy of Transformation Potions Table",
						note: [
							"I can brew these potions by expending reagent dice.",
							"Potion                                    Cost",
							"Potion of Slipperiness            2 die",
							"Sandstone Solution               2 dice",
							"Aqua Fortis                            3 dice",
							"Chameleon Concoction         3 dice",
							"Potion of Gaseous Form        3 dice",
						],
						popupName: "Alchemy of Transformation Potions Table",
						amendTo: "Reagent Potions Table",
					},
				],
			},
			"arcane study": {
				name: "Arcane Study",
				source: ["VSoS", 34],
				description:
					"\n   I learn 3 wizard cantrips. Intelligence is my Spellcasting ability for these cantrips.",
				spellcastingBonus: [
					{
						name: "Arcane Study",
						spellcastingAbility: 4,
						class: ["wizard"],
						times: levels.map(function (n) {
							return n < 3 ? 0 : 3;
						}),
						level: [0, 0],
					},
				],
			},
			"ballistics research": {
				name: "Ballistics Research",
				source: ["VSoS", 34],
				description: " I learn 2 additional bomb formulae.",
				bonusClassExtrachoices: [
					{
						class: "alchemist",
						feature: "bomb formulae",
						bonus: 2,
					},
				],
			},
			"battle training": {
				name: "Battle Training",
				source: ["VSoS", 34],
				description:
					" I gain proficiency with martial weapons and shields.",
				weaponProfs: [true, true],
				armorProfs: [true, false, false, true],
			},
			"beguiling haze (prereq: 13th level amorist)": {
				name: "Beguiling Haze",
				source: ["VSoS", 34],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf("amorist") !==
							-1
					);
				},
				description:
					"\n   When I charm a creature, I can choose to place it in a dreamy state." +
					"\n   While charmed, it is nonhostile and acts as if it is charmed by everyone it sees equally.",
				usages: 1,
				recovery: "short rest",
			},
			"buffered metabolism (prereq: 13th level xenoalchemist)": {
				name: "Buffered Metabolism",
				source: ["VSoS", 35],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf(
							"xenoalchemist"
						) !== -1
					);
				},
				description:
					"\n   When I take damage, I can use my reaction and reagent dice (max prof. bonus)." +
					"\n   This reduces the amount of damage taken by the total rolled.",
				action: ["reaction", ""],
			},
			"clotting agent": {
				name: "Clotting Agent",
				source: ["VSoS", 35],
				description:
					" My hit point max is increased by my alchemist level.",
				calcChanges: {
					hp: function (totalHD) {
						return [
							classes.known.alchemist.level * 2 + What("Con Mod"),
							"\n + " +
								classes.known.alchemist.level +
								" \xD7 2 from the Clotting Agent (" +
								classes.known.alchemist.level * 2 +
								What("Con Mod") +
								")",
							true,
						];
					},
					hpForceRecalc: true,
				},
			},
			"craft homonculus": {
				name: "Craft Homunculus",
				source: ["VSoS", 35],
				description:
					'\n    With 8 hours of work, I can create a homunculus. Use the "Companion Options"' +
					"\n    menu on the companion page to select your homunculus.",
			},
			"demolition spree (prereq: 13th level mad bomber)": {
				name: "Demolition Spree",
				source: ["VSoS", 35],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf(
							"mad bomber"
						) !== -1
					);
				},
				description:
					"\n   When priming a bomb, I can throw bombs equal to the # of damage dice of the original" +
					"\n   bomb. Each bomb deals (1d10 + Int mod) damage, & can't target the same creature/space. I" +
					"\n   can spend reagent dice seperately on these bombs and can apply a bomb formula to only 1.",
				action: ["action", ""],
			},
			"explosive missile": {
				name: "Explosive Missile",
				source: ["VSoS", 35],
				description:
					"\n   As a bonus action, I can load a bomb (max 1) onto the head of a crossbow bolt." +
					"\n   This bolt deals primed bomb damage, but has no blast radius." +
					"\n   I can't fire a bomb bolt on the same turn I throw a bomb.",
				weaponOptions: [
					{
						name: "Explosive Missile (Primed)",
						source: ["VSoS", 33],
						regExpSearch: /explosive missile \(primed\)/i,
						baseWeapon: "bomb",
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/\bexplosive\b/i.test(v.WeaponTextName) &&
								/\bmissile\b/i.test(v.WeaponTextName)
							) {
								fields.Description = fields.Description.replace(
									/dmg to all in 7\.5 ft/i,
									"dmg"
								);
							}
						},
						"When the word 'Explosive' is added to the title one of my Bomb attacks, the attack is treated as one of my Explosive missile.",
					],
				},
				action: ["bonus action", ""],
			},
			"fire brand": {
				name: "Fire Brand",
				source: ["VSoS", 35],
				description:
					"\n   As a bonus action, until the end of my turn, one of my melee weapons deals an extra 1d6 fire" +
					"\n   damage on hit. This extra damage increases by 1d6 at 5th, 11th, and 17th level.",
				additional: levels.map(function (n) {
					return (
						(n < 5 ? "1" : n < 11 ? "2" : n < 17 ? "3" : "4") +
						"d6 additional fire damage"
					);
				}),
				action: ["bonus action", ""],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								v.isMeleeWeapon &&
								/fire\s*brand/i.test(v.WeaponTextName)
							) {
								var n = classes.known.alchemist.level;
								fields.Description +=
									"; +" +
									(n < 5
										? "1"
										: n < 11
										? "2"
										: n < 17
										? "3"
										: "4") +
									"d6 fire dmg";
							}
						},
						"If the phrase 'Fire Brand' is included in the title of a weapon attack, it is treated as a weapon coated in one of my bomb's contents, as per my Fire Brand discovery.",
					],
				},
			},
			"fire eater": {
				name: "Fire Eater",
				source: ["VSoS", 35],
				description:
					"\n   As an action, I can use a bomb to make each creature in a 15 ft cone from me Dex save vs my" +
					"\n   bomb save DC, taking primed bomb fire damage, or half on a success. When I use this ability," +
					"\n   I take 1d4 fire damage for each of my bomb's damage dice.",
				weaponOptions: [
					{
						name: "Fire Eater (Primed)",
						source: ["VSoS", 35],
						regExpSearch: /fire eater \(primed\)/i,
						baseWeapon: "bomb",
						range: "15 ft cone",
						description:
							"Finesse, special, \u00BD on Dex save, or full on fail; See tool tip; I take 1d4 fire dmg per dmg die",
					},
				],
			},
			"fire in the hole (prereq: 9th level alchemist)": {
				name: "Fire in The Hole",
				source: ["VSoS", 35],
				submenu: "[9th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 9;
				},
				description:
					"\n   My bomb save DC increases by half of my proficiency bonus, rounded down.",
				addMod: [
					{
						type: "dc",
						field: "Int",
						mod: "Prof/2",
						text: "My bomb save DC increases by half of my proficiency bonus, rounded down.",
					},
				],
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (
								type == "dc" &&
								spellcasters.indexOf("alchemist") !== -1
							)
								return Math.floor(
									Number(How("Proficiency Bonus") / 2)
								);
						},
						"My bomb save DC increases by half of my proficiency bonus, rounded down.",
						750,
					],
				},
			},
			"fortified serum (prereq: 13th level apothecary)": {
				name: "Fortified Serum",
				source: ["VSoS", 35],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf(
							"apothecary"
						) !== -1
					);
				},
				description:
					"\n   When a creature regains hit points by drinking my potions, they gain resistance to" +
					"\n   nonmagical bludgeoning/piercing/slashing damage until the end of their next turn",
			},
			grenadier: {
				name: "Grenadier",
				source: ["VSoS", 35],
				description:
					"\n   When I prime & throw a bomb, I can use my bonus action to make an attack with a weapon" +
					"\n   that isn't two handed.",
				action: ["bonus action", "Grenadier (Non Two-Handed)"],
			},
			"dynamo charger (prereq: 13th level dynamo engineer)": {
				name: "Dynamo Charger",
				source: ["VSoS", 35],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf(
							"dynamo engineer"
						) !== -1
					);
				},
				description:
					"\n   When I finish a short rest, I can regain 2 expended spell slots stored in dynamos." +
					"\n   I can configure these dynamos immediately.",
				usages: 1,
				recovery: "day",
			},
			"hemoreagent (prereq: 17th level alchemist)": {
				name: "Hemoreagent",
				source: ["VSoS", 36],
				submenu: "[17th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 17;
				},
				description:
					"\n   When I prime and throw a bomb, I can add 5 or fewer reagent die to the bomb's damage" +
					"\n   without expending them, losing 1d6 hp that can't be reduced/prevented for each die added.",
			},
			"lazarus bolt (prereq: 9th level alchemist)": {
				name: "Lazarus Bolt",
				source: ["VSoS", 36],
				submenu: "[9th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 9;
				},
				description:
					"\n   As an action, I can revive a creature that died within the last min within 5 feet of me. That" +
					"\n   creature regains 1 hp, unless they lack a heart, died of old age, or are missing vital organs.",
				usages: 1,
				recovery: "short rest",
				action: ["action", ""],
			},
			"magnified blast (prereq: 17th level alchemist)": {
				name: "Magnified Blast",
				source: ["VSoS", 36],
				submenu: "[17th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 17;
				},
				description:
					"\n   Whenever I add reagent dice to a bomb's damage, I can also expand the blast radius by 5 ft" +
					"\n   per 2 reagent dice spent.",
			},
			"ooze cowboy (prereq: 13th level ooze rancher)": {
				name: "Ooze Cowboy",
				source: ["VSoS", 36],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf(
							"ooze rancher"
						) !== -1
					);
				},
				description:
					"\n   Slimes I make have a minimum speed of 30 ft. I can ride any Medium or larger Ooze as a" +
					"\n   mount. My equipment and I suffer no ill effect from touching my Oozes. My Oozes add my" +
					"\n   proficiency bonus to their damage and initiative rolls.",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (
								!/ooze/i.test(
									oCrea.type +
										What(prefix + "Comp.Desc.MonsterType")
								)
							)
								return;
							Value(
								prefix + "Comp.Use.Combat.Init.Bonus",
								"oProf"
							);
							for (var i = 1; i < 3; ++i) {
								Value(
									prefix +
										"BlueText.Comp.Use.Attack." +
										i +
										".Damage Bonus",
									"oProf"
								);
							}
							Value(
								prefix + "Comp.Use.Speed",
								"30 ft,\nclimb 30 ft"
							);
						},
						"Oozes I create add my proficiency bonus to their damage and initiative rolls.",
					],
				},
			},
			poisoner: {
				name: "Poisoner",
				source: ["VSoS", 36],
				description:
					"\n   I gain proficiency with the poisoner's kit. I can also brew new poisons using my reagent dice." +
					"\n   My poisons also use my bomb save DC instead of their normal save DCs.",
				toolProfs: ["Poisoner's kit"],
				toNotesPage: [
					{
						name: "Poisoner's Poisons Table",
						note: [
							"I can brew these poisons by expending reagent dice.",
							"Poison                                 Cost",
							"2 x Antitoxin                        1 die",
							"2 x Basic Poison                   1 die,",
							"Oil of Taggit                        2 dice",
							"Potion of Poison                  2 dice",
							"Serpent Venom                    2 dice",
							"Truth Serum                         2 dice",
						],
						popupName: "Poisoner's Poisons Table",
						amendTo: "Reagent Potions Table",
					},
				],
			},
			"precision explosives": {
				name: "Precision Explosives",
				source: ["VSoS", 36],
				description:
					"\n   I can choose 1 creature in the blast radius other than the target to automatically" +
					"\n   succeed on its saving throw and take no damage from it.",
			},
			"reactionary gulp (prereq: 17th level alchemist)": {
				name: "Reactionary Gulp",
				source: ["VSoS", 36],
				submenu: "[17th Level]",
				prereqeval: function (v) {
					return classes.known.alchemist.level >= 17;
				},
				description:
					"\n   " +
					"Immediately after taking damage, I can use my reaction to drink a potion.",
				action: ["reaction", ""],
			},
			"recycled potions": {
				name: "Recycled Potions",
				source: ["VSoS", 36],
				description:
					"\n   When I brew potions, I can destroy previously brewed potions, regaining the reagent dice" +
					"\n   used to brew them. I can't gain more than my max number of reagent dice using this ability.",
			},
			syringe: {
				name: "Syringe",
				source: ["VSoS", 36],
				description:
					"\n   As a bonus action, I can inject a potion into myself or another creature within 5 feet of me," +
					"\n   granting the benefits of the potion. I must make a melee attack against unwilling creatures," +
					"\n   treating the syringe as a finesse weapon.",
				action: ["bonus action", "Syringe"],
				weaponOptions: [
					{
						name: "Syringe",
						source: ["VSoS", 36],
						regExpSearch: /\bsyringe\b/i,
						type: "Improvised Weapons",
						ability: 1,
						abilitytodamage: false,
						damage: [0, 0, ""],
						range: "Melee",
						description:
							"Finesse; on hit, administer potion or poison to target",
						list: "melee",
					},
				],
			},
			"tri-mutation (prereq: 13th level mutagenist)": {
				name: "Tri-Mutation",
				source: ["VSoS", 36],
				submenu: "[13th Level]",
				prereqeval: function (v) {
					return (
						classes.known.alchemist.level >= 13 &&
						classes.known.alchemist.subclass.indexOf(
							"mutagenist"
						) !== -1
					);
				},
				description:
					"\n   I can inject myself with a tri-mutagen, which grants me the benefit of all mutagens at once" +
					"\n   for 1 minute, or until I inject myself with a different mutagen.",
				usages: 1,
				recovery: "long rest",
			},
		},
		flashbang: {
			name: "Flashbang",
			source: ["VSoS", 30],
			minlevel: 5,
			description: desc([
				"As a bonus action, each large or smaller creature within 5 feet of me can't take reactions until",
				"the start of their next turn.",
			]),
			action: ["bonus action", ""],
		},
		evasion: {
			name: "Evasion",
			source: ["VSoS", 30],
			minlevel: 11,
			description: desc(
				"My Dexterity saves vs. areas of effect negate damage on success and halve it on failure"
			),
			savetxt: {
				text: [
					"Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg",
				],
			},
		},
		"blast coating": {
			name: "Blast Coating",
			source: ["VSoS", 30],
			minlevel: 15,
			description: desc(
				"I automatically succeed on saves against my own bombs and never take damage from them."
			),
			savetxt: {
				text: ["Saves vs. my own bombs"],
			},
		},
		"philosopher's stone": {
			name: "Philosopher's Stone",
			source: ["VSoS", 30],
			minlevel: 20,
			description: desc([
				"I can make a philosopher's stone using my alchemist's supplies, 1000 gp of materials, and",
				"7 days of work. I can only have 1 stone at a time. I also gain a new bomb formula. When I",
				'create the stone, select the Philosopher\'s Stone from the "Magic Item" dropdown menus.',
			]),
			toNotesPage: [
				{
					name: "Nuclear Bomb [10d10 Force - Dexterity]",
					note: "\nBlast radius is 1 mile, and destroys my philosopher's stone. Each creature in radius takes full bomb damage rolled, or half on a save. Creatures within 60 feet of the blast gain no benefit from Evasion or similar features",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Nuclear Bomb",
					source: ["VSoS", 30],
					regExpSearch: /nuclear bomb/i,
					baseWeapon: "bomb",
					ability: 0,
					range: "1 mile",
					damage: [10, 100, "Force"],
					ability: 0,
					abilitytodamage: false,
					excludeBombDamage: true,
					description:
						"Finesse, special, \u00BD on Dex save, or full on fail to all; Can't evade for Crea(s) in 60 ft",
					selectNow: true,
				},
			],
		},
	},
};

// * Alchemist Subclasses

// * Amorist Alchemist subclass
AddSubClass("alchemist", "amorist", {
	regExpSearch: /\bamorist\b/i,
	subname: "Amorist",
	source: ["VSoS", 37],
	fullname: "Amorist",
	skills: ["Deception", "Persuasion"],
	features: {
		subclassfeature2: {
			name: "Pheromone Bomb Formula",
			source: ["VSoS", 37],
			skills: ["Persuasion"],
			minlevel: 2,
			description: " I gain a new bomb formula. See notes",
			toNotesPage: [
				{
					name: "Pheromone Bomb Formula [No Damage - Wisdom]",
					note: "\nAll affected are charmed by me until the end of its next turn or it takes damage.",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Pheromone Bomb",
					source: ["VSoS", 37],
					regExpSearch: /\bpheromone\b/i,
					baseWeapon: "bomb",
					ability: 0,
					abilitytodamage: false,
					excludeBombDamage: true,
					damage: ["", "", ""],
					selectNow: true,
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bpheromone\b/i.test(v.WeaponTextName) &&
							/\bbomb\b/i.test(v.WeaponTextName)
						) {
							fields.Description = fields.Description.replace(
								/dex save or \u00BD dmg to all in 7\.5 ft/i,
								"Wis save to all in 7.5 ft or charmed til end of next turn or dmg taken"
							);
						}
					},
					"When the word 'Pheromone' is added to the title one of my Bomb attacks, the attack is treated as one of my Pheromone Bombs.",
				],
			},
		},
		subclassfeature6: {
			name: "Magnetic Personality",
			source: ["VSoS", 38],
			minlevel: 6,
			description: desc(
				"I can add my Int mod to Charisma ability checks."
			),
			addMod: [
				"Deception",
				"Intimidation",
				"Performance",
				"Persuasion",
			].map(function (skill) {
				return {
					type: "skill",
					field: skill,
					mod: "Int",
					text: "I add my Intelligence modifier to my Charisma checks",
				};
			}),
		},
		subclassfeature10: {
			name: "Alchemical Perfume",
			source: ["VSoS", 38],
			minlevel: 10,
			description: desc([
				"When a hostile creature within 5 ft of me makes an attack against me, it must succeed on a",
				"Wis save or gain disadv. on the attack roll. If a creature succeeds on this save, it is immune",
				"to this effect for 24 hours. Creatures that can't be charmed are immune to this effect.",
			]),
		},
		subclassfeature18: {
			name: "Alchemical Romance",
			source: ["VSoS", 38],
			minlevel: 18,
			description: desc([
				"During a long rest, I can spend 4 reagent dice to make a potion of true love. Select this ",
				'potion from the "Magic Item" dropdown menus.',
			]),
			magicitemsAdd: ["Potion of True Love"],
		},
	},
});

// Apothecary Alchemist subclass
AddSubClass("alchemist", "apothecary", {
	regExpSearch: /\bapothecary\b/i,
	subname: "Apothecary",
	source: ["VSoS", 38],
	fullname: "Apothecary",
	skills: ["Medicine"],
	features: {
		subclassfeature2: {
			name: "Painkiller Bomb Formula",
			source: ["VSoS", 38],
			minlevel: 2,
			description: desc("I gain a new bomb formula. See notes"),
			toNotesPage: [
				{
					name: "Painkiller Bomb Formula [No Damage - No Save]",
					note: "\nOn hit, instead of damage, the target gains temporary hp for 1 min equal to the damage roll. Willing creatures don't require an attack roll. Once thrown, I cannot throw another for 1 min.",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Painkiller Bomb",
					source: ["VSoS", 38],
					regExpSearch: /\bpainkiller\b/i,
					baseWeapon: "bomb",
					selectNow: true,
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bpainkiller\b/i.test(v.WeaponTextName) &&
							/\bbomb\b/i.test(v.WeaponTextName)
						) {
							fields.Description = fields.Description.replace(
								/dex save or \u00BD dmg to all in 7\.5 ft/i,
								"Target heals for dmg rolled"
							);
						}
					},
					"When the word 'Painkiller' is added to the title one of my Bomb attacks, the attack is treated as one of my Painkiller Bombs.",
				],
			},
		},
		subclassfeature6: {
			name: "Potion Toss",
			source: ["VSoS", 38],
			minlevel: 6,
			description: desc(
				"As an action, administer a potion to a willing/unconscious creature within 20 ft of me."
			),
			action: ["action", ""],
		},
		subclassfeature10: {
			name: "Self-Medication",
			source: ["VSoS", 38],
			minlevel: 10,
			description: desc(
				"When I drink a potion that restores hp, I gain adv. on saves until the end of my next turn."
			),
		},
		subclassfeature18: {
			name: "Alchemical Resurrection",
			source: ["VSoS", 38],
			minlevel: 18,
			description: desc([
				"If I mix 500 gp of diamond dust into a potion of superior/supreme healing, I create a potion",
				'of raise dead. Select this potion from the "Magic Item" dropdown menus.',
			]),
			magicitemsAdd: ["Potion of Raise Dead"],
		},
	},
});

// * Dynamo Engineer alchemist subclass
AddSubClass("alchemist", "dynamo engineer", {
	regExpSearch: /\bdynamo engineer\b/i,
	subname: "Dynamo Engineer",
	source: ["VSoS", 38],
	fullname: "Dynamo Engineer",
	spellcastingKnown: {
		cantrips: 0,
		spells: [0, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9],
	},
	spellcastingList: {
		class: "wizard",
		school: ["Evoc", "Trans"],
		level: [1, 4],
	},
	spellcastingAbility: 4,
	spellcastingFactor: "warlock1",
	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 4, 0, 0, 0, 0, 0, 0, 0],
		[0, 4, 0, 0, 0, 0, 0, 0, 0],
		[0, 4, 0, 0, 0, 0, 0, 0, 0],
		[0, 5, 0, 0, 0, 0, 0, 0, 0],
		[0, 5, 0, 0, 0, 0, 0, 0, 0],
		[0, 5, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 5, 0, 0, 0, 0, 0, 0],
		[0, 0, 5, 0, 0, 0, 0, 0, 0],
		[0, 0, 5, 0, 0, 0, 0, 0, 0],
		[0, 0, 6, 0, 0, 0, 0, 0, 0],
		[0, 0, 6, 0, 0, 0, 0, 0, 0],
		[0, 0, 6, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 7, 0, 0, 0, 0, 0],
		[0, 0, 0, 7, 0, 0, 0, 0, 0],
	],
	spellFirstColTitle: "DY",
	features: {
		subclassfeature2: {
			name: "Spectrum Analyzer",
			source: ["VSoS", 39],
			minlevel: 2,
			description: desc(
				"Once per short or long rest, I can cast detect magic at will."
			),
			spellcastingBonus: {
				spells: ["detect magic"],
				name: "Spectrum Analyzer",
				selection: ["detect magic"],
				firstCol: "oncesr",
				magicItemComponents: false,
			},
			action: ["action", ""],
			usages: 1,
			recovery: "short rest",
		},
		"subclassfeature2.1": {
			name: "Spellcasting",
			source: ["VSoS", 39],
			minlevel: 2,
			description: desc([
				"I have spell dynamos which each hold a wizard spell slot and 1 spell that I know. Int is my",
				"spellcasting ability. I use my bomb save DC for spell saves. Dynamo slots are spent when I",
				"cast the spell & regained on long rest. Switch the spells inside my dynamos on a short rest.",
			]),
			limfeaname: "Spell Dynamos",
			usages: levels.map(function (n) {
				n < 2
					? ""
					: n < 4
					? 2
					: n < 7
					? 3
					: n < 10
					? 4
					: n < 16
					? 5
					: n < 19
					? 6
					: 7;
			}),
			recovery: "short rest",
			additional: levels.map(function (n) {
				return n < 2
					? ""
					: (n < 4
							? "2"
							: n < 7
							? "3"
							: n < 10
							? "4"
							: n < 16
							? "5"
							: n < 19
							? "6"
							: "7") + " total spell dynamos";
			}),
			spellcastingBonus: {
				// the spells gained at level 2, 8, 14, 20
				name: "From any school",
				class: "wizard",
				times: [
					0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4,
				],
				level: [1, 4],
			},
			extraLimitedFeatures: [
				{
					name: "Spell Dynamos",
					usagescalc:
						"event.value = classes.known.alchemist.level < 2 ? 0 : classes.known.alchemist.level < 4 ? 2 : classes.known.alchemist.level < 7 ? 3 : classes.known.alchemist.level < 10 ? 4 : classes.known.alchemist.level < 16 ? 5 : classes.known.alchemist.level < 19 ? 6 : 7",
					recovery: "long rest",
				},
			],
		},
		subclassfeature6: {
			name: "Arcano Bomb Formula",
			source: ["VSoS", 39],
			minlevel: 6,
			description: " I gain a new bomb formula. See notes",
			toNotesPage: [
				{
					name: "Arcano Bomb Formula [d12 Force - Dexterity]",
					note: "\nI use a spell dynamo slot to prime this bomb. It deals 1 extra die of damage.",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Arcano Bomb (SS)",
					source: ["VSoS", 39],
					regExpSearch: /\barcano\b/i,
					baseWeapon: "bomb",
					damage: ["Q", 12, "Force"],
					selectNow: true,
				},
			],
		},
		subclassfeature10: {
			name: "Counter-Discharge",
			source: ["VSoS", 39],
			minlevel: 10,
			description: desc([
				"As a reaction to a creature I can see casting a spell that affects me, I can use a spell dynamo",
				"to gain adv. on the spell's saving throw & resistance to the spell's damage.",
			]),
			action: ["reaction", ""],
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature18: {
			name: "Arcane Recycler",
			source: ["VSoS", 40],
			minlevel: 18,
			description: desc(
				"When I miss with an arcano bomb, I reuse the spell slot, transferring it to an empty dynamo."
			),
		},
	},
});

// * Mad Bomber alchemist subclass
AddSubClass("alchemist", "mad bomber", {
	regExpSearch: /\bmad bomber\b/i,
	subname: "Mad Bomber",
	source: ["VSoS", 40],
	fullname: "Mad Bomber",
	features: {
		subclassfeature2: {
			name: "Blasting Specialty",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc(
				"My bombs deal double damage to objects and structures."
			),
		},
		"subclassfeature2.1": {
			name: "Shrapnel Bomb Formula",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc("I gain a new bomb formula. See notes."),
			toNotesPage: [
				{
					name: "Shrapnel Bomb Formula [d8 Piercing - Dexterity]",
					note: "\nThis bomb has a blast radius of 10 feet.",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Shrapnel Bomb",
					source: ["VSoS", 40],
					regExpSearch: /\bshrapnel\b/i,
					baseWeapon: "bomb",
					damage: ["C", 8, "Piercing"],
					selectNow: true,
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bshrapnel\b/i.test(v.WeaponTextName) &&
							/\bbomb\b/i.test(v.WeaponTextName)
						) {
							fields.Description =
								fields.Description.replace(
									/in 7\.5 ft/,
									"in 10 ft"
								) +
								(fields.Description ? "; " : "") +
								"\xD72 damage against obj/structures";
						}
					},
					"When the word 'Shrapnel' is added to the title one of my Bomb attacks, the attack is treated as one of my Shrapnel Bombs.",
				],
			},
		},
		subclassfeature6: {
			name: "Timed Demolition",
			source: ["VSoS", 40],
			minlevel: 6,
			description: desc([
				"When I prime and throw a bomb, I can delay the detonation a number rounds up to 1",
				"minute. A creature can only be affected by one bomb blast radius at a time.",
			]),
		},
		subclassfeature10: {
			name: "Blast Shield",
			source: ["VSoS", 40],
			minlevel: 10,
			description: desc([
				"I gain resistance to my choice of acid/cold/fire/lightning/thunder damage.",
				"I can change my selection when I finish a long rest.",
			]),
			choices: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
			acid: {
				name: "Acid Blast Shield",
				description: desc([
					"I gain resistance to acid damage.",
					"I can change my resistance to cold/fire/lightning/thunder when I finish a long rest.",
				]),
				dmgres: ["Acid"],
			},
			cold: {
				name: "Cold Blast Shield",
				description: desc([
					"I gain resistance to cold damage.",
					"I can change my resistance to acid/fire/lightning/thunder when I finish a long rest.",
				]),
				dmgres: ["Cold"],
			},
			fire: {
				name: "Fire Blast Shield",
				description: desc([
					"I gain resistance to fire damage.",
					"I can change my resistance to acid/cold/lightning/thunder when I finish a long rest.",
				]),
				dmgres: ["Fire"],
			},
			lightning: {
				name: "Lightning Blast Shield",
				description: desc([
					"I gain resistance to lightning damage.",
					"I can change my resistance to acid/cold/fire/thunder when I finish a long rest.",
				]),
				dmgres: ["Lightning"],
			},
			thunder: {
				name: "Thunder Blast Shield",
				description: desc([
					"I gain resistance to thunder damage.",
					"I can change my resistance to acid/cold/fire/lightning when I finish a long rest.",
				]),
				dmgres: ["Thunder"],
			},
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature18: {
			name: "Formula: Black Powder Bomb",
			source: ["VSoS", 40],
			minlevel: 18,
			description: desc("I gain a new bomb formula. See notes."),
			toNotesPage: [
				{
					name: "Black Powder Bomb Formula [d12 Fire - Dexterity]",
					note: "\nNo additional effects.",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Black Powder Bomb",
					source: ["VSoS", 40],
					regExpSearch: /\bblack powder\b/i,
					baseWeapon: "bomb",
					damage: ["C", 12, "Fire"],
					selectNow: true,
				},
			],
		},
	},
});

// * Mutagenist Subclass
AddSubClass("alchemist", "mutagenist", {
	regExpSearch: /\bmutagenist\b/i,
	subname: "Mutagenist",
	source: ["VSoS", 40],
	fullname: "Mutagenist",
	features: {
		subclassfeature2: {
			name: "Bonus Proficiencies",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc([
				"Gain a proficiency in either Acrobatics or Athletics, and shields.",
			]),
			skillstxt: "Choose either Acrobatics or Athletics",
			armorProfs: [true, false, false, true],
		},
		"subclassfeature2.1": {
			name: "Mutagen",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc([
				"As a bonus action, inject a mutagen, gaining its effects for one minute.",
				'When injecting, select "Mutagen" in the "Magic Items" section.',
			]),
			action: ["bonus action", "Inject Mutagen"],
		},
		subclassfeature6: {
			name: "Shared Mutagen",
			source: ["VSoS", 40],
			minlevel: 6,
			description: desc([
				"As an action, inject a willing creature with one mutagen. A creature can only be injected by",
				"one mutagen at a time, & I cannot inject another creature until the original mutagen ends.",
			]),
			action: ["action", "Share Mutagen"],
		},
		subclassfeature10: {
			name: "Advanced Mutation",
			source: ["VSoS", 41],
			minlevel: 10,
			description: desc([
				"When I inject myself with a mutagen, I can choose 1 of the following additional benefits:",
				'Hyperelastic, Mucilaginous, Polybrachia. Select "Advanced Mutagen" in "Magic Items" section.',
			]),
		},
		subclassfeature18: {
			name: "Mutated Blood",
			source: ["VSoS", 41],
			minlevel: 18,
			description:
				'\n   Choose Strength, Dexterity, or Constitution in the "Choose Feature" button.' +
				"\n   The chosen score increases by 2, and its maximum becomes 22.",
			choices: ["Strength", "Dexterity", "Constitution"],
			strength: {
				name: "Mutated Blood: Strength",
				description:
					"\n   My Strength score increases by 2, and my maximum Strength score increases to 22.",
				scoresMaximum: [22, 0, 0, 0, 0, 0],
				scores: [2, 0, 0, 0, 0, 0],
			},
			dexterity: {
				name: "Mutated Blood: Dexterity",
				description:
					"\n   My Dexterity score increases by 2, and my maximum Dexterity score increases to 22.",
				scoresMaximum: [0, 22, 0, 0, 0, 0],
				scores: [0, 2, 0, 0, 0, 0],
			},
			constitution: {
				name: "Mutated Blood: Constitution",
				description:
					"\n   My Constitution score increases by 2, and my maximum Constitution score increases to 22.",
				scoresMaximum: [0, 0, 22, 0, 0, 0],
				scores: [0, 0, 2, 0, 0, 0],
			},
		},
	},
});

// * Ooze Rancher alchemist subclass
AddSubClass("alchemist", "ooze rancher", {
	regExpSearch: /\booze rancher\b/i,
	subname: "Ooze Rancher",
	source: ["VSoS", 40],
	fullname: "Ooze Rancher",
	features: {
		subclassfeature2: {
			name: "Ooze Sympathy",
			source: ["VSoS", 41],
			minlevel: 2,
			description: desc([
				"Oozes attacking me must succeed a Wis save vs my bomb save DC or miss. On a",
				"success, the ooze is immune to this effect for 24 hours.",
			]),
		},
		"subclassfeature2.1": {
			name: "Slime Bomb Formula",
			source: ["VSoS", 41],
			minlevel: 2,
			description: " I gain a new bomb formula. See notes.",
			toNotesPage: [
				{
					name: "Slime Bomb Formula [No Damage - No Save]",
					note: "\nCoats all creatures in slime. Slime can be removed with a gallon of water or an action. Creatures coated in slime can't take the Dash or Disengage actions.",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Slime Bomb",
					source: ["VSoS", 41],
					regExpSearch: /slime bomb/i,
					baseWeapon: "bomb",
					ability: 0,
					abilitytodamage: false,
					excludeBombDamage: true,
					damage: ["", "", ""],
					selectNow: true,
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bslime\b/i.test(v.WeaponTextName) &&
							/\bbomb\b/i.test(v.WeaponTextName)
						) {
							fields.Description = fields.Description.replace(
								/dex save or \u00BD dmg to all/i,
								"Dex save or coat all in slime and no Dash/Disengage"
							);
						}
					},
				],
			},
		},
		subclassfeature6: {
			name: "Bottled Oozes",
			source: ["VSoS", 41],
			minlevel: 6,
			description: desc([
				"When I brew potions, I may spend 2 reagent die to create an ooze bottle. My Oozes use my",
				"Int mod + my prof. bonus for their attack rolls, and my bomb save DC for their save DCs.",
				"Ooze statistics can be found in the companion pages.",
			]),
			magicitemsAdd: ["Ooze Bottle"],
			creaturesAdd: ["Gray Ooze"],
			creatureOptions: [
				{
					name: "Gray Ooze",
					source: ["SRD", 338],
					size: 3,
					type: "Ooze",
					alignment: "unaligned",
					ac: 8,
					hp: 22,
					hd: [3, 8],
					speed: "10 ft, climb 10 ft",
					scores: [12, 6, 16, 1, 6, 2],
					damage_resistances: "acid, cold, fire",
					condition_immunities:
						"blinded, charmed, deafened, exhaustion, frightened, prone",
					senses: "blindsight 60 ft (blind beyond this radius)",
					passivePerception: 8,
					challengeRating: "1/2",
					proficiencyBonus: 2,
					attacksAction: 1,
					attacks: [
						{
							name: "Pseudopod",
							ability: 1,
							damage: [1, 6, "bludgeoning"],
							range: "Melee (5 ft)",
							description:
								"Deals +2d6 acid damage, permanent -1 AC cumulatively to nonmagical metal armors",
							modifiers: ["(oInt+oProf)-(Str+Prof)", ""],
							abilitytodamage: true,
							tooltip:
								"If the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
						},
					],
					skills: { Stealth: 2 },
					traits: [
						{
							name: "Amorphous",
							description:
								"The ooze can move through a space as narrow as 1 inch wide without squeezing.",
						},
						{
							name: "Corrode Metal",
							description:
								"Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round.",
						},
						{
							name: "False Appearance",
							description:
								"While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.",
						},
					],
					eval: function (prefix, lvl) {
						AddString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
					},
				},
			],
		},
		subclassfeature10: {
			name: "Liquid Anatomy",
			source: ["VSoS", 41],
			minlevel: 10,
			description:
				"\n   I can now move through any space as narrow as 1 inch wide without squeezing." +
				"\n   Equipment does not compress with me. Critical hits against me become normal hits.",
		},
		subclassfeature18: {
			name: "Ooze Jug",
			source: ["VSoS", 41],
			minlevel: 18,
			description: desc(
				"I have new options for creating an ooze bottle. May only have 1 ooze jug at a time. See notes."
			),
			toNotesPage: [
				{
					name: "Ooze Rancher's Oozes Table",
					note: [
						"I can brew these oozes by expending reagent dice.",
						"Ooze Type                                Cost",
						"Gray Ooze                               2 dice",
						"Ochre Jelly                              4 dice",
						"Gelatinous Cube                     8 dice",
						"Black Pudding                        10 dice",
					],
					amendTo: "Reagent Potions Table",
				},
			],
			creatureOptions: [
				{
					name: "Ochre Jelly",
					source: ["SRD", 146],
					size: 4,
					type: "Ooze",
					alignment: "unaligned",
					ac: 8,
					hp: 45,
					hd: [6, 10],
					speed: "10 ft, climb 10 ft",
					scores: [15, 6, 14, 2, 6, 1],
					damage_resistances: "acid",
					damage_immunities: "lightning, slashing",
					condition_immunities:
						"blinded, charmed, deafened, exhaustion, frightened, prone",
					senses: "blindsight 60 ft (blind beyond this radius)",
					passivePerception: 8,
					challengeRating: "2",
					proficiencyBonus: 2,
					attacksAction: 1,
					attacks: [
						{
							name: "Pseudopod",
							ability: 1,
							damage: [2, 6, "bludgeoning"],
							range: "Melee (5 ft)",
							description: "Deals +1d6 acid damage",
							modifiers: ["(oInt+oProf)-(Str+Prof)", ""],
							abilitytodamage: true,
						},
					],
					traits: [
						{
							name: "Amorphous",
							description:
								"The jelly can move through a space as narrow as 1 inch wide without squeezing.,",
						},
						{
							name: "Spider Climb",
							description:
								"The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
						},
					],
					actions: [
						{
							name: "Reaction: Split",
							description:
								"When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.",
						},
					],
					eval: function (prefix, lvl) {
						AddString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
					},
				},
				{
					name: "Gelatinous Cube",
					source: ["SRD", 337],
					size: 4,
					type: "Ooze",
					alignment: "unaligned",
					ac: 6,
					hp: 84,
					hd: [8, 10],
					speed: "15 ft",
					scores: [14, 3, 20, 1, 6, 1],
					condition_immunities:
						"blinded, charmed, deafened, exhaustion, frightened, prone",
					senses: "blindsight 60 ft (blind beyond this radius)",
					passivePerception: 8,
					challengeRating: "2",
					proficiencyBonus: 2,
					attacksAction: 1,
					attacks: [
						{
							name: "Pseudopod",
							ability: 1,
							damage: [3, 6, "acid"],
							range: "Melee (5 ft)",
							description: "",
							modifiers: ["(oInt+oProf)-(Str+Prof)", ""],
							abilitytodamage: false,
						},
					],
					traits: [
						{
							name: "Ooze Cube",
							description:
								"The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. Creatures inside the cube can be seen but have total cover. A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage. The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.",
						},
						{
							name: "Transparent",
							description:
								"Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.",
						},
					],
					eval: function (prefix, lvl) {
						AddString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
						AddString(
							prefix + "Cnote.Left",
							"\u25C6 Engulf: As an action, the cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a  Dexterity saving throw equal to its master's bomb save DC. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
						);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
						RemoveString(
							prefix + "Cnote.Left",
							"\u25C6 Engulf: As an action, the cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a Dexterity saving throw equal to its master's bomb save DC. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
						);
					},
				},
				{
					name: "Black Pudding",
					source: ["SRD", 337],
					size: 3,
					type: "Ooze",
					alignment: "unaligned",
					ac: 7,
					hp: 85,
					hd: [10, 10],
					speed: "20 ft, climb 20 ft",
					scores: [16, 5, 16, 1, 6, 1],
					damage_resistances: "acid, cold, lightning, slashing",
					condition_immunities:
						"blinded, charmed, deafened, exhaustion, frightened, prone",
					senses: "blindsight 60 ft (blind beyond this radius)",
					passivePerception: 8,
					challengeRating: "4",
					proficiencyBonus: 2,
					attacksAction: 1,
					attacks: [
						{
							name: "Pseudopod",
							ability: 1,
							damage: [1, 6, "bludgeoning"],
							range: "Melee (5 ft)",
							description:
								"Deals +4d8 acid damage, permanent -1 AC cumulatively to nonmagical metal armors",
							modifiers: ["(oInt+oProf)-(Str+Prof)", ""],
							abilitytodamage: true,
							tooltip:
								"If the target is wearing nonmagical metal armor, its armor is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
						},
					],
					skills: { Stealth: 2 },
					traits: [
						{
							name: "Corrosive Form",
							description:
								"A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
						},
					],
					actions: [
						{
							name: "Split",
							description:
								"When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original jelly.",
						},
					],
					features: [
						{
							name: "Spider Climb",
							description:
								"The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
						},
						{
							name: "Amorphous",
							description:
								"The pudding can move through a space as narrow as 1 inch wide without squeezing.",
						},
					],
					eval: function (prefix, lvl) {
						AddString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(
							prefix + "Cnote.Left",
							"\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour."
						);
					},
				},
			],
		},
	},
});

// * Venomsmith alchemist subclass
AddSubClass("alchemist", "venomsmith", {
	regExpSearch: /\bvenomsmith\b/i,
	subname: "Venomsmith",
	source: ["VSoS", 41],
	fullname: "Venomsmith",
	features: {
		subclassfeature2: {
			name: "Poisoner",
			source: ["VSoS", 42],
			minlevel: 2,
			limfeaname: "Reagent Dice (d10)",
			usages: levels.map(function (n) {
				return n < 3 ? 2 : 0;
			}),
			recovery: "long rest",
			limfeaAddToExisting: true,
			description: desc([
				"I gain the Poisoner discovery. I can't replace this discovery. Until 3rd level in this class, I gain 2",
				"reagent dice I can only brew poisons with. When I deal poison damage, I ignore resistance",
				"and I treat immunity as resistance.",
			]),
			"venomsmith poisoner": {
				name: "Poisoner",
				source: ["VSoS", 36],
				description:
					"\n    I gain proficiency with the poisoner's kit. I can also brew new poisons using my reagent dice." +
					"\n    My poisons also use my bomb save DC instead of their normal save DCs.",
				toolProfs: ["Poisoner's kit"],
				toNotesPage: [
					{
						name: "Poisoner's Poisons Table",
						note: [
							"I can brew these poisons by expending reagent dice.",
							"Poison                                 Cost",
							"2 x Antitoxin                        1 die",
							"2 x Basic Poison                   1 die,",
							"Oil of Taggit                        2 dice",
							"Potion of Poison                  2 dice",
							"Serpent Venom                    2 dice",
							"Truth Serum                         2 dice",
						],
						popupName: "Poisoner's Poisons Table",
						amendTo: "Reagent Potions Table",
					},
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "venomsmith poisoner",
				},
			],
		},
		"subclassfeature2.1": {
			name: "Venom Bomb Formula",
			source: ["VSoS", 42],
			minlevel: 2,
			description: " I gain a new bomb formula. See notes",
			toNotesPage: [
				{
					name: "Venom Bomb Formula [d8 Poison - Constitution]",
					note: "\nAll affected have disadv vs next Str/Dex/Con save before end of their next turn",
					amendTo: "Known Bomb Formulae",
				},
			],
			weaponOptions: [
				{
					name: "Venom Bomb",
					source: ["VSoS", 42],
					regExpSearch: /venom bomb/i,
					baseWeapon: "bomb",
					damage: ["C", 8, "Poison"],
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bvenom\b/i.test(v.WeaponTextName) &&
							/\bbomb\b/i.test(v.WeaponTextName)
						) {
							fields.Description = fields.Description.replace(
								/dex save/i,
								"Con save"
							).replace(
								/dmg to all/i,
								"dmg to all and disadv. on next Str/Dex/Con save til end of next turn"
							);
						}
					},
					"When the word 'Venom' is added to the title one of my Bomb attacks, the attack is treated as one of my Venom Bombs.",
				],
			},
		},
		subclassfeature6: {
			name: "Alchemical Assassin",
			source: ["VSoS", 42],
			minlevel: 6,
			description: desc([
				"Adv. on Dex (Sleight of Hand) checks to add ingested poison to food/drink, apply poison to a",
				"held weapon without being seen, or place a poison vial on a creature without them noticing.",
			]),
		},
		subclassfeature10: {
			name: "Mithridatism",
			source: ["VSoS", 42],
			minlevel: 10,
			description: desc(
				"I gain immunity to poison & the poisoned condition."
			),
			savetxt: {
				immune: ["poison", "poisoned condition"],
			},
		},
		subclassfeature18: {
			name: "Toxic Recompense",
			source: ["VSoS", 42],
			minlevel: 18,
			description: desc([
				"As a reaction to a creature within 5 ft hitting me with a melee attack, the creature makes a",
				"Con save vs my bomb save DC or is poisoned for 1 min, taking 1d10 poison damage &",
				"repeating the save at the start of each of its turns.",
			]),
			action: ["reaction", ""],
		},
	},
});

// * Xenoalchemist Subclass
AddSubClass("alchemist", "xenoalchemist", {
	regExpSearch: /\bxenoalchemist\b/i,
	subname: "Xenoalchemist",
	source: ["VSoS", 41],
	fullname: "Xenoalchemist",
	features: {
		subclassfeature2: {
			name: "Xenobiology",
			source: ["VSoS", 42],
			minlevel: 2,
			description: desc(
				"I have advantage on all ability checks I make to identify/research monsters."
			),
		},
		"subclassfeature2.1": {
			name: "Mad Scientist",
			source: ["VSoS", 42],
			minlevel: 2,
			description: desc([
				'Gain 2 monsterous grafts. Select grafts from the "Choose Feature" button. I don\'t lose hp or',
				"hit dice adding/removing grafts; I take no time for to recover after the attachment of a graft.",
			]),
			extraname: "Monsterous Grafts",
			extrachoices: [
				"Amphibious Adaptation (Donor: has Amphibious trait)",
				"Arcane Synapses (Donor: has Spellcasting/Innate Spellcasting)",
				"Beast's Hide (Donor: Large or larger Beast)",
				"Bestial Weapons (Arms) (Donor: Bst/Drgn/Mons with Claw attack)",
				"Bestial Weapons (Head) (Donor: Bst/Drgn/Mons with Bite attack)",
				"Charging Hooves (Donor: has Charge trait or Gore/Hooves attack)",
				"Climbing Apparatus (Donor: Bst/Humn/Mons with climb speed)",
				"Darkvision (Donor: has Darkvision)",
				"Doppel-Blooded (Donor: has shapechanger tag)",
				"Draconis Fundamentum (Donor: Drgn/Humn/Mons with a Breath Weapon)",
				"Dragon's Hide (Donor: Large or larger Dragon)",
				"Energetic Suture (Acid) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to acid damage)",
				"Energetic Suture (Cold) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to cold damage)",
				"Energetic Suture (Fire) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to fire damage)",
				"Energetic Suture (Lightning) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to lightning damage)",
				"Energetic Suture (Poison) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to poison damage)",
				"Energetic Suture (Thunder) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to thunder damage)",
				"Fiend's Hide (Donor: Medium or larger Fiend)",
				"Heart of Steel (Donor: Construct)",
				"Horns (Donor: has Gore/Horns/Ram/Tusk attack)",
				"Indiscernible Anatomy (Donor: Medium or larger Aberration)",
				"Leaping Legs (Donor: has the Pounce/Standing Leap trait)",
				"Olfactory Implants (Donor: has Keen Smell/Keen Hearing and Smell trait)",
				"Oversized Arms (Donor: Giant)",
				"Prehensile Tail (Donor: has a Tail attack)",
				"Regenerating Marrow (Donor: has the Regeneration trait)",
				"Replacement (Donor: any creature)",
				"Stench (Donor: has the Stench trait)",
				"Tentacles (Donor: has a Tentacles/Tendrils attack)",
				"Venom Sac (Donor: has a natural weapon/trait that deals poison/poisoned condition)",
				"Voice Box (Donor: has the Mimicry trait)",
				"Webspinner Apparatus (Donor: has a Web action)",
			],
			extraTimes: [
				0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
			],
			"amphibious adaptation (donor: has amphibious trait)": {
				name: "Amphibious Adaptation",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description:
					"\n   I can breathe both air and water. I gain a swim speed equal to my walking speed.",
				speed: {
					swim: { spd: "walk", enc: "walk" },
				},
			},
			"arcane synapses (donor: has spellcasting/innate spellcasting)": {
				name: "Arcane Synapses",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description:
					"\n   I learn 1 wizard cantrip of my choice. Int is my spellcasting ability for this cantrip." +
					"\n   I can harvest a second creature to learn 1 more wizard cantrip.",
				spellcastingBonus: [
					{
						name: "Arcane Synapses",
						firstCol: "atwill",
						times: levels.map(function (n) {
							return n < 2 ? 0 : 1;
						}),
						spellcastingAbility: 4,
						class: ["wizard"],
						level: [0, 0],
					},
				],
			},
			"beast's hide (donor: large or larger beast)": {
				name: "Beast's Hide",
				source: ["VSoS", 370],
				submenu: "[External Grafts]",
				description:
					"\n   My AC is 13 + Dex mod, if higher than the armor I am wearing. Shields may still apply.",
				armorAdd: "Beast's Hide",
				armorOptions: [
					{
						name: "Beast's Hide",
						source: ["VSoS", 370],
						regExpSearch: /\bbeast's hide\b/i,
						ac: "13",
						selectNow: true,
					},
				],
			},
			"bestial weapons (arms) (donor: bst/drgn/mons with claw attack)": {
				name: "Bestial Weapons (Arms)",
				source: ["VSoS", 370],
				submenu: "[Arms Grafts]",
				description: desc(
					"I gain claws I can use to make unarmed strikes: Finesse, 1d6+Str/Dex slashing damage."
				),
				weaponOptions: [
					{
						name: "Claws",
						source: ["VSoS", 370],
						regExpSearch: /\bclaws\b/i,
						type: "Natural",
						ability: 1,
						abilitytodamage: true,
						damage: [1, 6, "slashing"],
						range: "Melee",
						description: "Finesse",
						list: "melee",
						selectNow: true,
					},
				],
			},
			"bestial weapons (head) (donor: bst/drgn/mons with bite attack)": {
				name: "Bestial Weapons (Head)",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description:
					"\n   I gain teeth I can use to make unarmed strikes: Finesse, 1d6+Str/Dex piercing damage.",
				weaponOptions: [
					{
						name: "Teest",
						source: ["VSoS", 370],
						regExpSearch: /\bteeth\b/i,
						type: "Natural",
						ability: 1,
						abilitytodamage: true,
						damage: [1, 6, "slashing"],
						range: "Melee",
						description: "Finesse",
						list: "melee",
						selectNow: true,
					},
				],
			},
			"charging hooves (donor: has charge trait or gore/hooves attack)": {
				name: "Charging Hooves",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description:
					"\n   Once on each of my turns, if I move 15 ft in straight line, I can move +10 ft in that direction.",
			},
			"climbing apparatus (donor: bst/humn/mons with climb speed)": {
				name: "Climbing Apparatus",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description:
					"\n    I gain a climb speed equal to my walking speed.",
				speed: {
					climb: { spd: "walk", enc: "walk" },
				},
			},
			"darkvision (donor: has darkvision)": {
				name: "Darkvision",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: " I gain 60 ft darkvision.",
				vision: [["Darkvision", 60]],
			},
			"doppel-blooded (donor: has shapechanger tag)": {
				name: "Doppel-Blooded",
				source: ["VSoS", 370],
				submenu: "[Internal Grafts]",
				additional: "1 x long rest",
				description:
					"\n   I can transform my appearance for 1 hr. I can change my height, weight, face, voice, " +
					"\n   hair, & race. I cannot become a different size, and my basic shape remains.",
				extraLimitedFeatures: [
					{
						name: "Shape Change",
						usages: 1,
						recovery: "long rest",
					},
				],
			},
			"draconis fundamentum (donor: drgn/humn/mons with a breath weapon)":
				{
					name: "Draconis Fundamentum",
					source: ["VSoS", 371],
					submenu: "[Internal Grafts]",
					additional: "1 x short rest",
					description:
						"\n   As an action, each creature in a 15 ft cone makes a Dex save against 8+Con+Prof." +
						"\n   Each creature takes (Prof)d6 damage or half on save, same damage type as donor's.",
					weaponOptions: [
						{
							name: "Draconis Fundamentum",
							source: ["VSoS", 371],
							regExpSearch: /\bdraconis fundamentum\b/i,
							type: "Natural",
							ability: 3,
							abilitytodamage: false,
							damage: [1, 6, ""],
							range: "15 ft cone",
							description: "\u00BD on Dex save",
							dc: true,
						},
					],
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (
									/\bdraconis fundamentum\b/i.test(
										v.WeaponTextName
									)
								) {
									fields.Damage_Die =
										How("Proficiency Bonus") + "d6";
								}
							},
							"My Draconis Fundamentum attack deals 1d6 damage for each point of my proficiency bonus.",
						],
					},
					action: ["action", "Draconis Fundamentum"],
					extraLimitedFeatures: {
						name: "Draconis Fundamentum",
						usages: 1,
						recovery: "short rest",
					},
				},
			"dragon's hide (donor: large or larger dragon)": {
				name: "Dragon's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description:
					"\n   My AC is 17, if higher than the armor I am wearing. Shields may still apply." +
					"\n   I gain resistance to acid/cold/fire/lightning/poison damage if the" +
					"\n   donor was immune to it. I only gain resistance if I am proficient with" +
					"\n   heavy armor.",
				armorOptions: [
					{
						name: "Dragon's Hide",
						source: ["VSoS", 31],
						regExpSearch: /\bdragon's hide\b/i,
						dex: -10,
						ac: "17",
						selectNow: true,
					},
				],
			},
			"energetic suture (acid) (donor: clst/drgn/elem/fey/fnd with imm/res to acid damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: " I gain resistance to acid damage.",
					dmgres: ["Acid"],
				},
			"energetic suture (cold) (donor: clst/drgn/elem/fey/fnd with imm/res to cold damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: " I gain resistance to cold damage.",
					dmgres: ["Cold"],
				},
			"energetic suture (fire) (donor: clst/drgn/elem/fey/fnd with imm/res to fire damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: " I gain resistance to fire damage.",
					dmgres: ["Fire"],
				},
			"energetic suture (lightning) (donor: clst/drgn/elem/fey/fnd with imm/res to lightning damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: " I gain resistance to lightning damage.",
					dmgres: ["Lightning"],
				},
			"energetic suture (poison) (donor: clst/drgn/elem/fey/fnd with imm/res to poison damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: " I gain resistance to poison damage.",
					dmgres: ["Poison"],
				},
			"energetic suture (thunder) (donor: clst/drgn/elem/fey/fnd with imm/res to thunder damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: " I gain resistance to thunder damage.",
					dmgres: ["Thunder"],
				},
			"fiend's hide (donor: medium or larger fiend)": {
				name: "Fiend's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description:
					"\n   My AC is 15 + Dex (max 2) if higher than the armor I am wearing. Shields may still apply.",
				armorOptions: [
					{
						name: "Fiend's Hide",
						source: ["VSoS", 31],
						regExpSearch: /\bfiend's hide\b/i,
						dex: 2,
						ac: "15",
						selectNow: true,
					},
				],
			},
			"heart of steel (donor: construct)": {
				name: "Heart of Steel",
				source: ["VSoS", 371],
				submenu: "[Internal Grafts]",
				description:
					"\n    I may ignore the effects of 1 level of exhaustion & finish a long rest in 4 hours.",
				savetxt: {
					immune: ["1st level exhaustion"],
				},
			},
			"horns (donor: has gore/horns/ram/tusk attack)": {
				name: "Horns",
				source: ["VSoS", 372],
				submenu: "[Head Grafts]",
				description:
					"\n   I gain horns I can use to make unarmed strikes: 1d6+Str damage of same type as donor." +
					"\n   If I move in a straight line for 10 ft immediately before making a horn attack, I can force " +
					"\n   the target into a Strength contest to knock them prone.",
				weaponOptions: [
					{
						name: "Horns",
						source: ["VSoS", 372],
						regExpSearch: /\bHorns\b/i,
						type: "Natural",
						ability: 1,
						abilitytodamage: true,
						damage: [1, 6, "Bludgeoning"],
						range: "Melee",
						selectNow: true,
					},
				],
			},
			"indiscernible anatomy (donor: medium or larger aberration)": {
				name: "Indiscernible Anatomy",
				source: ["VSoS", 372],
				submenu: "[Internal Grafts]",
				description:
					"\n    Critical hits against me become normal hits.",
			},
			"leaping legs (donor: has the pounce/standing leap trait)": {
				name: "Leaping Legs",
				source: ["VSoS", 372],
				submenu: "[Legs Grafts]",
				description:
					"\n    My jump distance doubles. I can jump my full distance without a running start.",
			},
			"olfactory implants (donor: has keen smell/keen hearing and smell trait)":
				{
					name: "Olfactory Implants",
					source: ["VSoS", 372],
					submenu: "[Head Grafts]",
					description:
						"\n   I gain advantage on Wisdom (Perception) checks that rely on smell.",
					vision: [["Keen Smell", 0]],
				},
			"oversized arms (donor: giant)": {
				name: "Oversized Arms",
				source: ["VSoS", 372],
				submenu: "[Arms Grafts]",
				description: desc([
					"+5 ft Melee reach, unless the weapon used has Reach. If Small, I can use heavy weapons",
					"without penalty. I have adv. on Str checks and saves I make to maintain my grip on objects.",
				]),
				savetxt: {
					adv_vs: ["keeping grip on an object"],
				},
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								v.isMeleeWeapon &&
								/\d+\s?(ft|m)/i.test(fields.Range) &&
								!/reach/i.test(fields.Description)
							) {
								// * Checks for "Melee (x ft)"
								var rNum = fields.Range.match(/\d+\s?(ft|m)/i);
								var unit = rNum[2];
								var curRange = parseInt(rNum[1], 10);
								fields.Range = fields.Range.replace(
									/\d+\s?(ft|m)/i,
									curRange + 5 + " " + unit
								);
							}
							if (
								v.isMeleeWeapon &&
								!/\(\d+\s?(ft|m)\)/i.test(fields.Range) &&
								!/reach/i.test(fields.Description)
							) {
								fields.Range = "Melee (10 ft)";
								fields.Description +=
									(fields.Description ? "; " : "") + "Reach";
							}
						},
						"My melee reach increases by 5 ft, unless the weapon I am using has Reach.",
					],
				},
			},
			"prehensile tail (donor: has a tail attack)": {
				name: "Prehensile Tail",
				source: ["VSoS", 372],
				submenu: "[External Grafts]",
				description:
					"\n   I gain a tail I can use to make unarmed strikes: Finesse, 1d6+Str/Dex bludgeoning damage." +
					"\n   I can hold and manipulate objects with the tail, but it cannot use weapons/shields.",
				weaponOptions: [
					{
						name: "Tail",
						source: ["VSoS", 372],
						regExpSearch: /\btail\b/i,
						type: "Natural",
						ability: 1,
						abilitytodamage: true,
						damage: [1, 6, "Bludgeoning"],
						range: "Melee",
						description: "Finesse",
						selectNow: true,
					},
				],
			},
			"regenerating marrow (donor: has the regeneration trait)": {
				name: "Regenerating Marrow",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description:
					"\n    I can use a bonus action to regain hit points equal to 1d10 + Constitution modifier.",
				action: ["bonus action", ""],
				extraLimitedFeatures: [
					{
						name: "Regenerating Marrow",
						usages: 1,
						recovery: "short rest",
					},
				],
			},
			"replacement (donor: any creature)": {
				name: "Replacement",
				source: ["VSoS", 373],
				submenu: "[Any Grafts]",
				description: desc(
					"A replacement limb/organ functions identically. It takes up the most relevant body slot."
				),
			},
			"stench (donor: has the stench trait)": {
				name: "Stench",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description:
					"\n    As a bonus action, each creature within 10 ft of me must Con save, DC (8+Prof+Con)" +
					"\n    or be poisoned until the end of their next turn.",
				action: ["bonus action", ""],
				extraLimitedFeatures: [
					{
						name: "Stench",
						usages: 1,
						recovery: "short rest",
					},
				],
			},
			"tentacles (donor: has a tentacles/tendrils attack)": {
				name: "Tentacles",
				source: ["VSoS", 373],
				submenu: "[Arms Grafts]",
				description: desc([
					"I gain a tentacle I can use to make unarmed strikes: Finesse, 10 ft, 1d6+Str/Dex bludgeoning.",
					"When I hit with this attack, I may use my bonus action to attempt to grapple the target.",
				]),
				weaponOptions: [
					{
						name: "Tentacle",
						source: ["VSoS", 373],
						regExpSearch: /\btentacle\b/i,
						type: "Natural",
						ability: 1,
						abilitytodamage: true,
						damage: [1, 6, "Bludgeoning"],
						range: "Melee (10 ft)",
						description:
							"Finesse, Reach, on hit, may use bonus action to attempt a grapple on target",
						selectNow: true,
					},
				],
			},
			"venom sac (donor: has a natural weapon/trait that deals poison/poisoned condition)":
				{
					name: "Venom Sac",
					source: ["VSoS", 373],
					submenu: "[Internal Grafts]",
					additional: "1 x short rest",
					description:
						"\n    As a bonus action, I can coat a weapon in basic poison. the save DC = 8+Prof+Con mod.",
					action: ["bonus action", ""],
					extraLimitedFeatures: [
						{
							name: "Venom Sac",
							usages: 1,
							recovery: "short rest",
						},
					],
				},
			"voice box (donor: has the mimicry trait)": {
				name: "Voice Box",
				source: ["VSoS", 373],
				submenu: "[Head Grafts]",
				description:
					"\n   I can mimic any sound I have heard, including voices. Creatures can tell they are mimicries" +
					"\n   if they succeed on an Insight check contested by my Deception check.",
			},
			"webspinner apparatus (donor: has a web action)": {
				name: "Webspinner Apparatus",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description:
					"\n    I can cast the web spell without using a spell slot or components: DC 8+Prof+Con mod.",
				extraLimitedFeatures: [
					{
						name: "Webspinner Apparatus",
						usages: 1,
						recovery: "short rest",
					},
				],
				spellcastingBonus: [
					{
						spells: ["web"],
						name: "Webspinner Apparatus",
						selection: ["web"],
						firstCol: "oncesr",
						spellcastingAbility: 3,
						allowUpCasting: false,
					},
				],
			},
		},
		subclassfeature6: {
			name: "Surgical Attack",
			source: ["VSoS", 42],
			minlevel: 6,
			description: desc([
				"When I take the attack action/prime & throw a bomb, I can make an unarmed strike as part of",
				"that action, as long as I use a monsterous graft for the unarmed strike.",
			]),
		},
		subclassfeature10: {
			name: "Necromantic Organs",
			source: ["VSoS", 42],
			minlevel: 10,
			description: desc(
				"When I am reduced to 0 hit points but not killed, I can drop to 1 hit point instead."
			),
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature18: {
			name: "It's Alive!",
			source: ["VSoS", 42],
			minlevel: 18,
			description:
				"\n    I can create an alchemy golem with 8 hrs, a healer's kit, alchemist's supplies, a knife, and 3" +
				"\n    recently deceased Humanoid corpses. I can only have 1 golem at a time. See companion pg.",
			action: ["bonus action", "Command Alchemy Golem"],
			creaturesAdd: [["Alchemy Golem", true]],
			creatureOptions: [
				{
					name: "Alchemy Golem",
					source: ["VSoS", 43],
					size: 3,
					type: "Construct",
					alignment: "unaligned",
					ac: 13,
					hp: 76,
					hd: [9, 8],
					speed: "30 ft",
					scores: [17, 9, 18, 6, 10, 5],
					damage_resistances:
						"bludgeoning, piercing and slashing from nonmagical attacks that aren't adamantine",
					damage_immunities: "lightning",
					condition_immunities:
						"charm, exhaustion, fright, paralysis, petrify, poison",
					proficiencyBonus: 3,
					languages: "same as creator (can't speak)",
					senses: "Darkvision 60 ft",
					passivePerception: 13,
					challengeRating: "5",
					proficiencyBonus: 3,
					attacksAction: 2,
					attacks: [
						{
							name: "Slam",
							ability: 1,
							damage: [2, 8, "Bludgeoning"],
							range: "Melee (5 ft)",
							abilitytodamage: true,
							description: "Counts as magical",
						},
						{
							name: "Bestial Weapon: Claws",
							ability: 1,
							damage: [2, 6, "Slashing"],
							range: "Melee (5 ft)",
							abilitytodamage: false,
							modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
							description: "Counts as magical",
						},
						{
							name: "Bestial Weapon: Teeth",
							ability: 1,
							damage: [2, 6, "Piercing"],
							range: "Melee (5 ft)",
							abilitytodamage: false,
							modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
							description: "Counts as magical",
						},
						{
							name: "Draconis Fundamentum",
							ability: 3,
							damage: [6, 6, ""],
							range: "15 ft cone",
							abilitytodamage: false,
							dc: true,
							modifiers: ["", "5"],
							tooltip:
								"Each creature in a 15-foot cone must make a Dexterity saving throw (DC equals 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes 1d6 damage for each point of your proficiency bonus, or half as much damage on a successful one. The breath weapon's damage type is the same as the donor's breath weapon. Once you use this ability, you can't use it again until you finish a short or long rest.",
							description: "Dex save, save halves damage",
						},
						{
							name: "Horns",
							ability: 1,
							damage: [2, 6, "Bludgeoning"],
							range: "Melee (5 ft)",
							abilitytodamage: false,
							modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
							description:
								"Counts as magical; if moved 10 ft in a straight line before attacking, may attempt to knock prone",
							tooltip:
								"Horns are a natural weapon that you can use to make unarmed strikes. If you move in a straight line for 10 feet immediately before hitting a creature with your horns, that creature must make a Strength check contested by your Strength check. If you succeed, the creature is knocked prone.",
						},
						{
							name: "Horns",
							ability: 1,
							damage: [2, 6, "Bludgeoning"],
							range: "Melee (5 ft)",
							abilitytodamage: false,
							modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
							description:
								"Counts as magical; if moved 10 ft in a straight line, may STR contest to knock prone",
						},
						{
							name: "Prehensile Tail",
							ability: 1,
							damage: [2, 6, "Bludgeoning"],
							range: "Melee (5 ft)",
							abilitytodamage: false,
							modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
							description: "Counts as magical",
						},
						{
							name: "Tentacles",
							ability: 1,
							damage: [2, 6, "Bludgeoning"],
							range: "Melee (10 ft)",
							abilitytodamage: false,
							modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
							description:
								"Finesse, Reach; Counts as magical; may use bonus action to attempt grapple",
						},
					],
					traits: [
						{
							name: "Aversion to Fire",
							description:
								"If the golem takes fire damage, it has disadv. on ability checks and attack rolls until the end of its next turn.",
						},
						{
							name: "Immutable Form",
							description:
								"The golem is immune to any spell or effect that would alter its form.",
						},
						{
							name: "Lightning Absorption",
							description:
								"Whenever the golem is subjected to lightning damage, it instead regains hitpoints equal to half the lightning damage dealt.",
						},
						{
							name: "Magic Resistance",
							description:
								"The golem has advantage on saves vs spells and other magical effects.",
						},
						{
							name: "Multiattack",
							description:
								"The golem can make two melee weapon attacks",
						},
					],
					commoneval: function (prefix, oCrea, bAdd) {
						var aFnc = bAdd ? AddString : RemoveString;
						for (var i = 1; i <= 3; i++) {
							// * The base field name
							var baseField = prefix + "Comp.Use.Attack." + i;

							// * Range and Description as fields
							var range = baseField + ".Range";
							var description = baseField + ".Description";

							// * Range and Description as strings
							var strRange = What(range);
							var strDescription = What(description);

							if (
								/^\d+\s?(ft|m)/i.test(strRange) &&
								/melee/i.test(strRange) &&
								!/reach/.test(strDescription)
							) {
								var rNum = strRange.match(/\d+\s?(ft|m)/i);
								var unit = rNum[1];
								var curRange = parseInt(rNum[0], 10);

								Value(
									range,
									strRange.replace(
										/\d+\s?(ft|m)/i,
										curRange + 5 + " " + unit
									)
								);
								AddString(description, "Reach", "; ");
							}
							if (
								!/^\d+\s?(ft|m)/i.test(strRange) &&
								/melee/i.test(strRange) &&
								!/reach/.test(strDescription)
							) {
								Value(range, "Melee (10 ft)");
								AddString(description, "Reach", "; ");
							}
						}
					},
					commonremoveeval: function (prefix, oCrea, bAdd) {
						for (var i = 1; i <= 3; i++) {
							// * The base field name
							var baseField = prefix + "Comp.Use.Attack." + i;

							// * Range and Description as fields
							var range = baseField + ".Range";
							var description = baseField + ".Description";

							// * Range and Description as strings
							var strRange = What(range);
							var strDescription = What(description);

							if (
								/\d+\s?(ft|m)/i.test(strRange) &&
								/melee/i.test(strRange) &&
								!/tentacles?/i.test(
									What(baseField + ".Weapon Selection")
								)
							) {
								var rNum = strRange.match(/\d+\s?(ft|m)/i);
								var unit = rNum[1];
								var curRange = parseInt(rNum[0], 10);

								Value(
									range,
									strRange.replace(
										/\d+\s?(ft|m)/i,
										Math.max(curRange - 5, 5) + " " + unit
									)
								);
								Value(
									description,
									strDescription.replace(/(,|;)? ?reach/i, "")
								);
							}
						}
					},
					eval: function (prefix, lvl) {
						AddString(
							prefix + "Cnote.Left",
							"\u25C6 It's Alive!: The golem acts independently on its own turn, but always obeys your commands. On each of your turns, you can use a bonus action to mentally command the golem if it is within 60 feet of you. You decide what actions the golem will take and where it will move during its next turn, or you can issue a general command. If you issue no commands, the golem only defends itself against hostile creatures. Once given an order, the golem continues to follow it until its task its complete. The golem can use your Intelligence modifier + your proficiency bonus for its attack rolls. If the golem drops to 0 hit points, it dies. You can restore the golem's hit points and reanimate it over the course of a long rest."
						);
						AddString(
							prefix + "Cnote.Left",
							"\n\u25C6 Monsterous Grafts: The golem may have up to three Monstrous Grafts attached to it by its creator. The golem's weapon attacks, including monsterous grafts added by its creator, are magical. Monsterous grafts have a +6 attack bonus, deal twice the normal number of damage dice, and have a +5 bonus to their damage rolls. The golem can only have 1 graft in each slot."
						);
						Value(
							prefix + "Comp.Use.Attack.2.Weapon Selection",
							""
						);
						Value(
							prefix + "Comp.Use.Attack.3.Weapon Selection",
							""
						);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(
							prefix + "Cnote.Left",
							"\u25C6 It's Alive!: The golem acts independently on its own turn, but always obeys your commands. On each of your turns, you can use a bonus action to mentally command the golem if it is within 60 feet of you. You decide what actions the golem will take and where it will move during its next turn, or you can issue a general command. If you issue no commands, the golem only defends itself against hostile creatures. Once given an order, the golem continues to follow it until its task its complete. The golem can use your Intelligence modifier + your proficiency bonus for its attack rolls. If the golem drops to 0 hit points, it dies. You can restore the golem's hit points and reanimate it over the course of a long rest."
						);
						RemoveString(
							prefix + "Cnote.Left",
							"\n\u25C6 Monsterous Grafts: The golem may have up to three Monstrous Grafts attached to it by its creator. The golem's weapon attacks, including monsterous grafts added by its creator, are magical. Monsterous grafts have a +6 attack bonus, deal twice the normal number of damage dice, and have a +5 bonus to their damage rolls. The golem can only have 1 graft in each slot."
						);
					},
				},
			],
			extraname: "Golem's Monsterous Grafts",
			extrachoices: [
				"Amphibious Adaptation (Donor: has Amphibious trait)",
				"Arcane Synapses (Donor: has Spellcasting/Innate Spellcasting)",
				"Beast's Hide (Donor: Large or larger Beast)",
				"Bestial Weapons (Arms) (Donor: Bst/Drgn/Mons with Claw attack)",
				"Bestial Weapons (Head) (Donor: Bst/Drgn/Mons with Bite attack)",
				"Charging Hooves (Donor: has Charge trait or Gore/Hooves attack)",
				"Climbing Apparatus (Donor: Bst/Humn/Mons with climb speed)",
				"Doppel-Blooded (Donor: has shapechanger tag)",
				"Draconis Fundamentum (Donor: Drgn/Humn/Mons with a Breath Weapon)",
				"Dragon's Hide (Donor: Large or larger Dragon)",
				"Energetic Suture (Acid) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to acid damage)",
				"Energetic Suture (Cold) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to cold damage)",
				"Energetic Suture (Fire) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to fire damage)",
				"Energetic Suture (Poison) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to poison damage)",
				"Energetic Suture (Thunder) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to thunder damage)",
				"Fiend's Hide (Donor: Medium or larger Fiend)",
				"Heart of Steel (Donor: Construct)",
				"Horns (Donor: has Gore/Horns/Ram/Tusk attack)",
				"Indiscernible Anatomy (Donor: Medium or larger Aberration)",
				"Leaping Legs (Donor: has the Pounce/Standing Leap trait)",
				"Olfactory Implants (Donor: has Keen Smell/Keen Hearing and Smell trait)",
				"Oversized Arms (Donor: Giant)",
				"Prehensile Tail (Donor: has a Tail attack)",
				"Regenerating Marrow (Donor: has the Regeneration trait)",
				"Replacement (Donor: any creature)",
				"Stench (Donor: has the Stench trait)",
				"Tentacles (Donor: has a Tentacles/Tendrils attack)",
				"Venom Sac (Donor: has a natural weapon/trait that deals poison/poisoned condition)",
				"Voice Box (Donor: has the Mimicry trait)",
				"Webspinner Apparatus (Donor: has a Web action)",
			],
			extraTimes: [
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3,
			],
			"amphibious adaptation (donor: has amphibious trait)": {
				name: "Amphibious Adaptation",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Amphibious Adaptation: The golem can breathe both air and water."
							);
							aFnc(prefix + "Comp.Use.Speed", ",\nswim 30 ft");
						},
						"My alchemy golem gains the Monsterous Graft: Amphibious Adaptation.",
					],
				},
			},
			"arcane synapses (donor: has spellcasting/innate spellcasting)": {
				name: "Arcane Synapses",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Arcane Synapses: The golem knows 1 wizard cantrip. If a second creature is harvested and grafted, it knows 2 wizard cantrips."
							);
						},
						"My alchemy golem gains the Monsterous Graft: Arcane Synapses.",
					],
				},
				spellcastingBonus: [
					{
						name: "Arcane Synapses (Golem)",
						firstCol: "AG",
						times: 2,
						spellcastingAbility: 4,
						class: ["wizard"],
						level: [0, 0],
					},
				],
			},
			"beast's hide (donor: large or larger beast)": {
				name: "Beast's Hide",
				source: ["VSoS", 370],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) Value(prefix + "Comp.Use.AC", "13+Dex");
							else Value(prefix + "Comp.Use.AC", "14+Dex");
						},
						"My alchemy golem's AC is equal to 13 + its Dexterity Modifier, if its worn armor isn't higher. It may benefit from a shield.",
					],
				},
			},
			"bestial weapons (arms) (donor: bst/drgn/mons with claw attack)": {
				name: "Bestial Weapons (Arms)",
				source: ["VSoS", 370],
				submenu: "[Arms Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) {
								AddWeapon("Bestial Weapon: Claws", "", prefix);
								if (
									GetFeatureChoice(
										"classes",
										"alchemist",
										"subclassfeature18",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									ClassSubList[
										"alchemist-xenoalchemist"
									].features[
										"subclassfeature18"
									].creatureOptions[0].commoneval(
										prefix,
										oCrea,
										bAdd
									);
								}
							} else {
								for (i = 1; i < 3; ++i) {
									if (
										/bestial weapon: claws/i.test(
											What(
												prefix +
													"Comp.Use.Attack." +
													i +
													".Weapon Selection"
											)
										)
									)
										Value(
											prefix +
												"Comp.Use.Attack." +
												i +
												".Weapon Selection",
											""
										);
								}
							}
						},
						"My alchemy golem gains the Monsterous Graft: Bestial Weapons (Arms).",
						900,
					],
				},
			},
			"bestial weapons (head) (donor: bst/drgn/mons with bite attack)": {
				name: "Bestial Weapons (Head)",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) {
								AddWeapon("Bestial Weapon: Teeth", "", prefix);
								if (
									GetFeatureChoice(
										"classes",
										"alchemist",
										"subclassfeature18",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									ClassSubList[
										"alchemist-xenoalchemist"
									].features[
										"subclassfeature18"
									].creatureOptions[0].commoneval(
										prefix,
										oCrea,
										bAdd
									);
								}
							} else {
								for (i = 1; i < 3; ++i) {
									if (
										/bestial weapon: teeth/i.test(
											What(
												prefix +
													"Comp.Use.Attack." +
													i +
													".Weapon Selection"
											)
										)
									)
										Value(
											prefix +
												"Comp.Use.Attack." +
												i +
												".Weapon Selection",
											""
										);
								}
							}
						},
						"My alchemy golem gains the Monsterous Graft: Bestial Weapons (Head).",
						900,
					],
				},
			},
			"charging hooves (donor: has charge trait or gore/hooves attack)": {
				name: "Charging Hooves",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Charging Hooves: Once on each of its turns, if the golem moves 15 ft in straight line, it can move +10 ft in that direction"
							);
						},
					],
				},
			},
			"climbing apparatus (donor: bst/humn/mons with climb speed)": {
				name: "Climbing Apparatus",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(prefix + "Comp.Use.Speed", ",\nclimb 30 ft");
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Climbing Apparatus: The golem gains a climb speed equal to its walking speed."
							);
						},
					],
				},
			},
			"doppel-blooded (donor: has shapechanger tag)": {
				name: "Doppel-Blooded",
				source: ["VSoS", 370],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Doppel-Blooded: Once per long rest, The golem can transform its appearance for 1 hr. it can change its height, weight, face, voice, hair, & race. It cannot become a different size, and its basic shape remains."
							);
						},
					],
				},
			},
			"draconis fundamentum (donor: drgn/humn/mons with a breath weapon)":
				{
					name: "Draconis Fundamentum",
					source: ["VSoS", 371],
					submenu: "[Internal Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								if (bAdd) {
									AddWeapon(
										"Draconis Fundamentum",
										"",
										prefix
									);
									if (
										GetFeatureChoice(
											"classes",
											"alchemist",
											"subclassfeature18",
											true
										).indexOf(
											"oversized arms (donor: giant)"
										) !== -1
									) {
										ClassSubList[
											"alchemist-xenoalchemist"
										].features[
											"subclassfeature18"
										].creatureOptions[0].commoneval(
											prefix,
											oCrea,
											bAdd
										);
									}
								} else {
									for (i = 1; i < 3; ++i) {
										if (
											/Draconis Fundamentum/i.test(
												What(
													prefix +
														"Comp.Use.Attack." +
														i +
														".Weapon Selection"
												)
											)
										)
											Value(
												prefix +
													"Comp.Use.Attack." +
													i +
													".Weapon Selection",
												""
											);
									}
								}
							},
							"My alchemy golem gains the Monsterous Graft: Draconis Fundamentum.",
							900,
						],
					},
				},
			"dragon's hide (donor: large or larger dragon)": {
				name: "Dragon's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) Value(prefix + "Comp.Use.AC", 17);
							else Value(prefix + "Comp.Use.AC", "14+Dex");
						},
						"My alchemy golem's AC is equal to 17, if its worn armor isn't higher. It may benefit from a shield.",
					],
				},
			},
			"energetic suture (acid) (donor: clst/drgn/elem/fey/fnd with imm/res to acid damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								if (bAdd)
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(
											"adamantine.",
											"adamantine, acid"
										)
									);
								else
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(", acid", ".")
									);
							},
						],
					},
				},
			"energetic suture (cold) (donor: clst/drgn/elem/fey/fnd with imm/res to cold damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								if (bAdd)
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(
											"adamantine.",
											"adamantine, cold"
										)
									);
								else
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(", cold", ".")
									);
							},
						],
					},
				},
			"energetic suture (fire) (donor: clst/drgn/elem/fey/fnd with imm/res to fire damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								if (bAdd)
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(
											"adamantine.",
											"adamantine, fire"
										)
									);
								else
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(", fire", ".")
									);
							},
						],
					},
				},
			"energetic suture (poison) (donor: clst/drgn/elem/fey/fnd with imm/res to poison damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								if (bAdd)
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(
											"adamantine.",
											"adamantine, poison"
										)
									);
								else
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(", poison", ".")
									);
							},
						],
					},
				},
			"energetic suture (thunder) (donor: clst/drgn/elem/fey/fnd with imm/res to thunder damage)":
				{
					name: "Energetic Suture",
					source: ["VSoS", 371],
					submenu: "[External Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								if (bAdd)
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(
											"adamantine.",
											"adamantine, thunder"
										)
									);
								else
									Value(
										prefix + "Comp.Use.Features",
										What(
											prefix + "Comp.Use.Features"
										).replace(", thunder", ".")
									);
							},
						],
					},
				},
			"fiend's hide (donor: medium or larger fiend)": {
				name: "Fiend's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd)
								Value(prefix + "Comp.Use.AC", "15+min(Dex|2)");
							else Value(prefix + "Comp.Use.AC", "14+Dex");
						},
						"My alchemy golem's AC is equal to 15 + its Dexterity Modifier, max 2, if its worn armor isn't higher. It may benefit from a shield.",
					],
				},
			},
			"heart of steel (donor: construct)": {
				name: "Heart of Steel",
				source: ["VSoS", 371],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Heart of Steel: The golem ignores effects of 1 level of exhaustion & finishes a long rest in 4 hours."
							);
						},
					],
				},
			},
			"horns (donor: has gore/horns/ram/tusk attack)": {
				name: "Horns",
				source: ["VSoS", 372],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) {
								AddWeapon("Horns", "", prefix);
								if (
									GetFeatureChoice(
										"classes",
										"alchemist",
										"subclassfeature18",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									ClassSubList[
										"alchemist-xenoalchemist"
									].features[
										"subclassfeature18"
									].creatureOptions[0].commoneval(
										prefix,
										oCrea,
										bAdd
									);
								}
							} else {
								for (i = 1; i < 3; ++i) {
									if (
										/horns/i.test(
											What(
												prefix +
													"Comp.Use.Attack." +
													i +
													".Weapon Selection"
											)
										)
									)
										Value(
											prefix +
												"Comp.Use.Attack." +
												i +
												".Weapon Selection",
											""
										);
								}
							}
						},
						"My alchemy golem gains the Monsterous Graft: Horns.",
						900,
					],
				},
			},
			"indiscernible anatomy (donor: medium or larger aberration)": {
				name: "Indiscernible Anatomy",
				source: ["VSoS", 372],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Indiscernible Anatomy: Critical hits against the golem become normal hits."
							);
						},
					],
				},
			},
			"leaping legs (donor: has the pounce/standing leap trait)": {
				name: "Leaping Legs",
				source: ["VSoS", 372],
				submenu: "[Legs Grafts]",
				description:
					" My jump distance doubles. I can jump my full distance without a running start.",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Leaping Legs: The golem's jump distance is doubled. It can jump its full distance without a running start."
							);
						},
					],
				},
			},
			"olfactory implants (donor: has keen smell/keen hearing and smell trait)":
				{
					name: "Olfactory Implants",
					source: ["VSoS", 372],
					submenu: "[Head Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								var aFnc = bAdd ? AddString : RemoveString;
								aFnc(prefix + "Comp.Use.Senses", "Keen Smell");
							},
						],
					},
				},
			"oversized arms (donor: giant)": {
				name: "Oversized Arms",
				source: ["VSoS", 372],
				submenu: "[Arms Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) {
								ClassSubList[
									"alchemist-xenoalchemist"
								].features[
									"subclassfeature18"
								].creatureOptions[0].commoneval(
									prefix,
									oCrea,
									bAdd
								);
							}
							if (!bAdd) {
								ClassSubList[
									"alchemist-xenoalchemist"
								].features[
									"subclassfeature18"
								].creatureOptions[0].commonremoveeval(
									prefix,
									oCrea,
									bAdd
								);
							}
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits.",
								"\n\u25C6 Oversized Arms: The golem's reach increases by 5 ft, unless the weapon used has Reach. It has advantage on saves made to maintain grip on objects."
							);
						},
						"My golem's reach increases by 5 ft, unless the weapon it is using has Reach.",
						1000,
					],
				},
			},
			"prehensile tail (donor: has a tail attack)": {
				name: "Prehensile Tail",
				source: ["VSoS", 372],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) {
								AddWeapon("Prehensile Tail", "", prefix);
								AddString(
									prefix + "Comp.Use.Features",
									"\n\u25C6 Prehensile Tail: The golem's tail can hold and manipulate objects, but cannot use weapons/shields"
								);
								if (
									GetFeatureChoice(
										"classes",
										"alchemist",
										"subclassfeature18",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									ClassSubList[
										"alchemist-xenoalchemist"
									].features[
										"subclassfeature18"
									].creatureOptions[0].commoneval(
										prefix,
										oCrea,
										bAdd
									);
								}
							} else {
								for (i = 1; i < 3; ++i) {
									if (
										/Prehensile Tail/i.test(
											What(
												prefix +
													"Comp.Use.Attack." +
													i +
													".Weapon Selection"
											)
										)
									)
										Value(
											prefix +
												"Comp.Use.Attack." +
												i +
												".Weapon Selection",
											""
										);
								}
								RemoveString(
									prefix + "Comp.Use.Features",
									"\n\u25C6 Prehensile Tail: The golem's tail can hold and manipulate objects, but cannot use weapons/shields"
								);
							}
						},
						"My alchemy golem gains the Monsterous Graft: Prehensile Tail.",
						900,
					],
				},
			},
			"regenerating marrow (donor: has the regeneration trait)": {
				name: "Regenerating Marrow",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Regenerating Marrow: Once per short rest, the golem can use a bonus action to regain hit points equal to 1d10 + Constitution modifier."
							);
						},
					],
				},
			},
			"replacement (donor: any creature)": {
				name: "Replacement",
				source: ["VSoS", 373],
				submenu: "[Any Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Replacement: A replacement limb or organ functions the same as the missing one. It takes up the most relevant body slot."
							);
						},
					],
				},
			},
			"stench (donor: has the stench trait)": {
				name: "Stench",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Stench: Once per short rest, as a bonus action, each creature within 10 ft of the golem must make a Con save, DC 15, or be poisoned until the end of their next turn."
							);
						},
					],
				},
			},
			"tentacles (donor: has a tentacles/tendrils attack)": {
				name: "Tentacles",
				source: ["VSoS", 373],
				submenu: "[Arms Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							if (bAdd) {
								AddWeapon("Tentacles", "", prefix);
							} // * no need to call commoneval
							else {
								for (i = 1; i < 3; ++i) {
									if (
										/tentacles/i.test(
											What(
												prefix +
													"Comp.Use.Attack." +
													i +
													".Weapon Selection"
											)
										)
									)
										Value(
											prefix +
												"Comp.Use.Attack." +
												i +
												".Weapon Selection",
											""
										);
								}
							}
						},
						"My alchemy golem gains the Monsterous Graft: Tentacles.",
						900,
					],
				},
			},
			"venom sac (donor: has a natural weapon/trait that deals poison/poisoned condition)":
				{
					name: "Venom Sac",
					source: ["VSoS", 373],
					submenu: "[Internal Grafts]",
					description: "",
					calcChanges: {
						creatureCallback: [
							function (prefix, oCrea, bAdd) {
								if (!/\balchemy golem\b/i.test(oCrea.name))
									return;
								var aFnc = bAdd ? AddString : RemoveString;
								aFnc(
									prefix + "Comp.Use.Features",
									"\n\u25C6 Venom Sac: Once per short rest, as a bonus action, the golem can coat a weapon in basic poison. The save DC for this poison is 15."
								);
							},
						],
					},
				},
			"voice box (donor: has the mimicry trait)": {
				name: "Voice Box",
				source: ["VSoS", 373],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Voice Box: The golem can mimic any sound it has heard, including voices. Creatures can tell they are mimicries if they succeed on an Insight check contested by my Deception check."
							);
						},
					],
				},
			},
			"webspinner apparatus (donor: has a web action)": {
				name: "Webspinner Apparatus",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\balchemy golem\b/i.test(oCrea.name)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Webspinner Apparatus: Once per short rest, the golem can cast the web spell without using a spell slot or components."
							);
						},
					],
				},
				spellcastingBonus: [
					{
						spells: ["web"],
						name: "Webspinner Apparatus",
						selection: ["web"],
						firstCol: "AG",
						spellcastingAbility: 3,
						allowUpCasting: false,
					},
				],
			},
		},
	},
});
