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
	date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
};

// ! This section adds races

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
			spellcastingBonus : [{
				name : "Spirit Speech (level 1)",
				spells : ["speak with dead"],
				selection : ["speak with dead"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"speak with dead" : {
					components : "V,S",
					compMaterial : "",
					changes : "Casting speak with dead no longer requires material components"
				}
			},
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

// ! This section adds feats

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
	descriptionFull : "Much like drow, humans can be corrupted by the magic of the drow goddess, becoming arachne—humans with eight eyes and coarse, black hair. Sometimes these humans are the offspring of driders or drow priestesses, while other times they bear the marks of a ritual sacrifice gone terribly awry.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.\n \u2022 You know the poison spray cantrip. Stng at 3rd level, you can cast the bane spell with this trait. Starting at 5th level, you can also cast the spider climb spell with this trait. Once you cast spider climb with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
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
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have darkvision to 120 ft and I know the Poison Spray cantrip. At 3rd level, I can cast Bane 1/LR. At 5th, I can cast Spider Climb 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
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
	descriptionFull : "Born, imbued with, or later marked by the powers of Elemental Fire, these near-humans have an affinity for fire magic. Their heritage makes them dangerous adversaries in combat, as does the volatile nature of their innate powers. Firebrands are human in shape, but have deep red skin and flames behind their eyes. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to fire damage.\n \u2022 You know the produce flame cantrip. Starting at 3rd level, you can cast the burning hands spell with this trait. Starting at 5th level, you can also cast the flaming sphere spell with this trait, without requiring a material component. Once you cast flaming sphere with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
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
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have resistance to fire damage. I know the Produce Flame cantrip. At 3rd level, I can cast Burning Hands 1/LR. At 5th, I can cast Flaming Sphere 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
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
	descriptionFull : "Most humans possess some dull psionic potential, but those who unlock their psionic spark transcend their peers. Sometimes, these humans are indistinguishable from ordinary folks, but other times their psionic awakening leaves a tell-tale mark: stark white hair, glowing pupils, or hair and clothing that float and drift around them. \n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can use your action to probe the surface level of a creature's emotions. You must be able to see the creature and it must be within 30 feet and have an Intelligence of 3 or higher. You learn the creature's emotional state and, at the GM's discretion, one of the creature's Bonds.\n \u2022 You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait.\n   Starting at 3rd level, you can cast the unseen servant spell with this trait. Starting at 5th level, you can also cast the levitate spell with this trait. Once you cast levitate with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
	description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 to any ability score.]",
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
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "As an action, choose 1 crea within 30 feet and Int 3 or higher to read surface level emotions. I know the Mage Hand cantrip and the hand is invis. At 3rd level, cast Unseen Servant 1/LR. At 5th, cast Levitate 1/LR. Spells use Int, Wis, or Cha and can also be cast with spell slots. [+1 Charisma]",
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
	descriptionFull : "You hail from an icy, desolate land, prone to dramatic swings in temperature. Surviving the interminable harshness of your home gives you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to cold damage.\n \u2022 You can tolerate temperatures as low as −100 degrees Fahrenheit and as high as 300 degrees Fahrenheit.\n \u2022 You have darkvision, the ability to see in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
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
	prerequisite : "Chosen at 1st level only, Near-Human variant",
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

FeatsList["stheno"] = {
	name : "Stheno",
	source : ["VSoS", 18],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "The offspring of medusas—named sthenos—are usually conceived before the mother begins their transformation. With sharp features and a nest of snakes for hair, sthenos can be easily mistaken for their monstrous parent, but possess a gaze that falls short of turning people into stone.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 When you take the Attack action on your turn, you can replace one of your attacks with an immobilizing gaze. Choose a creature you can see within 60 feet of you that can see you to make a Constitution saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature that is immune to being restrained automatically succeeds this saving throw. On a failed save, the creature is incapacitated and its speed becomes 0 until the start of your next turn.\n   You can use your Immobilizing Gaze a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "Prof. times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a Con save, fail: incapacitated and speed reduced to 0 until my next turn. [+1 to any ability score.]",
	usages : "Prof bonus times per",
	recovery : "long rest",
	usagescalc : "event.value = What('Proficiency Bonus');",
	limfeaname : "Immobilizing Gaze",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		calculate : "event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Strength.]';",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		calculate : "event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Dexterity.]';",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		calculate : "event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Constitution.]';",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		calculate : "event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Intelligence.]';",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		calculate : "event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Wisdom.]';",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		calculate : "event.value = Number(What('Proficiency Bonus')) + ' (prof bonus) times per LR, with Attack action, I can replace an attack: A creature within 60 feet that can see me (immune to restrained: auto success) makes a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Con Mod'))) + ' Con save (DC = 8 + prof bonus + Con mod), fail: incap. and speed 0 until my next turn. [+1 Charisma.]';",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["tauran"] = {
	name : "Tauran",
	source : ["VSoS", 19],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Your large nose, strong jaw, and wide head do much to reveal your distantly bovine nature, but the prominent bull-horns atop your head reveal to all that you are half-minotaur. Taurans tower over most people and can solve mazes with ease, but typically possess only a shadow of their minotaur parent's might. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You always know which direction is north, and you have advantage on any Wisdom(Survival) check you make to navigate or track.\n \u2022 On any turn in which you only move in a straight line, your speed increases by 10 feet.\n \u2022 You have two horns that you can use to effectively gore your enemies. The horns are a natural melee weapon that you can use to make unarmed strikes. On a hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.", 
	description : "I always know which way is north, and have adv. on Wis(Sur) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 to any ability score.]",
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*tauran)(?=.*horns).*$/i,
		name : "Tauran Horns",
		source : ["VSoS", 19],
		damage : [1, 6, "piercing"],
		selectNow : true
	}],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I always know which way is north, and have adv. on Wisdom (Survival) checks to navigate or track. If I move only in a straight line on my turn, my speed increases by 10 ft for that turn. I can use my horns to make unarmed attacks, dealing 1d6 + Strength in piercing damage on a hit. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["troll-blooded"] = {
	name : "Troll-Blooded",
	source : ["VSoS", 19],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "With their green-tinted and boil-ridden skin, spindly fingers, and pointed teeth, few people will mark troll-blooded individuals as half-human. These half-humans exclusively favor the look of their troll parentage and have immense difficulty in human society. You have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You retain some of the regenerative properties of your troll parentage. Whenever you have no more than one-fourth of your maximum hit points (rounded down), you regain 1 hit point each minute. You can't use this trait if you have 0 hit points.",
	description : "Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 to any ability score.]",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "Whenever I have more than zero but fewer than one-fourth of my maximum hit points (rounded down), I regain 1 hit point each minute. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["two-headed"] = {
	name : "Two-Headed",
	source : ["VSoS", 19],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Like ettins, you have two heads with differing personalities that jointly control your body.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on saving throws you make to avoid or end the following conditions on yourself: blinded, charmed, deafened, frightened.\n \u2022 Because one of your heads is always awake, you retain consciousness when you take a long rest.",
	description : "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 to any ability score.]",
	savetxt : {
		adv_vs : ["blinded", "charmed", "deafened", "frightened"],
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I can retain consciousness while taking a long rest. I have advantage against blinded, charmed, deafened, and frightened. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["windswept"] = {
	name : "Windswept",
	source : ["VSoS", 19],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Carefree and constantly possessed of wanderlust, the extraordinarily pale windswept embody their connection to Elemental Air. Windswept humans are never likely to sleep in the same bed for two nights in a row; they are always moving, always exploring, and always following the wind. You are lighter than a normal human, capable of floating gently on the breeze, and have faint inborn power over the winds, which grant you have the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to lightning damage.\n \u2022 You know the message cantrip. Starting at 3rd level, you can cast the feather fall spell with this trait. Starting at 5th level, you can also cast the gust of wind spell with this trait, without requiring a material component. Once you cast gust of wind with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n \u2022 Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).", 
	description : "I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 to any ability score.]",
	dmgres: ["Lightning"],
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
        name : "Windswept (level 1)",
        spells : ["message"],
        selection : ["message"],
        firstCol : "atwill"
    }, {
        name : "Windswept (level 3)",
        spells : ["feather fall"],
        selection : ["feather fall"],
        firstCol : "oncelr",
        times : levels.map( function(n) {
			return n < 3 ? 0 : 1;
		})
    }, {
        name : "Windswept (level 5)",
        spells : ["gust of wind"],
        selection : ["gust of wind"],
        firstCol : "oncelr",
		times : levels.map( function(n) {
			return n < 5 ? 0 : 1;
		})
    }],
	spellChanges : {
		"gust of wind" : {
			components : "V,S",
			compMaterial : "",
			changes : "Casting gust of wind no longer requires material components"
		}
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I resist lightning damage and I know the Message cantrip. At 3rd level, I can cast Feather Fall 1/LR. At 5th, I can cast Gust of Wind 1/LR. Spells use Intelligence, Wisdom, or Charisma and can also be cast with spell slots. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

FeatsList["winged"] = {
	name : "Winged",
	source : ["VSoS", 19],
	prerequisite : "Chosen at 1st level only, Near-Human variant",
	prereqeval : function(v) {
		return classes.totallevel === 1 && CurrentRace.known === 'human' && CurrentRace.variant;
	},
	descriptionFull : "Winged humans, sometimes called Icarusians, are the offspring of aarakocra, harpies, or birdfolk. Depending on their parentage, these humans might possess feathers, talons, or beaks.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.", 
	description : "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 to any ability score.]",
	speed : {
		fly : { spd : "walk", enc : "walk" },
	},
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have a flying speed equal to my walking speed. I can't use my flying speed while wearing medium or heavy armor. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

// ! This section adds classes
// ! Will need to be checked after subclasses has been added for required discorveries

// * Alchemist class
ClassList["alchemist"] = {
    name: "Alchemist",
    regExpSearch: /alchemist/i,
    source: ["VSoS", 28],
    primaryAbility: "Intelligence or Dexterity",
    prereqs: "Intelligence 13",
    die: 6,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5],
    saves: ["Dex", "Int"],
    abilitySave: 4,
    skillstxt: {
        primary: "Choose three from Arcana, History, Insight, Medicine, Nature, Perception, Sleight of Hand, Survival",
    },
    toolProfs: {
        primary: ["Alchemist's supplies", "herbalism kit"],
        secondary: ["Alchemist's supplies"]
    },
    armorProfs: {
        primary: [true, false, false, false],
        secondary: [true, false, false, false]
    },
    weaponProfs: {
        primary: [true, false, ["bombs"]],
        secondary: [false, false, ["bombs"]]
    },
    equipment: "Alchemist starting equipment: " +
        "\n \u2022 light crossbow and 20 bolts or any simple weapon;" +
        "\n \u2022 An explorer's pack or a scholar's pack;" +
        "\n \u2022 Alchemist's supplies;" +
        "\n \u2022 A vial of acid or a flask of alchemist's fire or a vial of basic poison;" +
        "\n \u2022 Leather armor and a dagger",
    subclasses: ["Field of Study", []],
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    features: {
        "natural philosopher": {
            name: "Natural Philosopher",
            source: ["VSoS", 28],
            minlevel: 1,
            description: desc([
                "I can add half my prof. bonus rounded up to any ability check to identify herbs, potions,",
                "poisons, or other alchemical substances, on top of any normal prof. bonus."
            ])
        },
        "bombs": {
            name: "Bombs",
            source: ["VSoS", 29],
            minlevel: 1,
            description: desc([
                "On short or long rest, create bombs with necessary materials that go inert after 24 hours.",
                "My bomb save DC is 8 + prof. bonus + my Int mod. Once per turn I can take the Use an",
                "Object action to prime and throw a bomb. This bomb can use Int mod for the damage roll.",
                "Primed bomb damage increases to 2d10 at 5th, 3d10 at 11th, and 4d10 at 17th."
            ]),
			weaponOptions : [{
				name : "Primed Bomb",
				regExpSearch : /primed bomb/i,
				source : ["VSoS", 29],
				baseWeapon : "bomb",
				damage : ["C", 10, "Fire"],	
				tooltip : "Special: Once per turn, I can use the \"Use an Object\" action to prime and throw a bomb. When priming a bomb, I get to add my Intelligence modifier instead of my Dexterity to the bomb's damage roll." + "\n   Additionally, I can use a bonus action to empty some of the bomb's explosive material to permanently remove the blast radius from this bomb, dealing damage only to the bomb's target.",
				selectNow : true
			}, {
				name : "Bomb (Alchemist)",
				regExpSearch : /bomb \(alchemist\)/i,
				source : ["VSoS", 29],
				baseWeapon : "bomb",
				description : "Finesse, special, Dex save or \u00BD dmg to all in 7.5 ft; See tool tip",
				tooltip : "   Special: When a bomb hits a target, it explodes in a 5-foot radius and is destroyed. The bomb can be thrown at an unoccupied space within its range. Each creature other than the target within the blast radius must succeed on an Intelligence saving throw, taking half the damage rolled on a failed save or no damage on a successful one.\n   Additionally, as a bonus action, you can empty some of the bomb's explosive material to permanently remove the blast radius from this bomb, dealing damage only to the bomb's target.",			
				damage : ["C", 10, "Fire"],	
				selectNow : true
			}],
            calcChanges: {
				atkAdd : [
					function(fields, v) { 
						if((/bomb/i).test(v.WeaponTextName)) { // * Proficient in all bombs
							// * This replaces the bombs normal Dex save to an Int save
							fields.Description = fields.Description.replace(/dc \d+ dex save/i, "Dex save");
							fields.Description_Tooltip = fields.Description_Tooltip.replace(/on a DC 11 Dexterity/i, "an Intelligence");
							fields.Proficiency = true;
							fields.Mod = 4;
						};
					}
				],
                atkCalc: [
                    function (fields, v, output) {
                        if (((/bomb/i).test(v.WeaponTextName) || v.baseWeapon == "bomb") && (/\(?primed\)?/i).test(v.WeaponTextName)) { // * Only applies to primed bombs
							/* 
								* Since this only applies to primed bombs, abilitytodamage is set to true 
								* But we changed the ability to 4 and used dc true to show the Save DC of 8 + PB + Int mod
								* So currently primed bombs are adding int mod to the damage instead of dex from the original
								* We need to change it back to Dex if it is higher than Int
							*/
							var mod = What("Str Mod") > What("Dex Mod") ? What("Str Mod") : What("Dex Mod");
							if(What("Int Mod") < mod) {
								output.extraDmg = Math.max(mod - What("Int Mod"), 0);
							};
                        };
						if((/bomb/i).test(v.WeaponTextName) && !(/\(?primed\)?/i).test(v.WeaponTextName) && !v.theWea.excludeBombDamage) { // * Only applies to non-primed bombs that CAN do damage
							output.extraDmg = (What("Str Mod") > What("Dex Mod") ? What("Str Mod") : What("Dex Mod")) - What("Int Mod");
						}
                    },
                    "When priming a bomb, I can add my Intelligence modifier instead of my Dexterity to the bomb's damage roll."
                ],
            },
			usages : "10 + 2\xD7 my alchemist level of Bombs per ",
			usagescalc : "event.value = 2 * classes.known.alchemist.level + 10;",
			recovery : "short rest",
            action: [["action", "Prime & Throw a Bomb"], ["bonus action", "Remove Some of the Bomb's Material"]],
			extraLimitedFeatures : [{
				name : "Prime a Bomb",
				usages : 1,
				recovery : "Turn"
			}]
        },
        "bomb formulae": {
            name: "Bomb Formulae",
            source: [["VSoS", 29], ["VSoS", 31]],
            minlevel: 2,
            additional: levels.map(function (n) {
                return n < 2 ? "" : (n < 5 ? "3" : n < 7 ? "4" : n < 9 ? "5" : n < 11 ? "6" : n < 13 ? "7" : n < 15 ? "8" : n < 17 ? "9" : n < 19 ? "10" : "11") + " bomb formulae known";
            }),
            description: desc([
                "I learn bomb formulae I can use once per turn to modify my bombs when I prime them.",
                "Use the \"Choose Feature\" button above to add Bomb Formulae to the notes pages." ,
                "When I gain a level in this class, I can replace a bomb formula I know with another."
            ]),
            toNotesPage : [{
                name: "Known Bomb Formulae",
                source: ["VSoS", 29],
                note: ["I know these formulae and can apply them once per turn when I prime a bomb.",
                       "Known Bomb formulae are written here as follows:\n" + "\u25C6Bomb Formula [Damage Die, Type - Saving Throw]",
					   "Description of additional effects written here."
                ]
            }],
            extraname: "Bomb Formulae",
            extrachoices: ["Acid Bomb", "Bramble Bomb", "Cryo Bomb", "Holy Bomb", "Impact Bomb", "Incendiary Bomb", "Laughing Gas Bomb", "Lightning Bomb", "Nonlethal Bomb", "Oil Bomb", "Prismatic Bomb", "Psionic Bomb", "Quiet Bomb", "Seeking Bomb", "Smoke Bomb", "Sonic Bomb", "Stink Bomb", "Teleportation Bomb", "Thermobaric Bomb", "Withering Bomb"],
            extraTimes: levels.map(function (n) {
                return n < 2 ? 0 : (n < 5 ? 3 : n < 7 ? 4 : n < 9 ? 5 : n < 11 ? 6 : n < 13 ? 7 : n < 15 ? 8 : n < 17 ? 9 : n < 19 ? 10 : 11);
            }),
            "acid bomb": {
                name: "Acid Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Acid Bomb [d6 Acid - Dexterity]",
                    note: "All affected take the same amount of damage again at the end of their next turn",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Acid Bomb",
					source : ["VSoS", 31],
					regExpSearch : /acid bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 4, "Acid"],
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bacid\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
                                fields.Description += (fields.Description ? '; ' : '') + "Crea(s) take same dmg at end of next turn";
							}
                        },
                        "When the word 'Acid' is added to the title one of my Bomb attacks, the attack is treated as one of my Acid Bombs."
                    ]
                }
            },
            "bramble bomb": {
                name: "Bramble Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Bramble Bomb [No Damage - No Save]",
                    note: "\nBlast radius becomes difficult terrain for 1 minute; prone creatures must Str save before it can move or stand",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Bramble Bomb",
					source : ["VSoS", 31],
					regExpSearch : /bramble bomb/i,
					baseWeapon : "bomb",
					ability : 0,
					abilitytodamage : false,
					excludeBombDamage : true,
					damage :  ["", "", ""]
				}],
				calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bbramble\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save or \u00BD dmg to all in 7\.5 ft/i, "Diff. terrain in 7.5 ft for 1 min, if prone on detonate, Str save to move or stand");
                            }
                        },
                        "When the word 'Bramble' is added to the title one of my Bomb attacks, the attack is treated as one of my Bramble Bombs."
                    ]
                }
            },
            "cryo bomb": {
                name: "Cryo Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Cryo Bomb [d8 Cold - Constitution]",
                    note: "\nAll affected get -10 ft move speed until the end of their next turn",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Cryo Bomb",
					source : ["VSoS", 31],
					regExpSearch : /cryo bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 8, "Cold"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bcryo\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save/i, "Con save").replace(/dmg to all/i, "dmg and -10 ft speed to all");
								fields.Description_Tooltip = fields.Description_Tooltip.replace(/an intelligence/i, "on a Constitution");
                            }
                        },
                        "When the word 'Cryo' is added to the title one of my Bomb attacks, the attack is treated as one of my Cryo Bombs."
                    ]
                }
            },
            "holy bomb": {
                name: "Holy Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Holy Bomb [d8 Radiant - Dexterity]",
                    note: "\nThis bomb's damage dice are d6s vs Celestials, or d12s vs Fiends/Undead",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Holy Bomb",
					source : ["VSoS", 31],
					regExpSearch : /holy bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 10, "Radiant"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bholy\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
                                fields.Description +=  (fields.Description ? '; ' : '') + "d6 vs Celestials; d12 vs Fiends/Undead";
                            }
                        },
                        "When the word 'Holy' is added to the title one of my Bomb attacks, the attack is treated as one of my Holy Bombs"
                    ]
                }
            },
            "impact bomb": {
                name: "Impact Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Impact Bomb [d8 Force - Dexterity]",
                    note: "\nAll affected are pushed 5 feet away from the blast",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Impact Bomb",
					source : ["VSoS", 31],
					regExpSearch : /impact bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 8, "Force"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bimpact\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dmg to all/i, "dmg and pushed 5 ft away to all");
                            }
                        },
                        "When the word 'Impact' is added to the title one of my Bomb attacks, the attack is treated as one of my Impact Bombs."
                    ]
                }
            },
            "incendiary bomb": {
                name: "Incendiary Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Incendiary Bomb [d6 Fire - Dexterity]",
                    note: "\nUntil start of my next turn, creatures that end turn in blast radius take half damage."+
                           " Flammable objects that aren't being worn or carried ignite",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Incendiary Bomb",
					source : ["VSoS", 32],
					regExpSearch : /incendiary bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 6, "Force"]
				}],                
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bincendiary\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {								
                                fields.Description += (fields.Description ? '; ' : '') + "Crea(s) still in rad. next turn take \u00BD dmg";
                            }
                        },
                        "When the word 'Incendiary' is added to the title one of my Bomb attacks, the attack is treated as one of my Incendiary Bombs."
                    ]
                }
            },
            "laughing gas bomb": {
                name: "Laughing Gas Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Laughing Gas Bomb [d6 Poison - Constitution]",
                    note: "\nAll affected fall prone and are immune to this effect for 24 hours",
                    amendTo: "Known Bomb Formulae"
                }],  
				weaponOptions : [{
					name : "Laughing Gas Bomb",
					source : ["VSoS", 32],
					regExpSearch : /laughing gas bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 6, "Poison"]
				}], 
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\blaughing gas\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save/i, "Con save").replace(/dmg to all/i, "dmg and fall prone to all");
                            }
                        },
                        "When the word 'Laughing Gas' is added to the title one of my Bomb attacks, the attack is treated as one of my Laughing Gas Bombs."
                    ]
                }
            },
            "lightning bomb": {
                name: "Lightning Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Lightning Bomb [d8 Lightning - Dexterity]",
                    note: "\nAll affected can't take reactions until the end of their next turn",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Lightning Bomb",
					source : ["VSoS", 32],
					regExpSearch : /lightning bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 8, "Lightning"]
				}],  
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\blightning\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/in 7\.5 ft/i, "in 7.5 ft and no rea. til end of next turn");
                            }
                        },
                        "When the word 'Lightning' is added to the title one of my Bomb attacks, the attack is treated as one of my Lightning Bombs."
                    ]
                }
            },
            "nonlethal bomb": {
                name: "Nonlethal Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Nonlethal Bomb [d8 Bludgeoning - Dexterity]",
                    note: "\nBlast radius ignores 1/2 & 3/4 cover. Creatures dropped to 0 hp are K.O'd, stable.",
                    amendTo: "Known Bomb Formulae"
                }],
                weaponOptions : [{
					name : "Nonlethal Bomb",
					source : ["VSoS", 32],
					regExpSearch : /nonlethal bomb/i,
					baseWeapon : "bomb",
					damage :  ["C", 8, "Bludgeoning"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bnonlethal\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description += (fields.Description ? '; ' : '') + "Blast ignores all but full cover";
                            }
                        },
                        "When the word 'Nonlethal' is added to the title one of my Bomb attacks, the attack is treated as one of my Nonlethal Bombs."
                    ]
                }
            },
            "oil bomb": {
                name: "Oil Bomb Formula",
                description: " See notes",
                additional: levels.map(function(n) { return "Max oil damage: " + Math.ceil(n/2) + "d6"}),
                toNotesPage: [{
                    name: "Oil Bomb [d8 Bludgeoning - Dexterity]",
                    note: "\nBlast radius coats creatures in oil. Oil can be removed with a gallon of water."+
                          "\nThe next fire damage to coated creature deals +1d6 fire damage per damage die rolled. Extra fire damage dice added cannot exceed half my alchemist level, rounded up",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Oil Bomb",
					source : ["VSoS", 32],
					regExpSearch : /oil bomb/i,
					baseWeapon : "bomb",
					ability : 0,
					abilitytodamage : false,
					excludeBombDamage : true,
					damage : ["", "", ""]
				}],
				calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\boil\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save or \u00BD dmg to all in 7\.5 ft/i, "Dex save or covered in oil to all in 7.5 ft");
                            }
                        },
                        "When the word 'Oil' is added to the title one of my Bomb attacks, the attack is treated as one of my Oil Bombs."
                    ]
                }
            },
            "prismatic bomb": {
                name: "Prismatic Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Prismatic Bomb [d8 damage dice]",
                    note: "\nDamage type and save ability are determined by rolling on the below tables."+
                        "\nd6    Damage Type        d6    Saving Throw"+
                        "\n1      Acid                      1-2    Dexterity"+
                        "\n2      Cold                      3-4    Constitution"+
                        "\n3      Fire                        5-6   Wisdom"+
                        "\n4      Lightning"+
                        "\n5      Poison"+
                        "\n6      Radiant",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Prismatic Bomb",
					source : ["VSoS", 32],
					regExpSearch : /prismatic bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 8, ""]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bprismatic\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save/i, "Save") + (fields.Description ? '; ' : '') + "See Table for dmg & save type" ;
                            }
                        },
                        "When the word 'Prismatic' is added to the title one of my Bomb attacks, the attack is treated as one of my Prismatic Bombs."
                    ]
                }
            },
            "psionic bomb": {
                name: "Psionic Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Psionic Bomb [d6 Psychic - Wisdom]",
                    note: "\nAll affected have disadv. on concentration saves until the end of their next turn, including against this bomb's damage.",
                    amendTo: "Known Bomb Formulae"
                }],
                weaponOptions : [{
					name : "Psionic Bomb",
					source : ["VSoS", 33],
					regExpSearch : /psionic bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 6, "Psychic"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bpsionic\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save/i, "Wis save").replace(/dmg to all/i, "dmg and disadv. on Conc. saves til end of next turn to all");
                            }
                        },
                        "When the word 'Psionic' is added to the title one of my Bomb attacks, the attack is treated as one of my Psionic Bombs."
                    ]
                }
            },
            "quiet bomb": {
                name: "Quiet Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Quiet Bomb [d6 Fire - Dexterity]",
                    note: "\nOnly audible out 10 ft, makes no light. Disadv. on ability checks to detect blast",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Quiet Bomb",
					source : ["VSoS", 33],
					regExpSearch : /quiet bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 8, "Fire"]
				}],
                calcChanges: {
                    atkAdd : [
                        function (fields, v) {
                            if (/\bquiet\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description += (fields.Description ? '; ' : '') + "Disadv. on ability checks to detect blast";
                            }
                        },
                        "When the word 'Quiet' is added to the title one of my Bomb attacks, the attack is treated as one of my Quiet Bombs."
                    ]
                }
            },
            "seeking bomb": {
                name: "Seeking Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Seeking Bomb [d6 Fire - Dexterity]",
                    note: "\nRanged attack rolls with this bomb don't get disadv. when within 5 ft of a hostile",
                    amendTo: "Known Bomb Formulae"
                }],
                weaponOptions : [{
					name : "Seeking Bomb",
					source : ["VSoS", 33],
					regExpSearch : /seeking bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 6, "Fire"]
				}],
                calcChanges: {
                    atkAdd : [
                        function (fields, v) {
                            if (/\bseeking\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description += (fields.Description ? '; ' : '') + "No disadv. when within 5 ft of a hostile";
                            }
                        },
                        "When the word 'Seeking' is added to the title one of my Bomb attacks, the attack is treated as one of my Seeking Bombs."
                    ]
                }
            },
            "smoke bomb": {
                name: "Smoke Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Smoke Bomb [No Damage - No Save]",
                    note: "\nFills a 10 ft rad. sphere with heavily-obscuring smoke that lasts (Int mod min 1) rounds. Wind speeds of at least 10 miles/hour disperses it. The smoke spreads around corners. Once thrown, I cannot throw another smoke bomb for 1 minute",
                    amendTo: "Known Bomb Formulae"
                }],
                weaponOptions : [{
					name : "Smoke Bomb",
					source : ["VSoS", 33],
					regExpSearch : /smoke bomb/i,
					baseWeapon : "bomb",
					ability : 0,
					abilitytodamage : false,
					excludeBombDamage : true,
					damage : ["", "", ""]
				}],
				calcChanges: {
					atkAdd : [
						function (fields, v) { 
							if (/\bsmoke\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save or \u00BD dmg to all in 7\.5 ft/i, "Smoke fills 10 ft rad. sphere") + (fields.Description ? '; ' : '') + "Lasts " + Math.max(What("Int Mod"), 1) + " round(s)";
							}
						},
						"When the word 'Smoke' is added to the title one of my Bomb attacks, the attack is treated as one of my Sonic Bombs."
					]
				}
            },
            "sonic bomb": {
                name: "Sonic Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Sonic Bomb [d6 Thunder - Constitution]",
                    note: "\nCreatures affected by this bomb are deafened until the end of their next turn",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Sonic Bomb",
					source : ["VSoS", 33],
					regExpSearch : /sonic bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 6, "Thunder"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bsonic\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save/i, "Con save").replace(/dmg to all/i, "dmg and deaf til end of next turn to all");
                            }
                        },
                        "When the word 'Sonic' is added to the title one of my Bomb attacks, the attack is treated as one of my Sonic Bombs."
                    ]
                }
            },
            "stink bomb": {
                name: "Stink Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Stink Bomb [d8 Poison - Constitution]",
                    note: "\nAffected have disadv. on ability checks they make until the end of their next turn",
                    amendTo: "Known Bomb Formulae"
                }],
                weaponOptions : [{
					name : "Stink Bomb",
					source : ["VSoS", 33],
					regExpSearch : /stink bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 8, "Poison"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bstink\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save/i, "Con save").replace(/dmg to all/i, "dmg and disadv. on ability checks til end of next turn to all");
                            }
                        },
                        "When the word 'Stink' is added to the title one of my Bomb attacks, the attack is treated as one of my Stink Bombs."
                    ]
                }
            },
            "teleportation bomb": {
                name: "Teleportation Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Teleportation Bomb [No Damage - No Save]",
                    note: "\nInstantly teleports me to where it explodes. Fails if it explodes over 30 ft away",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Teleportation Bomb",
					source : ["VSoS", 33],
					regExpSearch : /teleportation bomb/i,
					baseWeapon : "bomb",
					ability : 0,
					abilitytodamage : false,
					excludeBombDamage : true,
					damage : ["", "", ""]
				}],
				calcChanges : {
					atkAdd : [
						function(fields, v) { 
							if(/\bteleportation\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save or \u00BD dmg to all in 7\.5 ft/i, "Teleport to where it explodes");
								fields.Range = "30 ft";
							}
						},
						"When the word 'Teleportation' is added to the title one of my Bomb attacks, the attack is treated as one of my Thermobaric Bombs."
					]
				}
            },
            "thermobaric bomb": {
                name: "Thermobaric Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Thermobaric Bomb [d6 Fire - Dexterity]",
                    note: "\nThis bomb's blast radius is 10 feet instead of 15 feet",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Thermobaric Bomb",
					source : ["VSoS", 33],
					regExpSearch : /thermobaric bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 6, "Fire"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bthermobaric\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/7\.5 ft/i, "10 ft");
                            }
                        },
                        "When the word 'Thermobaric' is added to the title one of my Bomb attacks, the attack is treated as one of my Thermobaric Bombs."
                    ]
				}
            },
            "withering bomb": {
                name: "Withering Bomb Formula",
                description: " See notes",
                toNotesPage: [{
                    name: "Withering Bomb [d8 Necrotic - Constitution]",
                    note: "\nAll affected by this bomb cannot regain hit points until the end of their next turn",
                    amendTo: "Known Bomb Formulae"
                }],
				weaponOptions : [{
					name : "Withering Bomb",
					source : ["VSoS", 33],
					regExpSearch : /withering bomb/i,
					baseWeapon : "bomb",
					damage : ["C", 8, "Necrotic"]
				}],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/\bwithering\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dex save/i, "Con save").replace(/dmg to all/i, "dmg and can't regain HP til end of next turn to all");
                            }
                        },
                        "When the word 'Withering' is added to the title one of my Bomb attacks, the attack is treated as one of my Withering Bombs."
                    ]
                }
            }
        },
        "subclassfeature2": {
            name: "Field of Study",
            source: ["VSoS", 29],
            minlevel: 2,
            description: "\n    " + "Choose a Field of Study in the \"Class\" field."
        },
        "reagent": {
            name: "Reagent",
            source: ["VSoS", 29],
            minlevel: 3,
            description: desc([
                "I gain a pool of Reagent dice. I can expend reagent dice to:",
                "\u2022 add them to the damage of a primed bomb (number added can't exceed proficiency bonus).",
                "\u2022 Spend 10 min to brew potions that use my bomb save DC & retain potency for 24 hours.",
                "1/LR after a short rest, I can regain spent reagent dice I didn't use to brew potions."
            ]),
            toNotesPage: [{
                name: "Reagent Potions Table",
                note: [
                    "I can brew these potions by expending reagent dice, as long as I meet",
					"the Alchemist level requirement.",
                    "Potion                                     Cost        Alchemist Level",
                    "Potion of Climbing                 1 die           3rd",
                    "Potion of Growth                    1 die           3rd",
                    "Potion of Healing                    1 die           3rd",
                    "Potion of Water Breathing      1 die           3rd",
                    "Universal Solvent                    1 die           3rd",
                    "Cure-All                                  2 dice          7th",
                    "Potion of Greater Healing       2 dice          7th",
                    "Potion of Heroism                   2 dice          7th",
                    "Potion of Resistance               2 dice          7th",
                    "Sovereign Glue (1 ounce)        2 dice          7th",
                    "Potion of Dimunition               3 dice         14th",
                    "Potion of Flying                       4 dice          14th",
                    "Potion of Hill Giant Strength    4 dice         14th",
                    "Potion of Invisibility                 4 dice          14th",
                    "Potion of Superior Healing       4 dice         14th"
                ],
                popupName: "Alchemist's Reagent Potions Table",
                amendTo: "Poisoner's Poisons Table",
            }],
            additional : levels.map( function(n) {
				return n + " reagent dice";
			}),
            extraLimitedFeatures: [{
                name: "Reagent Synthesis",
                usages: 1,
                recovery: "long rest",
            }, {
				name : "Reagent Dice (d10)",
				usages: "Alchemist level",
				usagescalc : "event.value = classes.known.alchemist.level < 3 ? 0 : classes.known.alchemist.level;",
				recovery: "long rest",
			}]
        },
        "discoveries": {
            name: "Discoveries",
            source: ["VSoS", 30],
            minlevel: 4,
            additional: levels.map(function (n) {
                return n < 4 ? "" : (n < 6 ? "2" : n < 9 ? "3" : n < 13 ? "4" : n < 17 ? "5" : "6") + " discoveries known";
            }),
            description: desc([
                "Choose discoveries to learn by clicking the \"Choose Feature\" button above.",
                "When I gain a level in this class, I may replace a discovery I know with another."
            ]),
            extraname: "Discoveries",
            extrachoices: ["Fire in The Hole (prereq: 9th level Alchemist)", "Advanced Poisoner (prereq: 13th level Venomsmith)", "Alchemy of Ascendancy (prereq: 17th level Alchemist)", "Alchemy of Influence (prereq: 13th level Alchemist)", "Alchemy of Transformation (prereq: 13th level Alchemist)", "Arcane Study", "Ballistics Research", "Battle Training", "Beguiling Haze (prereq: 13th level Amorist)", "Buffered Metabolism (prereq: 13th level Xenoalchemist)", "Clotting Agent", "Craft Homonculus", "Demolition Spree (prereq: 13th level Mad Bomber)", "Explosive Missile", "Fire Brand", "Fire Eater", "Fortified Serum (prereq: 13th level Apothecary)", "Grenadier", "Dynamo Charger (prereq: 13th level Dynamo Engineer)", "Hemoreagent (prereq: 17th level Alchemist)", "Lazarus Bolt (prereq: 9th level Alchemist)", "Magnified Blast (prereq: 17th level Alchemist)", "Ooze Cowboy (prereq: 13th level Ooze Rancher)", "Poisoner", "Precision Explosives", "Reactionary Gulp (prereq: 17th level Alchemist)", "Recycled Potions", "Syringe", "Tri-Mutation (prereq: 13th level Mutagenist)"],
            extraTimes: [0, 0, 0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
			"advanced poisoner (prereq: 13th level venomsmith)": {
                name: "Advanced Poisoner",
                source: ["VSoS", 34],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("venomsmith") !== -1 },
                description: "\n   " + "I can brew the poisons found on the notes page using reagent dice.",
                toNotesPage: [{
                    name: "Advanced Poisons Table",
                    note: [
                        "I can brew these poisons by expending reagent dice.",
                        "Poison                                 Cost",
                        "Burnt Othur Fumes            3 dice",
                        "Crawler Mucus                   3 dice,",
                        "Drow Poison                      3 dice",
                        "Pale Tinture                       4 dice",
                        "Midnight Tears                  5 dice",
                        "Wyvern Poison                  6 dice",
                    ],
                    popupName: "Advanced Poisoner's Poisons Table",
                    amendTo: "Reagent Potions Table",
                }]
            },
            "alchemy of ascendancy (prereq: 17th level alchemist)": {
                name: "Alchemy of Ascendancy",
                source: ["VSoS", 34],
                submenu: "[17th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 17 },
                description: "\n   " + "I can brew new potions found on the notes page using reagent dice.",
                toNotesPage: [{
                    name: "Alchemy of Ascendancy Potions Table",
                    note: [
                        "I can brew these potions by expending reagent dice.",
                        "Potion                                             Cost",
                        "Necromantic Draught                    4 dice",
                        "Oil of Etherealness                          4 dice,",
                        "Potion of Speed                              4 dice",
                        "Potion of Stone Giant Strength       4 dice",
                    ],
                    amendTo: "Reagent Potions Table",
                    popupName: "Alchemy of Ascendancy Potions Table",
                }]
            },
            "alchemy of influence (prereq: 13th level alchemist)": {
                name: "Alchemy of Influence",
                source: ["VSoS", 34],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 },
                description: "\n   " + "I can brew new potions found on the notes page using reagent dice.",
                toNotesPage: [{
                    name: "Alchemy of Influence Potions Table",
                    note: [
                        "I can brew these potions by expending reagent dice.",
                        "Potion                                             Cost",
                        "Potion of Animal Friendship           1 die",
                        "Philter of Love                                2 dice",
                        "Potion of Clairvoyance                   3 dice",
                        "Potion of Mind Reading                  3 dice",
                    ],
                    amendTo: "Reagent Potions Table",
                    popupName: "Alchemy of Influence Potions Table",
                }]
            },
            "alchemy of transformation (prereq: 13th level alchemist)": {
                name: "Alchemy of Transformation",
                source: ["VSoS", 34],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 },
                description: "\n   " + "I can brew new potions found on the notes page using reagent dice.",
                toNotesPage: [{
                    name: "Alchemy of Transformation Potions Table",
                    note: [
                        "I can brew these potions by expending reagent dice.",
                        "Potion                                    Cost",
                        "Potion of Slipperiness            2 die",
                        "Sandstone Solution               2 dice",
                        "Aqua Fortis                            3 dice",
                        "Chameleon Concoction         3 dice",
                        "Potion of Gaseous Form        3 dice",
                    ],
                    popupName: "Alchemy of Transformation Potions Table",
                    amendTo: "Reagent Potions Table",
                }]
            },
			"arcane study": {
                name: "Arcane Study",
                source: ["VSoS", 34],
                description: "\n   I learn 3 wizard cantrips. Intelligence is my Spellcasting ability for these cantrips.",
                spellcastingBonus: [{
                    name: "Arcane Study",
                    spellcastingAbility: 4,
                    "class": ["wizard"],
					times : levels.map(function (n) {
						return n < 3 ? 0 : 3;
					}),
                    level: [0, 0]
                }]
            },
            "ballistics research": {
                name: "Ballistics Research",
                source: ["VSoS", 34],
                description: " I learn 2 additional bomb formulae.",
                bonusClassExtrachoices: [{
                    'class': "alchemist",
                    feature: "bomb formulae",
                    bonus: 2
                }]
            },
            "battle training": {
                name: "Battle Training",
                source: ["VSoS", 34],
                description: " I gain proficiency with martial weapons and shields.",
                weaponProfs: [true, true],
                armorProfs: [true, false, false, true],
            },
            "beguiling haze (prereq: 13th level amorist)": {
                name: "Beguiling Haze",
                source: ["VSoS", 34],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("amorist") !== -1},
                description: "\n   When I charm a creature, I can choose to place it in a dreamy state."+
                             "\n   While charmed, it is nonhostile and acts as if it is charmed by everyone it sees equally.",
                usages: 1,
                recovery: "short rest",
            },
            "buffered metabolism (prereq: 13th level xenoalchemist)": {
                name: "Buffered Metabolism",
                source: ["VSoS", 35],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("xenoalchemist") !== -1},
                description: "\n   When I take damage, I can use my reaction and reagent dice (max prof. bonus)."+
                             "\n   This reduces the amount of damage taken by the total rolled.",
                action: ["reaction", ""],
            },
            "clotting agent": {
                name: "Clotting Agent",
                source: ["VSoS", 35],    
                description: " My hit point max is increased by my alchemist level.",
                calcChanges: {
					hp : function (totalHD) {
						return [classes.known.alchemist.level * 2 + What("Con Mod"), '\n + ' + classes.known.alchemist.level + ' \xD7 2 from the Clotting Agent (' + (classes.known.alchemist.level * 2) + What("Con Mod") + ')', true];
					},
                    hpForceRecalc: true
                }
            },
            "craft homonculus": {
                name: "Craft Homunculus",
                source: ["VSoS", 35],
                description: "\n    With 8 hours of work, I can create a homunculus. Use the \"Companion Options\"" + 
							 "\n    menu on the companion page to select your homunculus.",
            },
            "demolition spree (prereq: 13th level mad bomber)": {
                name: "Demolition Spree",
                source: ["VSoS", 35],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("mad bomber") !== -1},
                description: "\n   When priming a bomb, I can throw bombs equal to the # of damage dice of the original"+
                             "\n   bomb. Each bomb deals (1d10 + Int mod) damage, & can't target the same creature/space. I"+
                             "\n   can spend reagent dice seperately on these bombs and can apply a bomb formula to only 1.",
                action: ["action", ""],
            },
            "explosive missile": {
                name: "Explosive Missile",
                source: ["VSoS", 35],
                description: "\n   As a bonus action, I can load a bomb (max 1) onto the head of a crossbow bolt."+
                             "\n   This bolt deals primed bomb damage, but has no blast radius."+ 
                             "\n   I can't fire a bomb bolt on the same turn I throw a bomb.",
				weaponOptions : [{
					name : "Explosive Missile (Primed)",
					source : ["VSoS", 33],
					regExpSearch : /explosive missile \(primed\)/i,
					baseWeapon : "bomb"
				}],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (/\bexplosive\b/i.test(v.WeaponTextName) && /\bmissile\b/i.test(v.WeaponTextName)) {
								fields.Description = fields.Description.replace(/dmg to all in 7\.5 ft/i, "dmg");
							}
						},
						"When the word 'Explosive' is added to the title one of my Bomb attacks, the attack is treated as one of my Explosive missile."
					]
				},
                action: ["bonus action", ""],
            },
            "fire brand": {
                name: "Fire Brand",
                source: ["VSoS", 35],
                description: "\n   As a bonus action, until the end of my turn, one of my melee weapons deals an extra 1d6 fire"+ 
                             "\n   damage on hit. This extra damage increases by 1d6 at 5th, 11th, and 17th level.",
                additional: levels.map(function (n) {
                    return (n < 5 ? "1" : n < 11 ? "2" : n < 17 ? "3" : "4") + "d6 additional fire damage";
                }),
                action: ["bonus action", ""],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (v.isMeleeWeapon && /fire\s*brand/i.test(v.WeaponTextName)) {
                                var n = classes.known.alchemist.level;
                                fields.Description += "; +" + (n < 5 ? "1" : n < 11 ? "2" : n < 17 ? "3" : "4") + "d6 fire dmg";
                            }
                        },
                        "If the phrase 'Fire Brand' is included in the title of a weapon attack, it is treated as a weapon coated in one of my bomb's contents, as per my Fire Brand discovery.",
                    ]
                }
            },
            "fire eater": {
                name: "Fire Eater",
                source: ["VSoS", 35],
                description: "\n   As an action, I can use a bomb to make each creature in a 15 ft cone from me Dex save vs my"+
                             "\n   bomb save DC, taking primed bomb fire damage, or half on a success. When I use this ability,"+
                             "\n   I take 1d4 fire damage for each of my bomb's damage dice.",
                weaponOptions: [{
                    name: "Fire Eater (Primed)",
                    source: ["VSoS", 35],
                    regExpSearch: /fire eater \(primed\)/i,
					baseWeapon : "bomb",
                    range: "15 ft cone",
                    description: "Finesse, special, \u00BD on Dex save, or full on fail; See tool tip; I take 1d4 fire dmg per dmg die"
                }]
            },
			"fire in the hole (prereq: 9th level alchemist)": {
				name: "Fire in The Hole",
				source: ["VSoS", 35],
				submenu: "[9th Level]",
				prereqeval: function (v) { return classes.known.alchemist.level >= 9 },
				description: "\n   My bomb save DC increases by half of my proficiency bonus, rounded down.",
				addMod : [
					{ type : "dc", field : "Int", mod : "Prof/2", text : "My bomb save DC increases by half of my proficiency bonus, rounded down."}
				],
				calcChanges : {
					spellCalc: [
						function (type, spellcasters, ability) {
							if (type == "dc" && spellcasters.indexOf('alchemist') !== -1) return Math.floor(Number(How("Proficiency Bonus") / 2));
						},
						"My bomb save DC increases by half of my proficiency bonus, rounded down.",
						750
					]
				}
			},
            "fortified serum (prereq: 13th level apothecary)": {
                name: "Fortified Serum",
                source: ["VSoS", 35],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("apothecary") !== -1},
                description: "\n   When a creature regains hit points by drinking my potions, they gain resistance to"+ 
                             "\n   nonmagical bludgeoning/piercing/slashing damage until the end of their next turn",
            },
            "grenadier": {
                name: "Grenadier",
                source: ["VSoS", 35],
                description: "\n   When I prime & throw a bomb, I can use my bonus action to make an attack with a weapon"+
                             "\n   that isn't two handed.",
                action: ["bonus action", "Grenadier (Non Two-Handed)"],
            },
            "dynamo charger (prereq: 13th level dynamo engineer)": {
                name: "Dynamo Charger",
                source: ["VSoS", 35],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("dynamo engineer") !== -1},
                description: "\n   When I finish a short rest, I can regain 2 expended spell slots stored in dynamos."+
                             "\n   I can configure these dynamos immediately.",
                usages: 1,
                recovery: "day",
            },
            "hemoreagent (prereq: 17th level alchemist)": {
                name: "Hemoreagent",
                source: ["VSoS", 36],
                submenu: "[17th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 17 },
                description: "\n   When I prime and throw a bomb, I can add 5 or fewer reagent die to the bomb's damage"+
                             "\n   without expending them, losing 1d6 hp that can't be reduced/prevented for each die added.",
            },
            "lazarus bolt (prereq: 9th level alchemist)": {
                name: "Lazarus Bolt",
                source: ["VSoS", 36],
                submenu: "[9th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 9 },
                description: "\n   As an action, I can revive a creature that died within the last min within 5 feet of me. That"+
                             "\n   creature regains 1 hp, unless they lack a heart, died of old age, or are missing vital organs.",
                usages: 1,
                recovery: "short rest",
                action: ["action", ""]
            },
            "magnified blast (prereq: 17th level alchemist)": {
                name: "Magnified Blast",
                source: ["VSoS", 36],
                submenu: "[17th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 17 },
                description: "\n   Whenever I add reagent dice to a bomb's damage, I can also expand the blast radius by 5 ft"+ 
                             "\n   per 2 reagent dice spent.",
            },
            "ooze cowboy (prereq: 13th level ooze rancher)": {
                name: "Ooze Cowboy",
                source: ["VSoS", 36],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("ooze rancher") !== -1},
                description: "\n   Slimes I make have a minimum speed of 30 ft. I can ride any Medium or larger Ooze as a"+
                             "\n   mount. My equipment and I suffer no ill effect from touching my Oozes. My Oozes add my"+ 
                             "\n   proficiency bonus to their damage and initiative rolls.",
                calcChanges: {
                    creatureCallback: [
                        function(prefix, oCrea, bAdd) {
                            if (!(/ooze/i).test(oCrea.type + What(prefix + "Comp.Desc.MonsterType"))) return;
                            Value(prefix + "Comp.Use.Combat.Init.Bonus", "oProf");
                            for (var i = 1; i < 3; ++i) {
                                Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Bonus", "oProf");
                            }
                            Value(prefix + "Comp.Use.Speed", "30 ft,\nclimb 30 ft");
                        },
                        "Oozes I create add my proficiency bonus to their damage and initiative rolls."
                    ]
                }
            },
            "poisoner": {
                name: "Poisoner",
                source: ["VSoS", 36],
                description: "\n   I gain proficiency with the poisoner's kit. I can also brew new poisons using my reagent dice."+
                             "\n   My poisons also use my bomb save DC instead of their normal save DCs.",
                toolProfs: ["Poisoner's kit"],
                toNotesPage: [{
                    name: "Poisoner's Poisons Table",
                    note: [
                        "I can brew these poisons by expending reagent dice.",
                        "Poison                                 Cost",
                        "2 x Antitoxin                        1 die",
                        "2 x Basic Poison                   1 die,",
                        "Oil of Taggit                        2 dice",
                        "Potion of Poison                  2 dice",
                        "Serpent Venom                    2 dice",
                        "Truth Serum                         2 dice",
                    ],
                    popupName: "Poisoner's Poisons Table",
                    amendTo: "Reagent Potions Table",
                }]
            },
            "precision explosives": {
                name: "Precision Explosives",
                source: ["VSoS", 36],
                description: "\n   I can choose 1 creature in the blast radius other than the target to automatically"+
                             "\n   succeed on its saving throw and take no damage from it.",
            },
            "reactionary gulp (prereq: 17th level alchemist)": {
                name: "Reactionary Gulp",
                source: ["VSoS", 36],
                submenu: "[17th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 17 },
                description: "\n   " + "Immediately after taking damage, I can use my reaction to drink a potion.",
                action: ["reaction", ""]
            },
            "recycled potions": {
                name: "Recycled Potions",
                source: ["VSoS", 36],
                description: "\n   When I brew potions, I can destroy previously brewed potions, regaining the reagent dice"+
                             "\n   used to brew them. I can't gain more than my max number of reagent dice using this ability.",
            },
            "syringe": {
                name: "Syringe",
                source: ["VSoS", 36],
                description: "\n   As a bonus action, I can inject a potion into myself or another creature within 5 feet of me,"+
                             "\n   granting the benefits of the potion. I must make a melee attack against unwilling creatures,"+
                             "\n   treating the syringe as a finesse weapon.",
                action: ["bonus action", "Syringe"],
                weaponOptions: [{
                    name: "Syringe",
                    source: ["VSoS", 36],
                    regExpSearch: /\bsyringe\b/i,
                    type: "Improvised Weapons",
                    ability: 1,
                    abilitytodamage: false,
                    damage: [0, 0, ""],
                    range: "Melee",
                    description: "Finesse; on hit, administer potion or poison to target",
                    list: "melee",
                }]
            },
            "tri-mutation (prereq: 13th level mutagenist)": {
                name: "Tri-Mutation",
                source: ["VSoS", 36],
                submenu: "[13th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 13 && classes.known.alchemist.subclass.indexOf("mutagenist") !== -1},
                description: "\n   I can inject myself with a tri-mutagen, which grants me the benefit of all mutagens at once"+
                             "\n   for 1 minute, or until I inject myself with a different mutagen.",
                usages: 1,
                recovery: "long rest",
            }
        },
        "flashbang": {
            name: "Flashbang",
            source: ["VSoS", 30],
            minlevel: 5,
            description: desc([
                "As a bonus action, each large or smaller creature within 5 feet of me can't take reactions until",
                "the start of their next turn."
            ]),
            action: ["bonus action", ""],
        },
        "evasion": {
            name: "Evasion",
            source: ["VSoS", 30],
            minlevel: 11,
            description: desc("My Dexterity saves vs. areas of effect negate damage on success and halve it on failure"),
            savetxt: { text: ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
        },
        "blast coating": {
            name: "Blast Coating",
            source: ["VSoS", 30],
            minlevel: 15,
            description: desc("I automatically succeed on saves against my own bombs and never take damage from them."),
            savetxt: {
                text : ["Saves vs. my own bombs"],
            }
        },
        "philosopher's stone": {
            name: "Philosopher's Stone",
            source: ["VSoS", 30],
            minlevel: 20,
            description: desc([
                "I can make a philosopher's stone using my alchemist's supplies, 1000 gp of materials, and",
                "7 days of work. I can only have 1 stone at a time. I also gain a new bomb formula. When I",
                "create the stone, select the Philosopher's Stone from the \"Magic Item\" dropdown menus."
            ]),
            toNotesPage: [{
                name: "Nuclear Bomb [10d10 Force - Dexterity]",
                note: "\nBlast radius is 1 mile, and destroys my philosopher's stone. Each creature in radius takes full bomb damage rolled, or half on a save. Creatures within 60 feet of the blast gain no benefit from Evasion or similar features",
                amendTo: "Known Bomb Formulae"
            }],
            weaponOptions : [{
				name : "Nuclear Bomb",
				source : ["VSoS", 30],
				regExpSearch : /nuclear bomb/i,
				baseWeapon : "bomb",
				ability : 0,
				range : "1 mile",
				damage : [10, 100, "Force"],
				ability : 0,
				abilitytodamage : false,
				excludeBombDamage : true,
				description : "Finesse, \u00BD on Dex save, or full on fail to all; Can't evade for Crea(s) in 60 ft",
				selectNow : true
			}]
        }
    }
};

