import { WebAudio } from "../core";
import { DataAudio } from "../data";
/**
 * AudioManager
 *
 * The static class that handles BGM, BGS, ME and SE.
 */
export declare class AudioManager {
    constructor();
    static _bgmVolume: number;
    static _bgsVolume: number;
    static _meVolume: number;
    static _seVolume: number;
    static _currentBgm: DataAudio | null;
    static _currentBgs: DataAudio | null;
    static _bgmBuffer: WebAudio | null;
    static _bgsBuffer: WebAudio | null;
    static _meBuffer: WebAudio | null;
    static _seBuffers: WebAudio[];
    static _staticBuffers: WebAudio[];
    static _replayFadeTime: number;
    static _path: string;
    static get bgmVolume(): number;
    static set bgmVolume(value: number);
    static get bgsVolume(): number;
    static set bgsVolume(value: number);
    static get meVolume(): number;
    static set meVolume(value: number);
    static get seVolume(): number;
    static set seVolume(value: number);
    static playBgm(bgm: DataAudio, pos?: number): void;
    static replayBgm(bgm: DataAudio): void;
    static isCurrentBgm(bgm: DataAudio): boolean | null;
    static updateBgmParameters(bgm: DataAudio | null): void;
    static updateCurrentBgm(bgm: DataAudio, pos?: number): void;
    static stopBgm(): void;
    static fadeOutBgm(duration: number): void;
    static fadeInBgm(duration: number): void;
    static playBgs(bgs: DataAudio, pos?: number): void;
    static replayBgs(bgs: DataAudio): void;
    static isCurrentBgs(bgs: DataAudio): boolean | null;
    static updateBgsParameters(bgs: DataAudio | null): void;
    static updateCurrentBgs(bgs: DataAudio, pos?: number): void;
    static stopBgs(): void;
    static fadeOutBgs(duration: number): void;
    static fadeInBgs(duration: number): void;
    static playMe(me: DataAudio): void;
    static updateMeParameters(me: DataAudio | null): void;
    static fadeOutMe(duration: number): void;
    static stopMe(): void;
    static playSe(se: DataAudio): void;
    static updateSeParameters(buffer: WebAudio, se: DataAudio | null): void;
    static cleanupSe(): void;
    static stopSe(): void;
    static playStaticSe(se: DataAudio): void;
    static loadStaticSe(se: DataAudio): void;
    static isStaticSe(se: DataAudio): boolean;
    static stopAll(): void;
    static saveBgm(): DataAudio;
    static saveBgs(): DataAudio;
    static makeEmptyAudioObject(): DataAudio;
    static createBuffer(folder: string, name: string): WebAudio;
    static updateBufferParameters(buffer: WebAudio | null, configVolume: number, audio: DataAudio | null): void;
    static audioFileExt(): string;
    static checkErrors(): void;
    static throwLoadError(webAudio: WebAudio): void;
}
