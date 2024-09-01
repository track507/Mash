var iFileName = "Valda's Spire of Secrets";
RequiredSheetVersion("13.2.0");

/* 

    ! Important
    *   - This script is still currently being written and is not yet complete.
    *   - I am updating this to fit the 13.2.0 version of MPMB's Character Sheet.
    *   - I will be referncing both Seaworld's version and u/Anasurimborlnnrilatas's scripts to save on time 
    
    ! NOTE
    *   - This script adds everything according to version 1.4 of Valda's Spire of Secrets
    *   - The previous script written by u/Anasurimborlnnrilatas found here https://pastebin.com/GwU8JnCM are from 2 years ago. (version unknown, but most likely 1.0)
    *   - Seaworld also made changes to the script to fix some issues with firearms
    *   - The reason for using ! and * etc is due to a VS Code extension that is used for comments
    
    TODO 
    *   - Basically everything currently since I still have school/work priorities
*/

// ! UPDATING AS OF 8/31/2024

SourceList["VSoS"]={
	name : "Valda's Spire of Secrets",
	abbreviation : "VSoS",
	abbreviationSpellsheet : "V",
	date : "2022/08/28"
};

// ! This section adds races from Valda's Spire of Secrets

// * Geppettin

RaceList["bisque geppettin"] = {
	regExpSearch : /^(?=.*bisque)(?=.*geppettin).*$/i,
	name : "Bisque geppettin",
	sortname : "Geppettin, Bisque",
	source : ["VSoS", 8],
	plural : "Bisque geppettin",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " do not age, and are mature as soon as they become sentient",
	height : " rarely break 3 feet in height",
	heightMetric : " rarely break 0,9 metres in height",
    scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	savetxt : {
		text : ["Magic can't put me to sleep"],
		immune : ["nonmagical disease"]
	},
    trait : "Bisque Geppettin (+2 and +1, or +1 to three different scores)" + desc([
        "\u2022 Construct Anatomy: Can eat/drink, but don't need to. Instead of sleep, I go inactive for 4 hrs, not unconscious, can see/hear normally. Spells and effects affecting constructs also affect me",
        "\u2022 False Appearance: While motionless, indistinguishable from an ordinary doll",
        "\u2022 Sudden Strike: Add proficiency bonus to the damage of weapon attacks on my first turn in combat",
        "\u2022 Unnerving: Proficient with Intimidation, and adv. Cha (Intimidation) rolls against a crea who hasn't seen me move"
    ]),
	skills : ["Intimidation"]
};

RaceList["marionette geppettin"] = {
	regExpSearch : /^(?=.*marionette)(?=.*geppettin).*$/i,
	name : "Marionette geppettin",
	sortname : "Geppettin, Marionette",
	source : ["VSoS", 8],
	plural : "Marionette geppettin",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " do not age, and are mature as soon as they become sentient",
	height : " rarely break 3 feet in height",
	heightMetric : " rarely break 0,9 metres in height",
    scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	savetxt : {
		text : ["Magic can't put me to sleep"],
		immune : ["nonmagical disease"]
	},
    trait : "Marionette Geppettin (+2 and +1, or +1 to three different scores)" + desc([
        "\u2022 Construct Anatomy: Can eat/drink, but don't need to. Instead of sleep, I go inactive for 4 hrs, not unconscious, can see/hear normally. Spells and effects affecting constructs also affect me",
        "\u2022 False Appearance: While motionless, indistinguishable from an ordinary doll",
        "\u2022 Clipped Strings: Melee attacks with weapons that aren't Two-Handed have Reach on my turn",
        "\u2022 Pantomime: Proficient with Performance, and adv. on Cha (Performance) checks to dance"
    ]),
	skills : ["Performance"]
};

RaceList["plushie geppettin"] = {
	regExpSearch : /^(?=.*plushie)(?=.*geppettin).*$/i,
	name : "Plushie geppettin",
	sortname : "Geppettin, Plushie",
	source : ["VSoS", 9],
	plural : "Plushie geppettin",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " do not age, and are mature as soon as they become sentient",
	height : " rarely break 3 feet in height",
	heightMetric : " rarely break 0,9 metres in height",
    scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	savetxt : {
		text : ["Magic can't put me to sleep"],
		immune : ["nonmagical disease"]
	},
    trait : "Plushie Geppettin (+2 and +1, or +1 to three different scores)" + desc([
        "\u2022 Construct Anatomy: Can eat/drink, but don't need to. Instead of sleep, I go inactive for 4 hrs, not unconscious, can see/hear normally. Spells and effects affecting constructs also affect me",
        "\u2022 False Appearance: While motionless, indistinguishable from an ordinary doll",
        "\u2022 Adorable: Proficient with Persuasion, and adv. on Cha (Persuasion) rolls against children or other humanoids fond of cute things",
        "\u2022 Stuffed with Fluff: When taking blud. dmg, I can use my reaction to gain resistance to the damage and be knocked 5 feet away from the damage source. I can't use this feature if I can't be knocked away."
    ]),
	skills : ["Persuasion"],
	features : {
		"stuffed with fluff" : {
			name : "Stuffed with Fluff",
			minlevel : 1,
			usages : 1,
			recovery : "Turn", 
			action : [["reaction", ""]]
		}
	}
};

