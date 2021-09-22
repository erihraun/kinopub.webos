import { useEffect, useState } from 'react';

import { getDeviceInfo } from 'utils/deviceInfo';

let deviceInfo: object | null = null;

export const useDeviceInfo = () => {
  const [info, setInfo] = useState(() => deviceInfo);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log('aasdsdasd');

    getDeviceInfo().then((res) => {
      console.log('asdasd');

      setInfo(res);

      setIsReady(true);
    });
  }, []);

  return { info, isReady };
};
