var iFileName = "Ariadne's:Better_Spellbook";
RequiredSheetVersion("13.1.13");

//The better spellbook v1.0 addition
SourceList["A:BS"] = {
    name : "Ariadne's: Better Spellbook V1.0",
    abbreviation : "A:BS",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};

/*

    ANY SPELLS THAT ARE ON OTHER PDFS OR COMPENDIUMS WILL BE LISTED HERE AND COMMENTED OUT TO PREVENT OVERLAPPING SPELLS

    This is a backburner project. These spells are mostly from released PDF's and posts, but some are not in the corresponding PDF's or posts.

*/

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
    description : "After casting, choose Doomsight or Critical Failure; see B.",
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
    description : "Gain a Gift; can't regain a gift unless it's servitude; DM's Discretion; see B.",
    descriptionFull : "You can sacrifice a number of creatures up to your spellcasting ability modifier. Under the discretion of the DM, you may ask for a great boon from the beyond in proportion to your sacrifice; not all souls are weighted equal. These eldritch blessings can take froms of the following. Gift of Form: You can use your action to shapechange into a creature you sacrified. You use the creature's statistics and abilities, but keep your Intelligence. Your HP is whichever is greater. Gift of Servitude: You gain a feat chosen by the DM, can cast this spell at 6th level, and this boon turns you into a Harbringer Shaman (or even Harbringer Queen depending on the value of the sacrifices). Gift of Eyes: You can now cast Foresight once per day without expending a spell slot. Gift of Blood: You gain half your current max HP as temp. HP after every long rest, one fourth after every short rest. These HP do not stack after a rest, the max you can have is half of your max HP. These boons are just examples. You cannot gain the benefits of a boon twice unless it's servitude. After casting this spell, you gain an unexplainable affliction; bad luck, forgetting loved ones, or always feeling euphoric. The DM chooses your affliction"
};
if(!SpellsList["thunderous crimson"]) {
    SpellsList["thunderous crimson"] = {
        name : "Thunderous Crimson",
        source : [["A:BS", 6]],
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
}
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
if(!SpellsList["death and despair"]) {
    SpellsList["death and despair"] = {
        name : "Death and Despair",
        source : [["A:BS", 6]],
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
}
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
    description : "Make ranged spell atk; 3d8 Force dmg; Choose silver, gold, or platinum coin to consume; see B.",
    descriptionFull : "When you cast this spell, you can select the type of coin coin you want to consume; silver, gold, or platinum. All coins deal 3d8 force damage on a successful hit. A silver coin only deals damage. A gold coin deals the damage and the target must succeed on a Strength saving throw or be restrained until the end of their next turn. A platinum coin deals the damage and the target must make a Charisma saving throw or have a single nonmagical possession of your choice transported to an unreachable extraplanar space, reappearing after one minute has passed. This can be a suit of armor, weapons, a purse, etc."
};
SpellsList["crystal shards"] = {
    name : "Crystal Shards",
    source : [["A:BS", 7]],
	level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "90 ft",
	components : "V,S,M",
    compMaterial : "a starshard",
    duration : "Instantaneous",
    save : "Dex",
    description : "20ft rad; Each crea save or 1d6 pierce dmg and irradiated for 1d4+1 turns; see B.",
    descriptionFull : "Each creature in a 20 ft radius sphere centered on a point within range must make a Dexterity saving throw or take 1d6 piercing damage and be irradiated for 1d4+1 turns. Irradiated creatures take an additional 1d6 force damage whenever they are affected by a spell or magical effect."
};
SpellsList["fallow's theorem"] = {
    name : "Fallow's Theorem",
    source : [["A:BS", 7]],
	level : 1,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 bns",
    range : "Self",
	components : "V,S",
    duration : "Conc, 5 min",
    description : "See up to 5 min of consequences for a 1 action I take in next hr; Adv on seen saves; cannot be suprised",
    descriptionFull : "I summon a crystal shard of arcane divination, which I can utilize to peer into possible futures. I may envision the consequecnes of a single action I could take in the next hour, witnessing up to 5 minute's worth of likely consequences before the shard crumbles. If I witnessed any effects that would cause me to make a saving throw in my vision and decide to go through with the action, I gain advantage on the roll. Additionally, I cannot be surprised by creatures whose actions I witnessed inside the shard."
}
SpellsList["energy feedback"] = {
    name : "Energy Feedback",
    source : [["A:BS", 7]],
	level : 4,
    school : "Necro",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "Touch",
	components : "V,S,M",
    compMaterial : "a charged starshard",
    duration : "Instantaneous",
    save : "Cha",
    description : "Melee spell atk, takes 4d6+1d6/SL force and save or +4d6 force dmg; see B.",
    descriptionFull : "I make a melee spell attack against a creature within my reach. On a hit, the target takes 4d6 force dmg and must make a Charisma saving or take an additional 4d6 force damage. A spellcaster that fails this saving throw loses a 3rd level spell slot, and is unable to cast spells from a school of my choice until the end of their next turn." + AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher, my attack increased by 1d6 for each slot level above 4th. In addition, spellcasters who fail the saving throw are drained of a spell slot one level below the spell slot that was used to cast this spell."
}



SpellsList["order's judgement"] = {
    name : "Order's Judgement",
    source : [["A:BS", 8]],
    level : 0,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V",
    duration : "Instantaneous",
    description : "Save or take 1d4 radiant dmg and I know one of its dmg vulnerabilities if any",
    descriptionCantripDie : "Save or take `CD`d4 radiant dmg and I know one of its dmg vulnerabilities if any"
} 

SpellsList["pulverizing radiance"] = {
    name : "Pulverizing Radiance",
    source : [["A:BS", 8]],
    level : 5,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "Make ranged spell akt; 6d6+20 Radiant dmg and target gains 3 stacks of irradiated"
};

SpellsList["astrologist's reading"] = {
    name : "Astrologist's Reading",
    source : [["A:BS", 12]],
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
    source : [["A:BS", 12]],
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
    source : [["A:BS", 12]],
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
    source : [["A:BS", 13]],
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
    source : [["A:BS", 13]],
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
    source : [["A:BS", 13]],
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
    source : [["A:BS", 13]],
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

SpellsList["arcane cuffs"] = {
    name : "Arcane Cuffs",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 16]],
    level : 2,
    school : "Abjur",
    time : "1 a",
    range : "Touch",
    duration : "1 hr",
    components : "S,M",
    compMaterial : "an ingot of polished silver, which the spell consumes",
    description : "Crea save using its spell ability vs own save DC or cannot cast 2+1/SL level or lower spells; Restrained have Disadv; Incap. auto fail; Dur. 8hr 4/SL, 24hr 6/SL",
    descriptionFull : "A creature must succeed on a saving throw usings its own spellcasting ability and save DC. On a failed save, the creature cannot cast spells of 2nd level or lower for the duration. A Restrained creature has disadvantage on the save, and an Incapacitated creature automatically fails." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the target is unable to cast spells of the slot's level or lower. Additionally, the duration increases to 8 hours at 4th level or higher and 24 hours at 6th level or higher."
}

