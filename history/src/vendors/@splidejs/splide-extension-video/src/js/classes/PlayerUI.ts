import { AnyFunction, CLASS_CONTAINER, CLASS_SLIDE, EventInterface, Splide } from '@splidejs/splide';
import { I18N } from '../constants/i18n';
import { addClass, child, create, display, remove, removeClass } from '@splidejs/splide/src/js/utils';
import { CLASS_VIDEO, CLASS_VIDEO_PLAY_BUTTON, CLASS_VIDEO_WRAPPER } from '../constants/classes';


/**
 * The class for the UI of the video player.
 *
 * @since 0.5.0
 */
export class PlayerUI {
  /**
   * The Splide instance.
   */
  private Splide: Splide;

  /**
   * The slide element.
   */
  private readonly slide: HTMLElement;

  /**
   * The parent element of the video, which may be the slide or the container element.
   */
  private parent: HTMLElement;

  /**
   * Keeps the modifier class name.
   */
  private modifier: string;

  /**
   * The EventBus object.
   */
  private readonly event = EventInterface();

  /**
   * Indicates whether the UI is disabled or not.
   */
  private disabled: boolean;

  /**
   * The wrapper element that contains the wrapper and the play button.
   */
  private video: HTMLDivElement;

  /**
   * The wrapper element that contains the video.
   */
  private wrapper: HTMLDivElement;

  /**
   * The placeholder element.
   * - YouTube  : Will replace this element by an iframe
   * - Vimeo    : Will append an iframe to this
   * - HTMLVideo: Will append an video element to this
   */
  private placeholder: HTMLDivElement;

  /**
   * The button element for play.
   */
  private playButton: HTMLButtonElement;

  /**
   * The PlayerUI constructor.
   *
   * @param Splide - A Splide instance.
   * @param slide  - A slide element where the player is mounted.
   */
  constructor( Splide: Splide, slide: HTMLElement ) {
    this.Splide = Splide;
    this.slide  = slide;

    this.init();
    this.create();
    this.show();
    this.listen();
  }

  /**
   * Initializes the instance.
   */
  private init(): void {
    const container = child( this.slide, `.${ CLASS_CONTAINER }` );

    this.parent   = container || this.slide;
    this.modifier = `${ container ? CLASS_CONTAINER : CLASS_SLIDE }--has-video`;

    addClass( this.parent, this.modifier );
  }

  /**
   * Creates wrapper, placeholder and button elements.
   */
  private create(): void {
    this.video       = create( 'div', CLASS_VIDEO, this.parent );
    this.wrapper     = create( 'div', CLASS_VIDEO_WRAPPER, this.video );
    this.placeholder = create( 'div', null, this.wrapper );

    this.playButton = create( 'button', {
      class       : CLASS_VIDEO_PLAY_BUTTON,
      type        : 'button',
      'aria-label': this.Splide.options.i18n.playVideo || I18N.playVideo,
    }, this.video );
  }

  /**
   * Listens to some events.
   */
  private listen(): void {
    this.parent.addEventListener( 'click', () => {
      this.event.emit( 'click' );
    } );
  }

  /**
   * Toggles the play button.
   *
   * @param show - Determines whether to show or hide the button.
   */
  private toggleButton( show?: boolean ): void {
    display( this.playButton, show ? '' : 'none' );
  }

  /**
   * Toggles the wrapper element.
   *
   * @param show - Determines whether to show or hide the button.
   */
  private toggleWrapper( show?: boolean ): void {
    display( this.wrapper, show ? '' : 'none' );
  }

  /**
   * Returns the placeholder element.
   */
  getPlaceholder(): HTMLDivElement {
    return this.placeholder;
  }

  /**
   * Hides UI and displays the video.
   */
  hide(): void {
    this.toggleButton( false );
    this.toggleWrapper( true );
  }

  /**
   * Displays UI and hides the video.
   */
  show(): void {
    if ( ! this.disabled ) {
      this.toggleButton( true );
    }

    this.toggleWrapper( false );
  }

  /**
   * Disables UI (the play button) displays on the slide.
   *
   * @param disabled - Determines whether to disable UI or not.
   */
  disable( disabled: boolean ): void {
    this.disabled = disabled;

    if ( disabled ) {
      this.toggleButton( false );
    }
  }

  /**
   * Attaches an event handler.
   *
   * @param events   - An event or events.
   * @param callback - A callback function.
   */
  on( events: string | string[], callback: AnyFunction ): void {
    this.event.on( events, callback );
  }

  /**
   * Destroys the instance.
   */
  destroy(): void {
    removeClass( this.parent, this.modifier );
    remove( this.video );
    this.event.destroy();
  }
}
