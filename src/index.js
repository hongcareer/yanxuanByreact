import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route,HashRouter,Switch} from 'react-router-dom';
import store from './redux/store'
import Home from './components/home/home';
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path='/home' component={Home} />
    </HashRouter>
  </Provider>
  ,document.getElementById('app'))
