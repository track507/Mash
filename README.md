# Mash

Scripts that add third-party and homebrew content to [MorePurpleMoreBetter's D&D 5e character sheet](https://www.flapkan.com/).

Scripts are organized by the edition of the sheet they target, then by book or creator.

## Importing a script

1. Download the script: open its link below, or right-click the link and choose "Save link as"
2. Open the MPMB character sheet in Adobe Acrobat
3. Use the **Add Extra Materials** bookmark and import the downloaded file
4. The content appears in the sheet's menus

Each book's README lists what to import and any scripts that must not be combined.

## 2014 sheet

| Book or creator | Contents | Scripts |
| --- | --- | --- |
| [Ariadne](2014/Ariadne/README.md) | Ariadne's Codex of Strings: whole-book Codex, 16 separate books | [Codex](https://github.com/track507/Mash/raw/main/2014/Ariadne/Ariadne%27s%20Codex%20of%20Strings.js), others in the README |
| [Grim Hollow](2014/Grim-Hollow/README.md) | Grim Hollow content and transformations | [GH-Complete.js](https://github.com/track507/Mash/raw/main/2014/Grim-Hollow/GH-Complete.js), [Transformations.js](https://github.com/track507/Mash/raw/main/2014/Grim-Hollow/Transformations.js) |
| [Homebrew](2014/Homebrew/README.md) | Single scripts from various creators | [spellblade.js](https://github.com/track507/Mash/raw/main/2014/Homebrew/spellblade.js), [MythMaker5eSpells.js](https://github.com/track507/Mash/raw/main/2014/Homebrew/MythMaker5eSpells.js), [SSC_DET.js](https://github.com/track507/Mash/raw/main/2014/Homebrew/SSC_DET.js), [Way_Of_Transcendence_Monk.js](https://github.com/track507/Mash/raw/main/2014/Homebrew/Way_Of_Transcendence_Monk.js) |
| [Valda's Spire of Secrets](2014/Valda/README.md) | Whole book, or a class with the files it needs | [VSoS.js](https://github.com/track507/Mash/raw/main/2014/Valda/VSoS.js), others in the README |
| [WotC add-ons](2014/WotC-Addons/README.md) | Additions to official books | [FToD_Draconic_Gifts.js](https://github.com/track507/Mash/raw/main/2014/WotC-Addons/FToD_Draconic_Gifts.js) |

## 2024 sheet

| Book or creator | Contents | Scripts |
| --- | --- | --- |
| [Grim Hollow](2024/Grim-Hollow/README.md) | Grim Hollow: Transformed playtest | [Playtest_Pack_v0.1.js](https://github.com/track507/Mash/raw/main/2024/Grim-Hollow/Playtest_Pack_v0.1.js) |

## Contributing

Prerequisites are Node 26.13.0 or newer and pnpm 12.6.0 or newer.

```bash
pnpm install
pnpm run bundle
pnpm run validate
```

- `pnpm install` also installs the git hooks
- `pnpm run bundle` rebuilds generated whole-book files such as `2014/Valda/VSoS.js` from the inputs in each `bundle.json`
- `pnpm run validate` checks every script against the ES5 and Acrobat rules for its edition
- `pnpm test`, `pnpm run lint` and `pnpm run format` run the tool tests, linters and Prettier

Files named as an `output` in a `bundle.json` are generated, so edit their inputs instead.
The pre-commit hook rebuilds them and adds them to the commit.

[docs/migration-report.md](docs/migration-report.md) records how the source repositories were combined.
