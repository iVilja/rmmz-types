---
title: core/WebAudio.d.ts
nav_order: 19
parent: Modules
---

## WebAudio.d overview

/// <reference types="node" />

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [WebAudio (class)](#webaudio-class)
    - [initialize (static method)](#initialize-static-method)
    - [setMasterVolume (static method)](#setmastervolume-static-method)
    - [\_createContext (static method)](#_createcontext-static-method)
    - [\_currentTime (static method)](#_currenttime-static-method)
    - [\_createMasterGainNode (static method)](#_createmastergainnode-static-method)
    - [\_setupEventHandlers (static method)](#_setupeventhandlers-static-method)
    - [\_onUserGesture (static method)](#_onusergesture-static-method)
    - [\_onVisibilityChange (static method)](#_onvisibilitychange-static-method)
    - [\_onHide (static method)](#_onhide-static-method)
    - [\_onShow (static method)](#_onshow-static-method)
    - [\_shouldMuteOnHide (static method)](#_shouldmuteonhide-static-method)
    - [\_resetVolume (static method)](#_resetvolume-static-method)
    - [\_fadeIn (static method)](#_fadein-static-method)
    - [\_fadeOut (static method)](#_fadeout-static-method)
    - [clear (method)](#clear-method)
    - [isReady (method)](#isready-method)
    - [isError (method)](#iserror-method)
    - [isPlaying (method)](#isplaying-method)
    - [play (method)](#play-method)
    - [stop (method)](#stop-method)
    - [destroy (method)](#destroy-method)
    - [fadeIn (method)](#fadein-method)
    - [fadeOut (method)](#fadeout-method)
    - [seek (method)](#seek-method)
    - [addLoadListener (method)](#addloadlistener-method)
    - [addStopListener (method)](#addstoplistener-method)
    - [retry (method)](#retry-method)
    - [\_startLoading (method)](#_startloading-method)
    - [\_shouldUseDecoder (method)](#_shouldusedecoder-method)
    - [\_createDecoder (method)](#_createdecoder-method)
    - [\_destroyDecoder (method)](#_destroydecoder-method)
    - [\_realUrl (method)](#_realurl-method)
    - [\_startXhrLoading (method)](#_startxhrloading-method)
    - [\_startFetching (method)](#_startfetching-method)
    - [\_onXhrLoad (method)](#_onxhrload-method)
    - [\_onFetch (method)](#_onfetch-method)
    - [\_onError (method)](#_onerror-method)
    - [\_onFetchProcess (method)](#_onfetchprocess-method)
    - [\_updateBufferOnFetch (method)](#_updatebufferonfetch-method)
    - [\_concatenateFetchedData (method)](#_concatenatefetcheddata-method)
    - [\_updateBuffer (method)](#_updatebuffer-method)
    - [\_readableBuffer (method)](#_readablebuffer-method)
    - [\_decodeAudioData (method)](#_decodeaudiodata-method)
    - [\_onDecode (method)](#_ondecode-method)
    - [\_refreshSourceNode (method)](#_refreshsourcenode-method)
    - [\_startPlaying (method)](#_startplaying-method)
    - [\_startAllSourceNodes (method)](#_startallsourcenodes-method)
    - [\_startSourceNode (method)](#_startsourcenode-method)
    - [\_stopSourceNode (method)](#_stopsourcenode-method)
    - [\_createPannerNode (method)](#_createpannernode-method)
    - [\_createGainNode (method)](#_creategainnode-method)
    - [\_createAllSourceNodes (method)](#_createallsourcenodes-method)
    - [\_createSourceNode (method)](#_createsourcenode-method)
    - [\_removeNodes (method)](#_removenodes-method)
    - [\_createEndTimer (method)](#_createendtimer-method)
    - [\_removeEndTimer (method)](#_removeendtimer-method)
    - [\_updatePanner (method)](#_updatepanner-method)
    - [\_onLoad (method)](#_onload-method)
    - [\_readLoopComments (method)](#_readloopcomments-method)
    - [\_readMetaData (method)](#_readmetadata-method)
    - [\_readFourCharacters (method)](#_readfourcharacters-method)
    - [name (property)](#name-property)
    - [frameCount (property)](#framecount-property)
    - [\_url (property)](#_url-property)
    - [\_data (property)](#_data-property)
    - [\_fetchedSize (property)](#_fetchedsize-property)
    - [\_fetchedData (property)](#_fetcheddata-property)
    - [\_buffers (property)](#_buffers-property)
    - [\_sourceNodes (property)](#_sourcenodes-property)
    - [\_gainNode (property)](#_gainnode-property)
    - [\_pannerNode (property)](#_pannernode-property)
    - [\_totalTime (property)](#_totaltime-property)
    - [\_sampleRate (property)](#_samplerate-property)
    - [\_loop (property)](#_loop-property)
    - [\_loopStart (property)](#_loopstart-property)
    - [\_loopLength (property)](#_looplength-property)
    - [\_loopStartTime (property)](#_loopstarttime-property)
    - [\_loopLengthTime (property)](#_looplengthtime-property)
    - [\_startTime (property)](#_starttime-property)
    - [\_volume (property)](#_volume-property)
    - [\_pitch (property)](#_pitch-property)
    - [\_pan (property)](#_pan-property)
    - [\_endTimer (property)](#_endtimer-property)
    - [\_loadListeners (property)](#_loadlisteners-property)
    - [\_stopListeners (property)](#_stoplisteners-property)
    - [\_lastUpdateTime (property)](#_lastupdatetime-property)
    - [\_isLoaded (property)](#_isloaded-property)
    - [\_isError (property)](#_iserror-property)
    - [\_isPlaying (property)](#_isplaying-property)
    - [\_decoder (property)](#_decoder-property)

---

# utils

## WebAudio (class)

The audio object of Web Audio API.

**Signature**

```ts
export declare class WebAudio {
  constructor(url: string)
}
```

### initialize (static method)

Initializes the audio system.

**Signature**

```ts
static initialize(): boolean;
```

### setMasterVolume (static method)

Sets the master volume for all audio.

**Signature**

```ts
static setMasterVolume(value: number): void;
```

### \_createContext (static method)

**Signature**

```ts
static _createContext(): void;
```

### \_currentTime (static method)

**Signature**

```ts
static _currentTime(): number;
```

### \_createMasterGainNode (static method)

**Signature**

```ts
static _createMasterGainNode(): void;
```

### \_setupEventHandlers (static method)

**Signature**

```ts
static _setupEventHandlers(): void;
```

### \_onUserGesture (static method)

**Signature**

```ts
static _onUserGesture(): void;
```

### \_onVisibilityChange (static method)

**Signature**

```ts
static _onVisibilityChange(): void;
```

### \_onHide (static method)

**Signature**

```ts
static _onHide(): void;
```

### \_onShow (static method)

**Signature**

```ts
static _onShow(): void;
```

### \_shouldMuteOnHide (static method)

**Signature**

```ts
static _shouldMuteOnHide(): boolean;
```

### \_resetVolume (static method)

**Signature**

```ts
static _resetVolume(): void;
```

### \_fadeIn (static method)

**Signature**

```ts
static _fadeIn(duration: number): void;
```

### \_fadeOut (static method)

**Signature**

```ts
static _fadeOut(duration: number): void;
```

### clear (method)

Clears the audio data.

**Signature**

```ts
clear(): void;
```

### isReady (method)

Checks whether the audio data is ready to play.

**Signature**

```ts
isReady(): boolean;
```

### isError (method)

Checks whether a loading error has occurred.

**Signature**

```ts
isError(): boolean;
```

### isPlaying (method)

Checks whether the audio is playing.

**Signature**

```ts
isPlaying(): boolean;
```

### play (method)

Plays the audio.

**Signature**

```ts
play(loop: boolean, offset?: number): void;
```

### stop (method)

Stops the audio.

**Signature**

```ts
stop(): void;
```

### destroy (method)

Destroys the audio.

**Signature**

```ts
destroy(): void;
```

### fadeIn (method)

Performs the audio fade-in.

**Signature**

```ts
fadeIn(duration: number): void;
```

### fadeOut (method)

Performs the audio fade-out.

**Signature**

```ts
fadeOut(duration: number): void;
```

### seek (method)

Gets the seek position of the audio.

**Signature**

```ts
seek(): number;
```

### addLoadListener (method)

Adds a callback function that will be called when the audio data is loaded.

**Signature**

```ts
addLoadListener(listner: () => void): void;
```

### addStopListener (method)

Adds a callback function that will be called when the playback is stopped.

**Signature**

```ts
addStopListener(listner: () => void): void;
```

### retry (method)

Tries to load the audio again.

**Signature**

```ts
retry(): void;
```

### \_startLoading (method)

**Signature**

```ts
_startLoading(): void;
```

### \_shouldUseDecoder (method)

**Signature**

```ts
_shouldUseDecoder(): boolean;
```

### \_createDecoder (method)

**Signature**

```ts
_createDecoder(): void;
```

### \_destroyDecoder (method)

**Signature**

```ts
_destroyDecoder(): void;
```

### \_realUrl (method)

**Signature**

```ts
_realUrl(): string;
```

### \_startXhrLoading (method)

**Signature**

```ts
_startXhrLoading(url: string): void;
```

### \_startFetching (method)

**Signature**

```ts
_startFetching(url: string): void;
```

### \_onXhrLoad (method)

**Signature**

```ts
_onXhrLoad(xhr: XMLHttpRequest): void;
```

### \_onFetch (method)

**Signature**

```ts
_onFetch(response: Response): void;
```

### \_onError (method)

**Signature**

```ts
_onError(): void;
```

### \_onFetchProcess (method)

**Signature**

```ts
_onFetchProcess(value: Uint8Array): void;
```

### \_updateBufferOnFetch (method)

**Signature**

```ts
_updateBufferOnFetch(): void;
```

### \_concatenateFetchedData (method)

**Signature**

```ts
_concatenateFetchedData(): void;
```

### \_updateBuffer (method)

**Signature**

```ts
_updateBuffer(): void;
```

### \_readableBuffer (method)

**Signature**

```ts
_readableBuffer(): ArrayBufferLike;
```

### \_decodeAudioData (method)

**Signature**

```ts
_decodeAudioData(arrayBuffer: ArrayBuffer): void;
```

### \_onDecode (method)

**Signature**

```ts
_onDecode(buffer: AudioBuffer): void;
```

### \_refreshSourceNode (method)

**Signature**

```ts
_refreshSourceNode(): void;
```

### \_startPlaying (method)

**Signature**

```ts
_startPlaying(offset: number): void;
```

### \_startAllSourceNodes (method)

**Signature**

```ts
_startAllSourceNodes(): void;
```

### \_startSourceNode (method)

**Signature**

```ts
_startSourceNode(index: number): void;
```

### \_stopSourceNode (method)

**Signature**

```ts
_stopSourceNode(): void;
```

### \_createPannerNode (method)

**Signature**

```ts
_createPannerNode(): void;
```

### \_createGainNode (method)

**Signature**

```ts
_createGainNode(): void;
```

### \_createAllSourceNodes (method)

**Signature**

```ts
_createAllSourceNodes(): void;
```

### \_createSourceNode (method)

**Signature**

```ts
_createSourceNode(index: number): void;
```

### \_removeNodes (method)

**Signature**

```ts
_removeNodes(): void;
```

### \_createEndTimer (method)

**Signature**

```ts
_createEndTimer(): void;
```

### \_removeEndTimer (method)

**Signature**

```ts
_removeEndTimer(): void;
```

### \_updatePanner (method)

**Signature**

```ts
_updatePanner(): void;
```

### \_onLoad (method)

**Signature**

```ts
_onLoad(): void;
```

### \_readLoopComments (method)

**Signature**

```ts
_readLoopComments(arrayBuffer: ArrayBuffer): void;
```

### \_readMetaData (method)

**Signature**

```ts
_readMetaData(view: DataView, index: number, size: number): void;
```

### \_readFourCharacters (method)

**Signature**

```ts
_readFourCharacters(view: DataView, index: number): string;
```

### name (property)

**Signature**

```ts
name: string
```

### frameCount (property)

**Signature**

```ts
frameCount: number
```

### \_url (property)

**Signature**

```ts
_url: string
```

### \_data (property)

**Signature**

```ts
_data: Uint8Array | null
```

### \_fetchedSize (property)

**Signature**

```ts
_fetchedSize: number
```

### \_fetchedData (property)

**Signature**

```ts
_fetchedData: Uint8Array[]
```

### \_buffers (property)

**Signature**

```ts
_buffers: AudioBuffer[]
```

### \_sourceNodes (property)

**Signature**

```ts
_sourceNodes: AudioBufferSourceNode[]
```

### \_gainNode (property)

**Signature**

```ts
_gainNode: GainNode | null
```

### \_pannerNode (property)

**Signature**

```ts
_pannerNode: PannerNode | null
```

### \_totalTime (property)

**Signature**

```ts
_totalTime: number
```

### \_sampleRate (property)

**Signature**

```ts
_sampleRate: number
```

### \_loop (property)

**Signature**

```ts
_loop: boolean
```

### \_loopStart (property)

**Signature**

```ts
_loopStart: number
```

### \_loopLength (property)

**Signature**

```ts
_loopLength: number
```

### \_loopStartTime (property)

**Signature**

```ts
_loopStartTime: number
```

### \_loopLengthTime (property)

**Signature**

```ts
_loopLengthTime: number
```

### \_startTime (property)

**Signature**

```ts
_startTime: number
```

### \_volume (property)

**Signature**

```ts
_volume: number
```

### \_pitch (property)

**Signature**

```ts
_pitch: number
```

### \_pan (property)

**Signature**

```ts
_pan: number
```

### \_endTimer (property)

**Signature**

```ts
_endTimer: NodeJS.Timeout | null
```

### \_loadListeners (property)

**Signature**

```ts
_loadListeners: (() => void)[]
```

### \_stopListeners (property)

**Signature**

```ts
_stopListeners: (() => void)[]
```

### \_lastUpdateTime (property)

**Signature**

```ts
_lastUpdateTime: number
```

### \_isLoaded (property)

**Signature**

```ts
_isLoaded: boolean
```

### \_isError (property)

**Signature**

```ts
_isError: boolean
```

### \_isPlaying (property)

**Signature**

```ts
_isPlaying: boolean
```

### \_decoder (property)

**Signature**

```ts
_decoder: VorbisDecoder | null
```
