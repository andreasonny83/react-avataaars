import Random from '@dicebear/avatars/lib/random';
import { Options } from '../options';
import { getOption } from './getOption';

export function getFacialHairColor(options: Options, random: Random) {
  const facialHairColor: string[] = [];

  if (getOption('facialHairColor', 'auburn', options)) {
    facialHairColor.push('Auburn');
  }

  if (getOption('facialHairColor', 'black', options)) {
    facialHairColor.push('Black');
  }

  if (getOption('facialHairColor', 'blonde', options)) {
    facialHairColor.push('Blonde', 'BlondeGolden');
  }

  if (getOption('facialHairColor', 'brown', options)) {
    facialHairColor.push('Brown', 'BrownDark');
  }

  if (getOption('facialHairColor', 'pastel', options)) {
    facialHairColor.push('PastelPink');
  }

  if (getOption('facialHairColor', 'platinum', options)) {
    facialHairColor.push('Platinum');
  }

  if (getOption('facialHairColor', 'red', options)) {
    facialHairColor.push('Red');
  }

  if (getOption('facialHairColor', 'gray', options)) {
    facialHairColor.push('SilverGray');
  }

  return random.pickone(facialHairColor);
}
