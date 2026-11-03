var iFileName = "VSoS_Weapons.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
	SourceList["VSoS"] = {
		name: "Valda's Spire of Secrets",
		abbreviation: "VSoS",
		abbreviationSpellsheet: "V",
		date: "2022/12/30", // ! Updated as of 12-30-2022 (Version 1.4)
	};
}

// ! This section adds weapons

/*

"off-hand" or "secondary" for "two-weapon fighting"
Following properties get this feature:
    - Blaster
    - Loading
    - Reload
    - Thrown

TODO: Need to create a function that loops through each weapon with one of these properties and add "off-hand" to it
*/

RunFunctionAtEnd(function () {
	for (var weapon in WeaponsList) {
		// If it has one of the following, it is considered to have the off-hand, two-weapon property
		var aRegExp = /(blaster|loading|reload|thrown)/i;
		// The weapon object
		var weaObj = WeaponsList[weapon];

		// Check whether one of the attributes is found
		if (aRegExp.test(weaObj.name + weaObj.description)) {
			// skip if this is not a firearm and if it's not a light weapon
			if (!/firearms?/i.test(weaObj.list) && !/light/i.test(weaObj.description)) continue;
			// If "off-hand" or "secondary" isn't already included in the name or description, add it to the description.
			if (/^(?!.*(spell|cantrip))(?=.*(off.{0,3}hand|secondary))(?=.*\-\d+\s?dmg)(?=.*\(min\.\s?1\)).*$/i.test(weaObj.name + weaObj.description))
				continue;
			weaObj.description += (weaObj.description ? ", " : "") + "off-hand -2 dmg (min. 1)";
		}
	}
});

