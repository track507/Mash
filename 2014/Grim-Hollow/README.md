# Grim Hollow

Implements the Grim Hollow campaign setting transformations and features for [MorePurpleMoreBetter's D&D 5e Character Tools](https://www.flapkan.com/).

## Downloads

- [Transformations.js](https://github.com/track507/Mash/raw/main/2014/Grim-Hollow/Transformations.js) - Transformation system implementation (Aberrant Horror, Fiend)
- [GH-Complete.js](https://github.com/track507/Mash/raw/main/2014/Grim-Hollow/GH-Complete.js) - Complete Grim Hollow content

The [2024 playtest pack](../../2024/Grim-Hollow/README.md) lives under the 2024 sheet.

## How to use

1. Download the script: open its link below, or right-click the link and choose "Save link as"
2. Open the MPMB character sheet in Adobe Acrobat
3. Use the **Add Extra Materials** bookmark and import the downloaded file
4. The content appears in the sheet's menus

## Development

Development tooling lives at the repository root, so follow the setup in the [root README](../../README.md#contributing).

This content targets Adobe Acrobat JavaScript (ECMAScript 5).

### Allowed

- `var` declarations
- `function` expressions
- String concatenation
- `Array.prototype` methods

### Not allowed

- `const` or `let`
- Arrow functions (`=>`)
- Template literals
- Classes
- Spread operator (`...`)
- `for...of` loops
- Object shorthand

### MPMB conventions

- Use `desc()` function for multi-line descriptions
- Follow MPMB's attribute naming conventions (see [MPMB Reference Guides](https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet))
- Use Unicode escape sequences for special symbols (e.g., `\u25C6` for diamond bullets)

## Known issues

- `GH-Complete.js` has duplicate `note` keys in some objects (no-dupe-keys)

These warnings can be ignored if the code functions correctly with MPMB's sheet.
Unused parameters may be required by MPMB's function signatures even if not used in the implementation.

## Resources

- [MPMB Syntax Guide](https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet/tree/master/additional%20content%20syntax)
- [Grim Hollow: The Campaign Guide](https://ghostfiregaming.com/grim-hollow/)
- [Adobe Acrobat JavaScript Reference](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/)

## License

This project is intended for personal use with the MPMB Character Sheet.
Grim Hollow content is property of Ghostfire Gaming.
Please respect all applicable copyrights and licenses.

**Note**: This is a community-created extension and is not officially endorsed by MorePurpleMoreBetter or Ghostfire Gaming.
