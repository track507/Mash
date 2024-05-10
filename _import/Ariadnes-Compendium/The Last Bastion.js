var iFileName = "The_Last_Bastion";
RequiredSheetVersion("13.1.13");

SourceList["A:TLB"] = {
    name : "Ariadne's: The Last Bastion",
    abbreviation : "A:TLB",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/02/14"
};

CompanionList["ariadne's: the last bastion companion codex"] = {
    name : "Ariadne's: The Last Bastion Companion Codex",
    nameMenu : "Ariadne's: The Last Bastion Companion Codex",
    source : [["A:TLB", 0], ["A:CoS", 0]]
}
if(!SourceList["A:CoS"]) {
    SourceList["A:CoS"] = {
    name : "Ariadne's: Codex of Strings",
    abbreviation : "A:CoS",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/02/14"
    };
}
if(!CompanionList["ariadne's codex"]) {
        CompanionList["ariadne's Companion codex"] = {
        name : "Ariadne's Companion Codex",
        nameMenu : "Ariadne's Codex",
        source : [["A:CoS", 0]]
    }
}

spellSchoolList["Omni"] = "omniturgy";

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
        note : desc(["I may expend 1 charge to ignore the verbal and somtic components of a spell."])
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
    usages : 1,
    recovery : "dawn"
}

MagicItemsList["the last moonsilver"] = {
    name : "The Last Moonsilver",
    source : [["A:TLB", 20]],
    rarity : "artifact",
    type : "wondrous item",
    description : "see notes",
    toNotesPage : [{
        name : "The Last Moonsilver",
        note : desc([
            "I gain a +1 to all ability scores, or +2 if the moon is out. My crit range vs aberrations and lycanthropes becomes 17-20, unless its already less in which it increases by 1, and all weapon and unarmed attacks are considered silvered. I also gain the help of the Moonsilver Envoy.",
            "I can call the envoy as an action and lasts until I recall it or it's killed. If I recall it, I can summon it back with its remaing HP and resources. If it dies, I must finished a long rest before summoning it again. Regardless, it regains all lost HP and spent resources when I finish a long rest.",
            "The Moonsilver Envoy is a CR 11 legendary celestial, and is friendly with me unless I am collaborating with lycanthropes or aberrations."
        ])
    }], 
    scorestxt : "+1 to all ability scores, or +2 if moon is out",
    scores : [1, 1, 1, 1, 1, 1],
    attunement : true,
    creaturesAdd : [["Moonsilver Envoy", true]],
    creatureOptions : [{
        name : "Moonsilver Envoy",
        source : [["A:TLB", 21]],
        size : 2,
        type : "Celestial",
        alignment : "unaligned",
        ac : 16,
        hp : 114,
        hd : [17, 10],
        speed : "30 ft, fly 90 ft",
        scores : [15, 22, 16, 14, 20, 13],
        damage_resistances : "slashing, bludgeoning, piercing from non-magical attacks",
        damage_immunities : "radiant, cold",
        condition_immunities : "",
        senses : "darkvision 240 ft",
        passivePerception : 15, 
        languages : "understands Teng and Primeval, but doesn't speak",
        challengeRating : "11",
        proficiencyBonus : 4,
        attacksAction : 2,
        attacks : [{
            name : "Talons",
            baseWeapon : "unarmed strike",
            damage : [2,4, "radiant"],
            ability : 1,
            range : "Melee (5 ft)",
            abilitytodamage : true
        },{
            name : "Tail Swipe",
            damage : [2,6, "radiant"],
            baseWeapon : "unarmed strike",
            ability : 1,
            range : "Melee (15 ft)",
            description : "DC 18 Dexterity save or knocked prone",
            abilitytodamage : true
        }, {
            name : "Moonlight Breath (1/day)",
            damage : [8,10, "radiant"],
            description : "Save, 1/2 dmg; Failed, take dmg and lose all resistances; Special",
            special : true,
            tooltip : "Special: Lycanthropes and Aberrations have disadvantage on the save, and gain radiant; fire; piercing, slashing, and bludgeoning dmg from silvered weapons on failed save.",
            range : "30-ft cone",
            ability : 2,
        }],
        traits : [{
            name : "Hybrid Being",
            description : "The envoy is considered both a celestial and a dragon, and is affected by abilities that target either creature type."
        }, {
            name : "Moon Avatar",
            description : "If lowered to 0 hp, it returns to the amulet. The wearer must complete a long rest to summon it again."
        }],
        saves : ["", 10, 7, "", 9, ""],
        actions : [{
            name : "Multiattack",
            description : "The envoy makes two attacks with its talons and one with its tail swipe."
        }, {
            name : "Graceful Evasion",
            description : "The envoy adds 1d4+6 to its AC, but must see the attacker to do this."
        }],
        notes : [{
            name : "Destroying the Amulet",
            description : "After the envoy has been reduced to 0 hp, one must deal 114 force damage to the amulet to permanently destroy it."
        }]
    }]
};


