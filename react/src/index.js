import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './state/store'
import { HashRouter } from 'react-router-dom'

import './styles/style.scss';
import './style.scss';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </HashRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Qui annoto (solo in dev) le prossime cose da fare
if( process.env.REACT_APP_STAGE === 'dev' ) {
  let todos = [
    //{prio:2,text:""},
  ]
  if( todos.length > 0 ) {
    console.info( ' ' );
    console.info( ' ' );
    console.info( '================== ToDo ==================' );
    todos.map((t, i) => {
      if(!!t.text) {
        let num = (i+1)+') '
        let type = !!t.type ? ((t.type==='B') ? 'BUG' : (t.type==='R') ? 'REFINEMENT' : t.type ) : 'TASK'
        let info = num  + '['+type+'] ' + t.text
        if( t.prio === 1 ) {
          console.error( info );
        } else if( t.prio === 2 ) {
          console.warn( info );
        } else {
          console.info( info );
        }
      }
      return true
    })
    console.info( '==========================================' );
    console.info( ' ' );
    console.info( ' ' );
  }
}
