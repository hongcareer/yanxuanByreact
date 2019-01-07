import React,{Component} from 'react';
import Search  from '../search/sea';
import Proptypes from 'prop-types';
import './item.less';
class Item extends Component{
  static propTypes = {
    homedata:Proptypes.object.isRequired,
    getItemData:Proptypes.func.isRequired,
  };
  componentDidMount(){
    console.log(222);
    this.props.getItemData()
  };
  goItem = (id) => {
    this.props.history.push(`/item/cateList/${id}`)
  };
  render(){
    const {homedata} = this.props;
    // console.log(homedata.categoryL1List);
    if(homedata.categoryL1List.length>0){
      console.log(1);
      return(
        <div>
          <div className="top">
            <Search/>
          </div>
          <div className="left">
            <ul className="leftList">
              {
                categoryL1List.map((category,index) =>
                  <li onClick={this.goItem.bind(null,category.id)} className={this.location.pathname === `/item/${category.id}`}  key={index}>
                    {category.name}
                    <div className={this.location.pathname  === `/item/${category.id}`?'line active' : 'line'}>
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      )
    }else {
      return ''
    }
  }
};
export default Item;
