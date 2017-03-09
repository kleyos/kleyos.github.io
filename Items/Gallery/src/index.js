import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Gallery from './components/Gallery';
import Single from './components/Single';
//import './scss/style.scss';
import './App.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Gallery} ></IndexRoute>
        <Route path='/image/:imgId'component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)


render(router,  document.getElementById('root'));
