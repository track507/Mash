var iFileName = "VSoS_Subclasses_Druid.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
	SourceList["VSoS"] = {
		name: "Valda's Spire of Secrets",
		abbreviation: "VSoS",
		abbreviationSpellsheet: "V",
		date: "2022/12/30", // ! Updated as of 12-30-2022 (Version 1.4)
	};
}

// * Druid subclasses
AddSubClass("druid", "circle of the city", {
	subname: "Circle of the City",
	regExpSearch: /^(?=.*(druid|shaman))(?=.*\bcity\b).*$/i,
	source: ["VSoS", 210],
	features: {
		subclassfeature2: {
			name: "Urban Arcana",
			source: ["VSoS", 210],
			minlevel: 2,
			description: desc([
				"My druid spells lose the aesthetic trappings of nature",
				"Instead they appear inspired by the jungles of buildings, columns, and cobblestone",
				"Additionally, I can wear armor and wield shields made of metal",
			]),
		},
		"subclassfeature2.1": {
			name: "Streettalk",
			source: ["VSoS", 210],
			minlevel: 2,
			description: desc([
				"I have adv. on Investigation checks to gather rumors, or find a crea/location w/in",
				"urban environments; I also know thieves' cant",
			]),
			languageProfs: ["Thieves' Cant"],
		},
		"subclassfeature2.2": {
			name: "City Shape",
			source: ["VSoS", 210],
			minlevel: 2,
			description: desc([
				"As an action, I can expend a use of wild shape to warp the city around me",
				"I can choose one of the following effects found on page 3 notes",
			]),
			spellcastingBonus: [
				{
					name: "City Shape",
					spells: ["passwall"],
					selection: ["passwall"],
					times: 1,
				},
			],
			toNotesPage: [
				{
					name: "City Shape: Wild Shape Effects",
					source: ["VSoS", 210],
					note: desc([
						"\u2022 Cobbleshift: I can manipulate comp. of a constructed floor w/in 60 ft",
						"  Each comp. can move up to 1 ft w/out causing structure instabilities",
						"  When I use this effect, I can cause any sections to become diff. terrain",
						"  I can cause any crea standing in those sections to make a Dex save",
						"  vs my spell save DC or fall prone; I'm unaffected by this diff. terrain",
						"  As an action on subsequent turns, I can raise up to 3 walls from the floor",
						"  Each wall is 2\u00BD ft tall, 5 ft wide, and 1 ft thick",
						"  It provides \u00BD cover to medium creatures, causing no structure instabilities",
						"  This lasts for 1 min, after which all comp and walls revert to their original position",
						"\u2022 Passwall: I can cast passwall w/out expending SS or material comp",
						"\u2022 Wall Warp: A visible wall w/in 30 ft shifts, grows, shrinks, or rotates",
						"  The wall must have all of the following:",
						"  \u2022 contiguous surface w/out corners",
						"  \u2022 at most 1 ft thick",
						"  \u2022 made out of wood, plaster, stone, or not be naturally occurring",
						"  It must remain vertical, and I can move it w/in a 60 ft rad from its previous position",
						"  Its new position can't be occupied by a crea or obj",
						"  Changes cause no structure instability; Choosing grow/shrink only changes it vertically",
						"  After 1 minute, the wall reverts to its original size and position",
					]),
					page3notes: true,
				},
			],
		},
		subclassfeature6: {
			name: "Whispers of Walls",
			source: ["VSoS", 211],
			minlevel: 6,
			description: desc([
				"As an action, I can touch a constructed part of a building",
				"This can be a wall, pillar, ceiling, floor, etc.",
				"I learn the how many humanoids are w/in the building and w/in each room",
				"If there are more than 50 humanoids, I only detect the closest 50",
			]),
			action: ["action", ""],
		},
		subclassfeature10: {
			name: "Breath of Smog",
			source: ["VSoS", 211],
			minlevel: 10,
			description: desc([
				"As a rea when I take dmg, I can exhale a 10-ft rad sphere of heavily obscured toxic smoke",
				"A crea w/in the smoke at the start of its turn must make a Con save vs my spell save DC",
				"On a fail, it's poisoned until the start of its nxet turn; This doesn't affect me",
				"The smog clears after 1 min, or if the wind speed is 10 mph after 4 rnds or 20 mph after 1 rnd",
				"Once I use this ability, I can't do so agin until I use City Shape or after a short/long rest",
			]),
			usages: 1,
			recovery: "short rest",
			additional: "City Shape or SR/LR",
			action: ["reaction", ""],
		},
		subclassfeature14: {
			name: "Twisting Architecture",
			source: ["VSoS", 211],
			minlevel: 14,
			description: desc([
				"Spending 2 uses of wild shape, I simultaneously activate all the effects of City Shape",
				"I can also warp gravity along any surface w/in 60 ft for 1 min",
				"All crea w/in 15 ft fall toward it as if it were the ground",
				"A crea can walk on it even if perpendicular or upside down",
				"All crea and obj fall from the affect surfaces after the duration ends",
			]),
		},
	},
});

