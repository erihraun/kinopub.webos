import 'styles/global.css';

import React from 'react';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import Router from 'components/router';
import View from 'components/view';
import { PATHS } from 'routes';

type Props = {};

const App: React.FC<Props> = (props) => {
  return <Router>asdx</Router>;
};

export default MoonstoneDecorator(App);