FeatsList["philosopher"] = {
    name : "Philosopher",
    source : [["A:TLB", 32]],
    description : "My Intelligence, Wisdom, or Charisma increases by 1. Additionally, I gain proficiency with Insight and Persuasion, or expertise if already proficient.",
    scorestxt : "+1 Intelligence, Wisdom, or Charisma",
    skills : [
        ["Insight", "increment"],
        ["Persuasion", "increment"]
    ]
}

FeatsList["teng genius"] = {
    name : "Teng Genius",
    source : [["A:TLB", 32]],
    description : "My Intelligence increases by 1 up to a max of 20. I can calulcate trajectories, complex mathematics, and chemical reactions in my head. I have advantage on saving throws vs environmental hazards I can see and ability checks made to use arcane or scientific artifacts that I can inspect.",
    scores : [0,0,0,1,0,0],
    savetxt : { adv_vs : ["environmental hazards I can see", "ability checks to use scientific/arcane articats I can inspect"] }
}

FeatsList["inspired heart"] = {
    name : "Inspired Heart",
    source : [["A:TLB", 32]],
    description : "My Wisdom or Charisma increased by 1. When I witness a work of art for the first time, I can roll a DC 14 Insight check to gain Inspiration, or add 1d10 to an ability check, saving throw, or attack roll if my DM does not use this optional rule, and must use this before gaining another. I gain proficiency with one set of tools and instrument of my choice.",
    scorestxt : "+1 Wisdom or Charisma",
    toolProfs : [
        ["Any Tool or Instrument", 1]
    ]
}

FeatsList["improvised casting"] = {
    name : "Improvised Casting",
    source : [["A:TLB", 33]],
    prerequisite : "Being a wizard or artificer",
    prereqeval : function(v) { return (classes.known.wizard || classes.known.artificer) ? true : false},
    description : "My Intelligence increases by 1. When I cast a wizard or artificer spell, I can improve an aspect of the spell with the cost of another; see notes. Once I modify a spell, I cannot do so again until I finish a short or long rest.",
    usages : 1,
    recovery : "short rest",
    toNotesPage : [{
        name : "Improved Casting",
        note : desc([
            "I can improve one of the following aspects of the spell as the cost of another. I can double its range, duration, area of effect, or the amount of targets, but must select one of these categories and divide it by 2. A spell cannot be modified so it targets less than one creature, last for less than instantanous, or has a shorter range than touch.",
        ])
    }]
}

FeatsList["scion of promise"] = {
    name : "Scion of Promise",
    source : [["A:TLB", 33]],
    description : "The promise manifests an Echo as an action on my turn. The effects depends on my character level, and can only use each effect once over my existence. Levels 1-4: Mass Healing Word (+5 ability modifier), Levels 5-13: Planar Ally exists for 10 minutes, Levels 14+: Remake reality (similar to Cleric's Divine Intervention)."
}

FeatsList["thoughts before action"] = { 
    name : "Thoughts Before Action",
    source : [["A:TLB", 33]],
    prerequisite : "Intelligence 13 or higher",
	prereqeval : function(v) { return Number(What("Int")) >= 13; },
    description : "My intelligence increases by 1. Additionally when I take one minute to analyze a course of action, I gain a bonus to the associated check equal to my Intelligence modifier.",
    scores : [0,0,0,1,0,0]
}

