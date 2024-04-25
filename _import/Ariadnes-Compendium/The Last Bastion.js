var iFileName = "TheLastBastion";
RequiredSheetVersion("13.1.12");

SourceList["A:TLB"] = {
    name : "Ariadne's: The Last Bastion",
    abbreviation : "A:TLB",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/02/14"
};

MagicItemsList["teng arcanocyper"] = {
    name : "Teng Arcanocyper",
    source : [["A:TLB", 6]],
    type : "wondrous item",
    description : desc([
        "This Arcanocypher allows me to cast spells from any class using a spell slot matching the spell's level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell."
    ]),
    choices : ["Teng Arcanocyper, 3rd level (rare)", "Teng Arcanocyper, 5th level (very rare)", "Teng Arcanocyper, 8th level (legendary)", "Teng Arcanocyper, 9th level (artifact)"],
    "teng arcanocyper, 3rd level (rare)" : {
        name : "Teng Arcanocyper, 3rd level",
        rarity : "rare",
        description : "I can wire any spell up to 3rd level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (3rd level)",
            "class" : "any",
            level : [1, 3],
            times : 1
        }]
    },
    "teng arcanocyper, 5th level (very rare)" : {
        name : "Teng Arcanocyper, 5th level",
        rarity : "very rare",
        description : "I can wire any spell up to 5th level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (5th level)",
            "class" : "any",
            level : [1, 5],
            times : 1
        }]
    },
    "teng arcanocyper, 8th level (legendary)" : {
        name : "Teng Arcanocyper, 8th level",
        rarity : "very rare",
        description : "I can wire any spell up to 8th level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (8th level)",
            "class" : "any",
            level : [1, 8],
            times : 1
        }]
    },
    "teng arcanocyper, 9th level (artifact)" : {
        name : "Teng Arcanocyper, 9th level",
        rarity : "artifact",
        description : "I can wire any spell up to 9th level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (9th level)",
            "class" : "any",
            level : [1, 9],
            times : 1
        }]
    }
};

