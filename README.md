# RMMZ Types

TypeScript declarations for RPG Maker MZ (RMMZ).

[![Docs](https://github.com/iVilja/rmmz-types/actions/workflows/docs.yml/badge.svg)](http://docs.vilja.me/rmmz-types/)

## Installation

Install this package by

```bash
$ npm install -D rmmz@npm:rmmz-types
# or just
$ npm install -D rmmz-types
```

## Usage

Everything is exported at top level of the installed `rmmz` (or `rmmz-types`) module.

```typescript
import { Window, $dataActors } from "rmmz"
import { DataCommand, Game_Interpreter } from "rmmz-types"
```

Set `rmmz` as an external module in your project. And you might need to set module `rmmz` as global varible
`window` in your favorite bundler (Rollup, Esbuild, etc.).

## License

[MIT License](./LICENSE).

Note that using this package does not give you access to RPG Maker MZ, which is a copyrighted project.
