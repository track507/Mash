var iFileName = "VSoS_Subclasses_Monk.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
	SourceList["VSoS"] = {
		name: "Valda's Spire of Secrets",
		abbreviation: "VSoS",
		abbreviationSpellsheet: "V",
		date: "2022/12/30", // ! Updated as of 12-30-2022 (Version 1.4)
	};
}

// * Monk subclasses
AddSubClass("monk", "way of the bow", {
	regExpSearch: /^(?=.*bow)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Bow",
	source: [["VSoS", 222]],
	features: {
		subclassfeature3: {
			name: "Archery Fighting Style",
			description: desc([
				"I gain a +2 bonus to attack rolls I make with ranged weapons",
				"I can't choose a style again even if I get to choose later on",
			]),
			minlevel: 3,
			source: [["VSoS", 222]],
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
					},
					"My ranged weapons get a +2 bonus on the To Hit.",
				],
			},
		},
		"subclassfeature3.1": {
			name: "Bow Arts",
			source: [["VSoS", 222]],
			minlevel: 3,
			description: levels.map(function (n) {
				if (n < 3) return "";
				var description = desc([
					"I gain proficiency with longbows and shortbows, which are considered monk weapons",
					"Any ranged atks I make within 5 ft of a hostile creature do not have disadvantage",
					"I can spend ki points to use the Flurry of Arrows and Soul Arrow (see page 3 notes)",
				]);

				if (n >= 6) {
					description += desc(["At 6th level, I can make a ranged weapon attack to deliver a Stunning Strike"]);
				}

				// Add the level 6 description if the level is 6 or higher
				return description;
			}),
			weaponProfs: [true, false, ["Longbow, Shortbow"]],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/longbow|shortbow/i.test(v.baseWeaponName + v.WeaponName) && !v.isSpell && !v.theWea.monkweapon && !v.theWea.special) {
							v.theWea.monkweapon = true;
							fields.Proficiency = true;
						}
					},
					"I gain proficiency with longbows and shortbows which count as monk weapons.",
					1,
				],
			},
			additional: "1 ki point",
			toNotesPage: [
				{
					page3notes: true,
					name: "Bow Arts: Flurry of Arrows and Soul Arrow",
					note: desc([
						"\u2022 Flurry of Arrows: Immediately after I take the atk action on my turn to make a",
						"  ranged wea atk or unarmed strike, I can spend 1 ki point to make an additional ranged",
						"  wea atk as a bns action",
						"\u2022 Soul Arrow: When I take the atk action on my turn to make a ranged wea atk, I can",
						"  spend 1 ki point to fire a soul arrow for the first atk. This arrow ignores partial",
						"  cover and deals extra dmg equal to my Wis mod, and does not consume ammunition",
					]),
				},
			],
		},
		subclassfeature6: {
			name: "Intercepting Shot",
			source: [["VSoS", 222]],
			minlevel: 6,
			description: desc([
				"When a visible crea makes an atk against me, I can make a ranged atk roll",
				"as a rea to interrupt the attack. If my roll is greater than the result of",
				"the attacker's, I can reduce the atk roll targeting me by 5 (min. 1)",
			]),
			action: [["reaction", ""]],
		},
		subclassfeature11: {
			name: "Serenity of the Wind",
			source: [["VSoS", 222]],
			minlevel: 11,
			description: levels.map(function (n) {
				if (n < 11) return "";
				var description = desc([
					"I can use my bns action and spend 1 ki point to gain blindsight",
					"The range is 120 ft and lasts until the end of my next turn",
				]);

				// Append additional description based on level
				if (n >= 17) {
					description += desc(["At 17th level, I always have blindsight out to a range of 30 ft"]);
				}

				return description;
			}),
			additional: "1 ki point",
			action: [["bonus action", "Serenity of the Wind (1 ki)"]],
		},
		subclassfeature17: {
			name: "Serenity of the Wind: Blindsight",
			source: [["VSoS", 222]],
			minlevel: 17,
			vision: [["blindsight", 30]],
		},
		subclassfeature17: {
			name: "Zen Archery",
			source: [["VSoS", 222]],
			minlevel: 17,
			description: desc([
				"When I miss a ranged wea atk on my turn, I can immediately make another",
				"vs the same target. I can do this once per each of my turns",
			]),
		},
	},
});

