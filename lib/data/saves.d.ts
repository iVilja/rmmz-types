import { Game_Actors } from "../objects/Game_Actors";
import { Game_Map } from "../objects/Game_Map";
import { Game_Party } from "../objects/Game_Party";
import { Game_Screen } from "../objects/Game_Screen";
import { Game_SelfSwitches } from "../objects/Game_SelfSwitches";
import { Game_Switches } from "../objects/Game_Switches";
import { Game_System } from "../objects/Game_System";
import { Game_Timer } from "../objects/Game_Timer";
import { Game_Variables } from "../objects/Game_Variables";
export interface DataSaveInfo {
    title: string;
    characters: [string, number][];
    faces: [string, number][];
    playtime: string;
    timestamp: number;
}
export declare type DataGlobalInfo = (DataSaveInfo | undefined)[];
export interface SaveContents {
    system: Game_System;
    screen: Game_Screen;
    timer: Game_Timer;
    switches: Game_Switches;
    variables: Game_Variables;
    selfSwitches: Game_SelfSwitches;
    actors: Game_Actors;
    party: Game_Party;
    map: Game_Map;
    player: any;
}
