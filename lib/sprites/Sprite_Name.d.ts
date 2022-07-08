import { Sprite } from "../core";
import { ActionTarget } from "../data";
import { PIXI } from "../externals";
/**
// Sprite_Name
//
// The sprite for displaying a status gauge.
*/
export declare class Sprite_Name extends Sprite {
    _battler: ActionTarget | null;
    _name: string;
    _textColor: string;
    constructor();
    initMembers(): void;
    destroy(options?: PIXI.IDestroyOptions | boolean): void;
    createBitmap(): void;
    bitmapWidth(): number;
    bitmapHeight(): number;
    fontFace(): string;
    fontSize(): number;
    setup(battler: ActionTarget): void;
    update(): void;
    updateBitmap(): void;
    name(): string;
    textColor(): string;
    outlineColor(): string;
    outlineWidth(): number;
    redraw(): void;
    setupFont(): void;
}
