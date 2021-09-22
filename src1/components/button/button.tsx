import { useEffect, useRef } from 'react';
import cx from 'classnames';

import Icon from 'components/icon';
import Spottable from 'components/spottable';

export type ButtonProps = {
  icon?: string;
  iconOnly?: boolean;
  autoFocus?: boolean;
  className?: string;
} & React.ComponentProps<typeof Spottable>;

const Button: React.FC<ButtonProps> = ({ children, icon, iconOnly = !children, autoFocus, className, ...props }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frameId: number;

    if (autoFocus) {
      frameId = requestAnimationFrame(() => {
        // @ts-expect-error
        wrapperRef.current?.node?.focus();
      });
    }

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [wrapperRef, autoFocus]);

  return (
    <Spottable
      {...props}
      ref={wrapperRef}
      className={cx('text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1', className)}
      role="button"
    >
      <div className="flex items-center">
        {icon && <Icon className={cx({ 'mr-2': !iconOnly })} name={icon} />}
        {!iconOnly && children}
      </div>
    </Spottable>
  );
};

export default Button;
