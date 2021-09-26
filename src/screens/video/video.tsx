import VideoPlayer from '@enact/moonstone/VideoPlayer';

import { Video } from 'modules/player/components/video/video';

export const VideoScreen = () => {
  return (
    <VideoPlayer
      //@ts-expect-error
      videoComponent={
        <Video
          autoPlay={true}
          file="https://banana.bazonserver.site/manifest/36871/2160.mp4/index.m3u8?hash=Ve3JUuQQaDhqz4Rrl5g5dw&expires=1632682722&id=36871&name=2160.mp4"
          onEnd={console.log}
          onTime={console.log}
          startTime={0}
        />
      }
    />
  );
};
