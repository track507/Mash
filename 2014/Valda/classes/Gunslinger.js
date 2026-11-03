if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// * Gunslinger class
ClassList["gunslinger"] = {
	name: "Gunslinger",
	regExpSearch: /\bgunslinger\b/i,
	source: ["VSoS", 91],
	primaryAbility: "Dexterity and Constitution",
	prereqs: "Dexterity 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Dex", "Cha"],
	abilitySave: 2,
	skillstxt: {
		primary:
			"Choose two from Acrobatics, Animal Handling, Athletics, Deception, Persuasion, Sleight of Hand, Stealth",
	},
	armorProfs: {
		primary: [true, false, false, false],
		secondary: [true, false, false, false],
	},
	weaponProfs: {
		primary: [true, false, ["Firearms"]],
		secondary: [true, false, ["Firearms"]],
	},
	toolProfs: {
		primary: ["One type of gaming set", 1],
	},
	equipment:
		"Gunslinger starting equipment: " +
		"\n \u2022 a handgun and 20 bullets -or- a revolver and 10 bullets;" +
		"\n \u2022 any two-handed firearm that isn't heavy and 30 bullets/shells;" +
		"\n \u2022 a dungeoneer's pack -or- an explorer's pack;" +
		"\n \u2022 leather armor, a longcoat, and a dagger",
	subclasses: ["Gunslinger's Creed", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features: {
		"fighting style": {
			name: "Fighting Style",
			minlevel: 1,
			source: ["VSoS", 92],
			description: desc([
				'Choose a Fighting Style for the gunslinger using the "Choose Feature" button above.',
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/firearms?/i.test(v.theWea.type) ||
							/firearms?/i.test(v.theWea.list)
						) {
							fields.Proficiency = true;
						}
					},
				],
			},
			choices: ["Akimbo", "Bullseye", "Duelist", "Shotgunner"],
			akimbo: {
				name: "Akimbo Fighting Style",
				source: ["VSoS", 92],
				description: desc([
					"I don't take the -2 damage penalty of off-hand firearm attacks when two-weapon fighting.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								/^(?!.*(spell|cantrip))(?=.*(off.{0,3}hand|secondary))(?=.*\-\d+\s?dmg)(?=.*\(min\.\s?1\)).*$/i.test(
									fields.Description
								)
							) {
								fields.Description = fields.Description.replace(
									/^(?=.*\-\d+\s?dmg)(?=.*\(min\.\s?1\)).*$/i,
									""
								);
								fields.Description_Tooltip =
									fields.Description_Tooltip.replace(
										/When you engage in two-weapon fighting with two light firearms, you subtract 2 from the damage roll of the bonus attack, to a minimum of 1 damage./,
										""
									);
							}
						},
						"I don't take the -2 damage penalty of off-hand firearm attacks when two-weapon fighting.",
						500,
					],
				},
			},
			bullseye: {
				name: "Bullseye Fighting Style",
				source: ["VSoS", 93],
				description: desc([
					"Ranged firearm attack rolls with Sighted or a normal range of 80 ft or longer gain a +2 bonus.",
					"This effect doesn't stack with Archery Fighting Style.",
				]),
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							// check if the archery fighting style is here, back out
							if (
								!/Archery Fighting Style/i.test(
									What("Class Features")
								) ||
								!/\d+\/\d+/i.test(fields.Range)
							)
								return;
							var rangeFld = fields.Range.match(/(\d+)\/(\d+)/i);
							var shortRange = parseInt(rangeNmbr[1]);
							if (
								!(
									/firearm/i.test(v.theWea.list) ||
									!/firearm/i.test(fields.Description)
								) &&
								(!/sighted/i.test(fields.Description) ||
									!shortRange >= 80)
							)
								return;
							output.extraHit += 2;
						},
						"I gain a +2 bonus to ranged attack rolls I make with firearms with the Sighted property or have a normal range of 80 or longer. Doesn't stack with the Archery fighting style.",
					],
				},
			},
			duelist: {
				name: "Duelist Fighting Style",
				source: ["VSoS", 93],
				description: desc([
					"Once per round, I deal 1 extra die of weapon damage when making a ranged, one-handed",
					"firearm attack roll that exceeds the target's AC by 5+. Must have 1 free hand.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								(/firearm/i.test(v.theWea.list) ||
									/\bfirearm\b/i.test(fields.Description)) &&
								!/\btwo-handed\b/i.test(fields.Description) &&
								/(\d+)d(\d+)/.test(fields.Damage_Die)
							) {
								// get the die type
								var dieSplit = fields.Damage_Die.split("d");
								if (dieSplit.length < 2) return;
								var die = "1d" + dieSplit[1];
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Duelist +" +
									die;
							}
						},
						"Once per round, when wielding a firearm in one hand and nothing in the other, I deal 1 extra die of weapon damage if my attack roll exceeds the target's AC by 5 or more.",
					],
				},
			},
			shotgunner: {
				name: "Shotgunner Fighting Style",
				source: ["VSoS", 93],
				description: desc([
					"When I hit on a ranged firearm attack with Scatter, I can reroll the lowest damage die.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								(/firearm/i.test(v.theWea.list) ||
									/\bfirearm\b/i.test(fields.Description)) &&
								/\bscatter\b/i.test(fields.Description)
							) {
								fields.Description +=
									(fields.Description ? "; " : "") +
									"reroll lowest dmg die";
							}
						},
						"When I hit with a ranged weapon attack using a firearm that has the Scatter property, I can reroll the lowest damage die.",
					],
				},
			},
		},
		quickdraw: {
			name: "Quick Draw",
			source: ["VSoS", 93],
			minlevel: 1,
			description: desc([
				"Adv. on initiative rolls. I can draw/stow 2 weapons when I roll initiative as part of my action.",
			]),
		},
		"critical shot": {
			name: "Critical Shot",
			source: ["VSoS", 93],
			minlevel: 2,
			description: desc([
				"My ranged firearm attacks score a critical hit on a roll of 19-20, increasing at 9th & 17th level.",
			]),
			additional: levels.map(function (n) {
				return n < 2
					? ""
					: "critical hit range: " + n < 9
					? "19-20"
					: n < 17
					? "18-20"
					: "17-20";
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/firearm/i.test(v.theWea.list) ||
							/\bfirearm\b/i.test(fields.Description)
						) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"crit on " +
								(classes.known.gunslinger.level < 9
									? "19-20"
									: classes.known.gunslinger.level < 17
									? "18-20"
									: "17-20");
						}
					},
					"At 2nd level, my ranged firearm attacks score a crit on a roll of 19-20; at 9th level, 18-20; and at 17th level, 17-20.",
				],
			},
		},
		"poker face": {
			name: "Poker Face",
			source: ["VSoS", 93],
			minlevel: 2,
			description: desc([
				"Advantage on checks/saves vs others trying to sense my motives, emotions, or thoughts.",
			]),
			savetxt: {
				adv_vs: ["others sensing my motives, emotions, thoughts"],
			},
		},
		risk: {
			name: "Risk",
			source: ["VSoS", 93],
			minlevel: 2,
			description: desc([
				"I can spend Risk Dice to fuel Deeds once per turn (see third page) ",
				"My deed save DC is 8 + my proficiency bonus + my Dexterity modifier.",
			]),
			limfeaname: "Risk Dice",
			additional: levels.map(function (n) {
				return n < 2 ? "" : n < 10 ? "d8" : n < 18 ? "d10" : "d12";
			}),
			usages: levels.map(function (n) {
				return n < 2 ? 0 : n < 6 ? 4 : n < 14 ? 5 : 6;
			}),
			recovery: "long rest",
			extraname: "Deed",
			action: ["bonus action", "Deed"],
			bitethebullet: {
				name: "Bite the Bullet",
				source: ["VSoS", 94],
				description: desc([
					"As a bonus action, I can expend 1 risk die to gain temporary hit points equal to the roll + my",
					"Constitution modifier.",
				]),
			},
			coveringfire: {
				name: "Covering Fire",
				source: ["VSoS", 94],
				description: desc([
					"As a bonus action, when I hit a creature with a ranged weapon attack, I can subtract the risk",
					"die from the next attack roll the creature makes before the start of my next turn.",
				]),
			},
			dodgeroll: {
				name: "Dodge Roll",
				source: ["VSoS", 94],
				description: desc([
					"As a bonus action, I can spend a risk die to move up to 15 ft and reload any firearm I am",
					"holding. This movement doesn't provoke opportunity attacks, ignores difficult terrain, and can",
					"move through a hostile creature's space as long as I don't end my movement there.",
				]),
			},
			limbshot: {
				name: "Limb Shot",
				source: ["VSoS", 94],
				description: desc([
					"As a bonus action, when I hit a creature with a ranged weapon attack, I can spend a risk die,",
					"forcing the target to make a Constitution save or drop a held object of my choice at its feet.",
				]),
			},
			skinofyourteeth: {
				name: "Skin of Your Teeth",
				source: ["VSoS", 94],
				description: desc([
					"As a reaction to a creature I can see making an attack roll against me, I can add a risk die to",
					"my AC against the attack.",
				]),
				action: ["reaction", ""],
			},
			steadyaim: {
				name: "Steady Aim",
				source: ["VSoS", 94],
				description: desc([
					"As a bonus action, I can spend a risk die to double the normal and maximum range for the",
					"next ranged weapon attack I make.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "bitethebullet",
				},
				{
					extrachoice: "coveringfire",
				},
				{
					extrachoice: "dodgeroll",
				},
				{
					extrachoice: "limbshot",
				},
				{
					extrachoice: "skinofyourteeth",
				},
				{
					extrachoice: "steadyaim",
				},
			],
		},
		subclassfeature3: {
			name: "Gunslinger's Creed",
			minlevel: 3,
			source: ["VSoS", 93],
			description: desc([
				'Choose a Gunslinger\'s Creed and put it in the "Class" field.',
			]),
		},
		gutshot: {
			name: "Gut Shot",
			minlevel: 6,
			source: ["VSoS", 94],
			description: desc([
				"When I crit on a ranged firearm attack vs a Large or smaller creature, the creature moves at",
				"half speed & has disadvantage on attack rolls & ability checks until it uses its action to end",
				"the effect. Elementals, Oozes, and Undead are immune to this effect.",
			]),
		},
		evasion: {
			name: "Evasion",
			minlevel: 7,
			source: ["VSoS", 94],
			description: desc([
				"My Dexterity saves vs. areas of effect negate damage on success and halve it on failure.",
			]),
			savetxt: {
				text: [
					"Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg",
				],
			},
		},
		mankiller: {
			name: "Mankiller",
			minlevel: 11,
			source: ["VSoS", 94],
			description: desc([
				"I add my ability modifier to damage rolls of ranged firearm attacks I make using my action.",
			]),
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (
							(/firearms?/i.test(v.theWea.list) ||
								/firearms?/i.test(fields.Description)) &&
							!/((^|[^+-]\b)off).?hand(ed)?\b/i.test(
								v.WeaponTextName
							)
						) {
							output.modToDmg = true;
						}
					},
					"I add my ability modifier to damage rolls of ranged firearm attacks I make using my action.",
				],
			},
		},
		diregambit: {
			name: "Dire Gambit",
			minlevel: 13,
			source: ["VSoS", 94],
			description: desc(
				"I regain 1 expended risk die whenever I score a critical hit."
			),
		},
		cheatdeath: {
			name: "Cheat Death",
			minlevel: 15,
			source: ["VSoS", 94],
			description: desc([
				"When I drop to 0 hit points but don't die, I can use my reaction to expend & roll a risk die,",
				"dropping to a number of hit points equal to the roll instead.",
			]),
			action: ["reaction", ""],
			usages: 1,
			recovery: "short rest",
		},
		maverick: {
			name: "Maverick",
			minlevel: 18,
			source: ["VSoS", 94],
			description: desc(
				"I have advantage on Constitution checks and saving throws."
			),
			savetxt: { adv_vs: ["Constitution"] },
			advantages: [["Constitution", true]],
		},
		headshot: {
			name: "Head Shot",
			minlevel: 20,
			source: ["VSoS", 94],
			description: desc([
				"When I crit with a firearm attack, the creature dies if it has <100 hp. If not, it takes 10d10",
				"damage. Elementals, Oozes, Undead, and creatures that lack nervous systems are immune.",
			]),
			usages: 1,
			recovery: "short rest",
		},
	},
};

