var iFileName = "GH-Complete.js";

RequiredSheetVersion(13);
// This file adds the content from the Grim Hollows Player Guide

// Define the sources
SourceList["GH"] = {
	name : "Grim Hollows Player Guide",
	abbreviation : "GH",
	group : "Third Party",
};

//Races

RaceList["wechselkind"] = {
	regExpSearch : /^(?=.*wechselkind).*$/i,
	name : "Wechselkind",
	sortname : "Wechselkind",
	source : [["GH", 9]],
	plural : "Wechselkind",
	size : 4,
	speed : {walk : { spd : 25, enc : 15 }},
	languageProfs : ["Sylvan", 1],
	skills : ["Acrobatics"],
	dmgres : ["Poison"],
	savetxt : { adv_vs : ["poison"], immune : ["disease and magical aging"]},
	age : " do not age as normal creatures do. They are forever trapped in the doll-like body of a stolen child.",
	height : " range from under 2 to almost 3 feet tall (1'8\" + 2d8\")",
	weight : " weigh around 100 lb (25 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 2, 0, 0, 1],
	trait : "Wechselkind: (+1 Charisma, +2 Constitution)\nArtifical Form: As a constructed creature, your body functions differently than a normal person. You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You are immune to disease. You don't need to eat, drink, sleep, or breathe. You are still considered humanoid. \nFaerie Glamour: When the faerie leaves a wechselkind in the place of a mortal child, they cover it with a glamour to make it appear identical to the child that was stolen. Over time this glamour fades, but a wechselkind can still call upon it in times of need. You may cast the disguise self spell once with this trait, but only to take the appearance of the child you were intended to replace, and you regain the abilty to do so when you finish a long rest. Charisma is your spellcasting ability for this spell. \nChildish Agility: You can move through the space of any creature that is of a size larger than yours. You gain proficiency in the Acrobatics skill." ,
	features : {
		"Disguise Self" : {
			name : "Faerie Glamour",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Faerie Glamour",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : "oncelr"
								},				
							},
				},
  };
RaceList["laneshi warrior"] = {
	regExpSearch : /^(?=.*laneshi)(?=.*warrior).*$/i,
	name : "Laneshi Warrior",
	sortname : "Laneshi, Warrior",
	source : [["GH", 10]],
	plural : "Laneshi Warriors",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }, swim : { spd : 30, enc : 30 }},
	vision : [["Darkvision", 60]],
	languageProfs : ["Laneshi", 1],
	skills : ["Animal Handling"],
	weaponProfs : [false, false, ["spear", "trident", "javelin"]],
	armorProfs : [true, false, false],
	age : " Laneshi mature quickly, reaching adulthood at around 14, and live up to 150 years old.",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [2, 0, 0, 0, 1, 0],
	trait : "Laneshi Warrior: (+1 Wisdom, +2 Strength)\nAmphibious: You can breathe both air and water. \nBeast Whispers: You know the speak with animals spell and can cast it once per day with this trait, regaining the ability to do so upon the completion of a long rest. \nSkirmish Tactics: When you hit a hostile creature with a weapon attack, you may take the Disengage action as a bonus action until the end of your turn. \nLaneshi Weapon Training: You gain proficiency with spears, tridents, javelins, and light armor. You also gain proficiency in the Animal Handling skill." ,
	features : {
		"Speak with Animals" : {
			name : "Beast Whispers",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Beast Whispers",
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : "oncelr"
								},				
							},
		"Skirmish Tactics" : {
			name : "Skirmish Tactics",
			minlevel : 1,
			action : ["bonus action", "(Disengage)"]			
							},
				},
  };
RaceList["laneshi mystic"] = {
	regExpSearch : /^(?=.*laneshi)(?=.*mystic).*$/i,
	name : "Laneshi Mystic",
	sortname : "Laneshi, Mystic",
	source : [["GH", 10]],
	plural : "Laneshi Mystics",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }, swim : { spd : 30, enc : 30 }},
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	languageProfs : ["Laneshi", 1],
	age : " Laneshi mature quickly, reaching adulthood at around 14, and live up to 150 years old.",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Laneshi Mystic: (+1 Strength, +2 Wisdom)\nAmphibious: You can breathe both air and water. \nBeast Whispers: You know the speak with animals spell and can cast it once per day with this trait, regaining the ability to do so upon the completion of a long rest. \nSDuality of Spirit: You have undergone the Rite of Tann'lia, and the soul of your dead twin is now bound to your own. You have resistance to pyschic damage and you have advantage on Intelligence, Wisdom, and Charisma saves against magic. The first time this trait activates after a long rest, you must make a DC 12 Wisdom saving throw. If you fail, your twin's spirit attempts to wrest control away from you, leaving you stunned until the end of your next turn. \nLaneshi Magic: You know one necromancy cantrip of your choice. At 5th level, you learn an additional necromancy cantrip of your choice. Wisdom is your spellcasting ability for it." ,
		spellcastingBonus : {
			name : "Laneshi Magic",
			class : "any",
			school : ["Necro"],
			level : [0, 5],
			atwill : true, 
						},
	features : {
		"Speak with Animals" : {
			name : "Beast Whispers",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Beast Whispers",
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : "oncelr"
								},				
							},
				},
  };
RaceList["ogresh"] = {
	regExpSearch : /^(?=.*ogresh).*$/i,
	name : "Ogresh",
	sortname : "Ogresh",
	source : [["GH", 11]],
	plural : "Ogresh",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	languageProfs : [3],
	savetxt : {adv_vs : ["charmed"]},
	skillstxt : "Choose two from Persuasion, Insight, Deception, and Performance",
	age : " Ogresh reach maturity around 25 years old, and can live 300 years.",
	height : " range from under 6 to almost 7 feet tall (5'8\" + 2d8\")",
	weight : " weigh around 300 lb (200 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 1, 2],
	carryingCapacity : 2,
	trait : "Ogresh: (+1 Wisdom, +1 Constitution, +2 Charisma)\nTakes One to Know One: You have advantage on saving throws against being charmed.\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\nGift of Gab: You gain proficiency with two of the following skills of your choice - Persuasion, Insight, Deception, and Performance.\nA Friendly Ear: Once per short rest, you can attempt to charm a non-hostile creature you are conversing with if you converse with them for at least one minute. The creature must make Wisdom saving throw, the DC for the saving throw equals 8 + your Charisma modifier + your proficiency bonus." ,
	features : {
		"A Friendly Ear" : {
			name : "A Friendly Ear",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",			
							},
				},
  };
RaceList["aurelian downcast"] = {
	regExpSearch : /^(?=.*downcast)(?=.*aurelian).*$/i,
	name : "Aurelian Downcast",
	sortname : "Downcast, Aurelian",
	source : [["GH", 13]],
	plural : "Aurelian Downcasts",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	languageProfs : ["Celestial", 1],
	skills : ["Religion"],
	dmgres : ["Necrotic"],
	age : " reach maturity the same as humans and live up to 800 years",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Aurelian Downcast: (+1 Charisma, +2 Wisdom)\nDivine Sangromancy: Whenever an allied creature within 30ft of you regains hit points you may spend a hit die and add the result to the amount gained. \nDivine Learning: You gain proficiency in the Religion skill and you know the thaumaturgy cantrip. \nLingering Divinity: You have resistance to necrotic damage. \nHand of Aurelia: You may cast the cure wounds spell at the 1st level once with this trait, and regain the ability to do so when you finish a long rest. Wisdom is the spellcasting ability for this spell." ,
	spellcastingBonus : {
		name : "Divine Learning",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : "atwill"
	},
	features : {
		"Divine Sangromancy" : {
			name : "Divine Sangromancy",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
								},
		"Cure Wounds" : {
			name : "Hand of Aurelia",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Hand of Aurelia",
				spells : ["cure wounds"],
				selection : ["cure wounds"],
				firstCol : "oncelr"
								},				
							},
				},
  };
RaceList["ulmyrite downcast"] = {
	regExpSearch : /^(?=.*downcast)(?=.*ulmyrite).*$/i,
	name : "Ulmyrite Downcast",
	sortname : "Downcast, Ulmyrite",
	source : [["GH", 13]],
	plural : "Ulmyrite Downcasts",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	languageProfs : ["Celestial", 1],
	skills : ["Religion"],
	dmgres : ["Necrotic"],
	age : " reach maturity the same as humans and live up to 800 years",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Ulmyrite Downcast: (+1 Intelligence, +2 Wisdom)\nDivine Sangromancy: Whenever an allied creature within 30ft of you regains hit points you may spend a hit die and add the result to the amount gained. \nDivine Learning: You gain proficiency in the Religion skill and you know the thaumaturgy cantrip. \nLingering Divinity: You have resistance to necrotic damage. \nUlmyr's Sight: You may cast the detect magic spell once with this trait, and regain the ability to do so when you finish a long rest." ,
	spellcastingBonus : {
		name : "Divine Learning",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : "atwill"
	},
	features : {
		"Divine Sangromancy" : {
			name : "Divine Sangromancy",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
								},
		"Detect Magic" : {
			name : "Ulmyr's Sight",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Ulmyr's Sight",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "oncelr"
								},				
							},
				},
  };
RaceList["maliganti downcast"] = {
	regExpSearch : /^(?=.*downcast)(?=.*maliganti).*$/i,
	name : "Maliganti Downcast",
	sortname : "Downcast, Maliganti",
	source : [["GH", 13]],
	plural : "Maliganti Downcasts",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	languageProfs : ["Celestial", 1],
	skills : ["Religion"],
	dmgres : ["Necrotic"],
	age : " reach maturity the same as humans and live up to 800 years",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Maliganti Downcast: (+1 Strength, +2 Wisdom)\nDivine Sangromancy: Whenever an allied creature within 30ft of you regains hit points you may spend a hit die and add the result to the amount gained. \nDivine Learning: You gain proficiency in the Religion skill and you know the thaumaturgy cantrip. \nLingering Divinity: You have resistance to necrotic damage. \nFury of Maligant: You may cast the branding smite spell at the 1st level once with this trait, and regain the ability to do so when you finish a long rest. Wisdom is the spellcasting ability for this spell." ,
	spellcastingBonus : {
		name : "Divine Learning",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : "atwill"
	},
	features : {
		"Divine Sangromancy" : {
			name : "Divine Sangromancy",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
								},
		"Branding Smite" : {
			name : "Fury of Maligant",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Fury of Maligant",
				spells : ["branding smite"],
				selection : ["branding smite"],
				firstCol : "oncelr"
								},				
							},
				},
  };
RaceList["galtian downcast"] = {
	regExpSearch : /^(?=.*downcast)(?=.*galtian).*$/i,
	name : "Galtian Downcast",
	sortname : "Downcast, Galtian",
	source : [["GH", 13]],
	plural : "Galtian Downcasts",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	languageProfs : ["Celestial", 1],
	skills : ["Religion"],
	dmgres : ["Necrotic"],
	age : " reach maturity the same as humans and live up to 800 years",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Galtian Downcast: (+1 Constitution, +2 Wisdom)\nDivine Sangromancy: Whenever an allied creature within 30ft of you regains hit points you may spend a hit die and add the result to the amount gained. \nDivine Learning: You gain proficiency in the Religion skill and you know the thaumaturgy cantrip. \nLingering Divinity: You have resistance to necrotic damage. \nGalt's Bulwark: You may cast the shield of faith spell once with this trait, and regain the ability to do so when you finish a long rest." ,
	spellcastingBonus : {
		name : "Divine Learning",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : "atwill"
	},
	features : {
		"Divine Sangromancy" : {
			name : "Divine Sangromancy",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
								},
		"Shield of Faith" : {
			name : "Galt's Bulwark",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Galt's Bulwark",
				spells : ["shield of faith"],
				selection : ["shield of faith"],
				firstCol : "oncelr"
								},				
							},
				},
  };
RaceList["dreamer"] = {
	regExpSearch : /^(?=.*dreamer).*$/i,
	name : "Dreamer",
	sortname : "Dreamer",
	source : [["GH", 14]],
	plural : "Dreamers",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	vision : [["Darkvision", 60]],
	languageProfs : ["Dream-speak","Dwarven", 1],
	skillstxt : "After a long rest, choose a skill or tool proficiency",
	age : " Dreamers mature at the age of 18 and can live up to 250 years old.",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 2, 0, 0],
	trait : "Dreamers: (+1 Constitution, +2 Intelligence)\nDreamwalking: While asleep, a dreamer can reach out and touch the dreams of others winthin 1 mile. Additionally, after finishing a long rest, and provided you slept during that time you may choose one skill or tool proficiency. Until your next long rest, you may add a bonus equal to your proficiency bonus to any rolls you make using the selected skill or tool.\nEven in Sleep: While asleep, you do not suffer penalties to Perception rolls utilizing senses other than sight.\nPower Nap: When taking a short rest, you may choose to sleep for 1 hour. If you do so, you may reduce your exhaustion by one level and regain one hit die in addition to the other benefits of a short rest.",
  };
RaceList["disembodied"] = {
	regExpSearch : /^(?=.*disembodied).*$/i,
	name : "Disembodied",
	sortname : "Disembodied",
	source : [["GH", 15]],
	plural : "Disembodied",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	languageProfs : [2],
	skills : ["Arcana"],
	savetxt : {adv_vs : ["charmed"]},
	skillstxt : "Choose two from Persuasion, Insight, Deception, and Performance",
	age : " The diembodied mature at a much slower rate than their humanoid equivalent, and their life expectancy is drastically higher, with not a single disembodied having passed due to old age.",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Disembodied: (+1 Dexterity, +2 Intelligence)\nFade Away: On your turn, as an action, you can fade from the material Realm and disappear into the ethereal plane. While you remain faded away, you cannot interact with the material plane, and effects on the Material Plane cannot interact with you, including spells and creatures. However you can move and hear as normal and see everything in shades of grey. This effect last for 1 minute, or until you use a bonus action to end it. When the effect ends, you reappear in the Material Plane, in the closest unoccupied space you disappeared from. Once you use this feature, you cannot use it again until you complete a long rest.n\Planar Outcast: You may cast the feather fall spell once per day, targeting yourself only. When you reach 3rd level, you may cast the blur spell once per day. When you reach the 5th level, you may cast the blink spell once per day. Intelligence is your spell casting ability for these spells.\nArcane Origins: You gain proficiency in the Arcana skill." ,
	features : {
		"Feather Fall" : {
			name : "Planar Outcast (level 1)",
			limfeaname : "Feather Fall",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Planar Outcast (level 1)",
				spells : ["feather fall"],
				selection : ["feather fall"],
				firstCol : "oncelr"
			}
		},
		"Blur" : {
			name : "Planar Outcast (level 3)",
			limfeaname : "Blur",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Planar Outcast (level 3)",
				spells : ["blur"],
				selection : ["blur"],
				firstCol : "oncelr"
			}
		},
		"Blink" : {
			name : "Planar Outcast (level 5)",
			limfeaname : "Blink",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Planar Outcast (level 5)",
				spells : ["blink"],
				selection : ["blink"],
				firstCol : "oncelr"
			}
		}
	}
				};

//Subclasses

//Barbarian Subclasses

