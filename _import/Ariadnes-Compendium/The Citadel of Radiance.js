var iFileName = "The_Citadel_of_Radiance";
RequiredSheetVersion("13.1.13");

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

//The citadel of radiance
SourceList["A:TCoR"] = {
    name : "Ariadne's: The Citadel of Radiance",
    abbreviation : "A:TCoR",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};

CompanionList["ariadne's: the citadel of radiance companion codex"] = {
    name : "Ariadne's: The Citadel of Radiance Companion Codex",
    nameMenu : "Companion",
    source : [["A:TCoR", 0],["A:CoS", 0]]
}

MagicItemsList["ariadne's elemental capsules"] = {
    name : "Ariadne's Elemental Capsules",
    source : [["A:TCoR", 3]],
    type : "wondrous item",
    rarity : "uncommon",
    description : "Upon consuming one of these capsules, I gain resistance to its associated damage type for the next eight hours, or immunity if I am already resistant from another source. (Acid, Fire, Lightning, Cold, or Thunder)"
}

MagicItemsList["steamed oysters from the penninsula"] = {
    name : "Steamed Oysters from the Penninsula",
    source : [["A:TCoR", 3]],
    type : "food and drink",
    rarity : "common",
    description : "After eating, I gain 5 temp hp. After a minute, I take 2 acid damage. Eating more than 3 of these oysters within the next hour will cause me to be poisoned. If I consume 10 in 12 hours, I suffer 20d6 Acid damage."
}

MagicItemsList["sungrass-roasted honey garlic"] = {
    name : "Sungrass-Roasted Honey Garlic",
    source : [["A:TCoR", 3]],
    type : "food and drink",
    rarity : "common",
    description : "Sweet and savory herbal traits boost my immune system. After eating one, I gain advantage on the next Constitution saving throw I make in the next 6 hours. I can only benefit from this, once per long rest.",
}

MagicItemsList["spellbane dagger"] = {
    name : "Spellbane Dagger",
    source : [["A:TCoR", 4]],
    type : "weapon (dagger)",
    rarity : "very rare",
    description : "This dagger has a +2 bonus to attack and damge rolls. On a hit, creatures that can cast spells suffer a -1 penalty to their spell save DC and spell attacks for the next 10 minuts. This can stack up to 3 times, and every time you hit a creature with the max penalty renews the debuff timer. A remove curse or similar effect can end this early.",
    weaponsAdd : ["Spellbane Dagger"],
    weaponOptions : [{
        name : "Spellbane Dagger",
        regExpSearch : /spellbane dagger/i,
        baseWeapon : "dagger",
        modifiers : [2,2]
    }]
}

MagicItemsList["firebolt repeater"] = {
    name : "Firebolt Repeater",
    source : [["A:TCoR", 4]],
    type : "wondrous item",
    rarity : "legendary",
    descripion : "This Large object is a rejected prototype for the official militia that found its way into the emporium's basement after being rejected. See notes page.",
    toNotesPage : [{
        name : "Firebolt Repeater Statistics",
        note : desc([
            "This repeater is Large, has an AC of 20, 160 hit points, and is immune to Poison and Psychic damage.",
            "To move the repeater without tools, all creatures attempting to move it must make a combined Strength (Athletics) check with a DC of 25 to move it 15 ft in any direction",
            "It takes one action to aim and one action to fire it. It can turn 360 degrees to aim anywhere within a 600 ft radius around itself. When fired, the gunner chooses which one of the following actions is triggered: ",
            "\u2022 Burst of Firebolts (Recharge 5-6): 2d4+2 firebolts are fired towards any number of targets within 15 ft of the point where the artifact is aimed at. Each firebolt has a +7 bonus to hit and deals 2d10 fire damage",
            "\u2022 Concentrated Fire (Recharge 5-6): A potent beam of elemental fire is launched to a point within range, dealing 10d10+20 fire damage to objects and creatures within a 15 ft radius of that point. Creatures can attempt a DC 15 Dexterity saving throw to take half damage."
        ])
    }]
}

