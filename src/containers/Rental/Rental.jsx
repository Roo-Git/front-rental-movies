import React, {useState} from "react";

import Header from '../../components/Header/Header';
import Orders from "../../components/Orders/Orders";
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";
import {connect} from 'react-redux';



function Rental (props) {
  console.log(props.cart)
  // HOOKS

  const [tab, setTab] = useState({
    selected: 'Orders'
  })

 // FUNCTIONS

  const setSelected = (tab) => {
    setTab({selected: tab});
  }
    return (
        <div className="rentalContainer">
            <Header/>
          
          <div className="rentalSuperMainContainer">
              
          <TabNav tabs={['Orders', 'Wishes', 'Last Orders', 'Gifts', 'Make a Gift']} selected={tab.selected} setSelected={setSelected}>
              <Tab isSelected={tab.selected === 'Orders'}>
                  <Orders/>
              </Tab>
              <Tab isSelected={tab.selected === 'Last Orders'}>

              </Tab>




          </TabNav>

            

          </div>
          

        </div>
    )
};

const mapStateToProps = state => {
  return {
      cart : state.cartReducer.cart
  }
}

export default connect(mapStateToProps)(Rental);