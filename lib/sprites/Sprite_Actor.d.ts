import { Bitmap, Sprite } from "../core";
import { BattlerMotionType } from "../data";
import { Game_Actor } from "../objects";
import { Sprite_Battler } from "./Sprite_Battler";
import { Sprite_StateOverlay } from "./Sprite_StateOverlay";
import { Sprite_Weapon } from "./Sprite_Weapon";
/**
// Sprite_Actor
//
// The sprite for displaying an actor.
*/
export declare class Sprite_Actor extends Sprite_Battler<Game_Actor, never> {
    _battlerName: string;
    _motion: typeof Sprite_Actor.MOTIONS[BattlerMotionType] | null;
    _motionCount: number;
    _pattern: number;
    _mainSprite: Sprite<Bitmap | null>;
    _shadowSprite: Sprite;
    _weaponSprite: Sprite_Weapon;
    _stateSprite: Sprite_StateOverlay;
    _actor: Game_Actor;
    constructor(battler?: Game_Actor);
    initMembers(): void;
    mainSprite(): Sprite<Bitmap | null>;
    createMainSprite(): void;
    createShadowSprite(): void;
    createWeaponSprite(): void;
    createStateSprite(): void;
    setBattler(battler: Game_Actor): void;
    moveToStartPosition(): void;
    setActorHome(index: number): void;
    update(): void;
    updateShadow(): void;
    updateMain(): void;
    setupMotion(): void;
    setupWeaponAnimation(): void;
    startMotion(motionType: BattlerMotionType): void;
    updateTargetPosition(): void;
    shouldStepForward(): boolean;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updateMotion(): void;
    updateMotionCount(): void;
    motionSpeed(): number;
    refreshMotion(): void;
    startEntryMotion(): void;
    stepForward(): void;
    stepBack(): void;
    retreat(): void;
    onMoveEnd(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}
export declare namespace Sprite_Actor {
    const MOTIONS: {
        walk: {
            index: number;
            loop: boolean;
        };
        wait: {
            index: number;
            loop: boolean;
        };
        chant: {
            index: number;
            loop: boolean;
        };
        guard: {
            index: number;
            loop: boolean;
        };
        damage: {
            index: number;
            loop: boolean;
        };
        evade: {
            index: number;
            loop: boolean;
        };
        thrust: {
            index: number;
            loop: boolean;
        };
        swing: {
            index: number;
            loop: boolean;
        };
        missile: {
            index: number;
            loop: boolean;
        };
        skill: {
            index: number;
            loop: boolean;
        };
        spell: {
            index: number;
            loop: boolean;
        };
        item: {
            index: number;
            loop: boolean;
        };
        escape: {
            index: number;
            loop: boolean;
        };
        victory: {
            index: number;
            loop: boolean;
        };
        dying: {
            index: number;
            loop: boolean;
        };
        abnormal: {
            index: number;
            loop: boolean;
        };
        sleep: {
            index: number;
            loop: boolean;
        };
        dead: {
            index: number;
            loop: boolean;
        };
    };
}
