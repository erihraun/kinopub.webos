import React from 'react';

interface IProps<T extends unknown> {
  columns?: number;
  values: Array<T>;
  getId(value: T): string;
  renderItem(value: T, index: number): React.ReactNode;
}

type SimpleGrid = <T extends unknown>(p: IProps<T>) => React.ReactElement<IProps<T>>;

export const VideoList: SimpleGrid = ({ columns, values, renderItem, getId }) => {
  const style = columns ? { width: `${100 / columns}%` } : void 0;

  return (
    <>
      {values.map((value, i) => (
        <div style={style} key={getId(value)}>
          {renderItem(value, i)}
        </div>
      ))}
    </>
  );
};
