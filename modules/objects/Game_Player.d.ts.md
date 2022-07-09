---
title: objects/Game_Player.d.ts
nav_order: 83
parent: Modules
---

## Game_Player.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Player (class)](#game_player-class)
    - [initMembers (method)](#initmembers-method)
    - [clearTransferInfo (method)](#cleartransferinfo-method)
    - [followers (method)](#followers-method)
    - [refresh (method)](#refresh-method)
    - [isStopping (method)](#isstopping-method)
    - [reserveTransfer (method)](#reservetransfer-method)
    - [setupForNewGame (method)](#setupfornewgame-method)
    - [requestMapReload (method)](#requestmapreload-method)
    - [isTransferring (method)](#istransferring-method)
    - [newMapId (method)](#newmapid-method)
    - [fadeType (method)](#fadetype-method)
    - [performTransfer (method)](#performtransfer-method)
    - [isMapPassable (method)](#ismappassable-method)
    - [vehicle (method)](#vehicle-method)
    - [isInBoat (method)](#isinboat-method)
    - [isInShip (method)](#isinship-method)
    - [isInAirship (method)](#isinairship-method)
    - [isInVehicle (method)](#isinvehicle-method)
    - [isNormal (method)](#isnormal-method)
    - [isDashing (method)](#isdashing-method)
    - [isDebugThrough (method)](#isdebugthrough-method)
    - [isCollided (method)](#iscollided-method)
    - [centerX (method)](#centerx-method)
    - [centerY (method)](#centery-method)
    - [center (method)](#center-method)
    - [locate (method)](#locate-method)
    - [increaseSteps (method)](#increasesteps-method)
    - [makeEncounterCount (method)](#makeencountercount-method)
    - [makeEncounterTroopId (method)](#makeencountertroopid-method)
    - [meetsEncounterConditions (method)](#meetsencounterconditions-method)
    - [executeEncounter (method)](#executeencounter-method)
    - [startMapEvent (method)](#startmapevent-method)
    - [moveByInput (method)](#movebyinput-method)
    - [canMove (method)](#canmove-method)
    - [getInputDirection (method)](#getinputdirection-method)
    - [executeMove (method)](#executemove-method)
    - [update (method)](#update-method)
    - [updateDashing (method)](#updatedashing-method)
    - [isDashButtonPressed (method)](#isdashbuttonpressed-method)
    - [updateScroll (method)](#updatescroll-method)
    - [updateVehicle (method)](#updatevehicle-method)
    - [updateVehicleGetOn (method)](#updatevehiclegeton-method)
    - [updateVehicleGetOff (method)](#updatevehiclegetoff-method)
    - [updateNonmoving (method)](#updatenonmoving-method)
    - [triggerAction (method)](#triggeraction-method)
    - [triggerButtonAction (method)](#triggerbuttonaction-method)
    - [triggerTouchAction (method)](#triggertouchaction-method)
    - [triggerTouchActionD1 (method)](#triggertouchactiond1-method)
    - [triggerTouchActionD2 (method)](#triggertouchactiond2-method)
    - [triggerTouchActionD3 (method)](#triggertouchactiond3-method)
    - [updateEncounterCount (method)](#updateencountercount-method)
    - [canEncounter (method)](#canencounter-method)
    - [encounterProgressValue (method)](#encounterprogressvalue-method)
    - [checkEventTriggerHere (method)](#checkeventtriggerhere-method)
    - [checkEventTriggerThere (method)](#checkeventtriggerthere-method)
    - [checkEventTriggerTouch (method)](#checkeventtriggertouch-method)
    - [canStartLocalEvents (method)](#canstartlocalevents-method)
    - [getOnOffVehicle (method)](#getonoffvehicle-method)
    - [getOnVehicle (method)](#getonvehicle-method)
    - [getOffVehicle (method)](#getoffvehicle-method)
    - [forceMoveForward (method)](#forcemoveforward-method)
    - [isOnDamageFloor (method)](#isondamagefloor-method)
    - [moveStraight (method)](#movestraight-method)
    - [moveDiagonally (method)](#movediagonally-method)
    - [jump (method)](#jump-method)
    - [showFollowers (method)](#showfollowers-method)
    - [hideFollowers (method)](#hidefollowers-method)
    - [gatherFollowers (method)](#gatherfollowers-method)
    - [areFollowersGathering (method)](#arefollowersgathering-method)
    - [areFollowersGathered (method)](#arefollowersgathered-method)
    - [\_vehicleType (property)](#_vehicletype-property)
    - [\_vehicleGettingOn (property)](#_vehiclegettingon-property)
    - [\_vehicleGettingOff (property)](#_vehiclegettingoff-property)
    - [\_dashing (property)](#_dashing-property)
    - [\_needsMapReload (property)](#_needsmapreload-property)
    - [\_transferring (property)](#_transferring-property)
    - [\_newMapId (property)](#_newmapid-property)
    - [\_newX (property)](#_newx-property)
    - [\_newY (property)](#_newy-property)
    - [\_newDirection (property)](#_newdirection-property)
    - [\_fadeType (property)](#_fadetype-property)
    - [\_followers (property)](#_followers-property)
    - [\_encounterCount (property)](#_encountercount-property)

---

# utils

## Game_Player (class)

Game_Player

The game object class for the player. It contains event starting
// determinants and map scrolling functions.

**Signature**

```ts
export declare class Game_Player {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### clearTransferInfo (method)

**Signature**

```ts
clearTransferInfo(): void
```

### followers (method)

**Signature**

```ts
followers(): Game_Followers
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### isStopping (method)

**Signature**

```ts
isStopping(): boolean
```

### reserveTransfer (method)

**Signature**

```ts
reserveTransfer(mapId: MapID, x: number, y: number, d?: Direction, fadeType?: number): void
```

### setupForNewGame (method)

**Signature**

```ts
setupForNewGame(): void
```

### requestMapReload (method)

**Signature**

```ts
requestMapReload(): void
```

### isTransferring (method)

**Signature**

```ts
isTransferring(): boolean
```

### newMapId (method)

**Signature**

```ts
newMapId(): number
```

### fadeType (method)

**Signature**

```ts
fadeType(): number | undefined
```

### performTransfer (method)

**Signature**

```ts
performTransfer(): void
```

### isMapPassable (method)

**Signature**

```ts
isMapPassable(x: number, y: number, d: Direction): boolean
```

### vehicle (method)

**Signature**

```ts
vehicle(): import("./Game_Vehicle").Game_Vehicle
```

### isInBoat (method)

**Signature**

```ts
isInBoat(): boolean
```

### isInShip (method)

**Signature**

```ts
isInShip(): boolean
```

### isInAirship (method)

**Signature**

```ts
isInAirship(): boolean
```

### isInVehicle (method)

**Signature**

```ts
isInVehicle(): boolean
```

### isNormal (method)

**Signature**

```ts
isNormal(): boolean
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

### isCollided (method)

**Signature**

```ts
isCollided(x: number, y: number): boolean
```

### centerX (method)

**Signature**

```ts
centerX(): number
```

### centerY (method)

**Signature**

```ts
centerY(): number
```

### center (method)

**Signature**

```ts
center(x: number, y: number): void
```

### locate (method)

**Signature**

```ts
locate(x: number, y: number): void
```

### increaseSteps (method)

**Signature**

```ts
increaseSteps(): void
```

### makeEncounterCount (method)

**Signature**

```ts
makeEncounterCount(): void
```

### makeEncounterTroopId (method)

**Signature**

```ts
makeEncounterTroopId(): number
```

### meetsEncounterConditions (method)

**Signature**

```ts
meetsEncounterConditions(encounter: DataEncounter): boolean
```

### executeEncounter (method)

**Signature**

```ts
executeEncounter(): boolean
```

### startMapEvent (method)

**Signature**

```ts
startMapEvent(x: number, y: number, triggers: number[], normal: boolean): void
```

### moveByInput (method)

**Signature**

```ts
moveByInput(): void
```

### canMove (method)

**Signature**

```ts
canMove(): boolean
```

### getInputDirection (method)

**Signature**

```ts
getInputDirection(): Direction
```

### executeMove (method)

**Signature**

```ts
executeMove(direction: Direction): void
```

### update (method)

**Signature**

```ts
update(sceneActive?: boolean): void
```

### updateDashing (method)

**Signature**

```ts
updateDashing(): void
```

### isDashButtonPressed (method)

**Signature**

```ts
isDashButtonPressed(): boolean
```

### updateScroll (method)

**Signature**

```ts
updateScroll(lastScrolledX: number, lastScrolledY: number): void
```

### updateVehicle (method)

**Signature**

```ts
updateVehicle(): void
```

### updateVehicleGetOn (method)

**Signature**

```ts
updateVehicleGetOn(): void
```

### updateVehicleGetOff (method)

**Signature**

```ts
updateVehicleGetOff(): void
```

### updateNonmoving (method)

**Signature**

```ts
updateNonmoving(wasMoving: boolean, sceneActive?: boolean): void
```

### triggerAction (method)

**Signature**

```ts
triggerAction(): boolean
```

### triggerButtonAction (method)

**Signature**

```ts
triggerButtonAction(): boolean
```

### triggerTouchAction (method)

**Signature**

```ts
triggerTouchAction(): boolean
```

### triggerTouchActionD1 (method)

**Signature**

```ts
triggerTouchActionD1(x1: number, y1: number): boolean
```

### triggerTouchActionD2 (method)

**Signature**

```ts
triggerTouchActionD2(x2: number, y2: number): boolean
```

### triggerTouchActionD3 (method)

**Signature**

```ts
triggerTouchActionD3(x2: number, y2: number): boolean
```

### updateEncounterCount (method)

**Signature**

```ts
updateEncounterCount(): void
```

### canEncounter (method)

**Signature**

```ts
canEncounter(): boolean
```

### encounterProgressValue (method)

**Signature**

```ts
encounterProgressValue(): number
```

### checkEventTriggerHere (method)

**Signature**

```ts
checkEventTriggerHere(triggers: number[]): void
```

### checkEventTriggerThere (method)

**Signature**

```ts
checkEventTriggerThere(triggers: number[]): void
```

### checkEventTriggerTouch (method)

**Signature**

```ts
checkEventTriggerTouch(x: number, y: number): void
```

### canStartLocalEvents (method)

**Signature**

```ts
canStartLocalEvents(): boolean
```

### getOnOffVehicle (method)

**Signature**

```ts
getOnOffVehicle(): boolean
```

### getOnVehicle (method)

**Signature**

```ts
getOnVehicle(): boolean
```

### getOffVehicle (method)

**Signature**

```ts
getOffVehicle(): boolean
```

### forceMoveForward (method)

**Signature**

```ts
forceMoveForward(): void
```

### isOnDamageFloor (method)

**Signature**

```ts
isOnDamageFloor(): boolean
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

### showFollowers (method)

**Signature**

```ts
showFollowers(): void
```

### hideFollowers (method)

**Signature**

```ts
hideFollowers(): void
```

### gatherFollowers (method)

**Signature**

```ts
gatherFollowers(): void
```

### areFollowersGathering (method)

**Signature**

```ts
areFollowersGathering(): boolean
```

### areFollowersGathered (method)

**Signature**

```ts
areFollowersGathered(): boolean
```

### \_vehicleType (property)

**Signature**

```ts
_vehicleType: VehicleType
```

### \_vehicleGettingOn (property)

**Signature**

```ts
_vehicleGettingOn: boolean
```

### \_vehicleGettingOff (property)

**Signature**

```ts
_vehicleGettingOff: boolean
```

### \_dashing (property)

**Signature**

```ts
_dashing: boolean
```

### \_needsMapReload (property)

**Signature**

```ts
_needsMapReload: boolean
```

### \_transferring (property)

**Signature**

```ts
_transferring: boolean
```

### \_newMapId (property)

**Signature**

```ts
_newMapId: number
```

### \_newX (property)

**Signature**

```ts
_newX: number
```

### \_newY (property)

**Signature**

```ts
_newY: number
```

### \_newDirection (property)

**Signature**

```ts
_newDirection: 0 | 2 | 1 | 4 | 6 | 3 | 7 | 8 | 9 | undefined
```

### \_fadeType (property)

**Signature**

```ts
_fadeType: number | undefined
```

### \_followers (property)

**Signature**

```ts
_followers: Game_Followers
```

### \_encounterCount (property)

**Signature**

```ts
_encounterCount: number
```
