import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index"
 import App from './App';
import {browserHistory} from 'react-router';
import Routes from './routes';
 import './index.css';
 import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/css/bootstrap-theme.css';


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import {browserHistory} from 'react-router';
// import Routes from './routes';
//  import './index.css';
//  import 'bootstrap/dist/css/bootstrap.css';
//  import 'bootstrap/dist/css/bootstrap-theme.css';
 
// //  import App from './App';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render( <Routes history={browserHistory}/>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();




