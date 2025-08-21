import React from 'react'
import { Routes, Route, Link } from 'react-router';
import Home from './Home'
import Menu from './Menu'
import MyAccount from './MyAccount';

import { useState } from 'react';
import axios from 'axios'

function AppRouter() {

  const[cartItemCount,setCartItemCount] = useState(0)
  console.log(`cart item count in router is ` ,cartItemCount)
  return (
    <div>
        <Menu cartItemCount={cartItemCount}></Menu>
        <Routes>
            <Route path='/' element={<Home setCartItemCount={setCartItemCount}></Home>}></Route>
            <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
        </Routes>
        

    </div>
  )
}

export default AppRouter