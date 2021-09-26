interface IProps<T extends unknown> {
  columns: number;
  values: Array<T>;
  getId(value: T): string;
  renderItem(value: T, index: number): JSX.Element;
}

type SimpleGridType = <T extends unknown>(p: IProps<T>) => React.ReactElement<IProps<T>>;

export const SimpleGrid: SimpleGridType = ({ columns, values, renderItem, getId }) => (
  <>
    {values.map((value, i) => (
      <div key={getId(value)}>{renderItem(value, i)}</div>
    ))}
  </>
);
