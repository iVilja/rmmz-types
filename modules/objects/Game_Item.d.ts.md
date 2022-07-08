---
title: objects/Game_Item.d.ts
nav_order: 77
parent: Modules
---

## Game_Item.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Item (class)](#game_item-class)
    - [isSkill (method)](#isskill-method)
    - [isItem (method)](#isitem-method)
    - [isUsableItem (method)](#isusableitem-method)
    - [isWeapon (method)](#isweapon-method)
    - [isArmor (method)](#isarmor-method)
    - [isEquipItem (method)](#isequipitem-method)
    - [isNull (method)](#isnull-method)
    - [itemId (method)](#itemid-method)
    - [object (method)](#object-method)
    - [setObject (method)](#setobject-method)
    - [setEquip (method)](#setequip-method)
    - [\_dataClass (property)](#_dataclass-property)
    - [\_itemId (property)](#_itemid-property)

---

# utils

## Game_Item (class)

Game_Item

The game object class for handling skills, items, weapons, and armor. It is
// required because save data should not include the database object itself.

**Signature**

```ts
export declare class Game_Item<T> {
  constructor(item?: T | null)
}
```

### isSkill (method)

**Signature**

```ts
isSkill(): boolean;
```

### isItem (method)

**Signature**

```ts
isItem(): boolean;
```

### isUsableItem (method)

**Signature**

```ts
isUsableItem(): boolean;
```

### isWeapon (method)

**Signature**

```ts
isWeapon(): boolean;
```

### isArmor (method)

**Signature**

```ts
isArmor(): boolean;
```

### isEquipItem (method)

**Signature**

```ts
isEquipItem(): boolean;
```

### isNull (method)

**Signature**

```ts
isNull(): boolean;
```

### itemId (method)

**Signature**

```ts
itemId(): number;
```

### object (method)

**Signature**

```ts
object(): T;
```

### setObject (method)

**Signature**

```ts
setObject(item: T | null): void;
```

### setEquip (method)

**Signature**

```ts
setEquip(isWeapon: boolean, itemId: number): void;
```

### \_dataClass (property)

**Signature**

```ts
_dataClass: '' | 'skill' | 'item' | 'weapon' | 'armor'
```

### \_itemId (property)

**Signature**

```ts
_itemId: number
```