// ! TODO Everything below	

// ! Alchemist Subclasses

// * Amorist Alchemist subclass
AddSubClass("alchemist", "amorist", {
	regExpSearch : /\bamorist\b/i,
	subname : "Amorist",
	source: ["VSoS", 37],
	fullname: "Amorist",
	skills: ["Deception", "Persuasion"],
	features: {
		"subclassfeature2" : {
			name: "Pheromone Bomb Formula",
			source: ["VSoS", 37],
			skills: ["Persuasion"],
			minlevel: 2,
			description: " I gain a new bomb formula. See notes",
			toNotesPage: [{
				name: "Pheromone Bomb Formula [No Damage - Wisdom]",
				note: "\nAll affected are charmed by me until the end of its next turn or it takes damage.",
				amendTo: "Known Bomb Formulae"
			}],
			weaponOptions: [{
				name: "Pheromone Bomb",
				source: ["VSoS", 37],
				regExpSearch: /\bpheromone\b/i,
				baseWeapon : "bomb",
				ability : 0,
				abilitytodamage : false,
				excludeBombDamage : true,
				damage : ["", "", ""],
				selectNow : true
			}],
			calcChanges: {
				atkAdd : [
					function (fields, v) { 
						if (/\bpheromone\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
							fields.Description = fields.Description.replace(/dex save or \u00BD dmg to all in 7\.5 ft/i, "Wis save to all in 7.5 ft or charmed til end of next turn or dmg taken");
						}
					},
					"When the word 'Pheromone' is added to the title one of my Bomb attacks, the attack is treated as one of my Pheromone Bombs."
				]
			}
		},
		"subclassfeature6" : {
			name : "Magnetic Personality",
			source: ["VSoS", 38],
			minlevel: 6,
			description: desc("I can add my Int mod to Charisma ability checks."),
			addMod : ["Deception", "Intimidation", "Performance", "Persuasion"].map(function(skill){return {type : "skill", field : skill, mod : "Int", text : "I add my Intelligence modifier to my Charisma checks"};}),
		},
		"subclassfeature10" : {
			name: "Alchemical Perfume",
			source: ["VSoS", 38],
			minlevel: 10,
			description: desc([
				"When a hostile creature within 5 ft of me makes an attack against me, it must succeed on a",
				"Wis save or gain disadv. on the attack roll. If a creature succeeds on this save, it is immune",
				"to this effect for 24 hours. Creatures that can't be charmed are immune to this effect."
			])
		},
		"subclassfeature18" : {
			name: "Alchemical Romance",
			source: ["VSoS", 38],
			minlevel: 18,
			description: desc([
				"During a long rest, I can spend 4 reagent dice to make a potion of true love. Select this ",
				"potion from the \"Magic Item\" dropdown menus."
			]),
			magicitemsAdd: ["Potion of True Love"]              
		}
	}
})

