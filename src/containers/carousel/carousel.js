import {connect} from 'react-redux'
import Carousel from '../../components/home/carousel/carousel';
import {getHomeData} from '../../redux/action';

export default connect(
  state => ({homedata:state.homeData}),
  {getHomeData},
)(Carousel)

