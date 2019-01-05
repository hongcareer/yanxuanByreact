import React,{Component} from 'react';
import './homeNav.less';
class HomeNav extends Component{
  render(){
    return (
      <div>
        <div className="home-header">
          <div className="home-header-top">
            <a href="javascript:;" className="left"></a>
            <a className="right">登录</a>
          </div>
          <div className="home-header-bottom">
            <ul className="partShow" >
              <span>推荐<span className="active"></span></span>
              <span>居家<span className=""></span></span>
              <span>鞋包配饰<span className=""></span></span>
              <span>服装<span className=""></span></span>
              <span>电器<span className=""></span></span>
              <span>洗护<span className=""></span></span>
              <span>饮食<span className=""></span></span>
              <span>厨餐<span className=""></span></span>
              <span>婴童<span className=""></span></span>
              <span>文体<span className=""></span></span>
              <span>特色区<span className=""></span></span>
            </ul>

            <ul className="allShow">
              <div className="top">
                <div className="left">全部频道</div>
              </div>
              <div className="bottom">
                <div className="active">推荐</div>
                <div>居家</div>
                <div>鞋包配饰</div>
                <div>服装</div>
                <div>电器</div>
                <div>洗护</div>
                <div>饮食</div>
                <div>厨餐</div>
                <div>婴童</div>
                <div>文体</div>
                <div>特色区</div>
              </div>
            </ul>
            <div  className="arrow" >
              <div className="iconfont" ></div>
            </div>
          </div>
        </div>
        <div className="mask" ></div>
      </div>
    )
  }
}
export default HomeNav;

