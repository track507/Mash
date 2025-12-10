if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

[
	// 1st level spells
	"bless",
	"blood print",
	"boomering",
	"burnt offering",
	"command",
	"cure wounds",
	"detect evil and good",
	"detect magic",
	"detect poison and disease",
	"guiding bolt",
	"heroism",
	"indemnify",
	"inflict wounds",
	"instant replay",
	"protection from evil and good",
	"purify food and drink",
	"sanctuary",
	"shield of faith",
	"transient bulwark",
	// 2nd level spells
	"aid",
	"augury",
	"curse ward",
	"gentle repose",
	"halo of flame",
	"hold person",
	"lesser restoration",
	"locate object",
	"magic weapon",
	"protection from ballistics",
	"protection from poison",
	"stone bones",
	"warding bond",
	"zone of truth",
	// 3rd level spells
	"create food and water",
	"daylight",
	"dispel magic",
	"magic circle",
	"pillar of salt",
	"polybrachia",
	"protection from energy",
	"remove curse",
	"revivify",
	"snakestaff",
	"speak with dead",
	"tongues",
	// 4th level spells
	"banishment",
	"death ward",
	"divination",
	"locate creature",
	"stoneskin",
	// 5th level spells
	"commune",
	"dispel evil and good",
	"flame strike",
	"geas",
	"greater restoration",
	"hallow",
	"insect plague",
	"mass cure wounds",
	"raise dead",
].forEach(function (s) {
	if (
		SpellsList[s] &&
		SpellsList[s].classes &&
		SpellsList[s].classes.indexOf("martyr") === -1
	)
		SpellsList[s].classes.push("martyr");
});