// * Mandrake

RaceList["spring mandrake"] = {
	regExpSearch : /^(?=.*spring)(?=.*mandrake).*$/i,
	name : "Spring Mandrake",
	sortname : "Mandrake, Spring",
	source : ["VSoS",10],
	plural : "Spring Mandrakes",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " must grow undisturbed for a year and a day before they are harvested. They then mature in a decade and live for centuries, growing wider with more gnarled bark as they age.",
	height : " usually stand tall and slim, typically almost seven feet high",
	heightMetric : " usually stand tall and slim, typically over two meters high",
    scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	skills : ["Nature"],
	trait : "Spring Mandrake (+2 and +1, or +1 to three different scores)" + desc([
        "\u2022 Plant Nature: Don't need to eat if in sunlight for 4 hrs/day. Breathe through leaves/limbs, and get water/nutrients through feet",
        "\u2022 Emissary of the Trees: Prof. with Nature, and adv. on Cha (Persuasion) checks to interact with Beasts and Plants",
        "\u2022 Root Magic: Learn Shillelagh and use it with my own limb. At 3rd, cast Goodberry 1/LR. At 5th, cast Barkskin 1/LR. Spells use Intelligence, Wisdom, or Charisma and can be cast using SL"
    ]),
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "Root Magic (level 1)",
		spells : ["shillelagh"],
		selection : ["shillelagh"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"shillelagh" : {
			description : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg and uses my spellcasting ability modifier instead of Str",
			descriptionShorter : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg \u0026 uses my spellcasting modifier instead of Str",
			descriptionFull : "The wood of a club, quarterstaff, or my tree limb  is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.",
			changes : "I can also use one of my limbs as a club for the duration of the spell."
		}
	},
	features : {
		"entangling vines" : {
			name: "Entangling Vines",
			limfeaname: "Entangling Vines",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : ["bonus action", ""],
		},
		"goodberry" : {
			name : "Root Magic (level 3)",
			limfeaname : "Goodberry",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 3)",
				spells : ["goodberry"],
				selection : ["goodberry"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"goodberry" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting goodberry no longer requires material components"
				}
			}
		},
		"barkskin" : {
			name : "Root Magic (level 5)",
			limfeaname : "Barkskin",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 5)",
				spells : ["barkskin"],
				selection : ["barkskin"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"barkskin" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting barkskin no longer requires material components"
				}
			}
		}
	},
	toNotesPage : [{
		name : "Entangling Vines",
		source : ["VSoS", 11],
		page3notes : true,
		note : desc([ 
			"I can use my bonus action to cause weeds and vines to grasp a large or smaller creature within 30 feet of me. Until the end of the creature's next turn, its speed becomes 0. This ends early if it takes the disengage action.",
			"At 3rd level, my Entangling Vines can target an airborne creature within 30 feet of the ground, which is pulled safely to the ground."
		])
	}]
};

RaceList["summer mandrake"] = {
	regExpSearch : /^(?=.*summer)(?=.*mandrake).*$/i,
	name : "Summer Mandrake",
	sortname : "Mandrake, Summer",
	source : ["VSoS",10],
	plural : "Summer Mandrakes",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " must grow undisturbed for a year and a day before they are harvested. They then mature in a decade and live for centuries, growing wider with more gnarled bark as they age.",
	height : " usually stand tall and slim, typically almost seven feet high",
	heightMetric : " usually stand tall and slim, typically over two meters high",
    scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	skills : ["Nature"],
	trait : "Summer Mandrake (+2 and +1, or +1 to three different scores)" + desc([
        "\u2022 Plant Nature: Don't need to eat if in sunlight for 4 hrs/day. Breathe through leaves/limbs, and get water/nutrients through feet",
        "\u2022 Emissary of the Trees: Prof. with Nature, and adv. on Cha (Persuasion) checks to interact with Beasts and Plants",
        "\u2022 Root Magic: Learn Shillelagh and use it with my own limb. At 3rd, cast Goodberry 1/LR. At 5th, cast Barkskin 1/LR. Spells use Intelligence, Wisdom, or Charisma and can be cast using SL"
    ]),
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "Root Magic (level 1)",
		spells : ["shillelagh"],
		selection : ["shillelagh"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"shillelagh" : {
			description : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg and uses my spellcasting ability modifier instead of Str",
			descriptionShorter : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg \u0026 uses my spellcasting modifier instead of Str",
			descriptionFull : "The wood of a club, quarterstaff, or my tree limb  is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.",
			changes : "I can also use one of my limbs as a club for the duration of the spell."
		}
	},
	features : {
		"entangling vines" : {
			name: "Entangling Vines",
			limfeaname: "Entangling Vines",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : ["bonus action", ""],
		},
		"goodberry" : {
			name : "Root Magic (level 3)",
			limfeaname : "Goodberry",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 3)",
				spells : ["goodberry"],
				selection : ["goodberry"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"goodberry" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting goodberry no longer requires material components"
				}
			}
		},
		"barkskin" : {
			name : "Root Magic (level 5)",
			limfeaname : "Barkskin",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 5)",
				spells : ["barkskin"],
				selection : ["barkskin"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"barkskin" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting barkskin no longer requires material components"
				}
			}
		}
	},
	toNotesPage : [{
		name : "Entangling Vines",
		source : ["VSoS", 11],
		page3notes : true,
		note : desc([ 
			"I can use my bonus action to cause weeds and vines to grasp a large or smaller creature within 30 feet of me. Until the end of the creature's next turn, its speed becomes 0. This ends early if it takes the disengage action.",
			"At 3rd level, my Entangling Vines can move the target up to 10 feet to an unoccupied space on the ground or on a floor."
		])
	}]
};

