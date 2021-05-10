import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Store from './store/Store';
import Store from './redux/rStore';

import App from './App';


let rerenderState = (state) => {
    ReactDOM.render(
      <React.StrictMode>
            <App
              state={Store.getState()}
              Store={Store}
              dispatch={Store.dispatch.bind(Store)}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderState(Store.getState());

Store.subscribe(() => {
  let state = Store.getState();
  rerenderState(state);
});


reportWebVitals();
