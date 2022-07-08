import { Sprite } from "../core";
import { ActionTarget } from "../data";
/**
// Sprite_StateOverlay
//
// The sprite for displaying an overlay image for a state.
*/
export declare class Sprite_StateOverlay extends Sprite {
    _battler: ActionTarget | null;
    _overlayIndex: number;
    _animationCount: number;
    _pattern: number;
    constructor();
    initMembers(): void;
    loadBitmap(): void;
    setup(battler: ActionTarget): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    updateFrame(): void;
}
