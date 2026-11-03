var iFileName = "VSoS_Companions.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// ! This section adds companionlists

// * Alchemist homunculus companion list
CompanionList["homunculus"] = {
	name : "Alchemist Homunculus",
	nameMenu : "Familiar (Homunculus)",
	source : [["VSoS", 35]],
	includeCheck : function(sCrea, objCrea, iCreaCR, bIsAL) {
		return objCrea.companion && (/familiar/i.test(objCrea.companion) || (Array.isArray(objCrea.companion) && objCrea.companion.some(function (n) { return /familiar/i.test(n) }))) ? true : false;
	},
	notes : [{
		name : "Create a construct that serves as a familiar",
		description : [
			"appearing in an unoccupied space within 10 ft",
			"It assumes a chosen form (can change at every casting): bat, cat, crab, frog (toad), hawk,",
			"lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel.",
			"It has the chosen form's statistics, but its type changes to a construct",
			"When the homunculus drops to 0 hit points, its body remains, and can be",
			"reanimate over the course of an hour."
		].join("\n   "),
		joinString : ", "
	}, {
		name : "The homunculus acts independently of me",
		description : [
			"but it always obeys my commands",
			"In combat, it rolls its own initiative and acts on its own turn.",
			"It can also take the attack action only on its turn."
		].join("\n   "),
		joinString : ", "
	}, {
		name : "While it is on the same plane of existence of me",
		description : "I can communicate with it telepathically",
		joinString : ", "
	}, {
		name : "As an action, I see/hear what it does",
		description : " (but not with my senses) until the start of my next turn",
		joinString : ""
	}, {
		name : "I can't have more than one homonculus at a time",
		description : "",
		joinString : ""
	}, {
		name : "When I cast a spell with a range of touch",
		description : [
			"my homunculus can deliver the spell",
			"It must be within 100 ft of me and it must use its reaction to deliver the spell when I cast it",
			"It acts as if it cast the spell, but it can use my modifiers for any attack rolls the spell requires"
		].join("\n   "),
		joinString : ", "
	}],
	attributesAdd : {
		header : "Homunculus",
		features : [{
			name : "Find Familiar (Homunculus)",
			description : "If dropped to 0 HP, the homunculus remains there. The homunculus must obey all commands of its master."
		}]
	},
	attributesChange: function (sCrea, objCrea) {
		if (objCrea.type.toLowerCase() != "construct") {
			objCrea.type = "Construct";
			objCrea.subtype = "";
		}
	}
}

// * Captain's Cohort companionlist
CompanionList["cohort"] = {
	name : "Cohort",
	nameMenu: "Cohort (Captain class feature)",
	nameTooltip: "the Cohort class feature",
	source: ["VSoS", 47],
	notes: [{
		name: "Following an 8 hour initiation period",
		description: ["this creature becomes its captain's cohort. A captain can have only 1 cohort at a time.",
						"\u25C6 The cohort's alignment is within 1 step of their captain's. Its personality trait and flaw are GM determined.",
						"\u25C6 Its bond is: \"I will follow my commander into any fray, and I will gladly fight by their side until my death.\"",
						"\u25C6 The cohort always obeys their captain's commands as best as they can. The cohort takes their turn immediately before or after their captain's turns each round (captain's choice). If the cohort's captain is incapacitated or absent, the cohort acts on their own.",
						"\u25C6 The cohort gains proficiency in any weapon category, armor category, or shields mentioned in its statistics. The cohort uses their captain's proficiency bonus instead of their own.",
		].join("\n"),
		joinString: ", "                    
	}],
	attributesAdd: {
		proficiencyBonusLinked: true,
		hdLinked: ["captain"],
		minlevelLinked : ["captain"],
		features: [{
			name: "Cohort",
			description: " The cohort gains hit points, hit dice, and new abilities as their captain gains Captain levels. The cohort gains an Ability Score Improvement when their captain does."
		}]
	}
}

