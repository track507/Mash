if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

[
	// Cantrips
	"acid splash",
	"candy blast",
	"card trick",
	"cheat",
	"chill touch",
	"cryptogram",
	"dancing lights",
	"eldritch orb",
	"eye of anubis",
	"hocus pocus",
	"mage hand",
	"message",
	"minor illusion",
	"minor lifesteal",
	"prestidigitation",
	"produce flame",
	"resistance",
	"spare the dying",
	"true strike",
	// 1st level spells
	"accursed act",
	"action",
	"animal friendship",
	"arcane anomaly",
	"bane",
	"blood print",
	"charm person",
	"clue",
	"comprehend languages",
	"curse of chains",
	"detect magic",
	"disguise self",
	"expeditious retreat",
	"faerie fire",
	"flawed reconstruction",
	"hideous laughter",
	"hollowing curse",
	"prehensile hair",
	"protection from evil and good",
	"psychedelics",
	"rumor",
	"silent image",
	"sleep",
	"speak with animals",
	"thunderwave",
	"unseen servant",
	"whispering wind",
	// 2nd level spells
	"aberrate",
	"aerial alacrity",
	"animal messenger",
	"blindness/deafness",
	"calm emotions",
	"curse ward",
	"darkness",
	"darkvision",
	"delay",
	"detect thoughts",
	"enthrall",
	"hold person",
	"intrusive thought",
	"invisibility",
	"jam weapon",
	"knock",
	"levitate",
	"locate object",
	"misty step",
	"nondescript",
	"petal storm",
	"protect threshold",
	"ray of enfeeblement",
	"see invisibility",
	"shatter",
	"spider climb",
	"suggestion",
	"swift flight",
	// 3rd level spells
	"benign dismemberment",
	"bestow curse",
	"clairvoyance",
	"counterspell",
	"curse of blades",
	"dispel magic",
	"fear",
	"fly",
	"glitterdust",
	"hypnotic pattern",
	"magic circle",
	"major image",
	"nondetection",
	"phantasmal beauty",
	"remove curse",
	"ruby-eye curse",
	"rusting grasp",
	"séance",
	"sending",
	"slow",
	"speak with dead",
	"speak with plants",
	"stinking cloud",
	"tongues",
	// 4th level spells
	"arcane eye",
	"banishment",
	"black tentacles",
	"compulsion",
	"confusion",
	"dimension door",
	"dire charm",
	"dominate beast",
	"false vision",
	"gahoul's scapegoat",
	"greater invisibility",
	"hallucinatory terrain",
	"invisibility purge",
	"locate creature",
	"mandy's enchanted carriage",
	"mandy's feral follower",
	"mandy's marvelous dress",
	"phantasmal killer",
	"polymorph",
	// 5th level spells
	"contagion",
	"dispel evil and good",
	"dominate person",
	"dream",
	"frolicking fountain",
	"geas",
	"hold monster",
	"insect plague",
	"mislead",
	"modify memory",
	"pharaoh's curse",
	"planar binding",
	"scrying",
	"seeming",
	"telekinesis",
	// 6th level spells
	"corruption curse",
	"demand",
	"elemental curse",
	"eyebite",
	"flesh to stone",
	"frenzy",
	"guards and wards",
	"mass suggestion",
	"programmed illusion",
	"true seeing",
	// 7th level spells
	"abduct",
	"curse of binding",
	"etherealness",
	"mirage arcane",
	"plane shift",
	"project image",
	"sequester",
	"symbol",
	"teleport",
	// 8th level spells
	"antipathy/sympathy",
	"dominate monster",
	"feeblemind",
	"glibness",
	"mind blank",
	"power word stun",
	// 9th level spells
	"astral projection",
	"foresight",
	"identity curse",
	"imprisonment",
	"true polymorph",
	"weird",
].forEach(function (s) {
	if (
		SpellsList[s] &&
		SpellsList[s].classes &&
		SpellsList[s].classes.indexOf("witch") === -1
	)
		SpellsList[s].classes.push("witch");
});

