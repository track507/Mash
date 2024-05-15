var iFileName = "Way_of_Strength_Monk";
RequiredSheetVersion("13.1.13");

SourceList["MG:DoMF"] = {
    name : "Myriel Genra's: Deck of Many Fates",
    abbreviation : "MG:DoMF",
    abbreviationSpellsheet : "MG",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/14"
}

AddSubClass("monk", "way of strength", {
    regExpSearch : /strength/i,
	subname : "Way of Strength",
    source : [["MG:DoMF", 5]],
    features : {
        "subclassfeature3" : {
            name : "Strength Technique",
            source : [["MG:DoMF", 6]],
            description : desc([
                "I can use my Strength mod instead of my Dexterity mod for the purposes of determing my Unarmored Defense AC. Additionally, I can use my Strength mod instead of my Dexterity mod whenever I use my Deflect Missiles feature."
            ]),
            extraAC : [{
                mod : "Str-Dex",
				text : "I can use my strength instead of Wisdom for determining Unarmed Defense AC",
                stopeval : function (v) { return v.wearingArmor; }
            }]
        },
        "subclassfeature3.1" : {
            name : "Inner Fire",
            source : [["MG:DoMF", 6]],
            description : desc([
                "When I roll Initiative, am targeted by an attack roll, or spend a ki point, I gain 1 charge of Inner Fire. I can store a number of charges equal to my monk level, and expire if I haven't gained any new charges in a minute. I can only gain theses while in combat, and can expend these charges to certain abilities found on the notes page.",
            ]),
            toNotesPage : [{
                name : "Inner Fire Abilities",
                note : desc([
                    "\u2022 Fiery Adrenaline (Passive): I gain a +1 to AC while I have at least 1 charge",
                    "\u2022 Soul Blade (3 charges): When I hit an unarmed strike, I can use my reaction and expend 3 charges, adding 2d4 fire damage to the attack. This increases to 2d6 at 5th, 2d8 at 11th, and 2d10 at 17th",
                    "\u2022 Strength of Body (3 charges): I reduce all incoming damage by 2 and gain advantage on Strength checks and saving throws until the end of my next turn. If I am already under the effects of this, I can replenish the duration by expending 1 charge. The damage reduction increases by 2 at 5th, 3 at 11th, and 4 at 17th.",
                    "\u2022 Healing Fire (all charges): As a bonus ction, I consume all charges and regain a number of hp equal to the number of charges expended"
                ])
            }],
            action : ["bonus action", "Healing Fire"]
        },
        "subclassfeature6" : {
            name : "Manifestation of Soul",
            source : [["MG:DoMF", 6]],
            description : desc([
                "As a bonus action, I enter a state of hightened power for a minute. Whilee in this state, I gain an additional fire charge when I am targeted by an attack or spend a ki point. Additionally, my Strength increases by 2, up to a max of 22, and I shed bright light to 30 ft and dim light for an additional 30 ft."
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["bonus action", ""]
        },
        "subclassfeature11" : {
            name : "Improved Inner Fire",
            source : [["MG:DoMF", 6]],
            description : desc([
                "I gain additional abilities to spend my Inner Fire charges on found on the notes page."
            ]),
            toNotesPage : [{
                name : "Additional Inner Fire Abilities",
                note : desc([
                    "\u2022 Unbreakable Stance (Passive): If I start my turn with at least 5 charges, I cannot be affected by critical hits",
                    "\u2022 Deflect Blow (5 charges): I expend 5 charges to use my Deflect Missile feature on a melee attack, reducing the damage by an additional 5 points. If the damage is reduced to 0, I can spend a ki point to make an unarmed strike against the attacker",
                    "\u2022 Step of Fire and Wind (5 charges): When I use my Step of Wind ability, I can expend 5 charges to gain a fly speed equal to my walking speed until the end of my next turn",
                    "\u2022 Inner Strength (5 charegs): I gain advantage on all saving throws until the end of my next turn. If this ability is already active, I can refresh the duration by spending 3 charges",
                    "\u2022 Ki Recovery (all charges): As a bonus action, I consume all charges, recovering 1 ki point per every 5 charges consumed"
                ]),
                action : ["bonus action", "Ki Recovery"],
                amendTo : "Inner Fire Abilities"
            }]
        },
        "subclassfeature17" : {
            name : "Aspect of Strength",
            source : [["MG:DoMF", 6]],
            description : desc([
                "I am always under the effects of my Manifestation of Soul feature."
            ])
        }
    }
})