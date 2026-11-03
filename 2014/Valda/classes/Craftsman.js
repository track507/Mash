if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// * Craftsman - Masterwork Weapon Properties Options
var WeaponSlots = ["A", "B", "C", "D", "E"];
var MasterworkWeaponPropertyOptions = [
	"Apprentice: Aerodynamic",
	"Apprentice: Automatic",
	"Apprentice: Balanced",
	"Apprentice: Concealable",
	"Apprentice: Elegant",
	"Apprentice: Exotic",
	"Apprentice: Extended Magazine",
	"Apprentice: Finesse",
	"Apprentice: Firearm",
	"Apprentice: Fist",
	"Apprentice: Foregrip",
	"Apprentice: Heavy",
	"Apprentice: Light",
	"Apprentice: Loading",
	"Apprentice: Martial",
	"Apprentice: Parrying",
	"Apprentice: Reach",
	"Apprentice: Reload",
	"Apprentice: Returning",
	"Apprentice: Scatter",
	"Apprentice: Sighted",
	"Apprentice: Superheavy",
	"Apprentice: Switch",
	"Apprentice: Thrown",
	"Apprentice: Trip",
	"Apprentice: Two-handed",
	"Apprentice: Versatile",
	"Journeyman: Counterweighted",
	"Journeyman: Double",
	"Journeyman: Explosive",
	"Journeyman: Heat",
	"Journeyman: Magical",
	"Journeyman: Massive",
	"Journeyman: Mounted",
	"Journeyman: Precision",
	"Journeyman: Rocket",
	"Journeyman: Sniper",
	"Journeyman: Tension",
	"Journeyman: Twinshot",
	"Master: Adamantine",
	"Master: Blessed",
	"Master: Earthshatter",
	"Master: Elemental (Acid)",
	"Master: Elemental (Cold)",
	"Master: Elemental (Fire)",
	"Master: Elemental (Lightning)",
	"Master: Elemental (Thunder)",
	"Master: Keen",
	"Master: Magical",
	"Master: Mithral",
	"Master: Serrated",
	"Master: Slaying (Aberrations)",
	"Master: Slaying (Beasts)",
	"Master: Slaying (Celestials)",
	"Master: Slaying (Constructs)",
	"Master: Slaying (Dragons)",
	"Master: Slaying (Elementals)",
	"Master: Slaying (Fey)",
	"Master: Slaying (Fiends)",
	"Master: Slaying (Giants)",
	"Master: Slaying (Monstrosities)",
	"Master: Slaying (Oozes)",
	"Master: Slaying (Plants)",
	"Master: Slaying (Undead)",
	"Master: Vampiric",
	"Master: Venom",
	"Legendary: Crushing",
	"Legendary: Deadly",
	"Legendary: Magical",
	"Legendary: Penetrating",
	"Legendary: Seeking",
	"Legendary: Threatening",
	"Legendary: Vorpal",
	"Legendary: Whirlwind",
];

var MasterworkWeaponChoices = GenerateMasterworkWeaponOptions();

function GenerateMasterworkWeaponOptions() {
	var options = [];
	for (var i = 0; i < WeaponSlots.length; ++i) {
		for (var o = 0; o < MasterworkWeaponPropertyOptions.length; ++o) {
			options.push(
				MasterworkWeaponPropertyOptions[o] + " " + WeaponSlots[i]
			);
		}
	}
	return options;
}

var MasterworkWeaponProperties = {
	// Weapon Slot A
	aerodynamicA: {
		name: "Apprentice: Aerodynamic A",
		source: ["VSoS", 78],
		submenu: "Weapon Slot A",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticA: {
		name: "Apprentice: Automatic A",
		source: ["VSoS", 78],
		submenu: "Weapon Slot A",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedA: {
		name: "Apprentice: Balanced A",
		source: ["VSoS", 78],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableA: {
		name: "Apprentice: Concealable A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantA: {
		name: "Apprentice: Elegant A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticA: {
		name: "Apprentice: Exotic A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagA: {
		name: "Apprentice: Extended Magazine A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseA: {
		name: "Apprentice: Finesse A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmA: {
		name: "Apprentice: Firearm A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"A"
					);
				},
			],
		},
	},
	fistA: {
		name: "Apprentice: Fist A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripA: {
		name: "Apprentice: Foregrip A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyA: {
		name: "Apprentice: Heavy A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightA: {
		name: "Apprentice: Light A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingA: {
		name: "Apprentice: Loading A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialA: {
		name: "Apprentice: Martial A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingA: {
		name: "Apprentice: Parrying A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachA: {
		name: "Apprentice: Reach A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadA: {
		name: "Apprentice: Reload A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReload" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningA: {
		name: "Apprentice: Returning A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterA: {
		name: "Apprentice: Scatter A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedA: {
		name: "Apprentice: Sighted A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyA: {
		name: "Apprentice: Superheavy A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchA: {
		name: "Apprentice: Switch A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownA: {
		name: "Apprentice: Thrown A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripA: {
		name: "Apprentice: Trip A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedA: {
		name: "Apprentice: Two-handed A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileA: {
		name: "Apprentice: Versatile A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedA: {
		name: "Journeyman: Counterweighted A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Two-handed",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Counterweighted A/.exec(What("Extra.Notes")))
			);
		},
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleA: {
		name: "Journeyman: Double A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Melee, no Heavy",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Double A/.exec(What("Extra.Notes")))
			);
		},
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveA: {
		name: "Journeyman: Explosive A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Explosive A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatA: {
		name: "Journeyman: Heat A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Heat A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalA: {
		name: "Journeyman: Magical A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				103,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"A"
					);
				},
				"",
				103,
			],
		},
	},
	massiveA: {
		name: "Journeyman: Massive A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Massive A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedA: {
		name: "Journeyman: Mounted A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Mounted A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionA: {
		name: "Journeyman: Precision A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Precision A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketA: {
		name: "Journeyman: Rocket A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Rocket A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperA: {
		name: "Journeyman: Sniper A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Sniper A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionA: {
		name: "Journeyman: Tension A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Tension A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotA: {
		name: "Journeyman: Twinshot A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Twinshot A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineA: {
		name: "Master: Adamantine A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Adamantine A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedA: {
		name: "Master: Blessed A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Blessed A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterA: {
		name: "Master: Earthshatter A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Earthshatter A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidA: {
		name: "Master: Elemental (Acid) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "A", "Acid");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldA: {
		name: "Master: Elemental (Cold) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Cold\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "A", "Cold");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireA: {
		name: "Master: Elemental (Fire) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Fire\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "A", "Fire");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningA: {
		name: "Master: Elemental (Lightning) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Lightning\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"A",
						"Lightning"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderA: {
		name: "Master: Elemental (Thunder) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Thunder\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"A",
						"Thunder"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenA: {
		name: "Master: Keen A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Keen A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalA: {
		name: "Master: Magical A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Master: Magical A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"A"
					);
				},
				"",
				102,
			],
		},
	},
	mithralA: {
		name: "Master: Mithral A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Mithral A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedA: {
		name: "Master: Serrated A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Serrated A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialA: {
		name: "Master: Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationA: {
		name: "Master: Aberration Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Aberration Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"aberrations"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastA: {
		name: "Master: Beast Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Beast Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "beasts");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialA: {
		name: "Master: Celestial Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Celestial Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"celestials"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructA: {
		name: "Master: Construct Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Construct Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"constructs"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonA: {
		name: "Master: Dragon Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Dragon Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"dragons"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalA: {
		name: "Master: Elemental Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Elemental Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"elementals"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyA: {
		name: "Master: Fey Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Fey Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "fey");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendA: {
		name: "Master: Fiend Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Fiend Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "fiends");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantA: {
		name: "Master: Giant Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Giant Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "giants");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityA: {
		name: "Master: Monstrosity Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"monstrosities"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeA: {
		name: "Master: Ooze Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Ooze Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "oozes");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantA: {
		name: "Master: Plant Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Plant Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "plants");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadA: {
		name: "Master: Undead Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Undead Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "undead");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricA: {
		name: "Master: Vampiric A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Vampiric A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomA: {
		name: "Master: Venom A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Venom A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingA: {
		name: "Legendary: Crushing A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Crushing A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyA: {
		name: "Legendary: Deadly A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Deadly A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"A"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalA: {
		name: "Legendary: Magical A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Legendary: Magical A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"A"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingA: {
		name: "Legendary: Penetrating A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Penetrating A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingA: {
		name: "Legendary: Seeking A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Seeking A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningA: {
		name: "Legendary: Threatening A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Threatening A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalA: {
		name: "Legendary: Vorpal A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Vorpal A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindA: {
		name: "Legendary: Whirlwind A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Whirlwind A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon A)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot B
	aerodynamicB: {
		name: "Apprentice: Aerodynamic B",
		source: ["VSoS", 78],
		submenu: "Weapon Slot B",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticB: {
		name: "Apprentice: Automatic B",
		source: ["VSoS", 78],
		submenu: "Weapon Slot B",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedB: {
		name: "Apprentice: Balanced B",
		source: ["VSoS", 78],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableB: {
		name: "Apprentice: Concealable B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantB: {
		name: "Apprentice: Elegant B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticB: {
		name: "Apprentice: Exotic B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagB: {
		name: "Apprentice: Extended Magazine B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseB: {
		name: "Apprentice: Finesse B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmB: {
		name: "Apprentice: Firearm B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"B"
					);
				},
			],
		},
	},
	fistB: {
		name: "Apprentice: Fist B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripB: {
		name: "Apprentice: Foregrip B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyB: {
		name: "Apprentice: Heavy B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightB: {
		name: "Apprentice: Light B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingB: {
		name: "Apprentice: Loading B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialB: {
		name: "Apprentice: Martial B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingB: {
		name: "Apprentice: Parrying B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachB: {
		name: "Apprentice: Reach B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadB: {
		name: "Apprentice: Reload B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningB: {
		name: "Apprentice: Returning B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterB: {
		name: "Apprentice: Scatter B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedB: {
		name: "Apprentice: Sighted B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyB: {
		name: "Apprentice: Superheavy B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchB: {
		name: "Apprentice: Switch B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownB: {
		name: "Apprentice: Thrown B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripB: {
		name: "Apprentice: Trip B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedB: {
		name: "Apprentice: Two-handed B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileB: {
		name: "Apprentice: Versatile B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedB: {
		name: "Journeyman: Counterweighted B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Counterweighted B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleB: {
		name: "Journeyman: Double B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Double B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveB: {
		name: "Journeyman: Explosive B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Explosive B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatB: {
		name: "Journeyman: Heat B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Heat B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalB: {
		name: "Journeyman: Magical B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"B"
					);
				},
				"",
				102,
			],
		},
	},
	massiveB: {
		name: "Journeyman: Massive B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Massive B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedB: {
		name: "Journeyman: Mounted B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Mounted B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionB: {
		name: "Journeyman: Precision B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Precision B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketB: {
		name: "Journeyman: Rocket B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Rocket B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperB: {
		name: "Journeyman: Sniper B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Sniper B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionB: {
		name: "Journeyman: Tension B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Tension B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotB: {
		name: "Journeyman: Twinshot B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Twinshot B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineB: {
		name: "Master: Adamantine B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Adamantine B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedB: {
		name: "Master: Blessed B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Blessed B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterB: {
		name: "Master: Earthshatter B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Earthshatter B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidB: {
		name: "Master: Elemental (Acid) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "B", "Acid");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldB: {
		name: "Master: Elemental (Cold) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Cold\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "B", "Cold");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireB: {
		name: "Master: Elemental (Fire) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Fire\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "B", "Fire");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningB: {
		name: "Master: Elemental (Lightning) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Lightning\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"B",
						"Lightning"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderB: {
		name: "Master: Elemental (Thunder) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Thunder\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"B",
						"Thunder"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenB: {
		name: "Master: Keen B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Keen B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalB: {
		name: "Master: Magical B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Master: Magical B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"B"
					);
				},
				"",
				102,
			],
		},
	},
	mithralB: {
		name: "Master: Mithral B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Mithral B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedB: {
		name: "Master: Serrated B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Serrated B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialB: {
		name: "Master: Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationB: {
		name: "Master: Aberration Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Aberration Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"aberrations"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastB: {
		name: "Master: Beast Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Beast Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "beasts");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialB: {
		name: "Master: Celestial Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Celestial Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"celestials"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructB: {
		name: "Master: Construct Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Construct Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"constructs"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonB: {
		name: "Master: Dragon Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Dragon Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"dragons"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalB: {
		name: "Master: Elemental Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Elemental Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"elementals"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyB: {
		name: "Master: Fey Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Fey Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "fey");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendB: {
		name: "Master: Fiend Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Fiend Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "fiends");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantB: {
		name: "Master: Giant Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Giant Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "giants");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityB: {
		name: "Master: Monstrosity Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"monstrosities"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeB: {
		name: "Master: Ooze Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Ooze Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "oozes");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantB: {
		name: "Master: Plant Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Plant Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "plants");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadB: {
		name: "Master: Undead Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Undead Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "undead");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricB: {
		name: "Master: Vampiric B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Vampiric B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomB: {
		name: "Master: Venom B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Venom B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingB: {
		name: "Legendary: Crushing B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Crushing B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyB: {
		name: "Legendary: Deadly B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Deadly B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"B"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalB: {
		name: "Legendary: Magical B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Legendary: Magical B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"B"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingB: {
		name: "Legendary: Penetrating B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Penetrating B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingB: {
		name: "Legendary: Seeking B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Seeking B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningB: {
		name: "Legendary: Threatening B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Threatening B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalB: {
		name: "Legendary: Vorpal B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Vorpal B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindB: {
		name: "Legendary: Whirlwind B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Whirlwind B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon B)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot C
	aerodynamicC: {
		name: "Apprentice: Aerodynamic C",
		source: ["VSoS", 78],
		submenu: "Weapon Slot C",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticC: {
		name: "Apprentice: Automatic C",
		source: ["VSoS", 78],
		submenu: "Weapon Slot C",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedC: {
		name: "Apprentice: Balanced C",
		source: ["VSoS", 78],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableC: {
		name: "Apprentice: Concealable C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantC: {
		name: "Apprentice: Elegant C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticC: {
		name: "Apprentice: Exotic C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagC: {
		name: "Apprentice: Extended Magazine C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseC: {
		name: "Apprentice: Finesse C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmC: {
		name: "Apprentice: Firearm C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"C"
					);
				},
			],
		},
	},
	fistC: {
		name: "Apprentice: Fist C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripC: {
		name: "Apprentice: Foregrip C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyC: {
		name: "Apprentice: Heavy C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightC: {
		name: "Apprentice: Light C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingC: {
		name: "Apprentice: Loading C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialC: {
		name: "Apprentice: Martial C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingC: {
		name: "Apprentice: Parrying C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachC: {
		name: "Apprentice: Reach C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadC: {
		name: "Apprentice: Reload C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningC: {
		name: "Apprentice: Returning C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterC: {
		name: "Apprentice: Scatter C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedC: {
		name: "Apprentice: Sighted C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyC: {
		name: "Apprentice: Superheavy C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchC: {
		name: "Apprentice: Switch C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownC: {
		name: "Apprentice: Thrown C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripC: {
		name: "Apprentice: Trip C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedC: {
		name: "Apprentice: Two-handed C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileC: {
		name: "Apprentice: Versatile C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedC: {
		name: "Journeyman: Counterweighted C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Counterweighted C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleC: {
		name: "Journeyman: Double C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Double C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveC: {
		name: "Journeyman: Explosive C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Explosive C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatC: {
		name: "Journeyman: Heat C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Heat C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalC: {
		name: "Journeyman: Magical C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"C"
					);
				},
				"",
				102,
			],
		},
	},
	massiveC: {
		name: "Journeyman: Massive C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Massive C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedC: {
		name: "Journeyman: Mounted C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Mounted C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionC: {
		name: "Journeyman: Precision C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Precision C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketC: {
		name: "Journeyman: Rocket C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Rocket C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperC: {
		name: "Journeyman: Sniper C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Sniper C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionC: {
		name: "Journeyman: Tension C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Tension C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotC: {
		name: "Journeyman: Twinshot C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Twinshot C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineC: {
		name: "Master: Adamantine C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Adamantine C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedC: {
		name: "Master: Blessed C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Blessed C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterC: {
		name: "Master: Earthshatter C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Earthshatter C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidC: {
		name: "Master: Elemental (Acid) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "C", "Acid");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldC: {
		name: "Master: Elemental (Cold) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Cold\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "C", "Cold");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireC: {
		name: "Master: Elemental (Fire) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Fire\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "C", "Fire");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningC: {
		name: "Master: Elemental (Lightning) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Lightning\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"C",
						"Lightning"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderC: {
		name: "Master: Elemental (Thunder) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Thunder\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"C",
						"Thunder"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenC: {
		name: "Master: Keen C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Keen C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalC: {
		name: "Master: Magical C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Master: Magical C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"C"
					);
				},
				"",
				102,
			],
		},
	},
	mithralC: {
		name: "Master: Mithral C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Mithral C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedC: {
		name: "Master: Serrated C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Serrated C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialC: {
		name: "Master: Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationC: {
		name: "Master: Aberration Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Aberration Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"aberrations"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastC: {
		name: "Master: Beast Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Beast Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "beasts");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialC: {
		name: "Master: Celestial Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Celestial Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"celestials"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingDragonC: {
		name: "Master: Dragon Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Dragon Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"dragons"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingConstructC: {
		name: "Master: Construct Slaying CA",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Construct Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"constructs"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingElementalC: {
		name: "Master: Elemental Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Elemental Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"elementals"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyC: {
		name: "Master: Fey Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Fey Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "fey");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendC: {
		name: "Master: Fiend Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Fiend Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "fiends");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantC: {
		name: "Master: Giant Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Giant Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "giants");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityC: {
		name: "Master: Monstrosity Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"monstrosities"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeC: {
		name: "Master: Ooze Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Ooze Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "oozes");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantC: {
		name: "Master: Plant Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Plant Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "plants");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadC: {
		name: "Master: Undead Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Undead Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "undead");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricC: {
		name: "Master: Vampiric C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Vampiric C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomC: {
		name: "Master: Venom C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Venom C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingC: {
		name: "Legendary: Crushing C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Crushing C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyC: {
		name: "Legendary: Deadly C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Deadly C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"C"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalC: {
		name: "Legendary: Magical C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Legendary: Magical C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"C"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingC: {
		name: "Legendary: Penetrating C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Penetrating C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingC: {
		name: "Legendary: Seeking C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Seeking C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningC: {
		name: "Legendary: Threatening C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Threatening C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalC: {
		name: "Legendary: Vorpal C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Vorpal C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindC: {
		name: "Legendary: Whirlwind C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Whirlwind C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon C)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot D
	aerodynamicD: {
		name: "Apprentice: Aerodynamic D",
		source: ["VSoS", 78],
		submenu: "Weapon Slot D",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticD: {
		name: "Apprentice: Automatic D",
		source: ["VSoS", 78],
		submenu: "Weapon Slot D",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedD: {
		name: "Apprentice: Balanced D",
		source: ["VSoS", 78],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableD: {
		name: "Apprentice: Concealable D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantD: {
		name: "Apprentice: Elegant D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticD: {
		name: "Apprentice: Exotic D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagD: {
		name: "Apprentice: Extended Magazine D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseD: {
		name: "Apprentice: Finesse D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmD: {
		name: "Apprentice: Firearm D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"D"
					);
				},
			],
		},
	},
	fistD: {
		name: "Apprentice: Fist D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripD: {
		name: "Apprentice: Foregrip D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyD: {
		name: "Apprentice: Heavy D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightD: {
		name: "Apprentice: Light D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingD: {
		name: "Apprentice: Loading D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialD: {
		name: "Apprentice: Martial D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingD: {
		name: "Apprentice: Parrying D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachD: {
		name: "Apprentice: Reach D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadD: {
		name: "Apprentice: Reload D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningD: {
		name: "Apprentice: Returning D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterD: {
		name: "Apprentice: Scatter D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedD: {
		name: "Apprentice: Sighted D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyD: {
		name: "Apprentice: Superheavy D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchD: {
		name: "Apprentice: Switch D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownD: {
		name: "Apprentice: Thrown D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripD: {
		name: "Apprentice: Trip D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedD: {
		name: "Apprentice: Two-handed D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileD: {
		name: "Apprentice: Versatile D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedD: {
		name: "Journeyman: Counterweighted D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Counterweighted D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleD: {
		name: "Journeyman: Double D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Double D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveD: {
		name: "Journeyman: Explosive D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Explosive D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatD: {
		name: "Journeyman: Heat D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Heat D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalD: {
		name: "Journeyman: Magical D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"D"
					);
				},
				"",
				102,
			],
		},
	},
	massiveD: {
		name: "Journeyman: Massive D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Massive D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedD: {
		name: "Journeyman: Mounted D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Mounted D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionD: {
		name: "Journeyman: Precision D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Precision D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketD: {
		name: "Journeyman: Rocket D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Rocket D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperD: {
		name: "Journeyman: Sniper D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Sniper D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionD: {
		name: "Journeyman: Tension D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Tension D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotD: {
		name: "Journeyman: Twinshot D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Twinshot D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineD: {
		name: "Master: Adamantine D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Adamantine D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedD: {
		name: "Master: Blessed D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Blessed D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterD: {
		name: "Master: Earthshatter D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Earthshatter D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidD: {
		name: "Master: Elemental (Acid) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "D", "Acid");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldD: {
		name: "Master: Elemental (Cold) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Cold\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "D", "Cold");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireD: {
		name: "Master: Elemental (Fire) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Fire\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "D", "Fire");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningD: {
		name: "Master: Elemental (Lightning) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Lightning\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"D",
						"Lightning"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderD: {
		name: "Master: Elemental (Thunder) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Thunder\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"D",
						"Thunder"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenD: {
		name: "Master: Keen D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Keen D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalD: {
		name: "Master: Magical D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Master: Magical D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"D"
					);
				},
				"",
				102,
			],
		},
	},
	mithralD: {
		name: "Master: Mithral D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Mithral D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedD: {
		name: "Master: Serrated D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Serrated D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialD: {
		name: "Master: Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationD: {
		name: "Master: Aberration Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Aberration Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"aberrations"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastD: {
		name: "Master: Beast Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Beast Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "beasts");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialD: {
		name: "Master: Celestial Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Celestial Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"celestials"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructD: {
		name: "Master: Construct Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Construct Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"constructs"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonD: {
		name: "Master: Dragon Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Dragon Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"dragons"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalD: {
		name: "Master: Elemental Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Elemental Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"elementals"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyD: {
		name: "Master: Fey Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Fey Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "fey");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendD: {
		name: "Master: Fiend Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Fiend Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "fiends");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantD: {
		name: "Master: Giant Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Giant Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "giants");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityD: {
		name: "Master: Monstrosity Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"monstrosities"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeD: {
		name: "Master: Ooze Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Ooze Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "oozes");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantD: {
		name: "Master: Plant Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Plant Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "plants");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadD: {
		name: "Master: Undead Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Undead Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "undead");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricD: {
		name: "Master: Vampiric D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Vampiric D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomD: {
		name: "Master: Venom D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Venom D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingD: {
		name: "Legendary: Crushing D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Crushing D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyD: {
		name: "Legendary: Deadly D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Deadly D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"D"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalD: {
		name: "Legendary: Magical D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Legendary: Magical D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"D"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingD: {
		name: "Legendary: Penetrating D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Penetrating D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingD: {
		name: "Legendary: Seeking D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Seeking D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningD: {
		name: "Legendary: Threatening D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Threatening D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalD: {
		name: "Legendary: Vorpal D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Vorpal D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindD: {
		name: "Legendary: Whirlwind D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 1 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Whirlwind D/.exec(What("Extra.Notes")))
			);
			7;
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon D)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot E
	aerodynamicE: {
		name: "Apprentice: Aerodynamic E",
		source: ["VSoS", 78],
		submenu: "Weapon Slot E",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticE: {
		name: "Apprentice: Automatic E",
		source: ["VSoS", 78],
		submenu: "Weapon Slot E",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedE: {
		name: "Apprentice: Balanced E",
		source: ["VSoS", 78],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableE: {
		name: "Apprentice: Concealable E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantE: {
		name: "Apprentice: Elegant E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticE: {
		name: "Apprentice: Exotic E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagE: {
		name: "Apprentice: Extended Magazine E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseE: {
		name: "Apprentice: Finesse E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmE: {
		name: "Apprentice: Firearm E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"E"
					);
				},
			],
		},
	},
	fistE: {
		name: "Apprentice: Fist E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripE: {
		name: "Apprentice: Foregrip E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyE: {
		name: "Apprentice: Heavy E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightE: {
		name: "Apprentice: Light E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingE: {
		name: "Apprentice: Loading E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialE: {
		name: "Apprentice: Martial E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingE: {
		name: "Apprentice: Parrying E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachE: {
		name: "Apprentice: Reach E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadE: {
		name: "Apprentice: Reload E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningE: {
		name: "Apprentice: Returning E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterE: {
		name: "Apprentice: Scatter E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedE: {
		name: "Apprentice: Sighted E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyE: {
		name: "Apprentice: Superheavy E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchE: {
		name: "Apprentice: Switch E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownE: {
		name: "Apprentice: Thrown E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripE: {
		name: "Apprentice: Trip E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedE: {
		name: "Apprentice: Two-handed E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileE: {
		name: "Apprentice: Versatile E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedE: {
		name: "Journeyman: Counterweighted E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Counterweighted E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleE: {
		name: "Journeyman: Double E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Double E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveE: {
		name: "Journeyman: Explosive E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Explosive E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatE: {
		name: "Journeyman: Heat E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Heat E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalE: {
		name: "Journeyman: Magical E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"E"
					);
				},
				"",
				102,
			],
		},
	},
	massiveE: {
		name: "Journeyman: Massive E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Massive E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedE: {
		name: "Journeyman: Mounted E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Mounted E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionE: {
		name: "Journeyman: Precision E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Precision E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketE: {
		name: "Journeyman: Rocket E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Rocket E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperE: {
		name: "Journeyman: Sniper E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Sniper E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionE: {
		name: "Journeyman: Tension E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Tension E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotE: {
		name: "Journeyman: Twinshot E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Twinshot E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineE: {
		name: "Master: Adamantine E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Adamantine E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedE: {
		name: "Master: Blessed E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Blessed E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterE: {
		name: "Master: Earthshatter E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Earthshatter E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidE: {
		name: "Master: Elemental (Acid) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "E", "Acid");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldE: {
		name: "Master: Elemental (Cold) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Cold\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "E", "Cold");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireE: {
		name: "Master: Elemental (Fire) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Fire\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "E", "Fire");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningE: {
		name: "Master: Elemental (Lightning) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Lightning\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"E",
						"Lightning"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderE: {
		name: "Master: Elemental (Thunder) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Thunder\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"E",
						"Thunder"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenE: {
		name: "Master: Keen E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Keen E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalE: {
		name: "Master: Magical E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Master: Magical E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"E"
					);
				},
				"",
				102,
			],
		},
	},
	mithralE: {
		name: "Master: Mithral E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Mithral E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedE: {
		name: "Master: Serrated E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Serrated E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialE: {
		name: "Master: Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationE: {
		name: "Master: Aberration Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Aberration Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"aberrations"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastE: {
		name: "Master: Beast Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Beast Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "beasts");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialE: {
		name: "Master: Celestial Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Celestial Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"celestials"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructE: {
		name: "Master: Construct Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Construct Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"constructs"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonE: {
		name: "Master: Dragon Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Dragon Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"dragons"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalE: {
		name: "Master: Elemental Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Elemental Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"elementals"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyE: {
		name: "Master: Fey Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Fey Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "fey");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendE: {
		name: "Master: Fiend Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Fiend Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "fiends");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantE: {
		name: "Master: Giant Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Giant Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "giants");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityE: {
		name: "Master: Monstrosity Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"monstrosities"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeE: {
		name: "Master: Ooze Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Ooze Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "oozes");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantE: {
		name: "Master: Plant Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Plant Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "plants");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadE: {
		name: "Master: Undead Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Undead Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "undead");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricE: {
		name: "Master: Vampiric E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Vampiric E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomE: {
		name: "Master: Venom E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Venom E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingE: {
		name: "Legendary: Crushing E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Crushing E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyE: {
		name: "Legendary: Deadly E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Deadly E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"E"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalE: {
		name: "Legendary: Magical E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Legendary: Magical E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"E"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingE: {
		name: "Legendary: Penetrating E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Penetrating E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingE: {
		name: "Legendary: Seeking E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Seeking E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningE: {
		name: "Legendary: Threatening E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Threatening E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalE: {
		name: "Legendary: Vorpal E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Vorpal E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindE: {
		name: "Legendary: Whirlwind E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Whirlwind E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon E)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},
};

