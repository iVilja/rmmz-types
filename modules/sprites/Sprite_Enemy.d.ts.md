---
title: sprites/Sprite_Enemy.d.ts
nav_order: 130
parent: Modules
---

## Sprite_Enemy.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Enemy (class)](#sprite_enemy-class)
    - [initMembers (method)](#initmembers-method)
    - [createStateIconSprite (method)](#createstateiconsprite-method)
    - [setBattler (method)](#setbattler-method)
    - [update (method)](#update-method)
    - [updateBitmap (method)](#updatebitmap-method)
    - [loadBitmap (method)](#loadbitmap-method)
    - [setHue (method)](#sethue-method)
    - [updateFrame (method)](#updateframe-method)
    - [updatePosition (method)](#updateposition-method)
    - [updateStateSprite (method)](#updatestatesprite-method)
    - [initVisibility (method)](#initvisibility-method)
    - [setupEffect (method)](#setupeffect-method)
    - [startEffect (method)](#starteffect-method)
    - [startAppear (method)](#startappear-method)
    - [startDisappear (method)](#startdisappear-method)
    - [startWhiten (method)](#startwhiten-method)
    - [startBlink (method)](#startblink-method)
    - [startCollapse (method)](#startcollapse-method)
    - [startBossCollapse (method)](#startbosscollapse-method)
    - [startInstantCollapse (method)](#startinstantcollapse-method)
    - [updateEffect (method)](#updateeffect-method)
    - [isEffecting (method)](#iseffecting-method)
    - [revertToNormal (method)](#reverttonormal-method)
    - [updateWhiten (method)](#updatewhiten-method)
    - [updateBlink (method)](#updateblink-method)
    - [updateAppear (method)](#updateappear-method)
    - [updateDisappear (method)](#updatedisappear-method)
    - [updateCollapse (method)](#updatecollapse-method)
    - [updateBossCollapse (method)](#updatebosscollapse-method)
    - [updateInstantCollapse (method)](#updateinstantcollapse-method)
    - [damageOffsetX (method)](#damageoffsetx-method)
    - [damageOffsetY (method)](#damageoffsety-method)
    - [\_enemy (property)](#_enemy-property)
    - [\_appeared (property)](#_appeared-property)
    - [\_battlerName (property)](#_battlername-property)
    - [\_battlerHue (property)](#_battlerhue-property)
    - [\_effectType (property)](#_effecttype-property)
    - [\_effectDuration (property)](#_effectduration-property)
    - [\_shake (property)](#_shake-property)
    - [\_stateIconSprite (property)](#_stateiconsprite-property)

---

# utils

## Sprite_Enemy (class)

// Sprite_Enemy
//
// The sprite for displaying an enemy.

**Signature**

```ts
export declare class Sprite_Enemy
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### createStateIconSprite (method)

**Signature**

```ts
createStateIconSprite(): void
```

### setBattler (method)

**Signature**

```ts
setBattler(battler: Game_Enemy): void
```

### update (method)

**Signature**

```ts
update(): void
```

### updateBitmap (method)

**Signature**

```ts
updateBitmap(): void
```

### loadBitmap (method)

**Signature**

```ts
loadBitmap(name: string): void
```

### setHue (method)

**Signature**

```ts
setHue(hue: number): void
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void
```

### updatePosition (method)

**Signature**

```ts
updatePosition(): void
```

### updateStateSprite (method)

**Signature**

```ts
updateStateSprite(): void
```

### initVisibility (method)

**Signature**

```ts
initVisibility(): void
```

### setupEffect (method)

**Signature**

```ts
setupEffect(): void
```

### startEffect (method)

**Signature**

```ts
startEffect(effectType: BattlerEffectType): void
```

### startAppear (method)

**Signature**

```ts
startAppear(): void
```

### startDisappear (method)

**Signature**

```ts
startDisappear(): void
```

### startWhiten (method)

**Signature**

```ts
startWhiten(): void
```

### startBlink (method)

**Signature**

```ts
startBlink(): void
```

### startCollapse (method)

**Signature**

```ts
startCollapse(): void
```

### startBossCollapse (method)

**Signature**

```ts
startBossCollapse(): void
```

### startInstantCollapse (method)

**Signature**

```ts
startInstantCollapse(): void
```

### updateEffect (method)

**Signature**

```ts
updateEffect(): void
```

### isEffecting (method)

**Signature**

```ts
isEffecting(): boolean
```

### revertToNormal (method)

**Signature**

```ts
revertToNormal(): void
```

### updateWhiten (method)

**Signature**

```ts
updateWhiten(): void
```

### updateBlink (method)

**Signature**

```ts
updateBlink(): void
```

### updateAppear (method)

**Signature**

```ts
updateAppear(): void
```

### updateDisappear (method)

**Signature**

```ts
updateDisappear(): void
```

### updateCollapse (method)

**Signature**

```ts
updateCollapse(): void
```

### updateBossCollapse (method)

**Signature**

```ts
updateBossCollapse(): void
```

### updateInstantCollapse (method)

**Signature**

```ts
updateInstantCollapse(): void
```

### damageOffsetX (method)

**Signature**

```ts
damageOffsetX(): number
```

### damageOffsetY (method)

**Signature**

```ts
damageOffsetY(): number
```

### \_enemy (property)

**Signature**

```ts
_enemy: Game_Enemy
```

### \_appeared (property)

**Signature**

```ts
_appeared: boolean
```

### \_battlerName (property)

**Signature**

```ts
_battlerName: string | null
```

### \_battlerHue (property)

**Signature**

```ts
_battlerHue: number
```

### \_effectType (property)

**Signature**

```ts
_effectType: 'whiten' | 'blink' | 'collapse' | 'bossCollapse' | 'instantCollapse' | 'appear' | 'disappear' | null
```

### \_effectDuration (property)

**Signature**

```ts
_effectDuration: number
```

### \_shake (property)

**Signature**

```ts
_shake: number
```

### \_stateIconSprite (property)

**Signature**

```ts
_stateIconSprite: Sprite_StateIcon
```
