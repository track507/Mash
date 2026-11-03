var iFileName = "VSoS_Subclasses_Cleric.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
	SourceList["VSoS"] = {
		name: "Valda's Spire of Secrets",
		abbreviation: "VSoS",
		abbreviationSpellsheet: "V",
		date: "2022/12/30", // ! Updated as of 12-30-2022 (Version 1.4)
	};
}

// * Cleric Subclasses
// Conflicts with the tempest domain cleric.
RunFunctionAtEnd(function () {
	ClassSubList["cleric-tempest domain"].regExpSearch = /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(tempest|storm)\b).*$/i;

	AddSubClass("cleric", "destruction domain", {
		regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*destruction).*$/i,
		subname: "Destruction Domain",
		source: ["VSoS", 204],
		spellcastingExtra: [
			"burning hands",
			"thunderwave",
			"scorching ray",
			"shatter",
			"fireball",
			"protection from energy",
			"blight",
			"wall of fire",
			"cloudkill",
			"cone of cold",
		],
		features: {
			subclassfeature1: {
				name: "Devastation Initiate",
				source: ["VSoS", 204],
				minlevel: 1,
				description: desc([
					"I learn 2 cantrips of my choice from the wizard's spell list",
					"These count as cleric spells for me and don't count against me",
				]),
				spellcastingBonus: [
					{
						name: "Devastation Initiate",
						class: "wizard",
						level: [0, 0],
						times: 2,
					},
				],
			},
			subclassfeature2: {
				name: "Channel Divinity: Calamity",
				source: ["VSoS", 204],
				minlevel: 2,
				description: desc([
					"As a bonus action, for the next min, whenever I deal dmg with a cleric spell",
					"if I roll the highest number possible on any of the spell's dmg dice, I can roll",
					"that die again and add its dmg to the total, rolling again if that number is also",
					"the highest, and so on. I can roll a total number of dmg dice for this spell equal to",
					"2\xd7 the number of dmg dice I initially rolled.",
				]),
				action: ["bonus action", ""],
			},
			subclassfeature6: {
				name: "Shockwave",
				minlevel: 6,
				source: ["VSoS", 204],
				description: desc([
					"Once per turn when I cast a 1st level or higher cleric spell that deals fire, force",
					"lightning, radiant, or thunder dmg, I create a 5 ft rad shockwave around a crea that",
					"was dmg'd by this spell. Each obj in the area takes dmg equal to 2\xd7 dmg dealt to the",
					"crea, ignoring the obj dmg threshold. Only obj not being worn or carried are affected",
				]),
				usages: 1,
				recovery: "turn",
			},
			subclassfeature8: {
				name: "Potent Spellcasting",
				source: ["VSoS", 205],
				minlevel: 8,
				description: desc("I add my Wisdom modifier to the damage I deal with my cleric cantrips"),
				calcChanges: GenericClassFeatures["potent spellcasting"].calcChanges,
			},
			subclassfeature17: {
				name: "Havoc Spell",
				source: ["VSoS", 205],
				minlevel: 17,
				description: desc([
					"I can expend a SS as a bns action when I deal dmg to a crea w/ a cleric spell",
					"The crea takes radiant dmg equal to 2d6+1d6/SL (max 5d6) per slot above 1st-level",
				]),
				action: ["action", " (max 5d6)"],
			},
		},
	});
});

