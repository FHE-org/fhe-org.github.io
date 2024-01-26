declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
    }
}
/**
 * The class for loading the YouTube API script.
 *
 * @link https://developers.google.com/youtube/iframe_api_reference
 *
 * @since 0.5.0
 */
export declare class YouTubeIframeAPILoader {
    /**
     * Starts loading the YouTube API script.
     *
     * @param callback - A callback function that will be invoked when the API is ready.
     */
    load(callback: () => void): void;
    /**
     * Checks if the new script tag for the YouTube API should be injected or not.
     *
     * @return `true` if the source
     */
    private shouldLoad;
    /**
     * Attaches the callback function that will be invoked when the API is ready.
     *
     * @param callback - A callback function to invoke.
     */
    private attachCallback;
}
//# sourceMappingURL=../../../../../../../src/js/players/youtube/YouTubeIframeAPILoader.d.ts.map