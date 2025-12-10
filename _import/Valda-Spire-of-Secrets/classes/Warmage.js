if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// warmage spell list
[
	//cantrips
	"arc blade",
	"acid splash",
	"burning blade",
	"card trick",
	"caustic blade",
	"cheat",
	"chill touch",
	"cryptogram",
	"finger guns",
	"fire bolt",
	"force buckler",
	"force dart",
	"force weapon",
	"frigid blade",
	"light",
	"lightning surge",
	"mage hand",
	"magic daggers",
	"mending",
	"minor illusion",
	"moment to think",
	"phantom grapnel",
	"poison spray",
	"prestidigitation",
	"produce flame",
	"quickstep",
	"ray of frost",
	"shocking grasp",
	"sonic pulse",
	"springheel",
	"thunderous distortion",
	"true strike",
].forEach(function (s) {
	if (
		SpellsList[s] &&
		SpellsList[s].classes &&
		SpellsList[s].classes.indexOf("warmage") === -1
	)
		SpellsList[s].classes.push("warmage");
});

ClassList["warmage"] = {
	regExpSearch: /warmage/i,
	name: "Warmage",
	source: ["VSoS", 157],
	primaryAbility: "Intelligence",
	prereqs: "Intelligence 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Con", "Int"],
	skillstxt: {
		primary:
			"Choose two from Acrobatics, Animal Handling, Arcana, Athletics, History, Investigation, Medicine, Perception, and Survival",
	},
	toolProfs: {
		primary: [
			["Artisan's tool", 1],
			["Gaming Set", 1],
		],
	},
	armorProfs: {
		primary: [true, false, false, false],
		secondary: [true, false, false, false],
	},
	weaponProfs: {
		primary: [true, false],
		secondary: [false, false],
	},
	equipment:
		"Warmage starting equipment:\n \u2022 Leather armor, a dagger, and any simple weapon;\n \u2022 A component pouch -or- an arcane focus\n \u2022 An explorer's pack -or- a scholar's pack -or- one kit you're proficient in.\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses: ["Warmage House", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 4,
	spellcastingFactor: 3, // used for multiclassing
	spellcastingTable: [
		// Define a custom spell table so that the house of bishops can overwrite this with it's own.
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 2
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 3
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 4
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 5
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 6
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 7
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 8
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 9
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 10
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 11
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 12
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 13
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 14
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 15
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 16
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 17
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 18
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 19
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 20
	],
	spellcastingKnown: {
		cantrips: [4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10],
		spells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	spellcastingList: {
		class: "warmage",
		level: [0, 0],
	},
	features: {
		spellcasting: {
			name: "Spellcasting",
			source: ["VSoS", 158],
			minlevel: 1,
			description: desc([
				"I can cast warmage cantrips, using Intelligence as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus",
				"Whenever I gain a warmage level, I can replace a cantrip I know with another",
			]),
			additional: [
				"4 cantrips known",
				"4 cantrips known",
				"5 cantrips known",
				"5 cantrips known",
				"6 cantrips known",
				"6 cantrips known",
				"6 cantrips known",
				"6 cantrips known",
				"7 cantrips known",
				"7 cantrips known",
				"7 cantrips known",
				"7 cantrips known",
				"8 cantrips known",
				"8 cantrips known",
				"8 cantrips known",
				"8 cantrips known",
				"9 cantrips known",
				"9 cantrips known",
				"9 cantrips known",
				"10 cantrips known",
			],
		},
		"arcane initiation": {
			name: "Arcane Initiation",
			source: ["VSoS", 159],
			minlevel: 1,
			description: desc([
				'Choose an Initiation using the "Choose Feature" button above',
			]),
			choices: [
				"Adventurer",
				"Circus Performer",
				"Eldritch Event",
				"Mercenary",
				"Temple",
				"Tower Apprentice",
				"Self-Taught",
				"Survival",
			],
			adventurer: {
				name: "Arcane Initiation: Adventurer",
				description: desc([
					"I learn the mage hand and ray of frost cantrips.",
				]),
				spellcastingBonus: {
					name: "Arcane Initiation: Adventurer",
					spells: ["mage hand", "ray of frost"],
					selection: ["mage hand", "ray of frost"],
					times: 2,
				},
			},
			"circus performer": {
				name: "Arcane Initiation: Circus Performer",
				description: desc([
					"I learn the dancing lights and minor illusion cantrips.",
				]),
				spellcastingBonus: {
					name: "Arcane Initiation: Circus Performer",
					spells: ["minor illusion", "dancing lights"],
					selection: ["minor illusion", "dancing lights"],
					times: 2,
				},
			},
			"eldritch event": {
				name: "Arcane Initiation: Eldritch Event",
				description: desc([
					"I learn the chill touch and message cantrips.",
				]),
				spellcastingBonus: {
					name: "Arcane Initiation: Eldritch Event",
					spells: ["chill touch", "message"],
					selection: ["chill touch", "message"],
					times: 2,
				},
			},
			mercenary: {
				name: "Arcane Initiation: Mercenary",
				description: desc([
					"I learn the arc blade and true strike cantrips.",
				]),
				spellcastingBonus: {
					name: "Arcane Initiation: Mercenary",
					spells: ["arc blade", "true strike"],
					selection: ["arc blade", "true strike"],
					times: 2,
				},
			},
			temple: {
				name: "Arcane Initiation: Temple",
				description: desc([
					"I learn the sacred flame and spare the dying cantrips.",
				]),
				spellcastingBonus: {
					name: "Arcane Initiation: Temple",
					spells: ["sacred flame", "spare the dying"],
					selection: ["sacred flame", "spare the dying"],
					times: 2,
				},
			},
			"tower apprentice": {
				name: "Arcane Initiation: Tower Apprentice",
				description: desc([
					"I learn the prestidigitation and shocking grasp cantrips.",
				]),
				spellcastingBonus: {
					name: "Arcane Initiation: Tower Apprentice",
					spells: ["prestidigitation", "shocking grasp"],
					selection: ["prestidigitation", "shocking grasp"],
					times: 2,
				},
			},
			"self-taught": {
				name: "Arcane Initiation: Self-Taught",
				description: desc([
					"I learn the fire bolt and light cantrips.",
				]),
				spellcastingBonus: {
					name: "Arcane Initiation: Self-Taught",
					spells: ["fire bolt", "light"],
					selection: ["fire bolt", "light"],
					times: 2,
				},
			},
			survival: {
				name: "Arcane Initiation: Survival",
				description: desc(["I learn the druidcraft and shillelagh."]),
				spellcastingBonus: {
					name: "Arcane Initiation: Survival",
					spells: ["druidcraft", "shillelagh"],
					selection: ["druidcraft", "shillelagh"],
					times: 2,
				},
			},
		},
		"arcane fighting style": {
			name: "Arcane Fighting Style",
			source: ["VSoS", 159],
			minlevel: 1,
			description: desc([
				'Choose an Arcane Fighting Style using the "Choose Feature" button above',
			]),
			choices: ["Blaster", "Deflector", "Resistive", "Sniper", "Striker"],
			blaster: {
				name: "Arcane Blaster Fighting Style",
				description: desc([
					"The spell save DC for warmage spells increases by 1",
				]),
				calcChanges: {
					spellCalc: [
						function (type, spellcasters, ability) {
							//if we dont know the house of bishops feature, then we can just add +1 to our warmage saves.
							if (
								type == "dc" &&
								(spellcasters.indexOf("warmage") !== -1 ||
									spellcasters.indexOf(
										"warmage-adaptive arcanist"
									) !== -1)
							)
								return 1;
						},
						"I add +1 to all the saving throw DCs of my warmage spells.",
					],
				},
			},
			deflector: {
				name: "Arcane Deflector Fighting Style",
				description: desc([
					"As a rea. and targeted by spell attack or ranged weapon attack, and if I have one free hand",
					"I can increase my AC. The bonus is equal to my Prof. Bonus and can cause the attack to miss.",
				]),
				action: ["reaction", "Arcane Deflect (Prof. Bonus to AC)"],
			},
			resistive: {
				name: "Resistive Arcane Fighting Style",
				description: desc([
					"I gain +1 AC while wearing light, or under the effects of Mage Armor.",
				]),
				extraAC: [
					{
						mod: 1,
						name: "Resistive Fighting Style",
						text: "I gain a +1 bonus AC while I'm wearing light, or if I'm under the effects of the Mage Armor spell.",
						stopeval: function (v) {
							return (
								(!v.wearingArmor ||
									v.heavyArmor ||
									v.mediumArmor) &&
								!/^mage armou?r$/.test(CurrentArmour.known)
							);
						},
					},
				],
			},
			sniper: {
				name: "Arcane Sniper Fighting Style",
				description: desc([
					"I gain a +1 to ranged spell attacks. Additionally, I ignore half cover when casting a warmage cantrip",
				]),
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							if (
								v.isSpell &&
								/^(?!.*melee).*\d+.*$/i.test(fields.Range)
							) {
								output.extraHit += 1;
							}
						},
						"I gain a +1 bonus to ranged spell attack rolls.",
					],
				},
			},
			striker: {
				name: "Arcane Striker Fighting Style",
				description: desc([
					"When I exceed a target's AC by \u22655, or score a critical hit, with a melee atk cantrip",
					"I can add my Prof. Bonus to the damage roll",
				]),
			},
		},
		"warmage edge": {
			name: "Warmage Edge",
			source: ["VSoS", 160],
			minlevel: 2,
			description: desc([
				"Once per turn when I deal dmg with a warmage cantrip, I can add my Int mod to the damage.",
				"At 5th level, I can further this to add extra dice to my warmage cantrip damage.",
			]),
			additional: levels.map(function (n) {
				return (
					(n < 5 ? "" : n < 11 ? 1 : n < 17 ? 2 : 3) +
					(n < 5 ? "" : n < 11 ? " extra die" : " extra dice")
				);
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							classes.known.warmage &&
							classes.known.warmage.level >= 2 &&
							v.isSpell &&
							v.thisWeapon[3] &&
							SpellsList[v.thisWeapon[3]].level === 0 &&
							v.thisWeapon[4].indexOf("warmage") !== 1
						) {
							var lvl = classes.known.warmage.level;
							var extraDie =
								lvl < 5 ? 0 : lvl < 11 ? 1 : lvl < 17 ? 2 : 3; //The amount of die added based on level
							var currentDieSize = parseInt(
								fields.Damage_Die.split("d")[1]
							);
							fields.Description +=
								(fields.Description ? "; " : "+ ") +
								"Once per turn " +
								What("Int Mod") +
								(extraDie
									? " and +" + extraDie + "d" + currentDieSize
									: "") +
								" dmg";
						}
					},
				],
			},
		},
		"warmage tricks": {
			name: "Warmage Tricks",
			minlevel: 2,
			source: ["VSoS", 160],
			description: desc([
				'Use the "Choose Feature" button above to add Warmage Tricks to the third page.',
				"Whenever I gain a warmage level, I can replace a trick I know with another.",
			]),
			additional: levels.map(function (n) {
				return (
					(n < 2
						? ""
						: n < 3
						? 2
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
						: 10) + " tricks known"
				);
			}),
			extraname: "Warmage Tricks",
			extraTimes: [
				0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10, 10,
			],
			extrachoices: [
				"bishop's maneuver (prereq: level 10)",
				"blasting cantrip",
				"blinding light (prereq: light cantrip)",
				"castle (prereq: level 10 warmage)",
				"chivalrous presence",
				"cloak of feathers",
				"commander's steed",
				"corrosive cantrip",
				"directed momentum (prereq: level 10 warmage)",
				"draining cantrip",
				"encryptogram (prereq: cryptogram)",
				"explosive cantrip",
				"extended range",
				"field medic",
				"flexible range",
				"fold (prereq: level 10)",
				"gamble (prereq: cheat, house of dice or house of cards)",
				"infinite variation (prereq: prestidigitation)",
				"icy cantrip",
				"knight's aegis (prereq: level 10, force buckler)",
				"leading edge tactics",
				"lieutenant's demand (prereq: level 10)",
				"mage hand knack (prereq: mage hand)",
				"minor shadow illusion (prereq: minor illusion)",
				"mystical armor",
				"mystical athlete (prereq: quickstep or springheel)",
				"mystical weaponmaster (prereq: force weapon or magic daggers)",
				"mystical vision",
				"phantom hookshot (prereq: phantom grapnel)",
				"rapid fortification (prereq: mending)",
				"snake eyes (prereq: level 10)",
				"severe cantrip",
				"signature focus (prereq: level 5)",
				"silent cantrip",
				"split fire (prereq: level 5)",
				"static cantrip",
				"unerring strike (prereq: level 10, true strike)",
			],
			"bishop's maneuver (prereq: level 10)": {
				name: "Bishop's Maneuver",
				source: ["VSoS", 161],
				submenu: "[House of Bishops]",
				description: desc([
					"I can take the Disengage action as a bonus action.",
					"When doing so my walking speed increases by 10 feet until the end of my turn.",
				]),
				action: ["bonus action", ""],
				prereqeval: function (v) {
					return (
						classes.known.warmage.level >= 10 &&
						/\bpawns|bishops\b/.test(classes.known.warmage.subclass)
					);
				},
			},
			"blasting cantrip": {
				name: "Blasting Cantrip",
				source: ["VSoS", 161],
				description: desc([
					"When I deal force dmg with a warmage cantrip, I can push the target 10 ft away from me.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							//we only get access to warmage cantrips, not wizard so this is correct
							if (
								classes.known.warmage &&
								classes.known.warmage.level >= 2 &&
								v.isSpell &&
								/force/i.test(fields.Damage_Type) &&
								v.thisWeapon[3] &&
								SpellsList[v.WeaponName] &&
								v.thisWeapon[4].indexOf("warmage") !== 1 &&
								SpellsList[v.thisWeapon[3]].level === 0
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"push 10ft";
							}
						},
					],
				},
				usages: 1,
				recovery: "Turn",
			},
			"blinding light (prereq: light cantrip)": {
				name: "Blinding Light",
				source: ["VSoS", 161],
				description: desc([
					"When I cast light on an object I am holding, I can shoot a flare at a creature within 10 ft",
					"The target must make a Con save or be blinded until the start of my next turn",
					"Once a target fails, it has adv on all saves against this trick for 24 hours",
				]),
				spellChanges: {
					light: {
						description:
							"1 obj up to 10-ft cube sheds bright light 20-ft rad and dim light 20-ft; cannot have multiple instances; Shoot flare at crea w/in 10 ft, save or blinded",
						save: "Con",
						changes:
							"I can shoot a flare at a creature within 10-ft of me. The creature must make a Constitution saving throw or become blinded.",
					},
				},
				prereqeval: function (v) {
					return isSpellUsed("light", true);
				},
			},
			"castle (prereq: level 10 warmage)": {
				name: "Castle",
				source: ["VSoS", 161],
				submenu: "[House of Rooks]",
				description: desc([
					"I can swap places with a small or mediumm willing crea w/in 120 ft",
				]),
				usages: 1,
				recovery: "short rest",
				action: ["action", ""],
				prereqeval: function (v) {
					return (
						classes.known.warmage.level >= 10 &&
						/\bpawns|rooks\b/.test(classes.known.warmage.subclass)
					);
				},
			},
			"chivalrous presence": {
				name: "Chivalrous Presence",
				source: ["VSoS", 161],
				submenu: "[House of Knights]",
				description: desc([
					"I gain proficiency in Insight and Persuasion, and adv. on ability checks to interact with nobles.",
					"Additionally, other creatures can always discern when I am telling the truth.",
				]),
				skills: ["Insight", "Persuasion"],
				prereqeval: function (v) {
					return /\bpawns|knights\b/.test(
						classes.known.warmage.subclass
					);
				},
			},
			"cloak of feathers": {
				name: "Cloak of Feathers",
				source: ["VSoS", 161],
				description: desc([
					"When wearing no armor, and no shield, my AC equals to 10 + Dex mod + Int mod",
				]),
				prereqeval: function (v) {
					return /\bpawns|rooks\b/.test(
						classes.known.warmage.subclass
					);
				},
				armorOptions: [
					{
						regExpSearch: /^(?=.*cloak)(?=.*feathers).*$/i,
						name: "Cloak of Feathers",
						source: ["VSoS", 161],
						ac: "10+Int",
						affectsWildShape: true,
						selectNow: true,
					},
				],
			},
			"commander's steed": {
				name: "Commander's Steed (prereq: house of kings)",
				source: ["VSoS", 161],
				submenu: "[House of Kings]",
				description: desc([
					"I learn the find steed spell and can cast it without expending a spell slot.",
					"My steed is resilient; its hp maximum increases by an amount equal to my warmage level.",
				]),
				spellcastingBonus: {
					name: "Commander's Steed",
					spells: ["find steed"],
					selection: ["find steed"],
					times: 1,
					firstCol: "atwill",
				},
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (!/mount/i.test(sCompType)) return;
							var sHPfld = prefix + "Comp.Use.HP.Max";
							var newHP =
								classes.known.warmage.level + What(sHPfld);
							Value(sHPfld, newHP);
						},
					],
				},
				prereqeval: function (v) {
					return /\bpawns|kings\b/.test(
						classes.known.warmage.subclass
					);
				},
			},
			"corrosive cantrip": {
				name: "Corrosive Cantrip",
				source: ["VSoS", 161],
				description: desc([
					"When I deal acid damage to a creature with a warmage cantrip, I can corrode its defenses.",
					"The next atk roll vs. the target before the start of my next turn, -1d4 from its AC for the atk",
				]),
				usages: 1,
				recovery: "Turn",
			},
			"directed momentum (prereq: level 10 warmage)": {
				name: "Directed Momentum",
				source: ["VSoS", 161],
				submenu: "[House of Lancers]",
				description: desc([
					"When I score a crit. with a melee atk or reduce a creature to 0 hp with one",
					"I can make an unarmed strike against another target.",
					"If they are in range of my Shock Trooper, I can lunge to it, dealing an extra 1d8 force dmg",
				]),
				additional: ["+1d8 Force damage"],
				prereqeval: function (v) {
					return /\bpawns|lancers\b/.test(
						classes.known.warmage.subclass
					);
				},
				usages: 1,
				recovery: "Turn",
			},
			"draining cantrip": {
				name: "Draining Cantrip",
				source: ["VSoS", 161],
				description: desc([
					"I gain temp hp equal to half my warmage level when I deal necro/poison dmg to a hostile",
					"I can only gain temp hp if I deal damage with a warmage cantrip; temp hp lasts for 1 min",
				]),
			},
			"encryptogram (prereq: cryptogram)": {
				name: "Encryptogram",
				source: ["VSoS", 162],
				description: desc([
					"When I cast Cryptogram, its limit is 20 instead of 8; only the recipient can read the message",
				]),
				prereqeval: function (v) {
					return isSpellUsed("cryptogram", true);
				},
				spellChanges: {
					cryptogram: {
						description:
							"Send a message up to 20 characters (incl. spaces) to known crea on same plane, 1/day; Only recip. can read the message",
						descriptionFull:
							"You send a small scroll with a short message to a creature of your choice. The recipient must be a creature known to you and also be on the same plane of existence as you. This scroll will hover in front of the recipient, drop into their pocket, or appear sitting on something nearby. The scroll’s message can be up to 20 characters long (spaces count as characters). You can send only one scroll to a single target each day. Only the target is able to read the message.",
						changes:
							"The character limit is now 20 instead of 8 and only the recipient can read the message.",
					},
				},
			},
			"explosive cantrip": {
				name: "Explosive Catrip",
				source: ["VSoS", 162],
				description: desc([
					"When I deal fire dmg to a crea with a warmage cantrip, each crea within 5 ft of the target",
					"except myself, Dex save or take half the fire damage dealt to the target.",
				]),
				usages: 1,
				recovery: "Turn",
			},
			"extended range": {
				name: "Extended Range",
				source: ["VSoS", 162],
				description: desc([
					"My warmage cantrips that have a range of 5 ft or greater has its range doubled.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							// !v.isDC && v.isSpell && v.thisWeapon[3] && SpellsList[v.thisWeapon[3]].level === 0 && v.thisWeapon[4].indexOf('warmage') !== 1 && ((/melee/i).test(fields.description) || (/melee/).test(fields.Range))
							if (
								v.thisWeapon[3] &&
								SpellsList[v.thisWeapon[3]].level === 0 &&
								v.thisWeapon[4].indexOf("warmage") !== 1 &&
								((/\d+ ?(f.{0,2}t|m)/i.test(fields.Range) &&
									fields.Range.match(/\d+([.,]\d+)?/g) >=
										5) ||
									/melee/i.test(fields.Range))
							) {
								var rngNum =
									fields.Range.match(/\d+([.,]\d+)?/g);
								if (/melee/i.test(fields.Range) && !rngNum) {
									fields.Range = "Melee (10 ft)";
									return;
								}
								var oChar = fields.Range.split(
									RegExp(rngNum.join("|"))
								);
								fields.Range = "";
								rngNum.forEach(function (dR, idx) {
									fields.Range +=
										(oChar[idx] ? oChar[idx] : "") +
										parseFloat(
											dR.toString().replace(",", ".") * 2
										);
								});
								if (oChar.length > rngNum.length) {
									fields.Range += oChar[oChar.length - 1];
								}
								if (!v.rangeM) {
									v.rangeM = 2;
								} else {
									v.rangeM *= 2;
								}
							}
						},
						"My warmage cantrips that have a range of 5 ft or greater has its range doubled.",
						750,
					],
					spellAdd: [
						function (spellKey, spellObj, spName) {
							if (
								!spellObj.psionic &&
								spName === "warmage" &&
								spellObj.level === 0 &&
								/\d+([.,]\d+)?[\- ]?(f.{0,2}t|m)/i.test(
									spellObj.range
								)
							) {
								var sRange =
									spellObj.range.match(/\d+([.,]\d+)?/g);
								var oChar = spellObj.range.split(
									RegExp(sRange.join("|"))
								);
								spellObj.range = "";
								sRange.forEach(function (dR, idx) {
									spellObj.range +=
										(oChar[idx] ? oChar[idx] : "") +
										parseFloat(
											dR.toString().replace(",", ".")
										) *
											2;
								});
								if (oChar.length > sRange.length) {
									spellObj.range += oChar[oChar.length - 1];
								}
								return true;
							}
						},
						"My warmage cantrips that have a range of 5 ft or greater has its range doubled.",
						750,
					],
				},
			},
			"field medic": {
				name: "Field Medic",
				source: ["VSoS", 162],
				description: desc([
					"I learn spare the dying, and doesn't count towards the number of cantrips I know",
					"When I use this on a crea that has 0 hp, it gains 1 hp + temp hp equal to my warmage level",
					"This lasts for 1 minute; a crea must finish a long rest before benefiting from this again",
				]),
				submenu: "[House of Bishops]",
				prereqeval: function (v) {
					return /\bpawns|bishops\b/.test(
						classes.known.warmage.subclass
					);
				},
				spellcastingBonus: {
					name: "Field Medic",
					spells: ["spare the dying"],
					selection: ["spare the dying"],
				},
				spellChanges: {
					"spare the dying": {
						description:
							"1 living creature with 0 current HP regain 1 HP + warmage level temp HP",
						descriptionFull:
							"You touch a living creature that has 0 hit points. The creature regains 1 hit point + my warmage level in temporary hit points which last for 1 minute. A creature that regains hit points this way can't do so again until it finishes a long rest. This spell has no effect on undead or constructs.",
						changes:
							"A creature with 0 current HP now regains 1 HP + my warmage level in temp HP",
					},
				},
			},
			"flexible range": {
				name: "Flexible Range",
				source: ["VSoS", 162],
				description: desc([
					"I don't gain disadv. on ranged spell attacks from being w/in 5 ft of a hostile crea",
					"My warmage melee spell attacks have their ranges increased by 10 ft",
				]),
				// Works thanks to the help from joost
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							if (
								!v.isDC &&
								v.isSpell &&
								v.thisWeapon[3] &&
								SpellsList[v.thisWeapon[3]].level === 0 &&
								v.thisWeapon[4].indexOf("warmage") !== 1 &&
								(/melee/i.test(fields.Description) ||
									/melee/.test(fields.Range))
							) {
								var sRange =
									fields.Range.match(/\d+([.,]\d+)?/g); // Handles special cases like thorn whip or other 'ranged' melee spells
								if (/melee/i.test(fields.Range) && !sRange) {
									fields.Range = "Melee (15 ft)";
									return;
								}
								var oChar = fields.Range.split(
									RegExp(sRange.join("|"))
								);
								fields.Range = "";
								sRange.forEach(function (dR, idx) {
									fields.Range +=
										(oChar[idx] ? oChar[idx] : "") +
										parseFloat(
											dR.toString().replace(",", ".") + 10
										);
								});
								if (oChar.length > sRange.length) {
									fields.Range += oChar[oChar.length - 1];
								}
								//Left out the metric if statements, if this is an issue, I can add these back
							}
						},
						"Being within 5 ft of a hostile creature doesn't impose disadvantage on my ranged spell attack rolls. Additionally, my warmage cantrip melee spell attacks has its range increased by 10 ft",
						700,
					],
					spellAdd: [
						function (spellKey, spellObj, spName) {
							if (
								!spellObj.psionic &&
								spName === "warmage" &&
								spellObj.level === 0 &&
								/melee/i.test(
									spellObj.description +
										spellObj.descriptionFull
								) &&
								/\d+([.,]\d+)?[\- ]?(f.{0,2}t|m)/i.test(
									spellObj.range
								)
							) {
								var sRange =
									spellObj.range.match(/\d+([.,]\d+)?/g);
								var oChar = spellObj.range.split(
									RegExp(sRange.join("|"))
								);
								spellObj.range = "";
								sRange.forEach(function (dR, idx) {
									spellObj.range +=
										(oChar[idx] ? oChar[idx] : "") +
										(parseFloat(
											dR.toString().replace(",", ".")
										) +
											10);
								});
								if (oChar.length > sRange.length) {
									spellObj.range += oChar[oChar.length - 1];
								}
								return true;
							}
						},
						"Being within 5 ft of a hostile creature doesn't impose disadvantage on my ranged spell attack rolls. Additionally, my warmage cantrip melee spell attacks has its range increased by 10 ft",
						700,
					],
				},
			},
			"fold (prereq: level 10)": {
				name: "Fold",
				source: ["VSoS", 162],
				submenu: "[House of Cards]",
				description: desc([
					"When an atk hits me, I can use my Deck of Fate to play my entire hand",
					"When I do so, I can cast shield without using a spell slot",
				]),
				usages: 1,
				recovery: "long rest",
				spellcastingBonus: [
					{
						name: "Fold",
						spells: ["shield"],
						selection: ["shield"],
						times: 1,
						firstCol: "oncelr",
					},
				],
				prereqeval: function (v) {
					return (
						classes.known.warmage.level >= 10 &&
						/\bpawns|cards\b/.test(classes.known.warmage.subclass)
					);
				},
				action: ["reaction", ""],
			},
			"gamble (prereq: cheat, house of dice or house of cards)": {
				name: "Gamble",
				source: ["VSoS", 162],
				description: desc([
					"I am always under the effects of the cheat cantrip",
					"I can reroll any atk roll, ability check, or saving throw",
					"I can do this once per short or long rest",
				]),
				usages: 1,
				recovery: "short rest",
				prereqeval: function (v) {
					return (
						isSpellUsed("cheat", true) &&
						/\bpawns|dice|cards\b/.test(
							classes.known.warmage.subclass
						)
					);
				},
			},
			"infinite variation (prereq: prestidigitation)": {
				name: "Infinite Variation",
				source: ["VSoS", 162],
				description: desc([
					"I can emulate the effects of another non-damaging cantrip when I use prestidigitation",
					"I roll an DC 15 Arcana check or this spell fails",
				]),
				spellcastingBonus: [
					{
						name: "Infinite Variation",
						spells: ["prestidigitation"],
						selection: ["prestidigitation"],
						times: 1,
					},
				],
				prereqeval: function (v) {
					return isSpellUsed("prestidigitation", true);
				},
				spellChanges: {
					prestidigitation: {
						description:
							"DC 15 Arcana check to emulate effects from non-damaging cantrip",
						descriptionFull:
							"You emulate the effects from another non-damaging cantrip. To do this, you must roll a DC 15 Arcana check or the spell fails",
						changes:
							"I can emulate the effects from another non-damaging cantrip, but must roll a DC 15 Arcana check or the spell fails",
					},
				},
			},
			"icy cantrip": {
				name: "Icy Cantrip",
				source: ["VSoS", 162],
				description: desc([
					"When I deal cold dmg to a crea with a warmage cantrip; it gain a penalty to its next atk roll",
					"The penalty is equal to half my warmage level (rounded down)",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								classes.known.warmage &&
								v.isSpell &&
								/cold/i.test(fields.Damage_Type) &&
								v.thisWeapon[3] &&
								SpellsList[v.thisWeapon[3]].level === 0 &&
								v.thisWeapon[4].indexOf("warmage") !== 1
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"-" +
									Math.floor(
										classes.known.warmage.level / 2
									) +
									" on targets next atk roll";
							}
						},
					],
				},
				usages: 1,
				recovery: "Turn",
			},
			"knight's aegis (prereq: level 10, force buckler)": {
				name: "Knight's Aegis ",
				source: ["VSoS", 162],
				submenu: "[House of Knights]",
				description: desc([
					"When I cast force buckler, I can concentrate on it for 1 min.",
					"The spell doesn't end early if I am hit by an attack.",
				]),
				spellChanges: {
					"force buckler": {
						description:
							"My AC gains +2 as if wielding a shield; doesn't end early if hit by an attack",
						descriptionFull:
							"You summon a translucent yet visible field of force, which springs forth from the prepared gauntlet. While concentrating on this cantrip, this shield grants you a +2 bonus to your Armor Class, as if you were wielding a shield. This spell does not ends early if you are hit by an attack.",
						duration: "Conc, 1 min",
						changes:
							"Being hit doesn't end this cantrip early. I can now concentrate on this cantrip.",
					},
				},
				prereqeval: function (v) {
					return (
						isSpellUsed("force buckler", true) &&
						classes.known.warmage.level >= 10 &&
						/\bpawns|knights\b/.test(classes.known.warmage.subclass)
					);
				},
			},
			"leading edge tactics": {
				name: "Leading Edge Tactics",
				source: ["VSoS", 163],
				submenu: "[House of Lancers]",
				description: desc([
					"If a crea atks me on the first round of combat, and I'm not surprised, it has disadv on the atk",
				]),
				prereqeval: function (v) {
					return /\bpawns|lancers\b/.test(
						classes.known.warmage.subclass
					);
				},
			},
			"lieutenant's demand (prereq: level 10)": {
				name: "Lieutenant's Demand",
				source: ["VSoS", 163],
				submenu: "[House of Kings]",
				description: desc([
					"I can cast the command spell at will without expending a spell slot.",
				]),
				action: ["action", "Command"],
				spellcastingBonus: [
					{
						name: "Liutenant's Demand",
						spells: ["command"],
						selection: ["command"],
						firstCol: "atwill",
					},
				],
				prereqeval: function (v) {
					return (
						classes.known.warmage.level >= 10 &&
						/\bpawns|kings\b/.test(classes.known.warmage.subclass)
					);
				},
			},
			"mage hand knack (prereq: mage hand)": {
				name: "Mage Hand Knack",
				source: ["VSoS", 163],
				description: desc([
					"When I cast mage hand, and as a bonus action each turn, I can choose one of the following:",
					"\u2022 Press: A crea < Huge w/in 5 ft spends 1 extra ft of movement per ft it moves",
					"\u2022 Punch: Melee spell atk vs a crea or obj; 1d6 force dmg",
					"\u2022 Seize: A crea < Medium grappled; Athletics/Acrobatics check (its choice) to escape",
					"      " +
						"Crea grappled until they use action to break it or spell ends",
					"An effect ends if I choose another effect, or as a bonus action",
				]),
				prereqeval: function (v) {
					return isSpellUsed("mage hand", true);
				},
				spellChanges: {
					"mage hand": {
						description:
							"On cast, and as a bonus action each turn, I choose Press, Punch, or Sieze",
						descriptionFull:
							"Create invisible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiples; Upon casting, and Upon casting, and as a bonus action on subsequent turns, You can choose one of the following effects: Press, Punch, Seize.\n   " +
							toUni("Press") +
							". The hand pushes against a Large or smaller creature within 5 feet of it. Choose a direction away from that creature. Every foot of movement in that direction while the hand is pressing against it costs the creature 1 extra foot of movement. The hand continues to push against the target until the spell ends or you use your bonus action to use a different effect with the hand.\n   " +
							toUni("Punch") +
							". The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand. On a hit, the target takes 1d6 force damage.\n   " +
							toUni("Seize") +
							". The hand grabs a Small or smaller creature and attempts to grapple it. The creature must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check (its choice) against your spell save DC or be grappled by the hand. The hand continues to grapple the target until the target uses an action to break the grapple on its turn, the spell ends, or you use your bonus action to use a different effect with the hand.",
						changes:
							"Upon casting, and as a bonus action on subsequent turns, I can choose one of the following effects: Press, Punch, Seize. See Notes page.",
					},
				},
				action: ["bonus action", ""],
			},
			"minor shadow illusion (prereq: minor illusion)": {
				name: "Minor Shadow Illusion",
				source: ["VSoS", 163],
				description: desc([
					"When I use minor illusion to create an obj, I fill it with shadowstuff appearing real",
					"This must be <5 ft cube. It's AC is 10, 5 hp, and weighs 5 lbs. Only 1 obj at a time",
					"If the obj can deal dmg, crea w/in the cube must make an Int save or take dmg",
					"The dmg type depends on the obj. This dmg can't trigger Warmage Edge or any tricks",
					"While the obj exists, I must maintain concentration",
				]),
				additional: levels.map(function (n) {
					return (n < 5 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4) + "d6";
				}),
				prereqeval: function (v) {
					return isSpellUsed("minor illusion", true);
				},
				spellChanges: {
					"minor illusion": {
						descriptionFull:
							"You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again." +
							"\n   " +
							"If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends." +
							"\n   " +
							"When you create the image of an object in an unoccupied space, you can fill it with fibers of shadowstuff to become partially real. This image must not be larger than a 5 ft cube. It has AC 10 and 5 hit points, and it weighs 5lbs. Only one of these can exist at a time, and while it exists it requires concentration. This illusion can't replicate a creature, but it can deal damage to a creature within its 5 ft cube. If the illusion is an object that can deal damage, a creature that enters the object's 5 ft cube or begins its turn there must make an Intelligence saving throw. On a failed save, the creature takes 1d6 damge of a type appropriate to the illusion. This damage increases with my warmage level. This damage can't trigger Warmage Edge or any warmage tricks." +
							"\n   " +
							"If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
						descriptionCantripDie:
							"5ft cube; creature enters or starts its turn in illus. save or 'CD'd6 Force dmg",
						changes:
							"When you create the image of an object in an unoccupied space, you can fill it with fibers of shadowstuff to become partially real. This image must not be larger than a 5 ft cube. It has AC 10 and 5 hit points, and it weighs 5lbs. Only one of these can exist at a time, and while it exists it requires concentration. This illusion can't replicate a creature, but it can deal damage to a creature within its 5 ft cube. If the illusion is an object that can deal damage, a creature that enters the object's 5 ft cube or begins its turn there must make an Intelligence saving throw. On a failed save, the creature takes 1d6 damge of a type appropriate to the illusion. This damage increases with my warmage level. This damage can't trigger Warmage Edge or any warmage tricks.",
					},
				},
			},
			"mystical armor": {
				name: "Mystical Armor",
				source: ["VSoS", 163],
				description: desc([
					"I can cast mage armor on myself at will w/out a spell slot or spell components.",
				]),
				spellcastingBonus: {
					name: "Mystical Armor",
					spells: ["mage armor"],
					selection: ["mage armor"],
					firstCol: "atwill",
				},
				spellChanges: {
					"mage armor": {
						description:
							"my ac becomes 13 + Dex mod for the duration; spell ends if I don armor, or as an action",
						descriptionFull:
							"If you are not wearing armor, a protective magical force surrounds you until the spell ends. Your base AC becomes 13 + your Dexterity modifier. The spell ends if you don armor or if you dismiss the spell as an action.",
						compMaterial: "",
						components: "",
						range: "Self",
						changes:
							"I can cast mage armor on myself at will without expending a spell slot or spell components",
					},
				},
			},
			"mystical athlete (prereq: quickstep or springheel)": {
				name: "Mystical Athlete",
				source: ["VSoS", 163],
				description: desc([
					"If I cast quickstep or springheeel, the bonus becomes 20 ft instead of 10 ft",
					"If I know both cantrips, I can cast both of them as a bonus action",
				]),
				prereqeval: function (v) {
					return (
						isSpellUsed("quickstep", true) ||
						isSpellUsed("springheel", true)
					);
				},
				spellChanges: {
					quickstep: {
						description:
							"My walking speed increases by 20 ft until the start of my next turn",
						descriptionFull:
							"You call upon your inner reserves to give you a brief flash of speed. When you cast this spell, your walking speed increases by 20 feet until the start of your next turn.",
						changes:
							"When I cast this cantrip, my speed increases by 20 ft instead of 10. If I also know springheel, I can cast both using the same bonus action",
					},
					springheel: {
						description:
							"Jump speed increases by 20 ft., and can running high or long jump w/o running start",
						descriptionFull:
							"You flood magic into your legs, allowing you to bound high into the air from a standstill. When you cast this spell, your jump distance increases 20 feet until the start of your next turn, and you can make a running high jump or a running long jump without a running start.",
						changes:
							"When I cast this cantrip, my jump increases by 20 ft instead of 10. If I also know quickstep, I can cast both using the same bonus action",
					},
				},
			},
			"mystical weaponmaster (prereq: force weapon or magic daggers)": {
				name: "Mystical Weaponmaster",
				source: ["VSoS", 163],
				description: desc([
					"I can reroll a 1 on an atk roll using force weapon or magic daggers, but must use the new roll",
				]),
				prereqeval: function (v) {
					return (
						isSpellUsed("force weapon", true) ||
						isSpellUsed("magic daggers", true)
					);
				},
				usages: 1,
				recovery: "Turn",
			},
			"mystical vision": {
				name: "Mystical Vision",
				source: ["VSoS", 163],
				description: desc([
					"I can cast the detect magic spell at will w/out expending a spell slot.",
				]),
				spellcastingBonus: {
					name: "Mystical Vision",
					spells: ["detect magic"],
					selection: ["detect magic"],
					firstCol: "atwill",
				},
			},
			"phantom hookshot (prereq: phantom grapnel)": {
				name: "Phantom Hookshot (prereq: phantom grapnel)",
				source: ["VSoS", 163],
				description: desc([
					"I can cast phantom grapnel as a bonus action, but the range is reduced to 15 ft.",
					"Creatures pulled an additional 10 ft by this",
				]),
				prereqeval: function (v) {
					return isSpellUsed("phantom grapnel", true);
				},
				spellChanges: {
					"phantom grapnel": {
						description:
							"Move to Huge or larger crea or empty space, or pull Large or smaller crea 20 ft. to me on failed save",
						range: "15 ft",
						descriptionFull:
							"You conjure a chain and hook made of magical force, which you propel at a creature or unoccupied space you can see within range. When you target a space or a creature of Huge size or larger, your grapnel pulls you to that target in a straight line. You provoke opportunity attacks for this movement as normal. When you target a creature of Large size or smaller, you pull the target up to 20 feet towards you. A creature can make a Strength saving throw to resist this movement.",
						changes:
							"You can now cast this as a bonus action. Doing so, the range is reduced by 15 ft and creatures are pulled an additional 10 ft.",
					},
				},
			},
			"rapid fortification (prereq: mending)": {
				name: "Rapid Fortification",
				source: ["VSoS", 163],
				description: desc([
					"I can cast mending as a bonus action, or choose one of the following effects:",
					"\u2022 A nonmagical obj <10ft cube, or <1ft if complex, to pristine condition; needs half of its parts",
					"\u2022 Create simple fortifications <10 ft cube; must have materials present",
				]),
				prereqeval: function (v) {
					return isSpellUsed("mending", true);
				},
				spellChanges: {
					mending: {
						description:
							"I can cast mending as a bonus action, or choose to restore/create",
						descriptionFull:
							"I can cast mending as a bonus action, or I can choose one of the following. *Restore a single nonmagical object, such as a door, cart, or window, to pristine condition if at least half of its parts are present. This object can be no larger than 10 cubic feet, or 1 cubic foot if it exceptionally complex (such as a clock). *Create simple fortifications, such as sealing a door shut, adding wooden planks to a window, or building a short stone wall (no larger than 10 cubic feet). You must have the materials present to use this ability.",
						chages: "You can now restore a single nonmagical object if at least half of its parts are present and must not be larger than 10 cubic ft or 1 cubic ft if its complex. You can also create simple fortications (no larger than 10 cubic ft) and must have materials present while doing this.",
					},
				},
			},
			"snake eyes (prereq: level 10)": {
				name: "Snake Eyes",
				source: ["VSoS", 164],
				submenu: "[House of Dice]",
				description: desc([
					"If I roll a 1 or 2 on a Die of Fate, I keep the die instead of giving it to the GM",
				]),
				prereqeval: function (v) {
					return (
						/\bpawns|dice\b/.test(classes.known.warmage.subclass) &&
						classes.known.warmage.level >= 10
					);
				},
			},
			"severe cantrip": {
				name: "Severe Cantrip",
				source: ["VSoS", 164],
				description: desc([
					"When a crea rolls a 1 on a save vs my warmage cantrips, it auto fails",
					"It takes \xD72 the number of damage dice dealt by the spell",
					"This only applies to the creature that rolled a 1 on the save",
				]),
			},
			"signature focus (prereq: level 5)": {
				name: "Signature Focus",
				source: ["VSoS", 164],
				description: desc([
					"On a long rest, I can place a sigil on a simple or martial wea; it becomes my focus",
					"It's considered magical and gain the following benefits until I use this trick again",
					"\u2022 As a bonus action, I can call it to my hand, as long as its on the same plane of existence",
					"\u2022 I use my Int mod instead of Str or Dex to atk and dmg rolls",
					"\u2022 Gain charges on long rest equal to Int mod (min 1); Spend 1 charge to deal +1d8 force dmg",
				]),
				prereqeval: function (v) {
					return classes.known.warmage.level >= 5;
				},
				action: ["bonus action", "Recall Signature Focus"],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							//not a spell; can include signature, focus, or sigil to help sheet automate, must be a simple weapon, changes dex/str to int if applicable.
							if (
								!v.isSpell &&
								/\b(signature|focus|sigil)\b/i.test(
									v.WeaponTextName
								) &&
								/(simple|martial)/i.test(v.theWea.type) &&
								(fields.Mod === 1 || fields.Mod === 2) &&
								What("Int Mod") >
									What(
										AbilityScores.abbreviations[
											fields.Mod - 1
										] + " Mod"
									)
							) {
								fields.Mod = 4;
							}
						},
						//signature, focus, and sigil aren't part of the normal features traits. This is added to help the sheet determine what is considered a "signature focus"
						"I can include 'signature', 'focus', or 'sigil' as part of the name for a simple weapon to act as my Signature Focus. I can use my Intelligence Modifier instead of Strength or Dexterity for the attack and damage rolls for this weapon.",
					],
				},
				limfeaname: "Focus Charges",
				usages: "Int mod per ",
				usagescalc: "event.value = Math.max(What('Int Mod'), 1);",
				recovery: "long rest",
			},
			"silent cantrip": {
				name: "Silent Cantrip",
				source: [["VSoS", 164]],
				description: desc([
					"When I deal thunder dmg to a hostile crea with a warmage cantrip, I can create a 15 ft sphere",
					"of magical silence (as per the silence spell), centered on myself or the creature (my choice)",
					"This lasts until the start of my next turn",
				]),
				usages: 1,
				recovery: "Turn",
			},
			"split fire (prereq: level 5)": {
				name: "Split Fire",
				source: [["VSoS", 164]],
				prereqeval: function (v) {
					return classes.known.warmage.level >= 5;
				},
				description: desc([
					"When I cast a warmage cantrip with only a single atk roll; I can target multiple creatures",
					"The number of targets equals the number of damage dice of the spell",
					"I roll the dmg as usual, but split the dmg dice between each target (min 1)",
				]),
			},
			"static cantrip": {
				name: "Static Cantrip",
				source: [["VSoS", 164]],
				description: desc([
					"When I deal lightning dmg to a hostile crea with a warmage cantrip, I can be charged",
					"While charged, I can use my rea. when I take dmg from a visible crea w/in 5 ft to dmg it",
					"The dmg dealt equals half of my warmage level",
				]),
				action: ["reaction", ""],
			},
			"unerring strike (prereq: level 10, true strike)": {
				name: "Unerring Strike",
				source: [["VSoS", 164]],
				prereqeval: function (v) {
					return (
						classes.known.warmage.level >= 10 &&
						isSpellUsed("true strike", true)
					);
				},
				description: desc([
					"When I use true strike, I can concentrate on it for a number of rounds equal to my Int mod",
					"I gain adv. on the first atk roll vs. the target on each of my turns while concentrating",
				]),
				spellChanges: {
					"true strike": {
						description:
							"1 crea; Conc. equals Int mod number of rounds; Adv. on first attack roll every turn",
						changes:
							"I can concerntrate on it for a number of rounds equal to my Intelligence modifer. I gain advantage on the first attack roll I make against the target on each of my turns while maintaining concentration.",
					},
				},
			},
		},
		subclassfeature3: {
			name: "Warmage House",
			source: ["VSoS", 160],
			minlevel: 3,
			description: desc([
				'I can choose a Warmage House by entering it into the "Class Field"',
			]),
		},
		"arcane surge": {
			name: "Arcane Surge",
			source: ["VSoS", 160],
			minlevel: 5,
			description: desc([
				"On my turn when I deal dmg with a warmage cantrip, I can deal 2\xD7 the number of dmg dice",
			]),
			usages: levels.map(function (v) {
				return v < 11 ? 1 : 2;
			}),
			recovery: "short rest",
		},
		"tactical insight": {
			name: "Tactical Insight",
			source: ["VSoS", 160],
			minlevel: 6,
			description: desc([
				"I can add my Int mod to saves against spells and other magical effects that deal dmg",
			]),
		},
		"stategic deflection": {
			name: "Strategic Deflection",
			source: ["VSoS", 160],
			minlevel: 14,
			description: desc([
				"If I succeed a save vs. crea's spell, I can choose a crea w/in the spell's range or w/in 30 ft",
				"They must make the save vs. the spell casted on me using my spell save DC",
				"They suffer the spell's effects on a fail; as if I was the caster, and they're the original target",
			]),
			action: ["reaction", ""],
			usages: 1,
			recovery: "short rest",
		},
		"master warmage": {
			name: "Master Warmage",
			source: ["VSoS", 160],
			minlevel: 20,
			description: desc([
				"I deal an extra dmg die with a cantrip if it has 4 dmg dice",
				"I deal an extra atk with a cantrip if it makes 4 atks",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							classes.known.warmage &&
							classes.known.warmage.level > 19 &&
							v.isSpell &&
							v.thisWeapon[3] &&
							SpellsList[v.thisWeapon[3]].level === 0 &&
							v.thisWeapon[4].indexOf("warmage") !== -1 &&
							fields.Damage_Die.match(/\b(\d+)d(\d+)\b/i)
						) {
							var oDie =
								fields.Damage_Die.match(/\b(\d+)d(\d+)\b/i);
							fields.Damge_Die.replace(
								/\b(\d+)d(\d+)\b/i,
								oDie[1] + 1 + "d" + oDie[2]
							);
						}
					},
				],
			},
		},
	},
};

