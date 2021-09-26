import { FC, useCallback, useMemo } from 'react';
import { ResponseItemSerialType } from '@e-raun/api';

import { useSerial } from 'hooks/useSerial/useSerial';
import { userStore } from 'store/user';

import { useAllohaSerial } from '../../hooks/useAllohaFilmPlaylist/useAllohaFilmPlaylist';
import { useBazonSerial } from '../../hooks/useBazon/useBazon';
import { CurrentPlaylistItem, Playlist, VideoPlayerWrap } from '../player/player';

type PropsType = {
  id: number;
};

export type NextSeries = {
  season: number;
  episode: number;
  startTime: number;
  // viewed: boolean;
  // image: string | null;
  translation: { name: string; streamType: 'alloha' | 'bazon' }[];
};

const getNextSeries = (data: ResponseItemSerialType, season: number, episode: number): NextSeries[] => {
  const limit = 25;
  let wasStart = false;
  let num = 0;
  return data.seasons.reduce((seasonAcc: NextSeries[], s) => {
    return [
      ...seasonAcc,
      ...s.episodes.reduce((episodeAcc: NextSeries[], e) => {
        if (!wasStart) {
          wasStart = s.number === season && e.number === episode;
        }
        if (wasStart && num < limit && e.active) {
          num++;

          const translations = e.providers.reduce((translations: { name: string; streamType: 'alloha' | 'bazon' }[], currentProvider) => {
            return [
              ...translations,
              ...currentProvider.translations.map((translation) => ({
                name: translation.name,
                streamType: currentProvider.providerName as 'alloha' | 'bazon',
              })),
            ];
          }, []);

          return [
            ...episodeAcc,
            {
              season: s.number,
              episode: e.number,
              startTime: e.time,
              // viewed: e.viewed,
              // image: e.preview ? mediaReplace(e.preview) : null,
              translation: translations,
            },
          ];
        }

        return episodeAcc;
      }, []),
    ];
  }, []);
};

export const Serial: FC<PropsType> = ({ id }) => {
  const { token } = userStore;
  const { data } = useSerial(id);
  const getAlloha = useAllohaSerial();
  const getBazon = useBazonSerial();

  // @ts-ignore
  const playlist: Playlist | null = useMemo(() => (data ? getNextSeries(data, data.current_season, data.current_episode) : null), [data]);

  const onPlaylistCallback = useCallback(
    async ({ translation, streamType, season, episode, ...props }: CurrentPlaylistItem) => {
      if (!season || !episode) return '';

      if (streamType === 'alloha') {
        return getAlloha({ id: Number(id), translation, token, episode, season });
      } else if (streamType === 'bazon') {
        return getBazon({ id: Number(id), translation, token, season, episode });
      }
      return '';
    },
    [getAlloha, getBazon, id, token],
  );

  if (!playlist) return null;

  return <VideoPlayerWrap playlist={playlist} onPlaylistCallback={onPlaylistCallback} />;
};
