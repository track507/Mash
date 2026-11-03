var iFileName = "GH-Transformations";
RequiredSheetVersion("13.2.3");
if (!SourceList["GH"]) {
	SourceList["GH"] = {
		name: "Grim Hollow",
		abbreviation: "GH",
		group: "Third Party",
	};
}

/* eslint-disable-next-line no-undef */
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
	"  \u2022 Chitinous Shell: As a bns action while not wearing heavy armor, I gain",
	"    +2 AC. This lasts for 1 min, until I'm unconscious, or I use a bns action",
	"    to end it",
	"  \u2022 Eldritch Limbs: When I atk, I can transform one or both arms into weapons",
	"    and gain the following:",
	"    \u2022 I choose bludg., pierce., or slash. dmg for the atk",
	"    \u2022 I roll a d6 in place of normal dmg for unarmed strikes",
	"    \u2022 I can't hold any obj. in the affected arm. It either merges into the",
	"      adaptation or is dropped (GM's choice)",
	"    This lasts until I'm unconscious or I use a bns action to end it",
	"\u25C6 >>Boon: Aberrant Form<<",
	"  My Con increases by 2 and my Str by 1 (max 16)",
	"\u25C6 >>Flaw: Unstable Mutations<<",
	"  After every long rest, I roll a d100 and apply the effects from the Unstable",
	"  Mutation table. This lasts until I complete another long rest. I must keep",
	"  rolling until a new result is rolled",
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
	"\u25C6 LEVEL 1 (33-40) | LEVEL 2 (41-48) | LEVEL 3 (46-54) | LEVEL 4 (53-61)",
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
	scorestxt: "+2 Con, +1 Str (max 16)",
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
	"  When I make an unarmed atk with Eldritch Limbs, I gain one of the following:",
	"    \u2022 Piercing: Make a ranged atk at a target w/in 30 ft. On a hit, the",
	"      target takes 2d6 + Str mod piercing dmg",
	"    \u2022 Bludgeoning: My unarmed atk deals an additional 1d6 bludg. dmg. When",
	"      I hit a crea., I can dmg another crea. w/in 5 ft of the original target.",
	"      If the original atk roll would hit the second crea., it takes 1d6 + Str",
	"      mod bludg. dmg",
	"    \u2022 Slashing: My unarmed atk deals an additional 1d6 slash. dmg, and the",
	"      target must make a Con save or gain the bleeding condition for 1 min.",
	"      They can repeat the save at the end of each turn, ending it on a success",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My appearance is grotesquely transformed. I can hide this and appear as the",
	"  humanoid I once were, but this requires conc. Moments of stress can reveal",
	"  my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
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
	"  As a bns action, I grow a tendril that I'm proficient with. After taking",
	"  the atk action, I can use a bns action to atk with the tendril against an",
	"  enemy w/in 10 ft. On a hit, it deals 1d4 + Str mod bludg. dmg",
	"  The tendril lasts until I'm unconscious or I use a bns action to retract it.",
	"  I gain the following Adaptations:",
	"    \u2022 Toxic Spray: When I atk with a tendril, I can forgo dmg. The target",
	"      makes a Con save. On a fail, they're poisoned. They repeat the save at",
	"      the end of each turn, ending the effect on a success",
	"    \u2022 Constrict: When I hit with a tendril atk and the target is Large or",
	"      smaller, I can use this. The atk deals no dmg and the target is grappled.",
	"      Until the grapple ends, the tendril can't be used against other targets",
	"    \u2022 Hypnotic Trance: When I atk with a tendril, I can forgo dmg. The target",
	"      makes a Wis save. On a fail, atk rolls vs them have adv. until the start",
	"      of their next turn",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My appearance is grotesquely transformed. I can hide this and appear as the",
	"  humanoid I once were, but this requires conc. Moments of stress can reveal",
	"  my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
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
			damage: [1, 4, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Can use Toxic Spray, Constrict, or Hypnotic Trance adaptations",
			abilitytodamage: true,
			selectNow: true,
		},
	],
};

var AberrantHorror2_SituationalEvolution = [
	"\u25C6 >>Boon: Situational Evolution<<",
	"  As an action, I gain one of the following Adaptations:",
	"    \u2022 Scopulae: My climbing speed = my walking speed. I can climb",
	"      vertical surfaces while leaving one hand free",
	"    \u2022 Gills and Flippers: My swim speed = my walking speed, and I can",
	"      breathe underwater",
	"    \u2022 Regenerative Tissue: At the start of my turn, I regain HP = my",
	"      Con mod if I have no more than half my HP. If I take fire or acid",
	"      dmg, this has no effect at the start of my next turn",
	"  This lasts until I'm unconscious, use a different Adaptation, or use a",
	"  bns action to end it",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My appearance is grotesquely transformed. I can hide this and appear as the",
	"  humanoid I once were, but this requires conc. Moments of stress can reveal",
	"  my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
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
	"  As a bns action, I manifest wings and gain a fly speed = my current speed.",
	"  The wings recede after 10 min. I can reabsorb them as a bns action, and",
	"  they reabsorb automatically if I'm knocked unconscious. I can manifest my",
	"  wings while wearing medium or light armor if made to accommodate them.",
	"  I can't manifest my wings while wearing heavy armor",
	"  Once per short rest",
	"\u25C6 >>Flaw: Unstable Existence<<",
	"  Whenever I roll a nat 1, 2, or 3 on a save vs a spell or magical ability,",
	"  I reveal my Hideous Appearance",
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
	"  I can grow an additional tendril. As a bns action, I can atk with each",
	"  tendril I've grown. The tendrils can atk the same target or different ones.",
	"  Make a separate atk roll for each tendril",
	"  At 4th lvl of this transformation, I can manifest three tendrils",
	"\u25C6 >>Flaw: Unstable Existence<<",
	"  Whenever I roll a nat 1, 2, or 3 on a save vs a spell or magical ability,",
	"  I reveal my Hideous Appearance",
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
	"  I roll a d8 in place of normal dmg for unarmed strikes. The base dmg",
	"  dice for my adaptations, like Efficient Killer and Otherworldly Tendrils,",
	"  increases by one die size. For example, an adaptation that deals 2d6",
	"  dmg would deal 2d8 dmg instead",
	"\u25C6 >>Flaw: Unstable Existence<<",
	"  Whenever I roll a nat 1, 2, or 3 on a save vs a spell or magical ability,",
	"  I reveal my Hideous Appearance",
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
						/* eslint-disable-next-line no-undef */
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
	"  When I score a nat 20 on an attack, I deal an additional 6d6 dmg of",
	"  the same type as my weapon. Each crea. of my choice w/in 30 ft must",
	"  make a Wis save or become Frightened of me for 1 min. They can repeat",
	"  the save at the end of each of their turns, ending the effect on a success",
	"\u25C6 >>Flaw: Entropic Abomination<<",
	"  Whenever I fail a save vs a spell or magical ability, roll on the",
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
	"  As an action on my turn, each crea. of my choice w/in 15 ft must",
	"  make a Dex save. On a fail, they suffer one of the following effects",
	"  for 1 min. I can choose different effects for different crea.:",
	"    \u2022 Become poisoned",
	"    \u2022 Speed becomes 0",
	"    \u2022 Attacks against them have advantage",
	"  Once per short or long rest",
	"\u25C6 >>Flaw: Entropic Abomination<<",
	"  Whenever I fail a save vs a spell or magical ability, roll on the",
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
	"  As an action on my turn, I can use the following Adaptation:",
	"    \u2022 Metamorphosis: I change my body to adapt to my environment. Choose one:",
	"      \u2022 I'm resistant to Bludg., Pierce., and Slash. dmg. I take 1 bludg.",
	"        dmg per 10 ft fallen instead of normal falling dmg (max 20)",
	"      \u2022 I'm resistant to Fire, Lightning, and Acid dmg. I'm immune to",
	"        extreme hot climates",
	"      \u2022 I'm resistant to Cold, Thunder, and Poison dmg. I'm immune to",
	"        extreme cold climates",
	"  This lasts until I use this Adaptation again",
	"\u25C6 >>Flaw: Entropic Abomination<<",
	"  Whenever I fail a save vs a spell or magical ability, roll on the",
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

var Fiend1_GiftsOfDamnation = [
	"\u25C6 >>Boon: Gifts of Damnation<<",
	"  I can create a contract to bind a mortal's soul to me.",
	"  I need magical ink and paper worth 50gp for each Transformation level I have,",
	"  and must meet the prereqs. listed. The mortal and I must both sign",
	"  willingly. Once signed, Netherworld entities give me the benefits",
	"  of the gift, and the mortal receives the named benefit w/in 7 days.",
	"  I do not provide this benefit myself. For example, upon signing",
	"  a contract for a Gift of Unfettered Glory, I receive the benefits listed under",
	"  the gift. The mortal who signs receives glory and no in-game mechanical bonuses,",
	"  provided by the Netherworld",
	"  I may have any number of contracts, but can only benefit from one at a time.",
	"  After a long rest, I may swap the contract I am benefiting from for an alternate",
	"  contract I have bound a mortal to and signed",
	"\u25C6 >>Boon: Fiendish Form<<",
	"  My Cha score increases by 2 and my Int score increases by 1 (max 16).",
	"  I become a Fiend in addition to any other creature types I am.",
	"  Spells and abilities that affect Fiends of a certain CR have no effect on me",
	"\u25C6 >>Flaw: Planar Binding<<",
	"  My body and soul are bound to a fiendish plane of existence. I have disadv.",
	"  on death saving throws as the plane attempts to pull me back to it. If I",
	"  would be killed, my soul is dragged back to a plane of existence of the GM's",
	"  choice. This plane is my new home, and I become an NPC under the GM's control",
	"  If I am on the fiendish plane responsible for my transformation, this flaw",
	"  has no effect",
	"I gain more boons and flaws as I gain levels (Recommended lvls 5, 11, and 17)",
];

FeatsList["fiend level 1"] = {
	name: "Fiend (Level 1)",
	source: [["GH", 40]],
	description:
		"I gain the Fiend transformation, which grants me various boons and flaws as detailed below on the notes page. I can select a Gift of Damnation contract to benefit from, and can swap contracts after a long rest.",
	toNotesPage: [
		{
			name: "Fiend",
			source: [["GH", 40]],
			note: desc(Fiend1_GiftsOfDamnation)
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
	scorestxt: "+2 Cha, +1 Int (max 16)",
	prerequisite: "Charisma 13 or higher",
	prereqeval: function () {
		return Number(What("Cha")) > 12;
	},
	choices: [
		"Gift of Unfettered Glory",
		"Gift of Joyous Youth",
		"Gift of Unsurpassed Fortune",
		"Gift of Liberating Freedom (Lvl 2)",
		"Gift of Prodigious Talent (Lvl 2)",
		"Gift of Unconditional Love (Lvl 3)",
		"Gift of Second Chances (Lvl 3)",
		"Gift of Unbridled Power (Lvl 4)",
		"Gift of Expansive Knowledge (Lvl 4)",
	],
	"gift of unfettered glory": {
		name: "Gift of Unfettered Glory",
		description: "When I hit with a melee atk or melee spell atk, I can add my Cha mod to the dmg dealt",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.isMeleeWeapon || (v.isSpell && /\bmelee\b/i.test(fields.Range) && !v.isDC)) {
						output.extraDmg += Math.max(What("Cha Mod"), 0);
					}
				},
				"I add my Charisma modifier to damage dealt with melee attacks and melee spell attacks.",
			],
		},
	},
	"gift of joyous youth": {
		name: "Gift of Joyous Youth",
		description:
			"At the start of my turn, if I have no remaining HD, I can make a DC 10 Cha save. On success, I regain 1 spent HD. On fail, I take 1d6 psychic dmg",
		usages: 1,
		recovery: "Turn",
	},
	"gift of unsurpassed fortune": {
		name: "Gift of Unsurpassed Fortune",
		description:
			"When a crea. makes an atk roll, skill check, or save w/in 20 ft, after GM rolls but before result, I can use rea. to roll d20. If 10+, it fails",
		action: [["reaction", "Unsurpassed Fortune"]],
		usages: 1,
		recovery: "long rest",
	},
	"gift of liberating freedom (lvl 2)": {
		name: "Gift of Liberating Freedom (Lvl 2)",
		description:
			"As a bns action, I manifest leathery wings and gain fly speed = current speed. Wings recede if dismissed (bns action), I'm unconscious, or wearing heavy armor",
		action: [
			["bonus action", "Liberating Freedom (manifest)"],
			["bonus action", "Liberating Freedom (dismiss)"],
		],
		speed: { fly: { spd: "walk", enc: "walk" } },
		prerequisite: "2nd lvl Fiend Transformation",
		prereqeval: function () {
			return (
				CurrentFeats.known.indexOf("fiend: brand of the chainer's gaze (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the tyrant's hellfire (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the deceiver's guile (level 2)") !== -1
			);
		},
	},
	"gift of prodigious talent (lvl 2)": {
		name: "Gift of Prodigious Talent (Lvl 2)",
		description:
			"Choose 2 skill proficiencies. My prof. bns is doubled for ability checks using either. Can't double a prof. bns already being doubled",
		skillstxt: "Choose 2 skills; proficiency bonus doubled for those skills",
		prerequisite: "2nd lvl Fiend Transformation",
		prereqeval: function () {
			return (
				CurrentFeats.known.indexOf("fiend: brand of the chainer's gaze (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the tyrant's hellfire (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the deceiver's guile (level 2)") !== -1
			);
		},
	},
	"gift of unconditional love (lvl 3)": {
		name: "Gift of Unconditional Love (Lvl 3)",
		description:
			"When a crea. fails a Cha save vs a spell or ability I control, I can use rea. to gain temp hp = 1d10 + my char. lvl",
		action: [["reaction", "Unconditional Love"]],
		usages: 1,
		recovery: "short rest",
		prerequisite: "3rd lvl Fiend Transformation",
		prereqeval: function () {
			return (
				CurrentFeats.known.indexOf("fiend: alluring deceit (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: infernal resistance (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: nether blade (level 3)") !== -1
			);
		},
	},
	"gift of second chances (lvl 3)": {
		name: "Gift of Second Chances (Lvl 3)",
		description: "If I'm reduced to 0 hp, I can use rea. to roll a HD. My hp total becomes the HD result instead",
		action: [["reaction", "Second Chances"]],
		usages: 1,
		recovery: "long rest",
		prerequisite: "3rd lvl Fiend Transformation",
		prereqeval: function () {
			return (
				CurrentFeats.known.indexOf("fiend: alluring deceit (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: infernal resistance (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: nether blade (level 3)") !== -1
			);
		},
	},
	"gift of unbridled power (lvl 4)": {
		name: "Gift of Unbridled Power (Lvl 4)",
		description:
			"After a short rest, I can spend 1 HD and regain spell slots with total lvl \u2264 HD result. I take psychic dmg = spell slot lvls regained",
		usages: 1,
		recovery: "long rest",
		prerequisite: "4th lvl Fiend Transformation",
		prereqeval: function () {
			return (
				CurrentFeats.known.indexOf("fiend: infernal summoning (level 4)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: commanding obedience (level 4)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brimstone pyrolysis (level 4)") !== -1
			);
		},
	},
	"gift of expansive knowledge (lvl 4)": {
		name: "Gift of Expansive Knowledge (Lvl 4)",
		description:
			"When I complete this contract for the first time, I learn additional spells from cleric, warlock, or wizard list = Cha mod. Must have spell slot for each. While this contract is active and no other contract active, I know these spells in addition to total Spells Known",
		spellcastingBonus: [
			{
				name: "Gift of Expansive Knowledge",
				class: ["cleric", "warlock", "wizard"],
				level: [0, 9],
			},
		],
		prerequisite: "4th lvl Fiend Transformation",
		prereqeval: function () {
			return (
				CurrentFeats.known.indexOf("fiend: infernal summoning (level 4)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: commanding obedience (level 4)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brimstone pyrolysis (level 4)") !== -1
			);
		},
	},
	savetxt: { text: ["Disadv. on death saves (Planar Binding)"] },
};

