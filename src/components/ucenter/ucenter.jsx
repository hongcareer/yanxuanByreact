import React,{Component} from 'react';
import './ucenter.less'
class Ucenter extends Component{
  render(){
    return(
      <div className="pers">
        <div id="header">
          <div className="left">
            <img src={require('./images/head.png')} alt=""/>
            <div className="l-top"></div>
            <div className="b-top">普通用户</div>
          </div>
          <div className="right">
            <img src={require('./images/first.png')} alt="" className="first"/>
            <div className="sec"></div>
            <div className="vip">
              <span className="left"></span>
              <span className="right1">超级会员</span>
              <span className="right2">立即试用</span>
            </div>
          </div>
        </div>
        <ul id="menu">
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
          <li>
            <div className="top"></div>
            <div className="bot">我的订单</div>
          </li>
        </ul>
        <button className="logout">退出登陆</button>
      </div>
    )
  }
};
export default Ucenter;
