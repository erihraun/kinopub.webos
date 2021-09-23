import { useCallback, useEffect, useRef } from 'react';
import { DeviceApi } from '@e-raun/api';
import { DeviceCodeResponse, VerifyCodeResponse } from '@e-raun/api/dist/types/device/types';

import { http } from 'libs/http';

const deviceApi = new DeviceApi(http);

export type UseDeviceCodeProps = {
  onAuth(data: VerifyCodeResponse): void;
};

export type GetCodeProps = { deviceId: string; deviceName: 'androidtv' | 'appletv' | 'smarttv'; deviceType: 'tv' };

export type UseDeviceCodeReturn = {
  getCode(data: GetCodeProps): Promise<DeviceCodeResponse>;
  close(): void;
};

export const useDeviceCode = ({ onAuth }: UseDeviceCodeProps): UseDeviceCodeReturn => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const unmountRef = useRef(false);

  const close = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

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

  const getCode = useCallback(
    ({ deviceId, deviceName, deviceType }: GetCodeProps) => {
      return deviceApi
        .getCode({
          deviceId: deviceId,
          deviceName: deviceName,
          deviceType: deviceType,
        })
        .then((response) => {
          checkAuth(response);
          return response;
        });
    },
    [checkAuth],
  );

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      unmountRef.current = true;
    };
  }, []);

  return { getCode, close };
};
