import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import { Spottable } from 'components/spottable/spottable';

type Props = {
  href?: string;
  icon?: string;
  iconOnly?: boolean;
  replace?: boolean;
  active?: boolean;
  state?: any;
  className?: string;
  onClick?: () => void;
};

export const Link: React.FC<Props> = ({
  href,
  state,
  children,
  icon,
  iconOnly = !children,
  replace,
  active,
  className,
  onClick,
  ...props
}) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => {
    if (href) {
      (replace ? history.replace : history.push)(href, state);
    }
    onClick?.();
  }, [href, state, replace, onClick, history]);

  return (
    <Spottable {...props} className={cx(className)} onClick={handleOnClick} role="button">
      {children}
    </Spottable>
  );
};
