var iFileName = "VSoS_Creatures.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// ! This section adds creatures

// * Abbot Captain cohort
CreatureList["abbot"] = {
	name: "Abbot",
	source: ["VSoS", 54],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 15,
	hp: 11,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [13, 11, 12, 10, 14, 11],
	saves: ["", "", "", "", 4, 2],
	senses: "",
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Mace",
		source: ["SRD"],
		regExpSearch: /mace/i,
		baseWeapon: "mace",
	}, {
		name: "Light Crossbow",
		source: ["SRD"],
		regExpSearch: /light crossbow/i,
		baseWeapon: "light crossbow",
	}],
	skills: { "Medicine" : 4, "Religion" : 2 },
	actions: [{
		name: "Healing Hands",
		description: "(1/day) The abbot or 1 creature the abbot touches regains 11 (2d8 + proficiency) hit points.",
	}, {
		name: "Guiding Strike",
		description: "(bonus action, 1/day) When the abbot hits a creature with a weapon attack, the next attack roll made against this target before the end of the abbot's next turn has advantage.",
	}],
	features: [{
		name: "Divine Devotion",
		description: "The abbot can use its Healing Hands & Guiding Strike an additional time each day when the captain reaches 5th, 11th, and 17th level.",
		minlevel: 2,
	}, {
		name: "Spellcasting",
		minlevel: 6,
		description: "(DC 8+Prof+Wis) The abbot can cast the following spells, at will, using Wisdom as its spellcasting ability:"+
						"\n    At will: guidance, spare the dying"+
						"\n    1/day each: bless, lesser restoration, protection from evil and good", 
	}],
	traits: [{
		name: "Divine Strike",
		minlevel: 10,
		description: "The abbot deals an extra 1d8 radiant damage when they hit with an attack roll.",
		eval: function (prefix, lvl){
			for (var i = 1; i < 4; ++i){
				if (What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection"))
					Value(prefix + "Comp.Use.Attack." + i + ".Description", "+1d8 radiant damage");
			}
		},
		removeeval: function (prefix, lvl){
			for (var i = 1; i < 4; ++i){
				RemoveString(prefix + "Comp.Use.Attack." + i + ".Description", "+1d8 radiant damage");
			}
		}
	}, {
		name: "Merciful Light",
		minlevel: 18,
		description: "(Reaction) When a friendly creature within 30 ft of the abbot takes damage, the abbot causes that creature to regain hit points equal to 2d8 + the abbot's Wisdom modifer."
	}],
	changeeval: function(prefix, lvl){
		// update healing hands/guiding strike usages
		var uses = lvl[1] < 5 ? "1" : lvl[1] < 11 ? "2" : lvl[1] < 17 ? "3" : "4";
		var oldUses = lvl[0] < 5 ? "1" : lvl[0] < 11 ? "2" : lvl[0] < 17 ? "3" : "4"
		Value(prefix + "Comp.Use.Traits", What(prefix + "Comp.Use.Traits").replace("Healing Hands: (" + oldUses + "/day)", "Healing Hands: (" + uses + "/day)"));
		Value(prefix + "Comp.Use.Traits", What(prefix + "Comp.Use.Traits").replace("Guiding Strike: (bonus action, " + oldUses + "/day)", "Guiding Strike: (bonus action, " + uses + "/day)"));
	
		// update spellcasting
		if (lvl[0] < 14 && lvl[1] >= 14) ReplaceString(prefix + "Comp.Use.Features", "protection from evil and good, death ward, revivify, speak with dead", undefined, "protection from evil and good", false);
		else if (lvl[0] >=14 && lvl[1] < 14) RemoveString(prefix + "Comp.Use.Features", ", death ward, revivify, speak with dead", false);
	},
	eval: function(prefix, lvl){       
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
	
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add equipment
		var added = 0;
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
				switch (added) {
					case 0:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Chain Shirt");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "20");
						break;
					case 1:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Shield");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "6");
						break;
					case 2:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Mace");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "4");
						break;
					case 3:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Light Crossbow");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "5");
						break;
				}
				added++;
				if (added == 4) break;
			}
		}
	},
}
	
// * Berserker Captain cohort
CreatureList["berserker"] = {
	name: "Berserker",
	source: ["VSoS", 55],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 12,
	hp: 13,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [14, 14, 14, 9, 10, 9],
	saves: [4, "", 4, "", "", ""],
	senses: "",
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Greataxe",
		source: ["SRD"],
		regExpSearch: /greataxe/i,
		baseWeapon: "greataxe",
	}, {
		name: "Handaxe",
		source: ["SRD"],
		regExpSearch: /handaxe/i,
		baseWeapon: "handaxe",
	}],
	skills: { "Athletics" : 4, "Survival" : 2 },
	actions: [{
		name: "Retaliation",
		description: "(reaction, 3/day) After being hit by a melee attack, the berserker can make 1 melee weapon attack against the attacker.",
		minlevel: 10,
	}],
	features: [{
		name: "Unarmored Defense",
		description: "AC gains Constitution modifier when wearing no armor and wielding no shield.",
		addMod: [{ type: "", field: "Comp.Use.AC", mod: "Con", text: "While the berserker is wearing no armor and wielding no shield, its AC includes its Constitution modifier."}]
	},{
		name: "Reckless",
		description: "The berserker can gain adv. on all melee weapon attacks that turn, but attack rolls against it have adv. until the start of its next turn.",
		minlevel: 2,
	}, {
		name: "Relentless",
		minlevel: 6,
		description: "(1/day) If the berserker is reduced to 0 hit points but not killed outright, it drops to 1 hit point instead."
	}],
	traits: [{
		name: "Critical Rush",
		minlevel: 14,
		description: "Once per turn, when the berserker scores a critical hit, it can move up to its movement speed and make a melee weapon attack with advantage."
	}, {
		name: "Primal Resolve",
		minlevel: 18,
		description: "When the berserker has half its hit points or fewer, it has resistance to bludgeoning, piercing, or slashing damage from nonmagical attacks."
	}],
	eval: function(prefix, lvl){       
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
	
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add equipment
		var added = 0;
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
				switch (added) {
					case 0:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Greataxe");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "7");
						break;
					case 1:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Handaxe");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "2");
						break;
				}
				added++;
				if (added == 2) break;
			}
		}
	},
}
	
