var iFileName = "The_Tectonic_Netherdepths";
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

SourceList["A:TTN"] = {
    name : "Ariadne's: The Tectonic Netherdepths",
    abbreviation : "A:TTN",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/7"
}

MagicItemsList["irradiated ammunition"] = {
    name : "Irradiated Ammunition",
    source : [["A:TTN", 11]],
    type : "weapon (ammunition)",
    rarity : "uncommon",
    attunement : false,
    description : "A hit creature must make a DC 13 (+1 DC per lodged bullet) Constitution saving throw when it finishes a long rest or gain 1 level of exhaustion and lose 5 hp from its hp max. DC 13 Medicine or Sleight of Hand check to remove the bullet using surgeon's tools. Improvised tools roll with disadv. taking 2d4 slashing on a fail."
}

MagicItemsList["ring of aberrant reflexes"] = {
    name : "Ring of Aberrant Reflexes",
    source : [["A:TTN", 11]],
    type : "ring",
    rarity : "very rare",
    attunement : true,
    description : "I can use my reaction to take half damage when I am hit by an attack, and do not need to see the attacker to do so. If I have a similar feature already, I take no damage instead. I also gain Evasion if I don't already have it. This ring is also cursed; see notes.",
    toNotesPage : [{
        name : "Ring of Aberrant Reflexes: Curse",
        note : desc([
            "Whenever I use my this rings' reaction to take half damage, I must make a DC 10 Intelligence saving throw. On a failed save, I take 3d6 psychic damage as the ring burrows deeper and the save DC for subsequent saves is increased by 3.",
            "When I fail a second time, I take 5d6 psychic damage and become unable to remove the ring by normal means. I can remove this ring if the Remove Curse spell is casted at 5th level or higher.",
            "If I fail a third time, an evil alien intelligence takes over my mind, fully controlling me until someone takes the ring off my finger. If the ring is removed, it will refuse to attune to me again."
        ])
    }],
    action : [["reaction", "Aberrant Reflexes"], ["reaction", "Evasion"]],
    savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
}

MagicItemsList["crackling gravity bomb"] = {
    name : "Crackling Gravity Bomb",
    source : [["A:TTN", 12]],
    attunement : false,
    type : "adventuring gear (bomb)",
    rarity : "rare",
    description : "As an action, I can remove this grenade's cap and throw it at a point up to 60 ft away. Each creature within 15 ft must make a DC 15 Strength saving throw, taking 4d6 lightning damage and 4d6 force damage, and knocked prone, or half as much on a save and not knocked prone.",
}

MagicItemsList["arkan's tyranny"] = {
    name : "Arkan's Tyranny",
    source : [["A:TTN", 12]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    fixedDC : 17,
    description : "I gain a +3 bonus to unarmed attack and damage rolls. I deal an additional 1d8 psychic damage on a hit. I can cast the following spells (DC 17). At will: hold person, suggestion, zone of truth. 3/day each: dominate person, hold monster. 1/day each: dominate monster",
    spellcastingBonus : [{
        name : "Arkan's Tyranny (at will)",
        spells : ["hold person", "suggestion", "zone of truth"],
        selection : ["hold person", "suggestion", "zone of truth"],
        times : 3,
        firstCol : "atwill"
    },{
       name : "Arkan's Tyranny (3/day)",
       spells : ["dominate person", "hold monster"],
       selection : ["dominate person", "hold monster"],
       times : 2,
       firstCol : 3
    },{
       name : "Arkan's Tyranny (1/day)",
       spells : ["dominate monster"],
       selection : ["dominate monster"],
       times : 1,
       firstCol : 1
    }],
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if((v.baseWeaponName == "unarmed strike")) {
                    fields.Description += (fields.Description ? '; ' : '') + '+1d8 psychic dmg';
                }
            },
            "I deal an additional 1d8 psychic damage on a hit",
            700
        ],
        atkCalc : [
            function(fields, v, output) {
                if (v.baseWeaponName === "unarmed strike") {
					output.magic += 3;
				}
            },
            ''
        ]
    }
}

MagicItemsList["rip's risible reaper"] = { //there is no official "scythe" using sickle instead
    name : "Rip's Risible Reaper",
    source : [["A:TTN", 12]],
    type : "weapon (sickle)",
    rarity : "very rare",
    description : "I have a +2 to hit and damage rolls made with this sickle. Additionally it has 5 charges, regaining 1d4+1 at dawn. When I hit a creature, I can expend a charge and they must succeed a DC 15 Wisdom saving throw or take 2d6 psychic damage and be under the effects of the Hideous Laughter spell until the end of their next turn.",
    usages : 5,
    recovery : "dawn",
    weaponOptions : [{
        name : "Rip's Risible Reaper",
        regExpSearch : /rip's risible reaper/i,
        source : [["A:TTN", 12]],
        baseWeapon : "sickle",
        modifiers : [2,2],
        selectNow : true
    }]
}

