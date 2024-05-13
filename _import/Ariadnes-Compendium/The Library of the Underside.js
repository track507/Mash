var iFileName = "The_Library_of_the_Underside";
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

if(!spellSchoolList["Omni"]) {
    spellSchoolList["Omni"] = "omniturgy";
}

CompanionList["ariadne's: the library of the underside companion codex"] = {
    name : "Ariadne's: The Library of the Underside Companion Codex",
    nameMenu : "Companion",
    source : [["A:TLotU", 0]]
}

SourceList["A:TLotU"] = {
    name : "Ariadne's: The Library of the Underside",
    abbreviation : "A:TLotU",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/11"
}

MagicItemsList["writ of safety"] = {
    name : "Writ of Safety",
    source : [["A:TLotU", 8]],
    type : "wondrous item",
    rarity : "rare",
    description : "This doubles as an official document and a magic scoll. It will make the Aurinoir to leave me alone, unless I am doing something obviously dangerous to the security of the City of Strings. It also functions as a Word of Recall that will bring me back to Runo's Shop, and disintegrates after being used this way. I will need to buy another one if I want to go back. See notes for Arcane Tracker.",
    toNotesPage : [{
        name : "Arcane Tracker",
        note : desc([
            "Arcane Tracker: This scoll secretly monitors my approximate location, within a margin of 100 ft. It also scries me for magical items or whoever is carrying this scroll."
        ])
    }]
}

MagicItemsList["golem wrecker"] = {
    name : "Golem Wrecker",
    source : [["A:TLotU", 9]],
    type : "weapon (light hammer)",
    rarity : "very rare",
    description : "I have a +2 bonus to attack and damge rolls made with this weapon. Additionally, this weapon ignores resistance to bludgeoning and slashing damage, and treats immunity as if it were resistance. The crit range against constructs is increased to 17-20, and when I hit a construct, it must roll a DC 17 Constitution saving throw or fall prone and be stunned, repeating the save at the end of each of its turns.",
    weaponsAdd : ["Golem Wrecker"],
    weaponOptions : [{
        name : "Golem Wrecker",
        regExpSearch : /golem wrecker/i,
        baseWeapon : "light hammer",
        modifiers : [2,2],
        description : "Light, thrown; Crit range 17-20 vs. Constructs; On hit vs. Construct, Con save or fall prone and stunned"
    }]
}

MagicItemsList["arcanadex device"] = {
    name : "Arcanadex Device",
    source : [["A:TLotU", 9]],
    type : "wondrous item",
    rarity : "rare",
    description : "I can place a sample of any organic matter inside of it through its detachable bronze and glass display. It takes one minute to process, and I learn some information about the creature the sample belonged to: creature type, damage resistances, immunities, and vulnerabilities. If the sample is in good condition I might learn more at DM's discretion."
}

MagicItemsList["bundle of dried eldermint"] = {
    name : "Bundle of Dried Eldermint",
    source : [["A:TLotU", 10]],
    type : "consumable",
    rarity : "rare",
    description : "I can chew, inhale, or drink this eldermint. Chewing grants me a +1 to my Prof. bonus for 1 hour. Inhaling grants me immunity to poison and disease for one hour, and any poisons and diseases I have currently are only suspended. I can drink tea infused with this, and I gain a +2 bonus to all ability checks for one hour."
}

MagicItemsList["caustic flame"] = {
    name : "Caustic Flame",
    source : [["A:TLotU", 10]],
    type : "weapon (pistol)",
    rarity : "legendary",
    attunement : true,
    description : "This +3 pistol deals a base of 1d8 acid plus 1d8 fire damage instead of the normal 1d10 piercing damage. Creatures hit takes this damage again at the start of their next turn as the flaming acid burns through them. It uses no bullets, but instead I must refill its glass chamber with a vial of acid worth at least 25 GP, and has enough to shoot 10 times before reloading again.",
    weaponsAdd : ["Caustic Flame"],
    weaponOptions : [{
        name : "Caustic Flame",
        regExpSearch : /caustic flame/i,
        baseWeapon : "pistol",
        modifiers : [2,2],
        damage : [1, 8, "acid"],
        description : "Vial of Acid, loading; +1d8 fire dmg; Crea hit take dmg start of their next turn",
    }]
}