AddSubClass("paladin", "oath of eminence", {
    regExpSearch : /^(?=.*(eminence))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
    subname : "Oath of Eminence",
    source : [["A:TLB", 36]],
    features : {
        "subclassfeature3" : {
            name : "Channel Divinity: Eminent Weapon",
            source : [["A:TLB", 36]],
            minlevel : 3,
            description : desc([
                "For the next minute, I can add my charisma modifier to hit with my weapon attacks.",
                "When I hit a creature with this weapon, the next attack or saving throw they make is reduced by 1d4. This effect does not stack."
            ]),
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if( !v.isDC && /eminent/i.test(v.WeaponTextName) ) {
                            fields.Description += (fields.Description ? '; ' : '') + "Crea -1d4 next atk/save"
                        }
                    },
                    "If I include 'eminent' as part of the weapon's name, the automation will treat it as an 'Eminent Weapon', granting its benefits.",
                ],
                atkCalc : [
                    function(fields, v, output) {
                        if( /eminent/i.test(v.WeaponTextName) ) {
                            output.extraHit += Number(What("Cha Mod")) > 0 ? Number(What("Cha Mod")) : 0;
                        }
                    }
                ]
            },
            spellcastingExtra : ["bane", "protection from evil good", "borrowed knowledge", "hold person", "speak with dead", "hypnotic pattern", "locate creature", "banishment", "arcane hand", "dominate person"]
        },
        "subclassfeature3.1" : {
            name : "Channel Divinity: Regal Presence",
            source : [["A:TLB", 36]],
            minlevel : 3,
            description : desc([
                "I can choose up to four allies within 30 ft of me. They gain a 1d6 bonus to their next attack or saving throw.",
                "Additionally, they gain temporary hit points equal to my Prof. Bonus + my Charisma modifier. This lasts until the end of my next turn."
            ]),
            additional : levels.map(function(n) {
                if(n < 3) return "";
                return "+1d6"
            }),
        },
        "subclassfeature7" : {
            name : "Amaranth Aura",
            source : [["A:TLB", 36]],
            minlevel : 7,
            description : desc([
                "When a creature within range targets only me with an attack or harmful spell, it must make a Charisma saving throw. On a failure, they are incapacitated until the end of their next turn. A creature that succeeds or when the effect ends is immune to this until they finish a long rest. This feature isn't triggered by area of effect spells.",
                "Additionally at 18th level, a creature that has become immune to my Regal Presence ability, can be affected by it again."
            ]),
            additional : levels.map(function(n) { return n < 7 ? "" : (n < 18 ? 15 : 30) + "-foot aura"; }),
        },
        "subclassfeature15" : {
            name : "Magic Resistance",
            source : [["A:TLB", 36]],
            minlevel : 15,
            description : desc([
                "I gain advantage on saving throws vs spells and other magical effects."
            ]),
            savetxt : { adv_vs : ["spells and other magical effects"]}
        },
        "subclassfeature20" : {
            name : "Eminent Soul",
            source : [["A:TLB", 36]],
            minlevel : 20,
            description : desc([
                "I can use my action to call upon the power of my ancestry. For the next minute, I gain one of the following benefits:",
                "\u2022 Limited Magic Immunity: I cannot be affected or detected by spells of 6th level or lower",
                "\u2022 Eminent Protection: I become resistant to one of the following damage types: fire, cold, thunder, lightning, and poison",
                "\u2022 Breach Space: Once per turn, I can use my bonus action to teleport to an unoccupied space within 30 ft",
                "\u2022 Antimagic Smite: Whenever I hit a creature with my Divine Smite, any spells the creature was concentrating on ends, as well as any ongoing magical effects."
            ])
        }
    }
})

