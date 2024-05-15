var iFileName = "The Ichorous Peninsula"
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

if(!CompanionList["ariadne's companion codex"]) {
    CompanionList["ariadne's companion codex"] = {
        name : "Ariadne's Companion Codex",
        nameMenu : "Companion",
        source : [["A:CoS", 0]]
    }
}

SourceList["A:TIP"] = {
    name : "Ariadne's: The Ichorous Peninsula",
    abbreviation : "A:TIP",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
SpellsList["death and despair"] = {
    name : "Death and Despair",
    source : [["A:TIP", 4]],
	level : 8,
    school : "Necro",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "90 ft",
	components : "V,S",
    duration : "Conc, 1 min",
    save : "Con",
    description : "30ft wide, 10ft tall cylinder; all crea 12d6 Necrotic dmg and demoralized; save halves and not demoralized; see desc.",
    descriptionFull : "Choose a 30 ft radius surface you can see within range. All creatures that are within 10 ft high of the surface must make a Constitution saving throw taking 12d6 Necrotic damage, or half as much on a save. A creature must make a save when it enters the spells area for the first time or ends its turn there. Nonmagical plants with and die, while magical plants receive double damage. All creatures damaged by this spell at least twice must make a Wisdom saving throw or become demoralized. A demoralized creature has its speed reduced to 0 and falls to its knees in absolute despair."
};
SpellsList["thunderous crimson"] = {
    name : "Thunderous Crimson",
    source : [["A:TIP", 2]],
	level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "S:30-ft cone",
	components : "V,S",
    duration : "Instantaneous",
    save : "Dex",
    description : "4d4+2d4/SL Lightning dmg, dazzled until end of their next turn; save no dmg, not dazzled",
    descriptionFull : "You summon a wave of crackling red lightning that travels in a 30 foot cone in front of you. Each crea in that area must succeed a Dexterity save or suffer 4d4 lightning damage and be dazzled until the end of their next turn" + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot about 1st level."
};
MagicItemsList["poncho of caustic ethrealness"] = {
    name : "Poncho of Caustic Ethrealness",
    source : [["A:TIP", 2]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "To attune to this item, a creature must wear this poncho for 1 minute, taking 1d6 acid damage every round. After which the poncho stops harming them, you gain resistance to acid damage and can cast etherealness once per long rest. Additionally, when hit by a melee attack by a creature within 5 ft, the attacker takes 2d6 acid damage.",
    spellcastingBonus : [{
        name : "Caustic Etherealness",
        spells : ["etherealess"],
        selection : ["etherealness"],
        times : 1,
        firstCol : "oncelr"
    }],
    dmgres : ["Acid"],
};
MagicItemsList["orb of threadseeking"] = {
    name : "Orb of Threadseeking",
    source : [["A:TIP", 4]],
    type : "artifact",
    rarity : "legendary",
    attunement : true,
    description : "Attuning to this item means that I am now the owner of a personal sub-section of the City of Strings, a timeless demiplane (see desc). As long as I have the orb in my possession, I can open a planar gate as an action which lasts until I dismiss it (no action required).",
    toNotesPage : [{
        name : "Orb of Threadseeking: Demiplane",
        note : desc([
            "The demiplane has a surface space of 8000 square feet, which you may arrange in anyway you wish. Typical rooms found in a threadseeker's demiplane include the following:",
            toUni("Arcanist's Laboratory (2000 square feet): ") + "A room to accomdate the mysteries of the cosmos. It has special instruments allowing me to cast the identify, comprehend languages, and detect posion and disease spells at will while inside the room.",
            toUni("Arcane Observatory (4000 square feet): ") + "A room to gaze at the stars of the multiverse. While inside, I can use its arcane telescope to view any place I previously visited. When doing so, the area I can see is a 20ft radius sphere and I can move it up to 15ft as an action",
            toUni("Crafting Station (4000 square feet): ") + "A room filled with arcane machinery. While in this room, I can cast the fabricate spell at will. I am also considered proficient with every type of tool for the purposes of what I can create with this room's ability.",
            "These are only examples. You can work with your DM to determing hoe the 8000 square feet is used. The more powerful the room, the more space it should occupy."
        ])
    }],
    action : ["action", "Open Demiplane Gate"]
};
RaceList["misbegotten"] = {
    regExpSearch : /misbegotten/i,
    name : "Misbegotten",
    source : [["A:TIP", 8]],
    plural : "Misbegottens",
    //stuff to make the pdf not yell at me
    trait : "You have not chosen a race yet!" +
    "\n Please pick a race and then pick 'Misbegotten' again" +
    "\n All features from the previous race will be merged to 'Misbegotten'",
    size : [],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    dmgres : ["Pick psychic/fire/acid/necrotic/cold"],
    scorestxt : "+1 to Constitution, Any bonuses from previous race",
    scores : [0,0,1,0,0,0],
    toNotesPage : [{
        name : "Misbegotten",
        note : desc([
            "Abberrant Form: You have advantage on saving throws against being charmed and frightened. Additionally, you can use a bonus action to extend and retract tentacle-like appendages from your back. These have a reach of 10ft and can be used as natural weapons, dealing 1d6 piercing damage. I am proficient with these weapons and gain advantage in atheletics and acrobatics while using them.",
            "Twilight Veil: ",
            "Whispers of Madness: ",
            "Tainted Resilience : "
        ])
    }],
    useFromPreviousRace : {
        message : "You gain the following:"+
        desc([
            "Replace one current racial feature with one from the notes page.",
            "You now have resistance to one of the following: psychic, fire, acid, necrotic, or cold.",
            "You gain advantage on saving throws against disease and posion."
        ]),
        gainTraits : ["everything"],
        updateName : ["Misbegotten", "prefix"]
    },
};

FeatsList["field medic"] = {
    name : "Field Medic",
    source : [["A:TIP", 2]],
    description : "I gain proficiency in slight of hand, or expertise if I'm already proficient. As a bonus action, I can expend a hit die to heal a creature within 5ft of me. The creature gains half my level in hit points. I can do this a number of times equal to my Proficiency bonus per short rest.",
    action : ["bonus action", ""],
    usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "short rest",
    calculate : "event.value = \"I gain proficiency in slight of hand, or expertise if I'm already proficient. As a bonus action, I can expend a hit die to heal a creature within 5ft of me. The creature gains lvl (' + Math.ceil(What('Character Level')/2) + ') in hit points. I can do this a number of times equal to my Proficiency bonus per short rest.\";"
};
FeatsList["heroic presence"] = {
    name : "Heroic Presence",
    source : [["A:TIP", 4]],
    description : "During combat, and if I am conscious and not restrained, paralyzed, or incapacitated, allies within 15 ft of me can add 1d4 to any attack or ability check they make.",
    additional : ["+1d4 to ability checks and attack rolls"]
};