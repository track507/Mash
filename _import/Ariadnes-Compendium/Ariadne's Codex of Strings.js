if (sheetVersion < 13001012) { throw "This script was made for a newer version of the sheet (v13.1.12). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com."; };
var iFileName = "Ariadne's_CoS";
RequiredSheetVersion("13.1.12");

//this is a general source
SourceList["A:CoS"] = {
    name : "Ariadne's: Codex of Strings",
    abbreviation : "A:CoS",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
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
	time : "1 a",
    range : "90 ft",
	components : "V,S",
    duration : "Conc, 1 min",
    save : "Con",
    description : "30ft wide, 10ft tall cylinder; all crea 12d6 Necrotic dmg; save halves; see desc.",
    descriptionFull : "Choose a 30 ft radius surface you can see within range. All creatures that are within 10 ft high of the surface must make a Constitution saving throw taking 12d6 Necrotic damage, or half as much on a save. A creature must make a save when it enters the spells area for the first time or ends its turn there. Nonmagical plants with and die, while magical plants receive double damage. All creatures damaged by this spell at least twice must make a Wisdom saving throw or become demoralized. A demoralized creature has its speed reduced to 0 and falls to its knees in absolute despair."
};
SpellsList["thunderous crimson"] = {
    name : "Thunderous Crimson",
    source : [["A:TIP", 2]],
	level : 1,
    school : "Evoc",
	time : "1 a",
    range : "S:30-ft cone",
	components : "V,S",
    duration : "Instantaneous",
    save : "Dex",
    description : "4d4+2d4/SL Lightning dmg, dazzled until end of their next turn; save no dmg, not dazzled",
    descriptionFull : "You summon a wave of crackling red lightning that travels in a 30 foot cone in front of you. Each crea in that area must succeed a Dexterity save or suffer 4d4 lightning damage and be dazzled until the end of their next turn" + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot about 1st level."
};

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
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneoous",
    description : "Make ranged spell akt; 6d6+20 Radiant dmg and target gains 3 stacks of irradiated"
};