MagicItemsList["senatorial cloak"] = {
    name : "Senatorial Cloak",
    source : [["A:TLB", 38]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "My AC becomes 13 + Dex. For 10 minutes once per short rest, I gain a hover speed equal to my walk speed. I can also cast the Thaumaturgy cantrip. Additionally, I gain a +2 to Persuasion and Intimidation checks.",
    armorAdd : ["Senatorial Cloak"],
    armorOptions : [{
        regExpSearch : /senatorial cloak/,
        name : "Senatorial Cloak",
        source : [["A:TLB", 38]],
        ac : 13,
        affectsWildShape : true
    }],
    usages : 1,
    recovery : "short rest",
    specllcastingBonus : [{
        name : "Senatorial Cloak",
        spells : ["thaumaturgy"],
        selection : ["thaumaturgy"],
        times : 1
    }]
}

MagicItemsList["maul of construct turning"] = {
    name : "Maul of Construct Turning",
    source : [["A:TLB", 38]],
    type : "weapon (maul)",
    rarity : "very rare",
    attunement : true,
    description : "I have a +2 to damage and attack rolls made with this maul. When I hit a construct, they take an additional 1d8 lightning damage and must succeed a DC 14 Consitution saving throw or be Incapacitated until the end of their next turn. If I am a Cleric, I can use my Turn Undead to target constructs instead of undead.",
    weaponsAdd : ["Maul of Construct Turning"],
    weaponOptions : [{
        regExpSearch : /^(?=.*maul)(?=.*construct)(?=.*turning).*$/i,
        name : "Maul of Construct Turning",
        baseWeapon : "maul",
        description : "Heavy, two-handed; +1d8 lightning dmg to Constructs",
        modifiers : [2,2],
    }],
    choices : ["Cleric", "Not a Cleric"],
    selfChoosing : function() {
        if(classes.known.cleric) return "cleric";
        if(!classes.known.cleric) return "not a cleric";
    },
    "cleric" : {
        name : "Maul of Construct Turning (Cleric)",
        description : "I have a +2 to damage and attack rolls made with this maul. When I hit a construct, they take an additional 1d8 lightning damage and must succeed a DC 14 Consitution saving throw or be Incapacitated until the end of their next turn. Additionally, I can use my Turn Undead to target constructs instead of undead."
    },
    "not a cleric" : {
        name : "Maul of Construct Turning (Not a Cleric)",
        descrtipion : "I have a +2 to damage and attack rolls made with this maul. When I hit a construct, they take an additional 1d8 lightning damage and must succeed a DC 14 Consitution saving throw or be Incapacitated until the end of their next turn."
    }
}

MagicItemsList["clockwork needle"] = {
    name : "Clockwork Needle",
    source : [["A:TLB", 39]],
    type : "wondrous item",
    rarity : "common",
    attunement : false,
    description : "Three times per day, I can mend damage to a construct within 5 ft of me. The needle restors 2d8+5 to the construct. Additionally, I can make an improvised weapon attack to organic creatures. On a hit, it deals 3d8+5 piercing damage and the needle breaks.",
    weaponsAdd : ["Clockwork Needle"],
    weaponOptions : [{
        regExpSearch : /clockwork needle/i,
        name : "Clockwork Needle",
        source : [["A:TLB", 39]],
        type : "Improvised Weapon",
        description : "Construct heals 2d8+5; Breaks after attacking a creature",
        damage : [3, 8, "piercing"]
    }],
    usages : 3,
    recovery : "dawn"
}

MagicItemsList["gloves of performance"] = { 
    name : "Gloves of Performance",
    source : [["A:TLB", 39]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "When I speak of imagery, an illusion of it will appear in front of me. I gain advantage on performance, persuasion, and deception checks, and if I am proficient with any of these skills, I gain expertise instead. Additionally, I can cast major image at will.",
    skills : [
        ["Performance", "only"],
        ["Persuasion", "only"],
        ["Deception", "only"]
    ],
    spellcastingBonus : [{
        name : "Gloves of Performance",
        spells : ["major image"],
        selection : ["major image"],
        firstCol : "atwill"
    }]
}

MagicItemsList["mask of the platinum owl"] = {
    name : "Mask of the Platinum Owl",
    source : [["A:TLB", 39]],
    type : "wondrous item",
    rarity : "legendary",
    atunement : true,
    description : "My Wisdom increases by 2 to a max of 23, and I gain truesight with a range of 30 ft. If I am an 11th level druid or higher, I gain additional benefits found on the notes page.",
    vision : [["Truesight", 30]],
    choices : ["Druid", "Not a Druid"],
    selfChoosing : function() {
        if(classes.known.druid) return "druid";
        if(!classes.known.druid) return "not a druid";
    },
    "druid" : {
        name : "Mask of the Platinum Owl (Druid)",
        description : "My Wisdom increases by 2 to a max of 23, and I gain truesight with a range of 30 ft. If I am an 11th level druid or higher, I gain additional benefits found on the notes page.",
        toNotesPage : [{
            name : "Mask of the Platinum Owl: Druid Option",
            note : desc([
                "If I am an 11th level or higher druid, I unlocked the masks power to Wild Shape into a Giant Platinum Owl. This is a greater version of the Giant Owl, and has the following statistics",
                "\u2022 Ancient Constitution: The owl has 77 (9d10+27) hitpoints, an AC of 15, Constitution of 16, Wisdom of 18, Dexterity of 20, and truesight out to a range of 60 ft instead of the Giant Owl's normal statistics.",
                "\u2022 Blessing of Knowledge: The owl can understand and speak all languages, and has advantage on rolls made to understand coded messages and other extraneous script.",
                "\u2022 Paralyzing Breath (Recharge 6): The owl exhales gas in a 15-ft cone. Each creature must make DC 14 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns."
            ])
        }],
    },
    "not a druid" : {
        name : "Mask of the Platinum Owl (Not a Druid)",
        description : "My Wisdom increases by 2 to a max of 23, and I gain truesight with a range of 30 ft."
    },
    scores : [0,0,0,0,2,0],
    scoresMaximum : [0,0,0,0,23,0]
}

CreatureList["giant platinum owl"] = {
    companion : ["ariadne's: the last bastion codex", "ariadne's codex"],
    name : "Giant Platinum Owl",
    source : [["A:TLB", 39]],
    size : 4,
    type : "Beast",
    alignment : "Neutral",
    ac : 15,
    hp : 77,
    hd : [9, 10],
    speed : "5 ft, fly 60 ft",
    scores : [13, 20, 16, 8, 18, 10],
    skills : {
        "perception" : 8,
        "stealth" : 7
    },
    senses : "Darkvision 120ft, Adv. on Wis (Perception) checks using sight/hearing",
    passivePerception : 23,
    languages : "Can understand and speak all languages",
    challengeRating : "1/4",
    proficiencyBonus : 2,
    attacksAction : 1,
    attacks : [{
		name : "Talons",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)"
	}, {
        name : "Paralyzing Breath (recharge 6)",
        ability : 3,
        damage : ["", "", ""],
        range : "15-ft cone",
        description : "Save or paralyzed for 1 min; Save again at end of each turn",
        dc : true,
    }],
    traits : [{
        name : "Flyby",
        description : "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
    }, {
        name : "Blessing of Knowledge",
        description : "The owl can understand and speak all languages. Additionally, it has advantage on rolls made to understand coded messages and other extraneous script."
    }],
}

SpellsList["activate"] = {
    name : "Activate",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 40]],
    level : 2,
    school : "Trans",
    time : "1 a",
    range : "Touch", 
    duration : "Instantaneous",
    components : "S,M",
    compMaterial : "a shard of conductive metal",
    description : "Spell ability check, DC 13+3/tier above common; Activate for 1 use or spend any amount of charges; +5 DC to do again; DC 30 is impossible",
    descriptionShorter : "Spell ability check +2/SL bonus, DC 13+3/tier above common; activates for 1 use or expends charges; +5 DC on subsequent attempts (max of 30)",
    descriptionFull : "I can use my own prana to fuel the functioning of a depleted magical item or arcane mechanism. I must make a spellcasting ability check with a DC of 10 + 3 for every tier rarity above common in the case of a magical item, or a DC up to the DM's discretion in case of a mechanism. On a success, I momentarily reactivate the item or mechanism, enough to use it once before it goes back to its dormant state. If an item has charges, I can any amount of charges regardless of its actual charge. Once deactivated, any additional attempts on the same object increases the DC by 5. If the DC becomes over 30, it becomes impossible." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, I gain a bonus of +2 to the roll for each slot above 2nd, up to a maximum of +6."
}

