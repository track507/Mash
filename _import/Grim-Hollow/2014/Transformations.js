var iFileName = "GH-Transformations";
RequiredSheetVersion("13.2.3");
if (!SourceList["GH"]) {
	SourceList["GH"] = {
		name: "Grim Hollow",
		abbreviation: "GH",
		group: "Third Party",
	};
}

UPGRADE_DIE_MAP = {
	1: 2,
	2: 4,
	4: 6,
	6: 8,
	8: 10,
	10: 12,
	12: 20,
};

var AberrantHorror1 = [
	"\u25C6 >>Boon: Aberrant Adaptations<<",
	"\u2022 Chitinous Shell: As a bns action and not wearing heavy armor, I gain a +2 AC",
	"  This lasts for 1 min, until I'm unconscious or I use my bns action",
	"  on my turn to end it",
	"\u2022 Eldritch Limbs: When I atk, I can transform one or both of my",
	"      arms into weapons and gain the following:",
	"  \u2022 I choose bludg., pierce., or slash. dmg for the atk",
	"  \u2022 I may roll a d6 in place of normal dmg for unarmed strikes",
	"  \u2022 I can't hold any obj. in the affected arm. It either merges into the",
	"      adaptation or dropped (GM's choice)",
	"      This lasts until I'm unconscious or I use my bns action on my turn to end it",
	"\u25C6 >>Boon: Aberrant Form<<: My Con. increases by 2 and my Str by 1,",
	"  but it cannot go beyond 16 this way",
	"\u25C6 >>Flaw: Unstable Mutations<<: After every long rest, I must roll a d100",
	"      and apply the effects from the Unstable Form table",
	"      This effect lasts until I complete another long rest.",
	"      I must keep rolling until a new result is rolled",
	"I gain more boons and flaws as I gain levels (Recommended lvls 5, 11, and 17)",
];

var UnstableMutationTable = [
	"\u25C6 LEVEL 1 (01-05) | LEVEL 2 (01-08) | LEVEL 3 (01-09) | LEVEL 4 (01-11)",
	"Your body starts to become formless. You have disadv. on Dex saves",
	"\u25C6 LEVEL 1 (06-10) | LEVEL 2 (09-16) | LEVEL 3 (10-18) | LEVEL 4 (12-22)",
	"You start to become rigid and brittle, making resting less effective.",
	"When you consume a HD, you don't add your Con mod to the result.",
	"\u25C6 LEVEL 1 (11-15) | LEVEL 2 (17-24) | LEVEL 3 (19-27) | LEVEL 4 (23-33)",
	"Your body starts sweating a viscous substance that hardens quickly.",
	"You cannot doff armor or change clothes. Dropping, stowing, or",
	"interacting with an object requires an action.",
	"\u25C6 LEVEL 1 (16-24) | LEVEL 2 (25-32) | LEVEL 3 (28-36) | LEVEL 4 (34-43)",
	"You immediately throw up a thick, black ichor and begin feeling nauseous.",
	"You don't benefit from the effects of any food, drink, or potions consumed.",
	"\u25C6 LEVEL 1 (25-32) | LEVEL 2 (33-40) | LEVEL 3 (37-45) | LEVEL 4 (44-52)",
	"You are only able to form one-word sentences in a guttural voice you don't recognise.",
	"You can still cast spells with verbal components.",
	"\u25C6 LEVEL 1 (43-40) | LEVEL 2 (35-48) | LEVEL 3 (46-54) | LEVEL 4 (53-61)",
	"Your legs become unresponsive and difficult to move.",
	"Your speed decreases by 10 ft.",
	"\u25C6 LEVEL 1 (41-48) | LEVEL 2 (42-56) | LEVEL 3 (55-63) | LEVEL 4 (62-70)",
	"Your body begins fighting against any form you take. You cannot make reactions.",
	"\u25C6 LEVEL 1 (49-56) | LEVEL 2 (57-64) | LEVEL 3 (64-72) | LEVEL 4 (71-77)",
	"Your arms periodically have a will of their own, causing your reaction speed to",
	"slow while you regain control. You have disadv. on Dex checks to determine initiative.",
	"\u25C6 LEVEL 1 (57-64) | LEVEL 2 (65-72) | LEVEL 3 (73-80) | LEVEL 4 (78-84)",
	"Your skin quivers and shifts, while your appear. constantly changes.",
	"Every 30 sec a defining feat changes, such as hair color, facial features, etc.",
	"\u25C6 LEVEL 1 (65-81) | LEVEL 2 (73-83) | LEVEL 3 (81-89) | LEVEL 4 (85-91)",
	"Nothing happens.",
	"\u25C6 LEVEL 1 (82-91) | LEVEL 2 (84-92) | LEVEL 3 (90-95) | LEVEL 4 (92-96)",
	"You become immune to the grappled and restrained condition.",
	"\u25C6 LEVEL 1 (92-100) | LEVEL 2 (93-100) | LEVEL 3 (96-100) | LEVEL 4 (97-100)",
	"If you would gain HP from a spell or ability other than your own,",
	"you gain that many HP plus your Con mod instead.",
];

