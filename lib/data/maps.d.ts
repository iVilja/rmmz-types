import { DataAudio, Meta } from "./base";
import { DataEvent } from "./events";
import { MapID, TilesetID, TroopID } from "./types";
export interface DataMapInfo {
    id: number;
    expanded: boolean;
    name: string;
    order: number;
    parentId: MapID;
    scrollX: number;
    scrollY: number;
}
export interface DataEncounter {
    troopId: TroopID;
    regionSet: [number?, number?, number?];
    weight: number;
}
export interface DataMap {
    autoplayBgm: boolean;
    autoplayBgs: boolean;
    battleback1Name: string;
    battleback2Name: string;
    bgm: DataAudio;
    bgs: DataAudio;
    disableDashing: boolean;
    displayName: string;
    encounterList: DataEncounter[];
    encounterStep: number;
    height: number;
    note: string;
    parallaxLoopX: boolean;
    parallaxLoopY: boolean;
    parallaxName: string;
    parallaxShow: boolean;
    parallaxSx: number;
    parallaxSy: number;
    scrollType: number;
    specifyBattleback: boolean;
    tilesetId: TilesetID;
    width: number;
    data: number[];
    events: Array<DataEvent>;
    meta: Meta;
}
