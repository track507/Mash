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

// Code Dryad as feats since sheet doesnt allow for RaceList choices
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