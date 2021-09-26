import { useCallback } from 'react';

import { useMirror } from 'hooks/useMirror/useMirror';

type BazonSerialPlaylistProps = {
  translation: string;
  id: number;
  token: string;
  season: number;
  episode: number;
};

type BazonFilmPlaylistProps = {
  translation: string;
  id: number;
  token: string;
};

export const useBazonFilm = () => {
  const getMirror = useMirror();

  const getManifest = useCallback(
    async ({ id, token, translation }: BazonFilmPlaylistProps) => {
      const mirror = getMirror();
      return `${mirror}/api/hls/movie.m3u8?type=film&kp=${id}&access_token=${token}&translation=${encodeURIComponent(translation)}`;
    },
    [getMirror],
  );

  return getManifest;
};

export const useBazonSerial = () => {
  const getMirror = useMirror();

  const getManifest = useCallback(
    async ({ id, season, token, translation, episode }: BazonSerialPlaylistProps) => {
      const mirror = await getMirror();
      return `${mirror}/api/hls/movie.m3u8?type=serial&kp=${id}&access_token=${token}&translation=${encodeURIComponent(
        translation,
      )}&season=${season}&episode=${episode}`;
    },
    [getMirror],
  );

  return getManifest;
};