AddSubClass("monk", "way of the flagellant", {
	regExpSearch: /^(?=.*flagellant)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Flagellant",
	source: [["VSoS", 223]],
	features: {
		subclassfeature3: {
			name: "Ascetic Implements",
			source: [["VSoS", 223]],
			minlevel: 3,
			description: desc([
				"I gain proficiency with flails and whips which count as monk weapons.",
				"I can choose to deal slash. instead of blud. dmg with my unarmed strikes.",
			]),
			weaponProfs: [true, false, ["Flail, Whip"]],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/flail|whip/i.test(v.baseWeaponName) && !v.isSpell && !v.theWea.monkweapon && !v.theWea.special) {
							v.theWea.monkweapon = true;
							fields.Proficiency = true;
						}
					},
					"I gain proficiency with flails and whips which count as monk weapons.",
					1,
				],
			},
		},
		"subclassesfeature3.1": {
			name: "Penitent Lash",
			source: [["VSoS", 223]],
			minlevel: 3,
			description: desc([
				"At the start of my turn, I can spend 1 ki point to deal a d4 slash. dmg to myself",
				"For every d4 I take, I gain adv. on an atk I make before the end of my turn",
				"Each atk must be with a monk weapon or unarmed strike. Reducing the dmg in anyway",
				"will cause this ability to have no effect",
			]),
			additional: "1 ki point",
		},
		subclassfeature6: {
			name: "Art of Punishment",
			source: [["VSoS", 223]],
			minlevel: 6,
			description: desc(["I learn Branding Palm, Electroshock Strike, and Scissorhand Technique (page 3 notes)"]),
			toNotesPage: [
				{
					name: "Art of Punishment",
					source: [["VSoS", 223]],
					page3notes: true,
					note: desc([
						"\u2022 Branding Palm: When I hit a crea with an unarmed strike, I can spend a bns action and",
						"  1 ki point to brand them. The next atk that hits a branded crea w/in the next minute deals",
						"  an extra 2d8 fire dmg. This becomes 3d8 at 11th and 4d8 at 17th level.",
						"\u2022 Electroshock Strike: After I take the attack action on my turn, I can spend 1 ki point",
						"  to cast fire dmg shocking grasp as a bns action. Wis is my spellcasting ability for this",
						"\u2022 Scissorhand Technique: If I deal slashing damage using a monk weapon to a crea, I can",
						"  spend 1 ki point to make the target bleed. Constructs, oozes, and undead aren't affected",
						"  A crea with bleeding loses 1d6 hp at the start of each of their turns for each of its bleeding",
						"  wounds it has unless it uses it action to stop all of its wounds from bleeding. A bleeding",
						"  target cannot regain hp and can have a number of wounds up to my Proficiency bonus.",
					]),
				},
			],
			additional: "1 ki point",
			action: [
				["bonus action", "Branding Palm (1 ki)"],
				["bonus action", "Electroshock (1 ki)"],
			],
			spellcastingBonus: [
				{
					spellcastingAbility: 5,
					name: "Electroshock",
					spells: ["shocking grasp"],
					selection: ["shocking grasp"],
					firstCol: "1 ki",
				},
			],
		},
		subclassfeature11: {
			name: "Purity Through Pain",
			source: [["VSoS", 223]],
			minlevel: 11,
			description: desc([
				"When I take dmg that exceeds my character level, I can use my rea to regain 1d4 ki points",
				"I can do this a number of times equal to Wisdom mod (min 1) per long rest.",
			]),
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			action: [["reaction", ""]],
		},
		subclassfeature17: {
			name: "Exsanguinate",
			source: [["VSoS", 223]],
			minlevel: 17,
			description: desc([
				"When I use Penitent Lash, I can choose to increase the damage to 6d4 or more",
				"If I do so, I gain all the benefits of Penitent Lash, and all unarmed strikes",
				"deal an extra 1d4 slashing damage until the end of my turn.",
			]),
		},
	},
});

