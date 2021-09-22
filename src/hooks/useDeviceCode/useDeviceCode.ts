import { useCallback, useEffect, useRef, useState } from 'react';
import { DeviceApi } from '@e-raun/api';
import { VerifyCodeResponse } from '@e-raun/api/dist/types/device/types';

import { http } from 'libs/http';

const deviceApi = new DeviceApi(http);

export type UseDeviceCodeProps = {
  deviceId: string;
  deviceName: 'androidtv' | 'appletv' | 'smarttv';
  deviceType: 'tv';
  onAuth(data: VerifyCodeResponse): void;
  execute: boolean;
};

export const useDeviceCode = ({ deviceId, deviceName, onAuth, deviceType, execute }: UseDeviceCodeProps) => {
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const unmountRef = useRef(false);

  const checkAuth = useCallback(
    (data) => {
      intervalRef.current = setInterval(() => {
        deviceApi
          .verifyCode({ code: data.code, user_code: data.user_code })
          .then((response) => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }

            onAuth(response);
          })
          .catch(() => {
            if (unmountRef.current && intervalRef.current !== null) {
              clearInterval(intervalRef.current);
            }
          });
      }, data.interval * 1000);
    },
    [onAuth],
  );

  useEffect(() => {
    if (!execute) return;

    deviceApi
      .getCode({
        deviceId: deviceId,
        deviceName: deviceName,
        deviceType: deviceType,
      })
      .then((response) => {
        setCode(response.user_code);
        checkAuth(response);
      })
      .catch(() => {
        setError(true);
      });
  }, [checkAuth, deviceId, deviceName, deviceType, execute]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      unmountRef.current = true;
    };
  }, []);

  return { data: code, error };
};
