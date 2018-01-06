import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../App.css';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
        className="form-control" placeholder="what do you need to do??" id="input_area"
          ref={node => {
            input = node;
          }}
        />
        <button className="btn btn-md btn-primary" type="submit">Add</button>
      </form>

  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
