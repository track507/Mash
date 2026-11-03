var iFileName = "The City of Strings.js";
RequiredSheetVersion("13.1.13");

SourceList["A:TCoS"] = {
    name : "Ariadne's: The City of Strings",
    abbreviation : "A:TCoS",
    abbreviationSpellsheet : "A",
    url : "https://www.patreon.com/posts/city-of-strings-105736877",
    date : "2024/06/07"
}

MagicItemsList["invitation to the city of strings"] = {
    name : "Invitation to the City of Strings",
    source : [["A:TCoS", 28]],
    type : "wondrous item",
    rarity : "very rare",
    description : "This letter is needed to get through the Aurinoir Checkpoint, but does not exempt me and my allies from being thorougly searched and background checked. Once I touch this letter, it becomes sentient and is bound to me. If it is lost, it returns after 8 hours have passed, and after 30 days of not opening it, it combusts. It is taken at the checkpoint. See notes.",
    toNotesPage : [{
        name : "Invitation to the City of Strings: Letter",
        note : desc([
            "This letter becomes sentient when I touch it and has 10 hp, 15 AC, and a fly speed of 60 ft. It is immune to psychic, poison, and necrotic damage, and is vulnerable to fire damage."
        ])
    }]
}

MagicItemsList["ariadne's letter of recommendation"] = {
    name : "Ariadne's Letter of Recommendation",
    source : [["A:TCoS", 28]],
    type : "wondrous item",
    rarity : "legendary",
    description : "This letter allows me and up to 4 willing creatures to teleport across the planes, appearing in a designated teleportation circle within the Aurinoir Checkpoint. I can keep this even after I pass the checkpoint, but any creatures brought here by this letter must be searched. Within the City of Strings, this letter ensures the best treatment at any establishment of the Order of Strings. See notes."
}

RaceList["half-giant"] = {
    regExpSearch : /^(?=.*half)(?=.*giant).*$/i,
    name : "Half-giant",
    source : [["A:TCoS", 35]],
    plural : "Half-giants",
    size : 2,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    age : " up to 2 centuries",
    height : " stand between 7 feet and 9.5 feet tall",
    weight : " weighs around 290 lbs",
    scores : [2,0,0,0,0,0],
    scorestxt : "+2 Strength, +1 to any other ability score",
    trait : "Half-giant (+2 Strength, +1 to any other ability score)" + desc([ 
        "Elder Magic: Choose a giant ancestry",
        "Brutal Strikes: When I am wielding a melee weapon with the heavy and two-handed properties, I gain a +1 bonus to attack and damage rolls with that weapon"
    ]),
    vision : ["Darkvision", 60],
    variants : [],
    calcChanges : {
        atkCalc : [
            function(fields, v, output) {
                // must be a heavy and two-handed melee weapon
                if((/heavy/i).test(fields.Description) && (/((^|[^+-]\b)2|\btwo).?hand(ed)?s?/i).test(fields.Description) && v.isMeleeWeapon) {
                    output.magic += 1;
                }
            }
        ]
    }
}

AddRacialVariant("half-giant", "fire", {
    regExpSearch : /fire/i,
    source : [["A:TCoS", 35]],
    trait : "Fire Half-giant (+2 Strength, +1 to any other ability score)" + desc([ 
        "Elder Magic: I know the fire bolt cantrip. At 3rd level, I can cast scorching ray once per short rest. These spells use Constitution as my spellcasting ability",
        "Brutal Strikes: When I am wielding a melee weapon with the heavy and two-handed properties, I gain a +1 bonus to attack and damage rolls with that weapon"
    ]),
    spellcastingAbility : 3,
    spellcastingBonus : [{
        name : "Elder Magic",
        spells : ["fire bolt"],
        selection : ["fire bolt"],
        times : 1
    }, {
        name : "Elder Magic",
        spells : ["scorching ray"],
        selection : ["scorching ray"],
        times : levels.map(function(n) {
            return n < 3 ? 0 : 1;
        })
    }]
})

