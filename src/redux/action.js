import {
  RECEIVE_HOME_DATA
} from './action-type'
import {
  reqHomeData,
} from '../api/index'

const recHomeData = (data) => ({type:RECEIVE_HOME_DATA,data:data})

export const getHomeData = ()=> {
  return async dispatch =>{
    const result = await reqHomeData();
    if(result.code === 0){
      dispatch(recHomeData(result.data))
    }
  }

}