FeatsList["counterspell mastery"] = {
    name : "Counterspell Mastery",
    source : [["A:TLotU", 17]],
    prerequisite : "Counterspell",
    prereqeval : function(v) {
        return isSpellUsed('counterspell', true)
    },
    description : "My range for counterspell is increased to 80 ft. At 11th level, its increased to 100 ft, and at 17th level to 120 ft. I can treat spells casted with a slot level one higher than when I used to cast counterspell to be counterspelled and automatically nullified.",
    calcChanges : {
        spellAdd : [
            function(spellKey, spellObj, spName) {
                if(spellKey === "counterspell") {
                    var cLvl = Number(What('Character level'));
                    spellObj.range = (cLvl < 11 ? "80" : cLvl < 17 ? "100" : "120") + " ft";
                }
            }
        ]
    }
}

FeatsList["heroic intervention"] = {
    name : "Heroic Intervention",
    source : [["A:TLotU", 17]],
    description : "I get a +1 to one of my ability scores. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
    choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I gain a +1 to Strength. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I gain a +1 to Dexterity. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I gain a +1 to Constitution. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I gain a +1 to Intelligence. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I gain a +1 to Wisdom. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I gain a +1 to Charisma. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 0, 0, 0, 1],
	},
    usages : 1,
    recovery : "long rest"
}

FeatsList["eldritch killer"] = {
    name : "Eldritch Killer",
    source : [["A:TLotU", 17]],
    description : "I gain a +1 to either Wisdom or Charisma. I have advantage on either Wisdom or Charisma saving throws caused by aberrations and undead creatures. My crit range against aberrations and undead is increased by 1, up to a max of 17.",
    choices : ["Wisdom", "Charisma"],
    "wisdom" : {
        description : "I gain a +1 to Wisdom. I have advantage on Wisdom saving throws caused by aberrations and undead creatures. My crit range against aberrations and undead is increased by 1, up to a max of 17.",
        scores : [0, 0, 0, 0, 1, 0],
		saves : ["Wis"],
        savetxt : { adv_vs : ["Wisdom saves from Aberrations and Undead"] }
    },
    "charisma" : {
        description : "I gain a +1 to Charisma. I have advantage on Charisma saving throws caused by aberrations and undead creatures. My crit range against aberrations and undead is increased by 1, up to a max of 17.",
        scores : [0, 0, 0, 0, 0, 1],
		saves : ["Cha"],
        savetxt : { adv_vs : ["Charisma saves from Aberrations and Undead"] }
    }
}

FeatsList["unassailable wit"] = {
    name : "Unassailable Wit",
    source : [["A:TLotU", 18]],
    prerequisite : "15 or higher Intelligence",
    prereqeval : function(v) {
        return What('Int') >= 13;
    },
    description : "I gain a +1 to Intelligence. Whenever a spell or magical effects subjects me to a Wisdom or Charisma saving throw, I can make it an Intelligence saving throw instead. I can do so my Prof. bonus per long rest (Rounded down).",
    scores : [0,0,0,1,0,0],
    usages : "1/2 Prof. bonus per ",
    usagescalc : "event.value = Math.floor(Number(How('Proficiency Bonus'))/2);",
    recovery : "long rest"
}

FeatsList["shield of conjuration"] = {
    name : "Shield of Conjuration",
    source : [["A:TLotU", 18]],
    prerequisite : "Shield spell",
    prereqeval : function(v) {
        return isSpellUsed('shield', true);
    },
    description : "My Intelligence or Charisma increases by 1. When I have the shield spell active, whenever a magic missle or ranged attack is blocked by it, I can make a ranged spell attack (60/120 ft) against a creature of my choice. On a hit the creature suffers the damage from the original attack.",
    choices : ["Intelligence", "Charisma"],
    "intelligence" : {
        description : "My Intelligence increases by 1. When I have the shield spell active, whenever a magic missle or ranged attack is blocked by it, I can make a ranged spell attack (60/120 ft) against a creature of my choice. On a hit the creature suffers the damage from the original attack.",
		scores : [0, 0, 0, 1, 0, 0],
	},
    "charisma" : {
        description : "My Charisma increases by 1. When I have the shield spell active, whenever a magic missle or ranged attack is blocked by it, I can make a ranged spell attack (60/120 ft) against a creature of my choice. On a hit the creature suffers the damage from the original attack.",
        scores : [0, 0, 0, 0, 0, 1],
    },
    weaponsAdd : ["Shield oF Conjuration"],
    weaponOptions : [{
        name : "Shield of Conjuration",
        regExpSearch : /shield of conjuration/i,
        source : [["A:TLotU", 18]],
        damage : ["", "", ""],
        type : "Spell",
        abilitytodamage : false,
        range : "60/120 ft",
        special : true,
        isNotWeapon : true,
        useSpellcastingAbility : true,
        ability : 4,
        description : "Reflect missed atks, spell atk vs crea, dmg equals the missed atk"
    }]
}

