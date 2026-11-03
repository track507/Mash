var iFileName = "VSoS_Subclasses_Barbarian.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
	SourceList["VSoS"] = {
		name: "Valda's Spire of Secrets",
		abbreviation: "VSoS",
		abbreviationSpellsheet: "V",
		date: "2022/12/30", // ! Updated as of 12-30-2022 (Version 1.4)
	};
}

// ! Subclasses

// * Barbarian subclasses
AddSubClass("barbarian", "colossus", {
	regExpSearch: /^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))(?=.*colossus).*$/i,
	subname: "Path of the Colossus",
	source: [["VSoS", 192]],
	features: {
		subclassfeature3: {
			name: "Larger Than Life",
			source: ["VSoS", 192],
			minlevel: 3,
			description: desc([
				"When raging I gain the following:",
				"\u2022 My size doubles in all dimensions and weight is multipled by 8",
				"  If there's not enough room, I attain the max possible size in the available space",
				"\u2022 My size increases by 1, but doesn't stack with spells such as enlarge/reduce",
				"\u2022 My wea(s) also grow, dealing an extra 1d4 dmg",
				"\u2022 As an action, I can swing in a 15 ft line, rolling a separate atk roll for each crea hit",
			]),
			action: ["action", " (15-ft line)"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon && classes.known.barbarian && classes.known.barbarian.level > 2 && /\brage\b/i.test(v.WeaponTextName)) {
							fields.Description = (fields.Description ? "; " : "") + "+1d4 extra dmg";
						}
					},
					'If I add "Rage" to the name of a weapon, I can treat it as a rage weapon and add +1d4 extra damage to it',
				],
			},
		},
		subclassfeature6: {
			name: "Imposing Presence",
			source: ["VSoS", 193],
			minlevel: 6,
			description: desc(["Ranged line of sight effects treats targets behind me as \u00BE cover", "While raging, this becomes total cover"]),
		},
		subclassfeature10: {
			name: "Boulder Throw",
			source: ["VSoS", 193],
			minlevel: 10,
			description: desc([
				"I can throw boulders or other suitably large objects as weapons",
				"Such weapons are considered proficient and have the following properties:",
				"\u2022 Two-handed, heavy, thrown",
				"\u2022 Range 30/60ft",
				"\u2022 2d8 Bludg. dmg",
				"I may only throw a boulder once per turn",
			]),
			usages: 1,
			recovery: "Turn",
			weaponOptions: [
				{
					name: "Boulder Throw",
					regExpSearch: /^(?=.*boulder)(?=.*throw).*$/i,
					source: ["VSoS", 193],
					type: "AlwaysProf",
					ability: 1,
					abilitytodamage: false,
					damage: [2, 8, "bludgeoning"],
					range: "Range, 30/60ft",
					description: "Two-handed, heavy, thrown",
					selectNow: true,
				},
			],
		},
		subclassfeature14: {
			name: "Colossal Strength",
			source: ["VSoS", 193],
			minlevel: 14,
			description: levels.map(function (n) {
				if (n < 14) return "";
				var description = desc(["I gain a +2 to Str and my Str score max is now a 22"]);

				if (n > 19) {
					description += desc(["At 20th level, my Str score max becomes a 26 instead of 22"]);
				}
				return description;
			}),
			scores: [2, 0, 0, 0, 0, 0],
			scoresMaximum: [22, 0, 0, 0, 0, 0],
			scoresmax26: {
				name: "Strength Max Increase",
				extraname: "Path of the Colossus 20",
				source: ["VSoS", 193],
				description: desc(["My Strength max increase to 26 from 22"]),
				scoresMaximum: [26, 0, 0, 0, 0, 0],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "scoresmax26",
					minlevel: 20,
				},
			],
		},
	},
});

