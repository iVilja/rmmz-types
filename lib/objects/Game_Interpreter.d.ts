import { Point } from "../core"
import {
  ActorID,
  CharacterID,
  CommandCode,
  CommandParams,
  DataCommand,
  ExtractDataCommand,
  EnemyID,
  EventID,
  MapID,
  ValueOperation,
  VariableID,
  VariableOperationType,
  WaitMode,
  ActionTarget,
} from "../data"
import { Game_Actor } from "./Game_Actor"
import { Game_Character } from "./Game_Character"
import { Game_Enemy } from "./Game_Enemy"
/**
 * Game_Interpreter
 *
 * The interpreter for running event commands.
 */
export declare class Game_Interpreter {
  _depth: number
  _branch: Record<number, number | boolean | null>
  _indent: number
  _frameCount: number
  _freezeChecker: number
  _mapId: MapID
  _eventId: EventID
  _list: DataCommand[] | null
  _index: number
  _waitCount: number
  _waitMode: WaitMode
  _comments: string | string[]
  _characterId: number
  _childInterpreter: Game_Interpreter | null
  constructor(depth?: number)
  checkOverflow(): void
  clear(): void
  setup(list: DataCommand[], eventId?: EventID): void
  loadImages(): void
  eventId(): number
  isOnCurrentMap(): boolean
  setupReservedCommonEvent(): boolean
  isRunning(): boolean
  update(): void
  updateChild(): boolean
  updateWait(): boolean | null
  updateWaitCount(): boolean
  updateWaitMode(): boolean | null
  setWaitMode(waitMode: WaitMode): void
  wait(duration: number): void
  fadeSpeed(): number
  executeCommand(): boolean
  checkFreeze(): boolean
  terminate(): void
  skipBranch(): void
  currentCommand<T extends CommandCode>(): ExtractDataCommand<T>
  nextEventCode():
    | 0
    | 1
    | 16
    | 2
    | 3
    | 4
    | 5
    | 113
    | 115
    | 12
    | 15
    | 20
    | 30
    | 128
    | 8
    | 7
    | 6
    | 10
    | 9
    | 24
    | 40
    | 32
    | 26
    | 13
    | 17
    | 18
    | 27
    | 33
    | 34
    | 37
    | 38
    | 39
    | 45
    | 102
    | 104
    | 14
    | 36
    | 11
    | 21
    | 22
    | 23
    | 31
    | 35
    | 41
    | 42
    | 43
    | 44
    | 19
    | 25
    | 28
    | 29
    | 101
    | 401
    | 402
    | 403
    | 103
    | 105
    | 405
    | 108
    | 408
    | 109
    | 111
    | 411
    | 112
    | 413
    | 117
    | 118
    | 119
    | 121
    | 122
    | 123
    | 124
    | 125
    | 126
    | 127
    | 129
    | 132
    | 133
    | 134
    | 135
    | 136
    | 137
    | 138
    | 139
    | 140
    | 201
    | 202
    | 203
    | 204
    | 205
    | 505
    | 206
    | 211
    | 212
    | 213
    | 214
    | 216
    | 217
    | 221
    | 222
    | 223
    | 224
    | 225
    | 230
    | 231
    | 232
    | 233
    | 234
    | 235
    | 236
    | 241
    | 242
    | 243
    | 244
    | 245
    | 246
    | 249
    | 250
    | 251
    | 261
    | 281
    | 282
    | 283
    | 284
    | 285
    | 301
    | 601
    | 602
    | 603
    | 302
    | 605
    | 303
    | 311
    | 312
    | 326
    | 313
    | 314
    | 315
    | 316
    | 317
    | 318
    | 319
    | 320
    | 321
    | 322
    | 323
    | 324
    | 325
    | 331
    | 332
    | 342
    | 333
    | 334
    | 335
    | 336
    | 337
    | 339
    | 340
    | 351
    | 352
    | 353
    | 354
    | 355
    | 655
    | 356
    | 357
  iterateActorId(param: ActorID, callback: (actor: Game_Actor) => void): void
  iterateActorEx(param1: 0 | 1, param2: ActorID | VariableID, callback: (actor: Game_Actor) => void): void
  iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void
  iterateEnemyIndex(param: number, callback: (enemy: Game_Enemy) => void): void
  iterateBattler(param1: 0 | 1, param2: EnemyID | ActorID, callback: (battler: ActionTarget) => void): void
  character(param: CharacterID): Game_Character | null
  operateValue(operation: ValueOperation, operandType: 0 | 1, operand: number | VariableID): number
  changeHp(target: ActionTarget, value: number, allowDeath: boolean): void
  command101(params: CommandParams<101>): boolean
  command102(params: CommandParams<102>): boolean
  setupChoices(params: CommandParams<102>): void
  command402(params: CommandParams<402>): boolean
  command403(): boolean
  command103(params: CommandParams<103>): boolean
  setupNumInput(params: CommandParams<103>): void
  command104(params: CommandParams<104>): boolean
  setupItemChoice(params: CommandParams<104>): void
  command105(params: CommandParams<105>): boolean
  command108(params: CommandParams<108>): boolean
  command109(): boolean
  command111(params: CommandParams<111>): boolean
  command411(): boolean
  command112(): boolean
  command413(): boolean
  command113(): boolean
  command115(): boolean
  command117(params: CommandParams<117>): boolean
  setupChild(list: DataCommand[], eventId: EventID): void
  command118(): boolean
  command119(params: CommandParams<119>): boolean
  jumpTo(index: number): void
  command121(params: CommandParams<121>): boolean
  command122(params: CommandParams<122>): boolean
  gameDataOperand(type: number, param1: number, param2?: number): number
  operateVariable(variableId: VariableID, operationType: VariableOperationType, value: number): void
  command123(params: CommandParams<123>): boolean
  command124(params: CommandParams<124>): boolean
  command125(params: CommandParams<125>): boolean
  command126(params: CommandParams<126>): boolean
  command127(params: CommandParams<127>): boolean
  command128(params: CommandParams<128>): boolean
  command129(params: CommandParams<129>): boolean
  command132(params: CommandParams<132>): boolean
  command133(params: CommandParams<133>): boolean
  command134(params: CommandParams<134>): boolean
  command135(params: CommandParams<135>): boolean
  command136(params: CommandParams<136>): boolean
  command137(params: CommandParams<137>): boolean
  command138(params: CommandParams<138>): boolean
  command139(params: CommandParams<139>): boolean
  command140(params: CommandParams<140>): boolean
  command201(params: CommandParams<201>): boolean
  command202(params: CommandParams<202>): boolean
  command203(params: CommandParams<203>): boolean
  command204(params: CommandParams<204>): boolean
  command205(params: CommandParams<205>): boolean
  command206(): boolean
  command211(params: CommandParams<211>): boolean
  command212(params: CommandParams<212>): boolean
  command213(params: CommandParams<213>): boolean
  command214(): boolean
  command216(params: CommandParams<216>): boolean
  command217(): boolean
  command221(): boolean
  command222(): boolean
  command223(params: CommandParams<223>): boolean
  command224(params: CommandParams<224>): boolean
  command225(params: CommandParams<225>): boolean
  command230(params: CommandParams<230>): boolean
  command231(params: CommandParams<231>): boolean
  command232(params: CommandParams<232>): boolean
  picturePoint(params: CommandParams<231 | 232>): Point
  command233(params: CommandParams<233>): boolean
  command234(params: CommandParams<234>): boolean
  command235(params: CommandParams<235>): boolean
  command236(params: CommandParams<236>): boolean
  command241(params: CommandParams<241>): boolean
  command242(params: CommandParams<242>): boolean
  command243(): boolean
  command244(): boolean
  command245(params: CommandParams<245>): boolean
  command246(params: CommandParams<246>): boolean
  command249(params: CommandParams<249>): boolean
  command250(params: CommandParams<250>): boolean
  command251(): boolean
  command261(params: CommandParams<261>): boolean
  videoFileExt(): ".webm" | ".mp4"
  command281(params: CommandParams<281>): boolean
  command282(params: CommandParams<282>): boolean
  command283(params: CommandParams<283>): boolean
  command284(params: CommandParams<284>): boolean
  command285(params: CommandParams<285>): boolean
  command301(params: CommandParams<301>): boolean
  command601(): boolean
  command602(): boolean
  command603(): boolean
  command302(params: CommandParams<302>): boolean
  command303(params: CommandParams<303>): boolean
  command311(params: CommandParams<311>): boolean
  command312(params: CommandParams<312>): boolean
  command326(params: CommandParams<326>): boolean
  command313(params: CommandParams<313>): boolean
  command314(params: CommandParams<314>): boolean
  command315(params: CommandParams<315>): boolean
  command316(params: CommandParams<316>): boolean
  command317(params: CommandParams<317>): boolean
  command318(params: CommandParams<318>): boolean
  command319(params: CommandParams<319>): boolean
  command320(params: CommandParams<320>): boolean
  command321(params: CommandParams<321>): boolean
  command322(params: CommandParams<322>): boolean
  command323(params: CommandParams<323>): boolean
  command324(params: CommandParams<324>): boolean
  command325(params: CommandParams<325>): boolean
  command331(params: CommandParams<331>): boolean
  command332(params: CommandParams<332>): boolean
  command342(params: CommandParams<342>): boolean
  command333(params: CommandParams<333>): boolean
  command334(params: CommandParams<334>): boolean
  command335(params: CommandParams<335>): boolean
  command336(params: CommandParams<336>): boolean
  command337(params: CommandParams<337>): boolean
  command339(params: CommandParams<339>): boolean
  command340(): boolean
  command351(): boolean
  command352(): boolean
  command353(): boolean
  command354(): boolean
  command355(): boolean
  command356(params: CommandParams<356>): boolean
  pluginCommand(_command: string, _args: string[]): void
  command357(params: CommandParams<357>): boolean
}