// * house of bishops warmage subclass
AddSubClass("warmage", "house of bishops", {
	regExpSearch: /^(?=.*house)(?=.*bishops).*$/i,
	subname: "House of Bishops",
	fullname: "House of Bishops",
	source: [["VSoS", 165]],
	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // level 2
		[2, 0, 0, 0, 0, 0, 0, 0, 0], // level 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], // level 4
		[3, 0, 0, 0, 0, 0, 0, 0, 0], // level 5
		[3, 0, 0, 0, 0, 0, 0, 0, 0], // level 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], // level 7
		[4, 2, 0, 0, 0, 0, 0, 0, 0], // level 8
		[4, 2, 0, 0, 0, 0, 0, 0, 0], // level 9
		[4, 3, 0, 0, 0, 0, 0, 0, 0], // level 10
		[4, 3, 0, 0, 0, 0, 0, 0, 0], // level 11
		[4, 3, 0, 0, 0, 0, 0, 0, 0], // level 12
		[4, 3, 2, 0, 0, 0, 0, 0, 0], // level 13
		[4, 3, 2, 0, 0, 0, 0, 0, 0], // level 14
		[4, 3, 2, 0, 0, 0, 0, 0, 0], // level 15
		[4, 3, 3, 0, 0, 0, 0, 0, 0], // level 16
		[4, 3, 3, 0, 0, 0, 0, 0, 0], // level 17
		[4, 3, 3, 0, 0, 0, 0, 0, 0], // level 18
		[4, 3, 3, 1, 0, 0, 0, 0, 0], // level 19
		[4, 3, 3, 1, 0, 0, 0, 0, 0], // level 20
	],
	spellcastingKnown: {
		cantrips: [4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10],
		spells: [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9],
	},
	spellcastingList: {
		class: "warmage",
		level: [0, 4],
	},
	features: {
		subclassfeature3: {
			name: "Spellcasting",
			source: ["VSoS", 165],
			minlevel: 3,
			description: desc([
				"I can cast known wizard spells, using Intelligence as my spellcasting ability.",
				"I can add dmg to my warmage spells of 1st level or higher using my Warmage Edge feature",
				"I can't add Warmage Edge damage to the magic missile spell.",
			]),
			additional: levels.map(function (n) {
				return (
					(n < 3
						? ""
						: n < 4
						? 3
						: n < 7
						? 4
						: n < 8
						? 5
						: n < 10
						? 6
						: n < 11
						? 7
						: n < 13
						? 8
						: n < 14
						? 9
						: n < 16
						? 10
						: n < 19
						? 11
						: n < 20
						? 12
						: 13) + " spells known"
				);
			}),
			calcChanges: {
				spellList: [
					function (spList, spName, spType) {
						if (
							spName !== "warmage" ||
							spType.indexOf("bonus") !== -1
						)
							return;
						spList.extraspells = spList.extraspells.concat(
							CreateSpellList(
								{
									class: "wizard",
									level: [1, 4],
									school: ["Conj", "Evoc"],
								},
								true,
								false,
								false
							)
						);
					},
				],
			},
			spellcastingBonus: [
				{
					// the spells gained at level 3, 8, 14, 20
					name: "From any school",
					class: "wizard",
					times: [
						0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3,
						4,
					],
					level: [1, 4],
				},
			],
		},
		"subclassfeature3.1": {
			name: "Arcane Study",
			source: ["VSoS", 166],
			minlevel: 3,
			description: desc([
				"I'm proficient with two of the following: Arcana, History, Investigation, Medicine, or Religion",
			]),
			skillstxt:
				"Choose two of the following skills: Arcana, History, Investigation, Medicine, or Religion.",
		},
		subclassfeature7: {
			name: "Mystical Companion",
			source: ["VSoS", 166],
			minlevel: 7,
			description: desc([
				"I can cast find familiar as a ritual; I can choose Imp, Pseudodragon, Quasit, or Sprite",
			]),
			spellcastingBonus: [
				{
					name: "Mystical Companion",
					spells: ["find familiar"],
					selection: ["find familiar"],
					firstCol: "(R)",
				},
			],
		},
		subclassfeature10: {
			name: "Siege Casting",
			source: ["VSoS", 166],
			minlevel: 10,
			description: desc([
				"My warmage spells deals 2\xD7 to obj and structures; up to 2\xD7 range if it's a spell attack roll",
			]),
		},
		subclassfeature15: {
			name: "Spell Sculpting",
			source: ["VSoS", 166],
			minlevel: 15,
			description: desc([
				"If I cast a warmage spell affecting other visible crea(s), I choose crea(s) up to my Int mod",
				"They auto succeed on their save; taking no dmg if they would take half on a success",
			]),
		},
		subclassfeature18: {
			name: "Arcane Dominance",
			source: ["VSoS", 166],
			minlevel: 18,
			description: desc([
				"I expend spell slots with a combined level of 5> to regain an expended us of my Arcane Surge",
				"I can expend a number of spell slots with a combined level of 6 or more to regain an expended use of my Arcane Surge.",
			]),
			action: ["bonus action", ""],
		},
	},
});

