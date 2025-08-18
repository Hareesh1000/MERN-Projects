import React, { useEffect, useState } from 'react'
// import items from './data/items.json'
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

function Billing({billItem,items,setplaceOrder}) {

    // const[items,setItems] = useState([]);   // Data received from the database
    const [itemCount, setitemCount] = useState({});   // This is for count.......

    const[newBillItems,setBillItem] = useState([]);    // This is for bill
    const [billAmount,setbillAmount] = useState([]);   // To payment
 
/// Gettin data here----------------------------------------------

// useEffect(
//     ()=>{
//         axios.get('http://localhost:8000').then(
//             res => {
//                     console.log(`data received from the database`);
//                 console.log(res.data);
//                 setItems(res.data)
//             }
//         )
//     },[]
// )

function removeFromList(remove_item_id) {
    const itemToRemove = items.find(it => it.item_id === remove_item_id);

    if (itemToRemove) {
        setBillItem(prevItems =>
            prevItems.filter(name => name !== itemToRemove.item_name)
        );

        setitemCount(prevCount => {
            const updated = { ...prevCount };
            delete updated[remove_item_id];
            return updated;
        });
    }
}



//   // Remove an item completely from billing list
//   function removeFromList(remove_item_name) {
//     setBillItem(prevItems => prevItems.filter(name => name !== remove_item_name));

//     // Also remove its count
//     const itemToRemove = items.find(it => it.item_name === remove_item_name);
//     if (itemToRemove) {
//       setItemCount(prevCount => {
//         const updated = { ...prevCount };
//         delete updated[itemToRemove.item_id];
//         return updated;
//       });
//     }
//   }



useEffect(
    ()=>{
        setBillItem([...new Set(billItem)]);
    },[billItem]
)

    function addRemoveItem(type,item_id) {
        
        const currentCount = itemCount[item_id] ||0

        setitemCount(
           (prevCount)=> {
            if (type ==='INCREMENT'){
                return {...prevCount,[item_id]:currentCount+1}
            }
            else if(type === 'DECREMENT'){
                return {...prevCount,[item_id]:currentCount-1}
            }
           }
        ) 

    }

// function calculateAmount(id, itemName, qty) {
//   const amount = ((itemCount[id] || 0) * qty).toFixed(1);
  
//   setbillAmount(prev => [...prev, { itemName, amount }]);
  
//   return amount;
// }

  
    // billItem =[...new Set(billItem)]

    const filteredItems = items.filter(
                (item)=> {
                    return newBillItems.some(
                            (el) =>{
                               return item.item_name ===el
                            }
                    )
                }
    );

const submitLocal = () => {
  // Create detailed order list
  const orderWithAmount = filteredItems.map(item => {
    const qty = itemCount[item.item_id] || 0;
    const amount = qty * item.price; 

    return {
      item_id: item.item_id,
      item_name: item.item_name,
      qty,
      price: item.price,
      amount: amount.toFixed(2)
    };
  });


  localStorage.setItem('order', JSON.stringify(orderWithAmount));
  setplaceOrder(true);
  
  console.log("Order saved:", orderWithAmount);
};


    // console.log(`Filtered item is `,filteredItems);

    const showBillItem = filteredItems.map(
        (item,index)=>(
                    <div className='billItems'>
                       <div className='billingItemImage'> <img src={item.image_url}></img></div>
                       <div className='itemDetails'>
                        <p> {item.item_name} </p>
                        <p style={{color:"green"}}> Available: {item.available_qty}</p>
                        <p>₹ {item.price}/ {item.unit}</p>
                       </div>
                        
                        <div className='buttonContainer'>
                             <button className='billBtn' id={item.item_id} onClick={()=>{addRemoveItem('DECREMENT',item.item_id)}}disabled={(itemCount[item.item_id] || 0) <= 0}>-</button>
                                 <p>{itemCount[item.item_id]||0}</p>
                          <button className='billBtn' id={item.item_id} onClick={()=>{addRemoveItem('INCREMENT',item.item_id)}}>+</button>
                        </div>
                        <div className='itemAmount'>
                        <p id='Amount'> ₹ { ((itemCount[item.item_id] || 0) * item.available_qty).toFixed(1) }</p>
                           {/* <p> ₹ { ()=>{calculateAmount(item.item_id,item.item_name,item.available_qty)} }</p> */}
                        </div>
                        
                       <CloseButton id='billingCloseButton' aria-label="Hide" onClick={()=>{removeFromList(item.item_id)}} />
                        </div>
        )
    )
    // --------------------------------------------------------------------------------
  return (
    <div className='billContainer'>
           
      {billItem.length >0 ? (showBillItem) : (<p> Data Not Available</p>)}
        <Button as="input" type="submit" value="Submit"  onClick={submitLocal}/>
      
    </div>
  )
}

export default Billing