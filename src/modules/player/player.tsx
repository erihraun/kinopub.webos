import { FC } from 'react';

import { Film } from './components/film/film';

type PropsType = { type: 'film' | 'serial'; id: string };

export const Player: FC<PropsType> = ({ type, id }) => {
  if (type === 'film') {
    return <Film id={Number(id)} />;
  }

  return <Film id={Number(id)} />;
};
