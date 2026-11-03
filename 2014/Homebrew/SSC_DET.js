if (sheetVersion < 13001012) { throw "This script was made for a newer version of the sheet (v13.1.12). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com."; };
var iFileName = "SCC_DET";
RequiredSheetVersion("13.1.12");

SourceList["SSCDET"] = {
    name : "Strixhaven Curriculum of Chaos DET",
    abbreviation : "SSCDET",
    group : "Homebrew",
    date : "2024/01/23"
};

//this script adds custom magic items for our DET campaign
MagicItemsList["ember’s scarf of restrain fire"] = {
    name : "Ember’s Scarf of Restrain Fire",
    source : ["SSCDET",0],
    type : "wonderous item",
    rarity : "uncommon",
    attunement : true,
    description : "While wearing this item, any fire burning within five feet of you will not naturally spread, and will only slowly burn away when already lit. Damage taken this way is reduced by half, and the light they emit is halved too. (30ft bright and 30ft becomes 15ft bright and 15ft dim). As an action, you can choose an item within reach to remove its immunity to this scarf's effect. This fire will behave as normal even after moving away from you.",
    descriptionFull : "While wearing (and attuned) to this item, any fire burning within five feet of you will not naturally spread, and will only slowly burn away when already lit. Damage taken from these weakened fires is halved, and the light that they put it out is halved too. (Bright light 30 feet dim light 30 feet becomes bright light 15 feet dim light 15 feet, etc.). As an action, you can choose an item you’re in contact with to remove its immunity to this scarf’s effects. Fire that catches on this item will behave as usual. A fire that was within 5 feet of you that moves outside this radius also goes back to behaving as normal. ",
    action : ["action", ""],
};