var MasterworkWeaponProperties = {
	// Weapon Slot A
	aerodynamicA: {
		name: "Apprentice: Aerodynamic A",
		source: ["VSoS", 78],
		submenu: "Weapon Slot A",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticA: {
		name: "Apprentice: Automatic A",
		source: ["VSoS", 78],
		submenu: "Weapon Slot A",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedA: {
		name: "Apprentice: Balanced A",
		source: ["VSoS", 78],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableA: {
		name: "Apprentice: Concealable A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantA: {
		name: "Apprentice: Elegant A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticA: {
		name: "Apprentice: Exotic A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagA: {
		name: "Apprentice: Extended Magazine A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseA: {
		name: "Apprentice: Finesse A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmA: {
		name: "Apprentice: Firearm A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"A"
					);
				},
			],
		},
	},
	fistA: {
		name: "Apprentice: Fist A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripA: {
		name: "Apprentice: Foregrip A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyA: {
		name: "Apprentice: Heavy A",
		source: ["VSoS", 79],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightA: {
		name: "Apprentice: Light A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingA: {
		name: "Apprentice: Loading A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialA: {
		name: "Apprentice: Martial A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingA: {
		name: "Apprentice: Parrying A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachA: {
		name: "Apprentice: Reach A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadA: {
		name: "Apprentice: Reload A",
		source: ["VSoS", 80],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReload" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningA: {
		name: "Apprentice: Returning A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterA: {
		name: "Apprentice: Scatter A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedA: {
		name: "Apprentice: Sighted A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyA: {
		name: "Apprentice: Superheavy A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchA: {
		name: "Apprentice: Switch A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownA: {
		name: "Apprentice: Thrown A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripA: {
		name: "Apprentice: Trip A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedA: {
		name: "Apprentice: Two-handed A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileA: {
		name: "Apprentice: Versatile A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedA: {
		name: "Journeyman: Counterweighted A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Two-handed",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Counterweighted A/.exec(What("Extra.Notes")))
			);
		},
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleA: {
		name: "Journeyman: Double A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		additional: "Prereq: Exotic, Melee, no Heavy",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Double A/.exec(What("Extra.Notes")))
			);
		},
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveA: {
		name: "Journeyman: Explosive A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Explosive A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatA: {
		name: "Journeyman: Heat A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Heat A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalA: {
		name: "Journeyman: Magical A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				103,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"A"
					);
				},
				"",
				103,
			],
		},
	},
	massiveA: {
		name: "Journeyman: Massive A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Massive A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedA: {
		name: "Journeyman: Mounted A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Mounted A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionA: {
		name: "Journeyman: Precision A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Precision A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketA: {
		name: "Journeyman: Rocket A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Rocket A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperA: {
		name: "Journeyman: Sniper A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Sniper A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionA: {
		name: "Journeyman: Tension A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Tension A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotA: {
		name: "Journeyman: Twinshot A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ A/.exec(What("Extra.Notes")) ||
					/Twinshot A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineA: {
		name: "Master: Adamantine A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Adamantine A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedA: {
		name: "Master: Blessed A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Blessed A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterA: {
		name: "Master: Earthshatter A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Earthshatter A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidA: {
		name: "Master: Elemental (Acid) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "A", "Acid");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldA: {
		name: "Master: Elemental (Cold) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Cold\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "A", "Cold");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireA: {
		name: "Master: Elemental (Fire) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Fire\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "A", "Fire");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningA: {
		name: "Master: Elemental (Lightning) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Lightning\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"A",
						"Lightning"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderA: {
		name: "Master: Elemental (Thunder) A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/\(Thunder\) A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"A",
						"Thunder"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenA: {
		name: "Master: Keen A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Keen A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalA: {
		name: "Master: Magical A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Master: Magical A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"A"
					);
				},
				"",
				102,
			],
		},
	},
	mithralA: {
		name: "Master: Mithral A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Mithral A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedA: {
		name: "Master: Serrated A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Serrated A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialA: {
		name: "Master: Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationA: {
		name: "Master: Aberration Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Aberration Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"aberrations"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastA: {
		name: "Master: Beast Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Beast Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "beasts");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialA: {
		name: "Master: Celestial Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Celestial Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"celestials"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructA: {
		name: "Master: Construct Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Construct Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"constructs"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonA: {
		name: "Master: Dragon Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Dragon Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"dragons"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalA: {
		name: "Master: Elemental Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Elemental Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"elementals"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyA: {
		name: "Master: Fey Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Fey Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "fey");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendA: {
		name: "Master: Fiend Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Fiend Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "fiends");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantA: {
		name: "Master: Giant Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Giant Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "giants");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityA: {
		name: "Master: Monstrosity Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"A",
						"monstrosities"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeA: {
		name: "Master: Ooze Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Ooze Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "oozes");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantA: {
		name: "Master: Plant Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Plant Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "plants");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadA: {
		name: "Master: Undead Slaying A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Undead Slaying A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "A", "undead");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricA: {
		name: "Master: Vampiric A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Vampiric A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomA: {
		name: "Master: Venom A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ A/.exec(What("Extra.Notes")) ||
					/Venom A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingA: {
		name: "Legendary: Crushing A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Crushing A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyA: {
		name: "Legendary: Deadly A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Deadly A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"A"
					);
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalA: {
		name: "Legendary: Magical A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Legendary: Magical A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"A"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingA: {
		name: "Legendary: Penetrating A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Penetrating A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingA: {
		name: "Legendary: Seeking A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Seeking A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningA: {
		name: "Legendary: Threatening A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Threatening A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalA: {
		name: "Legendary: Vorpal A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Vorpal A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindA: {
		name: "Legendary: Whirlwind A",
		source: ["VSoS", 81],
		submenu: "Weapon Slot A",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ A/.exec(What("Extra.Notes")) ||
					/Whirlwind A/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon A)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "A");
				},
				'If the letter "A" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot B
	aerodynamicB: {
		name: "Apprentice: Aerodynamic B",
		source: ["VSoS", 78],
		submenu: "Weapon Slot B",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticB: {
		name: "Apprentice: Automatic B",
		source: ["VSoS", 78],
		submenu: "Weapon Slot B",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedB: {
		name: "Apprentice: Balanced B",
		source: ["VSoS", 78],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableB: {
		name: "Apprentice: Concealable B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantB: {
		name: "Apprentice: Elegant B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticB: {
		name: "Apprentice: Exotic B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagB: {
		name: "Apprentice: Extended Magazine B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseB: {
		name: "Apprentice: Finesse B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmB: {
		name: "Apprentice: Firearm B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"B"
					);
				},
			],
		},
	},
	fistB: {
		name: "Apprentice: Fist B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripB: {
		name: "Apprentice: Foregrip B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyB: {
		name: "Apprentice: Heavy B",
		source: ["VSoS", 79],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightB: {
		name: "Apprentice: Light B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingB: {
		name: "Apprentice: Loading B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialB: {
		name: "Apprentice: Martial B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingB: {
		name: "Apprentice: Parrying B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachB: {
		name: "Apprentice: Reach B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadB: {
		name: "Apprentice: Reload B",
		source: ["VSoS", 80],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningB: {
		name: "Apprentice: Returning B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterB: {
		name: "Apprentice: Scatter B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedB: {
		name: "Apprentice: Sighted B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyB: {
		name: "Apprentice: Superheavy B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchB: {
		name: "Apprentice: Switch B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownB: {
		name: "Apprentice: Thrown B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripB: {
		name: "Apprentice: Trip B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedB: {
		name: "Apprentice: Two-handed B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileB: {
		name: "Apprentice: Versatile B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedB: {
		name: "Journeyman: Counterweighted B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Counterweighted B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleB: {
		name: "Journeyman: Double B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Double B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveB: {
		name: "Journeyman: Explosive B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Explosive B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatB: {
		name: "Journeyman: Heat B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Heat B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalB: {
		name: "Journeyman: Magical B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"B"
					);
				},
				"",
				102,
			],
		},
	},
	massiveB: {
		name: "Journeyman: Massive B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Massive B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedB: {
		name: "Journeyman: Mounted B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Mounted B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionB: {
		name: "Journeyman: Precision B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Precision B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketB: {
		name: "Journeyman: Rocket B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Rocket B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperB: {
		name: "Journeyman: Sniper B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Sniper B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionB: {
		name: "Journeyman: Tension B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Tension B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotB: {
		name: "Journeyman: Twinshot B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ B/.exec(What("Extra.Notes")) ||
					/Twinshot B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineB: {
		name: "Master: Adamantine B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Adamantine B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedB: {
		name: "Master: Blessed B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Blessed B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterB: {
		name: "Master: Earthshatter B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Earthshatter B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidB: {
		name: "Master: Elemental (Acid) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "B", "Acid");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldB: {
		name: "Master: Elemental (Cold) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Cold\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "B", "Cold");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireB: {
		name: "Master: Elemental (Fire) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Fire\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "B", "Fire");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningB: {
		name: "Master: Elemental (Lightning) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Lightning\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"B",
						"Lightning"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderB: {
		name: "Master: Elemental (Thunder) B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/\(Thunder\) B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"B",
						"Thunder"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenB: {
		name: "Master: Keen B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Keen B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalB: {
		name: "Master: Magical B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Master: Magical B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"B"
					);
				},
				"",
				102,
			],
		},
	},
	mithralB: {
		name: "Master: Mithral B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Mithral B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedB: {
		name: "Master: Serrated B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Serrated B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialB: {
		name: "Master: Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationB: {
		name: "Master: Aberration Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Aberration Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"aberrations"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastB: {
		name: "Master: Beast Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Beast Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "beasts");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialB: {
		name: "Master: Celestial Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Celestial Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"celestials"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructB: {
		name: "Master: Construct Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Construct Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"constructs"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonB: {
		name: "Master: Dragon Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Dragon Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"dragons"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalB: {
		name: "Master: Elemental Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Elemental Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"elementals"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyB: {
		name: "Master: Fey Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Fey Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "fey");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendB: {
		name: "Master: Fiend Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Fiend Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "fiends");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantB: {
		name: "Master: Giant Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Giant Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "giants");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityB: {
		name: "Master: Monstrosity Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"B",
						"monstrosities"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeB: {
		name: "Master: Ooze Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Ooze Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "oozes");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantB: {
		name: "Master: Plant Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Plant Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "plants");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadB: {
		name: "Master: Undead Slaying B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Undead Slaying B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "B", "undead");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricB: {
		name: "Master: Vampiric B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Vampiric B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomB: {
		name: "Master: Venom B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ B/.exec(What("Extra.Notes")) ||
					/Venom B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingB: {
		name: "Legendary: Crushing B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Crushing B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyB: {
		name: "Legendary: Deadly B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Deadly B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"B"
					);
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalB: {
		name: "Legendary: Magical B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Legendary: Magical B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"B"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingB: {
		name: "Legendary: Penetrating B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Penetrating B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingB: {
		name: "Legendary: Seeking B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Seeking B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningB: {
		name: "Legendary: Threatening B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Threatening B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalB: {
		name: "Legendary: Vorpal B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Vorpal B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindB: {
		name: "Legendary: Whirlwind B",
		source: ["VSoS", 81],
		submenu: "Weapon Slot B",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ B/.exec(What("Extra.Notes")) ||
					/Whirlwind B/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon B)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "B");
				},
				'If the letter "B" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot C
	aerodynamicC: {
		name: "Apprentice: Aerodynamic C",
		source: ["VSoS", 78],
		submenu: "Weapon Slot C",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticC: {
		name: "Apprentice: Automatic C",
		source: ["VSoS", 78],
		submenu: "Weapon Slot C",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedC: {
		name: "Apprentice: Balanced C",
		source: ["VSoS", 78],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableC: {
		name: "Apprentice: Concealable C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantC: {
		name: "Apprentice: Elegant C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticC: {
		name: "Apprentice: Exotic C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagC: {
		name: "Apprentice: Extended Magazine C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseC: {
		name: "Apprentice: Finesse C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmC: {
		name: "Apprentice: Firearm C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"C"
					);
				},
			],
		},
	},
	fistC: {
		name: "Apprentice: Fist C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripC: {
		name: "Apprentice: Foregrip C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyC: {
		name: "Apprentice: Heavy C",
		source: ["VSoS", 79],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightC: {
		name: "Apprentice: Light C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingC: {
		name: "Apprentice: Loading C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialC: {
		name: "Apprentice: Martial C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingC: {
		name: "Apprentice: Parrying C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachC: {
		name: "Apprentice: Reach C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadC: {
		name: "Apprentice: Reload C",
		source: ["VSoS", 80],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningC: {
		name: "Apprentice: Returning C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterC: {
		name: "Apprentice: Scatter C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedC: {
		name: "Apprentice: Sighted C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyC: {
		name: "Apprentice: Superheavy C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchC: {
		name: "Apprentice: Switch C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownC: {
		name: "Apprentice: Thrown C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripC: {
		name: "Apprentice: Trip C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedC: {
		name: "Apprentice: Two-handed C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileC: {
		name: "Apprentice: Versatile C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedC: {
		name: "Journeyman: Counterweighted C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Counterweighted C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleC: {
		name: "Journeyman: Double C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Double C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveC: {
		name: "Journeyman: Explosive C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Explosive C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatC: {
		name: "Journeyman: Heat C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Heat C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalC: {
		name: "Journeyman: Magical C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"C"
					);
				},
				"",
				102,
			],
		},
	},
	massiveC: {
		name: "Journeyman: Massive C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Massive C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedC: {
		name: "Journeyman: Mounted C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Mounted C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionC: {
		name: "Journeyman: Precision C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Precision C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketC: {
		name: "Journeyman: Rocket C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Rocket C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperC: {
		name: "Journeyman: Sniper C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Sniper C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionC: {
		name: "Journeyman: Tension C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Tension C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotC: {
		name: "Journeyman: Twinshot C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ C/.exec(What("Extra.Notes")) ||
					/Twinshot C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineC: {
		name: "Master: Adamantine C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Adamantine C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedC: {
		name: "Master: Blessed C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Blessed C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterC: {
		name: "Master: Earthshatter C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Earthshatter C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidC: {
		name: "Master: Elemental (Acid) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "C", "Acid");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldC: {
		name: "Master: Elemental (Cold) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Cold\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "C", "Cold");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireC: {
		name: "Master: Elemental (Fire) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Fire\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "C", "Fire");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningC: {
		name: "Master: Elemental (Lightning) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Lightning\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"C",
						"Lightning"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderC: {
		name: "Master: Elemental (Thunder) C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/\(Thunder\) C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"C",
						"Thunder"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenC: {
		name: "Master: Keen C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Keen C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalC: {
		name: "Master: Magical C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Master: Magical C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"C"
					);
				},
				"",
				102,
			],
		},
	},
	mithralC: {
		name: "Master: Mithral C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Mithral C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedC: {
		name: "Master: Serrated C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Serrated C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialC: {
		name: "Master: Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationC: {
		name: "Master: Aberration Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Aberration Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"aberrations"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastC: {
		name: "Master: Beast Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Beast Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "beasts");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialC: {
		name: "Master: Celestial Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Celestial Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"celestials"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingDragonC: {
		name: "Master: Dragon Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Dragon Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"dragons"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingConstructC: {
		name: "Master: Construct Slaying CA",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Construct Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"constructs"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingElementalC: {
		name: "Master: Elemental Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Elemental Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"elementals"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyC: {
		name: "Master: Fey Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Fey Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "fey");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendC: {
		name: "Master: Fiend Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Fiend Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "fiends");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantC: {
		name: "Master: Giant Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Giant Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "giants");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityC: {
		name: "Master: Monstrosity Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"C",
						"monstrosities"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeC: {
		name: "Master: Ooze Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Ooze Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "oozes");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantC: {
		name: "Master: Plant Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Plant Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "plants");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadC: {
		name: "Master: Undead Slaying C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Undead Slaying C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "C", "undead");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricC: {
		name: "Master: Vampiric C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Vampiric C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomC: {
		name: "Master: Venom C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ C/.exec(What("Extra.Notes")) ||
					/Venom C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingC: {
		name: "Legendary: Crushing C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Crushing C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyC: {
		name: "Legendary: Deadly C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Deadly C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"C"
					);
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalC: {
		name: "Legendary: Magical C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Legendary: Magical C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"C"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingC: {
		name: "Legendary: Penetrating C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Penetrating C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingC: {
		name: "Legendary: Seeking C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Seeking C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningC: {
		name: "Legendary: Threatening C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Threatening C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalC: {
		name: "Legendary: Vorpal C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Vorpal C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindC: {
		name: "Legendary: Whirlwind C",
		source: ["VSoS", 81],
		submenu: "Weapon Slot C",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ C/.exec(What("Extra.Notes")) ||
					/Whirlwind C/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon C)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "C");
				},
				'If the letter "C" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot D
	aerodynamicD: {
		name: "Apprentice: Aerodynamic D",
		source: ["VSoS", 78],
		submenu: "Weapon Slot D",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticD: {
		name: "Apprentice: Automatic D",
		source: ["VSoS", 78],
		submenu: "Weapon Slot D",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedD: {
		name: "Apprentice: Balanced D",
		source: ["VSoS", 78],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableD: {
		name: "Apprentice: Concealable D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantD: {
		name: "Apprentice: Elegant D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticD: {
		name: "Apprentice: Exotic D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagD: {
		name: "Apprentice: Extended Magazine D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseD: {
		name: "Apprentice: Finesse D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmD: {
		name: "Apprentice: Firearm D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"D"
					);
				},
			],
		},
	},
	fistD: {
		name: "Apprentice: Fist D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripD: {
		name: "Apprentice: Foregrip D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyD: {
		name: "Apprentice: Heavy D",
		source: ["VSoS", 79],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightD: {
		name: "Apprentice: Light D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingD: {
		name: "Apprentice: Loading D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialD: {
		name: "Apprentice: Martial D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingD: {
		name: "Apprentice: Parrying D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachD: {
		name: "Apprentice: Reach D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadD: {
		name: "Apprentice: Reload D",
		source: ["VSoS", 80],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningD: {
		name: "Apprentice: Returning D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterD: {
		name: "Apprentice: Scatter D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedD: {
		name: "Apprentice: Sighted D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyD: {
		name: "Apprentice: Superheavy D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchD: {
		name: "Apprentice: Switch D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownD: {
		name: "Apprentice: Thrown D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripD: {
		name: "Apprentice: Trip D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedD: {
		name: "Apprentice: Two-handed D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileD: {
		name: "Apprentice: Versatile D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedD: {
		name: "Journeyman: Counterweighted D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Counterweighted D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleD: {
		name: "Journeyman: Double D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Double D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveD: {
		name: "Journeyman: Explosive D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Explosive D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatD: {
		name: "Journeyman: Heat D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Heat D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalD: {
		name: "Journeyman: Magical D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"D"
					);
				},
				"",
				102,
			],
		},
	},
	massiveD: {
		name: "Journeyman: Massive D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Massive D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedD: {
		name: "Journeyman: Mounted D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Mounted D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionD: {
		name: "Journeyman: Precision D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Precision D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketD: {
		name: "Journeyman: Rocket D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Rocket D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperD: {
		name: "Journeyman: Sniper D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Sniper D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionD: {
		name: "Journeyman: Tension D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Tension D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotD: {
		name: "Journeyman: Twinshot D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ D/.exec(What("Extra.Notes")) ||
					/Twinshot D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineD: {
		name: "Master: Adamantine D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Adamantine D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedD: {
		name: "Master: Blessed D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Blessed D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterD: {
		name: "Master: Earthshatter D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Earthshatter D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidD: {
		name: "Master: Elemental (Acid) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "D", "Acid");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldD: {
		name: "Master: Elemental (Cold) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Cold\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "D", "Cold");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireD: {
		name: "Master: Elemental (Fire) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Fire\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "D", "Fire");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningD: {
		name: "Master: Elemental (Lightning) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Lightning\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"D",
						"Lightning"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderD: {
		name: "Master: Elemental (Thunder) D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/\(Thunder\) D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"D",
						"Thunder"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenD: {
		name: "Master: Keen D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Keen D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalD: {
		name: "Master: Magical D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Master: Magical D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"D"
					);
				},
				"",
				102,
			],
		},
	},
	mithralD: {
		name: "Master: Mithral D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Mithral D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedD: {
		name: "Master: Serrated D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Serrated D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialD: {
		name: "Master: Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationD: {
		name: "Master: Aberration Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Aberration Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"aberrations"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastD: {
		name: "Master: Beast Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Beast Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "beasts");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialD: {
		name: "Master: Celestial Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Celestial Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"celestials"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructD: {
		name: "Master: Construct Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Construct Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"constructs"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonD: {
		name: "Master: Dragon Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Dragon Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"dragons"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalD: {
		name: "Master: Elemental Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Elemental Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"elementals"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyD: {
		name: "Master: Fey Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Fey Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "fey");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendD: {
		name: "Master: Fiend Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Fiend Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "fiends");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantD: {
		name: "Master: Giant Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Giant Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "giants");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityD: {
		name: "Master: Monstrosity Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"D",
						"monstrosities"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeD: {
		name: "Master: Ooze Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Ooze Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "oozes");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantD: {
		name: "Master: Plant Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Plant Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "plants");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadD: {
		name: "Master: Undead Slaying D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Undead Slaying D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "D", "undead");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricD: {
		name: "Master: Vampiric D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Vampiric D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomD: {
		name: "Master: Venom D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ D/.exec(What("Extra.Notes")) ||
					/Venom D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingD: {
		name: "Legendary: Crushing D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Crushing D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyD: {
		name: "Legendary: Deadly D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Deadly D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"D"
					);
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalD: {
		name: "Legendary: Magical D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Legendary: Magical D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"D"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingD: {
		name: "Legendary: Penetrating D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Penetrating D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingD: {
		name: "Legendary: Seeking D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Seeking D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningD: {
		name: "Legendary: Threatening D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Threatening D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalD: {
		name: "Legendary: Vorpal D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Vorpal D/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindD: {
		name: "Legendary: Whirlwind D",
		source: ["VSoS", 81],
		submenu: "Weapon Slot D",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 1 &&
				(!/Legendary: .+ D/.exec(What("Extra.Notes")) ||
					/Whirlwind D/.exec(What("Extra.Notes")))
			);
			7;
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon D)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "D");
				},
				'If the letter "D" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},

	// Weapon Slot E
	aerodynamicE: {
		name: "Apprentice: Aerodynamic E",
		source: ["VSoS", 78],
		submenu: "Weapon Slot E",
		additional: "Prereq: Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAerodynamic(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork thrown weapon attack, it gains a +40 ft bonus to its thrown range.',
				101,
			],
		},
	},
	automaticE: {
		name: "Apprentice: Automatic E",
		source: ["VSoS", 78],
		submenu: "Weapon Slot E",
		additional: "Prereq: Ranged, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAutomatic(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack, it gains the Automatic property, its damage dice decrease one step, and its range is reduced by 20 feet.',
				104,
			],
		},
	},
	balancedE: {
		name: "Apprentice: Balanced E",
		source: ["VSoS", 78],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBalanced(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork heavy exotic weapon attack, it loses the Heavy property.',
				103,
			],
		},
	},
	concealableE: {
		name: "Apprentice: Concealable E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddConcealable(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork light exotic weapon attack, it gains the Concealable property.',
				102,
			],
		},
	},
	elegantE: {
		name: "Apprentice: Elegant E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic Light Melee OR Exotic Light Thrown Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElegant(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork light exotic weapon attack OR masterwork exotic light thrown ranged weapon attack, it gains the Elegant property, and its damage dice increase 1 step.',
				103,
			],
		},
	},
	exoticE: {
		name: "Apprentice: Exotic E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExotic(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial weapon attack, it becomes an Exotic weapon & its damage dice increase 1 step.',
				101,
			],
		},
	},
	extendedmagE: {
		name: "Apprentice: Extended Magazine E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExtendedMag(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic weapon attack with reload, its reload capacity doubles.',
				104,
			],
		},
	},
	finesseE: {
		name: "Apprentice: Finesse E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee with no Two-handed OR Ranged Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFinesse(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee weapon attack without two-handed OR a masterwork ranged weapon with thrown, he gains the finesse property.',
				101,
			],
		},
	},
	firearmE: {
		name: "Apprentice: Firearm E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Ranged, Loading/Reload, no Tension",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFirearm(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with loading/reload and without Tension, it becomes a firearm, its damage dice increase 4 steps, and its dice amount increase to 2 if possible.',
				105,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddFirearmRemoveAbilityModToDamage(
						fields,
						v,
						output,
						"E"
					);
				},
			],
		},
	},
	fistE: {
		name: "Apprentice: Fist E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee, Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddFist(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork light melee weapon attack, it gains the Fist property.',
				102,
			],
		},
	},
	foregripE: {
		name: "Apprentice: Foregrip E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq Ranged, Ammunition, no Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddForegrip(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with Ammunition and without Two-handed, it gains the Fist property.',
				101,
			],
		},
	},
	heavyE: {
		name: "Apprentice: Heavy E",
		source: ["VSoS", 79],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Two-handed, no Double",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeavy(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic two-handed weapon attack without Double, it gains the Heavy property. If the weapon is a melee weapon, its damage dice incease 1 step.',
				102,
			],
		},
	},
	lightE: {
		name: "Apprentice: Light E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: no Two-handed/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLight(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork weapon attack without Two-handed or Versatile, it gains the Light property; its damage dice decrease 1 step.',
				101,
			],
		},
	},
	loadingE: {
		name: "Apprentice: Loading E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq Ranged, Ammunition, no Reload",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddLoading(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with Ammunition and not Reload, it gains the Loading property & its damage dice increase 1 step.',
				104,
			],
		},
	},
	martialE: {
		name: "Apprentice: Martial E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Simple",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMartial(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork simple weapon attack, it becomes a martial weapon & its damage dice increase 1 step.',
				100,
			],
		},
	},
	parryingE: {
		name: "Apprentice: Parrying E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic, Melee, Finesse/Light",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddParrying(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, it gains the Parrying property & its damage dice decrease 1 step.',
				102,
			],
		},
		extraAC: [
			{
				mod: 1,
				name: "Parrying Weapon",
				text: "While wielding a masterwork weapon with the Parrying property and no shield, I gain a +1 bonus to my AC.",
				stopeval: function (v) {
					return v.usingShield;
				},
			},
		],
	},
	reachE: {
		name: "Apprentice: Reach E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Melee, Finesse/Two-Handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReach(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic melee weapon attack with Finesse/Two-handed, it gains the Reach property & its damage dice decrease 1 step.',
				102,
			],
		},
	},
	reloadE: {
		name: "Apprentice: Reload E",
		source: ["VSoS", 80],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Loading",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReload(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition and not Loading, it gains the Reload(5) property. If the word "LongReach" is also included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition, Mounted, and not Loading, it gains the Reload(1; 2 actions) property, and its damage dice increase 5 steps.',
				103,
			],
		},
	},
	returningE: {
		name: "Apprentice: Returning E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Light, Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddReturning(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic weapon attack with Light & Thrown, it gains the returning property.',
				102,
			],
		},
	},
	scatterE: {
		name: "Apprentice: Scatter E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Ranged, Ammunition, Two-Handed, no Sighted",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddScatter(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork ranged weapon attack with Ammunition, Two-handed and not Sighted, it gains the Scatter property; its damage dice decrease by 1 step, its scatter damage increases by 2 steps, its normal range is reduced by 70 feet, and its long range is 3 times its normal range.',
				103,
			],
		},
	},
	sightedE: {
		name: "Apprentice: Sighted E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSighted(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack with Ammunition & not Scatter, it gains the sighted property, and its normal range increases by 50 feet.',
				103,
			],
		},
	},
	superheavyE: {
		name: "Apprentice: Superheavy E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Exotic, Melee, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSuperheavy(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				103,
			],
		},
	},
	switchE: {
		name: "Apprentice: Switch E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: 2 Exotic weapons",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSwitch(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, it gains the superheavy property and its damage dice increase by 1 step.',
				102,
			],
		},
	},
	thrownE: {
		name: "Apprentice: Thrown E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee, no Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThrown(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee weapon attack without Two-handed, it gains the thrown(20/60) property.',
				100,
			],
		},
	},
	tripE: {
		name: "Apprentice: Trip E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Martial/Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTrip(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee/exotic weapon attack, it gains the Trip property.',
				102,
			],
		},
	},
	twohandedE: {
		name: "Apprentice: Two-handed E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: no Finesse/Foregrip/Light/Thrown/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwohanded(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork weapon attack without Finesse, Foregrip, Light, Thrown, or Versatile, it gains the two-handed property and its damage dice increase 1 step. If the weapon is ranged, its normal range increases by 50 feet.',
				100,
			],
		},
	},
	versatileE: {
		name: "Apprentice: Versatile E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		additional: "Prereq: Melee, no Light/Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVersatile(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork melee weapon attack without Light or Two-handed, it gains the versatile property. While being held in two hands, this weapon\'s damage dice increase 1 step.',
				100,
			],
		},
	},
	counterweightedE: {
		name: "Journeyman: Counterweighted E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Counterweighted E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Two-handed",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCounterweighted(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic two-handed weapon attack, this weapon can be wielded in one hand, as long as you don\'t have a weapon in your other hand.',
				102,
			],
		},
	},
	doubleE: {
		name: "Journeyman: Double E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Double E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, no Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddDouble(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack that is not Heavy, this weapon gains the Double property and its damage die decreases by one step.',
				103,
			],
		},
	},
	explosiveE: {
		name: "Journeyman: Explosive E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Explosive E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddExplosive(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack, this weapon gains the Explosive property and its damage die decreases by one step. If this weapon deals bludgeoning, piercing, or slashing damage, it deals fire damage instead.',
				102,
			],
		},
	},
	heatE: {
		name: "Journeyman: Heat E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Heat E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddHeat(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged firearm attack, this weapon gains the Heat property and its damage die increases by one step.',
				106,
			],
		},
	},
	journeymanmagicalE: {
		name: "Journeyman: Magical E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Journeyman: Magical E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"E"
					);
				},
				"",
				102,
			],
		},
	},
	massiveE: {
		name: "Journeyman: Massive E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Massive E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Superheavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMassive(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack that is Superheavy, this weapon gains the Massive property, and its damage dice increase by 2 steps.',
				104,
			],
		},
	},
	mountedE: {
		name: "Journeyman: Mounted E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Mounted E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Martial/Exotic, Ranged, Heavy",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMounted(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork martial/exotic ranged weapon attack that is Heavy, this weapon gains the Mounted property, and its damage dice increase by 2 steps.',
				103,
			],
		},
	},
	precisionE: {
		name: "Journeyman: Precision E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Precision E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPrecision(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack with Finesse, this weapon gains the Precision property.',
				103,
			],
		},
	},
	rocketE: {
		name: "Journeyman: Rocket E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Rocket E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddRocket(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon gains the Rocket property.',
				103,
			],
		},
	},
	sniperE: {
		name: "Journeyman: Sniper E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Sniper E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Ammunition, no Scatter",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSniper(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack with Ammunition and not Scatter, this weapon\'s long range becomes 8 times its normal range.',
				103,
			],
		},
	},
	tensionE: {
		name: "Journeyman: Tension E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Tension E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, no Firearm/Thrown",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTension(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack without Firearm or Thrown, this weapon gains the Tension property.',
				106,
			],
		},
	},
	twinshotE: {
		name: "Journeyman: Twinshot E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 5 &&
				(!/Journeyman: .+ E/.exec(What("Extra.Notes")) ||
					/Twinshot E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddTwinshot(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Twinshot property.',
				102,
			],
		},
	},
	adamantineE: {
		name: "Master: Adamantine E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Adamantine E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Heavy/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddAdamantine(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack with Heavy or Versatile, this weapon\'s damage dice increase 2 steps, and it deals double damage to objects and structures.',
				103,
			],
		},
	},
	blessedE: {
		name: "Master: Blessed E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Blessed E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddBlessed(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d4 radiant damage on hit. This extra damage increases to 1d10 if the target is a Fiend or Undead',
				102,
			],
		},
	},
	earthshatterE: {
		name: "Master: Earthshatter E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Earthshatter E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Massive",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddEarthshatter(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack with the Massive property, its damage dice increase 2 steps, and on a hit, the target must make a Strength saving throw, knocking the target prone or pushing them 10 feet away from you on a fail.',
				105,
			],
		},
	},
	elementalacidE: {
		name: "Master: Elemental (Acid) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Elemental \(Acid\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "E", "Acid");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 acid damage on a hit.',
				102,
			],
		},
	},
	elementalcoldE: {
		name: "Master: Elemental (Cold) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Cold\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "E", "Cold");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 cold damage on a hit.',
				102,
			],
		},
	},
	elementalfireE: {
		name: "Master: Elemental (Fire) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Fire\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(fields, v, "E", "Fire");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 fire damage on a hit.',
				102,
			],
		},
	},
	elementallightningE: {
		name: "Master: Elemental (Lightning) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Lightning\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"E",
						"Lightning"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 lightning damage on a hit.',
				102,
			],
		},
	},
	elementalthunderE: {
		name: "Master: Elemental (Thunder) E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/\(Thunder\) E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddElemental(
						fields,
						v,
						"E",
						"Thunder"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d6 thunder damage on a hit.',
				102,
			],
		},
	},
	keenE: {
		name: "Master: Keen E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Keen E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse/Versatile",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddKeen(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack with Finesse or Versatile, this weapon scores a critical hit on a roll of 19 or 20.',
				103,
			],
		},
	},
	mastermagicalE: {
		name: "Master: Magical E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Master: Magical E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"E"
					);
				},
				"",
				102,
			],
		},
	},
	mithralE: {
		name: "Master: Mithral E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Mithral E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMithral(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee finesse weapon attack, this weapon\'s damage dice increase 2 steps, and its weight is halved.',
				102,
			],
		},
	},
	serratedE: {
		name: "Master: Serrated E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Serrated E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals Slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSerrated(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack that deals slashing damage, it is treated as a Serrated weapon. When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.',
			],
		},
	},
	slayingSpecialE: {
		name: "Master: Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"of a chosen type"
					);
				},
				'Choose a creature type when you add this property. If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to creatures of the chosen type.',
				102,
			],
		},
	},
	slayingAberrationE: {
		name: "Master: Aberration Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Aberration Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"aberrations"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Aberrations.',
				102,
			],
		},
	},
	slayingBeastE: {
		name: "Master: Beast Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Beast Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "beasts");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Beasts.',
				102,
			],
		},
	},
	slayingCelestialE: {
		name: "Master: Celestial Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Celestial Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"celestials"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Celestials.',
				102,
			],
		},
	},
	slayingConstructE: {
		name: "Master: Construct Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Construct Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"constructs"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Constructs.',
				102,
			],
		},
	},
	slayingDragonE: {
		name: "Master: Dragon Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Dragon Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"dragons"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Dragons.',
				102,
			],
		},
	},
	slayingElementalE: {
		name: "Master: Elemental Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Elemental Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"elementals"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Elementals.',
				102,
			],
		},
	},
	slayingFeyE: {
		name: "Master: Fey Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Fey Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "fey");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fey.',
				102,
			],
		},
	},
	slayingFiendE: {
		name: "Master: Fiend Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Fiend Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "fiends");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Fiends.',
				102,
			],
		},
	},
	slayingGiantE: {
		name: "Master: Giant Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Giant Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "giants");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Giants.',
				102,
			],
		},
	},
	slayingMonstrosityE: {
		name: "Master: Monstrosity Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Monstrosity Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(
						fields,
						v,
						"E",
						"monstrosities"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Monstrosities.',
				102,
			],
		},
	},
	slayingOozeE: {
		name: "Master: Ooze Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Ooze Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "oozes");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Oozes.',
				102,
			],
		},
	},
	slayingPlantE: {
		name: "Master: Plant Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Plant Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "plants");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Plants.',
				102,
			],
		},
	},
	slayingUndeadE: {
		name: "Master: Undead Slaying E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Undead Slaying E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSlaying(fields, v, "E", "undead");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, it deals an extra 1d12 damage to Undead.',
				102,
			],
		},
	},
	vampiricE: {
		name: "Master: Vampiric E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Vampiric E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVampiric(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals 1d4 necrotic damage on it, and you regain hit points equal to the necrotic damage dealt by this property.',
				102,
			],
		},
	},
	venomE: {
		name: "Master: Venom E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 11 &&
				(!/Master: .+ E/.exec(What("Extra.Notes")) ||
					/Venom E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVenom(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon deals +1d8 poison damage on hit.',
				102,
			],
		},
	},
	crushingE: {
		name: "Legendary: Crushing E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Crushing E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals bludgeoning",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddCrushing(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack that deals Bludgeoning damage, it gains the Crushing property.',
				102,
			],
		},
	},
	deadlyE: {
		name: "Legendary: Deadly E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Deadly E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged, Firearm",
		description: "",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddDeadlyCalc(
						fields,
						v,
						output,
						"E"
					);
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged firearm attack, you can add your ability modifier to its attack and damage rolls, instead of just to its attack rolls.',
				106,
			],
		},
	},
	legendarymagicalE: {
		name: "Legendary: Magical E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Legendary: Magical E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddMagical(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack, this weapon becomes magical and gains a +1 bonus to its attack and damage rolls.',
				102,
			],
			atkCalc: [
				function (fields, v, output) {
					ClassList["craftsman"].AddMagicalBonus(
						fields,
						v,
						output,
						"E"
					);
				},
				"",
				102,
			],
		},
	},
	penetratingE: {
		name: "Legendary: Penetrating E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Penetrating E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ammunition/Thrown, deals piercing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddPenetrating(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack with Ammunition/Thrown that deals piercing damage, this weapon gains the Penetrating property.',
				102,
			],
		},
	},
	seekingE: {
		name: "Legendary: Seeking E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Seeking E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Ranged",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddSeeking(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic ranged weapon attack, this weapon gains the Seeking property.',
				102,
			],
		},
	},
	threateningE: {
		name: "Legendary: Threatening E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Threatening E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddThreatening(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic melee weapon attack, this weapon gains the Threatening property.',
				102,
			],
		},
	},
	vorpalE: {
		name: "Legendary: Vorpal E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Vorpal E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, deals slashing",
		description: "",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddVorpal(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic weapon attack that deals slashing damage, this weapon gains the Vorpal property.',
				102,
			],
		},
	},
	whirlwindE: {
		name: "Legendary: Whirlwind E",
		source: ["VSoS", 81],
		submenu: "Weapon Slot E",
		prereqeval: function (v) {
			return (
				classes.known.craftsman.level >= 17 &&
				(!/Legendary: .+ E/.exec(What("Extra.Notes")) ||
					/Whirlwind E/.exec(What("Extra.Notes")))
			);
		},
		additional: "Prereq: Exotic, Melee, Finesse, Double/Light",
		description: "",
		action: ["bonus action", "Whirlwind (Weapon E)"],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					ClassList["craftsman"].AddWhirlwind(fields, v, "E");
				},
				'If the letter "E" is included in the description of a masterwork exotic meleeweapon attack with Finesse and Double or Light, this weapon gains the Whirlwind property.',
				104,
			],
		},
	},
};