// * Craftsman Mechanaut's Apparatus Companionlist
CompanionList["mechanaut's apparatus"] = {
	name: "Mechanaut's Apparatus",
	nameMenu: "Mechanaut's Apparatus",
	source: ["VSoS", 74],
	notes: [{
		name: "Entering and Exiting the Apparatus",
		description: desc ([
			"A creature can enter or exit the apparatus by using half its movement. While within the apparatus, a",
			"creature has total cover from effects originating outside of it. My armor properties have no effect while I",
			"am within the apparatus. Only one Medium or Small creature can be in the apparatus at a time."
		])
	}, {
		name: "Piloting the Apparatus",
		description: desc ([
			"Any creature can pilot the apparatus by commanding it to move on its turn (no action required). When I",
			"pilot the apparatus, I can use my action to command it to take the Attack, Dash, Disengage, Hide, or Use an",
			"Object action. I can also command it to use a reaction, using my own reaction to do so. Only one creature",
			"can pilot the apparatus at a time. The pilot takes half of the amount of damage the apparatus takes. While I",
			"am outside the apparatus, I can command the apparatus to wait or follow me. While following, it moves on",
			"its turn to remain within 30 feet of me."
		])
	}, {
		name: "Remark from the Script Author",
		description: desc ([
			"The apparatus' integrated weapon attacks should be listed on the first page, instead of its companion",
			"pages. This is so that they may benefit from the automation of Masterwork weapon properties."
		])
	}]
}

