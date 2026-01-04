import { useState, useEffect } from 'react';
import './App.css'
import AddItemInput from './components/AddItemInput.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {
  const [list, setList] = useState([]);

  const handleClearButton = () => {
    setList([]);
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl my-6'>My To-Do List</h1>
      <AddItemInput list={list} setList={setList}/>
      <ToDoList list={list}/>
      <button 
        className='border my-8 py-1 px-2 rounded-full bg-blue-500 font-semibold'
        onClick={handleClearButton}
      >
        Clear List
      </button>
    </div>
  )
}

export default App
