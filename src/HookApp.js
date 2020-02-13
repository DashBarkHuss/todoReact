import React, { useState } from 'react'
import HookToDoInput from './HookToDoInput'
import HookToDoList from './HookToDoList'

export function HookApp(){
  // hooks are mainly used for state management
  // simplest hook useState
  // state for the items
  const [items, setItems] = useState([])

  // items === []
  // setItems === (items) => void
  
  // state for the currentItems
  const [currentItem, setCurrentItem] = useState({ text: '', key: ''})
  



  // initial state: currentItem  === {text: '', key: ''}
  // once we write Hi Dash: currentItem === {text: 'Hi Dash', key: 12391293081293}


  // setCurrentItem === ({text, key}) => void

  // rules of hooks

  const handleInput = e => {
    e.preventDefault()
    const newCurrentItem = {text: e.target.value, key: Date.now()};
    setCurrentItem(newCurrentItem);
  }

  const addItem = (e) => {
    e.preventDefault()
    const newItems = [...items, currentItem];
    setItems(newItems);
    setCurrentItem({text: '', key: ''});
  }

  const deleteItem = (key) => {
    setItems(items.filter(item=> item.key !== key))
  }


    return (
      <div className="App">
        <HookToDoInput 
            addItem ={addItem}
            deleteItem ={deleteItem}
          handleInput={handleInput}
          currentItem = {currentItem}
        />
         <HookToDoList 
          deleteItem = {deleteItem} 
          items = {items}
        />
      </div>
    );
}

