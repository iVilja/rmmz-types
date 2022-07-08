---
title: data/animations.d.ts
nav_order: 24
parent: Modules
---

## animations.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AnimationRequest (type alias)](#animationrequest-type-alias)
  - [AnimationTarget (type alias)](#animationtarget-type-alias)
  - [BalloonRequest (type alias)](#balloonrequest-type-alias)
  - [DataAnimation (interface)](#dataanimation-interface)
  - [DataAnimationMV (interface)](#dataanimationmv-interface)
  - [DataFrameCellMV (type alias)](#dataframecellmv-type-alias)
  - [DataFrameMV (type alias)](#dataframemv-type-alias)
  - [DataTimingMV (type alias)](#datatimingmv-type-alias)
  - [DisplayType (type alias)](#displaytype-type-alias)
  - [FlashTiming (interface)](#flashtiming-interface)
  - [Rotation (interface)](#rotation-interface)
  - [SoundTiming (interface)](#soundtiming-interface)

---

# utils

## AnimationRequest (type alias)

**Signature**

```ts
export declare type AnimationRequest = {
  targets: AnimationTarget[]
  animationId: AnimationID
  mirror: boolean
}
```

## AnimationTarget (type alias)

**Signature**

```ts
export declare type AnimationTarget = Game_Character | Game_Battler
```

## BalloonRequest (type alias)

**Signature**

```ts
export declare type BalloonRequest = {
  target: Game_Character
  balloonId: BalloonIconID
}
```

## DataAnimation (interface)

**Signature**

```ts
export interface DataAnimation extends DataBase {
  displayType: DisplayType
  effectName: string
  scale: number
  speed: number
  rotation: Rotation
  offsetX: number
  offsetY: number
  soundTimings: SoundTiming[]
  flashTimings: FlashTiming[]
  alignBottom?: boolean
}
```

## DataAnimationMV (interface)

**Signature**

```ts
export interface DataAnimationMV extends DataBase {
  frames: DataFrameMV[]
  animation1Name: string
  animation2Name: string
  animation1Hue: number
  animation2Hue: number
  timings: DataTimingMV[]
  position: number
}
```

## DataFrameCellMV (type alias)

**Signature**

```ts
export declare type DataFrameCellMV = readonly [
  number,
  number,
  number,
  number,
  number,
  boolean,
  number,
  PIXI.BLEND_MODES
]
```

## DataFrameMV (type alias)

**Signature**

```ts
export declare type DataFrameMV = DataFrameCellMV[]
```

## DataTimingMV (type alias)

**Signature**

```ts
export declare type DataTimingMV = {
  frame: number
  flashDuration: number
  se?: DataAudio
} & (
  | {
      flashScope: 1
      flashColor: Color
    }
  | {
      flashScope: 2
      flashColor: Color
    }
  | {
      flashScope: 3
    }
  | undefined
)
```

## DisplayType (type alias)

**Signature**

```ts
export declare type DisplayType = 0 | 1 | 2
```

## FlashTiming (interface)

**Signature**

```ts
export interface FlashTiming {
  frame: number
  duration: number
  color: Color
}
```

## Rotation (interface)

**Signature**

```ts
export interface Rotation {
  x: number
  y: number
  z: number
}
```

## SoundTiming (interface)

**Signature**

```ts
export interface SoundTiming {
  frame: number
  se: DataAudio | null
}
```