AddWarlockInvocation("Revealing Blast (prereq: Eldritch Blast)", {
    name : "Revealing Blast",
    description : desc(["When I hit a creature with my eldritch blast, they are revealed until the end of their next turn. While revealed a creature cannot benefit from being invisible, is returned to its true form if its shapeshifted, and attacks against it hit critically on a 19-20. This condition does not dispel magic, justs put them on hold until the condition is lost."]),
    source : [["A:TTN", 15]],
    submenu : "[improves Eldritch Blast]",
    prereqeval : function(v) { return isSpellUsed('eldritch blast', true); }
})

AddWarlockInvocation("Darkness Within (prereq: level 5 warlock)", {
    name : "Darkness Within",
    description : desc([
        "Once per long rest when I am reduced to 0 hp, creatures within 15 ft when this invocation activates must make a Constitution saving throw against my spell save DC or take 1d12 necrotic damage. If at least one creature fails, I heal for the amount of damage dealt instead of falling unconscious."
    ]),
    source : [["A:TTN", 15]],
    submenu : "[warlock level  5+]",
    usages : 1,
    recovery : "long rest",
    prereqeval : function(v) { return classes.known.warlock.level >= 5; }
})


AddWarlockInvocation("Pact-Warded Mind (prereq: level 7 warlock)", {
    name : "Pact-Warded Mind",
    description : desc([
        "When I force a creature to make an Intelligence or Wisom saving throw, I can change it to a Charisma saving throw instead."
    ]),
    source : [["A:TTN", 15]],
    submenu : "[warlock level 7+]",
    usages : 3,
    recovery : "long rest",
    prereqeval : function(v) { return classes.known.warlock.level >= 7; }
})

AddWarlockInvocation("Greater Telepath (prereq: level 15 warlock, the Great Old One patron)", {
    name : "Greater Telepath",
    description : desc([
        "My telepath from my Awakened Mind feature increases to 120 ft and I can cast the command spell at will against creautres within my telepathy range."
    ]),
    source : [["A:TTN", 15]],
    submenu : "[warlock level 15+]",
    spellcastingBonus : [{
        name : "Command",
        spells : ["command"],
        selection : ["command"],
        times : 1,
        firstCol : "atwill"
    }],
    spellChanges : {
        "command" : {
            range : "120 ft", 
            changes : "I can cast this at a range equal to my Awakened Mind feature and doing so at will."
        }
    },
    prereqeval : function(v) { return classes.known.warlock.level >= 15 && (/great old one/).test(classes.known.warlock.subclass); }
})

FeatsList["sixth sense"] = {
    name : "Sixth Sense",
    source : [["A:TTN", 16]],
    prerequisite : "requires the Alert feat",
    description : desc([
        "I gain a +1 to Dexterity or Intelligence, I can add my Intelligence mod to Initiative rolls, even if I have another similar ability or feature, and I have a few seconds to prepare when I sense unseen imminent danger."
    ]),
    addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to my initiative rolls." },
    scorestxt : "+1 Dex or Int",
    prereqeval : function(v) { return CurrentFeats.known.indexOf("alert") !== -1;}
}

FeatsList["defensive acrobat"] = {
    name : "Defensive Acrobat",
    source : [["A:TTN", 16]],
    description : "I gain a +1 to Dexterity. Once per turn when I am hit by an attack, I can use my reaction to roll an Acrobatics check. If my roll is higher than the attack roll, the attack misses.",
    scores : [0, 1, 0, 0, 0, 0],
    action : ["reaction", ""]
}

FeatsList["light armor master"] = {
    name : "Light Armor Master",
    source : [["A:TTN", 16]],
    prerequisite : "requires light armor proficiency",
    description : "I gain a +2 to Dexterity saving throws while wearing light armor. When I succeed a Dexterity saving throw or an attack misses me, I can use my reaction to dodge and move up to 15 ft in a direction of my choosing.",
    prereqeval : function(v) { return v.lightArmorProf; },
    action : ["reaction", "Dodge (move 15 ft)"]
}

FeatsList["crushing might"] = {
    name : "Crushing Might",
    source : [["A:TTN", 16]],
    prerequisite : "requires heavy armor proficiency",
    prereqeval : function(v) { return v.heavyArmorProf; },
    description : "Once per turn while I am wearing heavy armor, I can sacrifice 15 ft of movement to turn a melee attack into a crushing strike. Crushing strikes have a bonus to hit and damage rolls equal to half my AC, rounded down. Benefits to AC from shields, spells, and other means are ignored when calculating these bonuses.",
    usages : 1,
    recovery : "Turn"
}

