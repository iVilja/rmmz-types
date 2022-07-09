---
title: windows/Window_EquipSlot.d.ts
nav_order: 157
parent: Modules
---

## Window_EquipSlot.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_EquipSlot (class)](#window_equipslot-class)
    - [setActor (method)](#setactor-method)
    - [update (method)](#update-method)
    - [maxItems (method)](#maxitems-method)
    - [item (method)](#item-method)
    - [itemAt (method)](#itemat-method)
    - [drawItem (method)](#drawitem-method)
    - [slotNameWidth (method)](#slotnamewidth-method)
    - [isEnabled (method)](#isenabled-method)
    - [isCurrentItemEnabled (method)](#iscurrentitemenabled-method)
    - [setStatusWindow (method)](#setstatuswindow-method)
    - [setItemWindow (method)](#setitemwindow-method)
    - [updateHelp (method)](#updatehelp-method)
    - [\_actor (property)](#_actor-property)
    - [\_itemWindow (property)](#_itemwindow-property)
    - [\_statusWindow (property)](#_statuswindow-property)

---

# utils

## Window_EquipSlot (class)

Window_EquipSlot

The window for selecting an equipment slot on the equipment screen.

**Signature**

```ts
export declare class Window_EquipSlot {
  constructor(rect: Rectangle)
}
```

### setActor (method)

**Signature**

```ts
setActor(actor: Game_Actor): void
```

### update (method)

**Signature**

```ts
update(): void
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### item (method)

**Signature**

```ts
item(): import("..").DataEquipment | null
```

### itemAt (method)

**Signature**

```ts
itemAt(index: number): import("..").DataEquipment | null
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### slotNameWidth (method)

**Signature**

```ts
slotNameWidth(): number
```

### isEnabled (method)

**Signature**

```ts
isEnabled(index: number): boolean
```

### isCurrentItemEnabled (method)

**Signature**

```ts
isCurrentItemEnabled(): boolean
```

### setStatusWindow (method)

**Signature**

```ts
setStatusWindow(statusWindow: Window_EquipStatus): void
```

### setItemWindow (method)

**Signature**

```ts
setItemWindow(itemWindow: Window_EquipItem): void
```

### updateHelp (method)

**Signature**

```ts
updateHelp(): void
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null
```

### \_itemWindow (property)

**Signature**

```ts
_itemWindow: Window_EquipItem | undefined
```

### \_statusWindow (property)

**Signature**

```ts
_statusWindow: Window_EquipStatus | undefined
```
