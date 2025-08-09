import React,{useEffect, useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from './Products';

import items from'./data/items.json'
import Billing from './Billing';

function Main() {

    // const [key, setKey] = useState('billing');

    // Clear local storage on each refresh ----- Required

        const [addItem,setAddItem] = useState([])
  //  useEffect(
  //   ()=>{ localStorage.clear();

  //   },[]
  //  )

  useEffect(
    ()=>{
      console.log(addItem)
    },[addItem]
  )

  return (
    <div className='mainSection'>
        <div className='leftSection'>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Product">
        Tab content for Product
        {/* product is called here--------------------- */}
        <Products product={items} addItem={addItem} setAddItem={setAddItem}></Products>
      </Tab>
      {/* <Tab eventKey="profile" title="Customer">
        Tab content for Customer
      </Tab> */}
    </Tabs>
        </div>
        <div className='rightSection'>

          <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="billing" title="Billing">
          {/* Billing section is called here --------------------------- */}
        <Billing billItem={addItem}></Billing>
      </Tab>
      <Tab eventKey="payment" title="Payment">
        Tab content for Profile
      </Tab>
    </Tabs>
        </div>

         

    </div>
  )
}

export default Main