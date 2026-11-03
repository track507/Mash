var iFileName = "Better_Items_V3";
RequiredSheetVersion("13.1.13");

// General Source
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

// For the mechanical pseudodragon
if(!CompanionList["ariadne's: the library of the underside companion codex"]) {
    CompanionList["ariadne's: the library of the underside companion codex"] = {
        name : "Ariadne's: The Library of the Underside Companion Codex",
        nameMenu : "Companion",
        source : [["A:TLotU", 0]]
    }
}

if(!SourceList["A:TLotU"]) {
    SourceList["A:TLotU"] = {
        name : "Ariadne's: The Library of the Underside",
        abbreviation : "A:TLotU",
        abbreviationSpellsheet : "A",
        group : "Homebrew",
        url : "https://www.patreon.com/codexofstrings/posts",
        date : "2024/05/11"
    }
}

// Better Items Source
SourceList["A:BI"] = {
    name : "Ariadne's: Better Items V3",
    abbreviation : "A:BI",
    abbreviationSpellsheet : "A:BI",
    url : "https://homebrewery.naturalcrit.com/share/cCzEPGjV4TOG",
    date : "2024/05/30"
}

ToolsList["arcanist's tools"] = {
    infoname : "Arcanist's Tools",
    name : "Arcanist's Tools",
    amount : "",
    weight : 10,
    type : "artisan's tools",
    source : [["A:BI", 2]]
}

MagicItemsList["shield of gems"] = {
    name : "Shield of Gems",
    source : [["A:BI", 2]],
    type : "shield",
    rarity : "very rare",
    attunement : true,
    shieldAdd : "Shield of Gems +1",
    description : "This +1 shield has 3 charges, and regains 1d4 charges at dawn. I can expend a charge as a bonus action to do one of the following found on the notes page.",
    toNotesPage : [{
        name : "Shield of Gems: Features",
        note : desc([
            "\u2022 Sapphire (1 Charge): I summon a 15 ft long horizontal force barrier centered on the shield and faceing away from it. It has 50 hp, which it expends to block projectiles passing through it. Creatures can move through it as if it were difficult terrain. This barrier lasts for 1 minute or until it is dispelled or dropped to 0 hp, and moves with the shield.",
            "\u2022 Ruby (1 Charge): I cast Wall of Fire 5 ft in front of the shield.",
            "\u2022 Opal (1 Charge): I cast Wall of Force 5 ft in front of the shield. It last for 30 seconds.",
            "\u2022 Diamond (2 Charges): Up to 4 creatures, and myself included, within 15 ft gain advantage on saving throws against spells and magical effects for 1d4+1 rounds."
        ])
    }],
    action : [["bonus action", "Sapphire"], ["bonus action", "Ruby"], ["bonus action", "Opal"], ["bonus action", "Diamond"]],
    spellcastingBonus : [{
        name : "Shield of Gems",
        spells : ["wall of fire", "wall of force"],
        selection : ["wall of fire", "wall of force"],
        times : 2,
        firstCol : 1
    }]
}

