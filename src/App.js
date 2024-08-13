
import { useState } from 'react';
import './App.css';
import TodoInput from './components/Todo';
import TodoList from './components/TodoList';


function App() {
  const [listTodo,setListTodo]=useState([])
  let addList=(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText])
  }
  const  deleteList=(index)=>{
    let list = [...listTodo]
    list.splice(index,1)
    setListTodo(list);
  }
  return (
    <div className="main-container">
      <div className='center-container'>
        <TodoInput addList={addList}/>
        <h1 className='app-heading'>Todo</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return <TodoList key={i} index={i} item={listItem} deleteList={deleteList} />
        })}
        
      </div>
    </div>
  );
}

export default App;