SpellsList["greater identify"] = {
    name : "Greater Identify",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 16]],
    level : 3,
    school : "Div",
    time : "10 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "A pearl worth at least 500 gp and an owl feather",
    description : "magic item/imbued crea/obj; learn properties, use, affecting spells, prev. 3 users and their actions, traps/malicious design, created by spell; Crea, learn 3 highest spells and last spell casted",
    descriptionFull : "I choose one magical item or magic-imbued object or creature. I learn its properties and how to use them, whether or not it requires attunement, and how many charges it has, if any. I learn the identities of its three previous users, and the most significant actions they took with it. I also learn any hidden compartments, traps, or malicious design concealed within the object. I learn if any spells are affecting the item and what they are. If the item was created by a spell, I learn which spell created it. Additionally, I decipher compatibilities and dissonances of the object with different magical auras, learning if the item would react to planar energies such as chaotic, lawful, good, and evil aura and effects. If it's a creature, I learn what spells or magical effects, if any, are currently affecting it. I also learn the three highest level spells the creature can cast, and the lasat spell it casted."
}

SpellsList["arcane rescripting"] = {
    name : "Arcane Rescripting",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 16]],
    level : 4,
    school : "Omni",
    time : "1 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "A shard of fine opal worth at least 100 gp, which the spell consumes",
    description : "I give instructions up to 30 words to a Construct; Save if unwilling, or bound to my orders for 24hrs, 7/SL a week, 9/SL permanently"
}

