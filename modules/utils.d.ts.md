---
title: utils.d.ts
nav_order: 140
parent: Modules
---

## utils.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Writable (type alias)](#writable-type-alias)

---

# utils

## Writable (type alias)

**Signature**

```ts
export declare type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}
```
