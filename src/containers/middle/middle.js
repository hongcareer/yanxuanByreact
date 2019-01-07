import {connect} from 'react-redux'
import Middle from '../../components/home/middle/middle';
import {getHomeData} from '../../redux/action';

export default connect(
  state => ({homedata:state.homeData}),
  {getHomeData},
)(Middle)