// Apothecary Alchemist subclass
AddSubClass("alchemist","apothecary", {
	regExpSearch : /\bapothecary\b/i,
	subname : "Apothecary",
	source: ["VSoS", 38],
	fullname: "Apothecary",
	skills: ["Medicine"],
	features: {
		"subclassfeature2" : {
			name: "Painkiller Bomb Formula",
			source: ["VSoS", 38],
			minlevel: 2,
			description: desc("I gain a new bomb formula. See notes"),
			toNotesPage: [{
				name: "Painkiller Bomb Formula [No Damage - No Save]",
				note: "\nOn hit, instead of damage, the target gains temporary hp for 1 min equal to the damage roll. Willing creatures don't require an attack roll. Once thrown, I cannot throw another for 1 min.",
				amendTo: "Known Bomb Formulae"
			}],
			weaponOptions: [{
				name: "Painkiller Bomb",
				source: ["VSoS", 38],
				regExpSearch: /\bpainkiller\b/i,
				baseWeapon : "bomb",
				selectNow : true
			}],
			calcChanges: {
				atkAdd : [
					function (fields, v) { 
						if (/\bpainkiller\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
							fields.Description = fields.Description.replace(/dex save or \u00BD dmg to all in 7\.5 ft/i, "Target heals for dmg rolled");
						}
					},
					"When the word 'Painkiller' is added to the title one of my Bomb attacks, the attack is treated as one of my Painkiller Bombs."
				]
			}
		},
		"subclassfeature6" : {
			name : "Potion Toss",
			source: ["VSoS", 38],
			minlevel: 6,
			description: desc("As an action, administer a potion to a willing/unconscious creature within 20 ft of me."),
			action: ["action", ""],
		},
		"subclassfeature10" : {
			name : "Self-Medication",
			source: ["VSoS", 38],
			minlevel: 10,
			description: desc("When I drink a potion that restores hp, I gain adv. on saves until the end of my next turn."),
		},
		"subclassfeature18" : {
			name : "Alchemical Resurrection",
			source: ["VSoS", 38],
			minlevel: 18,
			description: desc([
				"If I mix 500 gp of diamond dust into a potion of superior/supreme healing, I create a potion",
				"of raise dead. Select this potion from the \"Magic Item\" dropdown menus."
			]),
			magicitemsAdd: ["Potion of Raise Dead"]
		}
	}
})

