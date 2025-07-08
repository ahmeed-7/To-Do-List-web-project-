import { useRef, useState } from "react";
import "./App.css";

function App(){
  const [todos, settodos] = useState([]);
  const inputref = useRef();

  // Function to add a new todo item
  const additem = () => {
      const text = inputref.current.value;
      const newitem = { completed: false, text };
      settodos([...todos, newitem]);
      inputref.current.value = "";
  }

  // Function to toggle the completed status of a todo item
  const itemdone = (index) => {
      const newtodos = [...todos];
      newtodos[index].completed = !newtodos[index].completed;
      settodos(newtodos);
  }

  // Function to delete a todo item
  const deleteitem = (index) => {
      const newtodos = [...todos];
      newtodos.splice(index, 1);
      settodos(newtodos);
  }

  // Render the UI
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li 
                  className={completed ? "done" : ""}
                  key={index}
                >
                  <span>
                    <input type="checkbox" onClick={() => itemdone(index)}></input>
                    {text}
                  </span>
                </li>
                <span onClick={() => deleteitem(index)} className="trash">❌</span>
              </div>
            );
          })}
        </ul>
        <input ref={inputref} placeholder="Enter item..." />
        <button onClick={additem}>Add</button>
      </div>
    </div>
  );
}

export default App;
