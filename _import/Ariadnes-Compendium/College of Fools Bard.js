var iFileName = "College_of_Fools_Bard";
RequiredSheetVersion("13.1.13");

SourceList["MG:DoMF"] = {
    name : "Myriel Genra's: Deck of Many Fates",
    abbreviation : "MG:DoMF",
    abbreviationSpellsheet : "MG",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/14"
}

AddSubClass("bard", "college of fools", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*fools).*$/i,
	subname : "College of Fools",
	source : [["MG:DoMF", 1]],
    features : {
        "subclassfeature3" : {
            name : "New Beginnings",
            source : [["MG:DoMF", 2]],
            minlevel : 3,
            description : desc([
                "I can choose an additional background. However, I do not gain items or features from it, such as languages, contacts, abilities, etc. It is just a performance or facade.",
                "I do gain its proficiencies. I can roll a Charisma (Performance) check vs a creature's Wisdom (Insight) to convince them of my role.",
                "I can change this background after I finish a long rest. If my DM does not use backgrounds, I can alternatively choose two skill proficiencies and a tool proficiency, and can change these whenever I finish a long rest."
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature3.1" : {
            name : "Self Mockery",
            source : [["MG:DoMF", 2]],
            minlevel : 3,
            description : desc([
                "I learn the Vicious Mockery cantrip, which doesn't count against the number of cantrips I know, and I can use it on myself.",
                "When used this way, I do not take damage nor suffer from its effects. Instead, I embarrass myself and enemies within 60 ft that I can see and understand are magically convinced of my incompetence and regard me as harmless. Until the end of my next turn, hostile creatures cannot willingly target me with an attack or harmful spell, unless I am the only possible target within 60 ft. This does not protect me from area effects or spells. After using this feature, a creature is immune to this ability for 24 hours." 
            ]),
            spellcastingBonus : [{
                name : "Self Mockery",
                spells : ["vicious mockery"],
                selection : ["vicious mockery"],
                times : 1,
            }]
        },
        "subclassfeature3.2" : {
            name : "Beginner's Luck",
            source : [["MG:DoMF", 2]],
            minlevel : 3,
            description : desc([
                "Whenever I or a creature within 60 ft uses a skill with which they are not proficient, I can expend onf use of my bardic inspiration to give advantage on the roll. If they pass the skill check, I regain the expended bardic inspiration used for this feature."
            ])
        },
        "subclassfeature6" : {
            name : "Fool's Errand",
            source : [["MG:DoMF", 2]],
            minlevel : 6,
            description : desc([
                "When a creature within 60 ft of me misses an attack or fails a saving throw, I can use my reaction to expend a use of my bardic inspiration and allow the creature to repeat the roll. If the creature succeeds, I regain a use of bardic inspiration."
            ])
        },
        "subclassfeature14" : {
            name : "The One That Begins",
            source : [["MG:DoMF", 2]],
            minlevel : 14,
            description : desc([
                "I cannot be frightened or surprised, and the first ability check or saving throw I make after long rest is considered a critical success. Additionally, when I succeed a skill check or saving throw, I can choose a number of creatures equal to my Charisma modifier within 60 ft of me. For the next minute, they cannot be charmed or frightened. Any charm or fear effects currently on the creature is immediately broken."
            ]),
            savetxt : { immune : ["surprised", "frightened"] }
        }
    }
})