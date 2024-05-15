var iFileName = "School_of_The_World_Wizard";
RequiredSheetVersion("13.1.13");

SourceList["MG:DoMF"] = {
    name : "Myriel Genra's: Deck of Many Fates",
    abbreviation : "MG:DoMF",
    abbreviationSpellsheet : "MG",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/14"
}

AddSubClass("wizard", "the world", {
    regExpSearch : /the world/i,
	subname : "School of The World",
    source : [["MG:DoMF", 3]],
    features : {
        "subclassfeature2" : {
            name : "Worldly Savant",
            source : [["MG:DoMF", 4]],
            minlevel : 2,
            description : desc([
                "I can copy spells into my spellbook even if they are not wizard spells. They count as wizard spells for me."
            ]),
            calcChanges : {
                spellList : [
                    function(spList, spName, spType) {
                        // If this is not the wizard spell list or if this is a bonus spell
                        if(spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
                        // Add all spells from all other classes to the wizard spell list
                        var aSpells = CreateSpellList({"class" : "all", level : [1,9]}, false, false, false);
                        spList.extraspells = spList.extraspells.concat(aSpells);
                    }
                ]
            }
        },
        "subclassfeature2" : {
            name : "Rewrite Magic",
            source : [["MG:DoMF", 4]],
            minlevel : 2,
            description : desc([
                "When I cast a spell I can choose one of the following effects, which I can use twice per long rest:",
                "\u2022 Disregard Components: I ignore the somatic components for a spell, and can ignore material components as long as their gold value is equal or less than my wizard level x 50",
                "\u2022 Alleviate Prana: I can expend a spell slot that is one level lower than the spell I choose to cast. 1st level spells cannot be downcasted in this manner",
                "\u2022 Self to Others: I cast a spell with a range of self on a single willing creature within melee range, as if the spell had the touch property",
                "\u2022 Change Area: I change the area of effect of a spell from one type to another. See options on the 3rd notes page for changing the area."
            ]),
            toNotesPage : [{
                name : "Area Equivalences",
                note : desc([
                    "Line to Sphere: Length divided by 5 becomes the radius of the sphere",
                    "Line to Cone: Length divided by 4 becomes the length of the cone",
                    "Sphere to Cone: Radius multiplied by 2 and becomes the length of the cone",
                    "Sphere to Line: Radius multiplied by 4 and becomes the length, width is 5",
                    "Cone to Sphere: Length divided by 2 and becomes the radius of the sphere",
                    "Cone to Line: Length multiplied by 3, width is 5"
                ]),
                page3notes : true
            }],
            limfeaname : "Rewrite Magic",
            usages : levels.map(function(n) {
                return (n < 2 ? 0 : n < 14 ? 2 : 4)
            }),
            recovery : "long rest"
        },
        // "subclassfeature6" : function() { // leaving out for now
        //     var init = levels.map(function(n) {
        //         return (n < 6 ? 0 : n < 10 ? 1 : n < 14 ? 2 : 3);
        //     });
        //     var a = {
        //         name : "Journeyman of The World",
        //         source : [["MG:DoMF", 4]],
        //         minlevel : 6,
        //         description : desc([
        //             "My hit point max increases by 4, I gain one additional skill or tool proficiency and learn one additional language, and gain a +1 to my Initiative rolls. I gain these benefits again when I reach 10th and 14th level."
        //         ]),
        //         calcChanges : {
        //             hp : function (totalHD, HDobj, prefix) {
        //                 var lvl = classes.known.wizard.level
        //                 return [ (lvl < 6 ? 0 : lvl < 10 ? 4 : lvl < 14 ? 8 : 12), "Journeyman of The World" ]
        //             }
        //         },
        //         additional : levels.map(function(n) {
        //             return (n < 6 ? 0 : n < 10 ? 1 : n < 14 ? 2 : 3) + " languages, " + (n < 6 ? 0 : n < 10 ? 4 : n < 14 ? 8 : 12) + " hp, " + (n < 6 ? 0 : n < 10 ? 1 : n < 14 ? 2 : 3) + "skill/tools"
        //         }),
        //     };
        //     return a;
        // }(),
        "subclassfeature10" : {
            name : "Unbrindled Ambition",
            source : [["MG:DoMF", 4]],
            minlevel : 10,
            description : desc([
                "Once per long rest, I can use my action to end one effect on myself causing me to be charmed or frightened."
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature14" : {
            name : "Greater Wordly Magic",
            source : [["MG:DoMF", 4]],
            minlevel : 14,
            description : desc([
                "I gain 2 additional uses of Rewrite Magic and unlock the following effects:",
                "\u2022 Touch to Range: A spell with a range of touch gains a range of 60 ft when I cast it",
                "\u2022 Power Word: When I cast a spell requiring a saving throw, increase my Spell Save DC by 2 for that spell. Additionally, creatures cannot benefit from advantage against it such as Magic Resistance",
                "\u2022 Freecast: I can cast a leveled spell on a turn in which I have already casted a leveled spell"
            ])
        }
    }
})