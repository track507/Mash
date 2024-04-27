var iFileName = "The Emerald Crown";
RequiredSheetVersion("13.1.12");

SourceList["A:TEC"] = {
    name : "Ariadne's: The Emerald Crown",
    abbreviation : "A:TEC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/04/11"
};

MagicItemsList["sword and gourd"] = {
    name : "Sword and Gourd",
    source : [["A:TEC",7]],
    rarity : "rare",
    type : "wondrous item",
    attunement : true,
    description : "The sword is a +1 longsword, but deals necrotic damage instead of its normal damage. Whenever I hit a creatur with this weapon, I gain an amount of gourd charges equal to half the damage dealt. This can store up to 30 charges.",
    toNotesPage : [{
        name : "Gourd Charges",
        note : desc([
            "On my turn, I can expend a number of gourd charges to do the following:",
            "10 Charges: healing word, cure wounds.",
            "20 Charges: aid, lesser restoration.",
            "30 Charges: mass healing word, revivify."
        ])
    }],
    usages : 0,
    recovery : "1/2 dmg",
    spellcastingBonus : [{
        name : "Gourd Spells",
        spells : ["healing word", "cure wounds"],
        selection : ["healing word", "cure wounds"],
        times : 2,
        firstCol : 10
    }, {
        name : "Gourd Spells",
        spells : ["aid", "lesser restoration"],
        selection : ["aid", "lesser restoration"],
        times : 2,
        firstCol : 20
    }, {
        name : "Gourd Spells",
        spells : ["mass healing word", "revivify"],
        selection : ["mass healing word", "revivify"],
        times : 2,
        firstCol : 30
    }],
    weaponsAdd : ["Sword and Gourd"],
    weaponOptions : [{
        regExpSearch : /sword and gourd/i,
        name : "Sword and Gourd",
        baseWeapon : "longsword",
        source : [["A:TEC",7]],
        damage : [1, 8, "necrotic"],
        description : "Versatile (1d10)",
        modifiers : [1,1],
    }]
};

MagicItemsList["grasping death"] = {
    name : "Grasping Death",
    source : [["A:TEC", 8]],
    rarity : "very rare",
    type : "wondrous item (consumable)",
    description : desc([
        "I can throw this against a surface. Creatures within 15ft must make DC 14 Con. and DC 16 Cha. saving throws. Creatures take 4d8 necrotic damage upon failing the Con. save, or half on a success, and possed by an evil spirit for 1 minute upon failing the Cha. save."
    ]),
    toNotesPage : [{
        name : "Grasping Death: Possession & Death",
        note : desc([
            "While a creature is possessed, it cannot cast spells or communicate, and will attack the nearest creature regardless of allegiance. It can reroll the save at the end of each of its turns.",
            "If a creature dies while possessed or from the necrotic damage, thorns and brambles sprout in a 15ft radius turning the area into difficult terrain. For every 5ft traveled, a creature takes 1d4 piercing and 1d4 poison damage."
        ])
    }]
};

MagicItemsList["splintered greenhelm"] = {
    name : "Splintered Greenhelm",
    source : [["A:TEC", 8]],
    rarity : "rare",
    type : "wondrous item",
    attunement : true,
    description : desc([
        "I gain a +2 bonus to Survival, Animal Handling, and Medicine checks (not included in the automation). Once between short or long rest, I can grant myself a +2 to my AC and resistance to slashing, piercing, and bludgeoning damage. This lasts for 30 seconds, after which I roll 1d10. On a 1, the helm crumbles and becomes a common nonmagical helm."
    ]),
    usages : 1,
    recovery : "short rest"
};

MagicItemsList["amulet of prisma"] = {
    name : "Amulet of Prisma",
    source : [["A:TEC", 8]],
    rarity : "very rare",
    type : "wondrous item",
    attunement : true,
    description : desc([
        "While attuned, any radiant damage I deal becomes prismatic damage, ignoring radiant resistance and treating immunity as if it were resistance. Whenever a creature receives prismatic damage, it must succeed a DC 14 Con. save or be blinded until the end of its next turn."
    ])
};

