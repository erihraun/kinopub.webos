import { useEffect, useState } from 'react';

import { getDeviceInfo } from 'utils/deviceInfo';

let deviceInfo: object | null = null;

export const useDeviceInfo = () => {
  const [info, setInfo] = useState(() => deviceInfo);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    getDeviceInfo().then((res) => {
      setInfo(res);
      setIsReady(true);
    });
  }, []);

  return { info, isReady };
};
