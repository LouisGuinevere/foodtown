import React from 'react'
import "./styles.css"

const Category = (data) => {
  const {name, image, size} = data.data;
  console.log(image)
  const viewDetail = () => {

  }
  return (
    <div className='category-container' onClick={viewDetail}>
      <img src={image} alt="category" className='category-image'/>
      <p className='category-name'>{name}</p>
      <p className='category-size'>{size} sản phẩm</p>
    </div>
  )
}

export default Category