import ajax from './ajax';
const BASE = '/api';
//home页
export const reqHomeData = () => ajax('/homedata')
export const reqTotalNumber =() =>ajax(BASE+`/xhr/search/getTotalNumbersOfProducts.json`,'POST')
export const reqItemData = () => ajax('/itemdata')
export const reqCategoryInfo = (id) => ajax(BASE+`/item/cateList`,{id})
//topic
export const reqTabs = () =>ajax(BASE+`/topic/v1/find/getTabs.json`)
export const reqManual = () =>ajax(BASE+`/topic/v1/find/recManual.json`)
// export const reqAutoOne = ({page,size,exceptIds}) =>ajax(BASE+`/topic/v1/find/recAuto.json`,{page,size,exceptIds})
export const reqAutoOne = (data) => ajax(BASE+`/topic/v1/find/recAuto.json`,data)
//http://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383

//获取验证码--失败
export const reqCode = (data) => ajax(BASE+`/dl/yd/lsm`,data)

//搜索http://m.you.163.com/xhr/search/init.json?csrf_token=12c1977f99a1cbb725af3312b9e28aab
export const reqSeach = ({csrf_token}) =>ajax(BASE+'/xhr/search/init.json',{csrf_token},'POST')

//自动搜索http://m.you.163.com/xhr/search/searchAutoComplete.json?csrf_token=12c1977f99a1cbb725af3312b9e28aab
export const reqAutoSearch = (data) =>ajax(BASE+'/xhr/search/searchAutoComplete.json',data);

//获取评论//m.you.163.com/topic/v1/look/getList.json?page=1&size=20&type=1&csrf_token=12c1977f99a1cbb725af3312b9e28aab
export const reqTalk = (data) => ajax(BASE+'/topic/v1/look/getList.json?',data)

