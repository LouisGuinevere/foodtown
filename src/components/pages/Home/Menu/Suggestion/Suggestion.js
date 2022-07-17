import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import Product from '../Product/Product';
import "./styles.css"

const Suggestion = (data) => {
  const {title, subtitle, productData, type} = data.data;
  const [page, setPage] = useState(0);
  const displayData = productData.slice(page * 5, page * 5 + 5);
  const navigate = useNavigate();

  const nextPage = () => {
    if (page === Math.ceil(productData.length/5) - 1) return;
    else setPage(prev => prev + 1);
  }

  const prevPage = () => {
    if (page === 0) return;
    else setPage(prev => prev - 1);
  }

  const viewDetails = () => {
    navigate(`/${type}`);
  }

  const displaySuggestion = (item, i) => {
    switch(type) {
      case "product": return <Product key={i} data={item} />;
      case "category": return <Category key={i} data={item} />
    }
  }

  // setInterval(() => {
  //   if (page === Math.ceil(productData.length/5) - 1) setPage(0);
  //   else setPage(page + 1);
  // }, 5000)

  return (
    <div className="suggestion-container">
      <div className='suggestion-header'>
        <div className='suggestion-header-left'>
          <p className='suggestion-title'>{title}</p>
          <p className='suggestion-subtitle'>{subtitle}</p>
        </div>
        <div className='suggestion-header-right'>
          <p onClick={viewDetails}>Chi tiết</p>
        </div>
      </div>
      <div className="suggestion-content">
        <div className="suggestion-pagination"><p onClick={() => prevPage()}>&#10094;</p></div>
        {
          displayData.map((item, i) => displaySuggestion(item, i))
        }
        <div className="suggestion-pagination"><p onClick={() => nextPage()}>&#10095;</p></div>
      </div>
    </div>
  )
}

export default Suggestion