// * Dynamo Engineer alchemist subclass
AddSubClass("alchemist","dynamo engineer",{
	regExpSearch : /\bdynamo engineer\b/i,
	subname : "Dynamo Engineer",
	source: ["VSoS", 38],
	fullname: "Dynamo Engineer",
	spellcastingKnown : {
		cantrips : 0,
		spells : [0,2,2,3,3,3,4,4,4,5,6,6,7,7,7,8,8,8,9,9],
	},
	spellcastingList: {
		"class": "wizard",
		school: ["Evoc", "Trans"],
		level: [1,4],           
	},
	spellcastingAbility: 4,
	spellcastingFactor: "warlock1",
	spellcastingTable: [
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[2,0,0,0,0,0,0,0,0],
		[2,0,0,0,0,0,0,0,0],
		[3,0,0,0,0,0,0,0,0],
		[3,0,0,0,0,0,0,0,0],
		[3,0,0,0,0,0,0,0,0],
		[0,4,0,0,0,0,0,0,0],
		[0,4,0,0,0,0,0,0,0],
		[0,4,0,0,0,0,0,0,0],
		[0,5,0,0,0,0,0,0,0],
		[0,5,0,0,0,0,0,0,0],
		[0,5,0,0,0,0,0,0,0],
		[0,0,5,0,0,0,0,0,0],
		[0,0,5,0,0,0,0,0,0],
		[0,0,5,0,0,0,0,0,0],
		[0,0,6,0,0,0,0,0,0],
		[0,0,6,0,0,0,0,0,0],
		[0,0,6,0,0,0,0,0,0],
		[0,0,0,7,0,0,0,0,0],
		[0,0,0,7,0,0,0,0,0]
	],
	spellFirstColTitle: "DY",
	features: {
		"subclassfeature2" : {
			name: "Spectrum Analyzer",
			source: ["VSoS", 39],
			minlevel: 2,
			description: desc("Once per short or long rest, I can cast detect magic at will."),
			spellcastingBonus: {
				spells: ["detect magic"],
				name: "Spectrum Analyzer",
				selection: ["detect magic"],
				firstCol: "oncesr",
				magicItemComponents: false,
			},
			action: ["action", ""],
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature2.1": {
			name : "Spellcasting",
			source: ["VSoS", 39],
			minlevel: 2,
			description: desc([
				"I have spell dynamos which each hold a wizard spell slot and 1 spell that I know. Int is my",
				"spellcasting ability. I use my bomb save DC for spell saves. Dynamo slots are spent when I",
				"cast the spell & regained on long rest. Switch the spells inside my dynamos on a short rest."
			]),
			limfeaname : "Spell Dynamos",
			usages : levels.map(function (n) { n < 2 ? "" : (n < 4 ? 2 : n < 7 ? 3 : n < 10 ? 4 : n < 16 ? 5 : n < 19 ? 6 : 7) }),
			recovery : "short rest",
			additional : levels.map(function(n){
				return n < 2 ? "" : (n < 4 ? "2" : n < 7 ? "3" : n < 10 ? "4" : n < 16 ? "5" : n < 19 ? "6" : "7") + " total spell dynamos";
			}),
			spellcastingBonus : { // the spells gained at level 2, 8, 14, 20
				name : "From any school",
				"class" : "wizard",
				times : [0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4]
			},
			extraLimitedFeatures: [{
				name : "Spell Dynamos",
				usagescalc: "event.value = classes.known.alchemist.level < 2 ? 0 : classes.known.alchemist.level < 4 ? 2 : classes.known.alchemist.level < 7 ? 3 : classes.known.alchemist.level < 10 ? 4 : classes.known.alchemist.level < 16 ? 5 : classes.known.alchemist.level < 19 ? 6 : 7",
				recovery: "long rest",
			}],
		},
		"subclassfeature6": {
			name : "Arcano Bomb Formula",
			source: ["VSoS", 39],
			minlevel: 6,
			description: " I gain a new bomb formula. See notes",
			toNotesPage : [{
				name: "Arcano Bomb Formula [d12 Force - Dexterity]",
				note: "\nI use a spell dynamo slot to prime this bomb. It deals 1 extra die of damage.",
				amendTo: "Known Bomb Formulae"
			}],
			weaponOptions: [{
				name: "Arcano Bomb (SS)",
				source: ["VSoS", 39],
				regExpSearch: /\barcano\b/i,
				baseWeapon : "bomb",
				damage : ["Q", 12, "Force"],
				selectNow : true
			}]
		},
		"subclassfeature10" : {
			name : "Counter-Discharge",
			source: ["VSoS", 39],
			minlevel: 10,
			description: desc([
				"As a reaction to a creature I can see casting a spell that affects me, I can use a spell dynamo",
				"to gain adv. on the spell's saving throw & resistance to the spell's damage."
			]),
			action: ["reaction", ""],
			usages: 1,
			recovery: "long rest",
		},
		"subclassfeature18": {
			name: "Arcane Recycler",
			source: ["VSoS", 40],
			minlevel: 18,
			description: desc("When I miss with an arcano bomb, I reuse the spell slot, transferring it to an empty dynamo."),
		}
	}
})

// * Mad Bomber alchemist subclass
AddSubClass("alchemist","mad bomber",{
	regExpSearch : /\bmad bomber\b/i,
	subname : "Mad Bomber",
	source: ["VSoS", 40],
	fullname: "Mad Bomber",
	features: {
		"subclassfeature2" : {
			name : "Blasting Specialty",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc("My bombs deal double damage to objects and structures."),
		},
		"subclassfeature2.1" : {
			name : "Shrapnel Bomb Formula",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc("I gain a new bomb formula. See notes."),
			toNotesPage : [{
				name: "Shrapnel Bomb Formula [d8 Piercing - Dexterity]",
				note: "\nThis bomb has a blast radius of 10 feet.",
				amendTo: "Known Bomb Formulae"
			}],
			weaponOptions: [{
				name: "Shrapnel Bomb",
				source: ["VSoS", 40],
				regExpSearch: /\bshrapnel\b/i,
				baseWeapon : "bomb",
				damage : ["C", 8, "Piercing"],
				selectNow : true,
			}],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bshrapnel\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
							fields.Description = fields.Description.replace(/in 7\.5 ft/, "in 10 ft") + (fields.Description ? '; ' : '') + "\xD72 damage against obj/structures";
						}
					},
					"When the word 'Shrapnel' is added to the title one of my Bomb attacks, the attack is treated as one of my Shrapnel Bombs."
				]
			}
		},
		"subclassfeature6" : {
			name : "Timed Demolition",
			source: ["VSoS", 40],
			minlevel: 6,
			description: desc([
				"When I prime and throw a bomb, I can delay the detonation a number rounds up to 1",
				"minute. A creature can only be affected by one bomb blast radius at a time."
			])
		},
		"subclassfeature10" : {
			name : "Blast Shield",
			source: ["VSoS", 40],
			minlevel: 10,
			description: desc([
				"I gain resistance to my choice of acid/cold/fire/lightning/thunder damage.",
				"I can change my selection when I finish a long rest."
			]),
			choices: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
			"acid" : {
				name : "Acid Blast Shield",
				description: desc([
					"I gain resistance to acid damage.",
					"I can change my resistance to cold/fire/lightning/thunder when I finish a long rest."
				]),
				dmgres:["Acid"]
			},
			"cold" : {
				name : "Cold Blast Shield",
				description: desc([
					"I gain resistance to cold damage.",
					"I can change my resistance to acid/fire/lightning/thunder when I finish a long rest."
				]),
				dmgres:["Cold"]

			},
			"fire" : {
				name : "Fire Blast Shield",
				description: desc([
					"I gain resistance to fire damage.",
					"I can change my resistance to acid/cold/lightning/thunder when I finish a long rest."
				]),
				dmgres:["Fire"]

			},
			"lightning" : {
				name : "Lightning Blast Shield",
				description: desc([
					"I gain resistance to lightning damage.",
					"I can change my resistance to acid/cold/fire/thunder when I finish a long rest."
				]),
				dmgres:["Lightning"]

			},
			"thunder" : {
				name : "Thunder Blast Shield",
				description: desc([
					"I gain resistance to thunder damage.",
					"I can change my resistance to acid/cold/fire/lightning when I finish a long rest."
				]),
				dmgres:["Thunder"]
			},
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Formula: Black Powder Bomb",
			source: ["VSoS", 40],
			minlevel: 18,
			description: desc("I gain a new bomb formula. See notes."),
			toNotesPage : [{
				name: "Black Powder Bomb Formula [d12 Fire - Dexterity]",
				note: "\nNo additional effects.",
				amendTo: "Known Bomb Formulae"
			}],
			weaponOptions: [{
				name: "Black Powder Bomb",
				source: ["VSoS", 40],
				regExpSearch: /\bblack powder\b/i,
				baseWeapon : "bomb",
				damage : ["C", 12, "Fire"], 
				selectNow : true
			}]
		}
	}
})

// * Mutagenist Subclass
AddSubClass("alchemist","mutagenist",{
	regExpSearch : /\bmutagenist\b/i,
	subname : "Mutagenist",
	source: ["VSoS", 40],
	fullname: "Mutagenist",
	features: {
		"subclassfeature2" : {
		name : "Bonus Proficiencies",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc([
			"Gain a proficiency in either Acrobatics or Athletics, and shields.",
			]),
			skillstxt: "Choose either Acrobatics or Athletics",
			armorProfs : [true, false, false, true]
		},
		"subclassfeature2.1" : {
			name : "Mutagen",
			source: ["VSoS", 40],
			minlevel: 2,
			description: desc([
				"As a bonus action, inject a mutagen, gaining its effects for one minute.",
				"When injecting, select \"Mutagen\" in the \"Magic Items\" section."
			]),
			action: ["bonus action", "Inject Mutagen"],
		},
		"subclassfeature6" : {
			name: "Shared Mutagen",
			source: ["VSoS", 40],
			minlevel: 6,
			description: desc([
				"As an action, inject a willing creature with one mutagen. A creature can only be injected by",
				"one mutagen at a time, & I cannot inject another creature until the original mutagen ends."
			]),
			action: ["action", "Share Mutagen"],
		},
		"subclassfeature10" : {
			name: "Advanced Mutation",
			source: ["VSoS", 41],
			minlevel: 10,
			description: desc([
				"When I inject myself with a mutagen, I can choose 1 of the following additional benefits:",
				"Hyperelastic, Mucilaginous, Polybrachia. Select \"Advanced Mutagen\" in \"Magic Items\" section."
			])
		},
		"subclassfeature18" : {
		name: "Mutated Blood",
			source: ["VSoS", 41],
			minlevel: 18,
			description: "\n   Choose Strength, Dexterity, or Constitution in the \"Choose Feature\" button."+
				"\n   The chosen score increases by 2, and its maximum becomes 22.",
			choices: ["Strength", "Dexterity", "Constitution"],
			"strength" : {
			name : "Mutated Blood: Strength",
				description: "\n   My Strength score increases by 2, and my maximum Strength score increases to 22.",
				scoresMaximum: [22, 0,0,0,0,0],
				scores: [2,0,0,0,0,0],
			},
			"dexterity" : {
			name : "Mutated Blood: Dexterity",
				description: "\n   My Dexterity score increases by 2, and my maximum Dexterity score increases to 22.",
				scoresMaximum: [0, 22, 0, 0, 0, 0],
				scores: [0, 2, 0, 0, 0, 0],
			},
			"constitution" : {
			name : "Mutated Blood: Constitution",
				description: "\n   My Constitution score increases by 2, and my maximum Constitution score increases to 22.",
				scoresMaximum: [0, 0, 22, 0, 0, 0],
				scores: [0, 0, 2, 0, 0, 0],
			}
		}
	}
})

// * Ooze Rancher alchemist subclass
AddSubClass("alchemist","ooze rancher", {      
	regExpSearch : /\booze rancher\b/i,
	subname : "Ooze Rancher",
	source: ["VSoS", 40],
	fullname: "Ooze Rancher",		
	features: {	
		"subclassfeature2" : {
        	name : "Ooze Sympathy",
            source: ["VSoS", 41],
            minlevel: 2,
            description: desc([
            	"Oozes attacking me must succeed a Wis save vs my bomb save DC or miss. On a",
            	"success, the ooze is immune to this effect for 24 hours."
            ])
		},
		"subclassfeature2.1" : {
            name : "Slime Bomb Formula",
            source: ["VSoS", 41],
            minlevel: 2,
            description: " I gain a new bomb formula. See notes.",
            toNotesPage : [{
				name: "Slime Bomb Formula [No Damage - No Save]",
				note: "\nCoats all creatures in slime. Slime can be removed with a gallon of water or an action. Creatures coated in slime can't take the Dash or Disengage actions.",
				amendTo: "Known Bomb Formulae"
            }],
            weaponOptions : [{
				name : "Slime Bomb",
				source : ["VSoS", 41],
				regExpSearch : /slime bomb/i,
				baseWeapon : "bomb",
				ability : 0,
				abilitytodamage : false,
				excludeBombDamage : true,
				damage :  ["", "", ""],
				selectNow : true
			}],
			calcChanges : {
				atkAdd : [
					function(fields, v) {
						if(/\bslime\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
							fields.Description = fields.Description.replace(/dex save or \u00BD dmg to all/i, "Dex save or coat all in slime and no Dash/Disengage"); 
						}
					}
				]
			}
		},
		"subclassfeature6" : {
            name : "Bottled Oozes",
            source: ["VSoS", 41],
            minlevel: 6,
            description: desc([
            	"When I brew potions, I may spend 2 reagent die to create an ooze bottle. My Oozes use my",
            	"Int mod + my prof. bonus for their attack rolls, and my bomb save DC for their save DCs.",
            	"Ooze statistics can be found in the companion pages."
            ]),
            magicitemsAdd: ["Ooze Bottle"],
            creaturesAdd: ["Gray Ooze"],
            creatureOptions: [{
            	name: "Gray Ooze",
            	source: ["SRD", 338],
            	size: 3,
                type: "Ooze",
                alignment: "unaligned",
                ac : 8,
                hp: 22,
                hd: [3, 8],
                speed: "10 ft, climb 10 ft",
                scores: [12,6,16,1,6,2],
                damage_resistances: "acid, cold, fire",
                condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
                senses: "blindsight 60 ft (blind beyond this radius)",
                passivePerception : 8,
                challengeRating: "1/2",
                proficiencyBonus: 2,
                attacksAction: 1,
                attacks: [{
                    name: "Pseudopod",
                    ability: 1,
                    damage: [1, 6, "bludgeoning"],
                    range: "Melee (5 ft)",
                    description: "Deals +2d6 acid damage, permanent -1 AC cumulatively to nonmagical metal armors",
                    modifiers : ["(oInt+oProf)-(Str+Prof)", ""],
                    abilitytodamage: true,
                    tooltip: "If the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
                }],
                skills: { "Stealth" : 2 },
                traits: [{
                    name : "Amorphous",
                    description: "The ooze can move through a space as narrow as 1 inch wide without squeezing.",
                }, {
                    name : "Corrode Metal",
                    description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round.",
                }, {
                    name : "False Appearance",
                    description : "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.",
                }],
                eval : function(prefix, lvl){
                    AddString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                },
                removeeval : function(prefix, lvl){
                    RemoveString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                }
			}]
	    },
	    "subclassfeature10" : {
            name : "Liquid Anatomy",
            source: ["VSoS", 41],
            minlevel: 10,
            description: "\n   I can now move through any space as narrow as 1 inch wide without squeezing."+
                         "\n   Equipment does not compress with me. Critical hits against me become normal hits.",
	    },
	    "subclassfeature18" : {
            name : "Ooze Jug",
            source: ["VSoS", 41],
            minlevel: 18,
            description: desc("I have new options for creating an ooze bottle. May only have 1 ooze jug at a time. See notes."),
            toNotesPage: [{
                name: "Ooze Rancher's Oozes Table",
                note: [
                        "I can brew these oozes by expending reagent dice.",
                        "Ooze Type                                Cost",
                        "Gray Ooze                               2 dice",
                        "Ochre Jelly                              4 dice",
                        "Gelatinous Cube                     8 dice",
                        "Black Pudding                        10 dice",
                    ],
                    amendTo: "Reagent Potions Table",
            }],
            creatureOptions: [{
                name: "Ochre Jelly",
                source: ["SRD", 146],
                size: 4,
                type: "Ooze",
                alignment: "unaligned",
                ac : 8,
                hp: 45,
                hd: [6, 10],
                speed: "10 ft, climb 10 ft",
                scores: [15,6,14,2,6,1],
                damage_resistances: "acid",
                damage_immunities: "lightning, slashing",
                condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
                senses: "blindsight 60 ft (blind beyond this radius)",
                passivePerception : 8,
                challengeRating: "2",
                proficiencyBonus: 2,
                attacksAction: 1,
                attacks: [{
                    name: "Pseudopod",
                    ability: 1,
                    damage: [2, 6, "bludgeoning"],
                    range: "Melee (5 ft)",
                    description: "Deals +1d6 acid damage",
                    modifiers : ["(oInt+oProf)-(Str+Prof)", ""],
                    abilitytodamage: true,
                }],
                traits: [{
                    name : "Amorphous",
                    description: "The jelly can move through a space as narrow as 1 inch wide without squeezing.,"
                }, {
                    name : "Spider Climb",
                    description : "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                }],
                actions: [{
                    name: "Reaction: Split",
                    description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.", 
                }],
                eval: function(prefix, lvl){
                    AddString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                },
                removeeval: function(prefix, lvl){
                    RemoveString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                }
            }, {
                name: "Gelatinous Cube",
                source: ["SRD", 337],
                size: 4,
                type: "Ooze",
                alignment: "unaligned",
                ac : 6,
                hp: 84,
                hd: [8, 10],
                speed: "15 ft",
                scores: [14,3,20,1,6,1],
                condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
                senses: "blindsight 60 ft (blind beyond this radius)",
                passivePerception : 8,
                challengeRating: "2",
                proficiencyBonus: 2,
                attacksAction: 1,
                attacks: [{
                    name: "Pseudopod",
                    ability: 1,
                    damage: [3, 6, "acid"],
                    range: "Melee (5 ft)",
                    description: "",
                    modifiers : ["(oInt+oProf)-(Str+Prof)", ""],
                    abilitytodamage: false,
                }],
                traits: [{
                    name : "Ooze Cube",
                    description: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. Creatures inside the cube can be seen but have total cover. A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage. The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.",
                }, {
                    name : "Transparent",
                    description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.",
                }],
                eval: function(prefix, lvl){
                    AddString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                    AddString(prefix + 'Cnote.Left', "\u25C6 Engulf: As an action, the cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a  Dexterity saving throw equal to its master's bomb save DC. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.");
                },
                removeeval: function(prefix, lvl){
                    RemoveString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                    RemoveString(prefix + 'Cnote.Left', "\u25C6 Engulf: As an action, the cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a Dexterity saving throw equal to its master's bomb save DC. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.");
                }
            }, {
                name: "Black Pudding",
                source: ["SRD", 337],
                size: 3,
                type: "Ooze",
                alignment: "unaligned",
                ac : 7,
                hp: 85,
                hd: [10, 10],
                speed: "20 ft, climb 20 ft",
                scores: [16,5,16,1,6,1],
                damage_resistances: "acid, cold, lightning, slashing",
                condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
                senses: "blindsight 60 ft (blind beyond this radius)",
                passivePerception : 8,
                challengeRating: "4",
                proficiencyBonus: 2,
                attacksAction: 1,
                attacks: [{
                    name: "Pseudopod",
                    ability: 1,
                    damage: [1, 6, "bludgeoning"],
                    range: "Melee (5 ft)",
                    description: "Deals +4d8 acid damage, permanent -1 AC cumulatively to nonmagical metal armors",
                    modifiers : ["(oInt+oProf)-(Str+Prof)", ""],
                    abilitytodamage: true,
                    tooltip: "If the target is wearing nonmagical metal armor, its armor is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
                }],
                skills: { "Stealth" : 2 },
                traits: [ {
                    name : "Corrosive Form",
                    description: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
                }, ],
                actions: [{
                    name: "Split",
                    description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original jelly.", 
                }],
                features: [{
                    name : "Spider Climb",
                    description : "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                }, {
                    name : "Amorphous",
                    description: "The pudding can move through a space as narrow as 1 inch wide without squeezing.",
                }],
                eval: function(prefix, lvl){
                    AddString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                },
                removeeval: function(prefix, lvl){
                    RemoveString(prefix + 'Cnote.Left', "\u25C6 Ooze Bottle: The cube is friendly to me and my allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, it will follow me. The cube dissolves into a lifeless sludge after 1 hour.");
                }
            }]
	    }
	}
})

// * Venomsmith alchemist subclass
AddSubClass("alchemist","venomsmith",{
	regExpSearch : /\bvenomsmith\b/i,
	subname : "Venomsmith",
	source: ["VSoS", 41],
	fullname: "Venomsmith",
	features: {
		"subclassfeature2" : {
			name: "Poisoner",
			source: ["VSoS", 42],
			minlevel: 2,
			limfeaname: "Reagent Dice (d10)",
			usages: levels.map(function(n){ return n < 3 ? 2 : 0}),
			recovery: "long rest",
			limfeaAddToExisting: true,
			description: desc([
				"I gain the Poisoner discovery. I can't replace this discovery. Until 3rd level in this class, I gain 2",
				"reagent dice I can only brew poisons with. When I deal poison damage, I ignore resistance",
				"and I treat immunity as resistance."
			]),
			"venomsmith poisoner": {
				name: "Poisoner",
				source: ["VSoS", 36],
				description: "\n    I gain proficiency with the poisoner's kit. I can also brew new poisons using my reagent dice."+
								"\n    My poisons also use my bomb save DC instead of their normal save DCs.",
				toolProfs: ["Poisoner's kit"],
				toNotesPage: [{
					name: "Poisoner's Poisons Table",
					note: [
							"I can brew these poisons by expending reagent dice.",
							"Poison                                 Cost",
							"2 x Antitoxin                        1 die",
							"2 x Basic Poison                   1 die,",
							"Oil of Taggit                        2 dice",
							"Potion of Poison                  2 dice",
							"Serpent Venom                    2 dice",
							"Truth Serum                         2 dice",
					],
					popupName: "Poisoner's Poisons Table",
					amendTo: "Reagent Potions Table",
				}]
			},     
			autoSelectExtrachoices : [{
				extrachoice: "venomsmith poisoner",
			}],                 
		},
		"subclassfeature2.1" : {
			name: "Venom Bomb Formula",
			source: ["VSoS", 42],
			minlevel: 2,
			description : " I gain a new bomb formula. See notes",
			toNotesPage: [{
				name: "Venom Bomb Formula [d8 Poison - Constitution]",
				note: "\nAll affected have disadv vs next Str/Dex/Con save before end of their next turn",
				amendTo: "Known Bomb Formulae"
			}],
			weaponOptions : [{
				name : "Venom Bomb",
				source : ["VSoS", 42],
				regExpSearch : /venom bomb/i,
				baseWeapon : "bomb",
				damage : ["C", 8, "Poison"],
			}],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\bvenom\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
							fields.Description = fields.Description.replace(/dex save/i, "Con save").replace(/dmg to all/i, "dmg to all and disadv. on next Str/Dex/Con save til end of next turn");
						}
					},
					"When the word 'Venom' is added to the title one of my Bomb attacks, the attack is treated as one of my Venom Bombs."
				]
			}
		},
		"subclassfeature6" : {
			name: "Alchemical Assassin",
			source: ["VSoS", 42],
			minlevel: 6,
			description: desc([
				"Adv. on Dex (Sleight of Hand) checks to add ingested poison to food/drink, apply poison to a",
				"held weapon without being seen, or place a poison vial on a creature without them noticing."
			])
		},
		"subclassfeature10": {
			name: "Mithridatism",
			source: ["VSoS", 42],
			minlevel: 10,
			description: desc("I gain immunity to poison & the poisoned condition."),
			savetxt: {
				immune: ["poison", "poisoned condition"],
			}
		},
		"subclassfeature18": {
			name: "Toxic Recompense",
			source: ["VSoS", 42],
			minlevel: 18,
			description: desc([
				"As a reaction to a creature within 5 ft hitting me with a melee attack, the creature makes a",
				"Con save vs my bomb save DC or is poisoned for 1 min, taking 1d10 poison damage &",
				"repeating the save at the start of each of its turns."
			]), 
			action: ["reaction", ""]
		}
	}
})

