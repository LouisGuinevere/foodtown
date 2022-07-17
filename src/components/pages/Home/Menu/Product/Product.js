import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RatingStar } from "rating-star";
import "./styles.css"

const Product = (data) => {
    const {name, price, description, rate, image} = data.data;
    console.log(rate);
    const navigate = useNavigate();

    const viewDetail = () => {
        navigate('/product/1');
    }

    return (
        <div className='product-container' onClick={viewDetail}>
            <img src={image} alt="product" className='product-image'/>
            <RatingStar
                id="rating-star"
                clickable
                noBorder={false}
                rating={rate}
                className='product-rating'
            />
            <p className="product-name">{name}</p>
            <p className="product-description">{description}</p>
            <p className="product-price">Giá: {price} VND</p>
        </div>
    )
}

export default Product