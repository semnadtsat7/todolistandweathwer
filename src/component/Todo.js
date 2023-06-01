import React from "react";



const Todo = ({ todo, handleDeleteTodo }) => {
  return (
    <div className="todo">
      <span className="todo-text">
        {todo.text}
      </span>
      <span onClick={() => handleDeleteTodo(todo._id)} className="todo-delete">
        x
      </span>
    </div>
  );
};

export default Todo;