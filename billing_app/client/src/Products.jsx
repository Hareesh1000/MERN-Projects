import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Products({product,addItem,setAddItem,dropdownSelect,setdropdownSelect,dropdownList}) {

    // const [addItem,setAddItem] = useState([])
    


   function addToLocal(item) {
    const updatedItems = [...addItem, item];
    setAddItem(updatedItems);
}


// show all the proucts----------------------------------

    const showProducts = product.map((item, index) => (
  <div
    className="itemCard"
    style={{
      background: `url(${item.image_url}) center / cover no-repeat`
    }}
    onClick={() => { addToLocal(item.item_name) }}
    key={index}
  >
    <div className="itemName">
      <p>{item.item_name}</p>
    </div>
  </div>
));



function changeDropdown(dropdownvalue) {
    setdropdownSelect(dropdownvalue);

}

// Item category is Shown here---------------------------------------Fix later


// console.log(`dropdown list is ${dropdownList}`);

  return (
    <div className='productSection' >

        <DropdownButton id="dropdown-item-button" title={dropdownSelect}>
      {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
      {/* <Dropdown.Item as="button" onClick={(e)=>{changeDropdown('Action')}} >Action</Dropdown.Item>
      <Dropdown.Item as="button" onClick={(e)=>{changeDropdown('Action')}}>Another action</Dropdown.Item>
      <Dropdown.Item as="button" onClick={(e)=>{changeDropdown('Action')}}>Something else</Dropdown.Item> */}

      {dropdownList.map(
        (item,index)=> {
          return <Dropdown.Item as="button" onClick={(e)=>{changeDropdown(item)}} >{item}</Dropdown.Item>
        }
      )}
    </DropdownButton>

        <div className='itemContainer'>
    { (showProducts.length > 0) ? showProducts :<p style={{textAlign:"center",color:"red"}}>Server is not connected</p>}</div>
    </div>
  )
}

export default Products