ClassList["martyr"] = {
	name: "Martyr",
	regExpSearch: /martyr/i,
	source: ["VSoS", 115],
	primaryAbility: "Constitution and Wisdom",
	prereqs: "Constitution 13 and Wisdom 13",
	die: 12,
	armorProfs: {
		primary: [true, true, false, true],
		secondary: [true, true, false, true],
	},
	weaponProfs: {
		primary: [true, true],
		secondary: [true, true],
	},
	saves: ["Wis", "Str"],
	skillstxt: {
		primary:
			"Choose two from Athletics, History, Insight, Intimidation, Medicine, Persuasion, and Religion",
	},
	equipment:
		"Alchemist starting equipment: " +
		"\n \u2022 A martial weapon and a shield or two martial weapons;" +
		"\n \u2022 Scale mail or chain mail (if proficient);" +
		"\n \u2022 A light crossbow and 20 bolts or any simple weapon;" +
		"\n \u2022 A priest's pack or (b) an explorer's pack;" +
		"\n \u2022 A holy symbol",
	subclasses: ["Mortal Burden", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5],
	abilitySave: 5,
	spellcastingFactor: 2,
	spellcastingKnown: {
		cantrips: [],
		spells: "list",
		prepared: true,
	},
	spellcastingList: {
		class: "martyr",
	},
	features: {
		subclassfeature1: {
			name: "Mortal Burden",
			source: ["VSoS", 116],
			minlevel: 1,
			description: desc(['Choose a Mortal Burden in the "Class" field.']),
		},
		"ordained death": {
			name: "Ordained Death",
			source: ["VSoS", 117],
			minlevel: 1,
			description: desc([
				"When I fall to 0 hp and being to make death saving throws, I must fail 5 saving throws to die.",
				"If a creature casts a spell to restore me to life, but not undeath, they don't need material",
				"components to cast the spell on me",
			]),
		},
		"mask of the herald": {
			name: "Mask of the Herald",
			source: ["VSoS", 117],
			minlevel: 2,
			description: desc([
				"I have adv. on all ability checks to convince creatures to assist me in service of my holy cause",
			]),
		},
		spellcasting: {
			name: "Spellcasting",
			source: ["VSoS", 117],
			minlevel: 2,
			description: desc([
				"I can prepare a number of spells equal to my Wisdom mod + \u00BD my martyr level",
				"I can cast martyr spells that I know using Wisdom as my spellcasting ability.",
				"I must sacrifice my hp to cast these spells, and this damage cannot be reduced in anyway.",
				"The amount of hp sacrificed per spell level can be found on 3rd page notes.",
				"I don't make Constitution throws to maintain concentration on spells",
				"as a result of losing hp, and can't regain hp from any spell I cast.",
				"I can use a holy symbol as a spellcasting focus for my martyr spells",
			]),
			toNotesPage: [
				{
					name: "Hit Points Spellcasting",
					note: desc([
						"Spell Level            HP Cost",
						"     1st                        5",
						"     2nd                      10",
						"     3rd                       20",
						"     4th                       30",
						"     5th                       45",
					]),
					page3notes: true,
				},
			],
		},
		"sainted reprisal": {
			name: "Sainted Reprisal",
			source: ["VSoS", 117],
			minlevel: 2,
			description: desc([
				"When a creature within 5 ft of me hits me with a melee attack, I can use my reaction",
				"to deal 1d6 necrotic or radiant damage to that creature. ",
				"This increases by 1d6 when I reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
			]),
			additional: levels.map(function (n) {
				return n < 5
					? "1"
					: n < 11
					? "2"
					: n < 17
					? "3"
					: "4" + "d6 radiant or necrotic";
			}),
			action: ["reaction", "Sainted Reprisal"],
		},
		"divine healing": {
			name: "Divine Healing",
			source: ["VSoS", 117],
			minlevel: 3,
			description: desc([
				"As an action, I can spend HD up to my proficiency bonus to regain hp",
			]),
			action: ["action", "Divine Healing"],
		},
		torment: {
			name: "Torment",
			source: ["VSoS", 118],
			minlevel: 3,
			description: desc([
				"Once per turn, I can sacrifice 5 hp to deal +10 bonus radiant or necrotic damage.",
				"I don't make Constitution throws to maintain concentration on spells when I use this ability.",
				"At 11th level, I can choose to sacrifice 10 hp to deal +20 bonus radiant or necrotic damage.",
			]),
			additional: levels.map(function (n) {
				return n < 11
					? "-5 hp, +10 radiant/necro"
					: "-10 hp, +20 radiant/necro";
			}),
			usages: 1,
			recovery: "Turn",
		},
		respite: {
			name: "Respite",
			source: ["VSoS", 118],
			minlevel: 7,
			description: desc([
				"I regain all expended HD when I finish a long rest, instead of only half of them.",
			]),
		},
		"undying conviction": {
			name: "Undying Conviction",
			source: ["VSoS", 118],
			minlevel: 10,
			description: desc([
				"When I am reduced to 0 hp and not killed outright, I can drop to 1 hp instead.",
			]),
			usages: 1,
			recovery: "short rest",
		},
		"march unto destiny": {
			name: "March Unto Destiny",
			source: ["VSoS", 118],
			minlevel: 15,
			description: desc([
				"I no longer need to eat or drink, and can't be paralyzed, petrified, or stunned.",
			]),
			savetxt: {
				immune: ["paralyzed", "petrified", "stunned"],
			},
		},
		"final martyrdom": {
			name: "Final Martyrdom",
			source: ["VSoS", 118],
			minlevel: 20,
			description: desc([
				"As an action, I can become immune to all damage for 10 minutes. For this duration, I can't",
				"be blinded, charmed, deafened, exhausted, frightened, incapacitated, poisoned, restrained, or",
				"rendered unconscious. I have adv. on all ability checks, attack rolls, and saving throws.",
				"I can also cast the wish spell once during the duration without expending a spell slot or hp.",
				"If I use the spell to produce any effect other than duplicating another spell, the stress",
				"of casting it doesn't reduce my Strength or cause me to take necrotic damage.",
				"When the duration ends, I die. No force short of divine intervention can bring me back to life.",
			]),
		},
	},
};

