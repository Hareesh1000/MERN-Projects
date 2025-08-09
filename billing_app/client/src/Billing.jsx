import React, { useEffect, useState } from 'react'
import items from'./data/items.json'
import CloseButton from 'react-bootstrap/CloseButton';

function Billing({billItem}) {

    const [itemCount, setitemCount] = useState({});

    const[newBillItems,setBillItem] = useState([])
 

    // function addRemoveItem(type,item_id) {
        
    //     setitemCount(
    //         (prevCount)=> { const currentCount = prevCount[item_id]||0}
    //      )
    //     if (type ==='INCREMENT'){
    //        return {...setitemCount,[item_id]:currentCount +1}
    //     }
    //     else if (type==='DECREMENT'){
    //         return {...setitemCount,[item_id]:currentCount -1}
    //     }
    // }

function removeFromList(remove_item) {
    setBillItem(
        (previtems) => {
                    previtems.filter(item => item !=remove_item)
        }
    )
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

    // console.log(`Filtered item is `,filteredItems);

    const showBillItem = filteredItems.map(
        (item,index)=>(
                    <div className='billItems'>
                       <div className='billingItemImage'> <img src={item.image_url}></img></div>
                        <p> {item.item_name} </p>
                        <p> Available: 0</p>
                        <p>{item.price}</p>
                        <div className='buttonContainer'>
                             <button id={item.item_id} onClick={()=>{addRemoveItem('DECREMENT',item.item_id)}}disabled={(itemCount[item.item_id] || 0) <= 0}>-</button>
                                 <p>{itemCount[item.item_id]||0}</p>
                          <button id={item.item_id} onClick={()=>{addRemoveItem('INCREMENT',item.item_id)}}>+</button>
                        </div>
                       <CloseButton id='billingCloseButton' aria-label="Hide" onClick={()=>{removeFromList(item.item_id)}} />
                        </div>
        )
    )
  return (
    <div className='billContainer'>
           
      {billItem.length >0 ? (showBillItem) : (<p> Data Not Available</p>)}

      
    </div>
  )
}

export default Billing