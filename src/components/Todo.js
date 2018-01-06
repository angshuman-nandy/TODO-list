import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Todo = ({ onClick, completed, text }) => (
  <p
    id="item"
    onClick={onClick}
    style={{
textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </p>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  removed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
