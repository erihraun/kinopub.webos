import './polyfills';

import { render } from 'react-dom';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const app = <App />;

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
  render(app, document.getElementById('root'));
}

export default app;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onUpdate: () => {
    if (window.confirm?.('Достуна новая версия, желаете обновиться?')) {
      window.location.reload();
    }
  },
});
