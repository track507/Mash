var iFileName = "VSoS_Subclasses_Bard.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// * Bard subclasses
AddSubClass("bard", "college of cantors", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*cantors).*$/i,
    subname : "College of Cantors",
    source : ["VSoS", 198],
    features : {
        "subclassfeature3" : {
            name : "Heavenly Voice",
            source : ["VSoS", 198],
            minlevel : 3,
            description : desc([
                "I learn thaumaturgy which counts as a bard spell, and doesn't count against me"
            ]),
            spellcastingBonus : [{
                name : "Heavenly Voice",
                spells : ["thaumaturgy"],
                selection : ["thaumaturgy"],
                times : 1
            }]
        },
        "subclassfeature3.1" : {
            name : "Healing Hymn",
            source : ["VSoS", 198],
            minlevel : 3,
            description : desc([
                "When I cast a spell of 1st lvl or higher that restores hp, I can expend a Bardic Inspiration",
                "Each crea that regains hp can add the die + half my bard lvl to the number of hp restored"
            ]),
            additional : levels.map(function(n) {
                // Offset for index based 0, add half the bard level in favor of the player. 
                return [n+1] + (n < 14 ? " (Bardic Inspiration)" : "") + " + " + Math.ceil(n/2) + " hp restored"; 
            })
        },
        "subclassfeature6" : {
            name : "Angelic Chorus",
            source : ["VSoS", 198],
            minlevel : 6,
            description : desc([
                "When I cast thaumaturgy, I can create the following additional effects:",
                "\u2022 As part of casting this spell, I can use the Help action to aid 2 allies",
                "  If I aid them with an atk vs a crea, the target of the atk can be w/in 30 ft",
                "  instead of 5 ft. The target must be visible or w/in audible distance",
                "\u2022 I ward 1 willing crea w/in 30 ft for 1 min; Only 1 crea can be warded at a time",
                "  When a crea hits an atk vs the warded crea, the target can use its rea to deal radiant",
                "  dmg equal to half my bard lvl to the atker"
            ])
        },
        "subclassfeature14" : {
            name : "Song of the Divines",
            source : ["VSoS", 198],
            minlevel : 14,
            description : desc([
                "I can use Healing Hymn without expending a use of my Bardic Inspiration"
            ])
        }
    }
});

AddSubClass("bard", "college of graffiti", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*graffiti).*$/i,
    subname : "College of Graffiti",
    source : ["VSoS", 199],
    features : {
        "subclassfeature3" : {
            name : "Bonus Proficiencies",
            source : ["VSoS", 199],
            minlevel : 3,
            description : desc([
                "I gain proficiency with painter's supplies and either Stealth or Sleight of hand"
            ]),
            toolProfs : ["Painter's Supplies"],
            choices : ["Stealth Proficiency", "Sleight of Hand Proficiency"],
            "stealth proficiency" : {
                name : "Stealth Proficiency",
                description : desc([
                    "I gain proficiency with Stealth"
                ]),
                skills : ["Stealth"]
            },
            "sleight of hand proficiency" : {
                name : "Sleight of Hand Proficiency",
                description : desc([
                    "I gain proficiency with Sleight of Hand"
                ]),
                skills : ["Sleight of Hand"]
            }
        },
        "subclassfeature3.1" : {
            name : "Street Art",
            source : ["VSoS", 199],
            minlevel : 3,
            description : desc([
                "I learn the tag cantrip, and doesn't count against me",
                "When I cast tag, I can expend a use of Bardic Inspiration to spray a mural",
                "For the next min, all allies w/in 30 ft that can see the mural gain the following:",
                "\u2022 +1 bonus to ability checks, atk rolls, and saving throws",
                "\u2022 This can stack up to a +3 bonus"
            ]),
            spellcastingBonus : [{
                name : "Street Art",
                spells : ["tag"],
                selection : ["tag"],
                times : 1
            }]
        },
        "subclassfeature6" : {
            name : "Signature Mark",
            source : ["VSoS", 199],
            minlevel : 6,
            description : desc([
                "As a bns action, I can mark a crea w/in 5 ft",
                "I make spell atk vs the crea., and on a hit, the crea. is marked",
                "I deal +1d8 to the dmg roll when I hit a marked crea w/ a melee wpn atk",
                "When an ally makes an atk vs a marked crea, I can use my rea. to grant adv.",
            ]),
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if(fields.Proficiency && !v.isSpell && !v.isDC && !v.isRangedWeapon && v.isMeleeWeapon) {
                            fields.Description += (fields.Description ? "; " : "") + "Once per turn +1d8 dmg vs marked crea."
                        }
                    }
                ]
            },
            usages : 1,
            recovery : "Turn"
        },
        "subclassfeature14" : {
            name : "Kaleidoscopic Spray",
            source : ["VSoS", 199],
            minlevel : 14,
            description : desc([
                "Each crea I choose w/in 15 ft cone must make a Dex save",
                "On a fail, the crea. is blinded until the end of its next turn",
                "Each crea in the area is marked by me regardless if it succeeds the save",
            ]),
            usages : 1,
            recovery : "short rest"
        }
    }
})