AddSubClass("druid", "circle of the deep", {
	regExpSearch: /^(?=.*(druid|shaman))(?=.*\bdeep\b).*$/i,
	source: ["VSoS", 212],
	features: {
		subclassfeature2: {
			name: "Bonus Proficiencies",
			source: ["VSoS", 212],
			minlevel: 2,
			description: desc([
				"I gain proficiency with fishhooks, harpoons, nets, and tridents",
				"While I can't use metal weapons, I can use coral weapons instead",
				"These function the same as normal weapons but cost 2\xd7 if purchased on land",
			]),
			weaponProfs: [false, false, ["fishhook", "harpoon", "net", "trident"]],
		},
		"subclassfeature2.1": {
			name: "Aquatic",
			source: ["VSoS", 212],
			minlevel: 2,
			description: desc([
				"I can breathe water as well as air and have a swim equal to my walk speed",
				"This also applies while Wild Shaped, and if the crea. I transform into",
				"doesn't have a swim speed, it gains a swim speed equal to the form's speed",
			]),
			speed: {
				swim: { spd: "walk", enc: "walk" },
			},
			// Theres no way to apply the speed to the wild shapes dynamically
		},
		subclassfeature6: {
			name: "Vortex Attack",
			source: ["VSoS", 212],
			minlevel: 6,
			description: desc([
				"Whenever I am holding a wea and take the atk action, I can atk twice with it",
				"As an action while I'm in water or have \u2264\u00BD my max HP, I can make a melee",
				"atk vs any number of crea w/in 5 ft of me, making separate atk rolls for each",
			]),
			action: ["action", ""],
		},
		subclassfeature10: {
			name: "Ocean's Ally",
			source: ["VSoS", 212],
			minlevel: 10,
			description: desc([
				"I can speak with aquatic crea as per the speak with animals spell",
				"As an action, I can call a Beast of CR 3 or lower that has a native swim to aid",
				"It arrives on my next turn, rolls its own initiative and act on its own turn",
				"It is friendly to me and my allies and follows my commands",
				"If 1 hr passes, or I or an anlly harms it, the effect ends and it leaves",
			]),
			usages: 1,
			recovery: "short rest",
		},
		subclassfeature14: {
			name: "Davy Jone's Locker",
			source: ["VSoS", 212],
			minlevel: 14,
			description: desc([
				"When I hit a crea w/ a melee wea atk, I can deal an extra 1d8 dmg to it",
				"My atks ignore resistance to nonmagical blud, pierce, and slash dmg",
				"They also ignore the dmg threshold of ships and deal double dmg to them",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isWeapon) {
							fields.Description += (fields.Description ? "; " : "") + "+1d8 weapon dmg; \xd7 to ships";
						}
					},
				],
			},
		},
	},
});
