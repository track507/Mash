var iFileName = "VSoS_MagicItems.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// ! This section adds magic items

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

// * Bag of bones Necromancer 
MagicItemsList["bag of bones"] = {
    name: "Bag of Bones",
    source: ["VSoS", 131],
    type: "wondrous item",
    rarity: "none",
    attunement: false,
    description: "Use an action to place a corpse or willing Undead creature into an extradimensional space connected to the bag; up to 10 Medium or smaller corpses/creatures. Use an action to dump the contents of the bag within 5 feet of me. This bag is destroyed if placed in another extradimensional space.",
    descriptionLong: "Use an action to place a corpse or willing Undead creature into an extradimensional space connected to the bag; up to 10 Medium or smaller corpses/creatures. Use an action to dump the contents of the bag within 5 feet of me. This bag violently expels anything other than corpses/bones/undead creatures placed into it. This bag is destroyed if placed in another extradimensional space. Its contents remain in the same extradimensional space until I create a new bag.",
    descriptionFull: "The bag connects to a vast extradimensional space that can only hold Medium or smaller corpses, bones, and Undead creatures; it violently expels anything else placed within it. You can use an action to place a corpse or willing Undead creature into the bag, up to a maximum of ten corpses or Undead creatures, or use your action to dump the contents of the bag, which land in spaces within 5 feet of you. You can transform any container you can carry into a bag of bones by performing a special ritual over the course of 1 hour while you hold it. This container ceases to be magical if you perform this ritual again to create a new bag of bones. The container always connects to the same extradimensional space. If the bag is placed inside an extradimensional space, such as that created by a bag of holding, it is destroyed. Its contents remain in the same extradimensional space until you create a new bag.",
    action: [["action", " (add item)"], ["action", " (dump contents)"]]
};
