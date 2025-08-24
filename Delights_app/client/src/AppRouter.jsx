import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router';
import Home from './Home'
import Menu from './Menu'
import MyAccount from './MyAccount';
import SignIn from './userLogin/SignIn';
import SignUp from './userLogin/SignUp';
import ForgotPassword from './userLogin/ForgotPassword';
import Cart from './Cart'
import { useState } from 'react';
import axios from 'axios'
import OrderSuccess from './OrderSuccess';
import MyOrders from './MyOrder';

function AppRouter() {

  const[orderCount,setorderCount] = useState(0);  
  const[order,setOrder] = useState([]);    // Product details
   const [isAuthenticated, setAuthStatus] = useState(false);

   useEffect(
    ()=>{
        const data = localStorage.getItem('Login');
        const sessionStatus = JSON.parse(data);
        if (sessionStatus){
           if(sessionStatus.user_authenticated){
          setAuthStatus(true)
        }

        }
       

    },[]
   )


  return (
    <div className='appMain'>
        <Menu orderCount={orderCount} isAuthenticated={isAuthenticated}setAuthStatus={setAuthStatus}></Menu>
        <Routes>
            <Route path='/' element={<Home setorderCount={setorderCount} setOrder={setOrder} isAuthenticated={isAuthenticated}></Home>}></Route>
            <Route path='/my-account' element={<MyAccount isAuthenticated={isAuthenticated}></MyAccount>}></Route>
            <Route path='/signin' element={<SignIn setAuthStatus={setAuthStatus} ></SignIn>} ></Route>
            <Route path='/sign-up' element={<SignUp setAuthStatus={setAuthStatus}></SignUp>} ></Route>
            <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path='/cart' element={<Cart placeOrder = {order} isAuthenticated={isAuthenticated}></Cart>}></Route>
            <Route path='/order-placed' element={<OrderSuccess></OrderSuccess>}></Route>
            <Route path='/my-account/my-orders' element={<MyOrders></MyOrders>} ></Route>
        </Routes>
        

    </div>
  )
}

export default AppRouter