FeatsList["aberrant horror level 1"] = {
	name: "Aberrant Horror (Level 1)",
	source: [["GH", 33]],
	description:
		"I gain the Aberrant Horror transformation, which grants me various boons and flaws as detailed below on the notes page. I can gain additional boons and flaws as I reach certain levels, or during level milestones (GM's discretion).",
	toNotesPage: [
		{
			name: "Unstable Mutation Table",
			source: [["GH", 33]],
			note: desc(UnstableMutationTable)
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
		{
			name: "Aberrant Horror",
			source: [["GH", 33]],
			note: desc(AberrantHorror1)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
			amendTo: "Unstable Mutation Table",
		},
	],
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*(eldritch|aberrant))(?=.*(limb|arm|arms)).*$/i,
			name: "Eldritch Limbs",
			source: [["GH", 33]],
			damage: [1, 6, "Varies"],
			description: "I can choose Piercing, Slashing, or Bludgeoning this atk causes.",
			selectNow: true,
		},
	],
	prerequisite: "Constitution 13 or higher",
	prereqeval: function () {
		return Number(What("Con")) > 12;
	},
};

var AberrantHorror2_EfficientKiller = [
	"\u25C6 >>Boon: Efficient Killer<<",
	"When I make an unarmed atk with Eldritch Limbs, I gain one of the following:",
	"  \u2022 Piercing: I launch a barb from my arm. Make a ranged atk at a target within",
	"    30 ft. On a hit, the target takes piercing dmg equal to 2d6 + my Str mod",
	"  \u2022 Bludgeoning: I can manifest a long tentacle, tipped with a bone club.",
	"    My unarmed atk deals an additional 1d6 bludg. dmg. When I hit a crea with",
	"    an unarmed atk, I can dmg another crea within 5 ft of the original target.",
	"    If the original atk roll would hit the second creature, it takes bludg. dmg",
	"    equal to 1d6 + my Str mod",
	"  \u2022 Slashing: My arm forms a row of viciously hooked claws and talons.",
	"    My unarmed atk deals an additional 1d6 slash. dmg, and the target must",
	"    succeed at a Con save or gains the bleeding condition for 1 min. A creature",
	"    can repeat the save at the end of each of its turns, ending on a success",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My appearance is grotesquely transformed and horrific to behold.",
	"  I can suspend this form and appear as I once were, but it requires conc.",
	"  This isn't perm., and moments of stress are likely to reveal my true nature.",
	"  My true form is revealed in the following situations:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In events of extreme emotional or physical stress, a GM may call for a",
	"  Con save with a DC of their choosing to see if I maintain my humanoid form",
	"  Non-evil creatures that witness my true form become instantly hostile to me,",
	"  unless the GM decides otherwise",
];

FeatsList["aberrant horror: efficient killer (level 2)"] = {
	name: "Aberrant Horror: Efficient Killer (Level 2)",
	source: [["GH", 34]],
	description:
		"I gain the Efficient Killer boon and Hideous Appearance flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 34]],
			note: desc(AberrantHorror2_EfficientKiller)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("aberrant horror level 1") !== -1;
	},
	action: [["bonus action", "Efficient Killer (Bludgeoning)"]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/^(?=.*(eldritch|aberrant))(?=.*(limb|arm|arms)).*$/i.test(v.WeaponTextName)) {
					fields.Description =
						"Range 30 ft (Pierc.), +1d6 dmg (Bludg. + bns action), or +1d6 dmg (Slash. + Con save or bleed 1 min; EOT save)";
				}
			},
		],
	},
};