MagicItemsList["mysterious teng tablet"] = {
    name : "Mysterious Teng Tablet",
    type : "wondrous item",
    rarity : "artifact",
    source : [["A:TTN", 18]],
    description : "This tablet opens doors within the ancient Teng complex, and is bound to whoever picks it up. A character attuned to this item is under the effects of the Gaze of Arkan Curse. See notes",
    toNotesPage : [{
        name : "Mysterious Teng Tablet",
        note : desc([
            "This mysterious tablet hides faint echoes of primal magic within its glowing green runes. A creature attuned to this tablet can transfer ownership to another willing creature over the course of a short rest. A creature attuned also suffers from the Gaze of Arkan curse found below.",
            "A remove curse spell can momentarily stop the curse for one hour, with an additional hour for each spell slot used above 3rd. If the tablet is kept within a lead container, the Gaze of Arkan becomes less powerful, ignoring the last 2 effects from the Gaze of Arkan curse."
        ])
    }, {
        name : "Gaze of Arkan Curse",
        note : desc([
            "The gaze of the Arkan Group is focused on whichever creature holds the Mysterious Teng Tablet. The creature is Revealed and cannot turn invisible by any means nor gain the benefits of the Nondetection spell or similar effects. For as long as the creature carries the tablet:",
            "\u2022 Arkan enforcers and operatives know the general location of the creature",
            "\u2022 Masked Ones of Arkan know the precise location of the creature and can use their action to cast the Scrying spell once per long rest on the creature",
            "\u2022 After a long rest, the creature must succeed a DC 13 Wisdom saving throw or gain one point of exhaustion",
            "\u2022 When creatures of Arkan are within 500 ft, the character's eyes begin to glow red.",
            "The Arkan Group will hunt whoever is in possession of the tablet until they recover the item. "
        ])
    }]
}

MagicItemsList["pendant of the star guardian"] = {
    name : "Pendant of the Star Guardian", 
    source : [["A:TTN", 25]],
    rarity : "very rare",
    type : "wondrous item",
    attunement : true,
    spellcastingAbility : "class", // does not specify what type of ability it uses for range spell attack
    description : "I gain the Guidance cantrip and proficiency in Arcana, or expertise if proficient. As an action, 4 motes of starlight appear to orbit my head, shining (30ft) bright and (30ft) dim light. As a bonus action (1/LR), I make a ranged spell attack vs. a target within 60ft, dealing 4d6 radiant damage and revealed until the end of its next turn.",
    spellcastingBonus : [{
        name : "Guidance",
        spells : ["guidance"],
        selection : ["guidance"],
        times : 1,
    }],
    skills : [
        ["Arcana", "increment"]
    ],
    action : [["action", "Create Starlight (4 motes)"], ["bonus action", "Launch Starlight (60ft)"]],
    limfeaname : "Launch Starlight",
    usages : 1,
    recovery : "long rest",
    skills : [["Arcana", "increment"]]
}

MagicItemsList["trotters of speedy delivery"] = {
    name : "Trotters of Speedy Delivery",
    source : [["A:TTN", 25]],
    rarity : "very rare",
    type : "wondrous item",
    attunement : true,
    description : "I can deliver a package to anywhere on the material plane within 24 hours, gain the Message cantrip, and my movement speed increases by 10ft. As a bonus action (1/LR), I trace a path to an ally within 120 ft. I can use my full movement to traverse the distance between us regardless of obstacles. This ends if we are more than 120 ft away from each other.",
    usages : 1,
    recovery : "long rest",
    action : ["bonus action", "Incoming Delivery"],
    speed : { allModes : "+10"},
    spellcastingBonus : [{
        name : "Message",
        spells : ["message"],
        selection : ["message"],
        times : 1,
    }],
}

MagicItemsList["spellbook of brilliant incantations"] = {
    name : "Spellbook of Brilliant Incantations",
    source : [["A:TTN", 26]],
    type : "wondrous item",
    rarity : "very rare",
    description : "If I am a wizard, I can add the following spells to my wizard spellbook by spending the required materials or using this as my own spellbook. If I am a cleric, these spells are considered to be always prepared. Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
    choices : ["Wizard", "Cleric", "Not a Wizard or Cleric"],
    selfChoosing : function() {
        if(classes.known.wizard) return "wizard";
        if(classes.known.cleric) return "cleric";
        return "not a wizard or cleric";
    },
    "wizard" : {
        name : "Spellbook of Brilliant Incantations (Wizard)",
        description : "I can add the following spells to my wizard spellbook by spending the required materials or using this as my own spellbook. Each page can be torn out to be used as a spell scroll. If all pages are torn out, this book becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
        spellcastingBonusElsewhere : {
            addTo : "wizard",
            spellcastingBonus : [{
                name : "Spellbook of Brilliant Incantations", // these are not wizard spells
                spells : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
                selection : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
                times : 6
            }] 
        }
    },
    "cleric" : {
        name : "Spellbook of Brilliant Incantations (Cleric)",
        description : "These spells are considered to be always prepared on my cleric spell list. Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
        calcChanges : {
            spellAdd : [
                function(spellKey, spellObj, spName) {
                    // these spells are already part of the cleric spell list
                    var list = ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"];
                    // return if this is not the cleric spell list
                    if(spName !== "cleric") return;
                    for(var i = 0; i < list.length; i++) {
                        // only apply this to the listed spells
                        if(list[i] === spellKey && spellObj.firstCol !== "markedbox") {
                            spellObj.firstCol = "markedbox"
                        }
                    }
                }
            ]
        }
    },
    "not a wizard or cleric" : {
        name : "Spellbook of Brilliant Incantations (Not a Wizard or Cleric)",
        description : "Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
        spellcastingBonus : [{
            name : "Spellbook of Brilliant Incantations",
            spells : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
            selection : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
            times : 6,
            firstCol : 1
        }] 
    }
}


