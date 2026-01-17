# Grim Hollow

A VS Code workspace for developing content for [MorePurpleMoreBetter's D&D 5e Character Tools](https://www.dmsguild.com/product/232835/). This project focuses on implementing the Grim Hollow campaign setting transformations and features.

## Overview

This adds Grim Hollow content to the MPMB Character Sheet.

## Downloads

### Stable Releases

Download the latest stable JavaScript files for use with MPMB Character Sheet:

- [Transformations.js](https://raw.githubusercontent.com/track507/Grim-Hollow/refs/heads/main/2014/Transformations.js) - Transformation system implementation (Aberrant Horror, Fiend)
- [GH-Complete.js](https://raw.githubusercontent.com/track507/Grim-Hollow/refs/heads/main/2014/GH-Complete.js) - Complete Grim Hollow content

### Playtest Content

- [Playtest Pack v0.1](https://raw.githubusercontent.com/track507/Grim-Hollow/refs/heads/main/2024/Playtest/Playtest_Pack_v0.1.js) - 2024 Playtest content (Wrathful Dead, College of Fools, Purification Domain)

### How to Use

1. Download the desired .js file(s) by right-clicking the link and selecting "Save Link As..."
2. Open the MPMB Character Sheet PDF
3. Go to **Add Content** > **Import Script**
4. Select the downloaded .js file
5. The content will be added to your character sheet options

## Tech Stack

- **Language**: Adobe Acrobat JavaScript (ECMAScript 5)
- **Linting**: ESLint 9.x with ES5 configuration
- **Formatting**: Prettier 3.x
- **Editor**: VS Code with custom settings

## Development Setup

For contributors who want to modify or extend the scripts:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [VS Code](https://code.visualstudio.com/)

### Installation

1. Download or fork this repository
2. Open terminal in the project directory
3. Install dependencies:

```bash
npm install
```

1. Open in VS Code:

```bash
code .
```

## Project Structure

```txt
Grim-Hollow/
├── 2014/                    # Main content files
│   ├── Transformations.js   # Transformation system implementation
│   └── GH-Complete.js       # Complete Grim Hollow content
├── 2024/                    # Playtest content
│   └── Playtest_Pack_v0.1.js
├── .vscode/                 # VS Code workspace settings
├── eslint.config.mjs        # ESLint configuration for ES5
├── .prettierrc              # Prettier formatting rules
└── .editorconfig            # Editor configuration
```

## Code Style Guidelines

This project strictly follows ECMAScript 5 conventions required by Adobe Acrobat:

### Allowed

- `var` declarations
- `function` expressions
- String concatenation
- `Array.prototype` methods

### Not Allowed

- `const` or `let`
- Arrow functions (`=>`)
- Template literals
- Classes
- Spread operator (`...`)
- `for...of` loops
- Object shorthand

### Running Linter

```bash
npx eslint .
```

### Formatting Code

```bash
npx prettier --write "**/*.js"
```

### MPMB Conventions

- Use `desc()` function for multi-line descriptions
- Follow MPMB's attribute naming conventions (see [MPMB Reference Guides](https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet))
- Keep line length under 120 characters
- Use Unicode escape sequences for special symbols (e.g., `\u25C6` for diamond bullets)

## Known Issues

### Critical Fixes Needed

**Duplicate Keys in GH-Complete.js:**

- Lines 1197, 1436, 2358, 3300: Multiple `note` keys in objects

### Non-Critical Warnings

- Unused function parameters (lines 2960, 3166, 3402, 5036)
- `==` vs `===` comparisons (lines 1266, 1273, 5037)

These warnings can be ignored if the code functions correctly with MPMB's sheet. This is just my stylistic approach of using strict comparison.

## Contributing

1. Follow the established code style (ES5 only)
2. Run linter before committing: `npx eslint .`
3. Format code with Prettier: `npx prettier --write "**/*.js"`
4. Test changes in MPMB Character Sheet before submitting
5. Update documentation for new features

## Resources

- [MPMB Syntax Guide](https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet/tree/master/additional%20content%20syntax)
- [Grim Hollow: The Campaign Guide](https://ghostfiregaming.com/grim-hollow/)
- [Adobe Acrobat JavaScript Reference](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/)

## License

This project is intended for personal use with the MPMB Character Sheet. Grim Hollow content is property of Ghostfire Gaming. Please respect all applicable copyrights and licenses.

---

**Note**: This is a community-created extension and is not officially endorsed by MorePurpleMoreBetter or Ghostfire Gaming.
