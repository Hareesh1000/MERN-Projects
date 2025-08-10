import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function Payment({placeOrder}) {
  
 const[order,setOrder] = useState([]);
const[orderTotal,setOrderTotal] = useState(0)
 const[orderVisibility,setorderVisibility] = useState([""])   /// temporary change, need to develop later


 ////get order details here
  useEffect(
    ()=>{
        const getorder = JSON.parse(localStorage.getItem('order'));
            setOrder(getorder)
         console.log(`order from the orders section is`,getorder);
    
         if (getorder) {
             const totalAmount = getorder.reduce((sum, item) => {
                                            return sum + Number(item.amount);
                                            }, 0);
        setOrderTotal(totalAmount);
         }
       

    },[placeOrder]
  );

function completeOrder() {
    const getorder = JSON.parse(localStorage.getItem('order') || '[]');

    const neworder=[{1001:getorder,"total_spent":orderTotal}]

    axios.post('http://localhost:8000', { order: neworder })
        .then(response => {
            console.log('Order completed:', response.data);
        })
        .catch(error => {
            console.error('Error completing order:', error);
        });

        setorderVisibility('hidden');   /// temporary change to aviod multiple submit, need to change during future dev
}

 

  return (
    <div className='OrderSection' style={{visibility:orderVisibility}}>
        <div className='orderTitle' > <h5>Order confirmation</h5></div>
      
      <div className='paymentBody' >

            <div className='orderSummary'>
                            <h5>Order Summary</h5>
                                      {(order) ? (
                            order.map((item, index) => (
                            <div key={index} className='orderCards'>
                                 {/* <div className='orderNumber' ><p>{index+1}</p></div>  */}
                                
                                
                                <p>{item.item_name} ({item.qty})</p>
                                <div className='orderAmount'> <p>₹ {item.amount}</p></div>
                               
                            </div>
                            ))
                        ) : (
                            <p>No order found.</p>
                        )}

                        <div className='totalSection'>
                            <p>Total:</p> <p>₹ {orderTotal}</p>
                        </div>
            </div>

            <div className='paymentSectionm'>
                                <h5>Payment Options</h5>
                                <div className='paymentList'>
                                    <div className='paymentOption'>
                                        <i className="fa-solid fa-credit-card"></i>
                                        <p>Debit Card / Credit Card</p>
                                    </div>
                                    <div className='paymentOption'>
                                        <i className="fa-brands fa-google-pay"></i>
                                        <p>GPay</p>
                                    </div>
                                    <div className='paymentOption'>
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                        <p>PhonePe</p>
                                    </div>
                                    <div className='paymentOption'>
                                        <i className="fa-brands fa-paypal"></i>
                                        <p>PayPal</p>
                                    </div>
                                    <div className='paymentOption'>
                                        <i className="fa-solid fa-money-bill-wave"></i>
                                        <p>Cash on Delivery</p>
                                    </div>
                                </div>
                            </div>

      </div>

      <div className='orderSubmit'>
         <Button as="input" type="submit" value="Place the order & make the payment" onClick={completeOrder}/>
      </div>

      
    </div>
  );
}

export default Payment;
