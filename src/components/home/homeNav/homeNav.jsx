import React,{Component} from 'react';
import BScroll from 'better-scroll'
import Search from '../../search/sea'

import './homeNav.less';

class HomeNav extends Component{
  state={
    isShow:false
  };
  toggleShow = ()=>{
    const {isShow} = this.state
    this.setState({
      isShow:!isShow,
    })
  };
  componentDidMount(){
    new BScroll('.home-header-bottom',{
      click:true,
      scrollX:true
    });
  }
  render(){
    const {isShow}=this.state
    return (
      <div>
        <div className="home-header">
          <div className="home-header-top">
            <a href="javascript:;" className="left"></a>
            <Search />
            <a className="right">登录</a>

          </div>
          <div className="home-header-bottom">
            <ul className={isShow?'partShow active':'partShow'}>
              <span className='active'>推荐</span>
              <span>居家</span>
              <span>鞋包配饰</span>
              <span>服装</span>
              <span>电器</span>
              <span>洗护</span>
              <span>饮食</span>
              <span>厨餐</span>
              <span>婴童</span>
              <span>文体</span>
              <span>特色区</span>
            </ul>

            <ul className={isShow?'allShow':'allShow active'}>
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
            <div  className="arrow" onClick={this.toggleShow}>
              <div className={isShow?'iconfont icon-jiantoushang':'iconfont icon-jiantouxia'} ></div>
            </div>
          </div>
        </div>
        <div className={isShow?'mask':'mask active'} ></div>
      </div>
    )
  }
}
export default HomeNav;

