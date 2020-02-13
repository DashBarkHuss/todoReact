import React, { Component } from 'react'

function ToDoList(props){
    
    const {deleteItem, items} = props;
    
    const listItems = items.map(item=>{
        return <li key = {item.key}>{item.text}<button onClick = {()=>deleteItem(item.key)}>-</button></li> 
    })

    return(
        <ul className='list'>
            {listItems}
        </ul>
        )
}

export default ToDoList