// * Craftsman Class
ClassList["craftsman"] = {
	// given damage dice and direction to step, return the new dice step.
	// a direction of true means we are stepping upwards.
	CalcDieStep: function (diceStep, direction, times) {
		var dieAmt = diceStep.split("d");

		// if the split didn't work, back out
		if (dieAmt.length < 2) return diceStep;

		var newDice = diceStep;
		var timer = 0;

		while (timer < times) {
			timer++;

			// if we're meant to increase
			if (direction) {
				// if we find we are at the end of the track, increase the bonus
				if (
					/1d12\/2d6\+\d+/.test(newDice) ||
					/2d12\+\d+/.test(newDice)
				) {
					var bonus = newDice.match(/\+\d+/);
					var increase = parseInt(bonus[0]) + 1;
					newDice = newDice.replace(/\+\d+/, "") + "+" + increase;
					continue;
				}

				switch (newDice) {
					// do the 1 die track
					case "1d4":
						newDice = "1d6";
						break;
					case "1d6":
						newDice = "1d8";
						break;
					case "1d8":
						newDice = "1d10";
						break;
					case "1d10":
						newDice = "1d12/2d6";
						break;
					case "1d12/2d6":
						newDice = "1d12/2d6+1";
						break;

					// do the 2 die track
					case "2d4":
						newDice = "2d4+1";
						break;
					case "2d4+1":
						newDice = "2d6";
						break;
					case "2d6":
						newDice = "2d6+1";
						break;
					case "2d6+1":
						newDice = "2d8";
						break;
					case "2d8":
						newDice = "2d8+1";
						break;
					case "2d8+1":
						newDice = "2d10";
						break;
					case "2d10":
						newDice = "2d10+1";
						break;
					case "2d10+1":
						newDice = "2d12";
						break;
					case "2d12":
						newDice = "2d12+1";
						break;
				}
			}

			// if we're meant to decrease
			else {
				// if we find we are at the end of the track, decrease the bonus
				if (
					/1d12\/2d6\+\d+/.test(newDice) ||
					/2d12\+\d+/.test(newDice)
				) {
					var bonus = newDice.match(/\+\d+/);
					var decrease = parseInt(bonus[0]) - 1;
					newDice = newDice.replace(/\+\d+/, "");
					if (decrease != 0) newDice += "+" + decrease;
					continue;
				}

				switch (newDice) {
					case "1d12/2d6":
					case "1d12":
						newDice = "1d10";
						break;
					case "1d10":
						newDice = "1d8";
						break;
					case "1d8":
						newDice = "1d6";
						break;
					case "1d6":
						newDice = "1d4";
						break;
					case "2d12":
						newDice = "2d10+1";
						break;
					case "2d10+1":
						newDice = "2d10";
						break;
					case "2d10":
						newDice = "2d8+1";
						break;
					case "2d8+1":
						newDice = "2d8";
						break;
					case "2d8":
						newDice = "2d6+1";
						break;
					case "2d6+1":
						newDice = "2d6";
						break;
					case "2d6":
						newDice = "2d4+1";
						break;
					case "2d4+1":
						newDice = "2d4";
						break;
				}
			}
		}

		return newDice;
	},
	// given a range and an integer to increase/decrease it, calculate the new normal + long ranges.
	// based on the book, weapon's long ranges should change according to a multiplier, which is determined by looking at the base ranges.
	CalcNewRange: function (rangeFld, change) {
		var oldRange = rangeFld.match(/\d+(\/\d+)*/i);

		var oldRanges = oldRange[0].split("/");

		// if we can't split the range, assume the range has no long range
		if (oldRanges.length < 2) return parseInt(oldRange[0]) + change;

		// hey everybody its me, multiplier
		var multiplier = parseInt(oldRanges[1]) / parseInt(oldRanges[0]);

		var newN = parseInt(oldRanges[0]) + change;
		var newL = newN * multiplier;

		return newN + "/" + newL;
	},

	// returns false if blowgun, bolas, bomb, and net weapons are detected. these weapons cannot be masterwork
	CheckViable: function (v) {
		return !(
			/blowgun/i.test(v.WeaponTextName) ||
			/bolas/i.test(v.WeaponTextName) ||
			/\bbomb\b/i.test(v.WeaponTextName) ||
			/^[a-e ]*net *[a-e]$/i.test(v.WeaponTextName)
		);
	},

	// functions for masterwork weapon property calculations
	AddAerodynamic: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/thrown/i.test(fields.Description) &&
			!/\baerodynamic\b/i.test(fields.Description)
		) {
			// get the range, increase the normal by 40
			var newRange = ClassList["craftsman"].CalcNewRange(
				fields.Range,
				40
			);
			fields.Range = fields.Range.replace(/\d+(\/\d+)*/i, newRange);
		}
	},
	AddBalanced: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// remove the heavy property description
			fields.Description = fields.Description.replace(/heavy[,; ]*/i, "");
		}
	},
	AddAutomatic: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			/reload/i.test(fields.Description) &&
			!/\bautomatic\b/i.test(fields.Description)
		) {
			// get the range, decrease by 20
			var newRange = ClassList["craftsman"].CalcNewRange(
				fields.Range,
				-20
			);
			fields.Range = fields.Range.replace(/\d+(\/\d+)*/, newRange);

			// step the dice down
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;

			// add automatic property description & tooltip
			fields.Description +=
				(fields.Description == "" ? "" : "; ") + "Automatic";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "\n" : "") +
				"Automatic: When you make an attack with this weapon on your turn, you can choose to make two attacks instead. These attacks are always made with disadvantage, regardless of circumstance. These attacks use twice the normal amount of ammunition.";
		}
	},
	AddConcealable: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/light/i.test(fields.Description) &&
			!/\bconcealable\b/i.test(fields.Description)
		) {
			// add to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Concealable";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Concealable: While stowed, you have advantage on Dexterity (Stealth) checks made to conceal this weapon.";
		}
	},
	AddElegant: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/light/i.test(fields.Description) &&
			(v.isMeleeWeapon ||
				(v.isRangedWeapon && /thrown/i.test(fields.Description))) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/\belegant\b/i.test(fields.Description)
		) {
			// step up damage dice
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);
			fields.Damage_Die = newDice;

			// add to description + tooltip
			fields.Description += (fields.Description ? "; " : "") + "Elegant";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Elegant: This weapon requires exceptional skill to use. You must have a Dexterity score of 16 or higher to wield an elegant weapon.";
		}
	},
	AddExotic: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			!/exotic/i.test(v.theWea.type) &&
			!/exotic/i.test(fields.Description)
		) {
			// step up damage dice
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);
			fields.Damage_Die = newDice;

			// add exotic to the description and possibly remove martial
			fields.Description = fields.Description.replace(/[; ]*Martial/, "");
			fields.Description += (fields.Description ? "; " : "") + "Exotic";
		}
	},
	AddExtendedMag: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/reload/i.test(fields.Description) &&
			(/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description) ||
				/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// seek reload property to change capacity
			var reloadNum = fields.Description.match(/reload \(\d+/i);
			reloadNum = reloadNum.replace(/reload \(/i, "");
			var newReload = parseInt(reloadNum) * 2;
			fields.Description = fields.Description.replace(
				/reload \(\d+/i,
				"Reload (" + newReload
			);
		}
	},
	AddFinesse: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			((v.isMeleeWeapon && !/two-handed/i.test(fields.Description)) ||
				(v.isRangedWeapon && /thrown/i.test(fields.Description))) &&
			!/finesse/i.test(fields.Description)
		) {
			// add finesse property
			if (!/finesse/i.test(fields.Description))
				fields.Description +=
					(fields.Description ? "; " : "") + "Finesse";

			fields.Mod = What("Str Mod") < What("Dex Mod") ? 2 : 1;
		}
	},
	AddFirearm: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/loading/i.test(fields.Description) ||
				/reload/i.test(fields.Description)) &&
			v.isRangedWeapon &&
			!/tension/i.test(fields.Description) &&
			!/firearm/i.test(v.theWea.list)
		) {
			// up the dice number to 2, then step 4 times
			var die = fields.Damage_Die.match(/\d+d\d+/i);
			var dieSplit = die[0].split("d");
			if (dieSplit[0] == 1) dieSplit[0] = "2";
			var newDice = ClassList["craftsman"].CalcDieStep(
				dieSplit[0] + "d" + dieSplit[1],
				true,
				4
			);
			fields.Damage_Die = newDice;

			// add firearm to the description & tooltip
			fields.Description +=
				(fields.Description == "" ? "" : "; ") + "Firearm";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Firearm: You don't add your ability modifier to this weapon's damage rolls. Firearm ammunition can't be recovered once used.";
		}
	},
	AddFirearmRemoveAbilityModToDamage: function (fields, v, output, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/loading/i.test(fields.Description) ||
				/reload/i.test(fields.Description)) &&
			v.isRangedWeapon &&
			!/tension/i.test(fields.Description) &&
			!/firearm/i.test(v.theWea.list)
		) {
			output.modToDmg = false;
		}
	},
	AddFist: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/light/i.test(fields.Description) &&
			v.isMeleeWeapon &&
			!/fist/i.test(fields.Description)
		) {
			// add fist to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Fist";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Fist: Attacks made with this weapon are treated as unarmed strikes.";
		}
	},
	AddForegrip: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/ammunition/i.test(fields.Description) &&
			!/two-handed/i.test(fields.Description) &&
			v.isRangedWeapon &&
			!/foregrip/i.test(fields.Description)
		) {
			// let the last atkAdd know that this weapon needs its foregrip range calculated.
			// add foregrip to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Foregrip";
			fields.Description_Tooltip +=
				(fields.Description == "" ? "" : "\n") +
				"Foregrip. This weapon can be used with one or two hands. If used in two hands, its normal range increases by 50 feet and its long range increases accordingly.";
		}
	},
	AddHeavy: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/two-handed/i.test(fields.Description) &&
			!/double/i.test(fields.Description) &&
			(/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description) ||
				/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/\bheavy\b/i.test(fields.Description)
		) {
			// add heavy to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Heavy";

			// increase damage if melee
			if (v.isMeleeWeapon) {
				var newDice = ClassList["craftsman"].CalcDieStep(
					fields.Damage_Die,
					true,
					1
				);
				fields.Damage_Die = newDice;
			}

			// if this is ranged, increase the range by 20
			if (v.isRangedWeapon) {
				var newRange = ClassList["craftsman"].CalcNewRange(
					fields.Range,
					20
				);
				fields.Range = fields.Range.replace(/\d+(\/\d+)*/, newRange);
			}
		}
	},
	AddLight: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			!/two-handed/i.test(fields.Description) &&
			!/versatile/i.test(fields.Description) &&
			!/light/i.test(fields.Description)
		) {
			// add light to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Light";

			// decrease damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;
		}
	},
	AddLoading: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/ammunition/i.test(fields.Description) &&
			!/reload/i.test(fields.Description) &&
			v.isRangedWeapon &&
			!/loading/i.test(fields.Description)
		) {
			// add loading to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Loading";

			// increase damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);
			fields.Damage_Die = newDice;
		}
	},
	AddMartial: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			/simple/i.test(v.theWea.type)
		) {
			// add martial to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Martial";

			// step up damage dice
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);
			fields.Damage_Die = newDice;
		}
	},
	AddParrying: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			(/finesse/i.test(fields.Description) ||
				/light/i.test(fields.Description)) &&
			!/parrying/i.test(fields.Description)
		) {
			// todo: add parrying AC bonus?
			// add parrying to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Parrying";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Parrying: While wielding this weapon and not wielding a shield, you gain a +1 bonus to your AC.";
			// decrease damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;
		}
	},
	AddReach: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description) ||
				/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			(/finesse/i.test(fields.Description) ||
				/two-handed/i.test(fields.Description)) &&
			!/reach/i.test(fields.Description)
		) {
			// add reach to description
			fields.Description += (fields.Description ? "; " : "") + "Reach";

			// decrease damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;
		}
	},
	AddReload: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description) ||
				/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			(/ammunition/i.test(fields.Description) ||
				!/loading/i.test(fields.Description)) &&
			!/reload/i.test(fields.Description)
		) {
			// handle the longer reload if we find "long reload" in the title
			if (
				/\blong reload\b/i.test(v.WeaponTextName) &&
				/mounted/i.test(fields.Description)
			) {
				// add reload to description
				fields.Description +=
					(fields.Description ? "; " : "") + "Reload (1; 2 actions)";
				fields.Description_Tooltip +=
					(fields.Description_Tooltip ? "\n" : "") +
					"Reload: This weapon can be used to make a number of attacks before it must be reloaded. If you are proficient with the weapon, reloading it takes a bonus action; otherwise, reloading it takes an action. Some weapons require an action or longer to reload, even if you have proficiency, which is specified in the Reload property. If reloading a weapon requires longer than one action, the weapon can't be used to make attacks until reloading is finished.";
				// increase damage by 3
				var newDice = ClassList["craftsman"].CalcDieStep(
					fields.Damage_Die,
					true,
					3
				);
				fields.Damage_Die = newDice;
			}
			// otherwise handle the regular reload
			else {
				// add reload to description
				fields.Description +=
					(fields.Description ? "; " : "") + "Reload (5)";
				fields.Description_Tooltip +=
					(fields.Description_Tooltip ? "\n" : "") +
					"Reload: This weapon can be used to make a number of attacks before it must be reloaded. If you are proficient with the weapon, reloading it takes a bonus action; otherwise, reloading it takes an action. Some weapons require an action or longer to reload, even if you have proficiency, which is specified in the Reload property. If reloading a weapon requires longer than one action, the weapon can't be used to make attacks until reloading is finished.";
			}
		}
	},
	AddReturning: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description) ||
				/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			(/light/i.test(fields.Description) ||
				/thrown/i.test(fields.Description)) &&
			!/returning/i.test(fields.Description)
		) {
			// add returning to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Returning";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Returning: After being thrown, this weapon returns to your hand at the end of your turn.";
		}
	},
	AddScatter: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/ammunition/i.test(fields.Description) ||
				/two-handed/i.test(fields.Description)) &&
			!/sighted/i.test(fields.Description) &&
			!/scatter/i.test(fields.Description)
		) {
			// descrease damage 1 step
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;

			// add description + tooltip
			fields.Description += (fields.Description ? "; " : "") + "Scatter";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Scatter: If you make an attack against a target that is within half this weapon's normal range, you deal the damage value listed in parentheses instead of the weapon's normal damage dice.";

			// calculate new range
			var newRange = ClassList["craftsman"].CalcNewRange(
				fields.Range,
				-70
			);
			fields.Range = fields.Range.replace(/\d+(\/\d+)*/, newRange);
		}
	},
	AddSighted: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description) ||
				/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			/ammunition/i.test(fields.Description) &&
			!/scatter/i.test(fields.Description) &&
			!/sighted/i.test(fields.Description)
		) {
			// add to description + tooltip
			fields.Description += (fields.Description ? "; " : "") + "Sighted";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Sighted: This weapon has disadvantage on attack rolls made against targets within 20 feet of you.";

			// calculate new range
			var newRange = ClassList["craftsman"].CalcNewRange(
				fields.Range,
				50
			);
			fields.Range = fields.Range.replace(/\d+(\/\d+)*/, newRange);
		}
	},
	AddSuperheavy: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/\bheavy\b/i.test(fields.Description) &&
			!/superheavy/i.test(fields.Description)
		) {
			// increase damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);
			fields.Damage_Die = newDice;

			// add to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Superheavy";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Superheavy: This weapon is unusually large for its type. You must have a Strength score of 16 or higher to wield a superheavy weapon.";
		}
	},
	AddSwitch: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/switch/i.test(fields.Description)
		) {
			// decrease damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;

			// add to description + tooltip
			fields.Description += (fields.Description ? "; " : "") + "Switch";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Switch: This weapon has two forms. You can swap between which weapon is being used at any time, even between attacks.";
		}
	},
	AddThrown: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			!/two-handed/i.test(fields.Description) &&
			!/thrown/i.test(fields.Description)
		) {
			// add thrown to description + tooltip
			fields.Description += (fields.Description ? "; " : "") + "Thrown";

			// add ranges
			fields.Range += ", 20/60 ft";
		}
	},
	AddTrip: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description) ||
				/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			!/trip/i.test(fields.Description)
		) {
			// add trip to description + tooltip
			fields.Description += (fields.Description ? "; " : "") + "Trip";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip ? "\n" : "") +
				"Trip: You can make a shove attempt against any creature within this weapon's reach. Furthermore, you have advantage on ability checks you make to shove a creature using this weapon.";
		}
	},
	AddTwohanded: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			!/finesse/i.test(fields.Description) &&
			!/foregrip/i.test(fields.Description) &&
			!/light/i.test(fields.Description) &&
			!/thrown/i.test(fields.Description) &&
			!/versatile/i.test(fields.Description) &&
			!/two-handed/i.test(fields.Description)
		) {
			// add twohanded to description
			fields.Description +=
				(fields.Description ? "; " : "") + "Two-handed";

			// increase damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);
			fields.Damage_Die = newDice;

			// if this weapon is ranged, increase that range
			if (v.isRangedWeapon) {
				var newRange = ClassList["craftsman"].CalcNewRange(
					fields.Range,
					50
				);
				fields.Range = fields.Range.replace(/\d+(\/\d+)*/, newRange);
			}
		}
	},
	AddVersatile: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			!/light/i.test(fields.Description) &&
			!/two-handed/i.test(fields.Description) &&
			!/versatile/i.test(fields.Description)
		) {
			// calculate two-handed damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);

			// add versatile to description
			if (!/versatile/i.test(fields.Description))
				fields.Description +=
					(fields.Description ? "; " : "") +
					"Versatile (" +
					newDice +
					")";
		}
	},
	AddCounterweighted: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/two-handed/i.test(fields.Description)
		) {
			// add counterweighted to description & tooltip
			if (!/counterweighted/i.test(fields.Description))
				fields.Description +=
					(fields.Description ? "; " : "") + "Counterweighted";

			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Counterweighted: You can wield this weapon in one hand, as long as you don't have a weapon in your other hand.";
		}
	},
	AddDouble: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/heavy/i.test(fields.Description) &&
			!/double/i.test(fields.Description)
		) {
			// decrease damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;

			// add double to description & tooltip
			if (!/double/i.test(fields.Description))
				fields.Description +=
					(fields.Description ? "; " : "") + "Double";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Double: This weapon has two damage-dealing ends. When you take the Attack action and make an attack with this weapon, you can use your bonus action to make an additional attack with it; you don't add your ability modifier to the damage roll of this additional attack.";
		}
	},
	AddExplosive: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description) ||
				/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/explosive/i.test(fields.Description)
		) {
			// decrease damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;

			// change damage type
			if (
				/bludgeoning/i.test(fields.Damage_Type) ||
				/piercing/i.test(fields.Damage_Type) ||
				/slashing/i.test(fields.Damage_Type)
			)
				fields.Damage_Type = "Fire";

			// add double to description & tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Explosive";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Explosive: When this weapon's projectile hits a target, it explodes in a 15-foot diameter sphere. The projectile can target an unoccupied space within its range. Each creature other than the target within the blast radius (for a Medium or smaller target, each creature within 5 feet of it) must make a Dexterity saving throw, taking half the damage rolled on a failed save or no damage on a successful one.";
		}
	},
	AddHeat: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description) ||
				/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			(/firearm/i.test(v.theWea.list) ||
				/firearm/i.test(fields.Description)) &&
			!/\bheat\b/i.test(fields.Description)
		) {
			// increase damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				1
			);
			fields.Damage_Die = newDice;

			// add heat to description & tooltip
			if (!/heat/i.test(fields.Description))
				fields.Description += (fields.Description ? "; " : "") + "Heat";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Heat: This weapon gains 1 heat point whenever an attack is made with it, and it loses 1 heat point at the start of each of your turns. If the weapon has 3 heat points, it overheats and loses all heat points. An overheated weapon can't be used to make an attack again until the end of your next turn.";
		}
	},
	AddMagical: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// remove 'counts as', because it is
			fields.Description = fields.Description.replace(/counts as /i, "");
		}
	},
	AddMagicalBonus: function (fields, v, output, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// add +1s
			output.extraHit += 1;
			output.extraDmg += 1;
		}
	},
	AddMassive: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			v.isMeleeWeapon &&
			/superheavy/i.test(fields.Description) &&
			!/massive/i.test(fields.Description)
		) {
			// increase damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				2
			);
			fields.Damage_Die = newDice;

			// add massive to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Massive";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Massive: You can only make an attack with this weapon when you take the Attack action, and only as the first attack you make on your turn. Once you make an attack with this weapon, you can't make any attacks until the start of your next turn. If you would be able to attack more than once when you take the Attack action on your turn, you deal an extra two dice of damage for each attack you forgo when using this weapon.";
		}
	},
	AddMounted: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description) ||
				/martial/i.test(v.theWea.type) ||
				/martial/i.test(fields.Description)) &&
			v.isRangedWeapon &&
			/heavy/i.test(fields.Description) &&
			!/mounted/i.test(fields.Description)
		) {
			// increase damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				2
			);
			fields.Damage_Die = newDice;

			// add mounted to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Mounted";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Mounted: This weapon is normally used while attached to a tripod, vehicle, or other bracing mount. You can mount or unmount this weapon as an action. While it is mounted, it can't be moved. It can only be used to make an attack while unmounted if held by a Medium or larger creature with a Strength score of at least 15.";
		}
	},
	AddPrecision: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			v.isMeleeWeapon &&
			/finesse/i.test(fields.Description) &&
			!/precision/i.test(fields.Description)
		) {
			// add precision to description & tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Precision +1d6";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Precision. Once per turn, when you hit a creature with this weapon and have advantage on the attack roll, the target takes an extra 1d6 damage.";
		}
	},
	AddRocket: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/rocket/i.test(fields.Description)
		) {
			// decrease damage
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				false,
				1
			);
			fields.Damage_Die = newDice;

			// add rocket to description & tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Rocket +1d4";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Rocket: This weapon has a small propulsive engine attached to it or its projectiles. Once per turn, when you hit a creature with this weapon, you can deal an extra 1d4 damage to the target.";
		}
	},
	AddSniper: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/ammunition/i.test(fields.Description) &&
			!/scatter/i.test(fields.Description) &&
			!/sniper/i.test(fields.Description)
		) {
			// increase the long range by 8
			var rangeFld = fields.Range.match(/\d+(\/\d+)*/i);
			var ranges = rangeFld[0].split("/");
			var newRange = ranges[0] + "/" + parseInt(ranges[0]) * 8;
			fields.Range = fields.Range.replace(/\d+(\/\d+)*/, newRange);
		}
	},
	AddTension: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/firearm/i.test(fields.Description) &&
			!/firearm/i.test(v.theWea.list) &&
			!/thrown/i.test(fields.Description) &&
			!/tension/i.test(fields.Description)
		) {
			// change this weapon's ability to STR if its higher
			if (What("Dex Mod") < What("Str Mod")) {
				fields.Mod = 1;
			}

			// add tension to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Tension";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Tension: When making a ranged weapon attack with a tension weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.";
		}
	},
	AddTwinshot: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isRangedWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/twinshot/i.test(fields.Description)
		) {
			// add twinshot to description & tooltip
			fields.Description += (fields.Description ? "; " : "") + "Twinshot";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Twinshot: Once on each of your turns when you make an attack with this weapon, you can make another attack with it against a different creature that is within 5 feet of the original target and within this weapon's range.";
		}
	},
	AddAdamantine: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			(/heavy/i.test(fields.Description) ||
				/versatile/i.test(fields.Description)) &&
			!/adamantine/i.test(fields.Description)
		) {
			// increase damage 2 steps
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				2
			);
			fields.Damage_Die = newDice;

			// add adamantine to description & tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Adamantine";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Adamantine: This weapon deals double damage to objects and structures.";
		}
	},
	AddBlessed: function (fields, v, letter) {
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			!/\+1d4 radiant \(1d10 vs Fiends\/Undead\)/i.test(
				fields.Description
			)
		) {
			// add blessed to description
			fields.Description +=
				(fields.Description ? "; " : "") +
				"+1d4 radiant (1d10 vs Fiends/Undead)";
		}
	},
	AddEarthshatter: function (fields, v, letter) {
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/massive/i.test(fields.Description) &&
			!/earthshatter/i.test(fields.Description)
		) {
			// increase damage 2 steps
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				2
			);
			fields.Damage_Die = newDice;

			// add earthshatter to description
			fields.Description +=
				(fields.Description == "" ? "" : "; ") + "Earthshatter";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Earthshatter: On a hit with this weapon, the target must make a Strength saving throw. On a failed save, the target is knocked prone or pushed 10 feet away from you (your choice). ";
		}
	},
	AddElemental: function (fields, v, letter, damageType) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// add elemental to description
			fields.Description +=
				(fields.Description ? "; " : "") + "+1d6 " + damageType;
		}
	},
	AddKeen: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			(/finesse/i.test(fields.Description) ||
				/versatile/i.test(fields.Description))
		) {
			// add keen to description
			if (!/crit on/i.test(fields.Description))
				fields.Description +=
					(fields.Description ? "; " : "") + "Crit on 19-20";
		}
	},
	AddMithral: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/finesse/i.test(fields.Description)
		) {
			// increase damage 2 steps
			var newDice = ClassList["craftsman"].CalcDieStep(
				fields.Damage_Die,
				true,
				2
			);
			fields.Damage_Die = newDice;

			// halve weight
			fields.weight = fields.weight / 2;
		}
	},
	AddSerrated: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/slashing/i.test(fields.Damage_Type) &&
			!/serrated/i.test(fields.Description)
		) {
			// add serrated to description
			fields.Description +=
				(fields.Description ? "; " : "") + "Serrated +1d8";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Serrated: When a creature takes damage from serrated weapons twice or more in a single turn, it takes an extra 1d8 slashing damage.";
		}
	},
	AddSlaying: function (fields, v, letter, creaType) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// add slaying to description
			fields.Description +=
				(fields.Description ? "; " : "") + "+1d12 vs " + creaType;
		}
	},
	AddVampiric: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// add vampiric to description
			fields.Description +=
				(fields.Description ? "; " : "") + "+1d4 necrotic, heal result";
		}
	},
	AddVenom: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description))
		) {
			// add venom to description
			fields.Description +=
				(fields.Description == "" ? "" : "; ") + "+1d8 poison";
		}
	},
	AddCrushing: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/bludgeoning/i.test(fields.Damage_Type) &&
			!/\-1 to target's AC/i.test(fields.Description_Tooltip)
		) {
			// add crushing to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "-1 to target's AC";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Crushing: When you hit a creature that has natural armor or is wearing armor, the target takes a cumulative −1 penalty to the AC its armor offers. Armor reduced to an AC of 10 in this way is destroyed. A creature can repair its armor or heal the damage dealt to its natural armor over the course of a long rest.";
		}
	},
	AddDeadlyCalc: function (fields, v, output, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			v.isRangedWeapon &&
			(/firearm/i.test(fields.Description) ||
				/firearm/i.test(v.theWea.list))
		) {
			output.modToDmg = true;
		}
	},
	AddPenetrating: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			(/ammunition/i.test(fields.Description) ||
				/thrown/i.test(fields.Description)) &&
			/piercing/i.test(fields.Damage_Type) &&
			!/penetrating/i.test(fields.Description)
		) {
			// add penetrating to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Penetrating (Dex save)";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Penetrating: This weapon pierces through its targets. When you make a ranged attack with this weapon and don't have disadvantage, you can target all creatures in a straight line within this weapon's normal range. You don't make an attack roll for this attack. Instead, each creature in the line must succeed on a Dexterity saving throw or take damage as if it were hit by the weapon.";
		}
	},
	AddSeeking: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			v.isRangedWeapon
		) {
			// add seeking to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "5 dmg on miss";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Seeking: When you make an attack roll that doesn't have disadvantage with this weapon and miss, you instead hit the target and deal 5 damage of the weapon's type. This damage can't be increased in any way, and no other effects can be applied to the hit.";
		}
	},
	AddThreatening: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			v.isMeleeWeapon &&
			!/threatening/i.test(fields.Description)
		) {
			// add seeking to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Threatening";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Threatening: When you make an opportunity attack with a threatening weapon, you can do so without using your reaction. You can't make more than one opportunity attack per turn.";
		}
	},
	AddVorpal: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/slashing/i.test(fields.Damage_Type) &&
			!/On nat 20: cut off head/.test(fields.Description_Tooltip)
		) {
			// add seeking to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") +
				"On 20 to hit: cut off head or +6d8";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Vorpal: When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the GM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.";
		}
	},
	AddWhirlwind: function (fields, v, letter) {
		if (!ClassList["craftsman"].CheckViable(v)) return;
		if (
			new RegExp("\\b" + letter + "\\b", "i").test(v.WeaponTextName) &&
			v.isMeleeWeapon &&
			(/exotic/i.test(v.theWea.type) ||
				/exotic/i.test(fields.Description)) &&
			/finesse/i.test(fields.Description) &&
			(/double/i.test(fields.Description) ||
				/light/i.test(fields.Description)) &&
			!/whirlwind/i.test(fields.Description)
		) {
			// add whirlwind to description + tooltip
			fields.Description +=
				(fields.Description ? "; " : "") + "Whirlwind";
			fields.Description_Tooltip +=
				(fields.Description_Tooltip == "" ? "" : "\n") +
				"Whirlwind: When you use your bonus action to make an additional melee attack with this weapon—such as when you engage with two-weapon fighting or use a double weapon—you can make an attack with it against any number of creatures within 5 feet of you, with a separate attack roll for each target. You can't move between these bonus attacks.";
		}
	},
	regExpSearch: /^(?=.*craftsman).*$/i,
	name: "Craftsman",
	source: ["VSoS", 64],
	primaryAbility: "Intelligence",
	abilitySave: 4,
	prereqs: "Strength 13 or Dexterity 13, and Intelligence 13",
	die: 10,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Int", "Con"],
	skillstxt: {
		primary:
			"Choose two from Arcana, Athletics, History, Investigation, Medicine, Perception, and Persuasion",
	},
	toolProfs: {
		primary: [["Craftsman's tools", "Int"], "All artisan's tools"],
		secondary: [["Craftsman's tools", "Int"], "All artisan's tools"],
	},
	armorProfs: {
		primary: [true, true, true, true],
		secondary: [true, true, false, true],
	},
	weaponProfs: {
		primary: [true, true, ["exotic"]],
		secondary: [true, true, ["exotic"]],
	},
	equipment:
		"Craftsman starting equipment:\n \u2022 A shield and a dagger;\n \u2022 Chain mail -or- leather armor -or- scale mail;\n \u2022 A warhammer -or- any simple weapon;\n \u2022 A light crossbow and 20 bolts -or- a shortbow and 20 arrows;\n \u2022 Craftsman's tools;\n \u2022 A dungeoneer's pack.",
	subclasses: ["Artisan's Guild", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features: {
		"bonus proficiencies": {
			name: "Bonus Proficiencies",
			source: ["VSoS", 65],
			minlevel: 1,
			description: desc([
				"I am proficient with exotic weapons and armor, as well as all artisan's tools",
			]),
		},
		"active crafting": {
			name: "Active Crafting",
			source: ["VSoS", 65],
			minlevel: 1,
			description: desc([
				"I can make 1 nonmagical item each day when I take a long rest. To make an item, I pay half",
				"the item's gold cost in materials, up to 25 gp. I can make items worth more than 25 gp by",
				"working on them for multiple days, spending 25 gp/day. As I gain craftsman levels, I can",
				"spend more gp/day on materials. Items I make this way can be sold at half their gp cost.",
			]),
			limfeaname: "Max Active Crafting Gold",
			usages: levels.map(function (n) {
				return n < 3 ? 25 : n < 20 ? (n - 1) * 25 : 500;
			}),
			recovery: "day",
			equipright: [["Craftsman's tools", "", 20]],
			toNotesPage: [
				{
					name: "Craftsman's Tools",
					note: [
						"I carry a set of Craftsman's Tools, which I can use for any ability check I would",
						"make with any set of artisan's tools. A set of craftsman's tools costs 75 gp.",
					],
				},
			],
		},
		masterwork: {
			name: "Masterwork",
			source: ["VSoS", 65],
			minlevel: 2,
			additional: levels.map(function (n) {
				return n <= 1
					? ""
					: "Max Masterwork Property Level: " +
							(n < 5
								? "Apprentice"
								: n < 11
								? "Journeyman"
								: n < 17
								? "Master"
								: "Legendary");
			}),
			description: desc([
				"I can craft masterwork weapons & armor for 50 gp plus the normal cost and time.",
				"Masterwork weapons have a +1 bonus to attack rolls, unless already a +1 magic weapon.",
				"I can modify masterwork items during a long rest. See notes pages for details.",
				"Masterwork save DC: 8 + my proficiency bonus + my Intelligence modifier",
			]),
			extrachoices: MasterworkWeaponChoices,
			extraname: "Masterwork Weapon Properties",
			"apprentice: aerodynamic a":
				MasterworkWeaponProperties.aerodynamicA,
			"apprentice: automatic a": MasterworkWeaponProperties.automaticA,
			"apprentice: balanced a": MasterworkWeaponProperties.balancedA,
			"apprentice: concealable a":
				MasterworkWeaponProperties.concealableA,
			"apprentice: elegant a": MasterworkWeaponProperties.elegantA,
			"apprentice: exotic a": MasterworkWeaponProperties.exoticA,
			"apprentice: extended magazine a":
				MasterworkWeaponProperties.extendedmagA,
			"apprentice: finesse a": MasterworkWeaponProperties.finesseA,
			"apprentice: firearm a": MasterworkWeaponProperties.firearmA,
			"apprentice: fist a": MasterworkWeaponProperties.fistA,
			"apprentice: foregrip a": MasterworkWeaponProperties.foregripA,
			"apprentice: heavy a": MasterworkWeaponProperties.heavyA,
			"apprentice: light a": MasterworkWeaponProperties.lightA,
			"apprentice: loading a": MasterworkWeaponProperties.loadingA,
			"apprentice: martial a": MasterworkWeaponProperties.martialA,
			"apprentice: parrying a": MasterworkWeaponProperties.parryingA,
			"apprentice: reach a": MasterworkWeaponProperties.reachA,
			"apprentice: reload a": MasterworkWeaponProperties.reloadA,
			"apprentice: returning a": MasterworkWeaponProperties.returningA,
			"apprentice: scatter a": MasterworkWeaponProperties.scatterA,
			"apprentice: sighted a": MasterworkWeaponProperties.sightedA,
			"apprentice: superheavy a": MasterworkWeaponProperties.superheavyA,
			"apprentice: switch a": MasterworkWeaponProperties.switchA,
			"apprentice: thrown a": MasterworkWeaponProperties.thrownA,
			"apprentice: trip a": MasterworkWeaponProperties.tripA,
			"apprentice: two-handed a": MasterworkWeaponProperties.twohandedA,
			"apprentice: versatile a": MasterworkWeaponProperties.versatileA,
			"journeyman: counterweighted a":
				MasterworkWeaponProperties.counterweightedA,
			"journeyman: double a": MasterworkWeaponProperties.doubleA,
			"journeyman: explosive a": MasterworkWeaponProperties.explosiveA,
			"journeyman: heat a": MasterworkWeaponProperties.heatA,
			"journeyman: magical a":
				MasterworkWeaponProperties.journeymanmagicalA,
			"journeyman: massive a": MasterworkWeaponProperties.massiveA,
			"journeyman: mounted a": MasterworkWeaponProperties.mountedA,
			"journeyman: precision a": MasterworkWeaponProperties.precisionA,
			"journeyman: rocket a": MasterworkWeaponProperties.rocketA,
			"journeyman: sniper a": MasterworkWeaponProperties.sniperA,
			"journeyman: tension a": MasterworkWeaponProperties.tensionA,
			"journeyman: twinshot a": MasterworkWeaponProperties.twinshotA,
			"master: adamantine a": MasterworkWeaponProperties.adamantineA,
			"master: blessed a": MasterworkWeaponProperties.blessedA,
			"master: earthshatter a": MasterworkWeaponProperties.earthshatterA,
			"master: elemental (acid) a":
				MasterworkWeaponProperties.elementalacidA,
			"master: elemental (cold) a":
				MasterworkWeaponProperties.elementalcoldA,
			"master: elemental (fire) a":
				MasterworkWeaponProperties.elementalfireA,
			"master: elemental (lightning) a":
				MasterworkWeaponProperties.elementallightningA,
			"master: elemental (thunder) a":
				MasterworkWeaponProperties.elementalthunderA,
			"master: keen a": MasterworkWeaponProperties.keenA,
			"master: magical a": MasterworkWeaponProperties.mastermagicalA,
			"master: mithral a": MasterworkWeaponProperties.mithralA,
			"master: serrated a": MasterworkWeaponProperties.serratedA,
			"master: slaying a": MasterworkWeaponProperties.slayingSpecialA,
			"master: slaying (aberrations) a":
				MasterworkWeaponProperties.slayingAberrationA,
			"master: slaying (beasts) a":
				MasterworkWeaponProperties.slayingBeastA,
			"master: slaying (celestials) a":
				MasterworkWeaponProperties.slayingCelestialA,
			"master: slaying (constructs) a":
				MasterworkWeaponProperties.slayingConstructA,
			"master: slaying (dragons) a":
				MasterworkWeaponProperties.slayingDragonA,
			"master: slaying (elementals) a":
				MasterworkWeaponProperties.slayingElementalA,
			"master: slaying (fey) a": MasterworkWeaponProperties.slayingFeyA,
			"master: slaying (fiends) a":
				MasterworkWeaponProperties.slayingFiendA,
			"master: slaying (giants) a":
				MasterworkWeaponProperties.slayingGiantA,
			"master: slaying (monstrosities) a":
				MasterworkWeaponProperties.slayingMonstrosityA,
			"master: slaying (oozes) a":
				MasterworkWeaponProperties.slayingOozeA,
			"master: slaying (plants) a":
				MasterworkWeaponProperties.slayingPlantA,
			"master: slaying (undead) a":
				MasterworkWeaponProperties.slayingUndeadA,
			"master: vampiric a": MasterworkWeaponProperties.vampiricA,
			"master: venom a": MasterworkWeaponProperties.venomA,
			"legendary: crushing a": MasterworkWeaponProperties.crushingA,
			"legendary: deadly a": MasterworkWeaponProperties.deadlyA,
			"legendary: magical a":
				MasterworkWeaponProperties.legendarymagicalA,
			"legendary: penetrating a": MasterworkWeaponProperties.penetratingA,
			"legendary: seeking a": MasterworkWeaponProperties.seekingA,
			"legendary: threatening a": MasterworkWeaponProperties.threateningA,
			"legendary: vorpal a": MasterworkWeaponProperties.vorpalA,
			"legendary: whirlwind a": MasterworkWeaponProperties.whirlwindA,

			"apprentice: aerodynamic b":
				MasterworkWeaponProperties.aerodynamicB,
			"apprentice: automatic b": MasterworkWeaponProperties.automaticB,
			"apprentice: balanced b": MasterworkWeaponProperties.balancedB,
			"apprentice: concealable b":
				MasterworkWeaponProperties.concealableB,
			"apprentice: elegant b": MasterworkWeaponProperties.elegantB,
			"apprentice: exotic b": MasterworkWeaponProperties.exoticB,
			"apprentice: extended magazine b":
				MasterworkWeaponProperties.extendedmagB,
			"apprentice: finesse b": MasterworkWeaponProperties.finesseB,
			"apprentice: firearm b": MasterworkWeaponProperties.firearmB,
			"apprentice: fist b": MasterworkWeaponProperties.fistB,
			"apprentice: foregrip b": MasterworkWeaponProperties.foregripB,
			"apprentice: heavy b": MasterworkWeaponProperties.heavyB,
			"apprentice: light b": MasterworkWeaponProperties.lightB,
			"apprentice: loading b": MasterworkWeaponProperties.loadingB,
			"apprentice: martial b": MasterworkWeaponProperties.martialB,
			"apprentice: parrying b": MasterworkWeaponProperties.parryingB,
			"apprentice: reach b": MasterworkWeaponProperties.reachB,
			"apprentice: reload b": MasterworkWeaponProperties.reloadB,
			"apprentice: returning b": MasterworkWeaponProperties.returningB,
			"apprentice: scatter b": MasterworkWeaponProperties.scatterB,
			"apprentice: sighted b": MasterworkWeaponProperties.sightedB,
			"apprentice: superheavy b": MasterworkWeaponProperties.superheavyB,
			"apprentice: switch b": MasterworkWeaponProperties.switchB,
			"apprentice: thrown b": MasterworkWeaponProperties.thrownB,
			"apprentice: trip b": MasterworkWeaponProperties.tripB,
			"apprentice: two-handed b": MasterworkWeaponProperties.twohandedB,
			"apprentice: versatile b": MasterworkWeaponProperties.versatileB,
			"journeyman: counterweighted b":
				MasterworkWeaponProperties.counterweightedB,
			"journeyman: double b": MasterworkWeaponProperties.doubleB,
			"journeyman: explosive b": MasterworkWeaponProperties.explosiveB,
			"journeyman: heat b": MasterworkWeaponProperties.heatB,
			"journeyman: magical b":
				MasterworkWeaponProperties.journeymanmagicalB,
			"journeyman: massive b": MasterworkWeaponProperties.massiveB,
			"journeyman: mounted b": MasterworkWeaponProperties.mountedB,
			"journeyman: precision b": MasterworkWeaponProperties.precisionB,
			"journeyman: rocket b": MasterworkWeaponProperties.rocketB,
			"journeyman: sniper b": MasterworkWeaponProperties.sniperB,
			"journeyman: tension b": MasterworkWeaponProperties.tensionB,
			"journeyman: twinshot b": MasterworkWeaponProperties.twinshotB,
			"master: adamantine b": MasterworkWeaponProperties.adamantineB,
			"master: blessed b": MasterworkWeaponProperties.blessedB,
			"master: earthshatter b": MasterworkWeaponProperties.earthshatterB,
			"master: elemental (acid) b":
				MasterworkWeaponProperties.elementalacidB,
			"master: elemental (cold) b":
				MasterworkWeaponProperties.elementalcoldB,
			"master: elemental (fire) b":
				MasterworkWeaponProperties.elementalfireB,
			"master: elemental (lightning) b":
				MasterworkWeaponProperties.elementallightningB,
			"master: elemental (thunder) b":
				MasterworkWeaponProperties.elementalthunderB,
			"master: keen b": MasterworkWeaponProperties.keenB,
			"master: magical b": MasterworkWeaponProperties.mastermagicalB,
			"master: mithral b": MasterworkWeaponProperties.mithralB,
			"master: serrated b": MasterworkWeaponProperties.serratedB,
			"master: slaying b": MasterworkWeaponProperties.slayingSpecialB,
			"master: slaying (aberrations) b":
				MasterworkWeaponProperties.slayingAberrationB,
			"master: slaying (beasts) b":
				MasterworkWeaponProperties.slayingBeastB,
			"master: slaying (celestials) b":
				MasterworkWeaponProperties.slayingCelestialB,
			"master: slaying (constructs) b":
				MasterworkWeaponProperties.slayingConstructB,
			"master: slaying (dragons) b":
				MasterworkWeaponProperties.slayingDragonB,
			"master: slaying (elementals) b":
				MasterworkWeaponProperties.slayingElementalB,
			"master: slaying (fey) b": MasterworkWeaponProperties.slayingFeyB,
			"master: slaying (fiends) b":
				MasterworkWeaponProperties.slayingFiendB,
			"master: slaying (giants) b":
				MasterworkWeaponProperties.slayingGiantB,
			"master: slaying (monstrosities) b":
				MasterworkWeaponProperties.slayingMonstrosityB,
			"master: slaying (oozes) b":
				MasterworkWeaponProperties.slayingOozeB,
			"master: slaying (plants) b":
				MasterworkWeaponProperties.slayingPlantB,
			"master: slaying (undead) b":
				MasterworkWeaponProperties.slayingUndeadB,
			"master: vampiric b": MasterworkWeaponProperties.vampiricB,
			"master: venom b": MasterworkWeaponProperties.venomB,
			"legendary: crushing b": MasterworkWeaponProperties.crushingB,
			"legendary: deadly b": MasterworkWeaponProperties.deadlyB,
			"legendary: magical b":
				MasterworkWeaponProperties.legendarymagicalB,
			"legendary: penetrating b": MasterworkWeaponProperties.penetratingB,
			"legendary: seeking b": MasterworkWeaponProperties.seekingB,
			"legendary: threatening b": MasterworkWeaponProperties.threateningB,
			"legendary: vorpal b": MasterworkWeaponProperties.vorpalB,
			"legendary: whirlwind b": MasterworkWeaponProperties.whirlwindB,

			"apprentice: aerodynamic c":
				MasterworkWeaponProperties.aerodynamicC,
			"apprentice: automatic c": MasterworkWeaponProperties.automaticC,
			"apprentice: balanced c": MasterworkWeaponProperties.balancedC,
			"apprentice: concealable c":
				MasterworkWeaponProperties.concealableC,
			"apprentice: elegant c": MasterworkWeaponProperties.elegantC,
			"apprentice: exotic c": MasterworkWeaponProperties.exoticC,
			"apprentice: extended magazine c":
				MasterworkWeaponProperties.extendedmagC,
			"apprentice: finesse c": MasterworkWeaponProperties.finesseC,
			"apprentice: firearm c": MasterworkWeaponProperties.firearmC,
			"apprentice: fist c": MasterworkWeaponProperties.fistC,
			"apprentice: foregrip c": MasterworkWeaponProperties.foregripC,
			"apprentice: heavy c": MasterworkWeaponProperties.heavyC,
			"apprentice: light c": MasterworkWeaponProperties.lightC,
			"apprentice: loading c": MasterworkWeaponProperties.loadingC,
			"apprentice: martial c": MasterworkWeaponProperties.martialC,
			"apprentice: parrying c": MasterworkWeaponProperties.parryingC,
			"apprentice: reach c": MasterworkWeaponProperties.reachC,
			"apprentice: reload c": MasterworkWeaponProperties.reloadC,
			"apprentice: returning c": MasterworkWeaponProperties.returningC,
			"apprentice: scatter c": MasterworkWeaponProperties.scatterC,
			"apprentice: sighted c": MasterworkWeaponProperties.sightedC,
			"apprentice: superheavy c": MasterworkWeaponProperties.superheavyC,
			"apprentice: switch c": MasterworkWeaponProperties.switchC,
			"apprentice: thrown c": MasterworkWeaponProperties.thrownC,
			"apprentice: trip c": MasterworkWeaponProperties.tripC,
			"apprentice: two-handed c": MasterworkWeaponProperties.twohandedC,
			"apprentice: versatile c": MasterworkWeaponProperties.versatileC,
			"journeyman: counterweighted c":
				MasterworkWeaponProperties.counterweightedC,
			"journeyman: double c": MasterworkWeaponProperties.doubleC,
			"journeyman: explosive c": MasterworkWeaponProperties.explosiveC,
			"journeyman: heat c": MasterworkWeaponProperties.heatC,
			"journeyman: magical c":
				MasterworkWeaponProperties.journeymanmagicalC,
			"journeyman: massive c": MasterworkWeaponProperties.massiveC,
			"journeyman: mounted c": MasterworkWeaponProperties.mountedC,
			"journeyman: precision c": MasterworkWeaponProperties.precisionC,
			"journeyman: rocket c": MasterworkWeaponProperties.rocketC,
			"journeyman: sniper c": MasterworkWeaponProperties.sniperC,
			"journeyman: tension c": MasterworkWeaponProperties.tensionC,
			"journeyman: twinshot c": MasterworkWeaponProperties.twinshotC,
			"master: adamantine c": MasterworkWeaponProperties.adamantineC,
			"master: blessed c": MasterworkWeaponProperties.blessedC,
			"master: earthshatter c": MasterworkWeaponProperties.earthshatterC,
			"master: elemental (acid) c":
				MasterworkWeaponProperties.elementalacidC,
			"master: elemental (cold) c":
				MasterworkWeaponProperties.elementalcoldC,
			"master: elemental (fire) c":
				MasterworkWeaponProperties.elementalfireC,
			"master: elemental (lightning) c":
				MasterworkWeaponProperties.elementallightningC,
			"master: elemental (thunder) c":
				MasterworkWeaponProperties.elementalthunderC,
			"master: keen c": MasterworkWeaponProperties.keenC,
			"master: magical c": MasterworkWeaponProperties.mastermagicalC,
			"master: mithral c": MasterworkWeaponProperties.mithralC,
			"master: serrated c": MasterworkWeaponProperties.serratedC,
			"master: slaying c": MasterworkWeaponProperties.slayingSpecialC,
			"master: slaying (aberrations) c":
				MasterworkWeaponProperties.slayingAberrationC,
			"master: slaying (beasts) c":
				MasterworkWeaponProperties.slayingBeastC,
			"master: slaying (celestials) c":
				MasterworkWeaponProperties.slayingCelestialC,
			"master: slaying (constructs) c":
				MasterworkWeaponProperties.slayingConstructC,
			"master: slaying (dragons) c":
				MasterworkWeaponProperties.slayingDragonC,
			"master: slaying (elementals) c":
				MasterworkWeaponProperties.slayingElementalC,
			"master: slaying (fey) c": MasterworkWeaponProperties.slayingFeyC,
			"master: slaying (fiends) c":
				MasterworkWeaponProperties.slayingFiendC,
			"master: slaying (giants) c":
				MasterworkWeaponProperties.slayingGiantC,
			"master: slaying (monstrosities) c":
				MasterworkWeaponProperties.slayingMonstrosityC,
			"master: slaying (oozes) c":
				MasterworkWeaponProperties.slayingOozeC,
			"master: slaying (plants) c":
				MasterworkWeaponProperties.slayingPlantC,
			"master: slaying (undead) c":
				MasterworkWeaponProperties.slayingUndeadC,
			"master: vampiric c": MasterworkWeaponProperties.vampiricC,
			"master: venom c": MasterworkWeaponProperties.venomC,
			"legendary: crushing c": MasterworkWeaponProperties.crushingC,
			"legendary: deadly c": MasterworkWeaponProperties.deadlyC,
			"legendary: magical c":
				MasterworkWeaponProperties.legendarymagicalC,
			"legendary: penetrating c": MasterworkWeaponProperties.penetratingC,
			"legendary: seeking c": MasterworkWeaponProperties.seekingC,
			"legendary: threatening c": MasterworkWeaponProperties.threateningC,
			"legendary: vorpal c": MasterworkWeaponProperties.vorpalC,
			"legendary: whirlwind c": MasterworkWeaponProperties.whirlwindC,

			"apprentice: aerodynamic d":
				MasterworkWeaponProperties.aerodynamicD,
			"apprentice: automatic d": MasterworkWeaponProperties.automaticD,
			"apprentice: balanced d": MasterworkWeaponProperties.balancedD,
			"apprentice: concealable d":
				MasterworkWeaponProperties.concealableD,
			"apprentice: elegant d": MasterworkWeaponProperties.elegantD,
			"apprentice: exotic d": MasterworkWeaponProperties.exoticD,
			"apprentice: extended magazine d":
				MasterworkWeaponProperties.extendedmagD,
			"apprentice: finesse d": MasterworkWeaponProperties.finesseD,
			"apprentice: firearm d": MasterworkWeaponProperties.firearmD,
			"apprentice: fist d": MasterworkWeaponProperties.fistD,
			"apprentice: foregrip d": MasterworkWeaponProperties.foregripD,
			"apprentice: heavy d": MasterworkWeaponProperties.heavyD,
			"apprentice: light d": MasterworkWeaponProperties.lightD,
			"apprentice: loading d": MasterworkWeaponProperties.loadingD,
			"apprentice: martial d": MasterworkWeaponProperties.martialD,
			"apprentice: parrying d": MasterworkWeaponProperties.parryingD,
			"apprentice: reach d": MasterworkWeaponProperties.reachD,
			"apprentice: reload d": MasterworkWeaponProperties.reloadD,
			"apprentice: returning d": MasterworkWeaponProperties.returningD,
			"apprentice: scatter d": MasterworkWeaponProperties.scatterD,
			"apprentice: sighted d": MasterworkWeaponProperties.sightedD,
			"apprentice: superheavy d": MasterworkWeaponProperties.superheavyD,
			"apprentice: switch d": MasterworkWeaponProperties.switchD,
			"apprentice: thrown d": MasterworkWeaponProperties.thrownD,
			"apprentice: trip d": MasterworkWeaponProperties.tripD,
			"apprentice: two-handed d": MasterworkWeaponProperties.twohandedD,
			"apprentice: versatile d": MasterworkWeaponProperties.versatileD,
			"journeyman: counterweighted d":
				MasterworkWeaponProperties.counterweightedD,
			"journeyman: double d": MasterworkWeaponProperties.doubleD,
			"journeyman: explosive d": MasterworkWeaponProperties.explosiveD,
			"journeyman: heat d": MasterworkWeaponProperties.heatD,
			"journeyman: magical d":
				MasterworkWeaponProperties.journeymanmagicalD,
			"journeyman: massive d": MasterworkWeaponProperties.massiveD,
			"journeyman: mounted d": MasterworkWeaponProperties.mountedD,
			"journeyman: precision d": MasterworkWeaponProperties.precisionD,
			"journeyman: rocket d": MasterworkWeaponProperties.rocketD,
			"journeyman: sniper d": MasterworkWeaponProperties.sniperD,
			"journeyman: tension d": MasterworkWeaponProperties.tensionD,
			"journeyman: twinshot d": MasterworkWeaponProperties.twinshotD,
			"master: adamantine d": MasterworkWeaponProperties.adamantineD,
			"master: blessed d": MasterworkWeaponProperties.blessedD,
			"master: earthshatter d": MasterworkWeaponProperties.earthshatterD,
			"master: elemental (acid) d":
				MasterworkWeaponProperties.elementalacidD,
			"master: elemental (cold) d":
				MasterworkWeaponProperties.elementalcoldD,
			"master: elemental (fire) d":
				MasterworkWeaponProperties.elementalfireD,
			"master: elemental (lightning) d":
				MasterworkWeaponProperties.elementallightningD,
			"master: elemental (thunder) d":
				MasterworkWeaponProperties.elementalthunderD,
			"master: keen d": MasterworkWeaponProperties.keenD,
			"master: magical d": MasterworkWeaponProperties.mastermagicalD,
			"master: mithral d": MasterworkWeaponProperties.mithralD,
			"master: serrated d": MasterworkWeaponProperties.serratedD,
			"master: slaying d": MasterworkWeaponProperties.slayingSpecialD,
			"master: slaying (aberrations) d":
				MasterworkWeaponProperties.slayingAberrationD,
			"master: slaying (beasts) d":
				MasterworkWeaponProperties.slayingBeastD,
			"master: slaying (celestials) d":
				MasterworkWeaponProperties.slayingCelestialD,
			"master: slaying (constructs) d":
				MasterworkWeaponProperties.slayingConstructD,
			"master: slaying (dragons) d":
				MasterworkWeaponProperties.slayingDragonD,
			"master: slaying (elementals) d":
				MasterworkWeaponProperties.slayingElementalD,
			"master: slaying (fey) d": MasterworkWeaponProperties.slayingFeyD,
			"master: slaying (fiends) d":
				MasterworkWeaponProperties.slayingFiendD,
			"master: slaying (giants) d":
				MasterworkWeaponProperties.slayingGiantD,
			"master: slaying (monstrosities) d":
				MasterworkWeaponProperties.slayingMonstrosityD,
			"master: slaying (oozes) d":
				MasterworkWeaponProperties.slayingOozeD,
			"master: slaying (plants) d":
				MasterworkWeaponProperties.slayingPlantD,
			"master: slaying (undead) d":
				MasterworkWeaponProperties.slayingUndeadD,
			"master: vampiric d": MasterworkWeaponProperties.vampiricD,
			"master: venom d": MasterworkWeaponProperties.venomD,
			"legendary: crushing d": MasterworkWeaponProperties.crushingD,
			"legendary: deadly d": MasterworkWeaponProperties.deadlyD,
			"legendary: magical d":
				MasterworkWeaponProperties.legendarymagicalD,
			"legendary: penetrating d": MasterworkWeaponProperties.penetratingD,
			"legendary: seeking d": MasterworkWeaponProperties.seekingD,
			"legendary: threatening d": MasterworkWeaponProperties.threateningD,
			"legendary: vorpal d": MasterworkWeaponProperties.vorpalD,
			"legendary: whirlwind d": MasterworkWeaponProperties.whirlwindD,

			"apprentice: aerodynamic e":
				MasterworkWeaponProperties.aerodynamicE,
			"apprentice: automatic e": MasterworkWeaponProperties.automaticE,
			"apprentice: balanced e": MasterworkWeaponProperties.balancedE,
			"apprentice: concealable e":
				MasterworkWeaponProperties.concealableE,
			"apprentice: elegant e": MasterworkWeaponProperties.elegantE,
			"apprentice: exotic e": MasterworkWeaponProperties.exoticE,
			"apprentice: extended magazine e":
				MasterworkWeaponProperties.extendedmagE,
			"apprentice: finesse e": MasterworkWeaponProperties.finesseE,
			"apprentice: firearm e": MasterworkWeaponProperties.firearmE,
			"apprentice: fist e": MasterworkWeaponProperties.fistE,
			"apprentice: foregrip e": MasterworkWeaponProperties.foregripE,
			"apprentice: heavy e": MasterworkWeaponProperties.heavyE,
			"apprentice: light e": MasterworkWeaponProperties.lightE,
			"apprentice: loading e": MasterworkWeaponProperties.loadingE,
			"apprentice: martial e": MasterworkWeaponProperties.martialE,
			"apprentice: parrying e": MasterworkWeaponProperties.parryingE,
			"apprentice: reach e": MasterworkWeaponProperties.reachE,
			"apprentice: reload e": MasterworkWeaponProperties.reloadE,
			"apprentice: returning e": MasterworkWeaponProperties.returningE,
			"apprentice: scatter e": MasterworkWeaponProperties.scatterE,
			"apprentice: sighted e": MasterworkWeaponProperties.sightedE,
			"apprentice: superheavy e": MasterworkWeaponProperties.superheavyE,
			"apprentice: switch e": MasterworkWeaponProperties.switchE,
			"apprentice: thrown e": MasterworkWeaponProperties.thrownE,
			"apprentice: trip e": MasterworkWeaponProperties.tripE,
			"apprentice: two-handed e": MasterworkWeaponProperties.twohandedE,
			"apprentice: versatile e": MasterworkWeaponProperties.versatileE,
			"journeyman: counterweighted e":
				MasterworkWeaponProperties.counterweightedE,
			"journeyman: double e": MasterworkWeaponProperties.doubleE,
			"journeyman: explosive e": MasterworkWeaponProperties.explosiveE,
			"journeyman: heat e": MasterworkWeaponProperties.heatE,
			"journeyman: magical e":
				MasterworkWeaponProperties.journeymanmagicalE,
			"journeyman: massive e": MasterworkWeaponProperties.massiveE,
			"journeyman: mounted e": MasterworkWeaponProperties.mountedE,
			"journeyman: precision e": MasterworkWeaponProperties.precisionE,
			"journeyman: rocket e": MasterworkWeaponProperties.rocketE,
			"journeyman: sniper e": MasterworkWeaponProperties.sniperE,
			"journeyman: tension e": MasterworkWeaponProperties.tensionE,
			"journeyman: twinshot e": MasterworkWeaponProperties.twinshotE,
			"master: adamantine e": MasterworkWeaponProperties.adamantineE,
			"master: blessed e": MasterworkWeaponProperties.blessedE,
			"master: earthshatter e": MasterworkWeaponProperties.earthshatterE,
			"master: elemental (acid) e":
				MasterworkWeaponProperties.elementalacidE,
			"master: elemental (cold) e":
				MasterworkWeaponProperties.elementalcoldE,
			"master: elemental (fire) e":
				MasterworkWeaponProperties.elementalfireE,
			"master: elemental (lightning) e":
				MasterworkWeaponProperties.elementallightningE,
			"master: elemental (thunder) e":
				MasterworkWeaponProperties.elementalthunderE,
			"master: keen e": MasterworkWeaponProperties.keenE,
			"master: magical e": MasterworkWeaponProperties.mastermagicalE,
			"master: mithral e": MasterworkWeaponProperties.mithralE,
			"master: serrated e": MasterworkWeaponProperties.serratedE,
			"master: slaying e": MasterworkWeaponProperties.slayingSpecialE,
			"master: slaying (aberrations) e":
				MasterworkWeaponProperties.slayingAberrationE,
			"master: slaying (beasts) e":
				MasterworkWeaponProperties.slayingBeastE,
			"master: slaying (celestials) e":
				MasterworkWeaponProperties.slayingCelestialE,
			"master: slaying (constructs) e":
				MasterworkWeaponProperties.slayingConstructE,
			"master: slaying (dragons) e":
				MasterworkWeaponProperties.slayingDragonE,
			"master: slaying (elementals) e":
				MasterworkWeaponProperties.slayingElementalE,
			"master: slaying (fey) e": MasterworkWeaponProperties.slayingFeyE,
			"master: slaying (fiends) e":
				MasterworkWeaponProperties.slayingFiendE,
			"master: slaying (giants) e":
				MasterworkWeaponProperties.slayingGiantE,
			"master: slaying (monstrosities) e":
				MasterworkWeaponProperties.slayingMonstrosityE,
			"master: slaying (oozes) e":
				MasterworkWeaponProperties.slayingOozeE,
			"master: slaying (plants) e":
				MasterworkWeaponProperties.slayingPlantE,
			"master: slaying (undead) e":
				MasterworkWeaponProperties.slayingUndeadE,
			"master: vampiric e": MasterworkWeaponProperties.vampiricE,
			"master: venom e": MasterworkWeaponProperties.venomE,
			"legendary: crushing e": MasterworkWeaponProperties.crushingE,
			"legendary: deadly e": MasterworkWeaponProperties.deadlyE,
			"legendary: magical e":
				MasterworkWeaponProperties.legendarymagicalE,
			"legendary: penetrating e": MasterworkWeaponProperties.penetratingE,
			"legendary: seeking e": MasterworkWeaponProperties.seekingE,
			"legendary: threatening e": MasterworkWeaponProperties.threateningE,
			"legendary: vorpal e": MasterworkWeaponProperties.vorpalE,
			"legendary: whirlwind e": MasterworkWeaponProperties.whirlwindE,
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/\b[a-e]\b/i.test(v.WeaponTextName) && v.isWeapon) {
							// add magical property if correct level
							if (
								classes.known.craftsman.level >= 6 &&
								!/magical/i.test(fields.Description)
							)
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Counts as magical";

							// remove special properties
							if (/special/i.test(fields.Description)) {
								fields.Description = fields.Description.replace(
									/special[,; ]*/i,
									""
								);
								fields.Description_Tooltip = "";
							}

							// rebalance assault rifle
							if (/assault rifle/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "2d6+1";

								// seek reload property to change capacity to 10
								var split =
									fields.Description.split("reload (");
								split[1] = split[1].replace(/\d+/, "");
								fields.Description =
									split[0] + "reload (10" + split[1];
							}

							// rebalance bayonet
							else if (/bayonet/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "1d6";
								fields.Description = "Finesse, light";
								fields.Description_Tooltip = "";
							}

							// rebalance the whip
							else if (/whip/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "1d6";
							}

							// rebalance the boomerang/doomerang/throwing dagger
							else if (
								/[bd]oomerang/i.test(v.WeaponTextName) ||
								/throwing dagger/i.test(v.WeaponTextName)
							) {
								// change the range
								var rangeFld = fields.Range;
								rangeFld = rangeFld.replace("Melee", "");
								rangeFld = rangeFld.replace(",", "");
								rangeFld = rangeFld.replace("(", "");
								rangeFld = rangeFld.replace(")", "");
								rangeFld = rangeFld.replace("ft", "");
								rangeFld = rangeFld.replace(" ", "");
								rangeFld = rangeFld.replace(".", "");

								var ranges = rangeFld.split("/");
								if (ranges.length < 2) return;
								var oldN = ranges[0];
								var oldL = ranges[1];
								var newN = parseInt(ranges[0]) + 40;
								var newL = parseInt(ranges[1]) + 120;
								fields.Range = fields.Range.replace(
									oldN + "/" + oldL,
									newN + "/" + newL + " "
								);

								// add aerodynamic to the description
								fields.Description +=
									(fields.description == "" ? "" : "; ") +
									"Aerodynamic";
							}

							// rebalance the catchpole
							else if (/catchpole/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "1d8";
								fields.Description = "Reach, two-handed";
								fields.Description_Tooltip = "";
							}

							// rebalance the trident
							else if (/trident/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "1d8";
							}

							// rebalance the gatling gun
							else if (/gatling gun/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "2d8+1";

								// seek reload property to change capacity to 10
								var split =
									fields.Description.split("reload (");
								split[1] = split[1].replace(/\d+/, "");
								fields.Description =
									split[0] + "reload (10" + split[1];
							}

							// rebalance handaxe
							else if (/handaxe/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "1d4";
							}

							// rebalance handgun/revolver
							else if (
								/handgun/i.test(v.WeaponTextName) ||
								/revolver/i.test(v.WeaponTextName)
							) {
								fields.Range = "50/200 ft";
							}

							// rebalance hunting rifle
							else if (/hunting rifle/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "2d6+1";
							}

							// rebalance javelin
							else if (/javelin/i.test(v.WeaponTextName)) {
								fields.Range = "Melee, 20/60 ft";
							}

							// rebalance lance
							else if (/lance/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "1d8";
								fields.Description = "Reach, two-handed";
								fields.Description_Tooltip = "";
							}

							// rebalance light cannon
							else if (
								/\blight cannon\b/i.test(v.WeaponTextName)
							) {
								fields.Damage_Die = "2d12+1";
							}

							// rebalance longbow
							else if (/longbow/i.test(v.WeaponTextName)) {
								fields.Range = "100/400 ft";
							}

							// rebalance magnum/explosive magnum
							else if (/magnum/i.test(v.WeaponTextName)) {
								fields.Description +=
									(fields.Description == "" ? "" : "; ") +
									"two-handed";
								fields.Range = "100/400 ft";
							}

							// rebalance musket/volley gun
							else if (
								/musket/i.test(v.WeaponTextName) ||
								/volley gun/i.test(v.WeaponTextName)
							) {
								fields.Damage_Die = "2d8+1";
							}

							// rebalance parlor gun
							else if (/parlor gun/i.test(v.WeaponTextName)) {
								fields.Damage_Die = "2d4+1";
							}

							// rebalance rocket launcher
							else if (
								/rocket launcher/i.test(v.WeaponTextName)
							) {
								fields.Damage_Die = "2d12+1";
								fields.Description +=
									(fields.Description == "" ? "" : "; ") +
									"Mounted";
								fields.Description_Tooltip +=
									(fields.Description_Tooltip == ""
										? ""
										: "\n") +
									"Mounted: This weapon is normally used while attached to a tripod, vehicle, or other bracing mount. You can mount or unmount this weapon as an action. While it is mounted, it can't be moved. It can only be used to make an attack while unmounted if held by a Medium or larger creature with a Strength score of at least 15.";
							}
						}
					},
					"",
					100,
				],
				// this calc adds a +1 to hit to a weapon assumed to a masterwork.
				atkCalc: [
					function (fields, v, output) {
						if (
							/\b[a-e]\b/i.test(v.WeaponTextName) &&
							v.isWeapon &&
							!/\+[\d]/.test(v.WeaponTextName)
						) {
							output.extraHit += 1;
						}
					},
					'Any non-magical weapon that I add the letters "A" to "E" to will become a Masterwork weapon, gaining a +1 bonus to hit. Certain weapons are rebalanced when they become Masterworks: Assault Rifles, Bayonets, Whips, Boomerangs, Doomerangs, Throwing Daggers, Catchpoles, Tridents, Gatling Guns, Handaxes, Handguns, Revolvers, Hunting Rifles, Javelins, Lances, Light Cannons, Longbows, Magnums, Explosive Magnums, Muskets, Volley Guns, Parlor Guns, & Rocket Launchers. The following weapons cannot be modified by masterworks: Blowguns, Bolas, Bombs, Nets.',
					100,
				],
			},
			toNotesPage: [
				{
					name: "Masterwork Properties",
					note: [
						"Masterwork items can be modified with masterwork properties, which come in",
						"4 levels: Apprentice, Journeyman, Master, & Legendary.",
						"I can add any number of apprentice properties to a masterwork weapon, and",
						"up to 3 apprentice properties to a masterwork armor.",
						"I can also add 1 journeyman, 1 master, and 1 legendary property to each",
						"masterwork item.",
						"If I add a master or legendary property to a masterwork item, only I can use it.",
					],
					amendTo: "Craftsman's Tools",
				},
				{
					name: "Modifying Equipment",
					note: [
						"Using Active Crafting, I can modify an item during a long rest:",
						"- Improving Equipment: I can make any nonmagical weapon or suit of armor",
						"  masterwork using 50 gp of materials.",
						"- Adding Masterwork Properties: I can add masterwork properties to",
						"  masterwork items. Adding masterwork properties of Journeyman level or",
						"  higher requires a material cost in gp, and also requires you to be of a high",
						"  enough level in this class, as shown in the Masterwork Properties table below.",
						"  When I learn a new level of masterwork properties, I can apply a property of",
						"  that level to 1 masterwork item at no cost.",
						"  Whenever I modify the properties of a masterwork weapon, I can change the",
						"  damage type of the weapon to bludgeoning, slashing, or piercing, if its",
						"  damage type was one of those types.",
						"- Removing Properties: I can remove any property of a masterwork item, unless",
						"  it is a prerequisite for another masterwork property on the item.",
						"  If I replace a masterwork property with another of the same level, I can do so",
						"  without an additional cost in materials.",
					],
					amendTo: "Masterwork Properties",
				},
				{
					name: "Masterwork Properties Table",
					note: [
						"Property Level             Craftsman Level          Gp Cost",
						"Apprentice                            2nd                        -",
						"Journeyman                          5th                     100 gp",
						"Master                                  11th                    250 gp",
						"Legendary                            17th                    400 gp",
					],
					amendTo: "Modifying Equipment",
				},
				{
					name: "Crafting Ability",
					note: [
						"Intelligence is the primary ability I use for crafting items. I use my Intelligence",
						"modifer when setting the saving throw DC for items I craft: 8 + Int Mod + Prof",
						"Bonus.",
					],
					amendTo: "Masterwork Properties Table",
				},
				{
					name: "Masterwork Weapon Exceptions",
					note: [
						"Weapons that have been masterworked lose their Special properties. The",
						"following weapons' stats are changed upon being modified by the Craftsman:",
						"- Assault rifles' damage dice changes to 2d6 + 1 and gain Reload(10).",
						"- Bayonets' and whips' damages dice change to 1d6.",
						"- Blowguns, bolas, bombs, & nets cannot have masterwork properties.",
						"- Boomerangs, doomerangs, & throwing daggers gain Aerodynamic.",
						"- Catchpoles' & tridents' damage dice change to 1d8.",
						"- Gatling guns' damage dice change to 2d8 + 1, and gain Reload(10).",
						"- Handaxes' damage dice change to 1d4.",
						"- Handguns' & revolvers' range changes to 50/200 ft.",
						"- Hunting rifles' damage dice change to 2d6 + 1.",
						"- Javelins' range changes to 20/60 ft.",
						"- Lances' damage dice changes to 1d8, and gains two-handed.",
						"- Light Cannons' damage dice change to 2d12 + 1.",
						"- Longbows' range changes to 100/400 ft.",
						"- Magnums' & explosive magnums' ranges change to 100/400 ft, and gain",
						"  two-handed.",
						"- Muskets' & volley guns' damage dice change to 2d8 + 1.",
						"- Parlor guns' damage dice change to 2d4 + 1.",
						"- Rocket Launchers' damage dice change to 2d12+1 and gain Mounted.",
					],
					amendTo: "Crafting Ability",
				},
			],
		},
		"tool belt": {
			name: "Tool Belt",
			source: ["VSoS", 66],
			minlevel: 2,
			description: desc([
				"I can use an action to retrieve a piece of non-magical gear worth 50 gp or less from my tool",
				"belt. The item cannot be a weapon/armor/shield/potion, and disappears after a long rest.",
			]),
			usages: "Int mod (minimum of 1) x per ",
			usagescalc:
				'event.value = Math.max(1, this.getField("Int Mod").value);',
			recovery: "long rest",
			action: ["action", " (Retrieve item)"],

			// create masterwork armor properties
			extrachoices: [
				"Apprentice: Cleated",
				"Apprentice: Climbing",
				"Apprentice: Comfortable",
				"Apprentice: Environmental",
				"Apprentice: Exotic",
				"Apprentice: Integrated",
				"Apprentice: Quick-Change",
				"Apprentice: Retractable",
				"Apprentice: Scaled",
				"Apprentice: Spiked",
				"Journeyman: Adamantine",
				"Journeyman: Arcane",
				"Journeyman: Arrow-Catching",
				"Journeyman: Diving",
				"Journeyman: Juggernaut",
				"Journeyman: Maneuvering",
				"Journeyman: Mithral",
				"Journeyman: Resistance, Acid",
				"Journeyman: Resistance, Cold",
				"Journeyman: Resistance, Fire",
				"Journeyman: Resistance, Force",
				"Journeyman: Resistance, Lightning",
				"Journeyman: Resistance, Necrotic",
				"Journeyman: Resistance, Poison",
				"Journeyman: Resistance, Radiant",
				"Journeyman: Resistance, Thunder",
				"Master: Animated",
				"Master: Cloaking",
				"Master: Clockwork",
				"Master: Glamoured",
				"Master: Trollskin",
				"Master: Winged",
				"Legendary: Colossal",
				"Legendary: Etherealness",
				"Legendary: Fleet",
				"Legendary: Immortal",
				"Legendary: Mirrored",
				"Legendary: Spellguard",
				"Legendary: Warding",
			],
			extraname: "Masterwork Armor Properties",
			"apprentice: cleated": {
				name: "Apprentice: Cleated",
				source: ["VSoS", 86],
				additional: "Prereq: Medium/Heavy",
				prereqeval: function (v) {
					if (/Apprentice: Cleated/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},
				description: desc([
					"Movement against my will while wearing this armor is reduced by 10 feet.",
				]),
			},
			"apprentice: climbing": {
				name: "Apprentice: Climbing",
				source: ["VSoS", 86],
				additional: "Prereq: Exotic, Light",
				prereqeval: function (v) {
					if (/Apprentice: Climbing/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},
				description: desc([
					"While wearing this armor, I gain a climbing speed equal to my walking speed, as long as",
					"I have 1 hand free.",
				]),
				speed: { climb: { spd: "walk" } },
			},
			"apprentice: comfortable": {
				name: "Apprentice: Comfortable",
				source: ["VSoS", 86],
				additional: "Prereq: None",
				prereqeval: function (v) {
					if (/Apprentice: Comfortable/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},
				description: desc([
					"I can sleep in this armor with no ill effect.",
				]),
			},
			"apprentice: environmental": {
				name: "Apprentice: Environmental",
				source: ["VSoS", 86],
				additional: "Prereq: None",
				prereqeval: function (v) {
					if (/Apprentice: Environmental/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},
				description: desc([
					"While wearing this armor, I can tolerate temperatures within -100°F and 200°F.",
				]),
			},
			"apprentice: exotic": {
				name: "Apprentice: Exotic",
				source: ["VSoS", 86],
				additional: "Prereq: Not exotic",
				prereqeval: function (v) {
					if (/Apprentice: Exotic/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},
				description: desc([
					"This armor becomes exotic armor, and it has a +1 bonus to AC.",
				]),
				extraAC: [
					{
						mod: 1,
						name: "Exotic",
						magic: false,
						text: "This armor has the Exotic masterwork property and grants a +1 bonus to its wearer's AC.",
						stopeval: function (v) {
							return !/masterwork/i.test(
								What("AC Armor Description")
							);
						},
					},
				],
			},
			"apprentice: integrated": {
				name: "Apprentice: Integrated",
				source: ["VSoS", 86],
				additional: "Prereq: Exotic",
				prereqeval: function (v) {
					if (
						/Apprentice: Integrated \(Masterwork Armor/g.test(
							What("Extra.Notes")
						)
					)
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},
				description: desc([
					"I can integrate 1 weapon/two non-two-handed weapons into this armor. While holding an",
					"integrated weapon, I can't be disarmed of it. I can switch which weapons are integrated",
					"during a long rest.",
				]),
			},
			"apprentice: quick-change": {
				name: "Apprentice: Quick-Change",
				source: ["VSoS", 86],
				additional: "Prereq: None",
				prereqeval: function (v) {
					if (/Apprentice: Quick-Change/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},
				description: desc([
					"I can don or doff this suit of armor as an action.",
				]),
				action: ["action", "Don/Doff Quick-Change Armor"],
			},
			"apprentice: retractable": {
				name: "Apprentice: Retractable",
				source: ["VSoS", 86],
				additional: "Prereq: Exotic, Medium/Heavy",
				prereqeval: function (v) {
					if (/Apprentice: Retractable/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},

				description: desc([
					"While wearing this armor, I can don/doff the armor's retractable shield as a bonus action.",
				]),
				action: ["bonus action", "Don/Doff Retractable Shield"],
			},
			"apprentice: scaled": {
				name: "Apprentice: Scaled",
				source: ["VSoS", 86],
				additional: "Prereq: Exotic, Light",
				prereqeval: function (v) {
					if (/Apprentice: Scaled/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},

				description: desc([
					"This armor's AC increases by 3. My Dex mod can only add a max of +2 to this armor.",
				]),
				extraAC: [
					{
						mod: "3",
						name: "Scaled",
						magic: false,
						text: "This armor has the Scaled masterwork property and grants a +3 bonus to its wearer's AC. The wearer's Dex mod can only add +2 to this armor's AC.",
						stopeval: function (v) {
							return (
								!/masterwork/i.test(
									What("AC Armor Description")
								) ||
								v.mediumArmor ||
								v.heavyArmor
							);
						},
					},
					{
						mod: "2-Dex",
						name: "Scaled Restriction",
						magic: false,
						text: "This armor has the Scaled masterwork property and grants a +3 bonus to its wearer's AC. The wearer's Dex mod can only add +2 to this armor's AC.",
						stopeval: function (v) {
							return (
								!/masterwork/i.test(
									What("AC Armor Description")
								) ||
								v.mediumArmor ||
								v.heavyArmor ||
								What("Dex Mod") <= 2
							);
						},
					},
				],
			},
			"apprentice: spiked": {
				name: "Apprentice: Spiked",
				source: ["VSoS", 86],
				additional: "Prereq: Heavy",
				prereqeval: function (v) {
					if (/Apprentice: Spiked/.test(What("Extra.Notes")))
						return true;
					else {
						var foundAppArmor = What("Extra.Notes").match(
							/Apprentice: .+ \(Masterwork Armor/g
						);

						if (foundAppArmor) return foundAppArmor.length < 3;
						else return true;
					}
				},

				description: desc([
					"While wearing this armor, creatures touching me take 1d4 + my STR mod piercing damage at",
					"the start of my turn.",
				]),
			},
			"journeyman: adamantine": {
				name: "Journeyman: Adamantine",
				source: ["VSoS", 86],
				additional: "Prereq: Exotic, Heavy",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Adamantine \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, critical hits against me become normal hits.",
				]),
			},
			"journeyman: arcane": {
				name: "Journeyman: Arcane",
				source: ["VSoS", 87],
				additional: "Prereq: Exotic",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Arcane \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"When I apply this armor property, I gain 2 wizard cantrips of my choice.",
					"Intelligence is my spellcasting modifier for these cantrips.",
				]),
				spellcastingBonus: [
					{
						name: "Arcane Masterwork Armor Property",
						times: 2,
						firstCol: "AA",
						class: ["wizard"],
						level: [0, 0],
						spellcastingAbility: 4,
					},
				],
			},
			"journeyman: arrow-catching": {
				name: "Journeyman: Arrow-Catching",
				source: ["VSoS", 87],
				additional: "Prereq: Exotic, Medium/Heavy",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Arrow-Catching \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"When a creature makes a ranged attack against a target within 5 feet of me, I can use my",
					"reaction to become the target of the attack instead.",
				]),
				action: ["reaction", "Arrow-Catch"],
			},
			"journeyman: diving": {
				name: "Journeyman: Diving",
				source: ["VSoS", 87],
				additional: "Prereq: Exotic",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Diving \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I gain a swim speed equal to my walking speed. The armor contains",
					"8 hrs of air that I can use to breath normally underwater or in a vacuum, and am immune to",
					"the effects of inhaled poisons. The armor's air is replenished on a long rest.",
				]),
				speed: { swim: { spd: "walk" } },
				savetxt: {
					immune: ["inhaled poisons while breathing via armor"],
				},
			},
			"journeyman: juggernaut": {
				name: "Journeyman: Juggernaut",
				source: ["VSoS", 87],
				additional: "Prereq: Exotic, Heavy",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Juggernaut \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I count as an obstacle providing three-quarters cover.",
					"I must have a Strength score of 16 or higher to wear this armor.",
				]),
			},
			"journeyman: maneuvering": {
				name: "Journeyman: Maneuvering",
				source: ["VSoS", 87],
				additional: "Prereq: Exotic, Light/Medium",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Maneuvering \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"As a reaction when I fall or as a bonus action on my turn, I can pull myself to a target location",
					"that I can see and is no further than my walking speed, as long as the target location can hold",
					"my weight. This movement doesn't provoke opportunity attacks.",
					"I must have a Strength score of 16 or higher to wear this armor.",
				]),
				action: [
					["bonus action", "Grappling Hook"],
					["reaction", "Grappling Hook (when falling)"],
				],
			},
			"journeyman: mithral": {
				name: "Journeyman: Mithral",
				source: ["VSoS", 87],
				additional: "Prereq: Exotic, Medium/Heavy",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Mithral \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"This armor weighs half as much as it normally does, has no Strength requirement, and doesn't",
					"impose disadvantage on Dexterity (Stealth) checks. If the armor is Medium armor, the max",
					"Dex mod bonus I can add to my AC increases to 3, instead of 2, and the armor can easily be",
					"worn hidden under normal clothing.",
				]),
				extraAC: [
					{
						mod: 1,
						name: "Mithral",
						text: "This armor has the Mithral masterwork property. If it is medium armor, the maximum Dexterity modifier you can apply to your AC increases to 3, instead of 2.",
						magic: false,
						stopeval: function (v) {
							return (
								!/masterwork/i.test(
									What("AC Armor Description")
								) ||
								!v.mediumArmor ||
								v.heavyArmor ||
								What("Dex Mod") <= 2
							);
						},
					},
				],
			},
			"journeyman: resistance, acid": {
				name: "Journeyman: Acid Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Acid Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to acid damage.",
				]),
				dmgres: [["Acid", "Acid (from armor)"]],
			},
			"journeyman: resistance, cold": {
				name: "Journeyman: Cold Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Cold Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to cold damage.",
				]),
				dmgres: [["Cold", "Cold (from armor)"]],
			},
			"journeyman: resistance, fire": {
				name: "Journeyman: Fire Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Fire Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to fire damage.",
				]),
				dmgres: [["Fire", "Fire (from armor)"]],
			},
			"journeyman: resistance, force": {
				name: "Journeyman: Force Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Force Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to force damage.",
				]),
				dmgres: [["Force", "Force (from armor)"]],
			},
			"journeyman: resistance, lightning": {
				name: "Journeyman: Lightning Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Lightning Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to lightning damage.",
				]),
				dmgres: [["Lightning", "Lightning (from armor)"]],
			},
			"journeyman: resistance, necrotic": {
				name: "Journeyman: Necrotic Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Necrotic Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to necrotic damage.",
				]),
				dmgres: [["Necrotic", "Necrotic (from armor)"]],
			},
			"journeyman: resistance, poison": {
				name: "Journeyman: Poison Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Poison Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to poison damage.",
				]),
				dmgres: [["Poison", "Poison (from armor)"]],
			},
			"journeyman: resistance, radiant": {
				name: "Journeyman: Radiant Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Radiant Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to radiant damage.",
				]),
				dmgres: [["Radiant", "Radiant (from armor)"]],
			},
			"journeyman: resistance, thunder": {
				name: "Journeyman: Thunder Resistance",
				source: ["VSoS", 88],
				additional: "Prereq: None",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 5 &&
						(/Journeyman: Thunder Resistance \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Journeyman: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have resistance to thunder damage.",
				]),
				dmgres: [["Thunder", "Thunder (from armor)"]],
			},
			"master: animated": {
				name: "Master: Animated",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic, Heavy; 1 / long rest",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 11 &&
						(/Master: Animated \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Master: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"As an action, I can doff the armor, which animates as per the animate objects spell. The",
					"armor's AC equals my own when I wore it, has 40 hit points, and uses my own melee attack",
					"bonus. If I was holding a weapon when the armor animated, it can make 1 attack with the",
					"weapon instead of using its slam attack. The armor remains animated for 1 minute, or until it",
					"reaches 0 hitpoints, or I dismiss it as an action. When I dismiss it, if it is within 30 feet of me, I",
					"can command it to return to me and don the armor as part of the same action.",
				]),
				action: [
					["action", "Animate/Dismiss Armor"],
					["bonus action", "Command Armor"],
				],
				extraLimitedFeatures: [
					{
						name: "Animate Armor",
						usages: 1,
						recovery: "long rest",
					},
				],
			},
			"master: cloaking": {
				name: "Master: Cloaking",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic, Light; 1 / short rest",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 11 &&
						(/Master: Cloaking \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Master: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I can cast the invisibility spell at will.",
				]),
				action: [["action", "Activate Cloaking"]],
				extraLimitedFeatures: [
					{
						name: "Activate Cloaking",
						usages: 1,
						recovery: "short rest",
					},
				],
				spellcastingBonus: [
					{
						name: "Cloaking Armor Property",
						spells: ["invisibility"],
						selection: ["invisibility"],
						firstCol: "oncesr",
					},
				],
				spellChanges: {
					invisibility: {
						components: "",
						changes:
							"When I cast this spell using my armor, I can cast it at will once per short rest.",
					},
				},
			},
			"master: clockwork": {
				name: "Master: Clockwork",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic, Heavy",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 11 &&
						(/Master: Clockwork \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Master: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, my jump distance is tripled, and I have advantage on Strength",
					"(Athletics) checks (except grapples), and when I take the Dodge action, my AC becomes 22, if",
					"it was lower.",
				]),
			},
			"master: glamoured": {
				name: "Master: Glamoured",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 11 &&
						(/Master: Glamoured \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Master: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"This armor doesn't impose disadvantage on Dexterity (Stealth) checks. I can use a bonus",
					"action to make the armor appear as a normal set of clothing or some other kind of armor,",
					"retaining its normal bulk and weight. The illusion lasts until I use this ability again or remove",
					"the armor.",
				]),
			},
			"master: trollskin": {
				name: "Master: Trollskin",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic, Medium; 1 / short rest",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 11 &&
						(/Master: Trollskin \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Master: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I can use a bonus action to regain hit points equal to 1d10 + my",
					"craftsman level.",
				]),
				action: ["bonus action", "Activate Trollskin"],
			},
			"master: winged": {
				name: "Master: Winged",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic, Light",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 11 &&
						(/Master: Winged \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Master: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I can use a bonus action extend/contract wings. While wings are",
					"extended, I gain a fly speed equal to my walking speed.",
				]),
				speed: { fly: { spd: "walk" } },
				action: ["bonus action", "Extend/Contract Wings"],
			},
			"legendary: colossal": {
				name: "Legendary: Colossal",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic, Heavy",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 17 &&
						(/Legendary: Colossal \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Legendary: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, my weight is multiplied by 8, my size increases by 1 category, I have",
					"advantage on Strength saves & checks, and my weapons deal an extra +1d4 damage.",
				]),
				savetxt: {
					text: [
						"advantage on STR saves while wearing Colossal armor",
					],
				},
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.isWeapon) {
								fields.Description +=
									(fields.Description == "" ? "" : "; ") +
									"Colossal Armor +1d4 dmg";
							}
						},
					],
				},
			},
			"legendary: etherealness": {
				name: "Legendary: Etherealness",
				source: ["VSoS", 88],
				additional: "Prereq: Exotic; 1 / long rest",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 17 &&
						(/Legendary: Etherealness \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Legendary: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I can use my action to gain the effect of the etherealness spell, which lasts for 10 minutes or until I use my action to end it.",
				]),
				action: ["action", "Activate Etherealness"],
				extraLimitedFeatures: [
					{
						name: "Activate Etherealness",
						usages: 1,
						recovery: "long rest",
					},
				],
				spellcastingBonus: [
					{
						name: "Etherealness Armor Property",
						spells: ["etherealness"],
						selection: ["etherealness"],
						firstCol: "oncelr",
					},
				],
				spellChanges: {
					etherealness: {
						duration: "10 min",
						description:
							"Go to Ethereal Plane; move there, but able to perceive 60 ft into the normal plane",
						components: "",
						changes:
							"When I cast Etherealness through my armor, it lasts up to 10 minutes instead of 8 hours.",
					},
				},
			},
			"legendary: fleet": {
				name: "Legendary: Fleet",
				source: ["VSoS", 89],
				additional: "Prereq: Exotic, Light",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 17 &&
						(/Legendary: Fleet \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Legendary: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, my speed increases by 10 feet, I have advantage on initiative rolls,",
					"and opportunity attacks against me are made with disadvantage.",
				]),
				speed: { allModes: "+10" },
			},
			"legendary: immortal": {
				name: "Legendary: Immortal",
				source: ["VSoS", 89],
				additional: "Prereq: Exotic, Medium/Heavy; 3/long rest",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 17 &&
						(/Legendary: Immortal \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Legendary: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"When I am reduced to 0 hit points but not killed outright, I can make a DC 13 Constitution",
					"save, dropping to 1 hit point on a success. I also have advantage on death saving throws.",
				]),
				extraLimitedFeatures: [
					{
						name: "Immortal",
						usages: 3,
						recovery: "long rest",
					},
				],
				savetxt: { adv_vs: ["death saves"] },
			},
			"legendary: mirrored": {
				name: "Legendary: Mirrored",
				source: ["VSoS", 89],
				additional: "Prereq: Exotic, Light; 1 / short rest",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 17 &&
						(/Legendary: Mirrored \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Legendary: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I can cast mirror image at will as a bonus action.",
				]),
				extraLimitedFeatures: [
					{
						name: "Activate Mirror Image",
						usages: 1,
						recovery: "short rest",
					},
				],
				spellcastingBonus: [
					{
						name: "Mirrored Armor Property",
						spells: ["mirror image"],
						selection: ["mirror image"],
						firstCol: "oncesr",
					},
				],
				spellChanges: {
					"mirror image": {
						time: "1 bns",
						components: "",
						changes:
							"When I cast this spell through my armor, I can cast it as a bonus action.",
					},
				},
				action: ["bonus action", "Activate Mirror Image"],
			},
			"legendary: spellguard": {
				name: "Legendary: Spellguard",
				source: ["VSoS", 89],
				additional: "Prereq: Exotic",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 17 &&
						(/Legendary: Spellguard \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Legendary: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"While wearing this armor, I have advantage on saves against spells.",
				]),
				savetxt: { adv_vs: ["spells"] },
			},
			"legendary: warding": {
				name: "Legendary: Warding",
				source: ["VSoS", 89],
				additional: "Prereq: Exotic, Medium",
				prereqeval: function (v) {
					return (
						classes.known.craftsman.level >= 17 &&
						(/Legendary: Warding \(Masterwork Armor/.test(
							What("Extra.Notes")
						) ||
							!/Legendary: .+ \(Masterwork Armor/.test(
								What("Extra.Notes")
							))
					);
				},
				description: desc([
					"As a bonus action, I gain temporary hit points equal to half my craftsman level.",
				]),
				action: ["bonus action", "Activate Warding"],
			},

			// this calcchange exists to:
			// resolve any +\d bonuses from damage die steps
			// determine new versatile/scatter/massive damage dice
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (/\+\d+/.test(output.die)) {
							// seek out bonuses in the die string and add them to extrahit
							var bonus = output.die.match(/\+\d+/);
							output.extraDmg = parseInt(bonus[0]);
							output.die = output.die.replace(/\+\d+/, "");
						}
					},
					"",
					199,
				],
				atkAdd: [
					function (fields, v) {
						// make sure this is working:
						// resolve foregrip range
						if (/foregrip/i.test(fields.Description)) {
							// calculate the range, increase by 50
							var newRange = ClassList["craftsman"].CalcNewRange(
								fields.Range,
								50
							);
							fields.Description = fields.Description.replace(
								"Foregrip",
								"Foregrip (" + newRange + " ft)"
							);
						}

						// resolve versatile dice
						if (
							/versatile \(\d+d\d+(\+\d+)*\)/i.test(
								fields.Description
							)
						) {
							var newVersDie = ClassList["craftsman"].CalcDieStep(
								fields.Damage_Die,
								true,
								1
							);
							fields.Description = fields.Description.replace(
								/versatile \(\d+d\d+(\+\d+)*\)/i,
								"Versatile (" + newVersDie + ")"
							);
						}

						// resolve scatter damage dice
						if (/scatter/i.test(fields.Description)) {
							var scatterDie = ClassList["craftsman"].CalcDieStep(
								fields.Damage_Die,
								true,
								2
							);
							fields.Description = fields.Description.replace(
								"Scatter",
								"Scatter (" + scatterDie + ")"
							);
						}

						// add dice from massive
						if (/massive/i.test(fields.Description)) {
							// add extra damage dice
							var dieSplit = fields.Damage_Die.split("d");
							dieSplit[0] =
								parseInt(dieSplit[0]) +
								(classes.attacks - 1) * 2;
							fields.Damage_Die = dieSplit[0] + "d" + dieSplit[1];
						}
					},
					"",
					198,
				],
			},
		},
		subclassfeature3: {
			name: "Artisan's Guild",
			source: ["VSoS", 66],
			minlevel: 3,
			description: desc([
				'Choose an Artisan\'s Guild you strive to gather under and put it in the "Class" field',
				"Choose either Arcane Maester, Arimger, Gearsmith, Gunsmith, Thunderlord, Trapsmith, or Weaponsmith.",
			]),
		},
		"folded steel": {
			name: "Folded Steel",
			source: ["VSoS", 66],
			minlevel: 6,
			description: desc([
				"Masterwork and exotic weapons I craft count as magical",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {},
					'Any non-magical weapon that I add the letters "A" to "E" to will become magical.',
				],
			},
		},
		"eye for quality": {
			name: "Eye for Quality",
			source: ["VSoS", 67],
			minlevel: 9,
			description: desc([
				"I can cast the identify spell at will. When cast this way, I learn the item's market value in gp.",
			]),
			spellcastingBonus: [
				{
					name: "Eye for Quality",
					spells: ["identify"],
					selection: ["identify"],
					firstCol: "atwill",
				},
			],
			spellChanges: {
				identify: {
					components: "",
					description:
						"1 magic item or magic-imbued crea/obj; learn properties, how to use, spells affecting it, market value",
					changes:
						"When cast using this feature, I also appraise the item, learning its market value in gold pieces.",
				},
			},
			action: ["action", " (Identify)"],
		},
		"flawless construction": {
			name: "Flawless Construction",
			source: ["VSoS", 67],
			minlevel: 13,
			description: desc([
				"My masterwork items don't show signs of aging, resist all damage, and can only be",
				"destroyed by effects that destroy magic items.",
			]),
		},
		"uncanny tool belt": {
			name: "Uncanny Tool Belt",
			source: ["VSoS", 67],
			minlevel: 15,
			description: desc([
				"I can use an action to retrieve a common/uncommon magical item from my tool belt.",
				"It remains in my possession until I take a long rest.",
			]),
			usages: 1,
			recovery: "long rest",
			action: ["action", " (Retrive magic item)"],
		},
		"magnum opus": {
			name: "Magnum Opus",
			source: ["VSoS", 67],
			minlevel: 20,
			description: desc([
				"I craft a single very rare/legendary magic item, attuned always & only to me while alive.",
				"It takes me 30 days to do this, I can only do this once. It doesn't count towards my max # of",
				"attunements. I can use a bonus action to call this item to my hand or body.",
			]),
			action: ["bonus action", "Call Magnum Opus"],
		},
	},
};