SpellsList["magisteal"] = {
    name : "Magisteal",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 17]],
    level : 5,
    school : "Omni",
    time : "1 rea",
    timeFull : "1 reaction when I see a creature cast a spell or magical effect",
    range : "30 ft",
    duration : "8 hr",
    components : "S,M",
    compMaterial : "the eye of a hawk",
    description : "Replicate spell/magical effect 5+1/SL or lower as if I casted it, unless it was also created by another Magisteal",
    descriptionFull : "I can save an arcane snapshot of a spell or magical effect of 5th level or lower that I witness within range. For the duration, I can consumee the snapshot to replicate the magic as if I were its source, maintaining all its original effects, damage, and DCs, if any. Once I do so, the spell ends. I cannot use this spell to save a snapshot of an effect being replicated by Magisteal. If the magic is a magical effect, it is up to the DM to decide what level the effect is. It's recommended to divide the CR of the creature creating the effect by 2, rounding up." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, I can copy a spell or magical effect if its level is less or equal to the level of spell slot used."
}

SpellsList["mantle of bodily safety"] = {
    name : "Mantle of Bodily Safety",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 17]],
    level : 5,
    school : "Abjur",
    time : "1 a",
    range : "Touch",
    duration : "Conc, 10 min",
    components : "V,S,M",
    compMaterial : "a purple diamond worth at least 300 gp",
    description : "1 Crea immune to form altering spell/effect; Crea(s) in 15ft radius adv. on saves vs. altering form spell/effect; Dur. 1hr 6+/SL",
    descriptionFull : "A creature I touch is wreathed in an ethereal cloak of protective light, rendering them completely immune to spells or magical effects that would alter their form, such as the polymorph spell or a Medusa's petrifying gaze. Creatures within 15 feet of the Creature are also aided by its magic, gaining advantage on saving throws against spells or magical effects that would alter their form." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, the maximum duration is increased to 1 hour."
}

SpellsList["confiscate"] = {
    name : "Confiscate",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 17]],
    level : 6,
    school : "Abjur",
    time : "1 a",
    range : "30 ft",
    duration : "Conc, 1 min",
    components : "S,M",
    compMaterial : "a platinum magnet",
    save : "Cha",
    description : "1 wondrous item; Crea attuned, save or interrupted until I lose conc; Break attune after 1 min, I can instant attune, unless sentient/Artifact or 9/SL; 1 bns pull 30 ft Athletics check vs my spell save DC",
    descriptionFull : "I target a wondrous item I can see within range. If a creature is attuned to it, they must succeed a Charisma saving throw or have their attunement interrupted for as long as I maintain concentration on the spell. If I concentrate for the full minute, their attunement is broken and I can choose to instantly attune to it in their stead. Sentient items or Artifacts are unaffected, unless I cast this spell using a 9th level spell slot. Additionally, while I concentrate on this spell, I can use my bonus action to magically pull the targeted item 30 feet towards me, catching it if I have a free hand to do so when it reaches me. If a creature is carrying it, it must make a Strength (Athletics) check against my spell save DC to prefvent the item from being torn from their possession."
}

