import { DataBase } from "./base"
export declare type TilesetMode = 0 | 1
export interface DataTileset extends DataBase {
  mode: TilesetMode
  tilesetNames: [string, string, string, string, string, string, string, string, string]
  flags: number[]
}