// * house of cards warmage subclass
AddSubClass("warmage", "house of cards", {
	regExpSearch: /^(?=.*house)(?=.*cards).*$/i,
	subname: "House of Cards",
	fullname: "House of Cards",
	source: [["VSoS", 166]],
	features: {
		subclassfeature3: {
			name: "Bluff",
			source: [["VSoS", 166]],
			minlevel: 3,
			description: desc([
				"I gain proficiency with Deception and playing cards",
				"I can use my Int instead of Cha for Deception checks",
			]),
			addMod: {
				type: "skill",
				field: "Deception",
				mod: "max(Int-Cha|0)",
				text: "I use my Intelligence modifier for Deception instead of Charisma.",
			},
			toolProfs: ["Deck of Cards"],
		},
		"subclassfeature3.1": {
			name: "Deck of Fate",
			source: [["VSoS", 166]],
			minlevel: 3,
			description: desc([
				"I gain a magical deck called the Deck of Fate, shuffling it when I roll initiative, drawing 5 cards",
				"When I atk a hostile crea, I can use a bonus action to play one or more cards (see 3rd page)",
				"They must exactly match a result; dealing dmg or granting an effect on a match",
				"They go to the bottom of the deck, and I draw until I have 5 cards again",
			]),
			action: ["bonus action", " (one or more cards)"],
			toNotesPage: [
				{
					name: "Hands Table",
					page3notes: true,
					source: [["VSoS", 167]],
					note: desc([
						"\u2022 Straight (Any 5 sequential cards of any suit): +12 damage",
						"\u2022 Flush (Any 5 cards in the same suit in any order): +10 damage",
						"\u2022 Three of a Kind (Any 3 of the same number): +6 damage",
						"\u2022 Pair (Any 2 of the same number): +2 damage",
						"\u2022 Hearts (Any 2 hearts): +temp HP equal to my Int mod",
						"\u2022 Spades (Any 2 spades): Increase speed by 10 ft until the start of my next turn",
						"\u2022 Diamonds (Any 2 diamonds): +1 to my AC until the start of my next turn",
						"\u2022 Clubs (Any 2 clubs): +1 to my saving throws until the start of my next turn",
					]),
				},
			],
		},
		subclassfeature7: {
			name: "High Stakes",
			source: [["VSoS", 166]],
			minlevel: 7,
			description: desc([
				"On my turn, I place cards from hand to the bottom of the desk. losing 2 hp per card",
				"I draw until I have 5 cards again",
			]),
		},
		subclassfeature10: {
			name: "Dealer's Choice",
			source: [["VSoS", 166]],
			minlevel: 10,
			description: desc([
				"As a bonus action, GM can pick one of the following effects:",
				"\u2022 I gain resistance to all damage until the end of my next turn",
				"\u2022 I teleport to an unoccupied space of my choice I can see within 60 ft of me",
				"\u2022 I vanish into a safe demiplane until the start of my next turn, returning from where I stood",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature15: {
			name: "Card Reading",
			source: [["VSoS", 166]],
			minlevel: 15,
			description: desc([
				"When I draw from the Deck of Fate, I can pick a suit and check the top of the desk",
				"If I'm right, I can take the Dash, Disengage, or Use and Object action as part of the draw",
			]),
			action: ["bonus action", " (w/Deck of Fate)"],
			usages: 1,
			recovery: "Turn",
		},
		subclassfeature18: {
			name: "Ace in the Hole",
			source: [["VSoS", 167]],
			minlevel: 18,
			description: desc([
				"When I draw one or more cards from my deck, I draw 2\xD7 as many",
				"I put half the cards drawn in the bottom and the other half in my hand",
			]),
		},
	},
});

// * house of bishops warmage subclass
AddSubClass("warmage", "house of dice", {
	regExpSearch: /^(?=.*house)(?=.*dice).*$/i,
	subname: "House of Dice",
	fullname: "House of Dice",
	source: [["VSoS", 167]],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiencies",
			source: [["VSoS", 167]],
			minlevel: 3,
			description: desc([
				"I gain proficiency in Sleight of Hand and with the Dice Set",
			]),
			toolProfs: ["Dice Set"],
			skills: ["Sleight of Hand"],
		},
		"subclassfeature3.1": {
			name: "Dice of Fate",
			source: [["VSoS", 167]],
			minlevel: 3,
			description: desc([
				"I gain 4 Dice of Fate; using one to add to an ability check, atk roll, save, or dmg roll",
				"I can use it after the roll, but before the GM determine's the outcome; It then goes to the GM",
				"They can use it on a roll w/ an NPC or Monster; returning to me after they use it, and so forth",
				"I regain all dice, even if the GM has them; I gain 2 more at 7th level to use w/ warmage spells",
				"I can add 2 dice instead of 1 to my warmage spell dmg rolls",
			]),
			extraLimitedFeatures: [
				{
					name: "Dice of Fate",
					usages: "4 at level 3, +2 at level 7",
					usagescalc:
						"event.value = classes.known.warmage.level < 7 ? 4 : 6;",
					additional: "d6",
					recovery: "long rest",
				},
			],
		},
		"subclassfeature3.2": {
			name: "Chaos Roll",
			source: [["VSoS", 167]],
			minlevel: 3,
			description: desc([
				"I can use 2 Dice of Fate to create an effect of chaotic energy (see 3rd page notes)",
			]),
			toNotesPage: [
				{
					name: "Chaos Rolls Table",
					page3notes: true,
					source: [["VSoS", 167]],
					note: desc([
						"\u2022  2: I cast fireball centered on me",
						"\u2022  3: My AC is reduced by 2 until the start of my next turn",
						"\u2022  4: I fall prone",
						"\u2022  5: Creas. w/in 60 ft, not me, speak in a nonsense language for 1 min; Can't cast verbal spells",
						"\u2022  6: A 5 ft rad sphere is heavily obscured w/in 60 ft of me until the start of my next turn",
						"\u2022  7: I gain 7 temp HP and keep the Dice of Fate instead of giving them to the GM",
						"\u2022  8: I become invisible until the end of my next turn, as per invisibility",
						"\u2022  9: Random obj w/in 60 ft explodes; No dmg to me or allies; 3d6 fire dmg to GM chosen crea",
						"\u2022 10: I teleport to a visible place w/in 60 ft; Creas w/in 5 ft of me, Dex save or 2d6 fore dmg",
						"\u2022 11: A visibile crea w/in 60 ft takes 4d6 necrotic dmg; I gain hp equal to the dmg dealt",
						"\u2022 12: I cast lightning bolt and can add the Dice of Fate to the damage roll",
					]),
				},
			],
			action: ["action", ""],
		},
		subclassfeature7: {
			name: "Loaded Dice",
			source: [["VSoS", 168]],
			minlevel: 7,
			description: desc(["When I roll a die, I can flip it upside down"]),
			usages: 1,
			recovery: "Turn",
		},
		subclassfeature10: {
			name: "Twisted Fate",
			source: [["VSoS", 168]],
			minlevel: 10,
			description: desc([
				"If I make an atk or ability check w/disadv on my turn, I can use a die; 5-no disadv; 6-Gain adv",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature15: {
			name: "Roll the Bones",
			source: [["VSoS", 168]],
			minlevel: 15,
			description: desc([
				"When I take dmg from a visible crea, I can use 2 dice to make a Chaos Roll",
			]),
			action: ["reaction", ""],
		},
		subclassfeature18: {
			name: "Steal Luck",
			source: [["VSoS", 168]],
			minlevel: 18,
			description: desc([
				"When I roll initiative, roll a d6. I steal that many Dice of Fate back from the GM.",
			]),
		},
	},
});

// * house of kings warmage subclass
AddSubClass("warmage", "house of kings", {
	regExpSearch: /^(?=.*house)(?=.*kings).*$/i,
	subname: "House of Kings",
	fullname: "House of Kings",
	source: [["VSoS", 168]],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiency",
			source: [["VSoS", 168]],
			minlevel: 3,
			description: desc([
				"I am proficient w/ medium armor, battleaxes, lances, longswords, tridents, and warhammers",
			]),
			armorProfs: [true, true, false, false],
			weaponProfs: [
				true,
				false,
				[
					"battleaxes",
					"lances",
					"longswords",
					"tridents",
					"warhammers",
				],
			],
		},
		"subclassfeature3.1": {
			name: "Battle Tactics",
			source: [["VSoS", 168]],
			minlevel: 3,
			description: desc([
				"I gain 2 battle dice. I can use a die to perform a stratagem (see 3rd page notes)",
				"I regain all uses on a short or long rest, or when I roll initiative",
			]),
			additional: levels.map(function (n) {
				return n < 13 ? "d8" : "d10";
			}),

			limefeaname: "Battle Die",
			usages: "",
			usagescalc:
				"event.value = classes.known.warmage.level < 7 ? 2 : classes.known.warmage.level < 19 ? 3 : 4;",
			recovery: "short rest",
			toNotesPage: [
				{
					name: "Stratagem",
					source: [["VSoS", 169]],
					page3notes: true,
					note: desc([
						"\u2022 Blitz: Bonus action when I hit a crea w/atk, 1 ally w/in 60 ft that can see/hear me",
						"  moves up to \u00BD its spd w/out provoking opportunity atks from the crea I targeted",
						"\u2022 Check: Bonus action when I hit a crea w/atk; Target Cha save or rea to move \u00BD spd away",
						"  crea immune to frightened auto succeeds",
						"\u2022 Flash of Brilliance: When I roll an Int/Wis check, I can add it before GM determines outcome",
						"\u2022 Gambit: When I hit a crea w/atk, next crea that atks them, not me, adds it to their atk roll",
						"\u2022 Mystic Counsel: Bonus action, 1 audible/visible crea w/in 30 ft, can add it to next spell save",
						"\u2022 Stalemate: Bonus action when I hit a crea w/atk, can't willingly move, unless disengages first",
						"  This lasts until the end of its next turn",
					]),
				},
			],
		},
		subclassfeature7: {
			name: "Leading from the Front",
			source: [["VSoS", 168]],
			minlevel: 7,
			description: desc([
				"Allies w/in 120 of me, includes myself, ignores nonmagical difficult terrain",
			]),
		},
		subclassfeature10: {
			name: "Tactical Master",
			source: [["VSoS", 168]],
			minlevel: 10,
			description: desc([
				"Allies w/in 10 ft adds my Int mod to their saves vs spells and magical effects that deal dmg",
			]),
			savetxt: {
				text: ["Add Int mod to damaging spells and magical effects"],
			},
			additional: levels.map(function (n) {
				return n < 10 ? "" : "10-ft radius";
			}),
		},
		subclassfeature15: {
			name: "Stratagem",
			source: [["VSoS", 168]],
			minlevel: 15,
			description: desc(["I learn the Checkmate stratagem."]),
			toNotesPage: [
				{
					name: "Stratagem: Checkmate",
					note: desc([
						"\u2022 Checkmate: Bonus action when I hit a crea w/ wpn/spell atk, 1 visible/audible ally can atk",
						"  Ally must be w/in reach of crea I hit, using its rea to atk w/ wpn/spell requiring an atk roll",
						"  It adds the result of the die to the weapon's dmg roll",
					]),
					amendTo: "Stratagem",
					page3notes: true,
				},
			],
			action: ["bonus action", "Checkmate (1 Battle Die)"],
		},
		subclassfeature18: {
			name: "Grandmaster",
			source: [["VSoS", 169]],
			minlevel: 18,
			description: desc([
				"When I roll initiative, each visible/audible ally w/in 60 ft up to my Int mod gain a battle die",
				"It can expend it to add to an atk, ability check, save, or dmg roll; before the GM's outcome",
				"After 10 mins, they lose it, even if it isn't used. A crea can only have 1 die from this at a time",
			]),
		},
	},
});

// * house of knights warmage subclass
AddSubClass("warmage", "house of knights", {
	regExpSearch: /^(?=.*house)(?=.*knights).*$/i,
	fullname: "House of Knights",
	subname: "House of Knights",
	source: [["VSoS", 169]],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiency",
			source: [["VSoS", 169]],
			minlevel: 3,
			description: desc([
				"I gain proficiency with medium armor and martial weapons",
			]),
			armorProfs: [true, true, false, false],
			weaponProfs: [true, true],
		},
		"subclassfeature3.1": {
			name: "Force Breastplate",
			source: [["VSoS", 169]],
			minlevel: 3,
			description: desc([
				"I can add my Int mod instead of Dex to AC w/ medium, light, or mage armor",
			]),
			//from Joost
			extraAC: [
				{
					mod: "Int-Dex",
					text: "I add my Intelligence modifier to AC instead of my Dexterity.",
					stopeval: function (v) {
						return v.mediumArmor || v.heavyArmor;
					}, // for everything but medium and heavy armor
				},
				{
					mod: "min(2|Int)-min(2|Dex)",
					text: "I add my Intelligence modifier (max 2) to AC instead of my Dexterity (max 2) when wearing medium armor.",
					stopeval: function (v) {
						return !v.mediumArmor;
					}, // only for medium armor
				},
			],
		},
		"subclassfeature3.2": {
			name: "Mystical Weapon",
			source: [["VSoS", 169]],
			minlevel: 3,
			description: desc([
				"I learn force weapon; I can draw any simple/martial weapon of my choice",
				"It's summoned into my hand and deals force dmg instead of its normal dmg",
				"When it leaves my hand, its stored in a pocket dimension until I summon it again",
			]),
			spellcastingBonus: [
				{
					name: "Mystical Weapon",
					spells: ["force weapon"],
					selection: ["force weapon"],
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							!v.isSpell &&
							/\bforce\b/i.test(v.WeaponTextName) &&
							/(simple|martial)/i.test(v.theWea.type)
						) {
							fields.Damage_Type = "Force";
						}
					},
				],
			},
		},
		subclassfeature7: {
			name: "Flurry of Blades",
			source: [["VSoS", 169]],
			minlevel: 7,
			description: desc([
				"If I cast a cantrip w/ multiple atk rolls, I can make one additional atk with it",
			]),
			action: ["bonus action", "Flurry of Blades"],
		},
		subclassfeature10: {
			name: "Knight's Ward",
			source: [["VSoS", 170]],
			minlevel: 10,
			description: desc([
				"I gain temp hp equal to 2\xD7 my warmage level, which lasts for 1 min",
			]),
			usages: 1,
			recovery: "short rest",
			action: ["bonus action", ""],
		},
		subclassfeature15: {
			name: "Tactical Maneuver",
			source: [["VSoS", 170]],
			minlevel: 15,
			description: desc([
				"I can spend my whole movement to teleport up to half my spd to a visible space",
			]),
		},
		subclassfeature18: {
			name: "Field of Blades",
			source: [["VSoS", 170]],
			minlevel: 18,
			description: desc([
				"I can atk up to 5 visible creas w/in 30 ft with a melee spell atk; 2d10 + Int mod force dmg",
			]),
			weaponOptions: [
				{
					regExpSearch: /field of blades/i,
					source: [["VSoS", 170]],
					name: "Field of Blades",
					damage: [2, 10, "Force"],
					type: "Cantrip",
					ability: 4,
					abilitytodamage: true,
					range: "30 ft",
					description:
						"5 visible targets w/in range; atk roll for each",
					special: true,
					selectNow: true,
				},
			],
			action: ["action", ""],
		},
	},
});

