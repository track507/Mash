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

// * Geppettin Subraces

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
    trait : "Bisque Geppettin (+2 and +1 or +1 to three different ability scores)" + desc([
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
    trait : "Marionette Geppettin (+2 and +1 or +1 to three different ability scores)" + desc([
        "\u2022 Construct Anatomy: Can eat/drink, but don't need to. Instead of sleep, I go inactive for 4 hrs, not unconscious, can see/hear normally. Spells and effects affecting constructs also affect me",
        "\u2022 False Appearance: While motionless, indistinguishable from an ordinary doll",
        "\u2022 Clipped Strings: Melee attacks with weapons that aren't Two-Handed have Reach on my turn",
        "\u2022 Pantomime: Proficient with Performance, and adv. on Cha (Performance) checks to dance"
    ]),
	skills : ["Performance"],
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
	scores : [0, 1, 0, 0, 0, 2],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		immune : ["nonmagical disease"]
	},
    trait : "Marionette Geppettin (+2 and +1 or +1 to three different ability scores)" + desc([
        "\u2022 Construct Anatomy: Can eat/drink, but don't need to. Instead of sleep, I go inactive for 4 hrs, not unconscious, can see/hear normally. Spells and effects affecting constructs also affect me",
        "\u2022 False Appearance: While motionless, indistinguishable from an ordinary doll",
        "\u2022 Adorable: Proficient with Persuasion, and adv. on Cha (Persuasion) rolls against children or other humanoids fond of cute things",
        "\u2022 Stuffed with Fluff: When taking blud. dmg, I can use my reaction to gain resistance to the damage and be knocked 5 feet away from the damage source. I can't use this feature if I can't be knocked away."
    ]),
	trait : "Raggedy Geppettin (+1 Dexterity, +2 Charisma)\nConstruct Anatomy: Can eat/drink, but don't need to. Instead of sleep, I go inactive for 4 hrs, not unconscious, can see/hear normally.\nFalse Appearance: While motionless, indistinguishable from an ordinary doll.\nStuffed with Fluff: On taking bludgeoning damage, I can use my reaction to resist the damage and be knocked 5 feet away from the source of the damage.\nAdorable: Adv. on Cha(Persuasion) checks vs. children and other people who like cute things.",
	skills : ["Persuasion"],
	scorestxt : "+1 Dexterity, +2 Charisma",
	features : {
		"stuffed with fluff" : {
			name : "Stuffed with Fluff",
			minlevel : 1,
			tooltip : " (Stuffed with Fluff)",
			action : "reaction",
		},
	},
};