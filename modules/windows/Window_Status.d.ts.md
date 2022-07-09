---
title: windows/Window_Status.d.ts
nav_order: 189
parent: Modules
---

## Window_Status.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_Status (class)](#window_status-class)
    - [setActor (method)](#setactor-method)
    - [refresh (method)](#refresh-method)
    - [drawBlock1 (method)](#drawblock1-method)
    - [block1Y (method)](#block1y-method)
    - [drawBlock2 (method)](#drawblock2-method)
    - [block2Y (method)](#block2y-method)
    - [drawBasicInfo (method)](#drawbasicinfo-method)
    - [drawExpInfo (method)](#drawexpinfo-method)
    - [expTotalValue (method)](#exptotalvalue-method)
    - [expNextValue (method)](#expnextvalue-method)
    - [\_actor (property)](#_actor-property)

---

# utils

## Window_Status (class)

Window_Status

The window for displaying full status on the status screen.

**Signature**

```ts
export declare class Window_Status {
  constructor(rect: Rectangle)
}
```

### setActor (method)

**Signature**

```ts
setActor(actor: Game_Actor): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### drawBlock1 (method)

**Signature**

```ts
drawBlock1(): void
```

### block1Y (method)

**Signature**

```ts
block1Y(): number
```

### drawBlock2 (method)

**Signature**

```ts
drawBlock2(): void
```

### block2Y (method)

**Signature**

```ts
block2Y(): number
```

### drawBasicInfo (method)

**Signature**

```ts
drawBasicInfo(x: number, y: number): void
```

### drawExpInfo (method)

**Signature**

```ts
drawExpInfo(x: number, y: number): void
```

### expTotalValue (method)

**Signature**

```ts
expTotalValue(): number | "-------"
```

### expNextValue (method)

**Signature**

```ts
expNextValue(): number | "-------"
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null
```