MagicItemsList["helm of the oathbreaker"] = {
    name : "Helm of the Oathbreaker",
    source : [["A:TTN", 26]],
    type : "armor (helmet)",
    rarity : "legendary",
    attunement : true,
    prerequisite : "requires attunement by a paladin",
    prereqeval : function(v) { 
        return classes.known.paladin;
    },
    description : "I gain a +1 bonus to my AC and is cursed. When I use a Divine Smite, I gain 5 temp. hp. Additionally, when I reduce a creature to 0 hp with my Divine Smite, they are instantly killed and cannot be brought back to life with spells of 5th level or lower. I gain +1 to my Strength every time I kill a good-aligned creature (max 24). See notes for curse.",
    toNotesPage : [{
        name : "Helm of the Oathbreaker: Curse",
        note : desc([
            "Every time I score a critical hit against a creature, I must make a DC 15 Wisdom saving throw or become charmed by the helmet until the end of my next turn. The helm will attempt to murder the nearest good-aligned creature, and will use Divine Smite on all of its attack if available."
        ])
    }],
    extraAC : [{name : "Helm of the Oathbreaker", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
}

MagicItemsList["golden edge"] = {
    name : "Golden Edge",
    source : [["A:TTN", 27]],
    type : "weapon (dagger)",
    rarity : "legendary",
    attunement : true,
    description : "I gain a +3 to attack and damage rolls made with this dagger. If I am a Rogue, I gain a +2 to initiative rolls, cannot be surprised, and my sneak attack damage increases by 1d6. If I am a fighter, I gain an additional use of my Indomitable feature. Additionally when I use my Second Wind feature, I gain 10 temp hp and cannot be frightened while they last. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1 or 2, the dagger breaks and is irreparable.",
    choices : ["Rogue", "Fighter", "Not a Rogue or Fighter"],
    selfChoosing : function() {
        if(classes.known.rogue) return "rogue";
        if(classes.known.fighter) return "fighter";
        if(!classes.known.rogue && !classes.known.fighter) return "not a rogue or fighter"
    },
    "rogue" : {
        name : "Golden Edge (Rogue)",
        description : "I gain a +3 to attack and damage rolls made with this dagger. I gain a +2 to initiative rolls, cannot be surprised, and my sneak attack damage increases by 1d6. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
        addMod : { type : "skill", field : "Init", mod : 2, text : "I have a +2 bonus on initiative rolls." },
        usages : 1,
        recovery : "long rest"
    },
    "fighter" : {
        name : "Golden Edge (Fighter)",
        additional : "Indomitable and Second Wind",
        description : "I gain a +3 to attack and damage rolls made with this dagger. I gain an additional use of my Indomitable feature. Additionally when I use my Second Wind feature, I gain 10 temp hp and cannot be frightened while they last. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
    },
    "not a rogue or fighter" : {
        name : "Golden Edge (not a rogue or fighter)",
        description : "I gain a +3 to attack and damage rolls made with this dagger. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
    },
    weaponOptions : [{
        name : "Golden Edge",
        regExpSearch : /golden edge/i,
        baseWeapon : "dagger",
        modifiers : [3,3],
        selectNow : true
    }],
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if(classes.known.rogue && (/sneak attack/i).test(fields.Description)) {
                    var match = fields.Description.match(/sneak attack (\d+)d(\d+)/i);
                    var dice = match[0].match(/(\d+)d(\d+)/i);
                    var nDice = parseInt(dice[1]);
                    nDice += 1;
                    fields.Description = fields.Description.replace(/sneak attack (\d+)d(\d+)/i, "Sneak attack " + nDice + "d6");
                }
            },
            'My sneak attack damage increases by 1d6',
            800 // sneak attack is applied at 700, make sure this goes after sneak attack is applied.
        ]
    }
}