var Fiend2_BrandChainersGaze = [
	"\u25C6 >>Boon: Brand of the Chainer's Gaze<<",
	"  As a bns action on my turn, I can brand a crea. w/in 60 ft of me.",
	"  They must make a Wis save. On a fail, whenever they make a saving throw,",
	"  they must subtract 1d6 from their saving throw.",
	"  This lasts for 1 min., until knocked unconscious, enters hallowed",
	"  ground or is targeted by remove curse.",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My skin becomes red and leathery, and horns, teeth and nails erupt through my skin.",
	"  I can hide this and appear as the humanoid I once were, but this requires conc.",
	"  Moments of stress can reveal my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
];

FeatsList["fiend: brand of the chainer's gaze (level 2)"] = {
	name: "Fiend: Brand of the Chainer's Gaze (Level 2)",
	source: [["GH", 41]],
	description:
		"I gain the Brand of the Chainer's Gaze boon and Hideous Appearance flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 41]],
			note: desc(Fiend2_BrandChainersGaze)
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
	prerequisite: "Fiend Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("fiend level 1") !== -1;
	},
	action: [["bonus action", "Brand of the Chainer's Gaze"]],
	usages: "Charisma modifier per ",
	usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
	recovery: "long rest",
};

var Fiend2_BrandTyrantsHellfire = [
	"\u25C6 >>Boon: Brand of the Tyrant's Hellfire<<",
	"  As a bns action on my turn, I can mark a crea. w/in 60 ft of me with a",
	"  They must make a Cha save, and on a fail each atk I make vs them deals",
	"  an additional 1d6 fire dmg",
	"  A crea. is marked for 1 min. or until knocked unconscious, enters hallowed",
	"  ground or is targeted by remove curse.",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My skin becomes red and leathery, and horns, teeth and nails erupt through my skin.",
	"  I can hide this and appear as the humanoid I once were, but this requires conc.",
	"  Moments of stress can reveal my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
];

FeatsList["fiend: brand of the tyrant's hellfire (level 2)"] = {
	name: "Fiend: Brand of the Tyrant's Hellfire (Level 2)",
	source: [["GH", 41]],
	description:
		"I gain the Brand of the Tyrant's Hellfire boon and Hideous Appearance flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 41]],
			note: desc(Fiend2_BrandTyrantsHellfire)
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
	prerequisite: "Fiend Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("fiend level 1") !== -1;
	},
	action: [["bonus action", "Brand of the Tyrant's Hellfire"]],
	usages: "Charisma modifier per ",
	usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
	recovery: "long rest",
};

var Fiend2_BrandDeceiversGuile = [
	"\u25C6 >>Boon: Brand of the Deceiver's Guile<<",
	"  As a bns action on my turn, I brand a crea. w/in 60 ft of me",
	"  that twists their senses and perspective. They must make an Int save",
	"  On a fail, all branded crea. must subtract 1d6 from atk rolls made vs. me",
	"  This lasts for 1 min, if the crea. is knocked unconscious, enters hallowed",
	"  ground or targeted by remove curse.",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My skin becomes red and leathery, and horns, teeth and nails erupt through my skin.",
	"  I can hide this and appear as the humanoid I once were, but this requires conc.",
	"  Moments of stress can reveal my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
];

FeatsList["fiend: brand of the deceiver's guile (level 2)"] = {
	name: "Fiend: Brand of the Deceiver's Guile (Level 2)",
	source: [["GH", 41]],
	description:
		"I gain the Brand of the Deceiver's Guile boon and Hideous Appearance flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 41]],
			note: desc(Fiend2_BrandDeceiversGuile)
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
	prerequisite: "Fiend Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("fiend level 1") !== -1;
	},
	action: [["bonus action", "Brand of the Deceiver's Guile"]],
	usages: "Charisma modifier per ",
	usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
	recovery: "long rest",
};

var Fiend3_AlluringDeceit = [
	"\u25C6 >>Boon: Alluring Deceit<<",
	"  I gain prof. in Deception and Persuasion. or expertise if I'm already prof.",
	"  This has no effect on a skill if the prof. bns is already \xD72",
	"  I can't magically be compelled to tell the truth and magic that deteremines",
	"  truthfulness says I'm truthful",
	"\u25C6 >>Flaw: True Name<<",
	"  I receive a talisman with my true name inscribed in infernal on it.",
	"  A crea. w/in 10 ft of me that knows my true name, can use an action to",
	"  speak it to attempt to bind me to their will. I must make a DC 20",
	"  Wis save or become charmed by the crea., and must obey all their commands",
	"  to the best of my ability. I'm charmed for 8 hours. or until the crea. dies",
];

FeatsList["fiend: alluring deceit (level 3)"] = {
	name: "Fiend: Alluring Deceit (Level 3)",
	source: [["GH", 42]],
	description:
		"I gain the Alluring Deceit boon and True Name flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 42]],
			note: desc(Fiend3_AlluringDeceit)
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
	prerequisite: "Fiend Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("fiend level 1") !== -1 &&
			(CurrentFeats.known.indexOf("fiend: brand of the chainer's gaze (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the tyrant's hellfire (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the deceiver's guile (level 2)") !== -1)
		);
	},
	skills: [
		["Deception", "increment"],
		["Persuasion", "increment"],
	],
	skillstxt: "Proficiency in Deception and Persuasion, or expertise if already proficient",
};

var Fiend3_InfernalResistance = [
	"\u25C6 >>Boon: Infernal Resistance<<",
	"  When I take magical dmg from a spell, ability, or wea., I take \u00BD dmg",
	"  as a rea. I cannot use this feature against dmg from silvered wea.",
	"\u25C6 >>Flaw: True Name<<",
	"  I receive a talisman with my true name inscribed in infernal on it.",
	"  A crea. w/in 10 ft of me that knows my true name, can use an action to",
	"  speak it to attempt to bind me to their will. I must make a DC 20",
	"  Wis save or become charmed by the crea., and must obey all their commands",
	"  to the best of my ability. I'm charmed for 8 hours. or until the crea. dies",
];

FeatsList["fiend: infernal resistance (level 3)"] = {
	name: "Fiend: Infernal Resistance (Level 3)",
	source: [["GH", 42]],
	description:
		"I gain the Infernal Resistance boon and True Name flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 42]],
			note: desc(Fiend3_InfernalResistance)
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
	prerequisite: "Fiend Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("fiend level 1") !== -1 &&
			(CurrentFeats.known.indexOf("fiend: brand of the chainer's gaze (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the tyrant's hellfire (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the deceiver's guile (level 2)") !== -1)
		);
	},
	action: [["reaction", "Infernal Resistance (half magical damage)"]],
};

var Fiend3_NetherBlade = [
	"\u25C6 >>Boon: Nether Blade<<",
	"  As a bns action, I summon a dreaded Nether Blade. The blade takes",
	"  the form of a simple or martial wea. that deals slash. dmg of my choice.",
	"  Atks made with this deal fire dmg and gain the following:",
	"    \u2022 Atks I make with this deal an additional 2d6 fire dmg",
	"    \u2022 The blade emits flames creating bright light in a 5 ft rad. and",
	"      dim light for an additional 5 ft",
	"    \u2022 I cannot be disarmed of this",
	"  I can unsummon this at any time by using an action. If I unwield the",
	"  blade, it immediately unsummons",
	"\u25C6 >>Flaw: True Name<<",
	"  I receive a talisman with my true name inscribed in infernal on it.",
	"  A crea. w/in 10 ft of me that knows my true name, can use an action to",
	"  speak it to attempt to bind me to their will. I must make a DC 20",
	"  Wis save or become charmed by the crea., and must obey all their commands",
	"  to the best of my ability. I'm charmed for 8 hours. or until the crea. dies",
];

FeatsList["fiend: nether blade (level 3)"] = {
	name: "Fiend: Nether Blade (Level 3)",
	source: [["GH", 42]],
	description:
		"I gain the Nether Blade boon and True Name flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 42]],
			note: desc(Fiend3_NetherBlade)
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
	prerequisite: "Fiend Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("fiend level 1") !== -1 &&
			(CurrentFeats.known.indexOf("fiend: brand of the chainer's gaze (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the tyrant's hellfire (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: brand of the deceiver's guile (level 2)") !== -1)
		);
	},
	action: [
		["bonus action", "Nether Blade (summon)"],
		["action", "Nether Blade (unsummon)"],
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (
					/^(?=.*nether)(?=.*blade).*$/i.test(fields.WeaponTextName) &&
					/(simple|martial)/i.test(v.theWea.type + " " + v.theWea.list)
				) {
					fields.Description += (fields.Description ? "; " : "") + "+2d6 fire dmg";
				}
			},
		],
	},
};