AddSubClass("monk", "way of the four fists", {
	regExpSearch: /^(?=.*\b(four|4)\b)(?=.*fists?)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Four Fists",
	source: [["VSoS", 224]],
	features: {
		subclassfeature3: {
			name: "Grasp of the Monkey",
			source: [["VSoS", 224]],
			minlevel: 3,
			description: desc([
				"I gain a climbing speed equal to my walking speed, my jump distance is doubled,",
				"and I have adv. on ability checks and saving throws made to climb, maintain balance,",
				"and grip objects such as ledges and ropes. I can manipulate objects with my hands,",
				"feet, or tail, but cannot attack with an object held by my tail.",
			]),
			speed: { climb: { spd: "walk", enc: "walk" } },
			savetxt: { text: ["Adv. on saves and checks made to climb, balance, and grip"] },
		},
		"subclassesfeature3.1": {
			name: "Simian Swift",
			source: [["VSoS", 224]],
			minlevel: 3,
			description: desc([
				"When I roll init. and not surprised, I can spend 1 ki point to move up to half my",
				"speed or jump into the air and make an unarmed strike.",
			]),
			additional: "1 ki point",
		},
		subclassfeature6: {
			name: "Nimbus",
			source: [["VSoS", 224]],
			minlevel: 6,
			description: desc([
				"As a bonus action, I can summon a cloud to ride on. Until the start of my next turn,",
				"I have a flying speed equal to my walking speed, and can maintain this effect by",
				"spending 1 ki point on my turn. Otherwise, I begin to fall if there is nothing to hold",
				"onto or keep my aloft.",
			]),
			additional: "1 ki point",
			action: [["bonus action", ""]],
		},
		subclassfeature11: {
			name: "Uncanny Dodge",
			source: [["VSoS", 224]],
			minlevel: 11,
			description: desc(["As a reaction, I halve the damage of an atk from an attacker that I can see"]),
			action: [["reaction", ""]],
		},
		subclassfeature17: {
			name: "Flurry of Limbs",
			source: [["VSoS", 224]],
			minlevel: 17,
			description: desc(['Whenever I use "Flurry of Blows" on my turn, I can make 3 unarmed strikes rather than 2.']),
		},
	},
});

