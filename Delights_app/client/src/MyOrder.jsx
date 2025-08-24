import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import './assets/CSS/MyOrder.css';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();


  const steps = [
  'Order placed',
  'Preparing',
  'On the way',
  'Delivered'
];

  useEffect(() => {

    axios.get("http://localhost:8000/orders") 
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        // alert("Failed to fetch orders");
      });
  }, []);

  return (
    <div className="myOrdersContainer">
      <h1>My Orders</h1>

      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

      {orders.length === 0 ? (
        <p style={{textAlign:"center"}}>No orders found.</p>
      ) : (
        orders.map((orderObj, index) => (
          <div key={index} className="orderCard">
            <h3>Order #{index + 1} - Total: ₹ {orderObj.total_spent}</h3>
            <table className="orderTable">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {orderObj.order.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.product_name}</td>
                    <td>{item.order_qty}</td>
                    <td>₹ {item.price}</td>
                    <td>₹ {item.price * item.order_qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}

      <div className="backBtn">
        <Button variant="contained" onClick={() => navigate("/my-account")}>
          Back to Menu
        </Button>
      </div>
    </div>
  );
}

export default MyOrders;