// * Gun Tank Gunslinger subclass
AddSubClass("gunslinger", "gun tank", {
	regExpSearch: /\bgun tank\b/i,
	subname: "Gun Tank",
	source: ["VSoS", 95],
	prereqs: "Strength 15 or higher",
	abilitySaveAlt: 1,
	features: {
		subclassfeature3: {
			name: "Heavy Gunner",
			minlevel: 3,
			source: ["VSoS", 95],
			description: desc([
				"I can use heavy firearms regardless of their weight. I can use Strength instead of Dexterity",
				"for attack & damage rolls using heavy firearms, and my Deed save DC.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							(/firearms?/i.test(v.theWea.type) ||
								/firearms?/i.test(v.theWea.list)) &&
							/heavy/i.test(fields.Description)
						) {
							fields.Mod =
								What("Str Mod") > What("Dex Mod") ? 1 : 2;
						}
					},
					"I can use Strength instead of Dexterity for attack & damage rolls using heavy firearms.",
				],
			},
		},
		"subclassfeature3.1": {
			name: "Tough As Nails",
			minlevel: 3,
			source: ["VSoS", 95],
			description: desc([
				"My hp max increases by my gunslinger level. I gain proficiency with medium & heavy armor.",
			]),
			armorProfs: [true, true, true, false],
			calcChanges: {
				hp: function (totalHD, HDobj, prefix) {
					if (classes.known.gunslinger) {
						return [
							classes.known.gunslinger.level,
							"Tough As Nails",
						];
					}
				},
			},
		},
		subclassfeature7: {
			name: "Thick-Headed",
			minlevel: 7,
			source: ["VSoS", 95],
			description: desc([
				"I have advantage on saves made to avoid or end the charmed condition on myself.",
			]),
			savetxt: { adv_vs: ["charmed"] },
		},
		subclassfeature10: {
			name: "Strong As An Ox",
			minlevel: 10,
			source: ["VSoS", 95],
			description: desc([
				"My carry capacity, and weight I can push/drag/lift is doubled. I have advantage on Strength",
				"checks and saves, and can ignore the Two-handed property on firearms I am proficient in.",
			]),
			savetxt: { adv_vs: ["Strength"] },
			advantages: [["Strength", true]],
			carryingCapacity: 2,
			calcChanges: {
				atkAdd: [
					function (fields, v, output) {
						if (
							/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i.test(
								fields.Description
							) &&
							(/firearms?/i.test(v.theWea.list) ||
								/firearms?/i.test(fields.Description)) &&
							fields.Proficiency
						) {
							fields.Description = fields.Description.replace(
								/([;,]? ?((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b[;,]? ?)/i,
								""
							);
						}
					},
					"I ignore the two-handed property of firearms I am proficient in.",
					1, // * needs high priorty.
				],
			},
		},
		subclassfeature14: {
			name: "Gun Rage",
			minlevel: 14,
			source: ["VSoS", 95],
			description: desc([
				"Start/end as a bonus action: lasts 1 min; resistance to bludgeoning/piercing/slashing damage;",
				"I can make 1 additional attack when I take the Attack action on my turn; my speed is halved,",
				"and I have disadv. on Dex checks/saves. Stops if I take cover or end turn without attacking.",
			]),
			usages: 1,
			recovery: "short rest",
			action: [
				["bonus action", " (start/end)"],
				["action", "Gun Rage Attack (3 attacks per action)"],
			],
			dmgres: [
				["Bludgeoning", "Bludgeon. (in rage)"],
				["Piercing", "Piercing (in rage)"],
				["Slashing", "Slashing (in rage)"],
			],
			savetxt: { text: ["Disadv on Dex rolls in rage"] },
		},
	},
});

