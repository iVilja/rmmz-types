---
title: scenes/Scene_Shop.d.ts
nav_order: 114
parent: Modules
---

## Scene_Shop.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_Shop (class)](#scene_shop-class)
    - [prepare (method)](#prepare-method)
    - [create (method)](#create-method)
    - [createGoldWindow (method)](#creategoldwindow-method)
    - [goldWindowRect (method)](#goldwindowrect-method)
    - [createCommandWindow (method)](#createcommandwindow-method)
    - [commandWindowRect (method)](#commandwindowrect-method)
    - [createDummyWindow (method)](#createdummywindow-method)
    - [dummyWindowRect (method)](#dummywindowrect-method)
    - [createNumberWindow (method)](#createnumberwindow-method)
    - [numberWindowRect (method)](#numberwindowrect-method)
    - [createStatusWindow (method)](#createstatuswindow-method)
    - [statusWindowRect (method)](#statuswindowrect-method)
    - [createBuyWindow (method)](#createbuywindow-method)
    - [buyWindowRect (method)](#buywindowrect-method)
    - [createCategoryWindow (method)](#createcategorywindow-method)
    - [categoryWindowRect (method)](#categorywindowrect-method)
    - [createSellWindow (method)](#createsellwindow-method)
    - [sellWindowRect (method)](#sellwindowrect-method)
    - [statusWidth (method)](#statuswidth-method)
    - [activateBuyWindow (method)](#activatebuywindow-method)
    - [activateSellWindow (method)](#activatesellwindow-method)
    - [commandBuy (method)](#commandbuy-method)
    - [commandSell (method)](#commandsell-method)
    - [onBuyOk (method)](#onbuyok-method)
    - [onBuyCancel (method)](#onbuycancel-method)
    - [onCategoryOk (method)](#oncategoryok-method)
    - [onCategoryCancel (method)](#oncategorycancel-method)
    - [onSellOk (method)](#onsellok-method)
    - [onSellCancel (method)](#onsellcancel-method)
    - [onNumberOk (method)](#onnumberok-method)
    - [onNumberCancel (method)](#onnumbercancel-method)
    - [doBuy (method)](#dobuy-method)
    - [doSell (method)](#dosell-method)
    - [endNumberInput (method)](#endnumberinput-method)
    - [maxBuy (method)](#maxbuy-method)
    - [maxSell (method)](#maxsell-method)
    - [money (method)](#money-method)
    - [currencyUnit (method)](#currencyunit-method)
    - [buyingPrice (method)](#buyingprice-method)
    - [sellingPrice (method)](#sellingprice-method)
    - [\_goldWindow (property)](#_goldwindow-property)
    - [\_commandWindow (property)](#_commandwindow-property)
    - [\_dummyWindow (property)](#_dummywindow-property)
    - [\_numberWindow (property)](#_numberwindow-property)
    - [\_statusWindow (property)](#_statuswindow-property)
    - [\_buyWindow (property)](#_buywindow-property)
    - [\_sellWindow (property)](#_sellwindow-property)
    - [\_categoryWindow (property)](#_categorywindow-property)
    - [\_goods (property)](#_goods-property)
    - [\_purchaseOnly (property)](#_purchaseonly-property)
    - [\_item (property)](#_item-property)

---

# utils

## Scene_Shop (class)

**Signature**

```ts
export declare class Scene_Shop
```

### prepare (method)

**Signature**

```ts
prepare(goods: ShopGoods[], purchaseOnly: boolean): void
```

### create (method)

**Signature**

```ts
create(): void
```

### createGoldWindow (method)

**Signature**

```ts
createGoldWindow(): void
```

### goldWindowRect (method)

**Signature**

```ts
goldWindowRect(): Rectangle
```

### createCommandWindow (method)

**Signature**

```ts
createCommandWindow(): void
```

### commandWindowRect (method)

**Signature**

```ts
commandWindowRect(): Rectangle
```

### createDummyWindow (method)

**Signature**

```ts
createDummyWindow(): void
```

### dummyWindowRect (method)

**Signature**

```ts
dummyWindowRect(): Rectangle
```

### createNumberWindow (method)

**Signature**

```ts
createNumberWindow(): void
```

### numberWindowRect (method)

**Signature**

```ts
numberWindowRect(): Rectangle
```

### createStatusWindow (method)

**Signature**

```ts
createStatusWindow(): void
```

### statusWindowRect (method)

**Signature**

```ts
statusWindowRect(): Rectangle
```

### createBuyWindow (method)

**Signature**

```ts
createBuyWindow(): void
```

### buyWindowRect (method)

**Signature**

```ts
buyWindowRect(): Rectangle
```

### createCategoryWindow (method)

**Signature**

```ts
createCategoryWindow(): void
```

### categoryWindowRect (method)

**Signature**

```ts
categoryWindowRect(): Rectangle
```

### createSellWindow (method)

**Signature**

```ts
createSellWindow(): void
```

### sellWindowRect (method)

**Signature**

```ts
sellWindowRect(): Rectangle
```

### statusWidth (method)

**Signature**

```ts
statusWidth(): number
```

### activateBuyWindow (method)

**Signature**

```ts
activateBuyWindow(): void
```

### activateSellWindow (method)

**Signature**

```ts
activateSellWindow(): void
```

### commandBuy (method)

**Signature**

```ts
commandBuy(): void
```

### commandSell (method)

**Signature**

```ts
commandSell(): void
```

### onBuyOk (method)

**Signature**

```ts
onBuyOk(): void
```

### onBuyCancel (method)

**Signature**

```ts
onBuyCancel(): void
```

### onCategoryOk (method)

**Signature**

```ts
onCategoryOk(): void
```

### onCategoryCancel (method)

**Signature**

```ts
onCategoryCancel(): void
```

### onSellOk (method)

**Signature**

```ts
onSellOk(): void
```

### onSellCancel (method)

**Signature**

```ts
onSellCancel(): void
```

### onNumberOk (method)

**Signature**

```ts
onNumberOk(): void
```

### onNumberCancel (method)

**Signature**

```ts
onNumberCancel(): void
```

### doBuy (method)

**Signature**

```ts
doBuy(number: number): void
```

### doSell (method)

**Signature**

```ts
doSell(number: number): void
```

### endNumberInput (method)

**Signature**

```ts
endNumberInput(): void
```

### maxBuy (method)

**Signature**

```ts
maxBuy(): number
```

### maxSell (method)

**Signature**

```ts
maxSell(): number
```

### money (method)

**Signature**

```ts
money(): number
```

### currencyUnit (method)

**Signature**

```ts
currencyUnit(): string
```

### buyingPrice (method)

**Signature**

```ts
buyingPrice(): number
```

### sellingPrice (method)

**Signature**

```ts
sellingPrice(): number
```

### \_goldWindow (property)

**Signature**

```ts
_goldWindow: Window_Gold
```

### \_commandWindow (property)

**Signature**

```ts
_commandWindow: Window_ShopCommand
```

### \_dummyWindow (property)

**Signature**

```ts
_dummyWindow: Window_Base
```

### \_numberWindow (property)

**Signature**

```ts
_numberWindow: Window_ShopNumber
```

### \_statusWindow (property)

**Signature**

```ts
_statusWindow: Window_ShopStatus
```

### \_buyWindow (property)

**Signature**

```ts
_buyWindow: Window_ShopBuy
```

### \_sellWindow (property)

**Signature**

```ts
_sellWindow: Window_ShopSell
```

### \_categoryWindow (property)

**Signature**

```ts
_categoryWindow: Window_ItemCategory
```

### \_goods (property)

**Signature**

```ts
_goods: ([0, number, 1, number] | [0, number, 0, undefined] | [1, number, 1, number] | [1, number, 0, undefined] | [2, number, 1, number] | [2, number, 0, undefined])[]
```

### \_purchaseOnly (property)

**Signature**

```ts
_purchaseOnly: boolean
```

### \_item (property)

**Signature**

```ts
_item: DataPricedItemBase | null
```
