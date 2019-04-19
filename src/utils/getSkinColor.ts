import Random from '@dicebear/avatars/lib/random';
import { Options } from '../options';
import { getOption } from './getOption';

export function getSkinColor(options: Options, random: Random) {
  const skinColor: string[] = [];

  if (getOption('skin', 'tanned', options)) {
    skinColor.push('Tanned');
  }

  if (getOption('skin', 'yellow', options)) {
    skinColor.push('Yellow');
  }

  if (getOption('skin', 'pale', options)) {
    skinColor.push('Pale');
  }

  if (getOption('skin', 'light', options)) {
    skinColor.push('Light');
  }

  if (getOption('skin', 'brown', options)) {
    skinColor.push('Brown');
  }

  if (getOption('skin', 'darkBrown', options)) {
    skinColor.push('DarkBrown');
  }

  if (getOption('skin', 'black', options)) {
    skinColor.push('Black');
  }

  return random.pickone(skinColor);
}