AddSubClass("barbarian", "fin", {
	regExpSearch: /^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))(?=.*fin).*$/i,
	subname: "Path of the Fin",
	source: ["VSoS", 193],
	features: {
		subclassfeature3: {
			name: "Aquatic",
			source: ["VSoS", 193],
			minlevel: 3,
			description: desc([
				"I can breathe underwater and have a swim speed equal to my walk speed",
				"If I'm swimming, my rage can't end early unless I choose to do so",
			]),
			speed: {
				swim: { spd: "walk", enc: "walk" },
			},
		},
		"subclassfeature3.1": {
			name: "Feeding Frenzy",
			source: ["VSoS", 193],
			minlevel: 3,
			description: levels.map(function (n) {
				if (n < 3) return "";
				var description = desc([
					"I gain razor sharp teeth to make a bite attack with while raging",
					"I use this to make unarmed atks with; If I hit a crea w/in 5ft with a",
					"melee atk, I can use my bns action to make a bite atk against it",
					"This atk has adv. if the crea has \u2264\u008Bhp; I can do this",
					"a number of times equal to my Con mod per long rest (min. of 1)",
				]);

				if (n > 5) {
					description += desc(["At 6th level, my bite is considered magical for overcoming magic resistance"]);
				}
				return description;
			}),
			usages: "Con mod per ",
			usagescalc: "event.value = Math.max(1, What('Con Mod'));",
			recovery: "long rest",
			weaponOptions: [
				{
					name: "Bite",
					regExpSearch: /^(?=.*bite).*$/i,
					source: ["VSoS", 193],
					baseWeapon: "unarmed strike",
					damage: [1, 8, "Piercing"],
					selectNow: true,
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/bite/i.test(v.WeaponTextName)) {
							fields.Description += (fields.Description ? "; " : "") + "Counts as magical";
						}
					},
				],
			},
		},
		subclassfeature6: {
			name: "Blood Sense",
			source: ["VSoS", 193],
			minlevel: 6,
			description: desc([
				"I gain adv. on all Investigation and Perception checks made with smell",
				"I can automatically track a living crea whose scent I'm familiar with",
				"as long as the trail is less than a week old; I can spend 1 min to",
				"detect the scents of all living crea w/in 100 ft, or 1 mi. in water",
			]),
			vision: [["Adv. on Perception checks that rely on smell", 0]],
		},
		subclassfeature10: {
			name: "Mako",
			source: ["VSoS", 193],
			minlevel: 10,
			description: desc([
				"My bite atk dmg die increases from d8 to d10",
				"Once per turn when I hit a crea with my bite, it must make a Dex save",
				"On a fail, the tgt is knocked prone or grappled, my choice",
				"The tgt has disadv. if I'm swimming",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/bite/i.test(v.WeaponTextName)) {
							fields.Damage_Die = "1d10";
							fields.Description += (fields.Description ? "; " : "") + "Once per turn Dex save or prone/grappled; Disadv. if I'm swimming";
						}
					},
				],
			},
		},
		subclassfeature14: {
			name: "Tsunami",
			source: ["VSoS", 193],
			minlevel: 14,
			description: desc([
				"When raging, I can conjure a magical wave of salt water",
				"The wave is up to 15-ft wide and 15-ft tall and moves w/ me",
				"If a crea is caught in the wave, it's forced to swim and hold its breath",
				"until it leaves wave's area or the wave moves away from it",
				"The wave extinguishes all unprotected flames, and lasts for 1 min",
			]),
			usages: 1,
			recovery: "short rest",
		},
	},
});

