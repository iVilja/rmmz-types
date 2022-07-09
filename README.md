# RMMZ Types

TypeScript declarations for RPG Maker MZ (RMMZ).

[![Docs](https://github.com/iVilja/rmmz-types/actions/workflows/docs.yml/badge.svg)](http://docs.vilja.me/rmmz-types/)

## Installation

Install this package by

```bash
$ npm install rmmz@npm:rmmz-types
```

## Usage

Everything is exported at top level of the `rmmz` module.

```typescript
import { Window, $dataActors } from "rmmz"
```

Set `rmmz` as an external module in your project. And you might need to set module `rmmz` as global varible
`window` in your favorite bundler (Rollup, Esbuild, etc.).

## License

[MIT License](./LICENSE).

Note that using this package does not give you access to RPG Maker MZ, which is a copyrighted project.
