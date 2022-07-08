import { Color } from "../data";
import { PIXI } from "../externals";
import { Bitmap } from "./Bitmap";
import { ColorFilter } from "./ColorFilter";
import { Rectangle } from "./Rectangle";
/**
 * The basic object that is rendered to the game screen.
 *
 * @class
 * @extends PIXI.Sprite
 * @param {Bitmap} bitmap - The image for the sprite.
 */
export declare class Sprite<T extends Bitmap | null = Bitmap> extends PIXI.Sprite {
    static _emptyBaseTexture: PIXI.BaseTexture | undefined;
    static _counter: number;
    _refreshFrame: boolean;
    constructor(bitmap?: Bitmap);
    spriteId: number;
    _bitmap: T;
    _frame: Rectangle;
    _hue: number;
    _blendColor: Color;
    _colorTone: Color;
    _colorFilter: ColorFilter | null;
    _blendMode: PIXI.BLEND_MODES;
    _hidden: boolean;
    /**
     * The image for the sprite.
     *
     * @type Bitmap
     * @name Sprite#bitmap
     */
    get bitmap(): T;
    set bitmap(value: T);
    /**
     * The width of the sprite without the scale.
     *
     * @type number
     * @name Sprite#width
     */
    get width(): number;
    set width(value: number);
    /**
     * The height of the sprite without the scale.
     *
     * @type number
     * @name Sprite#height
     */
    get height(): number;
    set height(value: number);
    /**
     * The opacity of the sprite (0 to 255).
     *
     * @type number
     * @name Sprite#opacity
     */
    get opacity(): number;
    set opacity(value: number);
    /**
     * The blend mode to be applied to the sprite.
     *
     * @type number
     * @name Sprite#blendMode
     */
    get blendMode(): PIXI.BLEND_MODES;
    set blendMode(value: PIXI.BLEND_MODES);
    /**
     * Destroys the sprite.
     */
    destroy(_options?: PIXI.IDestroyOptions | boolean): void;
    /**
     * Updates the sprite for each frame.
     */
    update(): void;
    /**
     * Makes the sprite "hidden".
     */
    hide(): void;
    /**
     * Releases the "hidden" state of the sprite.
     */
    show(): void;
    /**
     * Reflects the "hidden" state of the sprite to the visible state.
     */
    updateVisibility(): void;
    /**
     * Sets the x and y at once.
     *
     * @param {number} x - The x coordinate of the sprite.
     * @param {number} y - The y coordinate of the sprite.
     */
    move(x: number, y: number): void;
    /**
     * Sets the rectagle of the bitmap that the sprite displays.
     *
     * @param {number} x - The x coordinate of the frame.
     * @param {number} y - The y coordinate of the frame.
     * @param {number} width - The width of the frame.
     * @param {number} height - The height of the frame.
     */
    setFrame(x: number, y: number, width: number, height: number): void;
    /**
     * Sets the hue rotation value.
     *
     * @param {number} hue - The hue value (-360, 360).
     */
    setHue(hue: number): void;
    /**
     * Gets the blend color for the sprite.
     *
     * @returns {array} The blend color [r, g, b, a].
     */
    getBlendColor(): [number, number, number, number];
    /**
     * Sets the blend color for the sprite.
     *
     * @param {array} color - The blend color [r, g, b, a].
     */
    setBlendColor(color: Color): void;
    /**
     * Gets the color tone for the sprite.
     *
     * @returns {array} The color tone [r, g, b, gray].
     */
    getColorTone(): [number, number, number, number];
    /**
     * Sets the color tone for the sprite.
     *
     * @param {array} tone - The color tone [r, g, b, gray].
     */
    setColorTone(tone: Color): void;
    _onBitmapChange(): void;
    _onBitmapLoad(bitmapLoaded: Bitmap): void;
    _refresh(): void;
    _createColorFilter(): void;
    _updateColorFilter(): void;
    private _z;
    get z(): number;
    set z(value: number);
    private _ry;
    get ry(): number;
    set ry(value: number);
    private _dy;
    get dy(): number;
    set dy(value: number);
}
