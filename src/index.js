import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  root.render(
    <React.StrictMode>
      <App 
        state={store.getState()}
        dispatch={store.dispatch}
      />
    </React.StrictMode>
  );

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
render();

// Subscribe render to changes to the `store`
store.subscribe(render);
