var iFileName = "The_Molten_Crucible";
RequiredSheetVersion("13.1.13");

SourceList["A:TMC"] = {
    name : "Ariadne's: The Molten Crucible",
    abbreviation : "A:TMC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/05/11"
};

MagicItemsList["shard of ember pass"] = { 
    name : "Shard of Ember Pass",
    source : [["A:TMC", 3]],
    type : "treasure",
    rarity : "rare",
    description : "A shard does little on its own, but a proficient arcane smith can use this to create magical wonders. I can work with my DM with creating my own magic item using this shard."
}

RaceList["numarii"] = {
    regExpSearch : /^(?=.*numarii).*$/i,
    name : "Numarii",
    source : [["A:TMC", 10]],
    plural : "Numarii",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,0,2,0],
    age : " can live up to 150 years",
    height : " are generally shorter than humans",
    weight : " quite thin, 1/3 of humans",
    vision : [["Darkvision", 60]],
    trait : "Numarii (+2 Wisdom)" + desc([ 
        "Flaming Form: I know the Control Flames cantrip and immune to fire damage", 
        "As a bonus action, I light my fur and considered Ignited, dealing 1d6 fire damage to creatures around me. Everything that I carry catches fire if I am still Ignited after a full round has passed. I extinguish the flames at any point, no action required.",
    ]),
    spellcastingBonus : [{
        name : "Flaming Form",
        spells : ["control flames"],
        selection : ["control flames"],
        times : 1
    }],
    action : ["bonus action", "Flaming Form"]
}

RaceList["numarii, of might"] = {
    regExpSearch : /^(?=.*numarii)(?=.*might).*$/i,
    name : "Numarii, Of Might",
    source : [["A:TMC", 10]],
    plural : "Numarii",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [1,0,0,0,2,0],
    age : " can live up to 150 years",
    height : " are generally shorter than humans",
    weight : " quite thin, 1/3 of humans",
    vision : [["Darkvision", 60]],
    trait : "Numarii (+1 Strength, +2 Wisdom)" + desc([ 
        "Flaming Form: I know the Control Flames cantrip and immune to fire damage", 
        "As a bonus action, I light my fur and considered Ignited, dealing 1d6 fire damage to creatures around me. Everything that I carry catches fire if I am still Ignited after a full round has passed. I extinguish the flames at any point, no action required.",
        "Blessing of Might: Once per long rest, I can treat a roll below 9 or lower as a 10 on a ability check or saving throw. Additionally, when I use this ability, for the next minute, I gain a +2 to my Strength and Constitution scores."
    ]),
    limfeaname : "Blessing of Might",
    usages : 1,
    recovery : "long rest",
    spellcastingBonus : [{
        name : "Flaming Form",
        spells : ["control flames"],
        selection : ["control flames"],
        times : 1
    }],
    action : ["bonus action", ""]
}

RaceList["numarii, of dusk"] = {
    regExpSearch : /^(?=.*numarii)(?=.*dusk).*$/i,
    name : "Numarii, Of Dusk",
    source : [["A:TMC", 10]],
    plural : "Numarii",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,1,2,0],
    age : " can live up to 150 years",
    height : " are generally shorter than humans",
    weight : " quite thin, 1/3 of humans",
    vision : [["Darkvision", 60]],
    trait : "Numarii (+1 Intelligence, +2 Wisdom)" + desc([ 
        "Flaming Form: I know the Control Flames cantrip and immune to fire damage", 
        "As a bonus action, I light my fur and considered Ignited, dealing 1d6 fire damage to creatures around me. Everything that I carry catches fire if I am still Ignited after a full round has passed. I extinguish the flames at any point, no action required.",
        "A Setting Sun: I gain resistance to necrotic damage. Additionally, I can see through magical darkness, and gain the Cruel Fate feat.", //I dont have access in their patreon for this feat
        "Wielder of Dusk's Artifacts: I gain an additional attunement slot and ignore the alignment requirements for attuning to magical items.",
        "Additionally, I gain proficiency with Smith's Tools and Sleight of Hand skills."
    ]),
    toolProfs : ["Smith's Tools"],
    skills : ["Sleight of Hand"],
    limfeaname : "Blessing of Might",
    usages : 1,
    recovery : "long rest",
    spellcastingBonus : [{
        name : "Flaming Form",
        spells : ["control flames"],
        selection : ["control flames"],
        times : 1
    }],
    action : ["bonus action", ""]
}