FeatsList["boons of the fae serpent"] = {
    name : "Boons of the Fae Serpent",
    source : [["A:TEC", 16]],
    descriptionFull : "",
    description : "",
    allowDuplicates : true,
    choices : ["Fae Mind Shielding", "Fae Whispering", "Unknowable Resilience", "Coraphéist’s Heartbless", "Conjuration Circle"],
    "fae mind shielding" : {
        description : "I have advantage on saving throws against spells and effects that would frighten or charm me.",
        savetxt : { adv_vs : ["charmed", "frightened"] }
    },
    "fae whispering" : {
        description : "I can cast Speak With Animals and Speak With Plants without expending a spell slot or components. I can do so an amount of times equal to my Proficiency Bonus per long rest",
        limfeaname : "Fae Whispering",
        usages : "Proficiency bonus per",
        usagescalc : "event.value = How('Proficiency Bonus');",
        spellcastingBonus : [{
            name : "Fae Whispering",
            spells : ["speak with animals", "speak with plants"],
            selection : ["speak with animals", "speak with plants"],
            times : 2,
        }]
    },
    "unknowable resilience" : {
        description : "I gain a random damage resistance. I'm already resistant, I gain immunity instead."
    },
    "corapheist’s heartbless" : {
        description : "I gain a +1 to an ability score of my choice, up to a maximum of 24.",
        scorestxt : "+1 to an ability, up to a max of 24"
    },
    "conjuration circle" : {
        description : desc([
            "Once per week, I can spend a minute to perform a ritual to generate a mushroom that opens a planar gate to a location that I am familiar with, regardless of distance or planar boundaries. This lasts for 10 minutes or until I dispel it. The location must also support mushroom growth."
        ]),
        limfeaname : "Conjuration Circle",
        usages : 1,
        recovery : "week"
    }
}

AddSubClass("fighter", "moss knight", {
    regExpSearch : /^(?=.*moss)(?=.*knight).*$/i,
    subname : "Moss Knight",
    source : [["A:TEC", 52]],
    abilitySave : 5,
    spellcastingFactor : 3,
    spellcastingList : {
        "class" : "druid",
        level : [0,4]
    },
    spellcastingKnown : {
        cantrips : [0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3],
        spells : [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13]
    },
    features : {
        "subclassfeature3" : {
            name : "Thorn Sprout",
            source : [["A:TEC", 52]],
            minlevel : 3,
            description : "I can use my bonus action to sprout venomous thorns on my armor and weapons, which lasts for one minute. Attacks deal an additional 1d6 poison damage and when a creature hits me with a melee attack, they take 1d6 poison damage. While the thorns are sprouted, my melee attacks are magical. I can use this again once I finish a short or long rest.",
            usages : 1,
            recovery : "short rest",
            actions : ["bonus action", ""]
        },
        "subclassfeature3.1" : {
            name : "Druidic Casting",
            source : [["A:TEC", 52]],
            minlevel : 3,
            description : "\n   " + "I can cast known druid cantrips/spells, using Wisdom as my spellcasting ability",
            additional : ["", "", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
        },
        "subclassfeature7" : {
            name : "Sylvan Soul",
            soure : [["A:TEC", 52]],
            minlevel : 7,
            description : "I can communicate with beasts and plants as though we share a language. They are friendly to me unless they are under the effects of a curse or if I am overly hostile to them. Additionally, I gain resistance to poison damage and moving through nonmagical difficult terrain does not cost me extra movement. I can move through nonmagical plants without being slowed by them and void damage from them if they have thorns, spines, or similar hazards.",
            dmgres : ["posion"]
        },
        "subclassfeature10" : {
            name : "Permanent Thorns",
            source : [["A:TEC", 52]],
            minlevel : 10,
            description : "My Thorn Sprout ability is always active unless I choose to dismiss it. Additionally, whenever I hit a creature with a melee attack, they must succeed a Stength saving throw against my spell save DC or be restrained by magical vines until the end of their next turn.",
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if(v.isMeleeWeapon) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical; +1d6 poison dmg';
                        }
                    }
                ]
            }
        },
        "subclassfeature15" : {
            name : "Dryad Blood",
            source : [["A:TEC", 52]],
            minlevel : 15,
            description : "I gain immunity to poision damage, and cannot be affected by poison or disease. Additonally, I gain a bonus to all of my saving throws equal to my Wisdom modifier",
            addMod : [{ type : "save", field : "all", mod : "Wis", text : "I gain a bonus to all of my saving throws equal to my Wisdom modifier"}],
            savetxt : { immune : ["posion", "disease"]}
        },
        "subclassfeature18" : {
            name : "Moss Liege",
            source : [["A:TEC", 52]],
            minlevel : 18,
            description : "Flowers and herbs bloom behind me as I walk, and I can command plants and animals and they are compelled to heed them unless it is harmful to them or nature in general. I regenerate 1d4+1 hit points at the start of each of my turns and stopped aging.",
            usages : 1,
            recovery : "turn",
        }
    }
});