var Fiend4_CommandingObedience = [
	"\u25C6 >>Boon: Commanding Obedience<<",
	"  When a hostile crea. I can see w/in 30 ft fails a save vs a spell of 1st lvl",
	"  or higher I control, I can command it to kneel. On that crea's turn, it must",
	"  face me, then kneel and end its turn. While kneeling, the crea. is proned.",
	"  If the crea. is immune to prone, it just ends its turn",
	"\u25C6 >>Flaw: Pull of the Netherworld<<",
	"  When I roll a nat 1 on a save vs a spell or magical ability, I take 1d6 force",
	"  dmg per 2 char. lvls in addition to other dmg or effects as my native plane",
	"  attempts to unbind me from the Material Plane. This dmg ignores resistances",
	"  and immunities",
];

FeatsList["fiend: commanding obedience (level 4)"] = {
	name: "Fiend: Commanding Obedience (Level 4)",
	source: [["GH", 43]],
	description:
		"I gain the Commanding Obedience boon and Pull of the Netherworld flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 43]],
			note: desc(Fiend4_CommandingObedience)
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
	prerequisite: "Fiend Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("fiend level 1") !== -1 &&
			(CurrentFeats.known.indexOf("fiend: alluring deceit (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: infernal resistance (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: nether blade (level 3)") !== -1)
		);
	},
};

var Fiend4_BrimstonePyrolysis = [
	"\u25C6 >>Boon: Brimstone Pyrolysis<<",
	"  When I deal fire dmg to a hostile crea. and reduce it to 0 hp, I can",
	"  immolate it and turn it into a Brimstone Statue",
	"  Brimstone Statue: AC 10, HP 10, Speed 0, immune to poison and psychic dmg.",
	"  A Brimstone Statue reduced to 0 hp falls apart and is destroyed. It doesn't",
	"  detonate",
	"  Detonate: On my turn as an action, I can detonate one or more Brimstone",
	"  Statues I created. When a statue detonates, it's destroyed. Each crea. other",
	"  than me w/in 10 ft must make a Dex save. They take fire dmg on a fail, or",
	"  half on a success",
	"\u25C6 >>Flaw: Pull of the Netherworld<<",
	"  When I roll a nat 1 on a save vs a spell or magical ability, I take 1d6 force",
	"  dmg per 2 char. lvls in addition to other dmg or effects as my native plane",
	"  attempts to unbind me from the Material Plane. This dmg ignores resistances",
	"  and immunities",
];

FeatsList["fiend: brimstone pyrolysis (level 4)"] = {
	name: "Fiend: Brimstone Pyrolysis (Level 4)",
	source: [["GH", 43]],
	description:
		"I gain the Brimstone Pyrolysis boon and Pull of the Netherworld flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 43]],
			note: desc(Fiend4_BrimstonePyrolysis)
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
	prerequisite: "Fiend Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("fiend level 1") !== -1 &&
			(CurrentFeats.known.indexOf("fiend: alluring deceit (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: infernal resistance (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: nether blade (level 3)") !== -1)
		);
	},
	action: [["action", "Brimstone Pyrolysis (detonate)"]],
};

var Fiend4_InfernalSummoning = [
	"\u25C6 >>Boon: Infernal Summoning<<",
	"  On my turn as an action, I tear open a portal to the Netherworld and summon",
	"  up to 4 Imps. Each is summoned into its own unoccupied space w/in 30 ft of me",
	"  The summoned Imps are friendly to me. They all act directly after me in",
	"  initiative. They obey verbal commands I issue (no action required).",
	"  If I don't issue commands, they defend themselves from hostile",
	"  crea., but otherwise take no actions. The Imps disappears after 1 hr",
	"  or if reduced to 0 hp. The GM has the Imps' statistics",
	"  Once per long rest",
	"\u25C6 >>Flaw: Pull of the Netherworld<<",
	"  When I roll a nat 1 on a save vs a spell or magical ability, I take 1d6 force",
	"  dmg per 2 char. lvls in addition to other dmg or effects as my native plane",
	"  attempts to unbind me from the Material Plane. This dmg ignores resistances",
	"  and immunities",
];

FeatsList["fiend: infernal summoning (level 4)"] = {
	name: "Fiend: Infernal Summoning (Level 4)",
	source: [["GH", 43]],
	description:
		"I gain the Infernal Summoning boon and Pull of the Netherworld flaw for the Fiend transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 43]],
			note: desc(Fiend4_InfernalSummoning)
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
	prerequisite: "Fiend Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("fiend level 1") !== -1 &&
			(CurrentFeats.known.indexOf("fiend: alluring deceit (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: infernal resistance (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("fiend: nether blade (level 3)") !== -1)
		);
	},
	action: [["action", "Infernal Summoning (summon Imps)"]],
	usages: 1,
	recovery: "long rest",
};

var Lich1 = [
	"\u25C6 >>Boon: Harvester of Souls<<",
	"  When I reduce a crea. to 0 hp on the same plane as my phylactery, its soul",
	"  is captured and my phylactery becomes charged. On my turn as an action, I",
	"  can consume any number of charge lvls from my phylactery to regain a single",
	"  spell slot. The spell slot's lvl = 1/3 of the charge consumed (round down)",
	"\u25C6 >>Boon: Undead Form<<",
	"  My Int increases by 4 and my Wis by 2 (max 22). I become Undead in addition",
	"  to other crea. types. Spells and abilities that affect Undead of a certain",
	"  CR have no effect on me",
	"  If a spell or ability would cause me to gain HP, I gain temp HP instead.",
	"  If I'm reduced to 0 hp and unconscious, healing stabilizes me and leaves",
	"  me on 1 hp and unconscious. I stop aging, am immune to aging effects, and",
	"  cannot die from old age. I don't require air, food, drink, or sleep",
	"\u25C6 >>Flaw: Phylactery<<",
	"  I've torn my soul from my body and trapped it in an object no larger than",
	"  1 sq ft. This is my phylactery: AC 18, HP 90, Speed 0, immune to poison",
	"  and psychic dmg. While a soul is stored, the phylactery is charged. Its",
	"  charge lvl = CR of all crea. whose soul I captured. Souls of crea. with",
	"  CR < 1/4 aren't great enough to charge my phylactery. Max charge: 27",
	"  If my phylactery is reduced to 0 hp, my soul is lost and I crumble to",
	"  dust and am killed. If I'm killed and control a charged phylactery on the",
	"  same plane, the phylactery's charge is consumed and my body is reconstructed",
	"  at 5 ft of my phylactery 7 days later. If killed and phylactery has no",
	"  charge, I'm reanimated 7 days later as Demilich under GM's control",
	"I gain more boons and flaws as I gain levels (Recommended lvls 5, 11, and 17)",
];

FeatsList["lich level 1"] = {
	name: "Lich (Level 1)",
	source: [["GH", 47]],
	description:
		"I gain the Lich transformation, which grants me various boons and flaws as detailed below on the notes page. I can gain additional boons and flaws as I reach certain levels, or during level milestones (GM's discretion).",
	toNotesPage: [
		{
			name: "Lich",
			source: [["GH", 47]],
			note: desc(Lich1)
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
	scores: [0, 0, 0, 4, 2, 0],
	scoresmax: [0, 0, 0, 22, 22, 0],
	prerequisite: "Intelligence 16 or higher, ability to cast 7th level spells, complete the Ritual of Dread",
	prereqeval: function () {
		return Number(What("Int")) > 15;
	},
	savetxt: {
		text: ["Immune to aging effects"],
		immune: ["Spells and abilities that affect Undead of a certain CR"],
	},
	action: [["action", "Harvester of Souls (consume charge)"]],
};

var Lich2_PuppetMaster = [
	"\u25C6 >>Boon: Puppet Master<<",
	"  Undead crea. of CR 1 or less that I animate with spells or abilities become",
	"  permanently under my control. Other crea. cannot gain control of undead I raised",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My skin becomes rotten and pale, while my figure becomes gaunt and hunched.",
	"  I can hide this and appear as the humanoid I once were, but this requires conc.",
	"  Moments of stress can reveal my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
];

FeatsList["lich: puppet master (level 2)"] = {
	name: "Lich: Puppet Master (Level 2)",
	source: [["GH", 48]],
	description:
		"I gain the Puppet Master boon and Hideous Appearance flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 48]],
			note: desc(Lich2_PuppetMaster)
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
	prerequisite: "Lich Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("lich level 1") !== -1;
	},
};

var Lich2_LichdomArcane = [
	"\u25C6 >>Boon: Lichdom of the Arcane<<",
	"  When I kill a crea. with a spell, I can apply an additional effect depending",
	"  on dmg type. Effects with range are centered on the killed target:",
	"    \u2022 Fire: The space and each space w/in 5 ft are heavily obscured for 1 min.",
	"      Winds (10+ mph) disperse the cloud",
	"    \u2022 Necrotic: I regain hp = my Int mod (min 1) + my char. lvl",
	"    \u2022 Poison: Target crea. w/in 10 ft. They make a Con save or become poisoned",
	"      for 1 min",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My skin becomes rotten and pale, while my figure becomes gaunt and hunched.",
	"  I can hide this and appear as the humanoid I once were, but this requires conc.",
	"  Moments of stress can reveal my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
];

FeatsList["lich: lichdom of the arcane (level 2)"] = {
	name: "Lich: Lichdom of the Arcane (Level 2)",
	source: [["GH", 48]],
	description:
		"I gain the Lichdom of the Arcane boon and Hideous Appearance flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 48]],
			note: desc(Lich2_LichdomArcane)
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
	prerequisite: "Lich Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("lich level 1") !== -1;
	},
};

var Lich2_RiftDreadscapes = [
	"\u25C6 >>Boon: Rift to the Dreadscapes<<",
	"  I can open a rift to the Dreadscapes. As an action, I choose a point w/in",
	"  5 ft to open the rift. Once opened, the rift stretches out from that point",
	"  to a 20 ft rad sphere. When a crea. other than me enters the rift's area",
	"  for the first time on its turn, or starts its turn there, it must make a",
	"  Con save vs my Transformation DC. On a fail, it suffers 10d10 necrotic dmg,",
	"  or half on success. Undead are immune to dmg from this ability. The rift",
	"  remains open for 1 min, but closes if I become unconscious",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  My skin becomes rotten and pale, while my figure becomes gaunt and hunched.",
	"  I can hide this and appear as the humanoid I once were, but this requires conc.",
	"  Moments of stress can reveal my true nature, such as the following:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con",
	"  save with a DC of their choice. On a fail, I reveal my true form.",
	"  Non-evil crea. that see this are hostile to me, unless decided otherwise",
];

FeatsList["lich: rift to the dreadscapes (level 2)"] = {
	name: "Lich: Rift to the Dreadscapes (Level 2)",
	source: [["GH", 48]],
	description:
		"I gain the Rift to the Dreadscapes boon and Hideous Appearance flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 48]],
			note: desc(Lich2_RiftDreadscapes)
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
	prerequisite: "Lich Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("lich level 1") !== -1;
	},
	action: [["action", "Rift to the Dreadscapes"]],
	usages: 1,
	recovery: "long rest",
};

var Lich3_RelentlessUndead = [
	"\u25C6 >>Boon: Relentless Undead<<",
	"  When an undead crea. I control is reduced to 0 hp, it may immediately move",
	"  up to its full speed and make an atk action before dying. This has no effect",
	"  if the crea. is reduced to 0 hp by radiant dmg",
	"\u25C6 >>Flaw: Necromantic Dystrophy<<",
	"  My body is dependent on consuming souls. If I go more than 24 hrs without",
	"  converting 4 CR worth of souls from my Phylactery into spell slots, I gain:",
	"    \u2022 Cannot use dash, dodge, or disengage actions or bonus actions",
	"    \u2022 Cannot use my rea. to make opp. atks",
	"    \u2022 Cannot disguise my hideous form",
	"  Upon converting the required souls, I'm no longer affected",
];

FeatsList["lich: relentless undead (level 3)"] = {
	name: "Lich: Relentless Undead (Level 3)",
	source: [["GH", 49]],
	description:
		"I gain the Relentless Undead boon and Necromantic Dystrophy flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 49]],
			note: desc(Lich3_RelentlessUndead)
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
	prerequisite: "Lich Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lich level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lich: puppet master (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lich: lichdom of the arcane (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lich: rift to the dreadscapes (level 2)") !== -1)
		);
	},
};

