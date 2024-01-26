import { EventBusCallback } from '@splidejs/splide';
import { VideoOptions } from './options';
/**
 * Determines members that must be implemented for the video player.
 *
 * @since 0.5.0
 */
export interface VideoPlayerInterface {
    play(): void;
    pause(): void;
    on(events: string | string[], callback: EventBusCallback): void;
    destroy(): void;
}
/**
 * The interface for the video player constructor.
 *
 * @since 0.5.0
 */
export interface VideoPlayerConstructor {
    new (target: HTMLElement, videoId: string, options?: VideoOptions): VideoPlayerInterface;
}
//# sourceMappingURL=../../../../../../src/js/types/general.d.ts.map