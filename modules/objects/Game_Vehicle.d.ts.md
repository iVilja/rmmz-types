---
title: objects/Game_Vehicle.d.ts
nav_order: 93
parent: Modules
---

## Game_Vehicle.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Vehicle (class)](#game_vehicle-class)
    - [initMembers (method)](#initmembers-method)
    - [isBoat (method)](#isboat-method)
    - [isShip (method)](#isship-method)
    - [isAirship (method)](#isairship-method)
    - [resetDirection (method)](#resetdirection-method)
    - [initMoveSpeed (method)](#initmovespeed-method)
    - [vehicle (method)](#vehicle-method)
    - [loadSystemSettings (method)](#loadsystemsettings-method)
    - [refresh (method)](#refresh-method)
    - [setLocation (method)](#setlocation-method)
    - [pos (method)](#pos-method)
    - [isMapPassable (method)](#ismappassable-method)
    - [getOn (method)](#geton-method)
    - [getOff (method)](#getoff-method)
    - [setBgm (method)](#setbgm-method)
    - [playBgm (method)](#playbgm-method)
    - [syncWithPlayer (method)](#syncwithplayer-method)
    - [screenY (method)](#screeny-method)
    - [shadowX (method)](#shadowx-method)
    - [shadowY (method)](#shadowy-method)
    - [shadowOpacity (method)](#shadowopacity-method)
    - [canMove (method)](#canmove-method)
    - [update (method)](#update-method)
    - [updateAirship (method)](#updateairship-method)
    - [updateAirshipAltitude (method)](#updateairshipaltitude-method)
    - [maxAltitude (method)](#maxaltitude-method)
    - [isLowest (method)](#islowest-method)
    - [isHighest (method)](#ishighest-method)
    - [isTakeoffOk (method)](#istakeoffok-method)
    - [isLandOk (method)](#islandok-method)
    - [\_type (property)](#_type-property)
    - [\_mapId (property)](#_mapid-property)
    - [\_altitude (property)](#_altitude-property)
    - [\_driving (property)](#_driving-property)
    - [\_bgm (property)](#_bgm-property)

---

# utils

## Game_Vehicle (class)

Game_Vehicle

The game object class for a vehicle.

**Signature**

```ts
export declare class Game_Vehicle {
  constructor(type: VehicleType)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### isBoat (method)

**Signature**

```ts
isBoat(): boolean
```

### isShip (method)

**Signature**

```ts
isShip(): boolean
```

### isAirship (method)

**Signature**

```ts
isAirship(): boolean
```

### resetDirection (method)

**Signature**

```ts
resetDirection(): void
```

### initMoveSpeed (method)

**Signature**

```ts
initMoveSpeed(): void
```

### vehicle (method)

**Signature**

```ts
vehicle(): import("../data").DataVehicle | null
```

### loadSystemSettings (method)

**Signature**

```ts
loadSystemSettings(): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### setLocation (method)

**Signature**

```ts
setLocation(mapId: MapID, x: number, y: number): void
```

### pos (method)

**Signature**

```ts
pos(x: number, y: number): boolean
```

### isMapPassable (method)

**Signature**

```ts
isMapPassable(x: number, y: number, d: Direction): boolean
```

### getOn (method)

**Signature**

```ts
getOn(): void
```

### getOff (method)

**Signature**

```ts
getOff(): void
```

### setBgm (method)

**Signature**

```ts
setBgm(bgm: DataAudio): void
```

### playBgm (method)

**Signature**

```ts
playBgm(): void
```

### syncWithPlayer (method)

**Signature**

```ts
syncWithPlayer(): void
```

### screenY (method)

**Signature**

```ts
screenY(): number
```

### shadowX (method)

**Signature**

```ts
shadowX(): number
```

### shadowY (method)

**Signature**

```ts
shadowY(): number
```

### shadowOpacity (method)

**Signature**

```ts
shadowOpacity(): number
```

### canMove (method)

**Signature**

```ts
canMove(): boolean
```

### update (method)

**Signature**

```ts
update(): void
```

### updateAirship (method)

**Signature**

```ts
updateAirship(): void
```

### updateAirshipAltitude (method)

**Signature**

```ts
updateAirshipAltitude(): void
```

### maxAltitude (method)

**Signature**

```ts
maxAltitude(): number
```

### isLowest (method)

**Signature**

```ts
isLowest(): boolean
```

### isHighest (method)

**Signature**

```ts
isHighest(): boolean
```

### isTakeoffOk (method)

**Signature**

```ts
isTakeoffOk(): boolean
```

### isLandOk (method)

**Signature**

```ts
isLandOk(x: number, y: number, d: Direction): boolean
```

### \_type (property)

**Signature**

```ts
_type: VehicleType
```

### \_mapId (property)

**Signature**

```ts
_mapId: number
```

### \_altitude (property)

**Signature**

```ts
_altitude: number
```

### \_driving (property)

**Signature**

```ts
_driving: boolean
```

### \_bgm (property)

**Signature**

```ts
_bgm: DataAudio | null
```