AddSubClass("cleric", "madness domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*madness).*$/i,
	subname: "Madness Domain",
	source: ["VSoS", 205],
	spellcastingExtra: [
		"tasha's hideous laughter",
		"silent image",
		"blindness/deafness",
		"detect thoughts",
		"confusion",
		"hallucinatory terrain",
		"dream",
		"modify memory",
	],
	features: {
		subclassfeature1: {
			name: "Unhinged Initiate",
			source: ["VSoS", 205],
			minlevel: 1,
			description: desc([
				"I learn a random cantrip from the wizard spell list, chosen by the GM",
				"This counts as a cleric spell and doesn't count against me",
				"Whenever I finish a long rest, the GM can change the cantrip",
			]),
			// works similar to the strixhaven primer
			eval: function () {
				CurrentSpells["cleric-unhinged initiate"] = {
					name: "Unhinged Initiate",
					ability: "cleric",
					list: { class: "wizard", level: [0, 0] },
					known: { cantrips: 1 },
					bonus: {
						bon0: {
							name: "Either select a cantrip",
							spells: [],
						},
						bon1: {
							name: 'or just select "Full List"',
							spells: [],
						},
						bon2: {
							name: "on the bottom left",
							spells: [],
						},
					},
					typeList: 4,
					refType: "class",
					allowUpCasting: true,
					firstCol: "",
				};
				SetStringifieds("spells");
				CurrentUpdates.types.push("spells");
			},
			removeeval: function () {
				delete CurrentSpells["cleric-unhinged initiate"];
				SetStringifieds("spells");
				CurrentUpdates.types.push("spells");
			},
		},
		"subclassfeature1.1": {
			name: "Lunatic Insight",
			source: ["VSoS", 205],
			minlevel: 1,
			description: desc(["I can add my Prof. Bonus to ability checks if the check doesn't", "already include my Prof. Bonus and the d20 roll is even"]),
		},
		subclassfeature2: {
			name: "Channel Divinity: Temporary Insanity",
			source: ["VSoS", 205],
			minlevel: 2,
			description: desc([
				"As an action, I can force a crea w/in 60 ft to make a Wis save or fall",
				"prey to madness for 1 min, rolling on the madness table (page 3 notes)",
				"A crea can repeat the save whenever it takes dmg",
			]),
			toNotesPage: [
				{
					name: "Temporary Insanity: Madness Table",
					source: ["VSoS", 205],
					note: desc([
						"d20      Effect",
						"1-5       Aphasia: The crea can't speak, cast spells, or understand others",
						"6-10     Delusion: When the crea atks or targets a crea with a spell or effect, roll a d20",
						"            On an odd roll, it misses or the spell or effect fails",
						"11-15   Frenzy: The crea is frenzied. While frenzied, the crea chooses the tgt",
						"            of its atks, spells, and abilities randomly among visible creas. w/in range",
						"            It must make an opp. atk if any crea provokes one",
						"16-20   Vertigo: The crea falls prone at the end of each of its turns if",
						"            it's not learning against something",
					]),
					page3notes: true,
				},
			],
			action: ["action", ""],
		},
		subclassfeature6: {
			name: "Fragmented Mind",
			source: ["VSoS", 205],
			minlevel: 6,
			description: desc([
				"I have adv. on saves vs charmed and frightened, and effects",
				"that would sense my emotions or read my thoughts",
				"If I converse for 10 mins w/ a crea, I can bestow this benefit to them for 1 hr",
			]),
			savetxt: { adv_vs: ["charmed", "frightened", "sense my emotions or read my thoughts"] },
		},
		subclassfeature8: {
			name: "Potent Spellcasting",
			source: ["VSoS", 205],
			minlevel: 8,
			description: desc("I add my Wisdom modifier to the damage I deal with my cleric cantrips"),
			calcChanges: GenericClassFeatures["potent spellcasting"].calcChanges,
		},
		subclassfeature17: {
			name: "Embrace Unreality",
			source: ["VSoS", 205],
			minlevel: 17,
			description: desc([
				"As an action, I can change the rules of reality in a 120 ft rad centered on a point",
				"I choose w/in 60 ft for 1 min, and choose one of the following rules:",
				"\u2022 No Up, No Down: Each crea and obj w/in the area is weightless, as per levitate",
				"\u2022 Opposite Day: If a crea has adv, it has disadv. instead, and vice versa",
				"\u2022 Red Light, Green Light: A crea cannot move on its turn. At the start of each round of",
				"  combat, each crea simultaneously chooses where to move and moves to that space",
				"  If two or more crea move to the same space, they collide and knocked prone",
				"\u2022 Through the Looking Glass: At the start of a crea turn, roll any die.",
				"  On an odd roll, they double in size, and an even halves the size, as per enlarge/reduce",
			]),
			usages: 1,
			recovery: "long rest",
		},
	},
});