var Lich3_ArcaneSupremacy = [
	"\u25C6 >>Boon: Arcane Supremacy<<",
	"  I become an exemplar of arcane power. When I cast a conc. spell, if I'm",
	"  already concentrating on one conc. spell, I don't lose conc. on that spell",
	"  instead I gain one lvl of exhaustion. If I'm already concentrating on more",
	"  than one spell, this has no effect. If I lose a third conc. spell during",
	"  this time, I lose conc. on one of the two spells",
	"\u25C6 >>Flaw: Necromantic Dystrophy<<",
	"  My body is dependent on consuming souls. If I go more than 24 hrs without",
	"  converting 4 CR worth of souls from my Phylactery into spell slots, I gain:",
	"    \u2022 Cannot use dash, dodge, or disengage actions or bonus actions",
	"    \u2022 Cannot use my rea. to make opp. atks",
	"    \u2022 Cannot disguise my hideous form",
	"  Upon converting the required souls, I'm no longer affected",
];

FeatsList["lich: arcane supremacy (level 3)"] = {
	name: "Lich: Arcane Supremacy (Level 3)",
	source: [["GH", 49]],
	description:
		"I gain the Arcane Supremacy boon and Necromantic Dystrophy flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 49]],
			note: desc(Lich3_ArcaneSupremacy)
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
	prerequisite: "Lich Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lich level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lich: puppet master (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lich: lichdom of the arcane (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lich: rift to the dreadscapes (level 2)") !== -1)
		);
	},
	usages: 1,
	recovery: "long rest",
};

var Lich3_StaffDreadscapes = [
	"\u25C6 >>Boon: Staff of the Dreadscapes<<",
	"  As an action, I summon a deathly staff made of blackened bone and twisted",
	"  rotwood. The staff is the same as a quarterstaff with the following:",
	"    \u2022 Necrotic dmg I deal ignores resistance to necrotic dmg",
	"    \u2022 My Spell Save DC and Transformation DC are both increased by 2",
	"    \u2022 Food and non-crea. plants the staff touches wither and decay",
	"  I can unsummon it at any time with an action. If I unwield it, it",
	"  immediately unsummons",
	"\u25C6 >>Flaw: Necromantic Dystrophy<<",
	"  My body is dependent on consuming souls. If I go more than 24 hrs without",
	"  converting 4 CR worth of souls from my Phylactery into spell slots, I gain:",
	"    \u2022 Cannot use dash, dodge, or disengage actions or bonus actions",
	"    \u2022 Cannot use my rea. to make opp. atks",
	"    \u2022 Cannot disguise my hideous form",
	"  Upon converting the required souls, I'm no longer affected",
];

FeatsList["lich: staff of the dreadscapes (level 3)"] = {
	name: "Lich: Staff of the Dreadscapes (Level 3)",
	source: [["GH", 49]],
	description:
		"I gain the Staff of the Dreadscapes boon and Necromantic Dystrophy flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 49]],
			note: desc(Lich3_StaffDreadscapes)
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
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*dreadscapes).*$/i,
		name: "Staff of the Dreadscapes",
		source: [["GH", 49]],
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type === "dc") return 2;
			},
			"If using the Staff of the Dreadscapes, my Spell Save DC and Transformation DC are both increased by 2.",
		],
	},
	prerequisite: "Lich Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lich level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lich: puppet master (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lich: lichdom of the arcane (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lich: rift to the dreadscapes (level 2)") !== -1)
		);
	},
	action: [
		["action", "Staff of the Dreadscapes (summon)"],
		["action", "Staff of the Dreadscapes (unsummon)"],
	],
};

var Lich4_LordUndeath = [
	"\u25C6 >>Boon: Lord of Undeath<<",
	"  When I reduce a humanoid to 0 hp, I can choose to reanimate it. If I do,",
	"  the crea. rises at the beginning of its next turn as a zombie permanently",
	"  under my control, following verbal commands to the best of its ability",
	"\u25C6 >>Flaw: Weight of Ages<<",
	"  The weight of time is degrading my Lich form. If I go more than 24 hrs",
	"  without converting 8 CR worth of souls from my Phylactery into spell slots:",
	"    \u2022 Cannot use the atk action",
	"    \u2022 If I move on my turn, I can't use bns action or rea. until next turn",
	"    \u2022 If I use bns action on my turn, my speed becomes 0 until next turn",
	"  Upon converting the required souls, I'm no longer affected",
];

FeatsList["lich: lord of undeath (level 4)"] = {
	name: "Lich: Lord of Undeath (Level 4)",
	source: [["GH", 49]],
	description:
		"I gain the Lord of Undeath boon and Weight of Ages flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 49]],
			note: desc(Lich4_LordUndeath)
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
	prerequisite: "Lich Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lich level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lich: relentless undead (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lich: arcane supremacy (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lich: staff of the dreadscapes (level 3)") !== -1)
		);
	},
};

var Lich4_ArcaneOmniscience = [
	"\u25C6 >>Boon: Arcane Omniscience<<",
	"  I've mastered the arcane arts. I know every spell from the wizard's spell",
	"  list and can prepare a number of these = my Int mod. Spells prepared this",
	"  way don't count towards max spells I can prepare. Upon completing a short",
	"  rest, I can change one or more of these prepared spells for another from",
	"  the wizard's spell list",
	"\u25C6 >>Flaw: Weight of Ages<<",
	"  The weight of time is degrading my Lich form. If I go more than 24 hrs",
	"  without converting 8 CR worth of souls from my Phylactery into spell slots:",
	"    \u2022 Cannot use the atk action",
	"    \u2022 If I move on my turn, I can't use bns action or rea. until next turn",
	"    \u2022 If I use bns action on my turn, my speed becomes 0 until next turn",
	"  Upon converting the required souls, I'm no longer affected",
];

FeatsList["lich: arcane omniscience (level 4)"] = {
	name: "Lich: Arcane Omniscience (Level 4)",
	source: [["GH", 49]],
	description:
		"I gain the Arcane Omniscience boon and Weight of Ages flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 49]],
			note: desc(Lich4_ArcaneOmniscience)
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
	prerequisite: "Lich Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lich level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lich: relentless undead (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lich: arcane supremacy (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lich: staff of the dreadscapes (level 3)") !== -1)
		);
	},
	eval: function () {
		CurrentSpells["arcane omniscience"] = {
			name: "Arcane Omniscience",
			source: [["GH", 49]],
			ability: 4,
			list: {
				class: "wizard",
				level: [0, 9],
			},
			known: { spells: "book" },
			refType: "feat",
		};
		SetStringifieds("spells");
		CurrentUpdates.types.push("spells");
	},
	removeeval: function () {
		delete CurrentSpells["arcane omniscience"];
		SetStringifieds("spells");
		CurrentUpdates.types.push("spells");
	},
};

var Lich4_DeathlyBeing = [
	"\u25C6 >>Boon: Deathly Being<<",
	"  I'm immune to poison, bludg., pierce., and slash. dmg from non-magical",
	"  atks. I can't become charmed, poisoned, paralysed, or frightened",
	"\u25C6 >>Flaw: Weight of Ages<<",
	"  The weight of time is degrading my Lich form. If I go more than 24 hrs",
	"  without converting 8 CR worth of souls from my Phylactery into spell slots:",
	"    \u2022 Cannot use the atk action",
	"    \u2022 If I move on my turn, I can't use bns action or rea. until next turn",
	"    \u2022 If I use bns action on my turn, my speed becomes 0 until next turn",
	"  Upon converting the required souls, I'm no longer affected",
];

FeatsList["lich: deathly being (level 4)"] = {
	name: "Lich: Deathly Being (Level 4)",
	source: [["GH", 50]],
	description:
		"I gain the Deathly Being boon and Weight of Ages flaw for the Lich transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 50]],
			note: desc(Lich4_DeathlyBeing)
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
	prerequisite: "Lich Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lich level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lich: relentless undead (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lich: arcane supremacy (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lich: staff of the dreadscapes (level 3)") !== -1)
		);
	},
	savetxt: {
		immune: [
			"charmed",
			"poisoned",
			"paralysed",
			"frightened",
			"poison, bludg., pierce., and slash. dmg from non-magical atks",
		],
	},
};

var Lycanthrope1 = [
	"\u25C6 >>Boon: Hybrid Transformation<<",
	"  As an action, I transform into hybrid form. While transformed, the following apply:",
	"    \u2022 I can't cast spells or concentrate on spells. I can only speak in short,",
	"      guttural responses",
	"    \u2022 My stats remain the same as my humanoid stats",
	"    \u2022 Armor merges into my Hybrid Form or drops to the ground (GM decides if",
	"      armor is too large to merge)",
	"    \u2022 While transformed and not wearing armor or using a shield, my AC = 10 +",
	"      Con mod + Dex mod",
	"    \u2022 I can use weapons and equipment as normal unless specified otherwise",
	"    \u2022 I roll d6 in place of normal dmg for unarmed strikes. Atks with claws",
	"      deal slash. dmg instead of bludg. dmg",
	"    \u2022 When making the atk action, I can substitute one atk to make an unarmed",
	"      bite atk. On hit, I deal pierce. dmg = 1d8 + Str mod. If I make a bite",
	"      atk, I can't make another until the start of my next turn",
	"    \u2022 As a bns action, I can make an unarmed claw or bite atk if I haven't",
	"      already used my bns action",
	"  My hybrid form lasts for hours = Con mod (min 1) and ends early if I'm knocked",
	"  unconscious or reduced to 0 hp. I can end my Hybrid Form by using an action",
	"  on my turn",
	"\u25C6 >>Boon: Shapechanger's Form<<",
	"  My Str score increases by 2 and my Con score increases by 1 (max 16)",
	"\u25C6 >>Flaw: Lust for the Hunt<<",
	"  The savage nature of my curse causes me to lose control. When in hybrid form,",
	"  I must succeed at a DC 10 Wis save at the start of each turn or lose control.",
	"  If in the light of a full moon, I automatically fail this save. On fail, I'm",
	"  subjected to the following until I succeed:",
	"    \u2022 I must move toward the closest non-player crea. I can see, smell or",
	"      hear, prioritising helpless crea. If I end my movement and no non-player",
	"      crea. is w/in 5 ft of me, I must use my action to dash toward one",
	"    \u2022 If a non-player crea. is w/in 5 ft of me and I haven't used my action,",
	"      I must make a melee atk vs it, prioritising helpless crea.",
	"    \u2022 If I made a melee atk vs a crea. and that crea. is still alive, I must",
	"      use my bns action to make an unarmed claw or bite atk vs that crea.",
	"  Additionally, if subjected to the light of a full moon, I must succeed at a DC 20",
	"  Wis save or automatically turn into my hybrid form and can't transform back until",
	"  dawn. If I succeed, I'm immune to its effects for 24 hrs",
	"I gain more boons and flaws as I gain levels (Recommended lvls 5, 11, and 17)",
];

FeatsList["lycanthrope level 1"] = {
	name: "Lycanthrope (Level 1)",
	source: [["GH", 53]],
	description:
		"I gain the Lycanthrope transformation, which grants me various boons and flaws as detailed below on the notes page. I can gain additional boons and flaws as I reach certain levels, or during level milestones (GM's discretion).",
	toNotesPage: [
		{
			name: "Lycanthrope",
			source: [["GH", 53]],
			note: desc(Lycanthrope1)
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
	scorestxt: "+2 Str, +1 Con (max 16)",
	prerequisite: "Strength 13 or higher",
	prereqeval: function () {
		return Number(What("Str")) > 12;
	},
	action: [["action", "Hybrid Transformation (transform/end)"]],
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*(hybrid|lycanthrope))(?=.*(claw)).*$/i,
			name: "Hybrid Claws",
			source: [["GH", 53]],
			damage: [1, 6, "slashing"],
			selectNow: true,
		},
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*(hybrid|lycanthrope))(?=.*(bite)).*$/i,
			name: "Hybrid Bite",
			source: [["GH", 53]],
			ability: 1,
			damage: [1, 8, "piercing"],
			description: "Can't make another bite until my next SOT",
			selectNow: true,
		},
	],
	armorOptions: [
		{
			regExpSearch: /^(?=.*(hybrid|lycanthrope))(?=.*(unarmored)).*$/i,
			name: "Hybrid Unarmored (Con)",
			source: [["GH", 53]],
			type: "natural",
			ac: "10+Con",
			selectNow: true,
		},
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName === "unarmed strike" && (fields.Damage_Die === 1 || fields.Damage_Die === "1d4")) {
					fields.Damage_Die = "1d6";
				}
			},
		],
	},
};

