import { AnyFunction } from '@splidejs/splide';
import { VideoOptions } from './options';


/**
 * Determines members that must be implemented for the video player.
 *
 * @since 0.5.0
 */
export interface VideoPlayerInterface {
  play(): void;
  pause(): void;
  isPaused(): boolean;
  on( events: string | string[], callback: AnyFunction ): void;
  destroy(): void;
}

/**
 * The interface for the video player constructor.
 *
 * @since 0.5.0
 */
export interface VideoPlayerConstructor {
  new ( target: HTMLElement, videoId: string, options?: VideoOptions ): VideoPlayerInterface;
}
