import { DataBase, DataBaseBase, Direction } from "./base"
import { DataCommand, MoveRoute } from "./commands"
import { ActorID, ItemID, SwitchID, TilesetID, VariableID } from "./types"
export declare type SelfSwitchCharacter = "A" | "B" | "C" | "D"
export interface EventPageConditions {
  switch1Valid: boolean
  switch1Id: SwitchID
  switch2Valid: boolean
  switch2Id: SwitchID
  variableValid: boolean
  variableId: VariableID
  variableValue: number
  selfSwitchCh: SelfSwitchCharacter
  selfSwitchValid: boolean
  itemValid: boolean
  itemId: ItemID
  actorValid: boolean
  actorId: ActorID
}
export interface EventImage {
  tileId: TilesetID
  characterName: string
  direction: Direction
  pattern: number
  characterIndex: number
}
export declare type MoveType = 0 | 1 | 2 | 3
export declare type MoveSpeed = 1 | 2 | 3 | 4 | 5 | 6
export declare type MoveFrequency = 1 | 2 | 3 | 4 | 5
export declare type PriorityType = 0 | 1 | 2
export declare type EventTrigger = 0 | 1 | 2 | 3 | 4
export interface DataEventPage {
  conditions: Partial<EventPageConditions>
  image: EventImage
  moveType: number
  moveRoute: MoveRoute
  moveSpeed: MoveSpeed
  moveFrequency: MoveFrequency
  walkAnime: boolean
  stepAnime: boolean
  directionFix: boolean
  through: boolean
  priorityType: PriorityType
  trigger: EventTrigger
  list: DataCommand[]
}
export interface DataEvent extends DataBase {
  pages: DataEventPage[]
  x: number
  y: number
}
export declare type CommonEventTrigger = 0 | 1 | 2
export interface DataCommonEvent extends DataBaseBase {
  trigger: CommonEventTrigger
  switchId: SwitchID
  list: DataCommand[]
}
