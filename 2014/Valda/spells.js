if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

SpellsList["abduct"] = {
	name: "Abduct",
	classes: ["necromancer", "witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 329],
	level: 7,
	school: "Conj",
	time: "1 min",
	range: "1 mile",
	components: "V,S,M",
	compMaterial: "A silver saucer",
	duration: "1 h",
	save: "Cha",
	descriptionShorter:
		"known crea save or teleports w/in 30ft; I pick sit/stand/prone/bound, and if it stay or returns",
	description:
		"1 known crea in range save or teleport w/in 30 ft of me; sit/stand/prone/bound; stay or return at end",
	descriptionFull:
		"This spell teleports a creature to your location. Choose a creature within range that is known to you as the target of this spell. An unwilling creature can make a Charisma saving throw to resist this effect. The target is placed at a location of your choice within 30 feet of you. You choose if the target is sitting, standing, prone, or bound with nearby restraints. At the end of the spell’s duration, you can choose whether the target remains at your location or is teleported back to the location from which it was abducted.",
};
SpellsList["aberrate"] = {
	name: "Aberrate",
	classes: ["witch", "druid", "sorcerer", "warlock", "wizard"],
	source: ["VSoS", 329],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "1 min",
	descriptionShorter:
		"No extra dmg from crits; after taking dmg, rea to resist that dmg type (not the trigger dmg)",
	description:
		"I don't take extra dmg from crits; after taking dmg, rea to resist that dmg type (not the trigger dmg)",
	descriptionFull:
		"This spell causes your anatomy to become fluid, constantly refreshing into new and more terrible shapes. For the duration, you do not take extra damage from critical hits." +
		"\n   " +
		"Additionally, your body adapts to threats as it warps. Immediately after you take damage while this spell is active, you can use your reaction to gain resistance to that damage type until this spell ends or until you use this ability again to gain resistance to a different damage type. This resistance doesn't apply to the triggering damage.",
};
SpellsList["accelerate/decelerate"] = {
	name: "Accelerate/Decelerate",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["VSoS", 329],
	level: 1,
	school: "Trans",
	time: "1 rea",
	timefull:
		"1 reaction, which you take when a creature you can see within 60 feet is hit with an attack",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A drop of oil or a drop of molasses",
	duration: "Instantaneous",
	description:
		"Triggering attack damage is increased or decreased by 1d6+1d6/SL+spell mod",
	descriptionFull:
		"This spell speeds up or slows down an attack the instant before it strikes, lessening or multiplying its force." +
		"\n   " +
		toUni("Accelerate") +
		": Increase the damage the target takes by 1d6 + your spellcasting ability modifier." +
		"\n   " +
		toUni("Decelerate") +
		": Reduce the damage the target takes by 1d6 + your spellcasting ability modifier (to a minimum of 0 damage)." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the change in damage increases by 1d6 for each slot level above 1st.",
};
SpellsList["accursed act"] = {
	name: "Accursed Act",
	classes: ["witch"],
	source: ["VSoS", 329],
	level: 1,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "Incense or a black candle",
	duration: "Conc, 1 min",
	save: "Wis",
	description:
		"1 crea save or 1d8+1d8/SL+spell mod Psy dmg 1/turn on atk or cast; if not, rpt save at EOT to end",
	descriptionFull:
		"Lighting a candle, you speak dark curses in a lost tongue, directed at one creature you can see within range. That creature must make a Wisdom saving throw or be cursed for the duration. While cursed, the creature takes psychic damage once per turn equal to 1d8 + your spellcasting ability modifier whenever it attacks or casts a spell. If the target doesn’t attack or cast a spell on its turn, it can repeat their saving throw at the end of their turn, ending the effect on a success." +
		"\n   " +
		"A remove curse spell ends this curse early." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, you deal an additional 1d8 psychic damage for each slot level above 1st.",
};
SpellsList["action"] = {
	name: "Action",
	classes: ["witch", "bard", "paladin", "sorcerer", "wizard"],
	source: ["VSoS", 329],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A shaving of licorice root",
	duration: "1 rnd",
	description:
		"1 willing crea gets add'l action next turn to Attack (1 wea atk), Dash, Diseng., Hide, or Use Object",
	descriptionFull:
		"Choose a willing creature that you can see within range. During its next turn, the target gains an additional action. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.",
};
SpellsList["aerial alacrity"] = {
	name: "Aerial Alacrity",
	classes: ["witch", "druid", "sorcerer", "wizard"],
	source: ["VSoS", 330],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A feather from a bird of prey",
	duration: "10 min",
	description:
		"willing crea w/fly speed gets hover, adv on Acrobatics, flyby, bns to Dash",
	descriptionFull:
		"Target a willing creature you can see within range that has a flying speed (including those with a temporary or magically bestowed flying speed). That creature gains the following benefits for the duration:" +
		"\n \u2022" +
		"The target can take the Dash action as a bonus action." +
		"\n \u2022" +
		"The target can hover." +
		"\n \u2022" +
		"The target has advantage on Dexterity (Acrobatics) checks." +
		"\n \u2022" +
		"The target doesn’t provoke an opportunity attack when it flies out of an enemy’s reach.",
};
SpellsList["after image"] = {
	name: "After Image",
	classes: ["investigator", "ranger", "sorcerer", "warlock", "wizard"],
	source: ["VSoS", 330],
	level: 3,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "A silver hand mirror worth 50 gp",
	duration: "10 min",
	ritual: false,
	description:
		"When hit by atk, roll a die; odd hits duplicate, disappears until I move 10 ft or Dodge (50 gp)",
	descriptionFull:
		"You create an illusory duplicate of yourself which follows your every movement. When you are hit by an attack during the spell’s duration, roll any die. On an odd roll, the attack targets and hits the duplicate instead of you. The duplicate vanishes, reappearing after you move 10 feet or more or take the Dodge action. On an even roll, the attack targets you as normal.",
};
SpellsList["antiballistics field"] = {
	name: "Antiballistics Field",
	classes: ["necromancer", "cleric", "wizard"],
	source: ["VSoS", 330],
	level: 6,
	school: "Abjur",
	time: "1 a",
	range: "S:40-ft rad",
	components: "V,S,M",
	compMaterial: "A pinch of wet gunpowder",
	duration: "Conc, 10 min",
	ritual: false,
	description:
		"Atks w/firearms fail and jam; 1 a to clear jam; firearm atks from outside, disadv and 1/2 dmg",
	descriptionFull:
		"An invisible 40-foot-radius field of magic extends from you, disrupting bullets and causing firearms to malfunction. Within the sphere, attacks with firearms fail, and firearms used to make an attack immediately jam. A jammed firearm can’t be used to make an attack until a creature uses its action to clear the weapon malfunction." +
		"\n   " +
		"Firearms outside the sphere which are fired into it have disadvantage on attack rolls, and deal only half damage on a successful hit.",
};
SpellsList["arc blade"] = {
	name: "Arc Blade",
	classes: ["warmage"],
	source: ["VSoS", 330],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "S:5-ft rad",
	components: "V,M",
	compMaterial: "A melee weapon",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Melee wea atk w/cast; hit: wea dmg is Ltng., +0d8 Ltng. dmg; 1 crea in 5ft 1d6 Ltng. dmg; +1 die ea CL5/11/17",
	descriptionCantripDie:
		"Melee wea atk w/cast; hit: wea dmg is Ltng., +`CD-1`d8 Ltng. dmg, 1 crea in 5 ft `CD`d6 Ltng. dmg",
	descriptionFull:
		"As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell’s range, otherwise the spell fails. On a hit, the target suffers the weapon attack’s normal effects, except that any damage dealt by the attack is lightning damage instead of its normal type. Additionally, an arc of lightning jumps to a creature you choose within 5 feet of the target, dealing 1d6 lightning damage." +
		"\n   " +
		"This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an additional 1d8 lightning damage, and the secondary damage deals an additional 1d6 lightning damage to their targets. Both damage rolls increase by one die at 11th level (2d8 and 3d6) and 17th level (3d8 and 4d6).",
};
SpellsList["arcane anomaly"] = {
	name: "Arcane Anomaly",
	classes: ["necromancer", "witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 330],
	level: 1,
	school: "Abjur",
	time: "1 a",
	range: "S:30-ft rad",
	components: "V,S,M",
	compMaterial: "A broken mirror",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"Spells cast in range have 1/6 chance to fail, wasting spell slot but not components",
	descriptionFull:
		"You spread cracks in the magical energy that suffuses the multiverse. For the duration, whenever a spell is cast within range, roll a d6. On a 1, the spell casting fails, expending a spell slot as normal, but not consuming expensive material components.",
};
SpellsList["arcane capacitor"] = {
	name: "Arcane Capacitor",
	classes: ["sorcerer", "wizard"],
	source: ["VSoS", 330],
	level: 6,
	school: "Evoc",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A potato",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Melee spell atk for 5d10 Force dmg; hit or miss, regain 1st-lvl spell slot; 7th:2nd, 9th:3rd",
	descriptionFull:
		"You channel a wave of arcane power into your fingertips, recycling the leftover energy into a new spell slot. Make a melee spell attack against a creature you can reach. On a hit, the target takes 5d10 force damage. Whether you hit or miss, you then regain one expended 1st-level spell slot." +
		AtHigherLevels +
		"When you cast this spell using a 7th-level spell slot, you instead regain an expended 2nd-level spell slot. If you cast it using a 9th-level spell slot, you instead regain an expended 3rd-level spell slot.",
};
SpellsList["benign dismemberment"] = {
	name: "Benign Dismemberment",
	classes: ["investigator", "necromancer", "witch", "wizard"],
	source: ["VSoS", 331],
	level: 3,
	school: "Necro",
	time: "1 min",
	range: "Touch",
	components: "V,S",
	duration: "1 h",
	ritual: true,
	description:
		"willing crea can be dismembered w/o dmg; hold together to fix; irreversible on spell end",
	descriptionFull:
		"For the duration, a willing target’s body parts (fingers, legs, tail, and even its head) can be harmlessly severed from its body. It takes no damage from such dismemberment, as long as the cut removing the body part is swift and leaves a clean cut. The target’s head remains alive and conscious, and parts connected to it also remain alive. All severed body parts become inanimate, but do not begin decomposition for the spell’s duration. Any of the target’s severed body parts that are removed during this spell’s duration can be held back to the stump, which instantly causes the part to knit to the stump, restoring the body part." +
		"\n   " +
		"At the end of the duration, severed body parts become permanently severed. The target dies if vital organs have not been reattached to its head.",
};
SpellsList["blood print"] = {
	name: "Blood Print",
	classes: [
		"investigator",
		"martyr",
		"necromancer",
		"witch",
		"bard",
		"cleric",
		"druid",
		"paladin",
		"ranger",
		"sorcerer",
		"wizard",
	],
	source: ["VSoS", 331],
	level: 1,
	school: "Necro",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "An ounce or more of blood",
	duration: "Instantaneous",
	ritual: true,
	description:
		"Know what type of crea a blood sample came from, & uniquely identify; can preserve and compare",
	descriptionFull:
		"At your touch, wet blood on a surface shifts and reforms into a pattern of crimson blotches. This blood print is unique to the particular creature to whom the blood belongs, but you can determine the creature’s kind (such as human, gnoll, deer, or fire giant) by examining the general shape. A print can be preserved by pressing a sheet of paper against it. If this spell is cast twice, it is possible to match samples of blood originating from the same creature by comparing the prints.",
};
SpellsList["boomering"] = {
	name: "Boomering",
	classes: ["martyr", "cleric", "paladin", "sorcerer"],
	source: ["VSoS", 331],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Ranged spell atk for 3d6+1d6/SL Radiant dmg; miss: reroll once; extra tgts at higher levels",
	descriptionFull:
		"A dizzying ring of sparks launches from your outstretched hand and ricochets back to you moments later. Make a ranged spell attack roll against a creature within range. On a hit, you deal 3d6 radiant damage. If this attack misses, you can repeat the attack roll against the same target once." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st." +
		"\n   " +
		"If you cast this spell using a spell slot of 3rd level or higher, after the ring hits the first target, it ricochets to a second target of your choice that you can see within 30 feet of the first target, dealing damage as normal on a hit. If you cast this spell using a spell slot of 5th level or higher, the ring can ricochet to a third target of your choice that you can see within 30 feet of the second target. No matter how many creatures the ring ricochets to, you can only repeat the attack roll against one of the spell’s targets.",
};
SpellsList["burning blade"] = {
	name: "Burning Blade",
	classes: ["warmage"],
	source: ["VSoS", 331],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "S:5-ft rad",
	components: "V,M",
	compMaterial: "A melee weapon",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Melee wea atk w/cast; hit: wea dmg is Fire, +0d6 Fire dmg, fire stays in tgt space; +1d6 CL5/11/17, B",
	descriptionCantripDie:
		"Melee wea atk w/cast; hit: wea dmg is Fire, +`CD-1`d6 Fire dmg, ignite tgt space; crea in space `CD`d6 Fire dmg",
	descriptionFull:
		"As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell’s range, otherwise the spell fails. On a hit, the target suffers the weapon attack’s normal effects, except that any damage dealt by the attack is fire damage instead of its normal type. Additionally, embers whirl in the target’s space. Until the start of your next turn, when a creature enters the space for the first time or ends its turn there, you can use your reaction to deal 1d6 fire damage to the creature, ending the spell." +
		"\n   " +
		"This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an additional 1d6 fire damage to the target on a hit, and the secondary damage deals an additional 1d6 fire damage to its target. Both damage rolls increase by one die at 11th level (2d6 and 3d6) and 17th level (3d6 and 4d6).",
};
SpellsList["burnt offering"] = {
	name: "Burnt Offering",
	classes: ["martyr"],
	source: ["VSoS", 332],
	level: 1,
	school: "Abjur",
	time: "10 min",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A pyre and a slain animal",
	duration: "24 h",
	ritual: true,
	description:
		"While armored, Wis to AC instead of Dex; 3rd: reroll 1 saving throw, must use new roll",
	descriptionFull:
		"By constructing a pyre and burning an animal’s corpse, you court the favor of the gods. For the duration, while you are wearing armor, you can add your Wisdom modifier, instead of your Dexterity modifier, to your Armor Class." +
		AtHigherLevels +
		"If you cast this spell using a spell slot of 3rd level or higher, you can also reroll one saving throw you make during the duration. You can choose to reroll the saving throw after you roll the die, but must decide before the outcome is determined and must use the new roll.",
};
SpellsList["candy blast"] = {
	name: "Candy Blast",
	classes: ["witch", "sorcerer", "wizard"],
	source: ["VSoS", 332],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Ranged spell atk for 1d8 Bludg. dmg; tgt space is diff. terrain; 1 a to clear; +1d8 CL5/11/17",
	descriptionCantripDie:
		"Ranged spell atk for `CD`d8 Bludg. dmg; tgt space is diff. terrain; 1 a to clear",
	descriptionFull:
		"You summon a handful of hard candy—boiled sweets, mints, jelly beans, etc.—and hurl them at a target you can see within range. Make a ranged spell attack roll. On a hit, the target takes 1d8 bludgeoning damage, and the space it is standing in, up to a 5-foot square, becomes difficult terrain until a creature uses an action to gather up the fallen candy. The candy produced by this spell is edible, but has no nutritional value." +
		"\n   " +
		"This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};
SpellsList["card trick"] = {
	name: "Card Trick",
	classes: ["warmage", "witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 332],
	level: 0,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A deck of playing cards",
	duration: "Instantaneous",
	save: "Dex",
	ritual: false,
	description:
		"Choose ranged spell attack or 1 crea Dex save, hit/fail: 1d6 Force dmg; +1d6 CL5/11/17",
	descriptionCantripDie:
		"Choose ranged spell atk or 1 crea Dex save; hit/fail: `CD`d6 Force dmg",
	descriptionFull:
		"With a flash of your hands, you fling a playing or tarot card charged with energy at your opponents. Choose whether you make a ranged spell attack roll or for the target to make a Dexterity saving throw. On a hit or a failed saving throw, the target takes 1d6 force damage." +
		"\n   " +
		"This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
};
SpellsList["caustic blade"] = {
	name: "Caustic Blade",
	classes: ["necromancer", "warmage"],
	source: ["VSoS", 332],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "S:5-ft rad",
	components: "V,M",
	compMaterial: "A melee weapon",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Melee wea atk w/cast; hit: wea dmg is Acid +0d8 Acid dmg, miss by 3 or less: 1d8 Acid dmg; +1d8 CL5/11/17",
	descriptionCantripDie:
		"Melee wea atk w/cast; hit: +`CD-1`d8 Acid dmg, miss by 3 or less: `CD`d8 Acid dmg",
	descriptionFull:
		"As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell’s range, otherwise the spell fails. On a hit, the target suffers the weapon attack’s normal effects, except that any damage dealt by the attack is acid damage instead of its normal type. If you miss by 3 or less, acid splashes on the target, and you instead deal 1d8 acid damage." +
		"\n   " +
		"This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an additional 1d8 acid damage to the target on a hit, and the acid damage dealt on a miss increases to 2d8. Both damage rolls increase by one die at 11th level (2d8 and 3d8) and 17th level (3d8 and 4d8).",
};
SpellsList["cheat"] = {
	name: "Cheat",
	classes: [
		"necromancer",
		"warmage",
		"witch",
		"bard",
		"sorcerer",
		"warlock",
		"wizard",
	],
	source: ["VSoS", 332],
	level: 0,
	school: "Div",
	time: "1 bns",
	range: "Self",
	components: "S,M",
	compMaterial: "A weighted die",
	duration: "1 rnd",
	ritual: false,
	description: "Reroll ability checks to play nonmagical games of skill",
	descriptionFull:
		"You subtly twist your fingers, and fate seems to follow suit. For the duration, you can reroll any ability check you make to play nonmagical games of skill. Therefore, this spell could influence a game of poker, but not the result of a deck of many things.",
};
SpellsList["chromatic bullet"] = {
	name: "Chromatic Bullet",
	classes: ["paladin", "ranger"],
	source: ["VSoS", 333],
	level: 1,
	school: "Evoc",
	time: "1 bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A firearm",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"Next ranged firearm atk +2d4+2d4/SL Acid/Cold/Fire/Ltng/Psn/Thun. dmg; can chg wea dmg type",
	descriptionFull:
		"The next time you hit a creature with a ranged weapon attack using a firearm during the spell’s duration, your bullet sparks with elemental energy. The attack deals an extra 2d4 damage to the target. You choose whether this additional damage is acid, cold, fire, lightning, poison, or thunder damage, and you can choose to change the firearm’s damage to one of these damage types. You do not need to pick the same damage type for both." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st.",
};
SpellsList["clue"] = {
	name: "Clue",
	classes: [
		"investigator",
		"witch",
		"bard",
		"cleric",
		"druid",
		"paladin",
		"ranger",
		"wizard",
	],
	source: ["VSoS", 333],
	level: 1,
	school: "Div",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A magnifying glass and pipe",
	duration: "10 min",
	ritual: true,
	description:
		"Foot/fingerprints in 45 ft rad glow; pick a time w/in last 10 days; each crea print glows diff; reveals invis",
	descriptionFull:
		"When you cast this spell, all footprints and fingerprints within a 45-foot radius of a point you touch become highlighted and glow faintly for the duration. At the time of casting, choose any period of time up to the last 10 days to the present; only footprints and fingerprints left within that time will be highlighted. Each creature whose footprints or fingerprints are detected by the spell is assigned a unique color, but are not otherwise identified. Any creature that moves or touches objects in the area will also leave colorful footprints and fingerprints, which might reveal invisible creatures in the area.",
};
SpellsList["concealed shot"] = {
	name: "Concealed Shot",
	classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],
	source: ["VSoS", 333],
	level: 0,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components: "S,M",
	compMaterial: "A ranged weapon",
	duration: "Instantaneous",
	description:
		"Ranged wea atk w/cast; projectile invis. in flight and wea doesn't reveal my position",
	descriptionFull:
		"As part of the action used to cast this spell, you must make an attack with a ranged weapon, otherwise the spell fails. The attack’s projectile is invisible while in flight, and the weapon itself is silent. If the weapon is a firearm, this spell suppresses the smoke and light the weapon produces, making it impossible to see or hear where the shot came from." +
		"\n   " +
		"This spell only conceals the first shot you make; any additional shots aren’t concealed.",
};
SpellsList["conjure cannonball"] = {
	name: "Conjure Canonball",
	classes: ["sorcerer", "wizard"],
	source: ["VSoS", 333],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "600 ft",
	components: "V,S,M",
	compMaterial: "A small replica cannon",
	duration: "Instantaneous",
	save: "Dex",
	description:
		"Ranged spell atk for 4d10+1d10/SL Bludg. dmg; crea w/in 5 ft of target save or \u00BD dmg",
	descriptionFull:
		"You summon a cannonball, mid-flight and at full velocity, which explodes on impact. Make a spell attack roll against a target you can see within range. On a hit, the target takes 4d10 bludgeoning damage, and each creature within 5 feet of the target must make a Dexterity saving throw. On a failed save, a creature takes half as much damage." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each spell slot above 3rd.",
};
SpellsList["conjure cover"] = {
	name: "Conjure Cover",
	classes: ["investigator", "druid", "ranger", "sorcerer", "wizard"],
	source: ["VSoS", 333],
	level: 1,
	school: "Conj",
	time: "1 bns",
	range: "10 ft",
	components: "V,S,M",
	compMaterial: "A duck figurine",
	duration: "Conc, 1 h",
	ritual: true,
	description:
		"Create 5\xD718\xD73 ft (L\xD7W\xD7H) segments; Med \u00BD, Small \u00BE, prone full cover; ea 10 AC, 60 hp; can hurdle",
	descriptionFull:
		"You conjure a low cobblestone wall along the ground, a perfect source of cover, at a point you can see within range. The wall is 18 inches thick and is composed of three 5-foot long by 3-foot high segments. Each segment must be contiguous with at least one other segment." +
		"\n   " +
		"A Medium creature that hunkers behind the wall has half cover from ranged attacks, and a Small creature that hunkers behind it has three-quarters cover from ranged attacks. A prone creature has full cover behind the wall. The wall can be leapt over without using any additional movement." +
		"\n   " +
		"Each segment has AC 10 and 60 hit points. Reducing a segment of the wall to 0 hit points causes it to crumble, destroying it. The wall disappears when all the segments are destroyed or the spell ends.",
};
SpellsList["consecrated armor"] = {
	name: "Consecrated Armor",
	classes: ["investigator", "cleric"],
	source: ["VSoS", 334],
	level: 1,
	school: "Abjur",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A drop of blessed oil",
	duration: "8 h",
	ritual: true,
	description:
		"AC becomes 12+Dex, or 15+Dex against fiends and undead; can use w/shields",
	descriptionFull:
		"You trace a holy symbol on your chest, and an invisible barrier protects you until the spell ends. Your base AC becomes 12 + your Dexterity modifier. If you are attacked by a fiend or undead, your AC becomes 15 + your Dexterity modifier against that attack.",
};
SpellsList["corruption curse"] = {
	name: "Corruption Curse",
	classes: ["witch"],
	source: ["VSoS", 334],
	level: 6,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"1 crea cursed, choose Dex, Con, or Wis; disadv on chosen save and add'l effect; see book",
	descriptionShorter:
		"1 crea; I pick: Dex: disadv Dex save/chk, Con: disadv Con save/no heal, or Wis: disadv Wis save/spll atks",
	descriptionFull:
		"With a piercing glare and a sinister gesture, you send a ribbon of dark magic into a target’s body. A creature you can see within range is cursed for the duration and suffers from one of the following effects of your choice while cursed:" +
		"\n   " +
		toUni("Dull Reflexes") +
		": The target has disadvantage on Dexterity checks and saving throws." +
		"\n   " +
		toUni("Feeble Fortitude") +
		": The target has disadvantage on Constitution saving throws and can’t regain hit points." +
		"\n   " +
		toUni("Weak Will") +
		": The target has disadvantage on Wisdom saving throws as well as spell attack rolls." +
		"\n   " +
		"A remove curse spell cast using a spell slot of 6th level or higher ends this curse early.",
};
SpellsList["cryptogram"] = {
	name: "Cryptogram",
	classes: [
		"necromancer",
		"warmage",
		"witch",
		"bard",
		"sorcerer",
		"warlock",
		"wizard",
	],
	source: ["VSoS", 334],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "Unlimited",
	components: "V,S,M",
	compMaterial: "A small written message",
	duration: "Instantaneous",
	description:
		"Send a message up to 8 characters (incl. spaces) to known crea on same plane, 1/day",
	descriptionFull:
		"You send a small scroll with a short message to a creature of your choice. The recipient must be a creature known to you and also be on the same plane of existence as you. This scroll will hover in front of the recipient, drop into their pocket, or appear sitting on something nearby. The scroll’s message can be up to 8 characters long (spaces count as characters). You can send only one scroll to a single target each day.",
};
SpellsList["curse of binding"] = {
	name: "Curse of Binding",
	classes: ["witch"],
	source: ["VSoS", 334],
	level: 7,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial:
		"A body part from the intended target, such as a fingernail, a lock of hair, or a drop of blood",
	duration: "Until dispelled",
	save: "Cha",
	ritual: true,
	description:
		"Pick 1 tgt and location; tgt must stay w/in 20 ft; if tgt starts turn \u003E20 ft away, Str save or drag 60 ft to it",
	descriptionFull:
		"You bind one creature or object to a location, cursing it so that it may never leave. Choose a target and a location within range, both of which you must be able to see. If the target is a creature, it must make a Charisma saving throw (a willing creature may choose to fail this save), or be cursed to be permanently bound to the chosen location. While cursed, the target can act and move around freely, as long as it remains within 20 feet of the point it is bound to. If the target begins its turn outside of this area, it must make a Strength saving throw against your spell save DC or be dragged 60 feet towards the point it was bound to." +
		"\n   " +
		"Additionally, if the creature tries to use extraplanar travel, it must make another Charisma saving throw. On a failure, the travel attempt fails and any resources used are wasted. On a success, the curse is suppressed until the creature returns to the plane on which it was bound, at which point the dragging effect resumes." +
		"\n   " +
		"A remove curse spell cast using a spell slot of 7th level or higher ends this curse early.",
};
SpellsList["curse of blades"] = {
	name: "Curse of Blades",
	classes: ["necromancer", "witch", "bard", "warlock", "wizard"],
	source: ["VSoS", 334],
	level: 3,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Wis",
	description:
		"1 crea w/wea, save or can't drop/stow wea; w/ Attack action, makes additional wea atk vs. self",
	descriptionFull:
		"Unholy bands of black energy tie a creature to its weapon. Choose a creature you can see within range that is holding a weapon to make a Wisdom saving throw. On a failed save, the creature is cursed for the duration. A cursed target can’t willingly drop or stow its weapon. Additionally, whenever it takes the Attack action on its turn, it makes one additional attack using its weapon targeting itself, against its own AC, dealing damage as normal on a hit." +
		"\n   " +
		"A remove curse spell ends this curse early.",
};
SpellsList["curse of chains"] = {
	name: "Curse of Chains",
	classes: ["witch"],
	source: ["VSoS", 335],
	level: 1,
	school: "Ench",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Con",
	ritual: false,
	description:
		"2 crea w/in 30 ft of another save, or can't move further apart; if 1 cursed, bns to pick another w/in 30 ft",
	descriptionFull:
		"A black brand resembling iron shackles darkens the ankles of two creatures you can see. Choose two creatures you can see within range of the spell, and within 30 feet of each other, to each make a Constitution saving throw. A willing creature can choose to fail this saving throw. On a failed save, a target is cursed for the duration. If only one target is cursed by this spell, you can use your action or bonus action on a subsequent turn to choose another target within 30 feet of the cursed creature to make a saving throw. While two creatures are cursed by this spell, they are unable to willingly move further away from each other." +
		"\n   " +
		"A remove curse spell ends this curse early.",
};
SpellsList["curse ward"] = {
	name: "Curse Ward",
	classes: [
		"investigator",
		"martyr",
		"necromancer",
		"witch",
		"cleric",
		"paladin",
		"warlock",
		"wizard",
	],
	source: ["VSoS", 335],
	level: 2,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "1 h",
	ritual: false,
	description:
		"1 willing crea resist Necro. dmg; immune to curse, possession, and hexes; max HP can't be reduced",
	descriptionFull:
		"You reach out your hand and touch a willing creature within your reach, raising a smoke-like barrier around it. For the duration, the target has resistance to necrotic damage and can’t be cursed, possessed, or targeted by a hex. Also, its maximum hit points can’t be lowered. If the target is already affected by one of these effects, the effect is suspended until the spell ends.",
};
SpellsList["dead fog"] = {
	name: "Dead Fog",
	classes: ["necromancer"],
	source: ["VSoS", 335],
	level: 3,
	school: "Necro",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "1 rnd",
	save: "Con",
	ritual: false,
	descriptionShorter:
		"15 ft rad sphere fog; crea enter/start turn save or 3d8+1d8/(10+5hp or SL) Necro; Escping can Str save",
	description:
		"Create 15-ft rad sphere of fog; crea enter or start turn in it save or 3d8+1d8/SL Necro. dmg; B",
	descriptionFull:
		"A 15-foot-radius sphere of fog, filled with the necromantic Dead Mists, appears centered on a point you can see within range. The fog spreads around corners, and its area is heavily obscured. It lasts for the duration, or until strong wind disperses the fog, ending the spell." +
		"\n   " +
		"When you cast this spell, you can empower it with your own life essence by losing 10, 15, or 20 hit points when you cast it. When you do so, treat the spell slot used to cast the spell as being one level higher if you lost 10 hit points, two levels higher if you lost 15 hit points, and three levels higher if you lost 20 hit points, up to a maximum of 9th level." +
		"\n   " +
		"When a creature enters the area for the first time on a turn or starts its turn there, it must make a Constitution saving throw, taking 3d8 necrotic damage on a failed save." +
		"\n   " +
		"Additionally, when a creature tries to leave the sphere of fog, you can choose for the fog to grasp the creature with misty tendrils. The creature must make a Strength saving throw to leave the fog, and is unable to move on a failed save." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};
SpellsList["dead mist lash"] = {
	name: "Dead Mist Lash",
	classes: ["necromancer"],
	source: ["VSoS", 335],
	level: 1,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description: "Ranged spell atk for 3d8+1d8/(5hp/SL) Necro. dmg",
	descriptionFull:
		"You conjure forth a glowing white tendril formed of the sinister, necromantic Dead Mists, which lashes out at a foe you can see within range. When you cast this spell, you can empower it with your own life essence by losing 5, 10, or 15 hit points when you cast it. When you do so, treat the spell slot used to cast the spell as being one level higher for every 5 hit points lost, up to a maximum of 9th level." +
		"\n   " +
		"Make a ranged spell attack roll against a creature within range. On a hit, the target takes 3d8 necrotic damage." +
		AtHigherLevels +
		"If you cast this spell using a slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
};
SpellsList["defenestration"] = {
	name: "Defenestration",
	classes: ["bard"],
	source: ["VSoS", 336],
	level: 2,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Str",
	ritual: false,
	description:
		"1 crea save \u0026 pushed 5 ft or 4d6+1d6/SL Slash dmg and flies 20 ft away through a window",
	descriptionFull:
		"A wave of force erupts from your open hand, hurling a creature you can see within range through a window. The target makes a Strength saving throw. On a failure, the target is thrown up to 20 feet through a window of your choice. If there is no window within 20 feet of the target, it is instead thrown through a window of arcane force, which materializes 10 feet behind it and vanishes after the creature shatters it. The target takes 4d6 slashing damage as it flies through a window. On a successful save, the target instead is pushed back 5 feet and takes no damage." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 3rd level or higher, the target can be pushed back an additional 5 feet for each slot level above 2nd, and takes an additional 1d6 slashing damage for each slot level above 2nd.",
};
SpellsList["delay"] = {
	name: "Delay",
	classes: ["necromancer", "witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 336],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "An octagonal sign",
	duration: "Instantaneous",
	save: "Wis",
	ritual: false,
	description:
		"1 crea save or moved to end of init. starting next rnd onwards",
	descriptionFull:
		"You briefly slow time for a creature of your choice that you can see within range. The target must succeed on a Wisdom saving throw or be moved to last place in the initiative order from the beginning of the next round onwards.",
};
SpellsList["demand"] = {
	name: "Demand",
	classes: ["witch", "bard", "sorcerer", "warlock", "wizard"],
	source: ["VSoS", 336],
	level: 6,
	school: "Ench",
	time: "1 a",
	range: "Unlimited",
	components: "V,S,M",
	compMaterial: "A snake's tongue and a piece of copper wire",
	duration: "Conc, 8 h",
	save: "Wis",
	ritual: false,
	descriptionShorter:
		"Send msg \u226425 words to crea w/ Int \u22651; can use as per Suggestion spell",
	description:
		"Send 25 words or less to 1 crea, it can reply; can use as per Suggestion; B",
	descriptionFull:
		"You send a short message of twenty-five words or fewer to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message." +
		"\n   " +
		"You can send the message across any distance, and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn’t arrive." +
		"\n   " +
		"You can use this message to suggest a reasonable-sounding course of activity to the target, in which case the target must make a Wisdom saving throw or be compelled to follow your instructions for the duration, as per the suggestion spell.",
};
SpellsList["dire charm"] = {
	name: "Dire Charm",
	classes: ["witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 336],
	level: 4,
	school: "Ench",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u0192",
	compMaterial: "A nymph's eyelash, worth at least 100 gp",
	duration: "10 days",
	save: "Wis",
	ritual: false,
	description:
		"1 humanoid save w/ disadv unless fighting or charmed; Reroll save if we harm it; Becomes perm. \u2265SL",
	descriptionFull:
		"You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and has disadvantage unless you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends. If you or your companions do anything harmful to it, it can reattempt the saving throw. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 8th level or higher, the duration becomes permanent (until dispelled).",
};
SpellsList["dire warning"] = {
	name: "Dire Warning",
	classes: ["investigator", "necromancer", "cleric", "wizard"],
	source: ["VSoS", 336],
	level: 4,
	school: "Div",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Get 6 helpful words from future self; must do 10-min ritual w/in 1 week to deliver; B",
	descriptionShorter:
		"Receive \u22646 word msg from future me; must do 10 min (R) w/in 1 week before casting again",
	descriptionFull:
		"You receive a message of up to 6 words from your future self, warning you of a critical threat or pointing you toward a fruitful avenue. At some point in the future, once you have learned why you sent the message, you must perform a 10-minute-long ritual to deliver the message back in time to your past self. Once you cast this spell, you can’t cast it again until you perform this ritual, or one week later if you don’t discover this information. If you cast this spell and receive no message, it indicates that you never complete the ritual in the future, possibly owing to your death or some other hindrance.",
};
SpellsList["distort gravity"] = {
	name: "Distort Gravity",
	classes: ["investigator", "necromancer", "druid", "sorcerer", "wizard"],
	source: ["VSoS", 337],
	level: 4,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A gyroscope",
	duration: "Conc, 1 h",
	ritual: true,
	description:
		"All crea/obj w/in 15 ft of where I touch, treat as if it was the ground; All crea/obj fall after spell ends",
	descriptionFull:
		"The spell manipulates the direction of gravity on a non-horizontal surface you touch, causing it to attract creatures and objects within 15 feet of it as if it were the ground. The surface can be up to a 60-foot square in area and can wrap around a structure, if its geometry permits. A creature can walk on this surface as if it were level ground, even if the surface is perpendicular to the ground or upside down." +
		"\n   " +
		"When the duration ends, all creatures and objects fall from the surface.",
};
SpellsList["eldritch orb"] = {
	name: "Eldritch Orb",
	classes: ["necromancer", "witch", "warlock"],
	source: ["VSoS", 337],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	ritual: false,
	description:
		"Ranged spell atk for 1d8 Force dmg; each crea in 5 ft save or half dmg; +1d8 CL5/11/17",
	descriptionCantripDie:
		"Ranged spell atk for `CD`d8 Force dmg; each crea in 5 ft save or half dmg",
	descriptionFull:
		"You fling a ball of eldritch energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 force damage, and each other creature within 5 feet of the target must make a Dexterity saving throw. On a failed save, a creature takes half as much damage." +
		"\n   " +
		"This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};
SpellsList["elemental curse"] = {
	name: "Elemental Curse",
	classes: ["witch"],
	source: ["VSoS", 337],
	level: 6,
	school: "Evoc",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Con",
	ritual: false,
	description:
		"1 crea save or vuln to Acid/Cold/Fire/Ltng/Thun; if resist, no resist; if immune, resist",
	descriptionFull:
		"A spark leaps from your finger to a creature you touch, spreading in bright cracks across its skin. The target must make a Constitution saving throw or be cursed for the duration. While cursed, the target has vulnerability to your choice of acid, cold, fire, lightning, or thunder damage. If the creature has resistance to the chosen damage type, it instead only loses that resistance. If the target has immunity to the chosen damage type, it is treated as having only resistance to that damage." +
		"\n   " +
		"A remove curse spell ends this curse early.",
};
SpellsList["evasiveness"] = {
	name: "Evasiveness",
	classes: ["sorcerer", "wizard"],
	source: ["VSoS", 337],
	level: 5,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,M",
	compMaterial: "A scrap of silk",
	duration: "Conc, 1 h",
	ritual: false,
	description: "1 crea AC becomes 20 and gets adv. on Dex saves",
	descriptionFull:
		"You touch a willing creature. Until the spell ends, the target gains a superhuman ability to dodge attacks. The target’s AC becomes 20, if it were lower, regardless of what kind of armor it is wearing, and it has advantage on Dexterity saving throws.",
};
SpellsList["exhume"] = {
	name: "Exhume",
	classes: ["necromancer", "cleric", "wizard"],
	source: ["VSoS", 337],
	level: 1,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A drop of blood",
	duration: "Instantaneous",
	ritual: true,
	description:
		"A pile of humanoid bones emerge from the ground; 1d4 piles if in a burial place",
	descriptionFull:
		"Choose an unoccupied 20-foot square within range—note that the area must have solid earth beneath it; this spell fails if cast on the upper floor of a building. This spell then causes one pile of humanoid bones to rise out of the ground within that square. If you cast this spell within a burial place such as a graveyard, mausoleum, or barrow, 1d4 piles of bones are exhumed instead of 1. The ground itself is not changed or disturbed by this spell; the bones simply appear out of the ground.",
};
SpellsList["eye of anubis"] = {
	name: "Eye of Anubis",
	classes: ["necromancer", "witch", "cleric"],
	source: ["VSoS", 337],
	level: 0,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "M",
	compMaterial: "A holy symbol",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Ranged spell atk for 1d8 Necro dmg \u0026 can't Diseng. til end of my next turn; +1d8 CL5/11/17 \u0026 +1 atk CL5; B",
	descriptionCantripDie:
		"Ranged spell atk for `CD`d8 Necro \u0026 can't Diseng. til end of my next turn; +1 atk at CL5 for `CD-1`d8 Necro",
	descriptionFull:
		"A beam of tenebrous moonlight streaks from your left eye toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 necrotic damage and can’t take the Disengage action until the end of your next turn. This spell creates an additional beam and deals more damage at higher levels. At 5th level, you fire a second beam originating from your right eye. Your first beam’s damage increases by 1d8 (2d8) when you reach 11th level, and your second beam’s damage increases by 1d8 (2d8) when you reach 17th level.",
};
SpellsList["eye of ra"] = {
	name: "Eye of Ra",
	classes: ["cleric"],
	source: ["VSoS", 338],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "M",
	compMaterial: "A holy symbol",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Ranged spell atk for 1d8 Radiant dmg \u0026 can't Hide until end of my next turn; +1d8 CL5/11/17 \u0026 +1 atk CL5; B",
	descriptionCantripDie:
		"Ranged spell atk for `CD`d8 Radiant \u0026 can't Hide until end of my next turn; +1 atk at CL5 for `CD-1`d8 Radiant",
	descriptionFull:
		"A beam of furious radiance erupts from your right eye, directed at a creature you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 radiant damage and can’t take the Hide action until the end of your next turn. This spell creates an additional beam and deals more damage at higher levels. At 5th level, you fire a second beam originating from your left eye. Your first beam’s damage increases by 1d8 (2d8) when you reach 11th level, and your second beam’s damage increases by 1d8 (2d8) when you reach 17th level.",
};
SpellsList["false vision"] = {
	name: "False Vision",
	classes: ["investigator", "necromancer", "witch", "bard", "wizard"],
	source: ["VSoS", 338],
	level: 4,
	school: "Illus",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A pinch of dust from a precious gem",
	duration: "8 h",
	ritual: false,
	description:
		"1 crea/place/obj \u226410 ft in any dimension hidden from divination, or I can deceive the diviner",
	descriptionFull:
		"For the duration, you hide a target that you touch from divination magic. The target can be a willing creature, a place, or an object no larger than 10 feet in any dimension. If the target is targeted by any divination magic or perceived through a scrying spell’s sensors, you are able to present the diviner with false information of your choice, as long as you are conscious at the time of the divination attempt. The target could appear to be in different circumstances, in one or more false locations, or completely undetectable.",
};
SpellsList["finger guns"] = {
	name: "Finger Guns",
	classes: ["warmage", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 338],
	level: 0,
	school: "Evoc",
	time: "1 bns",
	range: "Self",
	components: "V,S",
	duration: "1 min",
	ritual: false,
	description:
		"Action for ranged spell atk, 60 ft, 1d8 Force dmg on hit; counts as firearm; +1d8 CL5/11/17",
	descriptionCantripDie:
		"Action for ranged spell atk, 60 ft, `CD`d8 Force dmg on hit; counts as firearm",
	descriptionFull:
		"You extend your forefinger and thumb, a dangerous gesture mimicking a gun. For the duration, you can use your action to make a ranged spell attack against one creature you can see within 60 feet of you, dealing 1d8 force damage on a hit." +
		"\n   " +
		"Your finger gun doesn’t require ammunition, but it is considered to be a firearm for spells and effects that apply to firearms." +
		"\n   " +
		"The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};
SpellsList["flawed reconstruction"] = {
	name: "Flawed Reconstruction",
	classes: ["necromancer", "witch", "warlock", "wizard"],
	source: ["VSoS", 338],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A needle and thread",
	duration: "Instantaneous",
	ritual: false,
	description:
		"1 crea regain 4d6+1d6/SL hit points; max hit points reduced by same until LR",
	descriptionShorter:
		"1 crea regains 4d6+1d6/SL hp; max hp reduced by same until end of long rest; Leaves perm. scars",
	descriptionFull:
		"You stitch together the wounds of a willing creature you touch, which regains 4d6 hit points. However, the mending is imperfect, and the target’s hit point maximum is reduced by the same amount until it finishes a long rest. A creature that regains hit points due to this spell will be left with some permanent scars." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d6 for each slot level above 1st.",
};
SpellsList["flesh ripper"] = {
	name: "Flesh Ripper",
	classes: ["necromancer"],
	source: ["VSoS", 338],
	level: 0,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Str",
	ritual: false,
	description:
		"Ranged spell atk for 1d8 Prc dmg \u0026 save or can't move more than 30 ft from me; +1d8 CL5/11/17",
	descriptionCantripDie:
		"Ranged spell atk for `CD`d8 Pierc. \u0026 save or must stay w/in 30 ft of me, ending if \u003E30 ft away",
	descriptionFull:
		"As you cast this spell, a spectral meat hook is flung at the creature of your choice, connected to a spectral chain. Make a ranged spell attack against a creature within range. On a hit, the target takes 1d8 piercing damage as a spectral meat hook plunges into their body. Until the start of your next turn, the target must make a Strength saving throw to move further than 30 feet from you. On a failed save, it is prevented from moving until the start of your turn. This effect ends if you are further than 30 feet away from the target." +
		"\n   " +
		"This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};
SpellsList["force buckler"] = {
	name: "Force Buckler",
	classes: ["warmage"],
	source: ["VSoS", 339],
	level: 0,
	school: "Abjur",
	time: "1 bns",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "A specially prepared gauntlet worth at least 5 gp",
	duration: "1 rnd",
	ritual: false,
	description:
		"My AC gains +2 as if wielding a shield; ends if hit by an attack",
	descriptionFull:
		"You summon a translucent yet visible field of force, which springs forth from the prepared gauntlet. Until the start of your next turn, this shield grants you a +2 bonus to your Armor Class, as if you were wielding a shield. This spell ends early if you are hit by an attack.",
};
SpellsList["force dart"] = {
	name: "Force Dart",
	classes: ["warmage"],
	source: ["VSoS", 339],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M\u0192",
	compMaterial: "A specially prepared gauntlet worth at least 5 gp",
	duration: "Instantaneous",
	ritual: false,
	description: "Ranged spell atk for 1d10 Force dmg; +1d10 CL5/11/17",
	descriptionCantripDie: "Ranged spell atk for `CD`d10 Force dmg",
	descriptionFull:
		"You fling a dart of magical force at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage." +
		"\n   " +
		"This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
};
SpellsList["force weapon"] = {
	name: "Force Weapon",
	classes: ["warmage"],
	source: ["VSoS", 339],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "5 ft",
	components: "V,S,M\u0192",
	compMaterial: "A specially prepared gauntlet worth at least 5 gp",
	duration: "1 rnd",
	ritual: false,
	description:
		"Melee spell atk for 1d10 Force dmg; can opportunity attack until next turn; +1 atk CL5/11/17",
	descriptionCantripDie:
		"`CD` melee spell atks for 1d10 Force dmg each; can make 1 Opp. Attack before next turn",
	descriptionFull:
		"You conjure a blade of magical force in the air, which lashes out at your foes. Make a melee spell attack against a creature within range. On a hit, the target takes 1d10 force damage. The blade remains in existence for a short time; until the start of your next turn, you can make a single strike with your mystical blade as an opportunity attack." +
		"\n   " +
		"You can make 1 additional attack on your turn at 5th level (2 attacks), at 11th level (3 attacks), and at 17th level (4 attacks).",
};
SpellsList["free throw"] = {
	name: "Free Throw",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["VSoS", 339],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "S,M",
	compMaterial: "A scrap of pigskin",
	duration: "1 rnd",
	save: "Dex",
	ritual: false,
	description:
		"I throw 1 obj \u22645+5/SL lb. up to 150 ft; If at crea, ignores cover \u0026 save or 4d4+2d4/SL Bludg dmg; save halves",
	descriptionFull:
		"As part of the casting of this spell, you throw a handheld object weighing 5 pounds or less. For the duration of the spell, you choose the object’s exact trajectory, up to 150 feet of distance. The object can navigate around obstacles and corners, and ignores half and three-quarters cover if it is directed at a creature. If the object strikes a creature, that creature must make a Dexterity saving throw or take 4d4 bludgeoning damage, or half as much on a successful save. The object stops moving after striking a creature or object." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can throw with this spell increases by 5 pounds, and the damage increases by 2d4 for each slot level above 1st.",
};
SpellsList["frenzy"] = {
	name: "Frenzy",
	classes: ["necromancer", "witch", "bard", "wizard"],
	source: ["VSoS", 340],
	level: 6,
	school: "Ench",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A drop of fresh blood",
	duration: "Conc, 1 min",
	save: "Wis",
	ritual: false,
	description:
		"Crea in 20 ft of a point save or atk crea in reach or self w/melee wea; improv/unarmed if no melee wea",
	descriptionFull:
		"With a gesture, you reduce a crowd to base instinct and violence. Choose a point you can see within range. Each creature within 20 feet of that point must make a Wisdom saving throw. On a failed save, a creature is frenzied for the duration. When a creature is frenzied, it draws a melee weapon, if it has one." +
		"\n   " +
		"A frenzied creature must use its action at the beginning of its turn to attack a creature within its reach. It uses a melee weapon, if it has one, or an improvised weapon or unarmed strike if it doesn’t. If multiple targets are within the creature’s reach, it chooses its target randomly. If there is no target within the creature’s reach, it attacks itself, against its own AC, dealing damage as normal on a hit." +
		"\n   " +
		"At the end of its turn, a frenzied creature can repeat its saving throw, ending the effect on itself early on a success.",
};
SpellsList["frigid blade"] = {
	name: "Frigid Blade",
	classes: ["warmage"],
	source: ["VSoS", 340],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "S:5-ft rad",
	components: "V,M",
	compMaterial: "A melee weapon",
	duration: "1 rnd",
	ritual: false,
	description:
		"Melee wea atk w/cast; hit: wea dmg is Cold +0d8 Cold dmg, 1d8 Cold if moves before my turn; +1d8 CL5/11/17, B",
	descriptionCantripDie:
		"Melee wea atk with cast; hit: wea dmg is Cold, +`CD-1`d8 Cold, rea for `CD`d8 Cold if moves before my turn",
	descriptionFull:
		"As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell’s range, otherwise the spell fails. On a hit, the attack does damage as normal, except that the attack deals cold damage instead of its normal type. Additionally, the target is covered in a brittle frost until the start of your next turn. If the target willingly moves before then, you can use your reaction to deal 1d8 cold damage to the target, ending the spell." +
		"\n   " +
		"At 5th level, the melee attack and secondary damage each deal an additional 1d8 cold damage. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and 17th level (3d8 and 4d8).",
};
SpellsList["frolicking fountain"] = {
	name: "Frolicking Fountain",
	classes: ["witch", "bard", "druid", "warlock", "wizard"],
	source: ["VSoS", 340],
	level: 5,
	school: "Ench",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A conductor's baton",
	duration: "Conc, 1 min",
	save: "Wis",
	ritual: false,
	description:
		"Create 5-ft water cube; crea that see it w/in 60 ft save or charmed; B",
	descriptionFull:
		"You conjure a 5-foot cube of water that animates in a hypnotic motion at an unoccupied space within range. The water swirls for the duration, not leaving its space except to send small jets up to five feet into the air. Each creature within 60 feet other than you which sees the fountain must make a Wisdom saving throw or become charmed by you for the duration. While charmed by this spell, a creature must use its movement on each of its turns to get as close to the water as possible. A charmed creature can’t willingly move away from the fountain. At the end of its turn, a charmed creature can attempt the saving throw again, ending the effect on a success. Once a creature has succeeded on a save against this spell, it can’t be affected by the same instance of it again." +
		"\n   " +
		"If a creature is within 5 feet of the fountain, you can use a bonus action to command the water to lash out at that creature. Make a melee spell attack against the target. On a hit, the water deals 4d6 bludgeoning damage to the target. If the target is charmed by this spell, it can attempt the saving throw again after taking damage from it.",
};
SpellsList["gahoul's glorious gothic"] = {
	name: "Gahoul's Glorious Gothic",
	classes: ["necromancer"],
	source: ["VSoS", 340],
	level: 8,
	school: "Conj",
	time: "1 h",
	range: "1 mile",
	components: "V,S,M\u0192",
	compMaterial: "A decorated gothic manor miniature worth at least 1,000 gp",
	duration: "7 days",
	ritual: false,
	description:
		"Create a gothic estate staffed by skeletons and stocked with food; B",
	descriptionFull:
		"A rift opens, pouring forth tons of brick and stonework that neatly and quickly assemble into a vast gothic estate. The estate consists of a manor containing a vault, a spacious 200-by-200-foot courtyard, and a 10-foot high wrought iron fence around the perimeter. Any creature within the estate’s area is escorted away by harmless but forceful specters." +
		"\n   " +
		"You can create any floor plan you like for the manor, but the space can’t exceed 50 cubes, each cube being 10 feet on each side, or five stories in total, including basements. The manor is adorned with barred windows and decorative gargoyles, but is furnished and decorated as you choose. Once the manor is first created, these details are recorded in the miniature manor used to cast the spell and can’t be changed. The manor is staffed by 50 skeletons obedient to you, and contains enough food to serve 50 people each day for a week. The skeletons can perform any task a normal human servant could perform, but they can’t attack or take any action that would directly harm another creature." +
		"\n   " +
		"The manor contains a 15-foot cube vault, which is an extradimensional space. Items placed within the vault will be present next time you cast this spell." +
		"\n   " +
		"The courtyard is drenched in necromantic magic, such that any humanoid buried in its grounds rises 24 hours later as a ghoul under your control, as per the spell animate dead. When the spell is cast, 3 ghouls are animated in the courtyard. These undead are under your control, but can’t leave the estate. They patrol the estate if given no other instructions. Undead can’t be turned within the estate." +
		"\n   " +
		"The estate crumbles into dust and bone after 7 days, and all items placed within the manor appear safely in the space the manor occupied. If cast in the same place once every 7 days for a year, the estate becomes permanent.",
};
SpellsList["gahoul's scapegoat"] = {
	name: "Gahoul's Scapegoat",
	classes: ["necromancer", "witch"],
	source: ["VSoS", 341],
	level: 4,
	school: "Abjur",
	time: "1 min",
	range: "Self",
	components: "V,S,M",
	compMaterial: "Black chalk, paint, or oil",
	duration: "8 h",
	ritual: false,
	description:
		"Mark 1 willing crea; when hit by atk, can use rea and end spell to swap places and have atk hit crea",
	descriptionFull:
		"You trace a complex arcane symbol into the flesh of a willing creature within 5 feet of you, marking them for sacrifice. During the spell’s duration, when you are hit with an attack and the marked creature is within 60 feet of you, you can use your reaction to switch positions with the creature, causing it to be hit by the attack instead of you. The spell then ends.",
};
SpellsList["gahoul's shrieking skull"] = {
	name: "Gahoul's Shrieking Skull",
	classes: ["necromancer"],
	source: ["VSoS", 341],
	level: 1,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A skull",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Crea in 10-ft cube take 2d4+1d4/SL Thunder dmg; Audible for 300 ft",
	descriptionFull:
		"You throw a cackling skull at a point you can see within range, which emits a mortifying shriek audible out to 300 feet. Each creature within a 10-foot cube centered on the skull takes 2d4 thunder damage, without making a saving throw." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d4 for each slot level above 1st.",
};
SpellsList["gahoul's spectral scythe"] = {
	name: "Gahoul's Spectral Scythe",
	classes: ["necromancer"],
	source: ["VSoS", 341],
	level: 6,
	school: "Necro",
	time: "1 a",
	range: "S:60-ft line",
	components: "V,S",
	duration: "1 rnd",
	save: "Dex",
	ritual: false,
	description:
		"Crea in 60\xD710 (L\xD7W) ft save or 6d8+1d8/SL Necro; if w/in 120 ft, scythe returns; save again; save \u00BD both",
	descriptionFull:
		"You conjure a phantasmal scythe of death in your open hand and throw it whirling through the air. The scythe travels in a 60-foot long, 10-foot wide line, coming to rest hovering in the air at the end of its line or before it strikes any solid objects. Each creature within the area while the scythe is moving must make a Dexterity saving throw or take 6d8 necrotic damage, or half as much on a successful save. A creature has disadvantage on this saving throw if the scythe comes to rest in the creature’s space." +
		"\n   " +
		"If you are within 120 feet of the scythe at the start of your next turn, it returns to you in a 10-foot wide line, forcing creatures within its area of travel to make saving throws against the scythe’s damage." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th.",
};
SpellsList["game of fate"] = {
	name: "Game of Fate",
	classes: ["investigator", "bard", "wizard"],
	source: ["VSoS", 341],
	level: 6,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A gaming set",
	duration: "1 h",
	save: "Wis",
	ritual: false,
	description:
		"Challenge a creature to a game for 6d6 Psychic dmg and agreed-upon stakes; B",
	descriptionShorter:
		"1 Crea \u0026 \u003E3 Int save or play game; Lose/Tie 6d6 (max 10d6) psy; Can up stakes; Ends tgt/I uncon./dmg; B",
	descriptionFull:
		"You magically compel a creature within range to a nonmagical game with vital consequences. If the creature you choose has an Intelligence of 3 or lower, or doesn’t speak any language, the creature is unaffected. An unwilling creature can make a Wisdom saving throw to resist this effect. On a failed save, the creature is compelled to join you in the game. If the target takes damage or falls unconscious, this spell ends." +
		"\n   " +
		"The loser of the game takes 6d6 psychic damage. If no player loses or has won by the end of the spell’s duration, both you and the target take this damage." +
		"\n   " +
		"Additionally, you and the target creature can negotiate for greater stakes. You can bet higher psychic damage (up to a maximum of 10d6,) property, or more esoteric rewards, such as bestowal of a noble title, on the game. The spell reveals if a creature attempts to bet property they do not own. A bet is finalized when you and the target agree on the bet, solidifying the bet with a handshake or similar gesture. Property or currency bet on the game is teleported to the winner at the game’s conclusion. The loser is also magically compelled to take any action (such as bestowing a title) promised as part of a bet." +
		"\n   " +
		"Lastly, no spell, magical effect, or creature other than you and the target can influence the game’s outcome.",
};
SpellsList["geomantic discernment"] = {
	name: "Geo. Discernment",
	classes: ["investigator", "druid", "ranger", "wizard"],
	source: ["VSoS", 342],
	level: 3,
	school: "Div",
	time: "1 a",
	range: "S:100-ft rad",
	components: "V,S",
	duration: "Conc, 10 min",
	ritual: true,
	description:
		"See aura around precious metals, gems, etc.; not blocked by any nonmagical obstacles",
	descriptionFull:
		"You gain the ability to sense valuable minerals in a 100-foot radius around you. A glowing aura that only you can see appears around any valuable metals, gems, ores, native elements, or other resources in that radius for the spell’s duration. You can see this aura through any amount of nonmagical material.",
};
SpellsList["glitterdust"] = {
	name: "Glitterdust",
	classes: ["witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 342],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "S:15-ft cone",
	components: "V,S,M",
	compMaterial: "A handful of powdered mica",
	duration: "Conc, 1 min",
	save: "Con",
	ritual: false,
	description:
		"Crea in area save or blinded; crea in area get no benefit from invisibility",
	descriptionFull:
		"You spray golden particles in a 15-foot cone, covering all creatures and objects in that area. Each creature in the area must succeed a Constitution saving throw or be blinded for the duration. A creature blinded by this spell can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Each creature within the area, whether or not it succeeds on its saving throw, can’t benefit from being invisible for the duration.",
};
SpellsList["grasp of the grave"] = {
	name: "Grasp of the Grave",
	classes: ["necromancer"],
	source: ["VSoS", 342],
	level: 4,
	school: "Necro",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A shrunken hand",
	duration: "Conc, 1 min",
	save: "Str",
	ritual: false,
	description:
		"20-ft rad becomes diff. terrain; crea entering or starting turn save or 3d6+1d6/SL Necro dmg; B",
	descriptionShorter:
		"20 ft rad dif ter; Non-undead enter/SoT/A save or 3d6+1d6/SL Necro, move w/in rad; save \u00BD, no move",
	descriptionFull:
		"Spectral skeletal arms emerge from the ground in a 20-foot-radius circle, centered on a point you can see within range. The arms grasp at creatures within the area, except for undead creatures, which ignore the effects of this spell. The area is difficult terrain." +
		"\n   " +
		"When a creature enters the area for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, a creature takes 3d6 necrotic damage, and is dragged by the hands to any unoccupied space within the area that you choose. On a successful save, a creature takes half as much damage and is not moved." +
		"\n   " +
		"Until the spell ends, you can use your action to force each creature within the area to immediately make a save against this spell." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 5th level or higher, its damage increases by 1d6 for each slot level above 4th.",
};
SpellsList["guided missile"] = {
	name: "Guided Missile",
	classes: ["bard", "druid", "paladin"],
	source: ["VSoS", 342],
	level: 1,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"Next ranged weapon atk has advantage and double normal/long range",
	descriptionFull:
		"You utter a prayer to guide your projectile, causing it to arc toward its target. The next ranged weapon attack you make before the spell ends has advantage, and has double its normal and long ranges.",
};
SpellsList["halo of flame"] = {
	name: "Halo of Flame",
	classes: ["martyr", "cleric", "paladin"],
	source: ["VSoS", 342],
	level: 2,
	school: "Evoc",
	time: "1 a",
	range: "S:10-ft rad",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	ritual: false,
	description:
		"Create a 10-ft rad, 5-ft wide ring; crea in area save or 4d6+1d6/SL Fire dmg; save halves",
	descriptionFull:
		"A ring of flame ignites above your head and then springs outward, coming to rest in a burning circle. The circle is composed of a 5-foot wide line of flame, curving to form a 10-foot-radius ring around you. Each creature you choose within the area must make a Dexterity saving throw. On a failed save, a creature takes 4d6 fire damage, or half as much on a successful save." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};
SpellsList["hangover"] = {
	name: "Hangover",
	classes: ["bard"],
	source: ["VSoS", 343],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A tiny vial of strong liquor",
	duration: "Instantaneous",
	save: "Con",
	ritual: false,
	description:
		"1 crea save or 3d8+1d8/SL Psy dmg, Poisoned til start of my next turn; disadv. on Conc save from dmg",
	descriptionFull:
		"You emit a drunken aura that quickly washes away, leaving the feeling of an intense hangover. A creature you choose within range must succeed on a Constitution saving throw or take 3d8 psychic damage. The target has disadvantage on Constitution saving throws it makes to maintain concentration on a spell due to this damage. Additionally, on a failed save, the target is poisoned until the start of your next turn." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};
SpellsList["heart of darkness"] = {
	name: "Heart of Darkness",
	classes: ["necromancer"],
	source: ["VSoS", 343],
	level: 9,
	school: "Necro",
	time: "1 h",
	range: "S:1-mile rad",
	components: "V,S,M\u0192",
	compMaterial:
		"A humanoid heart prepared with onyx and diamond dust worth at least 10,000 gp",
	duration: "Until dispelled",
	ritual: false,
	descriptionShorter:
		"Raise and command up to 100 undead while holding the heart; see book",
	description:
		"Raise up to 100 S/M Skel/Zomb \u0026 doesn't count vs me; Crea w/heart cmds 1/Day; AC 10/HP 20; See B",
	descriptionFull:
		"When you cast this spell, you stab a black, ritualistically prepared humanoid heart. The ichor from the heart infects the land with foul necromantic energies, causing up to one hundred piles of bones or corpses of Medium or Small humanoids within a 1-mile radius to rise from the dead, becoming skeletons or zombies (the GM has the creatures’ game statistics). The undead dig their way out of graves, smash their way out of mausoleums, and tear down cemetery gates." +
		"\n   " +
		"The creature that is holding the heart can use its action to issue a general command to all undead created by the spell, such as to destroy a town or hunt down a particular creature. Only one general command can be issued to the undead every 24 hours. If not issued a command, the undead indiscriminately attack living creatures, other than the creature that is holding the heart and creatures designated by it. Once given an order, the undead continue to follow it to the best of their ability until the task is complete." +
		"\n   " +
		"Even while you hold the heart, the undead aren’t directly under your control, and therefore don’t count against any limitations of undead you can command." +
		"\n   " +
		"The undead remain animated until the spell ends. The spell ends if the heart is destroyed (AC 20, HP 10, immunity to necrotic, poison, and psychic damage) or targeted by a dispel magic spell cast as a 9th-level spell. When the spell ends, all undead animated by it are instantly destroyed, crumpling into a heap. The spell also ends if every undead created by it is destroyed.",
};
SpellsList["hocuspocus"] = {
	name: "Hocuspocus",
	classes: ["necromancer", "witch", "warlock"],
	source: ["VSoS", 343],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "1 min",
	ritual: false,
	description:
		"Minor phenomena; candles flicker; quiet sounds; glowing orbs; chill/warm air; small obj hover \u0026 rattle; B",
	descriptionFull:
		"You conjure minor paranormal phenomena and other ominous effects. You create one of the following magical effects within range for 1 minute:" +
		"\n \u2022" +
		"You cause all candles, torches, and other open flames to darken and flicker." +
		"\n \u2022" +
		"You create a quiet sound that originates from a point of your choice within range, such as ominous whispers, the drone of insects, or the sound of crying." +
		"\n \u2022" +
		"You create up to four torch-sized spectral, glowing orbs, which float around within range. The orbs do not provide light, apart from a dim glow." +
		"\n \u2022" +
		"You can chill or warm the air in a 10-foot cube by 10 degrees." +
		"\n \u2022" +
		"You cause small, unattended objects to rattle or levitate an inch off the ground." +
		"\n   " +
		"If you cast this spell multiple times, you can have up to three of its effects active at a time, and you can dismiss such an effect as an action.",
};
SpellsList["hollowing curse"] = {
	name: "Hollowing Curse",
	classes: ["necromancer", "witch", "sorcerer", "warlock", "wizard"],
	source: ["VSoS", 344],
	level: 1,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	ritual: false,
	description:
		"crea save or 2d6+1d6/SL Necro \u0026 cursed; 1 a for 1d6+1d6/SL Necro or ends; save \u00BD \u0026 no curse; see B",
	descriptionFull:
		"Tendrils of black mist extend from your fingertips, latching onto a creature and draining its vitality. Choose a creature you can see within range to make a Dexterity saving throw. On a failed save, the target takes 2d6 necrotic damage and is cursed for up to one minute. On a successful save, the target takes half as much damage and is not cursed. While the target is cursed, you can use your action to deal 1d6 necrotic damage to it automatically. The curse ends early if you use your action to do anything else, if the target is ever outside the spell’s range, or if the target has total cover from you. A remove curse spell also ends this curse." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the initial and secondary damage each increases by 1d6 for each slot level above 1st.",
};
SpellsList["hunger of the earth"] = {
	name: "Hunger of the Earth",
	classes: ["druid", "wizard"],
	source: ["VSoS", 344],
	level: 4,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Conc, 1 h",
	save: "Str",
	ritual: false,
	description:
		"\u2264Large crea save or sinking; Str chk/crea in 5 ft to esc \u0026 ends; \u2264S/M/L sinks fully in 2+1/Size rnds \u0026 Suffo",
	descriptionFull:
		"Choose a Large or smaller creature on the ground within range. The earth opens up beneath that creature and attempts to swallow them up. The target must make a Strength saving throw or be restrained for the duration. Furthermore, if the target fails the save, it begins sinking into the ground." +
		"\n   " +
		"A restrained target, or another creature within 5 feet of it, can attempt to free the target by using an action to make a Strength check against your spell save DC, freeing the target. The target has disadvantage on this Strength check. The spell ends early if the target is freed." +
		"\n   " +
		"At the end of the target’s turn, it sinks deeper into the ground. A Small or smaller creature fully sinks into the ground after 2 rounds of sinking, a Medium creature fully sinks after 3 rounds, and a Large creature fully sinks after 4 rounds. If a target fully sinks underground, it begins to suffocate.",
};
SpellsList["ice claw prison"] = {
	name: "Ice Claw Prison",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["VSoS", 344],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A crystal claw",
	duration: "Conc, 1 min",
	save: "Str",
	ritual: false,
	descriptionShorter:
		"10 ft Large ice hand in vis. rng; AC 18/HP \u00BD my max; Immune psn/psy; 1 bns Slash/Imprison/Release; B",
	description:
		"Create a Large ice hand that can Slash, Imprison, or Release on command; see book",
	descriptionFull:
		"You choose an unoccupied 10-foot square that you can see within range. A Large clawed hand made from razor-sharp ice appears there and lasts for the spell’s duration. It acts at your command, though it can’t move from its initial location." +
		"\n   " +
		"The hand is an object that has AC 18 and hit points equal to half your hit point maximum. It has immunity to poison and psychic damage. If it drops to 0 hit points, the spell ends. The claw doesn’t fill its space. When you cast the spell, and as a bonus action on your subsequent turns, you can command the claw to perform one of the following tasks:" +
		"\n   " +
		toUni("Slash") +
		": The claw lashes out at a target within 10 feet of itself. Make a melee spell attack using your own spell attack bonus. On a hit, the target takes 3d8 slashing or cold damage (your choice)." +
		"\n   " +
		toUni("Imprison") +
		": The claw grabs a Large or smaller creature within 10 feet of itself. The target must succeed on a Strength saving throw against your spell save DC or be dragged into the claw’s space and restrained for the duration. At the end of each of its turns, the restrained target can make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand, but on a failure it takes 1d8 cold damage. While a creature is restrained by the hand, the hand can’t imprison or slash another creature. The claw can slash a creature it has restrained." +
		"\n   " +
		toUni("Release") +
		": The claw releases an imprisoned target, which is no longer restrained." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 4th level or higher, the damage of the Slash and Imprison options increases by 1d8 for each spell slot above 3rd.",
};
SpellsList["icicle javelin"] = {
	name: "Icicle Javelin",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["VSoS", 344],
	level: 1,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A small icicle",
	duration: "Instantaneous",
	save: "Str",
	ritual: false,
	description:
		"Ranged spell atk for 3d8+1d8/SL Cold dmg and pin to adjacent surface; B",
	descriptionShorter:
		"Rngd spell atk 3d8+1d8/SL Cold \u0026 pin against adj surface; SoT Str save to esc or spd 0; Lasts 1 turn",
	descriptionFull:
		"You fling a massive icicle toward a target of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 3d8 cold damage. If the target is also adjacent to a wall, or a similar large, immobile object, it may also be pinned to that surface on its next turn. At the beginning of its turn, the target can make a Strength saving throw. On a failed save, it has a speed of 0 until the start of its next turn." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
};
SpellsList["identity curse"] = {
	name: "Identity Curse",
	classes: ["witch"],
	source: ["VSoS", 345],
	level: 9,
	school: "Ench",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Until dispelled",
	save: "Wis",
	ritual: false,
	description:
		"1 crea save or forget its identity and personal memories (not statistics)",
	descriptionShorter:
		"crea save or asleep for 1hr \u0026 forgets identity \u0026 class feat; keep stats/skills/general knowledge; see B",
	descriptionFull:
		"You extend a finger to a creature’s temple, who then forgets its own name. Choose one creature you can touch to make a Wisdom saving throw. On a failed save, the target falls unconscious for 1 hour and is cursed to forget its identity. When the target awakens, it loses all its personal memories, though the target retains all of its general knowledge, proficiencies, and other statistics. The target won’t realize it has any class features or special abilities, and so doesn’t willingly make use of them. If left to its own devices, the target will quickly adopt a new name and begin to build a new identity." +
		"\n   " +
		"A remove curse spell cast using a 9th-level spell slot ends this curse. When this curse ends, the target regains all its past memories.",
};
SpellsList["impressions of the past"] = {
	name: "Impressions of the Past",
	classes: ["cleric", "wizard"],
	source: ["VSoS", 345],
	level: 7,
	school: "Div",
	time: "1 a",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "An hourglass and a glass eye worth at least 100 gp",
	duration: "Conc, 1 min",
	save: "Wis",
	ritual: false,
	description:
		"Observe (all senses) a time up to 100 years ago; share effect with 8th or higher level spell slot",
	descriptionShorter:
		"Observe w/ senses time in 100 years ago; can't move/speak/sense; \u22648th SL to share effect",
	descriptionFull:
		"You cast your senses back in time to perceive your current location as it was at some point in the past, including any events that were happening at that time. You must specify the exact time you wish to see, which can’t be more than 100 years ago. When viewing the past, it appears dreamlike and shadowy, but you are able to discern detail and hear conversation as normal, and any special senses you possess (such as darkvision) also work as normal." +
		"\n   " +
		"While perceiving the past, you can look in any direction, but you can’t move or speak, and are unable to sense your present surroundings." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 8th level or higher, you may share this spell with one other creature that you touch. An unwilling target can make a Wisdom saving throw to avoid being affected.",
};
SpellsList["indemnify"] = {
	name: "Indemnify",
	classes: ["martyr", "necromancer"],
	source: ["VSoS", 345],
	level: 1,
	school: "Necro",
	time: "1 bns",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A drop of blood",
	duration: "Conc, 1 h",
	save: "Con",
	ritual: false,
	description:
		"1 crea save or 1d8 Rad/Necro dmg whenever I lose HP while in range",
	descriptionFull:
		"You fling a drop of blood at a target you can see within range, marking them for reckoning. The target must make a Constitution saving throw. On a failed save, the target takes 1d8 radiant or necrotic damage (your choice) whenever you lose hit points for the duration. This spell ends early if the target begins its turn further than 60 feet from you.",
};
SpellsList["inevitable boulder"] = {
	name: "Inevitable Boulder",
	classes: ["druid", "wizard"],
	source: ["VSoS", 345],
	level: 7,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "An almost spherical stone",
	duration: "Conc, 1 min",
	save: "Dex",
	ritual: false,
	description:
		"Create a boulder that moves 60 ft toward target every turn; see book",
	descriptionFull:
		"At a point you choose within range, you conjure into existence a Large 8-foot diameter boulder, which rolls in pursuit of one creature that you can see of your choice. The boulder has 18 AC, 75 HP, immunity to poison and psychic damage, and resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks. If the boulder is reduced to 0 hit points, it vanishes and the spell ends." +
		"\n   " +
		"At the beginning of each of your turns, the boulder moves 60 feet in the direction of its target. If the boulder enters a creature’s space, the creature must make a Dexterity saving throw. On a failed save, it takes 6d10 bludgeoning damage and, if it is Large size or smaller, is knocked prone. On a success, the creature takes half as much damage and is not knocked prone. The boulder also crushes nonmagical objects smaller than itself in its path. If the boulder reaches its target, it rolls over it and continues on, completing its 60-foot movement. The boulder continues to pursue its target for the duration, rolling over it more than once if possible." +
		"\n   " +
		"After the spell ends, the boulder continues to pursue its target for up to 24 hours. Once the boulder strikes its target after the spell ends, it immediately vanishes.",
};
SpellsList["inexorable sarcophagus"] = {
	name: "Inexorable Sarcophagus",
	classes: ["necromancer"],
	source: ["VSoS", 346],
	level: 6,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M\u0192",
	compMaterial: "A finely made miniature sarcophagus worth at least 1,000 gp",
	duration: "Conc, 1 min",
	save: "Dex",
	ritual: false,
	description: "1 crea save or trapped inside a sarcophagus; see book",
	descriptionFull:
		"You toss a palm-sized sarcophagus at an unoccupied point you can see within range, where it grows to full size in an instant and attempts to ensnare a Medium or smaller creature within 5 feet of it with grimy gauze. The creature must succeed a Dexterity saving throw or be restrained and pulled into the open sarcophagus." +
		"\n   " +
		"The gauze restraining the creature is an object with AC 10 and 100 HP. It is vulnerable to slashing and fire damage, and immune to psychic and poison damage. If it is reduced to 0 hit points, the spell ends." +
		"\n   " +
		"A creature restrained by this spell must make another Dexterity saving throw at the end of each of its turns. If it successfully saves against this spell three times, it twists free of the gauze, ending the spell. If it fails three times, the sarcophagus slams shut and sinks deep into the earth. The creature is wrapped head to toe by the gauze and becomes incapacitated. The spell ends, but the sarcophagus remains buried in the earth. The sarcophagus has 1 minute of air, and the creature begins to suffocate after this time." +
		"\n   " +
		"If a humanoid dies within the sarcophagus, they rise 24 hours later as a mummy under your control, as per the spell create undead. You can only command one mummy animated by this spell at a time." +
		"\n   " +
		"Any time after this spell ends, you can cause the sarcophagus to ascend to the surface as an action. You can also use your action to shrink the sarcophagus down to its original size while it is unoccupied.",
};
SpellsList["instant replay"] = {
	name: "Instant Replay",
	classes: ["martyr", "bard", "paladin", "ranger"],
	source: ["VSoS", 346],
	level: 1,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V,S",
	duration: "1 min",
	ritual: false,
	description: "Next time I miss an attack, I can reroll it",
	descriptionFull:
		"The next time you miss a creature with an attack before this spell ends, you can instantly reset yourself to the moment before the attack and repeat it against the same target.",
};
SpellsList["intensify gravity"] = {
	name: "Intensify Gravity",
	classes: ["cleric", "druid", "sorcerer", "wizard"],
	source: ["VSoS", 346],
	level: 4,
	school: "Trans",
	time: "1 a",
	range: "100 ft",
	components: "V,S,M",
	compMaterial: "A lodestone and iron fillings",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"In area use double movement (incl. climb, fly, etc.); stacks with diff. terrain; see B",
	descriptionShorter:
		"Crea in area \u00BD spd (climb, fly, etc), 2\xD7 weight, \u0026 fall dmg; stack w/ diff. terr.; prone crea Str chk to stand",
	descriptionFull:
		"This spell intensifies gravity in a 50-foot-radius, 100-foot-high cylinder centered on a point within range. Each creature in this area must spend two feet of movement for every foot moved, including flying, jumping, and climbing movement. This can be combined with difficult terrain to slow movement to a quarter of normal speed. If a prone creature wishes to stand up, it must succeed on a Strength check against your spell save DC. On a failure, it can’t move at all on its turn." +
		"\n   " +
		"Objects in the area, including those being worn or carried, weigh double their usual weight, which may cause creatures to become encumbered or cause load-bearing spells like levitate to fail. Any ranged weapon attacks that pass into, out of, or through the area have disadvantage, and any falling damage dealt within the spell’s area is doubled.",
};
SpellsList["intrusive thought"] = {
	name: "Intrusive Thought",
	classes: ["witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 346],
	level: 2,
	school: "Ench",
	time: "1 rea",
	timeFull:
		"1 reaction, which you take when you see a creature within 60 feet of you taking an action",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Wis",
	ritual: false,
	description:
		"1 crea taking action, save or take different action of my choice instead; B",
	descriptionFull:
		"As a reaction when a creature you can see within range uses its action to attack or takes the Dash, Dodge, or Disengage action, you can attempt to distort its thinking. The target makes a Wisdom saving throw. A target automatically succeeds on this saving throw if it can’t be charmed. On a failed save, the creature takes an action of your choice from among those options, instead of the action it intended to take.",
};
SpellsList["invisibility purge"] = {
	name: "Invisibility Purge",
	classes: ["investigator", "witch", "bard", "sorcerer", "wizard"],
	source: ["VSoS", 346],
	level: 4,
	school: "Abjur",
	time: "1 a",
	range: "S:120-ft rad",
	components: "V,S,M\u0192",
	compMaterial: "powdered silver worth at least 100 gp",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Invis. effects in range dispelled if possible, or suppressed for 1 min. if not, except innate invis.",
	descriptionFull:
		"You purge magical invisibility effects within 120 feet of you. Any creature, object, location, or effect within 120 feet of you that is hidden by magical invisibility is revealed and the invisibility is dispelled." +
		"\n   " +
		"This spell applies to innate abilities that are magical in nature, such as an imp’s Invisibility, but it doesn’t affect creatures on other planes of existence, such as the Ethereal Plane. It also doesn’t reveal creatures that are naturally invisible. Items that grant magical invisibility (such as a ring of invisibility) have their effects suppressed for 1 minute.",
};
SpellsList["jam weapon"] = {
	name: "Jam Weapon",
	classes: ["witch", "bard", "wizard"],
	source: ["VSoS", 347],
	level: 2,
	school: "Trans",
	time: "1 rea",
	timeFull:
		"1 reaction, which you take when a creature you can see within range attacks with a firearm",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A pinch of wet gunpowder",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Jam 1+1/SL firearm, preventing it from firing; 1 a to clear jam",
	descriptionFull:
		"The firearm you target jams upon firing. The attack fails, and the firearm is jammed. A jammed firearm can’t be used to make an attack until a creature uses its action to clear the weapon malfunction. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can jam one additional firearm within range for each slot level above 2nd.",
};
SpellsList["jethro's instant reload"] = {
	name: "Jethro's Instant Reload",
	classes: ["investigator", "bard", "ranger", "wizard"],
	source: ["VSoS", 347],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A spent bullet casing",
	duration: "1 h",
	ritual: true,
	description:
		"1 wea reloads automatically; if wea takes 1 a or longer to reload, it reloads at end of turn",
	descriptionFull:
		"One ranged weapon you touch becomes enchanted to reload itself automatically. If the weapon has the Loading or Reload property, you can ignore this for the duration. When the weapon’s ammunition is depleted, new ammunition teleports from your person to your hand or into the weapon, as appropriate. If the weapon takes an action or longer to reload, it reloads itself at the end of your turn. If you aren’t carrying sufficient ammunition for the weapon to reload, the spell ends.",
};
SpellsList["lashing tendrils"] = {
	name: "Lashing Tendrils",
	classes: ["warlock"],
	source: ["VSoS", 347],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "The tip of an octopus tentacle",
	duration: "Conc, 1 min",
	save: "Dex",
	ritual: false,
	description:
		"Crea coming w/in 5 ft of me or start turn, save or 1d6+1d6/SL Bludg. dmg, up to 6d6; save halves",
	descriptionFull:
		"You sprout grotesque, whipping tendrils which automatically attack nearby creatures. When a creature comes within 5 feet of you or begins its turn there, it must make a Dexterity saving throw. A creature takes 1d6 bludgeoning damage on a failed save, or half as much on a successful one." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st, up to a maximum of 6d6.",
};
SpellsList["legendary libation"] = {
	name: "Legendary Libation",
	classes: ["bard", "cleric", "druid"],
	source: ["VSoS", 347],
	level: 0,
	school: "Conj",
	time: "1 bns",
	range: "Self",
	components: "V,M",
	compMaterial:
		"A container, such as a mug, tankard, or flask, which is filled with liquid that is purified by the spell",
	duration: "Instantaneous",
	ritual: false,
	description:
		"A drink that slakes thirst for 24 h; also, drinker gets adv. on saves vs. fear for 1 h",
	descriptionFull:
		"You speak a word of power and your container fills with a drink of your choosing, which can be imbibed as an action. The drink is delicious and satisfies the drinker’s thirst for the next 24 hours. Furthermore, the drinker has advantage on saving throws against becoming frightened for one hour after consuming this libation. If the drink is not consumed within one hour of being conjured, it loses its magic and turns into mundane, flavorless water." +
		"\n   " +
		"A creature can’t benefit from more than one legendary libation in any given 24-hour period.",
};
SpellsList["lightning surge"] = {
	name: "Lightning Surge",
	classes: ["necromancer", "warmage", "sorcerer", "warlock", "wizard"],
	source: ["VSoS", 347],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "S:5-ft rad",
	components: "V,S,M",
	compMaterial: "Two bits of copper wire",
	duration: "Instantaneous",
	save: "Dex",
	ritual: false,
	description: "Crea in 5 ft save or 1d6 Lightning dmg; +1d6 CL5/11/17",
	descriptionCantripDie:
		"Creatures within 5 ft save or `CD`d6 Lightning damage",
	descriptionFull:
		"You emit a dazzling array of short lightning bolts in all directions. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 lightning damage." +
		"\n   " +
		"This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
};
SpellsList["magic daggers"] = {
	name: "Magic Daggers",
	classes: ["warmage", "bard"],
	source: ["VSoS", 347],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Ranged spell atk w/ dagger 1d6 force dmg; CL5:2, CL11:3, CL17:4 daggers",
	descriptionCantripDie: "`CD` ranged spell atks for 1d6 force damage each",
	descriptionFull:
		"With a flourish, you conjure a throwing dagger of magical force out of thin air and flick it from your wrist at a target you can see. Make a ranged spell attack roll against a creature within range. On a hit, the target takes 1d6 magical piercing damage. The dagger vanishes after the attack." +
		"\n   " +
		"At higher levels, you conjure more daggers out of force and make additional attacks: two daggers at 5th level, three daggers at 11th level, and four daggers at 17th level. You can use the daggers to attack the same target or at different ones. Make a separate attack roll for each dagger.",
};
SpellsList["mandy's enchanted carriage"] = {
	name: "Mandy's Enchanted Carriage",
	classes: ["witch", "druid"],
	source: ["VSoS", 348],
	level: 4,
	school: "Trans",
	time: "1 min",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A vegetable",
	duration: "Special",
	ritual: false,
	description:
		"Create carriage for six people, lasts until midnight or 24 h; see book",
	descriptionFull:
		"You transform a vegetable into a Large magical carriage, complete with reins and two quasi-real horses. The carriage is luxurious and carries up to six passengers—four within and two atop it at the coach’s seat. Creatures within the carriage have full cover from external effects, but can see outside through a pair of windows composed of magical force. While sitting in the coach’s seat, a creature can control the carriage, which has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace." +
		"\n   " +
		"This spell’s duration varies depending upon when and where it was cast. If cast in a location where time passes normally, the spell lasts until the twelfth stroke of the next midnight, however long that may be. Elsewhere, the spell lasts for 24 hours. When the spell ends, the carriage’s occupants are ejected into adjacent unoccupied spaces, the carriage shrinks back into a vegetable, and the quasi-real horses fade." +
		"\n   " +
		"The carriage and horses count as a single object with 12 AC and 100 HP. The spell ends early if the carriage and horses are reduced to 0 hit points.",
};
SpellsList["mandy's feral follower"] = {
	name: "Mandy's Feral Follower",
	classes: ["witch", "druid"],
	source: ["VSoS", 348],
	level: 4,
	school: "Trans",
	time: "1 min",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A small servant's bell",
	duration: "Special",
	ritual: false,
	description:
		"Transform 1+1/SL Small/Tiny Beasts w/ \u22643 Int into commoners under my command; see B",
	descriptionFull:
		"After spending the casting time singing a song, you touch a Small or smaller beast. The target must have an Intelligence of 3 or less. The beast then transforms into a humanoid with the statistics of a commoner and an appearance of your choosing. The commoner is friendly to you and your allies, has a basic understanding of all simple unskilled tasks, and can understand the languages you speak, but doesn’t speak. The commoner is clothed in common clothes, but has no other equipment." +
		"\n   " +
		"In combat, the commoner rolls their own initiative and acts on their own turn. They behave as though they are dutifully employed by you." +
		"\n   " +
		"This spell’s duration varies depending upon when and where it was cast. If cast in a location where time passes normally, the spell lasts until the twelfth stroke of the next midnight, however long that may be. Elsewhere, the spell lasts for 24 hours." +
		"\n   " +
		"The transformation lasts for the duration, or until the target drops to 0 hit points or dies. When it reverts to its true form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its true form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 5th level or higher, you can transform one additional animal for each spell slot above 4th.",
};
SpellsList["mandy's marvelous dress"] = {
	name: "Mandy's Marvelous Dress",
	classes: ["witch", "bard"],
	source: ["VSoS", 349],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u0192",
	compMaterial: "A glass slipper worth at least 100 gp",
	duration: "Conc, special",
	save: "Wis",
	ritual: false,
	description:
		"1 crea can replace Cha chk w/ a 10; atks save or miss; lasts to midnight or 24 hr",
	descriptionFull:
		"A willing creature you touch is instantly clothed in a fabulous ball gown, perfectly tailored and complete with a set of glittering jewelry. You can choose for the dress to sit atop the creature’s clothing or armor, or for it to magically replace its outfit. The creature can’t remove the dress until the spell ends; similarly, the jewelry vanishes if it is removed from the dress. Until the spell ends, when the wearer makes a Charisma check, it can replace the number it rolls with a 10." +
		"\n   " +
		"Additionally, if the wearer of the dress is attacked by a creature that can see it, the attacker must succeed on a Wisdom saving throw or miss the attack. On a success, the attacker is immune to this effect until this spell ends." +
		"\n   " +
		"This spell’s duration varies depending upon when and where it was cast. If cast in a location where time passes normally, the spell lasts until the twelfth stroke of the next midnight, however long that may be. Elsewhere, the spell lasts for 24 hours. When the spell ends, the dress vanishes in a puff of sparkles, and the creature becomes clothed in its original outfit.",
};
SpellsList["mass skirmish"] = {
	name: "Mass Skirmish",
	classes: ["cleric", "wizard"],
	source: ["VSoS", 349],
	level: 7,
	school: "Trans",
	time: "1 a",
	range: "S:30-ft rad",
	components: "V,S,M",
	compMaterial: "A branch from a tree",
	duration: "Conc, 10 min",
	ritual: false,
	description:
		"Any number of crea get +15 ft spd, ignore diff. terrain, don't provoke opportunity atks",
	descriptionFull:
		"This spell allows you to enhance the mobility of any number of willing creatures that you can see within range. You bolster each target, enabling them to move easily through enemy formations. For the duration, each target’s speed is increased by 15 feet, is unaffected by nonmagical difficult terrain, and doesn’t provoke opportunity attacks.",
};
SpellsList["memorize"] = {
	name: "Memorize",
	classes: ["investigator", "necromancer", "bard", "cleric", "wizard"],
	source: ["VSoS", 349],
	level: 1,
	school: "Ench",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial:
		"A page of written text and a length of silver string worth 10 gp, tied in a knot, which the spell consumes",
	duration: "Instantaneous",
	ritual: true,
	description:
		"Perfectly memorize a page for 1 year; adv. on Int checks to remember it",
	descriptionFull:
		"While casting this spell, your eyes pass over the words on the page, which are committed to your memory. For the next year, you exactly remember the details of all information on this page. After that time, you have advantage on all Intelligence checks you make to recall this information.",
};
SpellsList["might of the abyss"] = {
	name: "Might of the Abyss",
	classes: ["necromancer", "cleric"],
	source: ["VSoS", 349],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "15 ft",
	components: "V,S,M",
	compMaterial: "A small, black strip of ribbon",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"3+1/SL crea (not me) wea atks get +1d4 dmg while in range; range 20 when upcast",
	descriptionFull:
		"You channel stygian power from an extraplanar source, enhancing three creatures other than yourself within range. Whenever a target makes a weapon attack, it adds 1d4 damage to their damage roll. If a target moves more than 15 feet away from you, it loses the effect until it is within range again." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the range increases by 5 feet, and you can target one additional creature for each slot level above 1st.",
};
SpellsList["minor lifesteal"] = {
	name: "Minor Lifesteal",
	classes: ["necromancer", "sorcerer", "wizard"],
	source: ["VSoS", 349],
	level: 0,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "S",
	duration: "Instantaneous",
	save: "Con",
	description:
		"1 crea save or 1d4 Necro. dmg and I gain as Temp HP; +1d4 CL5/11/17",
	descriptionCantripDie:
		"1 crea save or `CD`d4 Necro. dmg, and I gain as Temp HP; No effect vs. Undead/Constructs",
	descriptionFull:
		"You drain life energy from a hostile creature you can see within range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage. You then gain temporary hit points equal to the amount of damage dealt, which last until you finish a long rest. This spell has no effect on undead or constructs." +
		"\n   " +
		"This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
};
SpellsList["moment to think"] = {
	name: "Moment to Think",
	classes: ["warmage", "cleric", "sorcerer", "wizard"],
	source: ["VSoS", 350],
	level: 0,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Move in space and Search, Use Object, or Int chk to recall info while time stops",
	descriptionFull:
		"When you cast this spell, you briefly stop time for everyone but yourself. You can take one additional action and move around in your space while no time passes for other creatures. That action can be used only to take the Search or Use an Object action, or to make an Intelligence check to remember information about something." +
		"\n   " +
		"Furthermore, you can’t affect or damage any creature or object, other than objects you are wearing or carrying. If an object leaves your hand, it also becomes frozen in time.",
};
SpellsList["nondescript"] = {
	name: "Nondescript",
	classes: [
		"investigator",
		"necromancer",
		"witch",
		"bard",
		"sorcerer",
		"wizard",
	],
	source: ["VSoS", 350],
	level: 2,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	ritual: false,
	description:
		"Creatures who see me while I'm under this spell can't remember what I look like",
	descriptionFull:
		"This spell makes you seem ordinary and nondescript to others, though it doesn’t change your actual appearance. Creatures who see you while you are under the influence of this spell are unable to recall specific details of your appearance upon being asked if they had seen you or someone matching your description, though their memory of actions you undertook or events they experienced is unaffected.",
};
SpellsList["paradox"] = {
	name: "Paradox",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["VSoS", 350],
	level: 9,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Undo 1 a from the last rnd and its direct effects; 10d8 Psy dmg to the crea that took it",
	descriptionFull:
		"By twisting the flow of time into knots, you cause one action of your choice taken within range within the last round to be undone. Reality then reasserts itself, recoiling from the damage caused by removing an event from time. The direct effects of that action, such as damage dealt by an attack or spell, are undone, but the indirect effects, such as creatures choosing to move to different locations, are not. The creature that took the action takes 10d8 psychic damage, as it copes with its history being modified.",
};
SpellsList["perforating smite"] = {
	name: "Perforating Smite",
	classes: ["paladin"],
	source: ["VSoS", 350],
	level: 2,
	school: "Evoc",
	time: "1 bns",
	range: "Self",
	components: "V",
	duration: "Conc, 1 min",
	save: "Dex",
	ritual: false,
	description:
		"Next firearm atk is 5-ft wide line at normal range; crea in area save vs. normal dmg, save halves",
	descriptionFull:
		"The next time you make an attack with a firearm before this spell ends, the shot is charged with an incredible amount of power. Instead of making an attack roll against a single target, the shot becomes a 5-foot wide line that extends from you out to the weapon’s normal range. Each creature in that line must make a Dexterity saving throw. A creature takes the weapon’s normal damage on a failed save, or half as much damage on a successful one.",
};
SpellsList["petal storm"] = {
	name: "Petal Storm",
	classes: ["witch", "druid"],
	source: ["VSoS", 350],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A handful of flower petals",
	duration: "Conc, 1 min",
	save: "Dex",
	ritual: false,
	description:
		"Crea enter/start turn in area save or 3d4+2d4/SL Slash dmg; bns move 30 ft; see B",
	descriptionFull:
		"Choose an unoccupied 15-foot cube of air that you can see within range. An elemental force of swirling winds appears in the cube and lasts for the spell’s duration. The cloud heavily obscures its area." +
		"\n   " +
		"Any creature that enters the storm for the first time on a turn or starts its turn there must make a Strength saving throw. On a failed save, the creature takes 3d4 slashing damage. As a bonus action, you can move the storm up to 30 feet in any direction. The first time storm’s area contains leaf litter, flowers, bushes, or trees, it sucks up extra material and the damage the spell deals increases by 2d4." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.",
};
SpellsList["phantasmal beauty"] = {
	name: "Phantasmal Beauty",
	classes: ["witch", "bard", "wizard"],
	source: ["VSoS", 350],
	level: 3,
	school: "Illus",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Wis",
	ritual: false,
	description:
		"1 crea save or incapacitated, can't move, and disadv. on all Perception chks",
	descriptionFull:
		"You tap into the dreams of a creature you can see within range and create an illusory manifestation of its deepest desires, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes incapacitated and unable to move for the duration. In addition, it has disadvantage on all Wisdom (Perception) checks it makes. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
};
SpellsList["phantom grapnel"] = {
	name: "Phantom Grapnel",
	classes: ["warmage"],
	source: ["VSoS", 351],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Str",
	ritual: false,
	description:
		"Move to Huge or larger crea or empty space, or pull Large or smaller crea 10 ft. to me on failed save",
	descriptionFull:
		"You conjure a chain and hook made of magical force, which you propel at a creature or unoccupied space you can see within range. When you target a space or a creature of Huge size or larger, your grapnel pulls you to that target in a straight line. You provoke opportunity attacks for this movement as normal. When you target a creature of Large size or smaller, you pull the target up to 10 feet towards you. A creature can make a Strength saving throw to resist this movement.",
};
SpellsList["pharaoh's curse"] = {
	name: "Pharaoh's Curse",
	classes: ["necromancer", "witch"],
	source: ["VSoS", 351],
	level: 5,
	school: "Necro",
	time: "1 a",
	range: "10 ft",
	components: "V,S",
	duration: "Until dispelled",
	save: "Con",
	ritual: false,
	description:
		"1 crea save or can't regain HP, and max HP reduces by 3d6 every 24 h",
	descriptionFull:
		"Opening your palm, you release a puff of dust, the pestilence of mummy rot. Choose one creature within range to make a Constitution saving throw. On a failed save, the target is cursed with mummy rot. The cursed target can’t regain hit points, and its hit point maximum decreases by 3d6 for every 24 hours that elapse. If the curse reduces the target’s hit point maximum to 0, the target dies, and its body turns to dust." +
		"\n   " +
		"The curse lasts until removed by a spell or magical effect that cures mummy rot. A remove curse spell cast using a spell slot of 5th level or higher also ends this spell.",
};
SpellsList["pillar of salt"] = {
	name: "Pillar of Salt",
	classes: ["martyr"],
	source: ["VSoS", 351],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A drop of lantern oil and a pinch of sulfur",
	duration: "Instantaneous",
	save: "Con",
	ritual: false,
	description:
		"Point in range 10ft sphere ea crea save or 7d6+1d6/SL Necro; save halves; HP 0: turn to salt",
	descriptionFull:
		"You deliver a mote of divine wrath to a point you can see within range. Each creature you choose in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. On a failed save, a creature takes 7d6 necrotic damage, or half as much on a successful save. If this damage reduces a target which failed its saving throw to 0 hit points, it is transformed into a pillar of salt." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
};
SpellsList["polybrachia"] = {
	name: "Polybrachia",
	classes: ["martyr", "paladin", "ranger", "warlock", "wizard"],
	source: ["VSoS", 351],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A pair of armbands",
	duration: "Conc, 10 min",
	ritual: false,
	description:
		"1 crea gets 2 new arms; adv. on Ath. chks using them; bns to atk w/ wea held by them; see B",
	descriptionFull:
		"Two muscular arms consisting of brilliant arcane energy appear on a willing creature that you touch. These arms are fully functional and can be used to hold weapons and shields (allowing the target to hold 2 two-handed weapons, or 4 one-handed weapons), perform somatic components of spells, and perform other actions, though the arms themselves don’t grant the target additional actions. For the duration, the target has advantage on Strength (Athletics) checks made using the additional arms. Also, if the arms are used to carry weapons, the target can use a bonus action to make an additional melee weapon attack using the arms.",
};
SpellsList["prehensile hair"] = {
	name: "Prehensile Hair",
	classes: ["witch"],
	source: ["VSoS", 351],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A braided rope",
	duration: "1 h",
	ritual: true,
	description:
		"Grow prehensile hair; can do simple tasks within 10 ft; can deliver touch spells",
	descriptionFull:
		"You grow unduly long and tough hair (even from your eyebrows) which you can manipulate at will. You can use your hair to perform simple tasks within 10 feet of you, such as manipulating an object, opening an unlocked door or container, stowing or retrieving an item from an open container, or pouring the contents out of a vial. You can cast spells with a range of Touch using your hair, out to a range of 10 feet. Your hair returns to its normal length when this spell ends.",
};
SpellsList["protection from ballistics"] = {
	name: "Protection from Ballistics",
	classes: [
		"martyr",
		"necromancer",
		"cleric",
		"druid",
		"paladin",
		"ranger",
		"warlock",
		"wizard",
	],
	source: ["VSoS", 351],
	level: 2,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"Ranged firearm atks have disadv. vs. tgt; tgt resists firearm dmg",
	descriptionFull:
		"A shimmering shield of energy surrounds one willing creature you touch. For the duration, ranged attacks made by firearms have disadvantage against the target, and the target has resistance to any damage dealt by firearms.",
};
SpellsList["protect threshold"] = {
	name: "Protect Threshold",
	classes: ["investigator", "necromancer", "witch", "sorcerer", "wizard"],
	source: ["VSoS", 352],
	level: 2,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial:
		"An ounce of salt for each foot of the warded portal's perimeter",
	duration: "10 min",
	save: "Wis",
	ritual: true,
	description:
		"Crea passing thru door/window/portal save or 4d6+1d6/SL psychic dmg; save halves",
	descriptionFull:
		"Tracing arcane sigils along its boundary, you can ward a doorway, window, or other portal from entry. For the duration, an invisible eldritch creature stalks the warded portal. Any creature that attempts to pass through the portal must make a Wisdom saving throw or take 4d6 psychic damage, or half as much on a successful save." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};
SpellsList["psychedelics"] = {
	name: "Psychedelics",
	classes: ["witch", "bard", "druid", "ranger"],
	source: ["VSoS", 352],
	level: 1,
	school: "Illus",
	time: "1 a",
	range: "S:60-ft rad",
	components: "V,S,M",
	compMaterial: "A mushroom",
	duration: "1 rnd",
	save: "Dex",
	ritual: false,
	description:
		"Crea in range save or disadv on atks til end of its next turn; crea/obj are trippy for 1 h",
	descriptionFull:
		"For a moment, the colors around you shift in a rainbow swirl, before coming to rest far from their original hues. Each creature you choose within range must make a Dexterity saving throw. On a failed save, a creature has disadvantage on attack rolls until the end of its next turn. Additionally, the colors of all creatures and objects you choose within range change randomly and remain brightly and unnaturally colored for 1 hour.",
};
SpellsList["quickstep"] = {
	name: "Quickstep",
	classes: ["warmage"],
	source: ["VSoS", 352],
	level: 0,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V",
	duration: "1 rnd",
	ritual: false,
	description:
		"My walking speed increases by 10 ft until the start of my next turn",
	descriptionFull:
		"You call upon your inner reserves to give you a brief flash of speed. When you cast this spell, your walking speed increases by 10 feet until the start of your next turn.",
};
SpellsList["recall"] = {
	name: "Recall",
	classes: ["sorcerer", "wizard"],
	source: ["VSoS", 352],
	level: 2,
	school: "Conj",
	time: "1 bns",
	range: "Self",
	components: "V,S",
	duration: "1 rnd",
	ritual: false,
	description:
		"Rea to teleport to where I was when I cast this spell; Resolve triggering effect first",
	descriptionFull:
		"Record where you are when you cast this spell. Until the end of your next turn, you can use your reaction to teleport back to that location, or to the nearest unoccupied space. If you use this reaction in response to an attack, spell, magical effect, or any other damaging effect, resolve the triggering effect before teleporting.",
};
SpellsList["repulsor ring"] = {
	name: "Repulsor Ring",
	classes: ["cleric", "wizard"],
	source: ["VSoS", 352],
	level: 2,
	school: "Abjur",
	time: "1 a",
	range: "5 ft",
	components: "V,S,M",
	compMaterial: "A piece of chalk",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"Only crea I choose can enter; ranged atks vs. crea in area get disadv; melees push attacker 10 ft",
	descriptionFull:
		"You outline a 5-foot diameter circle on the ground, which is warded against intruders. Only creatures you choose can step within the circle. Any ranged attack roll made against a target within the circle has disadvantage. If a hostile creature makes a melee attack against a target within the circle, the attacker is pushed back 10 feet immediately after the attack.",
};
SpellsList["ruby-eye curse"] = {
	name: "Ruby-Eye Curse",
	classes: ["necromancer", "witch"],
	source: ["VSoS", 353],
	level: 3,
	school: "Necro",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	ritual: false,
	description: "1 crea save or blind beyond 5 ft",
	descriptionFull:
		"A red haze clouds the eyes of a creature that meets your gaze. Choose one creature you can see within range to make a Constitution saving throw. On a failed save, the creature is cursed for the duration. A cursed target can see normally out to 5 feet, but is blind beyond this radius." +
		"\n   " +
		"A remove curse spell ends this curse early.",
};
SpellsList["rumbling charge"] = {
	name: "Rumbling Charge",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["VSoS", 353],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A lump of granite",
	duration: "Instantaneous",
	save: "Str",
	ritual: false,
	description:
		"Move 30 ft; hit object/creas save or 2d12+1d12/2SL Bludg. dmg; save halves",
	descriptionFull:
		"You imbue yourself with the elemental power of a landslide. When you cast this spell, you immediately move 30 feet in a straight line without provoking opportunity attacks. If your path is blocked by a creature or object, you stop moving there, and that creature or object must make a Strength saving throw or take 2d12 bludgeoning damage, or half as much on a successful save." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d12 for every two slot levels above 1st.",
};
SpellsList["rumor"] = {
	name: "Rumor",
	classes: ["investigator", "witch", "bard", "wizard"],
	source: ["VSoS", 353],
	level: 1,
	school: "Ench",
	time: "1 a",
	range: "S:100-ft rad",
	components: "V,S",
	duration: "1 min",
	ritual: true,
	description:
		"10 word or less rumor heard by all crea near three or more other crea that share a language",
	descriptionFull:
		"You magically spread a rumor of 10 words or less. Any creature within range that is near three or more other creatures which speak the same language as them believes that they hear the rumor being repeated by someone nearby. Different creatures hear the rumor from different people, so a concrete origin point is impossible to discern. Generally, creatures won’t be outright hostile upon hearing even the most vicious rumors, but hearing a rumor can affect their disposition positively or negatively.",
};
SpellsList["rusting grasp"] = {
	name: "Rusting Grasp",
	classes: ["necromancer", "witch", "druid", "wizard"],
	source: ["VSoS", 353],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Melee spell atk for 6d4+2d4/SL Acid \u0026 -3 AC to mundane metal armor/shield, destroyed if 10 AC; Stacks",
	descriptionFull:
		"You conjure a potent acid at your fingertips, which can corrode metal and burn flesh. Make a melee spell attack against a creature or object within your reach. On a hit, a creature takes 6d4 acid damage and, if it is wearing nonmagical metal armor or wielding a nonmagical metal shield, you can corrode either its armor or shield. Corroded armor takes a permanent and cumulative -3 penalty to the AC it offers. Armor reduced to an AC of 10 is destroyed. A corroded shield is destroyed." +
		"\n   " +
		"If you target a nonmagical metal object with this spell that isn’t being worn or carried, you corrode and destroy parts of the object you choose that can fit within a 1-foot cube." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 2d4 for each slot level above 3rd. Additionally, you can destroy one additional cubic foot of a nonmagical object for each slot level above 3rd.",
};
SpellsList["scrutinize foe"] = {
	name: "Scrutinize Foe",
	classes: ["investigator", "necromancer", "cleric", "wizard"],
	source: ["VSoS", 353],
	level: 5,
	school: "Div",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Pick 1 crea, GM tells me 2 of: AC, curr HP, cond imms, dmg imms, dmg resists, dmg vulns, enchs/spells",
	descriptionFull:
		"You discern minute details concerning one creature you can see within range. You learn two of the following pieces of information of your choice about the target: its Armor Class, current hit points, condition immunities, damage immunities, damage resistances, damage vulnerabilities, and enchantments (which reveals any spells which are currently affecting it). The GM must share with you the requested information.",
};
SpellsList["seance"] = {
	name: "S\u00e9ance",
	classes: ["investigator", "necromancer", "witch"],
	source: ["VSoS", 353],
	level: 3,
	school: "Necro",
	time: "10 min",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A crystal ball, deck of tarot cards, or ouija board",
	duration: "1 min",
	ritual: false,
	description:
		"Need \u22653 willing crea; ask familiar/5% chance of wrong crea 3 questions; fails if it was tgt'd w/in 10 days",
	descriptionFull:
		"You and at least three willing creatures lock hands in a moment of meditation to conjure a spirit from the afterlife to answer your questions. Describe or name a creature that is familiar to you. If the creature’s soul is free and willing, it manifests as a ghostly specter. This spell fails if the spirit was the target of this spell within the last 10 days." +
		"\n   " +
		"Until the spell ends, you can ask up to three questions of the specter. The specter knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the specter is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. There is a 5% chance that this spell contacts the wrong spirit, one which will answer questions untruthfully or ambiguously.",
};
SpellsList["skirmish"] = {
	name: "Skirmish",
	classes: ["cleric", "ranger", "wizard"],
	source: ["VSoS", 354],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A branch from a tree",
	duration: "Conc, 10 min",
	save: "Wis",
	ritual: false,
	description:
		"1 crea speed is doubled, ignores diff. terrain, and doesn't provoke opportunity atks",
	descriptionFull:
		"You enhance the mobility of one willing creature you touch, enabling them to move easily through enemy formations. For the duration, the target’s speed is doubled, it is unaffected by nonmagical difficult terrain, and it doesn’t provoke opportunity attacks.",
};
SpellsList["snakestaff"] = {
	name: "Snakestaff",
	classes: ["martyr", "cleric", "druid", "wizard"],
	source: ["VSoS", 354],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A quarterstaff",
	duration: "Conc, 1 h",
	ritual: false,
	description:
		"Turn staff into a Giant Constrictor Snake under my control; staff breaks if snake dies",
	descriptionFull:
		"You cast a staff to the ground, which writhes and grows into a giant constrictor snake under your control, which acts on its own initiative count. The snake is friendly to you and your companions. The snake will obey any verbal commands that you issue to it (no action required by you). If you don’t issue any commands, it defends itself from hostile creatures, but otherwise takes no actions. If the snake is reduced to 0 hit points, it dies and reverts to a broken staff. The GM has the creature’s statistics.",
};
SpellsList["sonic pulse"] = {
	name: "Sonic Pulse",
	classes: ["warmage"],
	source: ["VSoS", 354],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	ritual: false,
	description:
		"1 crea save or 1d8 Thun dmg and deafened until my next turn; 1d10 within 10 ft; +1d8/1d10 CL5/11/17",
	descriptionCantripDie:
		"1 crea save or `CD`d8 Thun dmg and deafened until start of my next turn; `CD`d10 within 10 ft",
	descriptionFull:
		"You compress a thunderous boom into an invisible ball and project it at a creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d8 thunder damage and is deafened until the start of your next turn." +
		"\n   " +
		"If the spell’s target is within 10 feet of you, this spell’s damage becomes d10s, instead of d8s." +
		"\n   " +
		"This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};
SpellsList["spark of life"] = {
	name: "Spark of Life",
	classes: ["necromancer"],
	source: ["VSoS", 354],
	level: 0,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	ritual: false,
	description:
		"1 \u2264Huge corpse of crea makes 1 atk in 15 ft; +spell mod to hit; `CD`d4/6/8/10/12 from Tiny to Huge Blud.",
	descriptionFull:
		"With a quick jolt of necromantic energy, the dead momentarily rise to obey you, if only for a few seconds. Choose the corpse of a Huge or smaller creature that has been dead for no more than an hour. When you cast this spell, the corpse stands up and can move up to 15 feet and make a single melee slam attack against a target of your choice within its reach, using your spell attack modifier. On a hit, this attack deals bludgeoning damage based on the corpse’s size: a Tiny corpse deals 1d4, a Small corpse deals 1d6, a Medium corpse deals 1d8, a Large corpse deals 1d10, and a Huge corpse deals 1d12. Once the corpse attacks, it once again crumples into a heap. A corpse targeted by this spell doesn’t become an undead creature." +
		"\n   " +
		"This spell’s damage increases as you gain levels. At 5th level, the corpse deals two damage dice according to its size. At 11th level, it deals three damage dice, and at 17th level, it deals four damage dice.",
};
SpellsList["springheel"] = {
	name: "Springheel",
	classes: ["warmage", "druid"],
	source: ["VSoS", 354],
	level: 0,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V",
	duration: "1 rnd",
	ritual: false,
	description:
		"Jump speed increases by 10 ft., and can running high or long jump w/o running start",
	descriptionFull:
		"You flood magic into your legs, allowing you to bound high into the air from a standstill. When you cast this spell, your jump distance increases 10 feet until the start of your next turn, and you can make a running high jump or a running long jump without a running start.",
};
SpellsList["stone bones"] = {
	name: "Stone Bones",
	classes: [
		"investigator",
		"martyr",
		"necromancer",
		"druid",
		"ranger",
		"sorcerer",
		"wizard",
	],
	source: ["VSoS", 355],
	level: 2,
	school: "Trans",
	time: "1 bns",
	range: "30 ft",
	components: "V,S",
	duration: "1 rnd",
	ritual: false,
	description:
		"1 crea resists nonmagical Bludgeoning/Piercing/Slashing dmg until end of my next turn",
	descriptionFull:
		"You magically reinforce a creature you can see within range, granting it resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks until the end of your next turn.",
};
SpellsList["swift flight"] = {
	name: "Swift Flight",
	classes: ["witch", "sorcerer", "wizard"],
	source: ["VSoS", 355],
	level: 2,
	school: "Trans",
	time: "1 bns",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A wing feather from any bird",
	duration: "1 rnd",
	ritual: false,
	description: "1 crea gets fly speed of 30 ft until end of its next turn",
	descriptionFull:
		"Streaks of energy flow from the back of a creature you touch, tracing the shapes of wings. Until the end of the target’s next turn, it has a flying speed of 30 feet. It falls if it ends its turn in the air and nothing else is holding it aloft.",
};
SpellsList["tag"] = {
	name: "Tag",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["VSoS", 355],
	level: 0,
	school: "Illus",
	time: "1 a",
	range: "Touch",
	components: "S,M",
	compMaterial: "A drop of paint",
	duration: "Instantaneous",
	ritual: false,
	description:
		"Create 10-ft image or message up to 3 words; lasts 7 days; nonmagical cleaning can't remove",
	descriptionFull:
		"You press your hand against a flat plane on an object and imprint an elaborate and vibrant image that can fit within a 10-foot square onto the surface. The image can contain a message up to three words in length, and can include art, caricatures, or identifying logos in any combination of colors, decided when you cast the spell. Nonmagical cleaning supplies can’t remove the image, which fades after seven days.",
};
SpellsList["thunderous distortion"] = {
	name: "Thunderous Distortion",
	classes: ["warmage"],
	source: ["VSoS", 355],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "S:10-ft cone",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	ritual: false,
	description:
		"Crea in area save or 1d6 Thun. dmg; if cast on prev. turn, 1d8 dmg; +1d6/1d8 CL 5/11/17",
	descriptionCantripDie:
		"Crea in area save or `CD`d6 Thun. dmg; if cast on prev. turn, `CD`d8 instead",
	descriptionFull:
		"You produce a distorted wave of noise in a 10-foot cone, which can be heard up to 100 feet away. Each creature in that area must succeed a Constitution saving throw, or take 1d6 thunder damage." +
		"\n   " +
		"An echo of this noise persists until the end of your next turn. If you cast this spell again before the end of your next turn, its damage becomes d8s, instead of d6s." +
		"\n   " +
		"This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
};
SpellsList["time hop"] = {
	name: "Time Hop",
	classes: ["sorcerer", "wizard"],
	source: ["VSoS", 355],
	level: 1,
	school: "Conj",
	time: "1 bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "The second hand of a clock",
	duration: "Varies",
	ritual: false,
	description:
		"Shunted for 1/2/3 rnds; Can't take action/rea or be tgt'd, my spell effects pause; 3/SL 1 min, 5/SL 1 hr",
	descriptionFull:
		"You shunt yourself a few seconds into the future. Choose a duration: 1 round, 2 rounds, or 3 rounds. You vanish, reappearing after the duration at the start of your turn in the nearest unoccupied space to where you disappeared. While vanished, you are outside time; you can’t take actions or reactions, time doesn’t pass for you, your spell effects are suspended, and you can’t be affected by attacks or effects." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 3rd level or higher, you can choose a duration of 1 minute. If you cast this spell using a spell slot of 5th level or higher, you can choose a duration of 1 hour.",
};
SpellsList["time's arrow"] = {
	name: "Time's Arrow",
	classes: ["ranger", "wizard"],
	source: ["VSoS", 355],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial:
		"A physical missile weighing a pound or less, such as an arrow, bolt, or sling bullet",
	duration: "1 h",
	ritual: false,
	description:
		"Stop proj. midair til touched, dispelled, or spell ends after which it flies 120 ft for its usual dmg +spell mod",
	descriptionFull:
		"This spell enchants a missile so that it freezes in time and space. You may reposition the missile as part of the action to cast the spell." +
		"\n   " +
		"The missile remains frozen in place until a creature passes within 120 feet in front of it, something touches it, a strong wind blows upon it, the effect is dispelled, or the duration ends. At that time, the missile moves suddenly, as if it was just fired or thrown with a range of 120 feet. If a creature is in the line of fire, the missile makes an attack which adds your spell attack bonus to the attack roll and does the basic damage of whatever missile type was used (missiles that vary by launcher use the highest possible damage dice).",
};
SpellsList["transient bulwark"] = {
	name: "Transient Bulwark",
	classes: ["investigator", "martyr", "wizard"],
	source: ["VSoS", 356],
	level: 1,
	school: "Abjur",
	time: "1 a",
	range: "Self",
	components: "V,S,M\u2020",
	compMaterial: "A pearl worth 10 gp, which the spell consumes",
	duration: "8 h",
	ritual: true,
	description: "Next attack against me has -10 to hit",
	descriptionFull:
		"The next attack made against you within the duration has a -10 penalty to hit.",
};
SpellsList["tyra's coerced karaoke"] = {
	name: "Tyra's Coerced Karaoke",
	classes: ["bard", "wizard"],
	source: ["VSoS", 356],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "S:30-ft rad",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Wis",
	ritual: false,
	description:
		"Crea enter/starts turn in area save or sing w/ me \u0026 charmed; can Conc. with Irresistible Dance",
	descriptionFull:
		"As spectral instruments appear playing around you, you begin singing a well-known song, and others feel compelled to join in. For the duration, when a creature comes within 30 feet of you or begins its turn there, it must make a Wisdom saving throw or begin singing along with you. A singing creature matches the pitch and words of the song as closely as it can, even if it can’t speak the song’s language. Furthermore, it can’t speak normally (though it can still communicate telepathically), and it can’t perform the verbal components of spells. Creatures that can’t be charmed are immune to this spell." +
		"\n   " +
		"Unlike other spells, you can concentrate on this spell and the spell irresistible dance at the same time. Losing your concentration on either spell ends both spells.",
};
SpellsList["unseen accountant"] = {
	name: "Unseen Accountant",
	classes: ["investigator", "necromancer", "bard", "wizard"],
	source: ["VSoS", 356],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "An abacus",
	duration: "8 h",
	ritual: true,
	description: "Create invis. servant to do intellectual tasks; see book",
	descriptionFull:
		"This spell creates an invisible, shapeless force that performs intellectual tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, an Intelligence of 12, and it can’t attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The accountant can perform intellectual tasks that a human clerk could do, such as assessing prices, updating accounts, managing inventories, or computing interest. Once you give the command, the accountant performs the task to the best of its ability until it completes the task, then waits for your next command. The accountant can perform no physical labor, and is not able to lift any object heavier than a bottle of ink. If you command the accountant to perform a task that would move it more than 300 feet away from you, the spell ends.",
};
SpellsList["watery tentacles"] = {
	name: "Watery Tentacles",
	classes: ["druid", "warlock", "wizard"],
	source: ["VSoS", 356],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "An octopus tentacle",
	duration: "Conc, 1 min",
	save: "Str",
	ritual: false,
	description:
		"Gain 3+1/SL tentacles that can grapple within 30 ft and lift 100 pounds; see book",
	descriptionFull:
		"When you cast this spell, three tentacles made of water appear around your body for the duration. As part of the action used to cast the spell, and as a bonus action on subsequent turns until the spell ends, you can command one of these tentacles to grapple a Large or smaller creature that you can see within 30 feet of you. The target must make a Strength saving throw or be grappled and restrained by the tentacle. At the end of each of its turns, a restrained target can repeat the saving throw, freeing itself on a success." +
		"\n   " +
		"You can grapple as many creatures as you have tentacles. You can use an action or bonus action on your turn to release a grappled creature, or to drag it up to 20 feet in a direction you choose." +
		"\n   " +
		"You can also use the tentacles to manipulate objects as an action or a bonus action. Each tentacle can lift up to 100 pounds, and you can command multiple tentacles to work together to lift the same object as part of the same action or bonus action. The tentacles aren’t capable of detailed control—for example, they can’t open a chest or uncork a bottle. Burning objects are extinguished when a tentacle grabs them." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 5th level or higher, you gain an additional tentacle for every slot level above 4th.",
};
SpellsList["whispering wind"] = {
	name: "Whispering Wind",
	classes: ["investigator", "witch", "bard", "cleric", "druid", "wizard"],
	source: ["VSoS", 356],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "1 mile",
	components: "V,S,M",
	compMaterial: "A feather",
	duration: "1 rnd",
	ritual: false,
	description:
		"Whisper \u226425 words to up to 6 crea in range/same dir.; only they can hear/reply; must have clear path",
	descriptionFull:
		"You point your finger in a direction and whisper a message of twenty-five words or less, while specifying up to six creatures to be the targets. If a target is in range and in the approximate direction indicated, they (and only they) hear the message carried on the wind. They can reply in a whisper that only you can hear." +
		"\n   " +
		"You can cast this spell only when there is a clear path for air to move between you and the targets. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings, but is blocked by solid objects and areas of magical silence.",
};
SpellsList["wildfire"] = {
	name: "Wildfire",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["VSoS", 357],
	level: 8,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A piece of flint",
	duration: "Conc, 1 min",
	save: "Dex",
	ritual: false,
	description:
		"Create 10 5-ft cubes area; crea enter/start turn in area save or 8d8 Fire dmg; save halves; see B",
	descriptionFull:
		"You create a magical fire that fills ten 5-foot cubes on the ground, which you can arrange as you wish within range. Each cube you place must have a face adjacent to the face of another cube. On each of your turns after you cast this spell, you can use a bonus action to expand the area of the fire by up to ten additional 5-foot cubes that each have a face adjacent to the face of another cube of fire. The fire damages objects in the area and ignites flammable objects that aren’t being worn or carried." +
		"\n   " +
		"When a creature moves into the area of fire for the first time or starts its turn there, it must make a Dexterity saving throw. It takes 8d8 fire damage on a failed save, or half as much on a successful save.",
};
SpellsList["winter flower"] = {
	name: "Winter Flower",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["VSoS", 357],
	level: 6,
	school: "Evoc",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A crystal flower",
	duration: "24 h",
	save: "Dex",
	ritual: false,
	description:
		"Tiny 1 HP flower explodes as bns or at 0 HP; crea in 30 ft save or 10d8 Cold dmg; save halves",
	descriptionFull:
		"You cause a Tiny white flower to sprout at a point on the ground you can see within range. The flower has an AC of 15, 1 hit point, vulnerability to fire damage, and immunity to cold damage. During the spell’s duration, you can use a bonus action to command it to explode in a shower of ice. Alternatively, the flower will explode if it is reduced to 0 hit points. When the flower explodes, each creature within 30 feet of it must make a Dexterity saving throw. On a failed save, a creature takes 10d8 cold damage, or half as much on a successful one. The flower withers and dies if it doesn’t explode within 24 hours." +
		"\n   " +
		"If you cast this spell again while it is active, you can maintain the flower’s existence for another 24 hours. You can create a permanent flower by casting this spell on the same flower for seven days.",
};
SpellsList["zephyr's feather"] = {
	name: "Zephyr's Feather",
	classes: ["ranger", "sorcerer", "warlock", "wizard"],
	source: ["VSoS", 357],
	level: 1,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A dove's feather",
	duration: "Conc, 1 min",
	ritual: false,
	description:
		"3 feathers; on cast/as action, ranged spell atk 120 ft for 2d8+1d8/SL Slash dmg; SL3:5, SL5:7 feathers",
	descriptionFull:
		"You wave your hand and three alabaster feathers, magically sharpened to a razor’s edge, appear and orbit around you. When you cast this spell, make a ranged spell attack using one of your feathers against a creature within 120 feet of you. On a hit, the target takes 2d8 slashing damage. Until the spell ends, while you have feathers remaining, you can make an attack using a feather on each of your turns as an action." +
		AtHigherLevels +
		"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st, up to a maximum of 6d8. You gain an additional two feathers when you cast this spell using a spell slot of 3rd level or higher (5 feathers), and two more when you cast it using a spell slot of 5th level or higher (7 feathers).",
};
