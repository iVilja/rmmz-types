import { Messages } from "../data"
/**
 * TextManager
 *
 * The static class that handles terms and messages.
 */
export declare class TextManager {
  constructor()
  static basic(basicId: number): string
  static param(paramId: number): string
  static command(commandId: number): string
  static message(messageId: keyof Messages): string
  static get currencyUnit(): string
  static get level(): string
  static get levelA(): string
  static get hp(): string
  static get hpA(): string
  static get mp(): string
  static get mpA(): string
  static get tp(): string
  static get tpA(): string
  static get exp(): string
  static get expA(): string
  static get fight(): string
  static get escape(): string
  static get attack(): string
  static get guard(): string
  static get item(): string
  static get skill(): string
  static get equip(): string
  static get status(): string
  static get formation(): string
  static get save(): string
  static get gameEnd(): string
  static get options(): string
  static get weapon(): string
  static get armor(): string
  static get keyItem(): string
  static get equip2(): string
  static get optimize(): string
  static get clear(): string
  static get newGame(): string
  static get continue_(): string
  static get toTitle(): string
  static get cancel(): string
  static get buy(): string
  static get sell(): string
  static get alwaysDash(): string
  static get commandRemember(): string
  static get touchUI(): string
  static get bgmVolume(): string
  static get bgsVolume(): string
  static get meVolume(): string
  static get seVolume(): string
  static get possession(): string
  static get expTotal(): string
  static get expNext(): string
  static get saveMessage(): string
  static get loadMessage(): string
  static get file(): string
  static get autosave(): string
  static get partyName(): string
  static get emerge(): string
  static get preemptive(): string
  static get surprise(): string
  static get escapeStart(): string
  static get escapeFailure(): string
  static get victory(): string
  static get defeat(): string
  static get obtainExp(): string
  static get obtainGold(): string
  static get obtainItem(): string
  static get levelUp(): string
  static get obtainSkill(): string
  static get useItem(): string
  static get criticalToEnemy(): string
  static get criticalToActor(): string
  static get actorDamage(): string
  static get actorRecovery(): string
  static get actorGain(): string
  static get actorLoss(): string
  static get actorDrain(): string
  static get actorNoDamage(): string
  static get actorNoHit(): string
  static get enemyDamage(): string
  static get enemyRecovery(): string
  static get enemyGain(): string
  static get enemyLoss(): string
  static get enemyDrain(): string
  static get enemyNoDamage(): string
  static get enemyNoHit(): string
  static get evasion(): string
  static get magicEvasion(): string
  static get magicReflection(): string
  static get counterAttack(): string
  static get substitute(): string
  static get buffAdd(): string
  static get debuffAdd(): string
  static get buffRemove(): string
  static get actionFailure(): string
}
