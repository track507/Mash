var iFileName = "Monk_Subclasses_VSoS.js"

/*

    This script adds the subclasses from Valda's Spire of Secret to MPMB's Character Creation Sheet.
    You can use this script as is, but it is ideal to use it with the original Valda's Spire of Secret script found here https://pastebin.com/0CdaqJs5
    Please make the following changes when doing so:
    - Remove the "SourceList" found in this script and copy only the subclasses over.

    If there are any grammatical errors or if this script returns an error please DM trackatnite on Discord

    This script was originally due to a request from Luminous Newt on Discord, and I decided to script the entire Monk subclass list from VSoS

*/

SourceList["VSoS"] = {
    name : "Valda Spire of Secrets",
    abbreviation : "VSoS",
    group : "Third Party",
    abbreviationSpellsheet : "V",
    date : "2024/08/19"
};

AddSubClass("monk", "way of the flagellant", {
    regExpSearch : /^(?=.*flagellant?)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
    subname : "Way of the Flagellant",
    source : [["VSoS", 223]],
    features : {
        "subclassfeature3" : {
            name : "Ascetic Implements",
            source : [["VSoS", 223]],
            minlevel : 3,
            description : desc(["I gain proficiency with flails and whips which count as monk weapons. Additionally, I can choose to deal slashing instead of bludgeoning damage with my unarmed strikes."]),
            weaponProfs : [true, false, ["shortswords, flails, whips"]],
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if((/flails?|whips?/i).test(v.baseWeaponName) && !v.isSpell && !v.theWea.monkweapon && !v.theWea.special) {
                            v.theWea.monkweapon = true;
                            fields.Proficiency = true;
                        } 
                    },
                    "I gain proficiency with flails and whips which count as monk weapons.",
                    1
                ]
            }
        },
        "subclassesfeature3.1" : {
            name : "Penitent Lash",
            source : [["VSoS", 223]],
            minlevel : 3,
            description : desc(["On my turn, I can spend 1 ki point to deal 2d4 slashing damage and gain advantage on the first monk weapon or unarmed strike made on my turn. I can choose to take 4d4 slashing damage instead to gain advantage on all my attacks made on my turn. If I reduce or avoid the slashing damage, this ability has no effect."]),
            additional : "1 ki point"
        },
        "subclassfeature6" : {
            name : "Art of Punishment",
            source : [["VSoS", 223]],
            minlevel : 6,
            description : desc([
                "I gain the abilities Branding Palm, Electroshock Strike, and Scissorhand Technique:",
                "\u2022 Branding Palm: When I hit a creature with an unarmed strike, I can spend a bonus action and 1 ki point to brand them. The next attack that hits a branded creature within the next minute deals an extra 2d8 fire damage. This becomes 3d8 at 11th and 4d8 at 17th level.",
                "\u2022 Electroshock Strike: After I take the attack action on my turn, I can spend 1 ki point to cast shocking grasp as a bonus action. Wisdom is my spellcasting ability for this.",
                "\u2022 Scissorhand Technique: If I deal slashing damage using a monk weapon to a creature, I can spend 1 ki point to make the target bleed. Constructs, oozes, and undead aren't affected. A creature with bleeding loses 1d6 hp at the start of each of their turns for each of its bleeding wounds it has unless it uses it action to stop all of its wounds from bleeding. A bleeding target cannot regain hp and can have a number of wounds up to my Proficiency bonus.",
            ]),
            additional : "1 ki point",
            action : [["bonus action", "Branding Palm (1 ki)"], ["bonus action", "Electroshock (1 ki)"]],
            spellcastingBonus : [{
                spellcastingAbility : 5,
                name : "Electroshock",
                spells : ["shocking grasp"],
                selection : ["shocking grasp"],
                firstCol : "1 ki"
            }]
        },
        "subclassfeature11" : {
            name : "Purity Through Pain",
            source : [["VSoS", 223]],
            minlevel : 11,
            description : desc(["Whenever I take damage that exceeds my character level, I can use my reaction to regain 1d4 ki points. I can do this a number of times equal to Wisdom mod (min 1) per long rest."]),
            usages : "Wisdom modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            action : [["reaction", ""]]
        },
        "subclassfeature17" : {
            name : "Exsanguinate",
            source : [["VSoS", 223]],
            minlevel : 17,
            description : desc(["When I use Pentient Lash, I can choose to increase the damage to 6d4. If I do so, I gain all the benefits of Pentient Lash, and all unarmed strikes deal an extra 1d4 slashing damage until the end of my turn."])
        }
    }
})

