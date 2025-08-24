import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "./assets/CSS/MyOrder.css";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function MyOrders() {

  const [orders, setOrders] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  const steps = [
  'Order Confirmed',
  'Preparing Your Items',
  'Out for Delivery',
  'Delivered'
];


  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (!userString) return;

    const user = JSON.parse(userString);
    const user_id = user.user.user_id;

    if (!user_id) return;

    axios
      .get(`http://localhost:8000/my-orders/${user_id}`)
      .then((response) => {

        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  if (orders.length === 0) {
    return (
      <div className="myOrdersContainer">
        <h1>My Orders</h1>
        <p style={{ textAlign: "center" }}>No orders found.</p>
        <div className="backBtn">
          <Button variant="contained" onClick={() => navigate("/my-account")}>
            Back to Menu
          </Button>
        </div>
      </div>
    );
  }

  const [latestOrder, ...historyOrders] = orders;

  const renderOrderCard = (orderObj, index, isHistory = false) => {
    const date = new Date(orderObj.order_date);
    const formattedDate = date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div key={orderObj._id} className="orderCardModern">
        {/* --- Header --- */}
        <div className="orderHeader">
          <h3>{isHistory ? `Past Order #${index + 1}` : "Latest Order"}</h3>
          <p className="price">₹{orderObj.total_spent}</p>
        </div>

        {/* --- Items --- */}
        <div className="orderItems">
          {orderObj.order.map((item, idx) => (
            <p key={idx} className="orderItem">
              {item.order_qty} × {item.product_name}
            </p>
          ))}
        </div>

        {/* --- Footer --- */}
        <div className="orderFooter">
          <p className="orderInfo">
            Placed on {formattedDate}, {formattedTime}
          </p>
          {/* <p className="status delivered">Preparing</p> */}
        </div>

        {/* --- Actions --- */}
        <div className="orderActions">
          <div className="ratingBox">
            <span>Rate</span>
            <Rating size="small" />
          </div>
          <Button variant="contained" color="error" className="reorderBtn">
            Reorder
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="myOrdersContainer">

      <div className="myOrderdiv">
        <div className="orderdiv1">
           
        <Button variant="text" onClick={() => navigate("/my-account")}>
          Back to Menu
        </Button>


        </div>
        <div className="orderdiv2">   <h2>My Orders</h2></div>
        
       
      </div>

         <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
     
      {renderOrderCard(latestOrder, 0, false)}

      {historyOrders.length > 0 && (
        <>
          <button
            className="toggleHistoryBtn"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide History" : "View History"}
          </button>

          {showHistory &&
            historyOrders.map((order, idx) =>
              renderOrderCard(order, idx, true)
            )}
        </>
      )}

      
    </div>
  );
}

export default MyOrders;
