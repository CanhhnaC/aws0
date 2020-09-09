import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Application from './components/Application';

import reducers from './reducers';

const store = createStore(reducers);

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Application />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