FeatsList["resilient companionship"] = {
    name : "Resilient Companionship",
    source : [["A:TLotU", 18]],
    description : "I gain a +1 to my Charisma, and a +1 bonus to all saving throws for every ally within 10 ft of me that isn't incapacitated up to a max of +3. If an ally and I are within 5 ft of each other are subject to making a Strength or Dexterity saving throw, my ally can use my result instead of theirs. I can use this once per long rest.",
    scores : [0,0,0,0,0,1],
    usages : 1,
    recovery : "long rest"
}

MagicItemsList["wand of gold and garlic"] = {
    name : "Wand of Gold and Garlic",
    source : [["A:TLotU", 21]],
    type : "wand",
    rarity : "very rare",
    attunement : true,
    description : "This Cursed wand has +2 bonus to spell attacks and spell save DC. When I use this wand, all cloud-based spells smell like garlic and deal double damage to creatures of vampiric origin. This wand can transmute heads of garlic into gold, and nothing else.",
    descriptionFull : "This Cursed wand has +2 bonus to spell attacks and spell save DC. When I use this wand, all cloud-based spells smell like garlic and deal double damage to creatures of vampiric origin.\n   " + toUni("Curse") + ". For every 100 heads of garlic transmuted into gold, the next time I attempt to transmute, I must succeed on a DC 18 Charisma saving throw or be turned into a mound of golden sand, killing me instantly.",
    cursed : true,
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if (type !== "prepare") return 2;
            },
            "while attuned to this wand, I gain a +2 to spell attack and spell save DC."
        ]
    }
}
// finish this feat and add rest of the book
MagicItemsList["tome of primeval and deep speech"] = {
    name : "tome of primeval and deep speech",
    source : [["A:TLotU", 18]],
    type : "wondrous item",
    rarity : "rare",
    description : "I can spend 40 hours to learn primeval, not to be confused with primordial, the language of elementals. Primeval is accredited to be the first language, and used for most spells and arcanism were first devised. After reading the first part, I can spend another 40 hours learning deep speech.",
    languageProfs : [["Primeval", 1], ["Deep Speech", 1]],
}

MagicItemsList["mechanical pseudodragon"] = {
    name : "Mechanical Psudodragon",
    source : [["A:TLotU", 22]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    description : "I must be authorized by the Aurinoir to keep a Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
    choices : ["Very Rare (CR 5)", "Legendary (CR 6)", "Artifact (CR 8)"],
    "very rare (cr 5)" : {
        name : "Combustion Mechanical Pseudodragon",
        description : "I must be authorized by the Aurinoir to keep a Combustion Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
        creaturesAdd : [["Combustion Mechnical Dragon"]]
    },
    "legendary (cr 6)" : {
        name : "Mechanical Pseudodragon",
        description : "I must be authorized by the Aurinoir to keep a Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
        creaturesAdd : [["Mechnical Pseudodragon"]]
    },
    "artifact (cr 8)" : {
        name : "Caustic Mechanical Pseudodragon",
        description : "I must be authorized by the Aurinoir to keep a Caustic Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
        creaturesAdd : [["Caustic Mechanical Pseudodragon"]]
    }
}

CreatureList["mechanical pseudodragon"] = {
    companion : ["ariadne's: the library of the underside companion codex", "ariadne's companion codex"],
    name : "Mechanical Psudodragon",
    source : [["A:TLotU", 23], ["A:CoS", 0]],
    size : 2,
    type : "Construct",
    alignment : "Neutral Evil",
    ac : 15,
    hp : 67,
    hd : [15, 6],
    speed : "30 ft, fly 60 ft",
    scores : [8, 17, 12, 18, 12, 15],
    skills : {
        "Deception" : 5
    },
    senses : "Darkvision 240ft",
    languages : "Common, primeval, deep speech, draconic",
    challengeRating : "6",
    proficiencyBonus : 3,
    attacksAction : 2,
    attacks : [{
        name : "Talons",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)"
    }, {
        name : "Bite",
        ability : 2,
        damage : [1, 6, "piercing"],
        range : "Melee (10 ft)",
        description : "+1d4 lightning dmg"
    }, {
        name : "Electrobolt",
        ability : 4,
        damage : [2, 4, "lightning"],
        range : "60 ft",
        description : "Ranged Spell Attack",
    }, {
        name : "Electrostatic Breath (recharge 5-6)",
        ability : 4,
        damage : [6, 4, "lightning"],
        range : "15-ft cone",
        description : "Dex save; Save halves; Failed -10 ft movement, no reac. til end of their next turn",
        dc : true
    }],
    traits : [{
        name : "Overpowering Swarm",
        description : "When 2 or more allies are within 15 ft of a target, the Mechanical Pseudoragon has advantage on all attack rolls."
    }, {
        name : "Duplicitous Activity",
        description : "The Mechanical Pseudodragon has advantage on Deception checks to hide its true objective."
    }, {
        name : "Genocidal Hive",
        description : "This creature has an overpowering drive to build more of itself and destroy all non-mechnical, non-dragonic life. It will always choose its objective over its friends, allies, and treasure to achieve cosmic domination."
    },{
        name : "Lightning Dependence",
        description : "Whenever this creature takes 10 or more lightning damage, it takes no damage instead and regains a number of hp equal to the damage. It must absorb at least 10 lightning damage from another source other than its own once a day or it goes dormant until its recharged."
    }]
}

