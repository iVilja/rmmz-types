import { PIXI } from "../externals";
import { Bitmap } from "./Bitmap";
import { Point } from "./Point";
import { ScreenSprite } from "./ScreenSprite";
import { Sprite } from "./Sprite";
declare type WeatherSprite = Sprite & {
    ax: number;
    ay: number;
};
export declare type WeatherType = "none" | "rain" | "storm" | "snow";
/**
 * The weather effect which displays rain, storm, or snow.
 *
 * @class
 * @extends PIXI.Container
 */
export declare class Weather extends PIXI.Container {
    _width: number;
    _height: number;
    _sprites: Array<WeatherSprite>;
    viewport: Bitmap;
    /**
     * The type of the weather in ["none", "rain", "storm", "snow"].
     *
     * @type string
     */
    type: WeatherType;
    /**
     * The power of the weather in the range (0, 9).
     *
     * @type number
     */
    power: number;
    /**
     * The origin point of the weather for scrolling.
     *
     * @type Point
     */
    origin: Point;
    _rainBitmap: Bitmap;
    _stormBitmap: Bitmap;
    _snowBitmap: Bitmap;
    _dimmerSprite: ScreenSprite;
    constructor();
    /**
     * Destroys the weather.
     */
    destroy(): void;
    /**
     * Updates the weather for each frame.
     */
    update(): void;
    _createBitmaps(): void;
    _createDimmer(): void;
    _updateDimmer(): void;
    _updateAllSprites(): void;
    _addSprite(): void;
    _removeSprite(): void;
    _updateSprite(sprite: WeatherSprite): void;
    _updateRainSprite(sprite: WeatherSprite): void;
    _updateStormSprite(sprite: WeatherSprite): void;
    _updateSnowSprite(sprite: WeatherSprite): void;
    _rebornSprite(sprite: WeatherSprite): void;
}
export {};