// * Burden of atonement martyr subclass
AddSubClass("martyr", "burden of atonement", {
	regExpSearch: /atonement/i,
	subname: "Burden of Atonement",
	source: ["VSoS", 119],
	spellcastingExtra: [
		"cure wounds",
		"sanctuary",
		"calm emotions",
		"lesser restoration",
		"remove curse",
		"speak with dead",
		"death ward",
		"fire shield",
		"greater restoration",
		"mass cure wounds",
	],
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 121],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against",
				"the total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Bonus Proficiency",
			source: ["VSoS", 119],
			minlevel: 1,
			description: desc(["I gain proficiency with heavy armor."]),
			armorProfs: [true, true, true, true],
		},
		"subclassfeature1.2": {
			name: "Self-Sacrifice",
			source: ["VSoS", 119],
			minlevel: 1,
			description: desc([
				"Once per short rest when a friendly creature within 5 ft is targeted by an attack and I am",
				"within the attack's range or reach, I can use my reaction to have it target me instead.",
			]),
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature6: {
			name: "Bloody Reprieve",
			source: ["VSoS", 119],
			minlevel: 6,
			description: desc([
				"When I Torment a hostile crea and is reduced to 0 hp, I take no damage instead.",
			]),
		},
		subclassfeature14: {
			name: "Draw Aggression",
			source: ["VSoS", 119],
			minlevel: 14,
			description: desc([
				"As a bonus action on my turn, each hostile creature within 5 ft that can see or hear me has",
				"disadv. on attack rolls against creatures other than me, and adv. on attack rolls against me.",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature18: {
			name: "Sin Eater",
			source: ["VSoS", 120],
			minlevel: 18,
			description: desc([
				"I can transfer negative effects from any number of willing creatures within 60 ft to myself.",
				"I can transfer one of the following effects found on 3rd page notes from each creature.",
				"The effect ends for the creature and targets me, with the effect's original duration.",
				"I can transfer multiple effects of the same type to myself, affecting only once.",
			]),
			toNotesPage: [
				{
					name: "Sin Eater: Effects",
					page3notes: true,
					note: desc([
						"\u2022 One level of exhaustion",
						"\u2022 One disease or poison",
						"\u2022 One curse, including curses caused by attunement",
						"\u2022 Any reduction to the target's ability scores",
						"\u2022 One effect reducing the target's hp max",
						"\u2022 The blinded, charmed, deafened, paralyzed, petrified, poisoned, or stunned condition",
					]),
				},
			],
		},
	},
});

// * Burden of discord martyr subclass
AddSubClass("martyr", "burden of discord", {
	regExpSearch: /discord/i,
	subname: "Burden of Discord",
	source: ["VSoS", 120],
	spellcastingExtra: [
		"hideous laughter",
		"inflict wounds",
		"knock",
		"shatter",
		"lightning bolt",
		"stinking cloud",
		"confusion",
		"polymorph",
		"animate objects",
		"passwall",
	],
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 121],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against the total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Cantrips",
			source: ["VSoS", 120],
			minlevel: 1,
			description: desc([
				"I learn the shocking grasp and thaumaturgy cantrips, and one other cantrip",
				"of my choice from the cleric's spell list.",
			]),
			spellcastingBonus: [
				{
					name: "Cantrips",
					spells: ["shocking grasp", "thaumaturgy"],
					selection: ["shocking grasp", "thaumaturgy"],
					spellcastingAbility: 5,
					times: 2,
				},
				{
					name: "Cantrips: cleric spell list",
					class: "cleric",
					level: [0, 0],
					spellcastingAbility: 5,
					times: 1,
				},
			],
		},
		"subclassfeature1.2": {
			name: "Havoc!",
			source: ["VSoS", 120],
			minlevel: 1,
			additional: "d10",
			description: desc([
				"When I hit a hostile feature with a melee weapon attack, I can roll a d10 trigger an additional",
				"effect from the table found on the page 3 notes. Once I usee this feature, I can't use it again",
				"until I finish a short rest.",
			]),
			usages: 1,
			recovery: "short rest",
			toNotesPage: [
				{
					name: "Havoc!: Effects",
					page3notes: true,
					note: desc([
						"1	 Me and the target teleport, switching places.",
						"2	 Me and the target take 3d6 lightning damage.",
						"3	 The target vocalizes their innermost thought for 1 minute.",
						"4	 I cast darkness centered on the target.",
						"5	 I become invisible until the end of my next turn, as per the\n   invisibility spell.",
						"6 	 Target takes 1d4+1d4/Turn fire dmg until a creature uses an action\n   to put it out.",
						"7 	 Target's AC is reduced by 3 until the end of its next turn to a minimum of 10.",
						"8	 The target falls prone.",
						"9	 Object of GM's choice explodes dealing 8d6 fire damage to each crea within\n   a 20-ft raidus.",
						"10	 Roll on this table twice and apply both results, rereolling any 10s.",
					]),
				},
			],
		},
		subclassfeature6: {
			name: "Bloody Reprieve",
			source: ["VSoS", 121],
			minlevel: 6,
			description: desc([
				"When I Torment a hostile crea and is reduced to 0 hp, I take no damage instead.",
			]),
		},
		subclassfeature14: {
			name: "Coin of Chaos",
			source: ["VSoS", 121],
			minlevel: 14,
			description: desc([
				"Whenever a creature that I can see, myself included, makes an attack roll, ability check, or",
				"saving throw, I can flip a coin to add a bonus to the roll. The bonus equals +4 on heads or",
				"+1 on tails. Once I use this coin, it goes to the GM, who can use it to enhance any roll made",
				"by an NPC or monster. Once the GM uses the coin it passes back to me, and so on. I regain",
				"the coin on a short rest whether or not the GM has used it.",
			]),
		},
		subclassfeature18: {
			name: "Pandemonium",
			source: ["VSoS", 121],
			minlevel: 18,
			description: desc([
				"I can use my Havoc! feature whenever I make an attack roll or cast a spell targeting a hostile",
				"creature. I don't need to rest between uses.",
			]),
			extraLimitedFeatures: [
				{
					name: "Havoc!",
					usages: "d10",
					additional: "Spell/Atk vs. Crea",
					recovery: "",
					addToExisting: true,
				},
			],
		},
	},
});

