import { Bitmap } from "../core";
import { BattlerEffectType } from "../data";
import { Game_Enemy } from "../objects";
import { Sprite_Battler } from "./Sprite_Battler";
import { Sprite_StateIcon } from "./Sprite_StateIcon";
/**
// Sprite_Enemy
//
// The sprite for displaying an enemy.
*/
export declare class Sprite_Enemy extends Sprite_Battler<Game_Enemy, Bitmap> {
    _enemy: Game_Enemy;
    _appeared: boolean;
    _battlerName: string | null;
    _battlerHue: number;
    _effectType: BattlerEffectType | null;
    _effectDuration: number;
    _shake: number;
    _stateIconSprite: Sprite_StateIcon;
    initMembers(): void;
    createStateIconSprite(): void;
    setBattler(battler: Game_Enemy): void;
    update(): void;
    updateBitmap(): void;
    loadBitmap(name: string): void;
    setHue(hue: number): void;
    updateFrame(): void;
    updatePosition(): void;
    updateStateSprite(): void;
    initVisibility(): void;
    setupEffect(): void;
    startEffect(effectType: BattlerEffectType): void;
    startAppear(): void;
    startDisappear(): void;
    startWhiten(): void;
    startBlink(): void;
    startCollapse(): void;
    startBossCollapse(): void;
    startInstantCollapse(): void;
    updateEffect(): void;
    isEffecting(): boolean;
    revertToNormal(): void;
    updateWhiten(): void;
    updateBlink(): void;
    updateAppear(): void;
    updateDisappear(): void;
    updateCollapse(): void;
    updateBossCollapse(): void;
    updateInstantCollapse(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}
