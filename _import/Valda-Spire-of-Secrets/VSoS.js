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
	descriptionFull : "Much like drow, humans can be corrupted by the magic of the drow goddess, becoming arachne—humans with eight eyes and coarse, black hair. Sometimes these humans are the offspring of driders or drow priestesses, while other times they bear the marks of a ritual sacrifice gone terribly awry.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.\n \u2022 You know the poison spray cantrip. Starting at 3rd level, you can cast the bane spell with this trait. Starting at 5th level, you can also cast the spider climb spell with this trait. Once you cast spider climb with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n   Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
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

// * Add Classes 

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
                        if ((/bomb/i).test(v.WeaponTextName) && (/\bprimed\b/i).test(v.WeaponTextName)) { // * Only applies to primed bombs
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
						if((/bomb/i).test(v.WeaponTextName) && !(/\bprimed\b/i).test(v.WeaponTextName)) { // * Only applies to non-primed bombs
							output.extraDmg = (What("Str Mod") > What("Dex Mod") ? What("Str Mod") : What("Dex Mod")) - What("Int Mod");
						}
                    },
                    "When priming a bomb, I can add my Intelligence modifier instead of my Dexterity to the bomb's damage roll."
                ]
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
					name : "bramble Bomb",
					source : ["VSoS", 31],
					regExpSearch : /bramble bomb/i,
					baseWeapon : "bomb",
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
			// ! TODO Everything below
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
                "- add them to the damage of a primed bomb (number added can't exceed proficiency bonus).",
                "- Spend 10 min to brew potions that use my bomb save DC & retain potency for 24 hours.",
                "(1/long rest) after a short rest, I can regain spent reagent dice I didn't use to brew potions."
            ]),
            toNotesPage: [{
                name: "Reagent Potions Table",
                note: [
                    "I can brew these potions by expending reagent dice, as long as I meet the Alchemist level requirement.",
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
            limfeaname: "Reagent Dice",
            usages: levels.map(function (n) {
                return n < 3 ? 0 : n;
            }),
            limfeaAddToExisting: false,
            recovery: "long rest",
            extraLimitedFeatures: [{
                name: "Spent Non-Potion Reagent Dice",
                usages: "",
                recovery: "",
            }, {
                name: "Reagent Synthesis",
                usages: 1,
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
            extrachoices: ["Advanced Poisoner (prereq: 13th level Venomsmith)", "Alchemy of Ascendancy (prereq: 17th level Alchemist)", "Alchemy of Influence (prereq: 13th level Alchemist)", "Alchemy of Transformation (prereq: 13th level Alchemist)", "Arcane Study", "Ballistics Research", "Battle Training", "Beguiling Haze (prereq: 13th level Amorist)", "Buffered Metabolism (prereq: 13th level Xenoalchemist)", "Clotting Agent", "Craft Homonculus", "Demolition Spree (prereq: 13th level Mad Bomber)", "Explosive Missile", "Fire Brand", "Fire Eater", "Fire in The Hole (prereq: 9th level Alchemist)", "Fortified Serum (prereq: 13th level Apothecary)", "Grenadier", "Dynamo Charger (prereq: 13th level Dynamo Engineer)", "Hemoreagent (prereq: 17th level Alchemist)", "Lazarus Bolt (prereq: 9th level Alchemist)", "Magnified Blast (prereq: 17th level Alchemist)", "Ooze Cowboy (prereq: 13th level Ooze Rancher)", "Poisoner", "Precision Explosives", "Reactionary Gulp (prereq: 17th level Alchemist)", "Recycled Potions", "Syringe", "Tri-Mutation (prereq: 13th level Mutagenist)"],
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
                submenu: "[1st Level]",
                description: "\n   I learn 3 wizard cantrips. Intelligence is my Spellcasting ability for these cantrips.",
                times: 3,
                spellcastingBonus: [{
                    name: "Arcane Study",
                    spellcastingAbility: 4,
                    "class": ["wizard"],
                    level: [0, 0],
                }, {
                    name: "Arcane Study",
                    spellcastingAbility: 4,
                    "class": ["wizard"],
                    level: [0, 0],
                },
                {
                    name: "Arcane Study",
                    spellcastingAbility: 4,
                    "class": ["wizard"],
                    level: [0, 0],
                }]
            },
            "ballistics research": {
                name: "Ballistics Research",
                source: ["VSoS", 34],
                submenu: "[1st Level]",
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
                submenu: "[1st Level]",
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
                action: ["reaction", "Buffered Metabolism"],
            },
            "clotting agent": {
                name: "Clotting Agent",
                source: ["VSoS", 35],
                submenu: "[1st Level]",
                description: " My hit point max is increased by my alchemist level.",
                calcChanges: {
                    hp: function (totalHD, HDObj, prefix) {
                        return [classes.known.alchemist.level, "Clotting Agent (Alchemist)"];
                    },
                    hpForceRecalc: true
                }
            },
            "craft homonculus": {
                name: "Craft Homunculus",
                source: ["VSoS", 35],
                submenu: "[1st Level]",
                description: "\n    With 8 hours of work, I can create a homunculus. See its companion page for more info.",
                creaturesAdd: [["Cat", true, false, "alchemist_homunculus"]]
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
                submenu: "[1st Level]",
                description: "\n   As a bonus action, I can load a bomb (max 1) onto the head of a crossbow bolt."+
                             "\n   This bolt deals primed bomb damage, but has no blast radius."+ 
                             "\n   I can't fire a bomb bolt on the same turn I throw a bomb.",
                action: ["bonus action", ""],
            },
            "fire brand": {
                name: "Fire Brand",
                source: ["VSoS", 35],
                submenu: "[1st Level]",
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
                                fields.Description += "; deal extra " + (n < 5 ? "1" : n < 11 ? "2" : n < 17 ? "3" : "4") + "d6 fire damage";
                            }
                        },
                        "If the phrase 'Fire Brand' is included in the title of a weapon attack, it is treated as a weapon coated in one of my bomb's contents, as per my Fire Brand discovery.",
                    ]
                }
            },
            "fire eater": {
                name: "Fire Eater",
                source: ["VSoS", 35],
                submenu: "[1st Level]",
                description: "\n   As an action, I can use a bomb to make each creature in a 15 ft cone from me Dex save vs my"+
                             "\n   bomb save DC, taking primed bomb fire damage, or half on a success. When I use this ability,"+
                             "\n   I take 1d4 fire damage for each of my bomb's damage dice.",
                weaponsAdd: ["Fire Eater"],
                weaponOptions: [{
                    name: "Fire Eater",
                    source: ["VSoS", 35],
                    regExpSearch: /\bfire eater\b/i,
                    type: "AlwaysProf",
                    ability: 4,
                    abilitytodamage: true,
                    damage: [1, 10, "fire"],
                    range: "15 ft cone",
                    description: "1d4 damage to self for each of this attack's damage dice",
                    dc: true,
                    isNotWeapon: true,
                }],
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (/fire\s*eater/i.test(v.WeaponTextName)) {
                                fields.Damage_Die = classes.known.alchemist.level < 5 ? "1d10" : classes.known.alchemist.level < 11 ? "2d10" : classes.known.alchemist.level < 17 ? "3d10" : "4d10";
                            }
                        }
                    ]
                }
            },
            // todo: is there another way to showcase this dc?
            "fire in the hole (prereq: 9th level alchemist)": {
                name: "Fire in The Hole",
                source: ["VSoS", 35],
                submenu: "[9th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 9 },
                description: "\n   My bomb save DC increases by half of my proficiency bonus, rounded down.",
                calcChanges : {
                    spellCalc: [
                        function (type, spellcasters, ability) {
                            if (type == "dc" && spellcasters.indexOf("alchemist") != -1) return classes.known.alchemist.level < 17 ? 2 : 3;
                        },
                        "My bomb save DC increases by half of my proficiency bonus, rounded down.",
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
                submenu: "[1st Level]",
                description: "\n   When I prime & throw a bomb, I can use my bonus action to make an attack with a weapon"+
                             "\n   that isn't two handed.",
                action: ["bonus action", "Grenadier"],
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
                action: ["action", "Lazarus Bolt"]
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
                submenu: "[1st Level]",
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
                submenu: "[1st Level]",
                description: "\n   I can choose 1 creature in the blast radius other than the target to automatically"+
                             "\n   succeed on its saving throw and take no damage from it.",
            },
            "reactionary gulp (prereq: 17th level alchemist)": {
                name: "Reactionary Gulp",
                source: ["VSoS", 36],
                submenu: "[17th Level]",
                prereqeval: function (v) { return classes.known.alchemist.level >= 17 },
                description: "\n   " + "Immediately after taking damage, I can use my reaction to drink a potion.",
                action: ["reaction", "Reactionary Gulp"],
            },
            "recycled potions": {
                name: "Recycled Potions",
                source: ["VSoS", 36],
                submenu: "[1st Level]",
                description: "\n   When I brew potions, I can destroy previously brewed potions, regaining the reagent dice"+
                             "\n   used to brew them. I can't gain more than my max number of reagent dice using this ability.",
            },
            "syringe": {
                name: "Syringe",
                source: ["VSoS", 36],
                submenu: "[1st Level]",
                description: "\n   As a bonus action, I can inject a potion into myself or another creature within 5 feet of me,"+
                             "\n   granting the benefits of the potion. I must make a melee attack against unwilling creatures,"+
                             "\n   treating the syringe as a finesse weapon.",
                action: ["bonus action", "Syringe"],
                weaponsAdd: ["Syringe"],
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
                immune: ["my own bombs"],
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
            weaponsAdd: ["Nuclear Bomb"],
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (/\bnuclear\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
                            fields.Damage_Die = "10d10";
                            fields.Damage_Bonus = "100";
                            fields.Description = "Finesse, Dex save for all in 1 mile of target, save half, 60 feet range ignores Evasion";
                            fields.Damage_Type = "Force";
 
                        }
                    },
                    "When the word 'Nuclear' is added to the title one of my Bomb attacks, the attack is treated as one of my Nuclear Bombs."
                ],
                atkCalc: [
                    function (fields, v, output){
                        if (/\bnuclear\b/i.test(v.WeaponTextName) && /\bbomb\b/i.test(v.WeaponTextName)) {
                            output.modToDmg = false;
                        }
                    }
                ]
            }
        }
    }
};

WeaponsList["bomb"] = {
	regExpSearch : /^(?!.*renaissance)(?=.*bomb).*$/i,
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