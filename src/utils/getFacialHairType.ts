import Random from '@dicebear/avatars/lib/random';
import { Options } from '../options';
import { getOption } from './getOption';

export function getFacialHairType(options: Options, random: Random) {
  const facialHairType: string[] = [];

  if (getOption('facialHair', 'medium', options)) {
    facialHairType.push('BeardMedium');
  }

  if (getOption('facialHair', 'light', options)) {
    facialHairType.push('BeardLight');
  }

  if (getOption('facialHair', 'majestic', options)) {
    facialHairType.push('BeardMajestic');
  }

  if (getOption('facialHair', 'fancy', options)) {
    facialHairType.push('MoustacheFancy');
  }

  if (getOption('facialHair', 'magnum', options)) {
    facialHairType.push('MoustacheMagnum');
  }

  const pickedFacialHairType = random.pickone(facialHairType);

  if (false === random.bool(undefined !== options.facialHairChance ? options.facialHairChance : 10)) {
    return 'Blank';
  }

  return pickedFacialHairType;
}