MagicItemsList["druid's kindness"] = {
    name : "Druid's Kindness",
    source : [["A:TEC", 54]],
    type : "potion",
    rarity : "rare",
    description : "When I drink this potion, I regain 2d4+2 hit points, and gain immunity to disease and resistance to necrotic and poison damage for the next 8 hours."
};

MagicItemsList["tome of the green mage"] = {
    name : "Tome of the Green Mage",
    source : [["A:TEC", 55]],
    rarity : "very rare",
    type : "focus",
    attunement : true,
    prerequisite : "requires attunement by a wizard",
    prereqeval : function(v) {return classes.known.wizard ? true : false;},
    description : "I gain a +1 to my spell save DC and spell attacks. If I use this as my spellbook, I can write and learn spells from the Druid spell list, but they count as wizard spells for me and uses Intelligence.",
    calcChanges : {
        spellList : [
            function(spList, spName, spType) {
                if (spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
                var druidSpellList = CreateSpellList({"class" : "druid", level : [0,4]}, false, false, false);
                spList.extraspells = spList.extraspells.concat(druidSpellList);
            }
        ],
        spellCalc : [
            function(type, spellcasters, ability) {
                if(type !== "prepare") return 1;
            }
        ]
    }
};

MagicItemsList["pashama's ear"] = {
    name : "Pashama's Ear",
    source : [["A:TEC", 55]],
    rarity : "rare",
    type : "wondrous item",
    attunement : true,
    description : "I gain the Keen Hearing trait which grants me advantage on Perception and Investigation checks that rely on hearing. Additionally, I have a blindsight range of 30 ft, which ceases to function if I am defeaned.",
    vision : [["Adv. on Perception and Investigation relying on hearing", 0], ["Blindsight", 30]]
};

MagicItemsList["greenfeather's mask"] = {
    name : "Greenfeather's Mask",
    source : [["A:TEC", 56]],
    rarity : "artifact",
    type : "wondrous item",
    attunement : true,
    description : "I gain a +2 to Con., Dex., and Str., up to a max of 26. If I am a barbarian and I am raging, I heal for 1d8 + my Con. mod at the start of my turn, and gain a fly speed of 60 ft.",
    scores : [2,2,2,0,0,0]
};

MagicItemsList["diarmuid's warboard"] = {
    name : "Diarmuid's Warboard",
    source : [["A:TEC", 56]],
    rarity : "legendary",
    type : "shield",
    attunement : true,
    description : "This is a +1 shield. Upon attuning, and as part of a short or long rest, I can choose which of the effects to activate as if I am under the Enhance Ability spell. Additionally, I can use my reaction to bash a target that missed me with a melee attack. They must succeed a DC 16 Strength saving throw or be knocked prone and restrained until the end of its next turn.",
    shieldAdd : ["Diarmuid's Warboard", 3, 6],
    actions : ["reaction", ""]
};

MagicItemsList["fragarch, the memory blade"] = {
    name : "Fragarch, the Memory Blade",
    source : [["A:TEC", 63]],
    rarity : "artifact",
    type : "weapon (longsword)",
    attunement : true,
    fixedDC : 22,
    description : "This +3 longsword deals an additional 1d8 psychic damage. Once per turn when I hit a creature, I can forgo the damage to cast Modify Memory (DC 22) or memory mark the target which lasts for 24 hours, unless they're on a different plane or a remove curse spell of 5th level or higher is used. As an action, I can cast modify memory on every memory marked target at once, if one target succeeds the save, then the spell doesn't affect any of the targets.",
    spellcastingBonus : [{
        name : "Memory Blade",
        spells : ["modify memory"],
        selection : ["modify memory"],
        times : 1
    }],
    weaponsAdd : ["Fragarch, the Memory Blade"],
    weaponOptions : [{
        regExpSearch : /fragarch, the memory blade/i,
        name : "Fragarch, the Memory Blade",
        baseWeapon : "longsword",
        description : "Versatile (1d10); +1d8 psychic",
        modifiers : [3,3]
    }]
};

MagicItemsList["gregoria's courage"] = {
    name : "Gregoria's Courage",
    source : [["A:TEC", 64]],
    rarity : "artifact",
    type : "shield",
    attunement : true,
    description : "This is a +2 shield, and I can cast Hellish Rebuke at will, but it deals radiant damage instead of fire. Once per short or long rest, I can use my action to immolate my enemies. Up to 10 creatures of my choice must make a DC 20 Dex save taking 8d6 fire and 8d6 radiant damage, or half on a save.",
    spellcastingBonus : [{
        name : "Gregoria's Courage",
        spells : ["hellish rebuke"],
        selection : ["hellish rebuke"],
        times : 1,
        firstCol : "atwill"
    }],
    spellChanges : {
        "hellish rebuke" : {
            description : "Cast when taking damage, creature that dealt damage takes 2d10 Radiant damage; save halves",
            descriptionFull : "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
            changes : "Damage becomes radiant instead of fire."
        }
    },
    shieldAdd : ["Gregoria's Courage", 4, 6],
    actions : ["action", "Immolate"]
};

MagicItemsList["first shard of the crown"] = {
    name : "First Shard of the Crown",
    source : [["A:TEC", 67]],
    rarity : "artifact",
    type : "wondrous item",
    attunement : true,
    description : "I gain a +1 to my spell save DC and spell attacks, and I am permanently under the effects of the Protection From Evil and Good spell. Any attacks I make deal an addition 1d6 radiant damage. At the start of my turn, I forgo the damage to gain the effects of the Sanctuary spell for the same duration.",
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if(!v.isDC) {
                    fields.Description += (fields.Description ? '; ' : '') + "+1d6 radiant"
                }
            }
        ],
        spellCalc : [
            function(type, spellcasters, ability) {
                if(type !== "prepare") return 1;
            }
        ]
    }
};

