import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="orderPlaced">
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <CheckCircleIcon style={{ fontSize: 80, color: "green" }} />
      <h1 className="text-2xl font-bold mt-4">Order Placed Successfully!</h1>
      <p className="text-gray-600 mt-2">
        Thank you for your order. We’re processing it and will notify you soon.
      </p>

      <div className="mt-6 space-x-4" id="orderbtns">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
         Go to main menu
        </Button>
        <Button variant="outlined" onClick={() => navigate("my-account/my-orders")}>
          View Orders
        </Button>
      </div>
    </div>

    </div>
    
  );
}

export default OrderSuccess;
