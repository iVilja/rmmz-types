import { PIXI } from "../externals";
import { Game_Battler, Game_Character } from "../objects";
import { DataAudio, Color, DataBase } from "./base";
import { AnimationID, BalloonIconID } from "./types";
export declare type DisplayType = 0 | 1 | 2;
export interface Rotation {
    x: number;
    y: number;
    z: number;
}
export interface SoundTiming {
    frame: number;
    se: DataAudio | null;
}
export interface FlashTiming {
    frame: number;
    duration: number;
    color: Color;
}
export interface DataAnimation extends DataBase {
    displayType: DisplayType;
    effectName: string;
    scale: number;
    speed: number;
    rotation: Rotation;
    offsetX: number;
    offsetY: number;
    soundTimings: SoundTiming[];
    flashTimings: FlashTiming[];
    alignBottom?: boolean;
}
export declare type DataTimingMV = {
    frame: number;
    flashDuration: number;
    se?: DataAudio;
} & ({
    flashScope: 1;
    flashColor: Color;
} | {
    flashScope: 2;
    flashColor: Color;
} | {
    flashScope: 3;
} | undefined);
export declare type DataFrameCellMV = readonly [
    number,
    number,
    number,
    number,
    number,
    boolean,
    number,
    PIXI.BLEND_MODES
];
export declare type DataFrameMV = DataFrameCellMV[];
export interface DataAnimationMV extends DataBase {
    frames: DataFrameMV[];
    animation1Name: string;
    animation2Name: string;
    animation1Hue: number;
    animation2Hue: number;
    timings: DataTimingMV[];
    position: number;
}
export declare type AnimationTarget = Game_Character | Game_Battler;
export declare type AnimationRequest = {
    targets: AnimationTarget[];
    animationId: AnimationID;
    mirror: boolean;
};
export declare type BalloonRequest = {
    target: Game_Character;
    balloonId: BalloonIconID;
};