SpellsList["dazing spores"] = {
    name : "Dazing Spores",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 68]],
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "S:15-ft cone",
    components : "V,S",
    duration : "Instantaneous",
    save : "Con",
    description : "Save or take 1d4 poison dmg and unable to take reactions; no effect vs. crea with poison immunity; +1d4 at CL 5, 11, and 17",
    descriptionCantripDie : "Crea save or take `CD`d4 poision and no reactions until end of next turn; no effect vs. crea with poison immunity"
};

SpellsList["mushroom messaging"] = {
    name : "Mushroom Messaging",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 68]],
    level : 0,
    school : "Trans",
    time : "1 a",
    range : "10 miles",
    components : "V,S",
    duration : "Conc, until dispelled",
    description : "I and 1 willing crea in terrain able to grow mushrooms, communicate telepathetically"
}

SpellsList["ironwood tempering"] = { 
    name : "Ironwood Tempering",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 68]],
    level : 1,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    components : "V,S,M",
    compMaterial : "a shard of petrified wood",
    duration : "Conc, 1 hr",
    description : "One nonmagical armor or shield gains a +1 bonus to AC"
}

MagicItemsList["third shard of the emerald crown"] = {
    name : "Third Shard of the Emerald Crown",
    source : [["A:TEC", 24]],
    rarity : "artifact",
    type : "wondrous item",
    description : desc([
        "My spell save DC increases by 2 and my Wisdom score cannot be lower than a 20. In addition, I can cast the following spells: daylight, plant growtn, and control water (3/day each), sunbeam, wall of ice, and flame strike (1/day each)."
    ]),
    calcChanges : {
        spellCalc : [
            function(type, spellcasters, ability) {
                if(type === "dc") return 2;
            }
        ]
    },
    spellcastingBonus : [{
        name : "Emerald Crown (3/day each)",
        spells : ["daylight", "plant growth", "control water"],
        selection : ["daylight", "plant growth", "control water"],
        times : 3,
    }, {
        name : "Emerald Crown (1/day each)",
        spells : ["sunbeam", "wall of ice", "flame strike"],
        selection : ["sunbeam", "wall of ice", "flame strike"],
        times : 3,
    }]
};

