if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// Necromancer spell list
[
	// Cantrips (0 Level)
	"acid splash",
	"caustic blade",
	"cheat",
	"chill touch",
	"cryptogram",
	"dancing lights",
	"eldritch orb",
	"eye of anubis",
	"flesh ripper",
	"hocuspocus",
	"light",
	"lightning surge",
	"mage hand",
	"mending",
	"minor lifesteal",
	"poison spray",
	"shocking grasp",
	"spark of life",
	"true strike",
	// 1st level
	"alarm",
	"arcane anomaly",
	"bane",
	"blood print",
	"command",
	"dead mist lash",
	"detect evil and good",
	"detect magic",
	"exhume",
	"expeditious retreat",
	"false life",
	"flawed reconstruction",
	"fog cloud",
	"gahoul's shrieking skull",
	"grease",
	"hollowing curse",
	"identify",
	"indemnify",
	"inflict wounds",
	"mage armor",
	"memorize",
	"might of the abyss",
	"protection from evil and good",
	"sleep",
	"unseen servant",
	// 2nd level
	"melf's acid arrow",
	"blindness/deafness",
	"curse ward",
	"darkness",
	"darkvision",
	"delay",
	"detect thoughts",
	"enlarge/reduce",
	"gentle repose",
	"invisibility",
	"knock",
	"locate object",
	"misty step",
	"nondescript",
	"pass without trace",
	"protection from ballistics",
	"protect threshold",
	"ray of enfeeblement",
	"silence",
	"spider climb",
	"stone bones",
	"unseen accountant",
	"web",
	// 3rd level
	"animate dead",
	"benign dismemberment",
	"bestow curse",
	"call lightning",
	"clairvoyance",
	"counterspell",
	"curse of blades",
	"dead fog",
	"dispel magic",
	"fear",
	"gaseous form",
	"glyph of warding",
	"nondetection",
	"phantom steed",
	"remove curse",
	"revivify",
	"ruby-eye curse",
	"rusting grasp",
	"seance",
	"speak with dead",
	"stinking cloud",
	"vampiric touch",
	// 4th level
	"arcane eye",
	"blight",
	"death ward",
	"dimension door",
	"dire warning",
	"distort gravity",
	"false vision",
	"gahoul's scapegoat",
	"grasp of the grave",
	"greater invisibility",
	"locate creature",
	"phantasmal killer",
	"leomund's secret chest",
	// 5th level
	"antilife shell",
	"cloudkill",
	"contagion",
	"dispel evil and good",
	"dream",
	"insect plague",
	"modify memory",
	"pharaoh's curse",
	"scrutinize foe",
	"scrying",
	"teleportation circle",
	// 6th level
	"antiballistics field",
	"circle of death",
	"contingency",
	"create undead",
	"eyebite",
	"flesh to stone",
	"frenzy",
	"gahoul's spectral scythe",
	"harm",
	"inexorable sarcophagus",
	"magic jar",
	// 7th level
	"abduct",
	"etherealness",
	"finger of death",
	"plane shift",
	"sequester",
	"teleport",
	// 8th level
	"antimagic field",
	"clone",
	"feeblemind",
	"gahoul's glorious gothic",
	"mind blank",
	"power word stun",
	// 9th level
	"heart of darkness",
	"imprisonment",
	"power word kill",
	"storm of vengeance",
	"weird",
].forEach(function (s) {
	if (
		SpellsList[s] &&
		SpellsList[s].classes &&
		SpellsList[s].classes.indexOf("necromancer") === -1
	)
		SpellsList[s].classes.push("necromancer");
});