MagicItemsList["mechanical pseudodragon"] = {
    name : "Mechanical Psudodragon",
    source : [["A:BI", 3]],
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
        name : "Multiattack",
        description : "This creature makes two attacks: one with its talons, and one with its bite or electrobolt",
    }, {
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
        name : "Multiattack",
        description : "This creature makes two attacks: one with its talons, and one with its bite or electrobolt",
    }, {
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
        name : "Multiattack",
        description : "This creature makes two attacks: one with its talons, and one with its bite or electrobolt",
    }, {
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

MagicItemsList["pauldrons of villainous opulence"] = {
    name : "Pauldrons of Villainous Opulence",
    source : [["A:BI", 3]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    cursed : true,
    description : "These cursed pauldrons turn any suit of armor they are affixed to into a suit of fine plate armor +3. I cannot unattune to these pauldrons, and cannot remove them from the armor. Every sapient creature in a 30-ft sphere perceives me as decadently wealthy, wasteful, and unlikeable. Non-sapient creatures don't trust me and are threatened by my presence. This item is senient and will try to turn my allies, friends, and family against me.",
    armorAdd : "Pauldrons",
	armorOptions : [{
		regExpSearch : /^(?=.*pauldrons).*$/i,
		name : "Pauldrons",
		source : [["A:BI", 3], ["A:TLotU", 22]],
		type : "heavy",
		ac : 18,
		stealthdis : true,
		weight : 40
	}]
}

MagicItemsList["wand of gold and garlic"] = {
    name : "Wand of Gold and Garlic",
    source : [["A:BI", 4]],
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

MagicItemsList["tome of primeval and deep speech"] = {
    name : "tome of primeval and deep speech",
    source : [["A:BI", 4]],
    type : "wondrous item",
    rarity : "rare",
    description : "I can spend 40 hours to learn primeval, not to be confused with primordial, the language of elementals. Primeval is accredited to be the first language, and used for most spells and arcanism were first devised. After reading the first part, I can spend another 40 hours learning deep speech.",
    languageProfs : [["Primeval", 1], ["Deep Speech", 1]],
}

MagicItemsList["ambrotype of the void"] = {
    name : "Ambrotype of the Void",
    source : [["A:BI", 5]],
    type : "wondrous item",
    rarity : "legendary",
    description : "I can use my action to take a picture I can see within 60 ft, who must succeed on a DC 18 Charisma saving throw or have their likeness stored within the camera. While their picture is saved, the creature has disadvantage on all Wisdom, Intelligence, and Charisma saving throws. It can store up to 3 pictures, and after I finish a long rest, it wipes the memory",
    action : ["action", ""],
    usages : 3,
    recovery : "long rest"
}

MagicItemsList["outsider's helm"] = {
    name : "Outsider's Helm",
    source : [["A:BI", 5]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "I gain 120 ft of blindsight, but lose any sight-based senses. Additionally, I am immune to psychic damage and to effects that would make me roll on a madness table. Its powers also goes to protect somewhat beyond that; body and soul cannot be warped by aberrant powers, rending me immune to an Aboleth's aquatic disease, for example.",
    vision : [["Blindsight", 60], ["Lose all other sight-based senses", ""]]
}

MagicItemsList["reality splitter"] = {
    name : "Reality Splitter",
    source : [["A:BI", 6]],
    type : "weapon (pistol)",
    rarity : "legendary",
    attunement : true,
    description : "This pistol deals a base of 3d6 lethality damage, and I have a +3 bonus to attack and damage rolls. Additionally, it doesn't need to be reloaded, and deals an additional 3d6 lethality damage on a critical hit.",
    weaponOptions : [{
        name : "Reality Splitter",
        regExpSearch : /reality splitter/i,
        baseWeapon : "pistol",
        damage : [3, 6, "lethality"],
        modifiers : [3,3],
        description : "+3d6 lethality dmg on crit",
        selectNow : true
    }]
}

MagicItemsList["ring of eternal struggle"] = {
    name : "Ring of Eternal Struggle", 
    source : [["A:BI", 6]],
    type : "ring",
    rarity : "artifact",
    attunement : true,
    description : "You can speak the command word, Ouroboros, as an action or bonus action. See notes pages for additional effects.",
    extraLimitedFeatures : [{
        name : "Ring of Eternal Struggle",
        usages : 0,
    }],
    toNotesPage : [{
        name : "Ring of Eternal Struggle",
        note : desc([
            "I can use my action or bonus action to speak the command word, Ouroboros, to activate or deactivate the ring. While active, I gain the following effects:",
            "\u2022 I take 5 necrotic damage at the start of each of my turns and whenever I miss an attack roll. This damage cannot be mitigated in any way.",
            "\u2022 For every successful attack, I deal an additional 5 necrotic damage and heal for 10 hp, or 15hp if I am missing more than half of my total hp.",
            "\u2022 This ring can hold up to 3 charges, which are lost after a minute. When I reduce a creature of CR 1 or higher to 0 hp, I gain a charge. If my current hp is reduced to 0 and there are currently one or more charges in the ring, I can expend a charge to drop to 1 hp instead.",
            "\u2022 I can also expend a charge to make a powerful but risky enchantment. My next melee attack deals additional necrotic damage equal to my missing hp, up to a max of 50. If I miss, I am instantly reduced to 0 hp instead."
        ])
    }],
};


MagicItemsList["visage of the punished seer"] = {
    name : "Visage of the Punished Seer", 
    source : [["A:BI", 6]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    scores : [0, 0, 0, 0, 2, 0],
    description : "When put on, Wisdom save (DC 15) or take 5d6+5 psyhic damage and be stunned until the end of your next turn. On a success, you are attuned for 1d4 days and witness prophecies that led to the seer's death. See notes.",
    toNotesPage : [{
        name : "Visage of the Punished Seer",
        note : desc([
            "While attuned, my wisdom score increases by two. Additionally, I cannot be detected by divination magic unless I wish to be and can cast the following spells requiring only verbal components (DC 20)",
            "\u2022 At will: locate object, detect magic, see invisibility",
            "\u2022 3/day each: clairvoyance, scrying",
            "\u2022 1/day each: foresight"
        ])
    }],
    extraLimitedFeatures : [{
        name : "Clairvoyance, Scrying",
        usages : 3,
        recovery : "long rest"
    }, {
        name : "Foresight",
        usages : 1,
        recovery : "long rest"
    }],
    fixedDC : 20,
    spellcastingBonus : [{
        name : "Visage of the Punished Seer",
        spells : ["locate object", "detect magic", "see invisibility"],
        selection : ["locate object", "detect magic", "see invisibility"],
        times : 3,
        firstCol : "atwill"
    }, {
        name : "Visage of the Punished Seer",
        spells : ["clairvoyance", "scrying"],
        selection : ["clairvoyance", "scrying"],
        times : 2,
        firstCol : 3
    }, {
        name : "Visage of the Punished Seer",
        spells : ["foresight"],
        selection : ["foresight"],
        times : 1,
        firstCol : 1
    }]
};

var pandoras_box_fullDescription = [
    "This small wooden box is an artifact from another land and another time. It can be easily mistaken for a worthless reliquary, but those who touch it, are immediately taken aback by the overflowing power within. They know that this box is primordially evil.",
    "The box contains power and corruption in equal measure and can only be opened by a non-lawful creature. It takes one minute to open, as the energies of the ancient lock slowly give way to the chaos within. Once opened, all creatures within 120 ft of the box must succeed on a DC 15 Constitution or be instantly killed. If you survive and were also the one that opened the box, you are blessed by chaotic power and regain the following:",
    "\u2022 Recover all your hit points, features, and abilities.",
    "\u2022 Cleansed of any curse, disease, or poison.",
    "\n While the box is open, the following occurs:",
    "\u2022 While within 120 ft of the box, you can increase any two ability scores of your choosing to a 26 and gain 50 temporary hit points at the end of each of your turns.",
    "\u2022 The box spawns 1d6+3 Harbinger Draugen and 1d4 Harbinger Trolls every minute. After the first hour, it spawns a single Harbinger Revenant instead of the trolls.",
    "\u2022 If the box stays opened for more than 24 hours, it spawns a CR 30 Leviathan of Ink. After summoning it, it is considered empty and spawns no more creatures.\n",
    "If you are still alive and within 120 ft of the box, a ghastly voice offers three wishes. These wishes are granted with evil intent, always bringing great suffering to the world in their fulfillment. Once the box is used in this way, it cannot be opened again until a century has passed.",
    "A creature of lawful alignment can attempt to close the box. They must spend a minute in communion with it, spending their action to maintain concentration on the ritual. At the start of each of their turns, they take 20 necrotic damage. All creatures spawned by the box will attempt to interrupt the closing ritual at any cost. After the box is sealed this way, it cannot be opened for one month." 
];

MagicItemsList["pandora's box"] = {
    name : "Pandora's Box", 
    source : [["A:BI", 7]],
    type : "wondrous item",
    rarity : "artifact",
    prerequisite : "Requires attunement by a non-lawful creature",
    prereqeval : function(v) { return !(/lawful/i).test(What("Alignment")); },
    attunement : false,
    description : "When opened, all creatures within 120 ft of the box must succeed on a DC 15 Constitution saving throw or be instantly killed. If the creature that opened the box survives, they are blessed by chaotic power found on the notes page.",
    toNotesPage : [{ 
        name : "Pandora's Box",
        note : desc(pandoras_box_fullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }]
};

var HandOfTheKingNotes = [
    ">>Cursed Artifact<<. While attuned to this item, you do not cast a shadow, and begin aging at 10 times my normal rate. Whenever you kill a humanoid, I become a year younger as you absorb the soul of your enemy.",
    ">>Mad Conduit<<. Non-magical objects you touch with this hand begin to rust and decay rapidly, taking 3d8 necrotic damage per turn. A creature hit by an unarmed strike or melee spell attack made with this hand takes an additional 3d6 piercing and 3d8 necrotic damage, and must make a DC 20 Wisdom saving throw or gain a random madness effect from the short-term madness table.",
    ">>Hope Devourer<<. This hand has 10 charges. As a reaction to an ability check, attack roll, or saving throw made by a creature within 60 ft of you, you can reduce the roll by an amount equal to the number of charge you expend. If the creature then fails to meet the DC, you recover 1d4+1 charges. You regain all charges after a long rest."
];

MagicItemsList["hand of the king"] = {
    name : "Hand of the King",
    source : [["A:BI", 8]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    description : "The Hand of the King is a conduit to the Mad realms, and carries power from the thread of madness. To attune to this, I must sever my right hand at the wrist and press this item to the stump. It then grafts itself to me and becomes a functioning appendage.",
    toNotesPage : [{
        name : "Hand of the King Features",
        note : desc(HandOfTheKingNotes).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }],
    action : ["reaction", "Hope Devourer"],
    usages : 10,
    recovery : "long rest",
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if (v.baseWeaponName === "unarmed strike" || (v.thisWeapon[3] && SpellsList[v.thisWeapon[3]])) {
                    fields.Description += (fields.Description ? '; ' : '') + '+3d8 necrotic, +3d6 piercing damage';
                }
            }
        ]
    }
};

var MirrorOfThingsGreatAndTerribleNotes = [
    "This mirror gives me a +2 to your Charisma score up to a max of 24. In addition, any natural roll of 19 or 20 is considered a critical success, but a natural 1 or 2 is considered a critical failure.",
    ">>Mirror Mirror, on my hand<<. As a reaction to rolling a critical success on an ability check, saving throw, or attack roll, you  can use the mirror to store that critical within the artifact and roll again. You must take the new roll.",
    "For the next hour, you may replace any roll of the same type as the first, with the critical success roll.",
    ">>Will I ever not be Damned?<< After you use the mirror, it turns dark with gloom, and cannot store another critical success until it is purged. While in this state, it decreases my Charisma score by 4. In addition, you are unable to score critical hits on your attacks.",
    "To cleanse this mirror, you must use your reaction to turn one of your attack rolls or saving throws into a critical failure. Once you do so, the artifact is restored."
]

MagicItemsList["mirror of things great and terrible"] = {
    name : "Mirror of Things Great and Terrible",
    source : [["A:BI", 8]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    description : "Within this small, hand-held, broken mirror, I can see my reflection, or at least who I could have been, had I taken the correct path in life. The features of this mirror can be found on the notes page.",
    toNotesPage : [{
        name : "Mirror of Things Great and Terrible Features",
        note : desc(MirrorOfThingsGreatAndTerribleNotes).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }],
    action : [["action", "Mirror Mirror, on my hand"], ["reaction", "Will I ever not be Damned?"]],
    scores : [0, 0, 0, 0, 0, 2],
    scoresMaximum : [0, 0, 0, 0, 0, 24]
};

var AriadnesLostGrimoireNotes = [
    "The first page of this spellbook read \"If you ever find this, please return it to 66 Stringweaver Avenue, City of Strings, Astral Sea. I would be most grateful, love!.\" The book shimmers expectantly, yearning to be used. I won't get in trouble for casting a couple of spells, right? Ariadne can wait.",
    "For me to use this spellbook, I must be able to cast 6th level spells or higher and have an Intelligence score of at least 15. For anyone that does not meet the requirements, its scripture seems nonsensical.",
    "When using this spellbook, I can cast the following spells as rituals: teleport, magic circle, and glyph of warding. It also has 10 charges that can be used to cast the following spells (save DC 18): fallow's theorem (1 charge), slow (2 charges), pulverizing radiance (3 charges), disintegrate (4 charges), power word: penance (5 charges), plane shift (7 charges), time stop (9 charges), or wish (12 charges).",
    "The book regains 1d4+3 charges at dawn. Each time I cast a spell from this spellbook, there is a 5% chance of Threadmaster Guilliam Fallow noticing me and teleporting the book away from my hands and back to the City of Strings. This happens automatically if I use this book to cast Wish.",
    ">>Overcharge<< I can give the book additional charges by infusing it with spell slots. The spellbook regains an amount of charges equal to half the level of the spell slot I use on it, rounded down. Spells of 7th level or higher may overcharge the spellbook, allowing it to gain temporary charges above its maximum of 10. These additional charges last for an hour and expire if not used."
];

MagicItemsList["ariadne's lost grimoire"] = {
    name : "Ariadne's Lost Grimoire",
    source : [["A:BI", 9]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : false,
    prerequisite : "Being able to cast 6th level spells or higher",
    prereqeval : function() { return What("SpellSlots.CheckboxesSet.lvl6") > 0; },
    description : "This spellbook can cast certain spells as rituals. It also has 10 charges which can be used to cast spells. It regains 1d4+3 charges at dawn. Everytime it is used to cast a spell, there is a 5% chance of Threadmaster Guilliam Fallow noticing and teleporting the book away, or automatically if Wish is casted. I can also overcharge the book. All spells and Overcharge can be found on the notes page.",
    toNotesPage : [{
        name : "Ariadne's Lost Grimoire: Features",
        note : desc(AriadnesLostGrimoireNotes).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
    }],
    usages : 10,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Aridane's Lost Grimoire (R)",
        spells : ["teleport", "glyph of warding", " magic circle"],
        selection : ["teleport", "glyph of warding", " magic circle"],
        times : 3,
        firstCol : "(R)"
    }, {
        name : "Aridane's Lost Grimoire (1 Ch)",
        spells : ["fallow's theorem"],
        selection : ["fallow's theorem"],
        times : 1,
        firstCol : 1
    }, {
        name : "Aridane's Lost Grimoire (2 Ch)",
        spells : ["slow"],
        selection : ["slow"],
        times : 1,
        firstCol : 2
    }, {
        name : "Aridane's Lost Grimoire (3 Ch)",
        spells : ["pulverizing radiance"],
        selection : ["pulverizing radiance"],
        times : 1,
        firstCol : 3
    }, {
        name : "Aridane's Lost Grimoire (4 Ch)",
        spells : ["disintegrate"],
        selection : ["disintegrate"],
        times : 1,
        firstCol : 4
    }, {
        name : "Aridane's Lost Grimoire (5 Ch)",
        spells : ["power word: penance"],
        selection : ["power word: penance"],
        times : 1,
        firstCol : 5
    }, {
        name : "Aridane's Lost Grimoire (7 Ch)",
        spells : ["plane shift"],
        selection : ["plane shift"],
        times : 1,
        firstCol : 7
    }, {
        name : "Aridane's Lost Grimoire (9 Ch)",
        spells : ["time stop"],
        selection : ["time stop"],
        times : 1,
        firstCol : 9
    }, {
        name : "Aridane's Lost Grimoire (12 Ch)",
        spells : ["wish"],
        selection : ["wish"],
        times : 1,
        firstCol : 12
    }]
}

MagicItemsList["aeryn's starplate"] = {
    name : "Aeryn's Starplate",
    source : [["A:BI", 10]],
    type : "armor (plate)",
    rarity : "legendary",
    attunement : true,
    description : "I have an AC of 22 while wearing this armor, and gain resistance to slashing and piercing damage and immunity to radiant damage. Additionally, I cannot be blinded as result from light such as that with the Sunbeam spell. See notes for Celestial Graviturgy, Arcane Bulwark, and Extraplanar Hold.",
    toNotesPage : [{
        name : "Aeryn's Starplate: Features",
        note : desc([
            "\u2022 Celestial Graviturgy: I can cast levitate and feather fall at will",
            "\u2022 Arcane Bulwark: I have advantage on saving throws vs. spells and other magical effects. In addition, I immune to the irradiated condition. As a reaction once per long rest, I can absorb a single 6th level or lower spell that I can see being cast within 60 ft of me. The caster must succeed a DC 20 Charisma saving throw, or the spell fails and I gain temporary hp equal to five times the level of the spell",
            "\u2022 Extraplanar Hold: I can don on or off this armor as a bonus action. When not worn, it is stored in an extraplanar space and cannot be reached. If the I die, it appears in an occupied space within 15 ft of me"
        ])
    }],
    action : [["bonus action", "don (on/off)"], ["reaction", "Arcane Bulwark (DC 20)"]],
    savetxt : {
        adv_vs : ["saving throws against spells and other magical effects"],
        immune : ["irradiated", "blinded from source of light"]
    },
    dmgres : ["Slashing", "Piercing", "Radiant"],
    armorAdd : "Aeryn's Starplate",
	armorOptions : [{
		regExpSearch : /^(?=.*aeryn's)(?=.*starplate).*$/i,
		name : "Aeryn's Starplate",
		source : [["A:BI", 10]],
		type : "heavy",
        ac : 22
	}],
    spellcastingBonus : [{
        name : "Celestial Graviturgy",
        spells : ["levitate", "feather fall"],
        selection : ["levitate", "feather fall"],
        times : 2,
        firstCol : "atwill"
    }],
    usages : 1,
    recovery : "long rest"
}

MagicItemsList["fallow's mauve relic"] = {
    name : "Fallow's Mauve Relic",
    source : [["A:BI", 11]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    description : "This relic has 7 charges, which can be used by a spellcaster as spell slots. A charge equals a slot level, and I can use my action to transmute charges into spell slots, regaining 1d4+1 charges at dawn. If there are no charges left, I can keep drawing but take 1d6 psychic damage and cannot be prevented in anyway. This doubles for each charge spent (1d6, 2d6, 4d6...)",
    usages : 7,
    recovery : "dawn"
}

MagicItemsList["may's orange brewski"] = {
    name : "May's Orange Brewski",
    source : [["A:BI", 12]],
    type : "consumable",
    rarity : "legendary",
    description : "This brew has 5 charges, which can only be refilled by May. A creature can consume this brew as a bonus action, which lasts an hour. The effects can be found on the notes page.",
    toNotesPage : [{
        name : "May's Orange Brewski: Effects",
        note : desc([
            "\u2022 Brain Goes Brrr: My Intelligence and Constitution increase by 2, but my Wisdom decreases by 2. I gain an additional bonus action on my turn, and gain resistance to poison and psychic damage.",
            "\u2022 Anti-Eminence: I cannot benefit from Eminent Energy nor does Impulse Capsules have any affect on me, and Eminent Wisps do not attune to me. If I am attuned to one, it painfully leaves my body when I drink this brew.",
            "This unnatural liquid acts as a kind of antidote; a creature that ingests this is relieved from the effects of Eminence overdose and other similar effects."
        ])
    }]
}

MagicItemsList["chief sentinel's garb"] = {
    name : "Chief Sentinel's Garb",
    source : [["A:BI", 13]],
    type : "armor (studded leather)",
    rarity : "rare",
    description : "The Chief Sentinel's Garb is a +2 studded leather armor that gives an additional +1 bonus to AC while in dim light or darkness. Additionally, I am resistant to acid damage and have advantage on stealth checks in dim light or darkness.",
    armorAdd : ["Chief Sentinel's Garb"],
    armorOptions : [{
        regExpSearch : /chief sentinel's garb/i,
        name : "Chief Sentinel's Garb",
        source : [["A:TAFI", 53]],
        type : "light",
        ac : "12+2",
        weight : 13
    }],
    extraAC : [{ 
        mod : 0,
        name : "Dim Light/Darkness (+1 to AC)",
        magic : true,
        text : "I gain a +1 bonus to AC while in dim light or darkness",
    }],
    dmgres : ["Acid"],
    savetx : { adv_vs : ["Stealth checks in dim light/darkness"] }
};

MagicItemsList["hunter's edge"] = {
    name : "Hunter's Edge",
    source : [["A:BI", 13]],
    type : "weapon (dagger)",
    rarity : "legendary",
    weaponOptions : [{
        regExpSearch : /hunter's edge/i,
        name : "Hunter's Edge",
        source : [["A:TAFI", 53]],
        baseWeapon : "dagger",
        modifiers : [3, 3],
        selectNow : true
    }],
    description : "This dagger has a +3 bonus to attack and damage rolls. Additionally, the dagger deals an extra 1d12 bonus damage to aberrations, fiends, and celestials. If the creature I am attacking is at least one size larger than me, on an 18-20 on the attack roll, it is considered to be a critical hit."
};

MagicItemsList["dame eleanors flare"] = {
    name : "Dame Eleanors Flare",
    source : [["A:BI", 14]],
    type : "weapon (pistol)",
    rarity : "rare",
    advantages : [["Initiative", true]],
    description : "This pistol has a +2 to damage and attack rolls. Additionally, I can choose to quickdraw, giving myself advantage on Initiative rolls. Doing so, I must make an attack with this weapon as my first action in combat.",
    attunement : true,
    weaponOptions : [{
        regExpSearch : /^(?=.*(dame|eleanor?s))(?=.*flare).*$/i,
        name : "Dame Eleanors Flare",
        source : [["A:TNC", 56]],
        type : "Martial",
        ability : 2,
        list : "firearm",
        abilitytodamage : true,
        damage : [1, 10, "piercing"],
        range : "30/90 ft",
        description : "Ammunition, loading; Quickdraw",
        tooltip : "Quickdraw: Advantage on Initiative roll, first action must be an attack with this weapon",
        special : true,
        modifiers : [2, 2],
        isMagicWeapon : true,
        selectNow : true
    }],
};

MagicItemsList["parchment of the wayfarer"] = {
    name : "Parchment of the Wayferer",
    source : [["A:BI", 14]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "This parchment appears to be a normal piece of parchment. Saying 'Ahrym Eleian' will make the parchment instantly redraw itself to represent an area 50 miles around its current position. Once per long rest, you may choose a point on the map to create an arcane eye. Places shrouded by divination appear as blank space and cannot be targeted by the arcane eye.",
    spellcastingBonus : [{
        name : "Parchment's Arcane Eye",
        spells : ["arcane eye"],
        selection : ["arcane eye"],
        firstCol : "oncelr"
    }],
    extraLimitedFeatures : [{
        name : "Arcane Eye (Parchment)",
        usages : 1,
        recovery : "long rest"
    }]
};

MagicItemsList["burstfire hoverback"] = {
    name : "Burstfire Hoverback",
    source : [["A:BI", 14]],
    type : "wondrous item",
    rarity : "lengedary",
    attunement : true,
    description : "This hoverback grants a flying speed of 60ft. Additionally, it has 10 charges which can be used for Boom Barrage (5 charges), Overclocked Thrusters (3 charges), or Evasive Maneuvers (2 charges). See notes page.",
    toNotesPage : [{
        name : "Burstfire Hoverback",
        note : desc([
            "This hoverback is imbued with powerful and explosive arcane energy. When worn, it binds seamlessly to your back, with two ethereal flames that spark with blue and purple energy giving a faint hum. However, it does not burn you. This grants me 60ft of fly speed and has 10 charges, which can be expended to create the following effects: ",
            "Boom Barrage (5 charges): " + "As an actions, you can unleash a barrage of five arcane missiles from the jetpack. Each missile targets a point with 120 ft. Creatures within 10 ft of where the missile hits must make a DC 20 Dexterity saving throw, taking 4d10 force damage on a fail, or half as much on a success.",
            "Overclocked Thrusters (3 charges): " + "As a bonus action, you can activate the jetpack's overdrive, doubling your flying speed to 120 ft for up to 10 minutes.",
            "Evasive Maneuvers (2 charges): " + "As a reaction to being targeted by a spell or ranged attack, you can use the jetpack's energy to make a quick evasive maneuver. You gain advantage on the saving throw or a +5 bonus to AC against the triggering attack."
        ]),
    }],
    action : [["action", "Boom Barrage (5 charges)"], ["bonus action", "Overclocked Thrusters (3 charges)"], ["reaction","Evasive Maneuvers (2 charges) "]],
    extraLimitedFeatures : [{
        name : "Burstfire Charges",
        usages : 10,
        recovery : "long rest" //doesn't explicitly state the recovery time 
    }]
};

MagicItemsList["assistant drone v-38"] = {
    name : "Assistant Drone V-38",
    source : [["A:BI", 15]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    description : "This drone can only be commanded by me. If reduced to 0 HP and if I'm proficient with tinker's tools, I can repair it over the course of a short rest. I may also transform the drone into a helmet giving me 120 ft of darkvision, I can breathe underwater, and my AC increases by 2. The drone cannot use any of its features or any of its actions (includes bns. and reactions) while like this. However, it can still talk.",
    vision : [
        ["Darkvision (drone helmet on)", 120]
    ],
    savetxt : {text : "I can breath underwater while wearing the drone as a helmet"},
    creaturesAdd : [["Assistant Drone V-38"]],
    creatureOptions : [{
        name : "Assistant Drone V-38",
        source : [["A:BI", 15]],
        size : 4,
        type : "Construct",
        alignment : "Unaligned",
        ac : 15,
        hp : 34,
        hd : [8,6],
        speed : "fly 50 ft (hover)",
        proficiencyBonus : 2,
        challengeRating : "1",
        scores : [12, 14, 13, 8, 12, 14],
        senses : "Darkvision 120 ft",
        attacksAction : 1,
        passivePerception : 13,
        damage_immunities : "poison, psychic",
        condition_immunities : "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
        languages : "Languages of its creator",
        attacks : [{
            name : "Bump",
            ability : 1,
            damage : [1,6,"bludgeoning"],
            range : "Melee (5 ft)",
            description : "Bumps into a target as a melee weapon attack.",
        }, {
            name : "Beam",
            ability : 6,
            damage : [1,6,"radiant"],
            range : "Ranged spell attack (60 ft)",
            description : "Fires a beam at a target as a ranged spell attack."
        }],
        traits : [{
            name : "Advice",
            description : "If asked, the drone gives advice about any given situation. Sometimes without being prompted too. It likes to talk, but it's not very smart."
        },{
            name : "Sturdy Flyer",
            description : "The drone has handles underneath. A medium or smaller creature can grab onto the handles and be carried at half the drone's fly speed.",
        },{
            name : "Skillful Helper (3/day)",
            description : "This drone can add its proficiency bonus (+2) to an ability check, attack roll, or saving throw made by the creature it is attuned to, if said creature is within 30ft."
        }],
        actions : [{
            name : "Intercept",
            description : "As a reaction, the drone can block an attack that targets a creature within 5 ft of it, making itself the target of the attack instead."
        }]
    }]
};

//finish these
MagicItemsList["wyrm stew"] = {
    name : "Wyrm Stew",
    source : [["A:BI", 16]],
    type : "consumable",
    rarity : "uncommon",
    description : "This tough and bitter draconoid meat from the Fafniri",
}

MagicItemsList[""] = {
    name : "",
    source : [["A:BI", 16]],
    type : "consumable",
    rarity : "",
    description : "",
}

MagicItemsList[""] = {
    name : "",
    source : [["A:BI", 16]],
    type : "consumable",
    rarity : "",
    description : "",
}

MagicItemsList[""] = {
    name : "",
    source : [["A:BI", 16]],
    type : "consumable",
    rarity : "",
    description : "",
}










// only add these if the better spellbook is not available.
if(!SourceList["A:BS"]) {
    SourceList["A:BS"] = {
        name : "Ariadne's: Better Spellbook V1.0",
        abbreviation : "A:BS",
        abbreviationSpellsheet : "A",
        group : "Homebrew",
        date : "2024/02/14"
    };

    SpellsList["power word: penance"] = {
        name : "Power Word: Penance",
        source : [["A:BS", 8]],
        level : 7,
        school : "Ench",
        classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
        time : "1 a",
        range : "60 ft",
        components : "V",
        duration : "Instantaneous",
        description : "1 crea I can see, if crea dealt 50 \u00BD dmg within last min, they take 40 force dmg or no effect"
    }
    // this is included in the ichorous peninsula book, not the BS. prevents copies.
    if(!SpellsList["pulverizing radiance"] || !SourceList["A:TCoR"]) {
        SpellsList["pulverizing radiance"] = {
            name : "Pulverizing Radiance",
            source : [["A:BS", 8]],
            level : 5,
            school : "Evoc",
            classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
            time : "1 a",
            range : "30 ft",
            components : "V,S",
            duration : "Instantaneous",
            description : "Make ranged spell atk; 6d6+20 Radiant dmg and target gains 3 stacks of irradiated for 1 min"
        };
    }

    SpellsList["fallow's theorem"] = {
        name : "Fallow's Theorem",
        source : [["A:BS", 7]],
        level : 1,
        school : "Div",
        classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
        time : "1 bns",
        range : "Self",
        components : "V,S",
        duration : "Conc, 5 min",
        description : "See up to 5 min of consequences for a 1 action I take in next hr; Adv on seen saves; cannot be suprised",
        descriptionFull : "I summon a crystal shard of arcane divination, which I can utilize to peer into possible futures. I may envision the consequecnes of a single action I could take in the next hour, witnessing up to 5 minute's worth of likely consequences before the shard crumbles. If I witnessed any effects that would cause me to make a saving throw in my vision and decide to go through with the action, I gain advantage on the roll. Additionally, I cannot be surprised by creatures whose actions I witnessed inside the shard."
    }
}