// * Arcane Maester Craftsman Subclass
AddSubClass("craftsman", "arcane maester", {
	regExpSearch: /^(?=.*arcane)(?=.*maester).*$/i,
	subname: "Arcane Maesters' Guild",
	source: ["VSoS", 67],
	fullname: "Arcane Maester",
	features: {
		subclassfeature3: {
			name: "Magic Item Crafting",
			source: ["VSoS", 67],
			minlevel: 3,
			description: desc([
				"Using Active Crafting, I can craft magic items. See the notes pages for details.",
			]),
			toNotesPage: [
				{
					name: "Magic Item Crafting",
					note: [
						"Using Active Crafting, I can the magic items below, as long as I meet the",
						"craftsman level requirement.",
						"I may only have a certain number of magic items crafted at one time:",
						"- 5 items from the 3rd level list",
						"- 3 items from the 7th level list",
						"- 3 items from the 10th level list",
						"- 2 items from the 14th level list",
						"In the process of creating a new magic item, I may dismantle a crafted magic",
						"item in order to build a new one from the same category.",
					],
				},
				{
					name: "3rd Level Magic Item Crafting List",
					amendTo: "Magic Item Crafting",
					source: ["VSoS", 68],
					note: [
						"Cost to craft: 100 gp",
						"Bag of Holding                                            Decanter of Endless Water",
						"Eyes of Minute Seeing                                 Folding Boat",
						"Goggles of Night                                         Handy Haversack",
						"Helm of Comprehending Languages          Immovable Rod",
						"Lantern of Revealing                                   Periapt of Health",
						"Rope of Climbing                                        Wand of Secrets",
					],
				},
			],
		},
		"subclassfeature3.1": {
			name: "Apprentice Property",
			source: ["VSoS", 68],
			minlevel: 3,
			description: "\n    I learn a new masterwork property: Enchanted.",
			extraname: "Apprentice Masterwork Weapon Property",
			enchanted: {
				name: "Enchanted",
				additional: "Prereq: None",
				source: ["VSoS", 68],
				description:
					"\n    I use Intelligence for this weapon's attack and damage rolls.",
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "enchanted",
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (/enchanted/i.test(v.WeaponTextName) && v.isWeapon) {
							// treat attack like masterwork. add magical property if correct level
							if (
								classes.known.craftsman.level >= 6 &&
								!/magical/i.test(fields.Description)
							)
								fields.Description +=
									(fields.Description ? "; " : "") +
									"Counts as magical";

							if (fields.Mod == 1) {
								if (What("Int Mod") >= What("Str Mod"))
									fields.Mod = 4;
							} else if (fields.Mod == 2) {
								if (What("Int Mod") >= What("Dex Mod"))
									fields.Mod = 4;
							} else if (fields.Mod == 3) {
								if (What("Int Mod") >= What("Con Mod"))
									fields.Mod = 4;
							} else if (fields.Mod == 5) {
								if (What("Int Mod") >= What("Wis Mod"))
									fields.Mod = 4;
							} else if (fields.Mod == 6) {
								if (What("Int Mod") >= What("Cha Mod"))
									fields.Mod = 4;
							}
						}
					},
					'If the word "Enchanted" is included in the name of a weapon attack, it is treated as having the Enchanted masterwork property, using Intelligence as the ability modifier.',
				],
				atkCalc: [
					function (fields, v, output) {
						// only add the masterwork +1 if it fits and hasn't already been added by a slot application
						if (
							/enchanted/i.test(v.WeaponTextName) &&
							!/\b[a-e]\b/i.test(v.WeaponTextName) &&
							v.isWeapon &&
							!/\+[\d]/.test(v.WeaponTextName)
						) {
							output.extraHit += 1;
						}
					},
				],
			},
		},
		subclassfeature7: {
			name: "Instant Attunement",
			source: ["VSoS", 68],
			minlevel: 7,
			description: desc([
				"I can use my action to attune/end attunement to a magic item.",
			]),
			usages: "Int mod",
			usagescalc: "event.value = What('Int Mod');",
			recovery: "short rest",
			action: ["action", " (attune/end)"],
			toNotesPage: [
				{
					name: "7th Level Magic Item Crafting List",
					amendTo: "3rd Level Magic Item Crafting List",
					source: ["VSoS", 68],
					note: [
						"Cost to craft: 250 gp",
						"Boots of Elvenkind                                      Circlet of Blasting",
						"Cloak of Elvenkind                                      Efficient Quiver",
						"Eyes of Charming                                        Pipes of Haunting",
						"Portable Hole                                              Ring of Jumping",
						"Ring of Water Walking                                Wand of Magic Missiles",
						"Wind Fan",
					],
				},
			],
		},
		subclassfeature10: {
			name: "Ephemeral Enchantment",
			source: ["VSoS", 69],
			minlevel: 10,
			description: desc([
				"I can spend 10 minutes to enchant 1 nonmagical weapon, or a short/long rest to enchant up",
				"to 6 nonmagical weapons. For the next 8 hours, each enchanted weapon counts as magical.",
			]),
			toNotesPage: [
				{
					name: "10th Level Magic Item Crafting List",
					amendTo: "7th Level Magic Item Crafting List",
					source: ["VSoS", 68],
					note: [
						"Cost to craft: 500 gp",
						"Boots of Striding and Springing                 Eversmoking Bottle",
						"Eyes of the Eagle                                        Gloves of Missile Snaring",
						"Hat of Disguise                                           Helm of Telepathy",
						"Periapt of Proof Against Poison                 Periapt of Wound Closure",
						"Ring of Feather Falling                                Ring of Mind Shielding",
						"Slippers of Spider Climbing                        Winged Boots",
					],
				},
			],
		},
		subclassfeature14: {
			name: "Sever Connection",
			source: ["VSoS", 69],
			minlevel: 14,
			description: desc([
				"As a reaction to being attacked or forced to make a save, I can end my attunement to 1 magic",
				"item. Until the start of my next turn, I gain a bonus to my AC and saves equal to my Int mod. ",
				"The total number of magic items I can attune to is reduced by 1 until I finish a short/long rest.",
			]),
			usages: 1,
			recovery: "short rest",
			action: ["reaction", ""],
			toNotesPage: [
				{
					name: "14th Level Magic Item Crafting List",
					amendTo: "10th Level Magic Item Crafting List",
					source: ["VSoS", 68],
					note: [
						"Cost to craft: 1000 gp",
						"Belt of Dwarvenkind                                    Boots of Levitation",
						"Boots of Speed                                            Cape of the Mountebank",
						"Cloak of the Bat                                           Gem of Seeing",
						"Horn of Blasting                                           Instant Fortress",
						"Iron Bands of Binding                                  Ring of Free Action",
						"Ring of the Ram                                          Ring of X-Ray Vision",
						"Wand of Enemy Detection                          Wand of Fear",
					],
				},
			],
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 69],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork armor property, which I can immediately apply: Resonant.",
			]),
			extraname: "Legendary Masterwork Armor Property",
			resonant: {
				name: "Resonant",
				source: ["VSoS", 69],
				additional: "Prereq: Exotic",
				description: desc([
					"By spending a short rest focusing on a magic item while wearing this armor, I can attune the",
					"item directly to the armor. I can use the magic item as though I were attuned to it while I am",
					"wearing this armor. I can attune up to 2 items to the armor, and end an item's attunement to",
					"the armor by spending another short rest focused on the item.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "resonant",
				},
			],
		},
	},
});

