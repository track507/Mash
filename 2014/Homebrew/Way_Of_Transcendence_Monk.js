if (sheetVersion < 13001009) { throw "This script was made for a newer version of the sheet (v13.1.9). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com."; };
var iFileName = "Way_of_the_Transcendental_Monk";
RequiredSheetVersion("13.1.9");
//Renamed to WotTM to avoid collisions with WotM (Wonders of the Multiverse)
SourceList["WotTM"] = {
    name : "Way_of_the_Transcendental_Monk",
    abbreviation : "WotTM",
    group : "Homebrew",
    url : "https://www.reddit.com/r/UnearthedArcana/comments/dfwwjl/way_of_transcendence_monastic_tradition_a_divine/",
    date : "2023/11/15"
};

AddSubClass("monk", "way of transcendence", {
    regExpSearch : /^(?=.*transcendence)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
    subname : "Way of Transcendence",
    source : [["WotTM", 0]],
    spellcastingAbility : 5,
    spellcastingFactor : 3,
    spellcastingList : {
		"class" : "cleric",
		school : ["Abjur", "Div"],
		level : [0, 4]
	},
    spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
    },  
    features : {
        "subclassfeature3" : {
			name : "Spellcasting",
			source : [["WotTM", 0]],
			minlevel : 3,
			description : "\n   " + "I can cast known cleric cantrips/spells, using Wisdom as my spellcasting ability",
			additional : ["", "", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
            spellcastingBonus : {	
                name : "Any School", // the spells gained at level 3, 8, 14, 20
				"class" : "cleric",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4]
			}
		},
        "subclassfeature3.1" : {
            name : "Exalted Discipline",
            source : [["WotTM", 0]],
			minlevel : 3,
            description : "\n   Starting at 3rd level, if you use your action to cast a spell on your turn, you can make one unarmed strike as a bonus action.",
            action : ["bonus action", ""]
        },
        "subclassfeature6" : {
            name : "Ki-Empowered Focus",
            source : [["WotTM", 0]],
			minlevel : 6,
            description : "\n   At 6th level, you learn to infuse your ki with your spellcasting. Whenever you make a Constitution saving throw to maintain concentration on a spell, you can add your Wisdom modifier to the roll."
            + "\n   In addition, when you cast a spell that forces a creature to make a saving throw to resist its effects, you can expend ki points to give one target of the spell disadvantage on the first saving throw against the spell. The number of ki points expended is equal to 1 + the spell's level. If the spell is a cantrip, the ki point expended is 1.",
        },
        "subclassfeature11" : {
            name : "Uplifted Spirit",
            source : [["WotTM", 0]],
			minlevel : 11,
            description : "\n   At 11th level, you gain a hover speed equal to your walking speed. You can only hover 5ft above the ground. If you fall from a greater height, your fall ends 5ft off the ground and you take no fall damage."
            + "\n   In addition whenever you finish a long rest, you can cast commune as a ritual spell without expending material components. While casting this, you are blinded and deafened to your own surroundings.",
            speed : { fly : { spd : "walk", enc : "walk" } },
            spellcastingBonus : {
                name : "Only as ritual",
                spells : ["commune"],
                selection : ["commune"],
                firstCol : "(R)"
            },
            spellChanges : {
                "commune" : {
                    time : "10 min",
                    compMaterial : "None required",
                    changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer. You are blinded and deafened to your own surroundings when you cast this spell."
                }
            }
        },
        "subclassfeature17" : {
            name : "Nirvanic Ascension",
            source : [["WotTM", 0]],
			minlevel : 17,
            description : desc([
                "At 17th level, you have achieved your transcended state. You gain the following benefits:",
                "\u2022 Mystic Sight: You gain true sight out to a range of 30ft.",
                "\u2022 Liberated Spirit: Whenever you cast a spell of 1st level or higher, your flight becomes unrestricted until the end of your next turn, and you don't provoke opportunity attacks when you fly out of an enemy's reach.",
                "\u2022 Dualistic Essence: When an attacker you see hits you with a weapon attack, you can expend 2 ki points as a reaction to momentarily evanesce with your immaterial, universal self. The weapon or projectile passes through your form causing the attack to miss you instead.",
            ]),
            vision : [["Truesight", "fixed 60ft"]],
            "dualistic essence" : {
                name : "Dualistic Essence",
                source : [["WotTM", 0]], 
                description : "\n   As a reaction when an attacker hits me with a weapon attack, I can expend 2 ki points to cause the weapon or projectile to pass through me instead causing the attack to miss.",
                action : ["reaction",""],
                autoSelectExtrachoices : [{ extrachoice : "dualisitc essence" }]
            },
        }
    }
});