// * Gun-Ko Master Gunslinger subclass
AddSubClass("gunslinger", "gun-ko master", {
	regExpSearch: /\bgun\-ko master\b/i,
	subname: "Gun-Ko Master",
	source: ["VSoS", 96],
	features: {
		subclassfeature3: {
			name: "Point-Blank Shot",
			source: ["VSoS", 96],
			minlevel: 3,
			description: desc([
				"Being in 5 ft of a hostile creature doesn't impose disadvantage on my ranged firearm attacks.",
			]),
		},
		"subclassfeature3.1": {
			name: "Gun-Ko",
			source: ["VSoS", 96],
			minlevel: 3,
			description: desc([
				"I can treat firearms as melee weapons with Finesse, dealing 1d6 bludgeoning damage on hit,",
				"or 1d8 if the firearm is two-handed. When I make a ranged firearm attack vs a creature within",
				"5 ft of me, I can make a melee weapon attack using the firearm as a bonus action.",
			]),
			action: ["bonus action", "Gun-Ko Attack"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i.test(
								fields.Description
							) &&
							(/firearm/i.test(v.theWea.list) ||
								/firearm/i.test(fields.Description))
						) {
							fields.Description +=
								(fields.Description ? ", " : "") +
								"Melee (1d8)";
						}
						if (
							/finesse/i.test(fields.Description) &&
							(/firearms?/i.test(v.theWea.list) ||
								/firearms?/i.test(fields.Description))
						) {
							fields.Description +=
								(fields.Description ? ", " : "") +
								"Melee (1d6)";
						}
					},
				],
			},
		},
		subclassfeature7: {
			name: "Lightning Disarm",
			source: ["VSoS", 96],
			minlevel: 7,
			description: desc([
				"As a bonus action, with a free hand, expend a risk die to force a creature holding a firearm",
				"within 5 ft of me to make a Dex save vs my Deed save DC. On fail, I take the firearm.",
			]),
			action: ["bonus action", ""],
		},
		"subclassfeature7.1": {
			name: "Bullet Catch",
			source: ["VSoS", 96],
			minlevel: 7,
			description: desc([
				"As a reaction to being hit by a ranged weapon attack, I reduce the damage by 1d10 + my",
				"Dexterity modifier + my proficiency bonus (min 0).",
			]),
			action: ["reaction", ""],
		},
		subclassfeature10: {
			name: "Predictive Dodge",
			source: ["VSoS", 96],
			minlevel: 10,
			description: desc([
				"As a bonus action, I gain Dodge effect vs ranged attacks & effects from 1 creature I can see",
				"within 30 ft of me until start of my next turn, losing this if I take damage from them.",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature14: {
			name: "Gatling Strikes",
			source: ["VSoS", 96],
			minlevel: 14,
			description: desc([
				"I can use my bonus action to make 2 melee weapon attacks & 1 ranged weapon attack with a",
				"firearm against targets within 15 ft of me.",
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
		},
	},
});

// * High Roller Gunslinger subclass
AddSubClass("gunslinger", "high roller", {
	regExpSearch: /\bhigh roller\b/i,
	subname: "High Roller",
	source: ["VSoS", 96],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiencies",
			source: ["VSoS", 96],
			minlevel: 3,
			description: desc([
				"I gain proficiency in all gaming sets and in either Deception, Insight or Perception.",
			]),
			toolProfs: ["All gaming sets"],
			skillstxt: ["Choose one from Deception, Insight, or Perception."],
		},
		"subclassfeature3.1": {
			name: "All In",
			source: ["VSoS", 96],
			minlevel: 3,
			description: desc([
				"As a bonus action for my attack roll/ability check, or as a reaction to rolling a save, I expend",
				"a risk die to add it to the result. If I roll a 1 on the risk die, I fail the roll regardless of result.",
			]),
			action: [
				["bonus action", " (Attack/Ability Check)"],
				["reaction", " (Saving Throw)"],
			],
		},
		"subclassfeature3.2": {
			name: "Liar's Dice",
			source: ["VSoS", 96],
			minlevel: 3,
			description: desc([
				"When I make a d20 roll, I can roll in secret and declare any result. The GM can all my bluff,",
				"revealing the number. If truthful, treat the result as if I rolled a 20. If lying, roll the d20 again",
				"and use the lowest roll. If the GM chooses not to call my bluff, I use the result I declared.",
			]),
			usagescalc: "event.value = Math.max(1 + What('Cha Mod'), 1);",
			usages: "1 + Cha mod (min 1)",
			recovery: "long rest",
		},
		subclassfeature7: {
			name: "Boom or Bust",
			source: ["VSoS", 97],
			minlevel: 7,
			description: desc([
				"When I hit with a ranged firearm attack, I can expend & add a risk die to the damage roll,",
				"jamming it afterwards. Jammed weapons can't make attacks until an action is used to clear it.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/firearms?/i.test(v.theWea.list) ||
							/firearms?/i.test(fields.Description)
						) {
							var die =
								classes.known.gunslinger.level < 10
									? "+1d8"
									: classes.known.gunslinger.level < 18
									? "+1d10"
									: "+1d12";
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Boom or Bust " +
								die;
							fields.Description_Tooltip +=
								(fields.Description_Tooltip ? "" : "\n") +
								"Boom or Bust: when you hit with a ranged firearm attack, you can expend a risk die and add it to the weapon's damage roll. After this attack, the weapon jams. A jammed weapon can't be used to make an attack until a creature uses its action to clear the weapon malfunction.";
						}
					},
					"When I hit with a ranged firearm attack, I can expend a risk die and add it to the weapon's damage roll, jamming the weapon afterwards.",
				],
			},
		},
		subclassfeature10: {
			name: "Unlucky Numbers",
			source: ["VSoS", 97],
			minlevel: 10,
			description: desc([
				"As a reaction to getting hit from a hostile creature I can see, record the d20 roll & impose",
				"disadv. on that attack roll. Until short/long rest, attacks vs me crit when rolling that number.",
			]),
			action: ["reaction", ""],
		},
		subclassfeature14: {
			name: "Double Or Nothing",
			source: ["VSoS", 97],
			minlevel: 14,
			description: desc([
				"On a crit with a firearm, roll two d20s, treating them as ranged firearm attack rolls vs the",
				"target. If both miss, the crit is a normal hit. If either crits, roll the firearm damage thrice.",
			]),
		},
	},
});

