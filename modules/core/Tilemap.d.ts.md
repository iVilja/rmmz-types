---
title: core/Tilemap.d.ts
nav_order: 13
parent: Modules
---

## Tilemap.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Tilemap (class)](#tilemap-class)
    - [isVisibleTile (static method)](#isvisibletile-static-method)
    - [isAutotile (static method)](#isautotile-static-method)
    - [getAutotileKind (static method)](#getautotilekind-static-method)
    - [getAutotileShape (static method)](#getautotileshape-static-method)
    - [makeAutotileId (static method)](#makeautotileid-static-method)
    - [isSameKindTile (static method)](#issamekindtile-static-method)
    - [isTileA1 (static method)](#istilea1-static-method)
    - [isTileA2 (static method)](#istilea2-static-method)
    - [isTileA3 (static method)](#istilea3-static-method)
    - [isTileA4 (static method)](#istilea4-static-method)
    - [isTileA5 (static method)](#istilea5-static-method)
    - [isWaterTile (static method)](#iswatertile-static-method)
    - [isWaterfallTile (static method)](#iswaterfalltile-static-method)
    - [isGroundTile (static method)](#isgroundtile-static-method)
    - [isShadowingTile (static method)](#isshadowingtile-static-method)
    - [isRoofTile (static method)](#isrooftile-static-method)
    - [isWallTopTile (static method)](#iswalltoptile-static-method)
    - [isWallSideTile (static method)](#iswallsidetile-static-method)
    - [isWallTile (static method)](#iswalltile-static-method)
    - [isFloorTypeAutotile (static method)](#isfloortypeautotile-static-method)
    - [isWallTypeAutotile (static method)](#iswalltypeautotile-static-method)
    - [isWaterfallTypeAutotile (static method)](#iswaterfalltypeautotile-static-method)
    - [destroy (method)](#destroy-method)
    - [setData (method)](#setdata-method)
    - [isReady (method)](#isready-method)
    - [update (method)](#update-method)
    - [setBitmaps (method)](#setbitmaps-method)
    - [refresh (method)](#refresh-method)
    - [updateTransform (method)](#updatetransform-method)
    - [\_createLayers (method)](#_createlayers-method)
    - [\_updateBitmaps (method)](#_updatebitmaps-method)
    - [\_addAllSpots (method)](#_addallspots-method)
    - [\_addSpot (method)](#_addspot-method)
    - [\_addSpotTile (method)](#_addspottile-method)
    - [\_addTile (method)](#_addtile-method)
    - [\_addNormalTile (method)](#_addnormaltile-method)
    - [\_addAutotile (method)](#_addautotile-method)
    - [\_addTableEdge (method)](#_addtableedge-method)
    - [\_addShadow (method)](#_addshadow-method)
    - [\_readMapData (method)](#_readmapdata-method)
    - [\_isHigherTile (method)](#_ishighertile-method)
    - [\_isTableTile (method)](#_istabletile-method)
    - [\_isOverpassPosition (method)](#_isoverpassposition-method)
    - [\_sortChildren (method)](#_sortchildren-method)
    - [\_compareChildOrder (method)](#_comparechildorder-method)
    - [\_width (property)](#_width-property)
    - [\_height (property)](#_height-property)
    - [\_margin (property)](#_margin-property)
    - [\_mapWidth (property)](#_mapwidth-property)
    - [\_mapHeight (property)](#_mapheight-property)
    - [\_mapData (property)](#_mapdata-property)
    - [\_bitmaps (property)](#_bitmaps-property)
    - [\_needsBitmapsUpdate (property)](#_needsbitmapsupdate-property)
    - [\_needsRepaint (property)](#_needsrepaint-property)
    - [\_lowerLayer (property)](#_lowerlayer-property)
    - [\_upperLayer (property)](#_upperlayer-property)
    - [animationFrame (property)](#animationframe-property)
    - [\_lastAnimationFrame (property)](#_lastanimationframe-property)
    - [\_lastStartX (property)](#_laststartx-property)
    - [\_lastStartY (property)](#_laststarty-property)
    - [tileWidth (property)](#tilewidth-property)
    - [tileHeight (property)](#tileheight-property)
    - [origin (property)](#origin-property)
    - [flags (property)](#flags-property)
    - [animationCount (property)](#animationcount-property)
    - [horizontalWrap (property)](#horizontalwrap-property)
    - [verticalWrap (property)](#verticalwrap-property)

---

# utils

## Tilemap (class)

The tilemap which displays 2D tile-based game map.

**Signature**

```ts
export declare class Tilemap {
  constructor()
}
```

### isVisibleTile (static method)

**Signature**

```ts
static isVisibleTile(tileId: TileID): boolean
```

### isAutotile (static method)

**Signature**

```ts
static isAutotile(tileId: TileID): boolean
```

### getAutotileKind (static method)

**Signature**

```ts
static getAutotileKind(tileId: TileID): number
```

### getAutotileShape (static method)

**Signature**

```ts
static getAutotileShape(tileId: TileID): number
```

### makeAutotileId (static method)

**Signature**

```ts
static makeAutotileId(kind: number, shape: number): number
```

### isSameKindTile (static method)

**Signature**

```ts
static isSameKindTile(tileID1: number, tileID2: number): boolean
```

### isTileA1 (static method)

**Signature**

```ts
static isTileA1(tileId: TileID): boolean
```

### isTileA2 (static method)

**Signature**

```ts
static isTileA2(tileId: TileID): boolean
```

### isTileA3 (static method)

**Signature**

```ts
static isTileA3(tileId: TileID): boolean
```

### isTileA4 (static method)

**Signature**

```ts
static isTileA4(tileId: TileID): boolean
```

### isTileA5 (static method)

**Signature**

```ts
static isTileA5(tileId: TileID): boolean
```

### isWaterTile (static method)

**Signature**

```ts
static isWaterTile(tileId: TileID): boolean
```

### isWaterfallTile (static method)

**Signature**

```ts
static isWaterfallTile(tileId: TileID): boolean
```

### isGroundTile (static method)

**Signature**

```ts
static isGroundTile(tileId: TileID): boolean
```

### isShadowingTile (static method)

**Signature**

```ts
static isShadowingTile(tileId: TileID): boolean
```

### isRoofTile (static method)

**Signature**

```ts
static isRoofTile(tileId: TileID): boolean
```

### isWallTopTile (static method)

**Signature**

```ts
static isWallTopTile(tileId: TileID): boolean
```

### isWallSideTile (static method)

**Signature**

```ts
static isWallSideTile(tileId: TileID): boolean
```

### isWallTile (static method)

**Signature**

```ts
static isWallTile(tileId: TileID): boolean
```

### isFloorTypeAutotile (static method)

**Signature**

```ts
static isFloorTypeAutotile(tileId: TileID): boolean
```

### isWallTypeAutotile (static method)

**Signature**

```ts
static isWallTypeAutotile(tileId: TileID): boolean
```

### isWaterfallTypeAutotile (static method)

**Signature**

```ts
static isWaterfallTypeAutotile(tileId: TileID): boolean
```

### destroy (method)

Destroys the tilemap.

**Signature**

```ts
destroy(): void
```

### setData (method)

Sets the tilemap data.

**Signature**

```ts
setData(width: number, height: number, data: number[]): void
```

### isReady (method)

Checks whether the tileset is ready to render.

**Signature**

```ts
isReady(): boolean
```

### update (method)

Updates the tilemap for each frame.

**Signature**

```ts
update(): void
```

### setBitmaps (method)

Sets the bitmaps used as a tileset.

**Signature**

```ts
setBitmaps(bitmaps: Bitmap[]): void
```

### refresh (method)

Forces to repaint the entire tilemap.

**Signature**

```ts
refresh(): void
```

### updateTransform (method)

Updates the transform on all children of this container for rendering.

**Signature**

```ts
updateTransform(): void
```

### \_createLayers (method)

**Signature**

```ts
_createLayers(): void
```

### \_updateBitmaps (method)

**Signature**

```ts
_updateBitmaps(): void
```

### \_addAllSpots (method)

**Signature**

```ts
_addAllSpots(startX: number, startY: number): void
```

### \_addSpot (method)

**Signature**

```ts
_addSpot(startX: number, startY: number, x: number, y: number): void
```

### \_addSpotTile (method)

**Signature**

```ts
_addSpotTile(tileId: TileID, dx: number, dy: number): void
```

### \_addTile (method)

**Signature**

```ts
_addTile(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void
```

### \_addNormalTile (method)

**Signature**

```ts
_addNormalTile(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void
```

### \_addAutotile (method)

**Signature**

```ts
_addAutotile(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void
```

### \_addTableEdge (method)

**Signature**

```ts
_addTableEdge(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void
```

### \_addShadow (method)

**Signature**

```ts
_addShadow(layer: Tilemap.Layer, shadowBits: number, dx: number, dy: number): void
```

### \_readMapData (method)

**Signature**

```ts
_readMapData(x: number, y: number, z: number): number
```

### \_isHigherTile (method)

**Signature**

```ts
_isHigherTile(tileId: TileID): boolean
```

### \_isTableTile (method)

**Signature**

```ts
_isTableTile(tileId: TileID): boolean
```

### \_isOverpassPosition (method)

**Signature**

```ts
_isOverpassPosition(_mx?: number, _my?: number): boolean
```

### \_sortChildren (method)

**Signature**

```ts
_sortChildren(): void
```

### \_compareChildOrder (method)

**Signature**

```ts
_compareChildOrder(a: Sprite, b: Sprite): number
```

### \_width (property)

**Signature**

```ts
_width: number
```

### \_height (property)

**Signature**

```ts
_height: number
```

### \_margin (property)

**Signature**

```ts
_margin: number
```

### \_mapWidth (property)

**Signature**

```ts
_mapWidth: number
```

### \_mapHeight (property)

**Signature**

```ts
_mapHeight: number
```

### \_mapData (property)

**Signature**

```ts
_mapData: number[] | null
```

### \_bitmaps (property)

**Signature**

```ts
_bitmaps: Bitmap[]
```

### \_needsBitmapsUpdate (property)

**Signature**

```ts
_needsBitmapsUpdate: boolean
```

### \_needsRepaint (property)

**Signature**

```ts
_needsRepaint: boolean
```

### \_lowerLayer (property)

**Signature**

```ts
_lowerLayer: Tilemap.Layer
```

### \_upperLayer (property)

**Signature**

```ts
_upperLayer: Tilemap.Layer
```

### animationFrame (property)

**Signature**

```ts
animationFrame: number
```

### \_lastAnimationFrame (property)

**Signature**

```ts
_lastAnimationFrame: number
```

### \_lastStartX (property)

**Signature**

```ts
_lastStartX: number
```

### \_lastStartY (property)

**Signature**

```ts
_lastStartY: number
```

### tileWidth (property)

The width of each tile.

**Signature**

```ts
tileWidth: number
```

### tileHeight (property)

The height of each tile.

**Signature**

```ts
tileHeight: number
```

### origin (property)

The origin point of the tilemap for scrolling.

**Signature**

```ts
origin: Point
```

### flags (property)

The tileset flags.

**Signature**

```ts
flags: number[]
```

### animationCount (property)

The animation count for autotiles.

**Signature**

```ts
animationCount: number
```

### horizontalWrap (property)

Whether the tilemap loops horizontal.

**Signature**

```ts
horizontalWrap: boolean
```

### verticalWrap (property)

Whether the tilemap loops vertical.

**Signature**

```ts
verticalWrap: boolean
```
