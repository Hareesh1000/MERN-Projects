import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import NavBar from './Navbar';

function Home({setCartItemCount}) {
  const [products, setProducts] = useState([]);  // products from the database
  const [cart, setCart] = useState({});  

  const url = "http://localhost:8000";

  // Get data here----------------------
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => console.log('Error', error));
  }, []);


  const addItems = (product_id) => {
    setCart(prev => ({
      ...prev,
      [product_id]: 1
    }));
  };


  // Increment / Decrement -------------
  const addRemoveItem = (action, product_id) => {
    setCart(prev => {
      const currentCount = prev[product_id] || 0;

      if (action === 'INCREMENT') {
        return { ...prev, [product_id]: currentCount + 1 };
      } 
      else if (action === 'DECREMENT') {
        return { ...prev, [product_id]: currentCount - 1 };
      }
      return prev;
    });
  };

  useEffect(() => {
    const countCart = Object.keys(cart)
    // console.log("Cart state:", cart);
    //  console.log("Cart length:", countCart.length);
    setCartItemCount(countCart.length)
  }, [cart]);

  return (
    <div className='Home'>
      <div className="navbar">
        <NavBar />
      </div>

      <div className="main">
        {products.map((item) => {
          const count = cart[item.product_id] || 0;
          return (
            <div className="itemCard" key={item.product_id}>
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
                  <p className='price'>₹ {item.price}</p>

                  {count > 0 ? (
                    <div className='itemCountButton'>
                      <button onClick={() => addRemoveItem('DECREMENT', item.product_id)}> - </button>
                      <p>{count}</p>
                      <button onClick={() => addRemoveItem('INCREMENT', item.product_id)}> + </button>
                    </div>
                  ) : (
                    <Button 
                      variant="contained" 
                      color="success" 
                      onClick={() => addItems(item.product_id)} 
                      startIcon={<AddShoppingCartIcon />}
                    >
                      Add to cart
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
