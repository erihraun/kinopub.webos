import { FC } from 'react';

import s from './image.module.scss';

type PropsType = {
  src: string;
};

export const Image: FC<PropsType> = ({ src }) => {
  return (
    <div className={s.wrap}>
      <img className={s.image} src={src} alt="" />
    </div>
  );
};
