import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../App.css';
import EditTodo from '../containers/EditTodo';

const TodoList = ({ todos, onTodoClick, onDeleteClick, onEditClick }) => (
  <div>
    {todos.map(todo => (
      <div className="item" ><Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      <EditTodo todoid={todo.id} show={todo.showEdit} />
      <button type="button" className="btn btn-sm btn-warning" onClick={() => onEditClick(todo.id)} >edit</button>
       <button type="button" className="btn btn-sm btn-danger" onClick={() => onDeleteClick(todo.id)} >remove</button> </div>
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      removed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired

};

export default TodoList;
