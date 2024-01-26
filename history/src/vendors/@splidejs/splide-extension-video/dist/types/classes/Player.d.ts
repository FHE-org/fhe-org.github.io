import { Splide } from '@splidejs/splide';
/**
 * The class for the video player that connects a Splide slide with PlayerUI and VideoPlayer instances.
 *
 * @since 0.5.0
 */
export declare class Player {
    /**
     * The Splide instance.
     */
    private readonly Splide;
    /**
     * The slide element.
     */
    private readonly slide;
    /**
     * Video options.
     */
    private readonly options;
    /**
     * The PlayerUI instance.
     */
    private ui;
    /**
     * The VideoPlayer instance.
     */
    private player;
    /**
     * The EventInterface object.
     */
    private event;
    /**
     * Indicates whether the player is disabled or not.
     */
    private disabled;
    /**
     * The Player constructor.
     *
     * @param Splide - A Splide instance.
     * @param slide  - A slide element where the player is applied.
     */
    constructor(Splide: Splide, slide: HTMLElement);
    /**
     * Creates a Player.
     * This will fail when the slide element does not have the data attribute for the video.
     *
     * @param slide - A slide element.
     */
    private createPlayer;
    /**
     * Listens to UI, VideoPlayer and Splide events.
     */
    private listen;
    /**
     * Called when the slide element is clicked.
     */
    private onClick;
    /**
     * Called when any slides that have a video are clicked.
     *
     * @param player - A player instance that the clicked slide has.
     */
    private onVideoClick;
    /**
     * Called when the video is requested to start.
     * The video may be loading at this moment.
     */
    private onPlay;
    /**
     * Called when the video begins.
     */
    private onPlayed;
    /**
     * Called when the video is requested to pause.
     */
    private onPause;
    /**
     * Called when the video is paused.
     */
    private onPaused;
    /**
     * Called when the video ends.
     */
    private onEnded;
    /**
     * Called when an error occurs.
     */
    private onError;
    /**
     * Called when the autoplay option is `true` and the slider should start the video.
     */
    private onAutoplayRequested;
    /**
     * Toggles the playing status class.
     *
     * @param add - Determines whether to add or remove the class.
     */
    private togglePlaying;
    /**
     * Starts the video.
     */
    play(): void;
    /**
     * Pauses the video.
     */
    pause(): void;
    /**
     * Destroys the instance.
     */
    destroy(): void;
    /**
     * Disables the play/pause control.
     */
    disable(disabled: boolean): void;
    /**
     * Checks if the video is paused or not.
     *
     * @return `true` if the video is paused.
     */
    isPaused(): boolean;
}
//# sourceMappingURL=../../../src/js/classes/Player.d.ts.map