ClassList["necromancer"] = {
	name: "Necromancer",
	regExpSearch: /\bnecromancer\b/i,
	source: ["VSoS", 128],
	primaryAbility: "Intelligence",
	prereqs: "Intelligence 13",
	die: 6,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Con", "Int"],
	abilitySave: 4,
	skillstxt: {
		primary:
			"Choose two from Arcana, Deception, History, Intimidation, Investigation, Medicine, Persuasion, or Religion",
	},
	armorProfs: {
		primary: [false, false, false, false],
		secondary: [false, false, false, false],
	},
	weaponProfs: {
		primary: [true, false],
		secondary: [false, false],
	},
	equipment:
		"Necromancer starting equipment: " +
		"\n \u2022 a component pouch -or- an arcane focus;" +
		"\n \u2022 A dungeoneer's pack -or- a scholar's pack;" +
		"\n \u2022 A shovel, a dagger, & any simple weapon",
	subclasses: ["Grave Ambition", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor: 1,
	spellcastingKnown: {
		cantrips: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells: [
			2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15,
			15,
		],
		prepared: false,
	},
	spellcastingList: {
		class: "necromancer",
	},
	features: {
		spellcasting: {
			name: "Spellcasting",
			source: ["VSoS", 128],
			minlevel: 1,
			description: desc([
				"I can cast necromancer cantrips/spells that I know using Intelligence as my spellcasting ability.",
				"I can use an arcane focus as a spellcasting focus for my necromancer spells.",
				"I can cast necromancer spells as rituals if they have the ritual tag.",
			]),
		},
		"charnel touch": {
			name: "Charnel Touch",
			source: ["VSoS", 129],
			minlevel: 1,
			description: desc([
				"I have a pool of Charnel Touch points. As an action I declare a number of points (max prof",
				"bonus x 5) & make a melee spell attack (willing creatures auto-hit). On hit, I deal necrotic dmg",
				"equal to declared points & expend them (heals Undead, Constructs immune, 2x dmg on crit).",
			]),
			weaponOptions: [
				{
					name: "Charnel Touch",
					source: ["VSoS", 129],
					regExpSearch: /\bcharnel touch\b/i,
					type: "Spell",
					ability: 4,
					abilitytodamage: false,
					damage: [0, 0, "Necrotic"],
					range: "Melee",
					description:
						"Damage doubles on crit; Constructs are immune; heals Undead",
					isNotWeapon: true,
					useSpellcastingAbility: true,
					useSpellMod: "necromancer",
					selectNow: true,
				},
			],
			limfeaname: "Charnel Touch Points",
			usages: levels.map(function (n) {
				return n * 5;
			}),
			recovery: "long rest",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/charnel touch/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Max " +
								How("Proficiency Bonus") * 5 +
								" necrotic dmg";
						}
					},
				],
			},
		},
		thralls: {
			name: "Thralls",
			source: ["VSoS", 130],
			minlevel: 2,
			description: desc([
				"I can perform a 10 minute ritual to raise one or more Small or Medium humanoid",
				"corpses/remains within 30 feet of me into undead thralls. See notes for details.",
			]),
			additionaL: levels.map(function (n) {
				return n < 2
					? ""
					: "Thrall CR total: " +
							(n < 3
								? "1/4"
								: n < 5
								? "1/2"
								: n < 9
								? "1"
								: n < 13
								? "2"
								: n < 17
								? "3"
								: "4");
			}),
			spellChanges: {
				"animate dead": {
					time: "1 a",
					description:
						"Turn Small/Medium humanoid corpses into 1+2/SL Skeletons or Zombies, following Thralls rules",
					changes:
						"I can cast this spell as an action instead of over the course of 1 minute. undead I create using this spell are treated as my thralls and use the appropriate Undead Thrall stat block.",
				},
			},
		},
		"bag of bones": {
			name: "Bag of Bones",
			minlevel: 2,
			source: ["VSoS", 131],
			description: desc([
				"I can make a magical bag of bones with a 1 hr ritual while holding a container I can carry.",
				"When I do this, other bags of bones I make are unmade. See magic item entry for details.",
			]),
			magicitemsAdd: ["Bag of Bones"],
		},
		subclassfeature3: {
			name: "Grave Ambition",
			source: ["VSoS", 131],
			minlevel: 3,
			description: desc([
				'Choose a Grave Ambition in the "Class" field.',
			]),
		},
		"black arcana": {
			name: "Black Arcana",
			source: ["VSoS", 131],
			minlevel: 3,
			description: desc([
				"As a bonus action I can expend a spell slot to regain 1d8 CT points/SS level (up to pool max).",
			]),
			action: ["bonus action", "Replenish Charnel Touch"],
		},
		"critical spellcasting": {
			name: "Critical Spellcasting",
			source: ["VSoS", 131],
			minlevel: 5,
			description: desc([
				"Creatures that roll a 1 on a save vs my spells auto-fail and take double damage dice from the",
				"spell, & my spell attacks crit on a roll of 19-20. At 14th level, creatures auto-fail & take double",
				"damage dice from my spells on a roll of 1-2, & my spell attacks crit on a roll of 18-20.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isSpell) {
							if (
								v.isDC &&
								v.isSpell &&
								SpellsList[v.thisWeapon[3]] &&
								v.thisWeapon[4].indexOf("necromancer") !== -1
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"double dmg dice vs crea rolling " +
									(classes.known.necromancer.level < 14
										? "1"
										: "1-2") +
									" vs save";
							}
							if (
								!v.isDC &&
								v.isSpell &&
								SpellsList[v.thisWeapon[3]] &&
								v.thisWeapon[4].indexOf("necromancer") !== -1
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"crit on " +
									(classes.known.necromancer.level < 14
										? "19-20"
										: "18-20");
							}
						}
					},
					"Creatures that roll a 1 on a save against my spells take double the damage dice as damage, and my spell attacks score a critical hit on a roll of 19-20. At 14th level, Creatures that roll a 1-2 on a save against my spells take double damage dice as damage, and my spell attacks score a critical hit on a roll of 18-20.",
				],
			},
		},
		"enthralling presence": {
			name: "Enthralling Presence",
			source: ["VSoS", 131],
			minlevel: 7,
			description: desc([
				"Undead I control are immune to effects that turn undead. While I am conscious, my undead",
				"can't be forcefully controlled by another creature.",
			]),
		},
		"undying servitude": {
			name: "Undying Servitude",
			source: ["VSoS", 131],
			minlevel: 18,
			description: desc([
				"When a thrall drops to 0 hp & not destroyed, I can use reaction to heal it for half its max hp.",
			]),
			usages: 1,
			recovery: "long rest",
			action: ["reaction", ""],
		},
		lichdom: {
			name: "Lichdom",
			source: ["VSoS", 132],
			minlevel: 20,
			description: desc([
				"I can undergo a rite to become a lich. See third page & notes pages.",
			]),
			savetxt: {
				immune: ["necrotic damage", "poison", "effects of exhaustion"],
				text: [
					"I don't need to eat, drink, sleep, or breathe",
					"Effects that affect undead affect me except turn undead",
				],
			},
			toNotesPage: [
				{
					name: "Lichdom",
					note: desc([
						"I have completed my phylactery and am ready to undergo the rite. To do so, I",
						"shut myself away for 30 days in an isolated location of my choice, and emerge",
						"as an immortal lich. Once the rite is completed, I gain extra benefits, as well",
						"as those dictated by my Grave Ambition.",
					]),
					amendTo: "Animate Dead",
				},
				{
					name: "Phylactery Form and Weakness",
					note: desc([
						"A lich's phylactery has a unique form and critical flaw by which it can be",
						"destroyed. Examples of forms include a family heirloom, prized possession, a",
						"sword, piece of armor, or entire castle. Examples of weaknesses include dipping",
						"it in the lava of an active volcano, or performing a 24 hour ritual to destroy it.",
						"Discuss with your GM the form and weaknesses your phylactery possesses.",
					]),
					amendTo: "Lichdom",
				},
			],
			phylactery: {
				name: "Phylactery",
				source: ["VSoS", 132],
				description: desc([
					"If I drop to 0 hit points, my body crumbles to dust, but my soul escapes to my phylactery.",
					"After 1d4 + 1 days, a new body forms in a space closest to my phylactery, and I return to life.",
					"When my body reforms, I gain the benefits of a long rest. The new body is identical to the",
					"one that was destroyed.",
				]),
			},
			"undead traits": {
				name: "Undead Resilience & Traits",
				source: ["VSoS", 132],
				description: desc([
					"I have immunity to necrotic & poison damage, & the poisoned condition. I am also immune",
					"to the effects of exhaustion and I don't need to eat, drink, sleep, or breathe. I must still rest",
					"for 4 hours to gain the benefits of a long rest. Spells and effects that typically affect Undead",
					"affect me as well. I am immune to any effect that turns Undead.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "phylactery",
				},
				{
					extrachoice: "undead traits",
				},
			],
		},
	},
};

