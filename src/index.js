import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise";
import './index.css';
import App from './App';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);
store.subscribe(()=>{
   console.log("store changed", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));
