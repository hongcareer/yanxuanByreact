import React,{Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import './carousel.less'
class Carousel extends Component{
  componentDidMount(){
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
    return(
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
    )
  }
};
export default Carousel;
