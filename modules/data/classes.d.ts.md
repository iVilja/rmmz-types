---
title: data/classes.d.ts
nav_order: 26
parent: Modules
---

## classes.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [BattlerParams (type alias)](#battlerparams-type-alias)
  - [DataClass (interface)](#dataclass-interface)
  - [ParamID (type alias)](#paramid-type-alias)

---

# utils

## BattlerParams (type alias)

**Signature**

```ts
export declare type BattlerParams = [number, number, number, number, number, number, number, number]
```

## DataClass (interface)

**Signature**

```ts
export interface DataClass extends DataBase {
  expParams: [number, number, number, number]
  traits: Trait[]
  learnings: Learning[]
  params: [number[], number[], number[], number[], number[], number[], number[], number[]]
}
```

## ParamID (type alias)

**Signature**

```ts
export declare type ParamID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
```
