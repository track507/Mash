var iFileName = "Grim Hollow: Transformed (Playtest Pack v0.1)";
RequiredSheetVersion("13.2.3");

SourceList["GH:TPPv0.1"] = {
    name : "Grim Hollow: Transformed (Playtest Pack v0.1)",
    abbreviation : "GH:T",
    abbreviationSpellsheet : "GH:T",
    group : "Third Party",
    campaignSetting : "Grim Hollow: Transformed",
    url : "https://www.kickstarter.com/projects/ghostfiregaming/grim-hollow"
}

AddSubClass("barbarian", "wrathful dead", {
    regExpSearch : /^(?=.*wrathful)(?=.*dead).*$/i,
    subname : "Path of the Wrathful Dead",
    source : [["GH:TPPv0.1", 2]],
    features : {
        "subclassfeature3" : {
            name : "Rage of the Dead",
            source : [["GH:TPPv0.1", 2]],
            minlevel : 3,
            description : desc([
                "While I'm raging, I gain the following benefits:",
                "\u2022 Shadow Form: I ignore diff. terrain and can move through, but not stop in, spaces occupied by a crea.",
                "\u2022 Shadowy Sidestep: My spd increased by 10 ft and Opp. attacks vs me have disadv.",
                "\u2022 Spectral Sight: I can see crea/obj w/in 120 ft that have the invis. condition as if they were visible, and I can see into the Ethereal Plane.",
            ]),
            vision : [["Spectral Sight (While Raging)", 120]],
            savetxt : { text : ["Ignore diff. terr. and move through, not stop in, spaces occupied by a creature while raging"] },
        },
        "subclassfeature3.1" : {
            name : "Final Night Cartarsis",
            source : [["GH:TPPv0.1", 2]],
            minlevel : 3,
            description : levels.map(function (n) {
                if (n < 3) return "";
                return desc([
                    "I gain one of the following options when I gain this ability",
                    "\u2022 Hate: If I miss an atk vs a crea., I have adv. on the next atk vs it before my next EOT",
                    "\u2022 Jealousy: Before a crea. I've grappled makes an ability check to end the Grappled condition, I can use my rea. to give the check disadv.",
                    "\u2022 Terror: While I'm bloodied, I can use my bns. action to Dash or Disengage.",
                    n < 14 ? "I can change it whenever I finish a long rest" : "I can change it whenever I finish a short or long rest"
                ]);
            })
        },
        "subclassfeature6" : {
            name : "Dark Doom Revisited",
            source : [["GH:TPPv0.1", 2]],
            minlevel : 6,
            description : desc([
                "Once per instance of Rage, I can use a Magic Action, to choose one of the options on the page 3 notes"
            ]),
            toNotesPage : [{
                name : "Dark Doom Revisited Options",
                page3notes : true,
                note : desc([
                    "\u2022 Contamination: Each crea. of my choice w/in 10 ft makes a Con save (DC 8 + Prof. Bonus + Con. mod) or take poison dmg and become poisoned for 1 min. A crea. can use its action to end being poisoned",
                    "\u2022 Hypothermia: Each crea. of my choice w/in 10 ft makes a Con save (DC 8 + Prof. Bonus + Str. mod) or take cold dmg and have its spd halved for 1 min. A crea. can use its action to end the Speed reduction",
                    "\u2022 Immolation: Each crea. of my choice w/in 15 ft must make a Dex save (DC 8 + Prof. Bonus + Con. mod) or take fire dmg and become aflamed. While aflamed, the crea. takes fire dmg at the start of each of its turns",
                    "All damage is equal to a number of d6s equal to my Rage Damage bns"
                ])
            }]
        },
        "subclassfeature10" : {
            name : "Death Is But a Door",
            source : [["GH:TPPv0.1", 2]],
            minlevel : 10,
            description : desc([
                "I gain the following benefits at lvl 10:",
                "\u2022 Hard to Kill: I have adv. vs Death Saves. I must fail 4 saves instead of 3 to die.",
                "\u2022 Return the Spirit: As a Magic Action, I can cast Cure Wounds, Raise Dead, or Revivify w/out material comp.",
                "   I gain a lvl of exhaustion for Cure Wounds, 2 for Revivify, and 3 for Raise Dead when cast this way; Con is my spellcasting ability",
                "Once a spell is cast this way, I can't do so again until I finish a long rest, or I can expend 2 uses of Rage to restore it (requires no action)"
            ])
        },
        "subclassfeature14" : {
            name : "Powered by Pathos",
            source : [["GH:TPPv0.1", 3]],
            minlevel : 14,
            description : desc([
                "While I'm raging, I gain one of the following based on my Final Night Cartarsis option:",
                "\u2022 Hate: My crit. hits become a 19 or 20 on my first atk each turn when using wea. or unarmed strikes",
                "\u2022 Jealousy: When a crea w/in 30 ft of me starts its turn, I can use my rea. to summon spectral assailants to Grapple them",
                "    The crea. must make a Dex or Str save (DC 8 + Prof. Bonus + Con. mod) or be restrained until the end of its turn",
                "    On a success, the crea. is not Grappled, but its spd is halved until the end of its turn",
                "\u2022 Terror: When a crea. starts its turn w/in 30 ft of me, I can use my rea. to terrify that crea until its next SOT",
                "    While terrified, the crea. has its spd halved and opp. atks vs it have adv. until the its next SOT"
            ])
        }
    }
});

