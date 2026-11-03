if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

ClassList["warden"] = {
	regExpSearch: /warden/i,
	name: "Warden",
	source: ["VSoS", 145],
	primaryAbility: "Strength",
	improvements: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
	die: 10,
	saves: ["Str", "Con"],
	skillstxt: {
		primary:
			"Choose two from Animal Handling, Athletics, Nature, Perception, and Survival",
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
		"Warden starting equipment:" +
		"\n \u2022 A shield and any martial weapon;" +
		"\n \u2022 A chain shirt, leather armor and a spear, or chain mail (if proficient);" +
		"\n \u2022 Two light hammers or any simple melee weapon;" +
		"\n \u2022 A dungeoneer's pack or an explorer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses: ["Champion's Call", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features: {
		"sentinel's stand": {
			name: "Sentinel's Stand",
			source: ["VSoS", 146],
			minlevel: 1,
			description: desc([
				'Wardens are towers that cannot easily be felled. Use the "Choose Features" button above to select an option.',
			]),
			extraname: "Sentinel's Stand options",
			choices: [
				"Armor Proficiency",
				"Primal Toughness",
				"Stalwart Spirit",
			],
			"armor proficiency": {
				name: "Armor Proficiency",
				source: ["VSoS", 146],
				description: desc(["I gain proficiency with heavy armor."]),
				armor: [false, false, true, false],
			},
			"primal toughness": {
				name: "Primal Toughness",
				source: ["VSoS", 146],
				description: desc([
					"My hit point maximum increases by 1 + my Con. modifier, and it increases " +
						"by 1 every time I gain a level in this class.",
				]),
				calcChanges: {
					hp: function (totalHD, HDobj, prefix) {
						if (classes.known.warden) {
							return [
								classes.known.warden.level + HDobj.conMod,
								"Primal Toughness (Warden)",
							];
						}
					},
				},
			},
			"stalwart spirit": {
				name: "Stalwart Spirit",
				source: ["VSoS", 146],
				description: desc([
					"I gain proficiency in one saving throw of my choice.",
				]),
			},
		},
		"warden's grasp": {
			name: "Warden's Grasp",
			source: ["VSoS", 147],
			minlevel: 1,
			description: desc([
				"As a bonus action I can ensnare nearby enemies. Until the start of my next turn, I " +
					"can't move, and each Large or smaller crea I choose within 5 ft can't willingly move away " +
					"from me unless it first takes the Disengage action. ",
				"At 14th level, the range of this ability increases to 10 feet.",
			]),
			additional: levels.map(function (n) {
				return n < 14 ? "5 ft" : "10 ft";
			}),
			action: ["bonus action", ""],
		},
		"fighting style": {
			name: "Fighting Style",
			source: ["VSoS", 147],
			minlevel: 2,
			description: desc([
				"I adopt a style of fighting as my specialty. I can't take a Fighting Style option more than once, even " +
					'if I later get to choose again. Use the "Choose Features" button above to select a Fighting Style.',
			]),
			extraname: "Fighting Style",
			choices: [
				"Crippling",
				"Great Weapon Fighting",
				"Protection",
				"Titan Fighting",
			],
			crippling: {
				name: "Fighting Style: Crippling",
				source: ["VSoS", 147],
				description: desc([
					"When I hit a creature with a melee weapon attack, its speed is reduced by 10 feet, to a minimum " +
						"of 0, until the end of its next turn, and it can't take the Dash action until the end of its turn.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								v.isMeleeWeapon &&
								!/crippling/i.test(fields.Description)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Crippling";
							}
						},
					],
				},
			},
			"great weapon fighting": FightingStyles.two_weapon,
			protection: FightingStyles.protection,
			"titan fighting": {
				name: "Fighting Style: Titan Fighting",
				source: ["VSoS", 147],
				description: desc([
					"I gain a +2 bonus to melee weapon attack rolls I make against Large or larger creatures.",
				]),
			},
		},
		"warden's mark": {
			name: "Warden's Mark",
			source: ["VSoS", 147],
			minlevel: 2,
			description: desc([
				"As a bonus action, I can mark a crea I can see within 30 ft. While within 5 feet of me, it " +
					"has disadv. on any attack roll that doesn't target me. This lasts for 1 minute, until I mark " +
					"another creature, or become incapacitated.",
				"At 11th level, I can make an additional attack vs. the marked crea.",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature3: {
			name: "Champion's Call",
			source: ["VSoS", 148],
			minlevel: 3,
			description: desc([
				'Choose a Champion\'s Call and put it in the "Class" field.',
			]),
		},
		"warden's resolve": {
			name: "Warden's Resolve",
			source: ["VSoS", 148],
			minlevel: 3,
			description: desc([
				"When my hp is less than half my max, I have resistance to blud/pierce/slash",
				"At 11th level, this becomes all damage but psychic.",
			]),
		},
		"font of life": {
			name: "Font of Life",
			source: ["VSoS", 148],
			minlevel: 4,
			description: desc([
				"As an action, I end one disease or condition afflicting me. The condition " +
					"can be blinded, charmed, deafened, frightened, paralyzed, or poisoned. I can do so even if the " +
					"condition would prevent me otherwise.",
				"At 15th level, 1/Day when I use " +
					"this ability, my hit points are restored to half my max, if they're lower.",
			]),
			action: ["action", ""],
			recovery: "short rest",
			usages: 1,
		},
		"sentinel's step": {
			name: "Sentinel's Step",
			source: ["VSoS", 148],
			minlevel: 7,
			description: desc([
				"Wardens are faultless trackers, which can navigate hazardous terrain with ease. " +
					'Use the "Choose Feature" button to choose one of the Sentinel\'s Step.',
			]),
			extraname: "Sentinel's Step",
			choices: ["Earthstrength", "Thundering Charge", "Wildblood"],
			earthstrength: {
				name: "Sentinel's Step: Earthstrength",
				source: ["VSoS", 148],
				description: desc([
					"My carrying capacity doubles, and I have " +
						"adv. on ability checks and saving throws against being pushed against my will or knocked prone.",
				]),
				carryingCapacity: 2,
				savetxt: {
					adv_vs: ["pushed", "knocked prone"],
				},
			},
			"thundering charge": {
				name: "Sentinel's Step: Thundering Charge",
				source: ["VSoS", 148],
				description: desc([
					"On my first round of combat, my speed increases by 30 feet and I have advantage on the first melee weapon attack I make.",
				]),
			},
			wildblood: {
				name: "Sentinel's Step: Wildblood",
				source: ["VSoS", 148],
				description: desc([
					"My reflexes have been honed by the perils of nature. I can't be surprised while I am conscious. " +
						"Additionally, I have a +5 bonus to my passive Wisdom (Perception) and passive Intelligence (Investigation) scores.",
				]),
				addMod: {
					type: "skill",
					field: "passive perception",
					mod: 5,
					text: "I have a +5 bonus to my passive Wisdom (Perception) and passive Intelligence (Investigation) scores.",
				},
			},
		},
		undying: {
			name: "Undying",
			source: ["VSoS", 148],
			minlevel: 9,
			description: desc([
				"When I am reduced to 0 hp and are not killed outright, I can choose to drop to 1 hp instead.",
			]),
			recovery: "long rest",
			usages: 1,
		},
		interrupt: {
			name: "Interrupt",
			source: ["VSoS", 148],
			minlevel: 10,
			description: desc([
				"As a reaction when a crea hits me with an attack, I can punctuate its strikes. " +
					"The crea can now make one fewer attack than normal on this turn, if it could make additional attacks on this turn.",
			]),
			action: ["reaction", ""],
		},
		"sentinel's soul": {
			name: "Sentinel's Soul",
			source: ["VSoS", 148],
			minlevel: 18,
			description: desc([
				'Wardens are unshakable guardians that cannot be bowed. At 18th level, choose one of the following features from the "Choose Feature" button.',
			]),
			extraname: "Sentinel's Soul",
			choices: [
				"Ageless Guardian",
				"Eyes of the Mountain",
				"Impenetrable Mind",
			],
			"ageless guardian": {
				name: "Sentinel's Soul: Ageless Guardian",
				source: ["VSoS", 148],
				description: desc([
					"I am immune to poison and disease, no longer need food or water, suffer none of the frailty of old age, and can't be aged magically. I can still die of old age, however. Additionally, I have advantage on Constitution saving throws.",
				]),
				savetxt: {
					immune: ["poison", "disease", "magical aging effects"],
				},
				advantages: [["Constitution", true]],
			},
			"eyes of the mountain": {
				name: "Sentinel's Soul: Eyes of the Mountain",
				source: ["VSoS", 148],
				description: desc([
					"I gain tremorsense with a range of 15 feet, and can detect the presence of hidden or invisible creatures within 30 feet. Additionally, I have advantage on Dexterity saving throws",
				]),
				advantages: [["Dexterirty", true]],
			},
			"impenetrable mind": {
				name: "Sentinel's Soul: Impenetrable Mind",
				source: ["VSoS", 148],
				description: desc([
					"My thoughts can't be read, and I can't be charmed or frightened. Additionally, I have advantage on Wisdom saving throws.",
				]),
				savetxt: {
					immune: ["charmed", "frightened"],
				},
				advantages: [["Wisdom", true]],
			},
		},
	},
};

// * Bloodwrath guardian warden subclass
AddSubClass("warden", "bloodwrath guardian", {
	regExpSearch: /bloodwrath guardian/i,
	subname: "Bloodwrath Guardian",
	source: ["VSoS", 149],
	features: {
		subclassfeature3: {
			name: "Feral Trance",
			source: ["VSoS", 149],
			minlevel: 3,
			description: desc([
				"As a bonus action, I can enter/exit a trance for 1 min and gain the following:",
				"\u2022 Adv. on Strength checks and saving throws",
				"\u2022 My walking speed is increased by 10 ft",
				"\u2022 I have adv. on melee attack rolls using Strength vs. a crea I have marked",
				"\u2022 Attacks against me have advantage",
				"This ends if I am knocked unconscious, if I haven't attacked a hostile crea. since my last turn or taken damage since then, or if I end it as a bonus action.",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature6: {
			name: "Predator's Scent",
			source: ["VSoS", 149],
			minlevel: 6,
			description: desc([
				"A crea. can remained marked for up to 24 hrs. Additionally, I know the direction and distance to the crea. while it's on the same plane.",
			]),
			vision: [["Know Marked Crea. Direct/Distance"]],
		},
		subclassfeature13: {
			name: "Evasion",
			source: [
				["VSoS", 149],
				["T", 144],
			],
			minlevel: 13,
			description: desc([
				"My Dexterity saves vs. areas of effect negate damage on success and halve it on failure.",
			]),
			savetxt: {
				text: "Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg",
			},
		},
		subclassfeature20: {
			name: "Form of the Primal Beast",
			source: ["VSoS", 149],
			minlevel: 20,
			description: desc([
				"I tranform into a beast for 1 min and gain the following found on 3rd page notes.",
			]),
			usages: 1,
			recovery: "long rest",
			toNotesPage: [
				{
					name: "Form of the Primal Beast: Features",
					source: [["VSoS", 149]],
					note: desc([
						"Once per long rest when I transfrom into a primal beast, I gain the following:",
						"\u2022 All benefits from Feral Trance",
						"\u2022 40 temporary hp",
						"\u2022 Every crea. I hit with a melee attack receives a bleeding wound. A crea. loses 1d8 hp at the start of each of its turns per each wound, unless it uses its action to stop the bleeding of all of its wounds." +
							"While a crea. is bleeding, it can't regain hp. A crea can have a number of bleeding wounds up to my prof. bonus.",
						"Constructs, Oozes, and undead can't receive bleeding wounds.",
					]),
				},
			],
		},
	},
});

// * gray watchman warden subclass
AddSubClass("warden", "grey watchman", {
	regExpSearch: /grey watchman/i,
	subname: "Grey Watchman",
	source: ["VSoS", 150],
	abilitySave: 1,
	abilitySaveAlt: 2,
	features: {
		subclassfeature3: {
			name: "Battle Tactics",
			source: ["VSoS", 150],
			minlevel: 3,
			description: desc([
				"I gain 2 Battle Dice, which I regain on a short rest or when I roll initiative, and" +
					" gain more at higher levels. Once per turn, I can perform a maneuver (see page 3 notes)." +
					" My save for my maneuvers is 8 + Prof. Bonus + Str/Dex (my choice)",
			]),
			limfeaname: "Battle Dice",
			recovery: "short rest",
			usages: [
				0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
			],
			additional: levels.map(function (n) {
				return n < 3 ? "" : n < 13 ? "d8" : n < 19 ? "d10" : "d10";
			}),
			extrachoices: [
				"Bull Rush",
				"Bulwark",
				"Cleave",
				"Heel-Cutter",
				"Reckless Assault",
				"Staggering Strike (Warden)",
			],
			choicesNotInMenu: true,
			"bull rush": {
				name: "Bull Rush",
				extraname: "Battle Tactics: Maneuvers",
				source: ["VSoS", 151],
				description: desc([
					"As a bonus action whenever I move at least 10 ft in a straight line and after I immediately make a " +
						" melee weapon attack vs. a crea, I can expend a battle die to shove the target 10 ft away" +
						" or knock them prone. I Add the result from the battle die to the Athletics check to shove the target.",
				]),
				action: ["bonus action", ""],
			},
			bulwark: {
				name: "Bulwark",
				extraname: "Battle Tactics: Maneuvers",
				source: ["VSoS", 151],
				descripton: desc([
					"As a bonus action when I hit a crea with a melee attack, I can expend a battle die" +
						" to reduce the damage from that crea the next time they damage me before the start of my next turn" +
						" The damage reduced is equal to the battle die result",
				]),
				action: ["bonus action", ""],
			},
			cleave: {
				name: "Cleaave",
				extraname: "Battle Tactics: Maneuvers",
				source: ["VSoS", 151],
				description: desc([
					"Once per turn, when I reduce a hostile crea to 0 hp or score a critical hit with a melee weapon" +
						" attack, I can expend a battle die to move up to 15 ft and make another melee weapon attack" +
						" as part of the same action. I add the result from the battle die to the attack's damage.",
				]),
			},
			"heel-cutter": {
				name: "Heel-Cutter",
				extraname: "Battle Tactics: Maneuvers",
				source: ["VSoS", 151],
				description: desc([
					"When I make an opportunity attack vs. a crea, I can expend a battle die to prevent it from escaping." +
						" I add the battle die to the attack roll, and on a hit, the crea must make a Strength save or" +
						" its speed is reduced to 0 until the end of its turn.",
				]),
			},
			"reckless assault": {
				name: "Reckless Assault",
				extraname: "Battle Tactics: Maneuvers",
				source: ["VSoS", 151],
				description: desc([
					"When I make an attack vs. a crea, I can expend a battle die to make it a reckless attack." +
						" I gain advantage on the attack roll, but all attacks vs. me have advantage until" +
						" the start of my next turn.",
				]),
			},
			"staggering strike (warden)": {
				name: "Stargering Strike",
				extraname: "Battle Tactics: Maneuvers",
				source: ["VSoS", 151],
				description: desc([
					"As a bonus action when I make a weapon attack vs. a Large or smaller crea, I can expend a battle die" +
						" to daze the taarget. On a hit, the target must make a Con. save or be incapacitated until the" +
						" start of my next turn.",
				]),
				action: ["bonus action", ""],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "bull rush",
				},
				{
					extrachoice: "bulwark",
				},
				{
					extrachoice: "cleave",
				},
				{
					extrachoice: "heel-cutter",
				},
				{
					extrachoice: "reckless assault",
				},
				{
					extrachoice: "staggering strike (warden)",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Hold the Line",
			source: ["VSoS", 151],
			minlevel: 3,
			description: desc([
				"When I use Warden's Grasp, I can choose a crea, not myself, to gain a +1 bonus to AC and saving throws while they remain in range of the effect's area until the start of my next turn.",
			]),
		},
		subclassfeature6: {
			name: "Fortification Expert",
			source: ["VSoS", 151],
			minlevel: 6,
			description: desc([
				"I have advantage on ability checks to make fortifications, examine walls and other defenses for weak points and entry" +
					" ways, and climb constructed walls. When I have \u00BE cover, I'm considered to have full cover.",
			]),
		},
		subclassfeature13: {
			name: "Mettle",
			source: ["VSoS", 151],
			minlevel: 13,
			description: desc([
				"Whenever I make a Con. save for \u00BD damage, I take no damage on a success and" +
					" \u00BD on a fail.",
			]),
			savetxt: {
				text: [
					"Con save vs. effects: fail \u2015 half dmg, success \u2015 no dmg",
				],
			},
		},
		subclassfeature20: {
			name: "Unbreakable Sentinel",
			source: ["VSoS", 151],
			minlevel: 20,
			description: desc([
				"As an action 1/LR, I can transform into a paragon of battle and gain the following:",
				"\u2022 +2 bonus to AC",
				"\u2022 I regain an expended battle die whenever I hit a marked crea with an attack",
				"\u2022 I can take 1 additional reaction during each round of combat. I can't take",
				" more than 1 reaction in a single turn",
			]),
			action: ["action", ""],
			recovery: "long rest",
			usages: 1,
		},
	},
});

// * nightgaunt warden subclass
AddSubClass("warden", "nightgaunt", {
	regExpSearch: /nightgaunt/i,
	subname: "Nightgaunt",
	source: ["VSoS", 152],
	abilitySave: 3,
	features: {
		subclassfeature3: {
			name: "Darkvision",
			source: ["VSoS", 152],
			minlevel: 3,
			description: desc([
				"I gain dark vision with a range of 60 ft or +30 ft if I already have it.",
				"At 13th level, I can see through magical and non-magical darkness.",
			]),
			vision: [
				["Darkvision", "fixed 60"],
				["Darkvision", "+30"],
			],
		},
		"subclassfeature3.1": {
			name: "Marked for Death",
			source: ["VSoS", 152],
			minlevel: 3,
			description: desc([
				"When I deal damage to a marked crea with a melee weapon attack and its remaining hp is lower than the damage I dealt to it with that attack, it drops to 0 hp instead.",
			]),
		},
		subclassfeature6: {
			name: "Undead Empathy",
			source: ["VSoS", 152],
			minlevel: 6,
			description: desc([
				"Whenever an undead attacks me, it must make a Wis save or it misses. If it's Int is lower than 4, it becomes friendly to my allies and I. The save DC is 8 + Prof. Bonus + Con. mod.",
			]),
		},
		subclassfeature13: {
			name: "Evasion",
			source: ["VSoS", 152],
			minlevel: 13,
			description: desc([
				"My Dexterity saves vs. areas of effect negate damage on success and halve it on failure.",
			]),
			savetxt: {
				text: [
					"Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg",
				],
			},
		},
		subclassfeature20: {
			name: "Gravelord",
			source: ["VSoS", 152],
			minlevel: 20,
			description: desc([
				"As a bonus action, I can divorce myself from life. For 1 min, I gain following benefits for",
				"\u2022 I am immune to poison damage and being poisoned",
				"\u2022 I can use my Undying feature up to three times without expending a use of the feature",
				"\u2022 Once per turn when I deal damage to a hostile crea with a melee weapon attack, I deal an extra 4d6 necrotic damage and gain temp hp equal to the necrotic damage dealt, which last until the start of my next turn",
			]),
			recovery: "long rest",
			usages: 1,
		},
	},
});

// * soulblood shaman warden subclass
AddSubClass("warden", "soulblood shaman", {
	regExpSearch: /soulblood shaman/i,
	subname: "Soulblood Shaman",
	source: ["VSoS", 153],
	spellcastingList: {
		class: "druid",
		level: [1, 5],
		school: ["Evoc", "Trans"],
	},
	abilitySave: 5,
	spellcastingKnown: {
		spells: [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9],
		cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
	},
	spellcastingFactor: 3,
	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl20
	],
	features: {
		subclassfeature3: {
			name: "Spellcasting",
			source: ["VSoS", 153],
			minlevel: 3,
			description: desc([
				"I can cast known druid cantrips/spells, using Wisdom as my spellcasting ability",
				"These spells must be Transmutation or Evocation, unless it is the spell gained at",
				"3rd, 8th, 14th, and 20th level",
			]),
			spellcastingBonus: [
				{
					name: "any school",
					class: ["druid"],
					level: [1, 4],
					times: levels.map(function (n) {
						return n < 3
							? 0
							: n < 8
							? 1
							: n < 14
							? 2
							: n < 20
							? 3
							: 4;
					}),
				},
			],
		},
		"subclassfeature3.1": {
			name: "Soulblood",
			source: ["VSoS", 153],
			minlevel: 3,
			description: desc([
				"When a crea within 5 ft of me deals damage to me, I can use my reaction to mark the crea.",
			]),
			action: ["reaction", ""],
		},
		subclassfeature6: {
			name: "Whispers of Beyond",
			source: ["VSoS", 153],
			minlevel: 6,
			description: desc([
				"I can spend one minute to think when I make an Intelligence or Wisdom check, to gain adv. on the roll." +
					" However, the GM can decline to give I adv. on this check if the spirits would not possess appropriate guidance of knowledge.",
			]),
		},
		subclassfeature13: {
			name: "Spell Resistance",
			source: ["VSoS", 153],
			minlevel: 13,
			description: desc([
				"I have advantage on saves against spells and other magical effects.",
			]),
			savetxt: {
				adv_vs: ["spells", "magic"],
			},
		},
		subclassfeature20: {
			name: "Ethereal Watcher",
			source: ["VSoS", 154],
			minlevel: 20,
			description: desc([
				"As an action 1/LR, I can become an ethereal watcher. For the next minute, I gain the following benefits:",
				"\u2022 As a bonus action on my turn, I can become ethereal",
				"\u2022 I can return from being ethereal as a bonus action when I cast a spell, or when I use my Warden's Mark or Grasp feature on my turn",
				"\u2022 When I return from being ethereal, each crea I choose within 10 feet takes 4d10 force damage",
				"\u2022 I can cast 1st and 2nd-level druid spells I know without expending spell slots",
			]),
			action: ["action", ""],
			recovery: "long rest",
			usages: 1,
		},
	},
});

// * stoneheart defender warden subclass
AddSubClass("warden", "stoneheart defender", {
	regExpSearch: /stoneheart defender/i,
	subname: "Stoneheart Defender",
	source: ["VSoS", 154],
	abilitySave: 1,
	features: {
		subclassfeature3: {
			name: "Roots of Rock",
			source: ["VSoS", 154],
			minlevel: 3,
			description: desc([
				"Whenever I use my Warden's Grasp ability, I gain a +2 bonus to AC until the start of my next turn." +
					" Additionally, until I move, I can't be shoved or pushed from where I am standing." +
					" I have adv on Str saves vs. knocked prone, can't slip or fall from ledges, and immune to fly, levitate, and telekinesis.",
			]),
		},
		subclassfeature6: {
			name: "Earthshatter",
			source: ["VSoS", 154],
			minlevel: 6,
			description: desc([
				"I can use Warden's Grasp as an action instead of a bonus action." +
					" When I do so, each crea affected must make a Str saving throw or be knocked prone." +
					" I can this a number of times equal to my Str mod per long rest.",
			]),
			usages: "Str mod per ",
			usagescalc: "event.value = What('Str mod');",
			action: ["action", ""],
		},
		subclassfeature13: {
			name: "Mettle",
			source: ["VSoS", 154],
			minlevel: 13,
			description: desc([
				"Whenever I make a Con. save for \u00BD damage, I take no damage on a success and" +
					" \u00BD on a fail.",
			]),
			savetxt: {
				text: [
					"Con save vs. effects: fail \u2015 half dmg, success \u2015 no dmg",
				],
			},
		},
		subclassfeature20: {
			name: "Immortal Mountain",
			source: ["VSoS", 154],
			minlevel: 20,
			description: desc([
				"As an action 1/LR, I can summon the power of true earth. For 1 min, I gain the following benefits:",
				"\u2022 Bludgeoning, piercing, and slashing damage I take is reduced by 5.",
				"\u2022 I gain the effects of my Roots of Rock ability for the entire duration.",
				"\u2022 As I move, I can leave behind a 5 ft wide trail of difficult terrain behind me.",
			]),
			recovery: "long rest",
			usages: 1,
		},
	},
});

// * storm sentinel warden subclass
AddSubClass("warden", "storm sentinel", {
	regExpSearch: /storm sentinel/i,
	subname: "Storm Sentinel",
	source: ["VSoS", 154],
	features: {
		subclassfeature3: {
			name: "Flash from Above",
			source: ["VSoS", 155],
			minlevel: 3,
			description: desc([
				"Whenever I am standing under the open sky, I can use my action to conjure a harmless, but impressive, bolt of lightning or peal of thunder. I can do so even without clouds.",
			]),
		},
		"subclassfeature3.1": {
			name: "Thunderblast",
			source: ["VSoS", 155],
			minlevel: 3,
			description: desc([
				"Whenever I hit a marked crea with a melee weapon attack, each crea I choose within 5 ft of the target takes 1d8 lightning damage.",
			]),
			additional: "1d8 lightning",
		},
		subclassfeature6: {
			name: "Static Blast",
			source: ["VSoS", 155],
			minlevel: 6,
			description: desc([
				"When I use Warden's Grasp as a bonus action, each creature affected can't take reactions until the start of my next turn.",
			]),
		},
		subclassfeature13: {
			name: "Evasion",
			source: ["VSoS", 155],
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
		subclassfeature20: {
			name: "Stormlord",
			source: ["VSoS", 155],
			minlevel: 20,
			description: desc([
				"I gain a fly speed equal to my movement speed",
				"1/LR I can also use my action to summon a bolt of lightning to strike me. For 1 minute, I gain the following benefits",
				"\u2022 My flight speed is doubled",
				"\u2022 I can cast call lightning as a bonus action without using a spell slot, and can call a bolt of lightning on subsequent turns as a bonus action",
			]),
			action: ["action", ""],
			recovery: "long rest",
			usages: 1,
			spellcastingBonus: [
				{
					name: "Stormlord",
					spells: ["call lightning"],
					selection: ["call lightning"],
					times: 1,
				},
			],
			speed: {
				fly: { spd: "walk", enc: "walk" },
			},
			spellChanges: {
				"call lightning": {
					description:
						"60-ft rad 10-ft high cloud; 1 ba all in 5-ft rad under cloud 3d10+1d10/SL Lightning dmg; save half",
					descriptionShorter:
						"60-ft rad 10-ft high cloud; 1 ba all in 5-ft rad under it 3d10+1d10/SL Lightn. dmg; save half",
					descriptionFull:
						"A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see within range directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud)." +
						"\n   " +
						"When you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your bonus action to call down lightning in this way again, targeting the same point or a different one." +
						"\n   " +
						"If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10." +
						AtHigherLevels +
						"When you cast this spell using a spell slot of 4th level or higher level, the damage increases by 1d10 for each slot level above 3rd.",
					changes:
						"I can keep casting as a bonus action instead of an action.",
				},
			},
		},
	},
});

// * verdant protector warden subclass
AddSubClass("warden", "verdant protector", {
	regExpSearch: /verdant protector/i,
	subname: "Verdant Protector",
	source: ["VSoS", 155],
	features: {
		subclassfeature3: {
			name: "Green Mark",
			source: ["VSoS", 155],
			minlevel: 3,
			description: desc([
				"While a marked crea is within 30 ft of me, the ground it walks on is difficult terrain.",
			]),
		},
		subclassfeature6: {
			name: "Verdant Skin",
			source: ["VSoS", 155],
			minlevel: 6,
			description: desc([
				"I gain proficiency in Stealth. Additionally, I can use my action to gain adv on Stealth checks I make to hide among vegetation.",
			]),
			skills: ["Stealth"],
			action: ["action", ""],
		},
		subclassfeature113: {
			name: "Mettle",
			source: ["VSoS", 154],
			minlevel: 13,
			description: desc([
				"Whenever I make a Con. save for \u00BD damage, I take no damage on a success and" +
					" \u00BD on a fail.",
			]),
			savetxt: {
				text: [
					"Con save vs. effects: fail \u2015 half dmg, success \u2015 no dmg",
				],
			},
		},
		subclassfeature20: {
			name: "Form of the Oak Sentinel",
			source: ["VSoS", 155],
			minlevel: 20,
			description: desc([
				"As an action 1/LR, I can transform into an oak sentinel. For 1 min, I gain the following:",
				"\u2022 My AC becomes 20, if it was lower.",
				"\u2022 My attacks have Reach, if they did not have it before.",
				"\u2022 I can use Warden's Grasp as an action, instead of a bonus action. When I do so, I can make an attack against each crea affected, with a separate attack roll for each target.",
			]),
			recovery: "long rest",
			usages: 1,
		},
	},
});