// * house of lancers warmage subclass
AddSubClass("warmage", "house of lancers", {
	regExpSearch: /^(?=.*house)(?=.*lancers).*$/i,
	fullname: "House of Lancers",
	subname: "House of Lancers",
	source: [["VSoS", 170]],
	features: {
		subclassfeature3: {
			name: "Intercept Technique",
			source: [["VSoS", 170]],
			minlevel: 3,
			description: desc([
				"My AC becomes 10 + Dex + Int while w/out armor; or 13 + Dex + Int w/ mage armor",
				"If I wield a shield, I lose this benefit",
			]),
			armorOptions: [
				{
					regExpSearch: /intercept technique/i,
					name: "Intercept Technique",
					ac: "10+Int",
					source: [["VSoS", 170]],
					selectNow: true,
				},
			],
			extraAC: [
				{
					mod: "max(Int-Dex|0)",
					text: "I can use my Intelligence modifier instead of Dexterity to AC while under the effects of mage armor.",
					stopeval: function (v) {
						return !/^mage armou?r$/.test(CurrentArmour.known);
					},
				},
			],
		},
		"subclassfeature3.1": {
			name: "Hand-to-Hand Arcana",
			source: [["VSoS", 170]],
			minlevel: 3,
			description: desc([
				"I learn the secrets to unarmed combat and gain the following:",
				"\u2022 My unarmed strikes use Int instead of Str for atk and dmg rolls",
				"\u2022 The dmg becomes a d6, unless already higher",
				"\u2022 My unarmed strikes count as melee weapons for the purposes of warmage spells",
				"\u2022 I can make an unarmed strike as a bonus action; Must atk w/unarmed strike as an action",
			]),
			action: [["bonus action", " (Unarmed Strike)"]],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.baseWeaponName == "unarmed strike") {
							fields.Proficiency = true;
						}
						if (
							v.baseWeaponName == "unarmed strike" &&
							What("Int Mod") >
								What(
									AbilityScores.abbreviations[
										fields.Mod - 1
									] + " Mod"
								) &&
							(fields.Damage_Die.match(/\b(\d+)d(\d+)\b/i) ||
								fields.Damage_Die == 1)
						) {
							var oDmg =
								fields.Damage_Die == 1
									? 1
									: fields.Damage_Die.match(
											/\b(\d+)d(\d+)\b/i
									  );
							fields.Mod = 4;
							if (oDmg == 1) {
								fields.Damage_Die = "1d6";
							}
							if (
								oDmg[0] &&
								Number(oDmg[1]) == 1 &&
								Number(oDmg[2]) < 6
							) {
								fields.Damage_Die = "1d6";
							}
						}
					},
				],
			},
		},
		"subclassfeature3.2": {
			name: "Shock Trooper",
			source: [["VSoS", 170]],
			minlevel: 3,
			description: desc([
				"When I make a melee atk on my turn vs. a visible crea, I can lunge 15 ft to it before atking",
				"This doesn't provoke opportunity atks, and can travel through air, but fall after the atk",
			]),
		},
		subclassfeature7: {
			name: "Mystical Physicality",
			source: [["VSoS", 170]],
			minlevel: 7,
			description: desc([
				"When I make a Str, Dex, or Con check, I can add my Int instead of its normal modifier",
				"In addition, moving through difficult terrain no longer costs me additional movement",
			]),
			addMod: [
				"Acrobatics",
				"Athletics",
				"Sleight of Hand",
				"Stealth",
			].map(function (skill) {
				return {
					type: "skill",
					field: skill,
					mod:
						skill == "Acrobatics" || skill == "Sleight of Hand"
							? "max(Int-Dex|0)"
							: "max(Int-Str|0)",
					text: "I use my Intelligence modifier instead of its normal modifier",
				};
			}),
		},
		subclassfeature10: {
			name: "Deflect Energy",
			source: [["VSoS", 170]],
			minlevel: 10,
			description: desc([
				"I reduce dmg from ranged spell or wpn atk; 1d10+Int mod+\u00BD warmage level (rounded down)",
				"The dmg type from the atk must be cold, fire, force, lightning, necrotic, or radiant",
			]),
			additional: levels.map(function (n) {
				return n < 10 ? "" : "1d10 + Int mod + " + Math.floor(n / 2);
			}),
			action: ["reaction", ""],
		},
		subclassfeature15: {
			name: "Improved Shock Trooper",
			source: [["VSoS", 170]],
			minlevel: 15,
			description: desc([
				"My Shock Trooper lunge increases to 30 ft, teleporting me through a crea or obj; as if blinking",
				"I can't blink into an occupied space",
			]),
		},
		subclassfeature18: {
			name: "Flurry of Spells",
			source: [["VSoS", 170]],
			minlevel: 18,
			description: desc([
				"I can expend a use of my Arcane Surge to cast three different cantrips",
				"It must have a casting time of 1 action or bonus action; I can't use Arcane Surge with these",
			]),
			action: ["action", "Flurry of Spells (Arcane Surge)"],
			usages: 1,
			recovery: "long rest",
		},
	},
});

