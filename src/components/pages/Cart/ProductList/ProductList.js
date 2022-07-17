import React from 'react'
import Product from './Product'
import productImage1 from '../../../../assets/product-5.png'
import productImage2 from '../../../../assets/product-2.png'
import productImage3 from '../../../../assets/product-3.png'
import productImage4 from '../../../../assets/product-4.png'
import './styles.css'

const ProductList = () => {
  const productData = [
    {
      image: productImage1,
      name: "Suất cơm số 1",
      description: "Cơm gà với rau bắp cải",
      price: 10000,
      quantity: 1
    },
    {
      image: productImage2,
      name: "Suất cơm số 2",
      description: "Cơm gà với rau bắp cải",
      price: 10000,
      quantity: 1
    },
    {
      image: productImage3,
      name: "Suất cơm số 3",
      description: "Cơm gà với rau bắp cải",
      price: 10000,
      quantity: 1
    },
    {
      image: productImage4,
      name: "Suất cơm số 4",
      description: "Cơm gà với rau bắp cải",
      price: 10000,
      quantity: 1
    }
  ]
  return (
    <div>
      <p className='cart-title'>Giỏ hàng</p>
      {productData.map((item) => <Product data={item}/>)}
    </div>
  )
}

export default ProductList