---
title: sprites/Sprite_Character.d.ts
nav_order: 125
parent: Modules
---

## Sprite_Character.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Character (class)](#sprite_character-class)
    - [initMembers (method)](#initmembers-method)
    - [setCharacter (method)](#setcharacter-method)
    - [checkCharacter (method)](#checkcharacter-method)
    - [update (method)](#update-method)
    - [updateVisibility (method)](#updatevisibility-method)
    - [isTile (method)](#istile-method)
    - [isObjectCharacter (method)](#isobjectcharacter-method)
    - [isEmptyCharacter (method)](#isemptycharacter-method)
    - [tilesetBitmap (method)](#tilesetbitmap-method)
    - [updateBitmap (method)](#updatebitmap-method)
    - [isImageChanged (method)](#isimagechanged-method)
    - [setTileBitmap (method)](#settilebitmap-method)
    - [setCharacterBitmap (method)](#setcharacterbitmap-method)
    - [updateFrame (method)](#updateframe-method)
    - [updateTileFrame (method)](#updatetileframe-method)
    - [updateCharacterFrame (method)](#updatecharacterframe-method)
    - [characterBlockX (method)](#characterblockx-method)
    - [characterBlockY (method)](#characterblocky-method)
    - [characterPatternX (method)](#characterpatternx-method)
    - [characterPatternY (method)](#characterpatterny-method)
    - [patternWidth (method)](#patternwidth-method)
    - [patternHeight (method)](#patternheight-method)
    - [updateHalfBodySprites (method)](#updatehalfbodysprites-method)
    - [createHalfBodySprites (method)](#createhalfbodysprites-method)
    - [updatePosition (method)](#updateposition-method)
    - [updateOther (method)](#updateother-method)
    - [\_character (property)](#_character-property)
    - [\_balloonDuration (property)](#_balloonduration-property)
    - [\_tilesetId (property)](#_tilesetid-property)
    - [\_upperBody (property)](#_upperbody-property)
    - [\_lowerBody (property)](#_lowerbody-property)
    - [\_tileId (property)](#_tileid-property)
    - [\_characterName (property)](#_charactername-property)
    - [\_characterIndex (property)](#_characterindex-property)
    - [\_isBigCharacter (property)](#_isbigcharacter-property)
    - [\_bushDepth (property)](#_bushdepth-property)

---

# utils

## Sprite_Character (class)

// Sprite_Character
//
// The sprite for displaying a character.

**Signature**

```ts
export declare class Sprite_Character {
  constructor(character: Game_Character)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### setCharacter (method)

**Signature**

```ts
setCharacter(character: Game_Character): void;
```

### checkCharacter (method)

**Signature**

```ts
checkCharacter(character: Game_Character): boolean;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateVisibility (method)

**Signature**

```ts
updateVisibility(): void;
```

### isTile (method)

**Signature**

```ts
isTile(): boolean;
```

### isObjectCharacter (method)

**Signature**

```ts
isObjectCharacter(): boolean;
```

### isEmptyCharacter (method)

**Signature**

```ts
isEmptyCharacter(): boolean;
```

### tilesetBitmap (method)

**Signature**

```ts
tilesetBitmap(tileId: TileID): import("../core").Bitmap;
```

### updateBitmap (method)

**Signature**

```ts
updateBitmap(): void;
```

### isImageChanged (method)

**Signature**

```ts
isImageChanged(): boolean;
```

### setTileBitmap (method)

**Signature**

```ts
setTileBitmap(): void;
```

### setCharacterBitmap (method)

**Signature**

```ts
setCharacterBitmap(): void;
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void;
```

### updateTileFrame (method)

**Signature**

```ts
updateTileFrame(): void;
```

### updateCharacterFrame (method)

**Signature**

```ts
updateCharacterFrame(): void;
```

### characterBlockX (method)

**Signature**

```ts
characterBlockX(): number;
```

### characterBlockY (method)

**Signature**

```ts
characterBlockY(): number;
```

### characterPatternX (method)

**Signature**

```ts
characterPatternX(): number;
```

### characterPatternY (method)

**Signature**

```ts
characterPatternY(): number;
```

### patternWidth (method)

**Signature**

```ts
patternWidth(): number;
```

### patternHeight (method)

**Signature**

```ts
patternHeight(): number;
```

### updateHalfBodySprites (method)

**Signature**

```ts
updateHalfBodySprites(): void;
```

### createHalfBodySprites (method)

**Signature**

```ts
createHalfBodySprites(): void;
```

### updatePosition (method)

**Signature**

```ts
updatePosition(): void;
```

### updateOther (method)

**Signature**

```ts
updateOther(): void;
```

### \_character (property)

**Signature**

```ts
_character: Game_Character
```

### \_balloonDuration (property)

**Signature**

```ts
_balloonDuration: number
```

### \_tilesetId (property)

**Signature**

```ts
_tilesetId: number
```

### \_upperBody (property)

**Signature**

```ts
_upperBody: Sprite<Bitmap>
```

### \_lowerBody (property)

**Signature**

```ts
_lowerBody: Sprite<Bitmap>
```

### \_tileId (property)

**Signature**

```ts
_tileId: number
```

### \_characterName (property)

**Signature**

```ts
_characterName: string
```

### \_characterIndex (property)

**Signature**

```ts
_characterIndex: number
```

### \_isBigCharacter (property)

**Signature**

```ts
_isBigCharacter: boolean
```

### \_bushDepth (property)

**Signature**

```ts
_bushDepth: number
```
