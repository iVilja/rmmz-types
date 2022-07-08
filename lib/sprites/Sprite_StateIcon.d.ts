import { Sprite } from "../core";
import { ActionTarget } from "../data";
/**
// Sprite_StateIcon
//
// The sprite for displaying state icons.
*/
export declare class Sprite_StateIcon extends Sprite {
    _battler: ActionTarget | null;
    _iconIndex: number;
    _animationCount: number;
    _animationIndex: number;
    constructor();
    initMembers(): void;
    loadBitmap(): void;
    setup(battler: ActionTarget): void;
    update(): void;
    animationWait(): number;
    updateIcon(): void;
    shouldDisplay(): this is {
        _battler: ActionTarget;
    };
    updateFrame(): void;
}
