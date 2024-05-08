var iFileName = "The Tectonic Netherdepths";
RequiredSheetVersion("13.1.13");

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
    description : "A creature hit by this bullet must make a DC 13 (+1 to DC per lodged bullet) Constitution saving throw when it finishes a long rest or gain one level of exhaustion and lose 5 hp from its hp max. DC 13 Medicine or Sleight of Hand check to remove the bullet using surgeon's tools. Improvised tools roll with disadv. taking 2d4 slashing on a fail."
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
            "Whenever I use my this rings' reaction to take half damage, I must make a DC 10 Intelligence saving throw. On a failed save, I take 3d6 psyhic damage as the ring burrows deeper and the save DC for subsequent saves is increased by 3.",
            "When I fail a second time, I take 5d6 psychic damage and become unable to remove the ring by normal means. I can remove this ring if the Remove Curse spell is casted at 5th level or higher.",
            "If I fail a third time, an evil alien intelligence takes over my mind, fully controlling me until someone takes the ring off my finger. If the ring is removed, it will refure to attune to me again."
        ])
    }],
    actions : [["reaction", "Aberrant Reflexes"], ["reaction", "Evasion"]],
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
    weaponsAdd : ["Rip's Risible Reaper"],
    weaponOptions : [{
        name : "Rip's Risible Reaper",
        regExpSearch : /rip's risible reaper/i,
        source : [["A:TTN", 12]],
        baseWeapon : "sickle",
        modifiers : [2,2]
    }]
}