// * Armiger Craftsman Subclass
AddSubClass("craftsman", "armiger", {
	regExpSearch: /^(?=.*armiger).*$/i,
	subname: "Armigers' Guild",
	source: ["VSoS", 69],
	fullname: "Armiger",
	features: {
		subclassfeature3: {
			name: "Fighting Style",
			source: ["VSoS", 69],
			minlevel: 3,
			description: desc([
				'Choose a Fighting Style using the "Choose Feature" button above',
			]),
			choices: ["Defense", "Protection"],
			defense: FightingStyles.defense,
			protection: FightingStyles.protection,
		},
		subclassfeature7: {
			name: "Shining Steel",
			source: ["VSoS", 69],
			minlevel: 7,
			description: desc([
				"When I roll initiative and am not surprised, Creatures I choose within 60 ft of me that can see",
				"me must succeed a Wisdom save vs my Masterwork save DC or have disadvantage on any",
				"attack roll not targetting me on the 1st round of combat. A creature with an Int score of 3 or",
				"less automatically fail this save.",
			]),
		},
		subclassfeature10: {
			name: "Armor Reinforcement",
			source: ["VSoS", 69],
			minlevel: 10,
			description: desc([
				"I can spend 10 minutes with 1 suit of armor or a short/long rest with up to 6 suits of armor to",
				"reinforce them. This lasts until a creature wearing the armor is hit.",
			]),
			extraname: "Armiger's Guild 10",
			"reinforcement options": {
				name: "Armor Reinforcement",
				source: ["VSoS", 69],
				description: desc([
					"I can spend 10 minutes with 1 suit of armor or a short/long rest with up to 6 suits of armor to",
					"reinforce them. This lasts until a creature wearing the armor is hit.",
					"I have two reinforcement techniques:",
					"- Adamant: When a creature wearing this armor takes damage, it reduces the amount it",
					"takes by 1d8.",
					"- Banded: A creature wearing this armor has a +1 bonus to Armor Class.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "reinforcement options",
				},
			],
		},
		subclassfeature14: {
			name: "Fortify",
			source: ["VSoS", 69],
			minlevel: 14,
			description: desc([
				"I can use a bonus action to gain resistance to all damage until the end of my next turn.",
			]),
			usages: 1,
			recovery: "short rest",
			action: ["bonus action", ""],
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 69],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork armor property, which I can immediately apply: Invincible.",
			]),
			extraname: "Legendary Masterwork Armor Property",
			invincible: {
				name: "Invincible",
				source: ["VSoS", 69],
				additional: "Prereq: Exotic",
				description: desc([
					"While I am wearing this armor, bludgeoning, piercing, and slashing damage I take from",
					"nonmagical attacks are reduced by 5.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "invincible",
				},
			],
		},
	},
});

