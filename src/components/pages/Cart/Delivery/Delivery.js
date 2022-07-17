import React, { useState } from 'react'
import './styles.css'

const Delivery = () => {
  const [deliveryOption, setDeliveryOption] = useState(0);

  const onValueChange = (e) => {
    console.log(parseInt(e.target.id[0]));
    setDeliveryOption(parseInt(e.target.id[0]));
  }

  return (
    <div className='delivery-container'>
      <p className='cart-title'>Giao hàng</p>
      <p className='delivery-subtitle'>Sản phẩm của Food Town sẽ được giao tới tay bạn...</p>
      <div className='delivery-selection'>
          <div>
            <div>
              <input type="radio" id="0-shop" name="shop" onChange={onValueChange} defaultChecked/>
              <label htmlFor="0-shop">Tại cửa hàng của Food Town</label>
            </div>
            <div>
              <input type="radio" id="1-shipping" name="shop" onChange={onValueChange} />
              <label htmlFor="1-shipping">Tại nhà của bạn</label>
            </div>
          </div>
          <div className='delivery-info'>
            {
              deliveryOption 
              ? <input type="text" className='shipping-address' placeholder='Hãy cho Food Town biết địa chỉ của bạn...'/>
              : <select className='restaurant-selection'>
                  <option>Food Town Cầu Giấy</option>
                  <option>Food Town Đống Đa</option>
                  <option>Food Town Hoàn Kiếm</option>
                </select>
            }
          </div>
      </div>
    </div>
  )
}

export default Delivery