var iFileName = "The City of Strings.js";
RequiredSheetVersion("13.1.13");

SourceList["A:TCoS"] = {
    name : "Ariadne's: The City of Strings",
    abbreviation : "A:TCoS",
    abbreviationSpellsheet : "A",
    url : "https://www.patreon.com/posts/city-of-strings-105736877",
    date : "2024/06/07"
}

MagicItemsList["invitation to the city of strings"] = {
    name : "Invitation to the City of Strings",
    source : [["A:TCoS", 28]],
    type : "wondrous item",
    rarity : "very rary",
    description : "This letter is needed to get through the Aurinoir Checkpoint, but does not exempt me and my allies from being thorougly searched and background checked. Once I touch this letter, it becomes sentient and is bound to me. If it is lost, it returns after 8 hours have passed, and after 30 days of not opening it, it combusts. It is taken at the checkpoint. See notes.",
    toNotesPage : [{
        name : "Invitation to the City of Strings: Letter",
        note : desc([
            "This letter becomes sentient when I touch it and has 10 hp, 15 AC, and a fly speed of 60 ft. It is immune to psychic, poison, and necrotic damage, and is vulnerable to fire damage."
        ])
    }]
}

MagicItemsList["ariadne's letter of recommendation"] = {
    name : "Ariadne's Letter of Recommendation",
    source : [["A:TCoS", 28]],
    type : "wondrous item",
    rarity : "legendary",
    description : "This letter allows me and up to 4 willing creatures to teleport across the planes, appearing in a designated teleportation circle within the Aurinoir Checkpoint. I can keep this even after I pass the checkpoint, but any creatures brought here by this letter must be searched. Within the City of Strings, this letter ensures the best treatment at any establishment of the Order of Strings. See notes."
}