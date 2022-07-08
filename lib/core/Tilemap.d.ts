/// <reference types="@pixi/core" />
import { TileID } from "../data";
import { PIXI } from "../externals";
import { Bitmap } from "./Bitmap";
import { Point } from "./Point";
import { Sprite } from "./Sprite";
declare type RmmzImage = HTMLImageElement | HTMLCanvasElement;
/**
 * The tilemap which displays 2D tile-based game map.
 *
 * @class
 * @extends PIXI.Container
 */
export declare class Tilemap extends PIXI.Container {
    _width: number;
    _height: number;
    _margin: number;
    _mapWidth: number;
    _mapHeight: number;
    _mapData: number[] | null;
    _bitmaps: Bitmap[];
    _needsBitmapsUpdate: boolean;
    _needsRepaint: boolean;
    _lowerLayer: Tilemap.Layer;
    _upperLayer: Tilemap.Layer;
    animationFrame: number;
    _lastAnimationFrame: number;
    _lastStartX: number;
    _lastStartY: number;
    /**
     * The width of each tile.
     *
     * @type number
     */
    tileWidth: number;
    /**
     * The height of each tile.
     *
     * @type number
     */
    tileHeight: number;
    /**
     * The origin point of the tilemap for scrolling.
     *
     * @type Point
     */
    origin: Point;
    /**
     * The tileset flags.
     *
     * @type array
     */
    flags: number[];
    /**
     * The animation count for autotiles.
     *
     * @type number
     */
    animationCount: number;
    /**
     * Whether the tilemap loops horizontal.
     *
     * @type boolean
     */
    horizontalWrap: boolean;
    /**
     * Whether the tilemap loops vertical.
     *
     * @type boolean
     */
    verticalWrap: boolean;
    constructor();
    /**
     * The width of the tilemap.
     *
     * @type number
     * @name Tilemap#width
     */
    get width(): number;
    set width(value: number);
    /**
     * The height of the tilemap.
     *
     * @type number
     * @name Tilemap#height
     */
    get height(): number;
    set height(value: number);
    /**
     * Destroys the tilemap.
     */
    destroy(): void;
    /**
     * Sets the tilemap data.
     *
     * @param {number} width - The width of the map in number of tiles.
     * @param {number} height - The height of the map in number of tiles.
     * @param {array} data - The one dimensional array for the map data.
     */
    setData(width: number, height: number, data: number[]): void;
    /**
     * Checks whether the tileset is ready to render.
     *
     * @type boolean
     * @returns {boolean} True if the tilemap is ready.
     */
    isReady(): boolean;
    /**
     * Updates the tilemap for each frame.
     */
    update(): void;
    /**
     * Sets the bitmaps used as a tileset.
     *
     * @param {array} bitmaps - The array of the tileset bitmaps.
     */
    setBitmaps(bitmaps: Bitmap[]): void;
    /**
     * Forces to repaint the entire tilemap.
     */
    refresh(): void;
    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform(): void;
    _createLayers(): void;
    _updateBitmaps(): void;
    _addAllSpots(startX: number, startY: number): void;
    _addSpot(startX: number, startY: number, x: number, y: number): void;
    _addSpotTile(tileId: TileID, dx: number, dy: number): void;
    _addTile(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void;
    _addNormalTile(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void;
    _addAutotile(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void;
    _addTableEdge(layer: Tilemap.Layer, tileId: TileID, dx: number, dy: number): void;
    _addShadow(layer: Tilemap.Layer, shadowBits: number, dx: number, dy: number): void;
    _readMapData(x: number, y: number, z: number): number;
    _isHigherTile(tileId: TileID): boolean;
    _isTableTile(tileId: TileID): boolean;
    _isOverpassPosition(_mx?: number, _my?: number): boolean;
    _sortChildren(): void;
    _compareChildOrder(a: Sprite, b: Sprite): number;
    static readonly TILE_ID_B = 0;
    static readonly TILE_ID_C = 256;
    static readonly TILE_ID_D = 512;
    static readonly TILE_ID_E = 768;
    static readonly TILE_ID_A5 = 1536;
    static readonly TILE_ID_A1 = 2048;
    static readonly TILE_ID_A2 = 2816;
    static readonly TILE_ID_A3 = 4352;
    static readonly TILE_ID_A4 = 5888;
    static readonly TILE_ID_MAX = 8192;
    static isVisibleTile(tileId: TileID): boolean;
    static isAutotile(tileId: TileID): boolean;
    static getAutotileKind(tileId: TileID): number;
    static getAutotileShape(tileId: TileID): number;
    static makeAutotileId(kind: number, shape: number): number;
    static isSameKindTile(tileID1: number, tileID2: number): boolean;
    static isTileA1(tileId: TileID): boolean;
    static isTileA2(tileId: TileID): boolean;
    static isTileA3(tileId: TileID): boolean;
    static isTileA4(tileId: TileID): boolean;
    static isTileA5(tileId: TileID): boolean;
    static isWaterTile(tileId: TileID): boolean;
    static isWaterfallTile(tileId: TileID): boolean;
    static isGroundTile(tileId: TileID): boolean;
    static isShadowingTile(tileId: TileID): boolean;
    static isRoofTile(tileId: TileID): boolean;
    static isWallTopTile(tileId: TileID): boolean;
    static isWallSideTile(tileId: TileID): boolean;
    static isWallTile(tileId: TileID): boolean;
    static isFloorTypeAutotile(tileId: TileID): boolean;
    static isWallTypeAutotile(tileId: TileID): boolean;
    static isWaterfallTypeAutotile(tileId: TileID): boolean;
    static readonly FLOOR_AUTOTILE_TABLE: number[][][];
    static readonly WALL_AUTOTILE_TABLE: number[][][];
    static readonly WATERFALL_AUTOTILE_TABLE: number[][][];
}
export declare namespace Tilemap {
    class Layer extends PIXI.Container {
        _elements: Array<[number, number, number, number, number, number, number]>;
        _indexBuffer: PIXI.Buffer | null;
        _indexArray: Float32Array;
        _vertexBuffer: PIXI.Buffer | null;
        _vertexArray: Float32Array;
        _vao: PIXI.Geometry | null;
        _needsTexturesUpdate: boolean;
        _needsVertexUpdate: boolean;
        _images: RmmzImage[];
        _state: PIXI.State;
        z: number;
        constructor();
        static readonly MAX_GL_TEXTURES = 3;
        static readonly VERTEX_STRIDE: number;
        destroy(): void;
        setBitmaps(bitmaps: Bitmap[]): void;
        clear(): void;
        addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void;
        render(renderer: PIXI.Renderer): void;
        isReady(): boolean;
        _createVao(): void;
        _updateIndexBuffer(): void;
        _updateVertexBuffer(): void;
    }
    class Renderer extends PIXI.ObjectRenderer {
        _shader: PIXI.Shader | null;
        _images: never[];
        _internalTextures: PIXI.BaseRenderTexture[];
        _clearBuffer: Uint8Array;
        constructor(renderer: PIXI.Renderer);
        destroy(): void;
        getShader(): PIXI.Shader | null;
        contextChange(): void;
        _createShader(): PIXI.Shader;
        _createInternalTextures(): void;
        _destroyInternalTextures(): void;
        updateTextures(renderer: PIXI.Renderer, images: RmmzImage[]): void;
        bindTextures(renderer: PIXI.Renderer): void;
    }
}
export {};
