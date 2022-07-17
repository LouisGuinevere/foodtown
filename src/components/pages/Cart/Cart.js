import React from 'react'
import ProductList from './ProductList/ProductList'
import Payment from './Payment/Payment'
import Delivery from './Delivery/Delivery'
import Total from './Total/Total'
import './styles.css'

const hideModal = () => {
  let modal = document.getElementById("modal");
    modal.className = "modal"
    let container = document.getElementById("container");
    container.style = "opacity: 1000%";
}

const Cart = () => {
  return (
    <div>
      <div className='cart-container' id='container'>
          <ProductList/>
          <Payment/>
          <Delivery/>
          <Total/>
      </div>
      <div className='modal' id='modal'>
        <p>Xác nhận đặt hàng thành công!</p>
        <button className='btn btn-transparent' onClick={hideModal}>OK</button>
      </div>
    </div>
  )
}

export default Cart