//The nova cluster addition
SourceList["A:TNC"] = {
    name : "Ariadne's: The Nova Cluster",
    abbreviation : "A:TNC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
SpellsList["astrologist's reading"] = {
    name : "Astrologist's Reading",
    source : [["A:TNC", 10]],
    level : 1,
    school : "Div",
    time : "30 sec", //this might cause issues as normally there aren't spells with a casting time of 'seconds'
    timeFull : "This spell has a casting time of 30 seconds",
    range: "10 ft",
    components : "S",
    duration : "Instantaneous",
    ritual : true,
    description : "Spellcasting abilitiy check vs. 8+target crea CR/Level; Know align. and motivations",
    descriptionFull : "Make a spellcasting ability check with the DC being 8 + the targets CR or Level. On a success, you know the target's current alignment, and may also glimpse into its current motivation. Unless they see you and are familiar with the spell, the target is not aware of your reading."
};
SpellsList["starfire"] = {
    name : "Starfire",
    source : [["A:TNC", 10]],
    level : 3,
    school : "Evoc",
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
    time : "1 a",
    range : "S:30-ft line",
    components : "V,M",
    compMaterial : "a small doll, a crush button worth at least 1cp",
    duration : "1 rnd", //6 seconds is one round, avoid conflicts within the sheet
    save : "Str",
    description : "All crea within 10ft 6d6 Force dmg, vanish; +6d6 Force dmg start of your next turn, transported into astral sea",
    descriptionFull : "You conjure a cannonball-sized gravitational orb. This orb travels 30 ft in a straight line, and any creatures within 10ft of the orb must make Strength save or take 6d6 Force damage and be absorbed into the orb. Creatures absorbed by the orb are transported to a demiplane where any effects from outside the demiplane cannot effect the creatures inside. A creature can communicate through the orb using magical means. A creature can teleport away or use its action to make an Strength (Athletics) check to escape. The creature appears 5 ft outside the orb on a success. Any creatures left inside the orb at the start of your next turn, they take an additional 6d6 Force damage and instantly teleported to a random location in the Astral Sea"
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
    armorOptions : {
        regExpSearch : /^(?=.*astral)(?=.*suit).*$/i,
		name : "Astral Suit",
        source : [["A:TNC", 7]],
        type : "medium",
        ac : 15,
        stealthdis : true,
		weight : 40
    }
};
MagicItemsList["baldric of gravity"] = {
    name : "Baldric of Gravity",
    source : [["A:TNC", 15]],
    type : "wonderous item",
    rarity : "rare",
    attunement : true,
    description : "While you wear this belt, gravity pulls you towards the surface you're standing on. Whenever you switch your gravity to a new surface, you must succeed on a DC 12 Dexterity (Acrobatics) check. Otherwise, you fall prone at the point where you attempted to switch gravity.",
};
MagicItemsList["contrabandist's bracer"] = {
    name : "Contrabandist's Bracer",
    source : [["A:TNC", 16]],
    type : "wonderous item",
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
    description : "For the next hour after consuming this capsule, you auto-succed all Wisdom (History) checks within the last year, advantage on Intelligence-based skill checks and saving throws, and a 1d12 bonus to Dexterity saving throws and initiative rolls. After an hour, you take a level of exhaustion. You ignore exhaustion if you consume more capsules."
};
MagicItemsList["lex-i prototype"] = {
    name : "Lex-I Prototype",
    source : [["A:TNC", 16]],
    type : "artifact",
    rarity : "wondrous item",
    attunement : true,
    prerequisite : "Must amputate your right arm and must use 'Eminent Wisp' to attune, select 'yes' at the bottom if you have",
    prereqeveal : function(v) {
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
        source : [["A:TNC", 16]],
        ability : 2,
        type : "Magic Item",
        abilitytodamage : false,
        damage : [16,8,"force"],
        range : "Ranged, 30ft",
        description : "Ranged 30ft long, 5ft wide beam; Special",
        special : true,
        isMagicWeapon : false, //prevents attack calculations 
        isNotWeapon : true,
        dc : true
    }]
};
var eminent_wisp_toNotes = [
    "A creature may use its bonus action to consume an Eminent Wisp. A creature non-native to the Nova Cluster must succeed on a DC 20 Consitution saving throw or take 10d6 force damage. Once a creature fails this saving throw, it cannot attempt to commune with an Eminent Wisp for the next 24 hours. On success, they suffer only 5d6 force damage and become aligned with the Eminent Wisp for 24 hours.",
    "An aligned creature gains a single level in their main class and an additional attunement slot for the duration. In addition, they can use the Wisp's power to recover a single class feature of 5th level or lower or a single spell slot of up to 3rd level. The Wisp isn't consumed this way, but they cannot use this ability again until they finish a long rest.",
    "After 24 hours have passed, a creature must repeat the saving throw to align itself with the Wisp. On a faulure, they cannot align with an Eminent Wisp for the next week.",
    "If a creature successfully aligns itself with a Wisp for three days in a row, they are permanently bound to that wisp and gain its benefits permanently. They can't align with another wisp until they renounce the initial one. Upon death, the wisp will hover above the corpse, waiting to be claimed by another."
];
MagicItemsList["eminent wisp"] = {
    name : "Eminent Wisp",
    source : [["A:TNC", 19]],
    type : "treasure",
    rarity : "legendary",
    attunement : false,
    description : ""
}



//spells without actual sources
SpellsList["dark tides"] = {
    name : "Dark Tides",
	source : [["A:BS", 4]],
	level : 2,
    school : "Evoc",
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
	time : "1 a",
    range : "60 ft",
	components : "S,M",
    compMaterial : "a coin which the spell consumes",
    duration : "Instantaneous",
    description : "Make ranged spell atk; 3d8 Force dmg; Choose silver, gold, or platinum coin to consume (see desc)",
    descriptionFull : "When you cast this spell, you can select the type of coin coin you want to consume; silver, gold, or platinum. All coins deal 3d8 force damage on a successful hit. A silver coin only deals damage. A gold coin deals the damage and the target must succeed on a Strength saving throw or be restrained until the end of their next turn. A platinum coin deals the damage and the target must make a Charisma saving throw or have a single nonmagical possession of your choice transported to an unreachable extraplanar space, reappearing after one minute has passed. This can be a suit of armor, weapons, a purse, etc."
};