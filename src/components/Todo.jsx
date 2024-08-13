import React, { useState } from 'react'

const TodoInput = (props) => {
    const [input, setInput] = useState('')
    const handleEnter=(e)=>{
      if( e.keyCode===13){
        props.addList(input);
        setInput("")
      }
    }
  return (
    <div className='input-container'>
      <input type='text' 
      onChange={(e)=>setInput(e.target.value)}
      value={input}
      onKeyDown={handleEnter}

      className='input-box-todo' placeholder='Enter your todo' />
      <button className='add-btn'
      onClick={()=>{
        props.addList(input);
        setInput("")
        console.log(input)
      }}
      >+</button>
 
    </div>
  )
}

export default TodoInput