// * Blood Ascendant necromancer subclass
AddSubClass("necromancer", "blood ascendant", {
	regExpSearch: /\bblood ascendant\b/i,
	subname: "Blood Ascendant",
	source: ["VSoS", 132],
	features: {
		subclassfeature3: {
			name: "Ascendant Spells",
			minlevel: 3,
			source: ["VSoS", 132],
			description: desc([
				"I learn additional spells, which do not count towards the number of spells I know.",
			]),
			spellcastingExtra: [
				"charm person",
				"sleep",
				"enthrall",
				"suggestion",
				"hypnotic pattern",
				"vampiric touch",
				"phantasmal killer",
				"private sanctum",
				"dominate person",
				"modify memory",
			],
		},
		"subclassfeature3.1": {
			name: "Charnel Drain",
			minlevel: 3,
			source: ["VSoS", 133],
			description: desc([
				"I regain hit points equal to my Intelligence modifier + my necromancer level (min 3) when I",
				"reduce a hostile creature to 0 hit points using Charnel Touch.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Drain (heal " +
								Math.max(
									parseInt(What("Int Mod")) +
										classes.known.necromancer.level,
									3
								) +
								" hp)";
							fields.Description_Tooltip =
								"Charnel Drain: When you reduce a hostile creature to 0 hit points with your Charnel Touch, you regain hit points equal to your Intelligence modifier + your necromancer level (minimum 3).";
						}
					},
					"I regain hit points equal to my Intelligence modifier + my necromancer level (min 3) when I reduce a hostile creature to 0 hit points using Charnel Touch.",
				],
			},
		},
		subclassfeature6: {
			name: "Vampiric Transformation",
			minlevel: 6,
			source: ["VSoS", 133],
			description: desc([
				"I can use my action and 15 Charnel Touch points to transform into a bat or cloud of mist for 1",
				"hour, or until I drop to 0 hit points or revert as an action. Anything I'm wearing transforms",
				"with me, but objects I carry fall to the ground. See third page for transformation options.",
			]),
			action: ["action", "(15 CT)"],
			bat: {
				name: "Bat",
				source: ["VSoS", 133],
				description: desc([
					"I transform into a Tiny bat. While in bat form, I have all the senses of a bat, I can't speak, my",
					"walk speed is 5 ft, and I have a fly speed of 30 ft.  My other statistics are unchanged.",
				]),
			},
			mist: {
				name: "Mist",
				source: ["VSoS", 133],
				description: desc([
					"I transform into a Medium cloud of mist. While in this form, I can't speak, manipulate objects",
					"or take any actions other than to revert. I am weightless, have a fly speed of 20 ft, can hover",
					"and can enter and occupy the space of another creature. I can pass through any space air can",
					"pass through, except water. I have advantage on Strength, Dexterity, and Constitution saves,",
					"and gain resistance to bludgeoning, piercing, and slashing damage.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "bat",
				},
				{
					extrachoice: "mist",
				},
			],
			vision: ["Blindsight (undeafened Bat form)", 60],
			dmgres: [
				["Bludgeoning", "Bludgeon. (as Mist)"],
				["Piercing", "Pierce. (as Mist)"],
				["Slashing", "Slash. (as Mist)"],
			],
			savetxt: {
				adv_vs: ["Str/Dex/Con saves as mist"],
			},
		},
		subclassfeature10: {
			name: "Children of the Night",
			minlevel: 10,
			source: ["VSoS", 133],
			description: desc([
				"When I perform my Animate Thralls ritual, I can summon wolves, swarms of bats, and swarms",
				"of rats as my thralls. When these thralls are reduced to 0 hit points, they vanish in mist.",
				'Use the "Race" drop down menu on the companion page to select these.',
			]),
			creatureOptions: [
				{
					name: "Wolf",
					source: ["SRD", 159],
					size: 3,
					type: "Beast",
					companion: "undead thrall",
					companionApply: "undead thrall",
					alignment: "Unaligned",
					ac: 13,
					hp: 11,
					hd: [2, 8],
					speed: "40 ft",
					proficiencyBonus: 2,
					challengeRating: "1/4",
					scores: [12, 15, 12, 3, 12, 6],
					senses: "",
					attacksAction: 1,
					attacks: [
						{
							name: "Bite",
							ability: 2,
							damage: [2, 4, "piercing"],
							range: "Melee",
							abilitytodamage: true,
							description:
								"If target is creature, must Strength save DC 11 or be knocked prone",
							modifiers: ["(oInt+oProf)-(Dex+Prof)", ""],
						},
					],
					skills: {
						Perception: 3,
						Stealth: 4,
					},
					traits: [
						{
							name: "Keen Hearing and Smell",
							description:
								"The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
						},
						{
							name: "Pack Tactics",
							description:
								"The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated.",
						},
					],
				},
				{
					name: "Swarm of Bats",
					source: ["SRD", 154],
					size: 3,
					type: "Beast",
					subtype: "swarm",
					companion: "undead thrall",
					companionApply: "undead thrall",
					alignment: "Unaligned",
					ac: 12,
					hp: 22,
					hd: [5, 8],
					speed: "fly 30 ft",
					proficiencyBonus: 2,
					challengeRating: "1/4",
					scores: [5, 15, 10, 2, 12, 4],
					senses: "Blindsight 60 ft",
					attacksAction: 1,
					damage_resistances: "bludgeoning, piercing, slashing",
					condition_immunities:
						"charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
					attacks: [
						{
							name: "Bite",
							ability: 2,
							damage: [2, 4, "piercing"],
							range: "Melee",
							abilitytodamage: true,
							description:
								"reduce damage die to 1d4 if the swarm has less than half its max hit points",
							modifiers: ["(oInt+oProf)-(Dex+Prof)", ""],
						},
					],
					traits: [
						{
							name: "Echolocation",
							description:
								"The swarm can't use its blindsight while deafened.",
						},
						{
							name: "Keen Hearing",
							description:
								"The swarm has advantage on Wisdom (Perception) checks that rely on hearing.",
						},
						{
							name: "Swarm",
							description:
								"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points.",
						},
					],
				},
				{
					name: "Swarm of Rats",
					source: ["SRD", 155],
					size: 3,
					type: "Beast",
					subtype: "swarm",
					companion: "undead thrall",
					companionApply: "undead thrall",
					alignment: "Unaligned",
					ac: 10,
					hp: 24,
					hd: [7, 8],
					speed: "30 ft",
					proficiencyBonus: 2,
					challengeRating: "1/4",
					scores: [9, 11, 9, 2, 10, 3],
					senses: "Darkvision 60 ft",
					attacksAction: 1,
					damage_resistances: "bludgeoning, piercing, slashing",
					condition_immunities:
						"charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
					attacks: [
						{
							name: "Bite",
							ability: 2,
							damage: [2, 6, "piercing"],
							range: "Melee",
							abilitytodamage: true,
							description:
								"reduce damage die to 1d6 if the swarm has less than half its max hit points",
							modifiers: ["(oInt+oProf)-(Dex+Prof)", ""],
						},
					],
					traits: [
						{
							name: "Keen Smell",
							description:
								"The swarm has advantage on Wisdom (Perception) checks that rely on smell.",
						},
						{
							name: "Swarm",
							description:
								"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.",
						},
					],
				},
			],
		},
		subclassfeature20: {
			name: "Lichdom: Nosferatu",
			minlevel: 20,
			source: ["VSoS", 133],
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			phylactery: {
				name: "Coffin Phylactery",
				source: ["VSoS", 133],
				description: desc([
					"My phylactery is a coffin filled with grave dirt. When I drop to 0 hit points, I reform in this",
					"coffin in 1 hour, gaining the benefits of a long rest. Until I spend 24 hours resting in the coffin,",
					"my hit point maximum is reduced to 1, and I drop to 0 hit points if I begin my turn in sunlight.",
					"My new body is identical to the one that was destroyed.",
				]),
			},
			regeneration: {
				name: "Regeneration",
				source: ["VSoS", 133],
				description: desc([
					"At the start of each of my turns, if I have more than 0 hit points and I am not in direct",
					"sunlight, I regain 10 hit points.",
				]),
			},
			"vampiric agility": {
				name: "Vampiric Agility",
				source: ["VSoS", 133],
				description: desc([
					"My speed is doubled, and I can climb difficult surfaces, including upside down on ceilings,",
					"without needing to make an ability check.",
				]),
				speed: { allModes: "*2" },
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "phylactery",
				},
				{
					extrachoice: "regeneration",
				},
				{
					extrachoice: "vampiric agility",
				},
			],
		},
	},
});

// * Death Knight necromancer subclass
AddSubClass("necromancer", "death knight", {
	regExpSearch: /\bdeath knight\b/i,
	subname: "Death Knight",
	source: ["VSoS", 133],
	attacks: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features: {
		subclassfeature3: {
			name: "Intensive Combat Research",
			minlevel: 3,
			source: ["VSoS", 134],
			description: desc([
				"I gain proficiency with light & medium armor, shields, martial weapons. I can perform somatic",
				"components of spells while holding weapons and shields in both hands.",
			]),
			armorProfs: [true, true, false, true],
			weaponProfs: [false, true],
		},
		"subclassfeature3.1": {
			name: "Charnel Strike",
			minlevel: 3,
			source: ["VSoS", 134],
			description: desc([
				"Once per turn I can spend CT points & apply CT damage to a target I hit with a melee",
				"weapon attack I made as part of an Attack action. When I deal damage using Charnel Touch",
				"or Charnel Strike, I gain temp hp equal to the necrotic damage dealt, up to my hit point total.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							v.isMeleeWeapon &&
							!v.isSpell &&
							!SpellsList[v.thisWeapon[3]]
						) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Charnel Strike: +" +
								parseInt(What("Proficiency Bonus")) * 5 +
								" necrotic dmg & temp hp)";
						}
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"gain temp hp equal to dmg";
						}
					},
					"Once per turn I can spend CT points & apply CT damage to a target I hit with a melee weapon attack I made as part of an Attack action. When I deal damage using Charnel Touch or Charnel Strike, I gain temp hp equal to the necrotic damage dealt, up to my hit point max.",
				],
			},
		},
		subclassfeature6: {
			name: "Extra Attack",
			minlevel: 6,
			source: ["VSoS", 134],
			description: desc([
				"I can attack twice instead of once when I take the Attack action on my turn. My melee",
				"weapon attacks score a crit on a roll of 19-20.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							v.isMeleeWeapon &&
							!/\bcrit on\b/i.test(fields.Description)
						) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"; crit on 19-20";
						}
					},
					"My melee weapon attacks score a critical hit on a roll of 19-20.",
				],
			},
		},
		subclassfeature10: {
			name: "Overcharged Thralls",
			minlevel: 10,
			source: ["VSoS", 134],
			description: desc([
				"When 1 of my thralls dies/is released by me, I regain CT points equal to my necromancer level",
			]),
		},
		subclassfeature20: {
			name: "Lichdom: Imperator",
			minlevel: 20,
			source: ["VSoS", 134],
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			armorProfs: [true, true, true, true],
			dmgres: ["Bludgeoning", "Piercing", "Slashing"],
			completedcombatresearch: {
				name: "Completed Combat Research",
				source: ["VSoS", 134],
				description: desc([
					"I gain proficiency with heavy armor & resistance to bludgeoning, piercing, and slashing dmg.",
				]),
			},
			peerlesscharnelstrike: {
				name: "Peerless Charnel Strike",
				source: ["VSoS", 134],
				description: desc([
					"Necrotic damage dealt by Charnel Touch ignores resistance and immunity to necrotic",
					"damage. The amount of temporary hit points I gain from Charnel Strike is no longer limited",
					"by half my total hit points.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "completedcombatresearch",
				},
				{
					extrachoice: "peerlesscharnelstrike",
				},
			],
		},
	},
});

