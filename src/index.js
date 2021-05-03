import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state from './store/state';
import { addAnswer } from './store/state'


ReactDOM.render(
  <React.StrictMode>
    <App state={state} addAnswer={addAnswer} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
