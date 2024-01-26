import { AnyFunction, EventInterface, State } from '@splidejs/splide';
import { error } from '@splidejs/splide/src/js/utils';
import {
  ERROR,
  IDLE,
  INITIALIZED,
  INITIALIZING,
  LOADING,
  NOT_INITIALIZED,
  PENDING_PLAY,
  PLAY_REQUEST_ABORTED,
  PLAYING,
} from '../constants/states';
import { VideoPlayerInterface } from '../types/general';
import { VideoOptions } from '../types/options';


/**
 * The abstract class for implementing a video player.
 *
 * @since 0.5.0
 */
export abstract class AbstractVideoPlayer<T> implements VideoPlayerInterface {
  /**
   * The target element where the player is mounted.
   */
  protected readonly target: HTMLElement;

  /**
   * The video ID or the URL itself.
   */
  protected videoId: string;

  /**
   * Video options.
   */
  protected readonly options: VideoOptions;

  /**
   * The state object.
   */
  protected state = State( NOT_INITIALIZED );

  /**
   * The EventBus object.
   */
  protected event = EventInterface();

  /**
   * The player instance.
   */
  protected player: T;

  /**
   * The VideoPlayer constructor.
   *
   * @param target  - A target element where the player is mounted.
   * @param videoId - A video ID or an URL itself.
   * @param options - Optional. Options.
   */
  protected constructor( target: HTMLElement, videoId: string, options?: VideoOptions ) {
    this.target  = target;
    this.videoId = videoId;
    this.options = options || {};

    this.onPlay        = this.onPlay.bind( this );
    this.onPause       = this.onPause.bind( this );
    this.onEnded       = this.onEnded.bind( this );
    this.onPlayerReady = this.onPlayerReady.bind( this );
    this.onError       = this.onError.bind( this );
  }

  /**
   * Creates a player.
   *
   * @param videoId - A video ID.
   *
   * @return A VideoPlayerInterface object.
   */
  protected abstract createPlayer( videoId: string ): T;

  /**
   * Starts the video.
   */
  protected abstract playVideo(): void;

  /**
   * Pauses the video.
   */
  protected abstract pauseVideo(): void;

  /**
   * Attaches a handler to a specified event or events.
   *
   * @param events   - An event or events to attach a handler to.
   * @param callback - A callback function.
   */
  on( events: string | string[], callback: AnyFunction ): void {
    this.event.on( events, callback );
  }

  /**
   * Requests to play the video.
   */
  play(): void {
    const { state } = this;

    if ( state.is( ERROR ) ) {
      error( 'Can not play this video.' );
      return;
    }

    this.event.emit( 'play' );

    if ( state.is( INITIALIZING ) ) {
      return state.set( PENDING_PLAY );
    }

    if ( state.is( INITIALIZED ) ) {
      this.player = this.createPlayer( this.videoId );
      return state.set( PENDING_PLAY );
    }

    if ( state.is( [ PENDING_PLAY, PLAYING ] ) ) {
      return;
    }

    if ( state.is( IDLE ) ) {
      state.set( LOADING );
      this.playVideo();
    }
  }

  /**
   * Requests to pause the video.
   */
  pause(): void {
    const { state } = this;

    if ( state.is( ERROR ) ) {
      return;
    }

    this.event.emit( 'pause' );

    if ( state.is( PENDING_PLAY ) ) {
      return state.set( INITIALIZING );
    }

    if ( state.is( LOADING ) ) {
      return state.set( PLAY_REQUEST_ABORTED );
    }

    if ( state.is( PLAYING ) ) {
      this.pauseVideo();
      this.state.set( IDLE );
    }
  }

  /**
   * Checks if the video is paused or not.
   *
   * @return `true` if the video is paused.
   */
  isPaused(): boolean {
    return ! this.state.is( PLAYING );
  }

  /**
   * Destroys the instance.
   */
  destroy(): void {
    this.event.destroy();
  }

  /**
   * Called when the player is created.
   */
  protected onPlayerReady(): void {
    const { state } = this;
    const isPending = state.is( PENDING_PLAY );

    state.set( IDLE );

    if ( isPending ) {
      this.play();
    }
  }

  /**
   * Called when the video starts.
   */
  protected onPlay(): void {
    const { state } = this;
    const aborted = state.is( PLAY_REQUEST_ABORTED );

    state.set( PLAYING );

    if ( aborted ) {
      this.pause();
    } else {
      this.event.emit( 'played' );
    }
  }

  /**
   * Called when the video is paused.
   */
  protected onPause(): void {
    this.state.set( IDLE );
    this.event.emit( 'paused' );
  }

  /**
   * Called when the video is ended.
   */
  protected onEnded(): void {
    this.state.set( IDLE );
    this.event.emit( 'ended' );
  }

  /**
   * Called when an error occurs.
   */
  protected onError(): void {
    this.state.set( ERROR );
    this.event.emit( 'error' );
  }
}