AddSubClass("barbarian", "heavy metal", {
	regExpSearch:
		/^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))((?=.*heavy)(?=.*metal)).*$/i,
	subname: "Path of Heavy Metal",
	source: ["VSoS", 194],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiencies",
			source: ["VSoS", 194],
			minlevel: 3,
			description: desc(["I gain proficiency with 3 musical instruments of my choice"]),
			toolProfs: [["Any Musical instrument", 3]],
		},
		"subclassfeature3.1": {
			name: "Heavy Metal Axe",
			source: ["VSoS", 194],
			minlevel: 3,
			description: desc([
				"I can spend 8 hrs to convert any two-handed wea into an instrument",
				"Only I can play said instrument, and it retains all of it's properties",
				"I can have a number of instruments equal to my Prof Bonus",
			]),
			additional: levels.map(function (n) {
				return (n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6) + " instruments";
			}),
		},
		"subclassfeature3.2": {
			name: "Solo Shredding",
			source: ["VSoS", 194],
			minlevel: 3,
			description: desc([
				"When I rage, I begin to vigorously play a solo on my instrument wea",
				"Each time I deal dmg to a hostile crea, my Rage dmg increases by 1",
				"I can increase it up to double my Prof Bonus; This lasts until I am incapacitated, no",
				"longer holding my instrument weapon, miss an atk, or my rage ends",
			]),
		},
		subclassfeature6: {
			name: "Killer Vocals",
			source: ["VSoS", 194],
			minlevel: 3,
			description: desc([
				"As a bonus action, I can release a blood-curdling screech",
				"Each Large or smaller crea I choose w/in 5 ft is pushed 5 ft away and",
				"deafened until the end of my next turn",
			]),
			action: [["bonus action", ""]],
		},
		subclassfeature11: {
			name: "Up To Eleven",
			source: ["VSoS", 194],
			minlevel: 11,
			description: desc(["When I make a Cha check or any check involving my instrument wea,", "I can treat a d20 roll of 10 or lower as an 11"]),
		},
		subclassfeature14: {
			name: "Smash Hit",
			source: ["VSoS", 194],
			minlevel: 14,
			description: desc([
				"When I hit a crea w/ an instrument wea while raging, I can smash the target, dealing",
				"an extra 4d12 dmg.",
				"If the wea is non-magical, it's destroyed and no longer counts as an instrument wea",
			]),
			additional: "4d12",
			usages: 1,
			recovery: "short rest",
		},
	},
});

AddSubClass("barbarian", "muscle wizard", {
	regExpSearch:
		/^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))((?=.*muscle)(?=.*wizard)).*$/i,
	subname: "Path of the Muscle Wizard",
	source: ["VSoS", 194],
	features: {
		subclassfeature3: {
			name: "Unarguable Wizardry",
			source: ["VSoS", 194],
			minlevel: 3,
			description: desc([
				"I gain Adv. on Intimidation checks to convince others I'm a wizard",
				"If some questions my legitimacy, I can rage for 1 rnd",
				"This rage can't be extended and doesn't count against me",
				"I can only attack the crea that provoked me and their allies",
			]),
		},
		"subclassfeature3.1": {
			name: '"Cantrips"',
			source: ["VSoS", 194],
			minlevel: 3,
			description: desc([
				'At 3rd level, I learn how to use "magic" and "cantrips"',
				'I can cast "cantrips" a number of times equal to my Str mod per short/long rest',
				'While raging, I can cast "cantrips" at will. Casting in this way does not count against me',
				'See page 3 notes for "spellcasting"',
			]),
			usages: "Str mod per ",
			usagescalc: "event.value = Math.max(What('Str mod'), 0);",
			recovery: "short rest",
			action: [["bonus action", ""]],
			toNotesPage: [
				{
					name: '"Cantrips"',
					note: desc([
						"\u2022 Mage Hand: As a bns action when I hit a crea w/ melee wea on my turn, I can use",
						"  my hand to attempt to shove the target",
						"\u2022 Shocking Grasp: As a bns action when I make an atk on my turn, I can hit the target",
						"  harder than usual. On a hit, the target can't take any rea until the start of my next turn",
						"\u2022 True Strike: As a bns action when I make an atk on my turn, I can truly strike my target.",
						"  On a hit, I deal an extra 1d8 dmg to the target",
					]),
					page3notes: true,
				},
			],
		},
		subclassfeature6: {
			name: '"Spells"',
			source: ["VSoS", 195],
			minlevel: 6,
			description: desc([
				'I can every "spell" that ever existed. However, I\'ve only prepared the "spells"',
				'found on page 3 notes. I can cast each "spell" once per long rest',
			]),
			action: [
				["action", "Burning Hands"],
				["bonus action", "Magic Missile (w/atk)"],
				["reaction", "Shield"],
			],
			toNotesPage: [
				{
					name: '"Spells"',
					note: desc([
						"\u2022 Burning Hands: As an action on my turn, I can make an",
						"  unarmed strike vs a crea w/in reach. On a hit they take",
						"  1d8 + my Str mod bludgeoning dmg",
						"\u2022 Magic Missile: When I take the atk action on my turn",
						"  I can use my bns action to make a ranged atk with the wea",
						"  I'm holding. I have adv. on the atk roll",
						"\u2022 Shield: When I am targeted by an atk, I can produce a shield",
						"  I gain the shield bns to AC vs the atk even if I wasn't holding it",
						"  If I'm hit, I can reduce the dmg by 1d12 + my Con mod",
					]),
					page3notes: true,
				},
			],
		},
		subclassfeature10: {
			name: "Magic Resistance",
			source: ["VSoS", 195],
			minlevel: 10,
			description: desc(["While raging, I have resistance to damage from spells"]),
			savetxt: { text: ["Resistance to spell dmg while raging"] },
		},
		subclassfeature14: {
			name: "I Cast Fist",
			source: ["VSoS", 195],
			minlevel: 14,
			description: desc([
				'I can crush my enemies with my ultimate "Spell", Fist. While raging I can use',
				"my bns action or action to make a melee atk roll w/ adv. vs a crea w/in reach",
				"On a hit, it deals 8d8 + my Str mod bludg. dmg.",
				"Once I use this ability, I can't do so again until I stop raging and begin a new one",
			]),
			usages: 1,
			recovery: "Rage",
			weaponOptions: [
				{
					regExpSearch: /\bfist\b/i,
					name: "Fist",
					source: ["VSoS", 195],
					type: "Natural",
					damage: [8, 8, "bludgeoning"],
					ability: 1,
					abilitytodamage: true,
					description: "Once per rage",
					range: "Melee",
					selectNow: true,
				},
			],
		},
	},
});

