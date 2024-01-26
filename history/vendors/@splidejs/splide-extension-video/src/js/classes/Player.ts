import {
  EVENT_DRAG,
  EVENT_DRAGGING,
  EVENT_MOUNTED,
  EVENT_MOVE,
  EVENT_MOVED,
  EVENT_SCROLL,
  EVENT_SCROLLED,
  EventInterface,
  EventInterfaceObject,
  Splide,
} from '@splidejs/splide';
import { addClass, getAttribute, merge, toggleClass } from '@splidejs/splide/src/js/utils';
import { CLASS_ERROR, CLASS_PLAYING, CLASS_VIDEO_DISABLED } from '../constants/classes';
import { HTML_VIDEO__DATA_ATTRIBUTE, VIMEO_DATA_ATTRIBUTE, YOUTUBE_DATA_ATTRIBUTE } from '../constants/data-attributes';
import { DEFAULTS } from '../constants/defaults';
import {
  EVENT_VIDEO_CLICK,
  EVENT_VIDEO_ENDED,
  EVENT_VIDEO_ERROR,
  EVENT_VIDEO_PAUSE,
  EVENT_VIDEO_PLAY,
} from '../constants/events';
import { HTMLVideoPlayer } from '../players/html/HTMLVideoPlayer';
import { VimeoPlayer } from '../players/vimeo/VimeoPlayer';
import { YouTubePlayer } from '../players/youtube/YouTubePlayer';
import { VideoPlayerConstructor, VideoPlayerInterface } from '../types/general';
import { VideoOptions } from '../types/options';
import { PlayerUI } from './PlayerUI';


/**
 * Associates the data attribute name with the player constructor.
 *
 * @since 0.5.0
 */
const VIDEO_PLAYER_MAP: Array<[ string, VideoPlayerConstructor ]> = [
  [ YOUTUBE_DATA_ATTRIBUTE, YouTubePlayer ],
  [ VIMEO_DATA_ATTRIBUTE, VimeoPlayer ],
  [ HTML_VIDEO__DATA_ATTRIBUTE, HTMLVideoPlayer ],
];

/**
 * The class for the video player that connects a Splide slide with PlayerUI and VideoPlayer instances.
 *
 * @since 0.5.0
 */
export class Player {
  /**
   * The Splide instance.
   */
  private readonly Splide: Splide;

  /**
   * The slide element.
   */
  private readonly slide: HTMLElement;

  /**
   * Video options.
   */
  private readonly options: VideoOptions;

  /**
   * The PlayerUI instance.
   */
  private ui: PlayerUI;

  /**
   * The VideoPlayer instance.
   */
  private player: VideoPlayerInterface;

  /**
   * The EventInterface object.
   */
  private event: EventInterfaceObject;

  /**
   * Indicates whether the player is disabled or not.
   */
  private disabled: boolean;

  /**
   * The Player constructor.
   *
   * @param Splide - A Splide instance.
   * @param slide  - A slide element where the player is applied.
   */
  constructor( Splide: Splide, slide: HTMLElement ) {
    this.Splide  = Splide;
    this.slide   = slide;
    this.event   = EventInterface( Splide );
    this.options = merge( merge( {}, DEFAULTS ), this.Splide.options.video );

    this.createPlayer( slide );

    if ( this.player ) {
      this.listen();
    }
  }

  /**
   * Creates a Player.
   * This will fail when the slide element does not have the data attribute for the video.
   *
   * @param slide - A slide element.
   */
  private createPlayer( slide: HTMLElement ): void {
    VIDEO_PLAYER_MAP.forEach( ( [ attr, Constructor ] ) => {
      const id = getAttribute( slide, attr );

      if ( id ) {
        this.ui     = new PlayerUI( this.Splide, slide );
        this.player = new Constructor( this.ui.getPlaceholder(), id, this.options );
        this.ui.disable( this.options.disableOverlayUI );
      }
    } );
  }