// * Mechanaut Craftsman Subclass
AddSubClass("craftsman", "mechanaut", {
	regExpSearch: /^(?=.*mechanaut).*$/i,
	subname: "Mechanauts' Guild",
	source: ["VSoS", 73],
	fullname: "Mechanaut",
	features: {
		subclassfeature3: {
			name: "Mechanaut's Apparatus",
			source: ["VSoS", 73],
			minlevel: 3,
			description: desc([
				"I complete the frame of a Mechanaut's Apparatus. See notes & companion pages.",
			]),
			toNotesPage: [
				{
					name: "Mechanaut's Apparatus",
					note: [
						"I can model my apparatus after any Beast, or as a Humanoid figure. The",
						"statistics of my apparatus is given in the companion pages.",
						"",
						"Customizing the Apparatus",
						"My apparatus comes with two installed masterwork weapons, which I can",
						"modify with masterwork properties or replace with different weapons when I",
						"finish a long rest. Only one installed weapon can be ranged. Furthermore, I can",
						"only load or reload an installed ranged weapon by using my action while I am",
						"inside the apparatus (or two actions if the weapon has the Mounted property).",
						"My apparatus is always proficient with its installed weapons, and can use",
						"masterwork weapons with Master and Legendary properties.",
						"",
						"Repairing the Apparatus",
						"When my apparatus drops to 0 hit points, it can't move or act, but can be",
						"repaired. I can spend 1 minute restoring the apparatus's ability to move at half",
						"speed, which it loses if it takes damage again before it is repaired. I can repair",
						"my apparatus at the end of a short rest by spending my Hit Dice, causing it to",
						"regain hit points as if it had taken a short rest. When I finish a long rest, I can",
						"repair my apparatus, causing it to regain all its hit points. I am always",
						"considered to have enough materials to repair my apparatus. If my apparatus is",
						"lost, I can build a new one for 400 gp.",
						"",
						"Attacking with the Apparatus",
						"The apparatus attacks with its integrated weapons as if I was wielding them,",
						"and uses my Dexterity or Intelligence modifier (my choice) for its attack and",
						"damage rolls, using the same modifier for both. When I take the Attack action,",
						"it makes the same number of attacks I normally would.",
					],
					popupName: "Mechanaut's Apparatus Notes",
					source: ["VSoS", 73],
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bintegrated\b/i.test(v.WeaponTextName) &&
							v.isWeapon
						) {
							var maxMod =
								What("Dex Mod") < What("Int Mod") ? 4 : 2;
							fields.Mod = maxMod;
						}
					},
					'If a weapon attack includes the word "Integrated" in its name, it is treated as a weapon that has been integrated into a Mechanaut\'s Apparatus, using my Dexterity or Intelligence modifier for its attack and damage rolls, whichever is higher.',
				],
			},
			creaturesAdd: ["Mechanaut's Apparatus"],
			creatureOptions: [
				{
					name: "Mechanaut's Apparatus",
					source: ["VSoS", 74],
					size: 2,
					type: "Construct",
					companion: "mechanaut's apparatus",
					companionApply: "mechanaut's apparatus",
					alignment: "Unaligned",
					ac: 13,
					hp: 30,
					hd: ["", ""],
					hdLinked: ["craftsman"],
					speed: "35 ft",
					proficiencyBonus: 2,
					challengeRating: "",
					scores: [17, 17, 18, 1, 3, 1],
					saves: ["", "", "", "", "", ""],
					senses: "Blindsight 120 ft (blind beyond this radius)",
					attacksAction: 1,
					attacks: [
						{
							name: "Ballista Cannon",
							ability: 4,
							damage: [5, 10, "piercing"],
							range: "5x60 ft line",
							abilitytodamage: false,
							isDC: true,
							description: "Dex save, half damage on save",
							modifiers: ["-Int+oInt", ""],
						},
					],
					damage_immunities: "poison, psychic",
					condition_immunities:
						"blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
					traits: [
						{
							name: "Cockpit Cover",
							description: desc([
								"Any creature inside the apparatus is granted total cover",
								"from outside effects, but takes half the damage taken by",
								"the apparatus.",
							]),
						},
						{
							name: "Double Two-Handed",
							description: desc([
								"The apparatus has two mechanical arms, each of which",
								"can hold one installed weapon. Each mechanical arm is",
								"powerful enough to wield weapons as if with two hands.",
							]),
						},
					],
					header: "Apparatus",
					calcChanges: {
						hp: function (totalHD, HDobj, prefix) {
							if (!classes.known.craftsman) return;
							conMod = 0;
							HDobj.fixed = 10 * classes.known.craftsman.level;
							HDobj.max = 10 * classes.known.craftsman.level;
						},
					},
					eval: function (prefix, lvl) {
						//AddString(prefix + 'Cnote.Left', "◆ .");
						Value(
							prefix + "Comp.Use.Attack.1.Weapon Selection",
							""
						);
					},
				},
			],
		},
		"subclassfeature3.1": {
			name: "Cockpit Upgrade",
			source: ["VSoS", 74],
			minlevel: 3,
			description: desc([
				'Choose a cockpit upgrade for your apparatus by using the "Choose Feature" button above.',
			]),
			choices: ["Comfortable Amenities", "Ejector Seat", "Loudspeaker"],
			"comfortable amenities": {
				name: "Comfortable Amenities Cockpit Upgrade",
				source: ["VSoS", 74],
				description: desc([
					"I can sleep in the apparatus without ill effect.",
				]),
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Comfortable Amenities:\n   A creature can sleep in the apparatus\n   without ill effect.";
							aFnc(prefix + "Comp.Use.Features", str, true);
						},
						"Mechanaut's Apparatuses I create are comfortable enough to sleep in without ill effect.",
					],
				},
			},
			"ejector seat": {
				name: "Ejector Seat Cockpit Upgrade",
				source: ["VSoS", 74],
				description: desc(["Exiting the apparatus costs no movement."]),
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Ejector's Seat:\n   Exiting the apparatus costs no\n   movement.";
							aFnc(prefix + "Comp.Use.Features", str, true);
						},
						"Mechanaut's Apparatuses I create can be exited with no movement cost.",
					],
				},
			},
			loudspeaker: {
				name: "Loudspeaker Cockpit Upgrade",
				source: ["VSoS", 74],
				description: desc([
					"The apparatus can amplify my voice up to 3 times louder than normal.",
				]),
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Loudspeaker:\n   The apparatus can amplify the piloting\n  creature's voice up to 3 times louder\n   than normal.";
							aFnc(prefix + "Comp.Use.Features", str, true);
						},
						"Mechanaut's Apparatuses I create can amplify the piloting creature's voice up to 3 times louder than normal.",
					],
				},
			},
		},
		subclassfeature7: {
			name: "Limb Upgrade",
			source: ["VSoS", 74],
			minlevel: 7,
			description: desc([
				'Choose a Limb Upgrade for your apparatus by using the "Choose Feature" button above.',
			]),
			choices: [
				"Arachnotron Legs",
				"Heavy Suspension",
				"Telescopic Frame",
			],
			"arachnotron legs": {
				name: "Arachnotron Legs Limb Upgrade",
				source: ["VSoS", 74],
				description: desc([
					"The apparatus has the Arachnotron Legs Limb Upgrade. See companion pages.",
				]),
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Arachnotron Legs:\n   The apparatus can move up, down, and\n   across vertical surfaces/ceilings.";
							var spdStr = "climb 35 ft";
							aFnc(prefix + "Comp.Use.Features", str, true);
							aFnc(prefix + "Comp.Use.Speed", spdStr, true);
						},
						"Mechanaut's Apparatuses I create can move up, down, and across vertical surfaces/ceilings, and have a climb speed equal to their walk speed.",
					],
				},
			},
			"heavy suspension": {
				name: "Heavy Suspension Limb Upgrade",
				source: ["VSoS", 74],
				description: desc([
					"The apparatus has the Heavy Suspension Limb Upgrade. See companion pages.",
				]),
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Heavy Suspension:\n   The apparatus's jump distance triples. It\n   takes no damage from falling a distance\n   of less than 100 feet.";
							aFnc(prefix + "Comp.Use.Features", str, true);
						},
						"Mechanaut's Apparatuses I create have a tripled jump distance, and take no damage from falling a distance of less than 100 feet.",
					],
				},
			},
			"telescopic frame": {
				name: "Telescopic Frame Limb Upgrade",
				source: ["VSoS", 74],
				description: desc([
					"The apparatus has the Telescopic Frame Limb Upgrade. See companion pages.",
				]),
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Telescopic Frame:\n   While no one is inside the apparatus, its\n   craftsman can use their bonus action to\n   command it to collapse down to Medium\n   size, or return to Large size. While\n   collapsed, the apparatus can't be\n   entered.";
							aFnc(prefix + "Comp.Use.Features", str, true);
						},
						"Mechanaut's Apparatuses I create can be collapsed to Medium Size or returned to Large, when I command them using a bonus action. A collapsed apparatus can't be entered.",
					],
				},
			},
		},
		subclassfeature10: {
			name: "Passenger Seat",
			source: ["VSoS", 74],
			minlevel: 10,
			description: desc([
				"The apparatus gains a Passenger Seat. See companion pages.",
			]),
			calcChanges: {
				companionCallback: [
					function (prefix, oCrea, bAdd, sCompType) {
						if (sCompType !== "mechanaut's apparatus") return;
						var aFnc = bAdd ? AddString : RemoveString;
						var str =
							"\u25C6 Passenger Seat:\n   The apparatus gains a second seat, which takes an\n   action to enter/exit. A creature can't pilot the apparatus\n   from this seat, but gains total cover from outside effects.";
						aFnc(prefix + "Comp.Use.Traits", str, true);
					},
					"Mechanaut's Apparatuses I create gain a second seat, which takes an action to enter/exit.",
				],
			},
		},
		subclassfeature14: {
			name: "Attachment Upgrade",
			source: ["VSoS", 74],
			minlevel: 14,
			description: desc([
				'Choose an Attachment Upgrade for your apparatus by using the "Choose Feature" button',
				"above.",
			]),
			choices: ["Ballista Cannon", "Gyro Module", "Rocket Engine"],
			"ballista cannon": {
				name: "Ballista Cannon Attachment Upgrade",
				source: ["VSoS", 75],
				description: desc([
					"As an action, I can fire the apparatus's integrated heavy ballista. See companion pages.",
				]),
				calcChanges: {
					creatureCallback: [
						function (prefix, oCrea, bAdd) {
							if (!/\bmechanaut's apparatus\b/i.test(oCrea.name))
								return;
							if (bAdd) {
								AddWeapon("Ballista Cannon", "", prefix);
							} else {
								for (i = 1; i < 3; ++i) {
									if (
										/Ballista Cannon/i.test(
											What(
												prefix +
													"Comp.Use.Attack." +
													i +
													".Weapon Selection"
											)
										)
									) {
										Value(
											prefix +
												"Comp.Use.Attack." +
												i +
												".Weapon Selection",
											""
										);
									}
								}
							}
						},
						"My Mechanaut's Apparatus gains a Ballista Cannon.",
					],
				},
				action: ["action", "Fire Heavy Ballista"],
			},
			"gyro module": {
				name: "Gyro Module Attachment Upgrade",
				source: ["VSoS", 75],
				description: desc([
					"The apparatus gains the Gyro Module Attachment Upgrade. See companion pages.",
				]),
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Gyro Module:\n   A piloting creature can use their action to make an attack using an integrated weapon against any number\n   of creatures within 5 feet of the apparatus, making a separate attack roll against each target. The apparatus\n   cannot move between these attacks.";
							aFnc(prefix + "Cnote.Left", str, true);
						},
						"Mechanaut's Apparatuses I create gain the Gyro Module attachment upgrade: piloting creatures can use their action to make an attack using an integrated weapon against any number of creatures within 5 feet of the apparatus, making a separate attack roll against each target. The apparatus cannot move between these attacks.",
					],
					atkAdd: [
						function (fields, v) {
							if (
								/\bintegrated\b/i.test(v.WeaponTextName) &&
								v.isMeleeWeapon
							) {
								fields.Description +=
									(fields.Description == "" ? "" : "; ") +
									"Gyro hits any # of crea in range";
								fields.Description_Tooltip +=
									(fields.Description_Tooltip == ""
										? ""
										: "\n") +
									"Gyro Module: piloting creatures can use their action to make an attack using an integrated weapon against any number of creatures within 5 feet of the apparatus, making a separate attack roll against each target. The apparatus cannot move between these attacks.";
							}
						},
						'If a weapon attack includes the word "Integrated" in its name, it includes text and a tooltip on the use of the Gyro Module feature.',
					],
				},
			},
			"rocket engine": {
				name: "Rocket Engine Attachment Upgrade",
				source: ["VSoS", 75],
				description: desc([
					"As a bonus action, I can light the apparatus's rocket engine. See companion pages.",
				]),
				action: ["bonus action", "Light Rocket Engine"],
				calcChanges: {
					companionCallback: [
						function (prefix, oCrea, bAdd, sCompType) {
							if (sCompType !== "mechanaut's apparatus") return;
							var aFnc = bAdd ? AddString : RemoveString;
							var str =
								"\u25C6 Rocket Engine:\n   A piloting creature can use their bonus action to propel the apparatus up to 30 feet in a straight line in a\n   chosen direction. If the apparatus makes a melee attack immediately after this move, the attack gains\n   advantage. On hit, this attack knocks the target prone OR pushes it up to 10 feet away from the apparatus.";
							aFnc(prefix + "Cnote.Left", str, true);
						},
						"Mechanaut's Apparatuses I create gain the Rocket Engine attachment upgrade: A piloting creature can use their bonus action to light the apparatus's installed rocket engine, propelling the apparatus up to 30 feet in a straight line in a chosen direction. If the apparatus makes a melee attack immediately after this movement, the attack is made with advantage. On a hit, this attack knocks the target prone or pushes it up to 10 feet away from the apparatus (piloting creature's choice).",
					],
				},
			},
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 75],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork weapon property, which I can immediately apply: Pneumatic.",
			]),
			extraname: "Legendary Masterwork Weapon Property",
			pneumatic: {
				name: "Pneumatic",
				source: ["VSoS", 75],
				additional: "Prereq: Exotic, Melee",
				description: desc([
					"If this weapon is installed in a mechanaut's apparatus and it deals more than one die of",
					"damage on a hit, when I roll damage, I can maximize one of the weapon's damage dice",
					"instead of rolling it.",
				]),
			},
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (
							/\bpneumatic\b/i.test(v.WeaponTextName) &&
							/\bintegrated\b/i.test(v.WeaponTextName) &&
							v.isMeleeWeapon &&
							(/bexotic\b/i.test(v.theWea.type) ||
								/\bexotic\b/i.test(fields.Description))
						) {
							// get dice
							var dieSplit = output.die.split("d");

							if (dieSplit[0] > 1) {
								var newDie =
									dieSplit[0] - 1 + "d" + dieSplit[1];
								output.die = newDie;
								output.extraDmg += parseInt(dieSplit[1]);
							}
						}
					},
					'If the words "Pneumatic" & "Integrated" is included in the name of an exotic melee attack, it is treated as having the Pneumatic property, maximizing one of the damage die rolled.',
					199,
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "pneumatic",
				},
			],
		},
	},
});

