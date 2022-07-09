---
title: windows/Window_SavefileList.d.ts
nav_order: 177
parent: Modules
---

## Window_SavefileList.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SavefileMode (type alias)](#savefilemode-type-alias)
  - [Window_SavefileList (class)](#window_savefilelist-class)
    - [setMode (method)](#setmode-method)
    - [maxItems (method)](#maxitems-method)
    - [numVisibleRows (method)](#numvisiblerows-method)
    - [itemHeight (method)](#itemheight-method)
    - [drawItem (method)](#drawitem-method)
    - [indexToSavefileId (method)](#indextosavefileid-method)
    - [savefileIdToIndex (method)](#savefileidtoindex-method)
    - [isEnabled (method)](#isenabled-method)
    - [savefileId (method)](#savefileid-method)
    - [selectSavefile (method)](#selectsavefile-method)
    - [drawTitle (method)](#drawtitle-method)
    - [drawContents (method)](#drawcontents-method)
    - [drawPartyCharacters (method)](#drawpartycharacters-method)
    - [drawPlaytime (method)](#drawplaytime-method)
    - [playOkSound (method)](#playoksound-method)
    - [\_mode (property)](#_mode-property)
    - [\_autosave (property)](#_autosave-property)

---

# utils

## SavefileMode (type alias)

**Signature**

```ts
export declare type SavefileMode = 'save' | 'load'
```

## Window_SavefileList (class)

Window_SavefileList

The window for selecting a save file on the save and load screens.

**Signature**

```ts
export declare class Window_SavefileList {
  constructor(rect: Rectangle)
}
```

### setMode (method)

**Signature**

```ts
setMode(mode: SavefileMode, autosave: boolean): void
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

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### indexToSavefileId (method)

**Signature**

```ts
indexToSavefileId(index: number): number
```

### savefileIdToIndex (method)

**Signature**

```ts
savefileIdToIndex(savefileId: number): number
```

### isEnabled (method)

**Signature**

```ts
isEnabled(savefileId: number): boolean
```

### savefileId (method)

**Signature**

```ts
savefileId(): number
```

### selectSavefile (method)

**Signature**

```ts
selectSavefile(savefileId: number): void
```

### drawTitle (method)

**Signature**

```ts
drawTitle(savefileId: number, x: number, y: number): void
```

### drawContents (method)

**Signature**

```ts
drawContents(info: DataSaveInfo, rect: Rectangle): void
```

### drawPartyCharacters (method)

**Signature**

```ts
drawPartyCharacters(info: DataSaveInfo, x: number, y: number): void
```

### drawPlaytime (method)

**Signature**

```ts
drawPlaytime(info: DataSaveInfo, x: number, y: number, width: number): void
```

### playOkSound (method)

**Signature**

```ts
playOkSound(): void
```

### \_mode (property)

**Signature**

```ts
_mode: 'save' | 'load' | null
```

### \_autosave (property)

**Signature**

```ts
_autosave: boolean
```
