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

// Mousefolk "Subraces"
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