// * Champion Captain cohort
CreatureList["champion"] = {
	name: "Champion",
	source: ["VSoS", 56],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 16,
	hp: 11,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [14, 11, 13, 11, 12, 9],
	saves: [4, "", 3, "", "", ""],
	senses: "",
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Longsword",
		source: ["SRD"],
		regExpSearch: /longsword/i,
		baseWeapon: "longsword",
	}, {
		name: "Javelin",
		source: ["SRD"],
		regExpSearch: /javelin/i,
		baseWeapon: "javelin",
	}],
	skills: { "Animal Handling" : 3, "Athletics" : 4 },
	actions: [{
		name: "Second Wind",
		description: "(bonus action, 1/short rest) The champion regains 5 hit points. This healing increases when the captain reaches certain levels: 10 hp at 6th level, 20 hp at 14th level.",
		minlevel: 2,
	}],
	features: [{
		name: "Indomitable",
		description: "(1/day) The champion can reroll a failed saving throw.",
	},{
		name: "Ability Score Increase 1",
		minlevel: 6,
		description: "The champion's Strength, Dexterity, or Constitution score increases by 2, to a max of 20."
	},{
		name: "Ability Score Increase 2",
		minlevel: 14,
		description: "The champion's Strength, Dexterity, or Constitution score increases by 2, to a max of 20."
	},{
		name: "Action Surge",
		description: "(1/short rest) The champion takes 2 actions on its turn.",
		minlevel: 18,
	}],
	traits: [ {
		name: "Martial Prowess",
		minlevel: 10,
		description: "When the champion hits with a melee weapon, the weapon deals an additional 3 (1d8) damage. When the captain reaches 18th level, the extra damage increases to 9 (2d8).",
	}],
	eval: function(prefix, lvl){       
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
	
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add equipment
		var added = 0;
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
				switch (added) {
					case 0:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Ringmail");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "40");
						break;
					case 1:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Shield");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "6");
						break;
					case 2:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Longsword");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "3");
						break;
					case 3:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Javelin");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "2");
						break;
				}
				added++;
				if (added == 4) break;
			}
		}
	},
	changeeval: function(prefix, lvl){
		// if we are downleveling past martial prowess, remove it
		if (lvl[1] < 10 && lvl[0] >= 10){       
			var str = lvl[0] >= 18 ? "+9 (2d8)" : "+3 (1d8)" ;
				for (var i = 1; i <= 3; ++i){
					var sAtkFld = prefix + "Comp.Use.Attack." + i;
					Value(sAtkFld + ".Description", What(sAtkFld + ".Description").replace("; " + str + " damage", ""));
				}
		}
		// if we have martial prowess, update it
		if (lvl[1] >= 10){
			var removestr = lvl[0] < 10 ? "" : lvl[0] < 18 ? "; +3 (1d8) damage" : "; +9 (2d8) damage"; 
			var str = lvl[1] >= 18 ? "+9 (2d8)" : "+3 (1d8)" ;
			for (var i = 1; i <= 3; ++i){
				var sAtkFld = prefix + "Comp.Use.Attack." + i;
				if (What(sAtkFld + ".Weapon Selection") && /\bmelee\b/i.test(What(sAtkFld + ".Range"))){
					if (removestr == "") Value(sAtkFld + ".Description", What(sAtkFld + ".Description") + "; " + str + " damage");
					else Value(sAtkFld + ".Description", What(sAtkFld + ".Description").replace(removestr, "; " + str + " damage"));
				}
			}
		}
	}
}
	
// * Construct Captain cohort
CreatureList["construct"] = {
	name: "Construct",
	source: ["VSoS", 56],
	size: 3,
	type: "Construct",
	companion: "cohort",
	alignment: "Any",
	ac: 17,
	hp: 13,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [14, 10, 15, 10, 10, 9],
	saves: ["", "", "", "", "", ""],
	senses: "darkivsion 60 ft",
	languages: "any 1 language, cannot speak",
	header: "Cohort",
	damage_immunities: "poison",
	condition_immunities: "charmed, exhaustion, poisoned",
	attacksAction: 1,
	attacks: [{
		name: "Slam",
		source: ["VSoS", 56],
		regExpSearch: /\bslam\b/i,
		type: "Natural",
		ability: 1,
		damage: [1,8, "bludgeoning"],
		range: "Melee (5 ft)",
		description: "",
	},{    
		name: "Death Burst",
		source: ["VSoS", 56],
		regExpSearch: /\bdeath burst\b/i,
		type: "Natural",
		ability: 1,
		damage: [2,6, "fire"],
		range: "5 ft radius",
		dc: true,
		modifiers: ["-Str+oCha", ""],
		abilitytodamage: false,
		description: "Occurs when reduced to 0 hit points; Dexterity save; half on save",        
	},{
		name: "Charged Slam",
		source: ["VSoS", 56],
		regExpSearch: /charged slam/i,
		type: "Natural",
		ability: 1,
		damage: [1,8, "bludgeoning"],
		range: "Melee (5 ft)",
		description: "+4 (1d8) lightning damage",
	}],
	features: [{
		name: "Surveillance Protocol",
		minlevel: 2,
		description: "The construct gains 60 ft blindsight. It adds the captain's level to its passive perception.",
	},{
		name: "Improved Armor 1",
		minlevel: 6,
		description: " +1 to AC",
		addMod: [{type:"", field: "Comp.Use.AC", mod: "1", text: "The construct's armor class increases by 1." }]
	},{
		name: "Improved Armor 2",
		minlevel: 14,
		description: " +1 to AC",
		addMod: [{type:"", field: "Comp.Use.AC", mod: "1", text: "The construct's armor class increases again by 1." }]
	}],
	traits: [{
		name: "Death Burst",
		description: "When the construct drops to 0 hit points, each creature within 5 feet of it must make a DC (12 or Captain's maneuver save DC) Dexterity save, taking 7 (2d6) fire damage on a failed save, or half as much on a success.",
	}, {
		name: "Charged Slam",
		minlevel: 10,
		description: "The construct's slam attack now deals an extra 4 (1d8) lightning damage on a hit.",
		eval: function(prefix, lvl){
			Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Charged Slam");
			Value(prefix + "Comp.Use.Attack.1.Description", "+4 (1d8) lightning damage");
		},
		removeeval: function(prefix, lvl){
			Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Slam");
		}
	},{
		name: "Improved Death Burst",
		minlevel: 6,
		description: "The construct's Death Burst damage increases to 21 (6d6).",
		eval: function(prefix, lvl) {
			Value(prefix + "BlueText.Comp.Use.Attack.2.Damage Die", "6d6");
		},
		removeeval: function(prefix, lvl){
			Value(prefix + "BlueText.Comp.Use.Attack.2.Damage Die", "2d6");
		}
	},{
		name: "Magic Resistance",
		description: "The construct has advantage on saves against spells and other magical effects.",
		minlevel: 10,
	},{
		name: "Unerring Strike",
		description: "Once on each of its turns, when the construct misses with a slam attack, it can reroll it.",
		minlevel: 18,
	}],
	eval: function(prefix, lvl){
		// get rid of the charged slam on selection
		Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
	
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);    
	},
	changeeval: function (prefix, lvl){
		// update passive perception bonus
		if (lvl[1] >= 2) Value(prefix + "BlueText.Comp.Use.Skills.Perc.Pass.Bonus", classes.known.captain.level);
		else Value(prefix + "BlueText.Comp.Use.Skills.Perc.Pass.Bonus", 0);
	}
}
	