RaceList["celesari"] = {
    name : "Celesari",
    regExpSearch : /^(?=.*celesari).*$/i,
    source : [["A:TCoR", 8]],
    plural : "Celesari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,2,0,0],
    age : " double that of their parent race",
    height : " considered medium creatures",
    weight : " thin and angular",
    vision : [["Darkvision", 60], ["Limited Truesight", 60]],
    trait : "Celesari (+2 Intelligence)" + desc([ 
        "I gain a +1 bonus to my AC", 
        "Limited Truesight: I have 60 ft of darkvision, but I can focus my eyes a number of seconds equal to 6 times my character level to gain truesight."
    ]),
    extraAC : [{name : "Celesari Rock Skin", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
}

RaceList["celesari, asterian"] = {
    name : "Celesari, asterian",
    regExpSearch : /^(?=.*celesari)(?=.*asterian).*$/i,
    source : [["A:TCoR", 8]],
    plural : "Celesari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,1,0,2,0,0],
    age : " double that of their parent race",
    height : " considered medium creatures",
    weight : " thin and angular",
    vision : [["Darkvision", 60], ["Limited Truesight", 60]],
    trait : "Celesari (+2 Intelligence, +1 Constitution)" + desc([ 
        "I gain a +1 bonus to my AC", 
        "Limited Truesight: I have 60 ft of darkvision, but I can focus my eyes a number of seconds equal to 6 times my character level to gain truesight.",
        "Gravitational Control: I know the Magic Stone cantrip. When I reach 3rd level, I can cast Feather Fall once per long rest. When I am level 5, I can cast fly once per long rest. Intelligence is my spellcasting ability for this."
    ]),
    extraAC : [{name : "Celesari Rock Skin", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
    spellcastingAbility : 4,
    features : {
        "celesari1" : {
            name : "Magic Stone",
            minlevel : 1,
            spellcastingBonus : [{
                name : "Magic Stone",
                spells : ["magic stone"],
                selection : ["magic stone"],
                firstCol : "oncelr",
                times : 1
            }]
        },
        "celesari3" : {
            name : "Feather Fall",
            minlevel : 3,
            spellcastingBonus : [{
                name : "Feather Fall",
                spells : ["feather fall"],
                selection : ["feather fall"],
                firstCol : "oncelr",
                times : 1
            }]
        },
        "celesari5" : {
            name : "Fly",
            minlevel : 5,
            spellcastingBonus : [{
                name : "Fly",
                spells : ["fly"],
                selection : ["fly"],
                firstCol : "oncelr",
                times : 1
            }]
        }
    }
}

RaceList["celesari, void-eyed"] = {
    name : "Celesari, Void-Eyed",
    regExpSearch : /^(?=.*celesari)(?=.*void-eyed).*$/i,
    source : [["A:TCoR", 8]],
    plural : "Celesari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,2,0,0],
    skills : [
        ["Intimidation", "increment"]
    ],
    age : " double that of their parent race",
    height : " considered medium creatures",
    weight : " thin and angular",
    vision : [["Darkvision", 60], ["Limited Truesight", 60]],
    extraAC : [{name : "Celesari Rock Skin", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
    trait : "Celesari (+2 Intelligence)" + desc([ 
        "I gain a +1 bonus to my AC", 
        "Limited Truesight: I have 60 ft of darkvision, but I can focus my eyes a number of seconds equal to 6 times my character level to gain truesight.",
        "Windows to the Dooming Dark: I gain proficiency with Intimidation, or expertise if I am already proficient.",
        "Gift of the World-Eater: Whenever I deal an instance of fire, cold, lightning, thunder, psychic, or force damage to a creature, I can make the creature roll a Strength saving throw with the a DC if 8 + my intelligence mod. + Prof. bonus. On a fail, they take twice my level in force damage and knocked prone. I can use this twice per long rest, one per each eye. After using one, one of my eyes goes dark, and I cannot see through it for an hour after."
    ]),
    limfeaname : "Gift of the World-Eater",
    usages : 2,
    recovery : "long rest",
    spellcastingAbility : 4
}

SpellsList["pulverizing radiance"] = {
    name : "Pulverizing Radiance",
    source : [["A:TCoR", 2]],
    level : 5,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "Make ranged spell akt; 6d6+20 Radiant dmg and target gains 3 stacks of irradiated"
};
