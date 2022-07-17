import React, { useState } from 'react'
import Suggestion from '../Home/Menu/Suggestion/Suggestion';
import { RatingStar } from "rating-star";
import product1 from "../../../assets/product-1.png"
import product2 from "../../../assets/product-2.png"
import product3 from "../../../assets/product-3.png"
import product4 from "../../../assets/product-4.png"
import product5 from "../../../assets/product-5.png"
import product6 from "../../../assets/product-6.png"
import './styles.css'

const ProductDetail = () => {
  const productData = {
    id: 1,
    name: "Suất cơm số 2",
    price: 10000,
    rate: 4.5,
    description: "Món ăn được chế biến từ những nguyên liệu như gạo, thịt lợn nạc vai, dưa chuột, cà rốt và rau muống. Tất cả đều được bảo quản và chế biến theo quy trình nghiêm ngặt tại Food Town với mong muốn đem lại cho mọi người những khẩu phần ăn dinh dưỡng và chất lượng với giá cả phù hợp nhất.",
    quantity: 1,
    tags: ["Cơm", "Thịt gà"],
    image: product2
  }
  const [currentQuantity, setQuantity] = useState(productData.quantity);
  const [rating, setRating] = useState(productData.rate);
  const suggest_data = {
    title: "Có thể bạn sẽ quan tâm",
    subtitle: "Dưới đây là một số món ăn cùng loại với món ăn bạn đang xem",
    type: "product",
    productData: [
      {
        name: "Suất ăn số 1",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product1
      },
      {
        name: "Suất ăn số 2",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product3
      },
      {
        name: "Suất ăn số 3",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product4
      },
      {
        name: "Suất ăn số 4",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product5
      },
      {
        name: "Suất ăn số 5",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product6
      },
    ]
  }
  const onRating = (score) => {
    setRating(score);
  }
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  }
  const decreaseQuantity = () => {
    currentQuantity !== 1 && setQuantity(prev => prev - 1);
  }
  const addToCart = () => {
    let modal = document.getElementById("modal");
    modal.className = "visible-modal"
    let container = document.getElementById("container");
    container.style = "opacity: 30%";
  }
  const hideModal = () => {
    let modal = document.getElementById("modal");
    modal.className = "modal"
    let container = document.getElementById("container");
    container.style = "opacity: 100%";
  }
  return (
    <div>
      <div className='product-detail-container' id="container">
          <div className='product-detail-main'>
            <div className='product-detail-left'>
              <img src={productData.image} alt="" className='product-detail-image'/>
              <RatingStar
                  clickable
                  noBorder={false}
                  rating={rating}
                  className='product-detail-rating'
                  size={32}
                  onRatingChange={onRating}
                />
            </div>
            <div className='product-detail-right'>
              <p className='product-detail-name'>{productData.name}</p>
              <p className='product-detail-description'>{productData.description}</p>
              <div className='product-detail-sell'>
                <p className='product-detail-price'>Giá: {productData.price} VND</p>
                <div className='product-detail-btns'>
                  <div className='product-detail-quantity'>
                    <p className='cart-product-btn increament-btn' onClick={increaseQuantity}>&#43;</p>
                    <p>{currentQuantity}</p>
                    <p className='cart-product-btn decreament-btn' onClick={decreaseQuantity}>&#8722;</p>
                  </div>
                  <p className='btn btn-transparent' onClick={addToCart}>Thêm vào giỏ hàng</p>
                </div>
              </div>
            </div>
          </div>
          <Suggestion data={suggest_data}/>
      </div>
      <div className='modal' id='modal'>
        <p>Thêm vào giỏ hàng thành công</p>
        <button className='btn btn-transparent' onClick={hideModal}>OK</button>
      </div>
    </div>
  )
}

export default ProductDetail