// * Cultist Captain cohort
CreatureList["cultist"] = {
	name: "Cultist",
	source: ["VSoS", 57],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 12,
	hp: 11,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [11, 13, 12, 11, 9, 14],
	saves: ["", "", "", "", 1, 4],
	skills: { "Deception" : 4, "Persuasion" : 4 },
	senses: "",
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Melee Eldritch Strike",
		source: ["VSoS", 57],
		regExpSearch: /\bmelee eldritch strike\b/i,
		type: "AlwaysProf",
		ability: 6,
		damage: [1,10, "force"],
		range: "Melee (5 ft)",
		description: "",
	}, {
		name: "Ranged Eldritch Strike",
		source: ["VSoS", 57],
		regExpSearch: /\branged eldritch strike\b/i,
		type: "AlwaysProf",
		ability: 6,
		damage: [1,10, "force"],
		range: "120 ft",
		description: "",
	}],
	features: [{
		name: "Dark Devotion",
		description: "The cultist has advantage on saves against being charmed or frightened.",
	},{
		name: "Spellcasting",
		description: "(DC 8+Prof+Cha) The cultist can cast the following spells, at will, using Charisma as its spellcasting ability:"+
						"\n    At will: dancing lights, mage hand, minor illusion"+
						"\n    1/day each: charm person, detect magic", 
	}],
	traits: [{
		name: "Eldritch Pact",
		minlevel: 2,
		description: "The cultist's Eldritch strike damage increases by +1d10 when the captain reaches 5th, 11th, and 17th level",
	}, {
		name: "Spellcasting",
		minlevel: 6,
		description: "The cultist gains new spells. See features",
	},{
		name: "Sinister Curse",
		minlevel: 10,
		description: "(action, 1/day) 1 creature the cultist can see within 60 ft of it must succeed on a Wisdom save (spell DC) or be cursed for 1 minute,. While cursed, the creature has disadvantage on attack rolls and saves, and may repeat the save at the end of each of its turns to end the curse.",
	},{
		name: "Spellcasting",
		description: "The cultist gains new spells. See features",
		minlevel: 14,
	},{
		name: "Spiteful Rebuke",
		description: "(reaction) In response to being damaged by a visible creature within 60 feet of it, the cultist forces that creature to make a Dexterity save (spell DC). The creature takes 11 (2d10) fire damage, or half on save.",
		minlevel: 18,
	}],
	eval: function(prefix, lvl){
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
		
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add leather armor
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
				Value(prefix + "Comp.eqp.Gear Row " + i, "Leather Armor");
				Value(prefix + "Comp.eqp.Gear Weight " + i, "10");
				break;
			}
		}
	},
	changeeval: function (prefix, lvl){
		// update spellcasting
		var atWillRemoveStr = lvl[0] < 6 ? "illusion" : lvl[0] < 14 ? "illusion, disguise self, false life" : "illusion, disguise self, false life, darkness, spider climb";
		var perDayRemoveStr = lvl[0] < 6 ? "detect magic" : lvl[0] < 14 ? "detect magic, suggestion" : "detect magic, suggestion, fear";
		var atWillStr = lvl[1] < 6 ? "illusion" : lvl[1] < 14 ? "illusion, disguise self, false life" : "illusion, disguise self, false life, darkness, spider climb";
		var perDayStr = lvl[1] < 6 ? "detect magic" : lvl[1] < 14 ? "detect magic, suggestion" : "detect magic, suggestion, fear";
		Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(atWillRemoveStr, atWillStr));
		Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(perDayRemoveStr, perDayStr));
	
		// update eldritch strike damage
		var die = lvl[1] < 5 ? "1d10" : lvl[1] < 11 ? "2d10" : lvl[1] < 17 ? "3d10" : "4d10";
		Value(prefix + "BlueText.Comp.Use.Attack.1.Damage Die", die);
		Value(prefix + "BlueText.Comp.Use.Attack.2.Damage Die", die);
	}
}
	
// * Hunter Captain cohort
CreatureList["hunter"] = {
	name: "Hunter",
	source: ["VSoS", 58],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 14,
	hp: 11,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [10, 14, 12, 10, 14, 9],
	saves: [2, 4, "", "", "", ""],
	senses: "",
	skills: { "Perception" : 4, "Survival" : 4 },
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Scimitar",
		source: ["SRD"],
		regExpSearch: /\bscimitar\b/i,
		baseWeapon: "scimitar"
	}, {
		name: "Longbow",
		source: ["SRD"],
		regExpSearch: /\blongbow\b/i,
		baseWeapon: "longbow"
	}],
	features: [{
		name: "Keen Hearing & Sight",
		description: "The hunter has advantage on Perception checks that rely on hearing or sight.",
	},{
		name: "Vantage Point",
		minlevel: 6,
		description: "The hunter gains a climb speed equal to its walk speed.",
		eval: function(prefix, lvl){
			Value(prefix + "Comp.Use.Speed", "30 ft, climb 30 ft")
		},
		removeeval: function(prefix, lvl){
			Value(prefix + "Comp.Use.Speed", "30 ft")
		}
	}],
	traits: [{
		name: "True Shot",
		minlevel: 2,
		description: "(bonus action, 1/day) After making an attack or damage roll with a ranged weapon, the hunter can roll a d10 and add it to the total. The hunter gains +1 use of this feature when its captain reaches 5th, 11th, and 17th level.",
	}, {
		name: "Predator's Mark",
		minlevel: 10,
		description: "(bonus action, 1/day) When the hunter hits with an attack, it marks the target for 1 minute or until it loses concentration. The hunter has advantage on attack rolls against the marked target and deals an extra 1d8 damage on a hit.",
	},{
		name: "Instinctive Dodge",
		minlevel: 14,
		description: "(reaction) In response to being hit by an attack or failing a Dexterity save, the hunter can add +3 to its AC/save.",
	},{
		name: "Multiattack",
		minlevel: 18,
		description: "(3/day) The hunter makes 2 ranged weapon attacks.",
	}],
	eval: function(prefix, lvl){
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
		
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add equipment
		var added = 0;
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
				switch (added) {
					case 0:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Studded Leather");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "13");
						break;
					case 1:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Scimitar");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "3");
						break;
					case 2:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Longbow");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "2");
						break;
				}
				added++;
				if (added == 3) break;
			}
		}
	},
	changeeval: function (prefix, lvl){
		// update true shot uses
		var uses = lvl[1] < 5 ? "1" : lvl[1] < 11 ? "2" : lvl[1] < 17 ? "3" : "4";
		var oldUses = lvl[0] < 5 ? "1" : lvl[0] < 11 ? "2" : lvl[0] < 17 ? "3" : "4";
		Value(prefix + "Comp.Use.Traits", What(prefix + "Comp.Use.Traits").replace("True Shot: (bonus action, " + oldUses + "/day)", "True Shot: (bonus action, " + uses + "/day)"));
	}
}
	