RaceList["oberon"] = {
    regExpSearch : /oberon/i,
    name : "Oberon",
    source : [["A:TEC", 26]],
    plural : "Oberons",
    size : [3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    scores : [0, 0, 0, 0, 0, 2],
    scorestxt : "+2 to Charisma, +1 to any ability score",
    age : " immortal or 50 years on the material plane before being reborn",
    height : " ranges from no bigger than an owl to 7ft tall warriors",
    weight : " weigh between 30 lb to 190 lb",
    vision : [["Darkvision", 60]],
    languageProfs : ["Common", "Sylvan"],
    savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
    trait : "Oberon (+2 Charisma, +1 to any ability score)" + desc([
        "Fey: My creature type is fey, rather than humanoid.",
        "Flight: I start with a 30 ft fly speed. To use this speed, I can't be wearing medium or heavy armor. At 11th level, this becomes 50 ft and I can use it while wearing medium or heavy armor.",
        "Step of Light: I can cast Misty Step a number of times equal to my Proficiency Bonus per long rest"
    ]),
    features : {
        "flight1" : {
            name : "Flight",
            minlevel : 1,
            speed : { fly : { spd : 30, enc : 20 } }
        },
        "flight2" : {
            name : "Flight",
            minlevel : 11,
            speed : { fly : { spd : 50, enc : 20 } }
        },
        "step of light" : {
            name : "Step of Light",
            minlevel : 1,
            usages : "Proficiency bonus per",
            usagescalc : "event.value = How('Proficiency Bonus');",
            spellcastingBonus : [{
                name : "Step of Light",
                spells : ["misty step"],
                selection : ["misty step"],
                times : 1
            }]
        }
    }
};
RaceList["dryad"] = {
    regExpSearch : /dryad/i,
    name : "Dryad",
    source : [["A:TEC", 32]],
    plural : "Dryads",
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    scorestxt : "+1 to any ability score",
    vision : [["Darkvision", 30]],
    languageProfs : ["Common", "Sylvan", "Druidic"],
    age : " can live up to 500 years",
    height : " start off no larger than a doe, some grow as big as elk or bigger",
    weight : " weight between 70 lb to 250 lb",
    trait : "Dryad (+1 to any ability score)" + desc([
        "Fey: My creature type is fey, rather than humanoid.",
        "Druidic Nature: I can communicate with beasts and plants as if we share a language. I also gain the Druidcraft cantrip.",
        "Maiden's Calling: I gain a feat at 4th level, and another one at 8th level.",
        "Saints of the Emerald Queen: I gain a feat at 10th level, and another one at 14th level."
    ]),
    spellcastingBonus : [{
        name : "Druidic Nature",
        spells : ["druidcraft"],
        selection : ["druidcraft"],
        times : 1
    }],
    toNotesPage : [{
        name : "Maiden's Calling",
        note : desc([
            "I gain one of the following permanent benefits (coded as feats) when I reach 4th and 8th level:",
            "\u2022 Chaser of Light: I gain resistance to radiant damage and immunity to being blinded. My fur turns bright and sheds dim light out to 10 ft.",
            "\u2022 Shadow of Obscurity: I gain resistance to necrotic damage. Once per short or long rest while in dim light or darkness, I can blend in to become invisible for a minute, or until I attack or cast a spell. My darkvision increases by 60 ft.",
            "\u2022 Mother Nature's Embrace: I can cast Entangle, Goodberry, and Cure Wounds once per long rest each. Wisdom is my spellcasting ability. Additionally, once per turn, I can use 10 ft of movement to step into a tree and emerge from a second tree within 30 ft of it. I can carry a medium creature through without any movement penalties.",
            "\u2022 Call of the Guardian: My Strength increases by 1. I am now considered a large creature and my carry capacity is doubled. I can carry a medium creature on my back without any movement penalties.",
            "\u2022 Conflux of Distorsion: When I see a creature roll a saving throw, ability check, or attack roll within 30 ft of me, I can use my reaction to subtract or add 1d4 to the roll. I can use this a number of times equal to my Charisma modifier per short rest.",
            "\u2022 Keeper of the Emerald Crown: I gain advantage on saving throws against spells and other magical effects.",
            "\u2022 Elemental Affinity: I can choose one of the following elements and my fur color changes to match that element.",
            "   \u2022 Air: I gain a fly speed of 30 ft.",
            "   \u2022 Water: I gain resistance to cold damage. I can also breathe underwater and gain a swim speed of 60 ft.",
            "   \u2022 Earth: My Consitution increases by 1, and my total hit point maximum increases by 1 per level gained including levels previous to this feature.",
            "   \u2022 Fire: I gain resistance to fire damage. Once per short rest, when I take fire damage, I can use my reaction to gain immunity to fire damage until the end of my next turn."
        ]) 
    }, {
        name : "Saints of the Emerald Queen",
        note : desc([
            "I gain one of the following permanent benefits (coded as feats) when I reach 10th and 14th level:",
            "\u2022 Guiding Light",
            "\u2022 Darkspawn Chosen",
            "\u2022 Grove Defender",
            "\u2022 Incarnation of Chaos",
            "\u2022 Dryad Ascendance",
            "\u2022 Bulwark of Nature",
            "\u2022 Master of Elements"
        ])
    }]
};

FeatsList["chaser of light"] = {
    name : "Chaser of Light",
    source : [["A:TEC", 32]],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    description : "I gain resistance to radiant damage and immunity to being blinded. My fur turns bright and sheds dim light out to 10 ft.",
    savetxt : { immune : ["blinded"] },
    dmgres : ["Radiant"]
};

FeatsList["shadow of obscurity"] = {
    name : "Shadow of Obscurity",
    source : [["A:TEC", 32]],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    description : "I gain resistance to necrotic damage. Once per short or long rest while in dim light or darkness, I can blend in to become invisible for a minute, or until I attack or cast a spell. My darkvision increases by 60 ft.",
    dmgres : ["Necrotic"],
    vision : [["Darkvision", "+60"]],
    usages : 1,
    recovery : "short rest"
};

FeatsList["mother nature's embrace"] = {
    name : "Mother Nature's Embrace",
    source : [["A:TEC", 32]],
    description : "I can cast Entangle, Goodberry, and Cure Wounds once per long rest each. Wisdom is my spellcasting ability. Additionally, once per turn, I can use 10 ft of movement to step into a tree and emerge from a second tree within 30 ft of it. I can carry a medium creature through without any movement penalties.",
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    spellcastingBonus : [{
        spellcastingAbility : 5,
        name : "Mother Nature's Embrace",
        spells : ["entangle", "goodberry", "cure wounds"],
        selection : ["entangle", "goodberry", "cure wounds"],
        times : 3,
        firstCol : "oncelr"
    }],
    usages : 1,
    recovery : "Turn"
};

FeatsList["call of the guardian"] = {
    name : "Call of the Guardian",
    source : [["A:TEC", 32]],
    description : "My Strength increases by 1. I am now considered a large creature and my carry capacity is doubled. I can carry a medium creature on my back without any movement penalties.",
    scores : [1,0,0,0,0,0],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    eval : function () { PickDropdown("Size Category", 2); },
    removeeval : function () { PickDropdown("Size Category", 3); },
};

FeatsList["conflux of distorsion"] = {
    name : "Conflux of Distorsion",
    source : [["A:TEC", 32]],
    description : "When I see a creature roll a saving throw, ability check, or attack roll within 30 ft of me, I can use my reaction to subtract or add 1d4 to the roll. I can use this a number of times equal to my Charisma modifier per short rest.",
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    usages : "Charisma modifier per",
    usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
    recovery : "short rest"
};

FeatsList["keeper of the emerald crown"] = {
    name : "Keeper of the Emerald Crown",
    source : [["A:TEC", 32]],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    description : "I gain advantage on saving throws against spells and other magical effects.",
    savetxt : { adv_vs : ["saves vs spells and other magical effects"] }
};

FeatsList["elemental affinity"] = {
    name : "Elemental Affinity",
    source : [["A:TEC", 32]],
    description : "I can choose one of the following elements and my fur color changes to match that element.",
    allowDuplicates : false,
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    choices : ["Air", "Water", "Earth", "Fire"],
    "air" : {
        description : "I gain a fly speed of 30 ft.",
        speed : { fly : { spd : 30, enc : 20 } },
    },
    "water" : {
        description : "I gain resistance to cold damage. I can also breathe underwater and gain a swim speed of 60 ft.",
        speed : { swim : { spd : "fixed60", enc : "fixed50" } },
        dmgres : ["Cold"]
    },
    "earth" : {
        name : "My Consitution increases by 1, and my total hit point maximum increases by 1 per level gained including levels previous to this feature.",
        scores : [0,1,0,0,0,0]
    },
    "fire" : {
        description : "I gain resistance to fire damage. Once per short rest, when I take fire damage, I can use my reaction to gain immunity to fire damage until the end of my next turn.",
        dmgres : ["Fire"],
        action : ["reaction", "Elemental Affinity (fire)"],
        usages : 1,
        recovery : "short rest"
    }
};

FeatsList["guiding light"] = {
    name : "Guiding Light",
    source : [["A:TEC", 33]],
    description : "I gain a +1 to my Charisma, and the max becomes 22. I can cast the following spells at will at 1st level, requiring no material components: guiding bolt, color spray, faerie fire. I can use my action to use Step of Light to teleport to an unoccupied space within 30 ft of me.",
    scores : [0,0,0,0,0,1],
    scoresMax : [0,0,0,0,0,2],
    spellcastingBonus : [{
        name : "Guiding Light",
        spells : ["guiding bolt", "color spray", "faerie fire"],
        selection : ["guiding bolt", "color spray", "faerie fire"],
        spellcastingAbility : 6,
        times : 3,
        firstCol : "atwill"
    }],
    prerequisite : "Chaser of Light Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("chaser of light") !== -1 ;},
    actions : ["action", "Step of Light"]
};

FeatsList["darkspawn chosen"] = {
    name : "Darkspawn Chosen",
    source : [["A:TEC", 33]],
    description : "I gain a +1 to my Dexterity, and the max becomes 22. I can cast the following spells at will at 1st level, requiring no material components: darkness, see invisibility. I can see norrmally in both magical and nonmagical darknes to a range of 120 ft.",
    scores : [0,1,0,0,0,0],
    scoresMax : [0,22,0,0,0,0],
    prerequisite : "Shroud of Obscurity Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("shroud of obscurity") !== -1 ;},
    spellcastingBonus : [{
        name : "Darkspawn Chosen",
        spells : ["darkness", "see invisibility"],
        selection : ["darkness", "see invisibility"],
        spellcastingAbility : "class",
        times : 2,
        firstCol : "atwill"
    }],
    vision : [["Greater Darkvision", "fixed120"]]
};

FeatsList["grove defender"] = {
    name : "Grove Defender",
    source : [["A:TEC", 33]],
    description : "I gain a +1 to my Wisdom, and the max becomes 22. I can cast the following spells once per long rest: plant growth, polymorph.",
    scores : [0,0,0,1,0,0],
    scoresMax : [0,0,0,22,0,0],
    prerequisite : "Mother Nature's Embrace Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("mother nature's embrace") !== -1 ;},
    spellcastingBonus : [{
        name : "Grove Defender",
        spells : ["plant growth", "polymorph"],
        selection : ["plant growth", "polymorph"],
        spellcastingAbility : 5,
        times : 2,
        firstCol : "oncelr"
    }]
};

FeatsList["incarnation of chaos"] = {
    name : "Incarnation of Chaos",
    source :[["A:TEC", 33]],
    desription : "I can cast the following spells once per long rest requiring no material components: confusion, dimension door. Additionally, whenever I roll a 1 on an ability check or saving throw, I cantreat it as a natural 20.",
    prerequisite : "Conflux of Distorsion Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("conflux of distorsion") !== -1 ;},
    spellcastingBonus : [{
        name : "Incarnation of Chaos",
        spells : ["confusion", "dimension door"],
        selection : ["confusion", "dimension door"],
        spellcastingAbility : 5,
        times : 2,
        firstCol : "oncelr"
    }]
};

FeatsList["dryad ascendance"] = {
    name : "Dryad Ascendance",
    source : [["A:TEC", 33]],
    description : "My Wisdom increases by 1. Additionally, I can use Fey Charm.",
    scores : [0,0,0,0,1,0],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1},
    toNotesPage : [{
        name : "Fey Charm",
        note : desc([
            "I can target one humanoid or beast that I can see within 30 ft of me. If the target can see me, it must make a Wisdom saving throw or be charmed.",
            "While charmed, I am considered its trusted friend to be heeded and protected. Although it is not under my control, it takes my requests or actions in the most favorable way it can. Anytime I or my allies harm the target, it can repeat the saving throw. This lasts for an hour.",
            "If the target succeed's its saving throw, it is immune to Fey Charm for 24 hours. I can have no more than 1 humanoid and up to 3 beasts charmed at a time."
        ])
    }]
}

