import React,{Component} from 'react';
import HomeNav from './homeNav/homeNav';
import Carousel from '../../containers/carousel/carousel';
import Middle from '../../containers/middle/middle';
import FooterNav from '../footerNav/footerNav';
class Home extends Component{
  render(){
    return (
      <div>
        <HomeNav />
        <Carousel />
        <Middle />
        <FooterNav />
      </div>
    )
  }
}
export default Home;