// * Mage Captain cohort
CreatureList["mage"] = {
	name: "Mage",
	source: ["VSoS", 58],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 11,
	hp: 9,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [9, 12, 10, 14, 13, 12],
	saves: ["", "", "", 4, 3, ""],
	senses: "",
	skills: { "Arcana" : 4, "History" : 4 },
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Dagger",
		source: ["SRD"],
		regExpSearch: /\bdagger\b/i,
		baseWeapon: "dagger"
	}, {
		name: "Arcane Arrow",
		source: ["VSoS", 58],
		regExpSearch: /\barcane arrow\b/i,
		type: "AlwaysProf",
		ability: 4,
		damage: [1,10, "force"],
		range: "120 ft",
		description: "",
	}, {
		name: "Elemental Burst",
		source: ["VSoS", 59],
		regExpSearch: /\barcane arrow\b/i,
		type: "AlwaysProf",
		ability: 4,
		dc: true,
		abilitytodamage: false,
		damage: [8,6, ""],
		range: "120 ft",
		description: "10 foot radius, Dexterity save; half on save",
	}],
	features: [{
		name: "Magic Resistance",
		description: "The mage has advantage on saves against spells and other magical effects.",
	},{
		name: "Spellcasting",
		description: "(DC 8+Prof+Int) The mage can cast the following spells, at will, using Intelligence as its spellcasting ability:"+
		"\n    At will: mage hand, prestidigitation"+
		"\n    1/day each: floating disk, grease, mage armor", 
	}],
	traits: [{
		name: "Arcane Apprenticeship",
		minlevel: 2,
		description: "The mage's Arcane Arrow attack gains +1d10 damage when its captain reaches 5th, 11th, and 17th level. The mage adds its Intelligence modifier to its damage roll.",
	}, {
		name: "Spellcasting",
		minlevel: 6,
		description: "The mage gains new spells. See features",
	},{
		name: "Elemental Burst",
		minlevel: 10,
		description: "(action, 1/day) The mage unleashes a 10 ft radius magical explosion that deals damage of a chosen type: acid, cold, fire, lightning, or thunder.",
		eval: function(prefix, lvl){
			Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "Elemental Burst");
		},
		removeeval: function(prefix, lvl){
			Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
		}
	},{
		name: "Spellcasting",
		minlevel: 14,
		description: "The mage gains new spells. See features",
	},{
		name: "Contingent Sphere",
		minlevel: 18,
		description: "(reaction, 1/day) In response to taking damage, the mage casts the resilent sphere spell targeting itself.",
	}],
	eval: function(prefix, lvl){
		// remove elemental burst
		Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
	
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
		
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add dagger
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
						Value(prefix + "Comp.eqp.Gear Row " + i, "Dagger");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "1");
						break
			}
		}
	},
	changeeval: function (prefix, lvl){
		// update arcane arrow damage
		var die = lvl[1] < 5 ? "1d10" : lvl[1] < 11 ? "2d10" : lvl[1] < 17 ? "3d10" : "4d10";
		Value(prefix + "BlueText.Comp.Use.Attack.2.Damage Die", die);
	
		// update spellcasting
		var atWillRemoveStr = lvl[0] < 6 ? "prestidigitation" : "prestidigitation, message";
		var perDayRemoveStr = lvl[0] < 6 ? "mage armor" : lvl[0] < 14 ? "mage armor, hold person, invisibility" : "mage armor, hold person, invisibility, dimension door, polymorph";
		var atWillStr = lvl[1] < 6 ? "prestidigitation" : "prestidigitation, message";
		var perDayStr = lvl[1] < 6 ? "mage armor" : lvl[1] < 14 ? "mage armor, hold person, invisibility" : "mage armor, hold person, invisibility, dimension door, polymorph";
		Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(atWillRemoveStr, atWillStr));
		Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(perDayRemoveStr, perDayStr));
	}
}
	
// * Scoundrel Captain cohort
CreatureList["scoundrel"] = {
	name: "Scoundrel",
	source: ["VSoS", 59],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 13,
	hp: 9,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [8, 14, 11, 13, 12, 10],
	saves: ["", 4, "", 3, "", ""],
	senses: "",
	skills: { "Acrobatics" : 4, "Perception" : 3, "Sleight of Hand": 4, "Stealth": 4 },
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Shortsword",
		source: ["SRD"],
		regExpSearch: /\bshortsword\b/i,
		baseWeapon: "shortsword"
	}, {
		name: "Shortbow",
		source: ["SRD"],
		regExpSearch: /\bshortbow\b/i,
		baseWeapon: "shortbow"
	}],
	features: [{
		name: "Sneak Attack",
		description: "Once on each of its turns, the scoundrel can add +3(1d6) damage to a finesse/ranged weapon attack if it has advantage. It doesn't need advantage if an unincapacitated ally is within ft of the target and the scoundrel doesn't have disadvantage.",
	}, {
		name: "Evasion",
		minlevel: 14,
		description: "The scoundrel's Dexterity saves vs. areas of effect negate damage on success and halve it on failure.",
	}],
	traits: [{
		name: "Rogue Training",
		minlevel: 2,
		description: "The scoundrel's Sneak Attack damage increases by +3(1d6) when its captain reaches 6th, 10th, 14th, and 18th level.",
	},{
		name: "Cunning Action",
		minlevel: 6,
		description: "(bonus action) The scoundrel takes the Dash, Disengage, or Hide action.",
	},{
		name: "Uncanny Dodge",
		minlevel: 10,
		description: "(reaction) The scoundrel halves the damage that it takes from an attack that hits it, by an attacker it can see.",
	},{
		name: "Assassinate",
		minlevel: 18,
		description: "(1/day) During its first turn in combat, the scoundrel turns a hit that it makes with a weapon attack into a critical hit.",
	}],
	eval: function(prefix, lvl){
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
		
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add equipment
		var added = 0;
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
				switch (added) {
					case 0:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Leather Armor");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "10");
						break;
					case 1:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Shortsword");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "2");
						break;
					case 2:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Shortbow");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "2");
						break;
				}
				added++;
				if (added == 3) break;
			}
		}
	},
	changeeval: function (prefix, lvl){
		// update sneak attack damage
		var die = lvl[1] < 6 ? "+3(1d6)" : lvl[1] < 10 ? "+7(2d6)" : lvl[1] < 14 ? "+10(3d6)" : lvl[1] < 18 ? "+14(4d6)" : "+17(5d6)";
		var oldDie = lvl[0] < 6 ? "+3(1d6)" : lvl[0] < 10 ? "+7(2d6)" : lvl[0] < 14 ? "+10(3d6)" : lvl[0] < 18 ? "+14(4d6)" : "+17(5d6)";
		for (var i = 1; i < 4; ++i){
			var atkFld = prefix + "Comp.Use.Attack." + i;
			if (/finesse/i.test(What(atkFld + ".Description")) || /\//.test(What(atkFld + ".Range")))
			{
				if (!/sneak attack/i.test(What(atkFld + ".Description")))
					Value(atkFld + ".Description", What(atkFld + ".Description") + "; Sneak Attack " + die + " damage");
				else
					Value(atkFld + ".Description", What(atkFld + ".Description").replace(oldDie, die));
			}
		}
	}
}
	
