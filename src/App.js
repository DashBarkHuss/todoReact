import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      items: [],
      currentItem: {text: '', key: ''}
    }
  }

  handleInput = e=>{
    e.preventDefault()
    console.log(e.target.value)
    const currentItem = {text: e.target.value, key: Date.now()};
    this.setState({
      currentItem
    })
    console.log(currentItem)
  }

  addItem = (e)=>{
    e.preventDefault()
    const items = [...this.state.items, this.state.currentItem];
    this.setState({
      items,
      currentItem: {text: '', key: ''}
    })
  }
  deleteItem = (key)=>{
    this.setState({
      items: this.state.items.filter(item=> item.key !== key)
    })
  }

  inputElement = React.createRef()


  render(){
    return (
      <div className="App">
        <ToDoInput 
        inputElement = {this.inputElement}
        handleInput={this.handleInput}
        addItem={this.addItem}
        currentItem = {this.state.currentItem}
        />
        <ToDoList 
          deleteItem = {this.deleteItem} 
          items = {this.state.items}
        />
      </div>
    );
  } 
}

export default App;