// * Necromancer Undead Thrall Companion list
CompanionList["undead thrall"] = {
    name: "Undead Thrall",
    nameMenu: "Undead Thrall (Necromancer class feature)",
    nameTooltip: "the Thralls class feature",
    source: ["VSoS", 130],
    attributesAdd : {
        header : "Undead Thrall",
        attacks : [{
            name: "Slam",
            ability: 1,
            damage: [2, 8, "Bludgeoning"],
            modifiers: ["(oInt+oProf)-(Prof+Str)", "oInt"],
            range: "Melee (5 ft)",
            abilitytodamage: false,
            description: "Counts as magical"
        }, {
            name: "Bestial Weapon: Claws",
            ability: 2,
            damage: [2, 6, "Slashing"],
            range: "Melee (5 ft)",
            abilitytodamage: false,
            modifiers: ["(oInt+oProf)-(Prof+Dex)", "oInt"],
            description: "Counts as magical"
        }, {
            name: "Bestial Weapon: Teeth",
            ability: 2,
            damage: [2, 6, "Piercing"],
            range: "Melee (5 ft)",
            abilitytodamage: false,
            modifiers: ["(oInt+oProf)-(Prof+Dex)", "oInt"],
            description: "Counts as magical"
        }, {
            name: "Draconis Fundamentum",
            ability: 2,
            damage: [6, 6, ""],
            range: "15 ft cone",
            abilitytodamage: false,
            dc: true,
            modifiers: ["(oInt+oProf)-(Prof+Dex)", "oInt"],
            tooltip: "Each creature in a 15-foot cone must make a Dexterity saving throw (DC equals 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes 1d6 damage for each point of your proficiency bonus, or half as much damage on a successful one. The breath weapon's damage type is the same as the donor's breath weapon. Once you use this ability, you can't use it again until you finish a short or long rest.",
            description: "Dex save, save halves damage",
        }, {
            name: "Horns",
            ability: 1,
            damage: [2, 6, "Bludgeoning"],
            range: "Melee (5 ft)",
            abilitytodamage: false,
            modifiers: ["(oInt+oProf)-(Prof+Str)", "oInt"],
            description: "Counts as magical; if moved 10 ft in a straight line before attacking, target makes contested Str check or knocked prone",
            tooltip: "Horns are a natural weapon that you can use to make unarmed strikes. If you move in a straight line for 10 feet immediately before hitting a creature with your horns, that creature must make a Strength check contested by your Strength check. If you succeed, the creature is knocked prone."
        }, {
            name: "Prehensile Tail",
            ability: 1,
            damage: [2, 6, "Bludgeoning"],
            range: "Melee (5 ft)",
            abilitytodamage: false,
            modifiers: ["(oInt+oProf)-(Prof+Str)", "oInt"],
            description: "Counts as magical",
        },{
            name: "Tentacles",
            ability: 1,
            damage: [2, 6, "Bludgeoning"],
            range: "Melee (10 ft)",
            abilitytodamage: false,
            modifiers: ["(oInt+oProf)-(Prof+Str)", "oInt"],
            description: "Finesse, Reach; Counts as magical; may use bonus action to attempt grapple",
        }]
    },
    commoneval : function(prefix, oCrea,bAdd) {
        var aFnc = bAdd ? AddString : RemoveString;
        for(var i = 1; i <= 3; i++) {
            // * The base field name
            var baseField = prefix + "Comp.Use.Attack." + i;

            // * Range and Description as fields
            var range = baseField + ".Range";
            var description = baseField + ".Description";

            // * Range and Description as strings
            var strRange = What(range);
            var strDescription = What(description);

            if((/^\d+\s?(ft|m)/i).test(strRange) && (/melee/i).test(strRange) && !(/reach/).test(strDescription)) {
                var rNum = strRange.match(/\d+\s?(ft|m)/i);
                var unit = rNum[1];
                var curRange = parseInt(rNum[0], 10);

                Value(range, strRange.replace(/\d+\s?(ft|m)/i, (curRange + 5) + " " + unit));
                AddString(description, "Reach", "; ");
            }
            if(!(/^\d+\s?(ft|m)/i).test(strRange) && (/melee/i).test(strRange) && !(/reach/).test(strDescription)) {
                Value(range, "Melee (10 ft)");
                AddString(description, "Reach", "; ");
            }
        }
    },
    commonremoveeval : function(prefix, oCrea,bAdd) {
        for(var i = 1; i <= 3; i++){
            // * The base field name
            var baseField = prefix + "Comp.Use.Attack." + i;

            // * Range and Description as fields
            var range = baseField + ".Range";
            var description = baseField + ".Description";

            // * Range and Description as strings
            var strRange = What(range);
            var strDescription = What(description);

            if((/\d+\s?(ft|m)/i).test(strRange) && (/melee/i).test(strRange) && !(/tentacles?/i).test(What(baseField + ".Weapon Selection"))) {
                var rNum = strRange.match(/\d+\s?(ft|m)/i); 
                var unit = rNum[1];
                var curRange = parseInt(rNum[0], 10);

                Value(range, strRange.replace(/\d+\s?(ft|m)/i, Math.max(curRange - 5, 5) + " " + unit));
                Value(description, strDescription.replace(/(,|;)? ?reach/i, ''));
            }
        }
    },
    attributesChange : function(sCrea, objCrea) {
        if (objCrea.type.toLowerCase().indexOf("undead") !== -1) {
			objCrea.type = "Undead";
			objCrea.subtype = "";
		}
    },
    eval: function(prefix, lvl){
        AddString(prefix + 'Cnote.Left', "\u25C6 Animate Thralls: I can spend 10 uninterrupted minutes performing a ritual with a spellcasting focus or component pouch to raise the remains of 1 or more Small or Medium humanoids within 30 feet of me into Undead thralls. I maintain control over my thralls indefinitely. Create thralls through the companion pages.");
        AddString(prefix + 'Cnote.Left', "\n\u25C6 Commanding Thralls: I can mentally control all my thralls while I am conscious without using any actions. If I am unconscious, my thralls will move to protect my body from harm but will not attack. In combat, my thralls take their turns immediately before or after my turn (my choice). All my thralls collectively share 1 reaction and bonus action, which a single thrall can use each round. Thralls use my spell attack modifier to make their attacks.");
        AddString(prefix + 'Cnote.Left', "\n\u25C6 Maximum Thralls : As I gain levels in this class, my Thrall CR Total increases. The combined CR of all my thralls cannot exceed my Thrall CR Total, and the total number of thralls under my control cannot exceed my proficiency bonus. At any time, I can sever my connection to 1 or more thralls, releasing them. Corporeal undead crumple into a heap and incorporeal undead flee to the Ethereal Plane.");
        AddString(prefix + 'Cnote.Left', "\n\u25C6 Animate Dead: If I know the Animate Dead spell, I can cast it as an action instead of a minute. All Undead I create using spells or other magic count as my thralls and can be commanded as such. If my new thralls granted to me by a spell cause me to exceed my Thrall CR Total or total number of thralls, I can immediately sever my connection to any number of my existing thralls to stay within my limits. My thralls can never command or create other Undead. I cannot reanimate undead that have been reduced to 0 hit points.");
        Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
        Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
    },
    removeeval: function(prefix, lvl){
        RemoveString(prefix + 'Cnote.Left', "\u25C6 Animatee Thralls: I can spend 10 uninterrupted minutes performing a ritual with a spellcasting focus or component pouch to raise the remains of 1 or more Small or Medium humanoids within 30 feet of me into Undead thralls. I maintain control over my thralls indefinitely. Create thralls through the companion pages.");
        RemoveString(prefix + 'Cnote.Left', "\n\u25C6 Commanding Thralls: I can mentally control all my thralls while I am conscious without using any actions. If I am unconscious, my thralls will move to protect my body from harm but will not attack. In combat, my thralls take their turns immediately before or after my turn (my choice). All my thralls collectively share 1 reaction and bonus action, which a single thrall can use each round. Thralls use my spell attack modifier to make their attacks.");
        RemoveString(prefix + 'Cnote.Left', "\n\u25C6 Maximum Thralls : As I gain levels in this class, my Thrall CR Total increases. The combined CR of all my thralls cannot exceed my Thrall CR Total, and the total number of thralls under my control cannot exceed my proficiency bonus. At any time, I can sever my connection to 1 or more thralls, releasing them. Corporeal undead crumple into a heap and incorporeal undead flee to the Ethereal Plane.");
        RemoveString(prefix + 'Cnote.Left', "\n\u25C6 Animate Dead: If I know the Animate Dead spell, I can cast it as an action instead of a minute. All Undead I create using spells or other magic count as my thralls and can be commanded as such. If my new thralls granted to me by a spell cause me to exceed my Thrall CR Total or total number of thralls, I can immediately sever my connection to any number of my existing thralls to stay within my limits. My thralls can never command or create other Undead. I cannot reanimate undead that have been reduced to 0 hit points.");
    }
}