// * Templar Captain cohort
CreatureList["templar"] = {
	name: "Templar",
	source: ["VSoS", 60],
	size: 3,
	type: "Humanoid",
	subtype: "any race",
	companion: "cohort",
	alignment: "Any",
	ac: 16,
	hp: 11,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [14, 9, 12, 10, 10, 14],
	saves: ["", "", "", "", 2, 4],
	senses: "",
	skills: { "Athletics" : 4, "Religion" : 2 },
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Longsword",
		source: ["SRD"],
		regExpSearch: /\blongsword\b/i,
		baseWeapon: "longsword"
	}, {
		name: "Javelin",
		source: ["SRD"],
		regExpSearch: /\bjavelin\b/i,
		baseWeapon: "javelin"
	}],
	features: [{
		name: "Brave",
		description: "The templar has advantage on saves to avoid or end the frightened condition.",
	}, {
		name: "Holy Weapons",
		minlevel: 10,
		description: "The templar's weapons are magical and it has a +2 bonus to its weapon attack rolls.",
	}],
	traits: [{
		name: "Smite",
		minlevel: 2,
		description: "(bonus action, 1/day) When the templar hits with a melee weapon, the target takes an extra 9 (2d8) radiant damage. The templar gains extra uses of this feature when its captain reaches 5th, 11th, and 17th level.",
	},{
		name: "Parry",
		minlevel: 6,
		description: "(reaction) The templar adds 2 to its AC against 1 melee attack that would hit it. The templar must be able to see the attacker and wielding a melee weapon.",
	},{
		name: "Zealous Inspiration",
		minlevel: 14,
		description: "(action, 1/day) The templar and each friendly creature within 30 feet of it gain 20 temporary hit points.",
	},{
		name: "Improved Smite",
		minlevel: 18,
		description: "The extra damage of Smite increases to 18 (4d8). When the templar finishes a short rest and has no uses of Smite remaining, it regains 1 use.",
	}],
	eval: function(prefix, lvl){
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
		
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	
		// add equipment
		var added = 0;
		for (var i = 1; i <= 17; ++i) {
			if (!What(prefix + "Comp.eqp.Gear Row " + i)){
				switch (added) {
					case 0:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Chain Mail");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "55");
						break;
					case 1:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Longsword");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "3");
						break;
					case 2:
						Value(prefix + "Comp.eqp.Gear Row " + i, "Javelin");
						Value(prefix + "Comp.eqp.Gear Weight " + i, "2");
						break;
				}
				added++;
				if (added == 3) break;
			}
		}
	},
	changeeval: function (prefix, lvl){
		// update smite damage
		var die = lvl[1] < 2 ? "" : lvl[1] < 18 ? "+9(2d8)" : "+18(4d8)";
		var oldDie = lvl[0] < 2 ? "" : lvl[0] < 18 ? "+9(2d8)" : "+18(4d8)";
		for (var i = 1; i < 4; ++i){
			var atkFld = prefix + "Comp.Use.Attack." + i;
			if (/melee/i.test(What(atkFld + ".Range")))
			{
				if (die == "") RemoveString(atkFld + ".Description", "; Smite " + oldDie + " radiant damage");
				else if (!/smite/i.test(What(atkFld + ".Description")))
					Value(atkFld + ".Description", What(atkFld + ".Description") + "; Smite " + die + " radiant damage");
				else
					Value(atkFld + ".Description", What(atkFld + ".Description").replace(oldDie, die));
			}
		}
	
		// update holy weapons feature
		if (lvl[1] >= 10){
			for (var i = 1; i < 4; ++i){
				var atkFld = prefix + "Comp.Use.Attack." + i;
				if (What(atkFld + ".Weapon Selection") && !/magical/i.test(What(atkFld + ".Description"))){
					Value(atkFld + ".Description", What(atkFld + ".Description") + "; magical");
					Value(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus", What(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus") + "+2");
				}
			}
		}
		else{
			for (var i = 1; i < 4; ++i){
				var atkFld = prefix + "Comp.Use.Attack." + i;
				if (/magical/i.test(What(atkFld + ".Description"))){
					Value(atkFld + ".Description", What(atkFld + ".Description").replace("; magical", ""));
					Value(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus", What(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus").replace("+2", ""));
				}
			}
		}
	
		// update smite uses
		var uses = lvl[1] < 5 ? "1" : lvl[1] < 11 ? "2" : lvl[1] < 17 ? "3" : "4";
		var oldUses = lvl[0] < 5 ? "1" : lvl[0] < 11 ? "2" : lvl[0] < 17 ? "3" : "4";
		Value(prefix + "Comp.Use.Traits", What(prefix + "Comp.Use.Traits").replace("Smite: (bonus action, " + oldUses + "/day)", "Smite: (bonus action, " + uses + "/day)"));
	}
}
	
// * Undead Captain cohort
CreatureList["undead"] = {
	name: "Undead",
	source: ["VSoS", 61],
	size: 3,
	type: "Undead",
	companion: "cohort",
	alignment: "Any",
	ac: 9,
	hp: 13,
	hd: [2,8],
	speed: "30 ft",
	proficiencyBonus: 2,
	challengeRating: "1/4",
	scores: [15, 9, 15, 9, 9, 9],
	damage_immunities: "poison",
	condition_immunities: "charmed, exhaustion, poisoned",
	senses: "darkvision 60 ft",
	languages: "any 1 language",
	header: "Cohort",
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		source: ["VSoS", 61],
		regExpSearch: /\bbite\b/i,
		type: "Natural",
		ability: 1,
		damage: [1,6, "piercing"],
		range: "Melee (5 ft)",
		description: "",
	}],
	features: [{
		name: "Undead Fortitude",
		description: "If the undead drops to 0 hit points, it must make a Con save DC 5 + the damage taken. On success, the undead drops to 1 hit point instead. It automatically fails if the damage was radiant or from a critical hit.",
	}, {
		name: "Turn Resistance",
		minlevel: 2,
		description: "Advantage on saves against effects that turns undead.",
	}],
	traits: [{
		name: "Necrotizing Bite",
		minlevel: 6,
		description: "The undead's bite deals an extra 1d6 necrotic damage on hit.",
	},{
		name: "Regeneration",
		minlevel: 10,
		description: "The undead regains 1 hit point at the start of its turn, unless it took fire/radiant damage since the start of its last turn. The undead dies only if it starts its turn with 0 hit points and doesn't regenerate.",
	},{
		name: "Improved Necrotizing Bite",
		minlevel: 14,
		description: "The necrotic damage for the undead's bite increases to 7 (2d6), and the undead regains hit points equal to the necrotic damage on a hit.",
		eval: function(prefix, lvl){
			var atkFld = prefix + "Comp.Use.Attack.1";
			Value(atkFld + ".Description",  What(atkFld + ".Description") + "; regain hitpoints equal to necrotic damage");
		},        
		removeeval: function(prefix, lvl){
			var atkFld = prefix + "Comp.Use.Attack.1";
			RemoveString(atkFld + ".Description", "; regain hitpoints equal to necrotic damage");
		}
	},{
		name: "Undead Horde",
		minlevel: 18,
		description: "A Humanoid slain by the undead's bite attack rises 24 hours later as a zombie, unless the Humanoid is restored to life or its body is destroyed. Zombies are under the captain's control for 24 hours, refreshed if the captain casts the animate dead spell. The captain only control 6 zombies max.",
	}],
	eval: function(prefix, lvl){
		// add equipment section
		var layersArray = eval_ish(What(prefix + "Companion.Layers.Remember"));
		if (layersArray[1] == true) return;
		layersArray[1] = true;
		Value(prefix + "Companion.Layers.Remember", layersArray.toSource());
		ShowCompanionLayer(prefix);
		
		// clear equipment
		for (var i = 1; i <= 17; ++i) {
			Value(prefix + "Comp.eqp.Gear Row " + i, "");
			Value(prefix + "Comp.eqp.Gear Weight " + i, "");
		}
	},
	changeeval: function (prefix, lvl){
		// update bite extra damage
		var die = lvl[1] < 6 ? "" : lvl[1] < 14 ? "+1d6 necrotic damage" : "+7 (2d6) necrotic damage";
		var oldDie = lvl[0] < 6 ? "" : lvl[0] < 14 ? "+1d6 necrotic damage" : "+7 (2d6) necrotic damage";
		var atkFld = prefix + "Comp.Use.Attack.1";
			if (oldDie == "") Value(atkFld + ".Description",  What(atkFld + ".Description") + die);
			else Value(atkFld + ".Description", What(atkFld + ".Description").replace(oldDie, die));
	}
}