// * Musketeer gunslinger subclass
AddSubClass("gunslinger", "musketeer", {
	regExpSearch: /\bmusketeer\b/i,
	subname: "Musketeer",
	source: ["VSoS", 97],
	features: {
		subclassfeature3: {
			name: "Bonus Proficiencies",
			minlevel: 3,
			source: ["VSoS", 97],
			description: desc([
				"I gain proficiency with the bayonet, cutlass, halberd, rapier, and shortsword.",
			]),
			weaponProfs: [
				true,
				false,
				["bayonet", "cutlass", "halberd", "rapier", "shortsword"],
			],
		},
		"subclassfeature3.1": {
			name: "Heavy Shot",
			minlevel: 3,
			source: ["VSoS", 97],
			description: desc([
				"When I hit a target with a ranged attack using a blunderbuss/flintlock/musket, I deal extra",
				"damage equal to the number of damage dice rolled for the attack.",
			]),
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (
							(/\bblunderbuss\b/i.test(
								v.WeaponTextName + v.baseWeaponName
							) ||
								/\bflintlock\b/i.test(
									v.WeaponTextName + v.baseWeaponName
								) ||
								/\bmusket\b/i.test(
									v.WeaponTextName + v.baseWeaponName
								)) &&
							fields.Damage_Die.match(/(\d+)d(\d+)/i)
						) {
							var dmgDie =
								fields.Damage_Die.match(/(\d+)d(\d+)/i);
							var dieAmt = parseInt(dmgDie[1]);
							output.extraDmg += dieAmt;
						}
					},
					"Ranged attacks I make using a blunderbuss, flintlock, or musket deal extra damage equal to the number of damage dice rolled for the attack.",
				],
			},
		},
		subclassfeature7: {
			name: "Lock, Stock, And Barrel",
			minlevel: 7,
			source: ["VSoS", 97],
			description: desc([
				"I ignore the Loading and Misfire properties of the blunderbuss, flintlock, and musket.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v, output) {
						if (
							/\bblunderbuss\b/i.test(
								v.WeaponTextName + v.baseWeaponName
							) ||
							/\bflintlock\b/i.test(
								v.WeaponTextName + v.baseWeaponName
							) ||
							/\bmusket\b/i.test(
								v.WeaponTextName + v.baseWeaponName
							)
						) {
							fields.Description = fields.Description.replace(
								/([;,]? ?loading|loading[;,]? ?)/i,
								""
							).replace(/([;,]? ?misfire|misfire[;,]? ?)/i, "");
						}
					},
					"I ignore the Loading and Misfire properties of the blunderbuss, flintlock, and musket.",
					999,
				],
			},
		},
		subclassfeature10: {
			name: "Bayonet Charge",
			minlevel: 10,
			source: ["VSoS", 97],
			description: desc([
				"If I move 15 ft or more straight towards a target, I can use a bonus action to make an attack",
				"with a bayonet or melee weapon I am holding.",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature14: {
			name: "All For One",
			minlevel: 14,
			source: ["VSoS", 97],
			description: desc([
				"As a reaction to a friendly creature within 5 ft of me being attacked, I make an attack with a",
				"firearm or bayonet against the attacker.",
			]),
			action: ["reaction", ""],
		},
	},
});

