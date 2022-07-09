import { ActionTarget, DataAudio, DataItemBase } from "../data"
import { Game_Action, Game_Actor } from "../objects"
import { Spriteset_Battle } from "../sprites"
import { Window_BattleLog } from "../windows/Window_BattleLog"
/**
 * BattleManager
 *
 * The static class that manages battle progress.
 */
export declare class BattleManager {
  constructor()
  static _phase: string
  static _inputting: boolean
  static _canEscape: boolean
  static _canLose: boolean
  static _battleTest: boolean
  static _eventCallback: ((result: number) => void) | null
  static _preemptive: boolean
  static _surprise: boolean
  static _currentActor: Game_Actor | null
  static _actionForcedBattler: ActionTarget | null
  static _mapBgm: DataAudio | null
  static _mapBgs: DataAudio | null
  static _actionBattlers: ActionTarget[]
  static _subject: ActionTarget | null
  static _action: Game_Action | null
  static _targets: ActionTarget[]
  static _logWindow: Window_BattleLog | null
  static _spriteset: Spriteset_Battle | null
  static _escapeRatio: number
  static _escaped: boolean
  static _rewards: {
    gold?: number
    exp?: number
    items?: DataItemBase[]
  }
  static _tpbNeedsPartyCommand: boolean
  static setup(troopId: number, canEscape: boolean, canLose: boolean): void
  static initMembers(): void
  static isTpb(): boolean
  static isActiveTpb(): boolean
  static isBattleTest(): boolean
  static setBattleTest(battleTest: boolean): void
  static setEventCallback(callback: (result: number) => void): void
  static setLogWindow(logWindow: Window_BattleLog): void
  static setSpriteset(spriteset: Spriteset_Battle): void
  static onEncounter(): void
  static ratePreemptive(): number
  static rateSurprise(): number
  static saveBgmAndBgs(): void
  static playBattleBgm(): void
  static playVictoryMe(): void
  static playDefeatMe(): void
  static replayBgmAndBgs(): void
  static makeEscapeRatio(): void
  static update(timeActive: boolean): void
  static updatePhase(timeActive: boolean): void
  static updateEvent(): boolean
  static updateEventMain(): boolean
  static isBusy():
    | boolean
    | "video"
    | "scroll"
    | "image"
    | "message"
    | "transfer"
    | "route"
    | "animation"
    | "balloon"
    | "gather"
    | "action"
    | "effect"
    | "movement"
  static updateTpbInput(): void
  static checkTpbInputClose(): void
  static checkTpbInputOpen(): void
  static isPartyTpbInputtable(): boolean
  static needsActorInputCancel(): boolean | null
  static isTpbMainPhase(): boolean
  static isInputting(): boolean
  static isInTurn(): boolean
  static isTurnEnd(): boolean
  static isAborting(): boolean
  static isBattleEnd(): boolean
  static canEscape(): boolean
  static canLose(): boolean
  static isEscaped(): boolean
  static actor(): Game_Actor | null
  static startBattle(): void
  static displayStartMessages(): void
  static startInput(): void
  static inputtingAction(): Game_Action | null
  static selectNextCommand(): void
  static selectNextActor(): void
  static selectPreviousCommand(): void
  static selectPreviousActor(): void
  static changeCurrentActor(forward: boolean): void
  static startActorInput(): void
  static finishActorInput(): void
  static cancelActorInput(): void
  static updateStart(): void
  static startTurn(): void
  static updateTurn(timeActive: boolean): void
  static updateTpb(): void
  static updateAllTpbBattlers(): void
  static updateTpbBattler(battler: ActionTarget): void
  static checkTpbTurnEnd(): void
  static processTurn(): void
  static endBattlerActions(battler: ActionTarget): void
  static endTurn(): void
  static updateTurnEnd(): void
  static endAllBattlersTurn(): void
  static displayBattlerStatus(battler: ActionTarget, current: boolean): void
  static getNextSubject(): ActionTarget | null
  static allBattleMembers(): (Game_Actor | import("../objects").Game_Enemy)[]
  static makeActionOrders(): void
  static startAction(): void
  static updateAction(): void
  static endAction(): void
  static invokeAction(subject: ActionTarget, target: ActionTarget): void
  static invokeNormalAction(subject: ActionTarget, target: ActionTarget): void
  static invokeCounterAttack(subject: ActionTarget, target: ActionTarget): void
  static invokeMagicReflection(subject: ActionTarget, target: ActionTarget): void
  static applySubstitute(target: ActionTarget): ActionTarget
  static checkSubstitute(target: ActionTarget): boolean
  static isActionForced(): boolean
  static forceAction(battler: ActionTarget): void
  static processForcedAction(): void
  static abort(): void
  static checkBattleEnd(): boolean
  static checkAbort(): boolean
  static processVictory(): void
  static processEscape(): boolean
  static onEscapeSuccess(): void
  static onEscapeFailure(): void
  static processPartyEscape(): void
  static processAbort(): void
  static processDefeat(): void
  static endBattle(result: number): void
  static updateBattleEnd(): void
  static makeRewards(): void
  static displayVictoryMessage(): void
  static displayDefeatMessage(): void
  static displayEscapeSuccessMessage(): void
  static displayEscapeFailureMessage(): void
  static displayRewards(): void
  static displayExp(): void
  static displayGold(): void
  static displayDropItems(): void
  static gainRewards(): void
  static gainExp(): void
  static gainGold(): void
  static gainDropItems(): void
}
