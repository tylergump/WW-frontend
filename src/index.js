import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from './components/store/reducers';

// sets up our global storage
const store = createStore(rootReducer)

// function to check for authentication returns a boolean value
export const checkAuthentication = () => {
  return store.getState().authenticated ? true : false
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log(store.getState())
store.subscribe(() => console.log('Successful dispatch!'))

console.log('authentication test check in index.js', checkAuthentication())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
