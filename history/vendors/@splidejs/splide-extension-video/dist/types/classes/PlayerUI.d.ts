import { AnyFunction, Splide } from '@splidejs/splide';
/**
 * The class for the UI of the video player.
 *
 * @since 0.5.0
 */
export declare class PlayerUI {
    /**
     * The Splide instance.
     */
    private Splide;
    /**
     * The slide element.
     */
    private readonly slide;
    /**
     * The parent element of the video, which may be the slide or the container element.
     */
    private parent;
    /**
     * Keeps the modifier class name.
     */
    private modifier;
    /**
     * The EventBus object.
     */
    private readonly event;
    /**
     * Indicates whether the UI is disabled or not.
     */
    private disabled;
    /**
     * The wrapper element that contains the wrapper and the play button.
     */
    private video;
    /**
     * The wrapper element that contains the video.
     */
    private wrapper;
    /**
     * The placeholder element.
     * - YouTube  : Will replace this element by an iframe
     * - Vimeo    : Will append an iframe to this
     * - HTMLVideo: Will append an video element to this
     */
    private placeholder;
    /**
     * The button element for play.
     */
    private playButton;
    /**
     * The PlayerUI constructor.
     *
     * @param Splide - A Splide instance.
     * @param slide  - A slide element where the player is mounted.
     */
    constructor(Splide: Splide, slide: HTMLElement);
    /**
     * Initializes the instance.
     */
    private init;
    /**
     * Creates wrapper, placeholder and button elements.
     */
    private create;
    /**
     * Listens to some events.
     */
    private listen;
    /**
     * Toggles the play button.
     *
     * @param show - Determines whether to show or hide the button.
     */
    private toggleButton;
    /**
     * Toggles the wrapper element.
     *
     * @param show - Determines whether to show or hide the button.
     */
    private toggleWrapper;
    /**
     * Returns the placeholder element.
     */
    getPlaceholder(): HTMLDivElement;
    /**
     * Hides UI and displays the video.
     */
    hide(): void;
    /**
     * Displays UI and hides the video.
     */
    show(): void;
    /**
     * Disables UI (the play button) displays on the slide.
     *
     * @param disabled - Determines whether to disable UI or not.
     */
    disable(disabled: boolean): void;
    /**
     * Attaches an event handler.
     *
     * @param events   - An event or events.
     * @param callback - A callback function.
     */
    on(events: string | string[], callback: AnyFunction): void;
    /**
     * Destroys the instance.
     */
    destroy(): void;
}
//# sourceMappingURL=../../../src/js/classes/PlayerUI.d.ts.map