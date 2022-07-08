---
title: windows/Window_ItemList.d.ts
nav_order: 164
parent: Modules
---

## Window_ItemList.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ItemList (class)](#window_itemlist-class)
    - [setCategory (method)](#setcategory-method)
    - [maxCols (method)](#maxcols-method)
    - [colSpacing (method)](#colspacing-method)
    - [maxItems (method)](#maxitems-method)
    - [item (method)](#item-method)
    - [itemAt (method)](#itemat-method)
    - [isCurrentItemEnabled (method)](#iscurrentitemenabled-method)
    - [includes (method)](#includes-method)
    - [needsNumber (method)](#needsnumber-method)
    - [isEnabled (method)](#isenabled-method)
    - [makeItemList (method)](#makeitemlist-method)
    - [selectLast (method)](#selectlast-method)
    - [drawItem (method)](#drawitem-method)
    - [numberWidth (method)](#numberwidth-method)
    - [drawItemNumber (method)](#drawitemnumber-method)
    - [updateHelp (method)](#updatehelp-method)
    - [refresh (method)](#refresh-method)
    - [\_category (property)](#_category-property)
    - [\_data (property)](#_data-property)

---

# utils

## Window_ItemList (class)

Window_ItemList

The window for selecting an item on the item screen.

**Signature**

```ts
export declare class Window_ItemList<T>
```

### setCategory (method)

**Signature**

```ts
setCategory(category: string | null): void;
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

### maxItems (method)

**Signature**

```ts
maxItems(): number;
```

### item (method)

**Signature**

```ts
item(): T | null;
```

### itemAt (method)

**Signature**

```ts
itemAt(index: number): T | null;
```

### isCurrentItemEnabled (method)

**Signature**

```ts
isCurrentItemEnabled(): boolean;
```

### includes (method)

**Signature**

```ts
includes(item: DataItemBase | null): boolean;
```

### needsNumber (method)

**Signature**

```ts
needsNumber(): boolean;
```

### isEnabled (method)

**Signature**

```ts
isEnabled(item: DataItemBase | null): boolean;
```

### makeItemList (method)

**Signature**

```ts
makeItemList(): void;
```

### selectLast (method)

**Signature**

```ts
selectLast(): void;
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void;
```

### numberWidth (method)

**Signature**

```ts
numberWidth(): number;
```

### drawItemNumber (method)

**Signature**

```ts
drawItemNumber(item: T, x: number, y: number, width: number): void;
```

### updateHelp (method)

**Signature**

```ts
updateHelp(): void;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### \_category (property)

**Signature**

```ts
_category: string | null
```

### \_data (property)

**Signature**

```ts
_data: (T | null)[]
```