MagicItemsList["void beckoner"] = {
    name : "Void Beckoner",
    type : "wand",
    rarity : "legendary",
    attunement : true,
    source : [["A:TTN", 28]],
    description : "I gain a +2 to my spell attacks and spell save DC. This wand has 10 charges, gaining 1d6+2 at dawn. I can expend a number of charges to cast spells associated with this wand. As an actions I expend 5 charges to use Open Rift (see notes).",
    toNotesPage : [{
        name : "Void Beckoner: Open Rift",
        note : desc([
            "As an action, I can expend 5 charges to open a rift in an unoccupied space within 60 ft. Each creature within 30 ft of it must make a DC 17 Strength saving throw or take 3d6 force damage and be pulled 15 ft towards the rift. A large or smaller creature that starts its turn within 5 ft of the rift and fails the Strength save takes an additional 10d6 force damage and must succeed on a DC 17 Charisma saving throw or be swallowed by the void. Only a Wish spell can return the creature back.",
            "This rift remains open for one minutes, or until I dismiss it. At the start of each of my turns, while the rift remains open, roll 1d10. On a 1, a Karcharis burst open from the rift, its ravenous hunger focused on the wielder of the Void Beckoner."
        ])
    }],
    fixedDC : 17,
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if (type !== "prepare") return 2;
            },
            "I gain a +2 bonus to spell attack rolls and spell save DC."
        ]
    },
    action : ["action", "Open Rift (5 charges)"],
    usages : 10,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Void Beckoner (1 ch)",
        spells : ["magic missile", "tasha's hideous laughter"],
        selection : ["magic missile", "tasha's hideous laughter"],
        times : 2,
        firstCol : 1
    }, {
        name : "Void Beckoner (3 ch)",
        spells : ["bestow curse", "counterspell"],
        selection : ["bestow curse", "counterspell"],
        times : 2,
        firstCol : 3
    }, {
        name : "Void Beckoner (5 ch)",
        spells : ["planar binding", "telekinesis"],
        selection : ["planar binding", "telekinesis"],
        times : 2,
        firstCol : 5
    }]
}

MagicItemsList["ancient teng key"] = {
    name : "Ancient Teng Key",
    type : "wondrous item",
    rarity : "artifact",
    source : [["A:TTN", 31]],
    attunement : true,
    prerequisite : "Mysterious Teng Tablet",
    prereqeval : function(v) {
        return (CurrentMagicItems.known.indexOf("mysterious teng tablet") !== -1)
    },
    description : "The Teng Tablet has now evolved into this key. Weighing 100 pounds, it cannot be carried by a creature with a Strength score lower than 12. I can increase one of my ability scores by 2, and can cast spells associated with this key with only verbal components. After casting one of these spells, I am affected by the Gaze of Arkans curse until I finish a long rest.",
    scorestxt : "+2 to one ability score",
    spellcastingBonus : [{
        name : "Ancient Teng Key",
        spells : ["find the path", "find traps", "word of recall"],
        selection : ["find the path", "find traps", "word of recall"],
        times : 3,
        firstCol : ""
    }],
    toNotesPage : [{
        name : "Ancient Teng Key",
        note : desc([
            "The Teng Tablet has now evolved into this key. I can use this key to seal Teng control rooms, giving me a safe place to rest, should I need one. A Teng construct or machine that is in contact with the Ancient Key regains 10 hp per round. If it was broken or in a state of disrepair, it becomes functional only when it is restored to its max hp. Teng Sentinels will not attack you, and their vehicles and machines will respond to your commands as well as their state of disrepair allows."
        ]),
        amendTo : "Mysterious Teng Tablet"
    }]
}

SpellsList["rock strike"] = {
    name : "Rock Strike",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 37]],
    level : 2,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a small rock",
    duration : "Instantaneous",
    save : "Str",
    description : "1 crea, ranged spell attack; 3d10+1d10/SL bludgeoning dmg; Strength save or knocked prone",
    descriptionFull : "I hurl a small rock at a creature within range. The rock then triples in size before striking the target. On a hit, the target takes 3d10 bludgeoning damage and must make a Strength saving throw or knocked prone if it is a large or smaller creature, it is knocked prone." + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
}

SpellsList["burial"] = {
    name : "Burial",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 37]],
    level : 4,
    school : "Necro",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a fistful of soil",
    duration : "Conc, 1 min",
    description : "1 crea Strength save or earth swallows, descending 10 ft; Target blinded, restrained, incapacitated, total cover; 3d6 necrotic dmg at start of turn",
    descriptionFull : "I force a creature standing on earth or rock to sink into the ground. The target must succeed a Strength saving throw or descend 10 ft into the earth as they are swallowed. The target is blinded, restrained, and incapacitated. It has total cover against all attacks and other effects outside the earth, and taks 3d6 necrotic damage at the start of each of its turns. It begins to suffocate if it requires air. A creature can repeat the saving throw at the start of each of its turns. If I am more than 60 ft away from the target or lose concentration, the spell ends and the target can expend 10 ft of movement to crawl out, exiting prone."
}

SpellsList["protection of stone"] = {
    name : "Protection of stone",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 37]],
    level : 5,
    school : "Abjur",
    time : "1 a",
    range : "Self",
    components : "V,S,M",
    compMaterial : "a small piece of granite",
    duration : "Conc, 1 min",
    description : "Magic stones orbit in 10 ft sphere around me; 1/2 cover; bns a. hurl stone 60ft, Dex save 3d8+1d8/SL blud., save halves; see full desc.",
    descriptionFull : "Until this spell ends, magical stones orbit around me in a 10 ft sphere, giving me half-cover against attacks and area effects outside the sphere. As a bonus action on my turn, I can hurl a stone at a target within 60 ft. The target must make a Dexterity saving throw, taking 3d8 bludgeoning damage on a failed save, or half on a success. As a reaction when a creature attempts to pass through the sphere, I can command the stones to form a solid wall, preventing them from reaching me. The target must make a contested Athletics or Acrobatics check against my spell save DC. On a failed save, it cannot move closer to me." + AtHigherLevels + "When I case this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
}

