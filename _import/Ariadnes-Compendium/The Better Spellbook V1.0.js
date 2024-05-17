var iFileName = "Ariadne's_Better_Spellbook";
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

    ANY SPELLS THAT ARE ON OTHER PDPFS OR COMPENDIUMS WILL BE LISTED HERE AND COMMENTED OUT TO PREVENT OVERLAPPING SPELLS

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