ClassList["sorcerer"].regExpSearch = /sorcerer/i;
ClassList["witch"] = {
	regExpSearch: /witch/i,
	name: "Witch",
	source: ["VSoS", 174],
	primaryAbility: "Charisma",
	abilitySave: 6,
	prereqs: "Charisma 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Cha", "Wis"],
	skillstxt: {
		primary:
			"Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, Nature, Religion, and Survival.",
	},
	toolProfs: {
		primary: [["Alchemist supplies"], ["Poisoner's kit"]],
	},
	armorProfs: {
		primary: [true, false, false, false],
		secondary: [true, false, false, false],
	},
	weaponProfs: {
		primary: [true, false, ["blowgun", "shortsword", "whip"]],
		secondary: [true, false],
	},
	equipment:
		"Witch starting equipment:" +
		"\n \u2022 A whip and a blowgun -or- a light crossbow and 20 bolts -or- any simple weapon;" +
		"\n \u2022 A component pouch -or- an arcane focus;" +
		"\n \u2022 A scholar's pack -or- a dungeoneer's pack;" +
		"\n \u2022 Leather armor, any simple weapon, and a dagger.",
	subclasses: ["Witch's Craft", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor: 1,
	spellcastingKnown: {
		cantrips: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells: [
			2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15,
			15,
		],
	},
	features: {
		spellcasting: {
			name: "Spellcasting",
			source: ["VSoS", 175],
			minlevel: 1,
			description: desc([
				"I can cast witch cantrips/spells that I know, using Charisma as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus for my witch spells",
				"I can cast my known witch spells as rituals if they have the ritual tag",
			]),
			additional: levels.map(function (n, idx) {
				var cantr = [
					4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
				][idx];
				var splls = [
					2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15,
					15, 15, 15,
				][idx];
				return cantr + " cantrips \u0026 " + splls + " spells known";
			}),
		},
		"witch's curse": {
			name: "Witch's Curse",
			source: ["VSoS", 175],
			minlevel: 1,
			description: desc([
				'Chose a Witch\'s Curse using the "Choose Feature" button above',
			]),
			choices: [
				"Burned",
				"Drowned",
				"Feral",
				"Hideous",
				"Hollow",
				"Infested",
				"Loveless",
				"Possessed",
				"Starving",
				"Visions",
				"Whispers",
			],
			burned: {
				name: "Burned",
				source: ["VSoS", 175],
				description: desc([
					"I have resistance to fire damage, and I know produce flame as a witch cantrip",
				]),
				dmgres: ["Fire"],
				spellcastingBonus: [
					{
						name: "Burned (Produce Flame)",
						spells: ["produce flame"],
						selection: ["produce flame"],
						times: 1,
					},
				],
			},
			drowned: {
				name: "Drowned",
				source: ["VSoS", 176],
				description: desc([
					"I can breathe air and water and I have a swim speed equal to my walking speed",
				]),
				speed: { swim: { spd: "walk", enc: "walk" } },
			},
			feral: {
				name: "Feral",
				description: desc([
					"I gain proficiency in Survival and an AC of 13 + Dex without armor or a shield",
				]),
				skills: ["Survival"],
				armorOptions: [
					{
						regExpSearch: /feral/i,
						name: "Feral",
						source: ["VSoS", 176],
						ac: 13,
						selectNow: true,
					},
				],
			},
			hideous: {
				name: "Hideous",
				source: ["VSoS", 176],
				description: desc([
					"I'm proficient in Intimidation. When I roll initiative, I can scare a humanoid I can see",
					"They must make a Wisdom save or be frightened until the end of my next turn",
				]),
				skills: ["Intimidation"],
			},
			hollow: {
				name: "Hollow",
				source: ["VSoS", 176],
				description: levels.map(function (n) {
					return desc([
						"When I or my familiar reduce an enemy to 0 HP, I gain " +
							n +
							" + Cha mod (min 1) temp HP",
					]);
				}),
			},
			infested: {
				name: "Infested",
				source: ["VSoS", 176],
				description: levels.map(function (n) {
					if (n < 7) {
						var descr = [
							"I am immune to disease, my familiar can be a swarm of rats",
						];
					} else {
						var descr = [
							"I am immune to disease, my familiar can be a swarm of rats or insects",
						];
					}
					return desc(descr);
				}),
				savetxt: { immune: ["disease"] },
			},
			loveless: {
				name: "Loveless",
				source: ["VSoS", 176],
				description: desc(["I am immune to being charmed"]),
				savetxt: { immune: ["charmed"] },
			},
			possessed: {
				name: "Possessed",
				source: ["VSoS", 176],
				description: desc([
					"I learn additional witch spells at levels 1, 4, 8, and 12",
				]),
				additional: levels.map(function (n) {
					return n < 2
						? "1 additional spell"
						: (n < 5 ? "2" : n < 9 ? "3" : "4") +
								" additional spells";
				}),
				spellcastingBonus: [
					{
						name: "Possessed",
						times: [
							1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,
							4, 4, 4,
						],
						class: "witch",
						level: [1, 9],
					},
				],
			},
			starving: {
				name: "Starving",
				source: ["VSoS", 176],
				description: desc([
					"I don't need to eat or drink and I am immune to being poisoned",
				]),
				savetxt: { immune: ["poisoned"] },
			},
			visions: {
				name: "Visions",
				source: ["VSoS", 176],
				description: desc([
					"I can add my Charisma modifier to initiative rolls",
				]),
				addMod: {
					type: "skill",
					field: "Init",
					mod: "max(Cha|0)",
					text: "I can add my Charisma modifier to initiative rolls.",
				},
			},
			whispers: {
				name: "Whispers",
				source: ["VSoS", 176],
				description: desc([
					"I can speak telepathically to a creature within 30 ft that I can see if",
					"they can at least understand one language.",
				]),
				languageProfs: ["Telepathy (30 ft)"],
			},
		},
		hexes: {
			name: "Hexes",
			source: ["VSoS", 176],
			minlevel: 1,
			description: desc([
				'Use the "Choose Feature" button above to add Hexes to the third page',
				"Hexes uses my spell attack and saves unless stated otherwise.",
				"All Hexes require verbal or somatic components, my choice when I cast",
				"Hexes take concentration, but I can concentrate on both a hex and a spell",
				"Whenever I gain a witch level, I can replace a hex I know with another",
			]),
			additional: levels.map(function (n) {
				return (
					(n < 2
						? 2
						: n < 5
						? 3
						: n < 9
						? 4
						: n < 13
						? 5
						: n < 17
						? 6
						: 7) + " hexes known"
				);
			}),
			extraname: "Hexes",
			extrachoices: [
				"Abate",
				"Apathy",
				"Beckon Familiar (prereq: level 2 witch)",
				"Bleeding",
				"Charm",
				"Dire Familiar (prereq: level 2 witch)",
				"Disorient",
				"Doomward",
				"Duplicity",
				"Evil Eye",
				"Fortune",
				"Go Unseen",
				"Hobble",
				"Knowing",
				"Mire",
				"Misfortune",
				"Obfuscate",
				"Peacebond",
				"Pox",
				"Ruin",
				"Scurry",
				"Shriek",
				"Slumber",
				"Slur",
				"Tremors",
				"Ward",
			],
			extraTimes: levels.map(function (n) {
				return n < 2
					? 2
					: n < 5
					? 3
					: n < 9
					? 4
					: n < 13
					? 5
					: n < 17
					? 6
					: 7;
			}),
			action: ["action", "Hex"],
			abate: {
				name: "Abate",
				source: ["VSoS", 178],
				description: desc([
					"I can force a crea I can see within 60 ft to make a Charisma save.",
					"On a failed save, they can't take reactions until the end of my next turn.",
				]),
			},
			apathy: {
				name: "Apathy",
				source: ["VSoS", 178],
				description: desc([
					"I can force a crea I can see within 60 ft to make a Charisma save.",
					"On a failed save, they become indifferent towards one of their enemies of my choice.",
				]),
			},
			"beckon familiar (prereq: level 2 witch)": {
				name: "Beckon Familiar",
				description: desc([
					"I can cast the find familiar spell without using a spell slot or components",
					"Once I cast it in this way, I can't again for 1 minute",
				]),
				source: ["VSoS", 178],
				calcChanges: {
					spellAdd: [
						function (spellKey, spellObj, spName) {
							if (
								spName == "witch" &&
								spellKey == "find familiar"
							) {
								spellObj.time = "1 a";
							}
						},
					],
				},
				prereqeval: function (v) {
					return classes.known.witch.level >= 2;
				},
			},
			bleeding: {
				name: "Bleeding",
				description: desc([
					"I can force one creature within 60 ft to make a Constituion save",
					"On a failed save, they take an extra 1d4 dmg when damaged until the end of my next turn",
				]),
				source: ["VSoS", 178],
			},
			charm: {
				name: "Charm",
				description: desc([
					"I can force one creature within 60 ft to make a Wisdom save",
					"On a failed save, they are charmed by me until the end of my next turn",
					"When the hex ends, they know they were charmed by me",
				]),
				source: ["VSoS", 178],
			},
			"dire familiar (prereq: level 2 witch)": {
				name: "Dire Familiar",
				description: desc([
					"I can empower my familiar for 1 minute; it adds my Cha mod to its dmg rolls",
					"And its current and max HP increases by twice my witch level",
					"I can't cast this hex again until my familiar is dismissed or the duration expires",
				]),
				source: ["VSoS", 178],
				prereqeval: function (v) {
					return classes.known.witch.level >= 2;
				},
			},
			disorient: {
				name: "Disorient",
				description: desc([
					"I can force one creature within 60 ft to make a Constitution save",
					"On a failed save, until the end of my next turn they must subtract",
					"a d6 from their next attack roll",
				]),
				source: ["VSoS", 178],
			},
			doomward: {
				name: "Doomward",
				description: desc([
					"I can choose a friendly creature within 60 ft, not including myself",
					"The next time they would drop to 0 HP and not die they drop to 1 HP instead",
					"This hex then ends, and can't be used on the same target until a long or short rest",
				]),
				usages: 1,
				additional: "Cannot target 2\xD7",
				recovery: "short rest",
				source: ["VSoS", 178],
			},
			duplicity: {
				name: "Duplicity",
				description: desc([
					"I create a duplicate self to confuse enemies",
					"When I am attacked, I roll any die, on an odd number the attack misses",
					"This lasts until the end of my next turn, or until I attack or cast a spell",
				]),
				source: ["VSoS", 179],
			},
			"evil eye": {
				name: "Evil Eye",
				description: desc([
					"I can force one creature within 60 ft to make a Wisdom save",
					"On a failed save, they are frightened of me until the end of my next turn",
				]),
				source: ["VSoS", 179],
			},
			fortune: {
				name: "Fortune",
				description: desc([
					"I can choose another friendly creature within 60 ft, not myself",
					"They have advantage of saving throws until the end of my next turn",
				]),
				source: ["VSoS", 179],
			},
			"go unseen": {
				name: "Go Unseen",
				description: desc([
					"My familiar and I become invisible",
					"This lasts until the end of my next turn, or until I or my familiar attacks or casts a spell",
					"I can't cast this hex again for 1 minute",
				]),
				usages: 1,
				recovery: "Minute",
				source: ["VSoS", 179],
			},
			hobble: {
				name: "Hobble",
				description: desc([
					"I can choose one creature I can see within 60 ft to make a Strength save.",
					"On a failed save, the target's speed is reduced to 10 ft until the end of",
					"my next turn. If the target is flying, it falls, unless it can hover or",
					"is being held up by magic.",
				]),
				source: ["VSoS", 179],
			},
			knowing: {
				name: "Knowing",
				description: desc([
					"I gain adv. on Insight until my next turn. I learn one of the following from each crea in 30 ft",
					"\u2022 If they can speak",
					"\u2022 If they are at half or less max HP",
					"\u2022 Their lowest ability score",
					"I can only learn one of these things per creature, even if I cast the hex more than once",
				]),
				source: ["VSoS", 179],
			},
			mire: {
				name: "Mire",
				source: ["VSoS", 179],
				description: desc([
					"I create a 30 ft radius of difficult terrain until the end of my next turn",
					"I can move freely in this area",
				]),
			},
			misfortune: {
				name: "Misfortune",
				description: desc([
					"I choose one creature within 60 ft",
					"Until the end of my next turn, whenever the creature rolls a 20 it instead becomes a 1",
				]),
				source: ["VSoS", 179],
			},
			obfuscate: {
				name: "Obfuscate",
				description: desc([
					"I create a 20 ft radius sphere of fog centered around myself",
					"The fog spreads around corners and heavily obscures the area",
					"This lasts until the end of my next turn or until a wind of at least 10 mph disperses it",
				]),
				source: ["VSoS", 179],
			},
			peacebond: {
				name: "Peacebond",
				description: desc([
					"The weapons and ammo of creatures within 30 ft are locked in their retainers",
					"They can use an action to free the weapon with a Strength check vs my spell save DC",
					"This lasts until the end of my next turn",
				]),
				source: ["VSoS", 179],
			},
			pox: {
				name: "Pox",
				description: desc([
					"I can force one creature within 5 ft to make a Constitution save",
					"On a failed save, they are poisoned until the end of my next turn",
				]),
				source: ["VSoS", 179],
			},
			ruin: {
				name: "Ruin",
				description: desc([
					"I can force one creature within 60 ft to make a Constitution save",
					"On a failed save, their AC is lowered by 3, to a minimum of 10, until the end of my next turn",
				]),
				source: ["VSoS", 179],
			},
			scurry: {
				name: "Scurry",
				description: desc([
					"A nonmagical object less than 10 lbs within 30 ft sprouts legs and runs away",
					"This object cannot be held in hand or worn by a creature, and gains a minimum AC of 10",
					"Upon casting this hex it moves 20 ft in a direction of my choice",
					"It remains animated until the end of my next turn or until it is picked up",
				]),
				source: ["VSoS", 180],
			},
			shriek: {
				name: "Shriek",
				description: desc([
					"As a bonus action, each large or smaller creature within 5 ft is pushed 5 ft away from you",
				]),
				source: ["VSoS", 180],
				action: ["bonus action", " (Hex)"],
			},
			slumber: {
				name: "Slumber",
				description: desc([
					"I can force one creature within 60 ft to make a Wisdom save",
					"On a failed save, they fall unconscious until they take damage or the end of my next turn",
					"Targets that are undead, can't be charmed, or have current HP > 5 \xD7 witch level are immune",
				]),
				source: ["VSoS", 180],
			},
			slur: {
				name: "Slur",
				descripton: desc([
					"I can choose a creature within 60 ft to make a Charisma save",
					"On a failed saved, they can't speak coherently until the end of my next turn.",
					"If they attempt to cast a spell with verbal components, roll a d20. On an odd roll, it fails.",
				]),
			},
			tremors: {
				name: "Tremors",
				description: desc([
					"Each creature within 10 ft must make a Dexterity save or be knocked prone",
				]),
				source: ["VSoS", 180],
			},
			ward: {
				name: "Ward",
				description: desc([
					"I can choose another friendly creature within 60 ft",
					"Until the end of my next turn, each time it takes damage it reduces that damage by 3",
				]),
				source: ["VSoS", 180],
			},
		},
		cackle: {
			name: "Cackle",
			source: ["VSoS", 176],
			minlevel: 2,
			description: desc([
				"As a bonus action, my hex extends by 1 round for each hexed creature within 60 feet",
			]),
			action: [["bonus action", ""]],
		},
		familiar: {
			name: "Familiar",
			source: ["VSoS", 177],
			minlevel: 2,
			description: desc([
				"I learn Find Familiar, it can also be a death snail, flying book, homunculus, mock, moon jelly,",
				"pet rock, pseudodragon, rag doll, sprite, tin soldier, winter wolf pup, or yarn golem",
				"Each turn I can use my action or bonus action to make my familiar to attack with its reaction",
			]),
			additional: "See Companion page",
			spellcastingBonus: [
				{
					name: "Familiar",
					spells: ["find familiar"],
					selection: ["find familiar"],
					times: 1,
				},
			],
			spellChanges: {
				"find familiar": {
					components: "V,S",
					compMaterial: "",
					description:
						"Gain the services of a familiar; can see through its eyes; it can deliver spells; see B",
					descriptionFull:
						"You gain the service of a familiar, a spirit that takes an animal form you choose - bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey or fiend (your choice) instead of a beast." +
						"\n   " +
						"Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack on its turn, but it can take other actions as normal." +
						"\n   " +
						"When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses." +
						"\n   " +
						"Once per turn, as an action or a bonus action I can command the familiar to attack with its reaction." +
						"\n   " +
						"As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits you summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you." +
						"\n   " +
						"You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature." +
						"\n   " +
						"Finally, when you cast a spell, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.",
					changes:
						"I can cast Find Familiar without requiring material components, the familiar can deliver any spell I cast.",
				},
			},
		},
		subclassfeature3: {
			name: "Witch's Craft",
			source: ["VSoS", 177],
			minlevel: 3,
			description: desc([
				'Choose your Craft, a learned variety of magic, and put it in the "Class" field',
			]),
		},
		"insidious spell": {
			name: "Insidious Spell",
			source: ["VSoS", 177],
			minlevel: 5,
			description: desc([
				"If an enemy is the sole target of my hex, it has disadv. on the first save of my witch spells",
			]),
		},
		"improved familiar": {
			name: "Improved Familiar",
			source: ["VSoS", 177],
			minlevel: 7,
			description: desc([
				"My familiar's attacks count as magical. I add the following to the forms I can summon:",
				"Brass Dragon Wyrmling (without breath weapons), Fright, Grep, Imp, or Quasit",
			]),
		},
		"dying curse": {
			name: "Dying Curse",
			source: ["VSoS", 177],
			minlevel: 9,
			description: desc([
				"When I am reduced to 0 HP by a creature, but don't die I can curse that creature for 24 hrs",
				"While cursed they have disadv. on attacks, ability checks, and saves.",
				"This curse ends when I regain conciousness, or with the remove curse spell",
			]),
			usages: 1,
			recovery: "long rest",
		},
		"grand hex": {
			name: "Grand Hex",
			source: ["VSoS", 177],
			minlevel: 11,
			description: desc([
				'Use the "Choose Feature" button above to add Grand Hexes to the Notes page',
			]),
			toNotesPage: [
				{
					name: "Grand Hex",
					source: ["VSoS", 177],
					popupname: "Grand Hex",
					note: ["My Grand Hexes are described as below"],
				},
			],
			additional: levels.map(function (n) {
				return n < 11
					? ""
					: (n < 13 ? 1 : n < 15 ? 2 : n < 18 ? 3 : 4) +
							" grand hexes known";
			}),
			extraname: "Grand Hex",
			extrachoices: [
				"Cauldron",
				"Coven",
				"Dual Hex",
				"Forceful Personality",
				"Hybrid",
				"Poison Apple",
				"Possession",
				"War Hex",
				"Witch's Broom",
				"Witch's Hut",
			],
			extraTimes: levels.map(function (n) {
				return n < 11 ? 0 : n < 13 ? 1 : n < 15 ? 2 : n < 18 ? 3 : 4;
			}),
			cauldron: {
				toNotesPage: [
					{
						name: "Cauldron",
						source: ["VSoS", 180],
						popupname: "Cauldron",
						note: [
							"I gain a pool of alchemy points equal to half my witch level, rounded down",
							"I regain these points after a long rest",
							"I can spend 10 minutes and use any number of alchemy points to brew potions",
							"These potions use your spell save DC, and last for 24 hours",
							"I can make the following potions:",
							"\u2022 Potion of Animal Friendship\t\u2015 1 Point",
							"\u2022 Potion of Growth\t\t\u2015 1 Point",
							"\u2022 Potion of Healing\t\t\u2015 1 Point",
							"\u2022 Potion of Water Breathing\t\u2015 1 Point",
							"\u2022 Oil of Slipperiness\t\t\u2015 2 Points",
							"\u2022 Philter of Love\t\t\u2015 2 Points",
							"\u2022 Potion of Greater Healing\t\u2015 2 Points",
							"\u2022 Potion of Heroism\t\t\u2015 2 Points",
							"\u2022 Potion of Resistance\t\u2015 2 Points",
							"\u2022 Potion of Clairvoyance\t\u2015 3 Points",
							"\u2022 Potion of Diminution\t\u2015 3 Points",
							"\u2022 Potion of Gaseous Form\t\u2015 3 Points",
						],
						amendTo: "Grand Hex",
					},
				],
				limfeaname: "Alchemy Points",
				usages: levels.map(function (n) {
					return n < 11 ? "" : Math.floor(n / 2);
				}),
				recovery: "long rest",
			},
			coven: {
				toNotesPage: [
					{
						name: "Coven",
						source: ["VSoS", 180],
						popupname: "Coven",
						note: [
							"I can induct up to two willing spellcasters into my coven with an 8 hour ritual",
							"This ritual can be done during a long rest",
							"While at least two of your coven are within 30 ft they can cast Coven Spells",
							"The coven has a shared pool of spell slots, one of each level from 1st to 5th",
							"These slots can be used to cast any spell known to the members",
							"These slots are regained after all members finish a long rest",
							"My coven can cast the following spells, in addition to their own:",
							"\u2022 1st\tBane, Hideous Laughter",
							"\u2022 2nd\tInvisibility, Ray of Enfeeblement",
							"\u2022 3rd\tBestow Curse, Counterspell",
							"\u2022 4th\tBanishment, Polymorph",
							"\u2022 5th\tContagion, Scrying",
						],
						amendTo: "Grand Hex",
					},
				],
				spellcastingBonus: {
					name: "Coven Spells",
					spells: [
						"bane",
						"tasha's hideous laughter",
						"invisibility",
						"ray of enfeeblement",
						"bestow curse",
						"counterspell",
						"banishment",
						"polymorph",
						"contagion",
						"scrying",
					],
					selection: [
						"bane",
						"tasha's hideous laughter",
						"invisibility",
						"ray of enfeeblement",
						"bestow curse",
						"counterspell",
						"banishment",
						"polymorph",
						"contagion",
						"scrying",
					],
					firstCol: "C",
					times: 10,
				},
			},
			"dual hex": {
				toNotesPage: [
					{
						name: "Dual Hex",
						source: ["VSoS", 181],
						popupname: "Dual Hex",
						note: [
							"Whenever I cast a hex which targets one creature, I can target two creatures",
							"For these creatures, I can gain the benefits of Insidious Spell against both",
						],
						amendTo: "Grand Hex",
					},
				],
			},
			"forceful personality": {
				toNotesPage: [
					{
						name: "Forceful Personality",
						source: ["VSoS", 181],
						popupname: "Forceful Personality",
						note: [
							"My charisma score increases by 2, to a maximum of 22",
						],
						amendTo: "Grand Hex",
					},
				],
				scores: [0, 0, 0, 0, 0, 2],
				scoresMaximum: [0, 0, 0, 0, 0, 22],
			},
			hybrid: {
				toNotesPage: [
					{
						name: "Hybrid",
						source: ["VSoS", 181],
						popupname: "Hybrid",
						note: [
							"As a bonus action, if my familiar is within 5 ft, I can transform into a hybrid",
							"For the next minute I gain the following benefits:",
							"\u2022 I gain temporary hit points equal to my familiar's hit points",
							"\u2022 My Armor Class equals 10 + my Dex mod + my Cha mod without a shield",
							"\u2022 I gain two natural melee weapons, corresponding to my familiar's attacks",
							"\u2022 I am proficient with these, and use Cha for the attack and damage rolls",
							"\u2022 They deal 1d10 bludgeoning, piercing, or slashing, (my choice)",
							"\u2022 I can attack twice when I take the Attack action, instead of once",
							"\u2022 I can use any action my familiar possesses",
							"I can dismiss the transformation on my turn as a free action",
							"When it ends, I can't summon my familiar again until a short rest",
						],
						amendTo: "Grand Hex",
					},
				],
				action: ["bonus action", "Magical Hybrid"],
				usages: 1,
				recovery: "short rest",
				weaponOptions: {
					regExpSearch: /^(?=.*familiar)(?=.*fury).*$/i,
					name: "Familiar's Fury",
					source: ["VSoS", 181],
					ability: 6,
					type: "Natural",
					damage: [1, 10, "My choice"],
					range: "Melee",
					description:
						"Only while hybrid, choose between Bludg, Pierc, Slash",
					abilitytodamage: true,
					selectNow: true,
				},
				armorOptions: [
					{
						regExpSearch: /^(?=.*familiar)(?=.*armor).*$/i,
						name: "Familiar's Armor",
						source: ["VSoS", 181],
						ac: "10+Cha",
					},
				],
			},
			"poison apple": {
				toNotesPage: [
					{
						name: "Poison Apple",
						source: ["VSoS", 181],
						popupname: "Poison Apple",
						note: [
							"As an action, I can produce a magical apple, the appearance I control",
							"On my turn, I can spend an action to eat the apple for the following:",
							"\u2022 I regain HP equal to twice my witch level plus my Charisma modifier",
							"\u2022 I regain an expended spell slot of 5th level or lower",
							"\u2022 I can end one of the following conditions on myself:",
							"\tBlinded, deafened, paralyzed, or poisoned",
							"If another creature eats the apple it must make a Wis save with disadv.",
							"On a failed save, the creature is poisoned for 24 hours",
							"For each hour poisoned, they lose 4d8 HP which can't be reduced or avoided",
							"If they would fall to 0 HP, they instead drop to 1 HP and fall unconscious",
							"They remain unconscious for 7 days, or with a remove curse spell",
							"The apple stays magical for 24 hours, I must long rest before creating another",
						],
						amendTo: "Grand Hex",
					},
				],
				usages: 1,
				recovery: "long rest",
				action: ["action", "Create Poison Apple"],
			},
			possession: {
				toNotesPage: [
					{
						name: "Possession",
						source: ["VSoS", 181],
						popupname: "Possession",
						note: [
							"As an action, I attempt to possess a large or smaller creature within 10 ft",
							"The creature makes a Charisma save, if its CR > my witch level it auto succeeds",
							"On a failed save, I disappear and the target is incapacitated",
							"I control its body and can't be targeted by any attack, spell, or effect",
							"I maintain my Int, Wis, and Cha scores and alignment",
							"I use the creature's statistics; except knowledge, class features, and proficiencies",
							"I am treated as an undead spirit and can be banished from the target",
							"If I am banished my body rematerializes within 5 feet and I return to it",
							"This possession lasts for 1 hour, unless the body drops to 0 HP",
							"I can use this ability once per long rest",
						],
						amendTo: "Grand Hex",
					},
				],
				usages: 1,
				recovery: "long rest",
				action: ["action", "Possess"],
			},
			"war hex": {
				toNotesPage: [
					{
						name: "War Hex",
						source: ["VSoS", 182],
						popupname: "War Hex",
						note: [
							"When I cast a single target hex, I can use my bonus action to cast a cantrip",
							"This cantrip must target the same creature",
						],
						amendTo: "Grand Hex",
					},
				],
				action: ["bonus action", "Cast Cantrip (After Hex)"],
			},
			"witch's broom": {
				toNotesPage: [
					{
						name: "Witch's Broom",
						source: ["VSoS", 182],
						popupname: "Witch's Broom",
						note: [
							"I can use my action to enchant a mundane object to fly",
							"While holding this item with one hand I gain a fly speed of 60 ft",
							"I lose this bonus if I wear medium or heavy armor, or a shield",
							"I can only enchant one object this way at a time",
							"If I target another object, the previous enchantment ends",
						],
					},
				],
				action: ["action", "Enchant Broom"],
				speed: { fly: { spd: 60, enc: 0 } },
			},
			"witch's hut": {
				toNotesPage: [
					{
						name: "Witch's Hut",
						source: ["VSoS", 182],
						popupname: "Witch's Hut",
						note: [
							"I can perform a 24 hour long ritual to enchant a structure",
							"This structure must fit within a 15 foot cube",
							"I animate it as a Huge object, as per the animate objects spell",
							"The structure rises up on a pair of magical legs and obeys me",
							"The entrance is linked as per the magnificent mansion spell",
							"I can command the structure while inside this extradimension",
							"If the structure is destroyed, creatures inside are ejected",
							"They appear in adjadent unoccupied spaces to the structure",
							"As an action, I can teleport the structure within 60 ft of me",
							"I can only teleport it this way once per long rest",
							"I can repeat the ritual to end the current enchantment and begin a new one",
						],
					},
				],
				action: ["action", "Teleport Witch's Hut"],
			},
		},
		hexmaster: {
			name: "Hexmaster",
			source: ["VSoS", 177],
			minlevel: 20,
			description: desc([
				"Creatures have disadv. on saves against my hexes",
			]),
		},
	},
};