// * Calibaron Craftsman Subclass
AddSubClass("craftsman", "Calibaron", {
	regExpSearch: /^(?=.*calibaron).*$/i,
	subname: "Calibarons' Guild",
	source: ["VSoS", 70],
	fullname: "Calibaron",
	features: {
		subclassfeature3: {
			name: "Fighting Style",
			source: ["VSoS", 70],
			minlevel: 3,
			description: desc([
				'Choose a Fighting Style using the "Choose Feature" button above',
			]),
			choices: ["Akimbo", "Bullseye", "Duelist", "Shotgunner"],
			akimbo: {
				name: "Akimbo Fighting Style",
				source: ["VSoS", 71],
				description: desc([
					"When I engage in two-weapon fighting with firearms, I don't take a penalty to the damage of",
					"of the second attack.",
				]),
			},
			bullseye: {
				name: "Bullseye Fighting Style",
				source: ["VSoS", 71],
				description: desc([
					"I gain a +2 bonus to ranged attack rolls I make with firearms with the Sighted property or",
					"have a normal range of 80 or longer. This style doesn't stack with the Archery fighting style.",
				]),
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							// get the weapon's range
							var rangeFld = fields.Range.match(/\d+\/\d+/);
							var ranges = rangeFld[0].split("/");

							// add to hit bonus
							if (
								(/firearm/i.test(v.theWea.list) ||
									/\bfirearm\b/i.test(fields.Description)) &&
								(/\bsighted\b/i.test(fields.Description) ||
									ranges[0] >= 80)
							) {
								output.extraHit += 2;
							}
						},
						"I gain a +2 bonus to ranged attack rolls I make with firearms with the Sighted property or have a normal range of 80 or longer. This style doesn't stack with the Archery fighting style.",
					],
				},
			},
			duelist: {
				name: "Duelist Fighting Style",
				source: ["VSoS", 71],
				description: desc([
					"Once per round. while wielding a firearm in one hand and nothing in the other, if I make a",
					"ranged weapon attack roll and exceed the target's AC by 5+, I deal 1 extra die of",
					"weapon damage.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								(/firearm/i.test(v.theWea.list) ||
									/\bfirearm\b/i.test(fields.Description)) &&
								!/\btwo-handed\b/i.test(fields.Description)
							) {
								// get the die type
								var dieSplit = fields.Damage_Die.split("d");
								if (dieSplit.length < 2) return;
								var die = "1d" + dieSplit[1];
								fields.Description +=
									(fields.Description == "" ? "" : "; ") +
									"Duelist +" +
									die +
									" extra dmg";
							}
						},
						"Once per round, when wielding a firearm in one hand and nothing in the other, I deal 1 extra die of weapon damage if my attack roll exceeds the target's AC by 5 or more.",
					],
				},
			},
			shotgunner: {
				name: "Shotgunner Fighting Style",
				source: ["VSoS", 71],
				description: desc([
					"When I hit with a ranged weapon attack using a firearm that has the Scatter property, I can",
					"reroll the lowest damage die. I must use the new roll.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (
								(/firearm/i.test(v.theWea.list) ||
									/\bfirearm\b/i.test(fields.Description)) &&
								/\bscatter\b/i.test(fields.Description)
							) {
								fields.Description +=
									(fields.Description == "" ? "" : "; ") +
									"reroll lowest dmg die";
							}
						},
						"When I hit with a ranged weapon attack using a firearm that has the Scatter property, I can reroll the lowest damage die.",
					],
				},
			},
		},
		subclassfeature7: {
			name: "Apprentice Property",
			source: ["VSoS", 71],
			minlevel: 7,
			description: desc([
				"I learn a new masterwork weapon property: Suppressor.",
			]),
			extraname: "Apprentice Masterwork Weapon Property",
			suppressor: {
				name: "Suppressor",
				source: ["VSoS", 71],
				additional: "Prereq: Ranged, Firearm",
				description: desc([
					"Attacks with this weapon are only audible out to 10 feet, and release a puff of smoke to mask",
					"the light given off by the blast.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "suppressor",
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bsuppressor\b/i.test(v.WeaponTextName) &&
							(/firearm/i.test(v.theWea.list) ||
								/\bfirearm\b/i.test(fields.Description))
						) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"only audible 10 ft & no light";
							fields.Description_Tooltip +=
								(fields.Description_Tooltip == "" ? "" : "\n") +
								"Suppressor: Attacks with this weapon make only a low thud or a quiet clink, audible out to 10 feet, and release a puff of smoke to mask the light given off by the blast.";
						}
					},
					'If a firearm contains the word "Suppressor" in its name, the Suppressor property details are added in its tooltip.',
					106,
				],
			},
		},
		subclassfeature10: {
			name: "Ballistic Calibration",
			source: ["VSoS", 71],
			minlevel: 10,
			description: desc([
				"I can spend 10 min with a ranged weapon or a short/long rest with up to 6 ranged weapons",
				"to calibrate them. A weapon loses its calibration once it hits a target. See notes pages.",
			]),
			extraname: "Calibarons' Guild 10",
			calibrations: {
				name: "Ballistic Calibration",
				source: ["VSoS", 71],
				description: desc([
					"I can spend 10 min with a ranged weapon or a short/long rest with up to 6 ranged weapons",
					"to calibrate them. A weapon loses its calibration once it hits a target.",
					"I have two calibration options:",
					"- Ballistic: This weapon deals an extra die of damage on a hit.",
					"- Calibrated: This weapon scores a critical hit on a roll of 18-20.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "calibrations",
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isRangedWeapon) {
							// find out what damage die we are using
							var die = fields.Damage_Die.match(/(?:d)\d+/i);
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"Ballistic (+1" +
								die[0] +
								" dmg); Calibrated (crit on 18-20)";
						}
					},
					"Ranged weapons I have calibrated gain either the Ballistic or Calibrated property, until they hit a target. Ballistic adds one extra damage die to the damage of the attack, and Calibrated allows the weapon to crit on a roll of 18-20.",
				],
			},
		},
		subclassfeature14: {
			name: "Underbarrel Grenade Launcher",
			source: ["VSoS", 71],
			minlevel: 14,
			description: desc([
				"I can use my action to attach/detach a grenade launcher to a two-handed firearm. If the",
				"launcher is lost or stolen, I can build a new one during a long rest with 100 gp in materials. I",
				"can use my action to fire the launcher. I can only fire the launcher once per short/long rest.",
			]),
			weaponOptions: [
				{
					name: "Underbarrel Grenade Launcher",
					source: ["VSoS", 71],
					regExpSearch: /\bunderbarrel grenade launcher\b/i,
					type: "AlwaysProf",
					ability: 4,
					abilitytodamage: false,
					damage: [8, 6, "Fire"],
					range: "60 ft, 10 ft rad",
					description:
						"Dexterity save; must be attached to two-handed firearm; save half damage",
					dc: true,
					isNotWeapon: true,
					selectNow: true,
				},
			],
			action: [
				["action", "Attach/Detach Grenade Launcher"],
				["action", "Fire Grenade Launcher"],
			],
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 71],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork weapon property, which I can immediately apply: Burst Fire.",
			]),
			extraname: "Legendary Masterwork Weapon Property",
			"burst fire": {
				name: "Burst Fire",
				source: ["VSoS", 71],
				additional: "Prereq: Exotic, Firearm, Automatic",
				description: desc([
					"When I take the attack action to make an attack with this firearm, I can use my bonus action",
					"to make an additional attack with it.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "burst fire",
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bburst fire\b/i.test(v.WeaponTextName) &&
							(/firearm/i.test(v.theWea.list) ||
								/\bfirearm\b/i.test(fields.Description)) &&
							/\bautomatic\b/i.test(fields.Description) &&
							(/\bexotic\b/i.test(v.theWea.type) ||
								/\bexotic\b/i.test(fields.Description))
						) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"bonus action extra attack";
						}
					},
					'When the phrase "Burst Fire" is included in the name of an exotic automatic firearm attack, it gains the Burst Fire property.',
					106,
				],
			},
		},
	},
});

