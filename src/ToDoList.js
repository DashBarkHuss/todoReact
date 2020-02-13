import React, { Component } from 'react'

class ToDoList extends Component{

    render(){
        const listItems = this.props.items.map(item=>{
        return <li key = {item.key}>{item.text}<button onClick = {()=>this.props.deleteItem(item.key)}>-</button></li> 
        })
        return(
            <ul className='list'>
                {listItems}
            </ul>
        )
    }
}

export default ToDoList