AddSubClass("bard", "college of fools", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*fools).*$/i,
    subname : "College of Fools",
    source : [["GH:TPPv0.1", 4]],
    features : {
        "subclassfeature3" : {
            name : "Antagonistic Antics",
            source : [["GH:TPPv0.1", 4]],
            minlevel : 3,
            description : desc([
                "I learn Vicious Mockery or another cantrip if I already know it",
                "Dissonant Whispers is always prepared for me",
                "When I take the Dash, Disengage, or Influence action on my turn, I can use a bns. action to use Vicious Mockery on the same turn"
            ]),
            spellcastingBonus : [{
                name : "Antagonistic Antics",
                'class' : ["bard"],
                level : [0, 0],
                selection : ["vicious mockery"],
            }, {
                name : "Antagonistic Antics",
                spells : ["dissonant whispers"],
                selection : ["dissonant whispers"],
                firstCol : "markedbox"
            }]
        },
        "subclassfeature3.1" : {
            name : "Cruel Jest",
            source : [["GH:TPPv0.1", 4]],
            minlevel : 3,
            description : desc([
                "As a rea. when a crea. w/in 30 ft of me that can see/hear me fails a d20 Test, I can expend a use of Bardic Inspiration",
                "The crea. takes psychic dmg equal to the number rolled + my Cha mod, and it has disadv. on its next d20 Test before its next EOT"
            ]),
        },
        "subclassfeature6" : {
            name : "Gallows Humor",
            source : [["GH:TPPv0.1", 4]],
            minlevel : 6,
            description : desc([
                "As a rea. when a visible crea. w/in 60 ft of me is reduced to 0 hp, I can expend a use of Bardic Inspiration",
                "I can choose an a crea. w/in audible range, that speaks a language, and can understand me",
                "The crea. must make a Wis save vs. my spell save DC or become proned and have it's spd reduced to 0 its next EOT",
                "On a success, I regain the use of this ability, otherwise I can't do so again until I finish a short or long rest"
            ])
        },
        "subclassfeature14" : {
            name : "Last Laugh",
            source : [["GH:TPPv0.1", 4]],
            minlevel : 14,
            description : desc([
                "As a rea. when I become bloodied or take dmg while bloodied, I regain all expended uses of Bardic Inspiration",
                "For 1 min, I resist all dmg, and when I take dmg from an atk, I can expend up to 3 uses of Bardic Inspiration",
                "That crea. must succeed on a Cha save vs. my spell save DC or take psychic dmg equal to a roll of the expended uses + my Cha mod",
            ])
        }
    }
})

AddSubClass("cleric", "purification domain", {
    regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*purification).*$/i,
    subname : "Purification Domain",
    source : [["GH:TPPv0.1", 5]],
    spellcastingExtra : ["detect poison and disease", "flame blade", "fear", "flash fever", "aura of purity", "wall of fire", "flame strike", "hold monster"],
    features : {
        "subclassfeature3" : {
            name : "Cleans with Fire",
            source : [["GH:TPPv0.1", 5]],
            minlevel : 3,
            description : desc([
                "My wea. atks and cantrips deal an extra 1d8 fire dmg"
            ]),
            usages : "Wis mod + Prof. Bonus per ",
            usagescalc : "event.value = Math.max(0, What('Wis Mod') + How('Proficiency Bonus'));",
            recovery : "short rest",
        }
    }
})

