import { FC } from 'react';

type PropsType = {
  className?: string;
};

export const GridContainer: FC<PropsType> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