AddRacialVariant("half-giant", "cloud", {
    regExpSearch : /cloud/i,
    source : [["A:TCoS", 35]],
    trait : "Cloud Half-giant (+2 Strength, +1 to any other ability score)" + desc([ 
        "Elder Magic: I know the prestidigiation cantrip. At 3rd level, I can cast gust of wind once per short rest. These spells use Constitution as my spellcasting ability",
        "Brutal Strikes: When I am wielding a melee weapon with the heavy and two-handed properties, I gain a +1 bonus to attack and damage rolls with that weapon"
    ]),
    spellcastingAbility : 3,
    spellcastingBonus : [{
        name : "Elder Magic",
        spells : ["prestidigitation"],
        selection : ["prestidigitation"],
        times : 1
    }, {
        name : "Elder Magic",
        spells : ["gust of wind"],
        selection : ["gust of wind"],
        times : levels.map(function(n) {
            return n < 3 ? 0 : 1;
        })
    }]
})

AddRacialVariant("half-giant", "storm", {
    regExpSearch : /storm/i,
    source : [["A:TCoS", 35]],
    trait : "Storm Half-giant (+2 Strength, +1 to any other ability score)" + desc([ 
        "Elder Magic: I know the shocking grasp cantrip. At 3rd level, I can cast shatter once per short rest. These spells use Constitution as my spellcasting ability",
        "Brutal Strikes: When I am wielding a melee weapon with the heavy and two-handed properties, I gain a +1 bonus to attack and damage rolls with that weapon"
    ]),
    spellcastingAbility : 3,
    spellcastingBonus : [{
        name : "Elder Magic",
        spells : ["shocking grasp"],
        selection : ["shocking grasp"],
        times : 1
    }, {
        name : "Elder Magic",
        spells : ["shatter"],
        selection : ["shatter"],
        times : levels.map(function(n) {
            return n < 3 ? 0 : 1;
        })
    }]
})

RaceList["rhazaali"] = {
    regExpSearch : /rhazaali/i,
    name : "Rhazaali",
    source : [["A:TCoS", 35]],
    plural : "Rhazaali's",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    age : " up to 80 years",
    height : " stand between 5-6 feet tall",
    weight : " weighs around 180 lbs",
    scores : [0,0,0,2,0,0],
    vision : ["Darkvision", 60],
    skills : ["Investigation", "Insight"],
    abilitySave : 1,
    scorestxt : "+2 Intelligence, +1 to any other ability score",
    trait : "Rhazaali (+2 Intelligence, +1 to any other ability score)" + desc([ 
        "Reptilian Tail: I can use my tail to manipulate objects with precision and make unarmed strikes with it. The damage dealt is that of a normal unarmed strike and the target make make a Strength saving throw or be knocked prone",
        "Limb Regeneration: I can regrow limbs. Minor limbs such as hands, fingers, feet, ears, etc take 1d4 days to regrow. Major limbs such as arms, legs, tails, etc take one month to regrow"
    ]),
    weaponsAdd : ["Reptilian Tail"],
    weaponOptions : [{
        regExpSearch : /reptilian tail/i,
        name : "Reptilian Tail",
        baseWeapon : "unarmed strike",
        source : [["A:TCoS", 35]],
        description : "On hit, Strength save or knocked prone"
    }]
}

RaceList["batraiki"] = {
    regExpSearch : /batraiki/i,
    name : "Batraiki",
    source : [["A:TCoS", 35]],
    plural : "Batraiki's",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : "walk", enc : "walk"}
    },
    age : " up to 3 centuries",
    height : " stand between 5' to 5'8\"  tall",
    weight : " weighs around 200 lbs",
    scores : [0,0,2,0,1,0],
    vision : ["Darkvision", 60],
    skills : ["Investigation", "Insight"],
    abilitySave : 1,
    trait : "Rhazaali (+2 Wisdom, +1 Constitution)" + desc([ 
        "Amphibious: I can breathe air and water",
        "Magical Reserves: Once per long rest, I can use an action and touch a creature and they recover an expended spell slot, the maximum level being one fourth of my total character level, rounded down (minimum of 1)",
        "Iconclad Memory: I have proficiency with History, Nature, and Religion. Additionally, I can recall any information I've heard in the past month"
    ]),
    skills : ["History", "Nature", "Religion"],
    limfeaname : "Magical Reserves",
    usages : 1,
    recovery : "long rest"
}