AddSubClass("bard", "jesters", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*jesters).*$/i,
    subname : "College of Jesters",
    source : ["VSoS", 199],
    features : {
        "subclassfeature3" : {
            name : "Raconteur",
            source : ["VSoS", 200],
            minlevel : 3,
            description : desc([
                "I learn the vicious mockery cantrip, and can expend a use of bardic",
                "inspiration when a crea fails the save, adding the die + Cha mod to it's dmg",
                "If a crea fails by \u22655, it has disadv. on the next save before the start of its next turn"
            ]),
            spellcastingBonus : [{
                name : "Raconteur",
                spells : ["vicious mockery"],
                selection : ["vicious mockery"],
                times : 1
            }]
        },
        "subclassfeature3.1" : {
            name : "Advanced Tumbling",
            source : ["VSoS", 200],
            minlevel : 3,
            description : desc([
                "I can move through a crea. space by performing acrobatic bounds and flips",
                "Any crea. I move through has disadv. on opp. atks vs me until the end of my next turn"
            ])
        },
        "subclassfeature6" : {
            name : "Juggling",
            source : ["VSoS", 200],
            minlevel : 6,
            description : desc([
                "I can use my bns action to juggle a number of wea. equal to 2\xd7 my Prof. Bonus",
                "When I use the atk action to throw a wea, move out of a crea. reach, or cast vicious",
                "mockery, I can make a ranged wea atk vs a visible crea w/ a juggled wea."
            ]),
            additional : levels.map(function(n) { 
                return (n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6) + " weapons";
            }),
            usages : 1,
            recovery : "Turn",
        },
        "subclassfeature14" : {
            name : "Grand Finale",
            source : ["VSoS", 200],
            minlevel : 14,
            description : desc([
                "I can take one additional action, but it cannot be on the first rnd of combat",
                "If I use this feature, I cannot take actions or bns actions on my next turn"
            ]),
            additional : "No action/bns action on next turn"
        }
    }
});

