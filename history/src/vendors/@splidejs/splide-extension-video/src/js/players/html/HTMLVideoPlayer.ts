import { assign, clamp, create } from '@splidejs/splide/src/js/utils';
import { AbstractVideoPlayer } from '../../classes/AbstractVideoPlayer';
import { IDLE, INITIALIZED, PLAY_REQUEST_ABORTED } from '../../constants/states';
import { VideoOptions } from '../../types/options';


/**
 * The wrapper class for the HTML video player.
 *
 * @since 0.5.0
 */
export class HTMLVideoPlayer extends AbstractVideoPlayer<HTMLVideoElement> {
  /**
   * The HTMLVideoPlayer constructor.
   *
   * @param target  - A target element where the player is mounted.
   * @param videoId - A video ID or an URL itself.
   * @param options - Options.
   */
  constructor( target: HTMLElement, videoId: string, options: VideoOptions = {} ) {
    super( target, videoId, options );
    this.state.set( INITIALIZED );
  }

  /**
   * Creates a player.
   *
   * @param videoId - Optional. A video ID or an URL.
   *
   * @return A Vimeo player instance.
   */
  protected createPlayer( videoId: string ): HTMLVideoElement {
    const { options, options: { playerOptions = {} } } = this;
    const player = create( 'video', { src: videoId }, this.target );
    const on     = player.addEventListener.bind( player );

    assign( player, {
      controls: ! options.hideControls,
      loop    : options.loop,
      volume  : clamp( options.volume, 0, 1 ),
      muted   : options.mute,
    }, playerOptions.htmlVideo || {} );

    on( 'play', this.onPlay );
    on( 'pause', this.onPause );
    on( 'ended', this.onEnded );
    on( 'loadeddata', this.onPlayerReady );
    on( 'error', this.onError );

    return player;
  }

  /**
   * Starts the video.
   */
  protected playVideo(): void {
    const promise = this.player.play();
    promise && promise.catch( this.onError.bind( this ) );
  }

  /**
   * Pauses the video.
   */
  protected pauseVideo(): void {
    this.player.pause();
  }

  /**
   * Called when an error occurs.
   */
  protected onError(): void {
    if ( this.state.is( PLAY_REQUEST_ABORTED ) ) {
      this.state.set( IDLE );
    } else {
      super.onError();
    }
  }

  /**
   * Destroys the player.
   */
  destroy(): void {
    super.destroy();

    const { player } = this;
    const off = player.addEventListener.bind( player );

    off( 'play', this.onPlay );
    off( 'pause', this.onPause );
    off( 'ended', this.onEnded );
    off( 'loadeddata', this.onPlayerReady );
  }
}
