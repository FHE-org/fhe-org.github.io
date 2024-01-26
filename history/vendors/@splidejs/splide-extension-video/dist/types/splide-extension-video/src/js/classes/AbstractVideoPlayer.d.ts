import { EventBusCallback } from '@splidejs/splide';
import { VideoPlayerInterface } from '../types/general';
import { VideoOptions } from '../types/options';
/**
 * The abstract class for implementing a video player.
 *
 * @since 0.5.0
 */
export declare abstract class AbstractVideoPlayer<T> implements VideoPlayerInterface {
    /**
     * The target element where the player is mounted.
     */
    protected readonly target: HTMLElement;
    /**
     * The video ID or the URL itself.
     */
    protected videoId: string;
    /**
     * Video options.
     */
    protected readonly options: VideoOptions;
    /**
     * The state object.
     */
    protected state: import("@splidejs/splide").StateObject;
    /**
     * The EventBus object.
     */
    protected event: import("@splidejs/splide").EventBusObject;
    /**
     * The player instance.
     */
    protected player: T;
    /**
     * The VideoPlayer constructor.
     *
     * @param target  - A target element where the player is mounted.
     * @param videoId - A video ID or an URL itself.
     * @param options - Optional. Options.
     */
    protected constructor(target: HTMLElement, videoId: string, options?: VideoOptions);
    /**
     * Creates a player.
     *
     * @param videoId - A video ID.
     *
     * @return A VideoPlayerInterface object.
     */
    protected abstract createPlayer(videoId: string): T;
    /**
     * Starts the video.
     */
    protected abstract playVideo(): void;
    /**
     * Pauses the video.
     */
    protected abstract pauseVideo(): void;
    /**
     * Attaches a handler to a specified event or events.
     *
     * @param events   - An event or events to attach a handler to.
     * @param callback - A callback function.
     */
    on(events: string | string[], callback: EventBusCallback): void;
    /**
     * Requests to play the video.
     *
     * @todo invalid ID.
     */
    play(): void;
    /**
     * Requests to pause the video.
     */
    pause(): void;
    /**
     * Destroys the instance.
     */
    destroy(): void;
    /**
     * Called when the player is created.
     */
    protected onPlayerReady(): void;
    /**
     * Called when the video starts.
     */
    protected onPlay(): void;
    /**
     * Called when the video is paused.
     */
    protected onPause(): void;
    /**
     * Called when the video is ended.
     */
    protected onEnded(): void;
}
//# sourceMappingURL=../../../../../../src/js/classes/AbstractVideoPlayer.d.ts.map