// * Xenoalchemist Subclass
AddSubClass("alchemist","xenoalchemist",{
	regExpSearch : /\bxenoalchemist\b/i,
	subname : "Xenoalchemist",
	source: ["VSoS", 41],
	fullname: "Xenoalchemist",
	features: {
		"subclassfeature2" : {
			name: "Xenobiology",
			source: ["VSoS", 42],
			minlevel: 2,
			description: desc("I have advantage on all ability checks I make to identify/research monsters.")
		},
		"subclassfeature2.1" : {
			name: "Mad Scientist",
			source: ["VSoS", 42],
			minlevel: 2,
			description: desc([
				"Gain 2 monsterous grafts. Select grafts from the \"Choose Feature\" button. I don't lose hp or",
				"hit dice adding/removing grafts; I take no time for to recover after the attachment of a graft."
			]),
			extraname: "Monsterous Grafts",
			extrachoices: ["Amphibious Adaptation (Donor: has Amphibious trait)", 
							"Arcane Synapses (Donor: has Spellcasting/Innate Spellcasting)", 
							"Beast's Hide (Donor: Large or larger Beast)", 
							"Bestial Weapons (Arms) (Donor: Bst/Drgn/Mons with Claw attack)", 
							"Bestial Weapons (Head) (Donor: Bst/Drgn/Mons with Bite attack)", 
							"Charging Hooves (Donor: has Charge trait or Gore/Hooves attack)", 
							"Climbing Apparatus (Donor: Bst/Humn/Mons with climb speed)", 
							"Darkvision (Donor: has Darkvision)", 
							"Doppel-Blooded (Donor: has shapechanger tag)", 
							"Draconis Fundamentum (Donor: Drgn/Humn/Mons with a Breath Weapon)", 
							"Dragon's Hide (Donor: Large or larger Dragon)", 
							"Energetic Suture (Acid) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to acid damage)",
							"Energetic Suture (Cold) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to cold damage)",
							"Energetic Suture (Fire) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to fire damage)",
							"Energetic Suture (Lightning) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to lightning damage)",
							"Energetic Suture (Poison) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to poison damage)",
							"Energetic Suture (Thunder) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to thunder damage)",    
							"Fiend's Hide (Donor: Medium or larger Fiend)", 
							"Heart of Steel (Donor: Construct)", 
							"Horns (Donor: has Gore/Horns/Ram/Tusk attack)", 
							"Indiscernible Anatomy (Donor: Medium or larger Aberration)", 
							"Leaping Legs (Donor: has the Pounce/Standing Leap trait)", 
							"Olfactory Implants (Donor: has Keen Smell/Keen Hearing and Smell trait)", 
							"Oversized Arms (Donor: Giant)", 
							"Prehensile Tail (Donor: has a Tail attack)", 
							"Regenerating Marrow (Donor: has the Regeneration trait)", 
							"Replacement (Donor: any creature)", 
							"Stench (Donor: has the Stench trait)", 
							"Tentacles (Donor: has a Tentacles/Tendrils attack)", 
							"Venom Sac (Donor: has a natural weapon/trait that deals poison/poisoned condition)", 
							"Voice Box (Donor: has the Mimicry trait)", 
							"Webspinner Apparatus (Donor: has a Web action)"],
			extraTimes: [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
			"amphibious adaptation (donor: has amphibious trait)" : {
				name: "Amphibious Adaptation",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "\n   I can breathe both air and water. I gain a swim speed equal to my walking speed.",
				speed : {
					swim : { spd : "walk", enc : "walk" }
				}
			},
			"arcane synapses (donor: has spellcasting/innate spellcasting)" : {
				name: "Arcane Synapses",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "\n   I learn 1 wizard cantrip of my choice. Int is my spellcasting ability for this cantrip."+
								"\n   I can harvest a second creature to learn 1 more wizard cantrip.",
				spellcastingBonus: [{
					name: "Arcane Synapses",
					firstCol: "atwill",
					times: levels.map(function(n) {return n < 2 ? 0 : 1; }),
					spellcastingAbility: 4,
					"class": ["wizard"],
					level: [0,0],
				}]
			},
			"beast's hide (donor: large or larger beast)" : {
				name: "Beast's Hide",
				source: ["VSoS", 370],
				submenu: "[External Grafts]",
				description: "\n   My AC is 13 + Dex mod, if higher than the armor I am wearing. Shields may still apply.",
				armorAdd: "Beast's Hide",
				armorOptions: [{
					name : "Beast's Hide",
					source: ["VSoS", 370],
					regExpSearch: /\bbeast's hide\b/i,
					ac: "13",
					selectNow : true
				}]
			},
			"bestial weapons (arms) (donor: bst/drgn/mons with claw attack)" : {
				name: "Bestial Weapons (Arms)",
				source: ["VSoS", 370],
				submenu: "[Arms Grafts]",
				description: desc("I gain claws I can use to make unarmed strikes: Finesse, 1d6+Str/Dex slashing damage."),
				weaponOptions: [{
					name: "Claws",
					source: ["VSoS", 370],
					regExpSearch: /\bclaws\b/i,
					type: "Natural",
					ability: 1,
					abilitytodamage: true,
					damage: [1, 6, "slashing"],
					range: "Melee",
					description: "Finesse",
					list: "melee",
					selectNow : true
				}]
			},
			"bestial weapons (head) (donor: bst/drgn/mons with bite attack)" : {
				name: "Bestial Weapons (Head)",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "\n   I gain teeth I can use to make unarmed strikes: Finesse, 1d6+Str/Dex piercing damage.",
				weaponOptions: [{
					name: "Teest",
					source: ["VSoS", 370],
					regExpSearch: /\bteeth\b/i,
					type: "Natural",
					ability: 1,
					abilitytodamage: true,
					damage: [1, 6, "slashing"],
					range: "Melee",
					description: "Finesse",
					list: "melee",
					selectNow : true
				}]
			},
			"charging hooves (donor: has charge trait or gore/hooves attack)" : {
				name: "Charging Hooves",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description: "\n   Once on each of my turns, if I move 15 ft in straight line, I can move +10 ft in that direction.",
			},
			"climbing apparatus (donor: bst/humn/mons with climb speed)" : {
				name: "Climbing Apparatus",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description: "\n    I gain a climb speed equal to my walking speed.",
				speed : {
					climb : { spd : "walk", enc : "walk" }
				}
			},
			"darkvision (donor: has darkvision)" : {
				name: "Darkvision",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: " I gain 60 ft darkvision.",
				vision: [["Darkvision", 60]]
			},
			"doppel-blooded (donor: has shapechanger tag)" : {
				name: "Doppel-Blooded",
				source: ["VSoS", 370],
				submenu: "[Internal Grafts]",
				additional: "1 x long rest",
				description: "\n   I can transform my appearance for 1 hr. I can change my height, weight, face, voice, "+
								"\n   hair, & race. I cannot become a different size, and my basic shape remains.",
				extraLimitedFeatures: [{
					name: "Shape Change",
					usages: 1,
					recovery: "long rest",
				}]
			},
			"draconis fundamentum (donor: drgn/humn/mons with a breath weapon)" : {
				name: "Draconis Fundamentum",
				source: ["VSoS", 371],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description: "\n   As an action, each creature in a 15 ft cone makes a Dex save against 8+Con+Prof."+
								"\n   Each creature takes (Prof)d6 damage or half on save, same damage type as donor's.",
				weaponOptions: [{
					name: "Draconis Fundamentum",
					source: ["VSoS", 371],
					regExpSearch: /\bdraconis fundamentum\b/i,
					type: "Natural",
					ability: 3,
					abilitytodamage: false,
					damage: [1, 6, ""],
					range: "15 ft cone",
					description: "\u00BD on Dex save",
					dc: true
				}],
				calcChanges: {
					atkAdd : [function (fields, v) {
						if (/\bdraconis fundamentum\b/i.test(v.WeaponTextName)){
							fields.Damage_Die = How("Proficiency Bonus") + "d6";
						}
					},
					"My Draconis Fundamentum attack deals 1d6 damage for each point of my proficiency bonus."
				]},
				action: ["action", "Draconis Fundamentum"],
				extraLimitedFeatures: {
					name: "Draconis Fundamentum",
					usages: 1,
					recovery: "short rest",
				}
			},
			"dragon's hide (donor: large or larger dragon)" : {
				name: "Dragon's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "\n   My AC is 17, if higher than the armor I am wearing. Shields may still apply."+
							 "\n   I gain resistance to acid/cold/fire/lightning/poison damage if the"+
							 "\n   donor was immune to it. I only gain resistance if I am proficient with"+
							 "\n   heavy armor.",
				armorOptions: [{
					name : "Dragon's Hide",
					source: ["VSoS", 31],
					regExpSearch: /\bdragon's hide\b/i,
					dex: -10,
					ac: "17",
					selectNow : true
				}]
			},
			"energetic suture (acid) (donor: clst/drgn/elem/fey/fnd with imm/res to acid damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: " I gain resistance to acid damage.",
				dmgres: ["Acid"],                    
			},
			"energetic suture (cold) (donor: clst/drgn/elem/fey/fnd with imm/res to cold damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: " I gain resistance to cold damage.",
				dmgres: ["Cold"],                    
			},
			"energetic suture (fire) (donor: clst/drgn/elem/fey/fnd with imm/res to fire damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: " I gain resistance to fire damage.",
				dmgres: ["Fire"],                    
			},
			"energetic suture (lightning) (donor: clst/drgn/elem/fey/fnd with imm/res to lightning damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: " I gain resistance to lightning damage.",
				dmgres: ["Lightning"],                    
			},
			"energetic suture (poison) (donor: clst/drgn/elem/fey/fnd with imm/res to poison damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: " I gain resistance to poison damage.",
				dmgres: ["Poison"],                    
			},
			"energetic suture (thunder) (donor: clst/drgn/elem/fey/fnd with imm/res to thunder damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: " I gain resistance to thunder damage.",
				dmgres: ["Thunder"],                    
			},
			"fiend's hide (donor: medium or larger fiend)" : {
				name: "Fiend's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "\n   My AC is 15 + Dex (max 2) if higher than the armor I am wearing. Shields may still apply.",
				armorOptions: [{
					name : "Fiend's Hide",
					source: ["VSoS", 31],
					regExpSearch: /\bfiend's hide\b/i,
					dex: 2,
					ac: "15",
					selectNow : true
				}]
			},
			"heart of steel (donor: construct)" : {
				name: "Heart of Steel",
				source: ["VSoS", 371],
				submenu: "[Internal Grafts]",
				description: "\n    I may ignore the effects of 1 level of exhaustion & finish a long rest in 4 hours.",
				savetxt: {
					immune: ["1st level exhaustion"]
				}
			},
			"horns (donor: has gore/horns/ram/tusk attack)" : {
				name: "Horns",
				source: ["VSoS", 372],
				submenu: "[Head Grafts]",
				description: "\n   I gain horns I can use to make unarmed strikes: 1d6+Str damage of same type as donor."+
								"\n   If I move in a straight line for 10 ft immediately before making a horn attack, I can force "+
								"\n   the target into a Strength contest to knock them prone.",
				weaponOptions: [{
					name: "Horns",
					source: ["VSoS", 372],
					regExpSearch: /\bHorns\b/i,
					type: "Natural",
					ability: 1,
					abilitytodamage: true,
					damage: [1, 6, "Bludgeoning"],
					range: "Melee",
					selectNow : true
				}],             
			},
			"indiscernible anatomy (donor: medium or larger aberration)" : {
				name: "Indiscernible Anatomy",
				source: ["VSoS", 372],
				submenu: "[Internal Grafts]",
				description: "\n    Critical hits against me become normal hits.",
			},
			"leaping legs (donor: has the pounce/standing leap trait)" : {
				name: "Leaping Legs",
				source: ["VSoS", 372],
				submenu: "[Legs Grafts]",
				description: "\n    My jump distance doubles. I can jump my full distance without a running start.",
			},
			"olfactory implants (donor: has keen smell/keen hearing and smell trait)" : {
				name: "Olfactory Implants",
				source: ["VSoS", 372],
				submenu: "[Head Grafts]",
				description: "\n   I gain advantage on Wisdom (Perception) checks that rely on smell.",
				vision : [["Keen Smell", 0]]
			},
			"oversized arms (donor: giant)" : {
				name: "Oversized Arms",
				source: ["VSoS", 372],
				submenu: "[Arms Grafts]",
				description: desc([
					"+5 ft Melee reach, unless the weapon used has Reach. If Small, I can use heavy weapons",
					"without penalty. I have adv. on Str checks and saves I make to maintain my grip on objects."
				]),
				savetxt: {
					adv_vs: ["keeping grip on an object"]
				},
				calcChanges: {
					atkAdd: [ 
						function (fields, v) 	{
							if(v.isMeleeWeapon && (/\d+\s?(ft|m)/i).test(fields.Range) && !/reach/i.test(fields.Description)) { // * Checks for "Melee (x ft)"
								var rNum = fields.Range.match(/\d+\s?(ft|m)/i);
								var unit = rNum[2];
								var curRange = parseInt(rNum[1], 10);
								fields.Range = fields.Range.replace(/\d+\s?(ft|m)/i, (curRange + 5) + " " + unit);
							}
							if(v.isMeleeWeapon && !(/\(\d+\s?(ft|m)\)/i).test(fields.Range) && !/reach/i.test(fields.Description)) {
								fields.Range = "Melee (10 ft)";
								fields.Description += (fields.Description ? "; " : "") + "Reach"
							}
						},
						"My melee reach increases by 5 ft, unless the weapon I am using has Reach."
					]
				}
			},
			"prehensile tail (donor: has a tail attack)" : {
				name: "Prehensile Tail",
				source: ["VSoS", 372],
				submenu: "[External Grafts]",
				description: "\n   I gain a tail I can use to make unarmed strikes: Finesse, 1d6+Str/Dex bludgeoning damage."+
								"\n   I can hold and manipulate objects with the tail, but it cannot use weapons/shields.",
				weaponOptions: [{
					name: "Tail",
					source: ["VSoS", 372],
					regExpSearch: /\btail\b/i,
					type: "Natural",
					ability: 1,
					abilitytodamage: true,
					damage: [1, 6, "Bludgeoning"],
					range: "Melee",
					description: "Finesse",
					selectNow : true
				}],    
			},
			"regenerating marrow (donor: has the regeneration trait)" : {
				name: "Regenerating Marrow",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description: "\n    I can use a bonus action to regain hit points equal to 1d10 + Constitution modifier.",
				action: ["bonus action", ""],
				extraLimitedFeatures: [{
					name: "Regenerating Marrow",
					usages: 1,
					recovery: "short rest"
				}]
			},
			"replacement (donor: any creature)" : {
				name: "Replacement",
				source: ["VSoS", 373],
				submenu: "[Any Grafts]",
				description: desc("A replacement limb/organ functions identically. It takes up the most relevant body slot.")
			},
			"stench (donor: has the stench trait)" : {
				name: "Stench",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description: "\n    As a bonus action, each creature within 10 ft of me must Con save, DC (8+Prof+Con)"+
								"\n    or be poisoned until the end of their next turn.",
				action: ["bonus action", ""],
				extraLimitedFeatures: [{
					name: "Stench",
					usages: 1,
					recovery: "short rest"
				}]
			},
			"tentacles (donor: has a tentacles/tendrils attack)" : {
				name: "Tentacles",
				source: ["VSoS", 373],
				submenu: "[Arms Grafts]",
				description: desc([
					"I gain a tentacle I can use to make unarmed strikes: Finesse, 10 ft, 1d6+Str/Dex bludgeoning.",
					"When I hit with this attack, I may use my bonus action to attempt to grapple the target."
				]),
				weaponOptions: [{
					name: "Tentacle",
					source: ["VSoS", 373],
					regExpSearch: /\btentacle\b/i,
					type: "Natural",
					ability: 1,
					abilitytodamage: true,
					damage: [1, 6, "Bludgeoning"],
					range: "Melee (10 ft)",
					description: "Finesse, Reach, on hit, may use bonus action to attempt a grapple on target",
					selectNow : true
				}],    
			},
			"venom sac (donor: has a natural weapon/trait that deals poison/poisoned condition)" : {
				name: "Venom Sac",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description: "\n    As a bonus action, I can coat a weapon in basic poison. the save DC = 8+Prof+Con mod.",
				action: ["bonus action", ""],
				extraLimitedFeatures: [{
					name: "Venom Sac",
					usages: 1,
					recovery: "short rest"
				}]
			},
			"voice box (donor: has the mimicry trait)" : {
				name: "Voice Box",
				source: ["VSoS", 373],
				submenu: "[Head Grafts]",
				description: "\n   I can mimic any sound I have heard, including voices. Creatures can tell they are mimicries"+
								"\n   if they succeed on an Insight check contested by my Deception check.",
			},
			"webspinner apparatus (donor: has a web action)" : {
				name: "Webspinner Apparatus",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				additional: "1 x short rest",
				description: "\n    I can cast the web spell without using a spell slot or components: DC 8+Prof+Con mod.",
				extraLimitedFeatures: [{
					name: "Webspinner Apparatus",
					usages: 1,
					recovery: "short rest"
				}],
				spellcastingBonus : [{
					spells: ["web"],
					name: "Webspinner Apparatus",
					selection: ["web"],
					firstCol: "oncesr",
					spellcastingAbility: 3,
					allowUpCasting: false,
				}]
			}
		},
		"subclassfeature6": {
			name: "Surgical Attack",
			source: ["VSoS", 42],
			minlevel: 6,
			description: desc([
				"When I take the attack action/prime & throw a bomb, I can make an unarmed strike as part of",
				"that action, as long as I use a monsterous graft for the unarmed strike."
			])
		},
		"subclassfeature10": {
			name: "Necromantic Organs",
			source: ["VSoS", 42],
			minlevel: 10,
			description: desc("When I am reduced to 0 hit points but not killed, I can drop to 1 hit point instead."),
			usages: 1,
			recovery: "long rest"
		},
		"subclassfeature18": {
			name: "It's Alive!",
			source: ["VSoS", 42],
			minlevel: 18,
			description: "\n    I can create an alchemy golem with 8 hrs, a healer's kit, alchemist's supplies, a knife, and 3"+
							"\n    recently deceased Humanoid corpses. I can only have 1 golem at a time. See companion pg.",
			action: ["bonus action", "Command Alchemy Golem"],
			creaturesAdd: [["Alchemy Golem", true]],
			creatureOptions: [{
				name: "Alchemy Golem",
				source: ["VSoS", 43],
				size: 3,
				type: "Construct",
				alignment: "unaligned",
				ac : 13,
				hp: 76,
				hd: [9, 8],
				speed: "30 ft",
				scores: [17,9,18,6,10,5],
				damage_resistances: "bludgeoning, piercing and slashing from nonmagical attacks that aren't adamantine",
				damage_immunities: "lightning",
				condition_immunities: "charm, exhaustion, fright, paralysis, petrify, poison",
				proficiencyBonus: 3,
				languages: "same as creator (can't speak)",
				senses: "Darkvision 60 ft",
				passivePerception : 13,
				challengeRating: "5",
				proficiencyBonus: 3,
				attacksAction: 2,
				attacks: [{
					name: "Slam",
					ability: 1,
					damage: [2, 8, "Bludgeoning"],
					range: "Melee (5 ft)",
					abilitytodamage: true,
					description: "Counts as magical"
				}, {
					name: "Bestial Weapon: Claws",
					ability: 1,
					damage: [2, 6, "Slashing"],
					range: "Melee (5 ft)",
					abilitytodamage: false,
					modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
					description: "Counts as magical"
				}, {
					name: "Bestial Weapon: Teeth",
					ability: 1,
					damage: [2, 6, "Piercing"],
					range: "Melee (5 ft)",
					abilitytodamage: false,
					modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
					description: "Counts as magical"
				}, {
					name: "Draconis Fundamentum",
					ability: 3,
					damage: [6, 6, ""],
					range: "15 ft cone",
					abilitytodamage: false,
					dc: true,
					modifiers: ["", "5"],
					tooltip: "Each creature in a 15-foot cone must make a Dexterity saving throw (DC equals 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes 1d6 damage for each point of your proficiency bonus, or half as much damage on a successful one. The breath weapon’s damage type is the same as the donor’s breath weapon. Once you use this ability, you can’t use it again until you finish a short or long rest.",
					description: "Dex save, save halves damage",
				}, {
					name: "Horns",
					ability: 1,
					damage: [2, 6, "Bludgeoning"],
					range: "Melee (5 ft)",
					abilitytodamage: false,
					modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
					description: "Counts as magical; if moved 10 ft in a straight line before attacking, may attempt to knock prone",
					tooltip: "Horns are a natural weapon that you can use to make unarmed strikes. If you move in a straight line for 10 feet immediately before hitting a creature with your horns, that creature must make a Strength check contested by your Strength check. If you succeed, the creature is knocked prone."
				}, {
					name: "Horns",
					ability: 1,
					damage: [2, 6, "Bludgeoning"],
					range: "Melee (5 ft)",
					abilitytodamage: false,
					modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
					description: "Counts as magical; if moved 10 ft in a straight line, may STR contest to knock prone",
				}, {
					name: "Prehensile Tail",
					ability: 1,
					damage: [2, 6, "Bludgeoning"],
					range: "Melee (5 ft)",
					abilitytodamage: false,
					modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
					description: "Counts as magical",
				},{
					name: "Tentacles",
					ability: 1,
					damage: [2, 6, "Bludgeoning"],
					range: "Melee (10 ft)",
					abilitytodamage: false,
					modifiers: ["(oInt+oProf)-(Str+Prof)", "5"],
					description: "Finesse, Reach; Counts as magical; may use bonus action to attempt grapple",
				}],
				traits: [{
					name : "Aversion to Fire",
					description: "If the golem takes fire damage, it has disadv. on ability checks and attack rolls until the end of its next turn.",
				}, {
					name: "Immutable Form",
					description: "The golem is immune to any spell or effect that would alter its form.", 
				}, {
					name: "Lightning Absorption",
					description: "Whenever the golem is subjected to lightning damage, it instead regains hitpoints equal to half the lightning damage dealt.", 
				}, {
					name : "Magic Resistance",
					description: "The golem has advantage on saves vs spells and other magical effects.",
				}, {
					name : "Multiattack",
					description : "The golem can make two melee weapon attacks"
				}],
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
				eval: function(prefix, lvl){
					AddString(prefix + 'Cnote.Left', "\u25C6 It's Alive!: The golem acts independently on its own turn, but always obeys your commands. On each of your turns, you can use a bonus action to mentally command the golem if it is within 60 feet of you. You decide what actions the golem will take and where it will move during its next turn, or you can issue a general command. If you issue no commands, the golem only defends itself against hostile creatures. Once given an order, the golem continues to follow it until its task its complete. The golem can use your Intelligence modifier + your proficiency bonus for its attack rolls. If the golem drops to 0 hit points, it dies. You can restore the golem's hit points and reanimate it over the course of a long rest.");
					AddString(prefix + 'Cnote.Left', "\n\u25C6 Monsterous Grafts: The golem may have up to three Monstrous Grafts attached to it by its creator. The golem's weapon attacks, including monsterous grafts added by its creator, are magical. Monsterous grafts have a +6 attack bonus, deal twice the normal number of damage dice, and have a +5 bonus to their damage rolls. The golem can only have 1 graft in each slot.");
					Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
					Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
				},
				removeeval: function(prefix, lvl){
					RemoveString(prefix + 'Cnote.Left', "\u25C6 It's Alive!: The golem acts independently on its own turn, but always obeys your commands. On each of your turns, you can use a bonus action to mentally command the golem if it is within 60 feet of you. You decide what actions the golem will take and where it will move during its next turn, or you can issue a general command. If you issue no commands, the golem only defends itself against hostile creatures. Once given an order, the golem continues to follow it until its task its complete. The golem can use your Intelligence modifier + your proficiency bonus for its attack rolls. If the golem drops to 0 hit points, it dies. You can restore the golem's hit points and reanimate it over the course of a long rest.");
					RemoveString(prefix + 'Cnote.Left', "\n\u25C6 Monsterous Grafts: The golem may have up to three Monstrous Grafts attached to it by its creator. The golem's weapon attacks, including monsterous grafts added by its creator, are magical. Monsterous grafts have a +6 attack bonus, deal twice the normal number of damage dice, and have a +5 bonus to their damage rolls. The golem can only have 1 graft in each slot.");
				}
			}],
			extraname: "Golem's Monsterous Grafts",
			extrachoices: ["Amphibious Adaptation (Donor: has Amphibious trait)", 
			"Arcane Synapses (Donor: has Spellcasting/Innate Spellcasting)", 
			"Beast's Hide (Donor: Large or larger Beast)", 
			"Bestial Weapons (Arms) (Donor: Bst/Drgn/Mons with Claw attack)", 
			"Bestial Weapons (Head) (Donor: Bst/Drgn/Mons with Bite attack)", 
			"Charging Hooves (Donor: has Charge trait or Gore/Hooves attack)", 
			"Climbing Apparatus (Donor: Bst/Humn/Mons with climb speed)", 
			"Doppel-Blooded (Donor: has shapechanger tag)", 
			"Draconis Fundamentum (Donor: Drgn/Humn/Mons with a Breath Weapon)", 
			"Dragon's Hide (Donor: Large or larger Dragon)", 
			"Energetic Suture (Acid) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to acid damage)",
			"Energetic Suture (Cold) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to cold damage)",
			"Energetic Suture (Fire) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to fire damage)",
			"Energetic Suture (Poison) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to poison damage)",
			"Energetic Suture (Thunder) (Donor: Clst/Drgn/Elem/Fey/Fnd with imm/res to thunder damage)",    
			"Fiend's Hide (Donor: Medium or larger Fiend)", 
			"Heart of Steel (Donor: Construct)", 
			"Horns (Donor: has Gore/Horns/Ram/Tusk attack)", 
			"Indiscernible Anatomy (Donor: Medium or larger Aberration)", 
			"Leaping Legs (Donor: has the Pounce/Standing Leap trait)", 
			"Olfactory Implants (Donor: has Keen Smell/Keen Hearing and Smell trait)", 
			"Oversized Arms (Donor: Giant)", 
			"Prehensile Tail (Donor: has a Tail attack)", 
			"Regenerating Marrow (Donor: has the Regeneration trait)", 
			"Replacement (Donor: any creature)", 
			"Stench (Donor: has the Stench trait)", 
			"Tentacles (Donor: has a Tentacles/Tendrils attack)", 
			"Venom Sac (Donor: has a natural weapon/trait that deals poison/poisoned condition)", 
			"Voice Box (Donor: has the Mimicry trait)", 
			"Webspinner Apparatus (Donor: has a Web action)"],
			extraTimes: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3],
			"amphibious adaptation (donor: has amphibious trait)" : {
				name: "Amphibious Adaptation",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Amphibious Adaptation: The golem can breathe both air and water.");
						aFnc(prefix + "Comp.Use.Speed", ",\nswim 30 ft");
					},
					"My alchemy golem gains the Monsterous Graft: Amphibious Adaptation."]
				}
			},
			"arcane synapses (donor: has spellcasting/innate spellcasting)" : {
				name: "Arcane Synapses",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Arcane Synapses: The golem knows 1 wizard cantrip. If a second creature is harvested and grafted, it knows 2 wizard cantrips.");
					},
					"My alchemy golem gains the Monsterous Graft: Arcane Synapses."]
				},
				spellcastingBonus: [{
					name: "Arcane Synapses (Golem)",
					firstCol: "AG",
					times: 2,
					spellcastingAbility: 4,
					"class": ["wizard"],
					level: [0,0],
				}]
			},
			"beast's hide (donor: large or larger beast)" : {
				name: "Beast's Hide",
				source: ["VSoS", 370],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.AC", "13+Dex");
						else Value(prefix + "Comp.Use.AC", "14+Dex");
					},
					"My alchemy golem's AC is equal to 13 + its Dexterity Modifier, if its worn armor isn't higher. It may benefit from a shield."]
				},
			},
			"bestial weapons (arms) (donor: bst/drgn/mons with claw attack)" : {
				name: "Bestial Weapons (Arms)",
				source: ["VSoS", 370],
				submenu: "[Arms Grafts]",
				description: "",                  
				calcChanges: {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;              
						if (bAdd) { 
							AddWeapon("Bestial Weapon: Claws", "", prefix);
							ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions[0].commoneval(prefix, oCrea, bAdd);
						 }
						else {
							for (i = 1; i < 3; ++i){
								if (/bestial weapon: claws/i.test(What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")))
									Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "");
							}
						}
					},
					"My alchemy golem gains the Monsterous Graft: Bestial Weapons (Arms).",
					900],
				},
			},
			"bestial weapons (head) (donor: bst/drgn/mons with bite attack)" : {
				name: "Bestial Weapons (Head)",
				source: ["VSoS", 370],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;              
						if (bAdd) { 
							AddWeapon("Bestial Weapon: Teeth", "", prefix); 
							ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions[0].commoneval(prefix, oCrea, bAdd);
						}
						else {
							for (i = 1; i < 3; ++i){
								if (/bestial weapon: teeth/i.test(What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")))
									Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "");
							}
						}
					},
					"My alchemy golem gains the Monsterous Graft: Bestial Weapons (Head).",
					900],
				},
			},
			"charging hooves (donor: has charge trait or gore/hooves attack)" : {
				name: "Charging Hooves",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Features", "\n\u25C6 Charging Hooves: Once on each of its turns, if the golem moves 15 ft in straight line, it can move +10 ft in that direction");
					}]
				}
			},
			"climbing apparatus (donor: bst/humn/mons with climb speed)" : {
				name: "Climbing Apparatus",
				source: ["VSoS", 370],
				submenu: "[Legs Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Speed", ",\nclimb 30 ft");
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Climbing Apparatus: The golem gains a climb speed equal to its walking speed.");
					}]
				}
			},
			"doppel-blooded (donor: has shapechanger tag)" : {
				name: "Doppel-Blooded",
				source: ["VSoS", 370],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Doppel-Blooded: Once per long rest, The golem can transform its appearance for 1 hr. it can change its height, weight, face, voice, hair, & race. It cannot become a different size, and its basic shape remains.");
					}]
				}
			},
			"draconis fundamentum (donor: drgn/humn/mons with a breath weapon)" : {
				name: "Draconis Fundamentum",
				source: ["VSoS", 371],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
				creatureCallback: [function(prefix, oCrea, bAdd) {
					if (!/\balchemy golem\b/i.test(oCrea.name)) return;              
					if (bAdd) { 
						AddWeapon("Draconis Fundamentum", "", prefix); 
						ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions[0].commoneval(prefix, oCrea, bAdd);
					}
					else {
						for (i = 1; i < 3; ++i){
							if (/Draconis Fundamentum/i.test(What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")))
								Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "");
							}
						}
					},
					"My alchemy golem gains the Monsterous Graft: Draconis Fundamentum.",
					900],
				}
			},
			"dragon's hide (donor: large or larger dragon)" : {
				name: "Dragon's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.AC", 17);
						else Value(prefix + "Comp.Use.AC", "14+Dex");
					}, "My alchemy golem's AC is equal to 17, if its worn armor isn't higher. It may benefit from a shield."]
				}
			},
			"energetic suture (acid) (donor: clst/drgn/elem/fey/fnd with imm/res to acid damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace("adamantine.", "adamantine, acid") );
						else Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(", acid", ".") );
					}]
				}
			},
			"energetic suture (cold) (donor: clst/drgn/elem/fey/fnd with imm/res to cold damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace("adamantine.", "adamantine, cold") );
						else Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(", cold", ".") );
					}]
				}
			},
			"energetic suture (fire) (donor: clst/drgn/elem/fey/fnd with imm/res to fire damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace("adamantine.", "adamantine, fire") );
						else Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(", fire", ".") );
					}]
				}
			},
			"energetic suture (poison) (donor: clst/drgn/elem/fey/fnd with imm/res to poison damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace("adamantine.", "adamantine, poison") );
						else Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(", poison", ".") );
					}]
				}
			},
			"energetic suture (thunder) (donor: clst/drgn/elem/fey/fnd with imm/res to thunder damage)" : {
				name: "Energetic Suture",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace("adamantine.", "adamantine, thunder") );
						else Value(prefix + "Comp.Use.Features", What(prefix + "Comp.Use.Features").replace(", thunder", ".") );
					}]
				}
			},
			"fiend's hide (donor: medium or larger fiend)" : {
				name: "Fiend's Hide",
				source: ["VSoS", 371],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if (bAdd) Value(prefix + "Comp.Use.AC", "15+min(Dex|2)");
						else Value(prefix + "Comp.Use.AC", "14+Dex");
					}, "My alchemy golem's AC is equal to 15 + its Dexterity Modifier, max 2, if its worn armor isn't higher. It may benefit from a shield."]
				}
			},
			"heart of steel (donor: construct)" : {
				name: "Heart of Steel",
				source: ["VSoS", 371],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Heart of Steel: The golem ignores effects of 1 level of exhaustion & finishes a long rest in 4 hours.");
					}]
				}
			},
			"horns (donor: has gore/horns/ram/tusk attack)" : {
				name: "Horns",
				source: ["VSoS", 372],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;            
						if (bAdd) { 
							AddWeapon("Horns", "", prefix);
							var creatureOptions = ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions;
							ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions[0].commoneval(prefix, oCrea, bAdd);
						}
						else {
							for (i = 1; i < 3; ++i){
								if (/horns/i.test(What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")))
									Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "");
							}
						}
					},
					"My alchemy golem gains the Monsterous Graft: Horns.",
					900],
				},        
			},
			"indiscernible anatomy (donor: medium or larger aberration)" : {
				name: "Indiscernible Anatomy",
				source: ["VSoS", 372],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Indiscernible Anatomy: Critical hits against the golem become normal hits.");
					}]
				}
			},
			"leaping legs (donor: has the pounce/standing leap trait)" : {
				name: "Leaping Legs",
				source: ["VSoS", 372],
				submenu: "[Legs Grafts]",
				description: " My jump distance doubles. I can jump my full distance without a running start.",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Leaping Legs: The golem's jump distance is doubled. It can jump its full distance without a running start.");
					}]
				}
			},
			"olfactory implants (donor: has keen smell/keen hearing and smell trait)" : {
				name: "Olfactory Implants",
				source: ["VSoS", 372],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Senses", "Keen Smell");
					}]
				}
			},
			"oversized arms (donor: giant)" : {
				name: "Oversized Arms",
				source: ["VSoS", 372],
				submenu: "[Arms Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						if(bAdd) {
							ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions[0].commoneval(prefix, oCrea, bAdd)
						}
						if(!bAdd) {
							ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions[0].commonremoveeval(prefix, oCrea, bAdd)
						}
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits.", "\n\u25C6 Oversized Arms: The golem's reach increases by 5 ft, unless the weapon used has Reach. It has advantage on saves made to maintain grip on objects.")
					},
					"My golem's reach increases by 5 ft, unless the weapon it is using has Reach.", 1000]	
				}
			},
			"prehensile tail (donor: has a tail attack)" : {
				name: "Prehensile Tail",
				source: ["VSoS", 372],
				submenu: "[External Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;              
						if (bAdd) { 
							AddWeapon("Prehensile Tail", "", prefix);
							AddString(prefix + "Comp.Use.Features", "\n\u25C6 Prehensile Tail: The golem's tail can hold and manipulate objects, but cannot use weapons/shields");
							ClassSubList['alchemist-xenoalchemist'].features['subclassfeature18'].creatureOptions[0].commoneval(prefix, oCrea, bAdd);
						}
						else {
							for (i = 1; i < 3; ++i){
								if (/Prehensile Tail/i.test(What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")))
									Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "");
							}
							RemoveString(prefix + "Comp.Use.Features", "\n\u25C6 Prehensile Tail: The golem's tail can hold and manipulate objects, but cannot use weapons/shields");
						}
					},
					"My alchemy golem gains the Monsterous Graft: Prehensile Tail.",
					900], 
				}
			},
			"regenerating marrow (donor: has the regeneration trait)" : {
				name: "Regenerating Marrow",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Features", "\n\u25C6 Regenerating Marrow: Once per short rest, the golem can use a bonus action to regain hit points equal to 1d10 + Constitution modifier.");
					}]
				}
			},
			"replacement (donor: any creature)" : {
				name: "Replacement",
				source: ["VSoS", 373],
				submenu: "[Any Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Replacement: A replacement limb or organ functions the same as the missing one. It takes up the most relevant body slot.");
					}]
				}
			},
			"stench (donor: has the stench trait)" : {
				name: "Stench",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Features", "\n\u25C6 Stench: Once per short rest, as a bonus action, each creature within 10 ft of the golem must make a Con save, DC 15, or be poisoned until the end of their next turn.");
					}]
				}
			},
			"tentacles (donor: has a tentacles/tendrils attack)" : {
				name: "Tentacles",
				source: ["VSoS", 373],
				submenu: "[Arms Grafts]",
				description: "",
				calcChanges : {
					creatureCallback: [function(prefix, oCrea, bAdd) {
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;              
						if (bAdd) { AddWeapon("Tentacles", "", prefix); } // * no need to call commoneval
						else {
							for (i = 1; i < 3; ++i){
								if (/tentacles/i.test(What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")))
									Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "");
							}
						}
					},
					"My alchemy golem gains the Monsterous Graft: Tentacles.",
					900],   
				}
			},
			"venom sac (donor: has a natural weapon/trait that deals poison/poisoned condition)" : {
				name: "Venom Sac",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Features", "\n\u25C6 Venom Sac: Once per short rest, as a bonus action, the golem can coat a weapon in basic poison. The save DC for this poison is 15.");
					}]
				}
			},
			"voice box (donor: has the mimicry trait)" : {
				name: "Voice Box",
				source: ["VSoS", 373],
				submenu: "[Head Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Traits", "\n\u25C6 Voice Box: The golem can mimic any sound it has heard, including voices. Creatures can tell they are mimicries if they succeed on an Insight check contested by my Deception check.");
					}]
				}
			},
			"webspinner apparatus (donor: has a web action)" : {
				name: "Webspinner Apparatus",
				source: ["VSoS", 373],
				submenu: "[Internal Grafts]",
				description: "",
				calcChanges: {
					creatureCallback: [function(prefix, oCrea,bAdd){
						if (!/\balchemy golem\b/i.test(oCrea.name)) return;
						var aFnc = bAdd ? AddString : RemoveString;
						aFnc(prefix + "Comp.Use.Features", "\n\u25C6 Webspinner Apparatus: Once per short rest, the golem can cast the web spell without using a spell slot or components.");
					}]
				},
				spellcastingBonus : [{
					spells: ["web"],
					name: "Webspinner Apparatus",
					selection: ["web"],
					firstCol: "AG",
					spellcastingAbility : 3,
					allowUpCasting: false
				}]
			}          
		},
	}
})

