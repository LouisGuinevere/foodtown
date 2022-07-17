import React, { useState } from 'react'
import './styles.css'

const Product = (data) => {
  const {image, name, description, price, quantity} = data.data;
  const [currentQuantity, setQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  }

  const decreaseQuantity = () => {
    currentQuantity !== 1 && setQuantity(prev => prev - 1);
  }

  const removeProduct = () => {
    
  }

  return (
    <div className='cart-product-container'>
      <img src={image} alt="product" className='cart-product-image'/>
      <div className='cart-product-info'>
        <p className='cart-product-name'>{name}</p>
        <p className='cart-product-description'>{description}</p>
      </div>
      <div className="vertical-line"></div>
      <div className='cart-product-quantity'>
        <p className='cart-product-btn increament-btn' onClick={increaseQuantity}>&#43;</p>
        <p>{currentQuantity}</p>
        <p className='cart-product-btn decreament-btn' onClick={decreaseQuantity}>&#8722;</p>
      </div>
      <div className="vertical-line"></div>
      <p className='cart-product-price'>{price * currentQuantity} VND</p>
      <p className='cart-product-btn btn-remove' onClick={removeProduct}>&#215;</p>
    </div>
  )
}

export default Product