var Lycanthrope2_IronPelt = [
	"\u25C6 >>Boon: Iron Pelt<<",
	"  While in hybrid form, I have resistance to bludg., pierce., and slash. dmg",
	"  from non-silvered, non-magical sources",
	"\u25C6 >>Flaw: Silver Sensitivity<<",
	"  While in Hybrid or Kindred form, I have vulnerability to silvered wea. In",
	"  addition, I can't have resistance to atks made with a silvered wea.",
];

FeatsList["lycanthrope: iron pelt (level 2)"] = {
	name: "Lycanthrope: Iron Pelt (Level 2)",
	source: [["GH", 54]],
	description:
		"I gain the Iron Pelt boon and Silver Sensitivity flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 54]],
			note: desc(Lycanthrope2_IronPelt)
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
	prerequisite: "Lycanthrope Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("lycanthrope level 1") !== -1;
	},
	dmgres: [
		["Bludgeoning", "Bludg. (non-silver, non-magic)"],
		["Piercing", "Pierce. (non-silver, non-magic)"],
		["Slashing", "Slash. (non-silver, non-magic)"],
	],
};

var Lycanthrope2_HuntersHowl = [
	"\u25C6 >>Boon: Hunter's Howl<<",
	"  While in hybrid form, I can use a bns action to let out a loud howl and mark",
	"  a crea. w/in 60 ft as my prey. A crea. remains marked this way for 1 hr or",
	"  until it dies. While marked as my prey, I gain the following:",
	"    \u2022 When I hit the marked crea. with a melee atk, I deal an additional",
	"      1d6 dmg. This dmg is the same type as the atk",
	"    \u2022 I have adv. on Wis (Perception) or Wis (Survival) checks I make to",
	"      track my prey",
	"  I can use this feature a number of times = Str mod (min 1). I regain all",
	"  expended uses upon a short or long rest",
	"\u25C6 >>Flaw: Silver Sensitivity<<",
	"  While in Hybrid or Kindred form, I have vulnerability to silvered wea. In",
	"  addition, I can't have resistance to atks made with a silvered wea.",
];

FeatsList["lycanthrope: hunter's howl (level 2)"] = {
	name: "Lycanthrope: Hunter's Howl (Level 2)",
	source: [["GH", 54]],
	description:
		"I gain the Hunter's Howl boon and Silver Sensitivity flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 54]],
			note: desc(Lycanthrope2_HuntersHowl)
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
	prerequisite: "Lycanthrope Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("lycanthrope level 1") !== -1;
	},
	action: [["bonus action", "Hunter's Howl"]],
	usages: "Strength modifier per ",
	usagescalc: "event.value = Math.max(1, What('Str Mod'));",
	recovery: "short rest",
};

var Lycanthrope2_KindredForm = [
	"\u25C6 >>Boon: Kindred Form<<",
	"  I gain the ability to transform into the animal form representative of my",
	"  Lycanthropy type, known as my Kindred Form. I follow the same rules as the",
	"  Hybrid Transformation feature and any feature that specifies the hybrid",
	"  transformation, unless specified otherwise. I can only transform into the",
	"  kindred form representative of my Lycanthropy. Each Kindred Form gains the",
	"  following:",
	"    \u2022 I can't speak",
	"    \u2022 I can't take any actions requiring hands, except my Transformation",
	"      capabilities",
	"    \u2022 I can only use unarmed claw and bite atks",
	"  Other than being larger, I'm indistinguishable from a regular animal of my",
	"  Kindred Form",
	"  >>Kindred Form - Bear<<",
	"    \u2022 I can speak to and understand other bears",
	"    \u2022 When I make any save, I can add my Con mod to the result",
	"    \u2022 My hp max increases by 15 hp",
	"  >>Kindred Form - Wolf<<",
	"    \u2022 I can speak to and understand other wolves",
	"    \u2022 When making an atk vs a crea., if an ally is w/in 5 ft of that crea.",
	"      and not incapacitated, I have adv. on that atk roll",
	"    \u2022 My spd increases by 20 ft, to a max of 60 ft",
	"  I automatically succeed at all saves relating to the Lust for the Hunt flaw",
	"\u25C6 >>Flaw: Silver Sensitivity<<",
	"  While in Hybrid or Kindred form, I have vulnerability to silvered wea. In",
	"  addition, I can't have resistance to atks made with a silvered wea.",
];

FeatsList["lycanthrope: kindred form (level 2)"] = {
	name: "Lycanthrope: Kindred Form (Level 2)",
	source: [["GH", 54]],
	description:
		"I gain the Kindred Form boon and Silver Sensitivity flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 54]],
			note: desc(Lycanthrope2_KindredForm)
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
	prerequisite: "Lycanthrope Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("lycanthrope level 1") !== -1;
	},
	choices: ["Bear", "Wolf"],
	bear: {
		name: "Lycanthrope: Kindred Form - Bear (Level 2)",
		description: "I gain Kindred Form (Bear) boon and Silver Sensitivity flaw",
	},
	wolf: {
		name: "Lycanthrope: Kindred Form - Wolf (Level 2)",
		description: "I gain Kindred Form (Wolf) boon and Silver Sensitivity flaw",
		speed: { walk: { spd: "+20", enc: "+20" } },
	},
};

var Lycanthrope3_TitanicVigor = [
	"\u25C6 >>Boon: Titanic Vigor<<",
	"  My hp max increases by an amount = twice my char. lvl, and it increases by 2",
	"  every time I gain a char. lvl. Additionally, when in hybrid form, I gain 5",
	"  temp hp at the start of my turn",
	"\u25C6 >>Flaw: Silver Sensitivity<<",
	"  While in Hybrid or Kindred form, I have vulnerability to silvered wea. In",
	"  addition, I can't have resistance to atks made with a silvered wea.",
];

FeatsList["lycanthrope: titanic vigor (level 3)"] = {
	name: "Lycanthrope: Titanic Vigor (Level 3)",
	source: [["GH", 55]],
	description:
		"I gain the Titanic Vigor boon and Silver Sensitivity flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 55]],
			note: desc(Lycanthrope3_TitanicVigor)
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
	prerequisite: "Lycanthrope Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lycanthrope level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lycanthrope: iron pelt (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lycanthrope: hunter's howl (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lycanthrope: kindred form (level 2)") !== -1)
		);
	},
	calcChanges: {
		hp: function (totalHD, HDobj, prefix) {
			return [(classes.totallevel ? classes.totallevel : 0) * 2, "Titanic Vigor (2\u00BD character level)"];
		},
	},
};

var Lycanthrope3_PredatoryLeap = [
	"\u25C6 >>Boon: Predatory Leap<<",
	"  My jump distance is doubled. In addition, in hybrid form, if I jumped more",
	"  than 5 ft and land w/in 5 ft of a crea., I can immediately take the atk",
	"  action to atk that crea. On a hit, the target must make a Str save or become",
	"  prone on a failed save. I can decide to automatically grapple the target if",
	"  they fail their save",
	"\u25C6 >>Flaw: Silver Sensitivity<<",
	"  While in Hybrid or Kindred form, I have vulnerability to silvered wea. In",
	"  addition, I can't have resistance to atks made with a silvered wea.",
];

FeatsList["lycanthrope: predatory leap (level 3)"] = {
	name: "Lycanthrope: Predatory Leap (Level 3)",
	source: [["GH", 55]],
	description:
		"I gain the Predatory Leap boon and Silver Sensitivity flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 55]],
			note: desc(Lycanthrope3_PredatoryLeap)
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
	prerequisite: "Lycanthrope Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lycanthrope level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lycanthrope: iron pelt (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lycanthrope: hunter's howl (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("lycanthrope: kindred form (level 2)") !== -1)
		);
	},
};

var Lycanthrope4_BestialSavagery = [
	"\u25C6 >>Boon: Bestial Savagery<<",
	"  While in Hybrid Form, I gain the following:",
	"    \u2022 My unarmed atks deal 1d8 slash. dmg and are considered magic atks",
	"    \u2022 My AC increases by 1",
	"    \u2022 I'm immune to the charmed and frightened conditions",
	"\u25C6 >>Flaw: Predatory Nature<<",
	"  The beast w/in has gained more control of my body than I have. While I can",
	"  control it at times, I know it can't be contained forever, and when it breaks",
	"  free, it will delight in any slaughter it can find. I gain the following:",
	"    \u2022 If I can see, hear or smell a helpless crea., I gain disadv. on all",
	"      Wis saves",
	"    \u2022 At the start of my turn, if I can see, hear or smell a hostile or",
	"      helpless non-player crea., I must succeed at a DC 10 Wis save or be",
	"      transformed into my Hybrid Form. If I succeed this save, I become immune",
	"      to this effect until dawn",
	"    \u2022 Whenever I kill a crea. and I'm in my Hybrid Form, I can't transform",
	"      back into my humanoid form until dawn the next day. Although I can",
	"      transform into my Kindred Form",
];

FeatsList["lycanthrope: bestial savagery (level 4)"] = {
	name: "Lycanthrope: Bestial Savagery (Level 4)",
	source: [["GH", 56]],
	description:
		"I gain the Bestial Savagery boon and Predatory Nature flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 56]],
			note: desc(Lycanthrope4_BestialSavagery)
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
	prerequisite: "Lycanthrope Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lycanthrope level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lycanthrope: titanic vigor (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lycanthrope: predatory leap (level 3)") !== -1)
		);
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (
					v.baseWeaponName === "unarmed strike" &&
					(fields.Damage_Die === 1 || fields.Damage_Die === "1d4" || fields.Damage_Die === "1d6")
				) {
					fields.Damage_Die = "1d8";
				}
			},
		],
	},
	savetxt: { immune: ["charmed (in hybrid)", "frightened (in hybrid)"] },
};

var Lycanthrope4_UnstoppableRage = [
	"\u25C6 >>Boon: Unstoppable Rage<<",
	"  When I'm reduced to 0 hp and I'm not killed outright, I'm not knocked",
	"  unconscious. I can take my future turns as though I were not at 0 hp and are",
	"  affected by all spells, abilities and features as normal. While I have 0 hp,",
	"  taking dmg causes death save failures as normal, and three death save failures",
	"  can still kill me",
	"\u25C6 >>Flaw: Predatory Nature<<",
	"  The beast w/in has gained more control of my body than I have. While I can",
	"  control it at times, I know it can't be contained forever, and when it breaks",
	"  free, it will delight in any slaughter it can find. I gain the following:",
	"    \u2022 If I can see, hear or smell a helpless crea., I gain disadv. on all",
	"      Wis saves",
	"    \u2022 At the start of my turn, if I can see, hear or smell a hostile or",
	"      helpless non-player crea., I must succeed at a DC 10 Wis save or be",
	"      transformed into my Hybrid Form. If I succeed this save, I become immune",
	"      to this effect until dawn",
	"    \u2022 Whenever I kill a crea. and I'm in my Hybrid Form, I can't transform",
	"      back into my humanoid form until dawn the next day. Although I can",
	"      transform into my Kindred Form",
];

FeatsList["lycanthrope: unstoppable rage (level 4)"] = {
	name: "Lycanthrope: Unstoppable Rage (Level 4)",
	source: [["GH", 56]],
	description:
		"I gain the Unstoppable Rage boon and Predatory Nature flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 56]],
			note: desc(Lycanthrope4_UnstoppableRage)
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
	prerequisite: "Lycanthrope Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lycanthrope level 1") !== -1 &&
			(CurrentFeats.known.indexOf("lycanthrope: titanic vigor (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("lycanthrope: predatory leap (level 3)") !== -1)
		);
	},
};

var Lycanthrope4_KindredAffinity = [
	"\u25C6 >>Boon: Kindred Affinity<<",
	"  Prerequisite: Kindred Form Transformation feature",
	"  I've reached true harmony with my Kindred Form, achieving a state of peace",
	"  most Lycanthropes never find. I gain the following while in my Kindred Form:",
	"    \u2022 I can speak",
	"    \u2022 I can cast spells w/out needing to provide their verbal or somatic",
	"      components. Additionally, I can cast spells w/out needing to provide",
	"      material components, provided they do not have a gold cost",
	"    \u2022 Friendly crea. w/in 20 ft of me have adv. on Wis ability checks and",
	"      saves",
	"\u25C6 >>Flaw: Predatory Nature<<",
	"  The beast w/in has gained more control of my body than I have. While I can",
	"  control it at times, I know it can't be contained forever, and when it breaks",
	"  free, it will delight in any slaughter it can find. I gain the following:",
	"    \u2022 If I can see, hear or smell a helpless crea., I gain disadv. on all",
	"      Wis saves",
	"    \u2022 At the start of my turn, if I can see, hear or smell a hostile or",
	"      helpless non-player crea., I must succeed at a DC 10 Wis save or be",
	"      transformed into my Hybrid Form. If I succeed this save, I become immune",
	"      to this effect until dawn",
	"    \u2022 Whenever I kill a crea. and I'm in my Hybrid Form, I can't transform",
	"      back into my humanoid form until dawn the next day. Although I can",
	"      transform into my Kindred Form",
];

