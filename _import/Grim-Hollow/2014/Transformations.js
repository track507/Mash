var iFileName = "GH-Transformations";
RequiredSheetVersion("13.2.3");
if (!SourceList["GH"]) {
	SourceList["GH"] = {
		name: "Grim Hollow",
		abbreviation: "GH",
		group: "Third Party",
	};
}

var AberrantHorror1 = [
	">>Boon: Aberrant Adaptations<<",
	"\u2022 Chitinous Shell: As a bns action and not wearing heavy armor, I gain a +2 AC bns",
	"    This lasts for 1 min, until I'm knocked unconscious or I use my bns action on my turn to end it",
	"\u2022 Eldritch Limbs: When I make an atk, I can transform one or both of my arms into weapons and gain the following:",
	"    \u2022 I choose bludg., pierce., or slash. dmg for the atk",
	"    \u2022 I may roll a d6 in place of normal dmg for unarmed strikes",
	"    \u2022 I can't hold any obj. in the affected arm. It either merges into the adaptation or dropped (GM's choice)",
	"     This lasts until I'm knocked unconscious or I use my bns action on my turn to end it",
	">>Boon: Aberrant Form<<: My Con. increases by 2 and my Str by 1, but it cannot go beyond 16 this way",
	">>Flaw: Unstable Mutations<<: After every long rest, I must roll a d100 and apply the effects from the Unstable Form table",
	"   This effect lasts until I complete another long rest. I must keep rolling until a new result is rolled",
	"I gain more boons and flaws as I gain levels (Recommended lvls 5, 11, and 17)",
];

FeatsList["aberrant horror level 1"] = {
	name: "Aberrant Horror (Level 1)",
	source: [["GH", 33]],
	description:
		"I gain the Aberrant Horror transformation, which grants me various boons and flaws as detailed below on the notes page. I can gain additional boons and flaws as I reach certain levels, or during level milestones (GM's discretion).",
	toNotesPage: [
		{
			name: "Aberrant Horror",
			source: [["GH", 33]],
			note: desc(AberrantHorror1)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
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
	prereqeval: function () {
		return Number(What("Con Mod")) > 12;
	},
};

var AberrantHorror2 = [
	">>Boon: Efficient Killer<<",
	"When I make an unarmed atk with Eldritch Limbs, I can gain one of the following effects:",
	"   \u2022 Piercing: Ranged atk (30 ft), 2d6 + Str modifier piercing dmg",
	"   \u2022 Bludgeoning: +1d6 bludg. dmg; as bns action, atk another creature within 5 ft of target for 1d6 + Str",
	"   \u2022 Slashing: +1d6 slash. dmg; target makes Con save or gains bleeding condition for 1 min (can repeat save at end of turns)",
	">>Boon: Other-Worldly Tendrils<<",
	"   As bns action, I grow a tendril. After taking the atk action, I can use bns action to atk with it (10 ft, 1d4 + Str bludg.)",
	"   Lasts until unconscious; bns action to retract. I gain the following Adaptations:",
	"   \u2022 Toxic Spray: Forgo dmg; target makes Con save or becomes poisoned (repeat save at end of turns)",
	"   \u2022 Constrict: Forgo dmg; target Large or smaller is grappled (tendril can't be used on others while grappling)",
	"   \u2022 Hypnotic Trance: Forgo dmg; target makes Wis save or atks vs. it have adv. until start of its next turn (repeat save at end of turns)",
	">>Boon: Situational Evolution<<",
	"   I can use an action to grow gills/flippers, thin hairs on extremities, or rapidly-regenerating flesh. I gain:",
	"   \u2022 Scopulae: Climbing speed = walking speed; can climb vertical objects while leaving one hand free",
	"   \u2022 Gills and Flippers: Swim speed = walking speed; I can breathe underwater",
	"   \u2022 Regenerative Tissue: At start of my turn, regain HP = Con mod if I have no more than half my HP left",
	"       (no effect at beginning of next turn if I took fire or acid dmg)",
	"   Lasts until unconscious, I use a different Adaptation, or use bns action to end it",
	">>Flaw: Hideous Appearance<<",
	"   My appearance is grotesquely transformed and horrific to behold. I can suspend this form and appear humanoid,",
	"   but it's taxing and requires concentration. True form revealed when: concentrating on a spell, unconscious,",
	"   entering hallowed ground, choosing to reveal myself, or extreme stress (GM may call for Con save)",
	"   Non-evil creatures that witness my true form become instantly hostile unless the GM decides otherwise",
];

FeatsList["aberrant horror level 2"] = {
	name: "Aberrant Horror (Level 2)",
	source: [["GH", 34]],
	description:
		"I gain the Efficient Killer, Other-Worldly Tendrils, and Situational Evolution boons, as well as the Hideous Appearance flaw, as detailed below on the notes page.",
	toNotesPage: [
		{
			name: "Aberrant Horror",
			source: [["GH", 34]],
			note: desc(AberrantHorror2)
				.replace(/>>(.*?)<</g, function (a, match) {
					return match.toUpperCase();
				})
				.replace(/your/g, "my")
				.replace(/you are /gi, "I am ")
				.replace(/(of|on|reduces|grants) you/gi, "$1 me")
				.replace(/you /gi, "I "),
		},
	],
	prereqeval: function () {
		return CurrentFeats.known.indexOf("aberrant horror level 1") !== -1;
	},
	speed: {
		climb: { spd: "walk", enc: "walk" },
		swim: { spd: "walk", enc: "walk" },
	},
	action: [
		["bonus action", "Efficient Killer (Bludg.)"],
		["bonus action", "Other-Worldly Tendrils (after atk)"],
		["action", "Situational Evolution"],
	],
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