var AberrantHorror2_OtherworldlyTendrils = [
	"\u25C6 >>Boon: Other-Worldly Tendrils<<",
	"  Starting at 2nd level, as a bns action, I grow a long, tendril-like",
	"  appendage that I'm proficient with. On subsequent turns, immediately after",
	"  taking the atk action, I may use a bns action to have the tendril atk an",
	"  enemy within 10 ft of me. If I do, make an unarmed melee atk using my Str",
	"  mod. On a hit, the target takes 1d4 + Str mod bludg. dmg",
	"  The tendril lasts until I'm unconscious. On my turn, I may use a bns",
	"  action to retract it. I gain the following Adaptations:",
	"    \u2022 Toxic Spray: A lamprey-like mouth opens at the end and sprays a",
	"      noxious toxin. When I atk with a tendril, I can use this and forgo",
	"      dmg. Instead of rolling to hit, the target makes a Con save vs. my",
	"      Transformation Save DC. On a fail, they're poisoned. They repeat the",
	"      save at the end of each turn. On a success, no longer affected",
	"    \u2022 Constrict: A tendril wraps tightly around the target. When I hit",
	"      with a tendril atk and the target is Large or smaller, I can use this.",
	"      The atk deals no dmg and the target is grappled. Until the grapple",
	"      ends, the tendril can't be used against other targets",
	"    \u2022 Hypnotic Trance: A tendril flashes coloured bioluminescent lights,",
	"      disorienting the target. When I atk with a tendril, I can use this and",
	"      forgo dmg. Instead of rolling to hit, the target makes a Wis save vs.",
	"      my Transformation Save DC. On a fail, atk rolls vs. them have adv.",
	"      until the start of its next turn. They repeat the save at the end of",
	"      each turn. On a success, no longer affected",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My appearance is grotesquely transformed and horrific to behold.",
	"  I can suspend this form and appear as I once were, but it requires conc.",
	"  This isn't perm., and moments of stress reveal my true nature.",
	"  My true form is revealed in the following situations:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In events of extreme emotional or physical stress, a GM may call for a",
	"  Con save with a DC of their choosing to see if I maintain my humanoid form",
	"  Non-evil creatures that witness my true form become instantly hostile to",
	"  me, unless the GM decides otherwise",
];

FeatsList["aberrant horror: other-worldly tendrils (level 2)"] = {
	name: "Aberrant Horror: Other-Worldly Tendrils (Level 2)",
	source: [["GH", 34]],
	description:
		"I gain the Other-Worldly Tendrils boon and Hideous Appearance flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 34]],
			note: desc(AberrantHorror2_OtherworldlyTendrils)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("aberrant horror level 1") !== -1;
	},
	action: [
		["bonus action", "Other-Worldly Tendrils (grow)"],
		["bonus action", "Other-Worldly Tendrils (attack, after Attack action)"],
		["bonus action", "Other-Worldly Tendrils (retract)"],
	],
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*(otherworldly|aberrant))(?=.*(tendril)).*$/i,
			name: "Otherworldly Tendril",
			source: [["GH", 34]],
			damage: [1, 4, "Bludgeoning"],
			range: "Melee (10 ft)",
			description: "Can use Toxic Spray, Constrict, or Hypnotic Trance adaptations",
			abilitytodamage: true,
			selectNow: true,
		},
	],
};

