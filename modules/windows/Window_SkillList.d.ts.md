---
title: windows/Window_SkillList.d.ts
nav_order: 186
parent: Modules
---

## Window_SkillList.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_SkillList (class)](#window_skilllist-class)
    - [setActor (method)](#setactor-method)
    - [setStypeId (method)](#setstypeid-method)
    - [maxCols (method)](#maxcols-method)
    - [colSpacing (method)](#colspacing-method)
    - [maxItems (method)](#maxitems-method)
    - [item (method)](#item-method)
    - [itemAt (method)](#itemat-method)
    - [isCurrentItemEnabled (method)](#iscurrentitemenabled-method)
    - [includes (method)](#includes-method)
    - [isEnabled (method)](#isenabled-method)
    - [makeItemList (method)](#makeitemlist-method)
    - [selectLast (method)](#selectlast-method)
    - [drawItem (method)](#drawitem-method)
    - [costWidth (method)](#costwidth-method)
    - [drawSkillCost (method)](#drawskillcost-method)
    - [updateHelp (method)](#updatehelp-method)
    - [refresh (method)](#refresh-method)
    - [\_actor (property)](#_actor-property)
    - [\_stypeId (property)](#_stypeid-property)
    - [\_data (property)](#_data-property)

---

# utils

## Window_SkillList (class)

Window_SkillList

The window for selecting a skill on the skill screen.

**Signature**

```ts
export declare class Window_SkillList
```

### setActor (method)

**Signature**

```ts
setActor(actor: Game_Actor): void
```

### setStypeId (method)

**Signature**

```ts
setStypeId(stypeId: SkillType): void
```

### maxCols (method)

**Signature**

```ts
maxCols(): number
```

### colSpacing (method)

**Signature**

```ts
colSpacing(): number
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### item (method)

**Signature**

```ts
item(): DataSkill | null
```

### itemAt (method)

**Signature**

```ts
itemAt(index: number): DataSkill | null
```

### isCurrentItemEnabled (method)

**Signature**

```ts
isCurrentItemEnabled(): boolean
```

### includes (method)

**Signature**

```ts
includes(item: DataSkill): boolean
```

### isEnabled (method)

**Signature**

```ts
isEnabled(item: DataSkill): boolean
```

### makeItemList (method)

**Signature**

```ts
makeItemList(): void
```

### selectLast (method)

**Signature**

```ts
selectLast(): void
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### costWidth (method)

**Signature**

```ts
costWidth(): number
```

### drawSkillCost (method)

**Signature**

```ts
drawSkillCost(skill: DataSkill, x: number, y: number, width: number): void
```

### updateHelp (method)

**Signature**

```ts
updateHelp(): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null
```

### \_stypeId (property)

**Signature**

```ts
_stypeId: number
```

### \_data (property)

**Signature**

```ts
_data: DataSkill[]
```
