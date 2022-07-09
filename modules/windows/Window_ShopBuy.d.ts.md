---
title: windows/Window_ShopBuy.d.ts
nav_order: 181
parent: Modules
---

## Window_ShopBuy.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ShopBuy (class)](#window_shopbuy-class)
    - [setupGoods (method)](#setupgoods-method)
    - [maxItems (method)](#maxitems-method)
    - [item (method)](#item-method)
    - [itemAt (method)](#itemat-method)
    - [setMoney (method)](#setmoney-method)
    - [isCurrentItemEnabled (method)](#iscurrentitemenabled-method)
    - [price (method)](#price-method)
    - [isEnabled (method)](#isenabled-method)
    - [refresh (method)](#refresh-method)
    - [makeItemList (method)](#makeitemlist-method)
    - [goodsToItem (method)](#goodstoitem-method)
    - [drawItem (method)](#drawitem-method)
    - [priceWidth (method)](#pricewidth-method)
    - [setStatusWindow (method)](#setstatuswindow-method)
    - [updateHelp (method)](#updatehelp-method)
    - [\_money (property)](#_money-property)
    - [\_shopGoods (property)](#_shopgoods-property)
    - [\_data (property)](#_data-property)
    - [\_price (property)](#_price-property)
    - [\_statusWindow (property)](#_statuswindow-property)

---

# utils

## Window_ShopBuy (class)

Window_ShopBuy

The window for selecting an item to buy on the shop screen.

**Signature**

```ts
export declare class Window_ShopBuy
```

### setupGoods (method)

**Signature**

```ts
setupGoods(shopGoods: ShopGoods[]): void
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### item (method)

**Signature**

```ts
item(): DataPricedItemBase | null
```

### itemAt (method)

**Signature**

```ts
itemAt(index: number): DataPricedItemBase | null
```

### setMoney (method)

**Signature**

```ts
setMoney(money: number): void
```

### isCurrentItemEnabled (method)

**Signature**

```ts
isCurrentItemEnabled(): boolean
```

### price (method)

**Signature**

```ts
price(item: DataPricedItemBase): number
```

### isEnabled (method)

**Signature**

```ts
isEnabled(item: DataPricedItemBase | null): boolean
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### makeItemList (method)

**Signature**

```ts
makeItemList(): void
```

### goodsToItem (method)

**Signature**

```ts
goodsToItem(
    goods: ShopGoods
  ): import("../data").DataItem | import("../data").DataWeapon | import("../data").DataArmor | null
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### priceWidth (method)

**Signature**

```ts
priceWidth(): number
```

### setStatusWindow (method)

**Signature**

```ts
setStatusWindow(statusWindow: Window_ShopStatus): void
```

### updateHelp (method)

**Signature**

```ts
updateHelp(): void
```

### \_money (property)

**Signature**

```ts
_money: number
```

### \_shopGoods (property)

**Signature**

```ts
_shopGoods: ([0, number, 1, number] | [0, number, 0, undefined] | [1, number, 1, number] | [1, number, 0, undefined] | [2, number, 1, number] | [2, number, 0, undefined])[]
```

### \_data (property)

**Signature**

```ts
_data: DataPricedItemBase[]
```

### \_price (property)

**Signature**

```ts
_price: number[]
```

### \_statusWindow (property)

**Signature**

```ts
_statusWindow: Window_ShopStatus | undefined
```
