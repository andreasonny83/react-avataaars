import Random from '@dicebear/avatars/lib/random';
import { Options } from '../options';
import { getOption } from './getOption';

export function getAccessoriesType(options: Options, random: Random) {
  const accessoriesType: string[] = [];

  if (getOption('accessories', 'kurt', options)) {
    accessoriesType.push('Kurt');
  }

  if (getOption('accessories', 'prescription01', options)) {
    accessoriesType.push('Prescription01');
  }

  if (getOption('accessories', 'prescription02', options)) {
    accessoriesType.push('Prescription02');
  }

  if (getOption('accessories', 'round', options)) {
    accessoriesType.push('Round');
  }

  if (getOption('accessories', 'sunglasses', options)) {
    accessoriesType.push('Sunglasses');
  }

  if (getOption('accessories', 'wayfarers', options)) {
    accessoriesType.push('Wayfarers');
  }

  const pickedAccessoriesType = random.pickone(accessoriesType);

  if (false === random.bool(undefined !== options.accessoriesChance ? options.accessoriesChance : 10)) {
    return 'Blank';
  }

  return pickedAccessoriesType;
}
