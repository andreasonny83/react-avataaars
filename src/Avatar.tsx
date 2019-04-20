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
  getFacialHairColor,
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
  size?: string;
}

export class Avatar extends React.PureComponent<AvatarProps> {
  public render() {
    const { className, hash = 'hash', size = 260, options = {} } = this.props;
    const width = size;
    const height = size;
    const random = new Random(hash);
    const hairColor = getHairColor(options, random);
    const facialHairColor = options.facialHairColor ? getFacialHairColor(options, random) : hairColor;

    return (
      <div className={className} style={{ width, height }}>
        <Avataaar
          style={{ width: '100%', height: '100%' }}
          avatarStyle={getAvatarStyle(options)}
          topType={getTopType(options, random)}
          accessoriesType={getAccessoriesType(options, random)}
          hairColor={hairColor}
          facialHairType={getFacialHairType(options, random)}
          facialHairColor={facialHairColor}
          clotheType={getClotheType(options, random)}
          clotheColor={getClotheColor(options, random)}
          eyeType={getEyeType(options, random)}
          eyebrowType={getEyebrowType(options, random)}
          mouthType={getMouthType(options, random)}
          skinColor={getSkinColor(options, random)}
        />
      </div>
    );
  }
}
