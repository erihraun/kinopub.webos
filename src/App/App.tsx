import 'styles/global.css';

import React from 'react';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import Router from 'components/router';
import View from 'components/view';
import Views from 'components/views';
import { PATHS } from 'routes';
import { IndexScreen } from 'screens/index/indexScreen';
import { SignIn } from 'screens/signIn/signIn';

type Props = {};

const App: React.FC<Props> = (props) => {
  return (
    <Router>
      <Views>
        <View component={IndexScreen} path={PATHS.Index} exact />
        <View component={SignIn} path={PATHS.Pair} auth={false} />
      </Views>
    </Router>
  );
};

export default MoonstoneDecorator(App);
