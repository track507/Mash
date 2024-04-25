var iFileName = "The All Father's Ink";
RequiredSheetVersion("13.1.12");

SourceList["A:TAFI"] = {
    name : "Ariadne's: The All Father's Ink",
    abbreviation : "A:TAFI",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/03/19"
};

AddSubClass("barbarian", "path of the challenger", {
    regExpSearch : /^(?=.*path)(?=.*\bchallenger\b).*$/i,
    subname : "Path of the Challenger",
    source : [["A:TAFI", 73]],
    features : {
        "subclassfeature3" : {
            name : "Noble Rage",
            source : [["A:TAFI", 73]],
            minlevel : 3,
            description : "When raging, I gain a +2 to attack rolls made against enemies that are above half of their maximum hit points, and a +2 to damage rolls against enemies that are at or below half of their maximum hit points."
        },
        "subclassfeature3.1" : {
            name : "Challenger's Right",
            source : [["A:TAFI", 73]],
            minlevel : 3,
            description : "Whenever I hit a creature with a reckless attack or critical hit, they are now under the effects of the compelled duel spell until the end of their next turn."
        },
        "subclassfeature6" : {
            name : "Conquerer of Worthy Foes",
            source : [["A:TAFI", 73]],
            minlevel : 6,
            description : 'Whenever a creature is affected by the "Challenger\'s Right" feature for the first time, they take 2d6 psychic damage, and an additional 1d6 psychic damage every time I hit it with a melee attack while under its effects.'
        },
        "subclassfeature10" : {
            name : "Einherjar Bond", 
            source : [["A:TAFI", 73]],
            minlevel : 10,
            description : "If I am reduced to 0 hit points, a spirit appears above me. I have advantage on death saving throws, and an 18 or 19 is treated as a critical success. It disappears after I regain consciousness or stabilized. I cannot use this again until I finish a short or long rest.",
            usages : 1,
            recovery : "short rest"
        },
        "subclassfeature14" : {
            name : "Golden Challenger",
            source : [["A:TAFI", 73]],
            minlevel : 14,
            description : "While I am raging, my AC cannot be lower than 20, I gain resistance to radiant and necrotic damage, and have advantage on rolls to resist curses and diseases of any kind."
        }
    }
});