AddSubClass("bard", "mad god", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))((?=.*mad)(?=.*god)).*$/i,
    subname : "College of the Mad God",
    source : ["VSoS", 200],
    features : {
        "subclassfeature3" : {
            name : "Bonus Proficiencies",
            source : ["VSoS", 200],
            minlevel : 3,
            description : desc([
                "I gain proficiency in one skill chosen by the GM",
                "When I finish a long rest, the GM can change the selection"
            ]),
            skillstxt : "Proficiency with any one skill chosen by the GM"
        },
        "subclassfeature3.1" : {
            name : "Cacophony",
            source : ["VSoS", 200],
            minlevel : 3,
            description : desc([
                "When a crea fails an Int, Wis, or Cha save vs one of my bard spells or features",
                "while I'm holding an instrument, I can expend a use of bardic inspiration",
                "to play a cacophonous noise, choosing one of the following effects:",
                "\u2022 The crea takes psychic dmg equal to a roll of my Bardic Inspiration die",
                "\u2022 The crea is deafened and can't speak until the end of its next turn",
                "\u2022 The crea moves up to 10 ft in a direction I choose; doesn't provoke opp. atks"
            ])
        },
        "subclassfeature6" : {
            name : "Frenzied Strings",
            source : ["VSoS", 200],
            minlevel : 6,
            description : desc([
                "As an action, I can play a mind-infecting tune for a crea w/in 60 ft that can hear me",
                "They must make a Wis save or be frenzied for 1 min, repeating the save when it takes dmg",
                "While frenzied, the crea chooses its targets for its atks, spells, and abilities randomly",
                "They can only atk a visible target w/in range, and must make an opp atk when provoked"
            ]),
            usages : 1,
            recovery : "short rest"
        },
        "subclassfeature14" : {
            name : "Mad Melody",
            source : ["VSoS", 201],
            minlevel : 14,
            description : desc([
                "As an action, and as an action on subsequent turns, I play a melody that haunts my dreams",
                "Only crea I choose w/in 60 ft of my can hear the melody; even deafended crea can hear it",
                "When I use my action to play/continue the melody, all crea. that can hear it must make a",
                "Wis save vs my spell save DC or take psychic dmg and suffers an effect based on the",
                "number of consecutive turns I've been playing the melody for; after the 4th rnd or if no",
                "crea hears the melody for 1 rnd, it goes back to round 1 (see page 3 notes)"
            ]),
            action : ["action", ""],
            toNotesPage : [{
                name : "Mad Melody",
                source : ["VSoS", 201],
                note : desc([
                    "Round      Psychic Dmg      Effect",
                    "1st            4d8                    Target is deafened",
                    "2nd          7d8                    Target can't speak and has disadv. on ability checks",
                    "3rd           4d8                    Target is charmed by me until the end of its turn",
                    "4th           9d8                    None"
                ]),
                page3notes : true
            }]
        }
    }
});