AddSubClass("barbarian", "fractured", {
	regExpSearch : /^(?=.*fractured)(?=.*(warrior|fighter|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname : "Path of the Fractured",
	source : ["GH", 39],
	features : {
		"subclassfeature3" : {
			name : "Face of Rage",
			source : ["GH", 39],
			minlevel : 3,
			description : "\n   " + "I can roll a 1d8 in place of the normal damage of my unarmed strike, and my unarmed strikes count as magical for the purpose of overcoming resistance and immunitiy to nonmagical attacks and damage" + "When I make an unarmed strike and am not holding a shield, I can make one unarmed strike as a bonus action." + "I count as one size larger when determining who you can target and who can target you with grappling, and your reach with unarmed attacks increases to 10ft.",
		},
		"subclassfeature3.1" : {
			name : "Mask of Civility",
			source : ["GH", 39],
			minlevel : 3,
			description : "\n   " + "You gain proficiency with one of the following skills of your choice: Arcana, History, Investigation, Medicine, Nature, Persuasion, or Religion. In addition, you gain proficiency with one artisan's tool kit of your choice or learn to read, speak, and write one language of your choice.",
			languageProfs : [1],
			toolProfs : [[1]],
			skillstxt : "Choose one from Arcana, History, Investigation, Medicine, Nature, Persuasion, or Religion",
		},
		"subclassfeature6" : {
			name : "Brains and Brawn",
			source : ["GH", 39],
			minlevel : 6,
			description : "\n   " + "While I am not raging I have resistance to psychic damage. While I am raging I have resistance to all damage except psychic damage.",
			dmgres : [["Psychic", "All -Psychic (rage)"]],
		},
		"subclassfeature10" : {
			name : "Cunning and Brutal",
			source : ["GH", 39],
			minlevel : 10,
			description : "\n   " + "While I am not raging, I can take a bonus action on each of my turns to take the Disengage or Help action. While I am raging, my unarmed strikes score a critical hit on a roll of 19 or 20. ",
			action : ["bonus action", "Cunning and Brutal"],
			},
		"subclassfeature14" : {
			name : "Better Half",
			source : ["GH", 39],
			minlevel : 14,
			description : "\n   " + "When I take damage that would reduce me to 0 hit points, I can use my reaction to drop to 1 hit point instead and gain temporary hitpoints equal to half my maximum hit points. In addition, if I was raging my rage ends, and if I wasn't raging, I enter a rage (even if you have no remaing uses of your rage). You lose all remaining temporary hit points after 1 minute." + "Once I use this feature, I cant use it again until I finish a long rest.",
			action : ["reaction", ""],
			usages : 1,
			recovery : "long rest"
			}
  }
});
AddSubClass("barbarian", "primal", {
	regExpSearch : /^(?=.*primal)(?=.*(warrior|fighter|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname : "Path of the Primal Spirit",
	source : ["GH", 40],
	features : {
		"subclassfeature3" : {
			name : "Primal Companion",
			source : ["GH", 40],
			minlevel : 3,
			description : "\n   " + "I gain a primal companion, a spirit that accompanies me on my adventures and instintively fights alongside me. Select either the Guardian or Striker, and one of land, sea, or sky. Its in game statistics can be found on one of the following cards, whic uses your proficiency bonus (PB) in several places." + "I determine my companion's appearance; however, this does not affect its game statistics. Despite taking on physical form, my primal companion doesn't need to breathe, eat, or sleep. My companion and I can communicate with one another telepathically while we're both on the same plane." + "As an action, I can temporarily dismiss your primal companion or summon it within 30ft of me. In combat, my primal companion shares my initiative count, but it takes its turn immediately after mine. It can move and use its reaction on it won, but the only action it takes on its turn is the Dodge action, unless I use a bonus action on my turn to command it to take another action. That action can be one in its stat block or some other action. If I am incapacitated, my companion can take any action of its choice." + "I can spend one minute caring for my primal companion. When I do, the spirit regains 2d6 hit points. My primal companion regains all lost hit points at the end of a long rest. If my primal companion dies, the spirit manifests in a form of my choice the next time I finish a long rest.",
		},
		"subclassfeature3.1" : {
			name : "Shared Rage",
			source : ["GH", 41],
			minlevel : 3,
			description : "\n   " + "While I am raging, my primal companion has resistance to bludgeoning, piercing, and slashing damage.",
		},
		"subclassfeature6" : {
			name : "Kin to Beasts",
			source : ["GH", 41],
			minlevel : 6,
			description : "\n   " + "I can cast the animal friendship and speak with animals spells using Constituion as my spellcasting ability. Once I cast a spell I can't cast either spell until I finish a short or long rest.",
			spellcastingBonus : [{
					name : "animal friendship",
					spells : ["animal friendship"],
					selection : ["animal friendship"],
					usages : 1,
					recovery : "short rest",
			},{
					name : "speak with animals",
					spells : ["speak with animals"],
					selection : ["speak with animals"],
					usages : 1,
					recovery : "short rest",
						},
		],
		},
		"subclassfeature10" : {
			name : "Skinrider's Trance",
			source : ["GH", 41],
			minlevel : 10,
			description : "\n   " + "I can use an action and choose my primal companion or one beast currently under the effect of my animal friendship spell to enter a trance. For the duration of this trance, I possess the chosen creature." + "While possessing a creature, I sense the world through the target's senses, I have total control over its movements and actions, I use the beast's physical statistics and abilities instead of my own, and keep my mental attributes. This possession ends if you choose to exit the trance (no action required by me), the beast I'm possessing is reduced to 0 hit points, or the beast are on different planes of existence." + "While in this trance, I am blinded and deafened in regards to my own senses and cannot move or take actions. I can remain in the trance for a number of hours up to half my level in this class + my Constitution modifier. ONce I use this feature to enter the trance, I cannot do so again until you finish a long rest.",
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
			},
		"subclassfeature14" : {
			name : "Shape of the Wild",
			source : ["GH", 41],
			minlevel : 14,
			description : "\n   " + "I can use a bonus action on my turn to choose a new form for my primal companion, causing it to transfor instantaneously. When I cause my primal companion to transform in this way, its current hit points change to its new maximum hit points" + "Once I use this feature, I can't use it again until I finish a short or long rest.",
			action : ["bonus action", "Change Form"],
			usages : 1,
			recovery : "short rest"
			}
  }
});

//Bard Subclasses

AddSubClass("bard", "adventurers", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*adventurers).*$/i,
	subname : "College of Adventurers",
	source : ["GH", 42],
	features : {
		"subclassfeature3" : {
			name : "Talented Adventurer lvl 3",
			source : ["GH", 42],
			minlevel : 3,
			description : desc([
				"I gain an adventurer's talent of my choice.",
				"I gain an additional adventurer's talent of my choice at 6th level and again at 14th level.",
			]),
			choices : ["Barbarian", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
			"barbarian" : {
				name : "Barbarian",
				description : "\n   " + "I've learned to fight with primal ferocity. On my turn, I can enter a rampage as a bonus action. While rampaging and not wearing heavy armor, I have resistance to bludgeoning, piercing, and slashing damage. I can't concentrate on spells while rampaging. My rampage lasts for 1 minute but ends early if you are knocked unconscious. Once I have rampaged, I can't do so again until I finish a long rest.",
				dmgres : [["Bludgeoning", "Piercing", "Slashing"]],
				action : ["bonus action", "(Barbarian Rampage)"],
			},
			"cleric" : {
				name : "Cleric",
				description : "\n   " + "I've gained the ability to channel divine energy directly from the gods, emboldening my allies and sanctifying their attacks. As a bonus action, I choose a creature with 30ft. The chose creature gains temporary hit points equal to my Charisma modifier + half my level in this class for 10 mins. While a creature has temporary hit points granted by this spell, they can choose to lose these temporary hit points when they hit a creature with an attack, dealing additional radiat damage equal to the temporary hit points they lost. Once I use this talent, I must finish a short or long rest before I can use it again.",
				action : ["bonus action", " (Cleric Fortify)"]
			},
			"druid" : {
				name : "Druid",
				description : "\n   " + "I can cast the polymorph spell without expending a spell slot. If I cast the polymorph spell with this trait, I can only transform myself into a beast with a CR les than half your level in this class. Once I cast the spell with this trait, I must finish a long rest before I can do so again.",
				spellcastingBonus : {
					name : "polymorph",
					spells : ["polymorph"],
					selection : ["polymorph"],
					usages : 1,
					recovery : "long rest",
			},
			},
			"fighter" : {
				name : "Fighter",
				description : "\n   " + "I can proficiency with martial weapons and shields. I also can choose to learn one of the Fighting Styles available to the Fighter class",
				weaponProfs : [false, true],
				armorProfs : [false, false, false, true],
				choices : ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting"],
				"archery" : FightingStyles.archery,
				"defense" : FightingStyles.defense,
				"dueling" : FightingStyles.dueling,
				"great Weapon Fighting" : FightingStyles.great_weapon,
				"protection" : FightingStyles.protection,
				"two-weapon fighting" : FightingStyles.two_weapon,
			},
			"monk" : {
				name : "Monk",
				description : "\n   " + "While I am wearing no armor and not wielding a shield, my AC equals 10 + my Dexterity modifier + my Charisma modifier. In addition, I can use Dexterity instead of strength for the attack and damage rolls of my unarmed strikes and I can roll a d6 in place of the normal damage of my unarmed strike. When I use the Attack action and only make attacks with unarmed strikes on my turn, I can make one unarmed strike as a bonus action.",
				armorAdd : "Unarmored Defense (Cha)",
				action : ["bonus action", " (Unarmed Strike)"]
			},
			"paladin" : {
				name : "Paladin",
				description : "\n   " + "When I hit a creature with a melee weapon attack, I can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 1d6 for a 1st-level spell slot, plus 1d6 for each spell level higher than 1st, to a maximum of 5d6. The damage increases by 1d6 if the target is an Undead or a Fiend to a maximum of 6d6. I can do this a number of times equal to my proficiency bonus and I regain all uses of this feature at the end of a long rest.",
				usages : "PB",
				recovery : "long rest"
			},
			"ranger" : {
				name : "Ranger",
				description : "\n   " + "I've learned the hunter's mark spell, which counts as a bard spell for me but does not count against my bard spells known. I can cast this spell without expending a spell slot as if I had expended my highest level spell slot. Once I cast the spell using this talent, I can't do so again until I finish a long rest.",
				spellcastingBonus : {
					name : "hunter's mark",
					spells : ["hunter's mark"],
					selection : ["hunter's mark"],
					usages : 1,
					recovery : "long rest",
									},
						},
			"rogue" : {
				name : "Rogue",
				description : "\n   " + "I've adopted the quick thinking of clever heroes that outsmart their foes. I can take a bonus action on each of my turns in combat to take the Dash, Disengage, or Hide action.",
				action : ["bonus action", "Cunning Action"],
						},
			"sorcerer" : {
				name : "Sorcerer",
				description : "\n   " + "I have 2 sorcery points and learn one of the following Metamagic options available to the sorcerer class: Careful Spell, Distant Spell, Empowered Spell, Extedned Spell, Quickened Spell, or Subtle Spell. In addition, I can use an action and expend a spell slot to gain sorcery points equal to the level of the spell slot expended. When I finish a long rest, I reset to 2 sorcery points. When I gain a level in this class I can replace the Metamagic option I know, with another Metamagic from the list.",
				extraname : "Metamagic Option",
				extrachoices : ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell",  "Quickened Spell", "Subtle Spell"],
						},	
			"warlock" : {
				name : "Warlock",
				description : "\n   " + "I learn one eldritch invocation of my choice. If an invocation has a level requirement, I use half my level in this class to determine my eligibility. When I gan a level in this calss, I can choose one of the invocations that I know and replace it with another invocation that I could learn at that level.",
				extraname : "Eldritch Invocation",
				extrachoices : ["Agonizing Blast (prereq: Eldritch Blast cantrip)", "Armor of Shadows", "Ascendant Step (prereq: level 9 warlock)", "Beast Speech", "Beguiling Influence", "Bewitching Whispers (prereq: level 7 warlock)", "Book of Ancient Secrets (prereq: Pact of the Tome)", "Chains of Carceri (prereq: level 15 warlock, Pact of the Chain)", "Devil's Sight", "Dreadful Word (prereq: level 7 warlock)", "Eldritch Sight", "Eldritch Spear (prereq: Eldritch Blast cantrip)", "Eyes of the Rune Keeper", "Fiendish Vigor", "Gaze of Two Minds", "Lifedrinker (prereq: level 12 warlock, Pact of the Blade)", "Mask of Many Faces", "Master of Myriad Forms (prereq: level 15 warlock)", "Minions of Chaos (prereq: level 9 warlock)", "Mire the Mind (prereq: level 5 warlock)", "Misty Visions", "One with Shadows (prereq: level 5 warlock)", "Otherworldly Leap (prereq: level 9 warlock)", "Repelling Blast (prereq: Eldritch Blast cantrip)", "Sculptor of Flesh (prereq: level 7 warlock)", "Sign of Ill Omen (prereq: level 5 warlock)", "Thief of Five Fates", "Thirsting Blade (prereq: level 5 warlock, Pact of the Blade)", "Visions of Distant Realms (prereq: level 15 warlock)", "Voice of the Chain Master (prereq: Pact of the Chain)", "Whispers of the Grave (prereq: level 9 warlock)", "Witch Sight (prereq: level 15 warlock)"],
						},	
			"wizard" : {
				name : "Wizard",
				description : "\n   " + "I learn any two spells from the wizard spell list that are of a level I can cast. These count as bard spells for me, but do not count against my bard spells known. When I gain a level in this class, I can choose one of the wizard spells I know and replace it with another spell from the wizard spll list of a level I can cast.",
				spellcastingBonus : [{
					name : "wizard1",
					class : "wizard",
					spells : ["any"],
					selection : ["any"],
			},{
					name : "wizard2",
					class : "wizard",
					spells : ["any"],
					selection : ["any"],
		}],
						},						
		},
		"subclassfeature3.1" : {
			name : "Party Planner",
			source : ["GH", 42],
			minlevel : 3,
			description : desc([
				"While a creature has one of my Bardic Inspiration dice, it can use a bonus action on each of its turns to take the Help action.",
			])
		},
		"subclassfeature6" : {
			name : "Well-Rounded",
			source : ["GH", 42],
			minlevel : 6,
			description : desc([
				"I choose one skill, tool, and language. I gain proficiency in the chosen skill and with the chosen tool, and I can speak, read, and write the chosen language."
			]),
			languageProfs : [1],
			skills : [1],
			toolProfs : [[1]],
		},
		"subclassfeature6.1" : {
			name : "Talented Adventurer lvl 6",
			source : ["GH", 42],
			minlevel : 6,
			description : desc([
				"I gain an adventurer's talent of my choice.",
			]),
			choices : ["Barbarian", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
			"barbarian" : {
				name : "Barbarian",
				description : "\n   " + "I've learned to fight with primal ferocity. On my turn, I can enter a rampage as a bonus action. While rampaging and not wearing heavy armor, I have resistance to bludgeoning, piercing, and slashing damage. I can't concentrate on spells while rampaging. My rampage lasts for 1 minute but ends early if you are knocked unconscious. Once I have rampaged, I can't do so again until I finish a long rest.",
				dmgres : [["Bludgeoning", "Piercing", "Slashing"]],
				action : ["bonus action", "(Barbarian Rampage)"],
			},
			"cleric" : {
				name : "Cleric",
				description : "\n   " + "I've gained the ability to channel divine energy directly from the gods, emboldening my allies and sanctifying their attacks. As a bonus action, I choose a creature with 30ft. The chose creature gains temporary hit points equal to my Charisma modifier + half my level in this class for 10 mins. While a creature has temporary hit points granted by this spell, they can choose to lose these temporary hit points when they hit a creature with an attack, dealing additional radiat damage equal to the temporary hit points they lost. Once I use this talent, I must finish a short or long rest before I can use it again.",
				action : ["bonus action", " (Cleric Fortify)"]
			},
			"druid" : {
				name : "Druid",
				description : "\n   " + "I can cast the polymorph spell without expending a spell slot. If I cast the polymorph spell with this trait, I can only transform myself into a beast with a CR les than half your level in this class. Once I cast the spell with this trait, I must finish a long rest before I can do so again.",
				spellcastingBonus : {
					name : "polymorph",
					spells : ["polymorph"],
					selection : ["polymorph"],
					usages : 1,
					recovery : "long rest",
			},
			},
			"fighter" : {
				name : "Fighter",
				description : "\n   " + "I can proficiency with martial weapons and shields. I also can choose to learn one of the Fighting Styles available to the Fighter class",
				weaponProfs : [false, true],
				armorProfs : [false, false, false, true],
				choices : ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting"],
				"archery" : FightingStyles.archery,
				"defense" : FightingStyles.defense,
				"dueling" : FightingStyles.dueling,
				"great Weapon Fighting" : FightingStyles.great_weapon,
				"protection" : FightingStyles.protection,
				"two-weapon fighting" : FightingStyles.two_weapon,
			},
			"monk" : {
				name : "Monk",
				description : "\n   " + "While I am wearing no armor and not wielding a shield, my AC equals 10 + my Dexterity modifier + my Charisma modifier. In addition, I can use Dexterity instead of strength for the attack and damage rolls of my unarmed strikes and I can roll a d6 in place of the normal damage of my unarmed strike. When I use the Attack action and only make attacks with unarmed strikes on my turn, I can make one unarmed strike as a bonus action.",
				armorAdd : "Unarmored Defense (Cha)",
				action : ["bonus action", " (Unarmed Strike)"]
			},
			"paladin" : {
				name : "Paladin",
				description : "\n   " + "When I hit a creature with a melee weapon attack, I can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 1d6 for a 1st-level spell slot, plus 1d6 for each spell level higher than 1st, to a maximum of 5d6. The damage increases by 1d6 if the target is an Undead or a Fiend to a maximum of 6d6. I can do this a number of times equal to my proficiency bonus and I regain all uses of this feature at the end of a long rest.",
				usages : "PB",
				recovery : "long rest"
			},
			"ranger" : {
				name : "Ranger",
				description : "\n   " + "I've learned the hunter's mark spell, which counts as a bard spell for me but does not count against my bard spells known. I can cast this spell without expending a spell slot as if I had expended my highest level spell slot. Once I cast the spell using this talent, I can't do so again until I finish a long rest.",
				spellcastingBonus : {
					name : "hunter's mark",
					spells : ["hunter's mark"],
					selection : ["hunter's mark"],
					usages : 1,
					recovery : "long rest",
									},
						},
			"rogue" : {
				name : "Rogue",
				description : "\n   " + "I've adopted the quick thinking of clever heroes that outsmart their foes. I can take a bonus action on each of my turns in combat to take the Dash, Disengage, or Hide action.",
				action : ["bonus action", "Cunning Action"],
						},
			"sorcerer" : {
				name : "Sorcerer",
				description : "\n   " + "I have 2 sorcery points and learn one of the following Metamagic options available to the sorcerer class: Careful Spell, Distant Spell, Empowered Spell, Extedned Spell, Quickened Spell, or Subtle Spell. In addition, I can use an action and expend a spell slot to gain sorcery points equal to the level of the spell slot expended. When I finish a long rest, I reset to 2 sorcery points. When I gain a level in this class I can replace the Metamagic option I know, with another Metamagic from the list.",
				extraname : "Metamagic Option",
				extrachoices : ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell",  "Quickened Spell", "Subtle Spell"],
						},	
			"warlock" : {
				name : "Warlock",
				description : "\n   " + "I learn one eldritch invocation of my choice. If an invocation has a level requirement, I use half my level in this class to determine my eligibility. When I gan a level in this calss, I can choose one of the invocations that I know and replace it with another invocation that I could learn at that level.",
				extraname : "Eldritch Invocation",
				extrachoices : ["Agonizing Blast (prereq: Eldritch Blast cantrip)", "Armor of Shadows", "Ascendant Step (prereq: level 9 warlock)", "Beast Speech", "Beguiling Influence", "Bewitching Whispers (prereq: level 7 warlock)", "Book of Ancient Secrets (prereq: Pact of the Tome)", "Chains of Carceri (prereq: level 15 warlock, Pact of the Chain)", "Devil's Sight", "Dreadful Word (prereq: level 7 warlock)", "Eldritch Sight", "Eldritch Spear (prereq: Eldritch Blast cantrip)", "Eyes of the Rune Keeper", "Fiendish Vigor", "Gaze of Two Minds", "Lifedrinker (prereq: level 12 warlock, Pact of the Blade)", "Mask of Many Faces", "Master of Myriad Forms (prereq: level 15 warlock)", "Minions of Chaos (prereq: level 9 warlock)", "Mire the Mind (prereq: level 5 warlock)", "Misty Visions", "One with Shadows (prereq: level 5 warlock)", "Otherworldly Leap (prereq: level 9 warlock)", "Repelling Blast (prereq: Eldritch Blast cantrip)", "Sculptor of Flesh (prereq: level 7 warlock)", "Sign of Ill Omen (prereq: level 5 warlock)", "Thief of Five Fates", "Thirsting Blade (prereq: level 5 warlock, Pact of the Blade)", "Visions of Distant Realms (prereq: level 15 warlock)", "Voice of the Chain Master (prereq: Pact of the Chain)", "Whispers of the Grave (prereq: level 9 warlock)", "Witch Sight (prereq: level 15 warlock)"],
						},	
			"wizard" : {
				name : "Wizard",
				description : "\n   " + "I learn any two spells from the wizard spell list that are of a level I can cast. These count as bard spells for me, but do not count against my bard spells known. When I gain a level in this class, I can choose one of the wizard spells I know and replace it with another spell from the wizard spll list of a level I can cast.",
				spellcastingBonus : [{
					name : "wizard1",
					class : "wizard",
					spells : ["any"],
					selection : ["any"],
			},{
					name : "wizard2",
					class : "wizard",
					spells : ["any"],
					selection : ["any"],
		}],
						},						
		},
		"subclassfeature14.1" : {
			name : "Talented Adventurer lvl 14",
			source : ["GH", 42],
			minlevel : 14,
			description : desc([
				"I gain an adventurer's talen of my choice.",
			]),
			choices : ["Barbarian", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
			"barbarian" : {
				name : "Barbarian",
				description : "\n   " + "I've learned to fight with primal ferocity. On my turn, I can enter a rampage as a bonus action. While rampaging and not wearing heavy armor, I have resistance to bludgeoning, piercing, and slashing damage. I can't concentrate on spells while rampaging. My rampage lasts for 1 minute but ends early if you are knocked unconscious. Once I have rampaged, I can't do so again until I finish a long rest.",
				dmgres : [["Bludgeoning", "Piercing", "Slashing"]],
				action : ["bonus action", "(Barbarian Rampage)"],
			},
			"cleric" : {
				name : "Cleric",
				description : "\n   " + "I've gained the ability to channel divine energy directly from the gods, emboldening my allies and sanctifying their attacks. As a bonus action, I choose a creature with 30ft. The chose creature gains temporary hit points equal to my Charisma modifier + half my level in this class for 10 mins. While a creature has temporary hit points granted by this spell, they can choose to lose these temporary hit points when they hit a creature with an attack, dealing additional radiat damage equal to the temporary hit points they lost. Once I use this talent, I must finish a short or long rest before I can use it again.",
				action : ["bonus action", " (Cleric Fortify)"]
			},
			"druid" : {
				name : "Druid",
				description : "\n   " + "I can cast the polymorph spell without expending a spell slot. If I cast the polymorph spell with this trait, I can only transform myself into a beast with a CR les than half your level in this class. Once I cast the spell with this trait, I must finish a long rest before I can do so again.",
				spellcastingBonus : {
					name : "polymorph",
					spells : ["polymorph"],
					selection : ["polymorph"],
					usages : 1,
					recovery : "long rest",
					firstCol : 1
			},
			},
			"fighter" : {
				name : "Fighter",
				description : "\n   " + "I can proficiency with martial weapons and shields. I also can choose to learn one of the Fighting Styles available to the Fighter class",
				weaponProfs : [false, true],
				armorProfs : [true, false, false, true],
				choices : ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting"],
				"archery" : FightingStyles.archery,
				"defense" : FightingStyles.defense,
				"dueling" : FightingStyles.dueling,
				"great Weapon Fighting" : FightingStyles.great_weapon,
				"protection" : FightingStyles.protection,
				"two-weapon fighting" : FightingStyles.two_weapon,
			},
			"monk" : {
				name : "Monk",
				description : "\n   " + "While I am wearing no armor and not wielding a shield, my AC equals 10 + my Dexterity modifier + my Charisma modifier. In addition, I can use Dexterity instead of strength for the attack and damage rolls of my unarmed strikes and I can roll a d6 in place of the normal damage of my unarmed strike. When I use the Attack action and only make attacks with unarmed strikes on my turn, I can make one unarmed strike as a bonus action.",
				action : ["bonus action", " (Unarmed Strike)"]
			},
			"paladin" : {
				name : "Paladin",
				description : "\n   " + "When I hit a creature with a melee weapon attack, I can exped one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 1d6 for a 1st-level spell slot, plus 1d6 fear each spell level hight than 1st, to a maximum of 5d6. The damage increases by 1d6 if the target is an undead or a fiend to a maximum of 6d6. I can do this a number of times equal to my proficiency bonus and I regain all uses of this feature at the end of a long rest.",
				usages : "PB",
				recovery : "long rest"
			},
			"ranger" : {
				name : "Ranger",
				description : "\n   " + "I've learned the hunter's mark spell, which counts as a bard spell for me but does not count against my bard spells known. I can cast this spell without expending a spell slot as if I had expended my highest level spell slot. Once I cast the spell using this talent, I can't do so again until I finish a long rest.",
				spellcastingBonus : {
					name : "hunter's mark",
					spells : ["hunter's mark"],
					selection : ["hunter's mark"],
					usages : 1,
					recovery : "long rest",
					firstCol : 1
									},
						},
			"rogue" : {
				name : "Rogue",
				description : "\n   " + "I've adopted the quick thinking of clever heroes that outsmart their foes. I can take a bonus action on each of my turns in combat to take the Dash, Disengage, or Hide action.",
				action : ["bonus action", "(Dash)"],
				action1 : ["bonus action", "(Disengage)"],
				action2 : ["bonus action", "(Hide)"],
						},
			"sorcerer" : {
				name : "Sorcerer",
				description : "\n   " + "I have 2 sorcery points and learn one of the following Metamagic options available to the sorcerer class: Careful Spell, Distant Spell, Empowered Spell, Extedned Spell, Quickened Spell, or Subtle Spell. In addition, I can use an action and expend a spell slot to gain sorcery points equal to the level of the spell slot expended. When I finish a long rest, I reset to 2 sorcery points. When I gain a level in this class I can replace the Metamagic option I know, with another Metamagic from the list.",
						},	
			"warlock" : {
				name : "Warlock",
				description : "\n   " + "I learn one eldritch invocation of my choice. If an invocation has a level requirement, I use half my level in this class to determine my eligibility. When I gan a level in this calss, I can choose one of the invocations that I know and replace it with another invocation that I could learn at that level.",
						},	
			"wizard" : {
				name : "Wizard",
				description : "\n   " + "I learn any two spells from the wizard spell list that are of a level I can cast. These count as bard spells for me, but do not count against my bard spells known. When I gain a level in this class, I can choose one of the wizard spells I know and replace it with another spell from the wizard spll list of a level I can cast.",
				spellcastingBonus : [{
					name : "wizard",
					class : "wizard",
					spells : ["any"],
					selection : ["any"],
			},{
					name : "wizard",
					class : "wizard",
					spells : ["any"],
					selection : ["any"],
		}],
						},						
		},
	}
});
AddSubClass("bard", "requiems", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*requiems).*$/i,
	subname : "College of Requiems",
	source : ["GH", 44],
	features : {
		"subclassfeature3" : {
			name : "Chilling Melody",
			source : ["GH", 44],
			minlevel : 3,
			description : desc([
				"I learn two necromancy cantrips of my choice from any class spell list. These counts as bard spells fro me, but don't count against the number of cantrips I know."
			]),
			spellcastingBonus : [{
				name : "Chilling Melody",
				class : "any",
				school : ["Necro"],
				level : [0],
				atwill : true, 
						},
			{
				name : "Chilling Melody",
				class : "any",
				school : ["Necro"],
				level : [0],
				atwill : true, 
						}],			
		},
		"subclassfeature3.1" : {
			name : "Pluck the Heartstrings",
			source : ["GH", 44],
			minlevel : 3,
			description : desc([
				"I gain the ability to use my Bardic Inspiration to pluck at the tethers of life within a creature. A creature with one of my Bardic Inspiration dice can expend it when dealing damage with a weapon attack, dealing additional necrotic damage equal to the die result",
				"Additionally, when a living creature that has my Bardic Inspiration die is reduced to 0 hit points, it can expend that die as a reaction to be reduced to 1 hit point instead."
			])
		},
		"subclassfeature6" : {
			name : "Stir the Bones",
			source : ["GH", 44],
			minlevel : 6,
			description : desc([
				"I learn the Animate Dead spell. It counts as a bard spell for me, and it doesn't count against the number of Bard spells I know.",
				"When I give a creature one of my Bardic Inspiration dice, I choose a number of undead creatures equal to my proficiency bonus under my control and within 60ft of me. Chosen creatures each gain a Dirge die, which they lose if they do not spend within the next 10m minutes. Dirge dice can be spent the same way and uner the same circumstances my Bardic Inspiration are. I can also issue mental commands to undead creatures under my control as a bonus action.",
				"When an undead creature I control expends a Dirge die on an attack roll that hits, it can also apply the result to the damage roll."
			]),
			spellcastingBonus : [{
				name : "Stir The Bones",
				spells : ["animate dead"],
				selection : ["animate dead"],
			}],
			action : ["bonus action", "(Control Undead)"],
		},
		"subclassfeature14" : {
			name : "Dance of the Dead",
			source : ["GH", 44],
			minlevel : 14,
			recovery : "short rest",
			usages : 1,
			description : desc([
				"When I cast a necromancy spell that targets only one creature, I can have it target a second creature within range. This does not consume additional components.",
				"Once I use this feature, I must finish a short or long rest before I can use it again."
			])
		}
	}
});

//Cleric Subclasses

AddSubClass("cleric", "eldritch", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(eldritch)).*$/i,
	subname : "Eldritch Domain",
	source : ["GH", 45],
	spellcastingExtra : ["hideous laughter", "sleep", "detect thoughts", "see invisbility", "fear", "tongues", "confusion", "phantasmal killer", "contact other plane", "dream"],
	features : {
		"subclassfeature1" : {
			name : "Unpredictable Inspiration",
			source : ["GH", 46],
			minlevel : 1,
			description : "\n   " + "I choose any cantrip. The chosen cantrip counts as a cleric spell for me but does not count against the number of cleric cantrips I know. Each time I finish a long rest I can replace the chosen cantrip with another cantrip of my choice.",
		spellcastingBonus : {
			name : "Unpredictable Inspiration",
			class : "any",
			level : [0, 0],
			atwill : true, 
	},
	toNotesPage : [{
	name : "Eldritch Effects Table",
	note : "\n   Various effects of the Eldritch Contagion.",
	note : [
		"d8  Effect",
		"01 The creature cannot speak or cast spells that have verbal components.",
		"02 The creature takes 1d8 psychic damage at the start of each of its turns.",
		"03 The creature is disoriented. It immediately falls prone and falls prone again at the end of each turn it moves 5 feet or more.",
		"04 The creature is distracted by visions and voices and has disadvantage on attack rolls and Wisdom (Perception) ability checks.",
		"05 The creature is unsure of itself. It can move or take an action on its turn but not both and it cannot use reactions.",
		"06 The creature is reckless. It has advantage on attack rolls and attack rolls against it have advantage.",
		"07 The creature is deafened and cannot see objects or creatures further than 30 feet away.",
		"08 The creature is frightened of you.",
	],
	page3notes : true,
	popupName : "Eldritch Domain Eldritch Effects Table",
	source : ["GH", 43],
}],
		},
		"subclassfeature1.1" : {
			name : "Eldritch Contagion",
			source : ["GH", 46],
			minlevel : 1,
			action : ["bonus action", "Eldritch Contagion"],
			description : desc([
				"When I cast a spell with a spell slot of 1st level or higher that targets one or more creatures, I can use a bonus action on the same turn to force one of the spell's targets to make a Wisdom saving throw. On a failure, roll on the Eldritch Effects table and the creature suffers that effect for 1 minute. At the end of each of its turns, the creature can make another Wisdom saving throw ending the effect on a success. This effect ends early if I use this feature again."
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Prophecy of Doom",
			source : ["GH", 46],
			minlevel : 2,
			action : ["action", "Channel Divinity: Prophecy of Doom"],
			description : desc([
				"As an action, I choose a point within 120ft of myself that I can see and roll on the Eldritch Effect table. Each creature within a 15ft radius sphere centered on the chosen point must succeed on a Wisdom saving throw or suffer the temporary effect for 1 minute. At the end of each of its turns, an affected creature can make another Wisdom saving throw, ending the temporary effect on a success. "
			])
		},
		"subclassfeature6" : {
			name : "Otherworldy Calm",
			source : ["GH", 46],
			minlevel : 6,
			description : desc([
				"I gain resistance to psychic damage and advantage on saving throws against being charmed or frightened.",
				"Additionally, any creature that attempts to read my thoughts finds them incomprehensible. The attempt automatically fails and the must succeed on a Wisdom saving throw against my cleric spell save C or take psychic damage equal to my cleric level."
			]),
			dmgres : ["Psychic"],
			savetxt : { adv_vs : ["charmed", "frightened"]},
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["GH", 46],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += What('Wis Mod');
						}
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						if (spellKey == "shillelagh") {
							spellObj.description = spellObj.description.replace("1d8", "1d8+" + What("Wis Mod"));
							return true;
						}
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis", true);
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Sing the Song That Ends the World",
			source : ["GH", 46],
			minlevel : 17,
			description : desc([
				"Creatures who fail a saving throw against my Prophecy of Doom feature take 10d10 psychic damage. Once a creature has taken amage in this way, it can't take damage from this feature again for 10 minutes.",
			]),
		}
	}
});
AddSubClass("cleric", "inquisition", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(inquisition)).*$/i,
	subname : "Inquisition Domain",
	source : ["GH", 47],
	spellcastingExtra : ["detect magic", "identify", "see invisiblity", "silence", "dispel magic", "remove curse", "arcane eye", "locate creature", "creation", "hallow"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiencies",
			source : ["GH", 47],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor.",
			weaponProfs : [false, true],
			armorProfs : [true, false, true, false],
		},
		"subclassfeature1.1" : {
			name : "Witch Hunter's Strike",
			source : ["GH", 47],
			minlevel : 1,
			description : desc([
				"When I hit a creature with a weapon attack, I can deal an additional 1d8 force damage. If the creature is concentrating on a spell, you deal an additional 2d8 force damage instead. If a creature fails its saving throw to maintain concentration as a result of taking damage from this feature, I can a number of temporary hit points equal to the extra force damage dealt by this attack. I can use this feature a number of times equal to my Wisdom modifier (a minimum of once), reagaining all uses upon completion of a long rest.",
				"At 14th level, this damage increases to 2d8 and 3d8 if the creature is concentrating on a spell."
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Spell Shield",
			source : ["GH", 47],
			minlevel : 2,
			action : ["bonus action", "Channel Divinity: Spell Shield"],
			description : desc([
				"As a bonus action, I present my holy symbol and choose a creature I can see (including myself) within 30ft. The creature gains temporary hit points equal to 1d10 + my cleric level. While a creature has temporary hit points granted by my spell shield, it has resistance to damage from spells and advantage on saving throws against spells. The creature loses an remaining temporary hit points after 1 hour. "
			])
		},
		"subclassfeature6" : {
			name : "Rebuke Invoker",
			source : ["GH", 47],
			minlevel : 6,
			action : ["reaction", "Rebuke Invoker"],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description : desc([
				"As a reaction when a creature I can see within 60ft of me casts a spell, I can force the creature to make a Constitution saving throw. On a failure, the creature takes force damage equal to 1d8 per level of spell slot expended casting the spell + my Wisdom modifier. Cantrips are considered first-level spells for this ability. On a successful save the creature takes half damage instead.",
				"I can use this feature a number of times equal to my Wisdom modifier (a minimum of once), regaining all uses upon completion of a long rest.",
			]),
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["GH", 47],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 force damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 force damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra force damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Supernal Safeguard",
			source : ["GH", 47],
			minlevel : 17,
			description : desc([
				"When I use my Spell Shield feature, I can choose a number of creatures up to my Wisdom modifier (minimum 2) instead of only choosing one.",
			]),
		}
	}
});

//Druid Subclasses

AddSubClass("druid", "circle of blood", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*blood).*$/i,
	subname : "Circle of Blood",
	source : ["GH", 48],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : ["GH", 48],
			minlevel : 2,
			description : desc([
				"At 3rd, 5th, 7th, and 9th level I can access to the spells listed for that level in the Circle of Blod Spells table.",
				"Once I gain access to one of these spells, I always have it prepared, and it doesn't count against the number of spells I can prepare each day. If I gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for me."
			]),
			spellcastingExtra : ["hold person", "sense lifeblood", "blood bound", "sanguine poppet", "circle of scarlet", "dark sacrament", "dominate person", "mortality"]
		},
		"subclassfeature2.1" : {
			name : "Blood Boon",
			source : ["GH", 48],
			minlevel : 2,
			action : ["reaction", "Blood Boon"],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description : desc([
				"When a creature I can see within 60ft of me dies, I can use my reaction to claim the last vestiges of its vitality. I regain one previously spen Hit Dice. When I do, I can grant a creature I can see within 60ft of me a number of temporary hit points equal to my druid level.",
				"I can use this feature a number of times equal to my Wisdom modifier, regaining all expended uses at the end of a long rest."
			]),
		},
		"subclassfeature6" : {
			name : "Rite of the Blood Moon",
			source : ["GH", 48],
			minlevel : 6,
			action : ["action", "(Blood Frenzy)"],
			description : desc([
				"As an action I can expend a use of my Wild Shape class feature to drive myself or a willing creature within 5ft of me into a blood frenzy which lasts for 1 minute. The affected creature gains the benefits listed in the table below.",
				"Only one creature can be affected by my Blood Rite. IF I use the Rite of the Blood Moon on another creature, the effects of the Rite end for any other creature."
								]),
			toNotesPage : [{
				name : "Rite of the Blood Moon Effects",
				note : "\n   Various effects of the Rite of the Blood Moon.",
				note : [
						"Effects",
						"It gains resistance to bludgeoning, piercing, and slashing damage against weapons which are not magical.",
						"It gains darkvision to a range of 60 feet and advantage on Wisdom (Perception) checks.",
						"It can roll a d8 in place of the normal damage of its unarmed strike. When it takes the Attack action on its turn, it can make one attack with its unarmed strike as a bonus action.",
						"Its speed increases by 10 feet.",
						"It can’t speak or cast spells.",
						],
				page3notes : true,
				source : ["GH", 48],
							}],
							},
		"subclassfeature10" : {
			name : "Blood Lust",
			source : ["GH", 48],
			minlevel : 10,
			description : desc([
				"Those under the effect of my Blood Rite can sacrifice a piece of their own vitality to enhance their capacity for destruction. Once on each of its turns when a creature uner the effects of my Rite of the Blood Moon feature makes a damage roll, it can expend a hit die and add the result to the damage roll."
			]),
		},
		"subclassfeature14" : {
			name : "Create Blood Elemental",
			source : ["GH", 48],
			minlevel : 14,
			action : ["reaction", ""],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"When a creature I can see within 60ft of me dies, I can use my reaction to fully exsanguinate its corpse, conjuring a water elemental composed of its blood and bound to my service.",
				"Roll initiative for the elemental, which has its own turns. It obeys my verbal commands. The elemental remains in my service for 1 hour or until it is reduced to 0 hit points,, at which point it collapes into a pool of blood.",
				"Once I conjure an elemental with ths feature, I can't use the feature again until I finish a long rest."
			]),
		}
	}
});
AddSubClass("druid", "circle of mutation", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*mutation).*$/i,
	subname : "Circle of Mutation",
	source : ["GH", 49],
	features : {
		"subclassfeature2" : {
			name : "Mutate Shape",
			source : ["GH", 49],
			minlevel : 2,
			action : ["bonus action", "(Wild Shape (Start))"],
			description : desc([
				"I can use a bonus action to use my Wild Shape.",
				"In addition, While I am transformed by Wild Shape, I can use a bonus action to expend a spell slot and gain a number of mutation points equal to the level of the spell slot expended. These mutation points last until they are spent or my use of Wild Shape ends. While I am in my beast shape I can expend one or more mutation points (no action required by me) to select a mutation from the list below. When I do so, my physical body contorts and changes in a gruesome display. Chosen mutations last for the duration of my Wild Shape"
			]),
			extraname : "Mutate Shape",
				extrachoices : ["Creature of the Sea", "Creature of the Sky", "Darkvision", "Echolocation", "Enchanted Attacks", "Enlarge", "Multiattack", "Natural Armor", "Reduce", "Unnatural Voice", "Venomous Attacks"],
				"creature of the sea" : {
				name : "Creature of the Sea",
				description : "\n   " + "For 1 mutation point, I can breathe air and water and gain a swim speed of 30ft. For an additional 1 mutation point, your swim speed increases to 60ft.",
				speed : {
				swim : { spd : 30, enc : 30 }
				},
			},
				"creature of the sky" : {
				name : "Creature of the Sky",
				description : "\n   " + "For 3 mutation points, I gain a fly speed of 30ft. For an additional 2 mutation points, my fly speed increases to 60ft.",
				speed : {
				fly : { spd : 30, enc : 20 }
				},
			},
				"darkvision" : {
				name : "Darkvision",
				description : "\n   " + "For 1 mutation point, I gain dark vision out to a distance of 60ft.",
				vision : [["Darkvision", 60]],
			},
				"echolocation" : {
				name : "Echolocation",
				description : "\n   " + "For 4 mutation points, I have blindsight out to a distance of 30ft while I am not deafened.",
				vision : [["Blindsight", 30]],
			},
				"enchanted attacks" : {
				name : "Enchanted Attacks",
				description : "\n   " + "For 1 mutation point my attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
			},
				"enlarge" : {
				name : "Enlarge",
				description : "\n   " + "For 1 mutation point, my size increases by one step (from Medium to Large, for example). I can spend an additional 2 mutation points to increase my size by two steps instead (from Medium to Huge, for example).",
			},
				"multiattack" : {
				name : "Multiattack",
				description : "\n   " + "For a number of mutation points equal to 2 + 2x my beast form's CR, whenever I use my action to make a natural weapon attack I can make two natural weapon attacks instead.",
						},
				"natural armor" : {
				name : "Natural Armor",
				description : "\n   " + "For 1, 2, or 3 mutation points I can increase my AC by an equal amount.",
						},
				"reduce" : {
				name : "Reduce",
				description : "\n   " + "For 1 mutation point, my size  decreases by one step (from Medium to Small, for example). I can spend an additional 2 mutation points to increase my size by two steps instead (from Medium to Tiny, for example).",
						},	
				"unnatural voice" : {
				name : "Unnatural Voice",
				description : "\n   " + "For 1 mutation point, I can speak as normal, even if my beast shape lacks the anatomy for such vocalizations. This does not allow for spellcasting while in Wild Shape form.",
						},	
				"venomous attacks" : {
				name : "Venomous Attacks",
				description : "\n   " + "For 2 mutation points, attacks I make with my natural weapons deal an additional 1d4 poison damage.",
						},						
		},
		"subclassfeature2.1" : {
			name : "Circle Forms",
			source : ["GH", 50],
			minlevel : 2,
			description : desc([
				"Starting when I gain this feature, I can use my Wild Shape to transform into a beast with a challenge rating of 1 or lower. I ignore the Max CR column of the Beast Shapes table, but must abide by the other limitations there.",
				"Stating at 6th level, I can transform into a beast with a challenge rating equal to or less than my druid level divided by 3, rounded down.",
			]),
		},
		"subclassfeature6" : {
			name : "Unnatural and Unnerving",
			source : ["GH", 50],
			minlevel : 6,
			skills : ["Intimidation"],
			description : desc([
				"I gain proficiency with the Intimidation skill if I don't already have it. If I do already have proficiency in Intimidation, I gain proficiency in one skill of my choice from the following: Athletics, Acrobatics, Perception, Stealth, or Survival.",
				"In addition, I gain advantage on Charisma (Intimidation) ability checks I make while I am in my beast shape and have at least one mutation.",
			])
		},
		"subclassfeature10" : {
			name : "Endless Evolution",
			source : ["GH", 50],
			minlevel : 10,
			action : ["action", "(Mutate Beast)"],
			description : desc([
				"When I enter my Wild Shape I gain a number of mutation points equal to my Wisdom modifier (minimum 1). Unspent mutation points are lost when I leave my beast shape.",
				"In addition, I can use an action to touch a beast and expend a spell slot, causeing it to mutate to my liking. I can a number of mutation points equal to the level of the spell slot or the CR of the beast, whichever is lower. As part of the same action, I must spend all mutation points on mutations which manifest in the beast. Unspent mutation points are lost. Mutations remain indefinitely until the same beast is targeted by a different use of this feature or the dispel magic spell, remove curse spell, or similar magic",
			]),
		},
		"subclassfeature14" : {
			name : "Apex Predator Aura",
			source : ["GH", 50],
			minlevel : 14,
			action : ["action", ""],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"Beasts that begin their turn within 30ft of me must make a Wisdom saving throw with a DC equal to my druid spell save. On a failure, the creature is frightened for 10 minutes. On a success, the creature is immune to this effect for the next 24 hours. An affected creature can use its action on each subsequent turn to steel themselves and repeat the saving throw, ending and becoming immune to this fear effect for the next 24 hours on a success.",
				"I can use an action to cause this aura to affect chosen creatures within 30ft, instead of only beasts, until the start of my next turn. Once I use this special action, I can't use it again until I finish a long rest.",
				]),
		}
	}
});