// * Pistolero Gunslinger subclass
AddSubClass("gunslinger", "pistolero", {
	regExpSearch: /\bpistolero\b/i,
	subname: "Pistolero",
	source: ["VSoS", 97],
	features: {
		subclassfeature3: {
			name: "Point-Blank Shot",
			minlevel: 3,
			source: ["VSoS", 97],
			description: desc([
				"I don't get disadvantage on ranged firearm attacks from being within 5 ft of a hostile creature",
			]),
		},
		"subclassfeature3.1": {
			name: "Fan The Hammer",
			minlevel: 3,
			source: ["VSoS", 97],
			description: desc([
				"When I take the Attack action on my turn with a one-handed, non-automatic firearm & have",
				"a free hand, I can use my bonus action & a spend a risk die to make 2 extra ranged attacks",
				"with that firearm, with disadvantage. At 14th level, I make 3 extra attacks with this feature.",
			]),
			additional: levels.map(function (n) {
				return n < 3 ? "" : (n < 14 ? "2" : "3") + " attacks";
			}),
			action: ["bonus action", ""],
		},
		subclassfeature7: {
			name: "Speed Loader",
			minlevel: 7,
			source: ["VSoS", 97],
			description: desc([
				"On my turn, I can reload 1 one-handed firearm as a free action.",
			]),
		},
		subclassfeature10: {
			name: "Bullet Time",
			minlevel: 10,
			source: ["VSoS", 97],
			description: desc([
				"As a bonus action, I can gain advantage on a ranged, one-handed firearm attack roll.",
			]),
			usages: 1,
			recovery: "short rest",
			action: ["bonus action", ""],
		},
		subclassfeature14: {
			name: "Swift Vengeance",
			minlevel: 14,
			source: ["VSoS", 97],
			description: desc([
				"As a reaction to taking damage from a creature within 15 ft of me, I make a firearm attack",
				"against that creature.",
			]),
			action: ["reaction", ""],
		},
	},
});