AddSubClass("barbarian", "rage mage", {
	regExpSearch:
		/^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))((?=.*rage)(?=.*mage)).*$/i,
	subname: "Path of the Rage Mage",
	source: ["VSoS", 196],
	abilitySave: 6,
	spellcastingFactor: 3,
	spellcastingList: {
		class: "sorcerer",
		level: [0, 4],
		school: ["Evoc", "Trans"],
	},
	spellcastingKnown: {
		cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells: [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9],
	},
	features: {
		subclassfeature3: {
			name: "Arcane Intuition",
			source: ["VSoS", 196],
			minlevel: 3,
			description: desc(["I gain gain proficiency in Arcana", "Additionally, I can use Con instead of Int for Arcana checks"]),
			skills: ["Arcana"],
			addMod: { type: "skill", field: "Arcana", mod: "max(Con-Int|0)", text: "I can use Constitution instead of Intelligence for Arcana checks" },
		},
		"subclassfeature3.1": {
			name: "Spellcasting",
			source: ["VSoS", 196],
			minlevel: 3,
			description: desc([
				"While raging, I can cast and concentrate on known sorcerer cantrips/spells, using",
				"Charisma as my spellcasting ability. Additionally, casting a spell on my turn",
				"counts as atking a hostile crea for the purposes of maintaining my rage",
			]),
			spellcastingBonus: [
				{
					name: "From any school",
					class: "sorcerer",
					level: [1, 4],
					times: levels.map(function (n) {
						return n < 3 ? 0 : n < 8 ? 1 : n < 14 ? 2 : n < 20 ? 3 : 4;
					}),
				},
			],
		},
		subclassfeature6: {
			name: "Arcane Rampage",
			source: ["VSoS", 197],
			minlevel: 6,
			description: desc([
				"If I take the atk action while raging and atk recklessly, I can",
				"use my bns action to cast a spell in place of one of my atks.",
				"The spell must have a casting time of 1 action or bns action",
			]),
			action: ["bonus action", " (in rage)"],
		},
		subclassfeature10: {
			name: "Supernatural Exploits",
			source: ["VSoS", 197],
			minlevel: 10,
			description: desc([
				"I can cast the following spells even if I'm not raging, at will, w/o material comp. or SS:",
				"\u25C6 darkvision, feather fall, jump, see invisibility",
				"Casting these spells this way has a target of self",
			]),
			spellcastingBonus: [
				{
					name: "Supernatural Exploits",
					spells: ["darkvision", "feather fall", "jump", "see invisibility"],
					selection: ["darkvision", "feather fall", "jump", "see invisibility"],
					times: 4,
					firstCol: "atwill",
				},
			],
			spellChanges: {
				darkvision: {
					range: "Self",
					compMaterial: "",
					changes: "Casting darkvision at will has a target of self",
				},
				"feather fall": {
					range: "Self",
					compMaterial: "",
					changes: "Casting feather fall at will has a target of self",
				},
				jump: {
					range: "Self",
					compMaterial: "",
					changes: "Casting jump at will has a target of self",
				},
				"see invisibility": {
					range: "Self",
					compMaterial: "",
					changes: "Casting see invisibility at will has a target of self",
				},
			},
		},
		subclassfeature14: {
			name: "Eldritch Explosions",
			source: ["VSoS", 197],
			minlevel: 14,
			description: desc([
				"Once per turn when I hit a crea w/ a melee atk, I can expend a SS to create an explosion",
				"I choose w/in 10 ft of me. Each crea other than myself w/in a 10-ft rad. of that point",
				"must make a Dex save vs my Spell Save DC, taking 2d6/SS force dmg; save halves",
			]),
		},
	},
});