//Fighter Subclasses

AddSubClass("fighter", "bulwark warrior", {
	regExpSearch : /^(?=.*warrior)(?=.*bulwark).*$/i,
	subname : "Bulwark Warrior",
	source : ["GH", 51],
	fullname : "Bulwark Warrior",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Protective Taunt",
			source : ["GH", 51],
			minlevel : 3,
			description : desc([
				"Once per turn whenever I make a melee attack against a creature, I can taunt them into attacking you. When a creature I've hit since the start of your last turn attacks someone other than me, I can use my reaction to force them to attack me instead. This effect ends early if they move more than 5ft out of my reach, I become incapacitated, or I die.",
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Weather the Storm",
			source : ["GH", 51],
			minlevel : 3,
			description : desc([
				"As a bonus action, for the next minute at the end of each of my turns, I can gain temporary hit points equal to my fighter level. ONce I use this feature, I can't use it again until I finish a short or long rest."
			]),
			usages : 1,
			action : ["bonus action", ""],
			recovery : "short rest",
		},
		"subclassfeature7" : {
			name : "Living Shield",
			source : ["GH", 51],
			action : ["action", ""],
			minlevel : 7,
			description : "\n   " + "As an action, all creatures of my choice within 30ft that can hear me must make a Wisdom saving throw with a DC equal to 8 + my Constitution modifier + my proficiency bonus. Each creature that fails the save has disadvantage on all attack rolls that do not target me until the beginning of my next turn. Additionally, I can gain a number of hit points equat to my Constitution modifier for each failed saving throw. I can use this feature twice, regaining all spent uses at the end of a long rest. I gain an additional use of this ability at 15th level.",
		},
		"subclassfeature10" : {
			name : "Aggressive Defence",
			source : ["GH", 51],
			minlevel : 10,
			description : desc([
				"Once per turn when I have temporary hit points and hit a creature with a melee weapon attack, I can expend up to half my fighter level in temporary hit points to deal that much additional damage to my target."
			]),
		},
		"subclassfeature15" : {
			name : "Improved Second Wind",
			source : ["GH", 51],
			minlevel : 15,
			description : "\n   " + "When I gain health from my Second Wind feature, I can also gain temporary hit points equal to the amount healed."
		},
		"subclassfeature18" : {
			name : "Halt the Assault",
			source : ["GH", 51],
			minlevel : 18,
			description : "\n   " + "When a creature within 5ft of me takes damage, I can use my reaction to use my temporary hit points to reduce the damage taken by the amount of temporary hit points forfeited.",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("fighter", "living crucible", {
	regExpSearch : /^(?=.*crucible).*$/i,
	subname : "Living Crucible",
	source : ["GH", 52],
	fullname : "Living Crucible",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Compound Creator",
			source : ["GH", 52],
			minlevel : 3,
			description : desc([
				"Creating Compounds: I learn three compounds of my choice which are detailed under Compounds below. You can create any number of these compounds you know by using alchemist's supplies and spending 10 minutes to create them. These compounds remain potent until the end of my next long rest, after which time they become inert and have no effect",
				"I learn two additional compounds of my choice at 7th, 10th, and 15th level. Each time I learn new compounds, I can also replace one compound I know with another one.",
				"Consuming Compounds: As a bonus action I can consume a single compound using this feature. I can consume a number of compounds up to 1 + my Constitution modifier (minimum of 1). Each compound I consume after that causes me to gain a level of exhaustion. When I finish a long rest, I regain the ability to safely consume compouns. I can benefit from multiple compounds at the same time, but taking the same compound more than once provides no additional effects.",
				"The benefits associated with each compound apply only to me. Any other creature that consumes one of my compounds must succeed on a Constitution saving throw (DC= 8 + my proficiency bonus + my Intelligence modifier) or become poisoned.",
			]),
			extraname : "Compound Creator",
				extrachoices : ["Adrenal Injection", "Allsense Injection", "Arcane Eye Oil", "Draught of Bull's Strength", "Draught of Cat's Grace", "Draught of Bear's Endurance", "Draught of Fox's Cunning", "Draught of Owl's Wisdom", "Draught of Eagle's Splendor", "Elfsight Oil", "Fleshknit Phosphate", "Ironmind Injection", "Liquid Courage", "Liquid Rage", "Presto Powder", "Spellshine Ointment", "Steelskin Ointment", "Tenmen Tincture"],
				"adrenal injection" : {
				name : "Adrenal Injection",
				description : "\n   " + "For the next minute, your movement speed is increased by 10 feet and your jumping distances are tripled.",
				},
				"allsense injection" : {
				name : "Allsense Injection",
				description : "\n   " + "For the next minute, you have blindsight out to a distance of 30 feet.",
				},
				"arcane eye oil" : {
				name : "Arcane Eye Oil",
				description : "\n   " + "For the next hour, you can sense magic as if you were under the effects of the detect magic spell.",
				},
				"draught of bull's strength" : {
				name : "Draught of Bull's Strength",
				description : "\n   " + "For the next 10 minutes, you have advantage on Strength ability checks and saving throws.",
				},
				"draught of cat's grace" : {
				name : "Draught of Cat's Grace",
				description : "\n   " + "For the next 10 minutes, you have advantage on Dexterity ability checks and saving throws.",
				},
				"draught of bear's endurance" : {
				name : "Draught of Bear's Endurance",
				description : "\n   " + "For the next 10 minutes, you have advantage on Constitution ability checks and saving throws.",
				},
				"draught of fox's cunning" : {
				name : "Draught of Fox's Cunning",
				description : "\n   " + "For the next 10 minutes, you have advantage on Intelligence ability checks and saving throws.",
				},
				"draught of owl's wisdom" : {
				name : "Draught of Owl's Wisdom",
				description : "\n   " + "For the next 10 minutes, you have advantage on Wisdom ability checks and saving throws.",
				},
				"draught of eagle's splendor" : {
				name : "Draught of Eagle's Splendor",
				description : "\n   " + "For the next 10 minutes, you have advantage on Charisma ability checks and saving throws.",
				},
				"elfsight oil" : {
				name : "Elfsight Oil",
				description : "\n   " + "For the next 8 hours, you have darkvision out to a range of 120 feet.",
				},
				"fleshknit phosphate" : {
				name : "Fleshknit Phosphate",
				description : "\n   " + "For the next minute, if you have at least 1 hit point, you heal a number of hit points equal to your proficiency bonus at the start of each of your turns.",
				},
				"ironmind injection" : {
				name : "Ironmind Injection",
				description : "\n   " + "For the next hour, you have advantage on saving throws made against being charmed or frightened.",
				},
				"liquid courage" : {
				name : "Liquid Courage",
				description : "\n   " + "You gain temporary hit points equal to your Constitution ability score plus twice your level in this class. You lose any remaining temporary hit points from this compound after 1 minute.",
				},
				"liquid rage" : {
				name : "Liquid Rage",
				description : "\n   " + "For the next minute, your weapon attacks deal an extra 1d4 damage.",
				},
				"presto powder" : {
				name : "Presto Powder",
				description : "\n   " + "For the next 10 minutes, you have advantage on ability checks made to determine initiative and you can use a bonus action on each of your turns to take the Dash or Disengage action.",
				},
				"spellshine ointment" : {
				name : "Spellshine Ointment",
				description : "\n   " + "For the next minute, you have resistance to damage from spells.",
				},
				"steelskin ointment" : {
				name : "Steelskin Ointment",
				description : "\n   " + "For the next minute, you have resistance to bludgeoning, piercing, and slashing damage.",
				},
				"tenmen tincture" : {
				name : "Tenmen Tincture",
				description : "\n   " + "For the next hour, you count as one size larger when determining your carrying capacity, and you ignore the heavy property of weapons.",
				},
			action : ["bonus action", "Consume Compound"],
		},
		"subclassfeature3.4" : {
			name : "Student of Alchemy",
			source : ["GH", 53],
			minlevel : 3,
			description : desc([
				"I gain proficiency with alchemist's supplies. My proficiency bonus is doubled for any ability check that uses this proficiency."
			]),
			toolProfs : [["Alchemist's Supplies"]],
		},
		"subclassfeature7" : {
			name : "Quick Creation",
			source : ["GH", 53],
			action : ["bonus action", ""],
			usage : 1,
			recovery : "long rest",
			minlevel : 7,
			description : "\n   " + "Once per long rest I can use an action to quickly create and consume one compound that I already know how to make.",
		},
		"subclassfeature10" : {
			name : "Living Cauldron",
			source : ["GH", 53],
			minlevel : 10,
			description : desc([
				"The number of compounds I can safely consume increases to 3 + my Constitution modifier (minimum 1).",
				"At 18th level the number of compounds I can safely consume increases to 5 + my Constitution modifier (minimum 1)."
			]),
		},
		"subclassfeature15" : {
			name : "Toxin Transmutation",
			source : ["GH", 53],
			minlevel : 15,
			action : ["bonus action", ""],
			description : "\n   " + "I can use a bonus action to end one effect causing me to be poisoned. When I do, I gain temporary hit points equal to my level in this class."
		},
		"subclassfeature18" : {
			name : "Living Catalyst",
			source : ["GH", 53],
			minlevel : 18,
			description : "\n   " + "When I finish a long rest I can choose to replace one compound I know with another one.",
			action : ["reaction", ""]
		}
	}
});

//Monk Subclasses

AddSubClass("monk", "way of the leaden crown", {
	regExpSearch : /^(?=.*crown)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Leaden Crown",
	source : ["GH", 54],
	features : {
		"subclassfeature3" : {
			name : "Subtle Hand",
			source : ["GH", 54],
			minlevel : 3,
			description : "\n   " + "On my turn my reach is 10ft when I make unarmed strikes. In addition, when I make an unarmed strike this way, it deals force damage instead.",
		},
		"subclassfeature3.1" : {
			name : "Psionic Prowess 1",
			source : ["GH", 54],
			minlevel : 3,
			description : desc([
				"I gain the Mage Hand cantrip if I don't know it already. When I cast the spell, the spectral hand is invisible.",
				"In addition, I can cast certain spells by expending ki. I can use an action and spend 1 ki point to cast Detect Evil and Good and Protection from Evil and Good. I can also use an action and spend 2 ki points to cast Hold Person, Levitate, or Shatter. Wisdom is my spellcasting ability for these spells and I do not need to provide material components when casting them this way.",
			]),
			spellcastingBonus : {
				name : "Psionic Prowess 0",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : "atwill"
			},
			spellFirstColTitle : "Ki",
			extraname : "Psionic Prowess 1",
			"psionic spells" : {
				name : "Psionic Spells",
				source : ["GH", 54],
				description : " [1 ki points]" + "\n   " + "As an action, I can cast Detect Evil and Good or Protection from Evil and Good.",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Psionic Prowess 1",
					spellcastingAbility : 5,
					spells : ["detect evil and good", "protection from evil and good"],
					selection : ["detect evil and good", "protection from evil and good"],
					firstCol : 1,
					times : 2
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "psionic spells" }],
			spellChanges : {
				"detect evil and good" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
				"protection from evil and good" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
			},
		},
			"subclassfeature3.2" : {
			name : "Psionic Prowess 2",
			source : ["GH", 54],
			minlevel : 3,
			description : desc([
				"I can also use an action and spend 2 ki points to cast Hold Person, Levitate, or Shatter. Wisdom is my spellcasting ability for these spells and I do not need to provide material components when casting them this way.",
			]),
			spellFirstColTitle : "Ki",
			extraname : "Psionic Prowess 2",
			"psionic spells" : {
				name : "Psionic Spells",
				source : ["GH", 54],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Hold Person, Levitate, or Shatter." + "\n   " + "I don't require spell slots or material components to cast these spells like this, just ki points",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Psionic Prowess 2",
					spellcastingAbility : 5,
					spells : ["hold person", "levitate", "shatter"],
					selection : ["hold person", "levitate", "shatter"],
					firstCol : 2,
					times : 3
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "psionic spells" }],
			spellChanges : {
				"hold person" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
				"levitate" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
				"shatter" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
			},
		},
		"subclassfeature6" : {
			name : "Unsubtle Strike",
			source : ["GH", 54],
			minlevel : 6,
			description : "\n   " + "When I hit a creature with an unarmed strike or monk weapon, I can force it to make a Strength saving throw against my ki save DC. On a failure, I can choose to push or pull the creature 10ft. Once I use this feature, I can't use it until the start of my next turn.",
		},
		"subclassfeature11" : {
			name : "Psychic Crush",
			source : ["GH", 54],
			minlevel : 11,
			description : desc([ "Each time I hit a creature with an unarmed strike it gains a pressure point. A creature loses all pressure points if I give a different creature a pressure point or 1 minute after the last time it gained a pressure point. As a bonus action on my turn, I can spend 1 ki point to telekinetically crush a creature with 1 or more of my pressure points.",
			"When I do, the creature must make a Strength saving throw against my ki save DC. On a failure, the creature takes 1d8 force damage per pressure point they have and they are restrained until the end of my next turn. On a success, they take half as much damage and aren't restrained. Either way, the creature loses all pressure points.",
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Psionic Mastery",
			source : ["GH", 54],
			minlevel : 17,
			description : "\n   " + "As an action, I can spend 5 ki points to cast Dispel Evil and Good, Hold Monster, Telekinesis, or Wall of Force. Wisdom",
			spellFirstColTitle : "Ki",
			extraname : "Psionic Prowess",
			"psionic spells" : {
				name : "Psionic Spells",
				source : ["GH", 54],
				description : " [5 ki points]" + "\n   " + "As an action, I can cast Dispel Evil and Good, Hold Monster, Telekinesis, or Wall of Force." + "\n   " + "I don't require spell slots or material components to cast these spells like this, just ki points",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Psionic Prowess 5",
					spellcastingAbility : 5,
					spells : ["dispel evil and good", "hold monster", "telekinesis", "wall of force"],
					selection : ["dispel evil and good", "hold monster", "telekinesis", "wall of force"],
					firstCol : 5,
					times : 4
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "psionic spells" }],
			spellChanges : {
				"dispel evil and good" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
				"hold monster" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
				"telekinesis" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
				"wall of force" : {
					components : "V,S",
					compMaterial : "",
					changes : "Spell cast with my Psionic Prowess don't require material components."
				},
			},
		}
	}
});
AddSubClass("monk", "way of pride", {
	regExpSearch : /^(?=.*pride)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of Pride",
	source : ["GH", 55],
	features : {
		"subclassfeature3" : {
			name : "Tall Tales",
			source : ["GH", 55],
			minlevel : 3,
			description : "\n   " + "I gain proficiency in my choice of one of the following skills: Deception, Intimidation, Performance, or Persuasion.",
			skillstxt : "Choose one from Deception, Intimidation, Performance, or Persuasion",
		},
		"subclassfeature3.1" : {
			name : "Bruised Ego",
			source : ["GH", 55],
			minlevel : 3,
			description : "\n   " + "Whenever I expend a ki point, I can also choose to gain temporary hit points equal to my Proficiency Bonus. WHile my current hit points are equal to or less than half my maximum hit points, I can also ad my Wisdom modifier to the amount of temporary hit points gained.",
		},
		"subclassfeature3.2" : {
			name : "Assertive Attacker",
			source : ["GH", 55],
			minlevel : 3,
			description : "\n   " + "While my current hit points are equal to or less than half my maximum hit points, my Martial Arts die counts as being on higher than normal. For example, if I am a 6th-level monk, my Martial Arts die goes from a d6 to a d8.",
		},
		"subclassfeature6" : {
			name : "Irrational Retaliation",
			source : ["GH", 55],
			minlevel : 6,
			description : "\n   " + "Whenever a creature deals damage to me, I can use my reaction to expend 2 ki points to target that creature. Until the end of my next turn, all attacks I make against the target creature have advantage.",
			action : ["reaction", ""]
		},
		"subclassfeature6.1" : {
			name : "Redoubled Efforts",
			source : ["GH", 55],
			minlevel : 6,
			description : "\n   " + "While my current hit points are equal to or less than half my maximum hit points, I can roll one additional Martial Arts die when determining the extra damage dealt by a critical hit.",
		},
		"subclassfeature11" : {
			name : "Ever Prideful",
			source : ["GH", 55],
			minlevel : 11,
			description :desc([ "\n   " + "When my hit points are reduced to 0 I am not knocked unconscious, but I must still make death saving throws and suffer all the normal effects of taking damage while at 0 hit points. At the beginning of each of my turns whilst in this state I can spen 1 ki point to remain in this state. If I do not spend 1 ki point to remain in this state. If I do not spend a ki point at the start of my turn whilst at 0 hit points I suffer all the normal effects of being reduced to 0 hit points.",
			"The following also apply: I cannot speak. I cannot cast or concentrate on spells. Critical hits against me in this state count as one failed death saving throw instead of 2.",
			]),
		},
		"subclassfeature17" : {
			name : "Egotistical",
			source : ["GH", 55],
			minlevel : 17,
			description : "\n   " + "I gain the benefits of this class' features that state 'while my current hit points are equal to or less than half my maximum hit points' whenever I am below my hit point maximum instead, provided I have been damaged by a hostile creature within the past minute.",
		}
	}
});

//Paladin Subclasses

AddSubClass("paladin", "oath of pestilence", {
	regExpSearch : /^(?=.*paladin)(?=.*pestilence).*$/i,
	subname : "Oath of Pestilence",
	source : ["UA:PSO", 1],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Debilitating Fever",
			source : ["UA:PSO", 1],
			minlevel : 3,
			description : "\n   " + "My touch inflicts disease. Make a melee spell attack against a creature within your reach that isn't a construct or undead. On a hit, the creature becomes diseased and is incapacitated for 1 min. At the end of each of the diseased target's turns, the target can make a Con saving throw. On a success the target is no longer disaesed, and the effect ends. Since this ability induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.",
			spellcastingExtra : ["bane", "inflict wounds", "acid arrow", "ray of enfeeblement", "flash fever", "stinking cloud", "blight", "confusion", "contagion", "insect plague"]
							},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Entropic Infection",
			source : ["UA:PSO", 1],
			minlevel : 3,
			description : "\n   " + "As an action, I can force a creature with 30ft of me to make a Con saving throw. On a failed save, for the next minute the creature takes and additional 2d6 damage the first time it takes necrotic damage each turn. During this time, the creature loses resistance to necrotic damage if it has it."
								},
		"subclassfeature7" : {
			name : "Aura of Rampant Sickness",
			source : ["UA:PSO", 1],
			minlevel : 7,
			description : "\n   " + "When a creature within my aura makes an ability check, attack roll, or saving throw I can give that roll disadvantage as a reaction. Once I do this, I can't give another roll disadvantage using this feature until the start of my next turn.",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
	 		savetxt : { immune : ["blinded"] }
								},
	  "subclassfeature15" : {
			name : "Disgusting Resilience",
			source : ["UA:PSO", 1],
			minlevel : 15,
			description : "\n   " + "When I take damage which would reduce me to 0 hit points, I can choose to expend any number of hit dice. Roll those dice and subtract the result from the damage taken. If this reduces the damage to 0, I don't take any damage. In addition if I am killed my corpse violently explodes in a shower of pus and gore, dealing 8d6 necrotic damage to creatures within 20ft of me that fail a Con saving throw.",
							},
		"subclassfeature20" : {
			name : "Plaguebringer",
			source : ["UA:PSO", 2],
			minlevel : 20,
			description : "\n   " + "As an action, I can gain the following benefits for 1 minute:" + "\n    - " + "I gain resistance to necrotic damage and are immune to poison damage and the poisoned condition" + "\n    - " + "My hit point maximum can't be reduced" + "\n    - " + "Creatures of my choice that start within 5ft of me, or move within 5ft of me on their turn, take necrotic damage equal to my Cha modifier. Once a creature takes damage from this ability, it can't take damage from it again until the start of it's next turn.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
			savetxt : { immune : ["poison"] },
			dmgres : ["Poison"]
								}
				}
});
AddSubClass("paladin", "oath of zeal", {
	regExpSearch : /^(?=.*paladin)(?=.*zeal).*$/i,
	subname : "Oath of Zeal",
	source : ["UA:PSO", 1],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Mark of the Heretic",
			source : ["UA:PSO", 1],
			minlevel : 3,
			description : "\n   " + "I can use my channel divinity to mark a creature as a heretic" + "\n   " + "As a bonus action, choose a creature you can see within 30ft and a weeping symbol appears on it." + "\n   " + "For the next minute your weapon attacks against the chosen creature score a critical hit on a roll of 19 or 20, and each time the creature's turn starts you can use your reaction to make one weapon attack against it.",
			spellcastingExtra : ["detect evil and good", "hunter's mark", "detect thoughts", "knock", "fear", "tongues", "diviniation", "locate creature", "insect plague", "scrying"]
							},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Inquistor's Eye",
			source : ["UA:PSO", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I grant myself advantage on Intelligence (Investigation), Wisdom (Insight), and Wisdom (Perception) ability checks for the next 10 minutes. During this time you can't be surprised."
								},
		"subclassfeature7" : {
			name : "Aura of Clarity",
			source : ["UA:PSO", 1],
			minlevel : 7,
			description : "\n   " + "Myself and friendly creatures within 10ft can't be blinded while you are conscious. Additionaly, creatures and objects of my choice within this range can't benefit from being invisible.",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
	 		savetxt : { immune : ["blinded"] }
								},
	  "subclassfeature15" : {
			name : "Compel Confession",
			source : ["UA:PSO", 1],
			minlevel : 15,
			description : "\n   " + "I can cast the zone of truth spell without expending a spell slot. When I cast the spell with this feature, creatures who succeed on their saving throw take 1d4 psychic damage at the start of each of their turns while they remain within the affected area.",
							},
		"subclassfeature20" : {
			name : "Apocalyptic Revelation",
			source : ["UA:PSO", 2],
			minlevel : 20,
			description : "\n   " + "As an action, I can gain the following benefits for 1 minute:" + "\n    - " + "I have truesight out to a distance of 120ft." + "\n    - " + "Creatures who start their turn, or move within, 5ft of me must make a Con saving throw against my paladin spell save DC. On a failure the creature is blinded until the start of its next turn." + "\n    - " + "As a bonus action on each of my turns I can choose a creature within 60ft and reveal its weaknesses for all to see. Attacks made against the chosen crature have advantage till the start of my next turn.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
								}
				}
});