AddSubClass("cleric", "pestilence domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*pestilence).*$/i,
	subname: "Pestilence Domain",
	source: ["VSoS", 206],
	spellcastingExtra: [
		"bane",
		"detect poison and disease",
		"blindess/deafness",
		"ray of enfeeblement",
		"bestow curse",
		"remove curse",
		"blight",
		"confusion",
		"contagion",
		"insect plague",
	],
	features: {
		subclassfeature1: {
			name: "Carrier",
			source: ["VSoS", 206],
			minlevel: 1,
			description: desc([
				"I am immune to disease and the poisoned condition",
				"Additionally, roll a d8 to choose a random sympton that afflict me (page 3 notes)",
			]),
			toNotesPage: [
				{
					name: "Carrier",
					source: ["VSoS", 206],
					note: desc([
						"d8    Result",
						"1     I'm always accompanied by a loud, sickening cough",
						"2     One of my limbs is black and withered, but functional",
						"3     The sclera and iris of one or both eyes are blood red",
						"4     Intense shivers comes at me in waves from mild trembles to great shudders",
						"5     Numerous growths and tumors lump my body and hunch my back",
						"6     My skin is riddled with boils and sores",
						"7     My body is horrifically gaunt",
						"8     Constantly fevered, my skin is hot and covered in sweat",
					]),
				},
			],
			savetxt: {
				immune: ["disease", "poisoned"],
			},
		},
		"subclassfeature1.1": {
			name: "Bonus Proficiency",
			source: ["VSpS", 206],
			minlevel: 1,
			description: desc(["I gain proficiency with heavy armor"]),
			armorProfs: [false, false, true, false],
		},
		"subclassfeature1.2": {
			name: "Tumor",
			source: ["VSoS", 206],
			minlevel: 1,
			description: desc([
				"When a crea w/in 5 ft hits me w/ an atk, I can use my rea to poison them",
				"The crea must make a Con save or be poisoned for 1 min",
				"It can reroll the save at the end of each of its turns",
			]),
			action: ["reaction", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature2: {
			name: "Channel Divinity: Infection",
			source: ["VSoS", 207],
			minlevel: 2,
			description: desc([
				"As an action, I can touch a crea w/in reach to make a Con save",
				"On a fail, it suffers one of the following diseases:",
				"\u2022 Bloodmore: When the crea takes blud./pierce./slash. it loses 1d6 hp",
				"\u2022 Joint Lock: The crea can move up to 15 ft or \u00BD its spd, whichever is lower, on its turn",
				"\u2022 Ruby-Eye: The crea can see normally up to 5 ft, but is blind beyond this",
			]),
			action: ["action", ""],
		},
		subclassfeature6: {
			name: "Fester",
			source: ["VSoS", 207],
			minlevel: 6,
			description: desc([
				"I gain the following:",
				"\u2022 I can deal poison dmg instead of necrotic or radiant dmg",
				"\u2022 I ignore resistance to poison dmg",
				"\u2022 My cleric spells and abilities ignore immunity to the poisoned condition",
				"  and being diseased. A crea immune to poisoned or disease instead has adv. on",
				"  saving throws to avoid or end being poisoned or diseased by my cleric spells or abilities",
			]),
		},
		subclassfeature8: {
			name: "Divine Strike",
			source: ["VSoS", 207],
			minlevel: 8,
			description: desc(["Once per turn, when I hit a creature with a weapon attack, I can do extra damage"]),
			additional: levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 poison dmg";
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description +=
								(fields.Description ? "; " : "") + "Once per turn +" + (classes.known.cleric.level < 14 ? 1 : 2) + "d8 poison damage";
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra poison damage.",
				],
			},
		},
		subclassfeature17: {
			name: "Viral Infection",
			source: ["VSoS", 207],
			minlevel: 17,
			description: desc([
				"When I use Infection, the target also has disadv. on abilit checks and saves",
				"using one ability score of my choice while afflicted",
				"Whenever a target of Infection is w/in 5 ft of another crea, I can use my rea.",
				"to cause it to spread; the crea must make a Con save or be infected w/ the",
				"same disease as the target for 1 min",
			]),
			action: ["reaction", " (Infection)"],
		},
	},
});

