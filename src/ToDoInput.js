import React, { Component } from 'react'

class ToDoInput extends Component{
    componentDidUpdate(){
        this.props.inputElement.current.focus()

    }
    render(){

        return (
        <div>
            <form onSubmit = {this.props.addItem}>
                <input placeholder='Task'
                        ref = {this.props.inputElement}
                        onChange = {this.props.handleInput}
                        value={this.props.currentItem.text}
                ></input>
                <button type = "submit">add</button>
            </form>
        </div>
        )
    }
}

export default ToDoInput
