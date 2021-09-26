import { FC, useMemo } from 'react';
import { CollectionApi } from '@e-raun/api';
import useSWR from 'swr';

import { VideoItemSpottable, VideoItemType } from 'components/videoItem/videoItem';
import { VideoLine } from 'components/videoLine/videoLine';
import { http } from 'libs/http';

import s from './videoCollection.module.scss';

const collectionApi = new CollectionApi(http);

type PropsType = {
  collectionName: string;
};

export const VideoCollection: FC<PropsType> = ({ collectionName }) => {
  const { data } = useSWR(`collection-${collectionName}`, () => collectionApi.getCollection(collectionName));

  const items: VideoItemType[] = useMemo(
    () =>
      data
        ? data.items.map((item) => ({
            image: item.posters?.big || '',
            kpRating: item.rating_kinopoisk,
            imdbRating: item.rating_imdb,
            title: item.title,
          }))
        : [],
    [data],
  );

  return (
    <div className={s.wrap}>
      <VideoLine
        values={items}
        columns={6}
        getId={(item) => item.title}
        renderItem={(item) => (
          <div className={s.item}>
            <VideoItemSpottable
              key={item.title}
              image={item.image}
              kpRating={item.kpRating}
              imdbRating={item.imdbRating}
              title={item.title}
            />
          </div>
        )}
      />
    </div>
  );
};
