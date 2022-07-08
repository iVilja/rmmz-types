---
title: windows/Window_BattleStatus.d.ts
nav_order: 149
parent: Modules
---

## Window_BattleStatus.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_BattleStatus (class)](#window_battlestatus-class)
    - [extraHeight (method)](#extraheight-method)
    - [maxCols (method)](#maxcols-method)
    - [itemHeight (method)](#itemheight-method)
    - [maxItems (method)](#maxitems-method)
    - [rowSpacing (method)](#rowspacing-method)
    - [updatePadding (method)](#updatepadding-method)
    - [actor (method)](#actor-method)
    - [selectActor (method)](#selectactor-method)
    - [update (method)](#update-method)
    - [preparePartyRefresh (method)](#preparepartyrefresh-method)
    - [performPartyRefresh (method)](#performpartyrefresh-method)
    - [drawItem (method)](#drawitem-method)
    - [drawItemImage (method)](#drawitemimage-method)
    - [drawItemStatus (method)](#drawitemstatus-method)
    - [faceRect (method)](#facerect-method)
    - [nameX (method)](#namex-method)
    - [nameY (method)](#namey-method)
    - [stateIconX (method)](#stateiconx-method)
    - [stateIconY (method)](#stateicony-method)
    - [basicGaugesX (method)](#basicgaugesx-method)
    - [basicGaugesY (method)](#basicgaugesy-method)
    - [\_bitmapsReady (property)](#_bitmapsready-property)

---

# utils

## Window_BattleStatus (class)

Window_BattleStatus

The window for displaying the status of party members on the battle screen.

**Signature**

```ts
export declare class Window_BattleStatus {
  constructor(rect: Rectangle)
}
```

### extraHeight (method)

**Signature**

```ts
extraHeight(): number;
```

### maxCols (method)

**Signature**

```ts
maxCols(): number;
```

### itemHeight (method)

**Signature**

```ts
itemHeight(): number;
```

### maxItems (method)

**Signature**

```ts
maxItems(): number;
```

### rowSpacing (method)

**Signature**

```ts
rowSpacing(): number;
```

### updatePadding (method)

**Signature**

```ts
updatePadding(): void;
```

### actor (method)

**Signature**

```ts
actor(index: number): Game_Actor;
```

### selectActor (method)

**Signature**

```ts
selectActor(actor: Game_Actor | null): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### preparePartyRefresh (method)

**Signature**

```ts
preparePartyRefresh(): void;
```

### performPartyRefresh (method)

**Signature**

```ts
performPartyRefresh(): void;
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void;
```

### drawItemImage (method)

**Signature**

```ts
drawItemImage(index: number): void;
```

### drawItemStatus (method)

**Signature**

```ts
drawItemStatus(index: number): void;
```

### faceRect (method)

**Signature**

```ts
faceRect(index: number): Rectangle;
```

### nameX (method)

**Signature**

```ts
nameX(rect: Rectangle): number;
```

### nameY (method)

**Signature**

```ts
nameY(rect: Rectangle): number;
```

### stateIconX (method)

**Signature**

```ts
stateIconX(rect: Rectangle): number;
```

### stateIconY (method)

**Signature**

```ts
stateIconY(rect: Rectangle): number;
```

### basicGaugesX (method)

**Signature**

```ts
basicGaugesX(rect: Rectangle): number;
```

### basicGaugesY (method)

**Signature**

```ts
basicGaugesY(rect: Rectangle): number;
```

### \_bitmapsReady (property)

**Signature**

```ts
_bitmapsReady: number
```
