var iFileName = "The_Library_of_the_Underside";
RequiredSheetVersion("13.1.13");

SourceList["A:TLotU"] = {
    name : "Ariadne's: The Library of the Underside",
    abbreviation : "A:TLotU",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/11"
}

MagicItemsList["writ of safety"] = {
    name : "Writ of Safety",
    source : [["A:TLotU", 8]],
    type : "wondrous item",
    rarity : "rare",
    description : "This doubles as an official document and a magic scoll. It will make the Aurinoir to leave me alone, unless I am doing something obviously dangerous to the security of the City of Strings. It also functions as a Word of Recall that will bring me back to Runo's Shop, and disintegrates after being used this way. I will need to buy another one if I want to go back. See notes for Arcane Tracker.",
    toNotesPage : [{
        name : "Arcane Tracker",
        note : desc([
            "Arcane Tracker: This scoll secretly monitors my approximate location, within a margin of 100 ft. It also scries me for magical items or whoever is carrying this scroll."
        ])
    }]
}

MagicItemsList["golem wrecker"] = {
    name : "Golem Wrecker",
    source : [["A:TLotU", 9]],
    type : "weapon (light hammer)",
    rarity : "very rare",
    description : "I have a +2 bonus to attack and damge rolls made with this weapon. Additionally, this weapon ignores resistance to bludgeoning and slashing damage, and treats immunity as if it were resistance. The crit range against constructs is increased to 17-20, and when I hit a construct, it must roll a DC 17 Constitution saving throw or fall prone and be stunned, repeating the save at the end of each of its turns.",
    weaponsAdd : ["Golem Wrecker"],
    weaponOptions : [{
        name : "Golem Wrecker",
        regExpSearch : /golem wrecker/i,
        baseWeapon : "light hammer",
        modifiers : [2,2],
        description : "Light, thrown; Crit range 17-20 vs. Constructs; On hit vs. Construct, Con save or fall prone and stunned"
    }]
}

MagicItemsList["arcanadex device"] = {
    name : "Arcanadex Device",
    source : [["A:TLotU", 9]],
    type : "wondrous item",
    rarity : "rare",
    description : "I can place a sample of any organic matter inside of it through its detachable bronze and glass display. It takes one minute to process, and I learn some information about the creature the sample belonged to: creature type, damage resistances, immunities, and vulnerabilities. If the sample is in good condition I might learn more at DM's discretion."
}

MagicItemsList["bundle of dried eldermint"] = {
    name : "Bundle of Dried Eldermint",
    source : [["A:TLotU", 10]],
    type : "consumable",
    rarity : "rare",
    description : "I can chew, inhale, or drink this eldermint. Chewing grants me a +1 to my Prof. bonus for 1 hour. Inhaling grants me immunity to poison and disease for one hour, and any poisons and diseases I have currently are only suspended. I can drink tea infused with this, and I gain a +2 bonus to all ability checks for one hour."
}

MagicItemsList["caustic flame"] = {
    name : "Caustic Flame",
    source : [["A:TLotU", 10]],
    type : "weapon (pistol)",
    rarity : "legendary",
    attunement : true,
    description : "This +3 pistol deals a base od 1d8 acid plus 1d8 fire damage instead of the normal 1d10 piercing damage. Creatures hit takes this damage again at the start of their next turn as the flaming acid burns through them. It uses no bullets, but instead I must refill its glass chamber with a vial of acid worth at least 25 GP, and has enough to shoot 10 times before reloading again.",
    weaponsAdd : ["Caustic Flame"],
    weaponOptions : [{
        name : "Caustic Flame",
        regExpSearch : /caustic flame/i,
        baseWeapon : "pistol",
        modifiers : [2,2],
        damage : [1, 8, "acid"],
        description : "Vial of Acid, loading; +1d8 fire dmg; Crea hit take dmg start of their next turn",
    }]
}