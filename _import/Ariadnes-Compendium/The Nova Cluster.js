var iFileName = "The Nova Cluster";
RequiredSheetVersion("13.1.13");

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
    description : "+force dmg to melee atk equal to  spell ability mod; Adv. grapple/shove; Disadv. grapple/shove me; Jump doubled; +10 ft walking spd",
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
MagicItemsList["quartermaster's beret"] = {
    name : "Quartermaster's Beret",
    source : [["A:TNC", 54]],
    type : "wondrous item",
    rarity : "uncommon",
    description : "I gain a +2 to Intimidation checks, +4 against creatures of chaotic alignment. Additionally, I can cast command (DC 13) once per short rest without any component materials.",
    fixedDC : 13,
    spellcastingBonus : [{
        name : "Quartermaster's Beret",
        spells : ["command"],
        selection : ["command"],
        firstCol : "oncesr"
    }]
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
    scorestxt : "Cetkar: +1 Strength , +1 Constitution;",
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
    scorestxt : "Cetkar, Quaru: +1 Strength , +1 Constitution, and +1 to Strength or Charisma;",
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
    scorestxt : "Cetkar, Quaru: +1 Strength , +1 Constitution, and +1 to Dexterity or Intelligence;",
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