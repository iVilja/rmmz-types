import {
  Game_System,
  Game_Screen,
  Game_Timer,
  Game_Switches,
  Game_Variables,
  Game_SelfSwitches,
  Game_Actors,
  Game_Party,
  Game_Map,
  Game_Player,
} from "../objects"

export interface DataSaveInfo {
  title: string
  characters: [string, number][]
  faces: [string, number][]
  playtime: string
  timestamp: number
}
export declare type DataGlobalInfo = (DataSaveInfo | undefined)[]
export interface SaveContents {
  system: Game_System
  screen: Game_Screen
  timer: Game_Timer
  switches: Game_Switches
  variables: Game_Variables
  selfSwitches: Game_SelfSwitches
  actors: Game_Actors
  party: Game_Party
  map: Game_Map
  player: Game_Player
}
