import React,{Component} from 'react';
import HomeNav from './homeNav/homeNav';
import Carousel from './carousel/carousel'
class Home extends Component{
  render(){
    return (
      <div>
        <HomeNav />
        <Carousel />
      </div>
    )
  }
}
export default Home;
