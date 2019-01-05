import {combineReducers} from 'redux'

import {
  RECEIVE_HOME_DATA
} from './action-type'

const homeState = {
  homedata:{}
}
function home(previousState=homeState,action){
  switch (action.type) {
    case RECEIVE_HOME_DATA:
      return action.data
  }
}
//暴露状态
export default combineReducers({
  home,
})
