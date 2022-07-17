import React from 'react'
import PaymentMethod from './PaymentMethod'

const Payment = () => {
  const paymentData = [
    {
      id: 1,
      bank: "Ngân hàng TMCP Việt Nam",
      short: "VCB",
      account: "0281927836834",
    },
    {
      id: 2,
      bank: "Ngân hàng Kỹ Thương Việt Nam",
      short: "TCB",
      account: "0281983278743",
    },
    {
      id: 3,
      bank: "Ngân hàng Công Thương Việt Nam",
      short: "CTG",
      account: "0329388238718",
    },
    {
      id: 4,
      bank: "Ngân hàng Quân Đội",
      short: "MB",
      account: "0281928939279",
    }
  ]
  return (
    <div>
      <p className='cart-title'>Thanh toán</p>
      {
        paymentData.map((item, i) => <PaymentMethod key={i} data={item}/>)
      }
    </div>
  )
}

export default Payment