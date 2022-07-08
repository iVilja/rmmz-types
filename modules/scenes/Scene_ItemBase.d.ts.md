---
title: scenes/Scene_ItemBase.d.ts
nav_order: 104
parent: Modules
---

## Scene_ItemBase.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_ItemBase (class)](#scene_itembase-class)
    - [create (method)](#create-method)
    - [createActorWindow (method)](#createactorwindow-method)
    - [actorWindowRect (method)](#actorwindowrect-method)
    - [item (method)](#item-method)
    - [user (method)](#user-method)
    - [isCursorLeft (method)](#iscursorleft-method)
    - [showActorWindow (method)](#showactorwindow-method)
    - [hideActorWindow (method)](#hideactorwindow-method)
    - [isActorWindowActive (method)](#isactorwindowactive-method)
    - [onActorOk (method)](#onactorok-method)
    - [onActorCancel (method)](#onactorcancel-method)
    - [determineItem (method)](#determineitem-method)
    - [useItem (method)](#useitem-method)
    - [activateItemWindow (method)](#activateitemwindow-method)
    - [itemTargetActors (method)](#itemtargetactors-method)
    - [canUse (method)](#canuse-method)
    - [isItemEffectsValid (method)](#isitemeffectsvalid-method)
    - [applyItem (method)](#applyitem-method)
    - [checkCommonEvent (method)](#checkcommonevent-method)
    - [playSeForItem (method)](#playseforitem-method)
    - [\_actorWindow (property)](#_actorwindow-property)
    - [\_itemWindow (property)](#_itemwindow-property)

---

# utils

## Scene_ItemBase (class)

**Signature**

```ts
export declare class Scene_ItemBase<T>
```

### create (method)

**Signature**

```ts
create(): void;
```

### createActorWindow (method)

**Signature**

```ts
createActorWindow(): void;
```

### actorWindowRect (method)

**Signature**

```ts
actorWindowRect(): Rectangle;
```

### item (method)

**Signature**

```ts
item(): T | null;
```

### user (method)

**Signature**

```ts
user(): Game_Actor | null | undefined;
```

### isCursorLeft (method)

**Signature**

```ts
isCursorLeft(): boolean;
```

### showActorWindow (method)

**Signature**

```ts
showActorWindow(): void;
```

### hideActorWindow (method)

**Signature**

```ts
hideActorWindow(): void;
```

### isActorWindowActive (method)

**Signature**

```ts
isActorWindowActive(): boolean;
```

### onActorOk (method)

**Signature**

```ts
onActorOk(): void;
```

### onActorCancel (method)

**Signature**

```ts
onActorCancel(): void;
```

### determineItem (method)

**Signature**

```ts
determineItem(): void;
```

### useItem (method)

**Signature**

```ts
useItem(): void;
```

### activateItemWindow (method)

**Signature**

```ts
activateItemWindow(): void;
```

### itemTargetActors (method)

**Signature**

```ts
itemTargetActors(): Game_Actor[];
```

### canUse (method)

**Signature**

```ts
canUse(): boolean | null | undefined;
```

### isItemEffectsValid (method)

**Signature**

```ts
isItemEffectsValid(): boolean;
```

### applyItem (method)

**Signature**

```ts
applyItem(): void;
```

### checkCommonEvent (method)

**Signature**

```ts
checkCommonEvent(): void;
```

### playSeForItem (method)

**Signature**

```ts
playSeForItem(): void;
```

### \_actorWindow (property)

**Signature**

```ts
_actorWindow: Window_MenuActor
```

### \_itemWindow (property)

**Signature**

```ts
_itemWindow: Window_SkillList | Window_ItemList<DataItemBase>
```
