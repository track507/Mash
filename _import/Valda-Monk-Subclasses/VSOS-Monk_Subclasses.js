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
            description : "I gain proficiency with flails and whips which count as monk weapons. Additionally, I can choose to deal slashing instead of bludgeoning damage with my unarmed strikes.",
            
        },
        "subclassesfeature3.1" : {
            name : "Penitent Lash",
            source : [["VSoS", 223]],
            minlevel : 3,
            description : "On my turn, I can spend 1 ki point to deal 2d4 slashing damage and gain advantage on the first monk weapon or unarmed strike made on my turn. I can choose to take 4d4 slashing damage instead to gain advantage on all my attacks made on my turn. If I reduce or avoid the slashing damage, this ability has no effect.",
            additional : "1 ki point"
        },
        "subclassfeature6" : {
            name : "Nimbus",
            source : [["VSoS", 224]],
            minlevel : 6,
            description : "As a bonus action, I can summon a cloud to ride on. Until the start of my next turn, I have a flying speed equal to my walking speed, and can maintain this effect by spending 1 ki point on my turn. Otherwise, I begin to fall if there is nothing to hold onto or keep my aloft.",
            additional : "1 ki point",
            action : [["bonus action", ""]]
        },
        "subclassfeature11" : {
            name : "Uncanny Dodge",
            source : [["VSoS", 224]],
            minlevel : 11,
            description : "As a reaction, I halve the damage of an attack from an attacker that I can see",
            action : [["reaction", ""]]
        },
        "subclassfeature17" : {
            name : "Flurry of Limbs",
            source : [["VSoS", 224]],
            minlevel : 17,
            description : "Whenever I use \"Flurry of Blows\" on my turn, I can make 3 unarmed strikes rather than 2."
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
            description : "I gain a climbing speed equal to my walking speed, my jump distance is doubled, and I have advantage on ability checks and saving throws made to climb, maintain balance, and grip objects such as ledges and ropes. I can manipulate objects with my hands, feet, or tail, but cannot attack with an object held by my tail.",
            speed : { climb : { spd : "walk", enc : "walk" } },
            savetxt : { text : ["Adv. on saves and checks made to climb, balance, and grip"] }
        },
        "subclassesfeature3.1" : {
            name : "Simian Swift",
            source : [["VSoS", 224]],
            minlevel : 3,
            description : "Whenever I roll initiative and not surprised, I can spend 1 ki point to move up to half my speed or jump into the air and make an unarmed strike.",
            additional : "1 ki point"
        },
        "subclassfeature6" : {
            name : "Nimbus",
            source : [["VSoS", 224]],
            minlevel : 6,
            description : "As a bonus action, I can summon a cloud to ride on. Until the start of my next turn, I have a flying speed equal to my walking speed, and can maintain this effect by spending 1 ki point on my turn. Otherwise, I begin to fall if there is nothing to hold onto or keep my aloft.",
            additional : "1 ki point",
            action : [["bonus action", ""]]
        },
        "subclassfeature11" : {
            name : "Uncanny Dodge",
            source : [["VSoS", 224]],
            minlevel : 11,
            description : "As a reaction, I halve the damage of an attack from an attacker that I can see",
            action : [["reaction", ""]]
        },
        "subclassfeature17" : {
            name : "Flurry of Limbs",
            source : [["VSoS", 224]],
            minlevel : 17,
            description : "Whenever I use \"Flurry of Blows\" on my turn, I can make 3 unarmed strikes rather than 2."
        }
    }
})