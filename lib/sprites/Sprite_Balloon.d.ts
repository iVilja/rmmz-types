import { Sprite } from "../core";
import { BalloonIconID } from "../data";
import { Game_Character } from "../objects";
/**
// Sprite_Balloon
//
// The sprite for displaying a balloon icon.
*/
export declare class Sprite_Balloon extends Sprite {
    _target: Sprite;
    _balloonId: BalloonIconID;
    _duration: number;
    constructor();
    initMembers(): void;
    loadBitmap(): void;
    setup(targetSprite: Sprite, balloonId: BalloonIconID): void;
    update(): void;
    updatePosition(): void;
    updateFrame(): void;
    speed(): number;
    waitTime(): number;
    frameIndex(): number;
    isPlaying(): boolean;
    targetObject?: Game_Character;
}
