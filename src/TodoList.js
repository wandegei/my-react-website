import React, { useRef, useState, useEffect } from 'react';
import TodoItem from './TodoItem'; // Assuming TodoItem component is in a separate file

function TodoList() {
  const todoNameref = useRef('');
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const name = todoNameref.current.valueOf.trim();
    if (name === '') return;
    const newTodo = {
      id: Date.now(),
      name: name,
      complete: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    todoNameref.current.valueOf = '';
  };

  const handleTodoToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleCheckAllTodos = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, complete: true }))
    );
  };

  const handleUncheckAllTodos = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, complete: false }))
    );
  };

  const handleClearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.complete));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        ref={todoNameref}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleCheckAllTodos}>
        Check All Todos
      </button>
      <button onClick={handleUncheckAllTodos}>
        Uncheck All Todos
      </button>
      <button onClick={handleClearCompletedTodos}>
        Clear Completed Todos
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleTodoToggle}
          />
        ))}
      </ul>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </div>
  );
}

export default TodoList;
