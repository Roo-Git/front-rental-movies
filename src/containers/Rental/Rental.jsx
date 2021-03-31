import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { port, customer, rental} from '../../api/ApiMongoDB';
import Header from '../../components/Header/Header';
import Orders from "../../components/Orders/Orders";
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { CLEAN } from "../../redux/types/cartType";




function Rental(props) {
  // HOOKS

  const [totalPrice, setTotalPrice] = useState(0)

  const [tab, setTab] = useState({
    selected: 'Orders'
  });


  useEffect(() => {
    calculateTotal();
  }, []);


  useEffect(() => {
    calculateTotal();
  });



  // FUNCTIONS

  // Delete all orders (Roo says: Molaría que fuese solo una, y no todas. JOJOOOOOOOOOOOOOOOOOOOOJO)
  const deleteOrder = () => {

    props.dispatch({ type: CLEAN, payload: [] });

  };

  const buyOrder = () => {

  }

  const calculateTotal = () => {
    let totalPriceOnCart = 0

    let priceArray = props.cart.map(x => {
      return x.price
    })

    priceArray.map(num => {
      totalPriceOnCart += num
    })

    setTotalPrice(totalPriceOnCart)



  };

  const setSelected = (tab) => {
    setTab({ selected: tab });
  }
  return (
    <div className="rentalContainer">
      <Header />

      <div className="rentalSuperContainer">

        <TabNav tabs={['Orders', 'Wishes', 'Last Orders', 'Gifts']} selected={tab.selected} setSelected={setSelected}>
          <Tab isSelected={tab.selected === 'Orders'}>
            <Orders />
          </Tab>
          <Tab isSelected={tab.selected === 'Last Orders'}>

          </Tab>

        </TabNav>

      </div>

      <div className="basketRental">
        <div className="iconCounterContainer">
          <div><FontAwesomeIcon className='filmIconRental' icon={faFilm} /></div>
          <div className="counterCartRental">{props.cart.length}</div>
        </div>
        <div className="priceButtonContainer">
          <p className="pTotalPrice">{totalPrice}€</p>
        </div>
        <div className="containerButtonsRental">
          <div className="buyButton">
            <Button name="Buy" onClick={() => buyOrder()}/>
          </div>
          <div className="emptyOrdersButton">
            <Button onClick={() => deleteOrder()} name="Empty Orders" />
          </div>
        </div>




      </div>

    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,

  }
}

export default connect(mapStateToProps)(Rental);