// * Bonebeast undead thrall
CreatureList["bonebeast"] = {
    name: "Bonebeast",
    source: ["VSoS", 141],
    size: 3,
    type: "Undead",
    companion: "undead thrall",
    alignment: "Unaligned",
    ac: 14,
    hp: 27,
    hd: [5, 8],
    speed: "40 ft",
    proficiencyBonus: 2,
    challengeRating: "1",
    scores: [12, 15, 13, 5, 10, 5],
    senses: "Darkvision 60 ft",
    attacksAction: 1,
    attacks : [{
        name : "Bite",
        ability: 0,
        damage: [2, 6, "Piercing"],
        range: "Melee",
        modifiers: ["oInt+oProf-Prof", "oInt"],
    }],
    damage_immunities: "poison",
    condition_immunities: "poisoned",
    languages: "All languages it knew in life & languages of its creator (can't speak)",
    traits: [{
        name: "Keen Smell",
        description: "The bonebeast has advantage on Wisdom (Perception) checks that rely on smell.",
    }, {
        name: "Pack Tactics",
        description: "The bonebeast has advantage on attack rolls agains a creature if at least one of the bonebeast's allies is within 5 feet of the creature and the ally isn't incapacitated."
    }],  
}

// * Gorger undead thrall
CreatureList["gorger"] = {
    name: "Gorger",
    source: ["VSoS", 141],
    size: 3,
    type: "Undead",
    companion: "undead thrall",
    alignment: "Unaligned",
    ac: 8,
    hp: 36,
    hd: [8, 8],
    speed: "30 ft",
    proficiencyBonus: 2,
    challengeRating: "1",
    scores: [16, 7, 10, 7, 10, 6],
    senses: "Blindsight 10 ft, Darkvision 60 ft",
    attacksAction: 1,
    attacks : [{
        name : "Bite",
        ability: 0,
        damage: [2, 8, "Piercing"],
        range: "Melee",
        modifiers: ["oInt+oProf-Prof", "oInt"],
    }],
    damage_immunities: "poison",
    condition_immunities: "charmed, exhaustion, poisoned",
    languages: "All languages it knew in life & languages of its creator (can't speak)",
    traits: [{
        name: "Echolocation",
        description: "The gorger can't use its blindsight while deafened.",
    }],  
}

// * Gravetouched Ghoul undead thrall
CreatureList["gravetouched ghoul"] = {
    name: "Gravetouched Ghoul",
    source: ["VSoS", 141],
    size: 3,
    type: "Undead",
    companion: "undead thrall",
    alignment: "Unaligned",
    ac: 12,
    hp: 63,
    hd: [14, 8],
    speed: "30 ft",
    proficiencyBonus: 2,
    challengeRating: "2",
    scores: [18, 15, 10, 9, 10, 8],
    senses: "Blindsight 60 ft",
    attacksAction: 1,
    attacks : [{
        name : "Claws",
        ability: 0,
        damage: [4, 6, "Slashing"],
        range: "Melee",
        modifiers: ["oInt+oProf-Prof", "oInt"],
    }],
    damage_immunities: "poison",
    condition_immunities: "charmed, exhaustion, poisoned",
    languages: "All languages it knew in life & languages of its creator (can't speak)",
    traits: [{
        name: "Regeneration",
        description: "The ghoul regains 5 hit points at the start of its turn. If the ghoul takes fire or radiant damage, this trait doesn't function at the start of the ghoul's next turn. The ghoul dies only if it starts its turn with 0 hit points and doesn't regenerate.",
    }], 
}

// * skeleton undead thrall
CreatureList["skeleton"] = {
    name: "Skeleton",
    source: ["VSoS", 142],
    size: 3,
    type: "Undead",
    companion: "undead thrall",
    alignment: "Unaligned",
    ac: 13,
    hp: 13,
    hd: [2, 8],
    speed: "30 ft",
    proficiencyBonus: 2,
    challengeRating: "1/4",
    scores: [10, 14, 15, 6, 8, 5],
    senses: "Darkvision 60 ft",
    attacksAction: 1,
    attacks : [{
        name : "Shortsword",
        ability: 0,
        damage: [1, 6, "Piercing"],
        range: "Melee",
        modifiers: ["oInt+oProf-Prof", "oInt"],
    }, {
        name : "Shortbow",
        ability: 0,
        damage: [1, 6, "Piercing"],
        range: "80/320 ft",
        modifiers: ["oInt+oProf-Prof", "oInt"],
    }],
    damage_vulnerabilities: "bludgeoning",
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    languages: "All languages it knew in life & languages of its creator (can't speak)",
}

// * Spirit undead thrall
CreatureList["spirit"] = {
    name: "Spirit",
    source: ["VSoS", 142],
    size: 3,
    type: "Undead",
    companion: "undead thrall",
    alignment: "Unaligned",
    ac: 15,
    hp: 7,
    hd: [2, 8],
    speed: "25 ft, fly 25 ft (hover)",
    proficiencyBonus: 2,
    challengeRating: "1/4",
    scores: [1, 14, 9, 10, 10, 11],
    senses: "Darkvision 120 ft",
    attacksAction: 1,
    attacks : [{
        name : "Grave Touch",
        ability: 0,
        damage: [1, 4, "Necrotic"],
        range: "Melee",
        description: "target's hit point maximum is reduced by amount equal to damage dealt, lasts until long rest",
        modifiers: ["oInt+oProf-Prof", "oInt"],
    }],
    damage_vulnerabilities: "radiant",
    damage_immunities: "cold, poison, necrotic",
    condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
    languages: "All languages it knew in life & languages of its creator (can't speak)",
    traits: [{
        name: "Incorporeal Movement",
        description: "The spirit can move through other creatures as if they were difficult terrain. The spirit takes 5 (1d10) force damage if it ends its turn inside an object.",
    }],
}

