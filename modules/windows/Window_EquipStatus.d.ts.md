---
title: windows/Window_EquipStatus.d.ts
nav_order: 157
parent: Modules
---

## Window_EquipStatus.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_EquipStatus (class)](#window_equipstatus-class)
    - [setActor (method)](#setactor-method)
    - [colSpacing (method)](#colspacing-method)
    - [refresh (method)](#refresh-method)
    - [setTempActor (method)](#settempactor-method)
    - [drawAllParams (method)](#drawallparams-method)
    - [drawItem (method)](#drawitem-method)
    - [drawParamName (method)](#drawparamname-method)
    - [drawCurrentParam (method)](#drawcurrentparam-method)
    - [drawRightArrow (method)](#drawrightarrow-method)
    - [drawNewParam (method)](#drawnewparam-method)
    - [rightArrowWidth (method)](#rightarrowwidth-method)
    - [paramWidth (method)](#paramwidth-method)
    - [paramX (method)](#paramx-method)
    - [paramY (method)](#paramy-method)
    - [\_actor (property)](#_actor-property)
    - [\_tempActor (property)](#_tempactor-property)

---

# utils

## Window_EquipStatus (class)

Window_EquipStatus

The window for displaying parameter changes on the equipment screen.

**Signature**

```ts
export declare class Window_EquipStatus {
  constructor(rect: Rectangle)
}
```

### setActor (method)

**Signature**

```ts
setActor(actor: Game_Actor): void;
```

### colSpacing (method)

**Signature**

```ts
colSpacing(): number;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### setTempActor (method)

**Signature**

```ts
setTempActor(tempActor: Game_Actor | null): void;
```

### drawAllParams (method)

**Signature**

```ts
drawAllParams(): void;
```

### drawItem (method)

**Signature**

```ts
drawItem(x: number, y: number, paramId: ParamID): void;
```

### drawParamName (method)

**Signature**

```ts
drawParamName(x: number, y: number, paramId: ParamID): void;
```

### drawCurrentParam (method)

**Signature**

```ts
drawCurrentParam(x: number, y: number, paramId: ParamID): void;
```

### drawRightArrow (method)

**Signature**

```ts
drawRightArrow(x: number, y: number): void;
```

### drawNewParam (method)

**Signature**

```ts
drawNewParam(x: number, y: number, paramId: ParamID): void;
```

### rightArrowWidth (method)

**Signature**

```ts
rightArrowWidth(): number;
```

### paramWidth (method)

**Signature**

```ts
paramWidth(): number;
```

### paramX (method)

**Signature**

```ts
paramX(): number;
```

### paramY (method)

**Signature**

```ts
paramY(index: number): number;
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null
```

### \_tempActor (property)

**Signature**

```ts
_tempActor: Game_Actor | null
```
