import React from 'react';
import ReactDOM from 'react-dom';
import {Route,HashRouter,Switch} from 'react-router-dom';
import Home from './components/home/home';
ReactDOM.render(
  <HashRouter>
    <Route path='/home' component={Home} />
  </HashRouter>
  ,document.getElementById('app'))