  /**
   * Listens to UI, VideoPlayer and Splide events.
   */
  private listen(): void {
    const { player, event } = this;

    this.ui.on( 'click', this.onClick.bind( this ) );

    player.on( 'play', this.onPlay.bind( this ) );
    player.on( 'played', this.onPlayed.bind( this ) );
    player.on( 'pause', this.onPause.bind( this ) );
    player.on( 'paused', this.onPaused.bind( this ) );
    player.on( 'ended', this.onEnded.bind( this ) );
    player.on( 'error', this.onError.bind( this ) );

    event.on( [ EVENT_MOVE, EVENT_SCROLL ], this.pause.bind( this ) );
    event.on( EVENT_VIDEO_CLICK, this.onVideoClick.bind( this ) );

    event.on( EVENT_DRAG, () => {
      event.off( EVENT_DRAGGING );
      event.on( EVENT_DRAGGING, () => {
        this.pause();
        event.off( EVENT_DRAGGING );
      } );
    } );

    if ( this.options.autoplay ) {
      event.on( [ EVENT_MOUNTED, EVENT_MOVED, EVENT_SCROLLED ], this.onAutoplayRequested.bind( this ) );
    }
  }

  /**
   * Called when the slide element is clicked.
   */
  private onClick(): void {
    this.isPaused() ? this.play() : this.pause();
    this.event.emit( EVENT_VIDEO_CLICK, this );
  }

  /**
   * Called when any slides that have a video are clicked.
   *
   * @param player - A player instance that the clicked slide has.
   */
  private onVideoClick( player: Player ): void {
    if ( this !== player ) {
      this.pause();
    }
  }

  /**
   * Called when the video is requested to start.
   * The video may be loading at this moment.
   */
  private onPlay(): void {
    this.ui.hide();
  }

  /**
   * Called when the video begins.
   */
  private onPlayed(): void {
    this.ui.hide();
    this.togglePlaying( true );
    this.event.emit( EVENT_VIDEO_PLAY, this );
  }

  /**
   * Called when the video is requested to pause.
   */
  private onPause(): void {
    this.ui.show();
  }

  /**
   * Called when the video is paused.
   */
  private onPaused(): void {
    this.togglePlaying( false );
    this.event.emit( EVENT_VIDEO_PAUSE, this );
  }

  /**
   * Called when the video ends.
   */
  private onEnded(): void {
    this.togglePlaying( false );
    this.event.emit( EVENT_VIDEO_ENDED, this );
  }

  /**
   * Called when an error occurs.
   */
  private onError(): void {
    addClass( this.slide, CLASS_ERROR );
    this.ui.show();
    this.event.emit( EVENT_VIDEO_ERROR, this );
  }

  /**
   * Called when the autoplay option is `true` and the slider should start the video.
   */
  private onAutoplayRequested(): void {
    const activeSlide = this.Splide.Components.Slides.getAt( this.Splide.index );

    if ( activeSlide.slide === this.slide ) {
      this.play();
    }
  }

  /**
   * Toggles the playing status class.
   *
   * @param add - Determines whether to add or remove the class.
   */
  private togglePlaying( add: boolean ): void {
    toggleClass( this.Splide.root, CLASS_PLAYING, add );
  }

  /**
   * Starts the video.
   */
  play(): void {
    if ( this.player && ! this.disabled ) {
      this.player.play();
    }
  }

  /**
   * Pauses the video.
   */
  pause(): void {
    if ( this.player && ! this.disabled ) {
      this.player.pause();
    }
  }

  /**
   * Destroys the instance.
   */
  destroy(): void {
    if ( this.player ) {
      this.ui.destroy();
      this.player.destroy();
    }

    this.disable( false );
  }

  /**
   * Disables the play/pause control.
   */
  disable( disabled: boolean ): void {
    this.disabled = disabled;
    toggleClass( this.Splide.root, CLASS_VIDEO_DISABLED, disabled );
  }

  /**
   * Checks if the video is paused or not.
   *
   * @return `true` if the video is paused.
   */
  isPaused(): boolean {
    return this.player.isPaused();
  }
}
