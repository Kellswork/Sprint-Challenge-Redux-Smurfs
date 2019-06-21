import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createStore, applyMiddleware , compose } from 'redux';
import { Provider } from 'react-redux';
import {smurfReducer as rootReducer }from './reducers';


const store = createStore(
  rootReducer,
  compose (
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
