import React from 'react';
import FilterLink from '../containers/FilterLink';
import '../App.css';

const Footer = () => (
	<div className="container" id="links">
  <ul className="list-inline">
    Show:
    <li className="btn btn-md"><FilterLink filter="SHOW_ALL">All</FilterLink></li>
    <li className="btn btn-md"><FilterLink filter="SHOW_ACTIVE">Active</FilterLink></li>
   <li className="btn btn-md"><FilterLink filter="SHOW_COMPLETED">Completed</FilterLink></li>
  </ul>
  </div>
);

export default Footer;
