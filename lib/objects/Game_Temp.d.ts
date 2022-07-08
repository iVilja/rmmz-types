import { ActionDataType, ActorID, AnimationID, AnimationRequest, BalloonIconID, BalloonRequest, CommonEventID, EnemyID, ItemID, SkillID } from "../data";
import { Game_Battler } from "./Game_Battler";
import { Game_Character } from "./Game_Character";
export declare type TouchState = "select" | "click";
/**
 * Game_Temp
 *
 * The game object class for temporary data that is not included in save data.
 */
export declare class Game_Temp {
    _isPlaytest: boolean;
    _destinationX: number | null;
    _destinationY: number | null;
    _touchTarget: Game_Battler | null;
    _touchState: string;
    _needsBattleRefresh: boolean;
    _commonEventQueue: CommonEventID[];
    _animationQueue: AnimationRequest[];
    _balloonQueue: BalloonRequest[];
    _lastActionData: [SkillID, ItemID, ActorID, EnemyID, ActorID, EnemyID];
    isPlaytest(): boolean;
    setDestination(x: number, y: number): void;
    clearDestination(): void;
    isDestinationValid(): boolean;
    destinationX(): number | null;
    destinationY(): number | null;
    setTouchState(target: Game_Battler, state: TouchState): void;
    clearTouchState(): void;
    touchTarget(): Game_Battler | null;
    touchState(): string;
    requestBattleRefresh(): void;
    clearBattleRefreshRequest(): void;
    isBattleRefreshRequested(): boolean;
    reserveCommonEvent(commonEventId: CommonEventID): void;
    retrieveCommonEvent(): import("../data").DataCommonEvent;
    clearCommonEventReservation(): void;
    isCommonEventReserved(): boolean;
    requestAnimation(targets: (Game_Character | Game_Battler)[], animationId: AnimationID, mirror?: boolean): void;
    retrieveAnimation(): AnimationRequest | undefined;
    requestBalloon(target: Game_Character, balloonId: BalloonIconID): void;
    retrieveBalloon(): BalloonRequest | undefined;
    lastActionData(type: ActionDataType): number;
    setLastActionData(type: ActionDataType, value: number): void;
    setLastUsedSkillId(skillID: SkillID): void;
    setLastUsedItemId(itemID: ItemID): void;
    setLastSubjectActorId(actorID: ActorID): void;
    setLastSubjectEnemyIndex(enemyIndex: EnemyID): void;
    setLastTargetActorId(actorID: ActorID): void;
    setLastTargetEnemyIndex(enemyIndex: EnemyID): void;
}
