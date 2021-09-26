import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import VideoPlayer from '@enact/moonstone/VideoPlayer';

import { Video } from 'modules/player/components/video/video';

export type File = string;

export type StreamType = 'alloha' | 'bazon';

export type PlaylistItem = {
  startTime: number;
  translation: Translation[];
};

export type Playlist = PlaylistItem[];

export type VideoPlaylist = {
  startTime: number;
  file: string;
};

type PropsType = {
  autoPlay?: boolean;
  playlist: Playlist;
  onPlaylistCallback(data: CurrentPlaylistItem): Promise<File>;
};

type Translation = {
  name: string;
  streamType: StreamType;
};

export type CurrentPlaylistItem = {
  startTime: number;
  translation: string;
  streamType: StreamType;
  season?: number;
  episode?: number;
};

export const VideoPlayerWrap: FC<PropsType> = ({ onPlaylistCallback, playlist, autoPlay }) => {
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [currentPlaylistWithFile, setCurrentPlaylistWithFile] = useState<VideoPlaylist | null>(null);
  const [currentTranslation, setCurrentTranslation] = useState<string | null>(null);

  const currentPlaylist: CurrentPlaylistItem | null = useMemo(() => {
    if (playlist[currentPlaylistIndex] && currentTranslation) {
      const s = playlist[currentPlaylistIndex].translation.find((p) => p.name === currentTranslation);
      return s ? { ...playlist[currentPlaylistIndex], translation: s.name, streamType: s.streamType } : null;
    }
    return null;
  }, [currentPlaylistIndex, currentTranslation, playlist]);

  useEffect(() => {
    if (!currentTranslation) {
      setCurrentTranslation(playlist[currentPlaylistIndex].translation[0].name);
    }
  }, [currentPlaylistIndex, currentTranslation, playlist]);

  useEffect(() => {
    if (currentPlaylist) {
      onPlaylistCallback?.(currentPlaylist).then((file) => {
        setCurrentPlaylistWithFile({ file: file, startTime: currentPlaylist.startTime });
      });
    }
  }, [currentPlaylist, onPlaylistCallback]);

  const onEnd = useCallback(() => {
    if (currentPlaylistIndex < playlist.length) {
      setCurrentPlaylistIndex((prev) => prev + 1);
    }
  }, [currentPlaylistIndex, playlist.length]);

  if (!currentPlaylistWithFile || !currentTranslation) return null;

  return (
    <VideoPlayer
      //@ts-expect-error
      videoComponent={
        <Video
          autoPlay={autoPlay}
          file={currentPlaylistWithFile.file}
          startTime={currentPlaylistWithFile.startTime}
          onEnded={onEnd}
          onTime={console.log}
        />
      }
    />
  );
};