// * Visage undead thrall
CreatureList["visage"] = {
    name: "Visage",
    source: ["VSoS", 143],
    size: 3,
    type: "Undead",
    companion: "undead thrall",
    alignment: "Unaligned",
    ac: 17,
    hp: 40,
    hd: [9, 8],
    speed: "25 ft, fly 25 ft (hover)",
    proficiencyBonus: 2,
    challengeRating: "2",
    scores: [1, 16, 11, 10, 10, 11],
    senses: "Darkvision 120 ft",
    attacksAction: 1,
    attacks : [{
        name : "Horrify",
        ability: 0,
        damage: [5, 4, "Psychic"],
        range: "Melee",
        modifiers: ["oInt+oProf-Prof", "oInt"],
    }],
    damage_immunities: "cold, poison, necrotic",
    condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
    languages: "All languages it knew in life & languages of its creator (can't speak)",
    traits: [{
        name: "Incorporeal Movement",
        description: "The visage can move through other creatures as if they were difficult terrain. The visage takes 5 (1d10) force damage if it ends its turn inside an object.",
    }, {
    name: "Magic Resistance",
        description: "The visage has advantage on saving throws against spells and other magical effects.",
    }, {
        name: "Invisibility",
        description: "As an action, the visage can magically turn invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the visage wears or carries is invisible with it."
    }]
}

// * Zombie undead thrall
CreatureList["zombie"] = {
    name: "Zombie",
    source: ["VSoS", 143],
    size: 3,
    type: "Undead",
    companion: "undead thrall",
    alignment: "Unaligned",
    ac: 8,
    hp: 22,
    hd: [3, 8],
    speed: "20 ft",
    proficiencyBonus: 2,
    challengeRating: "1/4",
    scores: [13, 6, 16, 3, 6, 5],
    senses: "Darkvision 60 ft",
    attacksAction: 1,
    attacks : [{
        name : "Slam",
        ability: 1,
        damage: [1, 6, "Bludgeoning"],
        range: "Melee",
        modifiers: ["(oInt+oProf)-(Prof+Str)", ""],
    }],
    damage_immunities: "poison",
    condition_immunities: "poisoned",
    languages: "All languages it knew in life & languages of its creator (can't speak)",
    traits: [{
        name: "Undead Fortitude",
        description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
    }]
}

CreatureList["brass dragon wyrmling"] = {
	name : "Brass Dragon Wyrmling",
	nameAlt : ["Dragon, Brass Wyrmling"],
	source : ["M", 106],
	size : 3,
	type : "Dragon",
	companion : "witch_improved_familiar",
	alignment : "Chaotic Good",
	ac : 16,
	hp : 16,
	hd : [3, 8],
	speed : "30 ft, burrow 15 ft, fly 60 ft",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [15, 10, 13, 10, 11, 13],
	saves : ["", 2, 3, "", 2, 3],
	skills : {
		"Perception" : 4,
		"Stealth" : 2
	},
	senses : "Blindsight 10 ft, darkvision 60 ft",
	passivePerception : 14,
	damage_immunities : "fire",
	languages : "Draconic",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "",
        abilitytodamage : true
	}],
};

CreatureList["death snail"] = {
	name : "Death Snail",
	source : ["VSoS", 364],
	size : 5,
	type : "Monstrosity",
	companion : "witch's familiar",
	alignment : "Neutral Evil",
	ac : 14,
	hp : 11,
	hd : [2, 4],
	speed : "10 ft, climb 10 ft",
	proficiencyBonus : 2,
	challengeRating : "1/4",
	scores : [14, 6, 16, 10, 11, 6],
	senses : "Blindsight 30 ft (Blind beyond this radius)",
	passivePerception : 10,
	attacksAction : 1,
	attacks : [{
		name : "Leech",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
        abilitytodamage : true,
		description : "+1d8 Poison dmg; DC 13 Con save or poisoned 1 min; repeat save at end of turn",
		tooltip : "The attack deals an additional 1d8 Poison damage; The target hit must succeed on a DC 13 Constitution saving throw or become poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."
	}],
};

CreatureList["flying book"] = {
	name : "Flying Book",
	source : ["VSoS", 364],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "0 ft, fly 30 ft (hover)",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [3, 15, 11, 1, 4, 1],
	senses : "Blindsight 60 ft (Blind beyond this radius)",
	passivePerception : 7,
	damage_immunities : "poison, psychic",
	damage_vulnerabilities : "fire",
	condition_immunities : "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 2,
		damage : [1, "", "bludgeoning"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Antimagic Susceptibility",
		description : "The flying book is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the flying books must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the flying book remains motionless, it is indistinguishable from a normal book.",
	}]
};

CreatureList["fright"] = {
	name : "Fright",
	source : ["VSoS", 365],
	size : 4,
	type : "Undead",
	companion : "witch_improved_familiar",
	alignment : "Chaotic Neutral",
	ac : 12,
	hp : 21,
	hd : [6, 6],
	speed : "0 ft, fly 40 ft (hover)",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [1, 14, 10, 10, 9, 14],
	senses : "Darkvision 60 ft",
	passivePerception : 9,
	languages : "Understands all languages it knew in life but can't speak",
	damage_immunities : "poison",
	damage_resistances : "acid, cold, fire, lightning, necrotic, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	condition_immunities : "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconcious",
	attacksAction : 1,
	attacks : [{
		name : "Life Drain",
		ability : 2,
		damage : [2, 8, "necrotic"],
		range : "Melee (5 ft)",
		description : "DC 12 Con Save or HP max reduced by damage taken until LR; dies if reduced to 0 max HP",
		tooltip : "The target must succeed on a DC 10 Constituion saving throw or its hit points maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0",
		abilitytodamage : false
	}],
	traits : [{
		name : "Incorporeal Movement",
		description : "The fright can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
	}]
};

CreatureList["grep"] = {
	name : "Grep",
    source : ["VSoS", 365],
    size : 5,
	type : "Monstrosity",
	companion : "witch_improved_familiar",
	alignment : "Neutral",
	ac : 15,
	hp : 19,
	hd : [6, 4],
	speed : "15 ft, fly 50 ft",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [3, 18, 13, 13, 15, 10],
	skills : {
		"Perception" : 4,
		"Sleight of Hand" : 6,
		"Stealth" : 6
	},
	senses : "Darkvision 60 ft, Adv. on Wis (Perception) checks using hearing or smell",
	passivePerception : 12,
    senses : "",
	languages : "Understands Common and Undercommon but can't speak",
	condition_immunities : "poisoned",
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
		description : "",
        abilitytodamage : true
	}],
	traits : [{
		name : "Ambusher",
		description : "The grep has advantage on attack rolls against any creature it has surprised.",
	}, {
		name : "Keen Hearing and Smell",
		description : "The grep has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
	}, {
		name : "Mimicry",
		description : "The grep can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.",
	}],
};