//  * burden of the end martuyr subclass
AddSubClass("martyr", "burden of the end", {
	regExpSearch: /burden of the end/i,
	subname: "Burden of the End",
	source: ["VSoS", 121],
	spellcastingExtra: [
		"guiding bolt",
		"protection from evil and good",
		"blindness/deafness",
		"darkness",
		"call lightning",
		"counterspell",
		"blight",
		"control water",
		"flame strike",
		"insect plague",
	],
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 121],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against the",
				"total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Cantrips",
			source: ["VSoS", 121],
			minlevel: 1,
			description: desc([
				"I know sacred flame, thaumaturgy, and one more cleric cantrip of my choice. Wisdom is my",
				"spellcasting ability for this.",
			]),
			spellcastingBonus: [
				{
					name: "Cantrips",
					spells: ["sacred flame", "thaumaturgy"],
					selection: ["sacred flame", "thaumaturgy"],
					spellcastingAbility: 5,
					times: 2,
				},
				{
					name: "Cantrips: cleric spell list",
					class: "cleric",
					level: [0, 0],
					spellcastingAbility: 5,
					times: 1,
				},
			],
		},
		"subclassfeature1.2": {
			name: "Herald of the End",
			source: ["VSoS", 121],
			minlevel: 1,
			description: desc([
				"Once per long rest, when I cast a martyr spell that deals damage, I can choose to reroll",
				"all of the damage dice and must use the new rolls.",
			]),
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature6: {
			name: "Sacrosanct Spell",
			source: ["VSoS", 121],
			minlevel: 6,
			description: desc([
				"Whenever I cast one of my Burden Spells or a spell that only heals a crea, I lost no hp",
				"from casting it if I cast it at its lowest level. Casting the spell still counts against",
				"my total number of spell uses.",
			]),
		},
		subclassfeature14: {
			name: "Embrace the Inevitable",
			source: ["VSoS", 121],
			minlevel: 14,
			description: desc([
				"I can spend additional hp equal up to half the level of a 1st level or higher martyr spell I",
				"cast that requires a saving throw to give a target of the spell disadv. on the first save",
				"against the spell.",
			]),
		},
		subclassfeature18: {
			name: "Halt Apocalypse",
			source: ["VSoS", 121],
			minlevel: 18,
			description: desc([
				"Once per long rest, at the end of my turn, I can choose to immediately take an extra turn.",
			]),
			usages: 1,
			recovery: "long rest",
		},
	},
});

