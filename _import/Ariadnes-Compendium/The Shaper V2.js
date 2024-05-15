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
                    }
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
            extraname : "Signs of Poiwer",
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
            description : desc([
                "My Wisdom increases by 1, and my proficiency bonus is double for my Wisdom saving throws. This increases by +2 again at 18th level, to a max of 22"
            ]),
            scorestxt : "+1 Wisdom (max 20), and +2 at 18th level (max 22)",
            addMod : [{ type : "save", field : "Wis", mod : "max(Prof|0)", text : "I double my Proficiency bonus when calculating my Wisdom saving throws." }],
        }
    }
}