FeatsList["bulwark of nature"] = {
    name : "Bulwark of Nature",
    source : [["A:TEC", 33]],
    description : "My Constitution increases by 1, up to a max of 20, and my hit point maximum increases by 15. Additionally, I become immune to poison damage and the poisoned condition.",
    scores : [0,0,1,0,0,0],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1},
    dmgres : ["Poison"],
    savetxt : { immune : ["Poisoned", "Poison"]},
    calcChanges : {
        hp : function (totalHD, HDobj, prefix) {
            return [15, "Bulwark of Nature"]
        }
    }
}

SpellsList["summon greater fungi"] = {
    name : "Summon Greater Fungi",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 69]],
    school : "Conj",
    time : "1 a",
    range : "90 ft",
    level : 6,
    components : "V,S,M",
    compMaterial : "a vial filled with mycelium",
    duration : "Conc, 1 hr",
    description : "Summon giant mushroom; returns home if concentration breaks",
    descriptionFull : "You call forth a giant mushroom to aid you. It protects you and your allies and follows your verbal commands. If your concentration breaks, it returns to its home. The giant mushroom has the statistics of an awakened tree, but it is immune to poison damage, has an additional 30 hp, and can use Spore Breath." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the giant mushroom gains an additional 15 hit points and +2 to hit and damage rolls for each level above 6th."
}