// * Companion list for House of Bishops feature
CompanionList["mystical companion"] = {
	name : "Mystical Companion",
    nameTooltip : "for Mystical Companion",
    nameOrigin : "7th level Warmage House of Bishops Feature",
	nameMenu : "Familiar (Warmage House of Bishops)",
	source : [["VSoS", 166]],
	includeCheck : function(sCrea, objCrea, iCreaCR) { //only imp, pseudodragon, quasit, or sprite
		return /^(imp|pseudodragon|quasit|sprite)$/i.test(sCrea);
	},
    action : CompanionList.familiar.action,
    attributesChange : CompanionList.familiar.attributesChange,
    attributesAdd : function() {
        if (!CompanionList.familiar.attributesAdd) return undefined;
        // Deep-copy the familiar's attributesAdd so we don't mutate the original
        var a = newObj(CompanionList.familiar.attributesAdd);
        // 2024 sheet: attributesAdd.notes[0] uses useSpellDescription
        if (a.notes && a.notes[0] && a.notes[0].useSpellDescription === "find familiar") {
            a.notes[0].name = "Mystical Companion \u2014 Find Familiar";
            a.notes[0].formatSpellDescription = function(str) {
                // Restrict to the four allowed forms and update the type-change language
                return str.replace(/an animal form I choose[^.]+\./, "the form of an Imp, Pseudodragon, Quasit, or Sprite.").replace("though it is a Celestial, Fey, or Fiend (my choice)", "though it is a Celestial, Fey, or Fiend (my choice) instead of a Beast");
            };
        }
        // Override the feature description for both editions
        if (a.features && a.features[0]) {
            a.features[0].name = "Mystical Companion";
            a.features[0].description = "If dropped to 0 HP, the familiar disappears, leaving behind no physical form. The familiar must obey all commands of its master.";
        }
        return a;
    }(),
    notes : function() {
        if (!CompanionList.familiar.notes) return undefined;
        var a = newObj(CompanionList.familiar.notes);
        a[0].description = [
            "appearing in an unoccupied space within 10 ft",
            "It assumes a chosen form (can change at every casting): imp, pseudodragon, quasit, sprite",
            "It has the chosen form's statistics, but its type changes from beast to celestial, fey, or fiend",
            "When the familiar drops to 0 hit points, it disappears, leaving behind no physical form",
            "It reappears when I cast this spell again (in a new form if so desired)"
        ].join("\n   ");
        return a;
    }()
};

