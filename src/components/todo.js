import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import introImage from '../images/bg-home.jpg';
import Menu from './menu';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <article id="todo">
          <h2 class="major">Todo</h2>
        </article>
      </div>
    )
  }
}

export default Todo;