// * Sharpshooter gunsling subclass
AddSubClass("gunslinger", "sharpshooter", {
	regExpSearch: /\bsharpshooter\b/i,
	subname: "Sharpshooter",
	source: ["VSoS", 98],
	features: {
		subclassfeature3: {
			name: "Eagle Eye",
			minlevel: 3,
			source: ["VSoS", 98],
			description: desc([
				"As a bonus action, expend & add a risk die to a ranged two-handed firearm attack roll.",
				"The attack doesn't gain disadvantage due to long range.",
			]),
			action: ["bonus action", ""],
		},
		"subclassfeature3.1": {
			name: "Sniper's Stance",
			minlevel: 3,
			source: ["VSoS", 98],
			description: desc([
				"No disadv. on ranged firearm attacks from being prone. Standing up uses 5 ft of movement.",
			]),
		},
		subclassfeature7: {
			name: "Camouflage",
			minlevel: 7,
			source: ["VSoS", 98],
			description: desc([
				"Spend 1 minute to gain benefits until I move: adv. on Dex (Stealth) checks to hide; attacking",
				"while hidden won't reveal my location; disadv. on checks to find origin of my firearm attacks.",
			]),
		},
		subclassfeature10: {
			name: "Eye For Movement",
			minlevel: 10,
			source: ["VSoS", 98],
			description: desc([
				"As a bonus action, I gain darkvision and the effects of see invisibility out 20 ft or further until",
				"the start of my next turn.",
			]),
			action: ["bonus action", ""],
		},
		subclassfeature14: {
			name: "Focused Shot",
			minlevel: 14,
			source: ["VSoS", 98],
			description: desc([
				"Once on each of my turns when I hit with a ranged firearm attack, the bullet continues",
				"straight out to its normal range, stopping at solid objects. Make an attack roll vs each",
				"creature in the line. On hit, the bullet deals damage and continues; on miss, the bullet stops.",
			]),
		},
	},
});