// * Overlord necromancer subclass
AddSubClass("necromancer", "overlord", {
	regExpSearch: /\boverlord\b/i,
	subname: "Overlord",
	source: ["VSoS", 134],
	features: {
		subclassfeature3: {
			name: "Overlord Spells",
			minlevel: 3,
			source: ["VSoS", 134],
			description: desc([
				"I learn additional spells, which do not count towards the number of spells I know.",
			]),
			spellcastingExtra: [
				"bane",
				"command",
				"detect thoughts",
				"hold person",
				"haste",
				"slow",
				"compulsion",
				"confusion",
				"dominate person",
				"geas",
			],
		},
		"subclassfeature3.1": {
			name: "Charnel Boon",
			minlevel: 3,
			source: ["VSoS", 134],
			description: desc([
				"As a bonus action, I can expend 5 or more Charnel Touch points to empower all my thralls",
				"within 30 ft of me. Until the end of my next turn, those thralls gain a +1 bonus to their attack",
				"rolls, damage rolls, and AC per 5 points expended, up to +3.",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature6: {
			name: "Despotic Discourse",
			minlevel: 6,
			source: ["VSoS", 134],
			description: desc([
				"I gain proficiency in Deception, Intimidation, or Persuasion. I can use my Intelligence modifier",
				"instead of Charisma when making Deception/Intimidation/Persuasion checks.",
			]),
			skillstxt: "Choose one from Deception, Intimidation, or Persuasion",
			addMod: [
				{
					type: "skill",
					field: "Deception",
					mod: "max(Int-Cha|Cha)",
					text: "I can use my Intelligence modifier instead of Charisma when making Deception, Intimidation, and Persuasion checks.",
				},
				{
					type: "skill",
					field: "Intimidation",
					mod: "max(Int-Cha|Cha)",
					text: "I can use my Intelligence modifier instead of Charisma when making Deception, Intimidation, and Persuasion checks.",
				},
				{
					type: "skill",
					field: "Persuasion",
					mod: "max(Int-Cha|Cha)",
					text: "I can use my Intelligence modifier instead of Charisma when making Deception, Intimidation, and Persuasion checks.",
				},
			],
		},
		subclassfeature10: {
			name: "Sacrificial Thralls",
			minlevel: 10,
			source: ["VSoS", 135],
			description: desc([
				"When I am targeted by an attack, I can use my reaction to change the target of the attack to",
				"one of my thralls that is in range/reach of the attack.",
			]),
			action: ["reaction", "Sacrifice Thrall"],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature20: {
			name: "Lichdom: Tyrant",
			minlevel: 20,
			source: ["VSoS", 135],
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			action: [["action", "Dominate Beast/Person/Monster (CT)"]],
			spellcastingBonus: [
				{
					spells: ["dominate beast"],
					name: "Lichdom: Tyrant",
					selection: ["dominate beast"],
					firstCol: "25",
					allowUpCasting: false,
				},
				{
					spells: ["dominate person"],
					name: "Lichdom: Tyrant",
					selection: ["dominate person"],
					firstCol: "30",
					allowUpCasting: false,
				},
				{
					spells: ["dominate monster"],
					name: "Lichdom: Tyrant",
					selection: ["dominate monster"],
					firstCol: "60",
					allowUpCasting: false,
				},
			],
			immortalrule: {
				name: "Immortal Rule",
				source: ["VSoS", 135],
				description: desc([
					"If I drop to 0 hit points, I can choose an unconscious Humanoid or a corpse of one that has",
					"died within the last minute that is within 120 ft of me to possess. A creature warded by a",
					"protection from evil and good or magic circle spell can't be possessed. Once I possess a body",
					"I control it. My game stats are replaced by the stats of the creature, except my alignment,",
					"Intelligence, Wisdom, and Charisma scores. If the body has 0 hit points when I possess it, its",
					"type becomes Undead and it regains 50 hit points, up to its hit point max. I retain the benefit",
					"of my own class features, and I cannot use any class features the creature has. If I possess the",
					"body of an unconsious creature, that creature makes a Charisma save vs my spell save DC",
					"after 8 hours, repeating the save every 8 hours. On a success, I am ejected from the body and",
					"begin the process of reforming at my phylactery. Once I have possessed a creature this way, I",
					"cannot possess it again using this feature.",
				]),
			},
			tyrantsinfluence: {
				name: "Tyrant's Influence",
				source: ["VSoS", 135],
				description: desc([
					"I can expend Charnel Touch points to cast the following spells without expending a spell slot:",
					"dominate beast (25 points), dominate person (30 points), dominate monster (60 points).",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "immortalrule",
				},
				{
					extrachoice: "tyrantsinfluence",
				},
			],
		},
	},
});

// * Pale Master necromancer subclass
AddSubClass("necromancer", "pale master", {
	regExpSearch: /\bpale master\b/i,
	subname: "Pale Master",
	source: ["VSoS", 135],
	features: {
		subclassfeature3: {
			name: "Pale Master Spells",
			minlevel: 3,
			source: ["VSoS", 135],
			description: desc([
				"I learn additional spells, which do not count towards the number of spells I know.",
			]),
			spellcastingExtra: [
				"exhume",
				"inflict wounds",
				"invisibility",
				"ray of enfeeblement",
				"animate dead",
				"fear",
				"evard's black tentacles",
				"blight",
				"cloudkill",
				"scrying",
			],
		},
		"subclassfeature3.1": {
			name: "Charnel Empower",
			minlevel: 3,
			source: ["VSoS", 135],
			description: desc([
				"When I deal damage with a 1st level or higher necromancy spell, I can expend Charnel Touch",
				"points (up to my necromancer level + my Intelligence modifier) to deal extra necrotic damage",
				"to one of the spell's targets equal to the points expended.",
			]),
		},
		subclassfeature6: {
			name: "Frightening Gaze",
			minlevel: 6,
			source: ["VSoS", 135],
			description: desc([
				"I gain proficiency in Intimidation. As a bonus action, I can spend 10 Charnel Touch points to",
				"force a creature I can see within 60 ft of me to make a Wisdom save vs my spell save DC or",
				"be frightened of me for 1 min, repeating the save at the end of each of its turns to end it.",
			]),
			action: ["bonus action", ""],
			skills: ["Intimidation"],
		},
		subclassfeature10: {
			name: "Thrall Rush",
			minlevel: 10,
			source: ["VSoS", 136],
			description: desc([
				"If I roll initiative and am not surprised, each thrall can move up to its speed or make 1 attack.",
			]),
		},
		subclassfeature20: {
			name: "Lichdom: Archlich",
			minlevel: 20,
			source: ["VSoS", 136],
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			devoursoul: {
				name: "Devour Soul",
				source: ["VSoS", 136],
				description: desc([
					"When I reduce a hostile creature to 0 hit points, I can roll a d8 and regain expended spell slots",
					"of my choice whose combined level is no greater than the number rolled. A creature whose",
					"soul is devoured can't be restored to life by means short of a true resurrection or wish spell.",
				]),
				usages: 1,
				recovery: "long rest",
			},
			paralyzingtouch: {
				name: "Paralyzing Touch",
				source: ["VSoS", 136],
				description: desc([
					"When I hit with a Charnel Touch attack and expend 20 or more points, the target must",
					"succeed on a Constitution save vs my spell save DC or be paralyzed for 1 minute, repeating",
					"the save at the end of each of its turns to end the condition.",
				]),
			},
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Paralyze (20 CT)";
							fields.Description_Tooltip =
								"Paralyzing Touch: When you hit with a Charnel Touch attack and expend 20 or more points, the target must succeed on a Constitution saving throw against your spell save DC or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.";
						}
					},
					"When I hit with a Charnel Touch attack and expend 20 or more points, the target must succeed on a Constitution save vs my spell save DC or be paralyzed for 1 minute, repeating the save at the end of each of its turns to end the condition.",
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "devoursoul",
				},
				{
					extrachoice: "paralyzingtouch",
				},
			],
		},
	},
});

// * Pharaoh necromancer subclass
AddSubClass("necromancer", "pharaoh", {
	regExpSearch: /\bpharaoh\b/i,
	subname: "Pharaoh",
	source: ["VSoS", 136],
	features: {
		subclassfeature3: {
			name: "Pharaoh Spells & Holy Symbol",
			source: ["VSoS", 136],
			minlevel: 3,
			description: desc([
				"I learn additional spells, which do not count towards the number of spells I know.",
				"I can also use a holy symbol as a spellcasting focus for my necromancer spells.",
			]),
			spellcastingExtra: [
				"bless",
				"guiding bolt",
				"halo of flame",
				"lesser restoration",
				"revivify",
				"snakestaff",
				"death ward",
				"divination",
				"greater restoration",
				"insect plague",
			],
		},
		"subclassfeature3.1": {
			name: "Channel Divinity",
			source: ["VSoS", 137],
			minlevel: 3,
			description: desc([
				"I have 1 use of Channel Divinity. I can expend 15 Charnel Touch points to regain 1 use.",
			]),
			usages: 1,
			altResource: "15 CT",
			recovery: "short rest",
		},
		"subclassfeature3.2": {
			name: "Channel Divinity: Ankh of Radiance",
			source: ["VSoS", 137],
			minlevel: 3,
			description: desc([
				"As an action, I bless a number of willing creatures up to my Intelligence modifier that I can",
				"see within 60 ft of me. For 1 minute. The first time a blessed creature takes damage, it has",
				"resistance to that damage. If it took damage from a melee weapon attack, the attacker takes",
				"1d6 radiant damage. This damage increases by 1d6 at 5th, 11th, and 17th level.",
			]),
			additional: levels.map(function (n) {
				return n < 5 ? "1d6" : n < 11 ? "2d6" : n < 17 ? "3d6" : "4d6";
			}),
			action: ["action", ""],
		},
		subclassfeature6: {
			name: "Mock Divinity",
			source: ["VSoS", 137],
			minlevel: 6,
			description: desc([
				"I can create new effects when using the thaumaturgy cantrip:",
				"- Within an open area within 120 feet of me, changing darkness to dim light, dim",
				"   light to bright light, and vice versa. I can also change bright light to cause disadvantage on",
				"   Wisdom (Perception) checks which rely on sight, or darkness to limit darkvision to 30 ft (not",
				"   affecting creatures who can see in magical darkness).",
				"- Create a Huge illusory avatar of a deity at a point I can see within 120 ft of me, mimicking",
				"   my movement and projecting my speech in a booming voice for 1 minute.",
			]),
			spellcastingExtraApplyNonconform: true,
			spellcastingExtra: [
				"thaumaturgy",
				"bless",
				"guiding bolt",
				"halo of flame",
				"lesser restoration",
				"revivify",
				"snakestaff",
				"death ward",
				"divination",
				"greater restoration",
				"insect plague",
			],
			spellChanges: {
				thaumaturgy: {
					changes:
						"I can create additional effects using this cantrip: \n\u2022 You can brighten or darken the sun or moon, affecting the area within 120 feet of you for up to 1 minute. You can change darkness to dim light and dim light to bright light, or vice versa. Additionally, you can heighten bright light to a blazing radiance, which causes disadvantage on Wisdom (Perception) checks which rely on sight, or you can deepen darkness to a pitch black, which limits darkvision to a 30-foot radius. This deeper darkness has no effect on creatures that can see in magical darkness.\n\u2022 You manifest a Huge illusory avatar of a deity at a point you can see within 120 feet of you, which mimics your movements and projects your speech in a booming voice for 1 minute.",
				},
			},
		},
		subclassfeature10: {
			name: "Channel Divinity: Scarab of Judgement",
			source: ["VSoS", 137],
			minlevel: 10,
			description: desc([
				"As an action, I destroy an Undead I control within my reach, and a willing Humanoid I choose",
				"that I can see within 60 ft of me regains hit points equal to the Undead's hit points. A creature",
				"that regains hit points this way cannot do so this way again until it finishes a long rest.",
			]),
			action: ["action", ""],
		},
		subclassfeature20: {
			name: "Lichdom: God-King",
			source: ["VSoS", 137],
			minlevel: 20,
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			canopicphylacteries: {
				name: "Canopic Phylacteries",
				source: ["VSoS", 137],
				description: desc([
					"I gain four canopic jars containing my stomach, lungs, intestines, and liver. Each jar has a",
					"weakness (discussed with my GM), and my immortality is stopped when all four jars are",
					"destroyed. When I am reduced to 0 hit points, I reform at my sarcophagus.",
				]),
			},
			mummyrot: {
				name: "Mummy Rot",
				source: ["VSoS", 137],
				description: desc([
					"When I hit with a Charnel Touch attack and expend 20 or more points, the target must make",
					"a Constitution save vs my spell save DC or be cursed. Cursed targets can't regain hit points,",
					"and their hit point maximums decrease by 3d6 every 24 hours. If the curse reduces a target's",
					"hit point maximum to 0, the target dies, & its body turns to dust. The curse lasts until",
					"removed by the remove curse spell or similar magic.",
				]),
			},
			whirlwindofsand: {
				name: "Whirlwind of Sand",
				source: ["VSoS", 137],
				description: desc([
					"As an action, I can transform into a whirlwind of sand, move up to 60 ft, and revert to my",
					"normal form. While in whirlwind form, I am immune to all damage, can't be grappled,",
					"petrified, knocked prone, restrained, or stunned. I retain all equipment in my possession.",
				]),
				action: ["action", ""],
			},
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Mummy Rot (20 CT)";
							fields.Description_Tooltip =
								"Mummy Rot: When you hit with a Charnel Touch attack and expend 20 or more points, the target must succeed on a Constitution saving throw against your spell save DC or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 3d6 for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.";
						}
					},
					"When I hit with a Charnel Touch attack and expend 20 or more points, the target must succeed on a Constitution saving throw against my spell save DC or be cursed with mummy rot.",
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "canopicphylacteries",
				},
				{
					extrachoice: "mummyrot",
				},
				{
					extrachoice: "whirlwindofsand",
				},
			],
		},
	},
});

