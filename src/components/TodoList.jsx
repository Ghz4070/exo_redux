import React from "react";
import { connect } from "react-redux";
import { UPDATE_TODO_ACTION } from "../store/todosReducer";

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
      </label>
    </li>
  );
}

export function TodoList({ todos, onToggle }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />;
      })}
    </ul>
  );
}

export const TodoListStore = connect(
  (state) => ({
    todos: state.todos,
  }),
  (dispatch) => ({
    onToggle: (todo) =>
      dispatch({
        type: UPDATE_TODO_ACTION,
        payload: { ...todo, completed: !todo.completed },
      }),
  })
)(TodoList);

export default TodoList;