SpellsList["pragmatism"] = {
    name : "Pragmatism",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 40]],
    level : 4,
    school : "Ench",
    time : "1 a",
    range : "Self",
    duration : "Conc, 1 min",
    components : "S,M",
    compMaterial : "a black, tough stone",
    description : "Immune to charmed/frightened; adv. vs Wisdom/Charisma saves; resistance to Psycic dmg; disadv. vs pers., decep., and perf. checks",
    descriptionFull : "I magically temper my mind against the influence of emotion, becoming purely logical. I retain my alignment and principles, but follow my nature with ruthless abandon of feelings and empathy of any sort. I am immune to being charmed or frightened and have advantage on Intelligence, Wisdom, and Charisma saving throws. Additionally, I gain resistance to psychic damage. While under this spells effects, relating to others is not my strong suit. I have disadvantage on persuasion, deception, and performance checks."
}

SpellsList["zephrahim’s purple orb"] = {
    name : "Zephrahim’s Purple Orb",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 41]],
    level : 6,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "a round carved amethyst",
    save : "Con",
    description : "Spell atk 1 crea 2d12 Force dmg; Action on subsequent turns double dice (4d12, 8d12)/SL 9 quadruple dice, up to 3 turns and Con save after dmg or stunned",
    descriptionFull : "I create an orb of pulsing violet energy and launch it at a creature I can see within range, making a range spell attack. On a hit, the target takes 2d12 force damage and the orb reverberates violently within them. On subsequent turns, I can use my action to deal the damage again, but its double each time: 4d12 the second time it hits, and 8d12 the third time. Once I deal damage with this spell 3 times, the reverberations reach their limit before disapating. After taking this damage, the target must succeed on a Constitution saving throw or be stunned until the end of their next turn." + AtHigherLevels + "When I cast this spell with a spell slot of 9th level, the initial damage is doubled."
}

