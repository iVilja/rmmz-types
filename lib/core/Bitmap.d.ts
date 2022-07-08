import { PIXI } from "../externals";
import { Rectangle } from "./Rectangle";
import { Stage } from "./Stage";
/**
 * The basic object that represents an image.
 *
 * @class
 * @param {number} width - The width of the bitmap.
 * @param {number} height - The height of the bitmap.
 */
export declare class Bitmap {
    _canvas: HTMLCanvasElement | null;
    _context: CanvasRenderingContext2D | null;
    _baseTexture: PIXI.BaseTexture | null;
    _image: HTMLImageElement | null;
    _url: string;
    _paintOpacity: number;
    _smooth: boolean;
    _loadListeners: Array<(bitmap: Bitmap) => void>;
    _loadingState: string;
    /**
     * The face name of the font.
     *
     * @type string
     */
    fontFace: string;
    /**
     * The size of the font in pixels.
     *
     * @type number
     */
    fontSize: number;
    /**
     * Whether the font is bold.
     *
     * @type boolean
     */
    fontBold: boolean;
    /**
     * Whether the font is italic.
     *
     * @type boolean
     */
    fontItalic: boolean;
    /**
     * The color of the text in CSS format.
     *
     * @type string
     */
    textColor: string;
    /**
     * The color of the outline of the text in CSS format.
     *
     * @type string
     */
    outlineColor: string;
    /**
     * The width of the outline of the text.
     *
     * @type number
     */
    outlineWidth: number;
    constructor(width?: number, height?: number);
    /**
     * Loads a image file.
     *
     * @param {string} url - The image url of the texture.
     * @returns {Bitmap} The new bitmap object.
     */
    static load(url: string): Bitmap;
    /**
     * Takes a snapshot of the game screen.
     *
     * @param {Stage} stage - The stage object.
     * @returns {Bitmap} The new bitmap object.
     */
    static snap(stage: Stage): Bitmap;
    /**
     * Checks whether the bitmap is ready to render.
     *
     * @returns {boolean} True if the bitmap is ready to render.
     */
    isReady(): boolean;
    /**
     * Checks whether a loading error has occurred.
     *
     * @returns {boolean} True if a loading error has occurred.
     */
    isError(): boolean;
    /**
     * The url of the image file.
     *
     * @readonly
     * @type string
     * @name Bitmap#url
     */
    get url(): string;
    /**
     * The base texture that holds the image.
     *
     * @readonly
     * @type PIXI.BaseTexture
     * @name Bitmap#baseTexture
     */
    get baseTexture(): PIXI.BaseTexture<PIXI.Resource, PIXI.IAutoDetectOptions>;
    /**
     * The bitmap image.
     *
     * @readonly
     * @type HTMLImageElement
     * @name Bitmap#image
     */
    get image(): HTMLImageElement | null;
    /**
     * The bitmap canvas.
     *
     * @readonly
     * @type HTMLCanvasElement
     * @name Bitmap#canvas
     */
    get canvas(): HTMLCanvasElement;
    /**
     * The 2d context of the bitmap canvas.
     *
     * @readonly
     * @type CanvasRenderingContext2D
     * @name Bitmap#context
     */
    get context(): CanvasRenderingContext2D;
    /**
     * The width of the bitmap.
     *
     * @readonly
     * @type number
     * @name Bitmap#width
     */
    get width(): number;
    /**
     * The height of the bitmap.
     *
     * @readonly
     * @type number
     * @name Bitmap#height
     */
    get height(): number;
    /**
     * The rectangle of the bitmap.
     *
     * @readonly
     * @type Rectangle
     * @name Bitmap#rect
     */
    get rect(): Rectangle;
    /**
     * Whether the smooth scaling is applied.
     *
     * @type boolean
     * @name Bitmap#smooth
     */
    get smooth(): boolean;
    set smooth(value: boolean);
    /**
     * The opacity of the drawing object in the range (0, 255).
     *
     * @type number
     * @name Bitmap#paintOpacity
     */
    get paintOpacity(): number;
    set paintOpacity(value: number);
    /**
     * Destroys the bitmap.
     */
    destroy(): void;
    /**
     * Resizes the bitmap.
     *
     * @param {number} width - The new width of the bitmap.
     * @param {number} height - The new height of the bitmap.
     */
    resize(width: number, height: number): void;
    /**
     * Performs a block transfer.
     *
     * @param {Bitmap} source - The bitmap to draw.
     * @param {number} sx - The x coordinate in the source.
     * @param {number} sy - The y coordinate in the source.
     * @param {number} sw - The width of the source image.
     * @param {number} sh - The height of the source image.
     * @param {number} dx - The x coordinate in the destination.
     * @param {number} dy - The y coordinate in the destination.
     * @param {number} [dw=sw] The width to draw the image in the destination.
     * @param {number} [dh=sh] The height to draw the image in the destination.
     */
    blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void;
    /**
     * Returns pixel color at the specified point.
     *
     * @param {number} x - The x coordinate of the pixel in the bitmap.
     * @param {number} y - The y coordinate of the pixel in the bitmap.
     * @returns {string} The pixel color (hex format).
     */
    getPixel(x: number, y: number): string;
    /**
     * Returns alpha pixel value at the specified point.
     *
     * @param {number} x - The x coordinate of the pixel in the bitmap.
     * @param {number} y - The y coordinate of the pixel in the bitmap.
     * @returns {number} The alpha value.
     */
    getAlphaPixel(x: number, y: number): number;
    /**
     * Clears the specified rectangle.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to clear.
     * @param {number} height - The height of the rectangle to clear.
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * Clears the entire bitmap.
     */
    clear(): void;
    /**
     * Fills the specified rectangle.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to fill.
     * @param {number} height - The height of the rectangle to fill.
     * @param {string} color - The color of the rectangle in CSS format.
     */
    fillRect(x: number, y: number, width: number, height: number, color: string): void;
    /**
     * Fills the entire bitmap.
     *
     * @param {string} color - The color of the rectangle in CSS format.
     */
    fillAll(color: string): void;
    /**
     * Draws the specified rectangular frame.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to fill.
     * @param {number} height - The height of the rectangle to fill.
     * @param {string} color - The color of the rectangle in CSS format.
     */
    strokeRect(x: number, y: number, width: number, height: number, color: string): void;
    /**
     * Draws the rectangle with a gradation.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to fill.
     * @param {number} height - The height of the rectangle to fill.
     * @param {string} color1 - The gradient starting color.
     * @param {string} color2 - The gradient ending color.
     * @param {boolean} vertical - Whether the gradient should be draw as vertical or not.
     */
    gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical?: boolean): void;
    /**
     * Draws a bitmap in the shape of a circle.
     *
     * @param {number} x - The x coordinate based on the circle center.
     * @param {number} y - The y coordinate based on the circle center.
     * @param {number} radius - The radius of the circle.
     * @param {string} color - The color of the circle in CSS format.
     */
    drawCircle(x: number, y: number, radius: number, color: string): void;
    /**
     * Draws the outline text to the bitmap.
     *
     * @param {string} text - The text that will be drawn.
     * @param {number} x - The x coordinate for the left of the text.
     * @param {number} y - The y coordinate for the top of the text.
     * @param {number} maxWidth - The maximum allowed width of the text.
     * @param {number} lineHeight - The height of the text line.
     * @param {string} align - The alignment of the text.
     */
    drawText(text: string, x: number, y: number, maxWidth: number, lineHeight: number, align?: CanvasTextAlign): void;
    /**
     * Returns the width of the specified text.
     *
     * @param {string} text - The text to be measured.
     * @returns {number} The width of the text in pixels.
     */
    measureTextWidth(text: string): number;
    /**
     * Adds a callback function that will be called when the bitmap is loaded.
     *
     * @param {function} listner - The callback function.
     */
    addLoadListener(listner: (bitmap: Bitmap) => void): void;
    /**
     * Tries to load the image again.
     */
    retry(): void;
    _makeFontNameText(): string;
    _drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): void;
    _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;
    _createCanvas(width: number, height: number): void;
    _ensureCanvas(): void;
    _destroyCanvas(): void;
    _createBaseTexture(source: HTMLImageElement | HTMLCanvasElement): void;
    _updateScaleMode(): void;
    _startLoading(): void;
    _startDecrypting(): void;
    _onXhrLoad(xhr: XMLHttpRequest): void;
    _onLoad(): void;
    _callLoadListeners(): void;
    _onError(): void;
}
