import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { sendAnswer, storeAddWord, enterTxt } from './store/state'



export let rerenderState = (state) => {
  ReactDOM.render(
    <React.StrictMode>
          <App
            state={state}
            sendAnswer={sendAnswer}
            storeAddWord={storeAddWord}
            enterTxt={enterTxt}
          />
      </React.StrictMode>,
      document.getElementById('root')
  );
};