CreatureList["giant mushroom"] = {
    name : "Giant Mushroom",
    source : [["A:TEC", 60]],
    size : 1,
    type : "Plant",
    alignment : "Unaligned",
    ac : 13,
    hp : 89,
    hd : [7, 12],
    speed : "20 ft",
    scores : [19,6,15,10,10,7],
    senses : "",
    passivePerception : 10,
    challengeRating : "2",
    proficiencyBonus : 2,
    attacksAction : 1,
    damage_resistances : "bludeoning, piercing",
    damage_vulnerabilities : "fire",
    damage_immunities : "poison",
    languages : "one language known by its creator",
    attacks : [{
        name : "Slam",
        ability : 1,
        damage : [3,6,"bludgeoning"],
        range : "Melee (10 ft)",
        description : "",
        abilitytodamage : false,
    }, {
        name : "Spore Breath (Recharge 5-6)",
        ability : 2,
        damage : [8, 6, "poison"],
        range : "30-ft cone",
        dc : true,
        abilitytodamage : false,
        description : "8d6 poison and poisoned, 1/2, no poisoned on save; Incapicated if crea is already poisoned",
    }],
    features : [{
		name : "False Appearance",
		description : "While the tree remains motionless, it is indistinguishable from a normal tree.",
	}],
    notes : [{
        name : "At Higher Levels",
        description : desc([
            "When casting Summon Greater Fungi at 7th level or higher, the Giant Mushroom gains an additional 15 hit points and a +2 to hit and damage rolls for each level above 6th"
        ])
    }]
}