// * Forgeknight craftsman subclass
AddSubClass("craftsman", "forgeknight", {
	regExpSearch: /^(?=.*forgeknight).*$/i,
	subname: "Forgeknights' Guild",
	source: ["VSoS", 71],
	fullname: "Forgeknight",
	features: {
		subclassfeature3: {
			name: "Portable Forge",
			source: ["VSoS", 71],
			minlevel: 3,
			description: desc([
				"I gain a portable forge. While carrying the forge, I gain resistance to fire damage, can cast the",
				"mending and produce flame cantrips using Int as my spellcasting ability, and can choose 4",
				"weapons I wield to deal fire damage instead of their normal damage type. If the forge is",
				"lost/destroyed, I can build a new one during a long rest with 100 gp of materials.",
			]),
			dmgres: ["Fire", "Fire (with forge)"],
			spellcastingBonus: [
				{
					name: "Portable Forge",
					spells: ["mending", "produce flame"],
					selection: ["mending", "produce flame"],
					times: 2,
					spellcastingAbility: 4,
				},
			],
		},
		subclassfeature7: {
			name: "Forgefired Armory",
			source: ["VSoS", 72],
			minlevel: 7,
			description: desc([
				"I can add the Explosive and Heat masterwork properties to my exotic melee weapons. I can",
				"add the Heat property even if it already has another Journeyman property. When I hit with a",
				"melee weapon that has the Explosive property, the explosion doesn't harm me or the weapon.",
			]),
			extraname: "Journeyman Masterwork Weapon Property",
			armoryheat: {
				name: "Heat",
				source: [
					["VSoS", 72],
					["VSoS", 82],
				],
				additional: ["Prereq: Exotic, Melee"],
				description: desc([
					"This weapon gains the Heat property and its damage dice increase by 1 step.",
				]),
			},
			armoryexplosive: {
				name: "Explosive",
				source: [
					["VSoS", 72],
					["VSoS", 82],
				],
				additional: ["Prereq: Exotic, Melee"],
				description: desc([
					"This weapon gains the Explosive property and its damage dice decrease by 1 step. If this",
					"weapon dealt bludgeoning, piercing, or slashing damage, it deal s fire damage instead.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "armoryheat",
				},
				{
					extrachoice: "armoryexplosive",
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							v.isWeapon &&
							(/\bexotic\b/i.test(v.theWea.type) ||
								/\bexotic\b/i.test(fields.Description)) &&
							v.isMeleeWeapon
						) {
							if (/\bheat\b/i.test(v.WeaponTextName)) {
								// add magical property if correct level
								if (
									classes.known.craftsman.level >= 6 &&
									!/magical/i.test(fields.Description)
								)
									fields.Description +=
										(fields.Description ? "; " : "") +
										"Counts as magical";

								// increase damage
								var newDice = ClassList[
									"craftsman"
								].CalcDieStep(fields.Damage_Die, true, 1);
								fields.Damage_Die = newDice;

								// add heat to description & tooltip
								if (!/\bheat\b/i.test(fields.Description))
									fields.Description +=
										(fields.Description ? "; " : "") +
										"Heat";
								fields.Description_Tooltip +=
									(fields.Description_Tooltip == ""
										? ""
										: "\n") +
									"Heat: This weapon gains 1 heat point whenever an attack is made with it, and it loses 1 heat point at the start of each of your turns. If the weapon has 3 heat points, it overheats and loses all heat points. An overheated weapon can't be used to make an attack again until the end of your next turn.";
							}
							if (/\bexplosive\b/i.test(v.WeaponTextName)) {
								// add magical property if correct level
								if (
									classes.known.craftsman.level >= 6 &&
									!/magical/i.test(fields.Description)
								)
									fields.Description +=
										(fields.Description ? "; " : "") +
										"Counts as magical";

								// decrease damage
								var newDice = ClassList[
									"craftsman"
								].CalcDieStep(fields.Damage_Die, false, 1);
								fields.Damage_Die = newDice;

								// change damage type
								if (
									/bludgeoning/i.test(fields.Damage_Type) ||
									/piercing/i.test(fields.Damage_Type) ||
									/slashing/i.test(fields.Damage_Type)
								)
									fields.Damage_Type = "Fire";

								// add explosive to description & tooltip
								if (!/explosive/i.test(fields.Description))
									fields.Description +=
										(fields.Description ? "; " : "") +
										"Explosive";
								fields.Description_Tooltip +=
									(fields.Description_Tooltip == ""
										? ""
										: "\n") +
									"Explosive: When this weapon hits a target, it explodes in a 15-foot diameter sphere. Each creature other than the target within the blast radius (for a Medium or smaller target, each creature within 5 feet of it) must make a Dexterity saving throw, taking half the damage rolled on a failed save or no damage on a successful one.";
							}
						}
					},
					'If the words "Explosive" and/or "Heat" are included in the name of an exotic melee weapon, they are treated as Masterwork weapons with the Explosive and/or Heat properties.',
					102,
				],
				atkCalc: [
					function (fields, v, output) {
						if (
							/\bexotic\b/i.test(v.theWea.type) &&
							/\bexotic\b/i.test(fields.Description) &&
							v.isMeleeWeapon &&
							(/\bheat\b/i.test(v.WeaponTextName) ||
								/\bexplosive\b/i.test(v.WeaponTextName)) &&
							(!/\b[a-e]\b/i.test(v.WeaponTextName) ||
								!/\+[\d]/.test(v.WeaponTextName))
						) {
							output.extraHit += 1;
						}
					},
					"",
					102,
				],
			},
		},
		subclassfeature10: {
			name: "Superheated Weapons",
			source: ["VSoS", 72],
			minlevel: 10,
			description: desc([
				"I can heat 1 weapon/2 pieces of ammunition as an action, or up to 10 weapons/20 pieces of",
				"ammunition over 1 min. Heated items must be metal, and stay heated for 10 min. The first",
				"time a heated weapon/ammunition hits a target, it deals an extra 1d6 fire damage.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isWeapon) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"Superheated +1d6 fire";
						}
					},
					"Weapons and ammunition that I superheat deal +1d6 fire damage the first time they hit a target.",
				],
			},
		},
		subclassfeature14: {
			name: "Fire Burst",
			source: ["VSoS", 72],
			minlevel: 14,
			limfeaname: "Fire Burst (Fireball)",
			description: desc([
				"While holding my forge, I can cast the fireball spell, centered on myself, without using a spell",
				"slot or material components, using my Masterwork save DC. I take no damage from this spell.",
			]),
			spellcastingBonus: [
				{
					name: "Fire Burst",
					spells: ["fireball"],
					selection: ["fireball"],
					spellcastingAbility: 4,
					firstCol: "oncesr",
					allowUpCasting: false,
				},
			],
			spellChanges: {
				fireball: {
					components: "",
					range: "Self",
					changes:
						"When I cast this spell via the Fire Burst feature, the spell is centered on myself, and I take no damage from it.",
				},
			},
			usages: 1,
			recovery: "short rest",
			action: ["action", "Fire Burst"],
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 72],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork weapon property, which I can immediately apply: Forge Plate.",
			]),
			extraname: "Legendary Masterwork Armor Property",
			"forge plate": {
				name: "Forge Plate",
				source: ["VSoS", 72],
				additional: "Prereq: Exotic, Heavy",
				description: desc([
					"While wearing this armor, I am immune to fire damage. When I take the Dash action, I can",
					"cast the wall of fire spell without using a spell slot or spell components as part of that action.",
					"The wall appears at the end of your turn, and follows a path along the ground over which I",
					"moved on my turn, up to 60 feet.",
				]),
			},
			action: ["action", "Forge Plate (Dash & Wall of Fire)"],
			autoSelectExtrachoices: [
				{
					extrachoice: "forge plate",
				},
			],
			extraLimitedFeatures: [
				{
					name: "Activate Forge Plate",
					usages: 1,
					recovery: "short rest",
				},
			],
			savetxt: {
				immune: ["fire damage while wearing Forge Plate armor"],
			},
			spellcastingBonus: [
				{
					name: "Forge Plate",
					spells: ["wall of fire"],
					selection: ["wall of fire"],
					spellcastingAbility: 4,
					firstCol: "oncesr",
					allowUpCasting: false,
				},
			],
			spellChanges: {
				"wall of fire": {
					components: "",
					range: "",
					time: "",
					description:
						"60×1×20ft (l×w×h) all in & 10 ft on 1 side 5d8 Fire dmg; save halves; see book",
					changes:
						"When cast via the Forge Plate Masterwork armor property, the wall appears at the end of the caster's turn, and follows a path along the ground over which the caster moved that turn.",
				},
			},
		},
	},
});

// * Thunderlord Craftsman Subclass
AddSubClass("craftsman", "thunderlord", {
	regExpSearch: /^(?=.*thunderlord).*$/i,
	subname: "Thunderlords' Guild",
	source: ["VSoS", 75],
	fullname: "Thunderlord",
	spellcastingAbility: 4,
	spellcastingFactor: 4,
	features: {
		subclassfeature3: {
			name: "Power Cell",
			source: ["VSoS", 75],
			minlevel: 3,
			description: desc([
				"I have a power cell and connected thunder gauntlets. I can replace these items over a long",
				"rest with 100 gp of materials. While carrying these items, I have a number of charge points",
				"equal to half my craftsman level rounded up. I regain all expended charge points on a short",
				"or long rest. Once per turn when I hit a creature with an attach that deals lightning damage, I",
				"can expend charge points up to my proficiency bonus to enhance the attack in various ways",
				"listed in the notes pages.",
			]),
			additional: levels.map(function (n) {
				return (
					Math.ceil(n / 2) +
					" charge points, " +
					(n < 4
						? "2"
						: n < 9
						? "3"
						: n < 13
						? "4"
						: n < 17
						? "5"
						: "6") +
					" max points/turn"
				);
			}),
			extraLimitedFeatures: [
				{
					name: "Charge Points",
					usagescalc:
						"event.value = Math.ceil(classes.known.craftsman.level/2);",
					recovery: "short rest",
				},
			],
			powercell: {
				name: "Power Cell Effects",
				source: ["VSoS", 75],
				description: desc([
					"Once per turn when I hit a creature with an attack that deals lightning damage, I can spend",
					"a number of charge points (up to my Proficiency bonus) to create one of the following effects:",
					"- Arc: A number of creatures equal to the number of charge points I expended that are within",
					"15 ft of the target of your attack must succeed on a Dex save vs my Masterwork save DC or",
					"take lightning damage equal to 1d6 + my Int modifier.",
					"- Discharge: The target takes an extra 1d6 lightning damage per charge point expended.",
					"- Jolt: The target can't take reactions until the start of my next turn.",
				]),
			},
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							!v.isDC &&
							/\blightning\b/i.test(fields.Damage_Type)
						) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"Arc 1d6 + Int mod; Discharge +1d6/cpoint; Jolt";
							fields.Description_Tooltip +=
								(fields.Description_Tooltip == "" ? "" : "\n") +
								"Arc: Lightning arcs to nearby targets. Spend charge points to choose a number of creatures equal to the number of charge points you expended that are within 15 feet of the target of your attack. Each of the chosen creatures must succeed on a Dexterity saving throw against your Masterwork save DC or take lightning damage equal to 1d6 + your Intelligence modifier.";
							fields.Description_Tooltip +=
								"\nDischarge: I can spend charge points to make the creature I hit take an extra 1d6 lightning damage for each charge point expended.";
							fields.Description_Tooltip +=
								"\nJolt: I can spend a charge point to make the creature I hit unable to take reactions until the start of my next turn.";
						}
					},
					"I can spend charge points to add effects to my Lightning attacks.",
					101,
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "powercell",
				},
			],
		},
		"subclassfeature3.1": {
			name: "Shock",
			source: ["VSoS", 76],
			minlevel: 3,
			description: desc([
				"While I am carrying my power cell and have at least 1 unspent charge point, weapons I wield",
				"can deal lightning damage instead of their normal damage type, and I know the shocking",
				"grasp and spare the dying cantrips. Intelligence is my spellcasting ability for these cantrips.",
			]),
			spellcastingBonus: [
				{
					name: "Shock",
					spells: ["shocking grasp"],
					selection: ["shocking grasp"],
				},
				{
					name: "Shock",
					spells: ["spare the dying"],
					selection: ["spare the dying"],
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isWeapon) {
							fields.Damage_Type = "Lightning";
						}
					},
					"While I am carrying my power cell and have at least 1 charge point, weapons I wield can deal lightning damage instead of their normal damage type.",
				],
			},
		},
		subclassfeature7: {
			name: "Lightning Rod",
			source: ["VSoS", 76],
			minlevel: 7,
			description: desc([
				"While I am carrying my power cell, I have resistance to lightning damage. I can regain 2",
				"expended charge points as a reaction to taking lightning damage from a hostile creature",
				"while wearing my gauntlets.",
			]),
			action: ["reaction", " (Regain 2 Charge Points)"],
			dmgres: ["Lightning", "Lightning (with Power Cell)"],
		},
		subclassfeature10: {
			name: "Static Charge",
			source: ["VSoS", 76],
			minlevel: 10,
			description: desc([
				"I can spend 10 minutes with a weapon or suit of armor, or a short or long rest with up to 6",
				"different weapons or suits of armor to apply a charge to them, granting them one of thee",
				"following appropriate properties. Unexpended charges dissipate after 1 hour. See notes for properties.",
			]),
			extraname: "Static Charge Property",
			chargedarmor: {
				name: "Charged Armor",
				description: desc([
					"When I take damage from a melee attack, I can use my reaction to expend the charge,",
					"dealing 1d8 lightning damage to the creature that hit me.",
				]),
			},
			chargedweapon: {
				name: "Charged Weapon",
				description: desc([
					"When I hit a creature with an attack using this weapon, I can expend the charge to deal 1d6",
					"lightning damage to the target.",
				]),
			},
			action: ["reaction", "Charged Armor (1d8)"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isWeapon) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"Charged +1d6 lightning";
							fields.Description_Tooltip +=
								(fields.Description_Tooltip == "" ? "" : "\n") +
								"Charged Weapon: If I charged this weapon using my Static Charge feature within the last hour, On a hit, I can expend that charge to deal an extra 1d6 lightning damage to the target.";
						}
					},
					"If I charged this weapon using my Static Charge feature within the last hour, On a hit, I can expend that charge to deal an extra 1d6 lightning damage to the target.",
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "chargedarmor",
				},
				{
					extrachoice: "chargedweapon",
				},
			],
		},
		subclassfeature14: {
			name: "High Voltage",
			source: ["VSoS", 76],
			minlevel: 14,
			description: desc([
				"While carrying my power cell, I can expend 5 charge points to cast the lightning bolt spell",
				"without using a spell slot or material components. This spell uses your Masterwork save DC.",
			]),
			action: ["action", "Lightning Bolt (5 charge points)"],
			spellcastingBonus: [
				{
					name: "High Voltage",
					spells: ["lightning bolt"],
					selection: ["lightning bolt"],
					firstCol: "5C",
				},
			],
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 76],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork weapon property, which I can immediately apply: Electroshock.",
			]),
			extraname: "Legendary Masterwork Weapon Property",
			electroshock: {
				name: "Electroshock",
				source: ["VSoS", 76],
				additional: "Prereq: Exotic; 1/short rest",
				description: desc([
					"When I hit a creature with this weapon, I can make the target make a Constitution save vs my",
					"Masterwork save DC or be stunned until the end of my next turn.",
				]),
			},
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\belectroshock\b/i.test(v.WeaponTextName) &&
							(/bexotic\b/i.test(v.theWea.type) ||
								/\bexotic\b/i.test(fields.Description))
						) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"Electroshock 1/rest";
							fields.Description_Tooltip +=
								(fields.Description_Tooltip == "" ? "" : "\n") +
								"Electroshock: When you hit a creature with this weapon, you can expend the weapon's built-in power cell to shock the target. The target must succeed on a Constitution saving throw against your Masterwork save DC or be stunned until the end of your next turn. Once you use this property, you can't use it again with this weapon until you finish a short or long rest.";
						}
					},
					'If the word "Electroshock" is included in the name of an exotic attack, the Electroshock masterwork property is added to its description and tooltip.',
					103,
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "electroshock",
				},
			],
		},
	},
});

// * Trapper Craftsman Subclass
AddSubClass("craftsman", "trapper", {
	regExpSearch: /^(?=.*trapper).*$/i,
	subname: "Trappers' Guild",
	source: ["VSoS", 76],
	fullname: "Trapper",
	features: {
		subclassfeature3: {
			name: "Danger Sense",
			source: ["VSoS", 76],
			minlevel: 3,
			description: desc([
				"Adv. on Dexterity saves against seen effects (not blinded/deafened/incapacitated)",
			]),
			savetxt: { text: ["Adv. on Dex saves vs. seen effects"] },
		},
		"subclassfeature3.1": {
			name: "Traps",
			source: ["VSoS", 76],
			minlevel: 3,
			description: desc([
				"I can craft traps, and can deploy a number equal to my Intelligence modifier (min 1) per rest.",
				"When I take the Attack action, I can forgo one of my attacks to deploy a trap. I can use an",
				"action to disarm and recover one of my untriggered traps, which restores 1 trap deployment.",
				"See notes for trap options.",
			]),
			additional: "Int mod (min 1) trap deployments",
			extraLimitedFeatures: [
				{
					name: "Trap Deployments",
					usagescalc: "event.value = Math.max(1, What('Int Mod'));",
					recovery: "short rest",
				},
			],
			action: ["action", "Deploy Trap (replace 1 attack)"],
			toNotesPage: [
				{
					name: "Traps",
					source: ["VSoS", 77],
					note: [
						"Craftsmen of the Trappers' Guild can build the following traps:",
					],
				},
				{
					name: "Ballista Trap",
					source: ["VSoS", 77],
					note: [
						"I place this trap in an unoccupied space within 5 feet of me and aim it in a",
						"direction I choose. The trap triggers when a creature enters the area within a",
						"5-foot-wide, 30-foot-long line extending from the front of the trap. When it",
						"triggers, the ballista fires automatically, making a ranged attack against the",
						"creature using my Intelligence modifier and proficiency bonus. On hit, the target",
						"takes 2d8 piercing damage.",
					],
					amendTo: "Traps",
				},
				{
					name: "Man-Trap",
					source: ["VSoS", 77],
					note: [
						"I place this trap in an unoccupied 5-foot-square area within 5 feet of me. When",
						"a Small or larger creature moves within the trap's area, the trap clamps down on",
						"the creature. The creature must make a Dexterity save vs my Masterwork save",
						"DC. On a failed save, the creature takes 2d8 slashing damage, and if it is Large",
						"or smaller, it becomes trapped, rendering it unable to move. On a successful",
						"save, the creature takes half as much damage and isn't trapped. The trapped",
						"creature or another creature within 5 feet of it can use its action to make a",
						"Strength check against my Masterwork save DC, freeing the trapped creature on",
						"a success. A Huge or larger creature that failed its saving throw rips the trap",
						"from its mounting the next time it moves.",
					],
					amendTo: "Traps",
				},
				{
					name: "Razor Wire",
					source: ["VSoS", 77],
					note: [
						"I place this trap in up to four unoccupied, contiguous, 5-foot-square areas I",
						"choose within 10 feet of me. Each of these areas becomes difficult terrain. When",
						"a creature moves into or within the area, it takes 2d4 piercing damage for every",
						"5 feet it travels. Once deployed, the razor wire can't be recovered.",
					],
					amendTo: "Traps",
				},
				{
					name: "Trigger Bomb",
					source: ["VSoS", 77],
					note: [
						"I toss this trap into an unoccupied space within 30 feet of me. As a reaction",
						"when a creature I can see or hear moves within 5 feet of the bomb, I can cause",
						"the bomb to explode. Each creature within 5 feet of the bomb must make a",
						"Dexterity save vs my Masterwork save DC, taking 2d6 fire damage on a failed",
						"save, or half as much damage on a successful one. The explosion ignites",
						"flammable objects in the area that aren't being worn or carried.",
					],
					amendTo: "Traps",
				},
			],
		},
		subclassfeature7: {
			name: "Booby Trap",
			source: ["VSoS", 76],
			minlevel: 7,
			description: desc([
				"I can spend 1 minute to hide a trap. A creature can detect the trap with a successful",
				"Investigation or Perception check vs my Masterwork save DC, or by having a passive",
				"Perception score higher than that DC. The trap deals twice its normal damage dice.",
			]),
		},
		subclassfeature10: {
			name: "Ambush Modification",
			source: ["VSoS", 77],
			minlevel: 10,
			description: desc([
				"I can spend 10 min with a ranged weapon, or a short/long rest with up to 6 ranged weapons",
				"to give them the Hair-Trigger property: This weapon has advantage on the first attack it",
				"makes using the Ready action.",
			]),
		},
		subclassfeature14: {
			name: "Rapid Setup",
			source: ["VSoS", 77],
			minlevel: 14,
			action: ["action", "Rapid Setup (Deploy 4 traps)"],
			description: desc(["As an action, I can deploy up to four traps."]),
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 77],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork weapon property, which I can immediately apply: Net.",
			]),
			extraname: "Legendary Masterwork Weapon Property",
			net: {
				name: "Net",
				source: ["VSoS", 76],
				additional:
					"Prereq: Exotic, Ranged, not Firearm;\n   1/short rest",
				description: desc([
					"When I hit a Large or smaller creature with this weapon's projectile, it also deploys a net",
					"that automatically hits the creature.",
				]),
			},
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bnet\b/i.test(v.WeaponTextName) &&
							v.isRangedWeapon &&
							(/bexotic\b/i.test(v.theWea.type) ||
								(/\bexotic\b/i.test(fields.Description) &&
									!/firearm/i.test(v.theWea.list) &&
									!/\bfirearm\b/i.test(fields.Description)))
						) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"restrain on hit";
							fields.Description_Tooltip +=
								(fields.Description_Tooltip == "" ? "" : "\n") +
								"Net: When this weapon hits a Large or smaller creature with its projectile, it also deploys a net that automatically hits the creature. A Large or smaller creature hit by the net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net.";
						}
					},
					'If the word "Net" is included in the name of an exotic attack, the Net masterwork property is added to its description and tooltip.',
					103,
				],
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "net",
				},
			],
		},
	},
});

// * Bladeworker Craftsman Subclass
AddSubClass("craftsman", "bladeworker", {
	regExpSearch: /^(?=.*bladeworker).*$/i,
	subname: "Bladeworkers' Guild",
	source: ["VSoS", 70],
	fullname: "Bladeworker",
	features: {
		subclassfeature3: {
			name: "Fighting Style",
			source: ["VSoS", 70],
			minlevel: 3,
			description: desc([
				'Choose a Fighting Style using the "Choose Feature" button above',
			]),
			choices: [
				"Dueling",
				"Great Weapon Fighting",
				"Half-and-a-Half",
				"Two-Weapon Fighting",
			],
			archery: FightingStyles.archery,
			dueling: FightingStyles.dueling,
			"great weapon fighting": FightingStyles.great_weapon,
			"two-weapon fighting": FightingStyles.two_weapon,
			"half-and-a-half": {
				name: "Half-and-a-Half Fighting Style",
				source: ["VSoS", 70],
				description: desc([
					"   I gain +1 to attack & damage rolls with a versatile weapon that I am wielding in two hands.",
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (/\bversatile\b/i.test(fields.Description)) {
								fields.Description += "; Hand-and-a-Half +1";
							}
						},
						"While wielding a versatile weapon in two hands, I gain a +1 bonus to attack and damage rolls with that weapon.",
					],
				},
			},
		},
		subclassfeature7: {
			name: "Sabotaging Strike",
			source: ["VSoS", 70],
			minlevel: 7,
			description: desc([
				"Once on my turn, when I take the Attack action, I can replace one of my attacks with one of",
				"the two special melee attacks listed on the notes page.",
			]),
			action: ["action", "Disarm/Sunder (replaces 1 attack)"],
			extraname: "Sabotaging Strike",
			disarm: {
				name: "Disarm",
				source: ["VSoS", 70],
				description: desc([
					"The target makes a Strength save vs my Masterwork save DC or drops one item of my choice",
					"that it is holding or carrying at its feet.",
				]),
			},
			sunder: {
				name: "Sunder",
				source: ["VSoS", 70],
				description: desc([
					"The target makes a Dexterity save vs my Masterwork save DC or the target's armor or shield",
					"take a permanent & cumulative -1 to its AC. Armor that drops to 10 AC or a shield that drops",
					"to a +0 is destroyed, but can be repaired over a short or long rest.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "disarm",
				},
				{
					extrachoice: "sunder",
				},
			],
		},
		subclassfeature10: {
			name: "Honed Weapons",
			source: ["VSoS", 70],
			minlevel: 10,
			description: desc([
				"I can spend 10 min fortifying a weapon, or a short or long rest fortifying up to 6 weapons.",
				"This lasts until the weapon hits a target. I have two fortifying techniques, on the notes page.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isWeapon) {
							fields.Description +=
								(fields.Description == "" ? "" : "; ") +
								"Honed +2 to hit; Sharpened +1d8 dmg";
						}
					},
					"Honed weapons gain a +2 bonus to hit until it hits a target. Sharpened weapons deal an extra +1d8 damage until it hits a target.",
				],
			},
			extraname: "Bladeworker's Guild 10",
			"honed weapons": {
				name: "Honed Weapons",
				source: ["VSoS", 70],
				description: desc([
					"I can spend 10 min fortifying a weapon, or a short or long rest fortifying up to 6 weapons.",
					"This lasts until the weapon hits a target. I have two fortifying techniques:",
					"- Honed: This weapon has a +2 bonus to attack rolls.",
					"- Sharpened: This weapon deals an 1d8 additional damage on a hit.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "honed weapons",
				},
			],
		},
		subclassfeature14: {
			name: "Versatile Weapon Master",
			source: ["VSoS", 70],
			minlevel: 14,
			description: desc([
				"Once on each of my turns when I attack with a weapon, I gain advantage on the attack roll. I",
				"can use this ability 4 times as long as I use a different weapon:",
				"- Once with a ranged weapon that has the Ammunition property",
				"- Once with a two-handed melee weapon",
				"- Once with a one-handed melee weapon",
				"- Once with a ranged weapon attack with a thrown weapon",
				"I regain use of this ability after 1 minute, and cannot use this ability if I have disadvantage on",
				"on the attack roll or if I can't see the target.",
			]),
			extraLimitedFeatures: [
				{
					name: "Ranged Weapon w. Ammunition Adv.",
					usages: 1,
					recovery: "MIN",
				},
				{
					name: "Two-handed Weapon Adv.",
					usages: 1,
					recovery: "MIN",
				},
				{
					name: "One-Handed Weapon Adv.",
					usages: 1,
					recovery: "MIN",
				},
				{
					name: "Ranged Thrown Weapon Adv.",
					usages: 1,
					recovery: "MIN",
				},
			],
		},
		subclassfeature18: {
			name: "Legendary Property",
			source: ["VSoS", 70],
			minlevel: 18,
			description: desc([
				"I learn a new masterwork weapon property, which I can immediately apply: Devastating.",
			]),
			extraname: "Legendary Masterwork Weapon Property",
			devastating: {
				name: "Devastating",
				additional: "Prereq: Exotic",
				source: ["VSoS", 70],
				description: desc([
					"This weapon scores a critical hit on a roll of 18-20.",
				]),
			},
			autoSelectExtrachoices: [
				{
					extrachoice: "devastating",
				},
			],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (
							/\bdevastating\b/i.test(v.WeaponTextName) &&
							!v.isDC &&
							(/\bexotic\b/i.test(fields.Description) ||
								/\bexotic\b/i.test(v.theWea.type))
						) {
							if (!/crit/i.test(fields.Description)) {
								fields.Description +=
									(fields.Description == "" ? "" : "; ") +
									"crit on 18-20";
							} else {
								fields.Description = fields.Description.replace(
									"19 or 20",
									"18-20"
								);
								fields.Description = fields.Description.replace(
									"19-20",
									"18-20"
								);
							}
						}
					},
					'If the word "Devastating" is in the name of an exotic weapon attack, that weapon crits on an attack roll of 18-20.',
					104,
				],
			},
		},
	},
});
