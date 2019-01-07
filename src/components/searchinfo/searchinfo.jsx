import React,{Component} from 'react';
import './searchinfo.less'
class SearchInfo extends Component{
  goBack = () => {
    this.props.history.goBack()
  };
  render(){
    return(
      <div>
        <div className="header">
          <input type="text"/>
          <span className="iconfont icon-sousuo"></span>
          <span onClick={this.goBack}>取消</span>
        </div>
        <div className="his">
          <div className="his-top">
            <span>历史记录</span>
            <span>删除</span>
          </div>
          <ul className="his-list">
            <li>wwwww</li>
          </ul>
        </div>
        <div className="footer">
          <div className="hot">热门搜索</div>
          <ul className="list">
            <li>xxxxx</li>
          </ul>
        </div>
        <ul className="searchList">
          <li>
            cccccc
          </li>
        </ul>
      </div>
    )
  }
};
export default SearchInfo;