AddSubClass("barbarian", "tranquility", {
	regExpSearch: /^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))(?=.*tranquility).*$/i,
	subname: "Path of Tranquility",
	source: ["VSoS", 197],
	features: {
		subclassfeature3: {
			name: "Mantra",
			source: ["VSoS", 197],
			minlevel: 3,
			description: desc(["When I take the Dodge action on my turn, it counts as atking", "a hostile crea for the purposes of maintaining my rage"]),
		},
		"subclassfeature3.1": {
			name: "Anticipate",
			source: ["VSoS", 197],
			minlevel: 3,
			description: desc([
				"Whenever I do not make an atk roll on my turn, I can prepare for blows",
				"Until the start of my next turn, whenever a crea makes a melee atk vs me",
				"I can use my rea. to make one melee wea. atk against them",
			]),
			action: ["reaction", ""],
		},
		subclassfeature6: {
			name: "Battle Trance",
			source: ["VSoS", 197],
			minlevel: 6,
			description: desc(["Whenever I use my rea. to make an atk, I can make two atks instead of 1"]),
		},
		subclassfeature10: {
			name: "Tranquility",
			source: ["VSoS", 197],
			minlevel: 10,
			description: desc([
				"While raging, I can cast calm emotions, enthrall, and sanctuary once per long rest",
				"Con is my spellcasting ability, and I can do so w/o components or expending a SS",
			]),
			spellcastingBonus: [
				{
					name: "Tranquility",
					spells: ["calm emotions", "enthrall", "sanctuary"],
					selection: ["calm emotions", "enthrall", "sanctuary"],
					times: 3,
					spellcastingAbility: 3,
					firstCol: "oncelr",
				},
			],
			action: ["action", " (in rage)"],
			spellChanges: {
				"calm emotions": {
					components: "",
					compMaterial: "",
					changes: "I can cast calm emotions once per long rest without components or expending a spell slot",
				},
				enthrall: {
					components: "",
					compMaterial: "",
					changes: "I can cast enthrall once per long rest without components or expending a spell slot",
				},
				sanctuary: {
					components: "",
					compMaterial: "",
					changes: "I can cast sanctuary once per long rest without components or expending a spell slot",
				},
			},
		},
		subclassfeature14: {
			name: "Zen State",
			source: ["VSoS", 197],
			minlevel: 14,
			description: desc([
				"Whenever a crea misses me w/ a melee atk, I gain a +2 bonus to AC (max +6)",
				"This bonus resets to 0 if I take dmg or at the start of my turn",
			]),
		},
	},
});