// Captain class
ClassList["captain"] = {
    name: "Captain",
    regExpSearch: /captain/i,
    source: ["VSoS", 46],
    primaryAbility: "Strength/Dexterity, Charisma",
    prereqs: "Strength 13 or Dexterity 13, and Charisma 13",
    die: 8,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Con", "Cha"],
    abilitySave: 6,
    spellcastingFactor: 1,
    spellcastingTable : levels.map(function (n) { return [0,0,0,0,0,0,0,0,0]}),
    spellcastingList: {
        class: "any",
        spells: [],
    },
    skillstxt: {
        primary: "Choose two from Animal Handling, Athletics, Deception, History, Insight, Intimidation, Perception, and Persuasion",
    },
    armorProfs: {
        primary: [true, true, false, true],
        secondary: [true, true, false, true],
    },
    weaponProfs: {
        primary: [true, true],
        secondary: [true, true]
    },
    equipment: "Captain starting equipment: " +
    	"\n \u2022 Scale mail -or- leather armor;" +
        "\n \u2022 A warhammer -or- a longsword -or- any simple weapon;" +
        "\n \u2022 A light crossbow and 20 bolts -or- a shortbow and 20 arrows -or- 5 javelins;" +
        "\n \u2022 A diplomat's pack -or- an explorer's pack;" +
        "\n \u2022 An embroidered standard and a dagger",
    subclasses: ["Banner", []],
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    features: {
        "born leader" : {
            name: "Born Leader",
            source: ["VSoS", 46],
            minlevel: 1,
            description: "\n    I have advantage on any Charisma (Persuasion) checks to convince someone to let me take"+
                         "\n    charge of a situation or to give someone orders in a dangerous situation. I can use my"+
                         "\n    Cha mod instead of Int for any ability check I make related to planning, strategy, or tactics."
        },
        "fighting style" : {
            name: "Fighting Style",
            source: ["VSoS", 47],
            minlevel: 1,
            description: "\n    Choose a Fighting Style using the \"Choose Feature\" button above",
            choices: ["Archery", "Defense", "Dueling", "Protection"],
            "archery" : FightingStyles.archery,
            "defense" : FightingStyles.defense,
            "dueling" : FightingStyles.dueling,
            "protection" : FightingStyles.protection,
        },
        // Big thanks to MorePurpleMoreBetter for the writing CalcChanges attribute that lets the user generate cohort spell sheets.
        "cohort" : {
            name: "Cohort",
            source: ["VSoS", 47],
            minlevel: 2,
            description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                         "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                         "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                         "\n    The previous cohort loses all abilities granted by this ability.", 
            choices: ["Abbot: Generate Spells (6th level)", "Abbot: Generate Spells (14th level)", "Cultist: Generate Spells (1st level)", "Cultist: Generate Spells (6th level)", "Mage: Generate Spells (1st level)", "Mage: Generate Spells (6th level)", "Mage: Generate Spells (14th level)", "Mage: Generate Spells (18th level)"],
            "abbot: generate spells (6th level)": {
                name: "Abbot Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level >= 6 && classes.known.captain.level < 14)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\babbot\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Abbot";
                    CurrentSpells["captain"].shortname = "Abbot";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            // Only do this for the 'captain' class, and not for prepared spells, and not if the selected ability score is "none"
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
                
                            // Find the "abbot" companion by looking at the known
                            // This means that "abbot" needs to be part of the Creature's object name
                            // (e.g. CreatureList["abbot"]), or it has to be part of the name of the creature
                            // when added through creatureOptions
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\babbot\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }
                
                            // Stop if no match was found
                            if (!prefix) return;
                
                            // Get the abbreviation for the selected ability
                            var abi = AbilityScores.abbreviations[ability - 1];
                
                            // Get the modifier for the character and the found abbot creature
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            // Return the difference between the two modifiers
                            return creaMod - charMod;
                        }, "My Abbot cohort can cast these spells. These spells use the abbot's Wisdom for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["guidance", "spare the dying", "bless", "lesser restoration", "protection from evil and good"],
                    name: "Abbot Cohort",
                    selection: ["guidance", "spare the dying", "bless", "lesser restoration", "protection from evil and good"],
                    firstCol: "atwill",
                    times: 5,
                    magicitemComponents: true,
                    spellcastingAbility: 5,
                }]
            },
            "abbot: generate spells (14th level)": {
                name: "Abbot Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level >= 14)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\babbot\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Abbot";
                    CurrentSpells["captain"].shortname = "Abbot";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
                
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\babbot\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }
                            if (!prefix) return;
                
                            var abi = AbilityScores.abbreviations[ability - 1];
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            return creaMod - charMod;
                        }, "My Abbot cohort can cast these spells. These spells use the abbot's Wisdom for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["guidance", "spare the dying", "bless", "lesser restoration", "protection from evil and good", "death ward", "revivify", "speak with animals"],
                    name: "Abbot Cohort",
                    selection: ["guidance", "spare the dying", "bless", "lesser restoration", "protection from evil and good", "death ward", "revivify", "speak with animals"],
                    firstCol: "atwill",
                    times: 8,
                    magicitemComponents: true,
                    spellcastingAbility: 5,
                }]
            },
            "cultist: generate spells (1st level)": {
                name: "Cultist Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level < 6)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\bcultist\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Cultist";
                    CurrentSpells["captain"].shortname = "Cultist";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
 
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\bcultist\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }
                            if (!prefix) return;
                
                            var abi = AbilityScores.abbreviations[ability - 1];            
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            return creaMod - charMod;
                        }, "My Cultist cohort can cast these spells. These spells use the cultist's Charisma for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["dancing lights", "mage hand", "minor illusion", "charm person", "detect magic"],
                    name: "Cultist Cohort",
                    selection: ["dancing lights", "mage hand", "minor illusion", "charm person", "detect magic"],
                    firstCol: "atwill",
                    times: 5,
                    magicitemComponents: true,
                    spellcastingAbility: 6,
                }]
            },
            "cultist: generate spells (6th level)": {
                name: "Cultist Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level >= 6)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\bcultist\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Cultist";
                    CurrentSpells["captain"].shortname = "Cultist";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
                
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\bcultist\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }            
                            if (!prefix) return;
                
                            var abi = AbilityScores.abbreviations[ability - 1];
                
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            return creaMod - charMod;
                        }, "My Cultist cohort can cast these spells. These spells use the cultist's Charisma for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["dancing lights", "mage hand", "minor illusion", "charm person", "detect magic", "disguise self", "false life", "suggestion"],
                    name: "Cultist Cohort",
                    selection: ["dancing lights", "mage hand", "minor illusion", "charm person", "detect magic", "disguise self", "false life", "suggestion"],
                    firstCol: "atwill",
                    times: 8,
                    magicitemComponents: true,
                    spellcastingAbility: 6,
                }]
            },
            "mage: generate spells (1st level)": {
                name: "Mage Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level < 6)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\bmage\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Mage";
                    CurrentSpells["captain"].shortname = "Mage";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
                
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\bmage\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }            
                            if (!prefix) return;
                
                            var abi = AbilityScores.abbreviations[ability - 1];
                
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            return creaMod - charMod;
                        }, "My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["mage hand", "prestidigitation", "floating disk", "grease", "mage armor"],
                    name: "Mage Cohort",
                    selection: ["mage hand", "prestidigitation", "floating disk", "grease", "mage armor"],
                    firstCol: "atwill",
                    times: 5,
                    magicitemComponents: true,
                    spellcastingAbility: 4,
                }]
            },
            "mage: generate spells (6th level)": {
                name: "Mage Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level >= 6 && classes.known.captain.level < 14)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\bmage\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Mage";
                    CurrentSpells["captain"].shortname = "Mage";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
                
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\bmage\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }            
                            if (!prefix) return;
                
                            var abi = AbilityScores.abbreviations[ability - 1];
                
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            return creaMod - charMod;
                        }, "My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["mage hand", "prestidigitation", "floating disk", "grease", "mage armor", "message", "hold person", "invisibility"],
                    name: "Mage Cohort",
                    selection: ["mage hand", "prestidigitation", "floating disk", "grease", "mage armor", "message", "hold person", "invisibility"],
                    firstCol: "atwill",
                    times: 8,
                    magicitemComponents: true,
                    spellcastingAbility: 4,
                }]
            },
            "mage: generate spells (14th level)": {
                name: "Mage Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level >= 14 && classes.known.captain.level < 18)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\bmage\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Mage";
                    CurrentSpells["captain"].shortname = "Mage";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
                
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\bmage\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }            
                            if (!prefix) return;
                
                            var abi = AbilityScores.abbreviations[ability - 1];
                
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            return creaMod - charMod;
                        }, "My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["mage hand", "prestidigitation", "floating disk", "grease", "mage armor", "message", "hold person", "invisibility", "dimension door", "polymorph"],
                    name: "Mage Cohort",
                    selection: ["mage hand", "prestidigitation", "floating disk", "grease", "mage armor", "message", "hold person", "invisibility", "dimension door", "polymorph"],
                    firstCol: "atwill",
                    times: 10,
                    magicitemComponents: true,
                    spellcastingAbility: 4,
                }]
            },
            "mage: generate spells (18th level)": {
                name: "Mage Cohort",
                description: "\n    I gain a cohort. Select a cohort using the \"Companion Options\" button on a Companion"+
                             "\n    page, and generate cohort spell sheets by using the \"Choose Feature\" button above.  If my"+
                             "\n    cohort is slain, I can return my cohort to life by the usual methods, or initiate a new cohort."+
                             "\n    The previous cohort loses all abilities granted by this ability.", 
                prereqeval: function(v) {
                    if (!(classes.known.captain.level >= 18)) return false;
 
                    for (var entry in CurrentCompRace) {
                        if (/\bmage\b/i.test(CurrentCompRace[entry].known)) return true;
                    }
                    return false;
                },
                eval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Mage";
                    CurrentSpells["captain"].shortname = "Mage";
                },
                removeeval: function(lvl, chc){
                    CurrentSpells["captain"].name = "Captain";
                    CurrentSpells["captain"].shortname = "Captain";
                },
                calcChanges: {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (spellcasters.indexOf("captain") == -1 || type == "prepare" || ability === 0) return;
                
                            var prefix = false;
                            for (var entry in CurrentCompRace) {
                                if ( /\bmage\b/i.test(CurrentCompRace[entry].known) ) {
                                    prefix = entry;
                                    break;
                                }
                            }            
                            if (!prefix) return;
                
                            var abi = AbilityScores.abbreviations[ability - 1];
                
                            var charMod = Number(What(abi + " Mod"));
                            var creaMod = Number(What(prefix + "Comp.Use.Ability." + abi + ".Mod"));
                
                            return creaMod - charMod;
                        }, "My Mage cohort can cast these spells. These spells use the mage's Intelligence for the spellcasting ability, spell attacks, and saving throw DCs."
                    ]
                },
                spellcastingBonus:[{
                    spells: ["mage hand", "prestidigitation", "tenser's floating disk", "grease", "mage armor", "message", "hold person", "invisibility", "dimension door", "polymorph", "otiluke's resilient sphere"],
                    name: "Mage Cohort",
                    selection: ["mage hand", "prestidigitation", "tenser's floating disk", "grease", "mage armor", "message", "hold person", "invisibility", "dimension door", "polymorph", "otiluke's resilient sphere"],
                    firstCol: "atwill",
                    times: 11,
                    magicitemComponents: true,
                    spellcastingAbility: 4,
                }]
            }
        },
        "subclassfeature3" : {
            name: "Banner",
            source: ["VSoS", 38],
            minlevel: 3,
            description: "\n    Choose a Banner to fly by entering it in the \"Class\" field."
        },
        "war tactics" : {
            name: "War Tactics",
            source: ["VSoS", 38],
            minlevel: 3,
            additional: levels.map(function (n) { 
				return n < 3 ? "" : n < 6 ? "d8" : n < 10 ? "d8" : n < 14 ? "d10" : n < 18 ? "d10" : "d12";
			}),
			limfeaname : "Battle Dice",
			usages : levels.map(function(n){
				return n < 3 ? 0 : n < 6 ? 2 : n < 14 ? 3 : 4;
			}),
			recovery : "SR/Init",
            description: "\n    I gain a pool of battle dice, which I can use to perform special maneuvers in combat."+
                            "\n    I regain expended battle dice finishing a short/long rest, or when rolling initiative."+
                            "\n    My battle dice change when I reach certain captain levels."+
                            "\n    If a maneuver requires a saving throw, the DC is (8 + proficiency + my Charisma mod).",
            extraname: "War Tactic Maneuver",
            action: [["bonus action", "Brace"],
                        ["bonus action", "Rally"],
                        ["bonus action", "Staggering Strike"]],
            "brace" : {
                name: "Brace",
                source: ["VSoS", 48],
                description: "\n    As a bonus action, I can expend a battle die. Each allied creature within 30 feet of me that"+
                                "\n    can see or hear me adds the battle die to all saves they make until the end of my next turn.",
            },
            "rally" : {
                name: "Rally",
                source: ["VSoS", 48],
                description: "\n    As a bonus action, I can expend a battle die to choose 1 ally other than myself within 60 ft of"+
                                "\n    me that can see or hear me. That ally regains hit points equal to the number rolled + my"+
                                "\n    Charisma modifier. I can't use this ability to heal a creature that has 0 hit points."
            },
            "staggering strike" : {
                name: "Staggering Strike",
                source: ["VSoS", 48],
                description: "\n    As a bonus action, when I make a weapon attack against a Large or smaller creature, I can"+
                                "\n    expend a battle die. On a hit, the target must make a Constitution save or be incapacitated"+
                                "\n    until the start of my next turn."
            },
            autoSelectExtrachoices : [{
                extrachoice: "brace"
            }, {
                extrachoice: "rally"
            }, {
                extrachoice: "staggering strike"
            }],
        },
        "blitz" : {
            name: "Blitz",
            source: ["VSoS", 48],
            minlevel: 5,
            description: "\n    As a bonus action, I can have a cohort or friendly creature within 60 feet of me that can see"+
                            "\n    or hear me use their reaction to move up to their speed or make a weapon attack.",
            action: ["bonus action", "Blitz"]
        },
        "advanced tactics" : {
            name: "Advanced Tactics",
            source: ["VSoS", 48],
            minlevel: 9,
            description: " My War Tactics maneuvers improve.",
            extraname: "Advanced Maneuver",
            "advanced brace" : {
                name: "Advanced Brace",
                source: ["VSoS", 49],
                description: "\n    When I use Brace, affected allies also add the battle die to their ability checks."
            },
            "advanced rally" : {
                name: "Advanced Rally",
                source: ["VSoS", 49],
                description: "\n    When I use Rally, the chosen creature also gains temp hit points equal to my captain level."
            },
            "advanced staggering strike" : {
                name: "Advanced Staggering Strike",
                source: ["VSoS", 49],
                description: "\n    When I use Staggering Strike, I also add the battle die to the damage roll."
            },
            calcChanges: {
                atkAdd: [
                    function(fields, v){
                        if (!v.isDC && !v.isRangedWeapon && v.isMeleeWeapon){
                            var lvl = classes.known.captain.level;
                            var die = lvl < 9 ? "" : "Staggering Strike +" + (lvl < 10 ? "1d8" : lvl < 18 ? "1d10" : "1d12");
                            fields.Description += (fields.Description ? "; " : '') +  die;
                        }
                    }, "I add the battle die roll to my Staggering Strike damage."
                ]
            },
            autoSelectExtrachoices : [{
                extrachoice: "advanced brace"
            }, {
                extrachoice: "advanced rally"
            }, {
                extrachoice: "advanced staggering strike"
            }],
        },
        "coordi nated strike" : {
            name: "Coordinated Strike",
            source: ["VSoS", 49],
            minlevel: 11,
            description: "\n    Once/each on my turns when I hit a creature with an attack, I can deal an extra 2d8 damage"+
                            "\n    if my cohort has also hit that creature with an attack since the end of my last turn.",
            calcChanges: {
                atkAdd: [ 
					function(fields, v) {
                    	if (!v.isDC) fields.Description += (fields.Description ? "; " : '') + "Coordinated strike +2d8 w/Cohort";
                	}, "Once on each of my turns, when I hit a creature with an attack, I can deal an extra 2d8 damage if my cohort has also hit that creature with an attack since the end of my last turn."
                ]
            }
        },
        "lead by example" : {
            name: "Lead By Example",
            source: ["VSoS", 49],
            minlevel: 15,
            description: "\n    When I roll a 20 on an attack roll/ability check/save, friendly creatures within 30 ft of me gain"+
                         "\n    advantage when it makes the same type of roll before the start of my next turn."
        },
        "legendary commander" : {
            name: "Legendary Commander",
            source: ["VSoS", 49],
            minlevel: 20,
            additional: "3 x long rest",
            description: "\n    I gain 3 legendary actions. At the end of another creature's turn, I can spend a legendary"+
                            "\n    action to take an action of my choice, or allow a friendly creature within 60 feet of me that"+
                            "\n    can hear/see me to take an action of their choice. If the creature takes an Attack action as"+
                            "\n    a legendary action, they can use features they have that gives them extra attacks.",
            extraLimitedFeatures: [{
                name: "Legendary Actions",
                usages: 3,
                recovery: "long rest",
            }]
        }
    }
}

