import React from 'react'

function TodoList(props) {
  return (
    <div>
      <li className="list-item">{props.item}

      <span className='icons'><i class="fa-solid fa-trash icon-delete"
      onClick={(e)=>{props.deleteList(props.index)}}></i></span>
      </li>
    </div>
  )
}

export default TodoList
