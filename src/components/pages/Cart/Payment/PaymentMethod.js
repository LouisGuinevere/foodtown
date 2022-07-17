import React from 'react'
import './styles.css'

const PaymentMethod = (data) => {
    const {id, bank, short, account} = data.data;
    return (
        <div className='payment-method-container'>
            <label className='payment-method-info' htmlFor={`payment-method-${id}`}>
                <p className='payment-method-name'>{bank} ({short})</p>
                <p className='payment-method-account'>STK: {account.substring(0, 7)}...</p>
            </label>
            <input type="radio" className='payment-selection' name="payment-method" id={`payment-method-${id}`}/>
        </div>
    )
}

export default PaymentMethod