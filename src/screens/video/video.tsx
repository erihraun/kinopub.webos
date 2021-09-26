import { RouteChildrenProps } from 'react-router';

import { Player } from 'modules/player/player';

export const VideoScreen = (props: RouteChildrenProps<{ type: 'film' | 'serial'; id: string }>) => {
  const id = props.match?.params.id;
  const type = props.match?.params.type;

  if (!id || !type) return null;

  return <Player type={type} id={id} />;
};
