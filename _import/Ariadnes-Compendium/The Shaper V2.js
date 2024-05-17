var iFileName = "Ariadne's:_Shaper_V2";
RequiredSheetVersion("13.1.13");

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
        cantrips : [0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3,3,16],
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
                "I learn a command of my choice, and gain more with my shaper level, and can use a command only on my turn, no action required. Creatures that have legendary actions or a Wisdom score higher than 19 are not affected by commands",
                "After using a command, my vocal chords bleed and I take 1d6 force damage that cannot be reduced in anyway. This damage increases by 1d6 at CL 5, 9, 13, and 17. I cannot use a command if I cannot speak"
            ]),
            usages : levels.map(function(n) {
                return n < 9 ? 1 : n < 17 ? 2 : 3;
            }),
            recovery : "long rest",
            additional : levels.map(function(n) { 
                return (n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : n < 20 ? 5 : "all") + " commands"
            }),
            extrachoices : ["Attack", "Brace", "Change", "Drop", "Endure", "Stop", "Fall", "Jump", "Disappear", "Water (prereq: waterdancer)", "Wind (prereq: windchaser)", "Earth (prereq: earthbreaker)", "Fire (prereq: flamecaller)", "Break (prereq: wordbearer)", "Run (prereq: wordbearer)", "Shift (prereq: wordbearer)", "Mend (prereq: wordbearer)"],
            extraTimes : levels.map(function(n) {
                return (n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : n < 20 ? 5 : 17)
            }),
            extraname : "Commands",
            "attack": {
                name: "Attack",
                source: [["A:TSV2", 17]],
                description: "I learn the Attack command",
                toNotesPage: [{
                    name: "Attack",
                    note: desc([
                        "1 crea of choice that can hear me within 30 ft uses its reaction to make an opportunity attack vs a crea of my choice within its range. If no reaction is available, this command has no effect"
                    ]) 
                }]
            },
            "brace": {
                name: "Brace",
                source: [["A:TSV2", 17]],
                description: "I learn the Brace command",
                toNotesPage: [{
                    name: "Brace",
                    note: desc([
                        "A number of crea(s) equal to my Wisdom mod that can hear me gain resistance to bludgeon., pierce., and slash. damage until end of my next turn"
                    ]) 
                }]
            },
            "change": {
                name: "Change",
                source: [["A:TSV2", 17]],
                description: "I learn the Change command",
                toNotesPage: [{
                    name: "Change",
                    note: desc([
                        "1 medium or smaller, non-magical object not being worn or carried and I am touching changes elements. Change to or from the following elements: fire, smoke, air, stone, sand, wood, water, ice, steel, or iron. A larger object is affected by an area up to a 5 by 5 ft around the surface I touched"
                    ])
                }]
            },
            "drop": {
                name: "Drop",
                source: [["A:TSV2", 17]],
                description: "I learn the Drop command",
                toNotesPage: [{
                    name: "Drop",
                    note: desc([
                        "A number of crea(s) equal to my Wisdom mod that can hear me drops whatever they're carrying in their hands. Items held but also attached, such as a shield with straps, are not dropped"
                    ])
                }]
            },
            "endure": {
                name: "Endure",
                source: [["A:TSV2", 17]],
                description: "I learn the Endure command",
                toNotesPage: [{
                    name: "Endure",
                    note: desc([
                        "1 crea of choice that can hear me within 30 ft automatically succeeds all saving throws until the end of its next turn"
                    ])
                }]
            },
            "stop": {
                name: "Stop",
                source: [["A:TSV2", 17]],
                description: "I learn the Stop command",
                toNotesPage: [{
                    name: "Stop",
                    note: desc([
                        "1 crea of choice that can hear me within 60 ft instantly stops. Their speed is 0 and cannot willingly move until the end of their next turn"
                    ])
                }]
            },
            "fall": {
                name: "Fall",
                source: [["A:TSV2", 17]],
                description: "I learn the Fall command",
                toNotesPage: [{
                    name: "Fall",
                    note: desc([
                        "1 crea of choice that can hear me within 60 ft falls prone. A creature flying falls 30 ft down at great speeds, and if they hit the ground, they take 6d6 bludgeoning and cannot fly again until the end of their next turn"
                    ]) 
                }]
            },
            "jump": {
                name: "Jump",
                source: [["A:TSV2", 17]],
                description: "I learn the Jump command",
                toNotesPage: [{
                    name: "Jump",
                    note: desc([
                        "I immediately jump 30 ft in a direction of choice."
                    ])  
                }]
            },
            "disappear": {
                name: "Disappear",
                source: [["A:TSV2", 17]],
                description: "I learn the Disappear command",
                toNotesPage: [{
                    name: "Disappear",
                    note: desc([
                        "I silently shift into the Ethereal Plane for 1 min, and can reappear on the Material Plane at the start of any of my turns. I can see/hear out to 60 ft from the plane I came from, but everything looks gray. While on the Ethereal Plane, I move at half my speed and can ony be affected by creatures on that plane. Creatures that aren't on this plane cannot interact/perceive me unless an item/ability allows them to. I ignore all objects and effects not affecting this plane, allowing me to move through objects I perceive on the plane I came from.",
                        "When this effect ends, I return to the plane I came from in the spot I am currently standing. If I occupy a solid object or creature, I am shunted out to the nearest unoccupied space and take force damage equal to twice the number of ft I was moved."
                    ])     
                }]
            },
            "water (prereq: waterdancer)" : {
                name : "Water",
                source : [["A:TSV2", 18]],
                submenu : "[level 6+]",
                prereqeval : function(v) {
                    return classes.known.shaper.level >= 6 && (/\bwaterdancer\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Water command",
                toNotesPage: [{
                    name: "Water",
                    note: desc([
                        "I create a passage between two stretches of land no more than 1 mile apart separated by water. The passage can be up to 15ft wide and can take any form I want."
                    ])
                }]
            },
            "wind (prereq: windchaser)" : {
                name : "Wind",
                source : [["A:TSV2", 18]],
                submenu : "[level 6+]",
                prereqeval : function(v) {
                    return classes.known.shaper.level >= 6 && (/\bwindchaser\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Wind command",
                toNotesPage: [{
                    name: "Wind",
                    note: desc([
                        "A number of medium crea(s) equal to my Wisdom mod, or 1 large crea, within 60 ft Strength save or knocked prone."
                    ])
                }]
            },
            "earth (prereq: earthbreaker)" : {
                name : "Earth",
                source : [["A:TSV2", 18]],
                submenu : "[level 6+]",
                prereqeval : function(v) {
                    return classes.known.shaper.level >= 6 && (/\bearthbreaker\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Earth command",
                toNotesPage: [{
                    name: "Earth",
                    note: desc([
                        "If my Earthly Barrier ability is active, a number of crea(s) equal to my Wisdom mod gain its benefits."
                    ])
                }]
            },
            "fire (prereq: flamecaller)" : {
                name : "Fire",
                source : [["A:TSV2", 18]],
                submenu : "[level 6+]",
                prereqeval : function(v) {
                    return classes.known.shaper.level >= 6 && (/\bflamecaller\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Fire command",
                toNotesPage: [{
                    name: "Fire",
                    note: desc([
                        "Crea(s), up to twice my Prof. bonus, of choice that I can see within 60 ft burst into flames. Each crea takes fire dmg equal to twice the damage I took from using this command, and catch fire as per my Living Fire ability."
                    ])
                }]
            },
            "break (prereq: wordbearer)" : {
                name : "Break",
                source : [["A:TSV2", 18]],
                submenu : "[wordbearer]",
                prereqeval : function(v) {
                    return (/\bwordbearer\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Break command",
                toNotesPage: [{
                    name: "Break",
                    note: desc([
                        "1 obj medium or smaller within 30 ft breaks irreparably."
                    ])
                }]
            },
            "run (prereq: wordbearer)" : {
                name : "Run",
                source : [["A:TSV2", 18]],
                submenu : "[wordbearer]",
                prereqeval : function(v) {
                    return (/\bwordbearer\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Run command",
                toNotesPage: [{
                    name: "Run",
                    note: desc([
                        "A number of crea(s) equal to my Wisdom mod, within 30 ft that can hear me use their rea to move half their speed away from me. If they have no rea, nothing happens."
                    ])
                }]
            },
            "shift (prereq: wordbearer)" : {
                name : "Shift",
                source : [["A:TSV2", 18]],
                submenu : "[wordbearer]",
                prereqeval : function(v) {
                    return (/\bwordbearer\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Shift command",
                toNotesPage: [{
                    name: "Shift",
                    note: desc([
                        "I teleport to an unoccupied space that I can see within 120 ft. I can take a willing, medium crea."
                    ])
                }]
            },
            "mend (prereq: wordbearer)" : {
                name : "Mend",
                source : [["A:TSV2", 18]],
                submenu : "[wordbearer]",
                prereqeval : function(v) {
                    return (/\bwordbearer\b/).test(classes.known.shaper.subclass)
                },
                description: "I learn the Mend command",
                toNotesPage: [{
                    name: "Mend",
                    note: desc([
                        "A medium or smaller obj within 30 ft returns to previous version of itself. A book recovers lost pages, eaten apple is made whole, etc."
                    ])          
                }]
            }            
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
                "I can use my bonus action to imbue a weapon I am carrying. If the weapon is not in my hand at the start of my next turn, the imbue weapon is dispelled. An imbued weapon is very important; not having one means that I cannot cast spells nor use some class features.",
                "Additionally, my Prof. bonus per long rest, I can choose an elemental damage: acid, cold, fire, lightning, or thunder. For one minute, the weapon deals an additional 1d4 damage of that chosen type. The die size increases by 1 at CL 5, 9, and 13."
            ]),
            action : ["bonus action", ""],
            limfeaname : "Imbue Element",
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest",
            additional : levels.map(function(n) { 
                return (n < 11 ? "1 weapon" : "2 weapons") + ', 1d' + (n < 5 ? 4 : n < 9 ? 6 : n < 13 ? 8 : 10);
            })
        },
        "spellcasting" : {
            name : "Spellcasting",
            source : [["A:TSV2", 8]],
            minlevel : 2,
            description : desc([
                "I can cast shaper spells that I know, using Wisdom as my spellcasting ability",
                "I cannot cast spells if a weapon is not an Imbued Weapon, or if its not in my hand"
            ]),
            calcChanges : {
                spellList :[
                    function(spList, spName, spType) {
                        if(spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                        if (!spList.notspells) spList.notspells = [];
                        var dCantrips = CreateSpellList({"class" : "druid", level : [0,0]}, false, false, false);
                        spList.notspells = spList.notspells.concat(dCantrips);
                    }
                ]
            }
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
                "Instead of learning another druid cantrip, I can choose to learn a Sign. Signs are not cantrips, and after casting a Sign, I must wait one minute before casting the same Sign again."
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
			extrachoices : ["Disturbance", "Elemental Protection", "Force Shift", "Reinforce Body", "Arrest Momentum", "Zone of Power", "Purge Infusion", "Elemental Boon", "Preserve Infusion", "Quicken", "Reinforce Will", "Sharp Winds (prereq: windchaser)", "Force Step", "Interruption", "Fire Wake (prereq: flamecaller)", "Extend Infusion", "All"],	
            extraTimes : levels.map(function(n) {
                return n < 6 ? 0 : n < 10 ? 1 : n < 14 ? 2 : 3;
            }),
            "disturbance" : {
                name : "Disturbance",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Disturbance sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["disturbance"]);
                        }
                    ]
                }
            },
            "elemental protection" : {
                name : "Elemental Protection",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Elemental Protection sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["elemental protection"]);
                        }
                    ]
                }
            },
            "force shift" : {
                name : "Force Shift",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Force Shift"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["force shift"]);
                        }
                    ]
                }
            },
            "reinforce body" : {
                name : "Reinforce Body",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Reinforce Body sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["reinforce body"]);
                        }
                    ]
                }
            },
            "arrest momentum" : {
                name : "Arrest Momentum",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Arrest Momentum sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["arrest momentum"]);
                        }
                    ]
                }
            },
            "zone of power" : {
                name : "Zone of Power",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Zone of Power sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["zone of power"]);
                        }
                    ]
                }
            },
            "purge infusion" : {
                name : "Purge Infusion",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Purge Infusion sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["purge infusion"]);
                        }
                    ]
                }
            },
            "elemental boon" : {
                name : "Elemental Boon",
                source : [["A:TSV2", 15]],
                description : desc(["I learn the Elemental Boon sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["elemental boon"]);
                        }
                    ]
                }
            },
            "preserve infusion" : {
                name : "Preserve Infusion",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description : desc(["I learn the Preserve Infusion sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["preserve infusion"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 6 }
            },
            "quicken" : {
                name : "Quicken",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description : desc(["I learn the Quicken sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["quicken"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 6 }
            },
            "reinforce will" : {
                name : "Reinforce Will",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description : desc(["I learn the Reinforce Will sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["reinforce will"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 6 }
            },
            "sharp winds (prereq: windchaser)" : {
                name : "Sharp Winds",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 6+]",
                description : desc(["I learn the Sharp Winds sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["sharp winds"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 6 && (/\bwindchaser\b/).test(classes.known.shaper.subclass); }
            },
            "force step" : {
                name : "Force Step",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 10+]",
                description : desc(["I learn the Force Step sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["force step"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 10 }
            },
            "interruption" : {
                name : "Interruption",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 10+]",
                description : desc(["I learn the Interruption sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["interruption"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 10 }
            },
            "fire wake (prereq: flamecaller)" : {
                name : "Fire Wake",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 10+]",
                description : desc(["I learn the Fire Wake sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["fire wake"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 10 && (/\bflamecaller\b/).test(classes.known.shaper.subclass)}
            },
            "extend infusion" : {
                name : "Extend Infusion",
                source : [["A:TSV2", 16]],
                submenu : "[shaper level 14+]",
                description : desc(["I learn the Extend Infusion sign"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["extend infusion"]);
                        }
                    ]
                },
                prereqeval : function(v) { return classes.known.shaper.level >= 14 }
            },
            "all" : {
                name : "All",
                source : [["A:TSV2", 9]],
                submenu : "[shaper level 20]",
                description : desc(["I learn All signs at level 20"]),
                calcChanges : {
                    spellList : [
                        function(spList, spName, spType) {
                            // Stop this is not the class' spell list or if this is for a bonus spell entry
                            if (spName !== "shaper" || spType.indexOf("bonus") !== -1) return;
                            spList.extraspells = spList.extraspells.concat(["disturbance", "elemental protection", "force shift", "reinforce body", "arrest momentum", "zone of power", "purge infusion", "elemental boon", "preserve infusion", "quicken", "reinforce will", "sharp winds", "force step", "interruption", "fire wake", "extend infusion"]);
                        }
                    ]
                },
            }
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
                "I can now imbue two weapons instead of one, but must be holding both when I do so. The infusion is kept even if I drop it or someone else is carring it. Infusing another weapon will cause the oldest one to lose its infusion."
            ])
        },
        "greater recovery" : {
            name : "Greater Recovery",
            source : [["A:TSV2", 9]],
            minlevel : 13,
            description : desc([
                "When I finish a long rest, my exhaustion level reduces by 3 instead of 1. Additionally, at dawn, I gain my level in temp hp, and these last until the next dawn."
            ]),
            usages : "Shaper level temp hp per ",
            usagescalc : "event.value = classes.known.shaper.level;",
            recovery : "dawn"
        },
        "breaking point" : {
            name : "Breaking Point",
            source : [["A:TSV2", 9]],
            minlevel : 15,
            description : desc([
                "When I am reduced to 0 hp and not killed outright, and I don't have any exhaustion, I can drop to 1 hp instead. I then regain all spells slots and can use my reaction to cast a spell with a casting time of 1 action. After doing this, I gain 1 point of exhaustion"
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

AddSubClass("shaper", "flamecaller", {
    regExpSearch : /flamecaller/i,
	subname : "Flamecaller",
    source : [["A:TSV2", 10]],
    features : {
        "subclassfeature3" : {
            name : "Shape of Fire",
            source : [["A:TSV2", 10]],
            minlevel : 3,
            description : desc([
                "Living Fire: I gain resistance to fire damage, and when I hit a creature with a Fire Imbued Weapon, I set them ablaze, unless they can't be set on fire. They take fire damage at the start of each of their turns for a minute, until doused, or use their action to put out the flames.",
                "Fire Control: I also learn the Control Flames cantrip.",
            ]),
            spellcastingBonus : [{
                name : "Fire Control",
                spells : ["control flames"],
                selection : ["control flames"],
                times : 1
            }],
            dmgres : ["Fire"],
            calcChanges : {
                atkAdd : [
                    function(fields, v) { 
                        if(/(imbued|infused)/i.test(v.WeaponTextName) && (/fire/i).test(v.WeaponTextName)) {
                            fields.Description += (fields.Description ? '; ' : '' ) + "Living Fire"
                        }
                    },
                    "When I have a fire infused weapon, I set creatures I hit ablaze."
                ]
            },
            additional : levels.map(function(n) {
                return n < 14 ? "1d4" : "1d6"
            })
        },
        "subclassfeature3.1" : {
            name : "Shape Sign: Fire Punch",
            source : [["A:TSV2", 10]],
            minlevel : 3,
            description : desc([
                "I learn the Fire Punch sign."
            ]),
            spellcastingBonus : [{
                name : "Fire Punch",
                spells : ["fire punch"],
                selection : ["fire punch"],
                times : 1
            }]
        },
        "subclassfeature6" : {
            name : "Chaotic Ignition",
            source : [["A:TSV2", 10]],
            minlevel : 6,
            description : desc([
                "I ignore fire resistance, but not immunity"
            ])
        },
        "subclassfeature10" : {
            name : "Flame of Determination",
            source : [["A:TSV2", 10]],
            minlevel : 10,
            description : desc([
                "If my weapon is infused with fire, it deals extra damage equal to my Wisdom mod once per turn"
            ]),
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if(/(imbued|infused)/i.test(v.WeaponTextName) && (/fire/i).test(v.WeaponTextName)) {
                            fields.Description += (fields.Description ? '; ' : '' ) + "Once per turn +" + What('Wis Mod') + " fire dmg";
                        }
                    },
                    "When I have a fire infused weapon, I set creatures I hit ablaze."
                ]
            },
            usages : 1,
            recovery : "Turn"
        },
        "subclassfeature14" : {
            name : "Blazing Soul",
            source : [["A:TSV2", 10]],
            minlevel : 14,
            description : desc([
                "My Living Fire damage is increased to 1d6, I gain immunity to fire damage, and I treat fire immunity as if it were resistance"
            ]),
            savetxt : { immune : ["fire"] }
        }
    }
})

spellSchoolList["Sign"] = "signs of power"

SpellsList["disturbance"] = {
    name : "Disturance",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "S:15-ft cone",
	components : "S",
	duration : "Instantaneous",
    description : "Medium or smaller crea(s) in area Strength save or pushed 5 ft away and take 1d4 force dmg"
}

SpellsList["elemental protection"] = {
    name : "Elemental Protection",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "1 rnd",
    description : "Gain resistance to acid, cold, fire, lightning, or thunder"
}

SpellsList["force shift"] = {
    name : "Force Fhift",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "Conc, 1 min",
    description : "I gain resistance to bludgeon., pierce., and slash. dmg until the start of my next"
}

SpellsList["reinforce body"] = {
    name : "Reinforce Body",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Touch",
	components : "S",
	duration : "Conc, 1 min",
    description : "1 crea gains advantage on next Str, Dex, or Con save"
}

SpellsList["arrest momentum"] = {
    name : "Arrest Momentum",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 rea",
    timeFull : "1 reaction when a creature or object is about to crash",
	range : "30 ft",
	components : "S",
	duration : "1 rnd",
    description : "Medium or smaller crea/obj stops (spd 0) and hangs in the airs; target drops to ground when sign fades"
}

SpellsList["zone of power"] = {
    name : "Zone of Power",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "S:10-ft rad",
	components : "S",
	duration : "Conc, 1 min",
    description : "I gain temp hp equal to my Wis mod at start of each of my turns"
}

SpellsList["purge infusion"] = {
    name : "Purge Infusion",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "S:30-ft rad",
	components : "S",
	duration : "Instantaneous",
    description : "All crea(s) Con save or blinded til end of their next turn"
}

SpellsList["elemental boon"] = {
    name : "Elemental Boon",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "30 ft",
	components : "S",
	duration : "Conc, 1 min",
    description : "Harness fire, earth, water, air; see B",
    descriptionFull  : "I harness the powers of an element. Choose from one of the following, which after the effect triggers, this spell ends" + "\n   " + toUni("Fire") + ": I gain an additional 1d6 fire damage on my next weapon attack" + "\n   " + toUni("Earth") + ": I gain resistance to bludgeon., pierce., and slash. damage dealt by the next attack that hit me" + "\n   " + toUni("Water") + ": If I am below half my max hp, I heal 1d6 hp" + "\n   " + toUni("Air") + ": My next ranged weapon attack doubles its range"
}

SpellsList["preserve infusion"] = {
    name : "Preserve Infusion",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "Conc, 1 hr",
    description : "If imbued weap. over half duration, I pause it. When spell ends, or I end it, resumes with 5 rounds left"
}

SpellsList["quicken"] = {
    name : "Quicken",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "Instantaneous",
    description : "I can take the dodge, help, dash, shove, grapple, or disengage as part of this spell's casting"
}

SpellsList["reinforce will"] = {
    name : "Reinforce Will",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Touch",
	components : "S",
	duration : "Conc, 1 min",
    description : "1 crea advantage on next Int, Wis, or Cha save"
}

SpellsList["sharp winds"] = {
    name : "Sharp Winds",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 rea",
    timeFull : "1 reaction when a creature misses me with a melee attack",
	range : "Touch",
	components : "S",
	duration : "Instantaneous",
    description : "Melee spell atk; 1d8 + Wis mod slashing dmg; +1d8 at CL 5, 11, and 17"
}

SpellsList["force step"] = {
    name : "Force Step",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "1 rnd",
    description : " Move across vertical/liquid surfaces on my turn without falling"
}

SpellsList["interruption"] = {
    name : "Interruption",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 rea",
    timeFull : "1 reaction when creature casts a 5th level or lower spell",
	range : "Touch",
	components : "S",
	duration : "Instantaneous",
    description : "Melee spell atk; on hit, Con save or fail to cast; no effect SL>5"
}

SpellsList["fire wake"] = {
    name : "Fire Wake",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "Conc, 1 min",
    save : "Dex",
    description : "5ft wide, 60ft long trail behind me; crea within 5ft, save or 2d6 fire dmg; crea crosses take 2d6 fire dmg"
}

SpellsList["extend infusion"] = {
    name : "Extend Infusion",
    source : [["A:TSV2", 15]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "Instantaneous",
    description : "Infusion extended to 10 min; can only be used once per infusion"
}

SpellsList["fire punch"] = {
    name : "Fire Punch",
    source : [["A:TSV2", 10]],
    classes : ["shaper"],
    level : 0,
	school : "Sign",
	time : "1 bns",
	range : "Touch",
	components : "S",
	duration : "Instantaneous",
    description : "Melee spell atk; 1d6 + Str mod; flammable obj ignite, not worn or carried; +1d6 at CL 5, 11, and 17"
}