// * Dragon Banner Captain subclass
AddSubClass("captain", "dragon",{
	regExpSearch: /\bdragon banner\b/i,
	subname: "Dragon Banner",
	source: ["VSoS", 49],
	features: {
		"subclassfeature3" : {
			name: "Bonus Battle Die",
			source: ["VSoS", 49],
			minlevel: 3,
			description: " I gain 1 extra battle die.",
			limfeaname : "Battle Dice",
			usages : levels.map(function(n){
				return n < 3 ? 0 : 1;
			}),
			additional: levels.map(function (n) { 
				return n < 3 ? "" : n < 6 ? "d8" : n < 10 ? "d8" : n < 14 ? "d10" : n < 18 ? "d10" : "d12";
			}),
			recovery : "SR/Init",
			limfeaAddToExisting : true,			
		},
		"subclassfeature3.1" : {
			name: "Maneuver: Cleave",
			source: ["VSoS", 49],
			minlevel: 3,
			description: " I gain a new maneuver. See notes page.",
			extraname: "Dragon Banner Maneuver",
			"cleave": {
				name: "Cleave",
				source: ["VSoS", 49],
				description: "\n    Once on each of my turns, when I reduce a hostile creature to 0 hit points or score a crit with"+
								"\n    a melee weapon attack, I can spend a battle die to move up to 15 ft and make another melee"+
								"\n    weapon attack as part of the same action. On hit, I add the battle die to the damage roll."
			},
			autoSelectExtrachoices: [{
				extrachoice: "cleave"
			}]
		},
		"subclassfeature7": {
			name: "Maneuver: Wade Into Battle",
			source: ["VSoS", 49],
			minlevel: 7,
			description: " I gain a new maneuver. See notes.",
			extraname: "Dragon Banner Maneuver",
			action: ["bonus action", "Wade Into Battle"],
			"wade into battle": {
				name: "Wade Into Battle",
				source: ["VSoS", 49],
				description: "\n    I can expend a battle die to take the Dash or Disengage action as a bonus action.",
				action : [["bonus action", "Dash/Disengage (1 Battle Dice)"]]
			},
			autoSelectExtrachoices: [{
				extrachoice: "wade into battle"
			}]
		},
		"subclassfeature13": {
			name: "Maneuver: Fury Attack",
			source: ["VSoS", 50],
			minlevel: 13,
			description: " I gain a new maneuver. See notes page.",
			extraname: "Dragon Banner Maneuver",
			action: ["bonus action", "Fury Attack"],
			"fury attack" : {
				name: "Fury Attack",
				source: ["VSoS", 50],
				description: "\n    When I take the attack action on my turn, I may spend a battle die and a bonus action to"+
								"\n    make up to 3 melee weapon attacks instead of 1. Each attack must target a different creature."
			},
			autoSelectExtrachoices: [{
				extrachoice: "fury attack"
			}]
		},
		"subclassfeature17": {
			name: "Vicious Focus",
			source: ["VSoS", 50],
			minlevel: 17,
			description: "\n    When I reduce a hostile creature to 0 hit points or score a crit on a melee weapon attack, for"+
							"\n    the next minute, my weapon attacks score a crit on a 19 or 20. Each time I reduce a hostile"+
							"\n    creature's hit points to 0 or score another crit during this minute, my critical hit range"+
							"\n    increases by 1, to a maximum of 16-20. If I fall unconscious, this effect ends early."
		}
	}
})

