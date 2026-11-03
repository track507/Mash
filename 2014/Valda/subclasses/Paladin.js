var iFileName = "VSoS_Subclasses_Paladin.js";
RequiredSheetVersion("13.2.3");

if (!SourceList["VSoS"]) {
    SourceList["VSoS"] = {
        name : "Valda's Spire of Secrets",
        abbreviation : "VSoS",
        abbreviationSpellsheet : "V",
        date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
    };
}

// * Paladin Subclasses
AddSubClass("paladin", "oath of storms", {
    regExpSearch : /^(((?=.*(storms(s)?))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*dark)(?=.*knight))|(?=.*avenger)).*$/i,
    subname : "Oath of Storms",
    source : ["VSoS", 232],
    features : {
        "subclassfeature3" : {
            name : "Channel Divinity: Thunderous Revenge",
            source : ["VSoS", 232],
            minlevel : 3,
            description : desc([
                "Immediately after a visible crea w/in 30 ft deals dmg to me with an atk",
                "I can use my rea and force the atker to make a Wis save",
                "The atker takes dmg equal to the dmg dealt to me on a failed save, or \u00BD on success",
            ]),
            action : ["reaction", ""],
            spellcastingExtra : ["fog cloud", "thunderwave", "gust of wind", "hold person", "call lightning", "wind wall", "control water", "ice storm", "commune with nature", "hold monster"]
        },
        "subclassfeature3.1" : {
            name : "Channel Divinity: Walk on Waves",
            source : ["VSoS", 232],
            minlevel : 3,
            descroption : desc([
                "As a bonus action, for the next hour I gain the benefits of water walk",
                "Additionally, my spd is 2\xd7 when walking on water"
            ]),
            action : ["bonus action", ""],
            spellcastingBonus : [{
                name : "Channel Divinity",
                spells : ["water walk"],
                selection : ["water walk"],
                times : levels.map(function(n) {
                    return n < 3 ? 0 : 1;
                }),
            }],
            spellChanges : {
                "water walk" : {
                    description : "You can move across any liquid for the duration; rise to surface if underwater; spd is 2\xd7 while on water",
                    changes : "I gain the benefits of water walk, and my speed is doubled while on water"
                }
            }
        },
        "subclassfeature7" : {
            name : "Vortex Aura",
            source : ["VSoS", 232],
            minlevel : 7,
            additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
            description : desc([
                "I can use my bns action to summon a strong wind, it lasts until I dismiss it (free action)",
                "While active, anything w/in my aura is difficult terrain for crea(s) I choose",
                "The wind puts on unprotected flames such as candles, and disperses gases"
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature15" : {
            name : "Storm Soul",
            source : ["VSoS", 233],
            minlevel : 15,
            description : desc([
                "I gain resistance to lightning dmg",
                "Whenever a visible crea w/in 5 ft hits me w/ a melee atk, it takes",
                "lightning dmg equal to my Cha mod."
            ]),
            dmgres : ["Lightning"]
        },
        "subclassfeature20" : {
            name : "Thunder God",
            source : ["VSoS", 233],
            minlevel : 20,
            description : desc([
                "As an action, I gain the following for the next minute:",
                "\u2022 Immunity to lightning and thunder dmg",
                "\u2022 Fly speed of 60 ft",
                "\u2022 Cast call lightning as a bonus action at 5th level w/o a SS or comp.",
                "  I can use my bns action on subsequent turns to call down lightning using the spell"
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["action", ""],
            eval : function() {
                CurrentSpells["thunder god"] = {
                    name : "Thunder God",
                    ability : "paladin",
                    list : { spells : [], prepared : true  },
			        known : { cantrips : 0, spells : 'list' },
                    bonus : {
                        bonus1 : {
                            name : "Thunder God",
                            spells : ['call lightning'],
                            selection : ['call lightning'],
                        }
                    },
                    typeList : 2,
                    refType : "class",
                    allowUpCasting : false,
                    firstCol : "markedbox"
                };
                SetStringifieds('spells'); CurrentUpdates.types.push('spells');
            },
            removeeval : function () {
                delete CurrentSpells['thunder god'];
                SetStringifieds('spells'); CurrentUpdates.types.push('spells');
            },
            calcChanges : {
                spellAdd : [
                    function(spellKey, spellObj, spName) {
                        if(spellKey === "call lightning" && spName === "thunder god") {
                            spellObj.description = "60-ft rad 10-ft high cloud; 1 bns all in 5-ft rad under cloud 5d10 Lightning dmg; save half";
                            spellObj.descriptionShorter = "60-ft rad 10-ft high cloud; 1 bns all in 5-ft rad under it 5d10 Lightn. dmg; save half";
                            spellObj.time = "1 bns"
                        }
                    }
                ]
            }
        }
    }
});