//  * burden of mercy martyr subclass
AddSubClass("martyr", "burden of mercy", {
	regExpSearch: /burden of mercy/i,
	subname: "Burden of Mercy",
	source: ["VSoS", 122],
	spellcastingExtra: [
		"healing word",
		"sanctuary",
		"enhance ability",
		"lesser restoration",
		"remove curse",
		"revivify",
		"death ward",
		"freedom of movement",
		"mass cure wounds",
		"raise dead",
	],
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 122],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against the",
				"total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Cantrips",
			source: ["VSoS", 122],
			minlevel: 1,
			description: desc([
				"I know spare the dying, thaumaturgy, and one more cleric cantrip of my choice. Wisdom is my",
				"spellcasting ability for this.",
			]),
			spellcastingBonus: [
				{
					name: "Cantrips",
					spells: ["spare the dying", "thaumaturgy"],
					selection: ["spare the dying", "thaumaturgy"],
					spellcastingAbility: 5,
					times: 2,
				},
				{
					name: "Cantrips: cleric spell list",
					class: "cleric",
					level: [0, 0],
					spellcastingAbility: 5,
					times: 1,
				},
			],
		},
		"subclassfeature1.2": {
			name: "Balm",
			source: ["VSoS", 122],
			minlevel: 1,
			description: desc([
				"Oncer per short rest, I can use a bonus action to restore 1 hp to a crea within 60 ft or",
				"remove the blinded, deafened, or poisoned condition from a willing crea I touch.",
			]),
			usages: 1,
			recovery: "short rest",
			action: ["bonus action", ""],
		},
		subclassfeature6: {
			name: "Sacrosanct Spell",
			source: ["VSoS", 121],
			minlevel: 6,
			description: desc([
				"Whenever I cast one of my Burden Spells or a spell that only heals a crea, I lost no hp",
				"from casting it if I cast it at its lowest level. Casting the spell still counts against",
				"my total number of spell uses.",
			]),
		},
		subclassfeature14: {
			name: "Blessing of the Broken Bread",
			source: ["VSoS", 122],
			minlevel: 14,
			description: desc([
				"Once per day when I finish a long or short rest, I choose up to 5 crea I can see at the end",
				"of the rest to gain a blessing. This lasts until the crea finished a long or short rest.",
				"While blessed, a crea can reroll any attack roll, ability check, or saving throw.",
				"Doing so will expend the blessing and the crea must use the new roll.",
			]),
			usages: 1,
			recovery: "Day",
		},
		subclassfeature20: {
			name: "Annointed Healer",
			source: ["VSoS", 122],
			minlevel: 18,
			description: desc([
				"Whenever I restore hp to a crea, I can add my martyr level to the number of hp restored.",
				"A crea can only benefit from this once everytime I finish a long rest.",
			]),
		},
	},
});

// * burden of rebirth martyr subclass
AddSubClass("martyr", "burden of rebirth", {
	regExpSearch: /burden of rebirth/i,
	source: ["VSoS", 122],
	subname: "Burden of Rebirth",
	spellcastingExtra: [
		"entangle",
		"goodberry",
		"pass without trace",
		"spike growth",
		"plant growth",
		"speak with plants",
		"conjure woodland beings",
		"hallucinatory terrain",
		"awaken",
		"reincarnate",
	],
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 122],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against the",
				"total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Cantrips",
			source: ["VSoS", 122],
			minlevel: 1,
			description: desc([
				"I know spare the dying, thaumaturgy, and one more cleric cantrip of my choice. Wisdom is my",
				"spellcasting ability for this.",
			]),
			spellcastingBonus: [
				{
					name: "Cantrips",
					spells: ["druidcraft", "shillelagh"],
					selection: ["druidcraft", "shillelagh"],
					spellcastingAbility: 5,
					times: 2,
				},
				{
					name: "Cantrips: cleric spell list",
					class: "druid",
					level: [0, 0],
					spellcastingAbility: 5,
					times: 1,
				},
			],
		},
		"subclassfeature1.2": {
			name: "Friend of the Forest",
			source: ["VSoS", 122],
			minlevel: 1,
			description: desc([
				"I can cast speak with animals without losing hp. When I do so, I have adv. on Charisma checks",
				"made directed at beasts for the duration. I can do this once per short rest.",
			]),
			usages: 1,
			recovery: "short rest",
			spellcastingBonus: [
				{
					name: "Friend of the Forest",
					spells: ["speak with animals"],
					selection: ["speak with animals"],
					firstCol: "oncesr",
					times: 1,
				},
			],
		},
		subclassfeature6: {
			name: "Sacrosanct Spell",
			source: ["VSoS", 123],
			minlevel: 6,
			description: desc([
				"Whenever I cast one of my Burden Spells or a spell that only heals a crea, I lost no hp",
				"from casting it if I cast it at its lowest level. Casting the spell still counts against",
				"my total number of spell uses.",
			]),
		},
		subclassfeature14: {
			name: "Verdant Resilience",
			source: ["VSoS", 123],
			minlevel: 14,
			description: desc([
				"As a bonus action on my turn I can regenerate for 1 min. At the start of each of my turns, I",
				"regain hp equal to my Wis mod. I also gain resistance to blud/pierce/slash and can't cast",
				"martyr spells. I can end this early as a bonus action. I can do this once per short rest.",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature20: {
			name: "Turn of the Wheel",
			source: ["VSoS", 123],
			minlevel: 18,
			description: desc([
				"I can cast reincarnate without expending material components or losing hp. When I do, I can",
				"choose which race the target reincarnates as, intead of the GM. If I die without using my",
				"Final Martyrdom, I return to life in 24 hours as by the reincarnate spell. Once I do so,",
				"I can't this again for 10 days.",
			]),
			spellcastingBonus: [
				{
					name: "Turn of the Wheel",
					spells: ["reincarnate"],
					selection: ["reincarnate"],
					times: 1,
				},
			],
			spellchanges: {
				reincarnate: {
					compMaterial: "",
					components: "V,S\u2020",
					description:
						"Brings humanoid that died in last 10 days to life, I choose its new body",
					changes:
						"No material components and I can choose what the target reincarnates as.",
				},
			},
			usages: 1,
			recovery: "10 days",
		},
	},
});

