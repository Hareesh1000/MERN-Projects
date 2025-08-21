// Application Navigation bar ----Left Menu------------------

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useEffect } from "react";

import { useState } from 'react';
import axios from 'axios'


 function AlignItemsList() {

   const url = "http://localhost:8000"

  const [productType, setProductType] = useState([]);

useEffect(() => {
  axios.get(url)
    .then(res => {
      console.log(`product type is `,res.data);  
      const data = res.data;
      let products = data.map(
        (item)=>(
          item.product_type
        )
      );

      products =  [... new Set(products)]

      setProductType(products);
      console.log(`Products are `,products)
    })
    .catch(error => console.log('Error', error));
}, []);

  return (
    <List sx={{ width: '100%', maxWidth: 300, bgcolor: '#f7e9cd98' }} className='menuList'>
      {productType.map(
        (item)=>(
             <div className='menuListItems'>
        <a >
       <ListItem alignItems="center" >
        <ListItemAvatar>
          <Avatar alt={item} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </a>

      </div>
        )
      )
      }    
      
    </List>
  );
}

export default AlignItemsList;