var AberrantHorror2_SituationalEvolution = [
	"\u25C6 >>Boon: Situational Evolution<<",
	"  I can use an action to grow gills and flippers, thin hairs on my",
	"  extremities to climb walls, or a layer of rapidly-regenerating flesh.",
	"  I gain the following Adaptations:",
	"    \u2022 Scopulae: My climbing speed = my walking speed. I can climb",
	"      vertical objects while leaving one hand free",
	"    \u2022 Gills and Flippers: My swim speed = my walking speed, and I can",
	"      breathe underwater",
	"    \u2022 Regenerative Tissue: At the start of my turn, I regain HP = my",
	"      Con mod if I have no more than half my HP. If I take fire or acid",
	"      dmg, this has no effect at the start of my next turn",
	"  These last until I'm unconscious, use a different Adaptation, or use a",
	"  bns action on my turn to end it",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My appearance is grotesquely transformed and horrific to behold.",
	"  I can suspend this form and appear as I once were, but it requires conc.",
	"  This isn't perm., and moments of stress reveal my true nature.",
	"  My true form is revealed in the following situations:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In events of extreme emotional or physical stress, a GM may call for a",
	"  Con save with a DC of their choosing to see if I maintain my humanoid form",
	"  Non-evil creatures that witness my true form become instantly hostile to",
	"  me, unless the GM decides otherwise",
];

FeatsList["aberrant horror: situational evolution (level 2)"] = {
	name: "Aberrant Horror: Situational Evolution (Level 2)",
	source: [["GH", 34]],
	description:
		"I gain the Situational Evolution boon and Hideous Appearance flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	extraLimitedFeatures: {
		name: "Regenerative Tissue (Situational Evolution)",
		usages: 1,
		recovery: "Turn",
	},
	toNotesPage: [
		{
			name: "",
			source: [["GH", 34]],
			note: desc(AberrantHorror2_SituationalEvolution)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("aberrant horror level 1") !== -1;
	},
	speed: {
		climb: { spd: "walk", enc: "walk" },
		swim: { spd: "walk", enc: "walk" },
	},
	action: [
		["action", "Situational Evolution"],
		["bonus action", "Situational Evolution (end)"],
	],
};

var AberrantHorror3_Wings = [
	"\u25C6 >>Boon: Wings<<",
	"  Beginning at 3rd level, I can grow large, twisted wings of mutated flesh.",
	"  I gain the following Adaptation:",
	"    \u2022 Wings: As a bns action, I manifest a pair of distorted, fleshy wings.",
	"      I gain a fly speed = my current speed. These wings recede after 10 min.",
	"      I can reabsorb them as a bns action, and they reabsorb automatically if",
	"      I'm knocked unconscious. I can manifest my wings while wearing medium",
	"      or light armor if made to accommodate them. I can't manifest my wings",
	"      while wearing heavy armor",
	"  Once I use this, I can't use it again until I complete a short rest",
	"\u25C6 >>Flaw: Unstable Existence<<",
	"  The nature of magic is beginning to unravel my material form. Whenever I",
	"  roll a nat 1, 2, or 3 on a save vs. a spell or magical ability, I reveal",
	"  my Hideous Appearance",
];

FeatsList["aberrant horror: wings (level 3)"] = {
	name: "Aberrant Horror: Wings (Level 3)",
	source: [["GH", 35]],
	description:
		"I gain the Wings boon and Unstable Existence flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	extraLimitedFeatures: {
		name: "Wings (Aberrant Horror)",
		usages: 1,
		recovery: "short rest",
	},
	toNotesPage: [
		{
			name: "",
			source: [["GH", 35]],
			note: desc(AberrantHorror3_Wings)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("aberrant horror level 1") !== -1 &&
			(CurrentFeats.known.indexOf("aberrant horror: efficient killer (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: other-worldly tendrils (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: situational evolution (level 2)") !== -1)
		);
	},
	speed: {
		fly: { spd: "walk", enc: 0 },
	},
	action: [
		["bonus action", "Wings (manifest)"],
		["bonus action", "Wings (reabsorb)"],
	],
	usages: 1,
	recovery: "short rest",
};

var AberrantHorror3_AdditionalTendrils = [
	"\u25C6 >>Boon: Additional Tendrils<<",
	"  I can grow an additional tendril. On subsequent turns, I may use a bns",
	"  action to atk with each tendril I've grown. The tendrils can all atk the",
	"  same target or different ones. Make a separate atk roll for each tendril",
	"  When I reach the 4th lvl of this transformation, the number of tendrils I",
	"  can manifest is increased to three",
	"\u25C6 >>Flaw: Unstable Existence<<",
	"  The nature of magic is beginning to unravel my material form. Whenever I",
	"  roll a nat 1, 2, or 3 on a save vs. a spell or magical ability, I reveal",
	"  my Hideous Appearance",
];