RaceList["autumn mandrake"] = {
	regExpSearch : /^(?=.*autumn)(?=.*mandrake).*$/i,
	name : "Autumn Mandrake",
	sortname : "Mandrake, Autumn",
	source : ["VSoS",10],
	plural : "Autumn Mandrakes",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " must grow undisturbed for a year and a day before they are harvested. They then mature in a decade and live for centuries, growing wider with more gnarled bark as they age.",
	height : " usually stand tall and slim, typically almost seven feet high",
	heightMetric : " usually stand tall and slim, typically over two meters high",
    scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	skills : ["Nature"],
	trait : "Autumn Mandrake (+2 and +1, or +1 to three different scores)" + desc([
        "\u2022 Plant Nature: Don't need to eat if in sunlight for 4 hrs/day. Breathe through leaves/limbs, and get water/nutrients through feet",
        "\u2022 Emissary of the Trees: Prof. with Nature, and adv. on Cha (Persuasion) checks to interact with Beasts and Plants",
        "\u2022 Root Magic: Learn Shillelagh and use it with my own limb. At 3rd, cast Goodberry 1/LR. At 5th, cast Barkskin 1/LR. Spells use Intelligence, Wisdom, or Charisma and can be cast using SL"
    ]),
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "Root Magic (level 1)",
		spells : ["shillelagh"],
		selection : ["shillelagh"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"shillelagh" : {
			description : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg and uses my spellcasting ability modifier instead of Str",
			descriptionShorter : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg \u0026 uses my spellcasting modifier instead of Str",
			descriptionFull : "The wood of a club, quarterstaff, or my tree limb  is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.",
			changes : "I can also use one of my limbs as a club for the duration of the spell."
		}
	},
	features : {
		"entangling vines" : {
			name: "Entangling Vines",
			limfeaname: "Entangling Vines",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : ["bonus action", ""],
		},
		"goodberry" : {
			name : "Root Magic (level 3)",
			limfeaname : "Goodberry",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 3)",
				spells : ["goodberry"],
				selection : ["goodberry"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"goodberry" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting goodberry no longer requires material components"
				}
			}
		},
		"barkskin" : {
			name : "Root Magic (level 5)",
			limfeaname : "Barkskin",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 5)",
				spells : ["barkskin"],
				selection : ["barkskin"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"barkskin" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting barkskin no longer requires material components"
				}
			}
		}
	},
	toNotesPage : [{
		name : "Entangling Vines",
		source : ["VSoS", 11],
		page3notes : true,
		note : desc([ 
			"I can use my bonus action to cause weeds and vines to grasp a large or smaller creature within 30 feet of me. Until the end of the creature's next turn, its speed becomes 0. This ends early if it takes the disengage action.",
			"At 3rd level, my Entangling Vines can affect a second creature within 5 feet of the first target."
		])
	}]
};

RaceList["winter mandrake"] = {
	regExpSearch : /^(?=.*winter)(?=.*mandrake).*$/i,
	name : "Winter Mandrake",
	sortname : "Mandrake, Winter",
	source : ["VSoS",10],
	plural : "Winter Mandrakes",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " must grow undisturbed for a year and a day before they are harvested. They then mature in a decade and live for centuries, growing wider with more gnarled bark as they age.",
	height : " usually stand tall and slim, typically almost seven feet high",
	heightMetric : " usually stand tall and slim, typically over two meters high",
    scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	skills : ["Nature"],
	trait : "Autumn Mandrake (+2 and +1, or +1 to three different scores)" + desc([
        "\u2022 Plant Nature: Don't need to eat if in sunlight for 4 hrs/day. Breathe through leaves/limbs, and get water/nutrients through feet",
        "\u2022 Emissary of the Trees: Prof. with Nature, and adv. on Cha (Persuasion) checks to interact with Beasts and Plants",
        "\u2022 Root Magic: Learn Shillelagh and use it with my own limb. At 3rd, cast Goodberry 1/LR. At 5th, cast Barkskin 1/LR. Spells use Intelligence, Wisdom, or Charisma and can be cast using SL"
    ]),
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "Root Magic (level 1)",
		spells : ["shillelagh"],
		selection : ["shillelagh"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"shillelagh" : {
			description : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg and uses my spellcasting ability modifier instead of Str",
			descriptionShorter : "Club/quarterstaff/tree limb does 1d8 Bludg. dmg \u0026 uses my spellcasting modifier instead of Str",
			descriptionFull : "The wood of a club, quarterstaff, or my tree limb  is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.",
			changes : "I can also use one of my limbs as a club for the duration of the spell."
		}
	},
	features : {
		"entangling vines" : {
			name: "Entangling Vines",
			limfeaname: "Entangling Vines",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : ["bonus action", ""],
		},
		"goodberry" : {
			name : "Root Magic (level 3)",
			limfeaname : "Goodberry",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 3)",
				spells : ["goodberry"],
				selection : ["goodberry"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"goodberry" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting goodberry no longer requires material components"
				}
			}
		},
		"barkskin" : {
			name : "Root Magic (level 5)",
			limfeaname : "Barkskin",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Root Magic (level 5)",
				spells : ["barkskin"],
				selection : ["barkskin"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"barkskin" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting barkskin no longer requires material components"
				}
			}
		}
	},
	toNotesPage : [{
		name : "Entangling Vines",
		source : ["VSoS", 11],
		page3notes : true,
		note : desc([ 
			"I can use my bonus action to cause weeds and vines to grasp a large or smaller creature within 30 feet of me. Until the end of the creature's next turn, its speed becomes 0. This ends early if it takes the disengage action.",
			"At 3rd level, my Entangling Vines deal cold damage equal to my proficiency bonus to the target."
		])
	}]
};

