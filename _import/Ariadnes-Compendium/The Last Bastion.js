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