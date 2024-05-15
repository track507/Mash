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
            }
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
            }]
        }
    }
}