SpellsList["blighting smite"] = {
    name : "Blighting Smite",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 69]],
    level : 3,
    school : "Evoc",
    time : "1 bns",
    range : "Self",
    components : "V",
    duration : "Conc, 1 min",
    description : "Next weapon hit +3d8+1d8/SL Necrotic dmg; save or speed 1/2, cannot regain hp; Crit and Disadv. vs Plants",
    descriptionFull : "On your next weapon hit, the attack deals an extra 3d8 necrotic damage. The target must make a Constitution saving throw or have it speed halved and cannot regain hp until the end of its next turn. When you hit a plant with a weapon imbued with this spell, it's always a critial hit and has disadvantage on the saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
}

MagicItemsList["ixion's greataxe"] = {
    name : "Ixion's Greataxe",
    source : [["A:TEC", 88]],
    type : "weapon (greataxe)",
    rarity : "artifact",
    attunement : true,
    description : "This +3 greataxe increases my critical range by 2. Additionally, it deals 2d8 dark damage on a hit. Only creatures with Necrotic immunity has resistance to this damage. See notes for removing the curse.",
    toNotesPage : [{
        name : "Removing Ixion's Curse",
        note : desc(["If I remove this curse with a remove curse spell at 9th level, I lose the additional 2d8 damage and instead gain life transference. This allows me to heal half the amount of hit points it deals on a successful attack against a creature. Alternatively, I can choose to redirect the healing to an ally with 30 ft of me"])
    }],
    weaponsAdd : ["Ixion's Greataxe"],
    weaponOptions : [{
        baseWeapon : "greataxe",
        regExpSearch : /ixion's/i,
        name : "Ixion's Greataxe",
        source : [["A:TEC", 88]],
        description : "Heavy, two-handed; +2d8 dark dmg or heal 1/2 dmg dealt if curse removed; Crit range +2",
        modifiers : [3,3]
    }]
}