import { AbstractVideoPlayer } from '../../classes/AbstractVideoPlayer';
import { VideoOptions } from '../../types/options';
/**
 * The wrapper class for the HTML video player.
 *
 * @since 0.5.0
 */
export declare class HTMLVideoPlayer extends AbstractVideoPlayer<HTMLVideoElement> {
    /**
     * The HTMLVideoPlayer constructor.
     *
     * @param target  - A target element where the player is mounted.
     * @param videoId - A video ID or an URL itself.
     * @param options - Options.
     */
    constructor(target: HTMLElement, videoId: string, options?: VideoOptions);
    /**
     * Creates a player.
     *
     * @param videoId - Optional. A video ID or an URL.
     *
     * @return A Vimeo player instance.
     */
    protected createPlayer(videoId: string): HTMLVideoElement;
    /**
     * Starts the video.
     */
    protected playVideo(): void;
    /**
     * Pauses the video.
     */
    protected pauseVideo(): void;
    /**
     * Called when an error occurs.
     */
    protected onError(): void;
    /**
     * Destroys the player.
     */
    destroy(): void;
}
//# sourceMappingURL=../../../../src/js/players/html/HTMLVideoPlayer.d.ts.map