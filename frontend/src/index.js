import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {reducer , initialState} from './reducer';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppTheme} from './contexts/appContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppTheme initialState={initialState} reducer={reducer}>
        <App />
      </AppTheme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
