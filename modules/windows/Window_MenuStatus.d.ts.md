---
title: windows/Window_MenuStatus.d.ts
nav_order: 169
parent: Modules
---

## Window_MenuStatus.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_MenuStatus (class)](#window_menustatus-class)
    - [maxItems (method)](#maxitems-method)
    - [numVisibleRows (method)](#numvisiblerows-method)
    - [itemHeight (method)](#itemheight-method)
    - [actor (method)](#actor-method)
    - [drawItem (method)](#drawitem-method)
    - [drawPendingItemBackground (method)](#drawpendingitembackground-method)
    - [drawItemImage (method)](#drawitemimage-method)
    - [drawItemStatus (method)](#drawitemstatus-method)
    - [processOk (method)](#processok-method)
    - [isCurrentItemEnabled (method)](#iscurrentitemenabled-method)
    - [selectLast (method)](#selectlast-method)
    - [formationMode (method)](#formationmode-method)
    - [setFormationMode (method)](#setformationmode-method)
    - [pendingIndex (method)](#pendingindex-method)
    - [setPendingIndex (method)](#setpendingindex-method)
    - [\_formationMode (property)](#_formationmode-property)
    - [\_pendingIndex (property)](#_pendingindex-property)

---

# utils

## Window_MenuStatus (class)

Window_MenuStatus

The window for displaying party member status on the menu screen.

**Signature**

```ts
export declare class Window_MenuStatus {
  constructor(rect: Rectangle)
}
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### numVisibleRows (method)

**Signature**

```ts
numVisibleRows(): number
```

### itemHeight (method)

**Signature**

```ts
itemHeight(): number
```

### actor (method)

**Signature**

```ts
actor(index: number): import("..").Game_Actor
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### drawPendingItemBackground (method)

**Signature**

```ts
drawPendingItemBackground(index: number): void
```

### drawItemImage (method)

**Signature**

```ts
drawItemImage(index: number): void
```

### drawItemStatus (method)

**Signature**

```ts
drawItemStatus(index: number): void
```

### processOk (method)

**Signature**

```ts
processOk(): void
```

### isCurrentItemEnabled (method)

**Signature**

```ts
isCurrentItemEnabled(): boolean
```

### selectLast (method)

**Signature**

```ts
selectLast(): void
```

### formationMode (method)

**Signature**

```ts
formationMode(): boolean
```

### setFormationMode (method)

**Signature**

```ts
setFormationMode(formationMode: boolean): void
```

### pendingIndex (method)

**Signature**

```ts
pendingIndex(): number
```

### setPendingIndex (method)

**Signature**

```ts
setPendingIndex(index: number): void
```

### \_formationMode (property)

**Signature**

```ts
_formationMode: boolean
```

### \_pendingIndex (property)

**Signature**

```ts
_pendingIndex: number
```
