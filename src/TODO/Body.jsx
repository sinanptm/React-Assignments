import React, { useState, useRef, useEffect } from "react";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";

const Body = () => {
  const [todos, setTodos] = useState(() => {
    const storedList = localStorage.getItem("todos");
    return storedList ? JSON.parse(storedList) : [];
  });
  const [todoText, setTodoText] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState({});
  const inputRefs = useRef({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const changeStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    const list = todos.filter((el) => el.id !== id);
    setTodos(list);
  };

  const handleEdit = (id) => {
    setEditingTodoId(id);
    setEditedTodoText({
      ...editedTodoText,
      [id]: todos.find((todo) => todo.id === id).text,
    });
    setTimeout(() => inputRefs.current[id].focus(), 0);
  };

  const handleEditChange = (e, id) => {
    setEditedTodoText({ ...editedTodoText, [id]: e.target.value });
  };

  const handleEditSubmit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editedTodoText[id] };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
  };

  return (
    <main className="main">
      <div className="todo-input">
        <input value={todoText}   onChange={(e) => setTodoText(e.target.value)}
          type="text" placeholder="Add a new task..." />
        <button onClick={() => {
            if (todoText.trim() !== "") {
              setTodos([ ...todos, { text: todoText, completed: false, id: Date.now() }]);
              setTodoText("");
            }
          }}
        >
          Add
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <div className="todo-content">
              <div className="buttons">
                <button className="edit-btn" onClick={() => handleEdit(todo.id)}  >
                  <FaEdit />
                </button>
              </div>
              <input
                type="text"
                className="todo-text"
                value={
                  editingTodoId === todo.id
                    ? editedTodoText[todo.id]
                    : todo.text
                }
                disabled={editingTodoId !== todo.id}
                ref={(el) => (inputRefs.current[todo.id] = el)}
                onChange={(e) => handleEditChange(e, todo.id)}
                onBlur={() => handleEditSubmit(todo.id)}
              />
              <div className="buttons">
                <button
                  onClick={() => changeStatus(todo.id)}
                  className="complete-btn"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-btn"
                >
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