FeatsList["lycanthrope: kindred affinity (level 4)"] = {
	name: "Lycanthrope: Kindred Affinity (Level 4)",
	source: [["GH", 56]],
	description:
		"I gain the Kindred Affinity boon and Predatory Nature flaw for the Lycanthrope transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 56]],
			note: desc(Lycanthrope4_KindredAffinity)
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
	prerequisite: "Lycanthrope Level 1 and Kindred Form",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("lycanthrope level 1") !== -1 &&
			CurrentFeats.known.indexOf("lycanthrope: kindred form (level 2)") !== -1
		);
	},
};

var Seraph1 = [
	"\u25C6 >>Boon: Celestial Form<<",
	"  My Wis increases by 2 and my Con by 1 (max 16). I become a Celestial in addition",
	"  to any other crea. types. Spells and abilities that affect Celestials of a certain",
	"  CR have no effect on me",
	"\u25C6 >>Boon: Angelic Wings<<",
	"  I have manifested feathered wings and have a fly speed = my normal speed. I can't",
	"  wear armor or clothing that has not been modified to accommodate my wings",
	"\u25C6 >>Flaw: Planar Binding<<",
	"  My body and soul are bound to a divine plane of existence. I have disadv. on death",
	"  saving throws as the plane attempts to pull me back to it. If I would be killed,",
	"  my soul has been taken back to a plane of existence of the GM's choice. This plane",
	"  is my new home, and I become an NPC under the GM's control",
	"  If I'm on the divine plane responsible for my transformation, this flaw has no effect",
	"I gain more boons and flaws as I gain levels (Recommended lvls 5, 11, and 17)",
];

FeatsList["seraph level 1"] = {
	name: "Seraph (Level 1)",
	source: [["GH", 59]],
	description:
		"I gain the Seraph transformation, which grants me various boons and flaws as detailed below on the notes page. I can gain additional boons and flaws as I reach certain levels, or during level milestones (GM's discretion).",
	toNotesPage: [
		{
			name: "Seraph",
			source: [["GH", 59]],
			note: desc(Seraph1)
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
	scorestxt: "+2 Wis, +1 Con (max 16)",
	prerequisite: "Wisdom 13 or higher",
	prereqeval: function () {
		return Number(What("Wis")) > 12;
	},
	speed: {
		fly: { spd: "walk", enc: "walk" },
	},
	savetxt: { text: ["Disadv. on death saves (Planar Binding)"] },
};

var Seraph2_DivineRetribution = [
	"\u25C6 >>Boon: Divine Retribution<<",
	"  When I or an allied crea. I can see w/in 30 ft takes the atk action, I can use",
	"  my rea. to imbue them with holy zeal. Immediately after the target completes the",
	"  atk action, they can make an additional atk as a bns action. On a hit, the hit",
	"  target takes an additional 1d8 radiant dmg. I can use this a number of times",
	"  = my Wis mod (min 1). I regain all uses when I finish a long rest",
	"\u25C6 >>Flaw: Divine Appearance<<",
	"  My appearance has radically transformed. My body radiates a divine glow, while",
	"  my wings are prominent and powerful appendages. I can contain this form and present",
	"  the appearance of the humanoid I once were, but this is taxing and requires conc.",
	"  Moments of stress are likely to reveal my true nature. In the following situations,",
	"  my true form is revealed:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering desecrated ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con save with a DC",
	"  of their choosing to see if I maintain my humanoid form. Evil humanoid crea. that",
	"  witness or hear about my true form become instantly hostile to me and are compelled",
	"  by malice to destroy me, unless the GM decides otherwise",
	"  If the crea. is scared of me or decides I'm too powerful to fight, it will attempt",
	"  to harm me in another way, but won't give up on destroying me",
];

FeatsList["seraph: divine retribution (level 2)"] = {
	name: "Seraph: Divine Retribution (Level 2)",
	source: [["GH", 59]],
	description:
		"I gain the Divine Retribution boon and Divine Appearance flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 59]],
			note: desc(Seraph2_DivineRetribution)
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
	prerequisite: "Seraph Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("seraph level 1") !== -1;
	},
	action: [["reaction", "Divine Retribution"]],
	usages: "Wisdom modifier per ",
	usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
	recovery: "long rest",
};

var Seraph2_DivineClemency = [
	"\u25C6 >>Boon: Divine Clemency<<",
	"  When I or a crea. I can see w/in 60 ft takes dmg, I can use my rea. to cast a",
	"  spell of 1st lvl or higher. This spell must target the damaged crea. and restore",
	"  hp to it. I can use this a number of times = my Wis mod (min 1). I regain all",
	"  uses when I finish a long rest",
	"\u25C6 >>Flaw: Divine Appearance<<",
	"  My appearance has radically transformed. My body radiates a divine glow, while",
	"  my wings are prominent and powerful appendages. I can contain this form and present",
	"  the appearance of the humanoid I once were, but this is taxing and requires conc.",
	"  Moments of stress are likely to reveal my true nature. In the following situations,",
	"  my true form is revealed:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering desecrated ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con save with a DC",
	"  of their choosing to see if I maintain my humanoid form. Evil humanoid crea. that",
	"  witness or hear about my true form become instantly hostile to me and are compelled",
	"  by malice to destroy me, unless the GM decides otherwise",
	"  If the crea. is scared of me or decides I'm too powerful to fight, it will attempt",
	"  to harm me in another way, but won't give up on destroying me",
];

FeatsList["seraph: divine clemency (level 2)"] = {
	name: "Seraph: Divine Clemency (Level 2)",
	source: [["GH", 60]],
	description:
		"I gain the Divine Clemency boon and Divine Appearance flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 60]],
			note: desc(Seraph2_DivineClemency)
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
	prerequisite: "Seraph Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("seraph level 1") !== -1;
	},
	action: [["reaction", "Divine Clemency"]],
	usages: "Wisdom modifier per ",
	usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
	recovery: "long rest",
};

var Seraph2_DivineExpedition = [
	"\u25C6 >>Boon: Divine Expedition<<",
	"  At the beginning of another crea's turn, I can use my rea. to move myself up to",
	"  my spd or allow an ally that I can see, w/in 60 ft, to move up to their spd.",
	"  Movement made this way doesn't cause atks of opportunity. I can use this a number",
	"  of times = my Wis mod (min 1). I regain all uses when I finish a long rest",
	"\u25C6 >>Flaw: Divine Appearance<<",
	"  My appearance has radically transformed. My body radiates a divine glow, while",
	"  my wings are prominent and powerful appendages. I can contain this form and present",
	"  the appearance of the humanoid I once were, but this is taxing and requires conc.",
	"  Moments of stress are likely to reveal my true nature. In the following situations,",
	"  my true form is revealed:",
	"    \u2022 Concentrating on a spell",
	"    \u2022 Gaining the unconscious condition",
	"    \u2022 Entering desecrated ground",
	"    \u2022 Choosing to reveal myself",
	"  In extreme emotional or physical stress, the GM may call for a Con save with a DC",
	"  of their choosing to see if I maintain my humanoid form. Evil humanoid crea. that",
	"  witness or hear about my true form become instantly hostile to me and are compelled",
	"  by malice to destroy me, unless the GM decides otherwise",
	"  If the crea. is scared of me or decides I'm too powerful to fight, it will attempt",
	"  to harm me in another way, but won't give up on destroying me",
];

FeatsList["seraph: divine expedition (level 2)"] = {
	name: "Seraph: Divine Expedition (Level 2)",
	source: [["GH", 60]],
	description:
		"I gain the Divine Expedition boon and Divine Appearance flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 60]],
			note: desc(Seraph2_DivineExpedition)
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
	prerequisite: "Seraph Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("seraph level 1") !== -1;
	},
	action: [["reaction", "Divine Expedition"]],
	usages: "Wisdom modifier per ",
	usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
	recovery: "long rest",
};

var Seraph3_RadiantStrike = [
	"\u25C6 >>Boon: Radiant Strike<<",
	"  Whenever I hit a target with a melee atk, I deal an additional 1d6 radiant dmg",
	"  to the target. This dmg increases to 2d6 if the target is a Fiend, Fey, or Undead",
	"\u25C6 >>Flaw: Beacon to Darkness<<",
	"  I've become a Seraph of noted virtue and divinity. This has made me a target for",
	"  all that is dark in the world. Whenever I or an ally w/in 30 ft commits an act",
	"  of greater evil, such as murdering a helpless innocent, a small amount of darkness",
	"  attaches itself to me, and I gain 1 corruption point (max 5). Whether the act",
	"  constitutes greater evil is determined by the GM. Whenever I make an atk roll",
	"  against an evil crea., or make a saving throw against a spell or ability from an",
	"  evil crea., subtract the number of corruption points I have from the roll. Whenever",
	"  I complete a short or long rest, and have prayed for at least 1 hr, I can reduce",
	"  the number of corruption points I have by 1",
];

FeatsList["seraph: radiant strike (level 3)"] = {
	name: "Seraph: Radiant Strike (Level 3)",
	source: [["GH", 60]],
	description:
		"I gain the Radiant Strike boon and Beacon to Darkness flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 60]],
			note: desc(Seraph3_RadiantStrike)
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
	prerequisite: "Seraph Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("seraph level 1") !== -1 &&
			(CurrentFeats.known.indexOf("seraph: divine retribution (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: divine clemency (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: divine expedition (level 2)") !== -1)
		);
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isMeleeWeapon) {
					fields.Description += (fields.Description ? "; " : "") + "+1d6 rad dmg (+2d6 vs Fiend/Fey/Undead)";
				}
			},
			"My melee attacks deal an additional 1d6 radiant damage (2d6 vs Fiend, Fey, or Undead).",
		],
	},
};

var Seraph3_CleanseAffliction = [
	"\u25C6 >>Boon: Cleanse Affliction<<",
	"  When I cast a spell that restores hp to an ally, I can also remove one condition",
	"  being inflicted on them by a spell or ability. Once a crea. has benefited from",
	"  this feature, they can't benefit from it again until they have completed a long rest",
	"\u25C6 >>Flaw: Beacon to Darkness<<",
	"  I've become a Seraph of noted virtue and divinity. This has made me a target for",
	"  all that is dark in the world. Whenever I or an ally w/in 30 ft commits an act",
	"  of greater evil, such as murdering a helpless innocent, a small amount of darkness",
	"  attaches itself to me, and I gain 1 corruption point (max 5). Whether the act",
	"  constitutes greater evil is determined by the GM. Whenever I make an atk roll",
	"  against an evil crea., or make a saving throw against a spell or ability from an",
	"  evil crea., subtract the number of corruption points I have from the roll. Whenever",
	"  I complete a short or long rest, and have prayed for at least 1 hr, I can reduce",
	"  the number of corruption points I have by 1",
];

FeatsList["seraph: cleanse affliction (level 3)"] = {
	name: "Seraph: Cleanse Affliction (Level 3)",
	source: [["GH", 60]],
	description:
		"I gain the Cleanse Affliction boon and Beacon to Darkness flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 60]],
			note: desc(Seraph3_CleanseAffliction)
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
	prerequisite: "Seraph Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("seraph level 1") !== -1 &&
			(CurrentFeats.known.indexOf("seraph: divine retribution (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: divine clemency (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: divine expedition (level 2)") !== -1)
		);
	},
};

