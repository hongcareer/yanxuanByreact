import {
  RECEIVE_HOME_DATA,
  RECEIVE_ITEM_DATA
} from './action-type'
import {
  reqHomeData,
  reqItemData
} from '../api/index'

const recHomeData = (data) => ({type:RECEIVE_HOME_DATA,data:data});
const recItemData = (data) => ({type:RECEIVE_ITEM_DATA,data:data});

export const getHomeData = ()=> {
  return async dispatch =>{
    const result = await reqHomeData();
    if(result.code === 0){
      dispatch(recHomeData(result.data))
    }
  }
};
export const getItemData = ()=> {
  return async dispatch =>{
    const result = await reqItemData();
    if(result.code === 0){
      dispatch(recItemData(result.data))
    }
  }
};
