if (sheetVersion < 13001009) { throw "This script was made for a newer version of the sheet (v13.1.9). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com."; };
var iFileName = "spellblade_class";
RequiredSheetVersion("13.1.9");

SourceList["WSB"] = {
    name : "Soulblade",
    abbreviation : "WSB",
    group : "Homebrew",
    url : "https://drive.google.com/file/d/1KMBhwRALIoroV5VDWSGskJymQY0VJuN7/view",
    date : "2023/12/10"
};

//implement spell list
[  
    //cantrips
    "acid splash", "blade ward", "chill touch", "control flames", "create bonfire", "dancing lights", "friends", "frostbite", "gust", "infestation", "light", "lightning lure", "mage hand", "mending", "message", "mind sliver", "minor illusion", "mold earth", "prestidigitation", "ray of frost", "shape water", "shocking grasp", "sword burst", "thunderclap", "true strike",

    //1st level
    "absorb elements", "alarm", "burning hands", "catapult", "cause fear", "charm person", "chromatic orb", "color spray", "compelled duel", "comprehend languages", "detect magic", "disguise self", "earth tremor", "expeditious retreat", "false life", "feather fall", "fog cloud", "gift of alacrity", "grease", "ice knife", "identify", "illusory script", "inflict wounds", "jump", "longstrider", "mage armor", "magic missile", "magnify gravity", "protection from evil and good", "ray of sickness", "shield", "silent image", "sleep", "snare", "tasha’s caustic brew", "tasha’s hideous laughter", "tenser’s floating disk", "thunderwave", "unseen servant", "witch bolt",

    //2nd level
    "aganazzar’s scorcher", "alter self", "arcane lock", "augury", "blindness/deafness", "blur", "borrowed knowledge", "cloud of daggers", "continual flame", "crown of madness", "darkness", "darkvision", "detect thoughts", "dragon’s breath", "dust devil", "earthbind", "enlarge/reduce", "flaming sphere", "fortune’s favor", "gentle repose", "gust of wind", "immovable object", "intellect fortress", "invisibility", "kinetic jaunt", "knock", "levitate", "locate object", "magic mouth", "magic weapon", "maximilian’s earthen grasp", "melf’s acid arrow", "mind spike", "mirror image", "misty step", "nathair’s mischief", "nystul’s magic aura", "phantasmal force", "pyrotechnics", "ray of enfeeblement", "rime’s binding ice", "rope trick", "scorching ray", "see invisibility", "shadow blade", "shatter", "skywrite", "snilloc’s snowball swarm", "spider climb", "suggestion", "tasha’s mind whip", "vortex warp", "warding wind", "web", "wither and bloom", "wristpocket",

    //3rd level
    "animate dead", "ashardalon’s stride", "bestow curse", "blink", "catnap", "clairvoyance", "counterspell", "dispel magic", "enemies abound", "erupting earth", "fear", "feign death", "fireball", "flame arrows", "fly", "gaseous form", "glyph of warding", "haste", "hypnotic pattern", "leomund’s tiny hut", "life transference", "lightning bolt", "magic circle", "major image", "melf’s minute meteors", "nondetection", "phantom steed", "protection from energy", "pulse wave", "remove curse", "sending", "sleet storm", "slow", "spirit shroud", "stinking cloud", "summon fey", "summon lesser demons", "summon shadowspawn", "summon undead", "thunder step", "tidal wave", "tiny servant", "tongues", "vampiric touch", "wall of sand", "wall of water", "water breathing",

    //4th level
    "arcane eye", "banishment", "blight", "charm monster", "confusion", "conjure minor elementals", "control water", "dimension door", "divination", "elemental bane", "evard’s black tentacles", "fabricate", "fire shield", "gravity sinkhole", "greater invisibility", "hallucinatory terrain", "ice storm", "leomund’s secret chest", "locate creature", "mordenkainen’s faithful hound", "mordenkainen’s private sanctum", "otiluke’s resilient sphere", "phantasmal killer", "polymorph", "raulothim’s psychic lance", "sickening radiance", "stone shape", "stoneskin", "storm sphere", "summon aberration", "summon construct", "summon elemental", "summon greater demon", "vitriolic sphere", "wall of fire",

    //5th level
    "animate objects", "bigby’s hand", "cloudkill", "conjure elemental", "cone of cold", "contact other plane", "control winds", "creation", "danse macabre", "dawn", "dominate person", "dream", "enervation", "far step", "geas", "immolation", "infernal calling", "legend lore", "mislead", "modify memory", "negative energy flood", "passwall", "planar binding", "rary’s telepathic bond", "scrying", "seeming", "skill empowerment", "steel wind strike", "summon draconic spirit", "synaptic static", "telekinesis", "teleportation circle", "temporal shunt", "transmute rock", "wall of force", "wall of light", "wall of stone"

].forEach( function (s) {
	if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("spellblade") === -1) SpellsList[s].classes.push("spellblade");
});