// * Eagle Banner Captai subclass
AddSubClass("captain","eagle",{
	regExpSearch: /\beagle banner\b/i,
	subname: "Eagle Banner",
	source: ["VSoS", 50],
	features: {
		"subclassfeature3" : {
			name: "Manuever: Eagle Shot",
			source: ["VSoS", 50],
			minlevel: 3,
			description: " I gain a new maneuver. See notes page.",
			extraname: "Eagle Banner Maneuver",
			action: ["bonus action", "Eagle Shot"],
			"eagle shot" : {
				name: "Eagle Shot",
				source: ["VSoS", 50],
				description: "\n    When I make a ranged weapon attack roll, I can use my bonus action and expend a battle die"+
								"\n    to add it to the roll. I can use this ability before/after the attack roll, but before the GM says"+
								"\n    the attack hits or misses.",
				action : [["bonus action", "Eagle Shot (1 Battle Dice)"]]
			},
			autoSelectExtrachoices: [{
				extrachoice: "eagle shot"
			}]
		},
		"subclassfeature7" : {
			name: "Vantage Point",
			source: ["VSoS", 50],
			minlevel: 7,
			description: "\n    I gain a climbing speed equal to my walking speed, and can climb difficult surfaces at half"+
							"\n    speed without making an ability check.",
			speed: { climb: {spd: "walk", enc : "walk"} } 
		},
		"subclassfeature13" : {
			name: "Close-Quarters Shooting",
			source: ["VSoS", 50],
			minlevel: 13,
			description: "\n    I, and friendly creatures within 15 feet of me, don't gain disadvantage on ranged attack rolls"+
							"\n    from being within 5 feet of a hostile creature."
		},
		"subclassfeature17" : {
			name: "Scattershot",
			source: ["VSoS", 50],
			minlevel: 17,
			description: "\n    I can use my action to make a ranged weapon attack against each creature I choose within a"+
							"\n    15 ft cone, making a separate attack roll for each target. If I target only one creature in this"+
							"\n    cone, my attack deals one additional weapon damage die.",
			action: ["action", "Scattershot"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/scattershot/i.test(v.WeaponTextName) && v.isRangedWeapon && !v.isDC) {
							fields.Range = "15 ft cone";
							fields.Description += (fields.Description ? "; " : '') + "1 atk per target; if only 1 target, +1 dmg die";
						}
					}, 'If the word \"Scattershot\" is included in a ranged weapon attack, it is treated as if it is using my Scattershot feature.'
				]
			}
		}
	}
})

// Jolly Roger subclass
AddSubClass("captain","jolly roger",{
	regExpSearch: /\bjolly roger banner\b/i,
	subname: "Jolly Roger Banner",
	source: ["VSoS", 50],
	features: {
		"subclassfeature3" : {
			name: "Maneuver: Double Thrust",
			source: ["VSoS", 50],
			minlevel: 3,
			description: " I gain a new maneuver. See notes.",
			extraname: "Jolly Roger Banner Maneuver",
			action: ["bonus action", "Double Thrust"],
			"double thrust" : {
				name: "Double Thrust",
				source: ["VSoS", 50],
				description: "\n    When I make an attack with a finesse weapon as part of the Attack Action on my turn, I can"+
								"\n    spend a battle die as a bonus action to make an additional attack with that weapon. I add the"+
								"\n    battle die, instead of my ability modifier, to the weapon's damage roll."
			},
			autoSelectExtrachoices: [{
				extrachoice: "double thrust"
			}],
			calcChanges: {
				atkCalc: [
					function(fields, v, output){
						if (/double thrust/i.test(v.WeaponTextName) && /finesse/i.test(fields.Description) && !v.isDC && v.isMeleeWeapon && classes.known.captain.level > 2) {
							var lvl = classes.known.captain.level;
							var die = lvl < 10 ? "1d8" : lvl < 18 ? "1d10" : "1d12";
							fields.Damage_Bonus = die,
							v.theWea.abilitytodamage = false;
						}
					}, "When the phrase \"Double Thrust\" is added to an attack, I add a battle die, instead of my ability modifier, to the damage roll."
				]
			},
		},
		"subclassfeature7" : {
			name: "Tricky Footwork",
			source: ["VSoS", 50],
			minlevel: 7,
			description: "\n    When I hit a creature of my size or smaller with a melee attack on my turn, I can switch places"+
							"\n    with the target. This movement doesn't provoke opportunity attacks.",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? "; " : '') + "On hit vs crea my size or smaller, can switch w/ target";
						}
					}
				]
			}
		},
		"subclassfeature13" : {
			name: "Unfair Play",
			source: ["VSoS", 50],
			minlevel: 13,
			description: "\n    My cohort and I can use a bonus action to take the Hide, Use an Object action, or attempt to"+
							"\n    shove a creature. I have advantage on Strength (Athletics) checks to push another creature"+
							"\n    out of a waterborne vessel.",
			action: ["bonus action", "Unfair Play"],
			calcChanges: {
				companionCallback: [function(prefix, oCrea, bAdd, sCompType) {
					if (sCompType !== "cohort") return;
					var str = "\u25C6 Unfair Play: (bonus action) The cohort can take the Hide, Use an Object action, or attempt to shove a creature.";
					var aFnc = bAdd ? AddString : RemoveString;
					aFnc(prefix + "Comp.Use.Traits", str, true);
				}] 
			}               
		},
		"subclassfeature17" : {
			name: "All Hands On Deck",
			source: ["VSoS", 50],
			minlevel: 17,
			description: "\n    I can use my action on my turn to direct each friendly creature within 60 feet of me that can"+
							"\n    see me or hear me to use their reaction to take an action of my choice. This action cannot be"+
							"\n    the Attack, Cast a Spell, Dodge, or Use a Magic Item action.",
			action: ["action", "All Hands On Deck"]
		}
	}
})

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
	 
// * Abbot cohort creature option
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
	
// * Berserker cohort creature option
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
	
// * Champion cohort creature option
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
	
// * Construct cohort creature option
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
	
// * Cultist cohort creature option
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
	
// * Hunter cohort creature option
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
	
// * Mage cohort creature option
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
	
// * Scoundrel cohort creature option
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
	
// * Templar cohort creature option
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
	
// * Undead cohort creature option
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

// ! Magic Items

// * Amorist Only
MagicItemsList["potion of true love"] = {
    name: "Potion of True Love",
    sortname: "Potion, True Love",
    source: ["VSoS", 38],
    type: "potion",
    rarity: "",
    weight: 0.5,
    prerequisite: "Can only be made by 18th level Amorists",
    prereqeval: function (v) { return classes.known.alchemist.level >= 18 && classes.known.alchemist.subclass.indexOf("amorist") !== -1; },
    allowDuplicates: false,
    description: "When creating, choose a target. A creature who knows/meets the target within 24 hrs of drinking this is charmed by the target until I make a new potion of true love or the effect ends via remove curse/similar magic. On effect end, the creature is disgusted by the target & can never love them again.",
    descriptionLong: "Costs 4 reagent dice to create. When you make the potion, you choose the creature the target regards as its true love, provided the target knows the creature or meets it within 24 hours of consuming the potion. Additionally, this effect lasts indefinitely, ended only when you make a new potion of true love, or the effect is removed with a remove curse spell or similar magic. When this potion's effects are ended on a target, it regards the creature it once loved with total disgust, and can never love that creature again.",
    descriptionFull: "Starting at 18th level, during a long rest, you can spend 4 reagent dice to make an extremely potent potion of true love. This potion acts much like a philter of love, except that when you make the potion, you choose the creature the target regards as its true love, provided the target knows the creature or meets it within 24 hours of consuming the potion.\nAdditionally, this effect lasts indefinitely, ended only when you make a new potion of true love, or the effect is removed with a remove curse spell or similar magic. When this potion's effects are ended on a target, it regards the creature it once loved with total disgust, and can never love that creature again.",
}

// * Mutagenist's Only
MagicItemsList["mutagen"] = {
	name: "Mutagen",
	sortname: "Mutagen",
	source: ["VSoS", 40],
	type: "mutagen",
	rarity: "",
	prerequisite: "Can only be used by Mutagenists",
	prereqeval: function (v) { return classes.known.alchemist.level >= 2 && classes.known.alchemist.subclass.indexOf("mutagenist") !== -1; },
	allowDuplicates: false,
	choices: ['Strength', 'Dexterity', 'Constitution'],
	description: "Your Strength score increases by 3, to a maximum of 20. You sprout a natural weapon of your choice that you can make unarmed strikes with. This natural weapon deals 1d6 + Strength modifier damage, of type bludgeoning, piercing, or slashing.",
	"strength": {
		name: "Strength Mutagen",
		description: "Your Strength score increases by 3, to a maximum of 20. You sprout a natural weapon of your choice that you can make unarmed strikes with. This natural weapon deals 1d6 + Strength modifier damage, of type bludgeoning, piercing, or slashing.",
		descriptionLong: "Your Strength score increases by 3, to a maximum of 20. Additionally, you sprout claws, fangs, spines, horns, or a different natural weapon of your choice. You can use this natural weapon to make unarmed strikes. If you hit with it, you deal damage equal to 1d6 + your Strength modifier instead of the bludgeoning damage normal for an unarmed strike. The damage of this attack is bludgeoning, piercing, or slashing, as appropriate for the natural weapon.",
		descriptionFull: "Your Strength score increases by 3, to a maximum of 20. Additionally, you sprout claws, fangs, spines, horns, or a different natural weapon of your choice. You can use this natural weapon to make unarmed strikes. If you hit with it, you deal damage equal to 1d6 + your Strength modifier instead of the bludgeoning damage normal for an unarmed strike. The damage of this attack is bludgeoning, piercing, or slashing, as appropriate for the natural weapon.",
		scores: [3,0,0,0,0,0],
		weaponOptions : [{
			name : "Unarmed Strike (Strength Mutagen)",
			regExpSearch : /unarmed strike \(strength mutagen\)/i,
			source : [["VSoS", 40]],
			ability : 1,
			damage : [1, 6, "Choose"],
			type : "Natural",
			range : "Melee",
			abilitytodamage : true,
			baseWeapon : "unarmed strike",
			selectNow : true
		}]
	},
	"dexterity": {
		name: "Dexterity Mutagen",
		description: "Your Dexterity score increases by 3, to a maximum of 20. Additionally, your walking speed increases by 5 feet.",
		descriptionLong: "Your Dexterity score increases by 3, to a maximum of 20. Additionally, your walking speed increases by 5 feet.",
		descriptionFull: "Your Dexterity score increases by 3, to a maximum of 20. Additionally, your walking speed increases by 5 feet.",
		scores: [0,3,0,0,0,0],
		speed : {
			walk : {spd: "+5", enc : 0}
		}
	},
	"constitution": {
		name: "Constitution Mutagen",
		description: "Your Constitution score increases by 3, to a maximum of 20. As a result, your current and maximum hit points increase accordingly with your new Constitution score, but when this effect ends, both your current and maximum hit points decrease by the same amount.",
		descriptionLong: "Your Constitution score increases by 3, to a maximum of 20. As a result, your current and maximum hit points increase accordingly with your new Constitution score, but when this effect ends, both your current and maximum hit points decrease by the same amount.",
		descriptionFull: "Your Constitution score increases by 3, to a maximum of 20. As a result, your current and maximum hit points increase accordingly with your new Constitution score, but when this effect ends, both your current and maximum hit points decrease by the same amount.",
		scores: [0,0,3,0,0,0]
	}
}

// * Tri-mutagen as a magic item
MagicItemsList["trimutagen"] = {
	name: "Tri-Mutagen",
	sortname: "Tri-Mutagen",
	source: ["VSoS", 40],
	type: "mutagen",
	rarity: "",
	prerequisite: "Can only be used by Mutagenists with the Tri-Mutation discovery",
	prereqeval: function (v) { return classes.known.alchemist.subclass.indexOf("mutagenist") !== -1 && classes.known.alchemist.level >= 13},
	allowDuplicates: false,
	description: "Your Strength, Dexterity, and Constitution scores increase by 3, to a maximum of 20. Your walking speed increases by 5 feet, you sprout natural weapons that deal (1d6 + Str mod) damage of type bludgeoning/piercing/slashing damage. Your current and maximum hit points increase/decrease accordingly.",
	descriptionLong: "Your Strength, Dexterity, and Constitution scores increase by 3, to a maximum of 20. Your walking speed increases by 5 feet, you sprout natural weapons that deal (1d6 + Str mod) damage of type bludgeoning/piercing/slashing damage. Your current and maximum hit points increase/decrease accordingly.",
	descriptionFull: "Your Strength, Dexterity, and Constitution scores increase by 3, to a maximum of 20. Your walking speed increases by 5 feet, you sprout natural weapons that deal (1d6 + Str mod) damage of type bludgeoning/piercing/slashing damage. Your current and maximum hit points increase/decrease accordingly.",
	scores: [3,3,3,0,0,0],
	speed : {
		walk : {spd: "+5", enc : 0}
	}
}

// * Mutagenist's advanced mutagen effects
MagicItemsList["advanced mutation"] = {
	name: "Advanced Mutation",
	sortname: "Mutation, Advanced",
	source: ["VSoS", 41],
	type: "mutagen",
	rarity: "",
	prerequisite: "Can only be gained by 10th level Mutagenists",
	prereqeval: function (v) { return classes.known.alchemist.level >= 10 && classes.known.alchemist.subclass.indexOf("mutagenist") !== -1; },
	allowDuplicates: false,
	choices: ['Hyperelastic', 'Mucilaginous', 'Polybrachia'],
	description: "",
	"hyperelastic": {
		name: "Hyperelastic Mutation",
		description: "Melee weapons you use are considered to have the Reach property, if they didn't have it already. Additionally, you have advantage on ability checks you make to escape grapple or slip binds.",
		descriptionLong: "Your flesh takes on a rubbery quality, allowing you to bend and stretch with ease. Melee weapons you use are considered to have the Reach property, if they didn't have it already. Additionally, you have advantage on ability checks you make to escape grapple or slip binds.",
		descriptionFull: "Your flesh takes on a rubbery quality, allowing you to bend and stretch with ease. Melee weapons you use are considered to have the Reach property, if they didn't have it already. Additionally, you have advantage on ability checks you make to escape grapple or slip binds.",
		savetxt: {
			text: ["Adv. on checks to escape grapples or binds"]
		},
		calcChanges: {
			atkAdd : [
				function (fields, v){
					if (v.isMeleeWeapon && !/reach/i.test(v.WeaponTextName)) {
						fields.Description += (fields.Description ? "; " : "") + "Reach";
					}
				},
				"While under the effects of a Hyperelastic mutation, melee weapons I wield have Reach, if they didn't already."
			]
		}
	},
	"mucilaginous": {
		name: "Mucilaginous Mutation",
		description: "You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You also have a climbing speed equal to your walking speed. Additionally, creatures have disadvantage on ability checks made to escape your grapples.",
		descriptionLong: "Your skin secretes a thick, extremely sticky substance that helps you adhere to objects. You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You also have a climbing speed equal to your walking speed. Additionally, creatures have disadvantage on ability checks made to escape your grapples.",
		descriptionFull: "Your skin secretes a thick, extremely sticky substance that helps you adhere to objects. You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You also have a climbing speed equal to your walking speed. Additionally, creatures have disadvantage on ability checks made to escape your grapples.",
		speed: {
			climb: {spd: "walk", enc: "walk"}
		}
	},
	"polybrachia": {
		name: "Polybrachia Mutation",
		description: "You grow a pair of extra arms. These arms are fully functional and can be used to hold weapons and shields (allowing you to hold 2 two-handed weapons, or 4 one-handed weapons), perform somatic components of spells, & perform other actions. The arms themselves don't grant you any additional actions.",
		descriptionLong: "You grow a pair of additional arms. These arms are fully functional and can be used to hold weapons and shields (allowing you to hold 2 two-handed weapons, or 4 one-handed weapons), perform somatic components of spells, and perform other actions, though the arms themselves don't grant you any additional actions.",
		descriptionFull: "You grow a pair of additional arms. These arms are fully functional and can be used to hold weapons and shields (allowing you to hold 2 two-handed weapons, or 4 one-handed weapons), perform somatic components of spells, and perform other actions, though the arms themselves don't grant you any additional actions.",
	}
}

// * Ooze bottle magic item for Ooze rancher subclass
MagicItemsList["ooze bottle"] = {
	name: "Ooze Bottle",
	sortname: "Bottle, Ooze",
	source: ["VSoS", 313],
	type: "potion",
	rarity: "rare",
	description: "As an action, you can throw this vial up to 20 feet, releasing a gray ooze. This ooze is friendly to you and your allies, and will attack the nearest creature it can detect. If there is no creature to attack, the ooze will follow you. The ooze dissolves into a lifeless sludge after 1 hour.",
	descriptionLong: "As an action, you can throw this vial up to 20 feet, shattering it on impact and releasing a gray ooze. This ooze is friendly to you and your allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, the ooze will follow you. However, the biochemistry of this ooze is unstable, and the ooze dissolves into a lifeless sludge after 1 hour. The charcoal-colored liquid inside this bottle seems to lunge about with unnatural momentum.",
    descriptionFull: "As an action, you can throw this vial up to 20 feet, shattering it on impact and releasing a gray ooze. This ooze is friendly to you and your allies, and will otherwise attack the nearest creature it can detect. If there is no creature to attack, the ooze will follow you. However, the biochemistry of this ooze is unstable, and the ooze dissolves into a lifeless sludge after 1 hour. The charcoal-colored liquid inside this bottle seems to lunge about with unnatural momentum.",
}

// ! Weapons

WeaponsList["bomb"] = {
	regExpSearch : /^(?!.*renaissance)(?=.*\bbomb\b).*$/i,
	name : "Bomb",
	source : [["VSoS", 294], ["VSoS", 29]],
	list : "ranged",
	ability : 1,
	dc : true,
	type : "Exotic",
	damage : [1, 10, "fire"],
	range : "30/90 ft",
	weight : 1,
	description : "Finesse, special, DC 11 Dex save or \u00BD dmg to all in 7.5 ft; See tool tip",
	tooltip : "   Special: When a bomb hits a target, it explodes in a 5-foot radius and is destroyed. The bomb can be thrown at an unoccupied space within its range. Each creature other than the target within the blast radius must succeed on a DC 11 Dexterity saving throw, taking half the damage rolled on a failed save or no damage on a successful one.\n   Additionally, as a bonus action, you can empty some of the bomb's explosive material to permanently remove the blast radius from this bomb, dealing damage only to the bomb's target.",
	special : true,
	abilitytodamage : true,
};