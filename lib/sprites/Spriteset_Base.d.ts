import { ColorFilter, Rectangle, ScreenSprite, Sprite } from "../core";
import { AnimationRequest, AnimationTarget, DataAnimation, DataAnimationMV } from "../data";
import { PIXI } from "../externals";
import { Sprite_Animation } from "./Sprite_Animation";
import { Sprite_AnimationMV } from "./Sprite_AnimationMV";
import { Sprite_Timer } from "./Sprite_Timer";
/**
// Spriteset_Base
//
// The superclass of Spriteset_Map and Spriteset_Battle.
*/
export declare class Spriteset_Base extends Sprite {
    _animationSprites: (Sprite_Animation | Sprite_AnimationMV)[];
    _baseSprite: Sprite;
    _blackScreen: ScreenSprite;
    _baseColorFilter: ColorFilter;
    _pictureContainer: Sprite<null>;
    _timerSprite: Sprite_Timer;
    _overallColorFilter: ColorFilter;
    _effectsContainer: PIXI.Container;
    constructor();
    destroy(options?: PIXI.IDestroyOptions | boolean): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createUpperLayer(): void;
    update(): void;
    createBaseSprite(): void;
    createBaseFilters(): void;
    createPictures(): void;
    pictureContainerRect(): Rectangle;
    createTimer(): void;
    createOverallFilters(): void;
    updateBaseFilters(): void;
    updateOverallFilters(): void;
    updatePosition(): void;
    findTargetSprite(_target: AnimationTarget): Sprite<import("../core").Bitmap> | null | undefined;
    updateAnimations(): void;
    processAnimationRequests(): void;
    createAnimation(request: AnimationRequest): void;
    createAnimationSprite(targets: AnimationTarget[], animation: DataAnimation | DataAnimationMV, mirror: boolean, delay: number): void;
    isMVAnimation(animation: DataAnimation | DataAnimationMV): animation is DataAnimationMV;
    makeTargetSprites(targets: AnimationTarget[]): Sprite<import("../core").Bitmap>[];
    lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV;
    isAnimationForEach(animation: DataAnimation | DataAnimationMV): boolean;
    animationBaseDelay(): number;
    animationNextDelay(): number;
    animationShouldMirror(target: AnimationTarget & {
        isActor?: () => boolean;
    }): boolean;
    removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void;
    removeAllAnimations(): void;
    isAnimationPlaying(): boolean;
}
