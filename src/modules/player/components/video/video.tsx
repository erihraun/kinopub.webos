import React, { useCallback, useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import HLS from 'hls.js';

import { MediaRef, OwnProps, useVideoPlayerApi } from './usePlayerApi';

type VideoPropsType = {
  onTime(time: number): void;
  onEnd(): void;
  file: string;
  startTime: number;
  autoPlay?: boolean;
};

export const MEDIA_EVENTS = [
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
] as const;

type MediaEvents = keyof typeof MEDIA_EVENTS;
export type MediaProps = VideoPropsType & OwnProps & React.HTMLAttributes<HTMLVideoElement>;

export const Video = React.forwardRef<MediaRef, MediaProps>(({ file, onUpdate, autoPlay, onEnd, onTime, startTime, ...props }, ref) => {
  const [hls] = useState(
    () =>
      new HLS({
        enableWebVTT: false,
        enableCEA708Captions: false,
      }),
  );

  const handleUpdate = useCallback(() => {
    onUpdate?.();
  }, [onUpdate]);

  const eventProps = useMemo(
    () =>
      MEDIA_EVENTS.reduce<Partial<Record<MediaEvents, Function>>>(
        (result, event) => ({
          ...result,
          [event]: (...args: any[]) => {
            handleUpdate();
            // @ts-expect-error
            props[event]?.(...args);
          },
        }),
        {},
      ),
    [props, handleUpdate],
  );
  const { player } = useVideoPlayerApi(ref, {});

  useEffect(() => {
    if (player.videoRef.current && file) {
      if (file.includes('.m3u8') && HLS.isSupported()) {
        hls.attachMedia(player.videoRef.current);
        hls.on(HLS.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(file);
        });
      } else {
        player.videoRef.current.src = file;
      }
    }
  }, [file, hls, player.videoRef]);

  return <video ref={player.videoRef} {...eventProps} autoPlay={autoPlay} className={cx('w-screen h-screen')} />;
});
