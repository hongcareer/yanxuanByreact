import axios from 'axios'

export default function ajax(url,data={},method='GET'){
  return new Promise((resolve, reject)=>{
    let promise;
    if(method === 'GET'){
      //路径
      if(data.page){
        url = url+`?page=${data.page}&size=${data.size}&exceptIds=${data.exceptIds}`
      };
      if(data.mb){
        url = url+`?mb=${data.mb}&pd=${data.pd}&pkid=${data.pkid}&topURL=${data.topURL}&rtid=${data.rtid}&nocache=${data.nocache}`
      }
      if(data.keywordPrefix){
        url = url+`?keywordPrefix=${data.keywordPrefix}`
      }
      // page,size,type,csrf_token
      if(data.page){
        url = url+`?page=${data.page}&size=${data.size}&type=${data.type}&csrf_token=${data.csrf_token}`
      }
      // console.log(url)
      promise = axios.get(url,data)
        .then((response)=>{
          resolve(response.data)
        })
        .catch((err)=>{
          reject('请求失败')
        })
    }else{
      promise = axios.post(url,data)
        .then((response)=>{
          resolve(response.data)
        })
        .catch((err)=>{
          reject('请求失败')
        })
    };
    return promise
  })
}