// * Mousefolk "Subraces"
RaceList["mouseling"] = {
	regExpSearch : /^(?=.*mouseling).*$/i,
	name : "Mouseling",
	sortname : "Mousefolk, Mouseling",
	source : ["VSoS",12],
	plural : "Mouselings",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " mature in their teens and live around 80 years.",
	height : " stand around 3 feet tall, appearing slightly taller with their large ears",
	heightMetric : " stand around 90 centimeters tall, appearing slightly taller with their large ears",
	weight : " normally weigh no more than 40 pounds.",
	weightMetric : " normally weigh no more than 18 kilograms.",
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	trait : "Mouseling (+2 and +1, or +1 to three different scores)" + desc([
		"\u2022 Scurry: Move through hostile creatures' spaces as difficult terrain",
		"\u2022 Squeeze: No penalty for squeezing into a space one size smaller",
		"\u2022 Sidestep: When a creature I can see makes an opportunity attack against me and I'm not wearing medium or heavy armor, I can use my reaction to impose disadvantage on the attack roll."
	]),
	scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	reaction : [["reaction", "Sidestep"]]
};

RaceList["ratling"] = {
	regExpSearch : /^(?=.*ratling).*$/i,
	name : "Ratling",
	sortname : "Mousefolk, Ratling",
	source : ["VSoS",12],
	plural : "Ratlings",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " mature in their teens and live around 80 years.",
	height : " stand around 3 feet tall, appearing slightly taller with their large ears",
	heightMetric : " stand around 90 centimeters tall, appearing slightly taller with their large ears",
	weight : " normally weigh no more than 40 pounds.",
	weightMetric : " normally weigh no more than 18 kilograms.",
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	trait : "Ratling (+2 and +1, or +1 to three different scores)" + desc([
		"\u2022 Scurry: Move through hostile creatures' spaces as difficult terrain",
		"\u2022 Squeeze: No penalty for squeezing into a space one size smaller",
		"\u2022 Gnaw: I can use my action to chew through a small nonmagical object that isn't being worn or carried. I can spend 1 minute chewing a Tiny hole through a wooden wall or floor. I can't chew through metal, stone, etc"
	]),
	scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	reaction : [["action", "Gnaw"]]
};

// * Spirithost
RaceList["spirithost"] = {
	regExpSearch : /^(?=.*spirithost).*$/i,
	name : "Spirithost",
	sortname : "Spirithost",
	source : ["VSoS",13],
	plural : "Spirithosts",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " do not experience time in the same way as most mortal creatures. As a result, even though they mature in their teens, their lives can stretch on for hundreds of years.",
	height : " stand as tall as humans, usually around 5 or 6 feet tall.",
	heightMetric : " stand as tall as humans, usually around 150 to 180 centimeters tall.",
	weight : " weigh half as much as a similarly sized human, as their slightly ethereal form is only loosely affiliated with gravity.",
	vision : [["Ethereal Plane", 120]],
	scorestxt : "+2 to an ability score of my choice and +1 to a different ability score, or +1 to three different ability scores",
	trait : "Spirithost (+2 and +1, or +1 to three different scores)" + desc([
		"\u2022 Spells and effects that affect the Undead also affect me",
		"\u2022 Ghostly Descent: If not incapacitated, subtract 60 ft. from fall distance when calculating fall damage.",
		"\u2022 Incorporeal Movement: I can move through other crea and obj as if they were dif. terrain. If I end my turn inside a crea or an obj, I am shunted out and take force dmg equal to 2x the distance",
		"\u2022 Spirit Speech: Cast Speak With Dead 1/LR requiring no material comp. and ask questions equal to prof bonus. Spell uses Int, Wis, or Cha, and can also be cast with spell slots"
	]),
	spellcastingAbility : [4, 5, 6],
	features : {
		"spirit speech" : {
			name : "Spirit Speech",
			limfeaname : "Speak With Dead",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Spirit Speech (level 1)",
				spells : ["speak with dead"],
				selection : ["speak with dead"],
				firstCol : "oncelr"
			}
		}
	}
};

