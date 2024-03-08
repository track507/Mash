if (sheetVersion < 13001012) { throw "This script was made for a newer version of the sheet (v13.1.12). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com."; };
var iFileName = "Ariadne's_CoS";
RequiredSheetVersion("13.1.12");

/*
    NOTICE
    
    This adds content from Ariadne's Codex of Strings' Patreon
    The deluxe versions take priority over their initiate counterparts, this also applies to other posts released
    This is not for public use and not to be redistributed.
*/

/*
    IMPORTANT
    
    Since spells doesn't have specified classes, I assume all classes get them.
    Only the nova cluster addition is finished.
*/
//this is a general source
SourceList["A:CoS"] = {
    name : "Ariadne's: Codex of Strings",
    abbreviation : "A:CoS",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/02/14"
};

//The nova cluster addition
SourceList["A:TNC"] = {
    name : "Ariadne's: The Nova Cluster",
    abbreviation : "A:TNC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
spellSchoolList["Mul"] = "multiple schools"; //for the nebula spell

SpellsList["astrologist's reading"] = {
    name : "Astrologist's Reading",
    source : [["A:TNC", 10]],
    level : 1,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "0.5 min", //this might cause issues as normally there aren't spells with a casting time of 'seconds'
    timeFull : "This spell has a casting time of 30 seconds",
    range: "10 ft",
    components : "S",
    duration : "Instantaneous",
    ritual : true,
    description : "Spellcasting ability check vs. DC (8+target crea CR/Level); Know align. and motivations",
    descriptionFull : "Make a spellcasting ability check with the DC being 8 + the targets CR or Level. On a success, you know the target's current alignment, and may also glimpse into its current motivation. Unless they see you and are familiar with the spell, the target is not aware of your reading."
};
SpellsList["starfire"] = {
    name : "Starfire",
    source : [["A:TNC", 10]],
    level : 3,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    duration : "Conc, 1 min",
    save : "Cha",
    compMaterial : "a purple glass shard",
    description : "One crea expend an arcane resource worth at least a 1st level SS",
    descriptionFull : "When a creature first fails this save and at the end of each of their subsequent turns, the target must choose what the target consumes: a spell slot of the targets choice, a charge from a magic item, or another arcane resource worth at least a 1st level spell slot; like 2 sorcery points. If target has no arcane resources, this spell has no effect."
};
SpellsList["cosmic singularity"] = {
    name : "Cosmic Singularity",
    source : [["A:TNC", 10]],
    level : 7,
    school : "Conj",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "S:30-ft line",
    components : "V,M",
    compMaterial : "a small doll, a crush button worth at least 1cp",
    duration : "1 rnd", //6 seconds is one round, avoid conflicts within the sheet
    save : "Str",
    description : "All crea within 10ft 6d6 Force dmg, vanish; +6d6 Force dmg start of your next turn, transported into astral sea",
    descriptionFull : "You conjure a cannonball-sized gravitational orb. This orb travels 30 ft in a straight line, and any creatures within 10ft of the orb must make Strength save or take 6d6 Force damage and be absorbed into the orb. Creatures absorbed by the orb are transported to a demiplane where any effects from outside the demiplane cannot effect the creatures inside. A creature can communicate through the orb using magical means. A creature can teleport away or use its action to make an Strength (Athletics) check to escape. The creature appears 5 ft outside the orb on a success. Any creatures left inside the orb at the start of your next turn, they take an additional 6d6 Force damage and instantly teleported to a random location in the Astral Sea"
};
SpellsList["astral dust"] = {
    name : "Astral Dust",
    source : [["A:TNC", 50]],
    level : 0,
    school : "Abjur",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 bns",
    range : "Self",
    components : "S",
    duration : "1 rnd",
    description : "+1 to my AC (+2 at level 5), lasts until the start of my next turn; Crea ignore if doesn't rely on sight"
};
SpellsList["gravity blast"] = {
    name : "Gravity Blast",
    source : [["A:TNC", 50]],
    level : 2,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    components : "S, M",
    compMaterial : "a meteorite shard",
    duration : "Instantaneous",
    range : "60 ft",
    save : "Str",
    description : "Crea within 20 ft; 2d10+1d10/SL force dmg, pushed 10 ft away; save halves and aren't pushed.",
    descriptionFull : "Choose a point within range. All creatures within 20 ft must make a Strength saving throw taking 2d10 force damage and pushed 10 ft away from the point; or half damage on a save and aren't pushed." + AtHigherLevels + "When you cast this spell with a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
};
SpellsList["gravity's favor"] = {
    name : "Gravity's Favor",
    source : [["A:TNC", 50]],
    level : 4,
    school : "Trans",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    components : "S, M",
    compMaterial : "a small platinum sphere",
    duration : "Conc, 1 min",
    range : "Self",
    description : "+force dmg to melee atk equal to spell ability mod; Adv. grapple/shove others; Disadv. grapple/shove me; Jump doubled; +10 ft walking spd",
    descriptionFull : "My melee attacks deal additional force damage equal to my spellcasting ability modifier. I have advantage on grapple and shove checks against other creatures, and other creatures have disadvantage on grapple and shove checks against me. My jump distance is doubled and my walking speed increases by 10ft."
};
SpellsList["nebula"] = {
    name : "Nebula",
    source : [["A:TNC", 50]],
    level : 9,
    school : "Mul",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    components : "V,S",
    duration : "Conc, 1 min",
    range : "120 ft",
    save : "Varies",
    description : "30ft rad sphere; Choose one of the following (see full desc.); Action to move it 10ft",
    descriptionFull : "Gold: Orion's Chains. Creatures within the area must make a Wisdom saving throw or be paralyzed. At the end of each of their turns, they can attempt the save again. Red: Burning Core. Creatures within the area must make a Strength saving throw or be pulled to the center of the sphere, taking 6d10 radiant damage and 6d10 fire damage, before being spit out by a flare, landing in a place of the caster's choice 20ft away from the center of the Nebula's area. Blue: Particle Accelerator. Creatures within the area must make a Dexterity saving throw, taking 10d12 force on a failed save, or half on a success. Creatures killed this way are molecularly destroyed. Purple: Unendurable Eminence. Creatures within the area must make a DC 10 Charisma saving throw or take 150 force damage that cannot be prevented in any way. Creatures killed this way disappears without leaving behind a body. The DC increases by 2 each time a creature has to roll it between long rests. I can use an action on my turn to move the center of the sphere up to 10ft."
};
MagicItemsList["dame eleanors flare"] = {
    name : "Dame Eleanors Flare",
    source : [["A:TNC", 56]],
    type : "weapon (pistol)",
    rarity : "rare",
    advantages : [["Initiative", true]],
    description : "This pistol has a +2 to damage and attack rolls. Additionally, I can choose to quickdraw, giving myself advantage on Initiative rolls. Doing so, I must make an attack with this weapon as my first action in combat.",
    attunement : true,
    weaponsAdd : ["Dame Eleanors Flare"],
    weaponOptions : [{
        regExpSearch : /^(?=.*(dame|eleanor?s))(?=.*flare).*$/i,
        name : "Dame Eleanors Flare",
        source : [["A:TNC", 56]],
        type : "Martial",
        ability : 2,
        list : "firearm",
        abilitytodamage : true,
        damage : [1, 10, "piercing"],
        range : "30/90 ft",
        description : "Ammunition, loading; Quickdraw (first action must be an attack with this weapon)",
        tooltip : "Quickdraw: Advantage on Initiative roll, first action must be an attack with this weapon",
        special : true,
        modifiers : [2, 2],
        isMagicWeapon : true,
    }],
};
MagicItemsList["parchment of the wayfarer"] = {
    name : "Parchment of the Wayferer",
    source : [["A:TNC", 56]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "This parchment appears to be a normal piece of parchment. Saying 'Ahrym Eleian' will make the parchment instantly redraw itself to represent an area 50 miles around its current position. Once per long rest, you may choose a point on the map to create an arcane eye. Places shrouded by divination appear as blank space and cannot be targeted by the arcane eye.",
    spellcastingBonus : [{
        name : "Parchment's Arcane Eye",
        spells : ["arcane eye"],
        selection : ["arcane eye"],
        firstCol : "oncelr"
    }],
    extraLimitedFeatures : [{
        name : "Arcane Eye (Parchment)",
        usages : 1,
        recovery : "long rest"
    }]
};
MagicItemsList["burstfire hoverback"] = {
    name : "Burstfire Hoverback",
    source : [["A:TNC", 56]],
    type : "wondrous item",
    rarity : "lengedary",
    attunement : true,
    description : "This hoverback grants a flying speed of 60ft. Additionally, it has 10 charges which can be used for Boom Barrage (5 charges), Overclocked Thrusters (3 charges), or Evasive Maneuvers (2 charges). See notes page.",
    toNotesPage : [{
        name : "Burstfire Hoverback",
        note : desc([
            "This hoverback is imbued with powerful and explosive arcane energy. When worn, it binds seamlessly to your back, with two ethereal flames that spark with blue and purple energy giving a faint hum. However, it does not burn you. This grants me 60ft of fly speed and has 10 charges, which can be expended to create the following effects: ",
            toUni("Boom Barrage (5 charges): ") + "As an actions, you can unleash a barrage of five arcane missiles from the jetpack. Each missile targets a point with 120 ft. Creatures within 10 ft of where the missile hits must make a DC 20 Dexterity saving throw, taking 4d10 force damage on a fail, or half as much on a success.",
            toUni("Overclocked Thrusters (3 charges): ") + "As a bonus action, you can activate the jetpack's overdrive, doubling your flying speed to 120 ft for up to 10 minutes.",
            toUni("Evasive Maneuvers (2 charges): ") + "As a reaction to being targeted by a spell or ranged attack, you can use the jetpack's energy to make a quick evasive maneuver. You gain advantage on the saving throw or a +5 bonus to AC against the triggering attack."
        ]),
    }],
    action : [["action", "Boom Barrage (5 charges)"], ["bonus action", "Overclocked Thrusters (3 charges)"], ["reaction","Evasive Maneuvers (2 charges) "]],
    extraLimitedFeatures : [{
        name : "Burstfire Charges",
        usages : 10,
        recovery : "long rest" //doesn't explicitly state the recovery time 
    }]
};
MagicItemsList["astral suit"] = {
    name : "Astral Suit",
    source : [["A:TNC", 7]],
    type : "armor (half plate)",
    rarity : "uncommon",
    attunement : true,
    description : "While attuned to this armor, you have advantage to resist cloud-based effects, such as those created by the Slow, Stinking Cloud, or Cloudkill spells. Additionally, every attack that deals fire, lightning, or acid damage is reduced by 3.",
    savetxt : { adv_vs : ["cloud-based effects"], text : ["-3 damage per attack dealing lightning, fire, or acid dmg"] },
    armorAdd : "Astral Suit",
    armorOptions : [{
        regExpSearch : /astral suit/i,
		name : "Astral Suit",
        source : [["A:TNC", 7]],
        type : "medium",
        ac : 15,
        stealthdis : true,
		weight : 40
    }]
};
MagicItemsList["baldric of gravity"] = {
    name : "Baldric of Gravity",
    source : [["A:TNC", 15]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "While you wear this belt, gravity pulls you towards the surface you're standing on. Whenever you switch your gravity to a new surface, you must succeed on a DC 12 Dexterity (Acrobatics) check. Otherwise, you fall prone at the point where you attempted to switch gravity.",
};
MagicItemsList["contrabandist's bracer"] = {
    name : "Contrabandist's Bracer",
    source : [["A:TNC", 16]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "This bracer buzzes softly when officers of the law enter a range of 120 ft of it. You can use an action to cast nondetection, requiring no components. Once you do so, you can't do it again until you finish a long rest.",
    spellcastingBonus : [{
        name : "Contrabandist's Bracer",
        spells : ["nondetection"],
        selection : ["nondetection"],
        firstCol : "oncelr"
    }],
    spellChanges : {
        "nondetection" : {
            compMaterial : "",
            changes : "The Contrabandist's Bracer allows me to cast nondetecting once per long rest without using material components."
        }
    }
};
MagicItemsList["impulse capsule"] = {
    name : "Impulse Capsule",
    source : [["A:TNC", 16]],
    type : "consumable",
    rarity : "very rare",
    description : "For the next hour after consuming this capsule, you auto-succeed all Wisdom (History) checks within the last year, advantage on Intelligence-based skill checks and saving throws, and a 1d12 bonus to Dexterity saving throws and initiative rolls. After an hour, you take a level of exhaustion. You ignore exhaustion if you consume more capsules."
};
MagicItemsList["lex-i prototype"] = {
    name : "Lex-I Prototype",
    source : [["A:TNC", 16]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    prerequisite : "Must amputate your right arm and must be aligned with an 'Eminent Wisp' to attune, select 'yes' at the bottom if you have",
    prereqeveal : function(v) { //force to be false to notify user that they must amputate arm and be attuned to an eminent wisp.
        return false;
    },
    fixedDC : 18,
    description : "You gain the following: immune to diseases, poison dmg, and poisioned condition, ignore the first Impulse Capsule effects you take between long rests, can make a melee weapon attack using Strength dealing 2d12+Str mod+3 force dmg, can make a beam attack 30ft long and 5ft wide DC 18 Dex save taking 16d8 force dmg or half on a save. After firing this beam, the arm goes dormant for 1d4 days. Absorbing an Eminent Wisp awakens the item early.",
    savetxt : {immune : ["poison dmg", "disease", "poisioned condition"]},
    weaponsAdd : ["Lex-I Prototype Strike", "Lex-I Prototype Beam"],
    weaponOptions : [{
        regExpSearch : /lex-i prototype strike/i,
        name : "Lex-I Prototype Strike",
        source : [["A:TNC", 16]],
        ability : 1,
        type : "Magic Item",
        abilitytodamage : true,
        damage : [2,12,"force"],
        range : "Melee",
        description : "Unarmed strike; Special",
        special : true,
        isMagicWeapon : true,
        isAlwaysProf : true,
        modifiers : [0, 3] 
    }, {
        regExpSearch : /lex-i prototype beam/i,
        name : "Lex-I Prototype Beam",
        baseWeapon : "unarmed strike", //technically melee weapon attack
        list : "Melee",
        source : [["A:TNC", 16]],
        ability : 2,
        type : "Magic Item",
        abilitytodamage : false,
        damage : [16,8,"force"],
        range : "Ranged, 30ft",
        description : "Ranged 30ft long, 5ft wide beam; Special",
        tooltip : "Special: After firing, arm goes dormant for 1d4 days. A wisp ends this early",
        special : true,
        isAlwaysProf : true,
        isMagicWeapon : false, //prevents attack calculations 
        isNotWeapon : true,
        dc : true
    }]
};
var eminent_wisp_toNotes = [
    "You may choose to use your bonus action to consume an Eminent Wisp. If you are not native to the Nova Cluster, you must succeed on a DC 20 Constitution saving throw or suffer 10d6 force damage. Once you fail this saving throw, you cannot attempt to commune with an Eminent Wisp for the next 24 hours. On a success, you suffer only 5d6 force damage and become aligned with the Eminent Wisp for 24 hours.",
    "While aligned, you gain a single level in your main class and an additional attunement slot for the duration. Additionally, you can use the Wisp's power to recover a single class feature of 5th level or lower, or a single spell slot of up to 3rd level. The Wisp isn't consumed this way, but you cannot use this ability again until you finish a long rest.",
    "After 24 hours have passed, you must repeat the saving throw to align yourself with the Wisp again. On a failure, you cannot align with an Eminent Wisp for the next week.",
    "If you successfully align yourself with a Wisp for three days in a row, you become permanently bound to that wisp and gain its benefits permanently. You cannot align with another wisp until you renounce the initial one. Upon death, the wisp will hover above your corpse, waiting to be claimed by another."
];
MagicItemsList["eminent wisp"] = {
    name : "Eminent Wisp",
    source : [["A:TNC", 19]],
    type : "treasure",
    rarity : "legendary",
    attunement : true,
    description : "Gain a single level in your main class and an additional attunement slot. You cannot benefit from another wisp. If you want to attune to another wisp, you must renounce your previous wisp. Every 24 hours, you must succeed a DC 20 Consitution saving throw or you lose these benefits for a week. See Notes",
    toNotesPage : [{
        name : "Eminent Wisp",
        note : desc(eminent_wisp_toNotes).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }]
};
MagicItemsList["solar needle"] = {
    name : "Solar Needle",
    source : [["A:TNC", 46]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : false,
    description : "This needle emits dim light in a 10ft radius. I can use it to sow, making the cloth shine with residual gold dust for 24 hours granting advantage on persuasion checks. I can also stab the needle into my skin (as an action) dealing 1 piercing damage, and gain resistance to fire and radiant damage. I take 1 psychic damage per minute it stays in my skin.",
    dmgres : [
        ["Fire", "Fire (needle in skin)"],
        ["Radiant", "Rad. (needle in skin"]
    ]
};
RaceList["cetkar"] = {
    regExpSearch : /^(?=.*cetkar).*$/i,
    name : "Cetkar",
    source : [["A:TNC", 60]],
    plural : "Cetkari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : "walk", enc : 0}
    },
    skills : ["Intimidation"],
    age : " same age rate and lifespan as humans",
    height : " stand between 6 to 7 feet tall",
    weight : " weighs around 200 to 300 pounds",
    trait : "Cetkar (+1 Strength and +1 Constitution)" +desc([ 
        "Amphibian Adaptation: I can breath air and water, and have a swimming speed equal to my walking speed.", 
        "Cetkari Jaws: My jaws are natural weapons dealing 1d8 + my Strength modifier piercing damage. On a hit and if the creature is medium or smaller, I can grapple it. The DC for my grapple check is 8 + prof bonus + Strength modifier.",
        "Threatening Presence: I gain proficiency with Intimidation. Additionally, I have advantage on the check against creatures that have seen me attack with my Cetkari Jaws.",
    ]),
    weaponsAdd : ["Cetkari Jaws"],
    weaponOptions : [{
        regExpSearch : /^(?=.*cetkari)(?=.*jaws).*$/i,
        name : "Cetkari Jaws",
        source : [["A:TNC", 60]],
        type : "Natural",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 8, "piercing"],
        range : "Melee",
        description : "Natural; On hit, choose to grapple",
        list : "melee",
        isAlwaysProf : true,
    }],
    improvements : "Cetkar: +1 Strength , +1 Constitution;",
    scores : [1, 0, 1, 0, 0, 0],
    abilitySave : 1,
};
RaceList["cetkar, quaru"] ={
    regExpSearch : /^(?=.*cetkar|cetkari)(?=.*quaru).*$/i,
    name : "Cetkar Quaru",
    source : [["A:TNC", 61]],
    plural : "Cetkari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : "walk", enc : 0}
    },
    skills : ["Intimidation"],
    age : " same age rate and lifespan as humans",
    height : " stand between 6 to 7 feet tall",
    weight : " weighs around 200 to 300 pounds",
    trait : "Cetkar, Quaru (+1 Str, +1 Con, and +1 Str or Cha)" +desc([
        "Exceptional Audience: I have advantage on perception checks relying on hearing, and are considered to be within earshot in distances twice as large as other humanoids.",
        "Deadly Strength: I have a +2 bonus to damage rolls made against creatures below half their max hp; temp HP does not count against this condition.",
        "Born Leader: I can cast friends at will requiring no components. When I reach 3rd level, I can cast heroism twice per long rest. Charisma is my spellcasting ability for this."
    ]),
    weaponsAdd : ["Cetkari Jaws"],
    weaponOptions : [{
        regExpSearch : /^(?=.*cetkari)(?=.*jaws).*$/i,
        name : "Cetkari Jaws",
        source : [["A:TNC", 60]],
        type : "Natural",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 8, "piercing"],
        range : "Melee",
        description : "Natural; On hit, choose to grapple",
        list : "melee",
        isAlwaysProf : true,
    }],
    improvements : "Cetkar, Quaru: +1 Strength , +1 Constitution, and +1 to Strength or Charisma;",
    scores : [1, 0, 1, 0, 0, 0],
    abilitySave : 6,
    spellcastingBonus : [{
        name : "Born Leader (friends)",
        spells : ["friends"],
        selection : ["friends"],
        times : 1
    }],
    spellChanges  : {
        "friends" : {
            components : "",
            changes : "At will, requiring no components"
        }
    },
    features : {
        "racialfeature3" : {
            name : "Born Leader (heroism)",
            minlevel : 3,
            usages : 2,
            spellcastingBonus : [{
                name : "Born Leader (heroism)",
                spells : ["heroism"],
                selection : ["heroism"],
                times : 1,
            }]
        }
    }
};
RaceList["cetkar, fykari"] ={
    regExpSearch : /^(?=.*cetkar|cetkari)(?=.*fykari).*$/i,
    name : "Cetkar Fykari",
    source : [["A:TNC", 61]],
    plural : "Cetkari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : "walk", enc : 0}
    },
    trait : "Cetkar, Fykari (+1 Strength, +1 Constitution, and +1 Dexterity or Intelligence)" + desc([
        "Constrict and Bite: I can use my Dexterity modifier instead of Strength to resolve grapple checks. My bite attacks deal 1d12 piercing damage instead of 1d8 when the creature is grappled by me.",
        "Impassive Killer: I have advantage on being frightened and other creatures have disadvantage against being frightened by me.",
        "Artificer's Psyche: I gain proficiency with Tinker's Tools and have advantage on rolls to understand the functioning of mechanical artificery. Additionally, I can cast mending, requiring no components.",
    ]),
    toolProfs : ["Tinker's Tools"],
    age : " same age rate and lifespan as humans",
    height : " stand between 6 to 7 feet tall",
    weight : " weighs around 200 to 300 pounds",
    weaponsAdd : ["Cetkari Jaws"],
    weaponOptions : [{
        regExpSearch : /^(?=.*cetkari)(?=.*jaws).*$/i,
        name : "Cetkari Jaws",
        source : [["A:TNC", 60]],
        type : "Natural",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 8, "piercing"],
        range : "Melee",
        description : "Natural; On hit, choose to grapple; Versatile (1d12 if grappled by me)",
        list : "melee",
        isAlwaysProf : true,
    }],
    spellcastingBonus : [{
        name : "Artificer's Psyche",
        spells : ["mending"],
        selection : ["mending"],
        times : 1
    }],
    spellChanges : {
        "mending" : {
            components : "",
            changes : "I can cast mending at will requiring no components."
        }
    },
    savetxt : {
        text : "Adv. vs me being frightened; Crea have disadv. vs being frightened by me"
    },
    improvements : "Cetkar, Quaru: +1 Strength , +1 Constitution, and +1 to Dexterity or Intelligence;",
    scores : [1, 0, 1, 0, 0, 0],
    abilitySave : 6
};
MagicItemsList["assistant drone v-38"] = {
    name : "Assistant Drone V-38",
    source : [["A:TNC", 47]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    description : "This drone can only be commanded by me. If reduced to 0 HP and if I'm proficient with tinker's tools, I can repair it over the course of a short rest. I may also transform the drone into a helmet giving me 120 ft of darkvision, I can breathe underwater, and my AC increases by 2. The drone cannot use any of its features or any of its actions (includes bns. and reactions) while like this. However, it can still talk.",
    vision : [
        ["Darkvision (drone helmet on)", 120]
    ],
    savetxt : {text : "I can breath underwater while wearing the helmet as a drone"},
    creaturesAdd : [["Assistant Drone V-38"]],
    creatureOptions : [{
        name : "Assistant Drone V-38",
        source : [["A:TNC", 47]],
        size : 4,
        type : "Construct",
        alignment : "Unaligned",
        ac : 15,
        hp : 34,
        hd : [8,6],
        speed : "fly 50 ft (hover)",
        proficiencyBonus : 2,
        challengeRating : "1",
        scores : [12, 14, 13, 8, 12, 14],
        senses : "Darkvision 120 ft",
        attacksAction : 1,
        passivePerception : 13,
        damage_immunities : "poison, psychic",
        condition_immunities : "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
        languages : "Languages of its creator",
        attacks : [{
            name : "Bump",
            ability : 1,
            damage : [1,6,"bludgeoning"],
            range : "Melee (5 ft)",
            description : "Bumps into a target as a melee weapon attack.",
        }, {
            name : "Beam",
            ability : 6,
            damage : [1,6,"radiant"],
            range : "Ranged spell attack (60 ft)",
            description : "Fires a beam at a target as a ranged spell attack."
        }],
        traits : [{
            name : "Advice",
            description : "If asked, the drone gives advice about any given situation. Sometimes without being prompted too. It likes to talk, but it's not very smart."
        },{
            name : "Sturdy Flyer",
            description : "The drone has handles underneath. A medium or smaller creature can grab onto the handles and be carried at half the drone's fly speed.",
        },{
            name : "Skillful Helper (3/day)",
            description : "This drone can add its proficiency bonus (+2) to an ability check, attack roll, or saving throw made by the creature it is attuned to, if said creature is within 30ft."
        }],
        actions : [{
            name : "Intercept",
            description : "As a reaction, the drone can block an attack that targets a creature within 5 ft of it, making itself the target of the attack instead."
        }]
    }]
};
MagicItemsList["hellspitter"] = {
    name : "Hellspitter",
    source : [["A:TNC", 49]],
    type : "weapon (pistol)",
    rarity : "artifact",
    attunement : true,
    description : "This pistol has a +3 to attack and damage rolls, doesn't require ammunition, doesn't need to be reloaded, and fires shards of molten mithril dealing 2d6 piercing and 2d6 fire damage on a hit. This ignores resistances, not immunities, and reduces the target's HP for an hour. Critical hits deal an additional 4d6 fire damage. I can also cast fireball at will requiring no components.",
    weaponsAdd : ["Hellspitter"],
    weaponOptions : [{
        name : "Hellspitter",
        source : [["A:TNC", 49]],
        regExpSearch : /hell spitter/i,
        type : "Martial",
        ability : 2,
        list : "firearm",
        abilitytodamage : true,
        damage : [4,6, "fire"],
        range : "30/90 ft",
        description : "Special; 2d6 Fire + 2d6 Rad dmg on hit; +4d6 Fire on crit (included above)",
        tooltip : "Special: Doesn't require ammunition and doesn't need to reload.",
        special : true,
        modifiers : [3, 3],
        isMagicWeapon : true,
    }],
    spellcastingBonus : [{
        name : "Hellspitter (Fireball)",
        spells : ["fireball"],
        selection : ["fireball"],
        firstCol : "atwill"
    }],
    spellChanges : {
        "fireball" : {
            compMaterial : "",
            changes : "I can cast fireball at will requiring no material components."
        }
    }
};
MagicItemsList["malaise"] = {
    name : "Malaise",
    source : [["A:TNC", 49]],
    type : "weapon (dagger)",
    rarity : "artifact",
    attunement : true,
    description : "This dagger has a +3 to attack and damage rolls and deals an additional 3d6 Cold damage. It can also fly, become invisible, and shift into the ethereal plane at will. I can control and use its abilities telekinetically as long as it's within 60ft of me. It follows my every command, but when left alone, it floats atop my head seemingly about to drop down. This creates an ever-present feeling of dread. While the dagger is like this, I cannot be surprised.",
    /*
        It doesn't state the fly speed
        Doesn't say whether or not it still functions as a normal dagger (melee 20/60ft) and if we can (at will) make it fly 60ft and attack someone
        Assuming it has a fly speed of 60ft and takes an action to attack
    */
    weaponsAdd : ["Malaise"],
    weaponOptions : [{ 
        regExpSearch : /malaise/i,
        name : "Malaise",
        source : [["A:TNC", 49]],
        baseWeapon : "dagger",
        description : "Finesse, light, thrown; +3d6 cold dmg; fly, invis, plane shift (ethereal) at will; Special",
        tooltip : "Special: Command and use its features telekinetically up to 60ft",
        range : "Melee, 20/60 ft",
    }]
};
FeatsList["magic specialist"] = {
    name : "Magic Specialist",
    source : [["A:TNC", 44]],
    prerequisite : "The magic initiate feat",
    prereqeval : function(v) { return CurrentFeats.known.indexOf("magic initiate") !== -1; },
    description : "Every spell you cast from the chosen school gives you a token. At five tokens, the next spell of 5th level or lower from that school of magic does not expend a spell slot. Cantrips do not award tokens"
    + " A single 1st level spell from the school becomes a cantrip. At 11th level, a single 2nd level spell from the chosen school becomes a cantrip.",
    choices : ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    selfChoosing : function () {
		var MagicInit = CurrentFeats.known.indexOf("magic initiate");
		if (MagicInit !== -1 && CurrentFeats.choices[MagicInit]) {
			return CurrentFeats.choices[MagicInit];
		}
	},
    "bard" : {
		description : "Everytime I cast a bard spell, I gain a token. At 5 tokens, the next bard spell of 5th level or lower does not expend a spell slot. Cantrips doesn't award tokens. Additionally, a single 1st level bard spell becomes a cantrip for me. At 11th level, this becomes a single 2nd level bard spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "bard",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }, {
            name : "Magic Specialist",
            "class" : "bard",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"cleric" : {
		description : "Every time you cast a cleric spell, you gain a token. At 5 tokens, the next cleric spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level cleric spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level cleric spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "cleric",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "cleric",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"druid" : {
		description : "Every time you cast a druid spell, you gain a token. At 5 tokens, the next druid spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level druid spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level druid spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "druid",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "druid",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"sorcerer" : {
		description : "Every time you cast a sorcerer spell, you gain a token. At 5 tokens, the next sorcerer spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level sorcerer spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level sorcerer spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "sorcerer",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "sorcerer",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"warlock" : {
		description : "Every time you cast a warlock spell, you gain a token. At 5 tokens, the next warlock spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level warlock spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level warlock spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "warlock",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "warlock",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"wizard" : {
		description : "Every time you cast a wizard spell, you gain a token. At 5 tokens, the next wizard spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level wizard spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level wizard spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "wizard",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "wizard",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    }
};
FeatsList["reactive"] = {
    name : "Reactive",
    source : [["A:TNC", 44]],
    description : "I gain a +2 bonus to Initiative rolls. I may use a bonus action on my turn to gain an additional reaction for this round.",
    addMod : [ { type : "skill", field : "Init", mod : 2, text : "I gain a +2 to my Initiative rolls." } ],
    action : ["bonus action", "Reactive (+1 Reaction)"]
};
FeatsList["against all odds"] = {
    name : "Against All Odds",
    source : [["A:TNC", 44]],
    description : "My Charisma score increase by 1, up to a max of 20. For every ally within 30ft of me that has fewer than half their total hit points (including me), I gain a +1 to all of my attack rolls, saving throws, and ability checks, up to a maximum of +3.",
    scores : [0, 0, 0, 0, 0, 1]
};
FeatsList["perfectionist"] = {
    name : "Perfectionist",
    source : [["A:TNC", 44]],
    description : "My Intelligence score increases by 1, up to a max of 20. I gain proficiency in a skill of my choice or expertise if I'm already proficient. Whenever I fail a DC or get an undesired result, I may roll again with advantage. I cannot use this ability again until I finish a short rest.",
    skillstxt : "Proficiency with a skill of my choice, or expertise if I'm already proficient.",
    usages : 1,
    recovery : "short rest"
};
FeatsList["nerves of steel"] = {
    name : "Nerves of Steel",
    source : [["A:TNC", 44]],
    description : "My Intelligence, Wisdom, or Charisma increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
		description : "My Intelligence increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "My Wisdom increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "My Charisma increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
		scores : [0, 0, 0, 0, 0, 1],
	}
};
//The Ichorous Peninsula addition
SourceList["A:TIP"] = {
    name : "Ariadne's: The Ichorous Peninsula",
    abbreviation : "A:TIP",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
SpellsList["death and despair"] = {
    name : "Death and Despair",
    source : [["A:TIP", 4]],
	level : 8,
    school : "Necro",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "90 ft",
	components : "V,S",
    duration : "Conc, 1 min",
    save : "Con",
    description : "30ft wide, 10ft tall cylinder; all crea 12d6 Necrotic dmg and demoralized; save halves and not demoralized; see desc.",
    descriptionFull : "Choose a 30 ft radius surface you can see within range. All creatures that are within 10 ft high of the surface must make a Constitution saving throw taking 12d6 Necrotic damage, or half as much on a save. A creature must make a save when it enters the spells area for the first time or ends its turn there. Nonmagical plants with and die, while magical plants receive double damage. All creatures damaged by this spell at least twice must make a Wisdom saving throw or become demoralized. A demoralized creature has its speed reduced to 0 and falls to its knees in absolute despair."
};
SpellsList["thunderous crimson"] = {
    name : "Thunderous Crimson",
    source : [["A:TIP", 2]],
	level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "S:30-ft cone",
	components : "V,S",
    duration : "Instantaneous",
    save : "Dex",
    description : "4d4+2d4/SL Lightning dmg, dazzled until end of their next turn; save no dmg, not dazzled",
    descriptionFull : "You summon a wave of crackling red lightning that travels in a 30 foot cone in front of you. Each crea in that area must succeed a Dexterity save or suffer 4d4 lightning damage and be dazzled until the end of their next turn" + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot about 1st level."
};
MagicItemsList["poncho of caustic ethrealness"] = {
    name : "Poncho of Caustic Ethrealness",
    source : [["A:TIP", 2]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "To attune to this item, a creature must wear this poncho for 1 minute, taking 1d6 acid damage every round. After which the poncho stops harming them, you gain resistance to acid damage and can cast etherealness once per long rest. Additionally, when hit by a melee attack by a creature within 5 ft, the attacker takes 2d6 acid damage.",
    spellcastingBonus : [{
        name : "Caustic Etherealness",
        spells : ["etherealess"],
        selection : ["etherealness"],
        times : 1,
        firstCol : "oncelr"
    }],
    dmgres : ["Acid"],
};
MagicItemsList["orb of threadseeking"] = {
    name : "Orb of Threadseeking",
    source : [["A:TIP", 4]],
    type : "artifact",
    rarity : "legendary",
    attunement : true,
    description : "Attuning to this item means that I am now the owner of a personal sub-section of the City of Strings, a timeless demiplane (see desc). As long as I have the orb in my possession, I can open a planar gate as an action which lasts until I dismiss it (no action required).",
    toNotesPage : [{
        name : "Orb of Threadseeking: Demiplane",
        note : desc([
            "The demiplane has a surface space of 8000 square feet, which you may arrange in anyway you wish. Typical rooms found in a threadseeker's demiplane include the following:",
            toUni("Arcanist's Laboratory (2000 square feet): ") + "A room to accomdate the mysteries of the cosmos. It has special instruments allowing me to cast the identify, comprehend languages, and detect posion and disease spells at will while inside the room.",
            toUni("Arcane Observatory (4000 square feet): ") + "A room to gaze at the stars of the multiverse. While inside, I can use its arcane telescope to view any place I previously visited. When doing so, the area I can see is a 20ft radius sphere and I can move it up to 15ft as an action",
            toUni("Crafting Station (4000 square feet): ") + "A room filled with arcane machinery. While in this room, I can cast the fabricate spell at will. I am also considered proficient with every type of tool for the purposes of what I can create with this room's ability.",
            "These are only examples. You can work with your DM to determing hoe the 8000 square feet is used. The more powerful the room, the more space it should occupy."
        ])
    }],
    action : ["action", "Open Demiplane Gate"]
};
//No clue how to do this well as there is virtually no good way to do this
//To-do: Figure out how to amend the trait from the new race to the old race (misbegotten)
RaceList["misbegotten"] = {
    regExpSearch : /misbegotten/i,
    name : "Misbegotten",
    source : [["A:TIP", 8]],
    plural : "Misbegottens",
    //stuff to make the pdf not yell at me
    scorestxt : "",
    trait : "",
    size : [3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    dmgres : ["Pick psychic/fire/acid/necrotic/cold"],
    improvements : "+1 to Constitution",
    scores : [0,0,1,0,0,0],
    toNotesPage : [{
        name : "Misbegotten",
        note : desc([
            "Abberrant Form: You have advantage on saving throws against being charmed and frightened. Additionally, you can use a bonus action to extend and retract tentacle-like appendages from your back. These have a reach of 10ft and can be used as natural weapons, dealing 1d6 piercing damage. I am proficient with these weapons and gain advantage in atheletics and acrobatics while using them.",
            "Twilight Veil: ",
            "Whispers of Madness: ",
            "Tainted Resilience : "
        ])
    }],
    useFromPreviousRace : {
        message : "Replace one of your current racial features with an Eldritch Mutation from the notes page"+
        desc([
            "Replace one current racial feature with one from the notes page.",
            "You now have resistance to one of the following: psychic, fire, acid, necrotic, or cold.",
            "You gain advantage on saving throws against disease and posion."
        ]),
        //So far this is covers most cases, there are probably more from "_common attributes" that I havent tested yet
        //Things I havent tested: saves, shieldAdd, ammoOptions, ammoAdd, advantages, fixedSpAttack, fixedDC, and basically most of the the common attributes
        gainTraits : [
        "size", "plural", "age", "height", "weight", "heightMetric", 
        "weightMetric", "languageProfs", "skillstxt", "skills", 
        "speed.climb", "speed.fly", "speed.swim", "toolProfs", 
        "weapons", "armorAdd", "vision", "dmgres", 
        "savetxt", "weaponProfs", "armor", "armorProfs", 
        "abilitySave", "spellcastingAbility", "armorOptions", "spellcastingBonus",
        "weaponsAdd", "weaponOptions", "action", "scorestxt",
        "scores", "usages", "recovery", "usagescalc",
        "limfeaname", "limfeaAddToExisting", "additional", "extraLimitedFeatures",
        "saves", "shieldAdd", "ammoAdd", "ammoOptions", "carryingCapacity",
        "advantages", "fixedDC", "fixedSpAttack", "allowUpCasting", "spellcastingExtra", "spellcastingExtraApplyNonconform",
        "spellChanges", "spellcastingBonusElsewhere", "creatureOptions", "creaturesAdd", "calcChanges",
        "addMod", "extraAC", "toNotesPage", "eval", "changeeval", "removeeval"],
        replaceNameInTrait : ["Misgotten", "prefix"]
    },
};

FeatsList["field medic"] = {
    name : "Field Medic",
    source : [["A:TIP", 2]],
    description : "I gain proficiency in slight of hand, or expertise if I'm already proficient. As a bonus action, I can expend a hit die to heal a creature within 5ft of me. The creature gains half my level in hit points. I can do this a number of times equal to my Proficiency bonus per short rest.",
    action : ["bonus action", ""],
    usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "short rest",
    calculate : "event.value = \"I gain proficiency in slight of hand, or expertise if I'm already proficient. As a bonus action, I can expend a hit die to heal a creature within 5ft of me. The creature gains lvl (' + Math.ceil(What('Character Level')/2) + ') in hit points. I can do this a number of times equal to my Proficiency bonus per short rest.\";"
};
FeatsList["heroic presence"] = {
    name : "Heroic Presence",
    source : [["A:TIP", 4]],
    description : "During combat, and if I am conscious and not restrained, paralyzed, or incapacitated, allies within 15 ft of me can add 1d4 to any attack or ability check they make."
};

/*
    Everything below is not finished or completed.
*/

SourceList["A:TMC"] = {
    name : "Ariadne's: The Molten Crucible",
    abbreviation : "A:TMC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
MagicItemsList["shard of ember pass"] = { 
    name : "Shard of Ember Pass",
    source : [["A:TMC", 3]],
    type : "treasure",
    rarity : "rare",
    description : "A shard does little on its own, but a proficient arcane smith can use this to create magical wonders. I can work with my DM with creating my own magic item using this shard."
}

//The better spellbook v1.0 addition
SourceList["A:BS"] = {
    name : "Ariadne's: Better Spellbook V1.0",
    abbreviation : "A:BS",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};

//The citadel of radiance
SourceList["A:TCoR"] = {
    name : "Ariadne's: The Citadel of Radiance",
    abbreviation : "A:TCoR",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
SpellsList["pulverizing radiance"] = {
    name : "Pulverizing Radiance",
    source : [["A:TCoR", 2]],
    level : 5,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "Make ranged spell akt; 6d6+20 Radiant dmg and target gains 3 stacks of irradiated"
};



//spells without actual sources
SpellsList["dark tides"] = {
    name : "Dark Tides",
	source : [["A:BS", 4]],
	level : 2,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
	range : "S:30-ft cone",
	components : "S,M",
    compMaterial : "a vial of murky water",
	duration : "Instantaneous",
    save : "Dex",
    description : "30-ft cone all crea 3d6 Cold dmg; save halves; failed creatures vulnerable to cold until end of their next turn",
    allowUpCasting : false,
};
SpellsList["nightmare's embrace"] = {
    name : "Nightmare's Embrace",
    source : [["A:BS", 4]],
	level : 3,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "Touch",
	components : "V",
    duration : "Conc, 10 min",
    save : "Wis",
    description : "One crea save or 2d6 Psychic start of their turn and stunned; Crea remake save at end of their turn",
    allowUpCasting : false,
};
SpellsList["mass despair"] = {
    name : "Mass Despair",
    source : [["A:BS", 4]],
	level : 4,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "60 ft",
	components : "V,S",
    duration : "Conc, 10 min",
    save : "Wis",
    description : "Up to 6 crea save or demoralized",
    descriptionFull : "You utter a sinister whisper of doom that worms its way into the minds of up to six creatures within range. Each target may hear a different sound according to what they believe is a hopeless scenario. All those affected must succeed on a Wisdom save or be demoralized. While in this state, they cannot gain advantage by any means, nor use inspiration. Additionally, as a part of this spell, as long as the demoralized condition is maintained, affected creatures have disadvantage on Intelligence, Wisdom and Charisma saves."
};
SpellsList["visions of doom"] = {
    name : "Visions of Doom",
    source : [["A:BS", 5]],
	level : 5,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "10 min",
    range : "Self",
	components : "V,S,M",
    duration : "Conc, 1 hr",
    compMaterial : "a crystal sphere",
    ritual : true,
    description : "After casting, choose Doomsight or Criticlal Failure",
    descriptionFull : "Once you finish casting this spell, choose one of the followng effects. Doomsight: At the DM's discretion, you witness the worst possible outcomes you could encounter by taking a specific coure of action. You can use this foretelling power a number of times equal to your spellcasting ability modifier. Critical Failure: A terrible future is revealed to you. You may replace any attack roll, saving throw or ability check made by a creature you can see with a one. This effect expires if not used during the duration of the spell."
};
SpellsList["eldritch oblation"] = {
    name : "Eldritch Oblation",
    source : [["A:BS", 5]],
	level : 8,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 hr",
    range : "Self",
	components : "V,S,M",
    duration : "Instantaneous",
    compMaterial : "one or more humanoid creatures, which the spell consumes",
    ritual : true,
    description : "Gain a Gift; can't regain a gift unless it's servitude; DM's Discretion; see desc.",
    descriptionFull : "You can sacrifice a number of creatures up to your spellcasting ability modifier. Under the discretion of the DM, you may ask for a great boon from the beyond in proportion to your sacrifice; not all souls are weighted equal. These eldritch blessings can take froms of the following. Gift of Form: You can use your action to shapechange into a creature you sacrified. You use the creature's statistics and abilities, but keep your Intelligence. Your HP is whichever is greater. Gift of Servitude: You gain a feat chosen by the DM, can cast this spell at 6th level, and this boon turns you into a Harbringer Shaman (or even Harbringer Queen depending on the value of the sacrifices). Gift of Eyes: You can now cast Foresight once per day without expending a spell slot. Gift of Blood: You gain half your current max HP as temp. HP after every long rest, one fourth after every short rest. These HP do not stack after a rest, the max you can have is half of your max HP. These boons are just examples. You cannot gain the benefits of a boon twice unless it's servitude. After casting this spell, you gain an unexplainable affliction; bad luck, forgetting loved ones, or always feeling euphoric. The DM chooses your affliction"
};
SpellsList["ariadne's mimicry"] = {
    name : "Ariadne's Mimicry",
    source : [["A:BS", 6]],
	level : 4,
    school : "Trans",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "30 ft",
	components : "V,S,M",
    compMaterial : "a splinter of wood",
    duration : "8 hr (D)",
    save : "Wis",
    description : "Save or transform crea with at least 1 HP into object; Transforms back as bns or 10 damage dealt",
    descriptionFull : "A creature that you can see within range with at least 1HP makes a Wisdom saving throw or transforms into a common object, large or smaller. A shapechanger automatically succeeds on the save. This transformation lasts for the duration or until the creature takes 10 damage. The creatures statistsics are replaced with the chosen object, but it retains it alignment and personality. You can use your bonus action to transform the creature back to its original form and have it act immediately. This creature is also unable to speak, cast spells, or take any action that requires hands or speech. Their gear also melds into the chosen object, and can't activate, use, wield, or otherwise benefit from any of its equipment. While in object form, the creature can move up to half its speed by magical means."
};
SpellsList["runo's coin throw"] = {
    name : "Runo's Coin Throw",
    source : [["A:BS", 7]],
	level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "60 ft",
	components : "S,M",
    compMaterial : "a coin which the spell consumes",
    duration : "Instantaneous",
    description : "Make ranged spell atk; 3d8 Force dmg; Choose silver, gold, or platinum coin to consume (see desc)",
    descriptionFull : "When you cast this spell, you can select the type of coin coin you want to consume; silver, gold, or platinum. All coins deal 3d8 force damage on a successful hit. A silver coin only deals damage. A gold coin deals the damage and the target must succeed on a Strength saving throw or be restrained until the end of their next turn. A platinum coin deals the damage and the target must make a Charisma saving throw or have a single nonmagical possession of your choice transported to an unreachable extraplanar space, reappearing after one minute has passed. This can be a suit of armor, weapons, a purse, etc."
};

//Overwrite the current function with this one
AmendOldToNewRace = function(oInstr, bSkipDialogAndForce) {
    // If the knownOld race doesn't exist, fix the variable
    if (CurrentRace.knownOld && !RaceList[CurrentRace.knownOld]) {
        CurrentRace.knownOld = "";
        CurrentRace.variantOld = "";
    }
    var iAskUser = 3; // No
    var oOldRace = RaceList[CurrentRace.knownOld];
    var oOldVariant = RaceSubList[CurrentRace.knownOld + "-" + CurrentRace.variantOld];
    // Check if there is a new and old race known and they aren't identical
    if (!CurrentRace.known || !CurrentRace.knownOld || CurrentRace.known === CurrentRace.knownOld) {
        // Show a message for how this type of race works
        if (bSkipDialogAndForce === undefined && !CurrentRace.knownOld) {
            app.alert({
                nIcon : 3, // Status
                cTitle : "Tip for using the " + CurrentRace.name + " race",
                cMsg : "The " + CurrentRace.name + " race has the option to use some specific traits from another race, its 'base race'. To use this option, first select a race as normal, and then change it to " + CurrentRace.name + ". If you do that, you will be prompted wheter or not you want to use the race you had selected first as the base race." + (oInstr.message ? "\n\n" + oInstr.message : "")
            })
        }
    } else if (bSkipDialogAndForce === undefined) {
        // Ask the user if they want to use the previous race as a base for the new race
        var sOldRaceName = oOldVariant && oOldVariant.name ? oOldVariant.name : oOldRace.name;
        iAskUser = app.alert({
            nIcon : 2, // Question
            nType : 2, // Yes (return = 4), No (return = 3)
            cTitle : "Use traits from " + sOldRaceName + " for " + CurrentRace.name,
            cMsg : "The " + CurrentRace.name + " race has the option to use some specific traits from another race. As you had previously selected " + sOldRaceName + " as the race, would you want to use its features?\n\n" + toUni("Press 'Yes' to use traits from " + sOldRaceName + " or\npress 'No' to use the default traits for " + CurrentRace.name + ".") + (oInstr.message ? "\n\n" + oInstr.message : "")
        });
        CurrentVars.oldRaceAmendRemember = iAskUser === 4;
        SetStringifieds("vars");
    } else if (bSkipDialogAndForce) {
        iAskUser = 4; // Yes
    }
    if (iAskUser === 4) { // Use the traits fromt he previous race
        // First make the base race combined object
        var oBaseRace = newObj(oOldRace);
        if (oOldVariant) {
            oOldVariant = newObj(oOldVariant);
            for (var prop in oOldVariant) {
                oBaseRace[prop] = oOldVariant[prop];
            }
            // --- backwards compatibility --- //
            // if an old attribute exists in the racial variant, but the RaceList object uses the new attribute name, make sure the variant's version is used
            var backwardsAttr = [["improvements", "scorestxt"], ["armor", "armorProfs"], ["addarmor", "armorAdd"], ["weaponprofs", "weaponProfs"], ["weapons", "weaponsAdd"]];
            for (var i = 0; i < backwardsAttr.length; i++) {
                var aBW = backwardsAttr[i];
                if (oOldVariant[aBW[0]] && oOldVariant[aBW[1]] == undefined && oBaseRace[aBW[1]]) oBaseRace[aBW[1]] = oOldVariant[aBW[0]];
            }
        }
        // Merge the source
        if (oBaseRace.source) CurrentRace.source = CurrentRace.source.concat(oBaseRace.source);
        // If the Current race doesn't have a trait set, append old race trait to the new one and exclude the name
        if(!CurrentRace.trait || CurrentRace.trait === undefined || CurrentRace.trait === "") { // Checks whether the trait wasn't set or left empty
            // Our CurrentRace.trait was undefined or not in the current race so now we create a trait for the current race
            if(!CurrentRace.trait || CurrentRace.trait === undefined) {
                CurrentRace.trait = "";
            }
            // Grab the old races trait, except for the name since this is processed later
            var oRaceTrait = oBaseRace.trait;
            // We only want the current race name
            var cRaceTraitName = CurrentRace.name;
            // This should now be our CurrentRaces name and everything from our original trait except the name
            CurrentRace.trait = cRaceTraitName + " " + oRaceTrait; 
        }
        // Merge the name in the trait
        if (oInstr.replaceNameInTrait && CurrentRace.trait && oBaseRace.name) {
            var sReplace = oInstr.replaceNameInTrait[0], sReplaceWith;
            switch (oInstr.replaceNameInTrait[1] ? oInstr.replaceNameInTrait[1].toLowerCase() : "") {
                case "replace" :
                    sReplaceWith = oBaseRace.name;
                    break;
                case "prefix" :
                    sReplaceWith = oBaseRace.name.capitalize() + " " + sReplace;
                    break;
                case "insert" :
                    sReplaceWith = sReplace + " " + oBaseRace.name + (oInstr.replaceNameInTrait[2] ? " " + oInstr.replaceNameInTrait[2] : "");
                    break;
                case "suffix" :
                default :
                    sReplaceWith = sReplace + " " + oBaseRace.name;
            }
            CurrentRace.trait = CurrentRace.trait.replace(sReplace, sReplaceWith)
        }
        // Define a function to handle the merging
        var mergeAttr = function(aProp, oFrom, oTo) {
            var oBaseRef = oFrom;
            var oCurRef = oTo;
            var oCurRefCreated;
            for (var p = 0; p < aProp.length; p++) {
                var sProp = aProp[p];
                if (oBaseRef[sProp]) {
                    if (p === (aProp.length - 1)) { // last in the array
                        oCurRef[sProp] = oBaseRef[sProp];
                        return true;
                    } else if (typeof oBaseRef[sProp] === "object") {
                        // move the reference objects one step deeper
                        oBaseRef = newObj(oBaseRef[sProp]);
                        if (!oCurRef[sProp]) {
                            oCurRef[sProp] = {};
                            if (!oCurRefCreated) oCurRefCreated = aProp[0];
                        }
                        oCurRef = oCurRef[sProp];
                    }
                } else {
                    // This (sub)property doesn't exist, so skip this whole entry in the gainTraits array, but first delete any stuff we created from the CurrentRace as its an empty object
                    if (oCurRefCreated && CurrentRace[oCurRefCreated]) {
                        var toClean = CleanObject(CurrentRace[oCurRefCreated]);
                        if (!ObjLength(CurrentRace[oCurRefCreated])) delete CurrentRace[oCurRefCreated];
                    }
                    return false;
                }
            }
        }
        // Now have the CurrenRace object inheret the traits as needed
        for (var i = 0; i < oInstr.gainTraits.length; i ++) {
            aProp = oInstr.gainTraits[i].split(".");
            if ((/^(known(Old)?|variants?(Old)?|level|name|features|trait)$/i).test(aProp[0])) continue;
            // Merge the attribute of the base race
            mergeAttr(aProp, oBaseRace, CurrentRace);
            // Merge the traits in the features, if any
            if (!oBaseRace.features) continue;
            for (var sFea in oBaseRace.features) {
                var oFea = oBaseRace.features[sFea];
                var oTemp = {
                    name : oFea.name,
                    minlevel : oFea.minlevel,
                    limfeaname : oFea.limfeaname,
                    usages : oFea.usages,
                    recovery : oFea.recovery,
                    action : oFea.action,
                    source : CurrentRace.source
                };
                if (mergeAttr(aProp, oFea, oTemp)) {
                    if (!CurrentRace.features) CurrentRace.features = {};
                    var sAttrName = sFea;
                    while (CurrentRace.features[sAttrName]) {
                        sAttrName += " bonus";
                    }
                    CurrentRace.features[sAttrName] = oTemp;
                }
            }
            if( aProp === "toNotesPage" && oBaseRace.toNotesPage && CurrentRace.toNotesPage) {
                // Concatenate the arrays
                CurrentRace.toNotesPage = CurrentRace.toNotesPage.concat(oBaseRace.toNotesPage);
            }
        }
    } else if (oInstr.defaultTraits) { // Use the defaultTraits
        for (var prop in oInstr.defaultTraits) {
            if ((/^(known(Old)?|variants?(Old)?|level|name|plural|source)$/i).test(prop)) continue;
            if (prop === "features") { // merge instead of replace
                if (!CurrentRace.features) CurrentRace.features = {};
                for (var fea in oInstr.defaultTraits.features) {
                    CurrentRace.features = oInstr.defaultTraits.features[fea];
                }
                continue;
            }
            CurrentRace[prop] = oInstr.defaultTraits[prop];
        }
    }
};