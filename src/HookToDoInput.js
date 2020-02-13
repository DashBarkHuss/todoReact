import React, { useEffect, useLayoutEffect, useRef } from 'react'

export function HookToDoInput(props){
  const {currentItem, addItem, handleInput} = props;

  const inputElementRef = useRef(null)

  useLayoutEffect(() => {
    inputElementRef.current.focus()
  }, [inputElementRef])


    return (
      <div>
          <form onSubmit = {addItem}>
              <input placeholder='Task'
                      ref = {inputElementRef}
                      onChange = {handleInput}
                      value={currentItem.text}
              />
              <button type = "submit">add</button>
          </form>
      </div>
      )
}

export default HookToDoInput
