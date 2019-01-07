import React,{Component} from 'react';
import Proptypes from 'prop-types';
import BScroll from 'better-scroll';
import './middle.less'
class Middle extends Component{
  state = {
    firstArr:[]
  };
  static propTypes = {
    homedata:Proptypes.object.isRequired,
    getHomeData:Proptypes.func.isRequired,
  };
  componentDidMount(){
    this.props.getHomeData();
    // const ulList = this.itemUl;
    // console.log(ulList)
    // console.log(this.itemUl);
    // const lis = Array.prototype.slice.call(this.itemUl.children);
    //   let lisWidth = lis.reduce((prev,next)=>{
    //     return prev+next.clientWidth;
    //   },0);
    // console.log(lisWidth);
    // ulList.style.width = lisWidth + 200+'px';
  };
  componentDidUpdate(){
    // 设置ul宽度
    const arr = [];
    let ulList = this.itemUl;
    arr.push(ulList);
    console.log(arr);
    console.log(ulList)
    const lis = Array.prototype.slice.call(this.itemUl.children);
      let lisWidth = lis.reduce((prev,next)=>{
        return prev+next.clientWidth;
      },0);
    console.log(lisWidth);
    ulList.style.width = lisWidth + 200+'px';

    //解决每个盒子横向滑屏的问题
    const divList = this.BSCROLL;
    console.log(divList);
    // let divs = Array.prototype.slice.call(divList);
      this.scroll = new BScroll(divList, {
        click: true,
        scrollX:true
      })
  };
  render(){
    const {homedata} = this.props;
    const {firstArr} = this.state;
    if(homedata.tagList){
      if(homedata.categoryHotSellModule.categoryList){
        const {categoryModule,newItemList,sceneLightShoppingGuideModule} = homedata;
        const recommendArrOne = categoryModule[4].itemList.find((item,index)=>{
          return item.id == '1154003'
        });
        const recommendArrTwo = categoryModule[4].itemList.filter((item,index)=>{
          return index < 3;
        });
        const {categoryList} = homedata.categoryHotSellModule;
        return(
          <div>
            <div className="tagList">
              <div className="top">
                <span className="left">品牌制造商直供</span>
                <div className="right">
                  <span>更多</span>
                  <div className="iconfont icon-iconfontjiantou2"></div>
                </div>
              </div>
              <ul className="bottom">
                {
                  homedata.tagList.map((tag,index) =>
                    <li style={{backgroundImage: `url(${tag.picUrl})`}} key={index}>
                      <h4>{tag.name}</h4>
                      <div>{tag.floorPrice}元起
                        {
                          tag.floorPrice == 9.9?<span >上新</span>:''
                        }
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
            <div className="hotSell">
              <div className="top">
                <span className="left">{homedata.categoryHotSellModule.title}</span>
                <div className="right">
                  <span>更多</span>
                  <div className="iconfont icon-iconfontjiantou2"></div>
                </div>
              </div>
              <ul className="bottom" >
                {
                  categoryList.filter((i,index) => {
                    return index<2
                  }).map((item,index) =>
                    <li className="big" key={index} style={{backgroundImage: `url(${item.picUrl})`}}>
                      <div>{item.categoryName}</div>
                      <span className="line"></span>
                    </li>
                  )
                }
                {
                  categoryList.filter((i,index) => {
                    return index>=2
                  }).map((item,index) =>
                    <li className="small"  key={item.targetUrl} >
                      <h4>{item.categoryName}</h4>
                      <div className="b-center" style={{backgroundImage: `url(${item.picUrl})`}}></div>
                    </li>
                  )
                }
              </ul>
            </div>
            <div className="recommend">
              <div className="top">
                <span className="left">人气推荐</span>
                <div className="right">
                  <span>更多</span>
                  <div className="iconfont icon-iconfontjiantou2"></div>
                </div>
              </div>
              <div className="center">
                <div className="left">
                  <img src={recommendArrOne.listPicUrl} alt="tooth" />
                </div>
                <div className="right">
                  <div>{recommendArrOne.name}</div>
                  <div>{recommendArrOne.simpleDesc}</div>
                  <div>￥{recommendArrOne.counterPrice}</div>
                </div>
              </div>
              <ul className="bottom">
                {
                  recommendArrTwo.map((item,index) =>
                    <li  key={index}>
                      <div className="top">
                        <img src={item.listPicUrl} alt="" />
                      </div>
                      <div className="bottom">
                        <span className="one">{item.name}...</span>
                        <span className="two">￥{item.counterPrice}</span>
                      </div>
                      {
                        item.promTag?<div className="choose" >{item.promTag}</div>:''
                      }
                    </li>
                  )
                }
              </ul>
            </div>
            <div className="limitedTime">
              <div className="top">
                <span className="left">限时购</span>
                <div className="right">
                  <span>更多</span>
                  <div className="iconfont icon-iconfontjiantou2"></div>
                </div>
              </div>
              <ul className="bottom">
                <li>
                  <div className="pic">
                    <img src={require('../images/limited/1.jpg')} alt="" />
                  </div>
                  <div className="txt">
                    <span>￥1839</span>
                    <span>￥2200</span>
                  </div>
                </li>
                <li>
                  <div className="pic">
                    <img src={require('../images/limited/2.png')} alt="" />
                  </div>
                  <div className="txt">
                    <span>￥1839</span>
                    <span>￥2200</span>
                  </div>
                </li>
                <li>
                  <div className="pic">
                    <img src={require('../images/limited/3.png')} alt="" />
                  </div>
                  <div className="txt">
                    <span>￥1839</span>
                    <span>￥2200</span>
                  </div>
                </li>
                <li>
                  <div className="pic">
                    <img src={require('../images/limited/4.png')} alt="" />
                  </div>
                  <div className="txt">
                    <span>￥1839</span>
                    <span>￥2200</span>
                  </div>
                </li>
                <li>
                  <div className="pic">
                    <img src={require('../images/limited/5.png')} alt="" />
                  </div>
                  <div className="txt">
                    <span>￥1839</span>
                    <span>￥2200</span>
                  </div>
                </li>
                <li>
                  <div className="pic">
                    <img src={require('../images/limited/6.png')} alt="" />
                  </div>
                  <div className="txt">
                    <span>￥1839</span>
                    <span>￥2200</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="newItem">
              <div className="top">
                <span className="left">新品首发</span>
                <div className="right">
                  <span>更多</span>
                  <div className="iconfont icon-iconfontjiantou2"></div>
                </div>
              </div>
              <ul className="bottom">
                {
                  newItemList.slice(0,6).map((item,index) =>
                    <li key={index}>
                      <div className="top">
                        <img src={item.listPicUrl} alt="" />
                      </div>
                      <div className="bottom">
                        <span className="one">{item.name}</span>
                        <span className="two">￥{item.counterPrice}</span>
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
            <ul className="shopGuide">
              {
                sceneLightShoppingGuideModule.map((shopGuide,index) =>
                  <li key={index} style={{backgroundImage:`url(${shopGuide.styleItem.backgroundUrl})`}}>
                    <div className="txtOne">{shopGuide.styleItem.title}</div>
                    <div className="txtTwo">{shopGuide.styleItem.desc}</div>
                    <div className="picOne">
                      <img src={shopGuide.styleItem.itemPicBeanList[0].picUrl} alt="" />
                    </div>
                    <div className="picTwo">
                      <img src={shopGuide.styleItem.itemPicBeanList[1].picUrl} alt="" />
                    </div>
                </li>
                )
              }
            </ul>
            {
              categoryModule.map((cate,index) =>
                <div className="categoryItem" key={index} >
                <div className="top">
                  <img src={cate.titlePicUrl} alt="" />
                </div>
                <div className="bottom-which" ref={bw => this.BSCROLL = bw}>
                  <ul className="scroll" ref={Ul => this.itemUl = Ul}>
                    {
                      cate.itemList.map((item,index) =>
                        <li key={item.id} className="list">
                          <div className="pic">
                            <img src={item.scenePicUrl} alt="" />
                          </div>
                          <div className="txt">{item.name}</div>
                          <div className="bot">
                            <span className="new">￥{item.retailPrice}</span>
                            <span className="old" v-if="item.retailPrice !== item.counterPrice">￥{item.counterPrice}</span>
                          </div>
                        </li>
                      )
                    }
                    <div className="last">
                      <span>产看更多</span>
                      <span className="iconfont icon-iconfontjiantou2"></span>
                    </div>
                  </ul>
                </div>
              </div>
              )
            }
            <div className="last-b">
              <div className="b-top">
                <span className="left">下载App</span>
                <span className="right">电脑版</span>
              </div>
              <div className="b-bot">
                <span>网易公司版权所有 © 1997-2019</span>
                <br/>
                <span>食品经营许可证：JY13301080111719</span>
              </div>
            </div>
          </div>
        )
      }

    }else {
      return ''
    }
  }
};
export default Middle;
