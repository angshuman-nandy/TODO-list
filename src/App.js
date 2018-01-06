import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './App.css';

const App = () => (
	<div className="container">
	<div className="row">
  <div className="col-md-offset-3 col-md-6 col-xs-12" id="main_div">
  	<h1>To Do List </h1>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
    
  </div>
  </div>
  </div>
);

export default App;