AddSubClass("bard", "masks", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*masks?).*$/i,
    subname : "College of Masks",
    source : ["VSoS", 201],
    features : {
        "subclassfeature3" : {
            name : "Bonus Proficiency",
            source : ["VSoS", 201],
            minlevel : 3,
            description : desc([
                "I gain proficiency with the Performance skill"
            ]),
            skills : ["Performance"]
        },
        "subclassfeature3.1" : {
            name : "Persona Masks",
            source : ["VSoS", 201],
            minlevel : 3,
            description : levels.map(function(n) {
                var descr = desc([
                    "I gain 2 Persona Masks of my choice and an additional masks at higher levels",
                    "I can exchange a mask I know for another whenever I gain a bard level",
                    "If a mask is lost/stolen, I can remake it with 8 hrs of work and 100 gp of materials",
                    "I can put on/switch masks as a bns action, and only I can gain the masks' effects",
                ])

                if(n > 5) {
                    descr += desc([
                        "At 6th level, some of masks improve and gain additional benefits"
                    ])
                }
                return descr;
            }),
            extraname : "Persona Masks",
            extrachoices : ["Angel", "Archmage", "Devil", "Dragon", "Faceless", "Fool", "Gladiator", "High Priest", "Lord", "Spirit"],
            extraTimes : levels.map(function(n) { 
                return n < 6 ? 2 : n < 14 ? 3 : 4;
            }),
            "angel" : {
                name : "Angel",
                source : ["VSoS", 202],
                description : desc([
                    "When I hit a crea w/ a melee wea atk, I can expend a use of Bardic Inspiration",
                    "to deal additional radiant dmg equal to the result + my Cha mod"
                ])
            },
            "archmage" : {
                name : "Archmage",
                source : ["VSoS", 202],
                description : desc([
                    "I know the firebolt cantrip, as well as the following spells:",
                    "Bard Level      Spells",
                    "3rd                 gust of wind, scorching ray",
                    "5th                 lightning bolt, protection from energy",
                    "7th                 dimension door, ice storm",
                    "9th                 scrying, wall of stone",
                    "As I gain higher levels in this class, I know additional spells while wearing the mask",
                    "These spells count as bard spells, and don't count against me"
                ]),
                eval : function() {
                    CurrentSpells["bard-archmage"] = {
                        name : "Archmage",
                        ability : "bard",
                        bonus : {
                            "archmage mask" : [{
                                name : 'Archmage Mask',
                                spells : ["fire bolt", "gust of wind", "scorching ray", "lightning bolt", "protection from energy", "dimension door", "ice storm", "scrying", "wall of stone"],
                                selection : ["fire bolt", "gust of wind", "scorching ray", "lightning bolt", "protection from energy", "dimension door", "ice storm", "scrying", "wall of stone"],
                                times : 9
                            }],
                        },
                        refType : "class",
                        typeSp : "class",
                        allowUpCasting : true,
                        firstCol : ""
                    }
                    SetStringifieds('spells'); CurrentUpdates.types.push('spells');
                },
                removeeval : function() {
                    delete CurrentSpells["bard-high priest"];
                    SetStringifieds('spells'); CurrentUpdates.types.push('spells');
                },
            },
            "devil" : {
                name : "Devil",
                source : ["VSoS", 202],
                description : desc([
                    "As a rea when I take dmg from a visible crea w/in 5 ft, I can expend a use of Bardic",
                    "Inspiration to deal fire dmg equal to two rolls of my Bardic Inspiration die to the crea."
                ]),
                action : ["reaction", ""]
            },
            "dragon" : {
                name : "Dragon",
                source : ["VSoS", 202],
                description : desc([
                    "While I wear this mask, I can use my action to expend a use of Bardic Inspiration",
                    "to exhale destructive energy. Each crea in a 15 ft cone must make a Dex save against",
                    "my spell save DC. A crea takes fire dmg equal to three rolls of my Bardic Inspiration",
                    "on a failed save, or half as much on a success"
                ])
            },
            "faceless" : {
                name : "Faceless",
                source : ["VSoS", 202],
                description : desc([
                    "While I wear this mask, I can cast disguise self w/out a SS or material comp."
                ]),
                spellcastingBonus : [{
                    name : "Faceless",
                    spells : ["disguise self"],
                    selection : ["disguise self"],
                    times : 1,
                    firstCol : "atwill"
                }],
                spellChanges : {
                    "disguise self" : {
                        compMaterial : "",
                        components : "V,S",
                        changes : "While I wear the Dragon mask, I can cast disguise self without using a spell slot or material components."
                    }
                }
            },
            "fool" : {
                name : "Fool",
                source : ["VSoS", 202],
                description : desc([
                    "While I wear this mask, my walking speed increases by 10 ft",
                    "Additionally, I can take the disengage action as a bns action",
                    "At 6th level, I can take the dash action as a bns action"
                ]),
                speed : { walk : { spd : "+10", enc : "+10" } }
            },
            "gladiator" : {
                name : "Gladiator",
                source : ["VSoS", 202],
                description : desc([
                    "While I wear this mask, I have proficiency w/ martial wea. and shields",
                    "At 6th level, I can add my Cha mod to my melee wea dmg rolls"
                ]),
                armor : [false, false, false, true],
			    weapons : [false, true],
                calcChangs : {
                    atkAdd : [
                        function(fields, v) {
                            if(classes.known.bard.level >= 6 && v.isMelee) { 
                                fields.Description += (fields.Description ? "; " : "") + " +" + What("Cha Mod") + " dmg";
                            }
                        }
                    ]
                }
            },
            "high priest": {
                name: "High Priest",
                source: ["VSoS", 202],
                description: desc([
                    "I know the sacred flame cantrip, as well as the following spells:",
                    "Bard Level      Spells",
                    "3rd                 aid, lesser restoration",
                    "5th                 mass healing word, tongues",
                    "7th                 banishment, death ward",
                    "9th                 greater restoration, mass cure wounds",
                    "As I gain higher levels in this class, I know additional spells while wearing the mask",
                    "These spells count as bard spells, and don't count against me"
                ]),
                eval : function() {
                    CurrentSpells["bard-high priest"] = {
                        name : "High Priest",
                        ability : "bard",
                        bonus : {
                            "high priest mask" : [{
                                name : 'High Priest Mask',
                                spells : ["sacred flame", "aid", "lesser restoration", "mass healing word", "tongues", "banishment", "death ward", "greater restoration", "mass cure wounds"],
                                selection : ["sacred flame", "aid", "lesser restoration", "mass healing word", "tongues", "banishment", "death ward", "greater restoration", "mass cure wounds"],
                                times : 9
                            }],
                        },
                        refType : "class",
                        typeSp : "class",
                        firstCol : "",
                        allowUpCasting : true,
                    }
                    SetStringifieds('spells'); CurrentUpdates.types.push('spells');
                },
                removeeval : function() {
                    delete CurrentSpells["bard-high priest"];
                    SetStringifieds('spells'); CurrentUpdates.types.push('spells');
                },
            },
            "lord": {
                name: "Lord",
                source: ["VSoS", 202],
                description: desc([
                    "When a crea rolls one of my Bardic Inspiration dice and rolls a 1, it can reroll the die",
                    "and must use the new roll. At 6th level, a crea can reroll a 1 or 2"
                ]),
                additional : levels.map(function(n) {
                    return n < 6 ? "1" : "1 or 2";
                })
            },
            "spirit" : {
                name : "Spirit",
                source : ["VSoS", 202],
                description : desc([
                    "When I weak this mask, I become invis. if I don't speak, move, or take any actions for 1 min",
                    "I'm invis. for up to 10 mins or until I remove the mask, take dmg, make an atk, or cast a spell"
                ])
            }
        },
        "subclassfeature6" : {
            name : "Hidden Persona",
            source : ["VSoS", 201],
            minlevel : 6,
            description : desc([
                "I can use a bns action to cause a mask I'm wearing to become invisible/visible"
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature14" : {
            name : "Master of Many Faces",
            source : ["VSoS", 201],
            minlevel : 14,
            description : desc([
                "I can wear two masks at the same time, gaining the benefits of each"
            ])
        }
    }
})

