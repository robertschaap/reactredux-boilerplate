import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from 'utils/registerServiceWorker';
import Root from './Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
