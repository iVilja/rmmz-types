import { DataID, DataItemBase, DropItemType, EnemyAction, EnemyID, ParamID, StateID, SwitchID } from "../data";
import { Game_Action } from "./Game_Action";
import { Game_Battler } from "./Game_Battler";
/**
 * Game_Enemy
 *
 * The game object class for an enemy.
 */
export declare class Game_Enemy extends Game_Battler {
    _enemyId: number;
    _letter: string;
    _plural: boolean;
    _screenX: number;
    _screenY: number;
    constructor(enemyId: EnemyID, x: number, y: number);
    initMembers(): void;
    setup(enemyId: EnemyID, x: number, y: number): void;
    isEnemy(): boolean;
    friendsUnit(): import("./Game_Troop").Game_Troop;
    opponentsUnit(): import("./Game_Party").Game_Party;
    index(): number;
    isBattleMember(): boolean;
    enemyId(): number;
    enemy(): import("../data").DataEnemy;
    traitObjects(): {
        traits: import("../data").Trait[];
    }[];
    paramBase(paramId: ParamID): number;
    exp(): number;
    gold(): number;
    makeDropItems(): DataItemBase[];
    dropItemRate(): 1 | 2;
    itemObject(kind: DropItemType, dataId: DataID): import("../data").DataItem | import("../data").DataWeapon | import("../data").DataArmor | null;
    isSpriteVisible(): boolean;
    screenX(): number;
    screenY(): number;
    battlerName(): string;
    battlerHue(): number;
    originalName(): string;
    name(): string;
    isLetterEmpty(): boolean;
    setLetter(letter: string): void;
    setPlural(plural: boolean): void;
    performActionStart(action: Game_Action): void;
    performAction(action: Game_Action): void;
    performActionEnd(): void;
    performDamage(): void;
    performCollapse(): void;
    transform(enemyId: EnemyID): void;
    meetsCondition(action: EnemyAction): boolean;
    meetsTurnCondition(param1: number, param2: number): boolean;
    meetsHpCondition(param1: number, param2: number): boolean;
    meetsMpCondition(param1: number, param2: number): boolean;
    meetsStateCondition(param: StateID): boolean;
    meetsPartyLevelCondition(param: number): boolean;
    meetsSwitchCondition(param: SwitchID): boolean;
    isActionValid(action: EnemyAction): boolean;
    selectAction(actionList: EnemyAction[], ratingZero: number): EnemyAction | null | undefined;
    selectAllActions(actionList: EnemyAction[]): void;
    makeActions(): void;
}