// * burden of revolution martyr subclass
AddSubClass("martyr", "burden of revolution", {
	regExpSearch: /burden of revolution/i,
	source: ["VSoS", 123],
	subname: "Burden of Revolution",
	spellcastingExtra: [
		"command",
		"heroism",
		"hold person",
		"magic weapon",
		"haste",
		"pillar of salt",
		"stoneskin",
		"wall of fire",
		"hold monster",
		"telepathic bond",
	],
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 123],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against",
				"the total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Bonus Proficiency",
			source: ["VSoS", 123],
			minlevel: 1,
			description: desc(["I gain proficiency with heavy armor."]),
			armorProfs: [true, true, true, true],
		},
		"subclassfeature1.2": {
			name: "Bulwark of Rebellion",
			source: ["VSoS", 123],
			minlevel: 1,
			description: desc([
				"Once per short rest, I can use a bonus action to gain 1d12 + my martyr level temp hp, which",
				"lasts for an hour.",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature6: {
			name: "Bloody Reprieve",
			source: ["VSoS", 123],
			minlevel: 6,
			description: desc([
				"When I Torment a hostile crea and is reduced to 0 hp, I take no damage instead.",
			]),
		},
		subclassfeature14: {
			name: "Unyielding Banner",
			source: ["VSoS", 123],
			minlevel: 14,
			description: desc([
				"All allies, including me, within 10 ft adds my Wis mod to initative rolls and immune to being",
				"charmed or frightened.",
			]),
			savetxt: {
				immune: ["charmed", "frightened"],
			},
			additional: levels.map(function (n) {
				return n < 14 ? "" : "10 ft";
			}),
		},
		subclassfeature18: {
			name: "Kingslayer",
			source: ["VSoS", 124],
			minlevel: 18,
			description: desc([
				"When I reduce a hostile crea to 0 hp, I can choose one of the following effects:",
				"\u2022 All of the crea spells and effects immediately end, including all spells with permanent",
				"effects. Additionally, spells that trigger on the crea death don't trigger",
				"\u2022 Each crea allied with the crea within 120 ft and has a lower CR than it must make a Wis",
				"save or be frightened for 1 min. It can repeat the save at the end of each of its turns",
				"\u2022 As a bonus action, I move up to 15 ft and make another melee weapon attack",
			]),
			action: ["bonus action", " (melee attack)"],
			usages: 1,
			recovery: "short rest",
		},
	},
});

