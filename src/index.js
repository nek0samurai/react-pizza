import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
    
  
);



function foo(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === null || 0){
      continue
    } else{newArr.push(arr[i] * 2)}
  }
  console.log(newArr);
  return newArr
}
foo([1.5, 4, null, 6, 8, null, 1, 13])
