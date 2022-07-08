---
title: windows/Window_ShopStatus.d.ts
nav_order: 184
parent: Modules
---

## Window_ShopStatus.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ShopStatus (class)](#window_shopstatus-class)
    - [refresh (method)](#refresh-method)
    - [setItem (method)](#setitem-method)
    - [isEquipItem (method)](#isequipitem-method)
    - [drawPossession (method)](#drawpossession-method)
    - [drawEquipInfo (method)](#drawequipinfo-method)
    - [statusMembers (method)](#statusmembers-method)
    - [pageSize (method)](#pagesize-method)
    - [maxPages (method)](#maxpages-method)
    - [drawActorEquipInfo (method)](#drawactorequipinfo-method)
    - [drawActorParamChange (method)](#drawactorparamchange-method)
    - [paramId (method)](#paramid-method)
    - [currentEquippedItem (method)](#currentequippeditem-method)
    - [update (method)](#update-method)
    - [updatePage (method)](#updatepage-method)
    - [isPageChangeEnabled (method)](#ispagechangeenabled-method)
    - [isPageChangeRequested (method)](#ispagechangerequested-method)
    - [changePage (method)](#changepage-method)
    - [\_item (property)](#_item-property)
    - [\_pageIndex (property)](#_pageindex-property)

---

# utils

## Window_ShopStatus (class)

Window_ShopStatus

The window for displaying number of items in possession and the actor's
// equipment on the shop screen.

**Signature**

```ts
export declare class Window_ShopStatus {
  constructor(rect: Rectangle)
}
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### setItem (method)

**Signature**

```ts
setItem(item: DataPricedItemBase | null): void;
```

### isEquipItem (method)

**Signature**

```ts
isEquipItem(): boolean;
```

### drawPossession (method)

**Signature**

```ts
drawPossession(x: number, y: number): void;
```

### drawEquipInfo (method)

**Signature**

```ts
drawEquipInfo(x: number, y: number): void;
```

### statusMembers (method)

**Signature**

```ts
statusMembers(): Game_Actor[];
```

### pageSize (method)

**Signature**

```ts
pageSize(): number;
```

### maxPages (method)

**Signature**

```ts
maxPages(): number;
```

### drawActorEquipInfo (method)

**Signature**

```ts
drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
```

### drawActorParamChange (method)

**Signature**

```ts
drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: DataEquipment | null): void;
```

### paramId (method)

**Signature**

```ts
paramId(): ParamID;
```

### currentEquippedItem (method)

**Signature**

```ts
currentEquippedItem(actor: Game_Actor, etypeId: EquipmentType): DataEquipment | null;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updatePage (method)

**Signature**

```ts
updatePage(): void;
```

### isPageChangeEnabled (method)

**Signature**

```ts
isPageChangeEnabled(): boolean;
```

### isPageChangeRequested (method)

**Signature**

```ts
isPageChangeRequested(): boolean;
```

### changePage (method)

**Signature**

```ts
changePage(): void;
```

### \_item (property)

**Signature**

```ts
_item: DataPricedItemBase | null
```

### \_pageIndex (property)

**Signature**

```ts
_pageIndex: number
```
