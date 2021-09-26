import { FC } from 'react';

import { Film } from './components/film/film';
import { Serial } from './components/serial/serial';

type PropsType = { type: 'film' | 'serial'; id: string };

export const Player: FC<PropsType> = ({ type, id }) => {
  if (type === 'film') {
    return <Film id={Number(id)} />;
  }

  if (type === 'serial') {
    return <Serial id={Number(id)} />;
  }

  return null;
};
