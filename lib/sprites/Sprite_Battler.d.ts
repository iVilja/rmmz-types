import { Bitmap, Sprite } from "../core";
import { ActionTarget } from "../data";
import { Sprite_Clickable } from "./Sprite_Clickable";
import { Sprite_Damage } from "./Sprite_Damage";
/**
// Sprite_Battler
//
// The superclass of Sprite_Actor and Sprite_Enemy.
*/
export declare class Sprite_Battler<T extends ActionTarget, T2 extends Bitmap> extends Sprite_Clickable<T2 | null> {
    _battler: T;
    _damages: Sprite_Damage[];
    _homeX: number;
    _homeY: number;
    _offsetX: number;
    _offsetY: number;
    _targetOffsetX: number;
    _targetOffsetY: number;
    _movementDuration: number;
    _selectionEffectCount: number;
    constructor(battler: T);
    initMembers(): void;
    setBattler(battler: T): void;
    checkBattler(battler: ActionTarget): boolean;
    mainSprite(): Sprite<Bitmap | null>;
    setHome(x: number, y: number): void;
    update(): void;
    updateVisibility(): void;
    updateMain(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updatePosition(): void;
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    setupDamagePopup(): void;
    createDamageSprite(): void;
    destroyDamageSprite(sprite: Sprite_Damage): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: number, y: number, duration: number): void;
    onMoveEnd(): void;
    isEffecting(): boolean;
    isMoving(): boolean;
    inHomePosition(): boolean;
    onMouseEnter(): void;
    onPress(): void;
    onClick(): void;
}