var Seraph4_BowCelestialJudgement = [
	"\u25C6 >>Boon: Bow of Celestial Judgement<<",
	"  I can use a bns action to summon a powerful bow made of divine light. The bow",
	"  is the same as a longbow, except atks made with it deal radiant dmg and have",
	"  the following features:",
	"    \u2022 The bow doesn't use ammunition. Instead, when the wielder draws the bowstring,",
	"      an ethereal arrow of radiant light forms",
	"    \u2022 Atks with the bow deal an additional 1d8 radiant dmg. Against fiends, fey",
	"      and undead, the bow deals an additional 2d8 radiant dmg instead",
	"    \u2022 The bow's radiant form emits bright light in a 5-ft rad and dim light for",
	"      an additional 5 ft",
	"  I can unsummon the bow at any time with the use of an action. If I unwield the",
	"  bow, it immediately unsummons",
	"\u25C6 >>Flaw: Pull of the Empyrean<<",
	"  My new native plane attempts to draw me to it, laying claim to my form. Whenever",
	"  I roll a nat 1 for a saving throw against a magical spell or ability, I take 1d6",
	"  force dmg per 2 class lvls in addition to any other dmg or effects I would suffer,",
	"  as my native plane attempts to unbind me from the material plane. For example,",
	"  a 6th lvl Fighter would take 3d6 force dmg. This dmg ignores resistances and",
	"  immunities",
];

FeatsList["seraph: bow of celestial judgement (level 4)"] = {
	name: "Seraph: Bow of Celestial Judgement (Level 4)",
	source: [["GH", 61]],
	description:
		"I gain the Bow of Celestial Judgement boon and Pull of the Empyrean flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 61]],
			note: desc(Seraph4_BowCelestialJudgement)
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
	prerequisite: "Seraph Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("seraph level 1") !== -1 &&
			(CurrentFeats.known.indexOf("seraph: radiant strike (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: cleanse affliction (level 3)") !== -1)
		);
	},
	action: [
		["bonus action", "Bow of Celestial Judgement (summon)"],
		["action", "Bow of Celestial Judgement (unsummon)"],
	],
	weaponOptions: [
		{
			baseWeapon: "longbow",
			regExpSearch: /^(?=.*bow)(?=.*(celestial|judgement)).*$/i,
			name: "Bow of Celestial Judgement",
			source: [["GH", 61]],
			damage: [1, 8, "radiant"],
			description:
				"+1d8 radiant dmg (+2d8 vs Fiend/Fey/Undead); Bright light 5 ft, dim light 5 ft; No ammo needed",
			selectNow: true,
		},
	],
};

var Seraph4_AuraHolyPurge = [
	"\u25C6 >>Boon: Aura of Holy Purge<<",
	"  I emit an aura of righteous fervour. This aura radiates up to 20 ft from me",
	"  while I'm conscious. When I or an ally w/in range of my aura hits a hostile crea.,",
	"  they can choose for that hit to be a crit. hit instead. Once a crea. has benefited",
	"  from this feature, they can't benefit from it again until they have completed a",
	"  long rest",
	"\u25C6 >>Flaw: Pull of the Empyrean<<",
	"  My new native plane attempts to draw me to it, laying claim to my form. Whenever",
	"  I roll a nat 1 for a saving throw against a magical spell or ability, I take 1d6",
	"  force dmg per 2 class lvls in addition to any other dmg or effects I would suffer,",
	"  as my native plane attempts to unbind me from the material plane. For example,",
	"  a 6th lvl Fighter would take 3d6 force dmg. This dmg ignores resistances and",
	"  immunities",
];

FeatsList["seraph: aura of holy purge (level 4)"] = {
	name: "Seraph: Aura of Holy Purge (Level 4)",
	source: [["GH", 61]],
	description:
		"I gain the Aura of Holy Purge boon and Pull of the Empyrean flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 61]],
			note: desc(Seraph4_AuraHolyPurge)
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
	prerequisite: "Seraph Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("seraph level 1") !== -1 &&
			(CurrentFeats.known.indexOf("seraph: radiant strike (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: cleanse affliction (level 3)") !== -1)
		);
	},
};

var Seraph4_AuraMercifulBlessing = [
	"\u25C6 >>Boon: Aura of Merciful Blessing<<",
	"  I emit an aura of invigoration and fortitude. This aura radiates up to 20 ft",
	"  from me while I'm conscious. When I or an ally w/in range of my aura is reduced",
	"  to 0 hp, they're reduced to 1 hp instead. Once a crea. has benefited from this",
	"  feature, they can't benefit again until they have completed a long rest",
	"\u25C6 >>Flaw: Pull of the Empyrean<<",
	"  My new native plane attempts to draw me to it, laying claim to my form. Whenever",
	"  I roll a nat 1 for a saving throw against a magical spell or ability, I take 1d6",
	"  force dmg per 2 class lvls in addition to any other dmg or effects I would suffer,",
	"  as my native plane attempts to unbind me from the material plane. For example,",
	"  a 6th lvl Fighter would take 3d6 force dmg. This dmg ignores resistances and",
	"  immunities",
];

FeatsList["seraph: aura of merciful blessing (level 4)"] = {
	name: "Seraph: Aura of Merciful Blessing (Level 4)",
	source: [["GH", 61]],
	description:
		"I gain the Aura of Merciful Blessing boon and Pull of the Empyrean flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 61]],
			note: desc(Seraph4_AuraMercifulBlessing)
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
	prerequisite: "Seraph Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("seraph level 1") !== -1 &&
			(CurrentFeats.known.indexOf("seraph: radiant strike (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: cleanse affliction (level 3)") !== -1)
		);
	},
};

var Seraph4_AuraEmpyrealValor = [
	"\u25C6 >>Boon: Aura of Empyreal Valor<<",
	"  I emit an aura of swiftness and bravery. This aura radiates up to 20 ft from me",
	"  while I'm conscious. When I or an ally w/in range of my aura makes a Dex ability",
	"  check to determine initiative, they can add +5 to the result. In addition, on",
	"  that crea's turn they gain adv. on atk rolls against any crea. that hasn't taken",
	"  a turn in the combat yet. Once a crea. has benefited from this feature, they",
	"  can't benefit again until they have completed a long rest",
	"\u25C6 >>Flaw: Pull of the Empyrean<<",
	"  My new native plane attempts to draw me to it, laying claim to my form. Whenever",
	"  I roll a nat 1 for a saving throw against a magical spell or ability, I take 1d6",
	"  force dmg per 2 class lvls in addition to any other dmg or effects I would suffer,",
	"  as my native plane attempts to unbind me from the material plane. For example,",
	"  a 6th lvl Fighter would take 3d6 force dmg. This dmg ignores resistances and",
	"  immunities",
];

FeatsList["seraph: aura of empyreal valor (level 4)"] = {
	name: "Seraph: Aura of Empyreal Valor (Level 4)",
	source: [["GH", 61]],
	description:
		"I gain the Aura of Empyreal Valor boon and Pull of the Empyrean flaw for the Seraph transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 61]],
			note: desc(Seraph4_AuraEmpyrealValor)
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
	prerequisite: "Seraph Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("seraph level 1") !== -1 &&
			(CurrentFeats.known.indexOf("seraph: radiant strike (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("seraph: cleanse affliction (level 3)") !== -1)
		);
	},
};

var Vampire1 = [
	"\u25C6 >>Boon: Blood Fury<<",
	"  When I deal combat dmg w/ unarmed strike or melee/ranged wea. to a target that",
	"  can bleed (not undead/construct), I gain 1 Fury Point (max 4). Upon completing",
	"  short or long rest, Fury Points reset to 0",
	"  >>Blood Fury Abilities<<",
	"  I can spend Fury Points (FP) to use:",
	"    \u2022 Fanged Bite (1FP): On my turn, after atk action, use bns action to make",
	"      special unarmed bite atk. Use Dex mod instead of Str to hit. Deals 1d4 +",
	"      Str or Dex mod pierce. dmg. Target must succeed Con save or take 2d6 necrotic",
	"      dmg. I regain hp = necrotic dmg dealt. If atk reduces humanoid Med. or smaller",
	"      to 0 hp, gain 3 FP instead",
	"    \u2022 Calculated Strike (1FP): When I hit w/ melee wea. atk, before dmg is dealt,",
	"      add 1d6 dmg (same type as wea.). No FP generated for this atk",
	"    \u2022 Vampiric Mist (2FP): Bns action, teleport up to 30 ft to unoccupied space",
	"      I can see",
	"    \u2022 Unearthly Reflexes (1FP): After Dex save roll but before result, use rea.",
	"      to take half dmg on fail, no dmg on success",
	"    \u2022 Deathly Horror (3FP): Bns action, crea. of my choice w/in 30 ft must succeed",
	"      Wis save or become Frightened for 1 min. Crea. repeats save at end of each",
	"      turn, ending on success. Crea. that succeeds is immune 24 hrs",
	"\u25C6 >>Boon: Undead Form<<",
	"  Dex +2, Cha +1 (max 16). Crea. type becomes undead. Spells/abilities regarding",
	"  Undead of specific CR have no effect. If spell/ability (not my own) would grant",
	"  HP, gain temp HP instead. If reduced to 0 hp and unconscious, healing stabilizes",
	"  me at 1 hp and unconscious. Don't age, immune to aging effects, can't die from",
	"  old age. Don't require air, food, drink, or sleep",
	"\u25C6 >>Flaw: The Sanguine Curse<<",
	"    \u2022 Can't enter residence I don't own w/out invitation. If enter involuntarily,",
	"      take 1d10 psychic dmg at start of turn while inside",
	"    \u2022 Gain Darkvision 60 ft if don't have it",
	"    \u2022 In sunlight: disadv. on atk rolls and ability checks",
	"    \u2022 Must feed every 7 days",
];

var VampireFeeding = [
	"\u25C6 >>Feeding<<",
	"  As an action, make unarmed bite atk vs unconscious, restrained or charmed humanoid.",
	"  Target drained 1 pint blood, bears bite mark. Doesn't wake sleeping crea. or end",
	"  spell/ability effects. Crea. gains 1 exhaustion lvl (only removed w/ greater",
	"  restoration)",
	"  Vampire not feeding w/in required time enters unconscious feeding frenzy (GM",
	"  control). Next time sleep/trance, atk all nearby living crea. to feed. Remains",
	"  in state until drain crea. completely (killing), then falls unconscious 4 hrs",
];

FeatsList["vampire level 1"] = {
	name: "Vampire (Level 1)",
	source: [["GH", 64]],
	description:
		"I gain the Vampire transformation, which grants me various boons and flaws as detailed below on the notes page. I gain the Blood Fury mechanic, allowing me to use Fury Points for special abilities.",
	toNotesPage: [
		{
			name: "Feeding",
			source: [["GH", 65]],
			note: desc(VampireFeeding)
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
		{
			name: "Vampire",
			source: [["GH", 64]],
			note: desc(Vampire1)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/Your/g, "My")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
			amendTo: "Feeding",
		},
	],
	scorestxt: "+2 Dex, +1 Cha (max 16)",
	prerequisite: "Dexterity 13 or higher, contracted the Sanguine Curse",
	prereqeval: function () {
		return Number(What("Dex")) > 12;
	},
	vision: [["Darkvision", 60]],
	action: [
		["bonus action", "Fanged Bite (1 FP)"],
		["bonus action", "Vampiric Mist (2 FP)"],
		["reaction", "Unearthly Reflexes (1 FP)"],
		["bonus action", "Deathly Horror (3 FP)"],
		["action", "Feeding (bite unconscious/restrained/charmed)"],
	],
	extraLimitedFeatures: [
		{
			name: "Fury Points",
			usages: 4,
			recovery: "short rest",
		},
	],
	weaponOptions: [
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*fanged?)(?=.*bite).*$/i,
			name: "Fanged Bite (Blood Fury)",
			source: [["GH", 64]],
			ability: 2,
			damage: [1, 4, "piercing"],
			description: "1 FP; Con save or 2d6 necro dmg (I heal); If kill humanoid Med/smaller: gain 3 FP",
			abilitytodamage: true,
			selectNow: true,
		},
	],
};

var Vampire2_DreadKnight = [
	"\u25C6 >>Boon: Dread Knight Combat Training<<",
	"  Bns action to enter, exit, or change combat stance. While in stance, gain:",
	"  >>Offensive<<: Deal additional dmg w/ melee wea. = FP I possess (min 1)",
	"  >>Defensive<<: AC bns = \u00BD FP I possess (min 1)",
	"  >>Accuracy<<: Bns to hit w/ wea. atks = \u00BD FP I possess (min 1)",
	"  Use Dex instead of Str for atk/dmg rolls of melee wea. w/ slashing dmg",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  No reflection in mirrors/reflective surfaces. Can hide true appearance by conc.",
	"  Following situations reveal true form:",
	"    \u2022 Concentrating on spell",
	"    \u2022 Unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Taking dmg from sunlight or free-flowing water",
	"    \u2022 Choosing to reveal",
	"  In extreme stress, GM may call Con save (DC their choice) to maintain form",
];

