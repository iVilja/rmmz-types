---
title: data/tilesets.d.ts
nav_order: 42
parent: Modules
---

## tilesets.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataTileset (interface)](#datatileset-interface)
  - [TilesetMode (type alias)](#tilesetmode-type-alias)

---

# utils

## DataTileset (interface)

**Signature**

```ts
export interface DataTileset extends DataBase {
  mode: TilesetMode
  tilesetNames: [string, string, string, string, string, string, string, string, string]
  flags: number[]
}
```

## TilesetMode (type alias)

**Signature**

```ts
export declare type TilesetMode = 0 | 1
```