SpellsList["tesla field"] = {
    name : "Tesla Field",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 41]],
    level : 8,
    school : "Evoc",
    time : "1 a",
    range : "120 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    save : "Con",
    compMaterial : "a fulgurite worth at least 1000 gp",
    description : "30ft rad sphere; dif. ter. vs crea wear metal; save on enter or start in area, 6d8 lightning and stunned (repeat save at start of turn); save halves and no stunned; bon. action move 10ft",
    descriptionFull : "I create a 30ft radius sphere of crackling, fulgurating energy centered on a point I choose within range. This electricity spreads around corners. The area becomes difficult terrain for creatures wearing metallic armor. When the creature enters the spells area for the first time or starts its turn in it, the creature must make a Constitution saving throw taking 6d8 lightning damage and stunned, or taking half as much damage and not stunned on a success. A creature can repeat the saving throw at the start of each of its turns. On subsequent turns, I can use my bonus action to move the field up to 10 ft in a direction I choose."
}

SpellsList["power word: open"] = {
    name : "Power Word: Open",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 41]],
    level : 9,
    school : "Omni",
    time : "1 a",
    range : "unlimited",
    duration : "1 hr",
    components : "V",
    description : "Whatever is in my path opens up, seas and rivers part, magical locks dispelled, hills and mountains crack forming tunnels, planar gates open regardless of its owner's wishes, etc."
}

MagicItemsList["mage breaker"] = {
    name : "Mage Breaker",
    source : [["A:TLB", 63]],
    type : "weapon (any)",
    rarity : "legendary",
    attunement : true,
    description : "Attacks made with this weapon deals an additional 3d6 force damage. If a creature hit with this is concentrating on a spell of 6th level or lower, it automatically loses concentration.",
    chooseGear : {
        type : "weapon",
        prefixOrSuffix : "suffix",
        descriptionChange : ["replace", "weapon"],
    },
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if(!v.theWea.isMagicWeapon && (/mage breaker/i).test(v.WeaponTextName)) {
                    v.theWea.isMagicWeapon = true;
                    fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+3d6 force dmg';
                }
            }
        ]
    }
}

MagicItemsList["red plate of the praetorian"] = {
    name : "Red Plate of the Praetorian",
    source : [["A:TLB", 63]],
    type : "armor (plate)",
    rarity : "legendary",
    attunement :  true,
    description : "While attuned, my AC is 20. I gain additional benefits found on the notes page.",
    toNotesPage : [{    
        name : "Red Plate of the Praetorian: Features",
        note : desc([
            "While wearing the armor and while its active, I have adv. on saves vs. spells and magical effects, all critical hits become normal hits, I reduce all damage except for psychic by 4, I am always under the effects of the spider climb spell, and I can use my bonus action to perform an assisted jump (see below). Additionally, once per long rest I get a legendary resistance, but once I use it, I lose the benefits of the armor until I finish a long rest.",
            "\u2022 Assisted Jump: I can use my bonus action to jump up to 45 ft. If I land on a creature that is Large or smaller, the creature must make a DC 18 Dexterity saving throw or be knocked prone and take 3d6+5 bludgeoning damage."
        ])
    }],
    armorAdd : "Red Plate of the Praetorian",
    armorOptions : [{
        regExpSearch : /red plate of the praetorian/i,
        name : "Red Plate of the Praetorian",
        source : [["A:TLB", 63]],
        type : "heavy",
        ac : 20,
        stealthdis : true,
        addMod : false,
        isMagicArmor : true,
        strReq : 15,
        weight : 20
    }],
    action : ["bonus action", "Assisted Jump"],
    limfeaname : "Legendary Resistance",
    usages : 1,
    recovery : "long rest"
}

