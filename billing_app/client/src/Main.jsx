import React,{useEffect, useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from './Products';
import axios from 'axios';
// import items from'./data/items.json'
import Billing from './Billing';

function Main() {

    // const [key, setKey] = useState('billing');
    const[DBitems,setItems] = useState([]);   // Data received from the database  --- one time only, do not modify
    // Clear local storage on each refresh ----- Required

        const [addItem,setAddItem] = useState([]);
        const [filterItem,setfilterItem]=useState([])   /// To show drop down list based data----- required----
        const[dropdownSelect,setdropdownSelect]=useState('Select Item');
  //  useEffect(
  //   ()=>{ localStorage.clear();

  //   },[]
  //  )

/// Gettin data here----------------------------------------------

useEffect(
    ()=>{
        axios.get('http://localhost:8000').then(
            res => {
                    console.log(`data received from the database`);
                
                setItems(res.data);
                setfilterItem(res.data);
            }
        )
         .catch(err => {
      console.error('Server is not connected1', err.message);
         }
        );

        // axios.get('http://localhost:8000/item_type')

    },[]
    
);

useEffect(
  ()=>{
       if (dropdownSelect==='Select Item') return;
       axios.get(`http://localhost:8000/item_type/${dropdownSelect}`).then(
            res => {
                    console.log(`filtered data received from the database`);
                console.log(res.data);
                 setfilterItem(res.data)
            }
        )
        .catch(
          console.log('Server is not connected - second connection')
        );
  },[dropdownSelect]
)


const item_category = [...new Set(DBitems.map(item => item.item_category))];

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

        {/* -----------------------------------product is called here---------------------------------------------------------------------------------- */}
        <Products product={filterItem} addItem={addItem} setAddItem={setAddItem}
                            dropdownSelect={dropdownSelect} setdropdownSelect={setdropdownSelect}
                            dropdownList={item_category}></Products>
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
        <Billing billItem={addItem} items={DBitems}></Billing>
      </Tab>
      <Tab eventKey="payment" title="Payment">
      </Tab>
    </Tabs>
        </div>

         

    </div>
  )
}

export default Main