AddSubClass("monk", "way of the four fists", {
    regExpSearch : /^(?=.*\b(four|4)\b)(?=.*fists?)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
    subname : "Way of the Four Fists",
    source : [["VSoS", 224]],
    features : {
        "subclassfeature3" : {
            name : "Grasp of the Monkey",
            source : [["VSoS", 224]],
            minlevel : 3,
            description : desc(["I gain a climbing speed equal to my walking speed, my jump distance is doubled, and I have advantage on ability checks and saving throws made to climb, maintain balance, and grip objects such as ledges and ropes. I can manipulate objects with my hands, feet, or tail, but cannot attack with an object held by my tail."]),
            speed : { climb : { spd : "walk", enc : "walk" } },
            savetxt : { text : ["Adv. on saves and checks made to climb, balance, and grip"] }
        },
        "subclassesfeature3.1" : {
            name : "Simian Swift",
            source : [["VSoS", 224]],
            minlevel : 3,
            description : desc(["Whenever I roll initiative and not surprised, I can spend 1 ki point to move up to half my speed or jump into the air and make an unarmed strike."]),
            additional : "1 ki point"
        },
        "subclassfeature6" : {
            name : "Nimbus",
            source : [["VSoS", 224]],
            minlevel : 6,
            description : desc(["As a bonus action, I can summon a cloud to ride on. Until the start of my next turn, I have a flying speed equal to my walking speed, and can maintain this effect by spending 1 ki point on my turn. Otherwise, I begin to fall if there is nothing to hold onto or keep my aloft."]),
            additional : "1 ki point",
            action : [["bonus action", ""]]
        },
        "subclassfeature11" : {
            name : "Uncanny Dodge",
            source : [["VSoS", 224]],
            minlevel : 11,
            description : desc(["As a reaction, I halve the damage of an attack from an attacker that I can see"]),
            action : [["reaction", ""]]
        },
        "subclassfeature17" : {
            name : "Flurry of Limbs",
            source : [["VSoS", 224]],
            minlevel : 17,
            description : desc(["Whenever I use \"Flurry of Blows\" on my turn, I can make 3 unarmed strikes rather than 2."])
        }
    }
})

AddSubClass("monk", "way of the mask", {
    regExpSearch : /^(?=.*mask?)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
    subname : "Way of the Mask",
    source : [["VSoS", 225]],
    features : {
        "subclassfeature3" : {
            name : "Crowd Favorite",
            source : [["VSoS", 225]],
            minlevel : 3,
            description : desc(["I can choose to add my Charisma mod instead of my Wisdom mod when determing ki save DC. Additionally, while wearing no armor and not wielding a shield, my AC is calculated as 10 + Strength mod + Charisma mod."]),
            abilitySaveAlt : 6,
            armorOptions : [{
                regExpSearch : /justToAddToDropDownAndEffectWildShape/,
                name : "Unarmored Defense (Cha)",
                source : [["VSoS", 225]],
                ac : "10+Str+Cha",
                affectsWildShape : true,
                selectNow : true,
                dex : -10 //do not add our dex mod
            }]
        },
        "subclassfeature3.1" : {
            name : "Heavyweight Champion",
            source : [["VSoS", 225]],
            minlevel : 3,
            description : desc([
                "I can wrestle obstacles even if they cannot be conventionally wrestled; such as an ooze or a dragon. I gain the following:",
                "\u2022 I can grapple any creature regardless of size",
                "\u2022 I can use an action to pin a creature grappled by me. I make another grapple check, and if I succeed, we're both restrained until the grapple ends",
                "\u2022 If I have the Grappler feat, I can choose whether a target grappled by me must make a Athletics or Acrobatics check to escape"
            ]),
            action : [["action", "Pin Creature"]]
        },
        "subclassfeature6" : {
            name : "Signature Move",
            source : [["VSoS", 225]],
            minlevel : 6,
            description : desc([
                "I gain a signature move (Foreign Obect, Headbutt of Justice, or Infinity Suplex) using the \"Choose Feature\" button."
            ]),
            choices : ["Foreign Object", "Headbutt of Justice", "Infinity Suplex"],
            "foreigh object" : {
                name : "Foreign Object",
                source : [["VSoS", 225]],
                description : desc(["I am proficient with improvised weapons, which count as monk weapons for me. Once on each of my turns, I can spend 1 ki point to add half of my monk level to the damage of an improvised weapon."]),
                weaponProfs : [true, false, ["shortswords, improvised"]],
                calcChanges : {
                    atkAdd : [
                        function(fields, v) {
                            if(((/improvised/i).test(v.WeaponName + v.baseWeaponName) || (/improvised weapon/i).test(v.theWea.type)) && !v.isSpell && !v.theWea.monkweapon && !v.theWea.special) {
                                v.theWea.monkweapon = true;
                                fields.Proficiency = true;
                            } 
                        },
                        "I gain proficiency with improvised weapons which count as monk weapons.",
                        1
                    ]
                },
                additional : "1 ki point"
            },
            "headbutt of justice" : {
                name : "Headbutt of Justice",
                source : [["VSoS", 225]],
                description : desc(["Once on each of my turns when I miss with an unarmed strike, I can spend 1 ki point to follow up with a headbutt. I make another unarmed strike against the target, but the damage of this attack is 1d8."]),
                additional : "1 ki point"
            },
            "infinity suplex" : {
                name : "Infinity Suplex",
                source : [["VSoS", 225]],
                description : desc(["While I am grappling another creature, I can spend 1 ki point and a bonus action to end the grapple and hurl the target over my shoulder and slam them into the ground. The creature takes 2d10 + Strength mod of bludgeoning damage and knocked prone."]),
                additional : "1 ki point"
            }
        },
        "subclassfeature11" : {
            name : "Off the Top Rope",
            source : [["VSoS",225]],
            minlevel : 11,
            description : desc(["Once per turn when I fall 5 ft or more immediately before making an unarmed strike, I can choose to either make it a stunning strike without expending any ki or knock the target prone and automatically grapple the target on a hit."])
        },
        "subclassfeature17" : {
            name : "Choked Out",
            source : [["VSoS",225]],
            minlevel : 17,
            description : desc([
                "When I pin a creature grappled by me, I can spend 2 ki points to attempt to choke the creature out. The creature must make a Con save with advantage against my ki save DC or be knocked unconscious until the start of my next turn.",
            ]),
            additional : "2 ki points"
        }
    }
})