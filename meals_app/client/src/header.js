import React from 'react'

function Header() {

    const searchBoxText = '   Search your food here'
  return (

    <div className='header'>
        <h3>Foodee</h3>
        <input type='text' placeholder={searchBoxText} id='searchBox'></input>
        <div className='userLogin'>
        <p>Login</p>
        <p>Sign up</p>
        </div>
        
    </div>
  )
}

export default Header