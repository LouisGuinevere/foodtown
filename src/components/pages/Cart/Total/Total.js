import React from 'react'
import './styles.css'

const Total = () => {

  const showModal = () => {
    let modal = document.getElementById("modal");
    modal.className = "visible-modal"
    let container = document.getElementById("container");
    container.style = "opacity: 30%";
  }

  return (
    <div className='total-container'>
      <p className='cart-title'>Hoá đơn</p>
      <div className='total-content'>
        <p className='total-key'>Hoá đơn: </p>
        <p className='total-key'>40,000 VND</p>
        <p className='total-key'>Vận chuyển: </p>
        <p className='total-key'>0 VND</p>
        <p className='total-key'>Tổng: </p>
        <p className='total-key'>40,000 VND</p>
        <div></div>
        <button className='btn btn-transparent btn-total' onClick={showModal}>Đặt</button>
      </div>
    </div>
  )
}

export default Total