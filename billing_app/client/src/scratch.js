import React, { useState } from 'react';
import items from './data/items.json';
import CloseButton from 'react-bootstrap/CloseButton';

function Billing({ billItem }) {
  const [itemCount, setItemCount] = useState({});

  function addRemoveItem(type, item_id) {
    setItemCount(prevCount => {
      const currentCount = prevCount[item_id] || 0;

      if (type === 'INCREMENT') {
        return { ...prevCount, [item_id]: currentCount + 1 };
      } else if (type === 'DECREMENT') {
        return { ...prevCount, [item_id]: Math.max(currentCount - 1, 0) };
      }
      return prevCount;
    });
  }

  // Remove duplicates from billItem
  billItem = [...new Set(billItem)];

  const filteredItems = items.filter(item =>
    billItem.includes(item.item_name)
  );

  const showBillItem = filteredItems.map(item => {
    const count = itemCount[item.item_id] || 0;
    return (
      <div className="billItems" key={item.item_id}>
        <div className="billingItemImage">
          <img src={item.image_url} alt={item.item_name} />
        </div>
        <p>{item.item_name}</p>
        <p>Available: 0</p>
        <p>{item.price}</p>
        <div className="buttonContainer">
          <button
            onClick={() => addRemoveItem('DECREMENT', item.item_id)}
            disabled={count <= 0} // disable only for this item
          >
            -
          </button>
          <p>{count}</p>
          <button onClick={() => addRemoveItem('INCREMENT', item.item_id)}>
            +
          </button>
        </div>
        <CloseButton id="billingCloseButton" aria-label="Hide" />
      </div>
    );
  });

  return (
    <div className="billContainer">
      {billItem.length > 0 ? showBillItem : <p>Data Not Available</p>}
    </div>
  );
}

export default Billing;
