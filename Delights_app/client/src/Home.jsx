import React from 'react'
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import NavBar from './Navbar';

function Home() {

  const items = [
      {name:'Food1', type:'Veg',Price:100},
      {name:'Food2', type:'Veg',Price:100},
      {name:'Food3', type:'Veg',Price:100},
       {name:'Food4', type:'Veg',Price:100},
        {name:'Food5', type:'Veg',Price:100},
         {name:'Food6', type:'Veg',Price:100}

  ];


   const [addBtnState, setBtnState] = useState([]);
 
     const [changeCount, setChangeCount] = useState(0);
      
 
 
     const showitemCountButton = (itemName) => {
       setBtnState(
         (prevState) => { return [...prevState,itemName]}
       )
 
        setChangeCount(changeCount +1);
       
     }
 
     const addRemoveItem = (itemState,itemName) => {
 
       if (itemState =='INCREMENT'){
         setChangeCount(changeCount +1);
       }
 
       else if (itemState == 'DECREMENT') {
         setChangeCount(changeCount-1);
       }
 
     }

  return (
    <div className='Home'>

      <div className="navbar">
        <NavBar></NavBar>
      </div>
      {/* ----- Main section */}
    


      <div className="main">

        { items.map(
          (item,index) =>(
              
        <div className="itemCard">

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxwe2c9AWEcLDGNbp3Kgs0P5YZlXWdK-V7A&s"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div" id='Card-Product-name'>
               {item.name}
              </Typography>
              <p> Veg</p>
              <p className='price'>100 Rs</p>

            {addBtnState.includes(item.name) && changeCount >0 ? <div className='itemCountButton'> 
                                          <button onClick={()=>{addRemoveItem('DECREMENT',item.name)}}> -</button>
                                          <p>{changeCount}</p>
                                           <button onClick={()=>{addRemoveItem('INCREMENT',item.name)}}> +</button>
                                        </div>
                                        :   
                <Button variant="contained" color="success"  id={item.name} onClick={()=>{showitemCountButton(item.name)}} startIcon={<AddShoppingCartIcon />}>
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

      ) }

        <div className="itemCard">

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxwe2c9AWEcLDGNbp3Kgs0P5YZlXWdK-V7A&s"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div" id='Card-Product-name'>
                Food1
              </Typography>
              <p> Veg</p>
              <p className='price'>100 Rs</p>
              <Button variant="contained" color="success"  id='addToCart' startIcon={<AddShoppingCartIcon />}>
                Add to cart
              </Button>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>

      </div>




      {/* ---- End of Main */}

    </div>
  )
}

export default Home





