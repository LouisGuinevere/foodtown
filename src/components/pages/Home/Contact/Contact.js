import React from 'react'
import "./styles.css"

const Contact = () => {
  return (
    <div className='contact-container container' id='contact'>
      <div className='contact-form'>
        <p className='contact-title'>Liên hệ với Food Town</p>
        <form>
          <input type="text" placeholder='Họ đệm'/>
          <input type="text" placeholder='Tên'/>
          <input type="email" placeholder='Email'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Gửi gắm tới Food Town vài điều'></textarea>
          <button>Gửi</button>
        </form>
      </div>
    </div>
  )
}

export default Contact