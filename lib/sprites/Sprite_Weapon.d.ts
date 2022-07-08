import { Sprite } from "../core";
/**
// Sprite_Weapon
//
// The sprite for displaying a weapon image for attacking.
*/
export declare class Sprite_Weapon extends Sprite {
    _weaponImageId: number;
    _animationCount: number;
    _pattern: number;
    constructor();
    initMembers(): void;
    setup(weaponImageId: number): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    loadBitmap(): void;
    updateFrame(): void;
    isPlaying(): boolean;
}