FeatsList["arcane scholar"] = {
    name : "Arcane Scholar",
    source : ["SSCDET", 0],
    prerequisite : "Must be able to cast at least one spell",
    prereqeval : function(v) { return v.isSpellcaster; },
    description : "Roll a d20 and add your spellcasting ability modifier, you add a number of spells depending on what you roll. See notes for additional information.",
    toNotesPage : [{
        name : "Arcane Scholar",
        note : desc([
            "Roll a d20 and add your spellcasting ability modifier, you add a number of spells depending on what you roll according to the list below:",
            "\u2022 Nat 1: Roll a d20 and lose an amount of spells equal to the roll",
            "\u2022 2-5: Nothing",
            "\u2022 6-10: One spell",
            "\u2022 11-13: 1d4",
            "\u2022 14-16: 1d6 + spellcasting ability modifier",
            "\u2022 17: 1d8 + spellcasting ability modifier",
            "\u2022 18: 1d10 + spellcasting ability modifier",
            "\u2022 19: 1d12 + spellcasting ability modifier",
            "\u2022 20: 1d20 + spellcasting ability modifier",
            "Spells added this way does not count again the total number of spells known. If your class uses a list of spells to pick from, you instead add these spells to your list. This does not change the number of spells you are able to prepare."
            + " You can only pick spells from another class depending on what your current class is.",
            "\u2022 Cleric, Paladin, Druid and Warlock",
            "\u2022 Sorcerer, Artificers, Bards, and Wizard",
        ])
    }],
    commoneval : function(chc, spellAbility) {
		if (!chc) return;
        var newSpellList;
        var isPreparedCaster;
        var iSpellList = ["artificer", "bard", "wizard", "sorcerer"];
        var cSpellList = ["druid", "paladin", "warlock", "cleric"];
        //book can have over 20 entries, but when generating, it loads all instead of an amount. 
        //we also to be able to pick the spells that are being added 
        if((/artificer|bard|warlock|sorcerer/).test(chc)) {
            isPreparedCaster = false;
        }
        else if((/druid|paladin|wizard|cleric/).test(chc)) {
            isPreparedCaster = true;
        };
        if((/artificer|bard|wizard|sorcerer/).test(chc)) {
            newSpellList = iSpellList;
        }
        else if((/druid|paladin|warlock|cleric/).test(chc)) {
            newSpellList = cSpellList;
        };
        var bonusSpellList = CreateSpellList({'class' : newSpellList, level : [1,9]}, false, false, false)
		CurrentSpells["arcane scholar " + chc] = {
            name : "Arcane Scholar " + '(' + chc.capitalize() + ')',
            ability : spellAbility,
            list : { 'class' : newSpellList },
            known : {
                spells : 20, // give it the max spell known so people know where to click
                prepared : isPreparedCaster // this determines the presence of checkboxes and corresponding column titles
            },
            refType : "feat",
            allowUpCasting : true,
            typeList : 2,
            bonus : {
				bon1 : {
					name : "If more than 20 spells",
					spells : bonusSpellList
				},
				bon2 : {
					name : "Use this to add spells",
					spells : bonusSpellList
				},
				bon3 : {
					name : "",
					spells : bonusSpellList
				},
				bon4 : {
					name : "",
					spells : bonusSpellList
				},
				bon5 : {
					name : "",
					spells : bonusSpellList
				},
				bon6 : {
					name : "",
					spells : bonusSpellList
				},
				bon7 : {
					name : "",
					spells : bonusSpellList
				},
				bon8 : {
					name : "",
					spells : bonusSpellList
				},
				bon9 : {
					name : "",
					spells : bonusSpellList
				},
				bon10 : {
					name : "",
					spells : bonusSpellList
				},
				bon11 : {
					name : "",
					spells : bonusSpellList
				},
				bon12 : {
					name : "",
					spells : bonusSpellList
				},
				bon13 : {
					name : "",
					spells : bonusSpellList
				},
				bon14 : {
					name : "",
					spells : bonusSpellList
				},
				bon15 : {
					name : "",
					spells : bonusSpellList
				},
				bon16 : {
					name : "",
					spells : bonusSpellList
				},
				bon17 : {
					name : "",
					spells : bonusSpellList
				},
				bon18 : {
					name : "",
					spells : bonusSpellList
				},
				bon19 : {
					name : "",
					spells : bonusSpellList
				},
				bon20 : {
					name : "",
					spells : bonusSpellList
				},
			},
        };
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	commonremoveeval : function(chc) {
		if (!chc) return;
		delete CurrentSpells["arcane scholar " + chc];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
    choices : ["Cleric", "Druid", "Wizard", "Artificer", "Paladin", "Warlock", "Sorcerer", "Bard"],
    selfChoosing : function () {
        var sChoice = "";
        var aChoices = ["cleric", "druid", "wizard", "artificer", "paladin", "warlock", "sorcerer", "bard"]; // all the choices in lowercase, because class object names are lowercase as well
        for (sClass in classes.known) {
          // Check if the class is one of the choices of this feat
          if (aChoices.indexOf(sClass) !== -1) {
            // It is a match, so use this one
            sChoice = sClass;
            break; // Stop after the first match, we only want the first one
          }
        }
        // Now we return the choice if one was found, otherwise it is still an empty string
        return sChoice;
    },
    //prepared/list classes
    "cleric" : {
        description : "Add or remove a number of spells to my Cleric spell list. Spells added can also be from the druid, paladin, warlock spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 5); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    },
    "druid" : {
        description : "Add or remove a number of spells to my Druid spell list. Spells added can also be from the paladin, cleric, or warlock spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 5); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    },
    "wizard" : {
        description : "Add or remove a number of spells to my Wizard spell list. Spells added can also be from the sorcerer, artificer, or bard spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 4); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    },
    "artificer" : {
        description : "Add or remove a number of spells to my Artificer spell list. Spells added can also be from the sorcerer, bard, or wizard spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 4); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    },
    "paladin" : {
        description : "Add or remove a number of spells to my Paladin spell list. Spells added can also be from the cleric, warlock, or druid spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 6); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    },
    //known classes
    "warlock" : {
        description : "Add or remove a number of spells to my Warlock spell list. Spells added can also be from the druid, cleric, or paladin spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 6); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    },
    "sorcerer" : {
        description : "Add or remove a number of spells to my Sorcerer spell list. Spells added can also be from the bard, wizard, or artificer spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 6); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    },
    "bard" : {
        description : "Add or remove a number of spells to my Bard spell list. Spells added can also be from the sorcerer, artificer, or wizard spell lists",
        eval : function(lvl, chc) { FeatsList["arcane scholar"].commoneval(chc[1], 6); },
        removeeval : function(lvl, chc) { FeatsList["arcane scholar"].commonremoveeval(chc[0]); }
    }
};

SpellsList["flambe's heat missile"] = {
    name : "Flambe's Heat Missile",
    classes : ["sorcerer", "wizard"],
    source : [["SSCDET", 0]],
    level : 1,
    school : "Evoc",
    time : "1 a",
    range : "120 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "3+1/SL dart hit crea(s); 1d4+1 fire dmg on next and subsequent turns; action to put out, or unconscious",
    descriptionFull : "You create three flaming darts of magical force. Each dart hits a creature of your choice that you can see within range, and sparks a fire on them. The darts all strike simultaneously and you can direct them to hit one creature or several. Any effect that would cause Magic Missile to fail to hit causes this spell to miss too. At the start of the target's next turn, the target takes 1d4 + 1 fire damage for each dart that hit it, and 1d4 + 1 damage every turn after that, until and unless the target or another creature uses its action to put out the fire, or until the target is knocked unconscious."
    + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
};