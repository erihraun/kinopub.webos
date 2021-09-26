import React, { FC, useState } from 'react';
import { Merge } from '@enact/core/snapshot';
import Sp, { SpottableProps } from '@enact/spotlight/Spottable';
import Item from '@enact/ui/Item';

type PropsType = {
  children: (({ isFocused }: { isFocused: boolean }) => React.ReactNode) | React.ReactNode;
} & Merge<React.HTMLProps<HTMLElement>, SpottableProps>;

const Spot = Sp(Item);

export const Spottable: FC<PropsType> = ({ children, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  if (typeof children === 'function') {
    return (
      <Spot
        {...props}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      >
        {children({ isFocused })}
      </Spot>
    );
  }

  return <Spot {...props}>{children}</Spot>;
};