SpellsList["mass modify memory"] = {
    name : "Confiscate",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 18]],
    level : 9,
    school : "Ench",
    time : "8 hr",
    range : "S:25-mi rad",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "an opalescent gem worth at least 10,000 gp",
    save : "Int",
    description : "Crea(s) Int>19 save or forget event; Gem stores forgotten memories (AC 25, 100hp, immune all but force); Contradict info allow Crea(s) save; Crea(s) disadv. on Int, Wis, Cha rolls vs my spells; See B",
    descriptionFull : "I can muddle the memories of every creature within a 25 mile radius centered on me, changing their recollection of an event they learned about or witnessed within the past month. I can choose to eliminate all memory of the event, change the details, or create a memory of another event to replace it. A modified memory doesn't affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical memory might be dismissed as a bad dream. Creatures with a 20 or higher Intelligence score can save to resist these effects, and are aware of the attempt. All stolen memories are transferred to the gem which darkens with the weight of the contained information. Creatures affected by this spell have disadvantage on Intelligence, Wisdom, and Charisma rolls to discern my intentions or resist my spells. If the creature encounters new information that contradicts the modified memory, it can attempt to save to recover them. On a failure, the creature discards it as a mistake or a lie. The gem is a magical object with 100 hp, an AC of 25, and immunity too all damage except force. If the gem is destroyed, all creatures affected by the spell recover their memory and become aware of my manipulation",
}

SpellsList["kara's neural needle"] = {
    name : "Kara's Neural Needle",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 19]],
    level : 9,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    duration : "Instantaneous",
    components : "S",
    description : "Choose 1 from B. effect crea for 1 week; 12d10 psychic, save halves and no effects; No effect crea psychic immunity",
    save : "Int",
    descriptionFull : "I target the mind of a creature within range with a sharp pulse of psychci energy, attempting to destroy its mind. The creature must make an Intelligence saving throw and suffer deep neural damage. On a failure, they take 12d10 psychic damage. On a success, they take half damage and are not affects by the spell's other effects. I can choose one of the following to afflictions to affect the creature for the next week. Creatures with psychic immunity are unaffected by this spell." + "\n    " + toUni("Paraplegia") + ":  Basic motor skills become incredibly difficult. The target's walking speed is reduced to 5 feet, and have disadvantage on Dexterity checks, weapon, and unarmed attacks." + "\n    " + toUni("Time Agnosia") + ": The target's ability to track time start to break down. The target cannot sleep unless induced by medicine or magic, and they are unable to make plans that require projecting actions into the future." + "\n    " + toUni("Retrograde Amnesia") + ": A deep loss of memories affects the target's mind, making them forget their acquaintances, friends, and family. They still instinctively protect their allies, and a natural mistrust of enemies, but can be easily manipulated away from these institutions." + "\n    " + toUni("Anterograde Amnesia") + ": The target can remember its past, but has difficulty in learning new things. They are unable to recall any information learned after the casting of this spell." + "\n    " + toUni("Apathetic Depression") + ": The target loses the capability for feeling emotion, making them deeply unempathetic and cold. They have disadvantage on all Charisma checks and become deeply miserable." + "\n    " + toUni("Sensory Loss") + ": The target's senses are extremely dulled. They lose all special senses (such as darkvision or blindsense), have disadvantage on Perception checks, and cannot see, hear, or smell anything beyond 30 feet." + "\n    " + "A Greater Restoration reduces the duration of the effects by 1d4 days."
}

SpellsList["omission"] = {
    name : "Omission",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 20]],
    level : 2,
    school : "Omni",
    time : "1 a",
    range : "30 ft",
    duration : "1 hr",
    save : "Wis",
    components : "V,S",
    description : "Choose subject (person, place, or idea), not too broad/ingrained (breathing/running); 1 Crea save or cannot produce thoughts about subject",
    descriptionFull : "I target a creature within range with a disruptive psychic arcana, carried over by my words. When I cast this spell, I choose a subject to be omitted by the thought process of the creature. This subject can be a person, place, or an idea, as long as it isn't too broad or too ingrained as a basic part of the target's psyche, such as breathing or running. The creature must succeed on a Wisdom saving throw or be unable to autonomously produce any thoughs involving the chosen omission. If an event, such as hearing the name of the barred creature, brings the omission to the forefront of the affected creature's mind, the spell ends."
}