CreatureList["mock"] = {
	name : "Mock",
	source : ["VSoS", 366],
	size : 5,
	type : "Monstrosity",
	subtype : "Shapechanger",
	companion : "witch's familiar",
	alignment : "Neutral",
	ac : 11,
	hp : 18,
	hd : [4, 4],
	speed : "15 ft",
	proficiencyBonus : 2,
	challengeRating : "1/2",
	scores : [9, 11, 14, 4, 13, 6],
	skills : {
		"Stealth" : 5
	},
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	damage_resistances : "acid",
	condition_immunities : "prone",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "+1d6 Acid damage; Can trigger Adhesive",
        modifier : [1, ""],
        abilitytodamage : true
	}],
    calcChanges : {
        hp : function (totalHD, HDobj, prefix) {
            return [4, "The mock as a +4 bonus to HP. This is the same as 2\xD7(Prof. Bonus +  Con. Mod.)"]
        }
    },
	traits : [{
		name : "Shapechanger",
		description : "The mimic can use its action to polymorph into an object or back into its true, amorphous form. It can only take the appearance of Tiny objects and prefers the form of gold coins and jewels. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
	}, {
		name : "Adhesive (Object Form Only)",
		description : "The mimic adheres to anything that touches it. A creature which picks up the mimic can't drop it unless it succeeds a DC 9 Strength check, made with disadvantage. The mimic can only adhere to one creature at a time. The mimic has advantage on attack rolls against any creature adhered to it.",
	}],
	features : [{
		name : "False Appearance (Object Form Only)",
		description : "While the mimic remains motionless, it is indistinguishable from an ordinary object.",
	}]
};

CreatureList["moon jelly"] = {
	name : "Moon Jelly",
	source : ["VSoS", 366],
	size : 5,
	type : "Beast",
	companion : "witch's familiar",
	alignment : "Unaligned",
	ac : 11,
	hp : 1,
	hd : [1, 4],
	speed : "0 ft, swim 25 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [1, 13, 8, 2, 11, 3],
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	attacksAction : 0,
    attacks : [],
	traits : [{
		name : "Bioluminescense",
		description : "The moon jelly sheds dim light in a 10 ft radius.",
	}, {
		name : "Water Breathing",
		description : "The moon jelly can only breathe underwater.",
	}]
};

CreatureList["pet rock"] = {
	name : "Pet Rock",
	source : ["VSoS", 367],
	size : 5,
	type : "Elemental",
	companion : "witch's familiar",
	alignment : "Unaligned",
	ac : 15,
	hp : 5,
	hd : [1, 4],
	speed : "0 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [1, 1, 16, 1, 5, 1],
	passivePerception : 5,
    senses : "",
	damage_vulnerabilities : "thunder",
	damage_immunities : "necrotic, poison, psychic",
	damage_resistances : "fire, lightning, radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
	condition_immunities : "charmed, exhausted, frightened, paralyzed, petrified, poisoned, prone, unconscious",
	attacksAction : 0,
    attacks : [],
	traits : [{
		name : "Just a Rock",
		description : "The pet rock counts as an object for the purposes of spells and magical effects. Additionally, the rock cannot take actions that are not specified in its statistics.",
	}],
	features : [{
		name : "False Appearance",
		description : "The pet rock is indistinguishable from an ordinary rock with a face drawn on it.",
	}]
};

CreatureList["rag doll"] = {
	name : "Rag Doll",
	source : ["VSoS", 367],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Neutral Good",
	ac : 11,
	hp : 2,
	hd : [1, 4],
	speed : "20 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [4, 12, 10, 3, 5, 16],
	senses : "Darkvision 60 ft",
	passivePerception : 7,
	skills : {
		"Persuasion" : 3,
		"Stealth" : 3
	},
	damage_vulnerabilities : "fire",
    condition_immunities : "poisoned",
	damage_immunities : "poison, psychic; bludgeoning from nonmagical weapons",
	attacksAction : 1,
	attacks : [{
		name : "Headbutt",
		ability : 0,
		damage : [1, "", "bludgeoning"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Mimicry",
		description : "The rag doll can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 11 Wisdom (Insight) check.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the rag doll remains motionless, it is indistinguishable from a normal stuffed toy.",
	}]
};

CreatureList["tin soldier"] = {
	name : "Tin Soldier",
	source : ["VSoS", 368],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Lawful Neutral",
	ac : 14,
	hp : 7,
	hd : [2, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [7, 12, 12, 5, 10, 10],
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	skills : {
		"Perception" : 2
	},
	damage_immunities : "poison, psychic",
    condition_immunities : "poisoned",
	attacksAction : 1,
	attacks : [{
		name : "Bayonet",
		ability : 0,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}, {
		name : "Rifle (Recharge 6)",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "20/60 ft",
		description : "",
		abilitytodamage : true
	}],
	traits : [{
		name : "Formation",
		description : "The tin soldier has advantage on attack rolls when it is within 5 feet of another tin soldier.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the tin soldier remains motionless, it is indistinguishable from a normal toy.",
	}]
};

CreatureList["winter wolf pup"] = {
	name : "Winter Wolf Pup",
	source : ["VSoS", 368],
	size : 4,
	type : "Monstrosity",
	companion : "witch's familiar",
	alignment : "Neutral Evil",
	ac : 13,
	hp : 7,
	hd : [2, 6],
	speed : "45 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [5, 12, 11, 4, 12, 7],
	passivePerception : 13,
    senses : "",
	skills : {
		"Perception" : 3,
		"Stealth" : 3
	},
	damage_resistances : "cold",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : true
	}],
	traits : [{
		name : "Snow Camouflage",
		description : "The pup has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
	}],
};

CreatureList["yarn golem"] = {
	name : "Yarn Golem",
	source : ["VSoS", 368],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Chaotic Neutral",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [8, 15, 10, 1, 10, 8],
	passivePerception : 10,
	damage_resistances : "piercing",
    damage_immunities : "poison, psychic",
    condition_immunities : "poisoned",
	attacksAction : 1,
    senses : "",
	attacks : [{
		name : "Tangle",
		ability : 2,
		damage : [0, "", ""],
		range : "Melee (5 ft)",
		description : "Medium or smaller target is restrained (escape DC 12)",
		abilitytodamage : false,
	}],
	traits : [{
		name : "Mutable Form",
		description : "Whenever a spell or effect would alter the golem's form, the effect works as normal, except that the new form is always made out of a tangle of yarn.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the golem remains motionless, it is indistinguishable from a normal ball of yarn.",
	}]
};
