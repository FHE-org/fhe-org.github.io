import { VideoOptions } from '../types/options';


/**
 * Default options.
 * Some parameters must be explicitly set to `false` for vimeo options.
 */
export const DEFAULTS: VideoOptions = {
  hideControls: false,
  loop        : false,
  mute        : false,
  volume      : 0.2,
};