SpellsList["mindblast"] = {
    name : "Mindblast",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 20]],
    level : 2,
    school : "Evoc",
    time : "1 a",
    range : "30 ft",
    duration : "1 hr",
    save : "Int",
    components : "V,S",
    description : "Crea Int>3 save or 2d10+1d10/SL psychic dmg; Incapacitated til end of next turn; Stunned if failed by 5 or more",
    descriptionFull : "I launch a powerful burst of disruptive psychic waves at a creature within range. The target must succeed on an Intelligence saving throw or take 2d10 psychic damage and be Incapacitated until the end of their next turn. If they fail by 5 or more, they are Stunned instead. The spell has no effect on creatures with an Intelligence score lower than 3." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
}

SpellsList["blindspot"] = {
    name : "Blindspot",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 20]],
    level : 3,
    school : "Ench",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 hr",
    save : "Wis",
    components : "V,S,M",
    compMaterial : "a small vial of black oil",
    description : "Spell ability mod. Crea(s), save or be blind to 1+1/SL crea/obj < 10ft cube; Crea(s) can touch/smell/hear, all but sight",
    descriptionFull : "I target a number of creatures up to my spellcasting ability modifier with a visual enchantment, creating a blindspot in their vision for a particular thing. Each creature must succeed a Wisdom saving throw or become blind to a single object or creature of my choice that is no larger than a 10-ft cube. This can be a door, an enemy, a lever, etc. A creature is unaware of this manipulation and its vision fills the missing space with a suitably inconspicuous background. A creature affected by this spell can interact with the blindspot normally in every way except sight; it can touch, smell, and hear it even through it appears to be invisible to the creature for the duration." + AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, I can create on additional blindspot for each slot level above 3rd, up to a max of 5."
}

SpellsList["fate denial"] = {
    name : "Fate Denial",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 21]],
    level : 4,
    school : "Omni",
    time : "1 rea",
    timeFull : "1 reaction, which I take when I fail a saving throw",
    range : "Self",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "a fractal-shaped crystal",
    description : "Roll save again and  my spellcasting ability modifier to the roll; Must use the new roll",
}

SpellsList["greater darkness"] = {
    name : "Greater Darkness",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 21]],
    level : 5,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "an obsidian shard",
    description : "60-ft rad fills with darkness;  my spellcasting ability modifier Crea(s) sees through; Light 6/SL< dispelled"
}

SpellsList["distort timeline"] = {
    name : "Distort Timeline",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 21]],
    level : 7,
    school : "Omni",
    time : "1 a",
    range : "120 ft",
    duration : "1 rnd",
    components : "V,S,M",
    compMaterial : "an antique stopwatch worth at least 1000 gp",
    save : "Cha",
    description : "Create save point; Use reac. retun to save; recovers all lost resources; Cha save to resist",
    descriptionFull : "I create a magical snapshot of all that happens within 120 feet of my from the moment I cast this spell until the end of my next turn, creating a save point. During that time period, I can make all objects and willing creatures return to the state of the save point as a reaction, changing to their original position and recovering any lost resources, such as hp and spell slots. An unwilling creature can attempt to resist the reset with a successful Charisma saving throw. All creatures are aware of this change. I can choose not to return to the save point and let time continue by not using my reaction, but the spell slot is still consumed. The spell only affects things within range. If a creature or object is further than 120 feet away from me when I return to the save point, it does not change positions or state, regardless of its circumstances when I started to record the save point."
}

SpellsList["fumes of insanity"] = {
    name : "Fumes of Insanity", 
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 21]],
    level : 8,
    school : "Omni",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "a purple glass shard",
    description : "20-ft rad; Crea enter or start turn make Wis, Con, and Cha saves; See B. for fail effects",
    descriptionFull : "I create a 20-foot radius sphere of swirling, neon-colored fumes centered on a point within range. Creatures that enters the area for the first time or start their turn must make a Wisdom, Constitution, and Charisma saving throw." + "\n    " + toUni("Wisdom fail") + ": the creature is hypnotized by the swirling colors, becoming incapacitated and having their speed reduced to 0. This effect ends for an affected creature if it takes more than 15 points of damage from a single source." + "\n    " + toUni("Constitution fail") + ": the toxicity of the fumes deal 3d8 poison damage to the creature and applies the poisoned condition until they leave the cloud or succeed this saving throw on a subsequent turn." + "\n    " + toUni("Charisma fail") + ": the fumes break something inside the creature's mind, who must roll on the short-term madness table to determine the effect they suffer for the next 1d10 minutes."
}