//Ranger Subclasses

AddSubClass("ranger", "green reaper", {
	regExpSearch : /^(?=.*green)(?=.*reaper).*$/i,
	subname : "Green Reaper",
	source : ["GH", 60],
	fullname : "Green Reaper",
	features : {
		"subclassfeature3" : {
			name : "Envenomed Attack",
			source : ["GH", 60],
			minlevel : 3,
			usages : "PB",
			recovery : "long rest",
			action : ["bonus action", ""],
			description : desc([
				"I can use my poisoner's kit as a bonus action to coat a weapon or up to 20 pieces of ammunition with a dose of toxic poison. For the next minute, each time I deal damage with the weapon or ammunition, I can deal an additional 1d4 poison damage. I can do this a number of times equal to my proficiency bonus, and expended uses of this feature are recovered at the end of a long rest.",
				"At 11th level, this additional damage increases to 2d4. Also, expended uses of this feature are recoverd at the end of a short or long rest.",
			]),
		},
		"subclassfeature3.1" : {
			name : "Green Reaper Magic",
			source : ["GH", 60],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["detect poison and disease", "hold person", "bestow curse", "greater invisibility", "cloudkill"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Toxic Tradecraft",
			source : ["GH", 61],
			minlevel : 3,
			description : desc([
				"I gain proficiency with poisoner's kits. My proficiency bonus is doubled for any ability check that uses this proficiency. Additionally, when I gain this feature, I also gain a poisoner's kit. If I ever lose this kit, I can spend 8 hours creating a replacement by collecting toxic flora and harvesting venomous fauna.",
				"As a final benefit of this feature, once per turn when I hit a creature with a weapon or ammunition enchanced by my Envenomed Attack feature, I can spend a spell slot to apply a magical toxin to the attack. The toxin deals an additional 1d6 poison damage and the creature is poisoned until the end of my next turn. The toxin has additional effects based on the spell slot expended casting the spell. These additional effects are detailed under Toxin Effects."
			]),
				toNotesPage : [{
			name : "Toxic Tradecraft Effects Table",
			note : "\n   Various effects of the Toxic Tradecraft.",
			note : [
					"SL  Effect",
					"1a Attenuate. While a creature is poisoned by this toxin, it has disadvantage on Strength and Dexterity saving throws.",
					"1b Befuddled. While a creature is poisoned by this toxin, it cannot speak, read, or write any language and it has disadvantage on saving throws made to maintain concentration on spells.",
					"1c Uncoordinated. While a creature is poisoned by this toxin, it cannot take reactions or the Disengage or Dodge action.",
					"2a Debilitate. The creature can’t regain hit points for the next minute.",
					"2b Potent. If the creature has resistance to poison damage, it loses that resistance for the next minute.",
					"2c Suffer. For the next minute, the first time the creature takes poison damage each turn it takes an additional 1d6 poison damage.",
					"3a Lingering. Instead of ending at the end of your next turn, the creature continues to be poisoned for 10 minutes. At the end of each of the creature’s turns it can make a Constitution saving throw using your ranger spell save DC. If the creature accumulates three successes, which do not have to be consecutive, the poisoned condition ends early.",
					"3b Supernatural. When you deal damage with a weapon attack that has been dosed with this toxin, the creature loses immunity to the poisoned condition if it has such an immunity. In addition, instead of ending at the end of your next turn, the creature continues to be poisoned for 1 minute. At the end of each of the creature’s turns it can make a Constitution saving throw using your ranger spell save DC, ending the condition on a success.",
					"4a Flesh Eating. While a creature is poisoned by this toxin, it takes 2d6 acid damage at the start of each of its turns.",
					"4b Insensate. While a creature is poisoned by this toxin, it is also blinded and deafened.",
					"4c Paraplegia. While a creature is poisoned by this toxin, its movement speeds become 0 and it has disadvantage on Dexterity saving throws.",
					"5a Enhanced. Choose an additional option for this toxin off of the 4th level effects list and another additional option off of the 1st or 2nd level effects list.",
					"5b Stinging Application. When you hit a creature with a weapon attack that used this toxin, the attack deals an additional 5d6 damage. This additional damage’s type is your choice of acid, necrotic, or poison.",
	],
			page3notes : true,
			source : ["GH", 61],
}],
			toolProfs : [["Poisoner's kit"]],
		},
		"subclassfeature7" : {
			name : "Poison Control",
			source : ["GH", 61],
			minlevel : 7,
			description : desc([ 
			"I gain resistance to poison damage and have advantage on saving throws against being poisoned.",
			"In addition, I can cast the protection from poison spell without expending a spell slot. I can do so a number of times up to my Wisdom modifier, regaining all uses when I finish a long rest.",
			]),
			dmgres : ["Poison"],
			savetxt : { adv_vs : ["poison"]},
			spellcastingBonus : {
					name : "Poison Control",
					spells : ["protection from poison"],
					selection : ["protection from poison"],
					firstCol : 2,
					times : 1
				}
		},
		"subclassfeature11" : {
			name : "Variegated Vexations",
			source : ["GH", 61],
			minlevel : 11,
			description : "\n   " + "When I apply the toxin granted by my Envenomated Attack feature, I can choose to change the additional damage to acid or necrotic instead of poison."
		},
		"subclassfeature11.1" : {
			name : "Envenomed Attack",
			source : ["GH", 60],
			minlevel : 11,
			usages : "PB",
			recovery : "short rest",
			action : ["bonus action", ""],
			description : desc([
				"At 11th level, this additional damage increases to 2d4. Also, expended uses of this feature are recoverd at the end of a short or long rest.",
			]),
		},
		"subclassfeature15" : {
			name : "Pain Tolerance",
			source : ["GH", 61],
			minlevel : 15,
			description : "\n   " + "After I take damage from an attack, I can use my reaction to gain temporary hit points equal to the damage. I lose all temporary hit points gained from this feature at the end of my next turn.",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("ranger", "vermin", {
	regExpSearch : /^(?=.*vermin).*$/i,
	subname : "Vermin Lord",
	source : ["GH", 62],
	fullname : "Vermin Lord",
	features : {
		"subclassfeature3" : {
			name : "Verminkin",
			source : ["GH", 63],
			minlevel : 3,
			action : ["bonus action", "Summon Swarm"],
			description : desc([
				"I can comprehend and verbally communicate with vermin.",
				"Additionally, I can use an action and expend a spell slot to summon rodent hordes. When I do, I can summon a number of swarms of vermin equal to twice the level of spell slot expended. Each swarm is summoned to a space I can see with 30ft.",
				"Swarms summoned in this way go on my initiative, starting on my next turn. These swarms obey my verbal commands (no action required by me), defending themselves by taking the dodge action if I do not give them a command. My vermin swarms flee the area and disperse after 10 minutes or when I use this feature to summon other swarms of vermin."
			]),
		},
		"subclassfeature3.1" : {
			name : "Vermin Lord Magic",
			source : ["GH", 62],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["consumption", "animal messenger", "flash fever", "freedom of movement", "contagion"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Septic Strikes",
			source : ["GH", 63],
			minlevel : 3,
			action : ["bonus action", ""],
			description : desc([
				"As a bonus action, I can choose any number of creatures within 60ft of me that took damage from a weapon attack made by me or my swarm of vermin this turn. Chosen creatures take 1d4 necrotic damage.",
			]),
		},
		"subclassfeature7" : {
			name : "Filth and Fortitude",
			source : ["X", 42],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with Con saves, and am immune to disease.",
			saves : ["Con"],
			savetxt : {immune : ["disease"]},
		},
		"subclassfeature11" : {
			name : "Infectious Spread",
			source : ["GH", 63],
			minlevel : 11,
			usages : "Wis Mod",
			recovery : "long rest",
			action : ["bonus action", ""],
			description : desc([ "When I use my bonus action to deal the damage granted by my Septic Strikes feature, each creature that takes damage must make a Constitution saving throw with a DC equal to my ranger spell save DC. On a failure, the creature becomes poisoned until the start of my next turn.",
			"I can use this feature a number of times equal to my Wisdom modifier (minimum once). I regain all expended uses of this feature when I finish a long rest.",
			]),
		},
		"subclassfeature15" : {
			name : "Strength of the Swarm",
			source : ["GH", 63],
			minlevel : 15,
			description : "\n   " + "While I have a swarm of vermin summoned with my Verminkin feature, I can call on my rodent minions for defense. When I take damage while one or more of my swarms of rats are with 5ft, I can use my reaction and choose one of those swarms to take the damage instead.",
			action : ["reaction", " (when taking damage)"]
		}
	}
});

//Rogue Subclasses

AddSubClass("rogue", "highway rider", {
	regExpSearch : /^(?=.*(highway))(?=.*rider).*$/i,
	subname : "Highway Rider",
	source : ["GH", 64],
	features : {
		"subclassfeature3" : {
			name : "Hair Trigger",
			source : ["GH", 64],
			minlevel : 3,
			description : desc([
				"When I roll for initiative, I can immediately use my reaction to take one of the following actions:",
				"Make one weapon attack with advantage",
				"Move my speed, or my mount’s speed, withoutprovoking opportunity attacks",
				"Take the Dodge action",
				"Interact with an object or use an item",
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Trusty Mount",
			source : ["GH", 64],
			minlevel : 3,
			description : desc([
				"I can cast the Find Steed spell. When I do, its creature type remains beast rather than changing to my choice of celestial, fey, or fiend. Once I cast this spell using this feature, I can’t do so again until I finish a long rest."
			]),
			spellcastingBonus : {
				name : "Trusty Mount",
				spells : ["find steed"],
				selection : ["find steed"],
				firstCol : "oncelr"
								},
		},
		"subclassfeature3.2" : {
			name : "Ride Them Down",
			source : ["GH", 64],
			minlevel : 3,
			description : desc([
				"I gain an additional way to use my Sneak Attack: I don’t need advantage on the attack roll to use my Sneak Attack against a creature if I or my mount moved at least 20 feet this turn, and I don’t have disadvantage on the attack roll. All the other rules for Sneak Attack still apply."
			]),
		},
		"subclassfeature9" : {
			name : "Horse Lord",
			source : ["GH", 64],
			minlevel : 9,
			description : desc([
				"I can spend a minute grooming and caring for my mount, at the end of which time it gains temporary hit points equal to twice my level in this class.",
				"In addition, my cunning extends to my steed. While I am controlling a mount, it can spend a bonus action on its turn to take the Dash, Disengage, or Dodge action."
			])
		},
		"subclassfeature13" : {
			name : "True Grit",
			source : ["GH", 64],
			minlevel : 13,
			description : desc([
				"I gain proficiency in Constitution saving throws. In addition, when I am subjected to an effect that allows me to make a Constitution saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail.",
			]),
			saves : ["Con"],
		},
		"subclassfeature17" : {
			name : "Desperado",
			source : ["GH", 64],
			minlevel : 17,
			description : "\n   " + "When I am reduced to 0 hit points, I can use my reaction to take one of the actions listed in my Hair Trigger feature immediately before I fall unconscious.",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("rogue", "misfortune bringer", {
	regExpSearch : /^(?=.*(misfortune))(?=.*bringer).*$/i,
	subname : "Misfortune Bringer",
	source : ["GH", 66],
	features : {
		"subclassfeature3" : {
			name : "Evil Eye",
			source : ["GH", 66],
			minlevel : 3,
			description : desc([
				"I gain the ability to place a minor curse on others with a glance. As a bonus action on my turn, choose a creature I can see within 60 feet. The chosen creature must succeed on a Charisma saving throw against my misfortune save DC or be marked by my evil eye. While a creature is marked by my evil eye, I can use my Sneak Attack against the creature even if I don’t have advantage on the attack roll, but not if I have disadvantage on it.",
				"The creature remains marked by my evil eye for 1 minute or until I mark a different creature with my evil eye, whichever comes first.",
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Misfortunist",
			source : ["GH", 66],
			minlevel : 3,
			description : desc([
				"I learn misfortunes that I can inflict on those marked by my evil eye.",
				"Misfortunes. I learn two misfortunes of my choice, which are detailed under “Misfortunes” below. I learn an additional misfortune of my choice at 9th, 13th, and 17th level. Each time I finish a long rest, I can replace one misfortune I know with a different one.",
				"Jinx Points. I have three jinx points. When I spend a jinx point, it is no longer available to me until I regain it. I regain all spent jinx points when I finish a short or long rest.",
				"Saving Throws. my evil eye, and some of my misfortunes, require my target to make a saving throw to resist their effects. The saving throw DC is calculated as follows: Misfortune save DC = 8 + my proficiency bonus + my Charisma modifier",
			]),
			extraname : "Misfortunes",
				extrachoices : ["Curse of the Befuddled", "Curse of the Clumsy", "Curse of the Debilitated", "Curse of the Doomed", "Curse of the Fearful", "Curse of the Inept", "Curse of the Insensate", "Curse of the Maimed", "Curse of the Marked", "Curse of the Plagued", "Curse of the Ruined", "Curse of the Somnolent", "Curse of the Unlucky"],
				"curse of the befuddled" : {
				name : "Curse of the Befuddled",
				description : "\n   " + "As an action I can spend 2 jinx points, and the creature marked by my evil eye is charmed for 10 minutes. When I do, the creature is no longer marked by my evil eye, and the charmed condition ends early if me or my allies deal damage to the creature or cause it to make a saving throw. After the 10 minutes have elapsed, the creature knows I used magic to influence its mood and disposition towards me.",
			},
				"curse of the clumsy" : {
				name : "Curse of the Clumsy",
				description : "\n   " + "When a creature marked by my evil eye moves 5 feet or more, I can use my reaction and spend 3 jinx points to cause the creature to fall prone and have its movement speed reduced to 0 until the end of the turn. When I do, the creature is no longer marked by my evil eye.",
			},
				"curse of the debilitated" : {
				name : "Curse of the Debilitated",
				description : "\n   " + "When a creature marked by my evil eye takes damage, I can use my reaction and spend 1 jinx point to roll 1d12. The creature takes necrotic damage and reduces its maximum hit points equal to the result.",
			},
				"curse of the doomed" : {
				name : "Curse of the Doomed",
				description : "\n   " + "After I miss with a weapon attack against a creature marked by my evil eye, I can use my reaction and spend 1 jinx point to make an additional weapon attack against the creature as part of the same action.",
			},
				"curse of the fearful" : {
				name : "Curse of the Fearful",
				description : "\n   " + "As an action I can spend 2 jinx points, and the creature marked by my evil eye is frightened for 1 minute. When I do, the creature is no longer marked by my evil eye, and it can make a Wisdom saving throw at the end of each of its turns, ending this misfortune early on a success.",
			},
				"curse of the inept" : {
				name : "Curse of the Inept",
				description : "\n   " + "After a creature marked by my evil eye makes an ability check or attack roll, but before the DM declares whether or not it is successful, I can use my reaction and spend 1 jinx point to make the creature reroll and use the lower result.",
			},
				"curse of the insensate" : {
				name : "Curse of the Insensate",
				description : "\n   " + "As an action I can spend 3 jinx points, and the creature marked by my evil eye is blinded and deafened for 1 minute. When I do, the creature is no longer marked by my evil eye, and it can make a Constitution saving throw at the end of each of its turns, ending this misfortune early on a success.",
			},
				"curse of the maimed" : {
				name : "Curse of the Maimed",
				description : "\n   " + "When I hit a creature marked by my evil eye with a weapon attack, and the die result was 18 or 19, I can use my reaction and spend 2 jinx points to turn the hit into a critical.",
			},
				"curse of the marked" : {
				name : "Curse of the Marked",
				description : "\n   " + "As a bonus action on my turn, I can spend 2 jinx points to enhance the effects of my evil eye on a creature I have marked by it. When I do, the duration increases to 24 hours or until I mark a different creature with my evil eye, whichever comes first. Additionally, while the creature is marked by my evil eye, I always know the direction and distance to the creature, provided I are on the same plane.",
			},
				"curse of the plagued" : {
				name : "Curse of the Plagued",
				description : "\n   " + "When a creature marked by my evil eye regains hit points, I can use my reaction and spend 1 jinx point to halve the amount of hit points regained. When I do, the creature can’t regain hit points until the start of my next turn.",
			},
				"curse of the ruined" : {
				name : "Curse of the Ruined",
				description : "\n   " + "After a creature marked by my evil eye makes a saving throw, but before the DM declares whether or not it is successful, I can use my reaction and spend 2 jinx points to make the creature reroll and use the lower result.",
			},
				"curse of the somnolent" : {
				name : "Curse of the Somnolent",
				description : "\n   " + "As an action, I can spend 3 jinx points, and the creature marked by my evil eye becomes drowsy. Roll a number of d10 equal to my level in this class and add 15 to their total. If the creature’s current hit points are equal to or less than the total, it goes unconscious. The target regains consciousness after 10 minutes, or when it takes damage or another creature uses its action to rouse it.",
			},
				"curse of the unlucky" : {
				name : "Curse of the Unlucky",
				description : "\n   " + "As a bonus action on my turn, I can spend 2 jinx points to put a pox on a creature marked by my evil eye. Whenever the creature makes an attack roll or saving throw, I roll 1d4 and subtract the result from their total. This pox ends when the creature is no longer marked by my evil eye.",
			},
		},
		"subclassfeature9" : {
			name : "Steal Luck",
			source : ["GH", 67],
			minlevel : 9,
			action : ["reaction", ""],
			usages: 1,
			recovery: "short rest",
			description : desc([
				"When a creature I can see within 30 feet of me makes an ability check, attack roll, or saving throw with advantage, I can use my reaction to remove advantage from the roll. When I do, I regain an expended jinx point. Once I use this feature, I must finish a short or long rest before I can do so again."
			])
		},
		"subclassfeature13" : {
			name : "Curse Caster",
			source : ["GH", 67],
			minlevel : 13,
			description : desc([
				"I can use an action and spend 3 jinx points to cast the bestow curse spell. Charisma is my spellcasting ability for this spell.",
			]),
			spellFirstColTitle : "Jinx Points",
			extraname : "Curse Caster",
			"curse spells" : {
				name : "Curse Spells",
				source : ["GH", 54],
				description : " [3 Jinx points]" + "\n   " + "As an action, I can cast Bestow Curse.",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Curse Caster",
					spellcastingAbility : 6,
					spells : ["bestow curse"],
					selection : ["bestow curse"],
					firstCol : 3,
					times : 1
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "curse spells" }],
		},
		"subclassfeature17" : {
			name : "Steal Luck",
			source : ["GH", 67],
			minlevel : 9,
			action : ["reaction", ""],
			usages: 3,
			recovery: "short rest",
			description : desc([
				"I can use this feature three times, regaining all uses when I finish a short or long rest."
		])
    }
	}
});

//Sorcerer Subclasses

AddSubClass("sorcerer", "haunted", {
	regExpSearch : /^(?=.*haunted).*$/i,
	subname : "Haunted",
	source : ["GH", 68],
	fullname : "Haunted",
	features : {
		"subclassfeature1" : {
			name : "Haunted Spells",
			source : ["GH", 68],
			minlevel : 1,
			description : desc([
				"I learn additional spells when I reach certain levels in this class. Each of these spells count as a sorcerer spell for me, but it doesn't count against the number of sorcerer spells I know.",
				"When I cast a spell I know from the Haunted Spells, I can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level."
			]),
			spellcastingBonus : {
				name : "Haunted Spells",
				spellcastingAbility : 6,
				spells : ["unseen servant"],
				selection : ["unseen servant"],	
				times : 1,
},	
				autoSelectExtrachoices : [{ extrachoice : "haunted spells" }],
				},
		"subclassfeature1.1" : {
			name : "Phantom Companion",
			source : ["GH", 69],
			minlevel : 1,
			action : ["action", "(Turn Invisible)"],
			description : desc([
			"I learn the find familiar spell and can cast it as a ritual, The spell doesn't count against my number of spells known.",
			"When I cast the spell, I can only choose the form of a specter, which becomes my phantom companion. Instead of a celestial, fey, or fiend this familiar's creature type is undead.",
			"As an action I can command my phantom companion to turn invisible until it attacks or I cast a spell through it, While invisible, it leaves no physical evidence of its passage, so it can be tracked only by magic. Any equipment or objects it is holding remains visible.",
			"Additionally, at the 3rd level, when I take the Attack action, I can forgo one of my own attacks to allow my familiar to make its Life Drain attack with its reaction.",
			]),
			spellcastingBonus : {
					name : "Phantom Companion",
					spellcastingAbility : 6,
					spells : ["find familiar"],
					selection : ["find familiar"],
					times : 1,
									},
		},
		"subclassfeature1.2" : {
			name : "Sixth Sense",
			source : ["GH", 69],
			minlevel : 1,
			description : desc([
			"When I make a Dexterity ability check to determine initiative, I gain a bonus to the roll equal to my Charisma modifier.",
			]),
		},
		"subclassfeature3" : {
			name : "Haunted Spells 3",
			source : ["GH", 69],
			minlevel : 3,
			spellcastingBonus : {
				name : "Haunted Spells 3",
				spellcastingAbility : 6,
				spells : ["see invisibility"],
				selection : ["see invisibility"],
				times : 1,
									},
			autoSelectExtrachoices : [{ extrachoice : "haunted spells 3" }],
				},
		"subclassfeature5" : {
			name : "Haunted Spells 5",
			source : ["GH", 69],
			minlevel : 5,
			spellcastingBonus : {
				name : "Haunted Spells 5",
				spellcastingAbility : 6,
				spells : ["speak with dead"],
				selection : ["speak with dead"],
				times : 1,
									},
				autoSelectExtrachoices : [{ extrachoice : "haunted spells 5" }],
				},
		"subclassfeature6" : {
			name : "Strength of Spirit",
			source : ["GH", 69],
			minlevel : 6,
			action : ["bonus action", "Command Life Drain"],
			description : desc([
				"My specter's maximum hit points increase by four times my level in this class.",
				"My specter can deliver spells of any range, not just touch. Apart from this change, it follows all the normal rules of casting a spell through my familiar.",
				"When I use my action to cast a spell, I can use a bonus action on the same turn to command my specter to use its Life Drain attack against a creature within range of my choice.",
			]),
		},
		"subclassfeature6.1" : {
			name : "Deathly Pallor",
			source : ["GH", 69],
			minlevel : 6,
			description : desc([
				"I gain resistance to necrotic damage. In addition, when I cast a sorcerer spell that deals damage, I can choose to change the damage type dealt to necrotic.",
			]),
			dmgres : ["Necrotic"],
		},
		"subclassfeature7" : {
			name : "Haunted Spells 7",
			source : ["GH", 69],
			minlevel : 7,
			spellcastingBonus : {
				name : "Haunted Spells 7",
				spellcastingAbility : 6,
				spells : ["death ward"],
				selection : ["death ward"],
				times : 1,
									},
				autoSelectExtrachoices : [{ extrachoice : "haunted spells 7" }],
				},
			"subclassfeature9" : {
			name : "Haunted Spells 9",
			source : ["GH", 69],
			minlevel : 9,
			spellcastingBonus : {
				name : "Haunted Spells 9",
				spellcastingAbility : 6,
				spells : ["little death"],
				selection : ["little death"],
				times : 1,
									},
				autoSelectExtrachoices : [{ extrachoice : "haunted spells 9" }],
				},
		"subclassfeature14" : {
			name : "Phantom Possession",
			source : ["X", 50],
			minlevel : 14,
			action : ["action", ""],
			usages : 1,
			recovery : "short rest",
			description : desc([
				"As an action I can direct my phantom companion to attempt to possess and enter a creature of my choice within 5 feet of my phantom. When I do, the creature must succeed on a Charisma saving throw against my spell save DC or be possessed by my phantom for 1 minute. During this time my phantom cannot be affected by spells or abilities, take actions, or interact with in any way.",
				"While the target is possessed, I have a telepathic link with it as long as the two of us are within 100 feet. I can use this telepathic link to issue commands to the creature while I am conscious (no action required), which it does its best to obey. If the creature completes the order and doesn’t receive further direction from me, it defends and preserves itself to the best of its ability, taking the Dodge action if it has not used its action already.",
				"Each time the target takes damage, it makes a new Charisma saving throw against the possession. If the saving throw succeeds, the possession ends and my phantom companion reappears in the closest unoccupied space.",
				"Once I use this feature, I can't do so again until I finish a short rest.",
			]),
		},
		"subclassfeature18" : {
			name : "Become Death",
			source : ["GH", 69],
			minlevel : 18,
			description : desc([
				"I can transmute my physical form into a spectral one when I near death. When I take damage that would reduce me to 0 hit points, I drop to 1 hit point instead and gain temporary hit points equal to half my maximum hit points. At the start of each of my turns, I lose 5 temporary hit points and all creatures of my choice within 30 feet take 5 necrotic damage. While I have any temporary hit points granted from this feature, I have resistance to all damage, a fly speed of 30 feet, and can move through creatures and objects provided I end my movement in an unoccupied space.",
				"Once I use this feature, I can’t do so again until I finish a long rest."
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("sorcerer", "wretched", {
	regExpSearch : /^(?=.*(wretched)).*$/i,
	subname : "Wretched Bloodline",
	source : ["GH", 70],
	fullname : "Wretched Bloodline",
	features : {
		"subclassfeature1" : {
			name : "Bad Luck Charm",
			source : ["GH", 70],
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""],
			description : desc([
				"I can use a bonus action to choose a creature I can see within 30 feet. The chosen creature has disadvantage on the next ability check, attack roll, or saving throw it makes. Once I use this feature, I can’t do so again until I finish a short or long rest, unless I spend 1 sorcery point to use it again."
			]),
				},
		"subclassfeature1.1" : {
			name : "Blood Ties",
			source : ["GH", 70],
			minlevel : 1,
			description : desc([
			"I know the detect evil and good spell and can cast it without expending a spell slot. This spell counts as a sorcerer spell for me but does not count against my number of spells known. Once I cast this spell without expending a spell slot, I can’t do so again until I finish a short or long rest.",
			"In addition, choose one of the following creature types as the being who cursed my ancestor: fey, fiend, or undead. ",
			]),
			choices : ["Fey", "Fiend", "Undead"],
			"fey" : {
				name : "Fey",
				description : "\n   " + "While I am concentrating on the detect evil and good spell, creatures of the Fey type have disadvantage on attack rolls against me, and I cannot be charmed, frightened, or possessed by such creatures.",
				dependentChoices : "fey visage"
			},
			"fiend" : {
				name : "Fiend",
				description : "\n   " + "While I am concentrating on the detect evil and good spell, creatures of the Fiend type have disadvantage on attack rolls against me, and I cannot be charmed, frightened, or possessed by such creatures.",
				dependentChoices : "fiend visage"
			},
			"undead" : {
				name : "Undead",
				description : "\n   " + "While I am concentrating on the detect evil and good spell, creatures of the Undead type have disadvantage on attack rolls against me, and I cannot be charmed, frightened, or possessed by such creatures.",
				dependentChoices : "undead visage"
			},	
			spellcastingBonus : {
					name : "Blood Ties",
					spellcastingAbility : 6,
					spells : ["detect evil and good"],
					selection : ["detect evil and good"],
					times : 1,
									},
				autoSelectExtrachoices : [{ extrachoice : "blood ties" }],
				},
		"subclassfeature1.2" : {
			name : "Wretched Curse",
			source : ["GH", 71],
			minlevel : 1,
			description : desc([
			"I suffer from a curse inherited from an ancestor who failed to uphold their end of a bargain with an otherworldly power.",
			]),
			choices : ["Hulking", "Nocturnal", "Plaguebearer"],
			"hulking" : {
				name : "Hulking",
				description : "\n   " + "My ancestor was cursed with a hulking frame. I have disadvantage on Dexterity (Stealth) ability checks made to move quietly. In addition, my maximum hit points increase by 1 and increase by 1 again each time I gain a level in this class. Finally  I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
				calcChanges : {
					hp : function (totalHD) {
						if (classes.known.sorcerer) {
							return [classes.known.sorcerer.level, "Wretched Curse (Hulking)"];
						}
					}
				},
				carryingCapacity : 2,
				savetxt : { text : ["Disadv. on Stealth"]},
			},
			"nocturnal" : {
				name : "Nocturnal",
				description : "\n   " + "My ancestor was cursed to shun the light of day. I have disadvantage on Wisdom (Perception) ability checks made to see while I am in sunlight. In addition, I have darkvision out to a distance of 120 feet and can see through magical darkness within that range.",
				vision : [["Darkvision", 120]],
				savetxt : { text : ["Disadv. on Percetion in sunlight"]},
			},
			"plaguebearer" : {
				name : "Plaguebearer",
				description : "\n   " + "My ancestor was cursed with physical symptoms of a plague. I have disadvantage on Charisma (Persuasion) ability checks made against humanoid creatures who are not blinded. In addition, I am immune to disease and have resistance to necrotic damage.",
				dmgres : ["Necrotic"],
				savetxt : { text : ["Disadv. on Persuasion"], immune : ["disease"]},
			},
		},
		"subclassfeature6" : {
			name : "Share the Burden",
			source : ["GH", 71],
			minlevel : 6,
			description : desc([
				"I learn the bestow curse spell. This spell counts as a sorcerer spell for me, but it doesn’t count against my number of sorcerer spells known. When I cast the spell, I can choose to cast it by spending 3 sorcery points instead of a spell slot. If I cast the spell using sorcery points, its range changes to 60 feet for that casting and my concentration can’t be broken as a result of taking damage.",
			]),
			spellcastingBonus : {
					name : "Share the Burden",
					spellcastingAbility : 6,
					spells : ["bestow curse"],
					selection : ["bestow curse"],
					times : 1,
									},
				autoSelectExtrachoices : [{ extrachoice : "share the burden" }],
				},
		"subclassfeature14" : {
			name : "Terrifying Visage",
			source : ["GH", 71],
			minlevel : 14,
			action : ["bonus action", ""],
			usages : 1,
			recovery : "short rest",
			description : desc([
				"I can use a bonus action to adopt the terrifying visage of the being who cursed my ancestor for 10 minutes. During this time, I can use an action on each of my turns to cause each creature who can see me within 30 feet make a Wisdom saving throw against my sorcerer spell save DC. On a failure, a creature is frightened of me until the end of my next turn.",
				"In addition, while I have adopted the terrifying visage, I gain an additional benefit based on the creature type chosen with my Blood Ties feature.",
			]),
			choices : ["Fey Visage", "Fiend Visage", "Undead Visage"],
			"fey visage" : {
				name : "Fey Visage",
				action : ["bonus action", "(Teleport)"],
				description : "\n   " + "I can use a bonus action to teleport up to 30 feet in any direction.",
			},
			"fiend visage" : {
				name : "Fiend Visage",
				dmgres : ["Cold","Fire"],
				description : "\n   " + "I have resistance to cold and fire damage.",
			},
			"undead visage" : {
				name : "Undead Visage",
				action : ["reaction", "(Reduce Damage)"],
				description : "\n   " + "When I take damage that isn’t radiant, I can use my reaction to reduce that damage by an amount equal to half my sorcerer level.",
			},	
		},
		"subclassfeature18" : {
			name : "Vengeful Summons",
			source : ["GH", 71],
			minlevel : 18,
			description : desc([
				"My magic has become powerful enough that I can call and command a servant of those that cursed me. Choose one of the following creatures as a representative for my curse based on the choice I made with my Blood Ties feature: lamia or troll (fey only), barbed devil or incubus/succubus (fiend only), ghost or wraith (undead only).",
				"I can use an action and spend 5 sorcery points to summon my chosen creature. The creature appears in an unoccupied space I can see within 60 feet, and disappears when it drops to 0 hit points, I use this feature to summon another creature, or after 10 minutes have passed.",
				"Roll initiative for the creature, which has its own turns. When I summon it and on each of my turns thereafter, I can issue a verbal command to it (requiring no action on my part), telling it what it must do on its next turn. If I issue no command, it spends its turn attacking any creature within reach.",
			]),
			action : ["action", ""],
		}
	}
});

//Warlock Subclasses

AddSubClass("warlock", "the first vampire", {
	regExpSearch : /^(?=.*warlock)(?=.*vampire).*$/i,
	subname : "The First Vampire",
	source : ["X", 54],
	spellcastingExtra : ["false life", "bane", "alter self", "levitate", "conjure animals", "gaseous form", "dominate beast", "greater invisibility", "dominate person", "seeming"],
	features : {
		"subclassfeature1" : {
			name : "Nocturnal Predator",
			source : ["GH", 72],
			minlevel : 1,
			description : "\n   " + "I have darkvision out to a range of 60 feet. If I already have darkvision, increase the range by 60 feet.",
			vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	},
		"subclassfeature1.1" : {
			name : "Drain Life",
			source : ["GH", 72],
			minlevel : 1,
			action : ["bonus action", ""],
			description : desc([
				"When I use the Attack action or cast a spell, I can use a bonus action on the same turn to make a melee spell attack against a creature within 5 feet of me. My attack deals necrotic damage equal to 1d6 + my Charisma ability modifier on a hit.",
				"When I hit a creature with this feature, I can expend a warlock spell slot to deal an extra 1d8 necrotic damage to the target, plus another 1d8 per level of the spell slot. When I expend a spell slot to enhance the attack in this way, I regain hit points equal to the total damage dealt."
			]),
		},
		"subclassfeature6" : {
			name : "Creature of the Night",
			source : ["GH", 72],
			minlevel : 6,
			action : ["action", "Vampire Polymorph"],
			usages : "Cha Mod",
			recovery : "long rest",
			description : desc([
				"I can use my action to cast polymorph on myself, transforming into a bat or wolf. While I are in either of these forms, I retain my Intelligence, Wisdom, and Charisma scores.",
				"I can use this feature a number of times equal to my Charisma modifier, regaining all spent uses upon completion of a long rest."
			]),
		},
		"subclassfeature10" : {
			name : "Eldritch Appetite",
			source : ["GH", 72],
			minlevel : 10,
			action : ["reaction", "Consume Mortality"],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"When I reduce a creature to 0 hit points with my Life Drain feature, I can use my reaction to consume the last of their fleeting mortality. When I do, I regain one of my expended pact spell slots. Once I use this feature, I can’t use it again until I finish a long rest."
			]),
		},
		"subclassfeature14" : {
			name : "Eternal Night",
			source : ["GH", 72],
			minlevel : 14,
			action : ["bonus action", ""],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"I no longer age, and I gain resistance to necrotic damage.",
				"Additionally, once per long rest, I can use a bonus action to gain the following effects for one minute:",
				"I regain 1d6 hit points at the start of my turn if I have at least 1 hit point and aren’t in direct sunlight or running water. If I take radiant damage or damage from holy water, this trait doesn’t function at the start of my next turn.",
				"When using my Drain Life feature, I can use it as if I were expending a 1st-level spell slot."
			]),
			dmgres : ["Necrotic"],
		}
	}
});
AddSubClass("warlock", "the parasite", {
	regExpSearch : /^(?=.*warlock)(?=.*parasite).*$/i,
	subname : "The Parasite",
	source : ["X", 54],
	features : {
		"subclassfeature1" : {
			name : "Spell Siphon",
			source : ["GH", 73],
			minlevel : 1,
			action : ["reaction", ""],
			usages : "Cha modifier + 1",
			usagescalc : "event.value = What('Cha Mod') + 1",
			description : desc([ 
			"When a creature I can see within 60 feet casts a spell of a level I can cast with my pact magic spell slots, I can use my reaction to force them to make a Charisma saving throw using my warlock spell save DC. On a failure, the spell is cast as normal and I siphon the knowledge of the spell. While the spell is siphoned, the creature cannot cast the spell again and I can cast it as if it was a warlock spell I know by spending a pact spell slot as normal. Once I cast it, the spell is no longer siphoned and I no longer know the spell.",
			"I can siphon a number of spells up to 1 + my Charisma modifier (minimum 1). If I exceed this maximum, a spell of my choice that I have previously siphoned is no longer siphoned. A spell is no longer siphoned if I go unconscious or die.",
			]),
	},
		"subclassfeature1.1" : {
			name : "Physical Specimen",
			source : ["GH", 73],
			minlevel : 1,
			action : ["bonus action", ""],
			description : desc([
				"When I finish a long rest, I choose a number of the following benefits up to my Charisma modifier (minimum 1). I gain these benefits until my next long rest.",
				"When I hit a creature with this feature, I can expend a warlock spell slot to deal an extra 1d8 necrotic damage to the target, plus another 1d8 per level of the spell slot. When I expend a spell slot to enhance the attack in this way, I regain hit points equal to the total damage dealt."
			]),
			extraname : "Physical Specimen",
				extrachoices : ["Hit Points", "Darkvision", "Movement", "Disease/Poison", "Jump/Climb", "Athletics/Acrobatics"],
			"hit points" : {
				name : "Hit Points",
				description : "\n   " + "My maximum hit points increase by 1 for each level I have in this class.",
				calcChanges : {
					hp : function (totalHD) {
						if (classes.known.warlock) {
							return [classes.known.warlock.level, "Physical Specimen (Warlock level)"];
						}
					}
				},
			},
			"darkvision" : {
				name : "Darkvision",
				description : "\n   " + "I gain darkvision out to a distance of 60 feet. If I already have darkvision, its range increases by 30 feet.",
				vision : [["Darkvision", "fixed 60"], ["Darkvision", "+30"]],
			},
			"movement" : {
				name : "Movement",
				description : "\n   " + "Each of my movement speeds increase by 5.",
				speed : { 
					allModes : "+5"
						},
			},	
			"disease/poison" : {
				name : "Disease/Poison",
				description : "\n   " + "I have advantage on saving throws against disease and poison.",
				savetxt : { adv_vs : ["disease", "poison"]},
			},	
			"jump/climb" : {
				name : "Jump/Climb",
				description : "\n   " + "My jump distances are tripled and I gain a climb speed equal to my walking speed.",
				speed : { 
					climb : { spd : "walk", enc : 0 },
						},
			},	
			"athletics/acrobatics" : {
				name : "Athletics/Acrobatics",
				description : "\n   " + "When I make a Strength (Athletics) or Dexterity (Acrobatics) ability check I can use my reaction to add a bonus to the roll. This bonus is equal to my Charisma modifier.",
				action : ["reaction", ""],
			},	
		},
		"subclassfeature6" : {
			name : "Symbiotic Sentinel",
			source : ["GH", 74],
			minlevel : 6,
			description : desc([
				"My patron remains alert to all threats to its host at all times. I cannot be surprised and I have advantage on Dexterity ability checks made to determine initiative. I also gain advantage on saving throws against being charmed and frightened."
			]),
			advantages : [["Initiative", true]],
			savetxt : { adv_vs : ["charm", "frightened"]},
		},
		"subclassfeature10" : {
			name : "Spawn Pawn",
			source : ["GH", 74],
			minlevel : 10,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"I learn the dominate person spell. It counts as a warlock spell for me, but it doesn’t count against the number of spells I know. I can also cast it once without a spell slot, and I regain the ability to do so when I finish a long rest.",
				"When I cast this spell, my patron enhances the magic, dealing psychic damage equal to my warlock level if the creature succeeds on a saving throw to end the spell. In addition, damage can’t break my concentration on this spell.",
			]),
			spellcastingBonus : {
				name : "Spawn Pawn",
				spellcastingAbility : 6,
				spells : ["dominate person"],
				selection : ["dominate person"],
				times : 1,
									},
				autoSelectExtrachoices : [{ extrachoice : "blood ties" }],
				},
		},
		"subclassfeature14" : {
			name : "Larval Regeneration",
			source : ["GH", 74],
			minlevel : 14,
			action : ["bonus action", ""],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"When I die, a larval parasite bursts from my corpse the next turn on my initiative. I control the parasite, which disappears after 24 hours. The parasite is a Tiny creature, has an AC of 14, maximum hit points equal to half my maximum hit points, and a walking speed of 30 feet. It otherwise uses my statistics but cannot cast spells.",
				"As an action, the parasite can cause a creature within 5 feet of it to make a Strength or Dexterity saving throw (my choice) against my warlock spell save DC. On a failure, the parasite burrows into the creature dealing piercing damage equal to my warlock level. While burrowed inside a creature, the parasite cannot take any actions, cannot be targeted by attacks, and is immune to all damage except psychic damage.",
				"On each of the creature’s subsequent turns it can use its action to make a Constitution saving throw against my warlock spell save DC. If the creature succeeds, the parasite is ejected from its body and into an unoccupied space of the creature’s choice within 5 feet of it. If the parasite is still burrowed inside the creature when its turn ends, the creature takes necrotic damage equal to twice my warlock level. If this damage reduces the creature to 0 hit points, it immediately dies, the parasite disappears, and I take over the body of the humanoid as if I had been targeted by the reincarnate spell and rolled the race the humanoid had been.",
				"If I are returned to life, such as by the revivify spell, my parasite immediately disappears. Once I use this feature, I can’t use it again until I finish a long rest."
			]),
		}
	}
);

//Wizard Subclasses

AddSubClass("wizard", "plague doctor", {
	regExpSearch : /^(?=.*plague)(?=.*doctor).*$/i,
	subname : "Plague Doctor",
	source : ["GH", 76],
	fullname : "Plague Doctor",
	features : {
		"subclassfeature2" : { //has to be identical to a feature named in the ClassList
			name : "Potion Craft",
			source : ["GH", 76],
			minlevel : 2,
			skills : ["Medicine"],
			toolProfs : [["Alchemist's Supplies", "Herbalism Kit"]],
			description : desc([
				"I gain proficiency in Medicine and with alchemist’s supplies and herbalism kits.",
				"Additionally, I have learned to create magical concoctions. I can create any number of concoctions using my alchemist supplies or herbalism kit for 10 minutes, expending a spell slot for each concoction created. When I do, for each concoction created, choose a spell from my wizard’s spell book that targets only one creature. The chosen spell must be of an equal or lower level than the expended spell slot.",
				"When a creature consumes the concoction, it becomes the target of the spell as if I had just cast it. If the spell requires concentration, the creature that consumes the potion needs to concentrate on it. Concoctions created this way lose their magical effect at the end of my next long rest."
			]),
		},
		"subclassfeature2.1" : {
			name : "Good Medicine",
			source : ["GH", 76],
			minlevel : 2,
			description : "\n   " + "When I craft a concoction, I can choose to expend a spell slot without choosing a spell, instead creating good medicine. When a creature consumes my good medicine, I roll 1d8 per level of the spell slot expended casting the spell, and the creature regains an equal number of hit points. If I expended a spell slot of 3rd level or higher, I also end all diseases afflicting the creature.",
								},
		"subclassfeature6" : {
			name : "Bad Medicine",
			source : ["GH", 76],
			minlevel : 6,
			action : ["action", "(Hurl)"],
			description : desc([
				"When I craft a concoction I can choose to expend a spell slot without choosing a spell, instead crafting bad medicine. When I create a dose of bad medicine, choose one effect per level of spell slot expended. Effects listed below.",
				"As an action, I can hurl a dose of bad medicine at a point I can see within 30 feet. Creatures within 10 feet of that point must make a Constitution saving throw against my wizard spell save DC. On a failure, the creature suffers all of the chosen effects for the next minute.",
				"As an action, the affected creature can attempt another Constitution saving throw to end any effects early.",
								]),
			toNotesPage : [{
				name : "Bad Medicine Effects Table",
				note : "\n   Various effects of Bad Medicine.",
				note : [
						"Effects Available",
						"The creature is poisoned",
						"The creature’s movement speeds are halved",
						"The creature takes an additional 1d4 necrotic damage the first time it takes damage each turn.",
						"The creature takes 1d6 poison damage each time it takes an action, bonus action, or reaction on a turn.",
						"The creature takes acid damage equal to the level of the spell slot expended at the start of each of its turns.",
						],
				page3notes : true,
				source : ["GH", 61],
							}],
							},
		"subclassfeature10" : {
			name : "Breathe It In",
			source : ["GH", 76],
			minlevel : 10,
			description : "\n   " + "After I take necrotic or poison damage, I gain temporary hit points equal to the damage. In addition, I am immune to disease and have advantage on saving throws against being poisoned.",
			savetxt : { adv_vs : ["poison"], immune : ["disease"]},
		},
		"subclassfeature14" : {
			name : "Medicinal Master",
			source : ["GH", 76],
			minlevel : 14,
			description : desc([
				"When I heal with my Good Medicine or deal damage with my Bad Medicine, roll an additional 2d8 to determine the amount of hit points regained or necrotic damage dealt."
								]),
								}
				}
});
AddSubClass("wizard", "sangromancy", {
	regExpSearch : /^(?=.*sangromancy).*$/i,
	subname : "School of Sangromancy",
	source : ["GH", 77],
	fullname : "School of Sangromancy",
	features : {
		"subclassfeature2" : {
			name : "Sangromancy Savant",
			source : ["GH", 76],
			minlevel : 2,
			description : desc([
				"All sangromancy spells are added to the wizard spell list for me. In addition, the gold and time I must spend to copy a sangromancy spell into my spellbook is halved."
			]),
			spellcastingExtra : ["blood bond", "blood rush", "circle of scarlet", "crimson lash", "mortality", "reanimate", "red rain", "sanguine poppet", "sense lifeblood", "steal immortality", "theft of vitae", "wilting smite"],
		},
		"subclassfeature2.1" : {
			name : "Full-Blooded",
			source : ["GH", 77],
			minlevel : 2,
			description : "\n   " + "I gain a pool of d12s that I can expend instead of a hit die when I cast sangromancy spells. The number of dice in the pool equals 1 + my wizard level. My pool regains all expended dice when I finish a long rest.",
			additional : ["d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12"],
				usages : "1+ Wizard level ",
				usagescalc : "event.value = 1+classes.known.wizard.level;",
				recovery : "long rest",
					},
		"subclassfeature6" : {
			name : "Sanguine Vigor",
			source : ["GH", 77],
			minlevel : 6,
			description : desc([
				"My hit point maximum increases by 6 and increases by 1 again whenever I gain a level in this class.",
				"When I cast a sangromancy spell, I regain a number of hit points equal to the level of the spell.",
			]),
			calcChanges : {
					hp : function (totalHD) {
						if (classes.known.wizard) {
							return [classes.known.wizard.level, "Sanguine Vigor (Wizard level)"];
						}
					}
				},
		},
		"subclassfeature10" : {
			name : "Blood for Blood",
			source : ["GH", 77],
			minlevel : 10,
			description : "\n   " + "When I deal damage to a creature with a spell I cast, I can expend and roll a hit die, or a d12 from my Full-Blooded feature, to add its result to the damage dealt to that creature.",
		},
		"subclassfeature14" : {
			name : "Red Renewal",
			source : ["GH", 77],
			minlevel : 14,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"When I finish a short rest, I can choose expended hit dice to recover. When I do, choose a number of expended hit dice equal to half my wizard level and regain them. I regain an equivalent number of dice from my Full Blooded feature. Once I use this feature, I can’t use it again until I finish a long rest."
			]),
		}
	}
});

//Spells


SpellsList["arboreal curse"] = {
		name : "Arboreal Curse",
		classes : ["druid"],
		source : [["GH", 118]],
		level : 7,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "A cup of sap",
		duration : "Until dispelled",
		save : "Con",
		description : "Crea turns to tree, 3 fail stays till dispelled, 3 success turn back",
		descriptionCantripDie : "",
		descriptionFull : "You attempt to turn one creature that you can see within range into wood. If the target’s body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden into bark. On a successful save, the creature isn’t affected. A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its Constitution saving throw three times, it is turned into a tree and subjected to the petrified condition for the duration. The successes and failures don’t need to be consecutive; keep track of both until the target collects three of a kind. If the transformed creature is burned, chopped down, or otherwise destroyed while petrified, the creature is slain. A creature remains transformed unless the effect is reversed within one year with remove curse, wish, or similar magical effects. If the creature spends one year and a day as a tree, the transformation becomes permanent, and nothing can return the creature to its original form."
	};
SpellsList["blood bond"] = {
		name : "Blood Bond",
		classes : ["druid"],
		source : [["GH", 118]],
		level : 3,
		school : "Ench",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A rag soaked in your own blood",
		duration : "1 hour",
		description : "Expend 3 hit die, Target gets equal Temp HP",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend three hit dice or the spell automatically fails. If you do, roll the expended hit dice, and the creature gains an equal number of temporary hit points. For the duration of the spell, you know the direction and distance to the creature at all times, you and the creature can speak to one another telepathically (provided the creature has an intelligence score of 3 or higher), and you can target the creature with spells you cast that have a range of Self or Touch. These benefits are suppressed while you and the creature are not on the same plane. At any point, a creature affected by this spell can choose to end the spell early. If it does, the creature loses all remaining temporary hit points granted by this spell and takes necrotic damage equal to the temporary hit points lost. At Higher Levels. When you cast this spell using a spell slot of 5th or 6th level, its duration is 8 hours. When you cast this spell using a spell slot of 7th or 8th level, its duration is 24 hours. When you cast this spell using a spell slot of 9th level, its duration is 7 days."
	};
SpellsList["bloodletter"] = {
		name : "Bloodletter",
		classes : ["Cleric", "Paladin", "Ranger"],
		source : [["GH", 119]],
		level : 2,
		school : "Necro",
		time : "1 ba",
		range : "Touch",
		components : "V,S",
		duration : "Concentration, upt to 1 minute",
		save : "Con",
		description : "Festering wound, extra 2d6 + 1d6 per SL Necrotic at start its of turn. Heal 1 HP closes wound.",
		descriptionCantripDie : "",
		descriptionFull : "You touch a nonmagical weapon. Until the spell ends, the next creature hit by the weapon must succeed on a Constitution saving throw or receive a festering wound. A creature with a festering wound takes 2d6 necrotic damage at the beginning of its turn for the remainder of the spell’s duration. A creature can only have one festering wound at a time. Receiving at least 1 point of magical healing closes a festering wound, ending the recurring damage. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can increase the damage dealt by a festering wound by 1d6 for each slot level above 2nd."
	};
SpellsList["blood rush"] = {
		name : "Blood Rush",
		classes : ["Druid", "Ranger"],
		source : [["GH", 119]],
		level : 1,
		school : "Trans",
		time : "1 ba",
		range : "Self",
		components : "S",
		duration : "Instantaneous",
		save : "Con",
		description : "Expend hit die +1 per SL, regain HP equal to roll + spellcasting mod",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend a hit die or the spell automatically fails. If you do, roll the hit die and regain a number of hit points equal to the result + your spellcasting ability modifier. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can expend and roll an additional hit die for each slot level above 1st."
	};
SpellsList["calling card"] = {
		name : "Calling Card",
		classes : ["Bard", "Ranger", "Sorcerer", "Warlock", "Wizard"],
		source : [["GH", 119]],
		level : 0,
		school : "Illus",
		time : "1 a",
		range : "Touch",
		components : "S,M",
		compMaterial : "A stamp carved like the mark left by your calling card",
		duration : "Until dispelled",
		description : "Touch a corpse and leave a mark",
		descriptionCantripDie : "",
		descriptionFull : "You touch a corpse and mark it with a magical mark. You can choose to make it a visible mark that appears as a rune or word written on the flesh, or you can choose to make it an invisible mark. Creatures who specifically examine a corpse for a calling card automatically detect one, whether visible or invisible."
	};
SpellsList["circle of scarlet"] = {
		name : "Circle of Scarlet",
		classes : ["Sorcerer", "Warlock"],
		source : [["GH", 119]],
		level : 4,
		school : "Evoc",
		time : "1 a",
		range : "120 feet",
		components : "V,S,M",
		compMaterial : "A piece of parchment with a circle drawn in humanoid blood",
		duration : "Instantaneous",
		description : "Expend 4 hit dice 15ft rad, 100ft high pillar on point, dmg= hit dice + 4 of its hit dice Necrotic, save just hit dice.",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend four hit dice or the spell automatically fails. If you do, choose a point on the ground within range and roll the expended hit dice. A crimson pillar erupts from the ground in a 15-foot radius and 100-foot high cylinder centered on the point you chose. Each creature within the cylinder must make a Constitution saving throw. On a success, the creature takes necrotic damage equal to the total of the expended hit dice. On a failure, the creature takes necrotic damage equal to the total of the expended hit dice and must expend and roll four hit dice of its own, taking additional necrotic damage equal to the result. For each creature who fails the saving throw against this spell, you gain 5 temporary hit points."
	};
SpellsList["consume mind"] = {
		name : "Consume Mind",
		classes : ["Cleric", "Warlock", "Wizard"],
		source : [["GH", 119]],
		level : 4,
		school : "Necro",
		time : "1 a",
		range : "Self",
		components : "V,S,M",
		compMaterial : "A 1-ounce fresh or magically preserved portion of another creature’s brain",
		duration : "1 hour",
		description : "Int check + spellmod vs DC= targets Int score, recall any info of target",
		descriptionCantripDie : "",
		descriptionFull : "You consume the brain of another creature’s corpse, gaining its memories and knowledge. The corpse must have a brain and can’t be undead. The spell fails if the corpse has been dead (and not preserved) for more than three days. Until the spell ends, you can attempt to recall any important fact known to the creature—family history, recent events, building layouts, passwords, details of the creature’s death, and similar information. To recall a piece of information, you must make an ability check using your spellcasting modifier. The DC is equal to the corpse’s Intelligence score. Once the caster rolls to determine whether they recall a fact, they cannot attempt to recall it again."
	};	
SpellsList["consumption"] = {
		name : "Consumption",
		classes : ["Druid", "Sorcerer", "Wizard"],
		source : [["GH", 119]],
		level : 1,
		school : "Necro",
		time : "1 a",
		range : "60 feet",
		components : "V,S,M",
		compMaterial : "A malnourished leech",
		duration : "1 hour",
		save : "Con",
		description : "Expend a hit die, target takes dmg = to roll and rerolls each turn, save effect ends. +SL = more targets",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend a hit die or the spell automatically fails. If you do, choose a creature within range and roll the hit die. The creature loses a number of hit points equal to the result. For the duration of the spell, the creature must make a Constitution saving throw at the end of each of its turns. On a failure, roll the hit die expended to cast this spell again, and the creature loses hit points equal to the result. On a success, this effect ends for the creature. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, choose an additional target for the spell for each slot level above 1st."
	};		
SpellsList["creeping death"] = {
		name : "Creeping Death",
		classes : ["Warlock", "Wizard"],
		source : [["GH", 120]],
		level : 8,
		school : "Necro",
		time : "1 a",
		range : "60 feet",
		components : "S",
		duration : "Concentration, up to 1 minute",
		save : "Con",
		description : "Expend 8 hit dice, target dies if lower than total, ba save add 2d6 per fail,save add half, save 3 times ends spell",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend eight hit dice or the spell automatically fails. When you do, roll the eight hit dice expended to cast this spell and total them to determine the creature’s creeping death threshold. While the spell remains active, if the creature’s current hit points ever equal or are less than the creeping death threshold, the creature immediately dies. As a bonus action on each of your turns while this spell is active, you can force the target to make a Constitution saving throw. On a failure, roll 2d6 and add the result to the creature’s creeping death threshold. On a success, add half the result instead. If the creature succeeds on three saving throws, which do not have to be consecutive, this spell ends early."
	};		
SpellsList["creeping touch"] = {
		name : "Creeping Touch",
		classes : ["Bard", "Sorcerer", "Warlock", "Wizard"],
		source : [["GH", 120]],
		level : 1,
		school : "Trans",
		time : "1 a",
		range : "60 feet",
		components : "V,S",
		duration : "Concentration, up to 10 minutes",
		description : "Hand becomes spider, 1d6 Psychic if destroyed.",
		descriptionCantripDie : "",
		descriptionFull : "You detach your hand at the wrist, transforming it into a spider. While the spider is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through its eyes and hear what it hears until the start of your next turn. During this time, you are deaf and blind with regard to your own senses. If the spider is killed or prevented from returning to you, your hand is restored, but you take 1d6 points of psychic damage. If you command the spider to return, it crawls back to your wrist, and the spell ends."
	};		
SpellsList["crimson lash"] = {
		name : "Crimson Lash",
		classes : ["Warlock"],
		source : [["GH", 120]],
		level : 1,
		school : "Conj",
		time : "1 ba",
		range : "Self",
		components : "S",
		duration : "10 minutes",
		description : "Expend hit die, magic weapon of blood dmg=hit die Necrotic, Max HP reduced by damage, SL3-4, 2 attacks, SL5+, 3 attacks",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend a hit die or the spell automatically fails. If you do, a writhing lash of coagulated blood springs from your hand. This magic weapon lasts until the spell ends. It counts as a simple weapon with which you are proficient, and it has the light, finesse, and reach properties. You can choose to add your spellcasting modifier, instead of your Strength or Dexterity modifier, to attack and damage rolls with this weapon. Its damage die is equivalent to the hit die expended casting this spell, and the damage dealt is necrotic. Each time a creature takes damage from this magic weapon, its maximum hit points are reduced by an amount equal to the damage it took. At Higher Levels. When you cast this spell using a spell slot of 3rd or 4th level, when you take the Attack action, you can make two weapon attacks, provided both are with this magic weapon. When you use a spell slot of 5th level or higher, when you take the Attack action you make three weapon attacks, provided all are with this magic weapon."
	};		
SpellsList["crown of radiance"] = {
		name : "Crown of Radiance",
		classes : ["Bard", "Cleric", "Druid"],
		source : [["GH", 120]],
		level : 6,
		school : "Evoc",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "10 minutes",
		description : "Fiend, Fey, Undead within or starts 20ft take 2d8 Radiant, 30ft bright, 30ft dim",
		descriptionCantripDie : "",
		descriptionFull : "A flaming crown of holy light adorns your head until the spell ends. Any fiend, fey, or undead that moves within 20 feet of you or begins their turn within 20 feet of you takes 2d8 radiant damage. The crown of radiance sheds bright light in a 30-foot radius and dim light for an additional 30 feet."
	};		
SpellsList["dark sacrament"] = {
		name : "Dark Sacrament",
		classes : ["Warlock", "Wizard"],
		source : [["GH", 120]],
		level : 4,
		school : "Evoc",
		time : "1 a",
		range : "Self",
		components : "V,S,M",
		compMaterial : "A dagger encrusted in jewels worth at least 100 gp",
		duration : "Instantaneous",
		description : "Expend 4 hit dice, melee SA within 5ft, on hit dmg=HD+4d8 +1d8 per SL Necrotic, Benefits if target is killed.",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell you must expend four hit dice or the spell automatically fails. If you do, make a melee spell attack against a creature within 5 feet usinthe material component of this spell. On a hit, roll the hit dice expended casting this spell plus an additional 4d8 and deal necrotic damage equal to the result. If this damage causes the creature to be reduced to 0 hit points, it immediately dies and you gain one of the following dark blessings of your choice. Unassailable. You have advantage on all saving throws. Unbreakable. Your size increases by one category (from Medium to Large, for example), you gain a number of temporary hit points equal to your Constitution modifier (minimum 1) at the start of each of your turns, and your weapon attacks deal an additional 1d4 damage. Unerring. Your proficiency bonus increases by 2. Your dark blessing ends after 10 minutes or when you are reduced to 0 hit points, whichever happens first. When you take radiant damage while you have a dark blessing, you take an additional 1d4 damage. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the melee spell attack damage increases by 1d8 for each slot level above 4th."
	};		
SpellsList["earth worm"] = {
		name : "Earth Worm",
		classes : ["Druid", "Wizard"],
		source : [["GH", 121]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Concentration, up to 1 minutes",
		save : "Dex",
		description : "Melee SA within 5ft of worm, 3d8+SpellMod Piercing, Large or smaller save or swallowed. Swallowed take 6d6 Bludgeoning at start of turn, save not swallowed/escapes prone. BA move worm 20ft.",
		descriptionCantripDie : "",
		descriptionFull : "You transform the earth into a wormlike maw at an unoccupied point on the ground within range. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the worm. On a hit, the target takes piercing damage equal to 3d8 + your spellcasting ability modifier. If the target is a Large or smaller creature, it must succeed on a Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 6d6 bludgeoning damage at the start of each of your turns. Each round on its turn, a creature trapped within the worm can use an action to attempt to repeat the Dexterity saving throw to escape. A creature that succeeds this saving throw is regurgitated and falls prone in a space within 10 feet of the worm. As a bonus action on your turn, you can move the worm up to 20 feet and repeat the attack against a creature within 5 feet of it."
	};		
SpellsList["fiend flesh"] = {
		name : "Fiend Flesh",
		classes : ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
		source : [["GH", 121]],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A handful of sulfur",
		duration : "Concentration, up to 1 hour",
		description : "Target gains Res to Cold, Fire, and Lightning, and Immune to Poison dmg",
		descriptionCantripDie : "",
		descriptionFull : "You touch a willing creature. Until the spell ends, the target’s skin has a red, scaly appearance, and the target has resistance to cold, fire, and lightning damage. For the duration, they also gain immunity to poison damage."
	};		
SpellsList["flash fever"] = {
		name : "Flash Fever",
		classes : ["Druid", "Warlock"],
		source : [["GH", 121]],
		level : 3,
		school : "Necro",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "Flint and steel",
		duration : "Concentration, up to 1 minute",
		save : "Con",
		description : "1d6 + 1d6 per SL, +1d6 per failure, save ends effect",
		descriptionCantripDie : "",
		descriptionFull : "A living creature you choose within range breaks out into a cold sweat and must make a Constitution saving throw. On a failure, the cold sweat breaks into fever as the creature’s skin becomes flushed and hot to the touch, and the creature takes 1d6 fire damage at the start of its next turn. On a success, the spell immediately ends. While the spell persists, you can use a reaction at the start of an affected creature’s turn to force the creature to take fire damage again, increasing by 1d6 each time. The creature can use its action to attempt to cool itself, allowing it to attempt the Constitution saving throw again. On a success, the creature’s fever breaks and the spell ends. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the initial damage increases by 1d6 for each slot level above 3rd."
	};	
SpellsList["flense"] = {
		name : "Flense",
		classes : ["Cleric", "Wizard"],
		source : [["GH", 121]],
		level : 8,
		school : "Necro",
		time : "1 a",
		range : "60 feet",
		components : "V,S,M",
		compMaterial : "A scalpel",
		duration : "Concentration, up to 1 minute",
		save : "Con",
		description : "8d6 Necrotic, a each turn to make save again, save half dmg. Ends if 0HP, out of range, or total cover.",
		descriptionCantripDie : "",
		descriptionFull : "You target a creature you can see within range, using necromantic force to slice the skin from its body. Make a ranged spell attack against that creature. The target must succeed on a Constitution saving throw, taking 8d6 necrotic damage on a failure or half as much damage on a success. On each of your turns for the duration, you can use your action to force the same target to make another Constitution saving throw and repeat the damage. The spell also ends if the target is ever outside the spell’s range, if the target is reduced to 0 hp, or if it has total cover from you."
	};		
SpellsList["ghost light"] = {
		name : "Ghost Light",
		classes : ["Bard", "Cleric", "Sorcerer", "Wizard"],
		source : [["GH", 121]],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A clear marble",
		duration : "1 hour",
		description : "Target emits light 20ft, 20ft dim only visible by selected.",
		descriptionCantripDie : "",
		descriptionFull : "You touch one object that is no larger than 10 feet in any dimension and specify any number of creatures you can see within 10 feet. Until the spell ends, the object sheds bright silvery light in a 20-foot radius and dim light for an additional 20 feet. This light is only visible to the creatures you specified during the initial casting of the spell; all other creatures perceive the area affected by the ghost lantern as they regularly would."
	};	
SpellsList["heartseeker"] = {
		name : "Heartseeker",
		classes : ["Sorcerer", "Wizard"],
		source : [["GH", 121]],
		level : 6,
		school : "Evoc",
		time : "1 a",
		range : "300 feet",
		components : "V,S,M",
		compMaterial : "A ruby worth at least 100 gp",
		duration : "Concentration, up to 1 minute",
		save : "Con",
		description : "Expend 6 hit dice, ranged SA dmg=HD total Piercing, Increase crit range per turn, save effect ends.",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell you must expend six hit dice or the spell automatically fails. When you do, blood flows from your body then crystallizes into a barbed arrow, which launches at a creature of your choice within range. Make a ranged spell attack against the chosen creature. On a hit, roll the hit dice expended to cast this spell, and the creature takes piercing damage equal to the result. Once lodged in the creature, the bloody arrow begins to burrow toward its heart, rendering it vulnerable to further attacks. At the start of the creature’s next turn, it must make a Constitution saving throw. On a failure, attacks against the creature score critical hits on a 19 or 20 on the attack roll. At the start of each of the creature’s turns after that, it must repeat the Constitution saving throw or the critical hit range on attacks against the creature increases by 1 again. If the creature succeeds on three of these saving throws (these successes do not need to be consecutive) this spell ends. The increased critical hit range ends when the spell does."
	};				
SpellsList["hunter sense"] = {
		name : "Hunter Sense",
		classes : ["Druid", "Ranger"],
		source : [["GH", 122]],
		level : 0,
		school : "Div",
		time : "1 a",
		range : "Touch",
		components : "V,S",
		duration : "Concentration, up to 1 minute",
		description : "Target's Perception checks below 9 count as 10",
		descriptionCantripDie : "",
		descriptionFull : "You touch one willing creature. While this spell is active, the target’s senses are heightened. If the target rolls a 9 or below on the die when making a Wisdom (Perception) check, they instead act as if they rolled a 10."
	};	
SpellsList["incite riot"] = {
		name : "Incite Riot",
		classes : ["Bard", "Sorcerer", "Warlock", "Wizard"],
		source : [["GH", 122]],
		level : 5,
		school : "Ench",
		time : "1 a",
		range : "30 feet",
		components : "V,S,M",
		compMaterial : "A red handkerchief",
		duration : "Concentration, up to 1 minute",
		save : "Wis",
		description : "Charm within range, must use action to unarmed strike nearest or move to nearest.",
		descriptionCantripDie : "",
		descriptionFull : "When you cast this spell, you wave the red handkerchief used as the material component and choose any number of creatures within range that can see you. Each target must succeed on a Wisdom saving throw or be charmed by you until the spell ends or until you or your allies do anything harmful to it. While charmed in this way, it must use its turn to make unarmed strikes against the nearest creature (other than you) or use its turn moving to the nearest target. At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target."
	};	
SpellsList["investiture of venom"] = {
		name : "Investiture of Venom",
		classes : ["Druid", "Ranger"],
		source : [["GH", 122]],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Concentration, up to 10 minutes",
		save : "Con",
		description : "Immune to poison dmg and condition, know if creature has Res/Immune to poison, ba to remove Res/Immune on fail, a 15ft long 5ft wide line, 4d6 poison dmg and poison, half on save.",
		descriptionCantripDie : "",
		descriptionFull : "Until the spell ends, your veins bulge and become visibly green beneath your skin, your eyes weep constantly with liquid poison, and you gain the following benefits: • You are immune to poison damage and the poisoned condition. • When you choose a creature you can see within 30 feet, you know if it has poison resistance or immunity, as well as if it is immune to the poisoned condition. • You can use a bonus action on your turn and choose a creature within 30 feet. That creature must make a Constitution saving throw. On a failure, the creature loses any resistance or immunity it has to poison damage or the poisoned condition until the end of your next turn. • You can use your action to launch a geyser of toxins in a line 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Constitution saving throw or take 4d6 poison damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect is also poisoned until the end of your next turn."
	};	
SpellsList["little death"] = {
		name : "Little Death",
		classes : ["Warlock"],
		source : [["GH", 122]],
		level : 5,
		school : "Necro",
		time : "1 a",
		range : "Self",
		components : "S,M",
		compMaterial : "An item of personal sentimental value worth at least 1 sp)",
		duration : "Up to 8 hours",
		description : "Become ghost, return to body at spell end.",
		descriptionCantripDie : "",
		descriptionFull : "When you cast this spell, you drop to 0 hit points and die. At the start of your next turn, you become a ghost occupying the same space as your corpse. You use the ghost’s  While you are a ghost, you can only use abilities detailed in the ghost’s game statistics. In addition, you add your proficiency bonus to your attack rolls and the DC of saving throws your   a number of hours have passed equal to the result, the spell ends. The spell ends early if you are reduced to 0 hit points as a ghost or you use an action to do so. If the material component used to cast this spell remains on your corpse, you return to life with current hit points equal to If your body is destroyed or damaged beyond the capacity to survive while you are under the effects raise dead or resurrection."
	};	
SpellsList["magic mirror"] = {
		name : "Magic Mirror",
		classes : ["Sorcerer"],
		source : [["GH", 122]],
		level : 5,
		school : "Abjur",
		time : "1 rea",
		range : "Self",
		components : "V,S,M",
		compMaterial : "A polished silver marble",
		duration : "Instantaneous",
		description : "Redirect spell, check for SL6 and above",
		descriptionCantripDie : "",
		descriptionFull : "A momentary bubble of iridescent energy shimmers in the air between you and the caster of the triggering spell. The spell is redirected to a creature of your choice that you can see within 60 feet. If the spell is 5th level or lower, you are no longer a target of the spell and the chosen creature is instead. If the spell is 6th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a successful check, you are no longer a target of the spell and the chosen creature is instead. On a failed check, you remain the target of the triggering spell."
	};		
SpellsList["mortality"] = {
		name : "Mortality",
		classes : ["Sorcerer"],
		source : [["GH", 123]],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "120 feet",
		components : "V,S,M",
		compMaterial : "The skull of a humanoid encrusted in gems worth at least 200 gp",
		duration : "Concentration, up to 1 minute",
		save : "Cha",
		description : "Expend 5 hit dice, reduce target max hp by HD total, loses all Res/Immune, becomes humanoid, and adds 1d4 Necrotic to dmg.",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell you must expend five hit dice or the spell automatically fails. When you do, choose an aberration, celestial, elemental, fey, or fiend within range and condemn it to a taste of mortality. The creature must succeed on a Charisma saving throw or have its current and maximum hit points reduced. Roll the hit dice expended to cast this spell to determine the amount the creature’s current and maximum hit points are reduced by. Additionally, for the duration of the spell, a creature that fails the saving throw loses all damage immunities and resistances, its creature type changes to humanoid, and takes an additional 1d4 necrotic damage each time it takes damage. If a creature affected by this spell is reduced to 0 hit points, these changes become permanent and the creature dies. This final effect of the spell can only be reversed if the creature is restored to life and targeted by a remove curse spell or similar magic."
	};	
SpellsList["neutralize aura"] = {
		name : "Neutralize Aura",
		classes : ["Bard", "Cleric", "Paladin"],
		source : [["GH", 123]],
		level : 1,
		school : "Abjur",
		time : "1 minute",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A sprig of sage",
		duration : "Concentration, up to 1 hour",
		description : "Target +1 per SL invis to fey, fiend, undead, or celestial until attack or move within 5ft",
		descriptionCantripDie : "",
		descriptionFull : "Until the spell ends, the target cannot be magically perceived by fey, fiends, celestials, or undead. If the affected creature makes an attack, casts a spell, deals damage, takes damage, or steps within 5 feet of one of the named creatures, the spell ends. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
	};	
SpellsList["phoenix flames"] = {
		name : "Phoenix Flames",
		classes : ["Druid", "Sorcerer"],
		source : [["GH", 123]],
		level : 9,
		school : "Evoc",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Instantaneous",
		save : "Con",
		description : "Explode, all within 20ft 30d6 Radiant dmg and 1 lvl exhaustion, half on save,  revive after 10min",
		descriptionCantripDie : "",
		descriptionFull : "You immolate yourself, consuming your body in a searing cloud of holy flames. All creatures within 20 feet of you must make a Constitution saving throw or take 30d6 radiant damage and gain one level of exhaustion. On a successful save, a creature takes half damage and is not exhausted. If a target is killed by this damage, its body is incinerated. After 10 minutes, you rise from the ashes where you originally cast the spell. You are returned fully to life as if you were affected by a true resurrection spell."
	};		
SpellsList["reanimate"] = {
		name : "Reanimate",
		classes : ["Druid"],
		source : [["GH", 123]],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A melange of wilted daisies and other herbal powders worth at least 300 gp, which this spell consumes",
		duration : "Instantaneous",
		description : "Expend 3 hit dice, revive target with 1 hp + HD total Temp, lose 1 temp each turn, when 0 temp gain 1 lvl exhaustion",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell you must expend three hit dice or the spell automatically fails. If you do, you can touch a creature who has died within the last 10 minutes and return it to life with 1 hit point. In addition, roll the hit dice you expended casting this spell, and the creature gains temporary hit points equal to the result. At the start of each of the target creature’s turns, it loses 1 temporary hit point granted by this spell. While the creature has any temporary hit points granted by this spell it moves with unnatural vigor, gaining a +2 bonus to all ability checks, attack rolls, and saving throws. Once it loses all remaining temporary hit points granted by this spell, the creature gains a level of exhaustion. This spell can’t return to life a creature who has died of old age, nor can it restore missing body parts."
	};
SpellsList["red rain"] = {
		name : "Red Rain",
		classes : ["Cleric", "Warlock"],
		source : [["GH", 124]],
		level : 8,
		school : "Conj",
		time : "10 minutes",
		range : "Self",
		components : "V,S,M",
		compMaterial : "A sponge soaked in blood",
		duration : "Concentration, up to 8 hours",
		save : "Wis",
		description : "Expend 8 hit dice, Blood rain within 5 miles, 1 lvl exhaustion every 10mins and 2d10 Necrotic dmg and Max HP reduced, Beasts and Plants frightened on fail",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell you must expend eight hit dice or the spell automatically fails. If you do, over the course of the next 1d6 x 5 minutes the sky darkens and thick droplets of blood begin to rain down everywhere within 5 miles of you. Creatures within 5 miles of you gain a level of exhaustion every 10 minutes they are directly exposed to the red rain. Each time a creature gains a level of exhaustion from this effect, it takes 2d10 necrotic damage and has its maximum hit points reduced by an equivalent amount until it is no longer exhausted. While a creature has any levels of exhaustion caused by this spell, it automatically fails all saving throws against being poisoned or diseased. Beasts and plant creatures within the area of effect of this spell must succeed on a Wisdom saving throw or be frightened until they have spent 1 minute or longer outside the area of effect of this spell. Mundane plants within the area of effect of this spell wither and die after being exposed to the red rain for at least 10 minutes. For each hour you maintain concentration on this spell, roll one of the hit dice expended in the casting of this spell then total the results at the conclusion of the spell. The total equals the number of days before beasts will willingly return to, and plants can begin to regrow in, the area that was affected by this spell."
	};	
SpellsList["ride the lightning"] = {
		name : "Ride the Lightning",
		classes : ["Druid", "Sorcerer", "Wizard"],
		source : [["GH", 124]],
		level : 4,
		school : "Conj",
		time : "1 a",
		range : "Self",
		components : "V,S,M",
		compMaterial : "A length of copper wire",
		duration : "Instantaneous",
		description : "Teleport 60ft+10ft per SL, 4d6+1d6 per SL in 5ft line.",
		descriptionCantripDie : "",
		descriptionFull : "You transform yourself into a bolt of lightning and teleport up to 60 feet to an unoccupied space you can see. Each creature within 5 feet of the line created between your starting point and final destination takes 4d6 lightning damage. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th. In addition, you can teleport yourself an additional 10 feet further for each slot level above 4th."
	};		
SpellsList["sanguine poppet"] = {
		name : "Sanguine Poppet",
		classes : ["Bard", "Warlock"],
		source : [["GH", 124]],
		level : 3,
		school : "Trans",
		time : "1 min",
		range : "Self",
		components : "V,S,M",
		compMaterial : "An object shaped like a creature worth 1 cp or more",
		duration : "Concentration, up to 1 hour",
		save : "Con",
		description : "Expend 3 hit dice, creates construct, can explode for HD + 1HD per SL total Necrotic dmg, half on save",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend three hit dice or the spell automatically fails. When you do, you smear the material component used to cast this spell with your blood. The object shudders and becomes a sanguine poppet under your control. Your sanguine poppet has an AC equal to 10 + your proficiency bonus + your spellcasting ability modifier and 30 hp. If your sanguine poppet is ever reduced to 0 hp or more than a mile away, the spell ends immediately. As a bonus action on your turn, your sanguine poppet can walk or climb up to 30 feet, and you can see and hear through them until the start of your next turn. As an action, you can cause the poppet to selfdestruct in an explosion of blood, ending this spell. Roll the hit dice expended casting this spell, and each creature within 30 feet of the poppet must succeed on a Constitution saving throw or take necrotic damage equal to the result. Creatures who succeed on the saving throw take half as much damage. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can expend an additional hit die for each spell slot level above 3rd. Additionally, the duration of this spell increases by one hour for each spell slot level above 3rd."
	};
SpellsList["sanguine shield"] = {
		name : "Sanguine Shield",
		classes : ["Sorcerer", "Wizard"],
		source : [["GH", 124]],
		level : 2,
		school : "Abjur",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Concentration, up to 1 minute",
		description : "Expend 2 hit dice, gain 5 temp HP per creature within 30ft(max 15HP +5HP per SL) Considered to have half cover when still have temp HP",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend two hit dice or the spell automatically fails. You draw lifeforce from those injured around you to create a swirling shield of blood. You gain 5 temporary hit points for each creature within a 30 feet radius that is below its hit point maximum (including you) to a maximum of 15. While you have these hit points, you are considered to be behind half cover for any ranged attack made against you. When this spell ends, all remaining temporary hit points provided by it are lost. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the maximum number of temporary hit points you can gain from casting it increases by 5 for each two slot levels above 2nd."
	};		
SpellsList["sense lifeblood"] = {
		name : "Sense Lifeblood",
		classebs : ["Druid", "Ranger", "Sorcerer"],
		source : [["GH", 125]],
		level : 2,
		school : "Div",
		time : "1 ba",
		range : "Self",
		components : "S",
		duration : "Concentration, up to 1 minute",
		description : "Expend 2 hit dice, Can tell if people related, know whether below half Max HP, and add 2HD to dmg. SL4-5 conc up to 1 hour, SL6+ conc up to 8 hours",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend two hit dice or the spell automatically fails. If you do, you can sense the lifeblood flowing within creatures you can see. For the duration of the spell, you can sense whether and how two or more creatures you can see are related biologically. In addition, you know whether the creature’s current hit points are equal to or below half their maximum hit points and, when you deal damage to such a creature, you roll two additional dice to deal bonus damage. The dice rolled to determine this bonus damage are the same as the two you expended to cast this spell. At Higher Levels. When you cast this spell with a 4th or 5th level spell slot, you can maintain concentration on this spell for up to 1 hour. When you cast this spell with a 6th level or higher spell slot, you can maintain concentration on this spell for up to 8 hours."
	};		
SpellsList["serpent tongue"] = {
		name : "Serpent Tongue",
		classebs : ["Warlock", "Wizard"],
		source : [["GH", 125]],
		level : 3,
		school : "Trans",
		time : "1 ba",
		range : "Self",
		components : "V,S",
		duration : "1 minute",
		save : "Con",
		description : "Tongue becomes snake, melee SA 1d8 +1d8 per SL Piercing, Poison on fail, can ba attack with tongue",
		descriptionCantripDie : "",
		descriptionFull : "You transform your tongue into a poisonous serpent for the duration. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of you. On a hit, the target takes 1d8 piercing damage and must succeed on a Constitution saving throw or become poisoned. A poisoned creature can repeat this saving throw at the end of each turn, ending the condition on a success. As a bonus action on your turn, you can repeat the attack against a creature within 5 feet of you. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every level above 3rd."
	};	
SpellsList["spirit swarm"] = {
		name : "Spirit Swarm",
		classebs : ["Cleric", "Wizard"],
		source : [["GH", 126]],
		level : 5,
		school : "Necro",
		time : "1 a",
		range : "120 feet",
		components : "V,S",
		duration : "Concentration, up to 1 minute",
		save : "Cha",
		description : "Spirits attack, take 8d8 Psychic dmg and frightened, half on save and not frightened",
		descriptionCantripDie : "",
		descriptionFull : "You invite spirits to take their revenge upon a target. A creature that you can see within range must make a Charisma saving throw. A creature with a Charisma score of 2 or lower can’t be affected by this spell. A target takes 8d8 psychic damage on a failed save and is frightened of you until the spell ends. On a successful save, a target takes half damage and is not frightened."
	};
SpellsList["steal immortality"] = {
		name : "Steal Immortality",
		classebs : ["Warlock"],
		source : [["GH", 126]],
		level : 9,
		school : "Trans",
		time : "1 rea",
		range : "300 feet",
		components : "V,S,M",
		compMaterial : "The skull of a humanoid encrusted in gems worth at least 1,000 gp, which the spell consumes",
		duration : "Instantaneous",
		description : "Expend 9 hit dice, Destroy dead celestial, elemental, fey, fiend, or undead and become that",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend nine hit dice or the spell automatically fails. If you do, roll the expended hit dice and note the total as your “mortal hit points,” then the creature who triggered this spell by being reduced to 0 hp immediately dies. If it would normally return to its native plane at 0 hp, it is destroyed instead. Change your creature type to that of the dead creature. Whilst changed, you are immune to poison and disease; no longer need to eat, drink, or breathe; resistant to nonmagical damage; and gain a benefit dependent on your new creature type: Celestial. You have resistance to radiant and necrotic damage and gain a fly speed of 60 feet. Elemental. You have resistance to acid, cold, fire, lightning, and thunder damage. Fey. You can use a bonus action on each of your turns to turn invisible until the start of your next turn or teleport up to 60 feet in any direction. Fiend. You have resistance to cold and fire damage and gain a fly speed of 60 feet. Undead. You are immune to necrotic damage and being charmed or frightened. Your creature type is retained until you cast the spell again, immediately ending its effects, or you take damage that reduces you to 0 hp, wherein your creature type returns to normal and your hp to the number noted as your mortal hit points."
	};	
SpellsList["suffocate"] = {
		name : "Suffocate",
		classebs : ["Bard", "Sorcerer", "Warlock", "Wizard"],
		source : [["GH", 127]],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "60 feet",
		components : "V,S,M",
		compMaterial : "A leather glove",
		duration : "Concentration, up to 1 minute",
		save : "Str/Dex",
		description : "Melee SA, on hit target restrained, target has 1+Con Mod rounds before unconcious, on save effect ends ",
		descriptionCantripDie : "",
		descriptionFull : "You create a pair of grasping hands made from invisible forces. Make a spell attack against one creature that you can see within range. On a hit, the creature is restrained as the hands crush their throat or bodily equivalent. If the creature requires air to breathe, it begins to suffocate. A suffocating creature can survive for a number of rounds equal to 1 + its Constitution modifier (minimum of 1 round). At the start of its next turn after those rounds are over, it becomes unconscious, and it can’t regain hit points until it can breathe again. A conscious creature restrained by the hands can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, the spell ends on the target."
	};	
SpellsList["supernal smite"] = {
		name : "Supernal Smite",
		classebs : ["Paladin"],
		source : [["GH", 127]],
		level : 4,
		school : "Evoc",
		time : "1 ba",
		range : "Self",
		components : "V",
		duration : "Concentration, up to 1 minute",
		description : "Add 4d6 Force dmg to attacks, Concentration is broken on hit, SL3 and lower effects end, SL4+ roll check to end spell effects",
		descriptionCantripDie : "",
		descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell’s duration, your weapon shatters the ambient magic surrounding the creature, and the attack deals an extra 4d6 force damage. If the creature is concentrating on a spell, that concentration is broken. In addition, any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spells’ level. On a successful check, the spell ends."
	};		
SpellsList["theft of vitae"] = {
		name : "Theft of Vitae",
		classebs : ["Druid", "Wizard"],
		source : [["GH", 127]],
		level : 2,
		school : "Trans",
		time : "1 rea",
		range : "Self",
		components : "V,S",
		duration : "Instantaneous",
		description : "Expend 2 hit dice, target takes HD total Necrotic dmg, gain temp HP equal to dmg recieved + HD total (max 25+ 10 per SL)",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend two hit dice or the spell automatically fails. If you do, roll the hit dice and the creature takes necrotic damage equal to the result, then you gain a number of temporary hit points equal to the triggering damage plus this necrotic damage you dealt, to a maximum of 25. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the maximum number of temporary hit points you can gain from casting it increases by 10 for each slot level above 2nd."
	};		
SpellsList["wall of gloom"] = {
		name : "Wall of Gloom",
		classebs : ["Bard", "Wizard"],
		source : [["GH", 127]],
		level : 8,
		school : "Conj",
		time : "1 a",
		range : "120 feet",
		components : "V,S,M",
		compMaterial : "A vial of tears",
		duration : "10 minutes",
		save : "Cha",
		description : "Create wall, 60ft long, 10ft high, 5ft thick, or 20ft rad cirle, all but chosen become incapac if within 20ft on fail, moving through gains 1 lvl exhaustion on fail ",
		descriptionCantripDie : "",
		descriptionFull : "You create a wall of swirling grey energy, formed of the psychic pain of forlorn loss. The wall appears within range on a solid surface and lasts for the duration. You choose to make them all up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick—the wall blocks line of sight. The wall radiates dim light out to a range of 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creatur moves to within 20 feet of it or starts its turn there, the creature must succeed on a Charisma saving throw or become incapacitated for one round as they are overcome with a flood of negative feelings. A creature can move through the wall, though the attempt is emotionally draining. The first time a creature enters the wall on a turn or ends its turn there, the creature must make a Charisma saving throw, taking one level of exhaustion on a failed save."
	};	
SpellsList["wilting smite"] = {
		name : "Wilting Smite",
		classebs : ["Paladin"],
		source : [["GH", 127]],
		level : 2,
		school : "Trans",
		time : "1 ba",
		range : "Self",
		components : "V",
		duration : "Concentration, up to 1 minute",
		description : "Expend 2 hit dice, on next hit, deals HD total Necrotic dmg, and target loses all dmg res until next turn",
		descriptionCantripDie : "",
		descriptionFull : "As part of casting this spell, you must expend two hit dice or the spell automatically fails. If you do, the next time you hit a creature with a melee weapon attack during this spell’s duration, blood flows over your weapon then desiccates into black spores falling onto the attack’s target, and the attack deals an extra necrotic damage to the target. Roll the hit dice expended to cast this spell, and the total equals the amount of this extra necrotic damage. Additionally, the creature loses all damage resistances it has until the start of your next turn."
	};	
SpellsList["wrack"] = {
		name : "Wrack",
		classebs : ["Cleric"],
		source : [["GH", 127]],
		level : 2,
		school : "Necro",
		time : "1 a",
		range : "30 feet",
		components : "V,S,M",
		compMaterial : "A frayed piece of cord",
		duration : "Concentration, up to 1 minute",
		save : "Con",
		description : "Target speed halved, disadv on attacks, on save effect ends",
		descriptionCantripDie : "",
		descriptionFull : "Choose a creature that you can see within range. The target must succeed on a Constitution saving throw or be afflicted with excruciating muscle spasms for the duration. A creature affected in this way has its speed halved and rolls attacks with disadvantage. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target."
	};	
	
//Weapons

//Melee Weapons	
	
WeaponsList["catchpole"] = {
	name : "Catchpole",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*catchpole).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Entangling, hafted, reach, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 5,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["calvary flail"] = {
	name : "Calvary Flail",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*calvary)(?=.*flail).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	description : "Momentum (1d10), swift, versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["calvary hammer"] = {
	name : "Calvary Hammer",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*calvary)(?=.*hammer).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	description : "Armor piercing, momentum (1d12), versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["calvary pick"] = {
	name : "Calvary Pick",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*calvary)(?=.*pick).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "Armor piercing, momentum (1d12), versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["chakram"] = {
	name : "Chakram",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*chakram).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	description : "Finesse, light, swift, returning, thrown",
	special : false,
	list : "melee",
	weight : 1,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["claymore"] = {
	name : "Claymore",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*claymore).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "slashing"],
	range : "Melee",
	description : "Brutal, heavy, two-handed",
	special : false,
	list : "melee",
	weight : 7,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["double blade"] = {
	name : "Double Blade",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*double)(?=.*blade).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Double, momentum (1d10), monk, set, two-handed",
	special : false,
	list : "melee",
	weight : 5,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["double spear"] = {
	name : "Double Spear",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*double)(?=.*spear).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Double, momentum (1d10), monk, set, two-handed",
	special : false,
	list : "melee",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["elite rapier"] = {
	name : "Elite Rapier",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*elite)(?=.*rapier).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "Finesse, swift",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain"] = {
	name : "Fighting Chain",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Disarming, double, entangling, finesse, monk, reach, tripping, two- handed",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain, two-handed"] = {
	name : "Fighting Chain, two-handed",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain)(?=.*two-handed).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Brutal, disarming, double, entangling, finesse, monk, reach, tripping, bladed",
	special : false,
	list : "melee",
	weight : 6,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain, hook"] = {
	name : "Fighting Chain, hook",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain)(?=.*hook).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Damage (piercing), disarming, double, entangling, finesse, monk, reach, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain, sickle"] = {
	name : "Fighting Chain, sickle",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain)(?=.*sickle).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Damage (slashing), disarming, double, entangling, finesse, monk, reach, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["gladiator net"] = {
	name : "Gladiator Net",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*gladiator)(?=.*net).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee, 5/15 ft",
	description : "Entangling, restraining, thrown (range 5/15)",
	special : false,
	list : "melee",
	weight : 5,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["guardian poleaxe"] = {
	name : "Guardian Poleaxe",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*guardian)(?=.*poleaxe).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "slashing"],
	range : "Melee",
	description : "Damage (piercing), guard, hafted, heavy, reach, set, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 9,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["knightly lance"] = {
	name : "Knightly Lance",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*knightly)(?=.*lance).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "Melee",
	description : "Momentum (2d10), reach, two-handed (unless mounted)",
	tooltip : "Special: I have disadvantage when I use a lance to attack a target within 5 feet. Also, a lance requires two hands to wield when I'm not mounted.",
	special : true,
	list : "melee",
	weight : 6,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["knightly sword"] = {
	name : "Knightly Sword",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*knightly)(?=.*sword).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "slashing"],
	range : "Melee",
	description : "Guard, defending, precise, versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["military fork"] = {
	name : "Military Fork",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*military)(?=.*fork).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "Melee",
	description : "Hafted, heavy, reach, set, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 8,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["parrying dagger"] = {
	name : "Parrying Dagger",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*parrying)(?=.*dagger).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	description : "Disarming, defending, finesse, light, thrown",
	special : false,
	list : "melee",
	weight : 1,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["polearm"] = {
	name : "Polearm",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*polearm).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 12, "piercing"],
	range : "Melee",
	description : "Guard, hafted, heavy, reach, set, two-handed",
	special : false,
	list : "melee",
	weight : 12,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["punching dagger"] = {
	name : "Punching Dagger",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*punching)(?=.*dagger).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Armor piercing, defending, finesse, light",
	special : false,
	list : "melee",
	weight : 1,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["returning club"] = {
	name : "Returning Club",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*returning)(?=.*club).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee, 20/60 ft",
	description : "Light, returning, thrown",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["sabre"] = {
	name : "Sabre",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*sabre).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "slashing"],
	range : "Melee",
	description : "Finesse, swift",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["sheathed staff"] = {
	name : "Sheathed Staff",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*sheathed)(?=.*staff).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Double, monk, versatile (1d8)",
	special : false,
	list : "melee",
	weight : 6,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["side-handle baton"] = {
	name : "Side-handle Baton",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*side-handle)(?=.*baton).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Defending, finesse, light, monk, swift",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["wrath axe"] = {
	name : "Wrath Axe",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*wrath)(?=.*axe).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "slashing"],
	range : "Melee",
	description : "Brutal, hafted, heavy, momentum (2d8), two-handed",
	special : false,
	list : "melee",
	weight : 12,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["wrath maul"] = {
	name : "Wrath Maul",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*wrath)(?=.*maul).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	description : "Brutal, hafted, heavy, momentum (2d8), two-handed",
	special : false,
	list : "melee",
	weight : 15,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},

