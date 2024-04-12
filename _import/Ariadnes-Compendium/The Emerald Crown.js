var iFileName = "The Emerald Crown";
RequiredSheetVersion("13.1.12");

SourceList["A:TEC"] = {
    name : "Ariadne's: The Emerald Crown",
    abbreviation : "A:TEC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/04/11"
};

MagicItemsList["sword and gourd"] = {
    name : "Sword and Gourd",
    source : [["A:TEC",7]],
    rarity : "rare",
    type : "wondrous item",
    description : "The sword is a +1 longsword, but deals necrotic damage instead of its normal damage. Whenever I hit a creatur with this weapon, I gain an amount of gourd charges equal to half the damage dealt. This can store up to 30 charges.",
    toNotesPage : [{
        name : "Gourd Charges",
        note : desc([
            "On my turn, I can expend a number of gourd charges to do the following:",
            "10 Charges: healing word, cure wounds.",
            "20 Charges: aid, lesser restoration.",
            "30 Charges: mass healing word, revivify."
        ])
    }],
    spellcastingBonus : [{
        name : "Gourd Spells",
        spells : ["healing word", "cure wounds"],
        selection : ["healing word", "cure wounds"],
        times : 2,
        firstCol : 10
    }, {
        name : "Gourd Spells",
        spells : ["aid", "lesser restoration"],
        selection : ["aid", "lesser restoration"],
        times : 2,
        firstCol : 20
    }, {
        name : "Gourd Spells",
        spells : ["mass healing word", "revivify"],
        selection : ["mass healing word", "revivify"],
        times : 2,
        firstCol : 30
    }],
    weaponsAdd : ["Sword and Gourd"],
    weaponOptions : [{
        regExpSearch : /sword and gourd/i,
        name : "Sword and Gourd",
        baseWeapon : "longsword",
        source : [["A:TEC",7]],
        modifiers : [1,1],
    }]
};

MagicItemsList["grasping death"] = {
    name : "Grasping Death",
    source : [["A:TEC", 8]],
    rarity : "very rare",
    type : "wondrous item (consumable)",
    description : desc([
        "I can throw this against a surface. Creatures within 15ft must make DC 14 Con. and DC 16 Cha. saving throws. Creatures take 4d8 necrotic damage upon failing the Con. save, or half on a success, and possed by an evil spirit for 1 minute upon failing the Cha. save."
    ]),
    toNotesPage : [{
        name : "Grasping Death: Possession & Death",
        note : desc([
            "While a creature is possessed, it cannot cast spells or communicate, and will attack the nearest creature regardless of allegiance. It can reroll the save at the end of each of its turns.",
            "If a creature dies while possessed or from the necrotic damage, thorns and brambles sprout in a 15ft radius turning the area into difficult terrain. For every 5ft traveled, a creature takes 1d4 piercing and 1d4 poison damage."
        ])
    }]
};

MagicItemsList["splintered greenhelm"] = {
    name : "Splintered Greenhelm",
    source : [["A:TEC", 8]],
    rarity : "rare",
    type : "wondrous item",
    attunement : true,
    description : desc([
        "I gain a +2 bonus to Survival, Animal Handling, and Medicine checks (not included in the automation). Once between short or long rest, I can grant myself a +2 to my AC and resistance to slashing, piercing, and bludgeoning damage. This lasts for 30 seconds, after which I roll 1d10. On a 1, the helm crumbles and becomes a common nonmagical helm."
    ]),
    usages : 1,
    recovery : "short rest"
};

MagicItemsList["amulet of prisma"] = {
    name : "Amulet of Prisma",
    source : [["A:TEC", 8]],
    rarity : "very rare",
    type : "wondrous item",
    attunement : true,
    description : desc([
        "While attuned, any radiant damage I deal becomes prismatic damage, ignoring radiant resistance and treating immunity as if it were resistance. Whenever a creature receives prismatic damage, it must succeed a DC 14 Con. save or be blinded until the end of its next turn."
    ])
};

FeatsList["boons of the fae serpent"] = {
    name : "Boons of the Fae Serpent",
    source : [["A:TEC", 16]],
    descriptionFull : "",
    description : "",
    allowDuplicates : true,
    choices : ["Fae Mind Shielding", "Fae Whispering", "Unknowable Resilience", "Coraphéist’s Heartbless", "Conjuration Circle"],
    "fae mind shielding" : {
        description : "I have advantage on saving throws against spells and effects that would frighten or charm me.",
        savetxt : { adv_vs : ["charmed", "frightened"] }
    },
    "fae whispering" : {
        description : "I can cast Speak With Animals and Speak With Plants without expending a spell slot or components. I can do so an amount of times equal to my Proficiency Bonus per long rest",
        limfeaname : "Fae Whispering",
        usages : "Proficiency bonus per",
        usagescalc : "event.value = How('Proficiency Bonus');",
        spellcastingBonus : [{
            name : "Fae Whispering",
            spells : ["speak with animals", "speak with plants"],
            selection : ["speak with animals", "speak with plants"],
            times : 2,
        }]
    },
    "unknowable resilience" : {
        description : "I gain a random damage resistance. I'm already resistant, I gain immunity instead."
    },
    "coraphéist’s heartbless" : {
        description : "I gain a +1 to an ability score of my choice, up to a maximum of 24.",
        scorestxt : "+1 to an ability, up to a max of 24"
    },
    "conjuration circle" : {
        description : desc([
            "Once per week, I can spend a minute to perform a ritual to generate a mushroom that opens a planar gate to a location that I am familiar with, regardless of distance or planar boundaries. This lasts for 10 minutes or until I dispel it. The location must also support mushroom growth."
        ]),
        limfeaname : "Conjuration Circle",
        usages : 1,
        recovery : "week"
    }
}