// The one in the deluxe edition is V1.0, this adds V2.0 from the patreon post.
AddSubClass("bard", "college of madness", { 
    regExpSearch : /^(?=.*college)(?=.*madness).*$/i,
    subname : "College of Madness",
    source : [["A:TAFI", 74]],
    features : {
        "subclassfeature3" : {
            name : "Mad Mockery",
            source : [["A:TAFI", 74]],
            minlevel : 3,
            description : desc([
                "I learn the vicious mockery cantrip which now deals 1d6 damage instead of 1d4. This increases to 2d6 at 5th level, 3d6 at 11th level, and 4d6 at 17th level.",
                "Additionally at 7th level, creatures that succeed on a saving throw against this now takes half damage and must subtract 1d4 from the next attack they make before the end of their next turn. A creature that fails this save has disadvantage on all attack rolls they makee until the end of their next turn instead."
            ]),
            spellcastingBonus : [{
                name : "Mad Mockery",
                spells : ["vicious mockery"],
                selection : ["vicious mockery"],
                firstCol : "atwill",
                times : 1
            }],
            spellChanges : {
                "vicious mockery" : {
                    description : "1 creature save or 1d6 Psychic dmg; CL 7, half dmg on fail, -1d4 from next attack; disadv. vs all attacks until the end of next turn.",
                    descriptionCantripDie : "1 crea save or 1d6 psychic dmg; CL 7, 1/2 dmg on fail, -1d4 next attack; disadv. all attacks until end of next turn.",
                    descriptionFull : "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d6 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6) and 17th level (4d6)." + "\n   " + "At 7th level, creatures that succeed on a saving throw against this now take half damage and must subtract 1d4 from the next attack they make before the end of their next turn. A creature that succeeds this save has disadvantage on all attack rolls they makee until the end of their next turn.",
                    changes : "Spells damage becomes 1d6 instead of 1d4. At 7th level, creatures take half damage on a failed save and must subtract 1d4 from the next attack they make. On a success, they have disadvantage on all attack rolls they make until the end of their next turn."
                }
            }
        },
        "subclassfeature3.1" : {
            name : "Notes of Loss",
            source : [["A:TAFI", 74]],
            minlevel : 3,
            description : desc([
                "When I see a hostile creature die within 30 ft of me, I can expend one use of bardic inspiration to give every ally of the deceased creature within 30 ft and aware of their death a penalty to their next attack roll, ability check, or saving throw equal to my bardic inspiration die."
            ])
        },
        "subclassfeature6" : {
            name : "Language of Madness",
            source : [["A:TAFI", 74]],
            minlevel : 6,
            description : desc([
                "I can speak gibberish and have any creature understand me via telepathy. The creature cannot understand me if it cannot understand any language",
                "Additionally, I can use this to cast the Command spell as a bonus action on my turn. I can cast this spell a number of times equal to half my Proficiency bonus rounded down."
            ]),
            usages : "half my prof bonus rounded down",
            usagescalc : "event.value = Math.floor( Number(How('Proficiency Bonus')) / 2 )"
        },
        "subclassfeature14" : {
            name : "Madsong",
            source : [["A:TAFI", 74]],
            minlevel : 14,
            description : desc([
                "At 14th level, I can attempt to play a piece of the Madsong. I must make a DC 20 performance check. On a failure, I fall unconscious until I take damage or a creature uses an action to wake me up. On a success, a 30 ft radius sphere centered on me manifests. I can either give allies within range advantage on all Int, Wis, and Cha ability checks and saving throws, or give my enemies within range disadvantage on all saving saving throws. I can use my bonus action on subsequent turns to maintain the Madsong. I can use this feature once per long rest."
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
})

RaceList["ink-forged"] = {
    regExpSearch : /ink-forged/i,
    name : "Ink-Forged",
    source : [["A:TAFI", 9]],
    plural : "Ink-Forged",
    scores : [0, 2, 0, 0, 0, 0],
    scorestxt : "+2 Dexterity",
    size : [2,3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Eyes of Ink", 60]],
    languageProfs : ["Common", "Primordial"],
    trait : "Ink-Forged (+2 Dexterity)" +
    "\n \u2022 Born of Ink: I can prepare one of the following abilities found on the notes page at the end of a short or long rest.",
    toNotesPage : [{
        name : "Ink-Forged: Born of Ink Features",
        page3notes : true,
        note : [
            "    I gain the following Born of Ink features. Once I use this ability, I must finish a short or long rest before I can use it again or prepare another." +
            "\n    " + "\u2022 Shadow Step: As a bonus action, I can teleport up to 60 ft to an unoccupied space I can see that is in dim light or darkness." + 
            "\n    " + "\u2022 Fluid Form: When I take damage, I can use my action to gain resistance to bludgeoning, piercing, and slashing damage until the start of my next turn." + 
            "\n    " + "\u2022 Ethereal Sight: I can see invisibly creatures on the Ethereal plane within 60 ft of me for the next hour."
        ]
    }],
    action : [["bonus action", "Shadow Step"], ["reaction", "Fluid Form"]],
    features : {
        "born of ink" : {
            name : "Born of Ink",
            minlevel : 1,
            usages : 1,
            recovery : "long rest"
        }
    }
};

RaceList["luminescent veil ink-forged"] = {
    regExpSearch : /^(?=.*luminescent)(?=.*veil)(?=.*ink-forged).*$/i,
    name : "Luminescent Veil Ink-Forged",
    sortname : "Ink-Forged, Luminescent Veil",
    source : [["A:TAFI", 9]],
    plural : "Ink-Forged",
    scores : [0, 2, 0, 0, 0, 1],
    scorestxt : "+2 Dexterity and +1 Charisma",
    size : [2,3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Eyes of Ink", 60]],
    languageProfs : ["Common", "Primordial"],
    spellcastingAbility : 6,
    trait : "Ink-Forged (+2 Dexterity, +1 Charisma)" +
    "\n \u2022 Born of Ink: I can prepare one of the following abilities found on the notes page at the end of a short or long rest. Additionally, Blinding Flash is always prepared." +
    "\n \u2022 Revealing Light: I learn the light cantrip and can concentrate on it for 1 minute. Doing so allows me to see everything in the bright light radius as truesight.",
    toNotesPage : [{
        name : "Ink-Forged: Born of Ink Features",
        page3notes : true,
        note : [
            "    I gain the following Born of Ink features. Once I use this ability, I must finish a short or long rest before I can use it again or prepare another." +
            "\n    " + "\u2022 Shadow Step: As a bonus action, I can teleport up to 60 ft to an unoccupied space I can see that is in dim light or darkness." + 
            "\n    " + "\u2022 Fluid Form: When I take damage, I can use my action to gain resistance to bludgeoning, piercing, and slashing damage until the start of my next turn." + 
            "\n    " + "\u2022 Ethereal Sight: I can see invisibly creatures on the Ethereal plane within 60 ft of my for the next hour.",
            "\n    " + "\u2022 Blinding Light: As a bonus action, I can shine maddening light. All creatures withint 30 ft of me must succeed a Constitution saving throw or be blinded until the end of their next turn. Charisma is my spellcasting ability for this."
        ]
    }, {
        name : "Eyes of Ink",
        page3notes : true,
        note : [
            "I can see normally in magical and normal darkness out to a range of 60 ft."
        ]

    }],
    action : [["bonus action", "Shadow Step"], ["reaction", "Fluid Form"], ["bonus action", "Blinding Light"]],
    features : {
        "born of ink" : {
            name : "Born of Ink",
            minlevel : 1,
            usages : 1,
            recovery : "long rest"
        }
    },
    spellcastingBonus : [{
        name : "Blinding Light",
        spells : ["light"],
        selection : ["light"],
        times : 1
    }]
};

RaceList["inkbound marefjes ink-forged"] = {
    regExpSearch : /^(?=.*inkbound)(?=.*marefjes)(?=.*ink-forged).*$/i,
    name : "Inkbound Marefjes Ink-Forged",
    sortname : "Ink-Forged, Inkbound Marefjes",
    source : [["A:TAFI", 9]],
    plural : "Ink-Forged",
    scores : [0, 3, 0, 0, 0, 0],
    scorestxt : "+3 Dexterity",
    size : [2,3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Eyes of Ink", 60]],
    languageProfs : ["Common", "Primordial"],
    trait : "Ink-Forged (+3 Dexterity)" +
    "\n \u2022 Resilience of the Mad: Adv. vs. being charmed or frightened." +
    "\n \u2022 Haunted by Nightmares: I dream vividly about Odin's pact with the King in Yellow, sometimes sharing prophetic insights with Odin and learn secrets about my current circumstance, at the DM's discretion" +
    "\n \u2022 Born of Ink: I can prepare one of the following abilities found on the notes page at the end of a short or long rest. Additionally, Shadowmeld is always prepared. ",
    toNotesPage : [{
        name : "Ink-Forged: Born of Ink Features",
        page3notes : true,
        note : [
            "    I gain the following Born of Ink features. Once I use this ability, I must finish a short or long rest before I can use it again or prepare another." +
            "\n    " + "\u2022 Shadow Step: As a bonus action, I can teleport up to 60 ft to an unoccupied space I can see that is in dim light or darkness." + 
            "\n    " + "\u2022 Fluid Form: When I take damage, I can use my action to gain resistance to bludgeoning, piercing, and slashing damage until the start of my next turn." + 
            "\n    " + "\u2022 Ethereal Sight: I can see invisibly creatures on the Ethereal plane within 60 ft of my for the next hour." +
            "\n    " + "\u2022 Shadowmeld: If I am in dim light or darkness, I can use my bonus action to meld into the shadows, becoming invisible for one minute or until I make an attack, cast a spell, or take damage."
        ]
    }, {
        name : "Eye's of Ink",
        page3notes : true,
        note : [
            "I can see normally in magical and normal darkness out to a range of 60 ft."
        ]
    }],
    adv_vs : ["charmed", "frightened"],
    action : [["bonus action", "Shadow Step"], ["reaction", "Fluid Form"], ["bonus action", "Shadowmeld"]],
    features : {
        "born of ink" : {
            name : "Born of Ink",
            minlevel : 1,
            usages : 1,
            recovery : "long rest"
        }
    }
};

MagicItemsList["seal of the king"] = {
    name : "Seal of the King", 
    source : [["A:TAFI", 12]],
    type : "wondrous item",
    rarity : "very rare",
    description : "You are immune to the Black Touch sickness and frightened condition, but you are now vulnerable to radiant damage.",
    savetxt : {
        immune : ["frightened", "black touch sickness"],
        text : "Vulnerable to radiant damage"
    }
};

MagicItemsList["visage of the punished seer"] = {
    name : "Visage of the Punished Seer", 
    source : [["A:TAFI", 15]],
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

MagicItemsList["ring of eternal struggle"] = {
    name : "Ring of Eternal Struggle", 
    source : [["A:TAFI", 15]],
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
    source : [["A:TAFI", 16]],
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

MagicItemsList["shefus' lucky spear"] = {
    name : "Shefus' Lucky Spear",
    source : [["A:TAFI", 21]],
    description : "While this spear can normally only be wielded by Shefus, I can also use this +2 spear",
    type : "weapon (spear)",
    rarity : "uncommon",
    attunement : false,
    weaponsAdd : ["Shefus' Lucky Spear"],
    weaponOptions : [{
        regExpSearch : /shefus' lucky spear/i,
        name : "Lucky Spear",
        baseWeapon : "spear",
        modifiers : [2, 2]
    }]
};

MagicItemsList["daring buckler"] = {
    name : "Daring Buckler", 
    source : [["A:TAFI", 21]],
    description : "Instead of the shield's normal bonus to AC, I gain a +1 to Dexterity. If I move 30ft towards a hostile creature before using my action to attack, the bonus becomes a +2 until the end of my next turn. Additionally, I can use Daring Riposte three times a day.",
    type : "shield",
    rarity : "very rare",
    attunement : true,
    usages : 3,
    recovery : "Dawn",
    shieldAdd : ["Daring Buckler", 0, 2],
    scores : [0, 1, 0, 0, 0, 0],
    shieldAdd : ["Daring Buckler -2", 0, 2],
    toNotesPage : [{
        name : "Daring Riposte",
        page3notes : true,
        note : desc([
            "As a reaction, I can add 5 to my AC against a single melee attack that targets me. If this causes the attack to miss, I can make an opportunity attack against the attacking creature as part of the same reaction."
        ])
    }],
    action : ["reaction", "Daring Riposte"]
};

MagicItemsList["dart"] = {
    name : "Dart",
    source : [["A:TAFI", 21]],
    description : "This shortsword grants a +2 to attack and damage rolls. You may also make an additional weapon attack with this sword as part of your Attack action. Rolling an 18-20 on a Large or smaller creature counts as a critical hit.",
    type : "weapon",
    rarity : "very rare",
    attunement : true,
    weaponsAdd : ["Dart"],
    weaponOptions : [{
        regExpSearch : /dart/i,
        name : "Dart",
        baseWeapon : "shortsword",
        modifiers : [2, 2]
    }]
};

MagicItemsList["blackbox blaster"] = {
    name : "Blackbox Blaster",
    source : [["A:TAFI", 36]],
    description : "This blaster counts as a firearm dealing 1d10 piercing damage plus 1d10 of fire damage on a hit. It has the loading property (6 rounds) and uses Black Box ammunition.",
    type : "firearm",
    rarity : "uncommon",
    weaponsAdd : ["Blackbox Blaster"],
    weaponOptions : [{
        regExpSearch : /blackbox blaster/i,
        name : "Blackbox Blaster",
        source : [["A:TAFI", 36]],
        list : "firearm",
        ability : 2,
        type : "Martial",
        damage : [1, 10, "piercing"],
        range : "60/120 ft",
        weight : 3, // official pistol is 3 lb and does same damage
        description : "Ammunition, loading, +1d10 fire damage",
	    abilitytodamage : true,
        ammo : "black box ammo"
    }]
};

MagicItemsList["heart grenade"] = {
    name : "Heart Grenade",
    source : [["A:TAFI", 37]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "This cursed heirloom is said to be taken from a dying saint. Her last wish was to shine beyond death, to go out in a blaze of glory. This heirloom has 5 charges, regaining 1d4+1 every dawn. Expending the last charge, roll 1d10. On a 1, the heirloom disinteregrates. The usage for these can be found on the notes page. ",
    toNotesPage : [{
        name : "Heart Grenade",
        note : desc([
            "When a creature within 120 ft of me is reduced to 0 hit points, I can expend a charge to make the heart explode. Each creature within 30 ft of the target creature must make DC 16 Constitution saving throw, taking 5d8 necrotic damage, or half on a success.",
            "I can also expend 3 charges to throw the heirloom at a target within 60 ft of me cause the same effects mentioned above."
        ])
    }],
    fixedDC : 16,
    usages : 5,
    recovery : "dawn"
};

MagicItemsList["keepsake of ten stings"] = {
    name : "Keepsake of Ten Stings",
    source : [["A:TAFI", 37]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true, 
    description : "This is an ancient amulet from a long dead god, and carries the powers of a god of rot and poison. I become immune to poison damage and the poisoned condition. My weapon attacks become magical and deal extra damage. Additionally, I can use Sting of Ten and Poison Absorption found on the notes page.",
    toNotesPage : [{
        name : "Keepsake of Ten Stings' Features",
        note : desc([
            "Sting of Ten: Once per turn, I can add 2d12 poison damage to a weapon attack that deals slashing or piercing damage. A creature hit by this attack must succeed on a DC 20 Constitution saving throw or be poisoned for one minute. On a successful save, a creature is immune to this effect for 24 hours. Additionally, whenever I attack a poisoned creature, I can use my bonus action to make an additional attack against it.",
            "Posion Absorption: Whenever I take posion damage, I take no damage and instead regain a number of hp equal to the damage dealt. I cannot benefit from this feature if I am the source of this damage."
        ])
    }],
    fixedDC : 20,
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if( !v.isSpell && !v.isDC && v.isMeleeWeapon && (/piercing|slashing/).test(v.theWea.damage[2])) {
                    fields.Description += (fields.Description ? '; ' : '') + '+2d12 poison dmg once per turn; DC 20 Con save or poisoned';
                }
            }
        ]
    },
    action : ["bonus action", "Sting of Ten"],
    savetxt : { text : ["Heal poison dmg dealt to me (cannot be from me)"], immune : ["poison damage", "poisoned condition"] }
};

MagicItemsList["severed head of the suneater"] = {
    name : "Severed Head of the Suneater",
    source : [["A:TAFI", 38]],
    type : "wondrous item",
    rarity : "artifact",
    description : "This severed head craves arcane energies. It's mouth is always opened and whenever the head enters an area where a spell or magical effect of 4th level or lower is currently active, the effect ends, and every level above 4th takes an additional round to devour the effects. While holding this head and targetted by a spell, I may use my reaction to devour the spell of 4th level or lower.",
    action : ["reaction", "Devour"]
};

MagicItemsList["hunter's edge"] = {
    name : "Hunter's Edge",
    source : [["A:TAFI", 53]],
    type : "weapon (dagger)",
    rarity : "legendary",
    weaponsAdd : ["Hunter's Edge"],
    weaponOptions : [{
        regExpSearch : /hunter's edge/i,
        name : "Hunter's Edge",
        source : [["A:TAFI", 53]],
        baseWeapon : "dagger",
        modifiers : [3, 3]
    }],
    description : "This dagger has a +3 bonus to attack and damage rolls. Additionally, the dagger deals an extra 1d12 bonus damage to aberrations, fiends, and celestials. If the creature I am attacking is at least one size larger than me, on an 18-20 on the attack roll, it is considered to be a critical hit."
};

MagicItemsList["chief sentinel's garb"] = {
    name : "Chief Sentinel's Garb",
    source : [["A:TAFI", 53]],
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

MagicItemsList["sentinel's roar"] = {
    name : "Sentinel's Roar",
    source : [["A:TAFI", 53]],
    description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw or be deafened, blinded, and unable to take reactions until the end of their next turn.",
    choices : ["Common", "Uncommon", "Rare"],
	choicesNotInMenu : true,
    action : ["action", ""],
    "common" : {
        name : "Sentinel's Roar [common]",
        rarity : "common",
        description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw (DC 12) or be deafened, blinded, and unable to take reactions until the end of their next turn.",
        fixedDC : 12
    },
    "uncommon" : {
        name : "Sentinel's Roar [uncommon]",
        rarity : "uncommon",
        description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw (DC 14) or be deafened, blinded, and unable to take reactions until the end of their next turn.",
        fixedDC : 14
    },
    "rare" : {
        name : "Sentinel's Roar [rare]",
        rarity : "rare",
        description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw (DC 16) or be deafened, blinded, and unable to take reactions until the end of their next turn.",
        fixedDC : 16
    }
};

var HandOfTheKingNotes = [
    ">>Cursed Artifact<<. While attuned to this item, you do not cast a shadow, and begin aging at 10 times my normal rate. Whenever you kill a humanoid, I become a year younger as you absorb the soul of your enemy.",
    ">>Mad Conduit<<. Non-magical objects you touch with this hand begin to rust and decay rapidly, taking 3d8 necrotic damage per turn. A creature hit by an unarmed strike or melee spell attack made with this hand takes an additional 3d6 piercing and 3d8 necrotic damage, and must make a DC 20 Wisdom saving throw or gain a random madness effect from the short-term madness table.",
    ">>Hope Devourer<<. This hand has 10 charges. As a reaction to an ability check, attack roll, or saving throw made by a creature within 60 ft of you, you can reduce the roll by an amount equal to the number of charge you expend. If the creature then fails to meet the DC, you recover 1d4+1 charges. You regain all charges after a long rest."
];

MagicItemsList["hand of the king"] = {
    name : "Hand of the King",
    source : [["A:TAFI", 56]],
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
    source : [["A:TAFI", 56]],
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

SpellsList["oath of war"] = {
    name : "Oath of War",
    source : [["A:TAFI", 30]],
    level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "Self",
    components : "V,S",
    duration : "Conc, 1 min",
    description : "+5 temp hp; your next attack roll or saving throw has adv; +1 to any ability score for duration"
};

SpellsList["radiant weapon"] = {
    name : "Radiant Weapon",
    source : [["A:TAFI", 30]],
    level : 3,
    school : "Conj",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 bns",
    range : "Self",
    components : "V,S,M",
    compMaterial : "a holy symbol worth at least 50 gp, which the spell consumes",
    duration : "Conc, 1 hr",
    description : "Create +2 weapon I am proficient with, dealing radiant dmg; uses Cha instead of Str or Dex; see full desc",
    descriptionFull : "You conjure any weapon that you are proficient with. This weapon has a +2 to attack and damage rolls and deals radiant damage instead of its usual damage type. Additionally, you can use Charisma instead of Strength or Dexterity for the attack and damage rolls."  + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the spell no longer requires concentration."
};

SpellsList["prayers of war"] = {
    name : "Prayers of War",
    regExpSearch : /\+? ?(my )?spell(casting)? (ability )?mod(ifier)?/i,
    source : [["A:TAFI", 30]],
    level : 4,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Conc, 1 min",
    description : "my spell mod crea in 30+10/SL ft; +15 ft speed, +2 to AC, +3 to atk and dmg rolls; action to concentrate",
    descriptionFull : "You can choose number of creatures within 30 ft equal to my spell casting ability modifier. These creatures have their speed increased by 15 ft, +2 to their AC, and gain a +3 to their attack and damage rolls, but you must use your action on each of your turns to maintain concentration." + AtHigherLevels + "When you cast this spel using a spell slot of 5th level or higher, the hymn's range increases by 10ft"
};

SpellsList["divine judgement"] = {
    name : "Divine Judgement",
    source : [["A:TAFI", 31]],
    level : 8,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a holy symbol",
    duration : "1 min",
    description : "Mark crea, glows 15 ft dim light; crea can't turn invisible; see full desc for additional benefits",
    descriptionFull : "You choose a creature within range and mark them with a divine symbol of your choice. This symbol sheds 15 ft of dim light and the creature can't turn invisible. At any point, you can use your bonus action to teleport to the an unoccupied space within 60 ft of the marked creature. This can be used to followed creatures through different planes. Once the spell ends, you return back to your plane of origin. Additionally when you teleport, you may use your action to make a ranged spell attack against the creature. On a hit, the creature takes 10d10 radiant damage and must succeed on a Constitution saving throw or be blinded until the end of their next turn. After using the teleportation and smite action three times, this spell ends"
};

SpellsList["barrier of gold"] = {
    name : "Barrier of Gold",
    regExpSearch : /\+? ?(my )?spell(casting)? (ability )?mod(ifier)?/i,
    source : [["A:TAFI", 31]],
    level : 5,
    school : "Abjur",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,,M",
    compMaterial : "a golden coin",
    duration : "1 min",
    description : "15 ft rad sphere; my spell mod crea can use rea. takes -4d8+1d8/SL dmg; hostile crea -1d4 atk roll",
    descriptionFull : "You create a 15 ft radius sphere and can choose a number of creatures equal to your spell casting ability modifier. Whenever an affected creature takes damage and is inside the barrier, they can use their reaction to reduce the damage by 4d8. In addition, hostile creatures inside the barrier must subtract 1d4 from their attack rolls." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage reduction increases by 1d8 for every level above 5th"
};
