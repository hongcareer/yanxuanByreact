import {creatStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
const store = creatStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
