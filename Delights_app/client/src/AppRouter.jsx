import React from 'react'
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

function AppRouter() {

  const[orderCount,setorderCount] = useState(0);  
  const[order,setOrder] = useState([]);    // Product details

  console.log(`cart item count in router is ` ,orderCount);
    console.log(`cart item  order is ` ,order);

  return (
    <div className='appMain'>
        <Menu orderCount={orderCount}></Menu>
        <Routes>
            <Route path='/' element={<Home setorderCount={setorderCount} setOrder={setOrder}></Home>}></Route>
            <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
            <Route path='/signin' element={<SignIn></SignIn>} ></Route>
            <Route path='/sign-up' element={<SignUp></SignUp>} ></Route>
            <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path='/cart' element={<Cart placeOrder = {order} ></Cart>}></Route>
        </Routes>
        

    </div>
  )
}

export default AppRouter