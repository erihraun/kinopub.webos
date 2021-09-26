import { observer } from 'mobx-react-lite';

import { Input } from 'components/input/input';
import { Link } from 'components/link/link';
import { Spottable } from 'components/spottable/spottable';
import { VideoItem } from 'components/videoItem/videoItem';
import { VideoLine } from 'components/videoLine/videoLine';
import { useSearch } from 'store/search';

import s from './searchScreen.module.scss';

export const SearchScreen = observer(() => {
  const { items, search, loadMore, isLoading, hasItems } = useSearch();

  return (
    <>
      <div className={s.input}>
        <Input autoFocus onChange={(value) => search(value)} />
      </div>
      <VideoLine
        values={items}
        columns={6}
        renderItem={(item) => (
          <div className={s.item}>
            <Link href={`/${item.type}/${item.kinopoisk_id}`}>
              <VideoItem
                key={item.title}
                image={item.posters?.big || ''}
                kpRating={item.rating_kinopoisk}
                imdbRating={item.rating_imdb}
                title={item.title}
              />
            </Link>
          </div>
        )}
        getId={(item) => item.kinopoisk_id.toString()}
      />

      {hasItems && !isLoading ? <Spottable onClick={loadMore}>load more</Spottable> : null}
    </>
  );
});
