import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart({isAuthenticated}) {
  const [order, setOrder] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);   /// for total
  const [orderVisibility, setOrderVisibility] = useState("visible");
  const navigate = useNavigate();

//get data
useEffect(
    ()=>{
           
            const data = localStorage.getItem('order');
            setOrder(JSON.parse(data))

            if(isAuthenticated ==false){
              navigate('/')
                  alert('Login to view the cart');
                  
            }
    },[]
);



  useEffect(() => {
    const total = order.reduce(
        (sum, item) => sum + item.order_qty * item.price, 0);
    setOrderTotal(total);

    // if(order){
    //   localStorage.setItem('order',JSON.stringify(order));
    // }
  }, [order]);

//   const increaseQty = (index) => {
//     const newOrder = [...order];
//         //  newOrder[index].order_qty += 1;
//           newOrder[index].order_qty += 1;
//     setOrder(newOrder);
//   };
//   const decreaseQty = (index) => {
//     const newOrder = [...order];
//     if (newOrder[index].order_qty > 1) {
//       newOrder[index].order_qty -= 1;
//     }
//     setOrder(newOrder);
//   };

  const deleteItem = (productId) => {
    const newOrder = order.filter(
                (item) => item.product_id  !== productId);
    setOrder(newOrder);
  };


function changeqty(index,operation) {
    const newOrder = [...order]

    if (operation =='INCREASE'){
        newOrder[index].order_qty += 1; 
        setOrder(newOrder);
    }

    else if (operation='DECREASE'){
        let qty = newOrder[index].order_qty;
        if (qty>1){
            newOrder[index].order_qty -=1;
             setOrder(newOrder);
        }
    }
}
///Submit the order --------
  function completeOrder() {
    localStorage.setItem('order',JSON.stringify(order));
    const neworder = [{ order: order, total_spent: orderTotal }];

    axios.post('http://localhost:8000/cart',neworder)
      .then((response) => {
        console.log('Order completed:', response.data);
        // alert(`order Completed status code ${response.data}`);
         navigate("/order-placed");
      })
      .catch((error) => {
        console.error('Error completing order:', error);
        alert(`order failed ${error.data}`)
      });

    setOrderVisibility('hidden');
  }

  return (
    
    <div className='OrderSection' style={{ visibility: orderVisibility }}>
 
      <div className='paymentBody'>
        {/* Order Summary */}
        <div className='orderSummary'>
          <h5>Order Summary</h5>
          {order && order.length > 0 ? (
            <table className='cartTable'>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product_name}</td>
                    <td className='qtyControl'>
                      <IconButton onClick={() => changeqty(index,'DECREASE')} size='small'>
                        <RemoveIcon fontSize='small' />
                      </IconButton>
                      {item.order_qty}
                      <IconButton onClick={() => changeqty(index,'INCREASE')} size='small'>
                        <AddIcon fontSize='small' />
                      </IconButton>
                    </td>
                    <td>₹ {item.price}</td>
                    <td>₹ {item.price * item.order_qty}</td>
                    <td>
                      <IconButton color='error' onClick={() => deleteItem(item.product_id)}>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No orders found.</p>
          )}

          <div className='totalSection'>
            <p>Total:</p> <p>₹ {orderTotal}</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className='orderSubmit'>
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={completeOrder}
          disabled={order.length === 0}
          id='paymentButton'
        >
          Place the order
        </Button>
      </div>

    </div>
  );
}

export default Cart;
