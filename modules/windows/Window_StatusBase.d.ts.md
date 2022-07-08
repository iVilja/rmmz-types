---
title: windows/Window_StatusBase.d.ts
nav_order: 189
parent: Modules
---

## Window_StatusBase.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_StatusBase (class)](#window_statusbase-class)
    - [loadFaceImages (method)](#loadfaceimages-method)
    - [refresh (method)](#refresh-method)
    - [hideAdditionalSprites (method)](#hideadditionalsprites-method)
    - [placeActorName (method)](#placeactorname-method)
    - [placeStateIcon (method)](#placestateicon-method)
    - [placeGauge (method)](#placegauge-method)
    - [createInnerSprite (method)](#createinnersprite-method)
    - [placeTimeGauge (method)](#placetimegauge-method)
    - [placeBasicGauges (method)](#placebasicgauges-method)
    - [gaugeLineHeight (method)](#gaugelineheight-method)
    - [drawActorCharacter (method)](#drawactorcharacter-method)
    - [drawActorFace (method)](#drawactorface-method)
    - [drawActorName (method)](#drawactorname-method)
    - [drawActorClass (method)](#drawactorclass-method)
    - [drawActorNickname (method)](#drawactornickname-method)
    - [drawActorLevel (method)](#drawactorlevel-method)
    - [drawActorIcons (method)](#drawactoricons-method)
    - [drawActorSimpleStatus (method)](#drawactorsimplestatus-method)
    - [actorSlotName (method)](#actorslotname-method)
    - [\_additionalSprites (property)](#_additionalsprites-property)

---

# utils

## Window_StatusBase (class)

Window_StatusBase

The superclass of windows for displaying actor status.

**Signature**

```ts
export declare class Window_StatusBase {
  constructor(rect: Rectangle)
}
```

### loadFaceImages (method)

**Signature**

```ts
loadFaceImages(): void;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### hideAdditionalSprites (method)

**Signature**

```ts
hideAdditionalSprites(): void;
```

### placeActorName (method)

**Signature**

```ts
placeActorName(actor: Game_Actor, x: number, y: number): void;
```

### placeStateIcon (method)

**Signature**

```ts
placeStateIcon(actor: Game_Actor, x: number, y: number): void;
```

### placeGauge (method)

**Signature**

```ts
placeGauge(actor: Game_Actor, type: GaugeStatusType, x: number, y: number): void;
```

### createInnerSprite (method)

**Signature**

```ts
createInnerSprite<T extends Sprite>(key: string, spriteClass: new () => T): T;
```

### placeTimeGauge (method)

**Signature**

```ts
placeTimeGauge(actor: Game_Actor, x: number, y: number): void;
```

### placeBasicGauges (method)

**Signature**

```ts
placeBasicGauges(actor: Game_Actor, x: number, y: number): void;
```

### gaugeLineHeight (method)

**Signature**

```ts
gaugeLineHeight(): number;
```

### drawActorCharacter (method)

**Signature**

```ts
drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
```

### drawActorFace (method)

**Signature**

```ts
drawActorFace(actor: Game_Actor, x: number, y: number, width?: number, height?: number): void;
```

### drawActorName (method)

**Signature**

```ts
drawActorName(actor: Game_Actor, x: number, y: number, width?: number): void;
```

### drawActorClass (method)

**Signature**

```ts
drawActorClass(actor: Game_Actor, x: number, y: number, width?: number): void;
```

### drawActorNickname (method)

**Signature**

```ts
drawActorNickname(actor: Game_Actor, x: number, y: number, width?: number): void;
```

### drawActorLevel (method)

**Signature**

```ts
drawActorLevel(actor: Game_Actor, x: number, y: number): void;
```

### drawActorIcons (method)

**Signature**

```ts
drawActorIcons(actor: Game_Actor, x: number, y: number, width?: number): void;
```

### drawActorSimpleStatus (method)

**Signature**

```ts
drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;
```

### actorSlotName (method)

**Signature**

```ts
actorSlotName(actor: Game_Actor, index: number): string;
```

### \_additionalSprites (property)

**Signature**

```ts
_additionalSprites: Record<string, Sprite<Bitmap>>
```