// * black magic witch subclass
AddSubClass("witch", "black magic", {
	regExpSearch:
		/^(((?=.*(black|pain|dark))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*necromancer)).*$/i,
	subname: "Black Magic",
	source: ["VSoS", 183],
	features: {
		subclassfeature3: {
			name: "Hex: Decay",
			source: ["VSoS", 183],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"exhume",
				"inflict wounds",
				"gentle repose",
				"magic weapon",
				"animate dead",
				"vampiric touch",
				"blight",
				"death ward",
				"cloudkill",
				"contagion",
			],
			spellcastingExtraApplyNonconform: true,
			decay: {
				name: "Decay",
				extraname: "Black Magic Hex",
				source: ["VSoS", 183],
				description: desc([
					"As an action, I can force a creature within 60 ft I can see to make a Constitution save",
					"On a failed save, they are decaying until the end of my next turn",
					"While decaying they take 1d6 Necrotic damage at the start of their next turn",
					"The target's max HP is reduced that much, and they die if their HP max is reduced to 0",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "decay",
				},
			],
		},
		subclassfeature6: {
			name: "Undeath Command",
			source: ["VSoS", 183],
			minlevel: 6,
			description: desc([
				"When I use a bonus action to command my familiar, I can also command an undead I control",
			]),
		},
		subclassfeature10: {
			name: "Life Tether",
			source: ["VSoS", 183],
			minlevel: 10,
			description: desc([
				"As a reaction, when I take damage from a creature I can see I can damage a sole hex target",
				"I take half the damage (rounded down), and the hexed creature takes the rest",
			]),
			usages: 1,
			recovery: "short rest",
			action: ["reaction", ""],
		},
		subclassfeature14: {
			name: "Black Sacrifice",
			source: ["VSoS", 183],
			minlevel: 14,
			description: desc([
				"As an action, if my familiar is within 10 ft, I can dissolve its bond to the plane",
				"Each creature I choose within 20 ft of it, make a Dex save; 10d8 Necrotic dmg, save halves",
				"Their HP max is reduced by the Necrotic dmg taken, and dies if their HP max is reduced to 0",
				"I can't summon my familiar again until I finish a long rest",
			]),
			usages: 1,
			recovery: "long rest",
			action: ["action", ""],
		},
	},
});

