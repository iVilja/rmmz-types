---
title: sprites/Sprite_Actor.d.ts
nav_order: 118
parent: Modules
---

## Sprite_Actor.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Actor (class)](#sprite_actor-class)
    - [initMembers (method)](#initmembers-method)
    - [mainSprite (method)](#mainsprite-method)
    - [createMainSprite (method)](#createmainsprite-method)
    - [createShadowSprite (method)](#createshadowsprite-method)
    - [createWeaponSprite (method)](#createweaponsprite-method)
    - [createStateSprite (method)](#createstatesprite-method)
    - [setBattler (method)](#setbattler-method)
    - [moveToStartPosition (method)](#movetostartposition-method)
    - [setActorHome (method)](#setactorhome-method)
    - [update (method)](#update-method)
    - [updateShadow (method)](#updateshadow-method)
    - [updateMain (method)](#updatemain-method)
    - [setupMotion (method)](#setupmotion-method)
    - [setupWeaponAnimation (method)](#setupweaponanimation-method)
    - [startMotion (method)](#startmotion-method)
    - [updateTargetPosition (method)](#updatetargetposition-method)
    - [shouldStepForward (method)](#shouldstepforward-method)
    - [updateBitmap (method)](#updatebitmap-method)
    - [updateFrame (method)](#updateframe-method)
    - [updateMove (method)](#updatemove-method)
    - [updateMotion (method)](#updatemotion-method)
    - [updateMotionCount (method)](#updatemotioncount-method)
    - [motionSpeed (method)](#motionspeed-method)
    - [refreshMotion (method)](#refreshmotion-method)
    - [startEntryMotion (method)](#startentrymotion-method)
    - [stepForward (method)](#stepforward-method)
    - [stepBack (method)](#stepback-method)
    - [retreat (method)](#retreat-method)
    - [onMoveEnd (method)](#onmoveend-method)
    - [damageOffsetX (method)](#damageoffsetx-method)
    - [damageOffsetY (method)](#damageoffsety-method)
    - [\_battlerName (property)](#_battlername-property)
    - [\_motion (property)](#_motion-property)
    - [\_motionCount (property)](#_motioncount-property)
    - [\_pattern (property)](#_pattern-property)
    - [\_mainSprite (property)](#_mainsprite-property)
    - [\_shadowSprite (property)](#_shadowsprite-property)
    - [\_weaponSprite (property)](#_weaponsprite-property)
    - [\_stateSprite (property)](#_statesprite-property)
    - [\_actor (property)](#_actor-property)

---

# utils

## Sprite_Actor (class)

// Sprite_Actor
//
// The sprite for displaying an actor.

**Signature**

```ts
export declare class Sprite_Actor {
  constructor(battler?: Game_Actor)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### mainSprite (method)

**Signature**

```ts
mainSprite(): Sprite<Bitmap | null>;
```

### createMainSprite (method)

**Signature**

```ts
createMainSprite(): void;
```

### createShadowSprite (method)

**Signature**

```ts
createShadowSprite(): void;
```

### createWeaponSprite (method)

**Signature**

```ts
createWeaponSprite(): void;
```

### createStateSprite (method)

**Signature**

```ts
createStateSprite(): void;
```

### setBattler (method)

**Signature**

```ts
setBattler(battler: Game_Actor): void;
```

### moveToStartPosition (method)

**Signature**

```ts
moveToStartPosition(): void;
```

### setActorHome (method)

**Signature**

```ts
setActorHome(index: number): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateShadow (method)

**Signature**

```ts
updateShadow(): void;
```

### updateMain (method)

**Signature**

```ts
updateMain(): void;
```

### setupMotion (method)

**Signature**

```ts
setupMotion(): void;
```

### setupWeaponAnimation (method)

**Signature**

```ts
setupWeaponAnimation(): void;
```

### startMotion (method)

**Signature**

```ts
startMotion(motionType: BattlerMotionType): void;
```

### updateTargetPosition (method)

**Signature**

```ts
updateTargetPosition(): void;
```

### shouldStepForward (method)

**Signature**

```ts
shouldStepForward(): boolean;
```

### updateBitmap (method)

**Signature**

```ts
updateBitmap(): void;
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void;
```

### updateMove (method)

**Signature**

```ts
updateMove(): void;
```

### updateMotion (method)

**Signature**

```ts
updateMotion(): void;
```

### updateMotionCount (method)

**Signature**

```ts
updateMotionCount(): void;
```

### motionSpeed (method)

**Signature**

```ts
motionSpeed(): number;
```

### refreshMotion (method)

**Signature**

```ts
refreshMotion(): void;
```

### startEntryMotion (method)

**Signature**

```ts
startEntryMotion(): void;
```

### stepForward (method)

**Signature**

```ts
stepForward(): void;
```

### stepBack (method)

**Signature**

```ts
stepBack(): void;
```

### retreat (method)

**Signature**

```ts
retreat(): void;
```

### onMoveEnd (method)

**Signature**

```ts
onMoveEnd(): void;
```

### damageOffsetX (method)

**Signature**

```ts
damageOffsetX(): number;
```

### damageOffsetY (method)

**Signature**

```ts
damageOffsetY(): number;
```

### \_battlerName (property)

**Signature**

```ts
_battlerName: string
```

### \_motion (property)

**Signature**

```ts
_motion: { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | { index: number; loop: boolean; } | null
```

### \_motionCount (property)

**Signature**

```ts
_motionCount: number
```

### \_pattern (property)

**Signature**

```ts
_pattern: number
```

### \_mainSprite (property)

**Signature**

```ts
_mainSprite: Sprite<Bitmap | null>
```

### \_shadowSprite (property)

**Signature**

```ts
_shadowSprite: Sprite<Bitmap>
```

### \_weaponSprite (property)

**Signature**

```ts
_weaponSprite: Sprite_Weapon
```

### \_stateSprite (property)

**Signature**

```ts
_stateSprite: Sprite_StateOverlay
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor
```
