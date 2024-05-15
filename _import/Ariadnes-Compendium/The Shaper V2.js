var iFileName = "Ariadne's:_Shaper_V2";
RequiredSheetVersion("13.1.13");

//The better spellbook v1.0 addition
SourceList["A:TSV2"] = {
    name : "Ariadne's: The Shaper V2",
    abbreviation : "A:TSV2",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/05/14"
};

ClassList["shaper"] = {
    regExpSearch : /shaper/i,
    name : "Shaper",
    source : [["A:TSV2", 5]],
    die : 8,
    improvements : [0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5],
    armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, true],
		secondary : [true, true]
	},
    toolProfs : {
		primary : [["Artisan's tool", 1], ["Herbalism Kit", 1]]
	},
    saves : ["Str", "Wis"],
    skillstxt : {
		primary : "Choose two from Animal Handling, Arcana, Athletics, Acrobatics, History, Investigation, Medicine, Perception, and Survival"
	},
    skillstxt : "Choose two from Athletics, Insight, Nature, Persuasion, and Survival",
    equipment : "The Shaper starting equipment:\n \u2022 Scale mail -or- leather armor \n \u2022 a martial weapon and a shield -or- two martial weapons \n \u2022 five javelins -or- any simple melee weapon \n \u2022 a dungeoneer's pack or an explorer's pack \n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Elemental Shape", []],
    abilitySave : 5,
    spellcastingFactor : 3,
    spellcastingTable : [
        [0,0,0,0,0,0,0,0,0], // lvl 0
        [0,0,0,0,0,0,0,0,0], // lvl 1 
        [2,0,0,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0],
        [3,2,0,0,0,0,0,0,0], // 5
        [4,2,0,0,0,0,0,0,0],
        [4,3,0,0,0,0,0,0,0],
        [4,3,0,0,0,0,0,0,0],
        [4,3,2,0,0,0,0,0,0],
        [4,3,2,0,0,0,0,0,0], // 10
        [4,3,3,0,0,0,0,0,0],
        [4,3,3,0,0,0,0,0,0],
        [4,3,3,1,0,0,0,0,0],
        [4,3,3,1,0,0,0,0,0],
        [4,3,3,2,0,0,0,0,0], // 15
        [4,3,3,2,0,0,0,0,0],
        [4,3,3,3,1,0,0,0,0],
        [4,3,3,3,1,0,0,0,0],
        [4,3,3,3,2,0,0,0,0],
        [4,3,3,3,3,0,0,0,0], // 20
    ],
    spellcastingKnown : {
        cantrips : [0],
		spells : [0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]
    },
	spellcastingList : {
		class : ["druid"],
		level : [1, 5],
	},
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
        "commands" : {
            name : "Commands",
            source : [["A:TSV2", 7]],
            minlevel : 1,
            description : desc([
                "I gain a single command of my choice, and gain more with my shaper level",
                "Creatures that have legendary actions or a Wisom score higher than 19 are not affected by commands",
                "I can use a single Command once per long rest and gain more uses at 9th and 17th level. I do not need to use my movement, action, bonus action, nor reaction to use a command, but I can only use them on my turn",
                "After using a command, my vocal chords bleed and I suffer 1d6 force damage that cannot be reduced in anyway. This damage increases to 2d6 at 5th, 3d6 at 9th, 4d6 at 13th, and 5d6 at 17th levels. If I cannot speak for any reason, I cannot use commands."
            ]),
            usages : levels.map(function(n) {
                return n < 9 ? 1 : n < 17 ? 2 : 3;
            }),
            recovery : "long rest",
            additional : levels.map(function(n) { 
                return (n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : n < 20 ? 5 : "all") + " commands"
            }),
            extrachoices : ["Attack", "Brace", "Change", "Drop", "Endure", "Stop", "Fall", "Jump", "Disappear", "Water", "Wind", "Earth", "Fire", "Break", "Run", "Shift", "Mend"],
            extraTimes : levels.map(function(n) {
                return (n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : n < 20 ? 5 : 17)
            }),
            extraname : "Commands",
            "attack" : {
                name : "Attack",
                source : [["A:TSV2", 17]],
                description : desc([
                    "1 crea of choice that can hear me within 30 ft uses its reaction to make an opportunity attack vs a crea of my choice within its range. If no reaction is available, this command has no effect"
                ])
            },
            "brace" : {
                name : "Brace",
                source : [["A:TSV2", 17]],
                description : desc([
                    "A number of crea(s) equal to my Wisdom mod that can hear me gain resistance to bludgeon., pierce., and slash. damage until end of my next turn"
                ])
            },
            "change" : {
                name : "Change",
                source : [["A:TSV2", 17]],
                description : desc([
                    "1 medium or smaller, non-magical object not being worn or carried and I am touching changes elements. Change to or from the following elements: fire, smoke, air, stone, sand, wood, water, ice, steel, or iron. A larger object is affected by an area up to a 5 by 5 ft around the surface I touched"
                ])
            },
            "drop" : {
                name : "Drop",
                source : [["A:TSV2", 17]],
                description : desc([
                    "A number of crea(s) equal to my Wisdom mod that can hear me drops whatever they're carrying in their hands. Items held but also attached, such as a shield with straps, are not dropped"
                ])
            },
            "endure" : {
                name : "Endure",
                source : [["A:TSV2", 17]],
                description : desc([
                    "1 crea of choice that can hear me within 30 ft automatically succeeds all saving throws until the end of its next turn"
                ])
            },
            "stop" : {
                name : "Stop",
                source : [["A:TSV2", 17]],
                description : desc([
                    "1 crea of choice that can hear me within 60 ft instantly stops. Their speed is 0 and cannot willingly move until the end of their next turn"
                ])
            },
            "fall" : {
                name : "Fall",
                source : [["A:TSV2", 17]],
                description : desc([
                    "1 crea of choice that can hear me within 60 ft falls prone. A creature flying falls 30 ft down at great speeds, and if they hit the ground, they take 6d6 bludgeoning and cannot fly again until the end of their next turn"
                ])
            },
            "jump" : {
                name : "Jump",
                source : [["A:TSV2", 17]],
                description : desc([
                    "I immediately jump 30 ft in a direction of choice. "
                ])
            },
            "disappear" : {
                name : "disappear",
                source : [["A:TSV2", 17]],
                description : desc([
                    "I silently shift into the Ethereal Plane for 1 min, and can reappear on the Material Plane at the start of any of my turns. I can see/hear out to 60 ft from the plane I came from, but everything looks gray. While on the Ethereal Plane, I move at half my speed and can ony be affected by creatures on that plane. Creatures that aren't on this plane cannot interact/perceive me unless an item/ability allows them to. I ignore all objects and effects not affecting this plane, allowing me to move through objects I perceive on the plane I came from.",
                    "When this effect ends, I return to the plane I came from in the spot I am currently standing. If I occupy a solid object or creature, I am shunted out to the nearest unoccupied space and take force damage equal to twice the number of ft I was moved."
                ])
            },
            // finish the elemental ones.
        },
        "fighting style" : {
            name : "Fighting Style",
            source : [["A:TSV2", 8]],
            minlevel : 2,
            description : desc([
                'Select a Fighting Style using the "Choose Feature" button above'
            ]),
            choices : ["Defense", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
            "defense" : FightingStyles.defense,
            "dueling" : FightingStyles.dueling,
            "great weapon fighting" : FightingStyles.great_weapon,
            "two-weapon fighting" : FightingStyles.two_weapon
        },
        "imbue weapon" : {
            name : "Imbue Weapon",
            source : [["A:TSV2", 8]],
            minlevel : 2,
            description : desc([
                "I can use my bonus action to imbue a weapon I am carrying. If the weapon leaves my hand for an entire round, the imbue weapon is dispelled. I can only have one weapon imbued at a time. An imbued weapon is very important; not having one means that I cannot cast spells nor use some class features.",
                "Additionally, I can choose an elemental damage: acid, cold, fire, lightning, or thunder. For one minute, the weapon deals an additional 1d4 damage of that chosen type. This damage increases to 1d6 at 5th level, 1d8 at 9th level, and 1d10 at 13th level. I can use this feature a number of times equal to my proficiency bonus, and regain all uses after I finish a long rest."
            ]),
            action : ["bonus action", ""],
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if((/imbued/i).test(v.WeaponTextName)) {
                            var cLvl = classes.known.shaper.level;
                            var eDie = (cLvl < 5 ? 4 : cLvl < 9 ? 6 : cLvl < 13 ? 8 : 10);
                            fields.Description += (fields.Description ? '; ' : '') + "1d" + eDie + " elemental dmg";
                        }
                    },
                    'If I include the word "Imbued" in a weapon name, it will be treated as my Imbued Weapon.'
                ]
            },
            limfeaname : "Imbue Element",
            usages : "Prociency bonus per ",
            usagescal : "event.value = How('Proficiency Bonus');",
            recovery : "long rest"
        },
        "spellcasting" : {
            name : "Spellcasting",
            source : [["A:TSV2", 8]],
            minlevel : 2,
            description : desc([
                "I can cast shaper spells that I know, using Wisdom as my spellcasting ability",
				"I have to use an Imbued Weapon to cast my spells, and must be wielding it in one hand",
                "I cannot cast spells if a weapon is not imbued, or if its not in my hand"
            ])
        },
        "elemental shape" : {
            name : "Elemental shape",
            source : [["A:TSV2", 9]],
            minlevel : 3,
            description : desc([
                "Choose a subclass"
            ])
        },
        "signs of power" : {
            name : "Signs of Power",
            source : [["A:TSV2", 9]],
            minlevel : 3,
            description : desc([
                "I learn the Druidcraft cantrip, and learn additional druid cantrips at 6th, 10th, and 14th level.",
                "Instead of learning another druid cantrip, I can choose one from several signs, and gain additional signs at 6th, 10th, and 14th level. Signs are not cantrips, and after casting a Sign, I must wait one minute before casting the same Sign again."
            ]),
            spellcastingBonus : [{
                name : "Signs of Power (cantrip)",
                "class" : "druid",
                level : [0,0],
                times : levels.map(function(n) {
                    return n < 3 ? 0 : n < 6 ? 1 : n < 10 ? 2 : n < 14 ? 3 : 4;
                }),
                selection : ["druidcraft"]
            }],
            extraname : "Signs of Power",
			extrachoices : ["Disturbance", "Elemental Protection", "Force Shift", "Reinforce Body", "Arrest Momentum", "Zone of Power", "Purge Infusion", "Elemental Boon", "Preserve Infusion", "Quicken", "Reinforce Will", "Sharp Winds", "Force Step", "Interruption", "Fire Wake", "Extend Infusion"],	
            extraTimes : leves.map(function(n) {
                return n < 6 ? 0 : n < 10 ? 1 : n < 14 ? 2 : 3;
            }),
            "disturbance" : {
                name : "Disturbance",
                source : [["A:TSV2", 15]],
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self (15-ft cone)\n"
                                + "Components: S\n"
                                + "Duration: Instantaneous\n"
                                + "Medium or smaller crea(s) Strength save or pushed 5 ft away and take 1d4 force dmg"
            },
            "elemental protection" : {
                name : "Elemental Protection",
                source : [["A:TSV2", 15]],
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self\n"
                                + "Components: S\n"
                                + "Duration: 1 rnd\n"
                                + "Gain resistance to acid, cold, fire, lightning, or thunder"
            },
            "force shift" : {
                name : "Force Shift",
                source : [["A:TSV2", 15]],
                description :   "Casting Time: 1 bns\n"
                                + "Range: Touch\n"
                                + "Components: S\n"
                                + "Duration: Conc, 1 min\n"
                                + "1 crea gains advantage on next Str, Dex, or Con save"
            },
            "arrest momentum" : {
                name : "Arrest Momentum",
                source : [["A:TSV2", 15]],
                description :   "Casting Time: 1 rea when crea/obj in motion is about to crash\n"
                                + "Range: 30 ft\n"
                                + "Components: S\n"
                                + "Duration: 1 rnd\n"
                                + "Medium or smaller crea/obj momentum nullified (spd 0) and hanging in the air for the duration; target drops to ground when sign fades"
            },
            "zone of pwoer" : {
                name : "Zone of Power",
                source : [["A:TSV2", 15]],
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self (10-ft rad)\n"
                                + "Components: S\n"
                                + "Duration: Conc, 1 min\n"
                                + "I gain temp hp equal to my Wis mod at start of each of my turns"
            },
            "purge infusion" : {
                name : "Purge Infusion",
                source : [["A:TSV2", 15]],
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self (30-ft rad)\n"
                                + "Components: S\n"
                                + "Duration: Instantaneous\n"
                                + "All crea(s) Con save or blinded til end of their next turn"
            },
            "elemental boon" : {
                name : "Elemental Boon",
                source : [["A:TSV2", 15]],
                description :   "Casting Time: 1 bns\n"
                                + "Range: 30 ft\n"
                                + "Components: S\n"
                                + "Duration: Conc, 1 min\n"
                                + "Harness fire, earth, water, air; see notes",
                toNotesPage : [{
                    name : "Harness Elemental Boon",
                    note : desc([
                        "Fire: I gain an additional 1d6 fire damage on my next weapon attack",
                        "Earth: I gain resistance to bludgeon., pierce., and slash. damage dealt by the next attack that hit me",
                        "Water: If I am below half my max hp, I heal 1d6 hp",
                        "Air: My next ranged weapon attack doubles its range"
                    ])
                }]
            },
            "preserve infusion" : {
                name : "Preserve Infusion",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self\n"
                                + "Components: S\n"
                                + "Duration: Conc, 1 hr\n"
                                + "If infused weapon over half of its duration left, I interrupt it for the duration. When spell ends, or I end it, infusion resumes with 5 rounds left.",
                prereqeval : function(v) { return classes.known.shaper.level >= 6 }
            },
            "quicken" : {
                name : "Quicken",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self\n"
                                + "Components: S\n"
                                + "Duration: Instantaneous\n"
                                + "I can take the dodge, help, dash, shove, grapple, or disengage as part of this spell's casting",
                prereqeval : function(v) { return classes.known.shaper.level >= 6 }
            },
            "reinforce will" : {
                name : "Reinforce Will",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description :   "Casting Time: 1 bns\n"
                                + "Range: Touch\n"
                                + "Components: S\n"
                                + "Duration: Conc, 1 min\n"
                                + "1 crea advantage on next Int, Wis, or Cha save",
                prereqeval : function(v) { return classes.known.shaper.level >= 6 }
            },
            "sharp winds" : {
                name : "Sharp Winds",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description :   "Casting Time: 1 rea when crea misses me with a melee attack\n"
                                + "Range: Touch\n"
                                + "Components: S\n"
                                + "Duration: Instantaneous\n"
                                + "Melee spell atk; 1d8 + Wis mod slashing dmg; +1d8 at CL 5, 11, and 17",
                prereqeval : function(v) { return classes.known.shaper.level >= 6 && (/\bwindchaser\b/).test(classes.known.shaper.subclass); }
            },
            "force step" : {
                name : "Force Step",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 10+]",
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self\n"
                                + "Components: S\n"
                                + "Duration: rnd\n"
                                + "Move across vertical/liquid surfaces on my turn without falling",
                prereqeval : function(v) { return classes.known.shaper.level >= 10 }
            },
            "interruption" : {
                name : "Interruption",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 10+]",
                description :   "Casting Time: 1 rea when crea casts 5th level or lower spell\n"
                                + "Range: Touch\n"
                                + "Components: S\n"
                                + "Duration: Instantaneous\n"
                                + "Melee spell atk; on hit, Con save or fail to cast; no effect SL>5",
                prereqeval : function(v) { return classes.known.shaper.level >= 10 }
            },
            "fire wake" : {
                name : "Fire Wake",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 10+]",
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self\n"
                                + "Components: S\n"
                                + "Duration: Conc, 1 min\n"
                                + "Leave 5ft wide, 60ft long trail behind me; crea(s) within 5ft of trail, Dex save or 2d6 fire dmg; crea(s) crossing the trail take 2d6 fire dmg",
                prereqeval : function(v) { return classes.known.shaper.level >= 10 && (/\bflamecaller\b/).test(classes.known.shaper.subclass)}
            },
            "extend infusion" : {
                name : "Extend Infusion",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 14+]",
                description :   "Casting Time: 1 bns\n"
                                + "Range: Self\n"
                                + "Components: S\n"
                                + "Duration: Instantaneous\n"
                                + "Infusion extended to 10 min; can only be used once per infusion",
                prereqeval : function(v) { return classes.known.shaper.level >= 14 }
            },
        },
        "unwavering resolve" : {
            name : "Unwavering Resolve",
            source : [["A:TSV2", 9]],
            minlevel : 7,
            description : desc([
                "My Wisdom increases by 1, and my proficiency bonus is double for my Wisdom saving throws. This increases by +2 again at 18th level, to a max of 22"
            ]),
            scorestxt : "+1 Wisdom (max 20), and +2 at 18th level (max 22)",
            addMod : [{ type : "save", field : "Wis", mod : "max(Prof|0)", text : "I double my Proficiency bonus when calculating my Wisdom saving throws." }],
        },
        "heightened infusion" : {
            name : "Heightened Infusion",
            source : [["A:TSV2", 9]],
            minlevel : 11,
            description : desc([
                "I can now imbue two weapons instead of one when I use my Imbue Weapon feature, and must be holding both weapons when infusing them. Additionally, the infusion is maintained even if I drop the weapon or someone else carries it. If I infuse another weapon while I have two already infused, the oldest one loses its enchantment."
            ])
        },
        "greater recovery" : {
            name : "Greater Recovery",
            source : [["A:TSV2", 9]],
            minlevel : 13,
            description : desc([
                "When I finish a long rest, my exhaustion level reduces by 3 instead of 1. Additionally, at dawn, I gain my level in temp hp, and these last until the next dawn."
            ]),
            usages : "My level in temp hp ",
            usagescalc : "event.value = classes.known.shaper.level;",
            recovery : "dawn"
        },
        "breaking point" : {
            name : "Breaking Point",
            source : [["A:TSV2", 9]],
            minlevel : 15,
            description : desc([
                "When I am reduced to 0 hp and not killed outright, I can drop to 1 hp instead. If I use this feature, I regain all of my spellslots and can immediately use my reaction to cast a spell with a casting time of 1 action. Once I use this ability, I gain a point of exhaustion, and I cannot use this ability if I already have at least one point of exhaustion."
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "timeless body" : {
            name : "Timeless Body",
            source : [["A:TSV2", 9]],
            minlevel : 17,
            description : desc([
                "I age more slowly, only 1 year for every 10 years that pass. I cannot be aged by magical means and I do not suffer the frailty of old age."
            ])
        },
        "elemental blessing" : {
            name : "Elemental Blessing",
            source : [["A:TSV2", 9]],
            minlevel : 20,
            description : desc([
                "Whenever I roll for Initiative and have no uses of my Imbue Weapon feature, I regain two uses. Additionally, I learn all Signs and Commands available to me as per my Elemental Shape"
            ])
        }
    }
}