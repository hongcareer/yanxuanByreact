import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route,HashRouter,Switch} from 'react-router-dom';
import store from './redux/store';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Ucenter from './components/ucenter/ucenter';
import Cart from './components/cart/cart';
import Item from './containers/item/item';
import SearchInfo from './components/searchinfo/searchinfo';
import './mock/mockServer';
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/item' component={Item} />
        <Route path='/profile' component={Profile} />
        <Route path='/ucenter' component={Ucenter} />
        <Route path='/cart' component={Cart} />
        <Route path='/searchinfo' component={SearchInfo} />
      </Switch>
    </HashRouter>
  </Provider>
  ,document.getElementById('app'))
