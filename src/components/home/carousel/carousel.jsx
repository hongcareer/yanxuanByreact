import React,{Component} from 'react';
import Proptypes from 'prop-types';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import './carousel.less';
class Carousel extends Component{
  static propTypes = {
    homedata:Proptypes.object.isRequired,
    getHomeData:Proptypes.func.isRequired,
  };
  componentDidMount(){
    this.props.getHomeData();
  };
  componentDidUpdate(){
    const mySwiper = new Swiper ('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination',
        type : 'custom',
        paginationType: 'custom',
        // 自定义分页样式
        renderCustom: function (swiper, current, total) {
          const activeColor = 'red'
          const normalColor = 'white'
          let color = ''
          let paginationStyle = ''
          let html = ''
          for (let i = 1; i <= total; i++) {
            if (i === current) {
              color = activeColor
            } else {
              color = normalColor
            }
            paginationStyle =
              `background:${color};opacity:1;margin-right:0.2rem;width:24px;height:4px;border-radius:5px;display:inline-block`
            html += `<span className="swiper-pagination-bullet" style=${paginationStyle}></span>`
          }
          return html
        }
      },
    })
  };
  render(){
    const {homedata} = this.props;
    if(homedata.policyDescList){
      return(
        <div>
          <div className="carousel">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={require('../images/lunbo/2.jpg')} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={require('../images/lunbo/1.jpg')} alt="" />
                </div>
              </div>
              {/*// <!-- 如果需要分页器 -->*/}
              <div className="swiper-pagination">
              </div>
            </div>
          </div>
          <ul className="little">
            {homedata.policyDescList.map((policyDesc,index) =>
              <li key={index}>
                <img src={policyDesc.icon} alt="" />
                <span>{policyDesc.desc}</span>
              </li>
            )}
          </ul>
          <ul className="big">
            {homedata.kingKongModule.kingKongList.map((kingKong,index) =>
              <li key={index}>
                <img src={kingKong.picUrl} alt="img" />
                <span>{kingKong.text}</span>
              </li>
            )}
          </ul>
          <div className="newPeople">
            <div className="top">
              -新人专享礼-
            </div>
            <div className="bottom">
              <div className="b-right">
                <div className="b-r-top">新人专享礼包</div>
                <div className="b-r-bottom">
                  <img src={require('../images/newPer.png')} alt="" />
                </div>
                <div className="animate"></div>
              </div>
              <div className="b-left">
                <div className="b-l-top">
                  <div className="txt">
                    <div className="one">福利社</div>
                    <div className="two">今日特价</div>
                  </div>
                  <div className="pic">
                    <div className="picOne">
                      <span className="new">￥72</span>
                      <span className="old">￥98</span>
                    </div>
                    <div className="picTwo"><img src={require('../images/chock.png')} alt="" /></div>
                  </div>
                </div>
                <div className="b-l-top">
                  <div className="txt">
                    <div className="one">新人拼团</div>
                    <div className="two">一元起包邮</div>
                  </div>
                  <div className="pic">
                    <div className="picOne">
                      <span className="new">￥1</span>
                      <span className="old">￥19</span>
                    </div>
                    <div className="picTwo"><img src={require('../images/yao.png')} alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }else {
      return ''
    }
  }
};
export default Carousel;
