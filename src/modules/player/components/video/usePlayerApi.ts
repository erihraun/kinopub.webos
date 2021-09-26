import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import HLS from 'hls.js';

import { AudioTrack, SourceTrack, StreamingType, SubtitleTrack } from '../../../../../src1/components/media';

export type OwnProps = {
  autoPlay?: boolean;
  audioTracks?: AudioTrack[];
  sourceTracks?: SourceTrack[];
  subtitleTracks?: SubtitleTrack[];
  streamingType?: StreamingType;
  isSettingsOpen?: boolean;
  mediaComponent?: string;
  onUpdate?: () => void;
  onAudioChange?: (audioTrack: AudioTrack) => void;
  onSourceChange?: (sourceTrack: SourceTrack) => void;
  onSubtitleChange?: (subtitleTrack: SubtitleTrack | null) => void;
};

export type MediaRef = {
  play: () => Promise<void>;
  pause: () => void;
  playPause: () => Promise<void>;
  load: () => void;
  currentTime: number;
  playbackRate: number;
  // audioTracks?: AudioTrack[];
  // audioTrack?: string;
  // sourceTracks?: SourceTrack[];
  // sourceTrack?: string;
  // subtitleTracks?: SubtitleTrack[];
  // subtitleTrack?: string;
  readonly duration: number;
  readonly error: boolean;
  readonly loading: boolean;
  readonly paused: boolean;
  readonly proportionLoaded: number;
  readonly proportionPlayed: number;
};

const useVideoPlayer = (props: OwnProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return { videoRef };
};

export const useVideoPlayerApi = (ref: React.ForwardedRef<MediaRef>, props: OwnProps) => {
  const player = useVideoPlayer(props);
  const videoRef = player.videoRef;

  const getCurrentTime = useCallback(() => {
    if (videoRef.current) {
      return videoRef.current.currentTime;
    }
    return 0;
  }, [videoRef]);
  const setCurrentTime = useCallback(
    (currentTime: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = currentTime;
      }
    },
    [videoRef],
  );
  const getPlaybackRate = useCallback(() => {
    if (videoRef.current) {
      return videoRef.current.playbackRate;
    }
    return 1;
  }, [videoRef]);
  const setPlaybackRate = useCallback(
    (playbackRate: number) => {
      if (videoRef.current) {
        videoRef.current.playbackRate = playbackRate;
      }
    },
    [videoRef],
  );
  const getPaused = useCallback(() => {
    if (videoRef.current) {
      return videoRef.current.paused;
    }
    return false;
  }, [videoRef]);
  const getDuration = useCallback(() => {
    if (videoRef.current) {
      return videoRef.current.duration;
    }
    return 0;
  }, [videoRef]);
  const getError = useCallback(() => {
    if (videoRef.current) {
      return videoRef.current.networkState === videoRef.current.NETWORK_NO_SOURCE;
    }
    return false;
  }, [videoRef]);
  const getLoading = useCallback(() => {
    if (videoRef.current) {
      return videoRef.current.readyState < videoRef.current.HAVE_ENOUGH_DATA;
    }
    return true;
  }, [videoRef]);
  const getProportionLoaded = useCallback(() => {
    if (videoRef.current) {
      return (
        videoRef.current.buffered.length && videoRef.current.buffered.end(videoRef.current.buffered.length - 1) / videoRef.current.duration
      );
    }
    return 0;
  }, [videoRef]);
  const getProportionPlayed = useCallback(() => {
    if (videoRef.current) {
      return videoRef.current.currentTime / videoRef.current.duration;
    }
    return 0;
  }, [videoRef]);
  const play = useCallback(async () => {
    await videoRef.current?.play();
  }, [videoRef]);
  const pause = useCallback(() => {
    videoRef.current?.pause();
  }, [videoRef]);
  const playPause = useCallback(async () => {
    if (getPaused()) {
      await play();
    } else {
      pause();
    }
  }, [play, pause, getPaused]);
  const load = useCallback(() => {
    videoRef.current?.load();
  }, [videoRef]);

  const api = useMemo<MediaRef>(
    () => ({
      play,
      pause,
      playPause,
      load,
      get currentTime() {
        return getCurrentTime();
      },
      set currentTime(currentTime) {
        setCurrentTime(currentTime);
      },
      // get audioTracks() {
      //   return player.getAudioTracks();
      // },
      // get audioTrack() {
      //   return player.getAudioTrack();
      // },
      // set audioTrack(audioTrack) {
      //   player.setAudioTrack(audioTrack);
      // },
      // get sourceTracks() {
      //   return player.getSourceTracks();
      // },
      // get sourceTrack() {
      //   return player.getSourceTrack();
      // },
      // set sourceTrack(sourceTrack) {
      //   player.setSourceTrack(sourceTrack);
      // },
      // get subtitleTracks() {
      //   return player.getSubtitleTracks();
      // },
      // get subtitleTrack() {
      //   return player.getSubtitleTrack();
      // },
      // set subtitleTrack(subtitleTrack) {
      //   player.setSubtitleTrack(subtitleTrack);
      // },
      get playbackRate() {
        return getPlaybackRate();
      },
      set playbackRate(playbackRate) {
        setPlaybackRate(playbackRate);
      },
      get paused() {
        return getPaused();
      },
      get duration() {
        return getDuration();
      },
      get error() {
        return getError();
      },
      get loading() {
        return getLoading();
      },
      get proportionLoaded() {
        return getProportionLoaded();
      },
      get proportionPlayed() {
        return getProportionPlayed();
      },
    }),
    [
      player,
      play,
      pause,
      playPause,
      load,
      getCurrentTime,
      setCurrentTime,
      getPlaybackRate,
      setPlaybackRate,
      getPaused,
      getDuration,
      getError,
      getLoading,
      getProportionLoaded,
      getProportionPlayed,
    ],
  );

  useImperativeHandle(ref, () => api, [api]);

  return useMemo(
    () => ({
      api,
      player,
    }),
    [api, player],
  );
};
