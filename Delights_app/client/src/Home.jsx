import React from 'react'
import { useState } from 'react';
import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import NavBar from './Navbar';
import { useEffect } from 'react';

function Home() {

  const [products, setProducts] = useState([]);



   const [addBtnState, setBtnState] = useState([]);

  const [changeCount, setChangeCount] = useState(0);


  const url = "http://localhost:8000"

  // Getting data here--------------------------------------------------------------------
useEffect(() => {
  axios.get(url)
    .then(res => {
      console.log(res.data);  
      setProducts(res.data);
    })
    .catch(error => console.log('Error', error));
}, []);



  // useEffect(
  //   ()=>{
  //       axios.get(url||'menuTypes')  

  //   },[productType]
  // )
  
 


  const showitemCountButton = (itemName) => {
    setBtnState(
      (prevState) => { return [...prevState, itemName] }
    )

    setChangeCount(changeCount + 1);

  }

  const addRemoveItem = (itemState, itemName) => {

    if (itemState == 'INCREMENT') {
      setChangeCount(changeCount + 1);
    }

    else if (itemState == 'DECREMENT') {
      setChangeCount(changeCount - 1);
    }

  }
// -----------------------------------------------------------------------------------
  return (
    <div className='Home'>

      <div className="navbar">
        <NavBar></NavBar>
      </div>
      {/* ----- Main section */}



      <div className="main">

        {products.map(
          (item, index) => (

            <div className="itemCard">

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={item.product_name}
                  height="140"
                  image={item.product_image}
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div" id='Card-Product-name'>
                    {item.product_name}
                  </Typography>
                  <p> Veg</p>
                  <p className='price'>Rs {item.price}</p>

                  {addBtnState.includes(item.product_name) && changeCount > 0 ? <div className='itemCountButton'>
                    <button onClick={() => { addRemoveItem('DECREMENT', item.name) }}> -</button>
                    <p>{changeCount}</p>
                    <button onClick={() => { addRemoveItem('INCREMENT', item.name) }}> +</button>
                  </div>
                    :
                    <Button variant="contained" color="success" id={item.product_name} onClick={() => { showitemCountButton(item.product_name) }} startIcon={<AddShoppingCartIcon />}>
                      Add to cart
                    </Button>

                  }

                </CardContent>
                {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
              </Card>
            </div>

          )

        )}



      </div>




      {/* ---- End of Main */}

    </div>
  )
}

export default Home