AddSubClass("sorcerer", "teng", {
    regExpSearch : /^(?=.*teng)(?=.*sorcerer).*$/i,
    subname : "Teng Sorcerer",
    source : [["A:TLB", 7]],
    features : {
        "subclassfeature1" : {
            name : "Arcane Sight",
            source : [["A:TLB", 7]],
            minlevel : 1,
            description : desc([
                "I can see normally in magical and non-magical darkness to a distance of 30 ft. If I have darkvision, I have its range instead. At 6th level, I am permanently under the effects of detect magic if I am conscious.",
            ]),
            spellcastingBonus : [{
                name : "Arcane Sight",
                spells : ["detect magic"],
                selection : ["detect magic"],
                times : levels.map(function (n) { return n < 6 ? 0 : 1 })
            }],
            vision : [
                ["Arcane Sight", 30]
            ],
        },
        "subclassfeature1.1" : {
            name : "Promise to the Fallen",
            source : [["A:TLB", 7]],
            minlevel : 1,
            description : desc([
                'Use the "Choose Feature" to select a spell.'
            ]),
            choices : ["Promise of Balance", "Vow of Law", "Oath of Freedom", "Pledge of Protection", "Assurance of Plight"],
            choicesNotInMenu : true,
            "promise of balance" : {
                name : "Promise of Balance",
                description : desc([
                    "I learn the protection from evil and good spell."
                ]),
                spellcastingBonus : [{
                    name : "Promise of Balance",
                    spells : ["protection from evil and good"],
                    selection : ["protection from evil and good"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "vow of law" : {
                name : "Vow of Law",
                description : desc([
                    "I learn the command spell."
                ]),
                spellcastingBonus : [{
                    name : "Vow of Law",
                    spells : ["command"],
                    selection : ["command"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "oath of freedom" : {
                name : "Oath of Freedom",
                description : desc([
                    "I learn the longstrider spell."
                ]),
                spellcastingBonus : [{
                    name : "Oath of Freedom",
                    spells : ["longstrider"],
                    selection : ["longstrider"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "pledge of protection" : {
                name : "Pledge of Protection",
                description : desc([
                    "I learn the shield of faith spell."
                ]),
                spellcastingBonus : [{
                    name : "Pledge of Protection",
                    spells : ["shield of faith"],
                    selection : ["shield of faith"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "assurance of plight" : {
                name : "Assurance of Plight",
                description : desc([
                    "I learn the inflict wounds spell."
                ]),
                spellcastingBonus : [{
                    name : "Assurance of Plight",
                    spells : ["inflict wounds"],
                    selection : ["inflict wounds"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            }
        },
        "subclassfeature14" : {
            name : "Teng Morphology",
            source : [["A:TLB", 7]],
            minlevel : 14,
            description : desc([
                "At 14th level, I gain the following:",
                "\u2022 My ability score cap increases by 2.",
                "\u2022 I gain an additional attunement slot.",
                '\u2022 I can cast my "Promise to the Fallen" spell at will.'
            ]),
            scoresMaximum : ["+2", "+2", "+2", "+2", "+2", "+2",]
        },
        "subclassfeature18" : {
            name : "Avatar of Ancestry",
            source : [["A:TLB", 7]],
            minlevel : 18,
            description : desc([
                "As a bonus action, I gain the following benefits for 1d4+1 rounds:",
                "\u2022 Each ability scores increases by 4.",
                "\u2022 I can cast of 4th level or lower without expending a spell slot.",
                "\u2022 My spell attacks have advantage.",
                "\u2022 Creatures have disadvantage on saving throws against my spells.",
                "Once I use this feature, I gain one point of exhaustion and can't use it again until I finish a long rest"
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
});

MagicItemsList["nightingale pendants"] = {
    name : "Nightingale Pendants",
    source : [["A:TLB", 17]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "These pendants have 10 charges, and regains 1d4+1 charges at dawn. I may expend a charge to ignore a spell's verbal and somatic components, two charges to cast darkness, pass without trace, or silence, and four charges to cast invisibility.",
    usages : 10,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Nightingale Pendants (2 charges)",
        spells : ["darkness", "pass without trace", "silence"],
        selection : ["darkness", "pass without trace", "silence"],
        times : 3,
        firstCol : 2
    },{
        name : "Nightingale Pendants (4 charges)",
        spells : ["invisibility"],
        selection : ["invisibility"],
        times : 1,
        firstCol : 4
    }],
    toNotesPage : [{
        name : "Nightingale Pendants",
        page3notes : true,
        note : "I may expend 1 charge to ignore the verbal and somtic components of a spell."
    }]
};

MagicItemsList["monocle of blindsight"] = {
    name : "Monocle of Blindsight",
    source : [["A:TLB", 18]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "I gain blindsight out to a range of 120ft with perfect clarity, but do not see color. Additionally, I have advantage on Perception checks relying on hearing and can cast scrying (DC 15) once per day. I lose the benefits, except spellcasting, if I am deafened or blinded.",
    vision : [
        ["Blindsight", 120],
        ["Keen Hearing"]
    ],
    spellcastingBonus : [{
        name : "Monocle of Blindsight",
        spells : ["scrying"],
        selection : ["scrying"],
        fixedDC : 15,
        times : 1,
        firstCol : "dawn"
    }]
}

MagicItemsList["time's judgement"] = {
    name : "Time's Judgement",
    source : [["A:TLB", 18]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "Once per short rest, I can use my action to choose a creature within 60ft to make a DC 17 Charisma save or be on trial for 5 rounds. This fails if the creature is on a different plane, or if I die or fall unconscious.",
    descriptionFull : "Once per short rest, I can use my action to choose a creature within 60ft to make a DC 17 Charisma save or be on trial for 5 rounds. This fails if the creature is on a different plane, or if I die or fall unconscious.\n   " + toUni("Curse") + ". This item is cursed. When activating this item, there's a 5% chance that I will become the target instead of the designated creature.",
    toNotesPage : [{
        name : "Time's Judgement: Trial",
        page3notes : true,
        note : "Trial: While on trial, the creature takes 1d4+2 for every attack or damaging spell used. If the target is damaged 5 or more times by this, it must succeed a DC 17 Constitution saving throw or be stunned until the end of their next turn."
    }, {
        name : "Time's Judgement: Curse",
        page3notes : true,
        note : "Curse: This item is cursed. When activating this item, there's a 5% chance that I will become the target instead of the designated creature."
    }],
    cursed : true,
    usages : 1,
    recovery : "short rest"
}

MagicItemsList["circlet of astronomy"] = {
    name : "Circlet of Astronomy",
    source : [["A:TLB", 19]],
    type : "wondrous item",
    rarity : "legendary",
    description : "I cannot be banished or transported to another plane against my will. Additionally, I can cast the following spells: banishment, conjure woodland beings, conjure minor elementals (5/day), conjure elemental, contact other plane, commune with nature (3/day), planar ally, conjure fey, plane shift (1/day). When I cast a spell, roll 1d20. On a 1, the circlet can no longer cast that spell ever again. Only a wish spell can restore the broken beads.",
    spellcastingBonus : [{
        name : "Circlet of Astronomy (5/day)",
        spells : ["banishment", "conjure woodland beings", "conjure minor elementals"],
        selection : ["banishment", "conjure woodland beings", "conjure minor elementals"],
        times : 3,
        firstCol : 5
    }, {
        name : "Circlet of Astronomy (3/day)",
        spells : ["conjure elemental", "contact other plane", "commune with nature"],
        selection : ["conjure elemental", "contact other plane", "commune with nature"],
        times : 3,
        firstCol : 3
    }, {
        name : "Circlet of Astronomy (1/day)",
        spells : ["planar ally", "conjure fey", "plane shift"],
        selection : ["planar ally", "conjure fey", "plane shift"],
        times : 3,
        firstCol : 1
    }],
    usages : 0,
    recovery : "dawn"
}