AddSubClass("monk", "way of the mask", {
	regExpSearch: /^(?=.*mask)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Mask",
	source: [["VSoS", 225]],
	abilitySave: 5,
	abilitySaveAlt: 6,
	features: {
		subclassfeature3: {
			name: "Crowd Favorite",
			source: [["VSoS", 225]],
			minlevel: 3,
			description: desc([
				"I can choose to add my Cha mod instead of my Wis mod when determining ki save DC",
				"While wearing no armor and not wielding a shield, my AC is 10 + Str mod + Cha mod.",
			]),
			armorOptions: [
				{
					regExpSearch: /unarmored defense \(cha\)/i,
					name: "Unarmored Defense (Cha)",
					source: [["VSoS", 225]],
					ac: "10+Str+Cha",
					dex: -10, //do not add our dex mod
					affectsWildShape: true,
					selectNow: true,
				},
			],
		},
		"subclassfeature3.1": {
			name: "Heavyweight Champion",
			source: [["VSoS", 225]],
			minlevel: 3,
			description: desc([
				"I can wrestle obstacles even if they cannot be conventionally wrestled",
				"I gain the following:",
				"\u2022 I can grapple any crea regardless of size",
				"\u2022 I can use an action to pin a creature grappled by me. I make",
				"  another grapple check, and if I succeed, we're both restrained until the grapple ends",
				"\u2022 If I have the Grappler feat, I can choose whether a target grappled by me must",
				"  make a Athletics or Acrobatics check to escape",
			]),
			action: [["action", "Pin Creature (if grappled)"]],
		},
		subclassfeature6: {
			name: "Signature Move",
			source: [["VSoS", 225]],
			minlevel: 6,
			description: desc(['I gain a signature move using the "Choose Feature" button.']),
			choices: ["Foreign Object", "Headbutt of Justice", "Infinity Suplex"],
			"foreign object": {
				name: "Foreign Object",
				source: [["VSoS", 225]],
				description: desc([
					"I am proficient with improvised weapons, which count as monk weapons for me.",
					"Once on each of my turns, I can spend 1 ki point to add half of my monk level",
					"to the dmg of an improvised weapon.",
				]),
				weaponProfs: [true, false, ["Improvised weapons"]],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								(/improvised/i.test(v.WeaponName + v.baseWeaponName) || /improvised weapon/i.test(v.theWea.type)) &&
								!v.isSpell &&
								!v.theWea.monkweapon &&
								!v.theWea.special
							) {
								v.theWea.monkweapon = true;
								fields.Proficiency = true;
							}
						},
						"I gain proficiency with improvised weapons which count as monk weapons.",
						1,
					],
				},
				additional: "1 ki point",
			},
			"headbutt of justice": {
				name: "Headbutt of Justice",
				source: [["VSoS", 225]],
				description: desc([
					"Once on each of my turns when I miss with an unarmed strike, I can spend",
					"1 ki point to follow up with a headbutt. I make another unarmed strike against",
					"the target, but the dmg of this atk is 1d8.",
				]),
				additional: "1 ki point",
			},
			"infinity suplex": {
				name: "Infinity Suplex",
				source: [["VSoS", 225]],
				description: desc([
					"While I am grappling another crea, I can spend 1 ki point and a bonus action to end",
					"the grapple to hurl the target over my shoulder and slam them into the ground, making",
					"an atk roll vs the crea. On a hit, they take 2d10 + Str mod of blud. dmg and knocked prone",
				]),
				additional: "1 ki point",
			},
		},
		subclassfeature11: {
			name: "Off the Top Rope",
			source: [["VSoS", 225]],
			minlevel: 11,
			description: desc([
				"Once per turn when I fall 5 ft or more immediately before making an unarmed strike",
				"I can choose to either make it a stunning strike without expending any ki or knock",
				"the target prone and automatically grapple the target on a hit",
			]),
			usages: 1,
			recovery: "Turn",
		},
		subclassfeature17: {
			name: "Choked Out",
			source: [["VSoS", 225]],
			minlevel: 17,
			description: desc([
				"When I pin a creature grappled by me, I can spend 2 ki points to attempt to choke",
				"the creature out. The creature must make a Con save against my ki save DC",
				"or be knocked unconscious until the start of my next turn.",
			]),
			additional: "2 ki points",
		},
	},
});

AddSubClass("monk", "way of the rose", {
	regExpSearch: /^(?=.*rose)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Rose",
	source: [["VSoS", 226]],
	features: {
		subclassfeature3: {
			name: "Sweet Aroma",
			source: [["VSoS", 226]],
			minlevel: 3,
			description: desc([
				"I have advantage on Persuasion checks related to love and romance",
				"Crea(s) with the Keen Sense trait have disadv. on ability checks made to track me.",
			]),
		},
		"subclassfeature3.1": {
			name: "Blossom Burst",
			source: [["VSoS", 226]],
			minlevel: 3,
			description: desc([
				"I can spend 1 ki point to produce an eruption of flower petals to obscure a crea's vision",
				"Until the end of its next turn, it can see out to a range of 5 ft but is blind beyond that",
				"The petals follow the crea unless it moves more than 40 ft on its turn or take the dash action",
			]),
			additional: "1 ki point",
		},
		subclassfeature6: {
			name: "Falling Petal Fury",
			source: [["VSoS", 226]],
			minlevel: 6,
			description: desc([
				"Whenever I use Flurry of Blows, I can spend 1 additional ki point to teleport up to 10 ft",
				"in any direction. This movement can happen before, during, or after the attacks, but can't",
				"be split into two moves.",
			]),
			additional: "1 ki point",
		},
		subclassfeature11: {
			name: "Colors of Love",
			source: [["VSoS", 226]],
			minlevel: 11,
			description: desc([
				"When I finish a long rest, I can choose an aura which lasts until I choose a different one",
				"and radiates to a range of 5 ft (see page 3 notes)",
			]),
			toNotesPage: [
				{
					name: "Colors of Love: Auras",
					note: desc([
						"\u2022 Pink: I can use the help action as a bonus action to assist an ally in my aura",
						"\u2022 Red: When a friendly crea in my aura hits an attack, they can use its bonus action",
						"  with the attack to deal an extra 1d6 dmg",
						"\u2022 White: When a friendly crea ends its turn in my aura, it gains my Wis mod in temp hp",
						"  The crea cannot be myself",
					]),
					page3notes: true,
				},
			],
		},
		subclassfeature17: {
			name: "Wreathed in Thorns",
			source: [["VSoS", 226]],
			minlevel: 17,
			description: desc([
				"When I take dmg from a visible crea within 5 ft of me, I can spend 1 ki point",
				"as a rea to make an unarmed strike against that creature.",
			]),
			additional: "1 ki point",
			action: [["reaction", "Wreathed in Thorns (1 ki)"]],
		},
	},
});