SpellsList["oath of war"] = {
    name : "Oath of War",
    source : [["A:BS", 22]],
    level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "Self",
    components : "V,S",
    duration : "Conc, 1 min",
    description : "+5 temp hp; your next attack roll or saving throw has adv; +1 to any ability score for duration"
};

SpellsList["radiant weapon"] = {
    name : "Radiant Weapon",
    source : [["A:BS", 22]],
    level : 3,
    school : "Conj",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 bns",
    range : "Self",
    components : "V,S,M",
    compMaterial : "a holy symbol worth at least 50 gp, which the spell consumes",
    duration : "Conc, 1 hr",
    description : "Create +2 weapon I am proficient with, dealing radiant dmg; uses Cha instead of Str or Dex; see full desc",
    descriptionFull : "You conjure any weapon that you are proficient with. This weapon has a +2 to attack and damage rolls and deals radiant damage instead of its usual damage type. Additionally, you can use Charisma instead of Strength or Dexterity for the attack and damage rolls."  + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the spell no longer requires concentration."
};

SpellsList["hymn of honor"] = {
    name : "Hymn of Honor",
    regExpSearch : /\+? ?(my )?spell(casting)? (ability )?mod(ifier)?/i,
    source : [["A:BS", 22]],
    level : 4,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Conc, 1 min",
    description : "my spell mod crea in 30+10/SL ft; +15 ft speed, +2 to AC, +3 to atk and dmg rolls; action to concentrate",
    descriptionFull : "You can choose number of creatures within 30 ft equal to my spell casting ability modifier. These creatures have their speed increased by 15 ft, +2 to their AC, and gain a +3 to their attack and damage rolls, but you must use your action on each of your turns to maintain concentration." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the hymn's range increases by 10ft"
};

SpellsList["divine judgement"] = {
    name : "Divine Judgement",
    source : [["A:BS", 23]],
    level : 8,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a holy symbol",
    duration : "1 min",
    description : "Mark crea, glows 15 ft dim light; crea can't turn invisible; see full desc for additional benefits",
    descriptionFull : "You choose a creature within range and mark them with a divine symbol of your choice. This symbol sheds 15 ft of dim light and the creature can't turn invisible. At any point, you can use your bonus action to teleport to the an unoccupied space within 60 ft of the marked creature. This can be used to followed creatures through different planes. Once the spell ends, you return back to your plane of origin. Additionally when you teleport, you may use your action to make a ranged spell attack against the creature. On a hit, the creature takes 10d10 radiant damage and must succeed on a Constitution saving throw or be blinded until the end of their next turn. After using the teleportation and smite action three times, this spell ends"
};

SpellsList["barrier of gold"] = {
    name : "Barrier of Gold",
    regExpSearch : /\+? ?(my )?spell(casting)? (ability )?mod(ifier)?/i,
    source : [["A:BS", 23]],
    level : 5,
    school : "Abjur",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,,M",
    compMaterial : "a golden coin",
    duration : "1 min",
    description : "15 ft rad sphere; my spell mod crea can use rea. takes -4d8+1d8/SL dmg; hostile crea -1d4 atk roll",
    descriptionFull : "You create a 15 ft radius sphere and can choose a number of creatures equal to your spell casting ability modifier. Whenever an affected creature takes damage and is inside the barrier, they can use their reaction to reduce the damage by 4d8. In addition, hostile creatures inside the barrier must subtract 1d4 from their attack rolls." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage reduction increases by 1d8 for every level above 5th"
};