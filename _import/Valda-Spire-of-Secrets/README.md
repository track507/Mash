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

*Due to recent `weaponsAdd` bug, I am adding the bomb as "Bomb (Alchemist)" in `weaponOptions` instead of using `weaponsAdd : { select : ["Bomb"] }`*

Current Fixes
  - Fixed `weaponsAdd` in "Bombs" feature
  - All bombs now use Int as the modifier to show the DC.
  - Primed Bombs now correctly adds which mod to use for damage: Str, Dex, or Int, whichever one is higher.
  - Non-primed bombs now correctly adds Str/Dex to use for damage.
  - Acid, Bramble, and Cryo bombs now updated and fixed. 

WIP: 
  - Alchemist "Bomb Formulae"
  - Removing `weaponsAdd` automation in "Bomb Formulae" and now appears in the attack drop down. This is to prevent having up to 11 attack entries automatically added to 1st page attacks. User can pick from the attack drop down instead.
