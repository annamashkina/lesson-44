import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/actions/actions";

const App = () => {
  const items = useSelector((state) => state.items.items); 
  const dispatch = useDispatch();
  
  const [counter, setCounter] = useState(1);
  const [removedItems, setRemovedItems] = useState([]);  

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: `Item ${counter}` };
    dispatch(addItem(newItem)); 
    setCounter(counter + 1); 
  };

  const handleRemoveItem = (id) => {
    const itemToRemove = items.find(item => item.id === id);
    dispatch(removeItem(id));  
    setRemovedItems([...removedItems, itemToRemove]); 
  };

  const handleRestoreItem = (id) => {
    const itemToRestore = removedItems.find(item => item.id === id);
    dispatch(addItem(itemToRestore));  
    setRemovedItems(removedItems.filter(item => item.id !== id)); 
  };

  return (
    <div>
      <h1>My Redux App</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <h2>Current Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
          </li>
        ))}
      </ul>
      
      <h2>Removed Items</h2>
      <ul>
        {removedItems.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRestoreItem(item.id)}>Restore Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
