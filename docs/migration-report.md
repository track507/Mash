# Migration report

Records how eleven repositories became Mash.

All comparisons parse scripts with acorn and compare top-level statements, so formatting, key quoting and equivalent boolean grouping do not count as differences.

## Source repositories

| Repository | Imported tip | Destination |
| --- | --- | --- |
| `Valda-Spire-of-Secrets` | `852a718`, branch `fix/mystical-companion-2024` | `2014/Valda/` |
| `Grim-Hollow` | `4a06eac`, branch `pnpm-migration` | `2014/Grim-Hollow/`, `2024/Grim-Hollow/` |
| `Ariadnes-Compendium` | `f8d4753` | `2014/Ariadne/` |
| `FToD_Draconic_Gifts` | `210a000` | `2014/WotC-Addons/` |
| `spellblade_1.2_by_wundertarp` | `2124cca` | `2014/Homebrew/` |
| `SSCDET` | `8d69047` | `2014/Homebrew/` |
| `MM5eS` | `5204e38` | `2014/Homebrew/` |
| `WotTM_TheArenaGuy` | `eedc406` | `2014/Homebrew/` |
| `Warmage-VSoS` | `c0fc0f2` | History only, superseded |
| `Valda-Monk-Subclasses` | `faca38f` | History only, superseded |
| `Ariadnes_The_Shaper_V2.0` | `9b66138` | History only, superseded |

History for a superseded repository stays under `_import/<repository>`, for example `git log -- _import/Warmage-VSoS`.

## Resolved duplicates

| Script | Chosen version | Reason |
| --- | --- | --- |
| `Warmage.js` from `Warmage-VSoS` | `2014/Valda/classes/Warmage.js` | Every statement exists in `VSoS.js` and was last changed there after the standalone's final commit |
| `VSoS-Monk_Subclasses.js` | `2014/Valda/subclasses/Monk.js` | Every statement exists in `VSoS.js` and was last changed there after the standalone's final commit |
| `The Shaper V2.js` standalone | `2014/Ariadne/The Shaper V2.js` | Every standalone statement reached the Compendium, and commit `22de1cf` then replaced `weaponsAdd` with `selectNow` in `earthbreaker` |
| `VSoS.js` against `classes/` and `common/SpellsList.js` | Split files as inputs | No real conflicts: 4 statements differ only by grouping of the same operator |
| `Ariadne's Codex of Strings.js` | Generated from 13 book files | 3 statements change, listed below |
| `The Better Spellbook V1.0.js` | Unchanged, including 30 spells also in other books | Each book stays complete, and 21 of the 29 that differ from the Codex differ only in using its own `A:BS` source |
| `Better Items V3.js` | Unchanged, including overlap with `The Library of the Underside.js` and `The All Father's Ink.js` | Each book stays complete |

## Local-only work captured

| Change | Source | Handling |
| --- | --- | --- |
| Mystical Companion support for the 2024 sheet | `DND\projects\Valda-Spire-of-Secrets`, commit `852a718` | Imported in history, now in `2014/Valda/companions.js` |
| `RequiredSheetVersion("13.2.3")`, strict equality, note formatting | `DND\projects\Grim-Hollow\2014\GH-Complete.js`, uncommitted | Applied as a commit |
| 3 extra spells (`cyclone`, `velocitation`, `soar`) and 3 changed spells | `DND\mpmb\scripts\personal-ua-homebrew\MythMaker5eSpells.js` | Applied as a commit |
| Spellblade rework: `spellcastingFactor` 1 instead of 2, different slots and spells known, `prepared: true`, an Arcane Points table instead of `extraLimitedFeatures` | `DND\mpmb\scripts\personal-ua-homebrew\spellblade.js` | Decided by the maintainer: applied as a commit, so both versions stay in history |

## Generated Codex changes

| Statement | Change from the previous Codex | Reason |
| --- | --- | --- |
| `AddSubClass("wizard", "the world")` | Text `languages` becomes `lang.`, and `skill/tools` gains a leading space | The book version was committed later |
| `SpellsList["divine judgement"]` | Source `A:BS` page 23 becomes `A:TAFI` page 31 | The Codex takes spells shared with The Better Spellbook from the other book |
| `SpellsList["barrier of gold"]` | Source `A:BS` page 23 becomes `A:TAFI` page 31 | The Codex takes spells shared with The Better Spellbook from the other book |

