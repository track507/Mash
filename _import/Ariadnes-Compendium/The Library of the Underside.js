var iFileName = "The_Library_of_the_Underside";
RequiredSheetVersion("13.1.13");

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
FeatsList["tome of primeval and deep speech"] = {
    name : "tome of primeval and deep speech",
    source : [["A:TLotU", 18]],
    description : "",
}