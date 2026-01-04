import { useState, useEffect } from 'react';
import './App.css'
import AddItemInput from './components/AddItemInput.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {
  const [list, setList] = useState([]);

  return (
    <div className='main-container'>
      <h1>My To-Do List</h1>
      <AddItemInput list={list} setList={setList}/>
      <ToDoList list={list}/>
    </div>
  )
}

export default App