//Ranged Weapons

WeaponsList["arbalest"] = {
	name : "Arbalest",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*arbalest).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, heavy, loading, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 20,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["blackpowder pistol"] = {
	name : "Blackpowder Pistol",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blackpowder)(?=.*pistol).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "piercing"],
	range : "25/100 ft",
	description : "Ammunition, blackpowder, loading, light, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["blackpowder rifle"] = {
	name : "Blackpowder Rifle",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blackpowder)(?=.*rifle).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, blackpowder, loading, two-handed",
	special : false,
	list : "ranged",
	weight : 10,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["blunderbuss"] = {
	name : "Blunderbuss",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blunderbuss).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "20/30 ft",
	description : "Ammunition, blackpowder, cumbersome, loading, scatter (line 10), two-handed",
	special : false,
	list : "ranged",
	weight : 10,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["blunderbuss, hand"] = {
	name : "Blunderbuss, hand",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blunderbuss)(?=.*hand).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "piercing"],
	range : "20/30 ft",
	description : "Ammunition, blackpowder, loading, scatter (line 10)",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["composite, longbow"] = {
	name : "Composite Longbow",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*composite)(?=.*longbow).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "200/600 ft",
	description : "Ammunition, heavy, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "arrow",
},
WeaponsList["composite, shortbow"] = {
	name : "Composite Shortbow",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*composite)(?=.*shortbow).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "100/400 ft",
	description : "Ammunition, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "arrow",
},
WeaponsList["dragon pistol"] = {
	name : "Dragon Pistol",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*dragon)(?=.*pistol).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "piercing"],
	range : "20 ft",
	description : "Ammunition, blackpowder, loading, scatter (cone 15)",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["dragon rifle"] = {
	name : "Dragon Rifle",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*dragon)(?=.*rifle).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "20 ft",
	description : "Ammunition, blackpowder, loading, scatter (cone 15)",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["flame bellows"] = {
	name : "Flame Bellows",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*flame)(?=.*bellows).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "fire"],
	range : "15 ft",
	description : "Ammunition, cumbersome, loading, magazine (20), scatter (cone 15), two-handed",
	special : false,
	list : "ranged",
	weight : 11,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["repeater crossbow"] = {
	name : "Repeater Crossbow",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*crossbow).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, magazine (6 bolts), repeater, two-handed",
	special : false,
	list : "ranged",
	weight : 7,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["repeater crossbow, hand"] = {
	name : "Repeater Crossbow, hand",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*crossbow)(?=.*hand).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "30/120 ft",
	description : "Ammunition, light, magazine (3 bolts), repeater",
	special : false,
	list : "ranged",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["repeater crossbow, heavy"] = {
	name : "Repeater Crossbow, heavy",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*crossbow)(?=.*heavy).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "piercing"],
	range : "100/400 ft",
	description : "Ammunition, heavy, magazine (9 bolts), repeater, two-handed",
	special : false,
	list : "ranged",
	weight : 20,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["repeater needler"] = {
	name : "Repeater Needler",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*needler).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 1, "piercing"],
	range : "30/120 ft",
	description : "Ammunition, light, magazine (6 blowgun needles), repeater",
	special : false,
	list : "ranged",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "dart",
},
WeaponsList["repeater slinger"] = {
	name : "Repeater Slinger",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*slinger).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, magazine (9 sling bullets), repeater, two-handed",
	special : false,
	list : "ranged",
	weight : 9,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},