// * Spellslinger gunslinger subclass
AddSubClass("gunslinger", "spellslinger", {
	regExpSearch: /\bspellslinger\b/i,
	subname: "Spellslinger",
	source: ["VSoS", 98],
	spellcastingKnown: {
		cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells: [0, 0, 3, 4, 4, 4, 5, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10],
	},
	spellcastingList: {
		class: "wizard",
		school: ["Evoc", "Abjur"],
		level: [1, 4],
	},
	spellcastingAbility: 4,
	spellcastingFactor: "warlock1",
	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 1, 0, 0, 0, 0, 0],
		[4, 3, 3, 1, 0, 0, 0, 0, 0],
	],
	features: {
		subclassfeature3: {
			name: "Spellcasting",
			source: ["VSoS", 98],
			minlevel: 3,
			description: desc([
				"I can cast wizard cantrips/spells that I know, using Intelligence as my spellcasting ability",
			]),
			additional: levels.map(function (n) {
				if (n < 3) return "";
				var cantrips = n < 10 ? "3" : "4";
				var spells =
					n < 4
						? "3"
						: n < 7
						? "4"
						: n < 8
						? "5"
						: n < 10
						? "6"
						: n < 11
						? "7"
						: n < 13
						? "8"
						: n < 14
						? "9"
						: n < 16
						? "10"
						: n < 19
						? "11"
						: n < 20
						? "12"
						: "13";
				return cantrips + " cantrips & " + spells + " spells known";
			}),
			spellcastingBonus: [
				{
					// the spells gained at level 8, 14, and 20
					name: "From any school",
					class: "wizard",
					times: [
						0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
						3,
					],
					level: [1, 4],
				},
				{
					name: "Finger Guns",
					spells: ["finger guns"],
					selection: ["finger guns"],
					firstCol: "markedbox",
					times: 1,
				},
			],
		},
		"subclassfeature3.1": {
			name: "Bang, You're Dead!",
			source: ["VSoS", 99],
			minlevel: 3,
			description: desc([
				"I can use Deeds with finger guns spell attacks. When I hit with a finger guns attack, I can",
				"spend a risk die as a bonus action to deal an extra 1d8 force damage.",
			]),
			action: ["bonus action", ""],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bfinger guns\b/i.test(v.WeaponTextName)) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"can use Deeds; Bang +1d8 force damage";
						}
					},
					"I can use Deeds with finger guns spell attacks. When I hit with a finger guns attack, I can spend a risk die as a bonus action to deal an extra 1d8 force damage.",
				],
			},
		},
		subclassfeature7: {
			name: "Spellshot",
			source: ["VSoS", 99],
			minlevel: 7,
			description: desc([
				"When I use my action to cast a cantrip, I can use my bonus action to make 1 ranged attack",
				"with a firearm or make a ranged spell attack using the finger guns cantrip.",
			]),
			action: ["bonus action", ""],
		},
		"subclassfeature7.1": {
			name: "Rune-Carved Cartridges",
			source: ["VSoS", 99],
			minlevel: 7,
			description: desc([
				"My ranged firearm attacks count as magical for overcoming resistance & immunity.",
			]),
		},
		subclassfeature10: {
			name: "Magic Bullet",
			source: ["VSoS", 99],
			minlevel: 10,
			description: desc([
				"As a bonus action, a ranged firearm attack I make on my turn vs a target at normal range",
				"automatically hits, and deals an extra 3d4 + 3 force damage.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/firearms?/i.test(v.theWea.type) ||
							/firearms?/i.test(v.theWea.list)
						) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"Magic Bullet (+3d4+3 force)";
						}
					},
					"As a bonus action, A ranged weapon attack I make on my turn vs a target at normal range automatically hits, and deals an extra 3d4 + 3 force damage.",
				],
			},
			action: ["bonus action", ""],
			usages: 1,
			recovery: "long rest",
		},
		subclassfeature14: {
			name: "Improved Spellshot",
			source: ["VSoS", 99],
			minlevel: 14,
			description: desc([
				"On casting a spell with an action, I can expend a risk die as a bonus action to make a ranged",
				"spell attack with a firearm or finger guns cantrip. Add the risk die to the attack roll. On hit, the",
				"attack deals its normal damage + the spell's effects.",
			]),
		},
	},
});

