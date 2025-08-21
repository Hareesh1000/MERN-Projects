import React from 'react'
import { Routes, Route, Link } from 'react-router';
import Home from './Home'
import Menu from './Menu'

import { useState } from 'react';
import axios from 'axios'

function AppRouter() {
  return (
    <div>
        <Menu></Menu>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        

    </div>
  )
}

export default AppRouter