//Magic Items


MagicItemsList["fin symbiote"] = {
	name : "Fin Symbiote",
	nameTest :  /^(?=.*fin)(?=.*symbiote).*$/i,
	source : ["GH", 133],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by an Aberrant Horror",
	allowDuplicates : false,
	description : "While attuned to this item, you gain a +2 bonus to the saving throw DC of your Transformation Save.",
	descriptionLong : "The fin cannot be removed while you’re attuned to it, and you can’t voluntarily end your attunement to it. If the tentacle is sliced from your body, it grows back in 1d4 hours.",
	spellCalc : [
		function (type, spellcasters, ability) {
			if (type == "dc") return 2;
		},
		"I add +2 to all the saving throw DC of my Transformation Save."
	],
	},
MagicItemsList["stalk symbiote"] = {
	name : "Stalk Symbiote",
	nameTest :  /^(?=.*stalk)(?=.*symbiote).*$/i,
	source : ["GH", 133],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by an Aberrant Horror",
	allowDuplicates : false,
	description : "While attuned to this item, you have advantage on Wisdom (Perception) checks. In addition, you and any of your allies within 30 feet of you can’t be surprised, except when incapacitated by something other than nonmagical sleep.",
	descriptionLong : "This tendril of flesh harvested from a living aberration can be embedded into the skull of an aberrant horror. To attune to this item, you must stitch it onto your scalp and leave it for the entire attunement period, during which the stalk burrows into your skull to bond with your brain. While attuned to this item, you have advantage on Wisdom (Perception) checks. In addition, you and any of your allies within 30 feet of you can’t be surprised, except when incapacitated by something other than nonmagical sleep. The stalk can’t be removed while you’re attuned to it, and you can’t voluntarily end your attunement to it. If the stalk is sliced from your body, it grows back in 1d4 hours.",
	advantages : [
	["Perception", true],
					],
	savetxt : {
	text : ["You and any of your allies within 30 feet of you can’t be surprised, except when incapacitated by something other than nonmagical sleep."],
				},
	},
