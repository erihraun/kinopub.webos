import { FC, useCallback, useMemo } from 'react';

import { useFilm } from 'hooks/useFilm/useFilm';
import { userStore } from 'store/user';

import { useAllohaFilm } from '../../hooks/useAllohaFilmPlaylist/useAllohaFilmPlaylist';
import { useBazonFilm } from '../../hooks/useBazon/useBazon';
import { CurrentPlaylistItem, Playlist, VideoPlayerWrap } from '../player/player';

type PropsType = {
  id: number;
};

export const Film: FC<PropsType> = ({ id }) => {
  const { token } = userStore;
  const { data } = useFilm(id);
  const getAlloha = useAllohaFilm();
  const getBazon = useBazonFilm();

  const playlist: Playlist | null = useMemo(
    () =>
      data
        ? [
            {
              startTime: data.time,
              translation: data.files.map((f) => ({
                name: f.translation.name,
                streamType: f.provider_name,
              })),
            },
          ]
        : null,
    [data],
  );

  const onPlaylistCallback = useCallback(
    async ({ translation, streamType, ...props }: CurrentPlaylistItem) => {
      if (streamType === 'alloha') {
        return getAlloha({ id: Number(id), translation, token });
      } else if (streamType === 'bazon') {
        return getBazon({ id, translation, token });
      }
      return '';
    },
    [getAlloha, getBazon, id, token],
  );

  if (!playlist) return null;

  return <VideoPlayerWrap playlist={playlist} onPlaylistCallback={onPlaylistCallback} />;
};
