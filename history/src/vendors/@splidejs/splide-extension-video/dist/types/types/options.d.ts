/// <reference types="youtube" />
import { Options as VimeoOptions } from '@vimeo/player';
/**
 * Options for the Video extension.
 *
 * @since 0.5.0
 */
export interface VideoOptions {
    /**
     * Enables autoplay. If `true`, the video of the active slide will automatically start.
     */
    autoplay?: boolean;
    /**
     * Disables the overlay controls such as the play button.
     */
    disableOverlayUI?: boolean;
    /**
     * Requests the video player to hide the player UI.
     */
    hideControls?: boolean;
    /**
     * Loops the video.
     */
    loop?: boolean;
    /**
     * Mutes the video.
     */
    mute?: boolean;
    /**
     * Sets the initial volume by 0.0 - 1.0
     */
    volume?: number;
    /**
     * Overwrites player options.
     */
    playerOptions?: {
        youtube?: YT.PlayerVars;
        vimeo?: VimeoOptions;
        htmlVideo?: HTMLVideoOptions;
    };
}
/**
 * Options for the HTML video player.
 *
 * @since 0.5.0
 */
export interface HTMLVideoOptions {
    autoplay?: boolean;
    controls?: boolean;
    crossOrigin?: string | null;
    currentTime?: number;
    disablePictureInPicture?: boolean;
    disableRemotePlayback?: boolean;
    height?: number;
    loop?: boolean;
    muted?: boolean;
    playbackRate?: number;
    playsInline?: boolean;
    poster?: string;
    preload?: string;
    width?: number;
    volume?: number;
}
//# sourceMappingURL=../../../src/js/types/options.d.ts.map