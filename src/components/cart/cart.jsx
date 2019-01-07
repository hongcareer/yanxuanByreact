import React,{Component} from 'react';
import FooterNav from '../footerNav/footerNav'
import './cart.less'
class Cart extends Component{
  goLogin = ()=>{
    this.props.history.push('/profile')
  };
  render(){
    return(
      <div>
        <div className="header">
          <div className="left">购物车</div>
          <div className="right">
            <img src={require('./images/quan.png')} alt="" />
          </div>
          <div className="right">领券</div>
        </div>
        <div className="footer1">
          <ul className="up">
            <li>
              <span className="iconfont icon-yuanquan"></span>
              <span className="mainTxt">30天无忧退货</span>
            </li>
            <li>
              <span className="iconfont icon-yuanquan"></span>
              <span className="mainTxt">48小时快速退款</span>
            </li>
            <li>
              <span className="iconfont icon-yuanquan"></span>
              <span className="mainTxt">满88元免邮费</span>
            </li>
          </ul>
          <div className="down">
            <div className="d-t"></div>
            <div className="d-m">去添加点什么吧</div>
            <div className="d-b" onClick={this.goLogin}>登录</div>
          </div>
        </div>
        <FooterNav />
      </div>
    )
  }
};
export default Cart;