// * blood magic witch subclass
AddSubClass("witch", "blood magic", {
	regExpSearch:
		/^((?=.*(blood|crimson|mortality|essense|sacrifice|forbidden))(?=.*magic|artist|hexer|witch|coven|cabal)).*$/i,
	subname: "Blood Magic",
	source: ["VSoS", 184],
	features: {
		subclassfeature3: {
			name: "Hex: Blood Curse",
			source: ["VSoS", 184],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"hellish rebuke",
				"hollowing curse",
				"melf's acid arrow",
				"hold person",
				"ruby-eye curse",
				"vampiric touch",
				"blight",
				"dominate beast",
				"dominate person",
				"hold monster",
			],
			spellcastingExtraApplyNonconform: true,
			"blood curse": {
				name: "Blood Curse",
				extraname: "Blood Magic Hex",
				source: ["VSoS", 184],
				description: desc([
					"As an action, I can force a creature I can see within 60 ft to make a Constitution save",
					"On a failed save, they are blood cursed until the end of my next turn",
					"If they have less than half max HP and less than twice my witch level, they drop to 0 HP",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "blood curse",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Novice Hemomancy",
			source: ["VSoS", 184],
			minlevel: 3,
			description: desc([
				"I can replace the material components without a gold cost of my spells with a drop of blood",
				"If the material components are consumed, I cannot use this Hex.",
			]),
		},
		"subclassfeature3.2": {
			name: "Arcane Bloodletting",
			source: ["VSoS", 184],
			minlevel: 3,
			description: desc([
				"I can pay 5 HP to cast a spell with a casting time of an action as a bonus action",
			]),
			action: ["bonus action", ""],
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "long rest",
			action: ["bonus action", ""],
		},
		subclassfeature6: {
			name: "Deathseeker",
			source: ["VSoS", 184],
			minlevel: 6,
			description: desc([
				"I can detect creas with less than half max HP even if heavily obscured, through some barriers",
				"I have advantage to track creatures I or my familiar have damaged within the last 24 hours",
			]),
			vision: [["Deathseeker", 60]],
		},
		subclassfeature10: {
			name: "Hemomantic Recovery",
			source: ["VSoS", 184],
			minlevel: 10,
			description: desc([
				"When I finish a short rest, I can spend hit dice to regain spell slots below 6th level:",
				"1st - 2 hit dice; 2nd - 3 hit dice; 3rd - 5 hit dice; 4th - 6 hit dice; 5th - 7 hit dice",
			]),
			usages: 1,
			recovery: "Day",
		},
		subclassfeature14: {
			name: "Sanguine",
			source: ["VSoS", 184],
			minlevel: 14,
			description: desc([
				"Once per round, when I damage the sole target of my hex with a spell, I can lose HP",
				"For every 5 HP I lose, I deal an extra 2d8 necrotic damage to a max of 6d8",
			]),
			additional: "2d8 per 5 HP, up to 6d8",
			usages: 1,
			recovery: "Round",
		},
	},
});

// * green magic witch subclass
AddSubClass("witch", "green magic", {
	regExpSearch:
		/^(((?=.*(green|nature|druidic|elder|primal))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*arborist)).*$/i,
	subname: "Green Magic",
	source: ["VSoS", 184],
	features: {
		subclassfeature3: {
			name: "Hex: Elder Tongue",
			source: ["VSoS", 184],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"entangle",
				"goodberry",
				"barkskin",
				"locate animals or plants",
				"conjure animals",
				"plant growth",
				"conjure woodland beings",
				"stoneskin",
				"awaken",
				"tree stride",
			],
			spellcastingExtraApplyNonconform: true,
			"elder tongue": {
				name: "Elder Tongue",
				extraname: "Green Magic Hex",
				source: ["VSoS", 184],
				description:
					"\n   " +
					"As a bonus action until the end of my next turn I can speak with beasts and plants" +
					"\n   " +
					"I gain adv. on all Cha checks to influence beasts and plants",
				action: ["bonus action", " (Hex)"],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "elder tongue",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Primal Ally",
			source: ["VSoS", 185],
			minlevel: 3,
			description:
				"\n   " +
				"My familiar gets three times my witch level as max HP instead of two",
		},
		subclassfeature6: {
			name: "Twin Familiar",
			source: ["VSoS", 185],
			minlevel: 6,
			description: desc([
				"When I summon my familiar I can summon two identical familiars with shared HP",
				"They roll once for initiative; I must command them separately; spells and features affect both",
				"I can use a bonus action to command one to attack, and an action to command the other to attack",
			]),
		},
		subclassfeature10: {
			name: "Vital Nourishment",
			source: ["VSoS", 185],
			minlevel: 10,
			description: desc([
				"When I finish a long rest, plant life within 120 ft nourish with food, water, and other needs",
				"If the plants produce fruits, berries, or vegetables, it can feed 6 creatures for one day",
				"I also choose 6 creatures I can see to gain temp hp equal to half my witch level + Cha mod",
				"I can choose to end the blinded, deafened, paralyzed, or poisoned condition on each creature",
			]),
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature14: {
			name: "Sacrificial Familiar",
			source: ["VSoS", 185],
			minlevel: 14,
			description: desc([
				"When I would be targeted by an attack in melee, if my familiar is within 5 ft",
				"I can use my reaction to make my familiar the target instead",
			]),
			action: ["reaction", ""],
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "long rest",
		},
	},
});

// * purple magic witch subclass
AddSubClass("witch", "purple magic", {
	regExpSearch:
		/^(((?=.*(purple|illusory|enchant|puppet|mind|dream|nightmare))(?=.*magic|artist|hexer|witch|coven|cabal|master))|(?=.*enchanter)).*$/i,
	subname: "Purple Magic",
	source: ["VSoS", 185],
	features: {
		subclassfeature3: {
			name: "Hex: Hallucination",
			source: ["VSoS", 185],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"charm person",
				"silent image",
				"enthrall",
				"invisibility",
				"hypnotic pattern",
				"major image",
				"confusion",
				"private sanctum",
				"modify memory",
				"seeming",
			],
			spellcastingExtraApplyNonconform: true,
			hallucination: {
				name: "Hallucination",
				extraname: "Purple Magic Hex",
				source: ["VSoS", 185],
				description: desc([
					"As an action, I can force one creature I can see within 60 ft to make a Wisdom save",
					"Creatures immune to being charmed automatically succeeds",
					"On a failed save, they get -1 to atks and checks until the end of my next turn",
					"At the start of each of its turns the penalty increases by 1 to a max of -5",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "hallucination",
				},
			],
		},
		subclassfeature6: {
			name: "False Authority",
			source: ["VSoS", 186],
			minlevel: 6,
			description: desc([
				"As an action creas perceive me as a figure of authority for 1 hour or until I end it on my turn",
				"As an action they can make an Investigation check vs my spell DC to see through my illusion",
			]),
			action: ["action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature10: {
			name: "Deceitful Transposition",
			source: ["VSoS", 186],
			minlevel: 10,
			description: desc([
				"As a bonus action I can create an illusion for 1 min or until the targets take damage",
				"Two creas w/in 60 ft are disguised as each other, including sounds, smells, etc.",
				"As an action other creas can make an Investigation check to see through both illusions",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature14: {
			name: "Frenzied Nightmare",
			source: ["VSoS", 186],
			minlevel: 14,
			description: desc([
				"A crea affected by my Hallucination sees all creas as enemies for 1 min or until the hex ends",
				"It must choose random targets for abilities, attacks and must take opportunity attacks",
			]),
			usages: 1,
			recovery: "long rest",
		},
	},
});

// * red magic witch subclass
AddSubClass("witch", "red magic", {
	regExpSearch:
		/^(((?=.*(red|wrath|element))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*elementalist)).*$/i,
	subname: "Red Magic",
	source: ["VSoS", 186],
	features: {
		subclassfeature3: {
			name: "Hex: Imperil",
			source: ["VSoS", 186],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"burning hands",
				"magic missile",
				"melf's acid arrow",
				"scorching ray",
				"fireball",
				"protection from energy",
				"ice storm",
				"wall of fire",
				"cone of cold",
				"telekinesis",
			],
			spellcastingExtraApplyNonconform: true,
			imperil: {
				name: "Imperil",
				extraname: "Red Magic Hex",
				source: ["VSoS", 186],
				description:
					"\n   " +
					"As an action, I can force one creature within 60 ft to make a Constitution save" +
					"\n   " +
					"On a failed save, they lose resistance to a chosen damage type until the end of my next turn" +
					"\n   " +
					"If they have immunity it becomes resistance instead",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "imperil",
				},
			],
		},
		subclassfeature6: {
			name: "Convolute Energy",
			source: ["VSoS", 186],
			minlevel: 6,
			description:
				"\n   " +
				"Whenever I cast a spell that deals acid, cold, fire, lightning, poison, or thunder dmg" +
				"\n   " +
				"I can gain resistance to that type until the end of my next turn",
		},
		subclassfeature10: {
			name: "Invulnerability",
			source: ["VSoS", 186],
			minlevel: 10,
			description:
				"\n   " +
				"When hit with an atk I can see, I can use my reaction to subtract 50 from the dmg (min 0)",
			action: ["reaction", ""],
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature14: {
			name: "Elemental Annihilation",
			source: ["VSoS", 187],
			minlevel: 14,
			description:
				"\n   " +
				"When I cast a witch spell that deals acid, cold, fire, lightning, or thunder dmg" +
				"\n   " +
				"I can expend a spell slot of equal or higher level to deal max dmg",
			usages: 1,
			recovery: "long rest",
		},
	},
});

// * steel magic witch subclass
AddSubClass("witch", "steel magic", {
	regExpSearch:
		/^((?=.*(steel|metal|blade|battle))(?=.*magic|artist|hexer|witch|coven|cabal)).*$/i,
	subname: "Steel Magic",
	source: ["VSoS", 187],
	features: {
		subclassfeature3: {
			name: "Hex: Malevolence",
			source: ["VSoS", 187],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"heroism",
				"shield",
				"heat metal",
				"magic weapon",
				"blink",
				"haste",
				"death ward",
				"freedom of movement",
				"flame strike",
				"telekinesis",
			],
			spellcastingExtraApplyNonconform: true,
			malevolence: {
				name: "Malevolence",
				extraname: "Steel Magic Hex",
				source: ["VSoS", 187],
				description: desc([
					"As a bonus action, I gain the following benefits until the end of my next turn:",
					"\u2022 My AC without a shield becomes 12 + Dex mod + Cha mod",
					"\u2022 I can use Cha instead of Str or Dex for atks and dmg for non Heavy/Special melee weapons",
					"\u2022 If I take damage from a visible creature w/in 5 ft I can use my reaction to atk them once",
				]),
				armorOptions: [
					{
						regExpSearch: /^(?=.*steel)(?=.*armor).*$/i,
						name: "Steel Armor",
						source: ["VSoS", 181],
						ac: "12+Cha",
					},
				],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								v.isMeleeWeapon &&
								!/(heavy|special)/i.test(v.WeaponText) &&
								!v.theWea.special &&
								/(malevolence|steel magic ?(hex)?|hex)/i.test(
									v.WeaponText
								) &&
								What("Cha Mod") >
									What(
										AbilityScores.abbreviations[
											fields.Mod - 1
										] + " Mod"
									)
							) {
								fields.Mod = 6;
							}
						},
						'I can include "Malevolence", "Steel Magic", or "Hex" for the automation to treat the attack as a Steel Magic Hex. These attacks will use Charisma Instead of Str/Dex for determining the attack and damage rolls.',
					],
				},
				action: ["bonus action", " (Hex)"],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "malevolence",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Bonus Proficiencies",
			source: ["VSoS", 187],
			minlevel: 3,
			description:
				"\n   " +
				"I gain proficiency with other weapons as shown on the first page",
			weaponProfs: [
				false,
				false,
				[
					"battleaxe",
					"flail",
					"longsword",
					"morningstar",
					"rapier",
					"scimitar",
					"trident",
					"warhammer",
				],
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							v.isMeleeWeapon &&
							!/(heavy|special)/i.test(v.WeaponText) &&
							/martial/i.test(v.theWea.type) &&
							!v.theWea.special
						) {
							fields.Proficiency = true;
						}
					},
					"I gain proficiency with martial melee weapons that lack the Heavy or Special",
				],
			},
		},
		subclassfeature6: {
			name: "Cackling Killer",
			source: ["VSoS", 187],
			minlevel: 6,
			description:
				"\n   " +
				"When I use my Cackle, I can atk twice instead of once when I use the atk action on my turn",
		},
		subclassfeature10: {
			name: "Soulsword Familiar",
			source: ["VSoS", 187],
			minlevel: 10,
			description: desc([
				"As a bonus action, I can dismiss my familiar until I finish a short rest",
				"My weapon now deals an extra 1d8 fire dmg until I resummon my familiar",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/soulsword/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"+1d8 fire dmg";
						}
					},
					"I can include soulsword into a weapons name to deal an extra 1d8 fire damage with it.",
				],
			},
		},
		subclassfeature14: {
			name: "Shrieking Strike",
			source: ["VSoS", 187],
			minlevel: 14,
			description: desc([
				"Once per turn, when I hit with an atk I can force the target to make a Wisdom save",
				"On a fail they are frightened of me for 1 min; repeating the save at the end of its turns",
			]),
			usages: "Charisma modifier per",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "long rest",
		},
	},
});

