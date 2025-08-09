import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Products({product,addItem,setAddItem}) {

    // const [addItem,setAddItem] = useState([])


   function addToLocal(item) {
    const updatedItems = [...addItem, item];
    setAddItem(updatedItems);
    // console.log(addItem);
    // localStorage.setItem('selected_items', JSON.stringify(updatedItems));
}



    const showProducts = product.map (
        (item,index)=> (
            <div className='itemCard' 
            style={
                {background:`url(${item.image_url})`,
                                            backgroundPosition: "center",
                                            backgroundSize: "fill", 
                                            backgroundRepeat: "no-repeat",
                                              visibility:""
                    
                  
                                        }
                                        
                            }
                    onClick={()=>{addToLocal(item.item_name)}}
                           
                                           >
                     
                      <a > <p> {item.item_name}</p>  </a>
                     
            </div>
        )
    )


  return (
    <div>

        <DropdownButton id="dropdown-item-button" title="Dropdown button">
      {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>

        <div className='itemContainer'>
    {showProducts}</div>
    </div>
  )
}

export default Products