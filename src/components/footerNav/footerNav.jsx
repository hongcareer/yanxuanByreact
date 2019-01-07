import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './footerNav.less'
class FooterNav extends Component{
  render(){
    return(
      <footer id="footer">
        <Link href="javascript:;" className='a' to='/home'>
          <span><i className="iconfont icon-shouye"></i></span>
          <span>首页</span>
        </Link>
        <Link href="javascript:;" className='a' to='/item'>
          <span><i className="iconfont icon-fenlei"></i></span>
          <span>分类</span>
        </Link>
        <Link href="javascript:;" className='a' to='/topic'>
          <span><i className="iconfont icon-tupian"></i></span>
          <span>识物</span>
        </Link>
        <Link href="javascript:;" className='a' to='/cart'>
          <span><i className="iconfont icon-gouwuche"></i></span>
          <span>购物车</span>
        </Link>
        <Link href="javascript:;" className='a' to='/profile'>
          <span><i className="iconfont icon-geren"></i></span>
          <span>个人</span>
        </Link>
      </footer>
    )
  }
};
export default FooterNav;
