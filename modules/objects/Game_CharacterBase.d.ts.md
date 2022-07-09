---
title: objects/Game_CharacterBase.d.ts
nav_order: 71
parent: Modules
---

## Game_CharacterBase.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_CharacterBase (class)](#game_characterbase-class)
    - [initMembers (method)](#initmembers-method)
    - [pos (method)](#pos-method)
    - [posNt (method)](#posnt-method)
    - [moveSpeed (method)](#movespeed-method)
    - [setMoveSpeed (method)](#setmovespeed-method)
    - [moveFrequency (method)](#movefrequency-method)
    - [setMoveFrequency (method)](#setmovefrequency-method)
    - [opacity (method)](#opacity-method)
    - [setOpacity (method)](#setopacity-method)
    - [blendMode (method)](#blendmode-method)
    - [setBlendMode (method)](#setblendmode-method)
    - [isNormalPriority (method)](#isnormalpriority-method)
    - [setPriorityType (method)](#setprioritytype-method)
    - [isMoving (method)](#ismoving-method)
    - [isJumping (method)](#isjumping-method)
    - [jumpHeight (method)](#jumpheight-method)
    - [isStopping (method)](#isstopping-method)
    - [checkStop (method)](#checkstop-method)
    - [resetStopCount (method)](#resetstopcount-method)
    - [realMoveSpeed (method)](#realmovespeed-method)
    - [distancePerFrame (method)](#distanceperframe-method)
    - [isDashing (method)](#isdashing-method)
    - [isDebugThrough (method)](#isdebugthrough-method)
    - [straighten (method)](#straighten-method)
    - [reverseDir (method)](#reversedir-method)
    - [canPass (method)](#canpass-method)
    - [canPassDiagonally (method)](#canpassdiagonally-method)
    - [isMapPassable (method)](#ismappassable-method)
    - [isCollidedWithCharacters (method)](#iscollidedwithcharacters-method)
    - [isCollidedWithEvents (method)](#iscollidedwithevents-method)
    - [isCollidedWithVehicles (method)](#iscollidedwithvehicles-method)
    - [setPosition (method)](#setposition-method)
    - [copyPosition (method)](#copyposition-method)
    - [locate (method)](#locate-method)
    - [direction (method)](#direction-method)
    - [setDirection (method)](#setdirection-method)
    - [isTile (method)](#istile-method)
    - [isObjectCharacter (method)](#isobjectcharacter-method)
    - [shiftY (method)](#shifty-method)
    - [scrolledX (method)](#scrolledx-method)
    - [scrolledY (method)](#scrolledy-method)
    - [screenX (method)](#screenx-method)
    - [screenY (method)](#screeny-method)
    - [screenZ (method)](#screenz-method)
    - [isNearTheScreen (method)](#isnearthescreen-method)
    - [update (method)](#update-method)
    - [updateStop (method)](#updatestop-method)
    - [updateJump (method)](#updatejump-method)
    - [updateMove (method)](#updatemove-method)
    - [updateAnimation (method)](#updateanimation-method)
    - [animationWait (method)](#animationwait-method)
    - [updateAnimationCount (method)](#updateanimationcount-method)
    - [updatePattern (method)](#updatepattern-method)
    - [maxPattern (method)](#maxpattern-method)
    - [pattern (method)](#pattern-method)
    - [setPattern (method)](#setpattern-method)
    - [isOriginalPattern (method)](#isoriginalpattern-method)
    - [resetPattern (method)](#resetpattern-method)
    - [refreshBushDepth (method)](#refreshbushdepth-method)
    - [isOnLadder (method)](#isonladder-method)
    - [isOnBush (method)](#isonbush-method)
    - [terrainTag (method)](#terraintag-method)
    - [regionId (method)](#regionid-method)
    - [increaseSteps (method)](#increasesteps-method)
    - [tileId (method)](#tileid-method)
    - [characterName (method)](#charactername-method)
    - [characterIndex (method)](#characterindex-method)
    - [setImage (method)](#setimage-method)
    - [setTileImage (method)](#settileimage-method)
    - [checkEventTriggerTouchFront (method)](#checkeventtriggertouchfront-method)
    - [checkEventTriggerTouch (method)](#checkeventtriggertouch-method)
    - [isMovementSucceeded (method)](#ismovementsucceeded-method)
    - [setMovementSuccess (method)](#setmovementsuccess-method)
    - [moveStraight (method)](#movestraight-method)
    - [moveDiagonally (method)](#movediagonally-method)
    - [jump (method)](#jump-method)
    - [hasWalkAnime (method)](#haswalkanime-method)
    - [setWalkAnime (method)](#setwalkanime-method)
    - [hasStepAnime (method)](#hasstepanime-method)
    - [setStepAnime (method)](#setstepanime-method)
    - [isDirectionFixed (method)](#isdirectionfixed-method)
    - [setDirectionFix (method)](#setdirectionfix-method)
    - [isThrough (method)](#isthrough-method)
    - [setThrough (method)](#setthrough-method)
    - [isTransparent (method)](#istransparent-method)
    - [bushDepth (method)](#bushdepth-method)
    - [setTransparent (method)](#settransparent-method)
    - [startAnimation (method)](#startanimation-method)
    - [startBalloon (method)](#startballoon-method)
    - [isAnimationPlaying (method)](#isanimationplaying-method)
    - [isBalloonPlaying (method)](#isballoonplaying-method)
    - [endAnimation (method)](#endanimation-method)
    - [endBalloon (method)](#endballoon-method)
    - [\_x (property)](#_x-property)
    - [\_y (property)](#_y-property)
    - [\_realX (property)](#_realx-property)
    - [\_realY (property)](#_realy-property)
    - [\_moveSpeed (property)](#_movespeed-property)
    - [\_moveFrequency (property)](#_movefrequency-property)
    - [\_opacity (property)](#_opacity-property)
    - [\_blendMode (property)](#_blendmode-property)
    - [\_direction (property)](#_direction-property)
    - [\_pattern (property)](#_pattern-property)
    - [\_priorityType (property)](#_prioritytype-property)
    - [\_tileId (property)](#_tileid-property)
    - [\_characterName (property)](#_charactername-property)
    - [\_characterIndex (property)](#_characterindex-property)
    - [\_isObjectCharacter (property)](#_isobjectcharacter-property)
    - [\_walkAnime (property)](#_walkanime-property)
    - [\_stepAnime (property)](#_stepanime-property)
    - [\_directionFix (property)](#_directionfix-property)
    - [\_through (property)](#_through-property)
    - [\_transparent (property)](#_transparent-property)
    - [\_bushDepth (property)](#_bushdepth-property)
    - [\_animationId (property)](#_animationid-property)
    - [\_balloonId (property)](#_balloonid-property)
    - [\_animationPlaying (property)](#_animationplaying-property)
    - [\_balloonPlaying (property)](#_balloonplaying-property)
    - [\_animationCount (property)](#_animationcount-property)
    - [\_stopCount (property)](#_stopcount-property)
    - [\_jumpCount (property)](#_jumpcount-property)
    - [\_jumpPeak (property)](#_jumppeak-property)
    - [\_movementSuccess (property)](#_movementsuccess-property)

---

# utils

## Game_CharacterBase (class)

**Signature**

```ts
export declare class Game_CharacterBase {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### pos (method)

**Signature**

```ts
pos(x: number, y: number): boolean
```

### posNt (method)

**Signature**

```ts
posNt(x: number, y: number): boolean
```

### moveSpeed (method)

**Signature**

```ts
moveSpeed(): number
```

### setMoveSpeed (method)

**Signature**

```ts
setMoveSpeed(moveSpeed: number): void
```

### moveFrequency (method)

**Signature**

```ts
moveFrequency(): number
```

### setMoveFrequency (method)

**Signature**

```ts
setMoveFrequency(moveFrequency: number): void
```

### opacity (method)

**Signature**

```ts
opacity(): number
```

### setOpacity (method)

**Signature**

```ts
setOpacity(opacity: number): void
```

### blendMode (method)

**Signature**

```ts
blendMode(): PIXI.BLEND_MODES
```

### setBlendMode (method)

**Signature**

```ts
setBlendMode(blendMode: PIXI.BLEND_MODES): void
```

### isNormalPriority (method)

**Signature**

```ts
isNormalPriority(): boolean
```

### setPriorityType (method)

**Signature**

```ts
setPriorityType(priorityType: PriorityType): void
```

### isMoving (method)

**Signature**

```ts
isMoving(): boolean
```

### isJumping (method)

**Signature**

```ts
isJumping(): boolean
```

### jumpHeight (method)

**Signature**

```ts
jumpHeight(): number
```

### isStopping (method)

**Signature**

```ts
isStopping(): boolean
```

### checkStop (method)

**Signature**

```ts
checkStop(threshold: number): boolean
```

### resetStopCount (method)

**Signature**

```ts
resetStopCount(): void
```

### realMoveSpeed (method)

**Signature**

```ts
realMoveSpeed(): number
```

### distancePerFrame (method)

**Signature**

```ts
distancePerFrame(): number
```

### isDashing (method)

**Signature**

```ts
isDashing(): boolean
```

### isDebugThrough (method)

**Signature**

```ts
isDebugThrough(): boolean
```

### straighten (method)

**Signature**

```ts
straighten(): void
```

### reverseDir (method)

**Signature**

```ts
reverseDir(d: Direction): Direction
```

### canPass (method)

**Signature**

```ts
canPass(x: number, y: number, d: Direction): boolean
```

### canPassDiagonally (method)

**Signature**

```ts
canPassDiagonally(x: number, y: number, horz: Direction, vert: Direction): boolean
```

### isMapPassable (method)

**Signature**

```ts
isMapPassable(x: number, y: number, d: Direction): boolean
```

### isCollidedWithCharacters (method)

**Signature**

```ts
isCollidedWithCharacters(x: number, y: number): boolean
```

### isCollidedWithEvents (method)

**Signature**

```ts
isCollidedWithEvents(x: number, y: number): boolean
```

### isCollidedWithVehicles (method)

**Signature**

```ts
isCollidedWithVehicles(x: number, y: number): boolean
```

### setPosition (method)

**Signature**

```ts
setPosition(x: number, y: number): void
```

### copyPosition (method)

**Signature**

```ts
copyPosition(character: Game_CharacterBase): void
```

### locate (method)

**Signature**

```ts
locate(x: number, y: number): void
```

### direction (method)

**Signature**

```ts
direction(): Direction
```

### setDirection (method)

**Signature**

```ts
setDirection(d?: Direction | 0): void
```

### isTile (method)

**Signature**

```ts
isTile(): boolean
```

### isObjectCharacter (method)

**Signature**

```ts
isObjectCharacter(): boolean
```

### shiftY (method)

**Signature**

```ts
shiftY(): 0 | 6
```

### scrolledX (method)

**Signature**

```ts
scrolledX(): number
```

### scrolledY (method)

**Signature**

```ts
scrolledY(): number
```

### screenX (method)

**Signature**

```ts
screenX(): number
```

### screenY (method)

**Signature**

```ts
screenY(): number
```

### screenZ (method)

**Signature**

```ts
screenZ(): number
```

### isNearTheScreen (method)

**Signature**

```ts
isNearTheScreen(): boolean
```

### update (method)

**Signature**

```ts
update(): void
```

### updateStop (method)

**Signature**

```ts
updateStop(): void
```

### updateJump (method)

**Signature**

```ts
updateJump(): void
```

### updateMove (method)

**Signature**

```ts
updateMove(): void
```

### updateAnimation (method)

**Signature**

```ts
updateAnimation(): void
```

### animationWait (method)

**Signature**

```ts
animationWait(): number
```

### updateAnimationCount (method)

**Signature**

```ts
updateAnimationCount(): void
```

### updatePattern (method)

**Signature**

```ts
updatePattern(): void
```

### maxPattern (method)

**Signature**

```ts
maxPattern(): number
```

### pattern (method)

**Signature**

```ts
pattern(): number
```

### setPattern (method)

**Signature**

```ts
setPattern(pattern: number): void
```

### isOriginalPattern (method)

**Signature**

```ts
isOriginalPattern(): boolean
```

### resetPattern (method)

**Signature**

```ts
resetPattern(): void
```

### refreshBushDepth (method)

**Signature**

```ts
refreshBushDepth(): void
```

### isOnLadder (method)

**Signature**

```ts
isOnLadder(): boolean
```

### isOnBush (method)

**Signature**

```ts
isOnBush(): boolean
```

### terrainTag (method)

**Signature**

```ts
terrainTag(): number
```

### regionId (method)

**Signature**

```ts
regionId(): number
```

### increaseSteps (method)

**Signature**

```ts
increaseSteps(): void
```

### tileId (method)

**Signature**

```ts
tileId(): number
```

### characterName (method)

**Signature**

```ts
characterName(): string
```

### characterIndex (method)

**Signature**

```ts
characterIndex(): number
```

### setImage (method)

**Signature**

```ts
setImage(characterName: string, characterIndex: number): void
```

### setTileImage (method)

**Signature**

```ts
setTileImage(tileId: TileID): void
```

### checkEventTriggerTouchFront (method)

**Signature**

```ts
checkEventTriggerTouchFront(d: Direction): void
```

### checkEventTriggerTouch (method)

**Signature**

```ts
checkEventTriggerTouch(_x: number, _y: number): void
```

### isMovementSucceeded (method)

**Signature**

```ts
isMovementSucceeded(_x?: number, _y?: number): boolean
```

### setMovementSuccess (method)

**Signature**

```ts
setMovementSuccess(success: boolean): void
```

### moveStraight (method)

**Signature**

```ts
moveStraight(d: Direction): void
```

### moveDiagonally (method)

**Signature**

```ts
moveDiagonally(horz: Direction, vert: Direction): void
```

### jump (method)

**Signature**

```ts
jump(xPlus: number, yPlus: number): void
```

### hasWalkAnime (method)

**Signature**

```ts
hasWalkAnime(): boolean
```

### setWalkAnime (method)

**Signature**

```ts
setWalkAnime(walkAnime: boolean): void
```

### hasStepAnime (method)

**Signature**

```ts
hasStepAnime(): boolean
```

### setStepAnime (method)

**Signature**

```ts
setStepAnime(stepAnime: boolean): void
```

### isDirectionFixed (method)

**Signature**

```ts
isDirectionFixed(): boolean
```

### setDirectionFix (method)

**Signature**

```ts
setDirectionFix(directionFix: boolean): void
```

### isThrough (method)

**Signature**

```ts
isThrough(): boolean
```

### setThrough (method)

**Signature**

```ts
setThrough(through: boolean): void
```

### isTransparent (method)

**Signature**

```ts
isTransparent(): boolean
```

### bushDepth (method)

**Signature**

```ts
bushDepth(): number
```

### setTransparent (method)

**Signature**

```ts
setTransparent(transparent: boolean): void
```

### startAnimation (method)

**Signature**

```ts
startAnimation(): void
```

### startBalloon (method)

**Signature**

```ts
startBalloon(): void
```

### isAnimationPlaying (method)

**Signature**

```ts
isAnimationPlaying(): boolean
```

### isBalloonPlaying (method)

**Signature**

```ts
isBalloonPlaying(): boolean
```

### endAnimation (method)

**Signature**

```ts
endAnimation(): void
```

### endBalloon (method)

**Signature**

```ts
endBalloon(): void
```

### \_x (property)

**Signature**

```ts
_x: number
```

### \_y (property)

**Signature**

```ts
_y: number
```

### \_realX (property)

**Signature**

```ts
_realX: number
```

### \_realY (property)

**Signature**

```ts
_realY: number
```

### \_moveSpeed (property)

**Signature**

```ts
_moveSpeed: number
```

### \_moveFrequency (property)

**Signature**

```ts
_moveFrequency: number
```

### \_opacity (property)

**Signature**

```ts
_opacity: number
```

### \_blendMode (property)

**Signature**

```ts
_blendMode: any
```

### \_direction (property)

**Signature**

```ts
_direction: Direction
```

### \_pattern (property)

**Signature**

```ts
_pattern: number
```

### \_priorityType (property)

**Signature**

```ts
_priorityType: TextWindowBackgroundType
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

### \_isObjectCharacter (property)

**Signature**

```ts
_isObjectCharacter: boolean
```

### \_walkAnime (property)

**Signature**

```ts
_walkAnime: boolean
```

### \_stepAnime (property)

**Signature**

```ts
_stepAnime: boolean
```

### \_directionFix (property)

**Signature**

```ts
_directionFix: boolean
```

### \_through (property)

**Signature**

```ts
_through: boolean
```

### \_transparent (property)

**Signature**

```ts
_transparent: boolean
```

### \_bushDepth (property)

**Signature**

```ts
_bushDepth: number
```

### \_animationId (property)

**Signature**

```ts
_animationId: number
```

### \_balloonId (property)

**Signature**

```ts
_balloonId: number
```

### \_animationPlaying (property)

**Signature**

```ts
_animationPlaying: boolean
```

### \_balloonPlaying (property)

**Signature**

```ts
_balloonPlaying: boolean
```

### \_animationCount (property)

**Signature**

```ts
_animationCount: number
```

### \_stopCount (property)

**Signature**

```ts
_stopCount: number
```

### \_jumpCount (property)

**Signature**

```ts
_jumpCount: number
```

### \_jumpPeak (property)

**Signature**

```ts
_jumpPeak: number
```

### \_movementSuccess (property)

**Signature**

```ts
_movementSuccess: boolean
```
