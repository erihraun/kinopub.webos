import { useLocation } from 'react-router-dom';
import cx from 'classnames';
import map from 'lodash/map';

import { Link } from 'components/link/link';
import { PATHS, generatePath } from 'routes';

type MenuItem = {
  name: string;
  icon: string;
  href: string;
};

const menuItems: (MenuItem | null)[][] = [
  [
    {
      name: 'Фильмы',
      icon: 'movie',
      href: generatePath(PATHS.Index),
    },
    {
      name: 'Сериалы',
      icon: 'movie',
      href: generatePath(PATHS.Category, { categoryType: 'movie' }),
    },
    {
      name: 'Поиск',
      icon: 'search',
      href: PATHS.Search,
    },
  ],
  [
    {
      name: 'Настройки',
      icon: 'settings',
      href: PATHS.Settings,
    },
  ],
];

type Props = {
  className?: string;
};

export const Menu: React.FC<Props> = ({ className, ...props }) => {
  const location = useLocation();

  return (
    <nav className={cx('h-screen w-52 flex flex-col justify-start overflow-y-auto', className)} {...props}>
      {map(menuItems, (list, idx) => (
        <ul key={idx}>
          {map(list, (item: MenuItem) => (
            <li key={item.href}>
              <Link href={item.href} icon={item.icon} active={location.pathname.startsWith(item.href)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};
