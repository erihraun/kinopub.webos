import React, { Suspense, createElement, useEffect, useMemo, useState } from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Spinner from 'components/spinner';
import FillLayout from 'layouts/fill';
import MainLayout from 'layouts/main';
import { PATHS } from 'routes';
import { userStore } from 'store/user';

export type ViewProps = {
  component: RouteProps['component'];
  layout?: 'main' | 'fill';
  auth?: boolean;
} & Omit<RouteProps, 'component' | 'render'>;

const View: React.FC<ViewProps> = observer(({ component, layout, auth = true, ...props }) => {
  const [isReady, setIsReady] = useState(false);
  const { isLoggedIn, isFulfilled } = userStore;

  const Layout = useMemo(() => {
    if (layout === 'fill') {
      return FillLayout;
    }

    return MainLayout;
  }, [layout]);

  const render = useMemo<React.FC<RouteComponentProps>>(
    () => (routeProps) =>
      (
        <Layout>
          <Suspense fallback={<Spinner />}>{createElement(component!, routeProps)}</Suspense>
        </Layout>
      ),
    [component, Layout],
  );

  useEffect(() => {
    if (isFulfilled) setIsReady(true);
  }, [isFulfilled]);

  if (!isReady) return null;

  if (!auth) return <Route {...props} render={render} />;

  return isLoggedIn ? <Route {...props} render={render} /> : <Redirect to={PATHS.Pair} />;
});

export default View;