// * Witch's familiar
CompanionList["witch's familiar"] = {
	name : "Witch's Familiar",
	nameMenu : "Familiar (Witch class feature)",
	nameTooltip : "the Witch class feature",
	nameOrigin : "variant of the Find Familiar 1st-level conjuration [ritual] spell",
	source : ["VSoS", 177],
    includeCheck : function(sCrea, objCrea, iCreaCRm, bIsAL) {
        return !objCrea.companion ? false : objCrea.companion.indexOf("familiar") !== -1 ? true : bIsAL && objCrea.companion.indexOf("familiar_not_al") !== -1 ? " (if DM approves)" : objCrea.companion === "witch_improved_familiar" || /^(imp|quasit)$/i.test(sCrea) ? " (level 7 Witch)" : /^(pseudodragon|sprite|homunculus)$/i.test(sCrea);
	},
	action : [
		["action", "Familiar (dismiss/reappear/attack)"],
		["action", "Use familiar's senses"],
		["bonus action", "Familiar attack"]
	],
	notes : function() {
        var a = newObj(CompanionList.familiar.notes);
        a[0].description = [
            "appearing in an unoccupied space within 10 ft",
            "It assumes a chosen form (can change at every casting): see witch's \"Familiar\" class feature",
            "I get more choices at level 7. See witch's \"Improved Familiar\" class feature",
            "It has the chosen form's statistics, but its type changes from beast to celestial, fey, or fiend",
            "When the familiar drops to 0 hit points, it disappears, leaving behind no physical form",
            "It reappears when I cast this spell again (in a new form if so desired)"
        ].join("\n   ");

        a[2].name = "The familiar acts independently of me";
        a[2].description = [
            "but it always follows my commands",
            "In combat, it takes its turn immediately before or after my turn each round (my choice)"
        ].join("\n   ");

        a[7].name = "When I cast a spell other than touch";
        a[7].description = [
            "if my familiar is within 100 ft, it can use it's reaction to deliver the spell",
            "It acts as if it cast the spell, but it can use my modifiers for any attack rolls the spell requires"	
        ].join("\n   ");

        a.push({
            name : "Improved Familiar (Witch 7, VSoS 177)",
			description : "My familiar's attacks count as magical for the purpose of overcoming resistances and immunities",
			joinString : "\n   ",
			minlevel : 7,
			eval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					if (!What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")) continue;
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					if (!/(,|;)? ?counts as magical/i.test(What(sDescrFld))) {
						AddString(sDescrFld, "Counts as magical", "; ");
					};
				}
			},
			removeeval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					var sDescr = What(sDescrFld);
					var rCaM = /(,|;)? ?counts as magical/i;
					if (rCaM.test(sDescr)) Value(sDescrFld, sDescr.replace(rCaM, ''));
				}
			}
        });
        return a;
	}(),
	attributesAdd : {
		header : "Familiar",
		minlevelLinked : ["witch"],
		features : [{
			name : "Witch's Familiar",
			description : "If dropped to 0 HP, the familiar disappears, leaving behind no physical form. The familiar must obey all commmands of its master."
		}]
	},
	attributesChange : function(sCrea, objCrea) {
		if (objCrea.type.toLowerCase() === "beast") {
			objCrea.type = ["Celestial", "Fey", "Fiend"];
			objCrea.subtype = "";
		};
        if(!classes.known.witch) return;
		for (var i = 0; i < objCrea.attacks.length; i++) {
			var oAtk = objCrea.attacks[i];
			oAtk.useSpellMod = "witch";
			if (!oAtk.modifiers) {
				oAtk.modifiers = ["", "oProf"];
			} else {
				oAtk.modifiers[1] += "+oProf";
			}
		};
	},
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.witch) return;
			var creaHp = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 0;
			var creaName = CurrentCompRace[prefix] && CurrentCompRace[prefix].name ? CurrentCompRace[prefix].name : "the creature";
			var wtchLvl = classes.known.witch.level;
			var wtchCompHp = ((classes.known.witch.subclass.indexOf("green magic") !== -1 && wtchLvl > 2) ? 3 * wtchLvl : 2 * wtchLvl);
            var wtchfamStr = "'s normal maximum plus " + ((classes.known.witch && classes.known.witch.subclass.indexOf("green magic") !== -1 && wtchLvl > 2) ? "three times" : "twice") + " my witch level ("
			HDobj.alt.push((creaHp + wtchCompHp));
			HDobj.altStr.push(" = " + creaHp + " from " + creaName + wtchfamStr + wtchCompHp + ")");
		},
        hpForceRecalc : true,
		setAltHp : true,
	},
	changeeval : function(prefix, lvl) {
        if(!classes.known.witch) return;
		var sNameEntity = "Witch's Familiar";
		var sExplanation = "A witch's familiar adds its master's proficiency bonus (oProf) to its AC, all saving throws, and to the damage of its attacks.";
		// Add oProf to the AC, if not already present
		var sACfld = prefix + "Comp.Use.AC";
		if (lvl[0] === 0 && What(sACfld).indexOf("oProf") === -1) {
				AddToModFld(sACfld, "oProf", false, sNameEntity, sExplanation);
		}
		// Add oProf to all Saving Throws
		var sASfld = prefix + "BlueText.Comp.Use.Ability.All.ST.Bonus";
		if (lvl[0] === 0 && What(sASfld).indexOf("oProf") === -1) {
			AddToModFld(sASfld, "oProf", false, sNameEntity, sExplanation)
		}
	},
};