// * Plague Lord necromancer subclass
AddSubClass("necromancer", "plague lord", {
	regExpSearch: /\bplague lord\b/i,
	subname: "Plague Lord",
	source: ["VSoS", 137],
	features: {
		subclassfeature3: {
			name: "Charnel Toxin",
			minlevel: 3,
			source: ["VSoS", 138],
			description: desc([
				"When I hit with Charnel Touch and expend 5 or more points, the target must make a",
				"Constitution save vs my spell DC or be poisoned until the start of my next turn.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Toxin (5 CT)";
							fields.Description_Tooltip +=
								"Charnel Toxin: When you hit with a Charnel Touch attack and expend 5 or more points, the target must succeed on a Constitution saving throw against your spell save DC or be poisoned until the start of your next turn.";
						}
					},
					"When I hit with Charnel Touch and expend 5 or more points, the target must make a Constitution save vs my spell DC or be poisoned until the start of my next turn.",
				],
			},
		},
		"subclassfeature3.1": {
			name: "Vile Congregation",
			minlevel: 3,
			source: ["VSoS", 138],
			description: desc([
				"When a hostile creature within 5 ft of me makes an attack roll or save, I can roll a d4 and",
				"subtract the result from the roll. This ability does not affect Constructs or Undead.",
			]),
		},
		subclassfeature6: {
			name: "Projectile Spew",
			minlevel: 6,
			source: ["VSoS", 138],
			description: desc([
				"My Charnel Touch, and my spells with a range of touch, now have a reach of 15 feet.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Range = "Melee 15 ft";
						}
					},
					"I can reach creatures up to 15 feet away with my Charnel Touch feature.",
				],
				spellAdd: [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spellObj.range == "Touch") {
							spellObj.range = "15 ft";
							return true;
						}
					},
					"I can reach creatures up to 15 feet away with spells that have a range of Touch.",
				],
			},
		},
		subclassfeature10: {
			name: "Bloated Thralls",
			minlevel: 10,
			source: ["VSoS", 138],
			description: desc([
				"When a thrall dies or I release it, I can choose for each creature within 5 ft of it to make a",
				"Dexterity save vs my spell save DC, taking 4d6 poison damage and getting poisoned until the",
				"start of my next turn. On a save, creatures take half damage and are not poisoned.",
			]),
			weaponOptions: [
				{
					name: "Thrall Burst",
					source: ["VSoS", 138],
					regExpSearch: /\bthrall burst\b/i,
					type: "AlwaysProf",
					ability: 4,
					abilitytodamage: false,
					damage: [4, 6, "Poison"],
					range: "5 ft rad",
					description:
						"On thrall death/release; All crea Dex save, targets poisoned until end of my next turn; save halves & no poison",
					dc: true,
					isNotWeapon: true,
					selectNow: true,
				},
			],
		},
		subclassfeature20: {
			name: "Lichdom: Corpulent Lich",
			minlevel: 20,
			source: ["VSoS", 138],
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			goreburst: {
				name: "Gore Burst",
				source: ["VSoS", 138],
				description: desc([
					"When I drop to 0 hit points, each creature within 20 ft of me must make a Dexterity save vs",
					"my spell save DC or take 5d10 poison damage and be poisoned until the start of my next",
					"turn. On a save, a creature takes half damage and isn't poisoned.",
				]),
			},
			masterofdisease: {
				name: "Master of Disease",
				source: ["VSoS", 138],
				description: desc([
					"When I use my Charnel Toxin feature and expend 25 or more points, the target is poisoned",
					"and cursed for up to 1 minute on a failed save. Choose two of the following effects to occur",
					"while the target is cursed:",
					"- The target has disadvantage on the checks and saves of one ability of my choice.",
					"- The target can only see out to a radius of 10 feet.",
					"- The target falls prone at the end of each of its turns.",
					"- The target loses an extra 1d6 hit points whenever it takes damage.",
					"- The target can only babble nonsense and can't perform verbal components of spells.",
					"The target may repeat the save at the end of each of its turns to end the curse and the",
					"poisoned condition.",
				]),
			},
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Curse (25 CT)";
							fields.Description_Tooltip +=
								"\nMaster of Disease: When you use your Charnel Toxin feature and expend 25 or more points, the creature is poisoned and cursed for up to 1 minute on a failed save. Choose two of the following effects which afflict the target while it is cursed:\n\u2022 Choose one ability score. The target has disadvantage on ability checks and saving throws made with that ability score.\n\u2022 The target can only see out to a radius of 10 feet.\n\u2022 The target falls prone at the end of each of its turns.\n\u2022 The target loses an extra 1d6 hit points whenever it takes damage.\n\u2022 The target can speak only in a babblingnonsense language and can't perform the verbal components of spells.\nAt the end of each of its turns, the target makes a Constitution saving throw against your spell save DC, ending the curse and the poisoned condition on a success.";
						}
					},
					"When I use my Charnel Toxin feature and expend 25 or more points, the target is poisoned and cursed with two effects of my choice (on the third page) for up to 1 minute on a failed save.",
				],
			},
			weaponOptions: [
				{
					name: "Gore Burst",
					source: ["VSoS", 138],
					regExpSearch: /\bgore burst\b/i,
					type: "AlwaysProf",
					ability: 4,
					abilitytodamage: false,
					damage: [10, 10, "Necrotic"],
					range: "20 ft rad",
					description:
						"On drop to 0 hp; all crea Dex save, targets poisoned until end of my next turn; 5d10 is poison type; save halves & no poison",
					dc: true,
					isNotWeapon: true,
					selectNow: true,
				},
			],
			autoSelectExtrachoices: [
				{
					extrachoice: "goreburst",
				},
				{
					extrachoice: "masterofdisease",
				},
			],
		},
	},
});