CreatureList["combustion mechanical pseudodragon"] = {
    companion : ["ariadne's: the library of the underside companion codex", "ariadne's companion codex"],
    name : "Combustion Mechanical Psudodragon",
    source : [["A:TLotU", 23], ["A:CoS", 0]],
    size : 2,
    type : "Construct",
    alignment : "Neutral Evil",
    ac : 15,
    hp : 67,
    hd : [15, 6],
    speed : "30 ft, fly 60 ft",
    scores : [8, 17, 12, 18, 12, 15],
    skills : {
        "Deception" : 5
    },
    senses : "Darkvision 240ft",
    languages : "Common, primeval, deep speech, draconic",
    challengeRating : "5",
    damage_resistances : "fire",
    proficiencyBonus : 3,
    attacksAction : 2,
    attacks : [{
        name : "Talons",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)"
    }, {
        name : "Bite",
        ability : 2,
        damage : [1, 6, "piercing"],
        range : "Melee (10 ft)",
        description : "+1d4 lightning dmg"
    }, {
        name : "Electrobolt",
        ability : 4,
        damage : [2, 4, "lightning"],
        range : "60 ft",
        description : "Ranged Spell Attack",
    }, {
        name : "Incinerating Breath (recharge 5-6)",
        ability : 4,
        damage : [4, 4, "fire"],
        range : "15-ft cone",
        description : "Dex save; Save halves; Failed crea(s) incinerated, 2d4 fire dmg start of each turn for 1 min, action to put out",
        dc : true
    }],
    traits : [{
        name : "Overpowering Swarm",
        description : "When 2 or more allies are within 15 ft of a target, the Mechanical Pseudoragon has advantage on all attack rolls."
    }, {
        name : "Duplicitous Activity",
        description : "The Mechanical Pseudodragon has advantage on Deception checks to hide its true objective."
    }, {
        name : "Genocidal Hive",
        description : "This creature has an overpowering drive to build more of itself and destroy all non-mechnical, non-dragonic life. It will always choose its objective over its friends, allies, and treasure to achieve cosmic domination."
    },{
        name : "Combustion Dependence",
        description : "This creature is resistance to fire damage, and must consume 4 lbs. of coal per day or fall dormant until its combustion system is reignited."
    }]
}