Four bare Codex statements became the guarded copies from the book files: `SourceList["A:CoS"]`, `SourceList["MG:DoMF"]`, `CompanionList["ariadne's companion codex"]` and `spellSchoolList["Omni"]`.

## Shared Ariadne content

Separately published books share 58 statements across their files: 10 are identical and 48 differ.
They stay in each book, so fixing a shared entry means editing each file that contains it.

## Fixes made to clear validator errors

| Rule | Site | Fix |
| --- | --- | --- |
| `no-undef` | `conMod = 0;` in the Mechanaut's `calcChanges.hp`, `classes/Craftsman.js` | Deleted, because the sheet reads `HDobj.conMod` and this assignment has no effect |
| `no-undef` | `bardIn = [...]` in the College of Cantors `additional`, `subclasses/Bard.js` | Deleted, because the return value never reads it |
| `no-sparse-arrays` | `spellcastingTable: [,` for the Occultist, `classes/Investigator.js` | Written as `[undefined,`, keeping levels at the same indexes |

### For the maintainer to judge

- The `conMod` line may have intended `HDobj.conMod = 0`, which would change the Mechanaut's hit points, so that was not applied
- `CompanionList["witch's familiar"]` calls `newObj(CompanionList.familiar.notes)` with no guard, and the familiar on the 2024 sheet has no top-level `notes`, so `companions.js` and `VSoS.js` stop with an error on that sheet, as the imported `VSoS.js` did
- The Mystical Companion in the same file already has the guard `if (!CompanionList.familiar.notes) return undefined;`, which the Witch's Familiar could copy once its 2024 behavior is decided

## New iFileName values

Existing `iFileName` values did not change.
The split Valda files had none, so each part now has its own, with `RequiredSheetVersion("13.2.3")`:

- `VSoS_Races.js`, `VSoS_Feats.js`, `VSoS_Spells.js`, `VSoS_MagicItems.js`, `VSoS_Weapons.js`, `VSoS_Creatures.js`, `VSoS_Companions.js`
- `VSoS_Alchemist.js`, `VSoS_Captain.js`, `VSoS_Craftsman.js`, `VSoS_Gunslinger.js`, `VSoS_Investigator.js`, `VSoS_Martyr.js`, `VSoS_Necromancer.js`, `VSoS_Warden.js`, `VSoS_Warmage.js`, `VSoS_Witch.js`
- `VSoS_Subclasses_Barbarian.js`, `VSoS_Subclasses_Bard.js`, `VSoS_Subclasses_Cleric.js`, `VSoS_Subclasses_Druid.js`, `VSoS_Subclasses_Monk.js`, `VSoS_Subclasses_Paladin.js`

## Known follow-up work

- Roughly 960 validator warnings across non-generated scripts, starting with duplicate keys and unreachable code
- Scripts declare sheet versions from 13.1.9 to 13.2.3 while the upstream 2014 sheet is on 14.x
- `RequiredSheetVersion` sets a minimum unless given a maximum, so `Playtest_Pack_v0.1.js` declaring `13.2.3` still loads on v24, but its declared version does not reflect its 2024 target
- The 2024 port, where the validator reports 135 undefined names under 2024 rules, 130 of them `AtHigherLevels`
- A license for the repository
- Four Captain subclasses, Lion, Ram, Raven and Turtle (`VSoS` pages 51 to 53), exist only in `_archive/mpmb-to-be-updated/Valda/Classes/Valda's Captain Class.js` and never entered a repository
- Valda equipment, an open item in the source README: `third-party-settings/Valda's Races, Equipment, Magic Items, and Spells.js`, written for sheet 13.1.0, holds about 200 weapon, ammunition, armor and magic item entries not in `VSoS.js`
- `The Better Spellbook V1.0.js` uses the `Omni` spell school in 6 places without defining it, so it relies on another script defining `spellSchoolList["Omni"]`
- `The Better Spellbook V1.0.js` still has `regExpSearch` on spells such as `barrierofgold`, where commit `96f0b0a` removed it from the Codex
- Seven scripts remain only in `DND\mpmb\scripts\personal-ua-homebrew`: `bloodythornv0.1.js`, `Hornbow.js`, `huzzys_death_knight.js`, `huzzys_soul_archerr.js`, `kadens_magic_items.js`, `Thoughts_and_Prayers_Knuckles.js`, `UA dump.js`
