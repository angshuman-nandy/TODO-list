import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions';
import '../App.css';

let EditTodo = ({ show, todoid, dispatch }) => {
  let input;
if(show==true){
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(editTodo(todoid, input.value));
          input.value = '';
        }}
      >
        <input
        className="form-control"
        id="input_area"
          ref={node => {
            input = node;
          }}
        />
        <button className="btn btn-md btn-primary" type="submit">update</button>
      </form>
    </div>
  );
}
else
return(
<div>
</div>
);
};

EditTodo = connect()(EditTodo);

export default EditTodo;