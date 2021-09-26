import { FC } from 'react';
import Marquee from '@enact/moonstone/Marquee';
import classNames from 'classnames';

import { Spottable } from '../spottable/spottable';
import { Image } from './components/image/image';

import { mediaReplace } from 'utils/mediaReplace';

import s from './videoItem.module.scss';

export type VideoItemType = {
  onClick?(): void;
  image: string;
  kpRating: number;
  imdbRating: number;
  title: string;
  className?: string;
  isFocused?: boolean;
};

type PropsType = VideoItemType;

export const VideoItem: FC<PropsType> = ({ isFocused, className, image, imdbRating, kpRating, title }) => {
  return (
    <div className={classNames(s.wrap, className)}>
      <Image src={mediaReplace(image)} />

      <Marquee marqueeOn={isFocused ? 'render' : void 0} className={s.title}>
        {title}
      </Marquee>
    </div>
  );
};

export const VideoItemSpottable: FC<Omit<PropsType, 'isFocused'>> = (props) => {
  return <Spottable>{({ isFocused }) => <VideoItem {...props} isFocused={isFocused} />}</Spottable>;
};