AddWarlockInvocation("Revealing Blast (prereq: Eldritch Blast)", {
    name : "Revealing Blast",
    description : desc(["When I hit a creature with my eldritch blast, they are revealed until the end of their next turn. While revealed a creature cannot benefit from being invisible, is returned to its true form if its shapeshifted, and attacks against it hit critically on a 19-20. This condition does not dispel magic, justs put them on hold until the condition is lost."]),
    source : [["A:TTN", 15]],
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
    actions : ["reaction", ""]
}

FeatsList["light armor master"] = {
    name : "Light Armor Master",
    source : [["A:TTN", 16]],
    prerequisite : "requires light armor proficiency",
    description : "I gain a +2 to Dexterity saving throws while wearing light armor. When I succeed a Dexterity saving throw or an attack misses me, I can use my reaction to dodge and move up to 15 ft in a direction of my choosing.",
    prereqeval : function(v) { return v.lightArmorProf; },
    actions : ["reaction", "Dodge (move 15 ft)"]
}

FeatsList["crushing might"] = {
    name : "Crushing Might",
    source : [["A:TTN", 16]],
    prerequisite : "requires heavy armor proficiency",
    prereqeval : function(v) { return v.heavyArmorProf; },
    description : "Once per turn while I am wearing heavy armor, I can sacrifice 15 ft of movement to turn a melee attack into a crushing strike. Crushing strikes have a bonus to hit and damage rolls equal to half my AC, rounded down. Benefits to AC from shields, spells, and other means are ignored when calculating these bonuses."
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
            "The gaze of the Arkan Group is focused on whichever creature holds the Mysterious Teng Tablet. The creature is Revealed and cannot turn invisible by any means nor gain the benefits of the nondetection spell or similar effects. For as long as the creature carries the tablet:",
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
    description : "I gain the Guidance cantrip and proficiency in Arcana, or expertise if proficient. As an action, I create 4 motes of starlight that orbit my head, shining (30ft) bright and (30ft) dim light. As a bonus action once per long rest, I can make a ranged spell attack vs. a target within 60ft, dealing 4d6 radiant damage and is revealed until the end of its next turn.",
    spellcastingBonus : [{
        name : "Guidance",
        spells : ["guidance"],
        selection : ["guidance"],
        times : 1,
    }],
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
    description : "I can deliver a package to anywhere on the material plane within 24 hours, I know the Message cantrip, and my movement speed increases by 10 ft. As a bonus action once per long rest, I can trace a path to an ally within 120 ft of me. I can use my full movement speed to traverse the distance between us regardless of obstacles. This ends if we are more than 120 ft away from each other.",
    usages : 1,
    recovery : "long rest",
    action : ["bonus action", "Incoming Delivery"],
    speed : { allModes : "+10"},
    spellcastingBonus : [{
        name : "Message",
        spells : ["message"],
        selection : ["message"],
        times : 1,
    }]
}

// MagicItemsList["spellbook of brilliant incantations"] = {
//     name : "Spellbook of Brilliant Incantations",
//     source : [["A:TTN", 26]],
//     type : "wondrous item",
//     rarity : "very rare",
//     description : "If I am a wizard, I can add the following spells to my wizard spellbook by spending the required materials or using this as my own spellbook. If I am a cleric, these spells are considered to be always prepared. Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
//     choices : ["Wizard", "Cleric", "Not a Wizard or a Cleric"],
//     selfChoosing : function(v) {
//         return classes.known.wizard ? "wizard" : classes.known.cleric ? "cleric" : "not a wizard or a cleric"
//     },
//     "wizard" : {
//         name : "Spellbook of Brilliant Incantations (Wizard)",
//         description : "If I am a wizard, I can add the following spells to my wizard spellbook by spending the required materials or using this as my own spellbook. Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
//         spellcastingBonusElsewhere : {
//             addTo : "wizard",
//             spellcastingBonus : [{ // not wizard spells
//                 name : "Spellbook of Brilliant Incantations",
//                 spells : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
//                 selection : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
//                 times : 6
//             }] 
//         }
//     },
//     "cleric" : {
//         name : "Spellbook of Brilliant Incantations (Cleric)",
//         description : "If I am a cleric, these spells are considered to be always prepared. Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
//         eval : function() {
//             var subclass = classes.known["cleric"].subclass;
//             var list = ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"];
//             var SEspells = ClassSubList[subclass].spellcastingExtra;
//             // Function to check if a spell is already in the spellcastingExtra array
//             function spellNotAdded(spell) {
//                 return !SEspells.includes(spell);
//             }

//             // Add spells from list array to spellcastingExtra array if they are not already present
//             var spellsToAdd = list.filter(spellNotAdded);
            
//             // Push spellsToAdd into the spellcastingExtra array
//             for (var i = 0; i < spellsToAdd.length; i++) {
//                 ClassSubList[subclass].spellcastingExtra.push(spellsToAdd[i]);
//             }
//         },
//         removeeval : function() {
//             var subclass = classes.known["cleric"].subclass;
//             ClassSubList[subclass].spellcastingExtra = SESpells;
//         }
//     }
// }

// var SEspells;

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
    description : "I gain a +1 bonus to my AC and is cursed. When I use a Divine Smite, I gain 5 temp. hp. Additionally, when I reduce a creature to 0 hp with my Divine Smite, they are instantly killed and cannot be brought back to life with spells of 5th level or lower. I gain +1 to my Strength everytime I kill a good-aligned creature (max 24). See notes for curse.",
    toNotesPage : [{
        name : "Helm of the Oathbreaker: Curse",
        note : desc([
            "Everytime I score a critical hit against a creature, I must make a DC 15 Wisdom saving throw or become charmed by the helmet until the end of my next turn. The helm will attempt to murder the nearest good-aligned creature, and will use Divine Smite on all of its attack if available."
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
        return classes.known.rogue ? "Rogue" : classes.known.fighter ? "Fighter" : "Not a Rogue or Fighter";
    },
    "rogue" : {
        name : "Golden Edge (Rogue)",
        description : "I gain a +3 to attack and damage rolls made with this dagger. I gain a +2 to initiative rolls, cannot be surprised, and my sneak attack damage increases by 1d6. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
        addMod : { type : "skill", field : "Init", mod : 2, text : "I have a +2 bonus on initiative rolls." },
        usages : 1,
        additional : ["1d6"],
        recovery : "long rest"
    },
    "figher" : {
        name : "Golden Edge (Fighter)",
        additional : "Indomitable and Second Wind",
        description : "I gain a +3 to attack and damage rolls made with this dagger. I gain an additional use of my Indomitable feature. Additionally when I use my Second Wind feature, I gain 10 temp hp and cannot be frightened while they last. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
    },
    "not a rogue or fighter" : {
        name : "Golden Edge",
        description : "I gain a +3 to attack and damage rolls made with this dagger. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
    },
    weaponsAdd : ["Golden Edge"],
    weaponOptions : [{
        name : "Golden Edge",
        regExpSearch : /golden edge/i,
        baseWeapon : "dagger",
        modifiers : [3,3]
    }]
}
