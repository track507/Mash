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
