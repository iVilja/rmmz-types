---
title: data/maps.d.ts
nav_order: 34
parent: Modules
---

## maps.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataEncounter (interface)](#dataencounter-interface)
  - [DataMap (interface)](#datamap-interface)
  - [DataMapInfo (interface)](#datamapinfo-interface)

---

# utils

## DataEncounter (interface)

**Signature**

```ts
export interface DataEncounter {
  troopId: TroopID
  regionSet: [number?, number?, number?]
  weight: number
}
```

## DataMap (interface)

**Signature**

```ts
export interface DataMap {
  autoplayBgm: boolean
  autoplayBgs: boolean
  battleback1Name: string
  battleback2Name: string
  bgm: DataAudio
  bgs: DataAudio
  disableDashing: boolean
  displayName: string
  encounterList: DataEncounter[]
  encounterStep: number
  height: number
  note: string
  parallaxLoopX: boolean
  parallaxLoopY: boolean
  parallaxName: string
  parallaxShow: boolean
  parallaxSx: number
  parallaxSy: number
  scrollType: number
  specifyBattleback: boolean
  tilesetId: TilesetID
  width: number
  data: number[]
  events: Array<DataEvent>
  meta: Meta
}
```

## DataMapInfo (interface)

**Signature**

```ts
export interface DataMapInfo {
  id: number
  expanded: boolean
  name: string
  order: number
  parentId: MapID
  scrollX: number
  scrollY: number
}
```
