import { DataBase, Trait } from "./base"
import { SkillID } from "./types"
interface Learning {
  level: number
  note: string
  skillId: SkillID
}
export declare type BattlerParams = [number, number, number, number, number, number, number, number]
export declare type ParamID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
export interface DataClass extends DataBase {
  expParams: [number, number, number, number]
  traits: Trait[]
  learnings: Learning[]
  params: [number[], number[], number[], number[], number[], number[], number[], number[]]
}
export {}
