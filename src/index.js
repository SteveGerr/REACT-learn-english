// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { rerenderState } from './rerenderState'
import state from './store/state';
// import { sendAnswer, storeAddWord } from './store/state'

rerenderState(state)
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} sendAnswer={sendAnswer} addWord={storeAddWord} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


reportWebVitals();
