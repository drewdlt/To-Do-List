import { useState, useEffect } from "react";
import "./App.css";
import AddItemInput from "./components/AddItemInput.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [list, setList] = useState([]);

  const handleClearButton = () => {
    setList([]);
  };

  const handleDelete = (index) => {
    // setList(list.filter(currIndex => currIndex !== index))
    console.log(`Item to delete: ${list[index]}`);
    setList(list.filter(item => item !== list[index]));
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl my-6">My To-Do List</h1>
      <AddItemInput list={list} setList={setList} />
      <ToDoList list={list} handleDelete={handleDelete}/>
      <button
        className="border my-8 py-1 px-2 rounded-full bg-blue-500 font-semibold hover:bg-blue-500/75 hover:cursor-pointer transition-colors"
        onClick={handleClearButton}
      >
        Clear List
      </button>
    </div>
  );
}

export default App;