FeatsList["aberrant horror: additional tendrils (level 3)"] = {
	name: "Aberrant Horror: Additional Tendrils (Level 3)",
	source: [["GH", 35]],
	description:
		"I gain the Additional Tendrils boon and Unstable Existence flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 35]],
			note: desc(AberrantHorror3_AdditionalTendrils)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1 and Other-Worldly Tendrils",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("aberrant horror level 1") !== -1 &&
			CurrentFeats.known.indexOf("aberrant horror: other-worldly tendrils (level 2)") !== -1
		);
	},
	action: [["bonus action", "Additional Tendrils (attack with each)"]],
};

var AberrantHorror3_EnhancedHypertrophy = [
	"\u25C6 >>Boon: Enhanced Hypertrophy<<",
	"  I may roll a d8 in place of normal dmg for unarmed strikes. The base dmg",
	"  dice for my adaptations, like Efficient Killer and Otherworldly Tendrils",
	"  becomes one base die higher. For example, an adaptation that deals 2d6",
	"  dmg would become 2d8 dmg instead",
	"\u25C6 >>Flaw: Unstable Existence<<",
	"  The nature of magic is beginning to unravel my material form. Whenever I",
	"  roll a nat 1, 2, or 3 on a save vs. a spell or magical ability, I reveal",
	"  my Hideous Appearance",
];

FeatsList["aberrant horror: enhanced hypertrophy (level 3)"] = {
	name: "Aberrant Horror: Enhanced Hypertrophy (Level 3)",
	source: [["GH", 35]],
	description:
		"I gain the Enhanced Hypertrophy boon and Unstable Existence flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 35]],
			note: desc(AberrantHorror3_EnhancedHypertrophy)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("aberrant horror level 1") !== -1 &&
			(CurrentFeats.known.indexOf("aberrant horror: efficient killer (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: other-worldly tendrils (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: situational evolution (level 2)") !== -1)
		);
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (
					(/^(?=.*(eldritch|aberrant))(?=.*(limb|arm|arms)).*$/i.test(v.WeaponTextName) ||
						/^(?=.*(otherworldly|aberrant))(?=.*(tendril)).*$/i.test(v.WeaponTextName)) &&
					/\d+d\d+/.test(fields.Damage_Die)
				) {
					var match = fields.Damage_Die.match(/(\d+)d(\d+)/);
					if (match) {
						var numDice = match[1];
						var dieSize = parseInt(match[2]);
						var upgradedDie = UPGRADE_DIE_MAP[dieSize];
						if (upgradedDie) {
							fields.Damage_Die = numDice + "d" + upgradedDie;
						}
					}
				} else if (
					v.baseWeaponName === "unarmed strike" &&
					(fields.Damage_Die === 1 || fields.Damage_Die === "1d4" || fields.Damage_Die === "1d6")
				) {
					fields.Damage_Die = "1d8";
				}
			},
		],
	},
};

var AberrantHorror4_SavagePredator = [
	"\u25C6 >>Boon: Savage Predator<<",
	"  Beginning at 4th level, whenever I roll to hit a target and score a nat",
	"  20, I may deal an additional 6d6 dmg. This dmg is the same type as my",
	"  weapon. In addition, each creature of my choice within 30 ft must succeed",
	"  on a Wis save or become Frightened of me for 1 min. A creature can repeat",
	"  the save at the end of each turn, ending the effect on a success",
	"\u25C6 >>Flaw: Entropic Abomination<<",
	"  The very essence of magic aggravates the unstable nature of my aberrant",
	"  body. Whenever I fail a save to a spell or magical ability, roll on the",
	"  Unstable Mutation table. If the result is less than my current unstable",
	"  mutation effect, replace it with the new result",
];

