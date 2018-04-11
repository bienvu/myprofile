import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import { Provider } from 'react-redux'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import './assets/css/main.css';
import './assets/css/todos.css';
// import 'todomvc-app-css/index.css'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