MagicItemsList["straitjacket"] = {
	name : "Straitjacket",
	nameTest :  /^(?=.*straitjacket).*$/i,
	source : ["GH", 133],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by an Aberrant Horror",
	allowDuplicates : false,
	description : "While wearing the straitjacket, an aberrant horror rolls twice on the Unstable Mutations table and can choose which result occurs.",
	descriptionLong : "This stained grey jacket has arms that reach to the floor and dozens of restraining straps. While wearing the straitjacket, an aberrant horror rolls twice on the Unstable Mutations table and can choose which result occurs. The straitjacket takes 10 minutes to don or doff. A creature wearing the straitjacket has disadvantage on attack rolls.",
	},
MagicItemsList["star metal ring"] = {
	name : "Star Metal Ring",
	nameTest :  /^(?=.*star)(?=.*metal)(?=.*ring).*$/i,
	source : ["GH", 133],
	defaultExcluded : false,
	type : "ring",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by an Aberrant Horror",
	allowDuplicates : false,
	description : "All your unarmed strikes deal magical damage while you are attuned to this ring.",
	descriptionLong : "This heavy steel ring is set with a chunk of shimmering star metal. While wearing this ring, your appendages are crusted with iridescent star metal. All your unarmed strikes deal magical damage while you are attuned to this ring.",
	},
MagicItemsList["queen's token"] = {
	name : "Queen's Token",
	nameTest :  /^(?=.*queens)(?=.*token).*$/i,
	source : ["GH", 133],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : false,
	allowDuplicates : false,
	description : "While holding the acorn, a creature can use an action to cast the wish spell. After using the acorn in this way, it immediately teleports back to the queen who bestowed it.",
	descriptionLong : "This humble acorn is one of the mightiest gifts a faerie queen can bestow upon her subjects. While holding the acorn, a creature can use an action to cast the wish spell. After using the acorn in this way, it immediately teleports back to the queen who bestowed it. If the wish spell is used in a way that the queen would perceive as a threat to herself or her realm, the spell does not work. Instead, the creature who made the wish immediately transforms into an oak tree. Only a wish spell cast with the queen’s token can return a creature transformed in this way to its original state.",
	},
MagicItemsList["iridescent armor"] = {
	name : "Iridescent Armor",
	nameTest :  /^(?=.*iridescent)(?=.*armor).*$/i,
	source : ["GH", 133],
	defaultExcluded : false,
	type : "armor (breastplate)",
	rarity : "rare",
	notLegalAL : true,
	attunement : false,
	allowDuplicates : false,
	description : "You gain a +1 bonus to AC while you wear this armor. Once per day, you can use an action to transform the gossamer cape into a pair of dragonfly wings, which grant you a flying speed of 60 feet for one hour. Once the armor is used this way, this property cannot be used again until the following dawn.",
	descriptionLong : "This shimmering breastplate is forged from a giant dragonfly’s carapace and adorned with a cape of gossamer fabric. You gain a +1 bonus to AC while you wear this armor. Once per day, you can use an action to transform the gossamer cape into a pair of dragonfly wings, which grant you a flying speed of 60 feet for one hour. Once the armor is used this way, this property cannot be used again until the following dawn.",
	addArmor: "Iridescent Armor",
		armorOptions: {
			regExpSearch: /^(?=.*iridescent)(?=.*armor).*$/i,
			name : "Iridescent Armor",
			source : ["GH", 133],
			stealthdis : true,
			ac : 14,
			weight : 4
		},
	extraAC : {mod : 1}
	},	
MagicItemsList["faerie crown"] = {
	name : "Faerie Crown",
	nameTest :  /^(?=.*faerie)(?=.*crown).*$/i,
	source : ["GH", 134],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "very rare",
	notLegalAL : true,
	attunement : false,
	allowDuplicates : false,
	description : "When a weapon attack would hit you, you can use your reaction to release one of the butterflies. When you do so, the butterfly interposes itself between you and the attack, taking the hit instead of you. A butterfly used in this way is destroyed.",
	descriptionLong : "This crown is woven of aromatic flowers that attract butterflies. The crown has 1d6+3 butterflies that hover around the crown. When a weapon attack would hit you, you can use your reaction to release one of the butterflies. When you do so, the butterfly interposes itself between you and the attack, taking the hit instead of you. A butterfly used in this way is destroyed. Once all the butterflies are used, the faerie crown withers and is destroyed.",
	},	
MagicItemsList["toadstool toddy"] = {
	name : "Toadstool Toddy",
	nameTest :  /^(?=.*toadstool)(?=.*toddy).*$/i,
	source : ["GH", 134],
	defaultExcluded : false,
	type : "potion",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : false,
	allowDuplicates : false,
	description : "A fey who drinks this potion can withstand 3 additional days in an urban environment without suffering exhaustion or penalties to rest.",
	descriptionLong : "This carbonated liquid, a potent distillation of faerie magic, is bright fuchsia and tastes of autumn rain. A fey who drinks this potion can withstand 3 additional days in an urban environment without suffering exhaustion or penalties to rest.",
	},	
MagicItemsList["ring of hidden desire"] = {
	name : "Ring of Hidden Desire",
	nameTest :  /^(?=.*ring)(?=.*hidden)(?=.*desire).*$/i,
	source : ["GH", 134],
	defaultExcluded : false,
	type : "ring",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Fiend",
	allowDuplicates : false,
	description : "While wearing this ring, you can use an action to attempt to learn a creature’s darkest desire. Select a creature that you can see. That creature must succeed on a DC 13 Wisdom saving throw. On a failed save, you immediately learn the target’s darkest desire.",
	descriptionLong : "This rose gold band is set with an obsidian stone carved in the shape of a heart. While wearing this ring, you can use an action to attempt to learn a creature’s darkest desire. Select a creature that you can see. That creature must succeed on a DC 13 Wisdom saving throw. On a failed save, you immediately learn the target’s darkest desire. On a successful save, you do not learn anything, and the creature is immune to the effects of the ring for 24 hours. If the creature you choose has an Intelligence of 3 or lower, the creature is unaffected.",
	action : ["action", "Steal Secrets"],
	},	
MagicItemsList["profane charm"] = {
	name : "Profane Charm",
	nameTest :  /^(?=.*profane)(?=.*charm).*$/i,
	source : ["GH", 134],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Fiend",
	allowDuplicates : false,
	description : "While wearing this charm, you can enter hallowed ground without triggering your hideous appearance. In addition, you cannot be detected as a fiend by the detect evil and good spell or a paladin’s divine sense ability.",
	descriptionLong : "This charm is a charred feather harvested from a fallen angel, wrapped in silver wire. While wearing this charm, you can enter hallowed ground without triggering your hideous appearance. In addition, you cannot be detected as a fiend by the detect evil and good spell or a paladin’s divine sense ability.",
	},	
MagicItemsList["cinder coat"] = {
	name : "Cinder Coat",
	nameTest :  /^(?=.*cinder)(?=.*coat).*$/i,
	source : ["GH", 134],
	defaultExcluded : false,
	type : "armor (leather)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Fiend",
	allowDuplicates : false,
	description : "You have a +1 bonus to AC while wearing this armor. The coat has 3 charges. When you hit a creature with an attack, and that creature is not at maximum hit points, you can expend 1 charge to deal an extra 1d10 fire damage to the target.",
	descriptionLong : "This floor-length leather duster is the color of dying embers. You have a +1 bonus to AC while wearing this armor. The coat has 3 charges. When you hit a creature with an attack, and that creature is not at maximum hit points, you can expend 1 charge to deal an extra 1d10 fire damage to the target. The coat regains 1d3 expended charges daily at dawn.",
	addArmor: "Armor of Zombie Flesh",
		armorOptions: {
			regExpSearch: /^(?=.*cinder)(?=.*coat).*$/i,
			name : "Cinder Coat",
			source : ["GH", 134],
			ac : 11,
			weight : 4
		},
	extraAC : {mod : 1}
	},		
MagicItemsList["ardor"] = {
	name : "Ardor",
	nameTest :  /^(?=.*ardor).*$/i,
	source : ["GH", 134],
	defaultExcluded : false,
	type : "weapon (battleaxe)",
	rarity : "artifact",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Fiend",
	allowDuplicates : false,
	description : "Axe of Hell. This magic battleaxe grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using it, the target takes an extra 3d10 necrotic damage. Champion of Evil. While holding the hammer, you are immune to the charmed, frightened, paralyzed, poisoned, and stunned conditions. Ardor’s Pursuit. As a bonus action, you can release Ardor to hover magically in an unoccupied space within 5 feet of you. If you can see the battleaxe, you can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to your hands. If any effect targets the hovering axe, you are considered to be holding it. The hovering axe falls if the attuned user dies. Spells. While the axe is on your person, you can use an action to cast one of the following spells (save DC 18): bane, banishment, bestow curse, branding smite, or incendiary cloud. Once you use the axe to cast a spell, that spell can’t be cast again from it until the next dawn.",
	descriptionLong : "The blades of this greataxe smolder with an inner light. The dark wooden handle is accented with silver. When the celestial realm turned back yet another assault from the forces of evil, a fiendish forge master received a vision, allowing them to craft a battleaxe like no other. With the might of Ardor, the fiends now possess a weapon capable of striking down the celestial forces. Ardor now lies in the fiendish realm’s hidden vaults, waiting to be wielded when the forces of darkness make their ultimate strike to consume the world. The fiends don’t realize that an equally powerful weapon rests in the hands of the celestials who wage eternal war against them. The fates who inspired the forge master to craft Ardor also sent a vision to a smith of heaven in the interest of maintaining the balance of power. Axe of Hell. This magic battleaxe grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using it, the target takes an extra 3d10 necrotic damage. Champion of Evil. While holding the hammer, you are immune to the charmed, frightened, paralyzed, poisoned, and stunned conditions. Ardor’s Pursuit. As a bonus action, you can release Ardor to hover magically in an unoccupied space within 5 feet of you. If you can see the battleaxe, you can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to your hands. If any effect targets the hovering axe, you are considered to be holding it. The hovering axe falls if the attuned user dies. Spells. While the axe is on your person, you can use an action to cast one of the following spells (save DC 18): bane, banishment, bestow curse, branding smite, or incendiary cloud. Once you use the axe to cast a spell, that spell can’t be cast again from it until the next dawn. Destroying the Axe. The only thing capable of damaging the battleaxe is its celestial twin Zeal. A creature wielding Zeal can choose to attack Ardor, which has an AC of 21 and 300 HP. No other creature or object can damage Ardor.",
	action : ["bonus action", "Ardor's Pursuit"],
	extraname : "Ardor Spells",
			"ardor spells" : {
				name : "Ardor Spells",
				source : ["GH", 134],
				description : "\n   " + "As an action, I can cast Bane, Banishment, Bestow Curse, Branding Smite, or Incendiary Cloud." + "\n   " + "Once you use the axe to cast a spell, that spell can’t be cast again from it until the next dawn.",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Ardor Spells",
					fixedDC : 17,
					spells : ["bane", "banishment", "bestow curse", "branding smite", "incendiary cloud"],
					selection : ["bane", "banishment", "bestow curse", "branding smite", "incendiary cloud"],
					times : 5
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "ardor spells" }],
	savetxt : {immune : ["charmed", "frightened", "paralyzed", "poisoned", "stunned"]},
		weaponsAdd : ["Ardor"],
		weaponOptions : {
			baseWeapon : "battleaxe",
			regExpSearch : /^(?=.*ardor).*$/i,
			name : "Ardor",
			source : ["GH", 134],
			description : "Versatile (1d10)",
			modifiers : [3, 3]
		},
	},	
MagicItemsList["funeral mask"] = {
	name : "Funeral Mask",
	nameTest :  /^(?=.*funeral)(?=.*mask).*$/i,
	source : ["GH", 134],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Lich",
	allowDuplicates : false,
	description : "While wearing this mask, you can use an action to alter your appearance for one hour. At any time for the duration of the spell, you can use your action to change your appearance in this way.",
	descriptionLong : "This delicate mask is made of thinly beaten copper that molds to the skin when worn. While wearing this mask, you can use an action to alter your appearance for one hour. You decide what you look like, including your height, weight, facial features, the sound of your voice, hair length, coloration, and distinguishing characteristics. You can make yourself appear as a member of another race, though none of your statistics change. You also can’t appear as a creature of a different size, and your basic shape stays the same; if you’re bipedal, you can’t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way. While altered in this manner, your hideous appearance is concealed. Once you use the mask, you cannot do so again until the following dawn.",
	action : ["action", ""],
	usages : 1,
	recovery : "dawn",
	},	