WeaponsList["bomb"] = {
	regExpSearch: /^(?!.*renaissance)(?=.*\bbomb\b).*$/i,
	name: "Bomb",
	source: [
		["VSoS", 294],
		["VSoS", 29],
	],
	list: "ranged",
	ability: 1,
	dc: true,
	type: "Exotic",
	damage: [1, 10, "fire"],
	range: "30/90 ft",
	weight: 1,
	description: "Finesse, special, DC 11 Dex save or \u00BD dmg to all in 7.5 ft; See tool tip",
	tooltip:
		"   Special: When a bomb hits a target, it explodes in a 5-foot radius and is destroyed. The bomb can be thrown at an unoccupied space within its range. Each creature other than the target within the blast radius must succeed on a DC 11 Dexterity saving throw, taking half the damage rolled on a failed save or no damage on a successful one.\n   Additionally, as a bonus action, you can empty some of the bomb's explosive material to permanently remove the blast radius from this bomb, dealing damage only to the bomb's target.",
	special: true,
	abilitytodamage: true,
};
// * Simple weapons
WeaponsList["cestus"] = {
	regExpSearch: /cestus/i,
	name: "Cestus",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 4, "bludgeoning"],
	range: "Melee",
	weight: 2,
	description: "Fist, light",
	tooltip: "Fist: Attacks made with this weapon are treated as unarmed strikes",
	abilitytodamage: true,
	monkweapon: true,
	baseWeapon: "unarmed strike",
};
WeaponsList["claw gauntlet"] = {
	regExpSearch: /claw gauntlet/i,
	name: "Claw Gauntlet",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 4, "slashing"],
	range: "Melee",
	weight: 2,
	description: "Fist, light",
	tooltip: "Fist: Attacks made with this weapon are treated as unarmed strikes",
	abilitytodamage: true,
	monkweapon: true,
	baseWeapon: "unarmed strike",
};
WeaponsList["fishhook"] = {
	regExpSearch: /fishhook/i,
	name: "Fishhook",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 6, "piercing"],
	range: "Melee",
	weight: 3,
	description: "Versatile (1d8)",
	abilitytodamage: true,
	monkweapon: true,
};
WeaponsList["hook hand"] = {
	regExpSearch: /hook hand/i,
	name: "Hook Hand",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 4, "piercing"],
	range: "Melee",
	weight: 1,
	description: "Finesse, light, special",
	tooltip:
		"Special: A creature must be missing a hand to use this weapon. If a creature replaces their missing hand with their weapon, they're considered always proficient.",
	isAlwaysProf: true,
	special: true,
	abilitytodamage: true,
	monkweapon: true,
};
WeaponsList["kama"] = {
	regExpSearch: /^(?=.*kama)(?!.*kusarigama).*$/i,
	name: "Kama",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 4, "slashing"],
	range: "Melee",
	weight: 2,
	description: "Finesse, light",
	abilitytodamage: true,
	monkweapon: true,
};
WeaponsList["machete"] = {
	regExpSearch: /machete/i,
	name: "Machete",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 6, "Slashing"],
	range: "Melee",
	weight: 4,
	description: "Special",
	tooltip: "Special: Deals double damage to Plants and vegetation",
	special: true,
	abilitytodamage: true,
	monkweapon: true,
};
WeaponsList["pickaxe"] = {
	regExpSearch: /pickaxe/i,
	name: "Pickaxe",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 8, "piercing"],
	range: "Melee",
	weight: 10,
	description: "Two-handed",
	abilitytodamage: true,
};
WeaponsList["punching dagger"] = {
	regExpSearch: /punching dagger/i,
	name: "Punching Dagger",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 4, "piercing"],
	range: "Melee",
	weight: 2,
	description: "Fist, light",
	abilitytodamage: true,
	monkweapon: true,
};
WeaponsList["sai"] = {
	regExpSearch: /sai/i,
	name: "Sai",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 4, "piercing"],
	range: "Melee",
	weight: 2,
	description: "Finesse, light",
	abilitytodamage: true,
	monkweapon: true,
};
WeaponsList["scorpion on a stick"] = {
	regExpSearch: /scorpion on a stick/i,
	name: "Scorpion on a Stick",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 6, "poison"],
	range: "Melee",
	weight: 0.5,
	description: "",
	abilitytodamage: true,
	monkweapon: true,
};
WeaponsList["shovel"] = {
	regExpSearch: /shovel/i,
	name: "Shovel",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 8, "slashing"],
	range: "Melee",
	weight: 5,
	description: "Two-handed",
	abilitytodamage: true,
};
WeaponsList["tonfa"] = {
	regExpSearch: /tonfa/i,
	name: "Tonfa",
	source: ["VSoS", 292],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 4, "bludgeoning"],
	range: "Melee",
	weight: 1,
	description: "Light",
	abilitytodamage: true,
	monkweapon: true,
};
// * Martial Weapons
WeaponsList["bayonet"] = {
	regExpSearch: /bayonet/i,
	name: "Bayonet",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 4, "piercing"],
	range: "Melee",
	weight: 1,
	description: "Finesse, light, special",
	tooltip:
		"Special: As an action, a bayonet can be mounted to any two-handed ranged weapon or removed from it. While mounted, you can use the bayonet to make a two-handed melee weapon attack, which deals 1d8 piercing damage on a hit.",
	special: true,
	abilitytodamage: true,
};
WeaponsList["catchpole"] = {
	regExpSearch: /catchpole/i,
	name: "Catchpole",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 6, "piercing"],
	range: "Melee",
	weight: 6,
	description: "Reach, two-handed, special",
	tooltip:
		"Special: This weapon is used to immobilize creatures at a distance. When you hit a creature of Large size or smaller with this weapon, you can attempt to grapple the creature instead of dealing damage. This grapple check uses your attack roll instead of a Strength (Athletics) check. If I grapple a creature this way, I can't use this weapon on another target.",
	special: true,
	abilitytodamage: true,
};
WeaponsList["cutlass"] = {
	regExpSearch: /cutlass/i,
	name: "Cutlass",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 8, "slashing"],
	range: "Melee",
	weight: 2,
	description: "Finesse",
	abilitytodamage: true,
};
WeaponsList["estoc"] = {
	regExpSearch: /estoc/i,
	name: "Estoc",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 8, "piercing"],
	range: "Melee",
	weight: 3,
	description: "Versatile (1d10)",
	abilitytodamage: true,
};
WeaponsList["harpoon"] = {
	regExpSearch: /harpoon/i,
	name: "Harpoon",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 8, "piercing"],
	range: "Melee, 20/60 ft",
	weight: 4,
	description: "Thrown, special",
	tooltip:
		"You can use an action to tie a rope to the end of a harpoon before it is thrown. If a rope-tied harpoon hits a target, it becomes embedded in the target, and you can use an action on subsequent turns to hold fast to the rope and make an opposed Strength (Athletics) check against the target to pull it up to 10 feet closer to you. Additionally, when the target moves, you can use your reaction to make an opposed Strength (Athletics) check against it, preventing its movement on a success. If you use your action to do anything else, you lose your grip on the rope. If the target has hands, it can remove the harpoon as an action.",
	special: true,
	abilitytodamage: true,
};
WeaponsList["katana"] = {
	regExpSearch: /katana/i,
	name: "Katana",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 8, "slashing"],
	range: "Melee",
	weight: 3,
	description: "Finesse, versatile (1d10)",
	abilitytodamage: true,
};
WeaponsList["khopesh"] = {
	regExpSearch: /khopesh/i,
	name: "Khopesh",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 6, "slashing"],
	range: "Melee",
	weight: 4,
	description: "Fiensse, light, trip",
	tooltip:
		"Trip: You can attempt a shove against any creature within the weapon's reach. IYou have advantage on ability checks you make to shove a creature using this weapon.",
	abilitytodamage: true,
};
WeaponsList["naginata"] = {
	regExpSearch: /naginata/i,
	name: "Naginata",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 10, "slashing"],
	range: "Melee",
	weight: 5,
	description: "Heavy, reach, two-handed",
	abilitytodamage: true,
};
WeaponsList["nunchaku"] = {
	regExpSearch: /nunchaku/i,
	name: "Nunchaku",
	source: ["VSoS", 293],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [1, 6, "bludgeoning"],
	range: "Melee",
	weight: 1,
	description: "Finesse, light",
	abilitytodamage: true,
};
WeaponsList["arc blade"] = {
	regExpSearch: /^(?=.*arc)(?=.*blade).*$/i,
	name: "Arc Blade",
	source: ["VSoS", 330],
	list: "spell",
	ability: 0,
	type: "Cantrip",
	damage: ["Bd8/Cd6", "", "lightning"],
	range: "With melee wea",
	description: "Wea dmg is Ltng; 1st dmg added to the atk; 2nd to a tgt within 5 ft on hit",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["burning blade"] = {
	regExpSearch: /^(?=.*burning)(?=.*blade).*$/i,
	name: "Burning Blade",
	source: ["VSoS", 331],
	list: "spell",
	ability: 0,
	type: "Cantrip",
	damage: ["Bd6/Cd6", "", "fire"],
	range: "With melee wea",
	description: "Wea dmg is Fire; 1st dmg added to the atk; 2nd as rea when tgt enters/ends in space",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["candy blast"] = {
	regExpSearch: /candy blast/i,
	name: "Candy Blast",
	source: ["VSoS", 332],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "bludgeoning"],
	range: "60 ft",
	description: "On hit, target space becomes difficult terrain; 1 action to clear",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["card trick"] = {
	regExpSearch: /card trick/i,
	name: "Card Trick",
	source: ["VSoS", 332],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "force"],
	range: "60 ft",
	description: "Choose: spell attack, or target Dex save vs. spell save DC",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["caustic blade"] = {
	regExpSearch: /caustic blade/i,
	name: "Caustic Blade",
	source: ["VSoS", 332],
	list: "spell",
	ability: 0,
	type: "Cantrip",
	damage: ["Bd8/Cd8", "", "acid"],
	range: "With melee wea",
	description: "Wea dmg is Acid; 1st dmg on hit, 2nd on miss by 3 or less",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["eldritch orb"] = {
	regExpSearch: /eldritch orb/i,
	name: "Eldritch Orb",
	source: ["VSoS", 337],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "force"],
	range: "60 ft",
	description: "On hit, crea in 5 ft Dex save; success: nothing, fail: half dmg",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["eye of anubis"] = {
	regExpSearch: /eye of anubis/i,
	name: "Eye of Anubis",
	source: ["VSoS", 337],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "necrotic"],
	range: "60 ft",
	description: "On hit, tgt can't Disengage til end of my next turn; see spell or book for scaling",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["eye of ra"] = {
	regExpSearch: /eye of ra/i,
	name: "Eye of Ra",
	source: ["VSoS", 338],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "radiant"],
	range: "60 ft",
	description: "On hit, tgt can't Hide til end of my next turn; see spell or book for scaling",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["finger guns"] = {
	regExpSearch: /finger guns/i,
	name: "Finger Guns",
	source: ["VSoS", 338],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "force"],
	range: "60 ft",
	description: "1 action to attack for 1 minute; counts as firearm",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["flesh ripper"] = {
	regExpSearch: /flesh ripper/i,
	name: "Flesh Ripper",
	source: ["VSoS", 338],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "piercing"],
	range: "30 ft",
	description: "On hit, target can't move more than 30 ft away from me without a Str save",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["force dart"] = {
	regExpSearch: /force dart/i,
	name: "Force Dart",
	source: ["VSoS", 339],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 10, "force"],
	range: "120 ft",
	description: "Can target creatures or objects",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["force weapon"] = {
	regExpSearch: /force weapon/i,
	name: "Force Weapon",
	source: ["VSoS", 339],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 10, "Force"],
	range: "5 ft",
	description: "Can also make 1 opportunity attack before next turn; scaling adds atks, not dmg",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["frigid blade"] = {
	regExpSearch: /frigid blade/i,
	name: "Frigid Blade",
	source: ["VSoS", 340],
	list: "spell",
	ability: 0,
	type: "Cantrip",
	damage: ["Bd8/Cd8", "", "cold"],
	range: "With melee wea",
	description: "Wea dmg is Cold; 1st dmg add to atk; 2nd as rea to tgt if it moves before my next turn",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["lightning surge"] = {
	regExpSearch: /lightning surge/i,
	name: "Lightning Surge",
	source: ["VSoS", 347],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "lightning"],
	range: "S:5-ft rad",
	description: "Crea in range Dex save; success: nothing",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["magic daggers"] = {
	regExpSearch: /magic daggers/i,
	name: "Magic Daggers",
	source: ["VSoS", 348],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "piercing"],
	range: "60 ft",
	description: "Each die is a separate dagger; scaling adds attacks, not dmg",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["minor lifesteal"] = {
	regExpSearch: /minor lifesteal/i,
	name: "Minor Lifesteal",
	source: ["VSoS", 349],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 4, "necrotic"],
	range: "60 ft",
	description: "Con save, success: nothing; fail: I gain damage dealt as Temporary HP",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["sonic pulse"] = {
	regExpSearch: /sonic pulse/i,
	name: "Sonic Pulse",
	source: ["VSoS", 354],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "thunder"],
	range: "60 ft",
	description: "Con save, fail: deafened until my next turn; within 10 ft, d10s instead of d8s",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["spark of life"] = {
	regExpSearch: /spark of life/i,
	name: "Spark of Life",
	source: ["VSoS", 354],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["Special", "", "bludgeoning"],
	range: "60 ft",
	description: "Corpse in range moves up to 15 ft and attack for 1d4/1d6/1d8/1d10/1d12 dmg; see book",
	abilitytodamage: false,
	dc: false,
};
WeaponsList["thunderous distortion"] = {
	regExpSearch: /thunderous distortion/i,
	name: "Thunderous Distortion",
	source: ["VSoS", 355],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "thunder"],
	range: "S:10-ft cone",
	description: "Crea in area Con save; cast again next turn for d8s instead of d6s",
	abilitytodamage: false,
	dc: true,
};
