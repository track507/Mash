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
        "subclassfeature3" : {
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
        }
    }
})