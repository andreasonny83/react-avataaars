import Random from '@dicebear/avatars/lib/random';
import Avataaar from 'avataaars';
import * as React from 'react';

import { Options } from './options';
import {
  getAccessoriesType,
  getAvatarStyle,
  getClotheColor,
  getClotheType,
  getEyebrowType,
  getEyeType,
  getFacialHairType,
  getHairColor,
  getMouthType,
  getSkinColor,
  getTopType,
} from './utils';

interface AvatarProps {
  hash?: string;
  options?: Options;
  className?: string;
  width?: string;
  height?: string;
}

export class Avatar extends React.PureComponent<AvatarProps> {
  public render() {
    const { width, height, hash = 'hash', options = {} } = this.props;

    const random = new Random(hash);
    const hairColor = getHairColor(options, random);

    return (
      (options && random && hairColor && (
        <Avataaar
          style={{ width, height }}
          avatarStyle={getAvatarStyle(options)}
          topType={getTopType(options, random)}
          accessoriesType={getAccessoriesType(options, random)}
          hairColor={hairColor}
          facialHairType={getFacialHairType(options, random)}
          facialHairColor={hairColor}
          clotheType={getClotheType(options, random)}
          clotheColor={getClotheColor(options, random)}
          eyeType={getEyeType(options, random)}
          eyebrowType={getEyebrowType(options, random)}
          mouthType={getMouthType(options, random)}
          skinColor={getSkinColor(options, random)}
        />
      )) ||
      null
    );
  }
}
