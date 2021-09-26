import { FC, useCallback, useMemo } from 'react';

import { useFilm } from 'hooks/useFilm/useFilm';
import { userStore } from 'store/user';

import { getAllohaManifest } from '../../hooks/useAllohaFilmPlaylist/useAllohaFilmPlaylist';
import { CurrentPlaylistItem, Playlist, VideoPlayerWrap } from '../player/player';

type PropsType = {
  id: number;
};

export const Film: FC<PropsType> = ({ id }) => {
  const { token } = userStore;
  const { data } = useFilm(id);

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
        return getAllohaManifest({ id: Number(id), translation, token });
      } else if (streamType === 'bazon') {
        return `http://localhost:3001/api/hls/movie.m3u8?type=film&kp=${id}&access_token=${token}&translation=${encodeURIComponent(
          translation,
        )}`;
      }
      return '';
    },
    [id, token],
  );

  if (!playlist) return null;

  return <VideoPlayerWrap playlist={playlist} onPlaylistCallback={onPlaylistCallback} />;
};