FeatsList["aberrant horror: savage predator (level 4)"] = {
	name: "Aberrant Horror: Savage Predator (Level 4)",
	source: [["GH", 36]],
	description:
		"I gain the Savage Predator boon and Entropic Abomination flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 36]],
			note: desc(AberrantHorror4_SavagePredator)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("aberrant horror level 1") !== -1 &&
			(CurrentFeats.known.indexOf("aberrant horror: wings (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: additional tendrils (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: enhanced hypertrophy (level 3)") !== -1)
		);
	},
};

var AberrantHorror4_MasterDeep = [
	"\u25C6 >>Boon: Master of the Deep<<",
	"  Prerequisite: Additional Tendrils",
	"  On my turn as an action, I rapidly grow and launch hundreds of tiny",
	"  tendrils from my body. Each creature of my choice within 15 ft must",
	"  succeed on a Dex save. On a fail, they suffer one of the following",
	"  effects of my choice for 1 min. I can choose different effects for",
	"  different creatures:",
	"    \u2022 Become poisoned",
	"    \u2022 Speed becomes 0",
	"    \u2022 Attacks against them have advantage",
	"  Once I use this, I can't use it again until I complete a short or long rest",
	"\u25C6 >>Flaw: Entropic Abomination<<",
	"  The very essence of magic aggravates the unstable nature of my aberrant",
	"  body. Whenever I fail a save to a spell or magical ability, roll on the",
	"  Unstable Mutation table. If the result is less than my current unstable",
	"  mutation effect, replace it with the new result",
];

FeatsList["aberrant horror: master of the deep (level 4)"] = {
	name: "Aberrant Horror: Master of the Deep (Level 4)",
	source: [["GH", 36]],
	description:
		"I gain the Master of the Deep boon and Entropic Abomination flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 36]],
			note: desc(AberrantHorror4_MasterDeep)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1 and Additional Tendrils",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("aberrant horror level 1") !== -1 &&
			CurrentFeats.known.indexOf("aberrant horror: additional tendrils (level 3)") !== -1
		);
	},
	action: [["action", "Master of the Deep (Tendrils)"]],
	usages: 1,
	recovery: "short rest",
};

var AberrantHorror4_Extremophilic = [
	"\u25C6 >>Boon: Extremophilic Conditioning<<",
	"  Starting at 4th level, my body has learned to adapt to extreme",
	"  conditions, allowing me to survive where most would perish. On my turn,",
	"  as an action, I can use the following Adaptation:",
	"    \u2022 Metamorphosis: I rapidly change my body's biophysical and chemical",
	"      composition in reaction to my environment. Choose one option:",
	"      \u2022 I'm resistant to Bludg., Pierce., and Slash. dmg. When",
	"        determining falling dmg, I take 1 bludg. dmg for each 10 ft",
	"        fallen in place of normal dmg (max 20 bludg. dmg)",
	"      \u2022 I'm resistant to Fire, Lightning, and Acid dmg. I'm immune to",
	"        the effects of extreme hot climates",
	"      \u2022 I'm resistant to Cold, Thunder, and Poison dmg. I'm immune to",
	"        the effects of extreme cold climates",
	"  This adaptation lasts until I use this Adaptation again",
	"\u25C6 >>Flaw: Entropic Abomination<<",
	"  The very essence of magic aggravates the unstable nature of my aberrant",
	"  body. Whenever I fail a save to a spell or magical ability, roll on the",
	"  Unstable Mutation table. If the result is less than my current unstable",
	"  mutation effect, replace it with the new result",
];

FeatsList["aberrant horror: extremophilic conditioning (level 4)"] = {
	name: "Aberrant Horror: Extremophilic Conditioning (Level 4)",
	source: [["GH", 36]],
	description:
		"I gain the Extremophilic Conditioning boon and Entropic Abomination flaw for the Aberrant Horror transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 36]],
			note: desc(AberrantHorror4_Extremophilic)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prerequisite: "Aberrant Horror Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("aberrant horror level 1") !== -1 &&
			(CurrentFeats.known.indexOf("aberrant horror: wings (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: additional tendrils (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("aberrant horror: enhanced hypertrophy (level 3)") !== -1)
		);
	},
	action: [["action", "Extremophilic Conditioning (Metamorphosis)"]],
};
