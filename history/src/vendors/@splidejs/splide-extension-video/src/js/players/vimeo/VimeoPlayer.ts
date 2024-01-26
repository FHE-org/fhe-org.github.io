import { assign, clamp } from '@splidejs/splide/src/js/utils';
import Vimeo from '@vimeo/player';
import { AbstractVideoPlayer } from '../../classes/AbstractVideoPlayer';
import { IDLE, INITIALIZED, PLAY_REQUEST_ABORTED } from '../../constants/states';
import { VideoOptions } from '../../types/options';


/**
 * The wrapper class for the Vimeo player.
 *
 * @since 0.5.0
 */
export class VimeoPlayer extends AbstractVideoPlayer<Vimeo> {
  /**
   * The VimeoPlayer constructor.
   *
   * @param target  - A target element where the player is mounted.
   * @param videoId - A video ID or an URL itself.
   * @param options - Optional. Options.
   */
  constructor( target: HTMLElement, videoId: string, options: VideoOptions = {} ) {
    super( target, videoId, options );
    this.state.set( INITIALIZED );
  }

  /**
   * Creates a player.
   * The `hideControls` option now only work for PRO users.
   * Note that passing null/undefined can not disable each option.
   *
   * @param videoId - Optional. A video ID or an URL.
   *
   * @return A Vimeo player instance.
   */
  protected createPlayer( videoId: string ): Vimeo {
    const { options, options: { playerOptions = {} } } = this;
    const vimeoOptions = videoId.indexOf( 'http' ) === 0 ? { url: videoId } : { id: +videoId };

    const player = new Vimeo( this.target, assign( vimeoOptions, {
      controls: ! options.hideControls,
      loop    : options.loop,
      muted   : options.mute,
    }, playerOptions.vimeo || {} ) );

    player.on( 'play', this.onPlay );
    player.on( 'pause', this.onPause );
    player.on( 'ended', this.onEnded );
    player.ready().then( this.onPlayerReady, this.onError );

    if ( ! player.getMuted() ) {
      player.setVolume( clamp( options.volume, 0, 1 ) );
    }

    return player;
  }

  /**
   * Starts the video.
   */
  protected playVideo(): void {
    this.player.play().catch( () => {
      if ( this.state.is( PLAY_REQUEST_ABORTED ) ) {
        this.state.set( IDLE );
      }
    } );
  }

  /**
   * Pauses the video.
   */
  protected pauseVideo(): void {
    this.player.pause();
  }
}