AddSubClass("witch", "tea magic", {
	regExpSearch:
		/^(((?=.*(tea|caffiene|drink|calm|herb))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*(herbalist|barista))).*$/i,
	subname: "Tea Magic",
	source: ["VSoS", 188],
	features: {
		subclassfeature3: {
			name: "Hex: Tasseography",
			source: ["VSoS", 188],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"tasha's hideous laughter",
				"sanctuary",
				"augury",
				"calm emotions",
				"clairvoyance",
				"sending",
				"divination",
				"private sanctum",
				"legend lore",
				"scrying",
			],
			spellcastingExtraApplyNonconform: true,
			tasseography: {
				name: "Tasseography",
				extraname: "Tea Magic Hex",
				source: ["VSoS", 188],
				description:
					"\n   " +
					"As an action I can choose an ally within 60 ft, roll a d20, and record the result" +
					"\n   " +
					"Until the end of my next turn, I can replace any atk roll, save, or check with the result" +
					"\n   " +
					"This must be done before the roll is made, once I replace a roll this way the hex ends",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "tasseography",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Tea Ceremony",
			source: ["VSoS", 188],
			minlevel: 3,
			description:
				"\n   " +
				"My allies and I lose an additional level of exhaustion during a short or long rest",
		},
		subclassfeature6: {
			name: "Shapes and Omens",
			source: ["VSoS", 188],
			minlevel: 6,
			description:
				"\n   " +
				"At the end of a long rest my tea leaves form a shape that hints at future events",
		},
		subclassfeature10: {
			name: "Herbal Remeby",
			source: ["VSoS", 188],
			minlevel: 10,
			description:
				"\n   " +
				"Once per short rest, I can cast greater restoration without a spell slot or material components",
			spellcastingBonus: [
				{
					spells: ["greater restoration"],
					name: "Herbal Remedy",
					selection: ["greater restoration"],
					firstCol: "oncesr",
				},
			],
			spellChanges: {
				"greater restoration": {
					compMaterial: "",
					components: "V,S",
					changes:
						"I no longer need material components to cast greater restoration.",
				},
			},
		},
		subclassfeature14: {
			name: "Invigorate",
			source: ["VSoS", 188],
			minlevel: 14,
			description:
				"\n   " +
				"As a bonus action, I can give myself or an ally within 5 ft a rush of energy" +
				"\n   " +
				"On their next turn, they can take one additional action",
			usages: 1,
			recovery: "long rest",
		},
	},
});

