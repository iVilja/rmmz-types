---
title: windows/Window_EquipItem.d.ts
nav_order: 155
parent: Modules
---

## Window_EquipItem.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_EquipItem (class)](#window_equipitem-class)
    - [maxCols (method)](#maxcols-method)
    - [colSpacing (method)](#colspacing-method)
    - [setActor (method)](#setactor-method)
    - [setSlotId (method)](#setslotid-method)
    - [includes (method)](#includes-method)
    - [etypeId (method)](#etypeid-method)
    - [isEnabled (method)](#isenabled-method)
    - [selectLast (method)](#selectlast-method)
    - [setStatusWindow (method)](#setstatuswindow-method)
    - [updateHelp (method)](#updatehelp-method)
    - [playOkSound (method)](#playoksound-method)
    - [\_actor (property)](#_actor-property)
    - [\_slotId (property)](#_slotid-property)
    - [\_statusWindow (property)](#_statuswindow-property)

---

# utils

## Window_EquipItem (class)

Window_EquipItem

The window for selecting an equipment item on the equipment screen.

**Signature**

```ts
export declare class Window_EquipItem
```

### maxCols (method)

**Signature**

```ts
maxCols(): number;
```

### colSpacing (method)

**Signature**

```ts
colSpacing(): number;
```

### setActor (method)

**Signature**

```ts
setActor(actor: Game_Actor): void;
```

### setSlotId (method)

**Signature**

```ts
setSlotId(slotId: EquipmentSlotID): void;
```

### includes (method)

**Signature**

```ts
includes(item: DataItemBase | null): boolean;
```

### etypeId (method)

**Signature**

```ts
etypeId(): number;
```

### isEnabled (method)

**Signature**

```ts
isEnabled(): boolean;
```

### selectLast (method)

**Signature**

```ts
selectLast(): void;
```

### setStatusWindow (method)

**Signature**

```ts
setStatusWindow(statusWindow: Window_EquipStatus): void;
```

### updateHelp (method)

**Signature**

```ts
updateHelp(): void;
```

### playOkSound (method)

**Signature**

```ts
playOkSound(): void;
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null
```

### \_slotId (property)

**Signature**

```ts
_slotId: number
```

### \_statusWindow (property)

**Signature**

```ts
_statusWindow: Window_EquipStatus | undefined
```
