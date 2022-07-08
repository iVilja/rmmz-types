import { Rectangle } from "../core";
import { ActionTarget, AnimationID, DataItemBase, ParamID, WaitMode } from "../data";
import { Game_Action, Game_Actor, Game_Enemy } from "../objects";
import { Spriteset_Battle } from "../sprites";
import { Window_Base } from "./Window_Base";
declare type $<TMethod extends keyof Window_BattleLog> = Window_BattleLog[TMethod] extends (...args: any[]) => any ? {
    name: TMethod;
    params: Parameters<Window_BattleLog[TMethod]>;
} : never;
export declare type BattleLogMethod = $<"performActionStart"> | $<"performAction"> | $<"performActionEnd"> | $<"performCounter"> | $<"performReflection"> | $<"performSubstitute"> | $<"performMiss"> | $<"performEvasion"> | $<"performMagicEvasion"> | $<"performDamage"> | $<"performRecovery"> | $<"performCollapse"> | $<"pushBaseLine"> | $<"popBaseLine"> | $<"addText"> | $<"popupDamage"> | $<"wait"> | $<"waitForMovement"> | $<"waitForNewLine"> | $<"waitForEffect"> | $<"showAnimation"> | $<"clear">;
/**
 * Window_BattleLog
*
* The window for displaying battle progress. No frame is displayed, but it is
// handled as a window for convenience.
*/
export declare class Window_BattleLog extends Window_Base {
    _lines: string[];
    _methods: BattleLogMethod[];
    _waitCount: number;
    _waitMode: WaitMode;
    _baseLineStack: number[];
    _spriteset: Spriteset_Battle | null;
    constructor(rect: Rectangle);
    setSpriteset(spriteset: Spriteset_Battle): void;
    maxLines(): number;
    numLines(): number;
    messageSpeed(): number;
    isBusy(): boolean | "video" | "scroll" | "image" | "message" | "transfer" | "route" | "animation" | "balloon" | "gather" | "action" | "effect" | "movement";
    update(): void;
    updateWait(): boolean;
    updateWaitCount(): boolean;
    updateWaitMode(): boolean;
    setWaitMode(waitMode: WaitMode): void;
    callNextMethod(): void;
    isFastForward(): boolean;
    push<T>(methodName: T, ...methodArgs: Extract<BattleLogMethod, {
        name: T;
    }>["params"]): void;
    clear(): void;
    wait(): void;
    waitForEffect(): void;
    waitForMovement(): void;
    addText(text: string): void;
    pushBaseLine(): void;
    popBaseLine(): void;
    waitForNewLine(): void;
    popupDamage(target: ActionTarget): void;
    performActionStart(subject: ActionTarget, action: Game_Action): void;
    performAction(subject: ActionTarget, action: Game_Action): void;
    performActionEnd(subject: ActionTarget): void;
    performDamage(target: ActionTarget): void;
    performMiss(target: ActionTarget): void;
    performRecovery(target: ActionTarget): void;
    performEvasion(target: ActionTarget): void;
    performMagicEvasion(target: ActionTarget): void;
    performCounter(target: ActionTarget): void;
    performReflection(target: ActionTarget): void;
    performSubstitute(substitute: ActionTarget, target: ActionTarget): void;
    performCollapse(target: ActionTarget): void;
    showAnimation(subject: ActionTarget, targets: ActionTarget[], animationId: AnimationID): void;
    showAttackAnimation(subject: ActionTarget, targets: ActionTarget[]): void;
    showActorAttackAnimation(subject: Game_Actor, targets: ActionTarget[]): void;
    showEnemyAttackAnimation(_subject: Game_Enemy, _targets: ActionTarget[]): void;
    showNormalAnimation(targets: ActionTarget[], animationId: AnimationID, mirror?: boolean): void;
    refresh(): void;
    drawBackground(): void;
    backRect(): Rectangle;
    lineRect(index: number): Rectangle;
    backColor(): string;
    backPaintOpacity(): number;
    drawLineText(index: number): void;
    startTurn(): void;
    startAction(subject: ActionTarget, action: Game_Action, targets: ActionTarget[]): void;
    endAction(subject: ActionTarget): void;
    displayCurrentState(subject: ActionTarget): void;
    displayRegeneration(subject: ActionTarget): void;
    displayAction(subject: ActionTarget, item: DataItemBase): void;
    displayItemMessage(fmt: string, subject: ActionTarget, item: DataItemBase): void;
    displayCounter(target: ActionTarget): void;
    displayReflection(target: ActionTarget): void;
    displaySubstitute(substitute: ActionTarget, target: ActionTarget): void;
    displayActionResults(subject: ActionTarget, target: ActionTarget): void;
    displayFailure(target: ActionTarget): void;
    displayCritical(target: ActionTarget): void;
    displayDamage(target: ActionTarget): void;
    displayMiss(target: ActionTarget): void;
    displayEvasion(target: ActionTarget): void;
    displayHpDamage(target: ActionTarget): void;
    displayMpDamage(target: ActionTarget): void;
    displayTpDamage(target: ActionTarget): void;
    displayAffectedStatus(target: ActionTarget, _?: null): void;
    displayAutoAffectedStatus(target: ActionTarget): void;
    displayChangedStates(target: ActionTarget): void;
    displayAddedStates(target: ActionTarget): void;
    displayRemovedStates(target: ActionTarget): void;
    displayChangedBuffs(target: ActionTarget): void;
    displayBuffs(target: ActionTarget, buffs: ParamID[], fmt: string): void;
    makeHpDamageText(target: ActionTarget): string;
    makeMpDamageText(target: ActionTarget): string;
    makeTpDamageText(target: ActionTarget): string;
}
export {};
