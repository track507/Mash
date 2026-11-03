if (sheetVersion < 13001012) { throw "This script was made for a newer version of the sheet (v13.1.12). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com."; };
var iFileName = "Mythmaker5e_Spells";
RequiredSheetVersion("13.1.12");

//this file adds most, if not all, spells from r/MythMaker5e reddit. 
//the reddit includes multiple people, 
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
    range : "5 ft",
    components : "V,S,M",
    compMaterial : "Rare candles worth at least 500gp",
    duration : "Until Dispelled",
    description : "Choose 1 dead crea, skill check w/spell attack, DC is targets lvl/CR; Lose comp. on fail; Seize control on success",
    descriptionFull : "Choose 1 dead crea within range. You must succeed at skill check using your spell attack bonus with the DC being the target's level/CR, whichever is higher. On a failure, the spell components are consumed. On a success, you seize control of the target. While in control, you are deaf and blind, you are considered deaf and blinded to your own senses and instead can see through the target as if they were yours, assuming the body parts are still in tact. In addition, you cannot move your own body, but can move the target as if it were your own. The target retains all of its statistics except for the following changes. The HP is 15 times the spell slot expended, the AC is your spell save DC, its Int, Wis, and Cha scores are set to equal your scores. You may also cast spells through the target as if you were casting them. You retain being the target until you dismiss the spell as a bonus action, you are killed or incapacitated, or the body is reduced to 0 HP. In addition, whenever the target takes damage, you must make a Con saving throw as if you were attempting to maintain concentration on the spell. On a fail, this spells ends.",
}
SpellsList["possess person"] = {
    name : "Possess Person",
    source : [["MM5eS",0]],
    level : 7,
    school : "Necro",
    range : "5 ft",
    components : "V,S,M",
    compMaterial : "Rare candles worth at least 100gp",
    description : "Choose 1 dead humanoid, skill check w/spell attack, DC is targets lvl/CR; Lose comp. on fail; Seize control on success",
    descriptionFull : "Choose 1 dead humanoid within range. You must succeed at skill check using your spell attack bonus with the DC being the target's level/CR, whichever is higher. On a failure, the spell components are consumed. On a success, you seize control of the target. While in control, you are deaf and blind, you are considered deaf and blinded to your own senses and instead can see through the target as if they were yours, assuming the body parts are still in tact. In addition, you cannot move your own body, but can move the target as if it were your own. The target retains all of its statistics except for the following changes. The HP is 10 times the spell slot expended, the AC is your spell save DC, its Int, Wis, and Cha scores are set to equal your scores. You may also cast spells through the target as if you were casting them. You retain being the target until you dismiss the spell as a bonus action, you are killed or incapacitated, or the body is reduced to 0 HP. In addition, whenever the target takes damage, you must make a Con saving throw as if you were attempting to maintain concentration on the spell. On a fail, this spells ends.",
}
//use CD for cantrip die
SpellsList["crushing tide"] = {
    name : "Crushing Tide",
    source : [["MM5eS",0]],
    level : 0,
    classes : ["druid", "sorcerer", "wizard"],
    school : "Evoc",
    range : "5 ft",
    components : "V,S,M",
    compMaterial : "A weapon that deals bludgeoning worth at least 1sp",
    duration : "1 rnd",
    description : "On a hit, Strength save or push 10ft away; +1d6 bludgeoning if pushed into wall or bigger than the target",
    descriptionCantripDie : "+'CD-1'd6 weapon dmg +'CD'd6, at 5(2d6, 3d6), 11(3d6, 4d6), and 17 (4d6, 5d6); 1 crea save or push 10 ft, `CD`d6 Blud dmg if pushed into another object or creature bigger than the target"
}
SpellsList["cyclone"] = {
    name : "Cyclone",
    source : [["MM5eS",0]],
    level : 9,
    classes : ["cleric", "druid", "sorcerer"],
    school : "Conj",
    range : "300 ft",
    components: "V,S",
    duration : "conc, 1 hr",
    description : "Summon a 30 ft radius cyclone, 300 ft high; Diff. terrain; Flying Crea. Str save or pulled 10 ft to center and take 8d10 blud; no move and half dmg on success; Action to move it",
    descriptionFull : "You summon forth a massive vortex centered at a point you can see within range. This cycline has a 30ft radius and is 300ft high. The area within the cyclone is difficult terrain, and the winds are powerful enough to extinguish unprotected flames, disperse gases and vapors, and any other ordinary projectiles are deflected upwards and automatically miss. Unsecured objects weighing 50lbs. or less are picked up by the cyclone and remain within its area for the spells duration. Flying creatures that enter or start it's turn within the cyclone must make a Strength sving throw or knocked prone. A creature that enters the area for the first time or starts its turn there must make a Strength saving throw or be pulled 10ft toward the center and take 8d10 blud. damage. On a success, the creature is not moved and takes half damage. The cyclone stays stationary unless you use your actioi to move it up to 30ft in any direction. If this causes a creature to enter the spell's area, they must make a Strength saving throw or take 4d10 blud. damage."
}
SpellsList["velocitation"] = {
    name : "Velocitation",
    source : [["MM5eS",0]],
    level : 2,
    classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
    school : ["Ench"],
    range : "90 ft",
    components : "V,S,M",
    compMaterial : "A piece of warped glass",
    duration : "conc, 1 hr",
    description : "1 crea Wis save or senses warped; Target moves 10ft passed where they should be; If target moves over their max movement, Dex save or fall prone",
    descriptionFull : "You target a creature that you can see within range. The target must make a Wisdom saving throw or have its senses weaped. For the spell's duration whenever the creature moves, they move an additional 10ft passed the location they wish to move to. The target is unaware of this affect until they stop moving. If moving the extra 10ft exceeds their maximum movement speed, the target must make a Dexterity saving throw or fall prone. The target may repeat the saving throw at the end of their turn, ending the spell on a success."
}
SpellsList["soar"] = {
    name : "Soar",
    source : [["MM5eS",0]],
    level : 2,
    classes : ["druid", "sorcerer", "wizard"],
    school : ["Trans"],
    range : "Self",
    components : "V,S",
    duration : "Conc, 1 hr",
    description : "Launch yourself 20ft up costing no movement; Fly speed of 30ft; Cannot rise higher",
    descriptionFull : "You harness the energies of wind and launch yourself into the air. Upon casting this spell, you launch yourself 20ft straight up without expending any movement. For the spell's duration, you have a flight speed of 30ft and you cannot use this to rise any higher into the air. If you lose concentration or at the start of your next turn, you faill towards the ground. You reducea any fall damage you take by 20ft and land on your feet. After landing on the ground, the spell ends."
}