CreatureList["caustic mechanical pseudodragon"] = {
    companion : ["ariadne's: the library of the underside companion codex", "ariadne's companion codex"],
    name : "Caustic Mechanical Psudodragon",
    source : [["A:TLotU", 23], ["A:CoS", 0]],
    size : 2,
    type : "Construct",
    alignment : "Neutral Evil",
    ac : 15,
    hp : 112,
    hd : [25, 6],
    speed : "30 ft, fly 60 ft",
    scores : [8, 17, 18, 18, 12, 15],
    skills : {
        "Deception" : 5
    },
    senses : "Darkvision 240ft",
    languages : "Common, primeval, deep speech, draconic",
    challengeRating : "8",
    damage_resistances : "fire",
    proficiencyBonus : 3,
    attacksAction : 2,
    attacks : [{
        name : "Talons",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)"
    }, {
        name : "Bite",
        ability : 2,
        damage : [1, 6, "piercing"],
        range : "Melee (10 ft)",
        description : "+1d4 lightning dmg"
    }, {
        name : "Electrobolt",
        ability : 4,
        damage : [2, 4, "lightning"],
        range : "60 ft",
        description : "Ranged Spell Attack",
    }, {
        name : "Electrostatic Breath (recharge 5-6)",
        ability : 4,
        damage : [6, 4, "lightning"],
        range : "15-ft cone",
        description : "Dex save; Save halves; Failed -10 ft movement, no reac. til end of their next turn",
        dc : true
    }, {
        name : "Caustic Flames (recharge 5-6)",
        ability : 4,
        damage : [4, 4, "fire"],
        range : "15-ft cone",
        description : "Dex save; +4d4 acid dmg; Save halves; Failed, 2d4 fire + 2d4 acid dmg start of each turn for 1 min, action to put out",
        dc : true 
    }],
    damage_resistances : "acid",
    traits : [{
        name : "Overpowering Swarm",
        description : "When 2 or more allies are within 15 ft of a target, the Mechanical Pseudoragon has advantage on all attack rolls."
    }, {
        name : "Duplicitous Activity",
        description : "The Mechanical Pseudodragon has advantage on Deception checks to hide its true objective."
    }, {
        name : "Genocidal Hive",
        description : "This creature has an overpowering drive to build more of itself and destroy all non-mechnical, non-dragonic life. It will always choose its objective over its friends, allies, and treasure to achieve cosmic domination."
    },{
        name : "Energetic Independence",
        description : "Whenever this creature takes 10 or more lightning damage, it takes no damage instead and regains a number of hp equal to the damage. It must absorb at least 10 lightning damage from another source other than its own once a day or it goes dormant until its recharged. Or, it can consume a vial of acid to sustain itself. It also has resistance to acid damage."
    }]
}

SpellsList["arcane cuffs"] = {
    name : "Arcane Cuffs",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 24]],
    level : 2,
    school : "Abjur",
    time : "1 a",
    range : "Touch",
    duration : "1 hr",
    components : "S,M",
    compMaterial : "an ingot of polished silver, which the spell consumes",
    description : "Crea save using its spell ability vs own save DC or cannot cast 2+1/SL level or lower spells; Restrained have Disadv; Incap. auto fail; Dur. 8hr 4/SL, 24hr 6/SL",
    descriptionFull : "A creature must succeed on a saving throw usings its own spellcasting ability and save DC. On a failed save, the creature cannot cast spells of 2nd level or lower for the duration. A Restrained creature has disadvantage on the save, and an Incapacitated creature automatically fails." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the target is unable to cast spells of the slot's level or lower. Additionally, the duration increases to 8 hours at 4th level or higher and 24 hours at 6th level or higher."
}

SpellsList["greater identify"] = {
    name : "Greater Identify",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 24]],
    level : 3,
    school : "Div",
    time : "10 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "A pearl worth at least 500 gp and an owl feather",
    description : "magic item/imbued crea/obj; learn properties, use, affecting spells, prev. 3 users and their actions, traps/malicious design, created by spell; Crea, learn 3 highest spells and last spell casted",
    descriptionFull : "I choose one magical item or magic-imbued object or creature. I learn its properties and how to use them, whether or not it requires attunement, and how many charges it has, if any. I learn the identities of its three previous users, and the most significant actions they took with it. I also learn any hidden compartments, traps, or malicious design concealed within the object. I learn if any spells are affecting the item and what they are. If the item was created by a spell, I learn which spell created it. Additionally, I decipher compatibilities and dissonances of the object with different magical auras, learning if the item would react to planar energies such as chaotic, lawful, good, and evil aura and effects. If it's a creature, I learn what spells or magical effects, if any, are currently affecting it. I also learn the three highest level spells the creature can cast, and the lasat spell it casted."
}

SpellsList["arcane rescripting"] = {
    name : "Arcane Rescripting",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 24]],
    level : 4,
    school : "Omni",
    time : "1 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "A shard of fine opal worth at least 100 gp, which the spell consumes",
    description : "I give instructions up to 30 words to a Construct; Save if unwilling, or bound to my orders for 24hrs, 7/SL a week, 9/SL permanently"
}

