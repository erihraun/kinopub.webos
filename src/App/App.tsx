import 'styles/global.css';

import React from 'react';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import Router from 'components/router';
import View from 'components/view';
import Views from 'components/views';
import { PATHS } from 'routes';
import { FilmScreen } from 'screens/film/film';
import { IndexScreen } from 'screens/index/indexScreen';
import { SearchScreen } from 'screens/search/searchScreen';
import { SignIn } from 'screens/signIn/signIn';
import { VideoScreen } from 'screens/video/video';

type Props = {};

const App: React.FC<Props> = (props) => {
  return (
    <Router>
      <Views>
        <View component={IndexScreen} path={PATHS.Index} exact />
        <View component={SearchScreen} path={PATHS.Search} />
        <View component={VideoScreen} path={PATHS.Video} layout="fill" />
        <View component={FilmScreen} path={PATHS.Film} layout="fill" />
        <View component={SignIn} path={PATHS.Pair} auth={false} />
      </Views>
    </Router>
  );
};

export default MoonstoneDecorator(App);
