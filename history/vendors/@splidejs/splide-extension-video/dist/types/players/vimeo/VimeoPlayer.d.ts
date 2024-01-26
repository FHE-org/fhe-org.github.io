import Vimeo from '@vimeo/player';
import { AbstractVideoPlayer } from '../../classes/AbstractVideoPlayer';
import { VideoOptions } from '../../types/options';
/**
 * The wrapper class for the Vimeo player.
 *
 * @since 0.5.0
 */
export declare class VimeoPlayer extends AbstractVideoPlayer<Vimeo> {
    /**
     * The VimeoPlayer constructor.
     *
     * @param target  - A target element where the player is mounted.
     * @param videoId - A video ID or an URL itself.
     * @param options - Optional. Options.
     */
    constructor(target: HTMLElement, videoId: string, options?: VideoOptions);
    /**
     * Creates a player.
     * The `hideControls` option now only work for PRO users.
     * Note that passing null/undefined can not disable each option.
     *
     * @param videoId - Optional. A video ID or an URL.
     *
     * @return A Vimeo player instance.
     */
    protected createPlayer(videoId: string): Vimeo;
    /**
     * Starts the video.
     */
    protected playVideo(): void;
    /**
     * Pauses the video.
     */
    protected pauseVideo(): void;
}
//# sourceMappingURL=../../../../src/js/players/vimeo/VimeoPlayer.d.ts.map