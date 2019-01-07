import React,{Component} from 'react';
import './profile.less'
class Profile extends Component{
  state = {
    isShowPhone:false,
    isShowReg:false
  };
  changeShowWay = () => {
    const {isShowPhone} = this.state;
    this.setState({
      isShowPhone: !isShowPhone
    })
  };
  goRegister = () => {
    const {isShowReg} = this.state;
    this.setState({
      isShowReg: !isShowReg
    })
  };
  goHome = () => {
    this.props.history.push('/home')
  };
  goSearchInfo = () => {
    this.props.history.push('/searchinfo')
  };
  goCart = () => {
    this.props.history.push('/cart')
  };
  render(){
    const {isShowPhone,isShowReg} = this.state;
    return (
      <div>
        <div className="p-header">
          <span className="p-h-one" onClick={this.goHome}></span>
          <span className="p-h-two"></span>
          <span className="p-h-three" onClick={this.goSearchInfo}></span>
          <span className="p-h-forth" onClick={this.goCart}></span>
        </div>
        <div className={isShowPhone || isShowReg ?'p-way-footer active':'p-way-footer'}>
          <div className="logo">
            <img src={require('./image/logo.png')} alt="" />
          </div>
          <div className="loginWay" >
            <span className="iconfont icon-shouji1"></span>
            <span className="phone" onClick={this.changeShowWay}>手机号码登录</span>
          </div>
          <div className="loginWay diff" >
            <span className="iconfont icon-youjian"></span>
            <span className="mail">邮箱账号登录</span>
          </div>
          <div className="register" onClick={this.goRegister}>
            <span>手机号快捷注册</span>
            <span className="iconfont icon-iconfontjiantou2"></span>
          </div>
          <div className="bottom">
            <div className="connectWay">
              <span className="iconfont icon-weixin"></span>
              <span>微信</span>
            </div>&nbsp;&nbsp;|
            <div className="connectWay">
              <span className="iconfont icon-QQ"></span>
              <span>QQ</span>
            </div>&nbsp;&nbsp;|
            <div className="connectWay">
              <span className="iconfont icon-weibo"></span>
              <span>微博</span>
            </div>
          </div>
        </div>
        <div className={isShowPhone?'p-way-phone active':'p-way-phone'}>
          <div className="logo"><img src={require('./image/logo.png')} alt="" /></div>
          <div className="loginWay">
            <input type="text" placeholder="请输入手机号" className="one" />
            <div className="getCode">
              获取验证码
            </div>
            <div className="line1"></div>
            <input type="text" placeholder="请输入短信验证码" className="two" />
            <div className="line2"></div>
            <div className="prom">
              <span>遇到问题</span>
              <span>使用密码验证登录</span>
            </div>
            <span className="errMsg"></span>
            <div className="loginWay1">
              <span className="phone">登录</span>
            </div>
            <div className="loginWay1 diff">
              <span className="mail" onClick={this.changeShowWay}>其他登录方式</span>
            </div>
            <div className="regNum"> 注册账号> </div>
          </div>
        </div>
        <div className="p-way-reg" className={isShowReg?'p-way-reg active':'p-way-reg'}>
          <div className="reg-footer">
            <div className="reg-footer-phone">手机号注册</div>
            <div className="loginWayTo">
              <input type="text" placeholder="请输入手机号" className="one"/>
              <div className="getCode">获取验证码</div>
              <div className="line1"></div>
              <input type="text" placeholder="请输入短信验证码" className="two"/>
              <div className="line2"></div>
              <input type="text" placeholder="请输入密码" className="two"/>
              <div className="loginWay1">
                <span className="phone">注册</span>
              </div>
              <div className="serve">
            <span className="check">
              <input type="checkbox"/>
            </span>
                <span>我同意</span>
                <a href="">《服务条款》</a>
                <span>和</span>
                <a href="">《网易隐私政策》</a>
              </div>
              <div className="regNum">邮箱账号注册></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
export default Profile;
