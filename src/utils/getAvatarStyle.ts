import { Options } from '../options';

export function getAvatarStyle(options: Options) {
  switch (options.style) {
    case 'circle':
      return 'Circle';
    default:
      return 'Transparent';
  }
}
