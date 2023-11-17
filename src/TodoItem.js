import React from 'react';

function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.complete ? 'line-through' : 'none',
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.name}
    </li>
  );
}

export default TodoItem;
