import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './search.less';
class Search extends Component{
  render(){
    return (
      <Link className="middle" to='/searchinfo'>
        <i className="iconfont icon-sousuo"></i>
        <span> 搜索商品，共xxxx个好物</span>
      </Link>
    )
  }
};
export default Search;