AddSubClass("bard", "romance", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*romance).*$/i,
    subname : "College of Romance",
    source : ["VSoS", 203],
    features : {
        "subclassfeature3" : {
            name : "Likeable",
            source : ["VSoS", 203],
            minlevel : 3,
            description : desc([
                "I can use my bns action to distract a hostile crea I've charmed",
                "On its turn, the charmed crea has disadv. on atk rolls and can't move",
                "further away from me unless it takes the disengage action",
                "If I charm a non-hostile crea, it regards me and my allies as friendly"
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature3.1" : {
            name : "Cupid's Arrow",
            source : ["VSoS", 203],
            minlevel : 3,
            description : desc([
                "As an action, I can a use of Bardic Inspiration and choose one visible crea",
                "w/in 30 ft that can also see/hear me to make a Wis save",
                "On a fail, it's charmed by me for a number of rounds equal to the die roll",
                "This ends early if I move more than 30 ft away if the crea can no longer",
                "see/hear me, it takes dmg from me or my allies, or if I use this ability again"
            ]),
            action : ["action", ""]
        },
        "subclassfeature6" : {
            name : "Enemy of My Enemy",
            source : ["VSoS", 203],
            minlevel : 6,
            description : desc([
                "When I take the atk action, I can use my bns action to direct a crea I've charmed",
                "that can see/hear me to atk. The crea can use it's reaction to make a wea atk",
                "vs a target I choose"
            ]),
            action : ["bonus action", " (w/Attack)"]
        },
        "subclassfeature14" : {
            name : "Infatuate",
            source : ["VSoS", 203],
            minlevel : 14,
            description : desc([
                "As an action, I can touch an incapacitated humanoid",
                "The crea is charmed by me until a remove curse is casted on them, the charmed",
                "condition is removed, or if I use this feature again"
            ]),
            usages : 1,
            recovery : "short rest"
        }
    }
})