MagicItemsList["dwarven lantern"] = {
    name : "Dwarven Lantern",
    type : "wondrous item",
    source : [["A:TTN", 42]],
    rarity : "rare",
    description : "This lantern sheds bright light in a 30 ft radius and dim light for an additional 30 ft. Creatures with blindsense cannot see anything that is within the bright light. It also has 10 charges, burning one charge per hour and requiring Dwarven Oil to replenish.",
    usages : 10,
    recovery : "Oil"
}

MagicItemsList["the fixer"] = {
    name : "The Fixer",
    source : [["A:TTN", 46]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "I can cast Guidance and Mending. Any medium or smaller broken non-magical item can be fixed with a gentle tap. It has 5 charges, regaining 1d4+1 at dawn. Expending one gives me adv. on any skill check, 5 charges restores 1/2 the max charges of another magical items of Very Rare or lower. +3 bonus to Charisma checks to de-escalate a situtation and avoid battle.",
    usages : 5,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "The Fixer",
        spells : ["guidance", "mending"],
        selection : ["guidance", "mending"],
        times : 2,
    }]
}

MagicItemsList["pointy hat of brazen explorers"] = {
    name : "Pointy Hat of Brazen Explorers",
    source : [["A:TTN", 46]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "I gain a +1 to my spell attack rolls, and ranged spell attacks vs. targets within 5 ft of me are considered melee spell attacks. I can add my spellcasting ability modifier to the damage of melee attack spells. I gain a +1 to my Charisma, or +2 if I am a dwarf.",
    choices : ["Dwarf", "Not a Dwarf"],
    selfChoosing : function() {
        if((/dwarf/i).test(CurrentRace.known)) return "dwarf";
        if(!(/dwarf/i).test(CurrentRace.known)) return "not a dwarf";
    },
    "dwarf" : {
        name : "Pointy Hat of Brazen Explorers (Dwarf)",
        description : "I gain a +1 to my spell attack rolls, and ranged spell attacks vs. targets within 5 ft of me are considered melee spell attacks. I can add my spellcasting ability modifier to the damage of melee attack spells. I gain a +2 to my Charisma.",
        scores : [0,0,0,0,0,2]
    },
    "not a dwarf" : {
        name : "Pointy Hat of Brazen Explorers (Not a Dwarf)",
        description : "I gain a +1 to my spell attack rolls, and ranged spell attacks vs. targets within 5 ft of me are considered melee spell attacks. I can add my spellcasting ability modifier to the damage of melee attack spells. I gain a +1 to my Charisma.",
        scores : [0,0,0,0,0,1]
    },
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if (type == "attack") return 1;
            },
            "I gain a +1 bonus to spell attack rolls."
        ]
    }
}

MagicItemsList["backpack of endless supplies"] = {
    name : "Backpack of Endless Supplies",
    source : [["A:TTN", 47]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : false,
    description : "This backpack in indistinguishable from any other backpack. For this item to function, it must carry nothing inside. I can activate it 1/LR, and must lay it flat on the floor and say the command word, Margel. It then sprawls out into a black mahogany table filled with dwarven food and drink. This takes 1 hr to consume, and those who eat are satiated for 24 hrs and gain 24 temp hp. After an hour, it folds back into a backpack.",
    usages : 1,
    recovery : "long rest"
}

MagicItemsList["igmar's diamond pickaxe"] = {
    name : "Igmar's Diamond Pickaxe",
    source : [["A:TTN", 47]],
    type : "weapon (pickaxe)",
    rarity : "legendary",
    attunement : true,
    description : "This +3 pickaxe deals double damage to objects and structures and has an increased critical range, but have a -2 to attack against creatures. Minerals, constructs, and rocks take an additional 2d10 force damage, and minerals and rocks extracted with this are in perfect condition. 1/LR I can cast Move Earth. I have disadvantage on attacks if my Strength is 14 or lower.",
    weaponOptions : [{
        name : "Igmar's Diamond Pickaxe",
        regExpSearch : /igmar's diamond pickaxe/i,
        source : [["A:TTN", 47]],
        type : "Martial",
        ability : 1,
        abilitytodamage : true,
        damage : [1,6, "piercing"],
        range : "Melee",
        description : "Versatile (1d8), destructive, heavy armament, +1 crit range",
        tooltip : "Heavy armament: Creatures with a Strength score of 14 or lower have disadvantage on the attack rolls.\n Destructive: This pickaxe has a -2 to attack creatures and deals double damage vs objects and structures.",
        special : true,
        weight : 44,
        selectNow : true
    }],
    spellcastingBonus : [{
        name : "Igmar's",
        spells : ["move earth"],
        selection : ["move earth"],
        times : 1,
        firstCol : "oncelr"
    }]
}

SpellsList["starlight aura"] = {
    name : "Starlight Aura",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 52]],
    level : 0,
    school : "Ench",
    time : "1 bns",
    range : "Self",
    components : "V,S",
    duration : "1 rnd", // rnd = turn
    description : "30ft rad dim light around me;  my spellcasting ability modifier creas +1 to attack, ability, and saving throws til end of my next turn",
    descriptionFull : "A scattering of star-like flecks appear around me, illuminating the area with 30 ft of dim light. These motes of starlight remain until the end of my next turn, during which I and a number of allies equal to my spellcasting ability modifier within 30 ft gain +1 to attack rolls, ability checks, and saving throws."
}

