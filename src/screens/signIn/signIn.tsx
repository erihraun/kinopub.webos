import { useCallback } from 'react';
import { VerifyCodeResponse } from '@e-raun/api/dist/types/device/types';

import { useDeviceCode } from 'hooks/useDeviceCode/useDeviceCode';
import { useDeviceInfo } from 'hooks/useDeviceInfo/useDeviceInfo';

import s from './signIn.module.scss';

export const SignIn = () => {
  const { info, isReady } = useDeviceInfo();

  const onAuth = useCallback((response: VerifyCodeResponse) => {
    console.log(response);
  }, []);

  const { data: code, error } = useDeviceCode({
    deviceId: '',
    deviceName: 'smarttv',
    deviceType: 'tv',
    onAuth,
    execute: isReady,
  });

  if (!isReady) return <div>wait...</div>;

  if (error) return <div>error...</div>;

  if (!code) return <div>loading...</div>;

  return <div className={s.wrap}>code: {code}</div>;
};