AddSubClass("witch", "technicolor magic", {
	regExpSearch:
		/^((?=.*(technicolor|friend|positivity|positive|animal|companion|music))(?=.*magic|artist|hexer|witch|coven|cabal)).*$/i,
	subname: "Technicolor Magic",
	source: ["VSoS", 188],
	features: {
		subclassfeature3: {
			name: "Hex: Musical Interlude",
			source: ["VSoS", 189],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"color spray",
				"speak with animals",
				"animal messenger",
				"warding bond",
				"fly",
				"sending",
				"freedom of movement",
				"mandy's marvelous dress",
				"awaken",
				"teleportation circle",
			],
			spellcastingExtraApplyNonconform: true,
			"musical interlude": {
				name: "Musical Interlude",
				extraname: "Technicolor Magic Hex",
				source: ["VSoS", 189],
				description:
					"\n   " +
					"As an action, each visible willing crea w/in 30 ft gains temp HP until the end of my next turn" +
					"\n   " +
					"This temp HP is equal to my Cha mod + half my witch level (rounded down)",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "musical interlude",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Animal Friends",
			source: ["VSoS", 189],
			minlevel: 3,
			description:
				"\n   " +
				"I gain adv. on Animal Handling, can use Cha instead of Wis if the creature is small or smaller" +
				"\n   " +
				"If I adopt a beast as a pet, I can store them in an extradimensional space like a familiar",
			advantages: [["Animal Handling", true]],
		},
		subclassfeature6: {
			name: "Friendship Bracelet",
			source: ["VSoS", 189],
			minlevel: 6,
			description:
				"\n   " +
				"As an action I can create a bracelet that grants the following benefits to the wearer:" +
				"\n   " +
				"I know their location if on the same plane, my spells always have visibility to them",
		},
		subclassfeature10: {
			name: "Positivity",
			source: ["VSoS", 189],
			minlevel: 10,
			description:
				"\n   " +
				"When attacked by a visible crea, as a rea. my AC increases by +1 per ally w/in 5 ft (max 10)",
			action: ["reaction", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature14: {
			name: "Redemptive Arc",
			source: ["VSoS", 189],
			minlevel: 14,
			description:
				"\n   " +
				"When a visible enemy is reduced to 0 HP, as a reaction I can make them fall unconcious" +
				"\n   " +
				"When they wake they are no longer charmed, cursed, frightened or possessed" +
				"\n   " +
				"They lose a Bond or Flaw that would make them hostile towards me",
			action: ["reaction", ""],
			usages: 1,
			recovery: "long rest",
		},
	},
});

AddSubClass("witch", "white magic", {
	regExpSearch:
		/^(((?=.*(white|heal|hope|gift))(?=.*magic|artist|hexer|witch|coven|cabal|guardian))|(?=.*guardian)).*$/i,
	subname: "White Magic",
	source: ["VSoS", 189],
	features: {
		subclassfeature3: {
			name: "Hex: Remedy",
			source: ["VSoS", 189],
			minlevel: 3,
			additional: "See third page",
			spellcastingExtra: [
				"bless",
				"cure wounds",
				"lesser restoration",
				"prayer of healing",
				"beacon of hope",
				"revivify",
				"death ward",
				"guardian of faith",
				"mass cure wounds",
				"raise dead",
			],
			spellcastingExtraApplyNonconform: true,
			remedy: {
				name: "Remedy",
				extraname: "White Magic Hex",
				source: ["VSoS", 189],
				description:
					"\n   " +
					"As an action a creature within 60 ft heals 1d10 + my witch level HP" +
					"\n   " +
					"Each creature can only be affected by this hex once per short rest",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "remedy",
				},
			],
		},
		subclassfeature6: {
			name: "Talisman of Protection",
			source: ["VSoS", 189],
			minlevel: 6,
			description:
				"\n   " +
				"I can spend an hour creating a talisman, which can be done over a short rest" +
				"\n   " +
				"I can only have one active talisman at a time; the wearer of the talisman adds d4 to all saves",
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature10: {
			name: "Benevolent Surge",
			source: ["VSoS", 189],
			minlevel: 10,
			description:
				"\n   " +
				"When myself, my familiar, or a visible ally within 30 ft takes dmg" +
				"\n   " +
				"I can use my reaction to heal them 1d10 + Cha mod HP",
			action: ["reaction", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature14: {
			name: "Witch's Gift",
			source: ["VSoS", 189],
			minlevel: 14,
			description:
				"\n   " +
				"When I cast a spell or hex that heals HP, the target gains +3 AC until the end of my next turn",
		},
	},
});
