import { BaseComponent, Components, Splide } from '@splidejs/splide';
import { VideoOptions } from '../../types/options';
/**
 * Lets the compiler know the type of video options.
 */
declare module '@splidejs/splide' {
    interface Options {
        video?: VideoOptions;
    }
    interface Components {
        Video?: VideoComponent;
    }
}
/**
 * The interface for the Video component.
 *
 * @since 0.5.3
 */
export interface VideoComponent extends BaseComponent {
    play(index?: number): void;
    pause(): void;
    disable(disabled: boolean): void;
}
/**
 * The extension for embedding videos to slides.
 *
 * @since 0.5.0
 *
 * @param Splide     - A Splide instance.
 * @param Components - A collection of components.
 *
 * @return A Video component object.
 */
export declare function Video(Splide: Splide, Components: Components): VideoComponent;
//# sourceMappingURL=../../../../src/js/extensions/Video/Video.d.ts.map