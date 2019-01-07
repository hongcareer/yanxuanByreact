import {combineReducers} from 'redux'

import {
  RECEIVE_HOME_DATA,
  RECEIVE_ITEM_DATA
} from './action-type'

const initHomedata = {};
function homeData(previousState=initHomedata,action){
  switch (action.type) {
    case RECEIVE_HOME_DATA:
      return action.data;
    case RECEIVE_ITEM_DATA:
      return action.data
    default:
      return previousState;
  }
}

// //暴露状态
export default combineReducers({
  homeData
})
