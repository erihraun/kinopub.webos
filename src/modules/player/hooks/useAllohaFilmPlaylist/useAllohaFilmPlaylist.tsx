import { useEffect, useState } from 'react';

import { http } from 'libs/http';

type AllohaFilmPlaylistProps = {
  id: number;
  token: string;
  translation: string;
};

export const getAllohaManifest = ({ id, translation, token }: AllohaFilmPlaylistProps): Promise<string> => {
  const fetchAllohaPlaylist = async () => {
    const { data } = await http.get<{ translation: string; link: string }[]>(
      `http://localhost:3001/api/hls/alloha?type=film&kp=${id}&access_token=${token}&translation=${encodeURIComponent(translation)}`,
    );

    return data;
  };

  return fetchAllohaPlaylist().then((res) => {
    return res[0].link;
  });
};

export const useAllohaFilmPlaylist = ({ id, translation, token }: AllohaFilmPlaylistProps) => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllohaPlaylist = async () => {
      const { data } = await http.get<{ translation: string; link: string }[]>(
        `https://akter.top/api/hls/alloha?type=film&kp=${id}&access_token=${token}&translation=${encodeURIComponent(translation)}`,
      );

      return data;
    };

    fetchAllohaPlaylist().then((res) => {
      setData(res[0].link);
    });
  }, [id, token, translation]);

  return { data };
};