// * Trick Shot gunslinger subclass
AddSubClass("gunslinger", "trick shot", {
	regExpSearch: /\btrick shot\b/i,
	subname: "Trick Shot",
	source: ["VSoS", 100],
	features: {
		subclassfeature3: {
			name: "Creative Trajectory",
			minlevel: 3,
			source: ["VSoS", 100],
			description: desc(["My ranged firearm attacks ignore half cover."]),
		},
		"subclassfeature3.1": {
			name: "Ricochet",
			minlevel: 3,
			source: ["VSoS", 100],
			description: desc([
				"As a bonus action, on a miss with a ranged firearm attack without disadvantage, reroll the",
				"attack roll. On hit, the attack deals half damage.",
			]),
			action: ["bonus action", ""],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/firearms?/i.test(v.theWea.list) ||
							/firearms?/i.test(fields.Description)
						) {
							fields.Description +=
								(fields.Description ? "; " : "") +
								"Ricochet \u00BD";
						}
					},
					"As a bonus action, on a miss with a ranged firearm attack without disadvantage I can reroll the attack roll. On hit, the attack deals half damage.",
				],
			},
		},
		subclassfeature7: {
			name: "Light-Footed",
			minlevel: 7,
			source: ["VSoS", 100],
			description: desc([
				"Difficult terrain costs me no extra movement.",
			]),
		},
		subclassfeature10: {
			name: "Deft Deflectionist",
			minlevel: 10,
			source: ["VSoS", 100],
			description: desc([
				"As a reaction to a creature I can see making a ranged weapon attack roll against me, I make a",
				"ranged firearm attack roll. If my roll is greater than the attacker's, the attack gains disadv.",
			]),
			action: ["reaction", "Deflect"],
		},
		subclassfeature14: {
			name: "Pinball Shot",
			minlevel: 14,
			source: ["VSoS", 100],
			description: desc([
				"Once on my turn when I hit with a ranged firearm attack, I can make another attack roll vs a",
				"separate target within range of the first target up to half the firearm's normal range.",
			]),
		},
	},
});

// * White Hat gunslinger subclass
AddSubClass("gunslinger", "white hat", {
	regExpSearch: /\bwhite hat\b/i,
	subname: "White Hat",
	source: ["VSoS", 100],
	features: {
		subclassfeature3: {
			name: "Lay Down The Law",
			minlevel: 3,
			source: ["VSoS", 100],
			description: desc([
				"As a bonus action, expend a risk die and gain temp hp equal to the roll + my gunslinger level",
				"(twice my gunslinger level at 10th level), dividing it among creatures I can see (not me) within",
				"range of a held firearm. When a creature loses temp hp from an attack, use a reaction to",
				"make 1 ranged firearm attack vs the attacker. The temp hp is lost at the start of my next turn.",
			]),
			action: [
				["bonus action", "Lay Down The Law (Temp HP)"],
				["reaction", "Lay Down The Law (Attack)"],
			],
		},
		"subclassfeature3.1": {
			name: "Steely-Eyed Aura",
			minlevel: 3,
			source: ["VSoS", 100],
			description: desc([
				"While conscious, I & friendly creatures within 10 ft of me have adv. on saves vs frightened.",
				"This becomes 30 ft when I reach 14th level.",
			]),
			savetxt: { adv_vs: ["fright"] },
			additional: levels.map(function (n) {
				n < 14 ? "10 foot aura" : "30 foot aura";
			}),
		},
		subclassfeature7: {
			name: "Reach For The Skies",
			minlevel: 7,
			source: ["VSoS", 100],
			description: desc([
				"As an action, a creature within 30 ft of me that can see or hear me makes a Wis save vs my",
				"Deed save DC or for 1 min become incapacitated & can't willingly move until it takes damage,",
				"repeating the save at end of its turns. Creatures immune to fright auto succeed the save.",
			]),
			action: ["action", ""],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature10: {
			name: "Long Arm Of The Law",
			minlevel: 10,
			source: ["VSoS", 101],
			description: desc([
				"Creatures with temp hp from Lay Down The Law resist bludgeoning, piercing, & slashing;",
				"deal half damage. Until the start of my next turn, it can't move until it Disengages.",
			]),
		},
		subclassfeature14: {
			name: "Gold Star Hero",
			minlevel: 14,
			source: ["VSoS", 101],
			description: desc([
				"When a creature has temp hp from Lay Down The Law, it has resistance to bludgeoning,",
				"Steely-Eyed Aura range increases to 30 ft; Regain Reach for the Skies spending a risk die & BA",
			]),
			action: ["bonus action", "Regain Reach for the Skies"],
		},
	},
});