AddSubClass("cleric", "rum domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*rum).*$/i,
	subname: "Rum Domain",
	source: ["VSoS", 207],
	spellcastingExtra: [
		"charm person",
		"sleep",
		"calm emotions",
		"hangover",
		"hypnotic pattern",
		"slow",
		"confusion",
		"death ward",
		"greater restoration",
		"modify memory",
	],
	features: {
		subclassfeature1: {
			name: "Drunken Sway",
			source: ["VSoS", 207],
			minlevel: 1,
			description: desc(["I gain proficiency with martial weapons", "If not wearing armor or wielding a shield, my AC is 10 + my Dex mod + my Wis mod"]),
			armorOptions: [
				{
					regExpSearch: /^(?=.*drunken)(?=.*sway).*$/i,
					name: "Drunken Sway",
					source: ["VSoS", 207],
					ac: "10+Wis",
					affectsWildShape: true,
					selectNow: true,
				},
			],
			armorProfs: [false, false, true, false],
		},
		"subclassfeature1.1": {
			name: "Cup Floweth Over",
			source: ["VSoS", 207],
			minlevel: 1,
			description: desc([
				"As an action, I can fill my mug with beer or rum, and only I can drink it",
				"I suffer no ill effects from any amount of alcohol; though rosy-cheeked and",
				"and slurred of speech, I remain clear of thought and steadfast on my feet",
				"I also learn legendary libation",
			]),
			spellcastingBonus: [
				{
					name: "Cup Floweth Over",
					spells: ["legendary libation"],
					selection: ["legendary libation"],
					times: 1,
				},
			],
		},
		subclassfeature2: {
			name: "Channel Divinity: Intoxicate",
			source: ["VSoS", 207],
			minlevel: 2,
			description: desc([
				"When a visible crea makes an atk, I can use my rea to try to poison them",
				"They must make a Con save vs my spell save DC, or be poisoned and have disadv.",
				"on saving throws for 1 min. It can repeat the save at the end of each of its turns",
			]),
			action: ["reaction", ""],
		},
		subclassfeature6: {
			name: "Rumrunner",
			source: ["VSoS", 208],
			minlevel: 6,
			description: desc([
				"Whenever a hostile crea moves, I can use my rea. to move up to \u00BD my speed",
				"This movement doesn't provoke opportunity atks from the moving crea",
			]),
			action: ["reaction", ""],
		},
		subclassfeature8: {
			name: "Divine Strike",
			source: ["VSoS", 208],
			minlevel: 8,
			description: desc(["Once per turn, when I hit a creature with a weapon attack, I can do extra damage"]),
			additional: levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 weapon dmg type";
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Once per turn +" +
								(classes.known.cleric.level < 14 ? 1 : 2) +
								"d8 " +
								fields.Damage_Type +
								" dmg";
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra damage.",
				],
			},
		},
		subclassfeature17: {
			name: "Next Round's On Me",
			source: ["VSoS", 208],
			minlevel: 17,
			description: desc([
				"As an action, I choose up to 6 visible allies w/in 60 ft. For the next min, they gain",
				"adv. on Int/Wis/Cha saves and subtract my Wis mod from blud/pierce/slash dmg they take",
			]),
			action: ["action", ""],
		},
	},
});

AddSubClass("cleric", "travel domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*travel).*$/i,
	subname: "Travel Domain",
	source: ["VSoS", 208],
	spellcastingExtra: [
		"feather fall",
		"longstrider",
		"find steed",
		"misty step",
		"fly",
		"haste",
		"dimension door",
		"freedom of movement",
		"passwall",
		"teleportation circle",
	],
	features: {
		subclassfeature1: {
			name: "Well-Traveled",
			source: ["VSoS", 208],
			minlevel: 1,
			description: desc(["I gain proficiency with 4 finesse or ranged weapons of my choice", "Additionally, I learn two languages"]),
			languageProfs: [2],
		},
		"subclassfeature1.1": {
			name: "Jaunt",
			source: ["VSoS", 208],
			minlevel: 1,
			description: desc([
				"I can use my bns action to mvoe 10 ft w/out provoking opp. atks",
				"I can do this a number of times equal to my Wis mod (min. 1) per long rest",
			]),
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(What('Wis Mod'), 1);",
			recovery: "long rest",
			action: ["bonus action", ""],
		},
		subclassfeature6: {
			name: "Channel Divinity: Divine Transposition",
			source: ["VSoS", 208],
			minlevel: 6,
			description: desc([
				"While traveling, I and up to 10 crea traveling w/ me move supernaturally",
				"We always travel at a fast pace, ignoring delays caused by rough terrain, weather",
				"and other non-magical obstacles; This works on other planes of existence as well",
				"We can travel for 12 hrs instead of 8, before making Con saves for a forced march",
				"Additionally, we are unaffected by difficult terrain",
			]),
		},
		subclassfeature8: {
			name: "Divine Strike",
			source: ["VSoS", 208],
			minlevel: 8,
			description: desc(["Once per turn, when I hit a creature with a weapon attack, I can do extra damage"]),
			additional: levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 force type";
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description +=
								(fields.Description ? "; " : "") + "Once per turn +" + (classes.known.cleric.level < 14 ? 1 : 2) + "d8 force damage";
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra force damage.",
				],
			},
		},
		subclassfeature17: {
			name: "Godspeed",
			source: ["VSoS", 208],
			minlevel: 17,
			description: desc([
				"My walking speed doubles",
				"If I make an atk \u226530 ft from where I begain my turn",
				"my Divine Strike's extra dmg increases to 4d8",
			]),
			speed: {
				walk: { spd: "*2", enc: "*2" },
			},
		},
	},
});

