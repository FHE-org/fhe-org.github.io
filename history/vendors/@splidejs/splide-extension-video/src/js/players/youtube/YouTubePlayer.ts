import { assign, find, clamp } from '@splidejs/splide/src/js/utils';
import { AbstractVideoPlayer } from '../../classes/AbstractVideoPlayer';
import { INITIALIZED, INITIALIZING, PENDING_PLAY } from '../../constants/states';
import { VideoOptions } from '../../types/options';
import { YouTubeIframeAPILoader } from './YouTubeIframeAPILoader';


/**
 * The wrapper class for the YouTube player.
 *
 * @since 0.5.0
 */
export class YouTubePlayer extends AbstractVideoPlayer<YT.Player> {
  /**
   * The YouTubePlayer constructor.
   *
   * @param target  - A target element where the player is mounted.
   * @param videoId - A video ID or an URL itself.
   * @param options - Optional. Options.
   */
  constructor( target: HTMLElement, videoId: string, options: VideoOptions = {} ) {
    super( target, videoId, options );

    this.videoId = this.parseVideoId( videoId );

    if ( this.videoId ) {
      this.state.set( INITIALIZING );
      new YouTubeIframeAPILoader().load( this.onAPIReady.bind( this ) );
    }
  }

  /**
   * Called when the YouTube iframe API is ready.
   */
  private onAPIReady(): void {
    const { state } = this;
    const isPending = state.is( PENDING_PLAY );

    state.set( INITIALIZED );

    if ( isPending ) {
      this.play();
    }
  }

  /**
   * Creates a player.
   * Note that the `loop` does not work without the `playlist` parameter.
   *
   * @link https://developers.google.com/youtube/player_parameters
   *
   * @param videoId - Optional. A video ID.
   *
   * @return A YT.Player instance.
   */
  protected createPlayer( videoId: string ): YT.Player {
    const { options, options: { playerOptions = {} } } = this;

    return new YT.Player( this.target, {
      videoId,
      playerVars: assign( {
        controls      : options.hideControls ? 0 : 1,
        iv_load_policy: 3, // eslint-disable-line camelcase
        loop          : options.loop ? 1 : 0,
        playlist      : options.loop ? videoId : undefined,
        rel           : 0,
        autoplay      : 0,
        mute          : options.mute ? 1 : 0,
      }, playerOptions.youtube || {} ),
      events: {
        onReady      : this.onPlayerReady.bind( this ),
        onStateChange: this.onPlayerStateChange.bind( this ),
        onError      : this.onError.bind( this ),
      },
    } );
  }

  /**
   * Called when the player becomes ready.
   */
  protected onPlayerReady(): void {
    super.onPlayerReady();
    this.player.setVolume( clamp( this.options.volume, 0, 1 ) * 100 );
  }

  /**
   * Called when the YouTube player state is changed.
   *
   * @param e - A YT.OnStateChangeEvent object.
   */
  private onPlayerStateChange( e: YT.OnStateChangeEvent ): void {
    const { PLAYING, PAUSED, ENDED } = YT.PlayerState;

    switch ( true ) {
      case e.data === PLAYING:
        this.onPlay();
        break;

      case e.data === PAUSED:
        this.onPause();
        break;

      case e.data === ENDED:
        this.onEnded();
        break;
    }
  }

  /**
   * Starts the video.
   */
  protected playVideo(): void {
    this.player.playVideo();
  }

  /**
   * Pauses the video.
   */
  protected pauseVideo(): void {
    this.player.pauseVideo();
  }

  /**
   * Parses the video ID.
   * If it is an URL, plucks the ID from it.
   *
   * @param id - An ID to parse.
   *
   * @return A video ID if available, or otherwise `undefined`.
   */
  private parseVideoId( id: string ): string | undefined {
    return id.indexOf( 'http' ) === 0 ? this.parseUrl( id ) : id;
  }

  /**
   * Plucks the ID from the provided URL.
   *
   * @param url - An URL to parse.
   *
   * @return A video ID if available, or otherwise `undefined`.
   */
  private parseUrl( url: string ): string | undefined {
    const [ , search ] = url.split( /[#?]/ );
    const query = find( search.split( '&' ), query => query.indexOf( 'v=' ) === 0 );
    return query && query.replace( 'v=', '' );
  }
}