FeatsList["combat doctrine"] = {
    name : "Combat Doctrine",
    source : [["A:TLB", 64]],
    description : "At the start of each of my turns, I can choose one of the following combat doctrines found on the notes page.",
    toNotesPage : [{
        name : "Combat Doctrines",
        note : desc([
            "\u2022 Coherency: Choose an ally within 10 ft. While within 10 ft of that ally, we both gain a +1 to our AC's",
            "\u2022 Press the Attack: I gain advantage on attack rolls against a creature if at least one of my allies is within 5 ft of that creature. Additionally, if an ally and I are within 10 ft of each other are attacking the same creature and we both have advantage on the attack, 19-20 on the attack roll is considered a critical hit.",
            "\u2022 Leadership: If an ally within 60 ft of me makes a Wisdom saving throw, they can use my Wisdom modifier instead of their own.",
            "\u2022 Coordinated Fire: When I make a ranged attack against a creature that has been hit with a ranged attack from one of my ally's within the last round, I deal an additional 3 damage on a hit. This can only trigger once per turn.",
            "\u2022 Tactical Movement: Choose an ally within 10 ft. The ally and I gain 15 ft of movement if we start our turns 10 ft of each other.",
        ])
    }]
}

FeatsList["executioner"] = {
    name : "Executioner",
    source : [["A:TLB", 64]],
    description : "I gain a +1 to Strength or Dexterity. Additionally, when I reduce a creature with a CR of up to half of my character level (rounded down) to 0 hp on my turn, I can immediately take another action. After using this feature, I must finish a long rest before using it again.",
    scorestxt : "+1 to Str or Dex"
}

FeatsList["stalwart"] = {
    name : "Stalwart",
    source : [["A:TLB", 64]],
    description : "I gain a +1 to Constitution. As a bonus action, I can enter the Stalwart state for 1 minute in which I reduce all damage except psyhic equal to my Prof. bon. After which all damage I reduced, is dealt to me equally over 10 rounds. I cannot be killed this way, only knocked unconscious. I can use this once per short rest.",
    usages : 1,
    recovery : "short rest",
    scores : [0, 0, 1, 0, 0, 0]
}

SpellsList["alchemize"] = {
    name : "Alchemize",
    source : [["A:TLB", 86]],
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level : 0,
    school : "Trans",
    time : "1 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "S,M",
    compMaterial : "pouches and vials to store the resulting contents in",
    description : "1 small non-magical obj revert to its raw material; used to make another obj, must have tool prof. if complex"
}

SpellsList["fulgurating smite"] = { 
    name : "Fulgurating Smite",
    source : [["A:TLB", 86]],
    classes : ["paladin"],
    level : 3,
    school : "Evoc",
    time : "1 bns",
    range : "Self",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "a shard of fulgurite",
    save : "Con",
    description : "Next weapon attack deals 3d6+1d6/SL lightning dmg; if crea, save or incapacitated until end of their next turn"
}

SpellsList["theophrastus' bodily chaos"]= {
    name : "Theophrastus' Bodily Chaos",
    source : [["A:TLB", 86]],
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level : 4,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    duration : "Conc, 1 min",
    components : "S,M",
    compMaterial : "a vial filled with a chaotic chemical reactives, which the spell consumes",
    description : "Melee spell atk against crea, swapping 2 of the targets ability scores"
}

SpellsList["entropy of teng"] = {
    name : "Entrop of Teng",
    source : [["A:TLB", 86]],
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level : 9,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "a radioactive ingot worth at least 10,000 gp, which the spell consumes",
    description : "Melee spell atk against crea or obj; takes 40d10, save halves; reduced to 0 kills instantly"
}