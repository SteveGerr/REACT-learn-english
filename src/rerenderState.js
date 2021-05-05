import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderState = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} sendAnswer={state.sendAnswer} addWord={state.storeAddWord} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