MagicItemsList["staff of the sorcerer king"] = {
	name : "Staff of the Sorcerer King",
	nameTest :  /^(?=.*staff)(?=.*sorcerer)(?=.*king).*$/i,
	source : ["GH", 135],
	defaultExcluded : false,
	type : "weapon (staff)",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	allowDuplicates : false,
	description : "Cull Subjects. Humanoids roll at disadvantage to save against spells you cast while attuned to the staff. Spell Shield. While attuned to this staff, you have advantage on saving throws against any spell that targets only you.",
	descriptionLong : "This ebony staff bears a bronze spear tip and additional blades carved to depict a winged scarab. The staff can be wielded as a magic spear that grants a +2 bonus to attack and damage rolls made with it. You are considered proficient with this weapon while you are attuned to it, even if you aren’t proficient with spears. While you hold it, you gain a +2 bonus to spell attack rolls. Cull Subjects. Humanoids roll at disadvantage to save against spells you cast while attuned to the staff. Spell Shield. While attuned to this staff, you have advantage on saving throws against any spell that targets only you. Cursed. This staff is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with remove curse or similar magic, you are unwilling to part with the staff, keeping it within reach at all times. In addition, you have disadvantage on attack rolls made with weapons other than this one. While you are attuned to the staff, once a day at midnight, you must succeed on a DC 17 Constitution saving throw. On a failed save, your maximum hit points are reduced by 10 unless you are undead. These hit points can only be restored by means of a wish spell. If your maximum hit points are reduced to 0 in this way, you die and immediately rise as a wight.",
	weaponsAdd : ["Staff of the Sorcerer King"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*sorcerer)(?=.*king).*$/i,
			name : "Staff of the Sorcerer King",
			source : ["GH", 135],
			description : "Thrown (range 20/60), versatile (1d8)",
			modifiers : [2, 2]
		},
	savetxt : {
	text : ["I have advantage on saving throws against any spell that targets only me."],
				},
	},
MagicItemsList["rod of ruin"] = {
	name : "Rod of Ruin",
	nameTest :  /^(?=.*rod)(?=.*ruin).*$/i,
	source : ["GH", 135],
	defaultExcluded : false,
	type : "rod",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Lich",
	allowDuplicates : false,
	description : "When a creature you can see within 60 feet of you damages you while you are holding this rod, you can use your reaction to expend 1 charge to force the creature to make a DC 15 Constitution saving throw. On a failed save, the creature ages 2d10 years and takes one level of exhaustion.",
	descriptionLong : "This rod is formed of stacked crystal spheres filled with smoke. The rod has 3 charges and regains all its expended charges daily at dusk. When a creature you can see within 60 feet of you damages you while you are holding this rod, you can use your reaction to expend 1 charge to force the creature to make a DC 15 Constitution saving throw. On a failed save, the creature ages 2d10 years and takes one level of exhaustion.",
	action : ["reaction", "Destroy Youth"],
	usages : 3,
	recovery : "dusk",
	},	
MagicItemsList["armor of zombie flesh"] = {
	name : "Armor of Zombie Flesh",
	nameTest :  /^(?=.*armor)(?=.*zombie)(?=.*flesh).*$/i,
	source : ["GH", 135],
	defaultExcluded : false,
	type : "armor (hide)",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Lich",
	allowDuplicates : false,
	description : "While wearing this armor, your AC becomes 16 + your Dexterity modifier. You are considered proficient with this armor even if you are not proficient with hide armor.",
	descriptionLong : "This armor is formed from the tanned flesh of an animated zombie. While wearing this armor, your AC becomes 16 + your Dexterity modifier. You are considered proficient with this armor even if you are not proficient with hide armor.",
	addArmor: "Armor of Zombie Flesh",
		armorOptions: {
			regExpSearch: /^(?=.*armor)(?=.*zombie)(?=.*flesh).*$/i,
			name : "Armor of Zombie Flesh",
			source : ["GH", 135],
			stealthdis : true,
			ac : 16,
			weight : 4
		},
	},	
MagicItemsList["second skin"] = {
	name : "Second Skin",
	nameTest :  /^(?=.*second)(?=.*skin).*$/i,
	source : ["GH", 136],
	defaultExcluded : false,
	type : "armor (hide)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Lycanthrope",
	allowDuplicates : false,
	description : "While in your hybrid form, the harness bonds to your flesh like a second pelt, giving you an AC of 18. This AC replaces your usual Transformation AC",
	descriptionLong : "This harness is woven from the hides of slain lycanthropes. While in your hybrid form, the harness bonds to your flesh like a second pelt, giving you an AC of 18. This AC replaces your usual Transformation AC. While you wear the harness, you have disadvantage on Charisma checks to interact with other lycanthropes.",
		armorAdd : "Second Skin",
		armorOptions: {
			regExpSearch: /^(?=.*second)(?=.*skin).*$/i,
			name : "Second Skin",
			source : ["GH", 136],
			stealthdis : true,
			ac : 18,
			weight : 4
		},
		savetxt : {
	text : ["You have disadvantage on Charisma checks with other lycanthropes."],
				},
	},	
MagicItemsList["crimson mist"] = {
	name : "Crimson Mist",
	nameTest :  /^(?=.*crimson)(?=.*mist).*$/i,
	source : ["GH", 136],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "You can use an action to spray the pheromones on one target within 5 feet, and its effect lasts for 24 hours. When they fail their Lust for the Hunt saving throw, a lycanthrope must prioritize a target affected by crimson mist over any other target.",
	descriptionLong : "This tiny mist bottle contains a cocktail of prey pheromones, enough for one use. You can use an action to spray the pheromones on one target within 5 feet, and its effect lasts for 24 hours. When they fail their Lust for the Hunt saving throw, a lycanthrope must prioritize a target affected by crimson mist over any other target.",
	action : ["action", ""],
	usages : 1,
	},
MagicItemsList["rod of the pack master"] = {
	name : "Rod of the Pack Master",
	nameTest :  /^(?=.*rod)(?=.*pack)(?=.*master).*$/i,
	source : ["GH", 136],
	defaultExcluded : false,
	type : "rod",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Lycanthrope",
	allowDuplicates : false,
	description : "While holding this rod, you can choose any number of willing creatures you can see within 30 feet. The rod can be held in the teeth and is usable in your hybrid or kindred form. You transform each target into a wolf or a bear (your lycanthrope heritage determines which).",
	descriptionLong : "This rod appears to be a piece of driftwood carved with images of wolves and bears. While holding this rod, you can choose any number of willing creatures you can see within 30 feet. The rod can be held in the teeth and is usable in your hybrid or kindred form. You transform each target into a wolf or a bear (your lycanthrope heritage determines which). The transformation lasts for 24 hours for each target, until you choose to end the effect, or until the target drops to 0 hit points or dies. A target’s game statistics are replaced by the chosen beast’s statistics, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak or cast spells. The target’s gear melds into the new form. The target can’t activate, wield, or otherwise benefit from its equipment. Once the rod has been used in this way, it cannot be used again until the following dawn.",
	action : ["action", ""],
	usages : 1,
	recovery : "dawn"
	},
MagicItemsList["iron fangs"] = {
	name : "Iron Fangs",
	nameTest :  /^(?=.*iron)(?=.*fangs).*$/i,
	source : ["GH", 136],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Lycanthrope",
	allowDuplicates : false,
	description : "Your bite attacks count as magical damage. In addition, while you wear the iron fangs, you cannot transmit the curse of lycanthropy through bites.",
	descriptionLong : "These iron tooth caps are inscribed with magical runes. If you transform into your hybrid form or kindred form while wearing the iron fangs, the magical metal expands to coat your teeth. Your bite attacks count as magical damage. In addition, while you wear the iron fangs, you cannot transmit the curse of lycanthropy through bites.",
	},	
MagicItemsList["bow of four"] = {
	name : "Bow of Four",
	nameTest :  /^(?=.*bow)(?=.*four).*$/i,
	source : ["GH", 136],
	defaultExcluded : false,
	type : "weapon (longbow)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Primordial",
	allowDuplicates : false,
	description : "When you hold this bow, you can summon a magical arrow composed of one of the four elements. Conjuring an arrow in this way does not require an action. Each time you summon an arrow, you must choose one of the four options below. If you do not fire the arrow within 1 minute of summoning it, it dissolves.",
	descriptionLong : "This white wooden bow is set with four gemstones: a ruby, an emerald, a sapphire, and a diamond. When you hold this bow, you can summon a magical arrow composed of one of the four elements. Conjuring an arrow in this way does not require an action. Each time you summon an arrow, you must choose one of the four options below. If you do not fire the arrow within 1 minute of summoning it, it dissolves. Arrow of Air. On a hit, the arrow of air deals 2d8 lightning damage. Arrow of Earth. On a hit, the arrow of earth deals 2d8 magical bludgeoning damage. Arrow of Fire. On a hit, the arrow of fire deals 3d8 fire damage. Arrow of Water. On a hit, the arrow of water deals 2d8 cold damage.",
	weaponsAdd : ["Staff of Thunder and Lightning"],
	weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /^(?=.*bow)(?=.*four).*$/i,
			name : "Bow of Four",
			source : ["GH", 136],
			description : "Heavy, two-handed, 2d8 dmg based off arrow type; Air: Lightning, Earth: Bludgeoning, Fire: Fire (3d8), Water: Cold",
		},
	},		
MagicItemsList["lodestone armor"] = {
	name : "Lodestone Armor",
	nameTest :  /^(?=.*lodestone)(?=.*armor).*$/i,
	source : ["GH", 137],
	defaultExcluded : false,
	type : "armor (plate)",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Primordial",
	allowDuplicates : false,
	description : "While wearing this armor, you can use a bonus action to enhance its magnetic polarity. When you do so, loose stone, soil, and minerals are immediately pulled to the surface of the armor, granting you a +1 bonus to AC but reducing your speed by 5 feet.",
	descriptionLong : "This plate armor is lined with magnetic lodestone harvested from the plane of elemental earth. While wearing this armor, you can use a bonus action to enhance its magnetic polarity. When you do so, loose stone, soil, and minerals are immediately pulled to the surface of the armor, granting you a +1 bonus to AC but reducing your speed by 5 feet. You can use a bonus action to activate this property each round cumulatively, up to a maximum of +5 AC and a 25-foot reduction in speed. If 1 minute passes without using a bonus action to activate this property, all magnetized material falls off the armor, ending both AC bonuses and speed reduction.",
	action : ["bonus action", "Magnetize"],
	armorAdd : "Lodestone Armor",
		armorOptions: {
			regExpSearch: /^(?=.*lodestone)(?=.*armor).*$/i,
			name : "Lodestone Armor",
			source : ["GH", 136],
			stealthdis : true,
			ac : 18,
			weight : 4
		},
	},	
MagicItemsList["ring of radiation"] = {
	name : "Ring of Radiation",
	nameTest :  /^(?=.*ring)(?=.*radiation).*$/i,
	source : ["GH", 137],
	defaultExcluded : false,
	type : "ring",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Primordial",
	allowDuplicates : false,
	description : "When you attack with unarmed strikes, your reach increases by 5 feet.",
	descriptionLong : "This ring is made of braided copper wire. While wearing this ring, your elemental energies are supercharged, allowing them to radiate from your body. When you attack with unarmed strikes, your reach increases by 5 feet.",
	},		
MagicItemsList["rod of elemental stasis"] = {
	name : "Rod of Elemental Stasis",
	nameTest :  /^(?=.*rod)(?=.*elemental)(?=.*stasis).*$/i,
	source : ["GH", 137],
	defaultExcluded : false,
	type : "rod",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Primordial",
	allowDuplicates : false,
	description : "If an air elemental, a fire elemental, an earth elemental, or a water elemental is slain within 60 feet of you while you are holding the rod, the elemental is absorbed into the rod.",
	descriptionLong : "This wooden rod is set with four glass spheres that each contain a microcosm of elemental energy. If an air elemental, a fire elemental, an earth elemental, or a water elemental is slain within 60 feet of you while you are holding the rod, the elemental is absorbed into the rod. A creature absorbed in this way occupies one of the four crystals in the rod. If the four crystals are already full when an elemental dies within range, the elemental dies as normal. As an action, you can present the rod and free one of the elementals contained within a crystal. The freed elemental appears within 5 feet of you and is friendly to you and your allies. Roll initiative for the summoned elemental, which has its own turns. The elemental obeys any verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures but otherwise take no actions. A freed elemental remains for 10 minutes, until you dismiss it, or until it is slain, after which it disappears to its home plane.",
	action : ["action", "Release Elemental"],
	},
MagicItemsList["heaven's herald"] = {
	name : "Heaven's Herald",
	nameTest :  /^(?=.*heaven's)(?=.*herald).*$/i,
	source : ["GH", 137],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "very rare",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "The creature blowing the trumpet can choose up to 12 allies within the area to receive the benefits of heaven’s herald. An allied creature becomes immune to being frightened and makes all Wisdom saving throws with advantage.",
	descriptionLong : "This golden trumpet is never dulled by rust or dirt. As an action, a good-aligned creature can blow the trumpet, which emits a rousing battle song that can be heard up to 600 feet away. The creature blowing the trumpet can choose up to 12 allies within the area to receive the benefits of heaven’s herald. An allied creature becomes immune to being frightened and makes all Wisdom saving throws with advantage. In addition, its hit point maximum increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours. Once used in this way, the herald cannot be used again until dawn. If a neutral-aligned creature attempts to use the trumpet, no sound emerges, and nothing happens. If an evil-aligned creature attempts to use the trumpet, the creature must succeed on a DC 15 Dexterity saving throw as a column of divine fire roars from the heavens to smite the user. A creature takes 8d6 radiant damage on a failed save, or half as much damage on a successful one.",
	action : ["action", "Heavenly Charge"],
	},		
MagicItemsList["zeal"] = {
	name : "Zeal",
	nameTest :  /^(?=.*zeal).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "weapon (warhammer)",
	rarity : "artifact",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Seraph",
	allowDuplicates : false,
	description : "Hammer of Heaven. This magic warhammer grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using it, the target takes an extra 3d10 radiant damage. Champion of Good. While holding the hammer, you are immune to the charmed, frightened, paralyzed, poisoned, and stunned conditions. Zealous Pursuit. As a bonus action, you can release Zeal to hover magically in an unoccupied space within 5 feet of you. If you can see the hammer, you can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to your hands. If any effect targets the hovering hammer, you are considered to be holding it. The hovering hammer falls if the attuned user dies.",
	descriptionLong : "The steel head of this warhammer seems to glow with an inner light. The pale wooden handle is accented with white gold. When the celestial realm nearly fell into darkness, a heavenly smith received a vision allowing them to craft a hammer like no other. With the might of Zeal, the armies of heaven turned back their foes, restoring cosmic balance. Zeal now lies in the hidden vaults of the celestial realms, waiting to be wielded once again when the forces of darkness threaten to consume the world. The celestials don’t realize that an equally powerful weapon rests in the hands of the very same armies of darkness that drove them back. The fates who inspired the smith to craft Zeal also sent a vision to a forge keeper of hell in the interest of maintaining the balance of power. Hammer of Heaven. This magic warhammer grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using it, the target takes an extra 3d10 radiant damage. Champion of Good. While holding the hammer, you are immune to the charmed, frightened, paralyzed, poisoned, and stunned conditions. Zealous Pursuit. As a bonus action, you can release Zeal to hover magically in an unoccupied space within 5 feet of you. If you can see the hammer, you can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to your hands. If any effect targets the hovering hammer, you are considered to be holding it. The hovering hammer falls if the attuned user dies. Spells. While the hammer is on your person, you can use an action to cast one of the following spells (save DC 18): banishment, branding smite, beacon of hope, earthquake, or heroism. Once you use the hammer to cast a spell, that spell can’t be cast again from it until the next dawn. Destroying the Hammer. The only thing capable of damaging the hammer is its fiendish twin Ardor. A creature wielding Ardor can choose to attack Zeal, which has an AC of 21 and 300 HP. No other creature or object can damage Zeal.",
	action : ["bonus action", "Zeal's Pursuit"],
	extraname : "Zeal Spells",
			"zeal spells" : {
				name : "Zeal Spells",
				source : ["GH", 134],
				description : "\n   " + "As an action, I can cast Banishment, Branding Smite, Beacon of Hope, Earthquake, or Heroism." + "\n   " + "Once you use the hammer to cast a spell, that spell can’t be cast again from it until the next dawn.",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Zeal Spells",
					fixedDC : 17,
					spells : ["Banishment", "Branding Smite", "Beacon of Hope", "Earthquake", "Heroism"],
					selection : ["Banishment", "Branding Smite", "Beacon of Hope", "Earthquake", "Heroism"],
					times : 5
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "zeal spells" }],
	savetxt : {immune : ["charmed", "frightened", "paralyzed", "poisoned", "stunned"]},
		weaponsAdd : ["Zeal"],
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*zeal).*$/i,
			name : "Zeal",
			source : ["GH", 138],
			description : "Versatile (1d10)",
			modifiers : [3, 3]
		},
	},	
MagicItemsList["ring of truth"] = {
	name : "Ring of Truth",
	nameTest :  /^(?=.*ring)(?=.*truth).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "ring",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "",
	allowDuplicates : false,
	description : "While attuned to this ring, the wearer continually emits an aura identical to the effects of the zone of truth spell. The zone affects a 15-foot-radius sphere centered on the wearer.",
	descriptionLong : "This golden band is stamped with images of smiling humanoid faces. While attuned to this ring, the wearer continually emits an aura identical to the effects of the zone of truth spell. The zone affects a 15-foot-radius sphere centered on the wearer.",
	},	
MagicItemsList["humble frock"] = {
	name : "Humble Frock",
	nameTest :  /^(?=.*humble)(?=.*frock).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "ring",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Seraph",
	allowDuplicates : false,
	description : "While wearing the frock and no other armor or clothing, a seraph automatically succeeds on checks to conceal their divine appearance.",
	descriptionLong : "This rough spawn frock is weather-worn and full of holes. While wearing the frock and no other armor or clothing, a seraph automatically succeeds on checks to conceal their divine appearance.",
	},	
MagicItemsList["ectoplasmic whip"] = {
	name : "Ectoplasmic Whip",
	nameTest :  /^(?=.*ectoplasmic)(?=.*whip).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "weapon (whip)",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Spectre",
	allowDuplicates : false,
	description : "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The whip is invisible to non-undead creatures. You have advantage on attacks made with the whip against creatures who cannot perceive it.",
	descriptionLong : "This whip is made of silver plasma that seems to phase in and out of reality. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The whip is invisible to non-undead creatures. You have advantage on attacks made with the whip against creatures who cannot perceive it.",
	weaponsAdd : ["Ectoplasmic Whip"],
		weaponOptions : {
			baseWeapon : "whip",
			regExpSearch : /^(?=.*ectoplasmic)(?=.*whip).*$/i,
			name : "Ectoplasmic Whip",
			source : ["GH", 138],
			description : "Finesse, reach",
			modifiers : [1, 1]
		},
	},	
MagicItemsList["banshee box"] = {
	name : "Banshee Box",
	nameTest :  /^(?=.*banshee)(?=.*box).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Spectre",
	allowDuplicates : false,
	description : "When a creature attuned to the box opens the lid, they can mentally command the box to make a sound of their choosing.",
	descriptionLong : "This ivory music box is inlaid with silver decorations depicting tiny scenes of gruesome violence. When a creature attuned to the box opens the lid, they can mentally command the box to make a sound of their choosing. Once the lid is open, the sound continues to play until the box is closed. If the attuned user closes the lid then opens it again, they can mentally command the box to play a different sound. If the attuned user travels more than 300 feet away from the box, the lid closes and the music box ceases to play. The box can create any soundscape, like haunting piano music, the sounds of a lively party, or a continuous series of screams. When the box is opened, the user can choose whether the sound is audible in a sphere with a 5-foot radius, a 30-foot radius, or a 120-foot radius.",
	},		
MagicItemsList["wand of the poltergeist"] = {
	name : "Wand of the Poltergeist",
	nameTest :  /^(?=.*wand)(?=.*poltergeist).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "wand",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Spectre",
	allowDuplicates : false,
	description : "The wand has 7 charges, which are used to fuel the spells within it. With the wand in hand, you can use your action to cast one of the following spells from the wand. The DC for these spells is equal to your Transformation DC: shatter (1 charge), animate objects (4 charges), or major image (3 charges).",
	descriptionLong : "This wand is a swirl of dark and white wood topped with a carved screaming skull. The wand has 7 charges, which are used to fuel the spells within it. With the wand in hand, you can use your action to cast one of the following spells from the wand. The DC for these spells is equal to your Transformation DC: shatter (1 charge), animate objects (4 charges), or major image (3 charges). No components are required. The wand regains 1d6 + 1 expended charges each day at dusk. If you expend the wand’s last charge, roll a d20. On a 20, the wand explodes into splinters and is destroyed.",
	extraname : "poltergeist Spells",
			"poltergeist spells" : {
				name : "Poltergeist Spells",
				source : ["GH", 138],
				description : "\n   " + "As an action, I can cast Shatter, Animate Objects, Major Image.",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Poltergeist Spells",
					fixedDC : 17,
					spells : ["Shatter", "Animate Objects", "Major Image"],
					selection : ["Shatter", "Animate Objects", "Major Image"],
					times : 3
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "poltergeist spells" }],
	},	
MagicItemsList["mortal coil"] = {
	name : "Mortal Coil",
	nameTest :  /^(?=.*mortal)(?=.*coil).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "ring",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a Spectre",
	allowDuplicates : false,
	description : "While a spectre wears this ring, they can use a bonus action to become completely corporeal.",
	descriptionLong : "This ring is composed of hundreds of rose gold wires woven to coil around the finger. While a spectre wears this ring, they can use a bonus action to become completely corporeal. While in this corporeal state, they do not register as undead to any magical effects and can interact with the material world as a typical humanoid. While in a corporeal state, the spectre loses all benefits of their transformation. A spectre can use a bonus action to return to their true form.",
	action : ["bonus action", "Become Corporeal"],
	},	
MagicItemsList["sun shades"] = {
	name : "Sun Shades",
	nameTest :  /^(?=.*sun)(?=.*shades).*$/i,
	source : ["GH", 138],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "While wearing these dark lenses, you do not have disadvantage on attack rolls and ability checks made while in sunlight.",
	descriptionLong : "These black leather goggles are set with cloudy glass that completely obscure the eyes of the wearer. While wearing these dark lenses, you do not have disadvantage on attack rolls and ability checks made while in sunlight. You also cannot see in complete darkness while wearing the shades, even if you have darkvision.",
	},	
MagicItemsList["blood capsule"] = {
	name : "Blood Capsule",
	nameTest :  /^(?=.*blood)(?=.*capsule).*$/i,
	source : ["GH", 139],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "Humanoid blood stored in the blood capsule remains fresh for up to one year. The flask stores enough blood to sustain a vampire for one day.",
	descriptionLong : "This cylindrical flask is etched with necrotic runes. Humanoid blood stored in the blood capsule remains fresh for up to one year. The flask stores enough blood to sustain a vampire for one day.",
	},	
MagicItemsList["light drinker"] = {
	name : "Light Drinker",
	nameTest :  /^(?=.*light)(?=.*drinker).*$/i,
	source : ["GH", 139],
	defaultExcluded : false,
	type : "weapon (longsword)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "",
	allowDuplicates : false,
	description : "You gain a +2 bonus to attack and damage rolls made with this weapon, which deals cold damage instead of slashing damage. While attuned to the sword, you gain darkvision to 60 feet and can see in magical darkness.",
	descriptionLong : "This sword’s hilt and blade are forged of a single piece of black metal that seems to absorb the light around it. You gain a +2 bonus to attack and damage rolls made with this weapon, which deals cold damage instead of slashing damage. While attuned to the sword, you gain darkvision to 60 feet and can see in magical darkness. As a bonus action, you can cause the sword to emit magical darkness in a 15-foot radius and dim light for an additional 15 feet. While the darkness is active, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each. Darkness created by this sword can only be suppressed by an antimagic field.",
	action : ["bonus action", "Emit Darkness"],
	weaponsAdd : ["Light Drinker"],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*light)(?=.*drinker).*$/i,
			name : "Light Drinker",
			source : ["GH", 139],
			description : "Versatile (1d10)",
			modifiers : [2, 2]
		},
	},
MagicItemsList["angelskin armor"] = {
	name : "Angelskin Armor",
	nameTest :  /^(?=.*angelskin)(?=.*armor).*$/i,
	source : ["GH", 139],
	defaultExcluded : false,
	type : "armor (leather)",
	rarity : "rare",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "While wearing the armor, you are immune to bludgeoning, piercing, and slashing damage from nonmagical attacks. This includes attacks from nonmagical wooden or silvered weapons.",
	descriptionLong : "This leather armor is made from the flayed flesh of angels. While wearing the armor, you are immune to bludgeoning, piercing, and slashing damage from nonmagical attacks. This includes attacks from nonmagical wooden or silvered weapons. Any celestial that sees this armor becomes immediately hostile against the wearer.",
	armorAdd : "Angelskin Armor",
		armorOptions: {
			regExpSearch: /^(?=.*angelskin)(?=.*armor).*$/i,
			name : "Angelskin Armor",
			source : ["GH", 139],
			stealthdis : true,
			ac : 11,
			weight : 4
		},
	},			
MagicItemsList["watcher's candle"] = {
	name : "Watcher's Candle",
	nameTest :  /^(?=.*watchers)(?=.*candle).*$/i,
	source : ["GH", 140],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "When a celestial, fiend, undead, or fey comes within 120 feet of the candle, it lights and burns with a purple flame.",
	descriptionLong : "This black tapered candle cannot be lit. When a celestial, fiend, undead, or fey comes within 120 feet of the candle, it lights and burns with a purple flame. Once the candle has caught flame, it burns for one hour, and it cannot be used again. Watcher’s candles cannot function if they are wrapped in packaging or stowed in a container.",
	},	
MagicItemsList["seeing glass"] = {
	name : "Seeing Glass",
	nameTest :  /^(?=.*seeing)(?=.*glass).*$/i,
	source : ["GH", 140],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "very rare",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "The mirror’s reflection always shows the true form of any creature viewed in it as if it were seen by the truesight spell.",
	descriptionLong : "This ornate silver hand mirror is decorated with a motif of withered roses. The mirror’s reflection always shows the true form of any creature viewed in it as if it were seen by the truesight spell. You can see invisible creatures, the true form of shapechanger, and the true faces of creatures attempting to disguise their hideous appearance. If the seeing glass is turned upon a vampire, the glass immediately shatters and is destroyed.",
	},		
MagicItemsList["stitching needle"] = {
	name : "Stitching Needle",
	nameTest :  /^(?=.*stitching)(?=.*needle).*$/i,
	source : ["GH", 140],
	defaultExcluded : false,
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "If a creature’s mouth is sewn shut with a stitching needle, it loses the ability to speak or cast spells with verbal components. The creature gains the ability to communicate with telepathy out to a range of 60 feet.",
	descriptionLong : "This black iron needle easily pierces the skin. If a creature’s mouth is sewn shut with a stitching needle, it loses the ability to speak or cast spells with verbal components. The creature gains the ability to communicate with telepathy out to a range of 60 feet. A creature you speak to in this manner does not need to share a language with you to communicate, but it must be able to understand at least one language. A creature without telepathy can receive and respond to messages but can’t initiate a conversation with you. Stitching the mouth of a willing, unconscious, or incapacitated creature takes 10 minutes. Removing the stitches takes 1 minute.",
	},		
MagicItemsList["hunter's mutagen"] = {
	name : "Hunter's Mutagen",
	nameTest :  /^(?=.*hunters)(?=.*mutagen).*$/i,
	source : ["GH", 140],
	defaultExcluded : false,
	type : "potion",
	rarity : "rare",
	notLegalAL : true,
	attunement : false,
	prerequisite : "",
	allowDuplicates : false,
	description : "When you drink this potion, you are immune to poison and disease for one hour. You also cannot contract curses like lycanthropy or mummy rot for the duration.",
	descriptionLong : "This glowing green liquid sends a creature’s antibodies into a hyperactive state. When you drink this potion, you are immune to poison and disease for one hour. You also cannot contract curses like lycanthropy or mummy rot for the duration. At the end of the hour, you gain one level of exhaustion.",
	};		