// * Near-Human variant
AddRacialVariant("human", "near-human", {
	regExpSearch : /near-human/i,
	source : ["VSoS", 14],
	plural : "Near-Humans",
	skillstxt : "Choose any one skill",
	scorestxt : "+1 to two different ability scores of my choice",
	trait : "Near-Human (+1 to two different ability scores of my choice)" + desc([
		"\u2022 Skills: I gain proficiency in one skill of my choice",
		"\u2022 I gain one Near-Humant feat of my choice, that must be picked at first level."
	]),
	eval : function() { AddString('Feat Note 1', 'Near-Human feat', '; '); },
	removeeval : function() { RemoveString('Feat Note 1', 'Near-Human feat'); }
});

// * Near-Human feats
FeatsList["aberrant spawn"] = {
	name : "Aberrant Spawn",
	source : ["VSoS", 14],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "You were somehow mutated or created by an aberration, such as an aboleth, and you suffer from strange deformities as a result. Due to these changes, you have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on saving throws you make to avoid or end the charmed condition on yourself and against any effect that would sense your emotions or read your thoughts.\n \u2022 You have resistance to psychic damage.\n \u2022 At least one of your limbs is muscular, rubbery, and pliant, acting as a tentacle that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.",
	description : "Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 to any ability score.]",
	dmgres : ["Psychic"],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*aberrant)(?=.*tentacle).*$/i,
		name : "Aberrant Tentacle",
		source : ["VSoS", 14],
		damage : [1, 6, "bludgeoning"],
		selectNow : true
	}],
	savetxt : {
		adv_vs : ["charmed", "sense emotions", "read thoughts"],
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "Adv. on saves to avoid or end charmed, and against having my emotions sensed or my thoughts read. I can use one of my limbs as a natural weapon for unarmed strikes, dealing 1d6 + Strength in bludgeoning damage on a hit. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["aquanaut"] = {
	name : "Aquanaut",
	source : ["VSoS", 14],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "One of your parents is a merfolk, or you are distantly descended from the Elemental Plane of Water; consequently, you have aquatic features like gills, webbed fingers and toes, and fishlike scales, which grant you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can breathe water as well as air.\n \u2022 You have a swimming speed equal to your walking speed.",
	description : "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 to any ability score.]",
	speed : {
		swim : { spd : "walk", enc : "walk" },
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I can breathe water and air. I have a swimming speed equal to my walking speed. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["arachne"] = {
	name : "Arachne",
	source : ["VSoS", 14],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Much like drow, humans can be corrupted by the magic of the drow goddess, becoming arachne—humans with eight eyes and coarse, black hair. Sometimes these humans are the offspring of driders or drow priestesses, while other times they bear the marks of a ritual sacrifice gone terribly awry.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.\n \u2022 You know the poison spray cantrip. Starting at 3rd level, you can cast the bane spell with this trait. Starting at 5th level, you can also cast the spider climb spell with this trait. Once you cast bane or spider climb with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Bane or Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
	vision : ["Darkvision", 120],
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
        name : "Arachne (level 1)",
        spells : ["poison spray"],
        selection : ["poison spray"],
        firstCol : "atwill"
    }, {
        name : "Arachne (level 3)",
        spells : ["bane"],
        selection : ["bane"],
        firstCol : "oncelr",
        times : levels.map( function (n) {
			return n < 3 ? 0 : 1;
		})
    }, {
        name : "Arachne (level 5)",
        spells : ["spider climb"],
        selection : ["spider climb"],
        firstCol : "oncelr",
		times : levels.map( function (n) {
			return n < 5 ? 0 : 1;
		})
    }],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Bane or Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Bane or Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Bane or Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Bane or Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Bane or Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Bane or Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["beastman"] = {
	name : "Beastman",
	source : ["VSoS", 14],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "With a short tail, coarse fur covering your face, and long teeth and claws, you appear more like a ferocious beast than a man. Perhaps your parentage includes a werecreature or an intelligent beast, granting you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on Wisdom (Perception) checks made to smell.\n \u2022 You possess sharp claws, which are natural weapons that you can use to make unarmed strikes. On a hit with them, you deal slashing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
	description : "I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 to any ability score.]",
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(beastman))(?=.*claw).*$/i,
		name : "Beastman Claws",
		source : ["VSoS", 14],
		damage : [1, 6, "slashing"],
		selectNow : true
	}],
	vision : [["Keen Smell", 0]],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have advantage on Wisdom (Perception) checks made to smell. I can use my claws as natural weapons to make unarmed strikes, dealing 1d6 + Strength in slashing damage on a hit. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["firebrand"] = {
	name : "Firebrand",
	source : ["VSoS", 15],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Born, imbued with, or later marked by the powers of Elemental Fire, these near-humans have an affinity for fire magic. Their heritage makes them dangerous adversaries in combat, as does the volatile nature of their innate powers. Firebrands are human in shape, but have deep red skin and flames behind their eyes. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to fire damage.\n \u2022 You know the produce flame cantrip. Starting at 3rd level, you can cast the burning hands spell with this trait. Starting at 5th level, you can also cast the flaming sphere spell with this trait, without requiring a material component. Once you cast burning hands or flaming sphere with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Burning Hands or Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
	dmgres : ["Fire"],
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
        name : "Firebrand (level 1)",
        spells : ["produce flame"],
        selection : ["produce flame"],
        firstCol : "atwill"
    }, {
        name : "Firebrand (level 3)",
        spells : ["burning hands"],
        selection : ["burning hands"],
        firstCol : "oncelr",
        times : levels.map( function (n) {
			return n < 3 ? 0 : 1;
		})
    }, {
        name : "Firebrand (level 5)",
        spells : ["flaming sphere"],
        selection : ["flaming sphere"],
        firstCol : "oncelr",
		times : levels.map( function (n) {
			return n < 5 ? 0 : 1;
		})
    }],
	spellChanges : {
		"flaming sphere" : {
			components : "V,S",
			compMaterial : "",
			changes : "Casting flaming sphere no longer requires material components"
		}
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Burning Hands or Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Burning Hands or Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Burning Hands or Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Burning Hands or Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Burning Hands or Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Burning Hands or Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["green skin"] = {
	name : "Green Skin",
	source : ["VSoS", 15],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
	return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Your people metabolize by basking in the sunlight. Aided by your tough, photosynthetic skin, you gain the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.\n \u2022 While you aren't wearing armor, your AC equals 12 + your Dexterity modifier.",
	description : "I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 to any ability score.]",
	armorOptions : {
		regExpSearch : /^(?=.*green)(?=.*skin).*$/i,
		name : "Green Skin",
		source : ["VSoS", 15],
		ac : 12,
		selectNow : true
	},
	savetxt : {
		adv_vs : ["poisoned"],
	},
	dmgres : ["Poison"],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have advantage on saving throws against being poisoned, and resistance to poison damage. While not wearing armor, my AC is 12 + Dexterity. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

// * Human is medium by default
FeatsList["grendel medium"] = {
	name : "Grendel (medium)",
	source : ["VSoS", 15],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "The children of goblins, hobgoblins, and bugbears with humans are known as grendels. Despite their varied heritage, grendels don't quite resemble either of their parents, with green- or orange-tanned skin, coarse hair, and three knuckles on each finger.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Unlike other humans, you are Medium or Small, depending on your heritage.\n \u2022 You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 You have advantage on saving throws you make to avoid or end the charmed condition on yourself.\n \u2022 On your first turn in combat, you can add your proficiency bonus to your attack rolls, ability checks, and saving throws.",
	vision : ["Darkvision", 60],
	savetxt : {
		adv_vs : ["charmed"],
	},
	description : "I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 to any ability score.]",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I am Medium. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["grendel small"] = {
	name : "Grendel (Small)",
	source : ["VSoS", 15],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "The children of goblins, hobgoblins, and bugbears with humans are known as grendels. Despite their varied heritage, grendels don't quite resemble either of their parents, with green- or orange-tanned skin, coarse hair, and three knuckles on each finger.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Unlike other humans, you are Medium or Small, depending on your heritage.\n \u2022 You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 You have advantage on saving throws you make to avoid or end the charmed condition on yourself.\n \u2022 On your first turn in combat, you can add your proficiency bonus to your attack rolls, ability checks, and saving throws.",
	vision : ["Darkvision", 60],
	eval: function() { PickDropdown("Size Category", 4); },
	removeeval: function(n) { PickDropdown("Size Category", 3); },
	savetxt : {
		adv_vs : ["charmed"],
	},
	description : "I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 to any ability score.]",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I am Small. I have darkvision to 60 feet, and adv. against being charmed. On my 1st turn in combat, I can add my prof. bonus to attacks, checks, and saves. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["grue"] = {
	name : "Grue",
	source : ["VSoS", 15],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "One of your parents was a creature of darkness, such as a shadow or a native of the Plane of Shadow. Grues, such as yourself, have blackened skin and cast a shadow in all directions, even when directly in light. In shadows, you are nearly invisible. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have darkvision, the ability to see in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 When you are hidden and a creature discovers you with a successful Wisdom (Perception) check, you can reattempt your Dexterity (Stealth) check to hide. On a success, you silently reposition yourself and the creature doesn't notice you. Once you use this trait, you can't use it again until you finish a short or long rest.",
	description : "I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom(Perception) check, I can make a Dexterity(Stealth) check. On a success, I remain hidden. [+1 to any ability score.]",
	vision : ["Darkvision", 60],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have darkvision out to 60 feet. Once per short rest I can use covert. When I am hidden and detected by a creature's successful Wisdom (Perception) check, I can make a Dexterity (Stealth) check. On a success, I remain hidden. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	usages : 1,
	recovery : "short rest",
	limfeaname : "Covert"
};

FeatsList["insectoid"] = {
	name : "Insectoid",
	source : ["VSoS", 15],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Insectoids bear one or two insectlike features, such as prominent compound eyes or chitinous plates, but almost always have a pair of sensitive antennae atop their heads.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Due to your antennae, you have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.\n \u2022 If any part of your body is amputated, but its amputation doesn't kill you, you can fully regrow that part of your body in 24 hours.",
	description : "I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 to any ability score.]",
	vision : ["Blindsight", 10],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have blindsight to 10 ft. I can fully regrow any amputated body part in 24 hours, as long as the amputation doesn't kill me. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["immortal"] = {
	name : "Immortal",
	source : ["VSoS", 16],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "According to legend, a human can achieve immortality by replacing their heart with a mote of celestial radiance. The secret to immortality, including the elixirs and rituals needed to achieve it, is protected by a small, clandestine sect of immortal mystics, each of who only know one component of the process. There are perhaps only a dozen true immortals in the world, but as many as hundreds if every tale can be believed.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You don't age, can't be aged magically, and suffer none of the frailty of old age. You can't die of old age.\n \u2022 You have advantage on saving throws you make to avoid or end diseases and the poisoned condition yourself. You also have resistance to poison damage.",
	savetxt : {
		adv_vs : ["poisoned"],
	},
	dmgres : ["Poison"],
	description : "I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 to any ability score.]",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I don't age, can't be aged magically, and can't die of old age. I have advantage on saves against the poisoned condition, and resistance to poison damage. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["mul"] = {
	name : "Mul",
	source : ["VSoS", 16],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "One of your parents was a human and the other was a dwarf. Such a pairing is unlikely to have produced offspring, but you have defied the odds to join the ranks of the sturdy and resilient muls. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have darkvision, the ability to see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.\n \u2022 Your speed is not reduced by wearing heavy armor and you never have disadvantage on Dexterity (Stealth) checks as a result of wearing heavy armor.",
	description : "I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 to any ability score.]",
	vision : ["Darkvision", 60],
	calcChanges : {
		hp : function (totalHD) { return [totalHD, "Dwarven Toughness"]; }
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have darkvision out to 60 feet. My hit point maximum increases by 1 for every level. Heavy armor doesn't reduce my speed or impose disadvantage on stealth. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["ogre-blooded"] = {
	name : "Ogre-Blooded",
	source : ["VSoS", 16],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Your coarse features and monstrous build betray that one of your parents is an ogre. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n \u2022 You gain proficiency in the Athletics skill. Additionally, when you make a Strength (Athletics) check, you can treat the result as a 10, or your level plus your Strength modifier, whichever is higher.\n \u2022 You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
	description : "I have darkvision. I gain proficiency in Athletics, and can treat the result of Str (Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 to any ability score.]",
	vision : ["Darkvision", 60],
	skills : ["Athletics"],
	carryingCapacity : 2,
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have darkvision. I gain proficiency in Athletics, and can treat the result of Str(Ath) checks as 10 or Level + Strength, whichever is higher. I count as one size larger for carry/push/drag/lift capacity. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["owlbearman"] = {
	name : "Owlbearman",
	source : ["VSoS", 16],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "You are a hulking thing of feathers, flesh, and fur; half-man, half-bear, and half-owl. None can say for sure what you are, other than the result of some mad wizard meddling in the gods' domain. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can attempt to grapple creatures two size categories larger than yourself, and you have advantage on grappling checks you make on your turn against creatures that are at least one size category smaller than you.\n \u2022 You have a long, hooked beak that you can use to make unarmed strikes. On a hit with it, you deal piercing damage equal to 1d6 + your Strength modifier instead of the bludgeoning damage normal for an unarmed strike.",
	description : "I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 to any ability score.]",
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*owlbearman)(?=.*beak).*$/i,
		name : "Owlbearman Beak",
		source : ["VSoS", 18],
		damage : [1, 6, "piercing"],
		selectNow : true
	}],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I can attempt to grapple creatures up to two sizes larger, and I have advantage on checks to grapple smaller creatures. I have a hooked beak I can use to make unarmed strikes, dealing 1d6 + Strength in piercing damage on a hit. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["porterling"] = {
	name : "Porterling",
	source : ["VSoS", 16],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "You are a porterling, parented both by a human and either a gnome or a halfling. You stand about as tall as a dwarf, but are far leaner—and if fathered by a gnome, also somewhat top-heavy. Though they are often confused for dwarves, porterlings can only rarely grow large or thick beards. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on checks you make to escape grapple or to slip bindings.\n \u2022 You suffer no penalty for squeezing into a space that is only large enough for a creature that is one size smaller than you.\n \u2022 You can roll a d8 whenever you make a long or high jump, adding the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.",
	description : "I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 to any ability score.]",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have advantage on checks to escape grapples and slip bindings. I can squeeze into a space one size smaller without penalty. I can add 1d8 to my long and high jump distance. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["psionic"] = {
	name : "Psionic",
	source : ["VSoS", 17],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Most humans possess some dull psionic potential, but those who unlock their psionic spark transcend their peers. Sometimes, these humans are indistinguishable from ordinary folks, but other times their psionic awakening leaves a tell-tale mark: stark white hair, glowing pupils, or hair and clothing that float and drift around them. \n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can use your action to probe the surface level of a creature's emotions. You must be able to see the creature and it must be within 30 feet and have an Intelligence of 3 or higher. You learn the creature's emotional state and, at the GM's discretion, one of the creature's Bonds.\n \u2022 You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait.\n   Starting at 3rd level, you can cast the unseen servant spell with this trait. Starting at 5th level, you can also cast the levitate spell with this trait. Once you cast unseen servant or levitate with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Unseen Servant or Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 to any ability score.]",
	features : {
		"empathy" : {
			name : "Empathy",
			minlevel : 1,
			action : [["action", ""]],
		}
	},
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
        name : "Psionic (level 1)",
        spells : ["mage hand"],
        selection : ["mage hand"],
        firstCol : "atwill"
    }, {
        name : "Psionic (level 3)",
        spells : ["unseen servant"],
        selection : ["unseen servant"],
        firstCol : "oncelr",
        times : levels.map( function(n) {
			return n < 3 ? 0 : 1;
		})
    }, {
        name : "Psionic (level 5)",
        spells : ["levitate"],
        selection : ["levitate"],
        firstCol : "oncelr",
		times : levels.map( function(n) {
			return n < 5 ? 0 : 1;
		})
    }],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Unseen Servant or Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Unseen Servant or Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Unseen Servant or Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Unseen Servant or Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Unseen Servant or Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Unseen Servant or Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["proto-man"] = {
	name : "Proto-Man",
	source : ["VSoS", 17],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "You come from a place of massive flora and ancient creatures; your people are hearty and robust, much like very early humans. You gain the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You advantage vs. saving throws against being frightened.\n \u2022 When you take a short rest, you can automatically regain 1 hit die and can choose to spend it immediately. You can't use the ability again until you finish a long rest.",
	description : "I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 to any ability score.]",
	savetxt : {
		adv_vs : ["Frightened"],
	},
	usages : 1,
	recovery : "long rest",
	limfeaname : "Recover 1 HD on SR",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have adv. in saving throws against being frightened. Once per long rest, when I take a short rest, I can regain 1 hit die and can spend it immediately. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["reptiloid"] = {
	name : "Reptiloid",
	source : ["VSoS", 18],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "You bear the abrasive skin, slitted eyes, and split tongue of a reptile—perhaps due to a dragonborn or kobold parent—which grant you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 When you take the Attack action on your turn, you can replace one of your attacks with a lob of acid from your mouth. This is a special ranged attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. On a hit, the target takes 1d10 acid damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).\n   You can use your Acid Spit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 to any ability score.]",
	usages : "Prof bonus times per",
	recovery : "long rest",
	usagescalc : "event.value = What('Proficiency Bonus');",
	limfeaname : "Acid Spit",
	additional : levels.map( function(n) {
		return n < 5 ? "1d10" : n < 11 ? "2d10" : n < 17 ? "3d10" : "4d10";
	}),
	weaponOptions : [{
		regExpSearch : /^(?=.*acid)(?=.*spit).*$/i,
		name : "Acid Spit",
		source : ["VSoS", 18],
		ability : 2,
		type : "Natural",
		damage : ["C", 10, "acid"],
		range : "30 ft",
		description : "Replaces an attack during Attack action; prof. times per long rest",
		selectNow : true
	}],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "Prof. times per long rest with the Attack action, I can replace an attack by spitting acid. Ranged attack 30 ft, hit: 1d10+Dex acid damage. +1d10 CL5/11/17 [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["roguean"] = {
	name : "Roguean",
	source : ["VSoS", 18],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "You hail from an icy, desolate land, prone to dramatic swings in temperature. Surviving the interminable harshness of your home gives you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to cold damage.\n \u2022 You can tolerate temperatures as low as −100 degrees Fahrenheit and as high as 300 degrees Fahrenheit.\n \u2022 You have darkvision, the ability to see in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
	description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 to any ability score.]",
	vision : ["Darkvision", 60],
	dmgres : ["Cold"],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["stoneborn"] = {
	name : "Stoneborn",
	source : ["VSoS", 18],
	prerequisite : "1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "With cracked and abrasive skin, stoneborn appear as if they were roughly hewn from granite and have similarly rigid personalities. These near-humans are proud of their connection to Elemental Earth and believe themselves conquerors, fated to rule over every stone. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Your Armor Class increases by 1.\n \u2022 You have advantage on ability checks and saving throws you make to resist being knocked prone or moved against you will.\n \u2022 By placing your hand on natural stone and using your action to focus, you can feel the presence of any natural gems or metals within 100 feet of you.", 
	description : "My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 to any ability score.]",
	limfeaname : "Sense minerals",
	action: ["action", ""],
	extraAC : [{
		mod : 1,
		text : "I gain a +1 bonus to AC when using my action to sense minerals",
	}],
	savetxt : {
		adv_vs : ["being knocked prone or moved"],
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "My AC increases by 1. I have advantage on checks and saving throws to avoid being knocked down or moved. I can touch natural stone and use my action sense natural gems/metals within 100 feet. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};