SpellsList["magisteal"] = {
    name : "Magisteal",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 25]],
    level : 5,
    school : "Omni",
    time : "1 rea",
    timeFull : "1 reaction when I see a creature cast a spell or magical effect",
    range : "30 ft",
    duration : "8 hr",
    components : "S,M",
    compMaterial : "the eye of a hawk",
    description : "Replicate spell/magical effect 5+1/SL or lower as if I casted it, unless it was also created by another Magisteal",
    descriptionFull : "I can save an arcane snapshot of a spell or magical effect of 5th level or lower that I witness within range. For the duration, I can consumee the snapshot to replicate the magic as if I were its source, maintaining all its original effects, damage, and DCs, if any. Once I do so, the spell ends. I cannot use this spell to save a snapshot of an effect being replicated by Magisteal. If the magic is a magical effect, it is up to the DM to decide what level the effect is. It's recommended to divide the CR of the creature creating the effect by 2, rounding up." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, I can copy a spell or magical effect if its level is less or equal to the level of spell slot used."
}

SpellsList["mantle of bodily safety"] = {
    name : "Mantle of Bodily Safety",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 25]],
    level : 5,
    school : "Abjur",
    time : "1 a",
    range : "Touch",
    duration : "Conc, 10 min",
    components : "V,S,M",
    compMaterial : "a purple diamond worth at least 300 gp",
    description : "1 Crea immune to form altering spell/effect; Crea(s) in 15ft radius adv. on saves vs. altering form spell/effect; Dur. 1hr 6+/SL",
    descriptionFull : "A creature I touch is wreathed in an ethereal cloak of protective light, rendering them completely immune to spells or magical effects that would alter their form, such as the polymorph spell or a Medusa's petrifying gaze. Creatures within 15 feet of the Creature are also aided by its magic, gaining advantage on saving throws against spells or magical effects that would alter their form." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, the maximum duration is increased to 1 hour."
}

SpellsList["confiscate"] = {
    name : "Confiscate",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 25]],
    level : 6,
    school : "Abjur",
    time : "1 a",
    range : "30 ft",
    duration : "Conc, 1 min",
    components : "S,M",
    compMaterial : "a platinum magnet",
    save : "Cha",
    description : "1 wondrous item; Crea attuned, save or interrupted until I lose conc; Break attune after 1 min, I can instant attune, unless sentient/Artifact or 9/SL; 1 bns pull 30 ft Athletics check vs my spell save DC",
    descriptionFull : "I target a wondrous item I can see within range. If a creature is attuned to it, they must succeed a Charisma saving throw or have their attunement interrupted for as long as I maintain concentration on the spell. If I concentrate for the full minute, their attunement is broken and I can choose to instantly attune to it in their stead. Sentient items or Artifacts are unaffected, unless I cast this spell using a 9th level spell slot. Additionally, while I concentrate on this spell, I can use my bonus action to magically pull the targeted item 30 feet towards me, catching it if I have a free hand to do so when it reaches me. If a creature is carrying it, it must make a Strength (Athletics) check against my spell save DC to prefvent the item from being torn from their possession."
}

SpellsList["mass modify memory"] = {
    name : "Confiscate",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 25]],
    level : 9,
    school : "Ench",
    time : "8 hr",
    range : "S:25-mi rad",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "an opalescent gem worth at least 10,000 gp",
    save : "Int",
    description : "Crea Int>19 save or forget event; Gem stores forgotten memories (AC 25, 100hp, immune all but force); Contradict info allow Crea(s) save; Crea(s) disadv. on Int, Wis, Cha rolls vs my spells; See B",
    descriptionFull : "I can muddle the memories of every creature within a 25 mile radius centered on me, changing their recollection of an event they learned about or witnessed within the past month. I can choose to eliminate all memory of the event, change the details, or create a memory of another event to replace it. A modified memory doesn't affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical memory might be dismissed as a bad dream. Creatures with a 20 or higher Intelligence score can save to resist these effects, and are aware of the attempt. All stolen memories are transferred to the gem which darkens with the weight of the contained information. Creatures affected by this spell have disadvantage on Intelligence, Wisdom, and Charisma rolls to discern my intentions or resist my spells. If the creature encounters new information that contradicts the modified memory, it can attempt to save to recover them. On a failure, the creature discards it as a mistake or a lie. The gem is a magical object with 100 hp, an AC of 25, and immunity too all damage except force. If the gem is destroyed, all creatures affected by the spell recover their memory and become aware of my manipulation",
}

