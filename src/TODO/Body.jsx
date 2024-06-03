import React, { useState } from "react";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";

const Body = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const changeStatus = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    const list = todos.filter(el => el.id !== id);
    setTodos(list);
  };

  return (
    <main className="main">
      <div className="todo-input">
        <input 
          value={todo}   
          onChange={(e) => setTodo(e.target.value)}
          type="text"  
          placeholder="Add a new task..."  
        />
        <button onClick={() => {
          if (todo.trim() !== "") { 
            setTodos([...todos, { text: todo, completed: false ,id:Date.now()}]);
            setTodo("");
          }
        }}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <div className="buttons">
                <button  className="edit-btn" >
                  <FaEdit />
                </button>
              </div>
              <span className="todo-text">{todo.text}</span>
              <div className="buttons">
                <button onClick={() => changeStatus(todo.id)} className="complete-btn">
                  <FaCheck />
                </button>
                <button onClick={(e) => deleteTodo(todo.id)} className="delete-btn">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Body;