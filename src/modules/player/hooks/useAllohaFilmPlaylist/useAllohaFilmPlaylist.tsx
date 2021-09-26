import { useCallback } from 'react';

import { useMirror } from 'hooks/useMirror/useMirror';
import { http } from 'libs/http';

type AllohaFilmPlaylistProps = {
  id: number;
  token: string;
  translation: string;
};

type AllohaSerialPlaylistProps = {
  id: number;
  token: string;
  translation: string;
  season: number;
  episode: number;
};

export const useAllohaFilm = () => {
  const getMirror = useMirror();

  const getAllohaManifestFilm = useCallback(
    async ({ id, translation, token }: AllohaFilmPlaylistProps): Promise<string> => {
      const mirror = await getMirror();
      const fetchAllohaPlaylist = async () => {
        const { data } = await http.get<{ translation: string; link: string }[]>(
          `${mirror}/api/hls/alloha?type=film&kp=${id}&access_token=${token}&translation=${encodeURIComponent(translation)}`,
        );

        return data;
      };

      return fetchAllohaPlaylist().then((res) => {
        return res[0].link;
      });
    },
    [getMirror],
  );
  return getAllohaManifestFilm;
};

export const useAllohaSerial = () => {
  const getMirror = useMirror();

  const getAllohaManifestSerial = useCallback(
    async ({ id, translation, token, season, episode }: AllohaSerialPlaylistProps): Promise<string> => {
      const fetchAllohaPlaylist = async () => {
        const mirror = await getMirror();
        const { data } = await http.get<{ translation: string; link: string }[]>(
          `${mirror}/api/hls/alloha-serial?type=serial&kp=${id}&access_token=${token}&season=${season}&episode=${episode}&translation=${encodeURIComponent(
            translation,
          )}`,
        );

        return data;
      };

      return fetchAllohaPlaylist().then((res) => {
        return res[0].link;
      });
    },
    [getMirror],
  );

  return getAllohaManifestSerial;
};