// * house of pawns warmage subclass
AddSubClass("warmage", "house of pawns", {
	regExpSearch: /^(?=.*house)(?=.*pawns).*$/i,
	fullname: "House of Pawns",
	subname: "House of Pawns",
	source: [["VSoS", 171]],
	features: {
		subclassfeature3: {
			name: "Promotion",
			source: [["VSoS", 171]],
			minlevel: 3,
			description: desc([
				"I learn an additional warmage trick that can be from any house",
			]),
			bonusClassExtrachoices: [
				{
					class: "warmage",
					feature: "warmage tricks",
					bonus: 1,
				},
			],
		},
		"subclassfeature3.1": {
			name: "Adaptive Arcanist",
			source: [["VSoS", 171]],
			minlevel: 3,
			description: desc([
				"When I finish a short or long rest, I can pick any warmage cantrip",
				"This doesn't count against me; I know it until I pick a new one",
			]),
			eval: function () {
				(CurrentSpells["warmage-adaptive arcanist"] = {
					name: "Adaptive Arcanist",
					ability: 4,
					list: { class: "warmage" },
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
					allowUpCasting: true,
					firstCol: "",
				}),
					SetStringifieds("spells");
				CurrentUpdates.types.push("spells");
			},
			removeeval: function () {
				delete CurrentSpells["warmage-adaptive arcanist"];
				SetStringifieds("spells");
				CurrentUpdates.types.push("spells");
			},
		},
		subclassfeature7: {
			name: "Pawn Storm",
			source: [["VSoS", 171]],
			minlevel: 7,
			description: desc([
				"If I target a crea w/ a cantrip, they can't make opportunity atks vs. me",
				"This lasts the rest of my turn, whether or not I deal dmg",
			]),
		},
		subclassfeature10: {
			name: "Additional Arcane Fighting Style",
			source: [["VSoS", 171]],
			minlevel: 10,
			description: desc([
				"I can choose an additional fighting style from the Arcane Fighting Style class feature.",
			]),
			bonusClassExtrachoices: [
				{
					class: "warmage",
					feature: "arcane fighting style",
					bonus: 1,
				},
			],
		},
		subclassfeature15: {
			name: "Opening Move",
			source: [["VSoS", 171]],
			minlevel: 15,
			description: desc([
				"I can add my Int mod to initiative rolls",
				"When I roll initiative and not surprised, I can move up to my speed",
			]),
			addMod: {
				type: "skill",
				field: "Init",
				mod: "max(Int|0)",
				text: "I can add my Intelligence modifier to initiative rolls.",
			},
		},
		subclassfeature18: {
			name: "Fundamental Mastery",
			source: [["VSoS", 171]],
			minlevel: 18,
			description: desc([
				"When I roll dmg for a warmage cantrip, I can treat one of the die as its max value",
			]),
			usages: 1,
			recovery: "Turn",
		},
	},
});

