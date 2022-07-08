import { Bitmap, Sprite } from "../core";
import { ActionTarget } from "../data";
import { PIXI } from "../externals";
import { Spriteset_Base } from "./Spriteset_Base";
import { Sprite_Actor } from "./Sprite_Actor";
import { Sprite_Battleback } from "./Sprite_Battleback";
import { Sprite_Enemy } from "./Sprite_Enemy";
/**
// Spriteset_Battle
//
// The set of sprites on the battle screen.
*/
export declare class Spriteset_Battle extends Spriteset_Base {
    _battlebackLocated: boolean;
    _backgroundFilter: PIXI.Filter;
    _backgroundSprite: Sprite<Bitmap | null>;
    _back1Sprite: Sprite_Battleback;
    _back2Sprite: Sprite_Battleback;
    _battleField: Sprite<null>;
    _enemySprites: Sprite_Enemy[];
    _actorSprites: Sprite_Actor[];
    loadSystemImages(): void;
    createLowerLayer(): void;
    createBackground(): void;
    createBattleback(): void;
    createBattleField(): void;
    battleFieldOffsetY(): number;
    update(): void;
    updateBattleback(): void;
    createEnemies(): void;
    compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;
    createActors(): void;
    updateActors(): void;
    findTargetSprite(target: ActionTarget): Sprite<Bitmap> | undefined;
    battlerSprites(): (Sprite_Actor | Sprite_Enemy)[];
    isEffecting(): boolean;
    isAnyoneMoving(): boolean;
    isBusy(): boolean;
}
