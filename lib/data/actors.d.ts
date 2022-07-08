import { DataBase, Trait } from "./base";
import { ClassID } from "./types";
export interface DataActor extends DataBase {
    nickname: string;
    classId: ClassID;
    initialLevel: number;
    maxLevel: number;
    profile: string;
    faceIndex: number;
    faceName: string;
    characterIndex: number;
    characterName: string;
    battlerName: string;
    equips: number[];
    traits: Trait[];
}
