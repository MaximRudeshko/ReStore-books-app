import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'


import {RestoreProvider} from './components/restore-service-context/RestoreContext'
import App from './components/App';
import RestoreService from './services/restore-service';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import store from './redux/store';

import './index.scss'

const restoreService = new RestoreService()


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorBoundry>
        <RestoreProvider value = {restoreService}>
          <Router>
            <App />
          </Router>
        </RestoreProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