// * burden of truth martyr subclass
AddSubClass("martyr", "burden of truth", {
	regExpSearch: /burden of truth/i,
	source: ["VSoS", 124],
	subname: "Burden of Truth",
	spellcastingExtra: [
		"charm person",
		"identify",
		"augury",
		"detect thoughts",
		"sending",
		"speak with dead",
		"divination",
		"freedom of movement",
		"legend lore",
		"scrinyg",
	],
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 124],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against",
				"the total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Moral Erudition",
			source: ["VSoS", 125],
			minlevel: 1,
			description: desc([
				"I can add my Wis mod instead of Cha for Persuasion checks. Other creatures can always",
				"discern when I am telling the truth.",
			]),
			addMod: {
				type: "skill",
				field: "Pers",
				mod: "max(Wis|0)",
				text: "I can add my Wisdom modifier to any Charisma (Persuasion) checks I make.",
			},
		},
		"subclassfeature1.2": {
			name: "Maxim of Truth",
			source: ["VSoS", 125],
			minlevel: 1,
			description: desc([
				"As a bonus action once per short rest, I can cast zone of truth centered on me. This",
				"has a 5 ft rad and duration of 1 min. Wisdom is my spellcasting ability for this.",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
			spellcastingBonus: [
				{
					name: "Maxim of Truth",
					spells: ["zone of truth"],
					selection: ["zone of truth"],
					spellcastingAbility: 5,
					times: 1,
					firstCol: "oncesr",
				},
			],
			spellchanges: {
				"zone of truth": {
					description:
						"5 rad all in or enter save or unable to lie; I'm aware if saved or not; crea aware it cannot lie",
					duration: "1 min",
					range: "5 ft",
					changes:
						"The range becomes 5 ft and the duration is 1 minute.",
				},
			},
		},
		subclassfeature6: {
			name: "Sacrosanct Spell",
			source: ["VSoS", 125],
			minlevel: 6,
			description: desc([
				"Whenever I cast one of my Burden Spells or a spell that only heals a crea, I lost no hp",
				"from casting it if I cast it at its lowest level. Casting the spell still counts against",
				"my total number of spell uses.",
			]),
		},
		subclassfeature14: {
			name: "Foretold Escape",
			source: ["VSoS", 125],
			minlevel: 14,
			description: desc([
				"When a crea I can see makes an attack roll against me, I can use my reaction to impose",
				"diadvantage on that roll.",
			]),
			action: ["reaction", ""],
		},
		subclassfeature18: {
			name: "Eyes of Prophecy",
			source: ["VSoS", 125],
			minlevel: 18,
			description: desc([
				"Once per short rest, I can replace one attack, ability check, or saving throw roll I make",
				"with a 20.",
			]),
		},
	},
});

// * burden of tyranny martyr subclass
AddSubClass("martyr", "burden of tyranny", {
	regExpSearch: /burden of tyranny/i,
	source: ["VSoS", 125],
	subname: "Burden of Tyranny",
	spellcastingExtra: [
		"bane",
		"command",
		"find steed",
		"hold person",
		"bestow curse",
		"fear",
		"banishment",
		"dominate beast",
		"dominate person",
		"geas",
	],
	abilitySave: 5,
	features: {
		subclassfeature1: {
			name: "Burden Spells",
			source: ["VSoS", 125],
			minlevel: 1,
			description: desc([
				"I learn additional spells that is considered always prepared and doesn't count against",
				"the total amount of spells I know.",
			]),
		},
		"subclassfeature1.1": {
			name: "Bonus Proficiency",
			source: ["VSoS", 125],
			minlevel: 1,
			description: desc(["I gain proficiency with heavy armor."]),
			armorProfs: [true, true, true, true],
		},
		"subclassfeature1.2": {
			name: "Diabolic Ultimatum",
			source: ["VSoS", 125],
			minlevel: 1,
			description: desc([
				"As an action once per short rest, I can choose a crea that I can see within 60 ft to",
				"make Wis save, or the crea is charmed or frightened for 1 min. It can repeat the save",
				"on each of its turns. The DC for this is 8 + Prof. Bonus + Wis mod.",
			]),
			action: ["action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature6: {
			name: "Bloody Reprieve",
			source: ["VSoS", 125],
			minlevel: 6,
			description: desc([
				"When I Torment a hostile crea and is reduced to 0 hp, I take no damage instead.",
			]),
		},
		subclassfeature14: {
			name: "Crush Resistance",
			source: ["VSoS", 125],
			minlevel: 14,
			description: desc([
				"Once per turn when I hit a hostile crea with a melee weapon attack, I gain 1d8",
				"temp hp. If I reduce a Humanoid to 0 hp with a melee weapon attack, this becomes",
				"4d8 instead.",
			]),
			usages: 1,
			recovery: "Turn",
		},
		subclassfeature18: {
			name: "Crush Resistance",
			source: ["VSoS", 125],
			minlevel: 18,
			description: desc([
				"I can cast dominate person without expending hp or counting against my spell uses",
				"once per day. Whenever I cast this spell, the target has disadv on its saving throw",
				"and doesn't make a new save everytime it takes damage. I can cast this once per",
				"long rest without expending hp.",
			]),
			spellcastingBonus: [
				{
					name: "Crush Resistance",
					spells: ["dominate person"],
					selection: ["dominate person"],
					times: 1,
					firstCol: "Day",
				},
			],
			usages: 1,
			recovery: "long rest",
		},
	},
});
