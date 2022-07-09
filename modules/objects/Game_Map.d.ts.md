---
title: objects/Game_Map.d.ts
nav_order: 79
parent: Modules
---

## Game_Map.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Map (class)](#game_map-class)
    - [setup (method)](#setup-method)
    - [isEventRunning (method)](#iseventrunning-method)
    - [tileWidth (method)](#tilewidth-method)
    - [tileHeight (method)](#tileheight-method)
    - [bushDepth (method)](#bushdepth-method)
    - [mapId (method)](#mapid-method)
    - [tilesetId (method)](#tilesetid-method)
    - [displayX (method)](#displayx-method)
    - [displayY (method)](#displayy-method)
    - [parallaxName (method)](#parallaxname-method)
    - [battleback1Name (method)](#battleback1name-method)
    - [battleback2Name (method)](#battleback2name-method)
    - [requestRefresh (method)](#requestrefresh-method)
    - [isNameDisplayEnabled (method)](#isnamedisplayenabled-method)
    - [disableNameDisplay (method)](#disablenamedisplay-method)
    - [enableNameDisplay (method)](#enablenamedisplay-method)
    - [createVehicles (method)](#createvehicles-method)
    - [refereshVehicles (method)](#refereshvehicles-method)
    - [vehicles (method)](#vehicles-method)
    - [vehicle (method)](#vehicle-method)
    - [boat (method)](#boat-method)
    - [ship (method)](#ship-method)
    - [airship (method)](#airship-method)
    - [setupEvents (method)](#setupevents-method)
    - [events (method)](#events-method)
    - [event (method)](#event-method)
    - [eraseEvent (method)](#eraseevent-method)
    - [autorunCommonEvents (method)](#autoruncommonevents-method)
    - [parallelCommonEvents (method)](#parallelcommonevents-method)
    - [setupScroll (method)](#setupscroll-method)
    - [setupParallax (method)](#setupparallax-method)
    - [setupBattleback (method)](#setupbattleback-method)
    - [setDisplayPos (method)](#setdisplaypos-method)
    - [parallaxOx (method)](#parallaxox-method)
    - [parallaxOy (method)](#parallaxoy-method)
    - [tileset (method)](#tileset-method)
    - [tilesetFlags (method)](#tilesetflags-method)
    - [displayName (method)](#displayname-method)
    - [width (method)](#width-method)
    - [height (method)](#height-method)
    - [data (method)](#data-method)
    - [isLoopHorizontal (method)](#isloophorizontal-method)
    - [isLoopVertical (method)](#isloopvertical-method)
    - [isDashDisabled (method)](#isdashdisabled-method)
    - [encounterList (method)](#encounterlist-method)
    - [encounterStep (method)](#encounterstep-method)
    - [isOverworld (method)](#isoverworld-method)
    - [screenTileX (method)](#screentilex-method)
    - [screenTileY (method)](#screentiley-method)
    - [adjustX (method)](#adjustx-method)
    - [adjustY (method)](#adjusty-method)
    - [roundX (method)](#roundx-method)
    - [roundY (method)](#roundy-method)
    - [xWithDirection (method)](#xwithdirection-method)
    - [yWithDirection (method)](#ywithdirection-method)
    - [roundXWithDirection (method)](#roundxwithdirection-method)
    - [roundYWithDirection (method)](#roundywithdirection-method)
    - [deltaX (method)](#deltax-method)
    - [deltaY (method)](#deltay-method)
    - [distance (method)](#distance-method)
    - [canvasToMapX (method)](#canvastomapx-method)
    - [canvasToMapY (method)](#canvastomapy-method)
    - [autoplay (method)](#autoplay-method)
    - [refreshIfNeeded (method)](#refreshifneeded-method)
    - [refresh (method)](#refresh-method)
    - [refreshTileEvents (method)](#refreshtileevents-method)
    - [eventsXy (method)](#eventsxy-method)
    - [eventsXyNt (method)](#eventsxynt-method)
    - [tileEventsXy (method)](#tileeventsxy-method)
    - [eventIdXy (method)](#eventidxy-method)
    - [scrollDown (method)](#scrolldown-method)
    - [scrollLeft (method)](#scrollleft-method)
    - [scrollRight (method)](#scrollright-method)
    - [scrollUp (method)](#scrollup-method)
    - [isValid (method)](#isvalid-method)
    - [checkPassage (method)](#checkpassage-method)
    - [tileId (method)](#tileid-method)
    - [layeredTiles (method)](#layeredtiles-method)
    - [allTiles (method)](#alltiles-method)
    - [autotileType (method)](#autotiletype-method)
    - [isPassable (method)](#ispassable-method)
    - [isBoatPassable (method)](#isboatpassable-method)
    - [isShipPassable (method)](#isshippassable-method)
    - [isAirshipLandOk (method)](#isairshiplandok-method)
    - [checkLayeredTilesFlags (method)](#checklayeredtilesflags-method)
    - [isLadder (method)](#isladder-method)
    - [isBush (method)](#isbush-method)
    - [isCounter (method)](#iscounter-method)
    - [isDamageFloor (method)](#isdamagefloor-method)
    - [terrainTag (method)](#terraintag-method)
    - [regionId (method)](#regionid-method)
    - [startScroll (method)](#startscroll-method)
    - [isScrolling (method)](#isscrolling-method)
    - [update (method)](#update-method)
    - [updateScroll (method)](#updatescroll-method)
    - [scrollDistance (method)](#scrolldistance-method)
    - [doScroll (method)](#doscroll-method)
    - [updateEvents (method)](#updateevents-method)
    - [updateVehicles (method)](#updatevehicles-method)
    - [updateParallax (method)](#updateparallax-method)
    - [changeTileset (method)](#changetileset-method)
    - [changeBattleback (method)](#changebattleback-method)
    - [changeParallax (method)](#changeparallax-method)
    - [updateInterpreter (method)](#updateinterpreter-method)
    - [unlockEvent (method)](#unlockevent-method)
    - [setupStartingEvent (method)](#setupstartingevent-method)
    - [setupTestEvent (method)](#setuptestevent-method)
    - [setupStartingMapEvent (method)](#setupstartingmapevent-method)
    - [setupAutorunCommonEvent (method)](#setupautoruncommonevent-method)
    - [isAnyEventStarting (method)](#isanyeventstarting-method)
    - [\_interpreter (property)](#_interpreter-property)
    - [\_mapId (property)](#_mapid-property)
    - [\_tilesetId (property)](#_tilesetid-property)
    - [\_events (property)](#_events-property)
    - [\_commonEvents (property)](#_commonevents-property)
    - [\_tileEvents (property)](#_tileevents-property)
    - [\_vehicles (property)](#_vehicles-property)
    - [\_displayX (property)](#_displayx-property)
    - [\_displayY (property)](#_displayy-property)
    - [\_nameDisplay (property)](#_namedisplay-property)
    - [\_scrollDirection (property)](#_scrolldirection-property)
    - [\_scrollRest (property)](#_scrollrest-property)
    - [\_scrollSpeed (property)](#_scrollspeed-property)
    - [\_parallaxName (property)](#_parallaxname-property)
    - [\_parallaxZero (property)](#_parallaxzero-property)
    - [\_parallaxLoopX (property)](#_parallaxloopx-property)
    - [\_parallaxLoopY (property)](#_parallaxloopy-property)
    - [\_parallaxSx (property)](#_parallaxsx-property)
    - [\_parallaxSy (property)](#_parallaxsy-property)
    - [\_parallaxX (property)](#_parallaxx-property)
    - [\_parallaxY (property)](#_parallaxy-property)
    - [\_battleback1Name (property)](#_battleback1name-property)
    - [\_battleback2Name (property)](#_battleback2name-property)
    - [\_needsRefresh (property)](#_needsrefresh-property)

---

# utils

## Game_Map (class)

Game_Map

The game object class for a map. It contains scrolling and passage
// determination functions.

**Signature**

```ts
export declare class Game_Map {
  constructor()
}
```

### setup (method)

**Signature**

```ts
setup(mapId: MapID): void
```

### isEventRunning (method)

**Signature**

```ts
isEventRunning(): boolean
```

### tileWidth (method)

**Signature**

```ts
tileWidth(): number
```

### tileHeight (method)

**Signature**

```ts
tileHeight(): number
```

### bushDepth (method)

**Signature**

```ts
bushDepth(): number
```

### mapId (method)

**Signature**

```ts
mapId(): number
```

### tilesetId (method)

**Signature**

```ts
tilesetId(): number
```

### displayX (method)

**Signature**

```ts
displayX(): number
```

### displayY (method)

**Signature**

```ts
displayY(): number
```

### parallaxName (method)

**Signature**

```ts
parallaxName(): string
```

### battleback1Name (method)

**Signature**

```ts
battleback1Name(): string | null
```

### battleback2Name (method)

**Signature**

```ts
battleback2Name(): string | null
```

### requestRefresh (method)

**Signature**

```ts
requestRefresh(): void
```

### isNameDisplayEnabled (method)

**Signature**

```ts
isNameDisplayEnabled(): boolean
```

### disableNameDisplay (method)

**Signature**

```ts
disableNameDisplay(): void
```

### enableNameDisplay (method)

**Signature**

```ts
enableNameDisplay(): void
```

### createVehicles (method)

**Signature**

```ts
createVehicles(): void
```

### refereshVehicles (method)

**Signature**

```ts
refereshVehicles(): void
```

### vehicles (method)

**Signature**

```ts
vehicles(): Game_Vehicle[]
```

### vehicle (method)

**Signature**

```ts
vehicle(type: number | VehicleType): Game_Vehicle | null
```

### boat (method)

**Signature**

```ts
boat(): Game_Vehicle
```

### ship (method)

**Signature**

```ts
ship(): Game_Vehicle
```

### airship (method)

**Signature**

```ts
airship(): Game_Vehicle
```

### setupEvents (method)

**Signature**

```ts
setupEvents(): void
```

### events (method)

**Signature**

```ts
events(): Game_Event[]
```

### event (method)

**Signature**

```ts
event(eventId: EventID): Game_Event
```

### eraseEvent (method)

**Signature**

```ts
eraseEvent(eventId: EventID): void
```

### autorunCommonEvents (method)

**Signature**

```ts
autorunCommonEvents(): import("../data").DataCommonEvent[]
```

### parallelCommonEvents (method)

**Signature**

```ts
parallelCommonEvents(): import("../data").DataCommonEvent[]
```

### setupScroll (method)

**Signature**

```ts
setupScroll(): void
```

### setupParallax (method)

**Signature**

```ts
setupParallax(): void
```

### setupBattleback (method)

**Signature**

```ts
setupBattleback(): void
```

### setDisplayPos (method)

**Signature**

```ts
setDisplayPos(x: number, y: number): void
```

### parallaxOx (method)

**Signature**

```ts
parallaxOx(): number
```

### parallaxOy (method)

**Signature**

```ts
parallaxOy(): number
```

### tileset (method)

**Signature**

```ts
tileset(): import("../data").DataTileset
```

### tilesetFlags (method)

**Signature**

```ts
tilesetFlags(): number[]
```

### displayName (method)

**Signature**

```ts
displayName(): string
```

### width (method)

**Signature**

```ts
width(): number
```

### height (method)

**Signature**

```ts
height(): number
```

### data (method)

**Signature**

```ts
data(): number[]
```

### isLoopHorizontal (method)

**Signature**

```ts
isLoopHorizontal(): boolean
```

### isLoopVertical (method)

**Signature**

```ts
isLoopVertical(): boolean
```

### isDashDisabled (method)

**Signature**

```ts
isDashDisabled(): boolean
```

### encounterList (method)

**Signature**

```ts
encounterList(): import("../data").DataEncounter[]
```

### encounterStep (method)

**Signature**

```ts
encounterStep(): number
```

### isOverworld (method)

**Signature**

```ts
isOverworld(): boolean
```

### screenTileX (method)

**Signature**

```ts
screenTileX(): number
```

### screenTileY (method)

**Signature**

```ts
screenTileY(): number
```

### adjustX (method)

**Signature**

```ts
adjustX(x: number): number
```

### adjustY (method)

**Signature**

```ts
adjustY(y: number): number
```

### roundX (method)

**Signature**

```ts
roundX(x: number): number
```

### roundY (method)

**Signature**

```ts
roundY(y: number): number
```

### xWithDirection (method)

**Signature**

```ts
xWithDirection(x: number, d: Direction): number
```

### yWithDirection (method)

**Signature**

```ts
yWithDirection(y: number, d: Direction): number
```

### roundXWithDirection (method)

**Signature**

```ts
roundXWithDirection(x: number, d: Direction): number
```

### roundYWithDirection (method)

**Signature**

```ts
roundYWithDirection(y: number, d: Direction): number
```

### deltaX (method)

**Signature**

```ts
deltaX(x1: number, x2: number): number
```

### deltaY (method)

**Signature**

```ts
deltaY(y1: number, y2: number): number
```

### distance (method)

**Signature**

```ts
distance(x1: number, y1: number, x2: number, y2: number): number
```

### canvasToMapX (method)

**Signature**

```ts
canvasToMapX(x: number): number
```

### canvasToMapY (method)

**Signature**

```ts
canvasToMapY(y: number): number
```

### autoplay (method)

**Signature**

```ts
autoplay(): void
```

### refreshIfNeeded (method)

**Signature**

```ts
refreshIfNeeded(): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### refreshTileEvents (method)

**Signature**

```ts
refreshTileEvents(): void
```

### eventsXy (method)

**Signature**

```ts
eventsXy(x: number, y: number): Game_Event[]
```

### eventsXyNt (method)

**Signature**

```ts
eventsXyNt(x: number, y: number): Game_Event[]
```

### tileEventsXy (method)

**Signature**

```ts
tileEventsXy(x: number, y: number): Game_Event[]
```

### eventIdXy (method)

**Signature**

```ts
eventIdXy(x: number, y: number): number
```

### scrollDown (method)

**Signature**

```ts
scrollDown(distance: number): void
```

### scrollLeft (method)

**Signature**

```ts
scrollLeft(distance: number): void
```

### scrollRight (method)

**Signature**

```ts
scrollRight(distance: number): void
```

### scrollUp (method)

**Signature**

```ts
scrollUp(distance: number): void
```

### isValid (method)

**Signature**

```ts
isValid(x: number, y: number): boolean
```

### checkPassage (method)

**Signature**

```ts
checkPassage(x: number, y: number, bit: number): boolean
```

### tileId (method)

**Signature**

```ts
tileId(x: number, y: number, z: number): number
```

### layeredTiles (method)

**Signature**

```ts
layeredTiles(x: number, y: number): number[]
```

### allTiles (method)

**Signature**

```ts
allTiles(x: number, y: number): number[]
```

### autotileType (method)

**Signature**

```ts
autotileType(x: number, y: number, z: number): number
```

### isPassable (method)

**Signature**

```ts
isPassable(x: number, y: number, d: Direction): boolean
```

### isBoatPassable (method)

**Signature**

```ts
isBoatPassable(x: number, y: number): boolean
```

### isShipPassable (method)

**Signature**

```ts
isShipPassable(x: number, y: number): boolean
```

### isAirshipLandOk (method)

**Signature**

```ts
isAirshipLandOk(x: number, y: number): boolean
```

### checkLayeredTilesFlags (method)

**Signature**

```ts
checkLayeredTilesFlags(x: number, y: number, bit: number): boolean
```

### isLadder (method)

**Signature**

```ts
isLadder(x: number, y: number): boolean
```

### isBush (method)

**Signature**

```ts
isBush(x: number, y: number): boolean
```

### isCounter (method)

**Signature**

```ts
isCounter(x: number, y: number): boolean
```

### isDamageFloor (method)

**Signature**

```ts
isDamageFloor(x: number, y: number): boolean
```

### terrainTag (method)

**Signature**

```ts
terrainTag(x: number, y: number): number
```

### regionId (method)

**Signature**

```ts
regionId(x: number, y: number): number
```

### startScroll (method)

**Signature**

```ts
startScroll(direction: Direction, distance: number, speed: number): void
```

### isScrolling (method)

**Signature**

```ts
isScrolling(): boolean
```

### update (method)

**Signature**

```ts
update(sceneActive: boolean): void
```

### updateScroll (method)

**Signature**

```ts
updateScroll(): void
```

### scrollDistance (method)

**Signature**

```ts
scrollDistance(): number
```

### doScroll (method)

**Signature**

```ts
doScroll(direction: Direction, distance: number): void
```

### updateEvents (method)

**Signature**

```ts
updateEvents(): void
```

### updateVehicles (method)

**Signature**

```ts
updateVehicles(): void
```

### updateParallax (method)

**Signature**

```ts
updateParallax(): void
```

### changeTileset (method)

**Signature**

```ts
changeTileset(tilesetId: number): void
```

### changeBattleback (method)

**Signature**

```ts
changeBattleback(battleback1Name: string | null, battleback2Name: string | null): void
```

### changeParallax (method)

**Signature**

```ts
changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void
```

### updateInterpreter (method)

**Signature**

```ts
updateInterpreter(): void
```

### unlockEvent (method)

**Signature**

```ts
unlockEvent(eventId: EventID): void
```

### setupStartingEvent (method)

**Signature**

```ts
setupStartingEvent(): boolean
```

### setupTestEvent (method)

**Signature**

```ts
setupTestEvent(): boolean
```

### setupStartingMapEvent (method)

**Signature**

```ts
setupStartingMapEvent(): boolean
```

### setupAutorunCommonEvent (method)

**Signature**

```ts
setupAutorunCommonEvent(): boolean
```

### isAnyEventStarting (method)

**Signature**

```ts
isAnyEventStarting(): boolean
```

### \_interpreter (property)

**Signature**

```ts
_interpreter: Game_Interpreter
```

### \_mapId (property)

**Signature**

```ts
_mapId: number
```

### \_tilesetId (property)

**Signature**

```ts
_tilesetId: number
```

### \_events (property)

**Signature**

```ts
_events: Game_Event[]
```

### \_commonEvents (property)

**Signature**

```ts
_commonEvents: Game_CommonEvent[]
```

### \_tileEvents (property)

**Signature**

```ts
_tileEvents: Game_Event[]
```

### \_vehicles (property)

**Signature**

```ts
_vehicles: Game_Vehicle[]
```

### \_displayX (property)

**Signature**

```ts
_displayX: number
```

### \_displayY (property)

**Signature**

```ts
_displayY: number
```

### \_nameDisplay (property)

**Signature**

```ts
_nameDisplay: boolean
```

### \_scrollDirection (property)

**Signature**

```ts
_scrollDirection: Direction
```

### \_scrollRest (property)

**Signature**

```ts
_scrollRest: number
```

### \_scrollSpeed (property)

**Signature**

```ts
_scrollSpeed: number
```

### \_parallaxName (property)

**Signature**

```ts
_parallaxName: string
```

### \_parallaxZero (property)

**Signature**

```ts
_parallaxZero: boolean
```

### \_parallaxLoopX (property)

**Signature**

```ts
_parallaxLoopX: boolean
```

### \_parallaxLoopY (property)

**Signature**

```ts
_parallaxLoopY: boolean
```

### \_parallaxSx (property)

**Signature**

```ts
_parallaxSx: number
```

### \_parallaxSy (property)

**Signature**

```ts
_parallaxSy: number
```

### \_parallaxX (property)

**Signature**

```ts
_parallaxX: number
```

### \_parallaxY (property)

**Signature**

```ts
_parallaxY: number
```

### \_battleback1Name (property)

**Signature**

```ts
_battleback1Name: string | null
```

### \_battleback2Name (property)

**Signature**

```ts
_battleback2Name: string | null
```

### \_needsRefresh (property)

**Signature**

```ts
_needsRefresh: boolean
```
