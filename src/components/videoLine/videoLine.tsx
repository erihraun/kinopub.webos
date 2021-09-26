import { VideoList } from '../videoList/videoList';

import s from './videoLine.module.scss';

interface IProps<T extends unknown> {
  columns: number;
  values: Array<T>;
  getId(value: T): string;
  renderItem(value: T, index: number): JSX.Element;
}

type SimpleGrid = <T extends unknown>(p: IProps<T>) => React.ReactElement<IProps<T>>;

export const VideoLine: SimpleGrid = ({ columns, values, renderItem, getId }) => {
  return (
    <div className={s.wrap}>
      <VideoList columns={columns} values={values} getId={getId} renderItem={renderItem} />
    </div>
  );
};
