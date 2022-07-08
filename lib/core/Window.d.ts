import { Color } from "../data";
import { PIXI } from "../externals";
import { Bitmap } from "./Bitmap";
import { Point } from "./Point";
import { Rectangle } from "./Rectangle";
import { Sprite } from "./Sprite";
/**
 * The window in the game.
 *
 * @class
 * @extends PIXI.Container
 */
export declare class Window extends PIXI.Container {
    _isWindow: boolean;
    _windowskin: Bitmap;
    _width: number;
    _height: number;
    _cursorRect: Rectangle;
    _openness: number;
    _animationCount: number;
    _padding: number;
    _margin: number;
    _colorTone: Color;
    _innerChildren: PIXI.DisplayObject[];
    _container: PIXI.Container;
    _backSprite: Sprite;
    _frameSprite: Sprite<null>;
    _contentsBackSprite: Sprite;
    _cursorSprite: Sprite<null>;
    _contentsSprite: Sprite;
    _downArrowSprite: Sprite;
    _upArrowSprite: Sprite;
    _pauseSignSprite: Sprite;
    _clientArea: Sprite<null>;
    /**
     * The origin point of the window for scrolling.
     *
     * @type Point
     */
    origin: Point;
    /**
     * The active state for the window.
     *
     * @type boolean
     */
    active: boolean;
    /**
     * The visibility of the frame.
     *
     * @type boolean
     */
    frameVisible: boolean;
    /**
     * The visibility of the cursor.
     *
     * @type boolean
     */
    cursorVisible: boolean;
    /**
     * The visibility of the down scroll arrow.
     *
     * @type boolean
     */
    downArrowVisible: boolean;
    /**
     * The visibility of the up scroll arrow.
     *
     * @type boolean
     */
    upArrowVisible: boolean;
    /**
     * The visibility of the pause sign.
     *
     * @type boolean
     */
    pause: boolean;
    constructor();
    /**
     * The image used as a window skin.
     *
     * @type Bitmap
     * @name Window#windowskin
     */
    get windowskin(): Bitmap;
    set windowskin(value: Bitmap);
    /**
     * The bitmap used for the window contents.
     *
     * @type Bitmap
     * @name Window#contents
     */
    get contents(): Bitmap;
    set contents(value: Bitmap);
    /**
     * The bitmap used for the window contents background.
     *
     * @type Bitmap
     * @name Window#contentsBack
     */
    get contentsBack(): Bitmap;
    set contentsBack(value: Bitmap);
    /**
     * The width of the window in pixels.
     *
     * @type number
     * @name Window#width
     */
    get width(): number;
    set width(value: number);
    /**
     * The height of the window in pixels.
     *
     * @type number
     * @name Window#height
     */
    get height(): number;
    set height(value: number);
    /**
     * The size of the padding between the frame and contents.
     *
     * @type number
     * @name Window#padding
     */
    get padding(): number;
    set padding(value: number);
    /**
     * The size of the margin for the window background.
     *
     * @type number
     * @name Window#margin
     */
    get margin(): number;
    set margin(value: number);
    /**
     * The opacity of the window without contents (0 to 255).
     *
     * @type number
     * @name Window#opacity
     */
    get opacity(): number;
    set opacity(value: number);
    /**
     * The opacity of the window background (0 to 255).
     *
     * @type number
     * @name Window#backOpacity
     */
    get backOpacity(): number;
    set backOpacity(value: number);
    /**
     * The opacity of the window contents (0 to 255).
     *
     * @type number
     * @name Window#contentsOpacity
     */
    get contentsOpacity(): number;
    set contentsOpacity(value: number);
    /**
     * The openness of the window (0 to 255).
     *
     * @type number
     * @name Window#openness
     */
    get openness(): number;
    set openness(value: number);
    /**
     * The width of the content area in pixels.
     *
     * @readonly
     * @type number
     * @name Window#innerWidth
     */
    get innerWidth(): number;
    /**
     * The height of the content area in pixels.
     *
     * @readonly
     * @type number
     * @name Window#innerHeight
     */
    get innerHeight(): number;
    /**
     * The rectangle of the content area.
     *
     * @readonly
     * @type Rectangle
     * @name Window#innerRect
     */
    get innerRect(): Rectangle;
    /**
     * Destroys the window.
     */
    destroy(_options?: PIXI.IDestroyOptions | boolean): void;
    /**
     * Updates the window for each frame.
     */
    update(): void;
    /**
     * Sets the x, y, width, and height all at once.
     *
     * @param {number} x - The x coordinate of the window.
     * @param {number} y - The y coordinate of the window.
     * @param {number} width - The width of the window.
     * @param {number} height - The height of the window.
     */
    move(x: number, y: number, width: number, height: number): void;
    /**
     * Checks whether the window is completely open (openness == 255).
     *
     * @returns {boolean} True if the window is open.
     */
    isOpen(): boolean;
    /**
     * Checks whether the window is completely closed (openness == 0).
     *
     * @returns {boolean} True if the window is closed.
     */
    isClosed(): boolean;
    /**
     * Sets the position of the command cursor.
     *
     * @param {number} x - The x coordinate of the cursor.
     * @param {number} y - The y coordinate of the cursor.
     * @param {number} width - The width of the cursor.
     * @param {number} height - The height of the cursor.
     */
    setCursorRect(x: number, y: number, width: number, height: number): void;
    /**
     * Moves the cursor position by the given amount.
     *
     * @param {number} x - The amount of horizontal movement.
     * @param {number} y - The amount of vertical movement.
     */
    moveCursorBy(x: number, y: number): void;
    /**
     * Moves the inner children by the given amount.
     *
     * @param {number} x - The amount of horizontal movement.
     * @param {number} y - The amount of vertical movement.
     */
    moveInnerChildrenBy(x: number, y: number): void;
    /**
     * Changes the color of the background.
     *
     * @param {number} r - The red value in the range (-255, 255).
     * @param {number} g - The green value in the range (-255, 255).
     * @param {number} b - The blue value in the range (-255, 255).
     */
    setTone(r: number, g: number, b: number): void;
    /**
     * Adds a child between the background and contents.
     *
     * @param {object} child - The child to add.
     * @returns {object} The child that was added.
     */
    addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;
    /**
     * Adds a child to the client area.
     *
     * @param {object} child - The child to add.
     * @returns {object} The child that was added.
     */
    addInnerChild(child: PIXI.DisplayObject): PIXI.DisplayObject;
    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform(): void;
    /**
     * Draws the window shape into PIXI.Graphics object. Used by WindowLayer.
     */
    drawShape(graphics: PIXI.Graphics): void;
    _createAllParts(): void;
    _createContainer(): void;
    _createBackSprite(): void;
    _createFrameSprite(): void;
    _createClientArea(): void;
    _createContentsBackSprite(): void;
    _createCursorSprite(): void;
    _createContentsSprite(): void;
    _createArrowSprites(): void;
    _createPauseSignSprites(): void;
    _onWindowskinLoad(): void;
    _refreshAllParts(): void;
    _refreshBack(): void;
    _refreshFrame(): void;
    _refreshCursor(): void;
    _setRectPartsGeometry(sprite: Sprite<null>, srect: Rectangle, drect: Rectangle, m: number): void;
    _refreshArrows(): void;
    _refreshPauseSign(): void;
    _updateClientArea(): void;
    _updateFrame(): void;
    _updateContentsBack(): void;
    _updateCursor(): void;
    _makeCursorAlpha(): number;
    _updateContents(): void;
    _updateArrows(): void;
    _updatePauseSign(): void;
    _updateFilterArea(): void;
}
