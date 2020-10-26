import React from "react";
import { connect } from "react-redux";

const TodoItem = ({ todo, onToggle }) => {};

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />
      ))}
    </ul>
  );
}

const TodoListStore = connect((state) => ({
  todos: state.todos,
}))(TodoList);

export default TodoList;
