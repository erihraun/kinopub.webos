import { RouteChildrenProps } from 'react-router';

import { Link } from '../../components/link/link';

export const SerialScreen = (props: RouteChildrenProps<{ id: string }>) => {
  const id = props.match?.params.id;

  return <Link href={`/video/serial/${id}`}>Смотреть</Link>;
};
