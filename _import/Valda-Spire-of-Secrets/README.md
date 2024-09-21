# Valda-Spire-of-Secrets

## Info
This script adds **ALL** of the content found in Valda's Spire of Secrets.

However, it is still currently in progress and in very early stages.
There are 10 new classes and over 150+ subclasses along with magic items, spells, etc. that need to be updated.
I say updated because the original script written by u/Anasurimborlnnrilatas found [here](https://pastebin.com/GwU8JnCM) is from 2 years ago for version 1.0 of the PDF.
Seaworld on Discord also made minor firearm fixes found [here](https://pastebin.com/GwU8JnCM)

The latest version of the PDF is 1.4 and was published 12/30/2022 (3 months after u/Anasurimborlnnrilatas made the script)
For the most part, most of version 1.4 is the same, but it has minor fixes and reworks that are different from the original 1.0.
Recent contributions from Seaworld and I have been adding both classes and subclasses from VSoS to MPMB's Character sheet. 
I am also going to go through the process of adding each class/subclass and ensuring that it's v13.2.0 compatible

I am going page by page and adding/updating content. I will be providing updates through the README.md 

## Important
  - Due to the "witch" being considered part of the sorcerer `regExpSearch`, I've overwritten the regEx to only include sorcerer so that the witch class can be properly added.

Everything in this script has been updated to v13.2.1 for MPMB's Sheet and 1.4 of the PDF.

### All Current Fixes and Changes
  - Updated and removed `weaponsAdd` to prevent up to 13 attacks being automatically added to the sheet. It now appears in the attack drop down
  - All bombs now use Int as the modifier to show the DC. 
    - Primed bombs can now choose between Str, Dex, or Int, whichever is higher
    - Non-primed bombs will now use Str/Dex instead of Int to determine damage bonus
  - Non-damaging bombs now use `ability : 0` and `abilitytodamage : false` to stop the sheet from adding damage
    - Added `excludeBombDamage` to prevent Int being added to damage bonus. If this is true, no calculation is done and it will use whatever is in the `damage` array.
  - Fixed Xenoalchemist "Oversized Arms" for "Alchemy Golem" not changing newly added weapons' range correctly.
    - Each choice that adds a weapon now calls on a `commoneval` and "Oversized Arms" now calls on a `commonremoveeval` to reset ranges with the exception of "Tentacles"
  - Removed `weaponsAdd` from "Underbarrel Grenade Launcher"

### Added
  - Alchemist Class and Subclasses Finished (written by seaw0rld)
  - Captain Class and Subclasses Finished (written by seaw0rld)
  - Craftsman Class and Subclasses Finished (originally written by aelartheelfrogue, updated by seaw0rld)
  - Gunslinger Class and Subclasses (written by seaw0rld)
  - Necromancer Class and Subclasses (written by seaw0rld)
  - Martyr Class and Subclasses (written by trackatnite)
  - Warden Class and Subclasses (written by nanur, edited/updated by trackatnite)
  - Witch Class and Subclasses (written by PoetGod, edited/changed by trackatnite)
  
### WIP: 
  - Investigator Class and Subclasses (seaw0rld)
  - Add all spells and update

### TODO: 
  - Add Investigator Class
  - Add the rest of the subclasses and update
  - Add all magic items and update
  - Add all equipment and update
