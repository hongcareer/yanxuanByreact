import {connect} from 'react-redux'
import Item from '../../components/item/item';
import {getItemData} from '../../redux/action';

export default connect(
  state => ({homedata:state.homeData}),
  {getItemData},
)(Item)
