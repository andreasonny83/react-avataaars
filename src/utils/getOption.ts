import { Options } from '../options';

export function getOption(key: keyof Options, value: string, options: Options) {
  const optionValue = options[key];

  if (optionValue) {
    return optionValue && optionValue === value;
  }

  return true;
}
