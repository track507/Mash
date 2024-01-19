if (sheetVersion < 13001012) { throw "This script was made for a newer version of the sheet (v13.1.12). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com."; };
var iFileName = "Mythmaker5e_Spells";
RequiredSheetVersion("13.1.12");

//this file adds most, if not all, spells from r/MythMaker5e reddit. 
SourceList["MM5eS"] = {
    name : "Mythmaker5e Spells",
    abbreviation : "MM5eS",
    group : "Homebrew",
    url : 'https://www.reddit.com/r/Mythmaker5e/new/?f=flair_name%3A"Spell"',
    date : "2024/1/17"
};

SpellsList["dust cloud"] = {
    name : "Dust Cloud",
    source : [["MM5eS",0]],
    level : 0,
    classes : ["druid", "sorcerer", "wizard"],
    school : "Trans",
    time : "1 a",
    range : "15 ft",
    components : "S,M",
    compMaterial : "A pouch of sand",
    duration : "1 rnd",
    save : "Con",
    description : "10-ft cube, all creatures blinded; no blind on save; the area is heavily obscured.",
    descriptionFull : "You throw forth sand causing it to linger in the air and obscure a creatures vision. You create a 10ft cube at a point you can see within range. For the spell's duration, this area is considered as heavily obscured. Additionally, any creature within the spells area upon casting this spell must make a Constitution saving throw or become blinded until the spell ends.",
}
SpellsList["belittling smite"] = {
    name : "Belittling Smite",
    source : [["MM5eS",0]],
    level : 2,
    classes : ["paladin"],
    school : "Ench",
    time : "1 bns",
    range : "Self",
    components : "V",
    duration : "conc, 1 min",
    description : "1 crea 2d6+1d6/SL psychic damage to next melee attack; Target AC is determined by Charisma",
    descriptionFull : "The next time you hit a creature with a melee weapon attack during the spell's duration, you strike at the creatures ego, bypassing their physical defenses. The attack deals an additional 2d6 psychic damage and you use the target's Charisma rather than their AC when determining if the attack hits or misses" + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
    allowUpCasting : true
}
SpellsList["possess monster"] = {
    name : "Possess Monster",
    source : [["MM5eS",0]],
    level : 9,
    school : "Necro",
    time : "10 min",
    range : "5ft",
    components : "V,S,M",
    compMaterial : "Rare candles worth 500gp",
    duration : "Until Dispelled",
    description : "Choose 1 dead crea, skill check w/spell attack, DC is targets lvl/CR; Lose comp. on fail; Seize control on success",
    descriptionFull : "Choose 1 dead crea within range. You must succeed at skill check using your spell attack bonus with the DC being the target's level/CR, whichever is higher. On a failure, the spell components are consumed. On a success, you seize control of the target. While in control, you are deaf and blind, you are considered deaf and blinded to your own senses and instead can see through the target as if they were yours, assuming the body parts are still in tact. In addition, you cannot move your own body, but can move the target as if it were your own. The target retains all of its statistics except for the following changes. The HP is 15 times the spell slot expended, the AC is your spell save DC, its Int, Wis, and Cha scores are set to equal your scores. You may also cast spells through the target as if you were casting them. You retain being the target until you dismiss the spell as a bonus action, you are killed or incapacitated, or the body is reduced to 0 HP. In addition, whenever the target takes damage, you must make a Con saving throw as if you were attempting to maintain concentration on the spell. On a fail, this spells ends.",
}
SpellsList["possess person"] = {
    name : "Possess Person",
    source : [["MM5eS",0]],
    level : 7,
    school : "Necro",
    range : "5ft",
    components : "V,S,M",
    compMaterial : "Rare candles worth 100gp",
    description : "Choose 1 dead humanoid, skill check w/spell attack, DC is targets lvl/CR; Lose comp. on fail; Seize control on success",
    descriptionFull : "Choose 1 dead humanoid within range. You must succeed at skill check using your spell attack bonus with the DC being the target's level/CR, whichever is higher. On a failure, the spell components are consumed. On a success, you seize control of the target. While in control, you are deaf and blind, you are considered deaf and blinded to your own senses and instead can see through the target as if they were yours, assuming the body parts are still in tact. In addition, you cannot move your own body, but can move the target as if it were your own. The target retains all of its statistics except for the following changes. The HP is 10 times the spell slot expended, the AC is your spell save DC, its Int, Wis, and Cha scores are set to equal your scores. You may also cast spells through the target as if you were casting them. You retain being the target until you dismiss the spell as a bonus action, you are killed or incapacitated, or the body is reduced to 0 HP. In addition, whenever the target takes damage, you must make a Con saving throw as if you were attempting to maintain concentration on the spell. On a fail, this spells ends.",
}
//use CD for cantrip die
SpellsList["crushing tide"] = {
    name : "Crushing Tide",
    source : [["MM5eS",0]],
    level : 0,
    school : "Evoc",
    range : "5ft",
    components : "V,S,M",
    compMaterial : "A weapon that deals bludgeoning worth 1sp",
    duration : "1 rnd",
    description : "On a hit, Strength save or push 10ft away; +1d6 bludgeoning if pushed into wall or bigger than target." + AtHigherLevels + "At 5th level, the weapon deals an additional 1d6 bludgeoning and damage dealt by colliding with another object increases by 1d6. Both damage increase by 1d6 at 11th (2d6 and 3d6) and again at 17th (3d6 and 4d6)."
}