AddSubClass("monk", "way of street fighting", {
	regExpSearch: /^(?=.*street)(?=.*fighting)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of Street Fighting",
	source: [["VSoS", 226]],
	features: {
		subclassfeature3: {
			name: "Combo",
			source: [["VSoS", 227]],
			minlevel: 3,
			description: desc([
				"On my turn, I gain a +2 bonus to atk rolls of my unarmed strikes",
				"for each hit that I have made on that target on my turn, to a max of +6",
				"This bonus resets to 0 if I take damage on my turn.",
			]),
		},
		subclassfeature6: {
			name: "Iron Fist",
			source: [["VSoS", 227]],
			minlevel: 6,
			description: desc(["My unarmed strikes ignore the dmg threshold of objects and deal max dmg to them"]),
		},
		subclassfeature11: {
			name: "Special Moves",
			source: [["VSoS", 227]],
			minlevel: 11,
			description: desc(["I can use ki points to perform the special moves found on the page 3 notes"]),
			action: [["action", "Ki Blast (2 ki)"]],
			toNotesPage: [
				{
					name: "Special Moves",
					page3notes: true,
					note: desc([
						"\u2022 Ki Blast: As an action, I can spend 2 ki points to make a ranged spell atk using Wis as the",
						"  spellcasting ability modifier against a crea I can see w/in 120 ft of me. On a hit, the target",
						"  takes 6d8 + \u00BD my monk level in force dmg",
						"\u2022 Uppercut: Immediately after I take the attack action on my turn, I can spend 1 ki point to",
						"  make an unarmed strike as a bns action. On a hit, if the crea is \u2264Large and doesn't have all",
						"  of its hp, it takes dmg as normal and is then knocked prone",
						"\u2022 Whirlwind Strike: When I make a melee atk on my turn against a visible crea, I can spend 1 ki",
						"  point to lunge up to 15 ft toward the target before making the atk. This movement doesn't",
						"  provoke opportunity atks. I can peform this movement even if it causes me to travel through",
						"  the air, though I fall if I do not land on solid ground after making the attack",
					]),
				},
			],
			weaponOptions: [
				{
					regExpSearch: /ki blast/i,
					name: "Ki Blast",
					source: [["VSoS", 227]],
					ability: 5,
					range: "120 ft",
					damage: [6, 8, "Force"],
					description: "",
					type: "AlwaysProf", // This is not a weapon or a spell
					isNotWeapon: true,
					isAlwaysProf: true,
					special: true, // prevents calculations with other features
					abilitytodamage: false, // do not add our wisdom mod
					selectNow: true,
				},
			],
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (/ki blast/i.test(v.WeaponTextName)) {
							output.extraDmg += Math.floor(classes.known.monk.level / 2);
						}
					},
					"",
					1,
				],
			},
		},
		subclassfeature17: {
			name: "K.O.",
			source: [["VSoS", 227]],
			minlevel: 17,
			description: desc([
				"I can use my action and 3 ki points to make an unarmed strike against a crea w/in my reach",
				"On a hit, the target takes dmg as normal, and if it has \u2264100 hp, it is reduced to 0 hp,",
				"knocked unconscious, and becomes stable",
			]),
			usages: 1,
			recovery: "long rest",
		},
	},
});
