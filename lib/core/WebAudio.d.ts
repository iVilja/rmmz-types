/// <reference types="node" />
/**
 * The audio object of Web Audio API.
 *
 * @class
 * @param {string} url - The url of the audio file.
 */
export declare class WebAudio {
    name: string;
    frameCount: number;
    _url: string;
    static _context: AudioContext | null;
    static _masterGainNode: GainNode | null;
    static _masterVolume: number;
    _data: Uint8Array | null;
    _fetchedSize: number;
    _fetchedData: Uint8Array[];
    _buffers: AudioBuffer[];
    _sourceNodes: AudioBufferSourceNode[];
    _gainNode: GainNode | null;
    _pannerNode: PannerNode | null;
    _totalTime: number;
    _sampleRate: number;
    _loop: boolean;
    _loopStart: number;
    _loopLength: number;
    _loopStartTime: number;
    _loopLengthTime: number;
    _startTime: number;
    _volume: number;
    _pitch: number;
    _pan: number;
    _endTimer: NodeJS.Timeout | null;
    _loadListeners: Array<() => void>;
    _stopListeners: Array<() => void>;
    _lastUpdateTime: number;
    _isLoaded: boolean;
    _isError: boolean;
    _isPlaying: boolean;
    _decoder: VorbisDecoder | null;
    constructor(url: string);
    /**
     * Initializes the audio system.
     *
     * @returns {boolean} True if the audio system is available.
     */
    static initialize(): boolean;
    /**
     * Sets the master volume for all audio.
     *
     * @param {number} value - The master volume (0 to 1).
     */
    static setMasterVolume(value: number): void;
    static _createContext(): void;
    static _currentTime(): number;
    static _createMasterGainNode(): void;
    static _setupEventHandlers(): void;
    static _onUserGesture(): void;
    static _onVisibilityChange(): void;
    static _onHide(): void;
    static _onShow(): void;
    static _shouldMuteOnHide(): boolean;
    static _resetVolume(): void;
    static _fadeIn(duration: number): void;
    static _fadeOut(duration: number): void;
    /**
     * Clears the audio data.
     */
    clear(): void;
    /**
     * The url of the audio file.
     *
     * @readonly
     * @type string
     * @name WebAudio#url
     */
    get url(): string;
    /**
     * The volume of the audio.
     *
     * @type number
     * @name WebAudio#volume
     */
    get volume(): number;
    set volume(value: number);
    /**
     * The pitch of the audio.
     *
     * @type number
     * @name WebAudio#pitch
     */
    get pitch(): number;
    set pitch(value: number);
    /**
     * The pan of the audio.
     *
     * @type number
     * @name WebAudio#pan
     */
    get pan(): number;
    set pan(value: number);
    /**
     * Checks whether the audio data is ready to play.
     *
     * @returns {boolean} True if the audio data is ready to play.
     */
    isReady(): boolean;
    /**
     * Checks whether a loading error has occurred.
     *
     * @returns {boolean} True if a loading error has occurred.
     */
    isError(): boolean;
    /**
     * Checks whether the audio is playing.
     *
     * @returns {boolean} True if the audio is playing.
     */
    isPlaying(): boolean;
    /**
     * Plays the audio.
     *
     * @param {boolean} loop - Whether the audio data play in a loop.
     * @param {number} offset - The start position to play in seconds.
     */
    play(loop: boolean, offset?: number): void;
    /**
     * Stops the audio.
     */
    stop(): void;
    /**
     * Destroys the audio.
     */
    destroy(): void;
    /**
     * Performs the audio fade-in.
     *
     * @param {number} duration - Fade-in time in seconds.
     */
    fadeIn(duration: number): void;
    /**
     * Performs the audio fade-out.
     *
     * @param {number} duration - Fade-out time in seconds.
     */
    fadeOut(duration: number): void;
    /**
     * Gets the seek position of the audio.
     */
    seek(): number;
    /**
     * Adds a callback function that will be called when the audio data is loaded.
     *
     * @param {function} listner - The callback function.
     */
    addLoadListener(listner: () => void): void;
    /**
     * Adds a callback function that will be called when the playback is stopped.
     *
     * @param {function} listner - The callback function.
     */
    addStopListener(listner: () => void): void;
    /**
     * Tries to load the audio again.
     */
    retry(): void;
    _startLoading(): void;
    _shouldUseDecoder(): boolean;
    _createDecoder(): void;
    _destroyDecoder(): void;
    _realUrl(): string;
    _startXhrLoading(url: string): void;
    _startFetching(url: string): void;
    _onXhrLoad(xhr: XMLHttpRequest): void;
    _onFetch(response: Response): void;
    _onError(): void;
    _onFetchProcess(value: Uint8Array): void;
    _updateBufferOnFetch(): void;
    _concatenateFetchedData(): void;
    _updateBuffer(): void;
    _readableBuffer(): ArrayBufferLike;
    _decodeAudioData(arrayBuffer: ArrayBuffer): void;
    _onDecode(buffer: AudioBuffer): void;
    _refreshSourceNode(): void;
    _startPlaying(offset: number): void;
    _startAllSourceNodes(): void;
    _startSourceNode(index: number): void;
    _stopSourceNode(): void;
    _createPannerNode(): void;
    _createGainNode(): void;
    _createAllSourceNodes(): void;
    _createSourceNode(index: number): void;
    _removeNodes(): void;
    _createEndTimer(): void;
    _removeEndTimer(): void;
    _updatePanner(): void;
    _onLoad(): void;
    _readLoopComments(arrayBuffer: ArrayBuffer): void;
    _readMetaData(view: DataView, index: number, size: number): void;
    _readFourCharacters(view: DataView, index: number): string;
}