SpellsList["shooting star"] = {
    name : "Shooting Star",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 52]],
    level : 3,
    school : "Evoc",
    time : "1 a",
    range : "120 ft",
    components : "V,S,M",
    compMaterial : "a shiny white pearl worth at least 100 gp",
    duration : "Instantaneous",
    description : "Spell atk 8d8 force dmg and Revealed until the end of its next turn",
    descriptionFull : "I hurl a streaking star from the palm of my hand at a creature within range. On a hit, the target takes 8d8 Force damage and is Revealed until the end of its next turn."
}

SpellsList["watcher's smite"] = {
    name : "Watcher's smite",
    classes : ["paladin"],
    source : [["A:TTN", 52]],
    level : 5,
    school : "Evoc",
    time : "1 bns",
    range : "Self",
    components : "V",
    duration : "Conc, 1 min",
    save : "Cha",
    description : "Next weapon hit +6d10 Force dmg and Revealed until end of next turn; Aberr. Cha saving throw take 10d6 Force, save halves"
}

MagicItemsList["dimensional blade"] = {
    name : "Dimensional Blade",
    source : [["A:TTN", 53]],
    type : "weapon (longsword)",
    rarity : "artifact",
    attunement : true,
    // there is no such thing as cosmic smite in the PDF
    // Confirmed with their Patreon that this spell is the watcher's smite spell
    description : "This +3 longsword deals an additional 1d8 Force damage on a hit. If I am a fighter, I can use an action to recover one use of my action surge feature. If I am a Paladin or a Pact of the Blade Warlock, I can cast Watcher's Smite through this weapon 1/LR. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
    toNotesPage : [{
        name : "Dimensional Blade",
        note : desc([
            "Curse of Dimensions: When a creature is hit with this blade, they become dimensionally shattered. A creature dimensionally shattered has a -3 to all rolls and disadvantage on Charisma saving throws.",
            "Spells: I can use my action to cast one of the following spells 1/LR (spell save DC 18): Shooting Star, Banishment, Wall of Force.",
            "Dimensional Passage: While I wield this sword, I can choose a point within 10 ft of me. At any point over the next 8 hours, I can choose another point within 10 ft of me. When both points are chosen, a portal opens, connecting the two points, even if they're on different planes. The portal does not open if one of the points is occupied. They last for an hour or until I dismiss them. The portal cannot do damage nor be destroyed, and I can use this once per long rest."
        ])
    }],
    spellcastingBonus : [{
        name : "Dimensional Blade",
        spells : ["shooting star", "banishment", "wall of force"],
        selection : ["shooting star", "banishment", "wall of force"],
        times : 3,
        fixedDC : 18,
        firstCol : "oncelr"
    }],
    weaponOptions : [{
        name : "Dimensional Blade",
        regExpSearch : /dimensional blade/i,
        source : [["A:TTN", 53]],
        baseWeapon : "longsword",
        description : "Finesse, versatile (1d10); +1d8 Force dmg; +4d8 Force dmg vs Aberr; Special; Heavy",
        tooltip : "Special: Creatures hit with this weapon are dimensionally shattered. They have a -3 to all rolls and disadvantage on Charisma saving throws.\n Heavy: I have disadvantage on attack rolls if my Stength is 14 or lower.",
        modifiers : [3,3],
        selectNow : true
    }],
    limfeaname : "Dimensional Passage",
    usages : 1,
    recovery : "long rest",
    choices : ["Fighter", "Paladin", "Pact of the Blade Warlock", "Other"],
    selfChoosing : function() {
        if(classes.known.fighter) return "fighter";
        if(classes.known.paladin) return "paladin";
        if(classes.known.warlock && (/hexblade/).test(classes.known.warlock.subclass) && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade') return "pact of the blade warlock";
        return "other";
    },
    "fighter" : {
        name : "Dimensional Blade (Fighter)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. I can use an action to recover one use of my action surge feature. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
        limfeaname : "Fighter's Adrenaline",
        usages : 1,
        recovery : "action"
    },
    "paladin" : {
        name : "Dimensional Blade (Paladin)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. I can cast Watcher's Smite through this weapon 1/LR. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
        spellcastingBonus : [{
            name : "Dimensional Blade (Paladin)",
            spells : ["watcher's smite"],
            selection : ["watcher's smite"],
            times : 1,
            firstCol : "oncelr"
        }]
    },
    "pact of the blade warlock" : {
        name : "Dimensional Blade (Pact of the Blade)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. I can cast Watcher's Smite through this weapon 1/LR. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
        spellcastingBonus : [{
            name : "Dimensional Blade (Pact of the Blade)",
            spells : ["watcher's smite"],
            selection : ["watcher's smite"],
            times : 1,
            firstCol : "oncelr"
        }]
    },
    "other" : {
        name : "Dimensional Blade (Other)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. Aberrations take an additional 4d8 Force damage. See notes for weapon features."
    }
}

MagicItemsList["crystallized arcanite"] = {
    name : "Crystallized Arcanite",
    source : [["A:TTN", 61]],
    type : "treasure",
    rarity : "very rare",
    attunement : false,
    description : "I can use my reaction to regain a 2d4+2 levels worth of spell slots if I am within 10 ft of this item.",
    action : ["reaction", ""]
}

MagicItemsList["teng diving suit"] = {
    name : "Teng Diving Suit",
    source : [["A:TTN", 69]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    description : "This suit is magically powered unless all 20 of its charges are expended. Each suit is designed to fit a specific size of creature, small, medium or large, with medium being the most common. While wearing this suit, my AC is 20 and I am resistant to bludgeoning, piercing, and slashing damage, and can withstand 1000 atmopheres. See notes for full details.",
    toNotesPage : [{
        name : "Teng Diving Suit: Features",
        note : desc([
            "I can only attune to this suit if the size of it fits me.",
            "This suit has a maximum of 20 charges. It consumes 1 charge per hour to power this suit. To recharge it, I can use my action to expend a slot slot. The suit regains a number of charges equal the level of spell slot used.",
            "My AC becomes 20, and I can survive pressures up to 1000 atmospheres. But my walking speed is reduced to 10 ft, and I gain a swimming speed of 50 ft.",
            "I can expend a number of charges to cast the following spells:",
            "\u2022 1 Charge: Shocking Grasp (4d8)",
            "\u2022 3 Charges: Lightning Bolt",
            "\u2022 5 Charges: Chain Lightning"
        ])
    }],
    spellcastingBonus : [{
        name : "Teng Diving Suit (1)",
        spells : ["shocking grasp"],
        selection : ["shocking grasp"],
        times : 1,
        firctCol : 1
    }, {
        name : "Teng Diving Suit (3)",
        spells : ["lightning bolt"],
        selection : ["lightning bolt"],
        times : 1,
        firctCol : 3
    }, {
        name : "Teng Diving Suit (5)",
        spells : ["chain lightning"],
        selection : ["chain lightning"],
        times : 1,
        firctCol : 5
    }],
    spellChanges : {
        "shocking grasp" : {
            description : "Spell attack, adv. if metal armor, 4d8 Lightning dmg, no rea 1 turn",
            descriptionCantripDie : "Spell attack, adv. if metal armor, 4d8 Lightning dmg, no rea 1 turn",
            descriptionFull : "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 4d8 lightning damage, and it can't take reactions until the start of its next turn.",
            changes : "The spells damage is set to 4d8 indicated by the Teng Diving Suit."
        }
    },
    usges : 20,
    recovery : "SS"
}

MagicItemsList["emerald tablet of life"] = {
    name : "Emerald Tablet of Life",
    source : [["A:TTN", 77]],
    type : "wondrous item",
    rarity  : "artifact",
    prerequisite : "Mysterious Teng Tablet and Ancient Teng Key",
    prereqeval : function(v) {
        return (CurrentMagicItems.known.indexOf("mysterious teng tablet") !== -1 && CurrentMagicItems.known.indexOf("ancient teng key") !== -1)
    },
    attunement : true,
    description : "The tablet is weightless to me and terribly heavy to everyone else. I gain additional features found on the notes page.",
    toNotesPage : [{
        name : "Emerald Tablet of Life",
        note : desc([
            "While attuned to this tablet, my Constitution score becomes a 26, unless it is already higher. I gain the following:",
            "\u2022 One legendary resistance",
            "\u2022 One damage immunity",
            "\u2022 One condition immunity",
            "\u2022 Resistance to all elemental damage (acid, cold, fire, lightning, and thunder)",
            "\u2022 I can cast True Resurrection once per week without any material components",
            "Additionally, this artifact gains sentience and new powers over the course of centuries under the possession of brilliant Dwarven and Teng artificers, which it maintains in its awakened form."
            + " I can use it to seal or unseal Teng control rooms and outposts. A Teng construct or machine that is in contact with this tablet regains 25 hp per round. If it was broken or in a state of disrepair, it becomes functional when it is restored to its max hp.",
            "Teng Sentinels will act friendly towards me, and their vehicles and machines respond to my commands as well as their state of disrepair allows."
        ]),
        amendTo : "Mysterious Teng Tablet"
    }],
    limfeaname : "Legendary Resistance",
    usages : 1,
    recovery : "long rest",
    dmgres : ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
    spellcastingBonus : [{
        name : "Emerald Tablet of Life",
        spells : ["true resurrection"],
        selection : ["true resurrection"],
        times : 1,
        firctCol : "1/W"
    }]
}