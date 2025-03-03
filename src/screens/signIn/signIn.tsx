import { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { VerifyCodeResponse } from '@e-raun/api/dist/types/device/types';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';

import { useDeviceCode } from 'hooks/useDeviceCode/useDeviceCode';
import { PATHS, generatePath } from 'routes';
import { userStore } from 'store/user';

import s from './signIn.module.scss';

const Wrap: FC = ({ children }) => <div className={s.wrap}>{children}</div>;

export const SignIn = observer(() => {
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const history = useHistory();

  const { setToken, setRefreshToken, getUser, isLoggedIn } = userStore;

  const onAuth = useCallback(
    async (response: VerifyCodeResponse) => {
      await runInAction(async () => {
        setToken(response.access_token);
        setRefreshToken(response.refresh_token);
        await getUser();
      });
    },
    [getUser, setRefreshToken, setToken],
  );

  const { getCode, close } = useDeviceCode({
    onAuth,
  });

  useEffect(() => {
    if (code && isLoggedIn) close();
  }, [close, code, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      history.push(generatePath(PATHS.Index));
    } else {
      getCode({
        deviceId: nanoid(),
        deviceName: 'smarttv',
        deviceType: 'tv',
      })
        .then((res) => {
          setCode(res.user_code);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [getCode, history, isLoggedIn]);

  useEffect(() => {
    return () => {
      close();
    };
  }, [close]);

  if (error) return <Wrap>error...</Wrap>;

  if (!code) return <Wrap>loading...</Wrap>;

  return <Wrap>code: {code}</Wrap>;
});
