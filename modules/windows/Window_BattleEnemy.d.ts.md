---
title: windows/Window_BattleEnemy.d.ts
nav_order: 145
parent: Modules
---

## Window_BattleEnemy.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_BattleEnemy (class)](#window_battleenemy-class)
    - [maxCols (method)](#maxcols-method)
    - [maxItems (method)](#maxitems-method)
    - [enemy (method)](#enemy-method)
    - [enemyIndex (method)](#enemyindex-method)
    - [drawItem (method)](#drawitem-method)
    - [show (method)](#show-method)
    - [hide (method)](#hide-method)
    - [refresh (method)](#refresh-method)
    - [select (method)](#select-method)
    - [processTouch (method)](#processtouch-method)
    - [\_enemies (property)](#_enemies-property)

---

# utils

## Window_BattleEnemy (class)

Window_BattleEnemy

The window for selecting a target enemy on the battle screen.

**Signature**

```ts
export declare class Window_BattleEnemy {
  constructor(rect: Rectangle)
}
```

### maxCols (method)

**Signature**

```ts
maxCols(): number;
```

### maxItems (method)

**Signature**

```ts
maxItems(): number;
```

### enemy (method)

**Signature**

```ts
enemy(): Game_Enemy;
```

### enemyIndex (method)

**Signature**

```ts
enemyIndex(): number;
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void;
```

### show (method)

**Signature**

```ts
show(): void;
```

### hide (method)

**Signature**

```ts
hide(): void;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### select (method)

**Signature**

```ts
select(index: number): void;
```

### processTouch (method)

**Signature**

```ts
processTouch(): void;
```

### \_enemies (property)

**Signature**

```ts
_enemies: Game_Enemy[]
```