//add class
ClassList["spellblade"] = {
    name : "Spellblade",
    regExpSearch : /^(?=.*spellblade).*$/i,
    source : [["WSB",1]],
    primaryAbility : "Intelligence",
    prereqs : "Intelligence 13",
    die : 10,
    improvements : [0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5],
    saves : ["Int", "Con"],
    skills : ["\n\n" + toUni("MyClass") + ": Choose two from Acrobatics, Arcana, Athletics, History, Investigation or Religion", "\n\n" + toUni("MyClass") + ": Choose two from Acrobatics, Arcana, Athletics, History, Investigation or Religion"],
    armorProfs : [
        [true, true, false, false],
        [true, true, false, false]
    ],
    weaponProfs : [
        [true, true, false],
        [true, true, false]
    ],
    equipment : "Spellblade's starting equipment:\n \u2022 Scale mail or chain shirt;\n \u2022 An arcane focus or a component pouch;\n \u2022 A scholar's pack or an explorer's pack;\n \u2022 Any simple weapon and any two martial weapons.",
    subclasses : ["Spellblade Schools",[]],
    attacks : [1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    abilitySave : 4,
    spellcastingAbility : 4,
    spellcastingFactor : 2,
    spellcastingTable : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 2, 1, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 2, 1, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 2, 2, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 2, 2, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 2, 2, 1, 0, 0, 0, 0], //lvl17
		[4, 3, 2, 2, 1, 0, 0, 0, 0], //lvl18
		[4, 3, 2, 2, 2, 0, 0, 0, 0], //lvl19
		[4, 3, 2, 2, 2, 0, 0, 0, 0]  //lvl20
    ],
    spellcastingKnown : {
        cantrips : [3,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6],
        spells : [2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,13,13,13,13]
    },
    spellcastingList : {
        class : "spellblade",
        level : [0,5]
    },
    features : {
        "enchanted weaponry" : {
            name : "Enchanted Weaponry",
            source : [["WSB", 3]],
            minlevel : 1,
            description : "\n   " + "With rigorous training, you have learned to channel magic through your weapons, allowing you to use your mind in combat, in favour of brawn or finesse. See notes page for additional information",
            toNotesPage : [{
				name : "Enchanted Weaponry: Linked Weapon",
				page3notes : true,
				note : [
                    "When you finish a long or short rest, you may choose a non-heavy melee weapon to link with. That weapon counts as a spellcasting focus as long as it remains linked to you. You may use your Intelligence stat instead of Dexterity or Strength when you make an attack or damage roll with that weapon.",
                    "Whenever you make a ranged spell attack using a linked weapon, you may choose to make the attack a melee spell attack instead, using that weapon as a spellcasting focus for the attack.",
                    "You may use this feature with a number of weapons equal to your proficiency bonus. After reaching this limit, you must end the link with one of your other weapons before establishing another."
                ]
            }]
        },
        "spellcasting" : {
            name : "Spellcasting",
            source : [["WSB",2]],
            minlevel : 1,
            description : "\n   " + "I can cast known Spellblade cantrips/spells, using Intelligence as my spellcasting ability.",
            additional : ["3 cantrips \u0026 2 spells known","4 cantrips \u0026 3 spells known","4 cantrips \u0026 4 spells known","4 cantrips \u0026 5 spells known","4 cantrips \u0026 6 spells known","5 cantrips \u0026 7 spells known","5 cantrips \u0026 8 spells known","5 cantrips \u0026 8 spells known","5 cantrips \u0026 9 spells known","6 cantrips \u0026 9 spells known","6 cantrips \u0026 10 spells known","6 cantrips \u0026 10 spells known","6 cantrips \u0026 11 spells known","6 cantrips \u0026 11 spells known","6 cantrips \u0026 12 spells known","6 cantrips \u0026 12 spells known","6 cantrips \u0026 13 spells known","6 cantrips \u0026 13 spells known","6 cantrips \u0026 13 spells known","6 cantrips \u0026 13 spells known",]
        },
        "might and magic" : {
            name : "Might and Magic",
            source : [["WSB",3]],
            minlevel : 2,
            description : desc([
                "Starting at 2nd level, you gain 2 Arcane Points and gain more as you reach higher levels. You can never have more Arcane Points than your level permits. You regain all spent Arcane Points when you finish a short or long rest.",
                "\u2022 Spell Slinger: Before, during, or after you take the Attack action on your turn, you may choose to spend an Arcane point to also cast a spell as part of the same action",
                "\u2022 Disrupt Magic: When you hit a creature with a weapon attack, you may expend an Arcane Point to muddle the mind of enemy spellcasters. When you do, the DC of any concentration checks that are caused by your weapon attacks is increased by your Intelligence modifier (minimum of 1) until the end of your next turn."
            ]),
            extraLimitedFeatures : [{
                name : "Arcane Points",
                source : [["WSB",3]],
                usages : classes.known.spellblade.level, 
                recovery : "short rest"
            }]
        },
        "eldritch studies" : {
            name : "Eldritch Studies",
            source : [["WSB",2]],
            minlevel : 2,
            description : desc([
                "Starting at 2nd level, you have learned to memorize and perform specific rituals. You may choose one 1st-level spell with the ritual tag from the Spellblade spell list, and add it to your spells known. You may cast this spell as a ritual. You gain an additional ritual spell of 2nd level or lower when you reach 5th level, and 3rd level or lower at 9th level.",
                "Additionally, whenever you make an Intelligence (Arcana) check to identify a spell, you may add your Proficiency Bonus to the check, doubled if you're already proficient."
            ]),
            additional : ["", "1st level or lower ritual known","1st level or lower ritual known","1st level or lower ritual known","2nd level or lower ritual known","2nd level or lower ritual known","2nd level or lower ritual known","2nd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known","3rd level or lower ritual known"],
            spellcastingBonus : [{
                name : "Eldritch Studies (ritual only)",
                "class" : "spellblade",
                ritual : true,
                level : [1,3],
                times : [0,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3],
            }]
        },
        "arcane armory" : {
            name : "Arcane Armory",
            source : [["WSB",2]],
            minlevel : 6,
            description : desc([
                "Starting at 6th level, you gain the ability to store and summon your weaponry wherever you might be.",
                "As a bonus action, any weapon you’ve linked with through your “Enchanted Weaponry” feature can be stored or retrieved from an extradimensional space."
            ])
        },
        "extra attack" : {
            name : "Extra Attack",
			source : [["WSB",3]],
			minlevel : 6,
			description : desc([
				"I can attack twice instead of once when I take the Attack action on my turn"
			])
        },
        "disenchanting weaponry" : {
            name : "Disenchanting Weaponry",
            source : [["WSB",4]],
            minlevel : 11,
            description : desc([
                "At 11th level, you learn to channel more magic through your weapons. When you hit a creature with a weapon attack using one of your linked weapons, the creature takes an additional 1d6 force damage.",
                "Additionally, whenever you hit an enemy with a linked weapon, you may use your bonus action and a third level or higher spell slot to cast Dispel Magic on that creature."
            ])
        },
        "spell reflection" : {
            name : "Spell Reflection",
            source : [["WSB",4]],
            minlevel : 14,
            description : desc([
                "Starting at 14th level, you become more resilient against spells, and can even turn a spell back towards its caster. Whenever you make a saving throw against a spell, you gain a bonus to the saving throw equal to your Intelligence modifier (minimum of 1).",
                "When you succeed on a saving throw against a spell that targets only you, you may use your reaction and an Arcane Point to reflect the spell back to its caster, using your Spellblade spell save DC and concentration if the spell requires it."
            ])
        },
        "perfected link" : {
            name : "Perfected Link",
            source : [["WSB",4]],
            minlevel : 18,
            description : desc([
                "Starting at 18th level, your linked weapons serve as an extension of yourself. Whenever you make a weapon attack, you may choose to make the attack with any of your linked weapons, even if they're in your Arcane Armory.",
                "Additionally, your weapons gain an additional 10ft of reach during your turn."
            ])
        },
        "arcane mastery" : {
            name : "Arcane Mastery",
            source : [["WSB",4]],
            minlevel : 20,
            description : desc(["At 20th level, you have mastered channeling the weave. You no longer have any arcane points, and any features that required them can be used freely instead."])
        }
    },
};
//add subclasses
AddSubClass("spellblade", "knight", {
    regExpSearch :  /^(?=.*knight).*$/i,
    subname : "Spellblade Knight",
    fullname : "Spellblade Knight",
    source : [["WSB",4]],
    features : {
        "subclassfeature3" : {
            name : "Heavy Armaments",
            source : [["WSB",4]],
            minlevel : 3,
            armorProfs : [true,true,false,true],
            description : desc([
                "Choosing this archetype at 3rd level grants you the option to use heavy melee weapons for your Enchanted Weaponry feature.",
                "Additionally, you gain proficiency with shields."
            ])
        },
        "subclassfeature3.1" : {
            name : "Force Burst",
            source : [["WSB",4]],
            minlevel : 3,
            description : desc([
                "Starting at 3rd level, whenever you cast an Abjuration or Evocation spell of first level or higher, you gain Force die. The size of the die depends on the level of spell being cast",
                "\u2022 1st level: 1d4",
                "\u2022 2nd level: 1d6",
                "\u2022 3rd level: 1d8",
                "\u2022 4th level: 1d10",
                "\u2022 5th level: 1d12",
                "Whenever you roll for a weapon attack or for weapon damage, you may add any number of your Force dice to the roll. Alternatively, when an enemy creature makes an attack roll, you may subtract any number of your Force dice from the roll. You may wait til after the roll before deciding to use any Force dice.",
                "Any Force dice you have left are lost when you finish a long rest."
            ]),
        },
        "subclassfeature7" : {
            name : "Aether Leap",
            source : [["WSB",4]],
            minlevel : 7,
            description : desc([
                "Starting at 7th level, you may use your Bonus Action and an Arcane Point to teleport 30ft towards an enemy to an unoccupied space that you can see.",
            ])
        },
        "subclassfeature10" : {
            name : "Keep Vigil",
            source : [["WSB",4]],
            minlevel : 10,
            description : desc([
                "At 10th level, you learn to be on guard at all times, even while resting. At the start of a long or short rest, you may spend 10 minutes placing arcane wards around your resting area. If you use this ferature, you may roll Arcana (Intelligence) checks to keep watch, and may even do it while unconscious.",
                "Additionally, you can no longer be suprised while conscious."
            ])
        },
        "subclassfeature15" : {
            name : "Proving Grounds",
            source : [["WSB",4]],
            minlevel : 15,
            description : desc([
                "Starting at 15th level, you may use your Bonus Action to attempt to challenge any creatures of your choice in a 30ft radius around you for up to one minute.",
                "Creatures chosen by you must make a Wisdom saving throw against your spell save DC. On a failed save, a creature has disavantage on attack rolls against creatures other than you, and can't willingly move out of the sphere. A creature may repeat the save at the end of their turn.",
                "While in this sphere, you gain the following abilities: ",
                "\u2022 You may add your Intelligence modifier to your concentration checks",
                "\u2022 When making an attack roll, you may treat an 18-20 on the roll as a critical hit.",
                "Once you use this feature, you can't use it again until you finish a long rest."
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
});

AddSubClass("spellblade", "trickster", {
    regExpSearch :  /^(?=.*trickster).*$/i,
    subname : "Spellblade Trickster",
    fullname : "Spellblade Trickster",
    source : [["WSB",5]],
    features : {
        "subclassfeature3" : {
            name : "Covert",
            source : [["WSB",5]],
            minlevel : 3,
            description : desc([
                "You gain proficiency in Stealth if you don't already have it. Your Proficiency Bonus is doubled for any Stealth ability checks you make."
            ]),
            skills : ["Stealth"]
        },
        "subclassfeature3.1" : {
            name : "Shadow Caster",
            source : [["WSB",5]],
            minlevel : 3,
            description : desc([
                "Enemies have disadvantage on checks and saving throws against your Enchantment and Illusion spells of first level or higher if you were hidden upon casting the spell."
            ])
        },
        "subclassfeature7" : {
            name : "Vanish",
            source : [["WSB",5]],
            minlevel : 7,
            description : desc([
                "Starting at 7th level, you may use your Bonus Action and two Arcane Points to beccome invisible for up to 10 minutes and take the Hide action. This requires concentration, and anything you are wearing or carrying is invisible as long as it is on your person. This effect ends when you attack or cast a spell."
            ]) 
        },
        "subclassfeature10" : {
            name : "Forget-Me-Now",
            source : [["WSB",5]],
            minlevel : 10,
            description : desc([
                "At 10th level, you can attempt to erase a creature's memory of you. As an Action, you may choose a creature that you can see to roll a Wisdom saving throw against your Spellblade Save DC. If the creature fails, it forgets any interactions it had with you and is unaware of you for 6 seconds after.",
                "A target automatically saves if they've known you for longer than a minute, or if they are in combat with you.",
                "This feature counts as an Enchantment spell for the purpose of your Shadow Caster feature. Once you use this feature, you can't use it again until you finish a short or long rest."
            ]),
            action : ["action",""]
        },
        "subclassfeature15" : {
            name : "Identity Theft",
            source : [["WSB",5]],
            minlevel : 15,
            description : desc([
                "At 15th level, you learn how to covertly switch places with an opposing creature. As an action, you can attempt to exchange your appearance with a target that you can see within 120ft that is no more than one size larger or smaller than you for up to 10 minutes.",
                "The creature must make a Charisma saving throw against your Spellblade Save DC. If the target fails, your appearance and physical location are swapped. Any allies of the target are considered charmed by you for the duration.",
                "A creature can use its Action to examine you or the target can determine that this is an illusion with a successful Intelligence (Investigation) check against your Spellblade Save DC. If a creature discerns the illusion for what it is, the creature can see through it and is no longer charmed by this effect.",
                "This feature counts as an Illusion spell for the purpose of your Shadow Caster feature. Once you use this feature, you can't use it again until you finish a short or long rest."
            ]),
            action : ["action",""]
        }
    }
});

AddSubClass("spellblade","shaper", {
    regExpSearch :  /^(?=.*shaper).*$/i,
    subname : "Spellblade Shaper",
    fullname : "Spellblade Shaper",
    source : [["WSB",5]],
    features : {
        "subclassfeature3" : {
            name : "Borrowed Power",
            source : [["WSB",5]],
            minlevel : 3,
            description : desc([
                "When you finish a long rest, you may choose a non-damaging cantrip from any spell list. You may use this cantrip until you use this feature to choose a different cantrip."
            ]),
            eval : function () { //from 'joost'
                // Create custom CurrentSpells entry
                CurrentSpells['spellblade-borrowed power'] = {
                    name : 'Borrowed Power (Spellblade)',
                    ability : "spellblade", // use the same spellcasting ability as the main class
                    list : { spells : [] }, // will be filled by the calcChanges.spellList function
                    known : { cantrips : 0, spells : 'list' },
                    bonus : {
                        bon1 : {
                            name : 'Just select "Full List"',
                            spells : []
                        },
                        bon2 : {
                            name : 'on the bottom left',
                            spells : []
                        }
                    },
                    typeList : 4,
                    refType : "class",
                    allowUpCasting : true,
                    firstCol : ""
                };
                SetStringifieds('spells'); CurrentUpdates.types.push('spells');
            },
            removeeval : function () {
                // Remove custom CurrentSpells entry
                delete CurrentSpells['spellblade-borrowed power'];
                SetStringifieds('spells'); CurrentUpdates.types.push('spells');
            },
            calcChanges : {
                spellList : [
                    function(spList, spName, spType) {
                        // Only do this for the above defined CurrentSpells object
                        if (spName === 'spellblade-borrowed power') {
                            // First get all the cantrips known by other spellcasting sources
                            var allSpellsKnown = [];
                            for (var sCast in CurrentSpells) {
                                if (sCast.refType === "item" || sCast === spName) continue; // skip magic items and the current entry
                                var oCast = CurrentSpells[sCast];
                                if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
                                if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
                            }
                            // Get just the cantrips
                            var allCantripsKnown = OrderSpells(allSpellsKnown, "single", false, false, 0);
                            // Make sure the array is empty
                            spList.spells = [];
                            // First get all the cantrips from all the classes (this way, the excluded/included sources are respected)
                            var cantrips = CreateSpellList({ "class" : "any", level : [0,0] })
                            /*  loop through these cantrips and push the ones that meet the criteria
                                of not having 'dmg' or 'damage' in the short description
                                and not being a cantrip known by any other spellcasting source.
                            */
                            for (var i = 0; i < cantrips.length; i++) {
                                var oCantrip = SpellsList[cantrips[i]];
                                if ( !/dmg|damage/i.test(oCantrip.description) && allCantripsKnown.indexOf(cantrips[i]) === -1 ) {
                                    spList.spells.push( cantrips[i] );
                                }
                            }
                        }
                    }
                ]
            }
        },
        "subclassfeature3.1" : {
            name : "Mutation Spells",
            source : [["WSB",5]],
            minlevel : 3,
            description : desc([
                "When you choose this subclass, you may choost a second list of spells to learn, referred to as your mutation spells. This list is normally inaccessible, but is used for your sublcass feature.",
                "Your Mutations spells have half the number of spells your regular spell list has (rounded up). Whenever you may replace or learn new spells in your regular spell list, your Mutation spells can be added to or modified in a similar way."
            ]),
            commoneval : function(chc,lvl) {
                if(!chc) return;
                CurrentSpells['mutation spells ' + chc] = {
                    name : 'Mutation Spells (' + chc.capitalize() + ')',
                    level : lvl,
                    typeSp : "known",
                    refType : "class",
                    ability : 4, 
                    abilityToUse : [4, []], //force chosen class to use Int 
                    list : {"class" : chc},
                    known : {
                        cantrips : [2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],   //half of the values in "spellcastingKnown" from "ClassList"
                        spells : [1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7], 
                        factor : [2,"default"],    //force chosen class to use half-casting factor from spellblade
                        spellsTable : false
                    },
                    allowUpCasting : true,
                }
                SetStringifieds('spells'); CurrentUpdates.types.push('spells');
            },
            toNotesPage : [{
				name : "Mutate",
				page3notes : true,
				note : [
                    "Whenever you cast a Conjuration or Transmutation spell of first level or higher, you may to exchange one of your known spells with one of your Mutation spells.",
                    "You may choose to revert all changes made this way are when you finish a long rest."
                ]
            }], 
            commonremoveeval : function(chc) {
                if (!chc) return;
                delete CurrentSpells['mutation spells ' + chc];
                SetStringifieds('spells'); CurrentUpdates.types.push('spells');
            },
            extraname : "Mutation Spell List",
            extrachoices : ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
            extratimes : 1,
            "bard" : {
                name : "Bard",
                description : desc([
                    "I gain access to the Bard spell list and have a number of spells equal to half of my current spells known."
                ]),
                eval : function(lvl,chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commoneval(chc[1], classes.known.spellblade.level)},      
                removeeval : function(lvl, chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commonremoveeval(chc[0])}
            },
            "bard" : {
                name : "Bard",
                description : desc([
                    "I gain access to the Bard spell list and have a number of spells equal to half of my current spells known.",
                ]),
                eval : function(lvl,chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commoneval(chc[1], classes.known.spellblade.level)},      
                removeeval : function(lvl, chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commonremoveeval(chc[0])}
            },
            "cleric" : {
                name : "Cleric",
                description : desc([
                    "I gain access to the Cleric spell list and have a number of spells equal to half of my current spells known.",
                ]),
                eval : function(lvl,chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commoneval(chc[1], classes.known.spellblade.level)},      
                removeeval : function(lvl, chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commonremoveeval(chc[0])}
            },
            "druid" : {
                name : "Druid",
                description : desc([
                    "I gain access to the Druid spell list and have a number of spells equal to half of my current spells known.",
                ]),
                eval : function(lvl,chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commoneval(chc[1], classes.known.spellblade.level)},      
                removeeval : function(lvl, chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commonremoveeval(chc[0])}
            },
            "sorcerer" : {
                name : "Sorcerer",
                description : desc([
                    "I gain access to the Sorcerer spell list and have a number of spells equal to half of my current spells known.",
                ]),
                eval : function(lvl,chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commoneval(chc[1], classes.known.spellblade.level)},      
                removeeval : function(lvl, chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commonremoveeval(chc[0])}
            },
            "warlock" : {
                name : "Warlock",
                description : desc([
                    "I gain access to the Warlock spell list and have a number of spells equal to half of my current spells known.",
                ]),
                eval : function(lvl,chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commoneval(chc[1], classes.known.spellblade.level)},      
                removeeval : function(lvl, chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commonremoveeval(chc[0])}
            },
            "wizard" : {
                name : "Wizard",
                description : desc([
                    "I gain access to the I Wizard spell list and have a number of spells equal to half of my current spells known.",
                ]),
                eval : function(lvl,chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commoneval(chc[1], classes.known.spellblade.level)},      
                removeeval : function(lvl, chc) {ClassSubList["spellblade-shaper"].features["subclassfeature3.1"].commonremoveeval(chc[0])}
            }
        },
        "subclassfeature7" : {
            name : "Acclimation",
            source : [["WSB",5]],
            minlevel : 7,
            description : desc([
                "At 7th level, you gain the ability to modify your physical form to suit your situation. As a bonus action, you may expend two Arcane points to gain one of the following effects for up to an hour (requires concentration):",
                "\u2022 Constitution: You cannot gain exhaustion, and you may add your Intelligence modifier to your Constitution checks and saving throws.",
                "\u2022 Strength: Your carrying capacity is doubled, and you may add your Intelligence modifier to your Strength checks and saving throws.",
                "\u2022 Dexterity: Your movement is increased by 10 feet, and you may add your Intelligence modifier to your Dexterity checks and saving throws."
            ])
        },
        "subclassfeature10" : {
            name : "Creation",
            source : [["WSB",5]],
            minlevel : 10,
            description : desc([
                "At 10th level, you can create and learn to use a tool for any occasion. At the end of a long rest, you may choose any of the following options:",
                "\u2022 Artisan's Tools",
                "\u2022 Forgery Kit",
                "\u2022 Poisoner's Kit",
                "\u2022 Herbalism Kit",
                "You create a magical version of the chosen tool, and gain proficiency in it until you use this feature again. You may use your Intelligence modifier when making checks with a tool created by this feature."
            ]),
            toolProfs : [["Artisan's Tools, Forgery, Poisoner's, or Herbalism Kit", 1]]
        },
        "subclassfeature15" : {
            name : "Wormhole",
            source : [["WSB",5]],
            minlevel : 15,
            description : desc([
                "Starting at 15th level, you may use your Bonus Action to create an unstable wormhole for up to one minute. When you use this feature, choose two solid surfaces within 60ft of you. Portals with a 10ft radius (or smaller) appear at the chosen locations, one being an entry portal and one being an exit portal.",
                "Any creatures or objects present at the entry portal are teleported to the exit portal. An unwilling creature may roll a Dexterity saving throw to avoid the effect, moving to to an empty, random location next to entry portal.",
                "As a Bonus Action on each of your following turns, you may choose one of the following effects:",
                "\u2022 Shift: You may move either your entry or your exit portal to a different location within range.",
                "\u2022 Amplify: Your portals increase 5ft in diameter. Their size resets to their original size when you choose a different effect.",
                "\u2022 Reverse: Your entry portal becomes an exit portal, and your exit portal becomes an entry portal.",
                "These portals exist for as long as the effect is active, and you are within 500ft of them. You may choose to end this effect early at any time",
                "Once you use this feature, you can't use it again until you finish a long rest."
            ]),
            action : [["bonus action", ""]]
        }
    }
});

AddSubClass("spellblade","channeler", {
    regExpSearch :  /^(?=.*channeler).*$/i,
    subname : "Spellblade Channeler",
    fullname : "Spellblade Channeler",
    source : [["WSB",6]],
    features : {
        "subclassfeature3" : {
            name : "Spirit Guide",
            source : [["WSB",6]],
            minlevel : 3,
            description : desc([
                "Allies within 30ft of you (including yourself) may make death saving throws at advantage. Additionally, you may add Cure Wounds to your spell list, and it counts as a Necromancy spell for you."
            ]),
            spellcastingBonus : {
                name : "Spirit Guide",
                spells : ["cure wounds"],
                selection : ["cure wounds"],
                firstCol : "Sp",
                times : 1,
            }
        },
        "subclassfeature3.1" : {
            name : "Spectral Assistance",
            source : [["WSB",6]],
            minlevel : 3,
            description : desc([
                "Starting at 3rd level, whenever you cast a Divination or Necromancy spell of first level or higher, you gain a Spectral die. The size of the die corresponds to the level of the spell used, determined as follows:",
                "\u2022 1st level: 1d4",
                "\u2022 2nd level: 1d6",
                "\u2022 3rd level: 1d8",
                "\u2022 4th level: 1d10",
                "\u2022 5th level: 1d12",
                "Whenever an ally within 30ft of you fails a saving throw or ability check, you may use your reaction to give them one of your Spectral dice to add to that roll.",
                "Any Spectral dice you have are lost when you finish a long rest."
            ])
        },
        "subclassfeature7" : {
            name : "Death's Door",
            source : [["WSB",6]],
            minlevel : 7,
            description : desc([
                "Starting at 7th level, you may attempt to keep an ally in the land of the living. Whenever an ally within 30ft of you drops to 0 hit points, you may use your reaction and an arcane point to have them drop to 1 hit point instead."
            ]),
            action : [["reaction", ""]],
        },
        "subclassfeature7.1" : {
            name : "Last Breath",
            source : [["WSB",6]],
            minlevel : 7,
            description : desc([
                "Also at 7th level, whenever a creature within 30ft of you dies, you may spend an arcane point to ask them a single question. The creature must answer truthfully, and answers to the best of its abilities.",
                "A creature who is not willing may roll a Charisma saving throw against your Spell Save DC to resist this effect."
            ])
        },
        "subclassfeature10" : {
            name : "Grim Sight",
            source : [["WSB",6]],
            minlevel : 10,
            description : desc([
                "At 10th level, you learn divine knowledge from the deceased. As an action you may touch a part of a corpse to learn what happened to it. You gain flashes to what caused its demise and gain insight into what the creature was thinking at the time of its death.",
                "Once you use this feature, you can’t use it again until you finish a short or long rest. Additionally, you learn the Speak with Dead spell, and may cast it without using a spell slot once per long rest."
            ]),
            spellcastingBonus : {
                name : "Grim Sight",
                spells : ["speak with dead"],
                selection : ["speak with dead"],
                firstCol : "oncelr",
                times : 1,
            }
        },
        "subclassfeature15" : {
            name : "Spirit Walker",
            source : [["WSB",6]],
            minlevel : 15,
            description : desc([
                "Starting at 15th level, you can use an action to detach your spirit from your corporeal form for up to 10 minutes, or until you use a bonus action to rejoin your body while within 30ft of it. When you do, your body falls prone and is considered unconscious.",
                "As a spirit, you replicate your statistics, possessions, and gain features from the 'Ghost' Statblock with the following changes:",
                "\u2022 HP equal to half your current max HP",
                "\u2022 Exclude 'Withering Touch' and 'Horrifying Vissage'",
                "\u2022 You may use your spell save DC",
                "\u2022 You can choose whether you appear in the Ethereal or Material Plane",
                "Once you use this feature, you can’t use it again until you finish a short or long rest.",
                "If you fall to 0 hit points during combat, you may activate this feature without consuming your daily use. In this case, it lasts until you are considered stable or regain consciousness."
            ])
        }
    }
});