AddSubClass("cleric", "wealth domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*wealth).*$/i,
	subname: "Wealth Domain",
	source: ["VSoS", 209],
	spellcastingExtra: [
		"identify",
		"unseen servant",
		"arcane lock",
		"locate object",
		"glyph of warding",
		"tongues",
		"fabricate",
		"secret chest",
		"creation",
		"geas",
	],
	features: {
		subclassfeature1: {
			name: "Appraisal",
			source: ["VSoS", 209],
			minlevel: 1,
			description: desc([
				"As an action, I can accurately determine the market value of any obj.",
				"This also includes their second-hand worth",
				"I can use my Wis mod instead of Cha for any check to buy, sell, or haggle",
			]),
			additional: "Add Wis mod to Cha checks to buy/sell/haggle",
		},
		"subclassfeature1.1": {
			name: "Leverage",
			source: ["VSoS", 209],
			minlevel: 1,
			description: desc([
				"When I cast spell requiring material comp with a specific cost, I only require",
				"half the materials of that value to cast the spell",
			]),
		},
		subclassfeature2: {
			name: "Channel Divinity: Riches",
			source: ["VSoS", 209],
			minlevel: 2,
			description: desc([
				"When I reduce a hostile crea to 0 hp, I can make an explosion of coins around them",
				"The total number of gold pieces is equal to the Monster's XP/10, rounded down",
				"I can use this once, regaining the ability to do so after a long rest",
			]),
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature6: {
			name: "Bribe",
			source: ["VSoS", 209],
			minlevel: 6,
			description: desc([
				"As an action, I can choose a visible hostile crea to make a Cha save vs my spell save DC",
				"On a fail, I can bribe it, teleporting into the crea possession, costing an amount equal",
				"to \u00BD the crea XP. Once completed, the crea can't be hostile to us for 24 hours",
				"It ends early if the crea takes dmg from me or my allies",
				"I cant bribe a crea w/ \u22643 Int or any crea the GM deems inappropriate",
			]),
			action: ["action", ""],
		},
		subclassfeature8: {
			name: "Potent Spellcasting",
			source: ["VSoS", 209],
			minlevel: 8,
			description: desc("I add my Wisdom modifier to the damage I deal with my cleric cantrips"),
			calcChanges: GenericClassFeatures["potent spellcasting"].calcChanges,
		},
		subclassfeature17: {
			name: "Tycoon",
			source: ["VSoS", 209],
			minlevel: 17,
			description: desc([
				"I dont need to provide material comp for any cleric spell",
				"Even if it's is costly or consumed by the spell",
				"I grant the benefit of Leverage to friendly crea w/in 60 ft of me",
			]),
			additional: "60-ft rad; Leverage benefits",
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (/cleric/i.test(spName) && (SpellsList[spellKey].compMaterial || spellObj.compMaterial)) {
							if (spellObj.components) spellObj.components = spellObj.components.replace(/,?[RM][\u0192\u2020]?/gi, "");
							if (spellObj.compMaterial) spellObj.compMaterial = "Cleric spells don't require material comp even if it's costly or consumed";
							["description", "descriptionMetric", "descriptionShorter", "descriptionShorterMetric"].forEach(function (attr) {
								if (!spellObj[attr]) return;
								spellObj[attr] = spellObj[attr].replace(/ \(\d+k? ?gp( cons\.?)?\)/i, "");
							});
							return true;
						}
					},
					"My cleric spells don't require any material components even if it's costly or consumed by the spell",
				],
			},
		},
	},
});