// * house of rooks warmage subclass
AddSubClass("warmage", "house of rooks", {
	regExpSearch: /^(?=.*house)(?=.*rooks).*$/i,
	fullname: "House of Rooks",
	subname: "House of Rooks",
	source: [["VSoS", 171]],
	features: {
		subclassfeature3: {
			name: "Rook Strike",
			source: [["VSoS", 171]],
			minlevel: 3,
			description: desc([
				"I gain adv on the next spell atk roll or a crea has disadv on a warmage cantrip save",
				"The crea has disadv on the save until the end of my turn",
				"I can do this once per short or long rest, or if I reduce a crea to 0 hp with a warmage cantrip",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
		},
		"subclassfeature3.1": {
			name: "Rasp",
			source: [["VSoS", 171]],
			minlevel: 3,
			description: desc([
				"I can cast knock at will w/out a spell slot; casting time 1 min and it's completely silent",
			]),
			spellcastingBonus: [
				{
					name: "Rasp",
					spells: ["knock"],
					selection: ["knock"],
					firstCol: "atwill",
				},
			],
			spellChanges: {
				knock: {
					time: "1 min",
					description:
						"1 object is unlocked (1 lock), unstuck, unbarred, arcane lock suppressed for 10 min; Completely silent",
					descriptionFull:
						"Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access." +
						"\n   " +
						"A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked." +
						"\n   " +
						"If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally." +
						"\n   " +
						"When you cast the spell, it is completely silent, and no sound eminates.",
					changes:
						"I can cast knock at will. Doing so create no sound.",
				},
			},
		},
		subclassfeature7: {
			name: "Arcane Acrobat",
			source: [["VSoS", 171]],
			minlevel: 7,
			description: desc([
				"I can add my Int mod to all Dex checks I make; I subtract 60 ft when determining fall dmg",
				"I cannot be incapacitate to do this",
			]),
			addMod: ["Acrobatics", "Sleight of Hand"].map(function (skill) {
				return {
					type: "skill",
					field: skill,
					mod: "max(Int|0)",
					text: "I can add my Intelligence modifier to all Dexterity checks I make",
				};
			}),
		},
		subclassfeature10: {
			name: "Fleeting Decoy",
			source: [["VSoS", 171]],
			minlevel: 10,
			description: desc([
				"When I take dmg from a visible crea, I can raise a defensive illusion to protect me",
				"All atks after this have disadv until the start of my next turn",
			]),
			action: ["reaction", ""],
		},
		subclassfeature15: {
			name: "Elusive Step",
			source: [["VSoS", 171]],
			minlevel: 15,
			description: desc([
				"If I move 15 or more ft on my turn, additional movement doesn't provoke opportunity atks",
			]),
		},
		subclassfeature18: {
			name: "Flash of Feathers",
			source: [["VSoS", 171]],
			minlevel: 18,
			description: desc([
				"I can cast invisibility on myself w/out a spell slot or components. While invisible,",
				"my speed is 2\xD7 and I can make one wpn atk or warmage cantrip w/out ending the spell",
			]),
			usages: 1,
			recovery: "short rest",
			spellcastingBonus: [
				{
					name: "Flash of Feathers",
					spells: ["invisibility"],
					selection: ["invisibility"],
					firstCol: "oncesr",
				},
			],
		},
	},
});