// * Reanimator necromancer subclass
AddSubClass("necromancer", "reanimator", {
	regExpSearch: /\breanimator\b/i,
	subname: "Reanimator",
	source: ["VSoS", 138],
	features: {
		subclassfeature3: {
			name: "Skilled Surgeon",
			minlevel: 3,
			source: ["VSoS", 138],
			description: desc([
				"I gain proficiency in Medicine. I can use Intelligence instead of Wisdom for Medicine checks.",
			]),
			skills: ["Medicine"],
			addMod: [
				{
					type: "skill",
					field: "Medicine",
					mod: "Int-Wis",
					text: "I can use my Intelligence modifier instead of Wisdom when making Medicine checks.",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Mad Science",
			minlevel: 3,
			source: ["VSoS", 138],
			description: desc([
				"I spend 10 min installing a monsterous graft on one of my non-incorporeal thralls. My thralls",
				"don't lose hp when I install/remove grafts, & they don't need to recover from attachment.",
			]),
			choices: [
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
			times: 1,
			"amphibious adaptation (donor: has amphibious trait)": {
				name: "Amphibious Adaptation",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Amphibious Adaptation: The undead thrall can breathe both air and water."
							);
							aFnc(prefix + "Comp.Use.Speed", ",\nswim 30 ft");
						},
						"My alchemy undead thrall gains the Monsterous Graft: Amphibious Adaptation.",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Arcane Synapses: The undead thrall knows 1 wizard cantrip. If a second creature is harvested and grafted, it knows 2 wizard cantrips."
							);
						},
						"My undead thrall gains the Monsterous Graft: Arcane Synapses.",
					],
				},
				spellcastingBonus: [
					{
						name: "Arcane Synapses (undead thrall)",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd) Value(prefix + "Comp.Use.AC", "13+Dex");
							else Value(prefix + "Comp.Use.AC", "14+Dex");
						},
						"My undead thrall's AC is equal to 13 + its Dexterity Modifier, if its worn armor isn't higher. It may benefit from a shield.",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd) {
								AddWeapon("Bestial Weapon: Claws", "", prefix);
								if (
									GetFeatureChoice(
										"classes",
										"necromancer",
										"subclassfeature3.1",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									CompanionList["undead thrall"].commoneval(
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
						"My undead thrall gains the Monsterous Graft: Bestial Weapons (Arms).",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd) {
								AddWeapon("Bestial Weapon: Teeth", "", prefix);
								if (
									GetFeatureChoice(
										"classes",
										"necromancer",
										"subclassfeature3.1",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									CompanionList["undead thrall"].commoneval(
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
						"My undead thrall gains the Monsterous Graft: Bestial Weapons (Head).",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Charging Hooves: Once on each of its turns, if the undead thrall moves 15 ft in straight line, it can move +10 ft in that direction"
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(prefix + "Comp.Use.Speed", ",\nclimb 30 ft");
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Climbing Apparatus: The undead thrall gains a climb speed equal to its walking speed."
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Doppel-Blooded: Once per long rest, The undead thrall can transform its appearance for 1 hr. it can change its height, weight, face, voice, hair, & race. It cannot become a different size, and its basic shape remains."
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
								if (!/undead thrall/i.test(oCrea.companion))
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
											"necromancer",
											"subclassfeature3.1",
											true
										).indexOf(
											"oversized arms (donor: giant)"
										) !== -1
									) {
										CompanionList[
											"undead thrall"
										].commoneval(prefix, oCrea, bAdd);
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
							"My undead thrall gains the Monsterous Graft: Draconis Fundamentum.",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd) Value(prefix + "Comp.Use.AC", 17);
							else Value(prefix + "Comp.Use.AC", "14+Dex");
						},
						"My undead thrall's AC is equal to 17, if its worn armor isn't higher. It may benefit from a shield.",
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
								if (!/undead thrall/i.test(oCrea.companion))
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
								if (!/undead thrall/i.test(oCrea.companion))
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
								if (!/undead thrall/i.test(oCrea.companion))
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
								if (!/undead thrall/i.test(oCrea.companion))
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
								if (!/undead thrall/i.test(oCrea.companion))
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd)
								Value(prefix + "Comp.Use.AC", "15+min(Dex|2)");
							else Value(prefix + "Comp.Use.AC", "14+Dex");
						},
						"My undead thrall's AC is equal to 15 + its Dexterity Modifier, max 2, if its worn armor isn't higher. It may benefit from a shield.",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Heart of Steel: The undead thrall ignores effects of 1 level of exhaustion & finishes a long rest in 4 hours."
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd) {
								AddWeapon("Horns", "", prefix);
								if (
									GetFeatureChoice(
										"classes",
										"necromancer",
										"subclassfeature3.1",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									CompanionList["undead thrall"].commoneval(
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
						"My undead thrall gains the Monsterous Graft: Horns.",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Indiscernible Anatomy: Critical hits against the undead thrall become normal hits."
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Leaping Legs: The undead thrall's jump distance is doubled. It can jump its full distance without a running start."
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
								if (!/undead thrall/i.test(oCrea.companion))
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd) {
								CompanionList["undead thrall"].commoneval(
									prefix,
									oCrea,
									bAdd
								);
							}
							if (!bAdd) {
								CompanionList["undead thrall"].commonremoveeval(
									prefix,
									oCrea,
									bAdd
								);
							}
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits.",
								"\n\u25C6 Oversized Arms: The undead thrall's reach increases by 5 ft, unless the weapon used has Reach. It has advantage on saves made to maintain grip on objects."
							);
						},
						"My undead thrall's reach increases by 5 ft, unless the weapon it is using has Reach.",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							if (bAdd) {
								AddWeapon("Prehensile Tail", "", prefix);
								AddString(
									prefix + "Comp.Use.Features",
									"\n\u25C6 Prehensile Tail: The undead thrall's tail can hold and manipulate objects, but cannot use weapons/shields"
								);
								if (
									GetFeatureChoice(
										"classes",
										"necromancer",
										"subclassfeature3.1",
										true
									).indexOf(
										"oversized arms (donor: giant)"
									) !== -1
								) {
									CompanionList["undead thrall"].commoneval(
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
									"\n\u25C6 Prehensile Tail: The undead thrall's tail can hold and manipulate objects, but cannot use weapons/shields"
								);
							}
						},
						"My undead thrall gains the Monsterous Graft: Prehensile Tail.",
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Regenerating Marrow: Once per short rest, the undead thrall can use a bonus action to regain hit points equal to 1d10 + Constitution modifier."
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Stench: Once per short rest, as a bonus action, each creature within 10 ft of the undead thrall must make a Con save, DC 15, or be poisoned until the end of their next turn."
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
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
						"My undead thrall gains the Monsterous Graft: Tentacles.",
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
								if (!/undead thrall/i.test(oCrea.companion))
									return;
								var aFnc = bAdd ? AddString : RemoveString;
								aFnc(
									prefix + "Comp.Use.Features",
									"\n\u25C6 Venom Sac: Once per short rest, as a bonus action, the undead thrall can coat a weapon in basic poison. The save DC for this poison is 15."
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Traits",
								"\n\u25C6 Voice Box: The undead thrall can mimic any sound it has heard, including voices. Creatures can tell they are mimicries if they succeed on an Insight check contested by my Deception check."
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
							if (!/undead thrall/i.test(oCrea.companion)) return;
							var aFnc = bAdd ? AddString : RemoveString;
							aFnc(
								prefix + "Comp.Use.Features",
								"\n\u25C6 Webspinner Apparatus: Once per short rest, the undead thrall can cast the web spell without using a spell slot or components."
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
		"subclassfeature3.2": {
			name: "Charnel Voltage",
			minlevel: 3,
			source: ["VSoS", 139],
			description: desc([
				"I can deal lightning damage using my Charnel Touch. When I do this and spend 5 or more CT",
				"points, another creature within 5 ft of the target makes a Dex save vs my spell save DC, taking",
				"lightning damage equal to half the points spent on failure.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"; Voltage (5 CT)";
							fields.Description_Tooltip +=
								"Charnel Voltage: You can choose to deal lightning damage instead of necrotic damage with your Charnel Touch. When you hit with a Charnel Touch attack that deals lightning damage and expends 5 or more points, you can cause the energy to arc to a second creature within 5 feet of the target. The second creature must make a Dexterity saving throw against your spell save DC, taking lightning damage equal to half the number of Charnel Touch points expended on a failed save.";
						}
					},
					"I can choose to deal lightning damage instead of necrotic damage with my Charnel Touch. When I hit with a Charnel Touch attack that deals lightning damage and expends 5 or more points, you can cause the energy to arc to a second creature within 5 feet of the target. The second creature must make a Dexterity saving throw against your spell save DC, taking lightning damage equal to half the number of Charnel Touch points expended on a failed save.",
				],
			},
		},
		subclassfeature6: {
			name: "Lazarus Bolt",
			minlevel: 6,
			source: ["VSoS", 139],
			description: desc([
				"As an action, I can touch a creature that has died within the last min that doesn't lack vital",
				"organs or has died from old age. The creature gains 1 hit point. For 1 min, I can restore hit",
				"points to it using my Charnel Touch feature as if it was Undead.",
			]),
			action: ["action", ""],
		},
		subclassfeature10: {
			name: "Arcane Stitching",
			minlevel: 10,
			source: ["VSoS", 139],
			description: desc([
				"I can spend 1 min and 10 Charnel Touch points to apply a stitch to 1 of my thralls. Only 1",
				"thrall can be stitched, and a thrall can only have 1 type of stitch. A stitch lasts until activated,",
				"the thrall is killed, or I finish a long rest. See third page.",
			]),
			augmentedincision: {
				name: "Augmented Incision",
				source: ["VSoS", 139],
				description: desc([
					"The thrall can activate this stitch to gain advantage on attack rolls and ability checks until the",
					"end of its next turn.",
				]),
			},
			bulwarkbackstitch: {
				name: "Bulwark Backstitch",
				source: ["VSoS", 139],
				description: desc([
					"The thrall can activate this stitch to cast the shield spell when it is hit by an attack.",
				]),
			},
			fleetthreads: {
				name: "Fleet Threads",
				source: ["VSoS", 139],
				description: desc([
					"The thrall can activate this stitch to triple its speed until the end of its next turn.",
				]),
			},
			voltaicsuture: {
				name: "Voltaic Suture",
				source: ["VSoS", 139],
				description: desc([
					"When the thrall hits a creature with an attack, it can activate this stitch to deal an extra 3d6",
					"lightning or necrotic damage (my choice).",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "augmentedincision",
				},
				{
					extrachoice: "bulwarkbackstitch",
				},
				{
					extrachoice: "fleetthreads",
				},
				{
					extrachoice: "voltaicsuture",
				},
			],
		},
		subclassfeature20: {
			name: "Lichdom: Patchwork Golem",
			minlevel: 20,
			source: ["VSoS", 139],
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			scoresOverride: [20, 20, 20, 0, 0, 0],
			dmgres: [
				["Bludgeoning", "Bludg. (nonmagical)"],
				["Piercing", "Pierc. (nonmagical)"],
				["Slashing", "Slash. (nonmagical)"],
			],
			savetxt: { adv_vs: ["spells", "magical effects"] },
			toNotesPage: [
				{
					name: "Golem Form",
					source: ["VSoS", 139],
					note: desc([
						"My Strength, Dexterity & Constitution scores become 20 if they weren't already higher. I gain",
						"resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't",
						"adamantine. I don't lose hit points or hit dice from installing/removing monsterous grafts, and",
						"I take no time to recover from the attachment of a monsterous graft.",
					]),
					page3notes: true,
				},
				{
					name: "Magic Resistance",
					source: ["VSoS", 139],
					note: desc([
						"I have advantage on saves against spells and other magical effects.",
					]),
					page3notes: true,
				},
			],
			choices: [
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
			times: 1,
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
	},
});

// * Reaper necromancer subclass
AddSubClass("necromancer", "reaper", {
	regExpSearch: /\breaper\b/i,
	subname: "Reaper",
	source: ["VSoS", 139],
	features: {
		subclassfeature3: {
			name: "Reaper Spells",
			source: ["VSoS", 139],
			minlevel: 3,
			description: desc([
				"I learn additional spells, which do not count towards the number of spells I know.",
			]),
			spellcastingExtraApplyNonconform: true,
			spellcastingExtra: [
				"false life",
				"inflict wounds",
				"invisibility",
				"silence",
				"fear",
				"speak with dead",
				"greater invisibility",
				"phantasmal killer",
				"mislead",
				"passwall",
			],
		},
		"subclassfeature3.1": {
			name: "Charnel Veil",
			source: ["VSoS", 139],
			minlevel: 3,
			description: desc([
				"When I hit with Charnel Touch and expend 5 or more points, I become invisible until the start",
				"of my next turn. This effect ends early if I move 15 feet or more.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description += "; Veil (5 CT)";
							fields.Description_Tooltip +=
								"Charnel Veil: When you hit with a Charnel Touch attack and expend 5 or more points, you become invisible until the start of your next turn. This effect ends early if you move 15 feet or more.";
						}
					},
				],
			},
		},
		subclassfeature6: {
			name: "Umbral Form",
			source: ["VSoS", 139],
			minlevel: 6,
			description: desc([
				"As an action, I become a shadow on a surface; my movement speed doubles, I gain a climb",
				"speed equal to my move speed, I can move across difficult surfaces without an ability check,",
				"and I can't jump or fly. As a shadow, attacks against me have disadv, and in darkness, I am",
				"invisible to any creature that would need darkvision to see me in that darkness. I can't take",
				"actions as a shadow. My equipment merges with me and has no effect until I leave the form. I",
				"can leave the form as a bonus action or when I start my turn (no action required).",
			]),
			action: [
				["action", "Enter Umbral Form"],
				["bonus action", "Exit Umbral Form"],
			],
		},
		subclassfeature10: {
			name: "Wraith Flight",
			source: ["VSoS", 140],
			minlevel: 10,
			description: desc([
				"Thrall fly speeds double, and while flying, opportunity attacks against them have disadv.",
			]),
			calcChanges: {
				companionCallback: [
					function (prefix, oCrea, bAdd, sCompType) {
						if (
							sCompType !== "undead thrall" &&
							!/fly ?(\d+)/i.test(oCrea.speed)
						)
							return;
						if (bAdd && /fly ?(\d+)/i.test(oCrea.speed)) {
							var spd = oCrea.speed.match(/fly ?(\d+)/i);
							var newSpd = parseInt(spd[1]) * 2;
							Value(
								prefix + "Comp.Use.Speed",
								What(prefix + "Comp.Use.Speed").replace(
									/fly ?(\d+)/i,
									"fly " + newSpd
								)
							);
						} else Value(prefix + "Comp.Use.Speed", oCrea.speed);
					},
				],
			},
		},
		subclassfeature20: {
			name: "Lichdom: Grim Reaper",
			source: ["VSoS", 140],
			minlevel: 20,
			description: desc([
				"I gain extra features when I undertake the rite to become a lich, found on the third page.",
			]),
			deathtouch: {
				name: "Death's Touch",
				source: ["VSoS", 140],
				description: desc([
					"When I use Charnel Touch and roll and 11 or higher on the attack roll, I hit the target,",
					"regardless of its AC.",
				]),
			},
			fellflight: {
				name: "Fell Flight",
				source: ["VSoS", 140],
				description: desc(["I gain a flying speed of 60 feet."]),
			},
			grimharvest: {
				name: "Grim Harvest",
				source: ["VSoS", 140],
				description: desc([
					"When I kill a Humanoid using Charnel Touch, I animate them as a visage under my control,",
					"which counts as one of my thralls.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "deathtouch",
				},
				{
					extrachoice: "fellflight",
				},
				{
					extrachoice: "grimharvest",
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bcharnel touch\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"hit on >10; Grim Harvest";
							fields.Description_Tooltip +=
								(fields.Description_Tooltip ? "\n" : "") +
								"Death's Touch: When you use your Charnel Touch against a creature you can see and roll an 11 or higher on the d20 for the attack roll, you hit the target, regardless of its AC.\nGrim Harvest: When you kill a Humanoid using Charnel Touch, you rip their soul from their body, which animates as a visage under your control, which counts as one of your thralls.";
						}
					},
					"When I use my Charnel Touch against a creature I can see and roll an 11 or higher on the d20 for the attack roll, I hit the target, regardless of its AC. Additionally, When I kill a Humanoid using Charnel Touch, I rip their soul from their body, which animates as a visage under my control, which counts as one of my thralls.",
				],
			},
			speed: { fly: { spd: 60 } },
		},
	},
});