FeatsList["vampire: dread knight combat training (level 2)"] = {
	name: "Vampire: Dread Knight Combat Training (Level 2)",
	source: [["GH", 65]],
	description:
		"I gain the Dread Knight Combat Training boon and Hideous Appearance flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 65]],
			note: desc(Vampire2_DreadKnight)
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
	prerequisite: "Vampire Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("vampire level 1") !== -1;
	},
	action: [["bonus action", "Dread Knight Stance (enter/exit/change)"]],
};

var Vampire2_SanguineMagic = [
	"\u25C6 >>Boon: Sanguine Magic<<",
	"  Prerequisite: Ability to cast spells",
	"  When I deal non-necrotic dmg w/ spell/cantrip, can deal necrotic dmg instead.",
	"  When I deal dmg w/ spell/cantrip, gain 1 FP (max 1/turn)",
	"  Gain Blood Fury abilities:",
	"    \u2022 Cast in Blood (1 FP): Next dmg-dealing cantrip, add Cha mod to dmg",
	"    \u2022 Sanguine Spellbinding (3 FP): Next crea. making Cha/Int/Wis save vs my",
	"      spell has disadv. If spell affects multiple crea., I choose which affected",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  No reflection in mirrors/reflective surfaces. Can hide true appearance by conc.",
	"  Following situations reveal true form:",
	"    \u2022 Concentrating on spell",
	"    \u2022 Unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Taking dmg from sunlight or free-flowing water",
	"    \u2022 Choosing to reveal",
	"  In extreme stress, GM may call Con save (DC their choice) to maintain form",
];

FeatsList["vampire: sanguine magic (level 2)"] = {
	name: "Vampire: Sanguine Magic (Level 2)",
	source: [["GH", 66]],
	description:
		"I gain the Sanguine Magic boon and Hideous Appearance flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 66]],
			note: desc(Vampire2_SanguineMagic)
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
	prerequisite: "Vampire Level 1, ability to cast spells",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("vampire level 1") !== -1;
	},
};

var Vampire2_Shapechanger = [
	"\u25C6 >>Boon: Shapechanger<<",
	"  Action to polymorph into Tiny bat or back. In bat form:",
	"    \u2022 Walking speed 5 ft, flying speed 30 ft",
	"    \u2022 If sunlight hypersensitivity, reduced to sensitivity: disadv. on atks/",
	"      ability checks in sunlight, no dmg from direct sunlight contact",
	"    \u2022 Can't speak. Held obj./armor merges or drops (GM decides)",
	"  If unconscious in bat, revert to vampiric form",
	"  Action to turn into mist. In mist form:",
	"    \u2022 Can't take actions, speak, or manipulate obj.",
	"    \u2022 Weightless, flying speed 20 ft, hover, enter hostile crea. space",
	"    \u2022 If air fits through space, I can. Can't pass through liquid/cross running",
	"      water",
	"    \u2022 Adv. on Str/Dex/Con saves, immune to nonmagical dmg (except sunlight)",
	"    \u2022 Held obj./armor merges or drops (GM decides)",
	"  If unconscious in mist, revert to vampiric form",
	"\u25C6 >>Flaw: Hideous Appearance<<",
	"  No reflection in mirrors/reflective surfaces. Can hide true appearance by conc.",
	"  Following situations reveal true form:",
	"    \u2022 Concentrating on spell",
	"    \u2022 Unconscious condition",
	"    \u2022 Entering hallowed ground",
	"    \u2022 Taking dmg from sunlight or free-flowing water",
	"    \u2022 Choosing to reveal",
	"  In extreme stress, GM may call Con save (DC their choice) to maintain form",
];

FeatsList["vampire: shapechanger (level 2)"] = {
	name: "Vampire: Shapechanger (Level 2)",
	source: [["GH", 66]],
	description:
		"I gain the Shapechanger boon and Hideous Appearance flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 66]],
			note: desc(Vampire2_Shapechanger)
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
	prerequisite: "Vampire Level 1",
	prereqeval: function () {
		return CurrentFeats.known.indexOf("vampire level 1") !== -1;
	},
	action: [
		["action", "Shapechanger (bat form)"],
		["action", "Shapechanger (mist form)"],
	],
	speed: {
		fly: { spd: 30, enc: 0 },
	},
};

var Vampire3_CruelRiposte = [
	"\u25C6 >>Boon: Cruel Riposte<<",
	"  When crea. w/in 5 ft atks me, use rea. to make melee wea. atk vs attacker. Uses",
	"  = Dex mod (min 1), regain all on long rest",
	"\u25C6 >>Flaw: Greater Sanguine Curse<<",
	"    \u2022 Take 1d10 acid dmg if end turn in running water",
	"    \u2022 Gain superior Darkvision 120 ft if don't have it",
	"    \u2022 Take 1d10 radiant dmg when start turn in sunlight",
	"    \u2022 Must feed every 3 days",
];

FeatsList["vampire: cruel riposte (level 3)"] = {
	name: "Vampire: Cruel Riposte (Level 3)",
	source: [["GH", 67]],
	description:
		"I gain the Cruel Riposte boon and Greater Sanguine Curse flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 67]],
			note: desc(Vampire3_CruelRiposte)
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
	prerequisite: "Vampire Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("vampire level 1") !== -1 &&
			(CurrentFeats.known.indexOf("vampire: dread knight combat training (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: sanguine magic (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: shapechanger (level 2)") !== -1)
		);
	},
	action: [["reaction", "Cruel Riposte"]],
	usages: "Dexterity modifier per ",
	usagescalc: "event.value = Math.max(1, What('Dex Mod'));",
	recovery: "long rest",
	vision: [["Superior Darkvision", 120]],
};

var Vampire3_CreaturesNight = [
	"\u25C6 >>Boon: Creatures of the Night<<",
	"  I call 2d4 swarms of bats or 2d4 swarms of rats (outdoors: 2d4",
	"  wolves instead of rats). Arrive end of my next turn at GM's choice w/in 30 ft,",
	"  under my control. Act after me in initiative, remain 1 hr/until I die/dismissed",
	"  (bns action). Can't use if in direct sunlight",
	"\u25C6 >>Flaw: Greater Sanguine Curse<<",
	"    \u2022 Take 1d10 acid dmg if end turn in running water",
	"    \u2022 Gain superior Darkvision 120 ft if don't have it",
	"    \u2022 Take 1d10 radiant dmg when start turn in sunlight",
	"    \u2022 Must feed every 3 days",
];

FeatsList["vampire: creatures of the night (level 3)"] = {
	name: "Vampire: Creatures of the Night (Level 3)",
	source: [["GH", 67]],
	description:
		"I gain the Creatures of the Night boon and Greater Sanguine Curse flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 67]],
			note: desc(Vampire3_CreaturesNight)
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
	prerequisite: "Vampire Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("vampire level 1") !== -1 &&
			(CurrentFeats.known.indexOf("vampire: dread knight combat training (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: sanguine magic (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: shapechanger (level 2)") !== -1)
		);
	},
	usages: 1,
	recovery: "long rest",
	vision: [["Superior Darkvision", 120]],
};

var Vampire3_CaptivatingGlance = [
	"\u25C6 >>Boon: Captivating Glance<<",
	"  Prof. in Deception and Persuasion. If already prof., double prof. bns for those",
	"  skills. If have/gain double prof., gain +2 instead",
	"  Thoughts can't be read by any means",
	"\u25C6 >>Flaw: Greater Sanguine Curse<<",
	"    \u2022 Take 1d10 acid dmg if end turn in running water",
	"    \u2022 Gain superior Darkvision 120 ft if don't have it",
	"    \u2022 Take 1d10 radiant dmg when start turn in sunlight",
	"    \u2022 Must feed every 3 days",
];

FeatsList["vampire: captivating glance (level 3)"] = {
	name: "Vampire: Captivating Glance (Level 3)",
	source: [["GH", 67]],
	description:
		"I gain the Captivating Glance boon and Greater Sanguine Curse flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 67]],
			note: desc(Vampire3_CaptivatingGlance)
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
	prerequisite: "Vampire Level 1 and one Level 2 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("vampire level 1") !== -1 &&
			(CurrentFeats.known.indexOf("vampire: dread knight combat training (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: sanguine magic (level 2)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: shapechanger (level 2)") !== -1)
		);
	},
	skills: [
		["Deception", "increment"],
		["Persuasion", "increment"],
	],
	skillstxt: "Proficiency in Deception and Persuasion, or expertise if already proficient",
	vision: [["Superior Darkvision", 120]],
};

var Vampire4_GrimExecutioner = [
	"\u25C6 >>Boon: Grim Executioner<<",
	"  On crit. hit w/ melee/ranged wea.: if target has \u226450 hp, kill outright. If",
	"  >50 hp, deal extra 6d6 dmg (same type as wea.)",
	"\u25C6 >>Flaw: Stake to Heart<<",
	"  When attacked w/ wooden/silvered wea., if attacker rolls nat 20 and I have \u226450",
	"  hp, paralyzed 1 hr or until wea. removed (whichever longer)",
];

FeatsList["vampire: grim executioner (level 4)"] = {
	name: "Vampire: Grim Executioner (Level 4)",
	source: [["GH", 67]],
	description:
		"I gain the Grim Executioner boon and Stake to Heart flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 67]],
			note: desc(Vampire4_GrimExecutioner)
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
	prerequisite: "Vampire Level 1 and Dread Knight Combat Training",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("vampire level 1") !== -1 &&
			CurrentFeats.known.indexOf("vampire: dread knight combat training (level 2)") !== -1
		);
	},
};

var Vampire4_BeguilersEntrancement = [
	"\u25C6 >>Boon: Beguiler's Entrancement<<",
	"  As an action to charm incapacitated humanoid 24 hrs or until target",
	"  different humanoid. If use on same target 30 consecutive days, permanently charmed",
	"  Can use on another humanoid after permanently charming previous. Max enthralled",
	"  = Cha mod (min 1). If exceed Cha mod, lose connection to all",
	"  Remove curse or similar removes charm",
	"\u25C6 >>Flaw: Stake to Heart<<",
	"  When attacked w/ wooden/silvered wea., if attacker rolls nat 20 and I have \u226450",
	"  hp, paralyzed 1 hr or until wea. removed (whichever longer)",
];

FeatsList["vampire: beguiler's entrancement (level 4)"] = {
	name: "Vampire: Beguiler's Entrancement (Level 4)",
	source: [["GH", 68]],
	description:
		"I gain the Beguiler's Entrancement boon and Stake to Heart flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 68]],
			note: desc(Vampire4_BeguilersEntrancement)
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
	prerequisite: "Vampire Level 1 and Captivating Glance",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("vampire level 1") !== -1 &&
			CurrentFeats.known.indexOf("vampire: captivating glance (level 3)") !== -1
		);
	},
	action: [["action", "Beguiler's Entrancement"]],
	usages: 1,
	recovery: "long rest",
};

var Vampire4_Regenerate = [
	"\u25C6 >>Boon: Regenerate<<",
	"  Regain 10 hp at start of turn if \u22651 hp and not in sunlight/over running water",
	"  If take radiant dmg or holy water dmg, doesn't function start of next turn",
	"\u25C6 >>Flaw: Stake to Heart<<",
	"  When attacked w/ wooden/silvered wea., if attacker rolls nat 20 and I have \u226450",
	"  hp, paralyzed 1 hr or until wea. removed (whichever longer)",
];

FeatsList["vampire: regenerate (level 4)"] = {
	name: "Vampire: Regenerate (Level 4)",
	source: [["GH", 68]],
	description:
		"I gain the Regenerate boon and Stake to Heart flaw for the Vampire transformation, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "",
			source: [["GH", 68]],
			note: desc(Vampire4_Regenerate)
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
	usages: 1,
	recovery: "Turn",
	prerequisite: "Vampire Level 1 and one Level 3 Adaptation",
	prereqeval: function () {
		return (
			CurrentFeats.known.indexOf("vampire level 1") !== -1 &&
			(CurrentFeats.known.indexOf("vampire: cruel riposte (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: creatures of the night (level 3)") !== -1 ||
				CurrentFeats.known.indexOf("vampire: captivating glance (level 3)") !== -1)
		);
	},
};
