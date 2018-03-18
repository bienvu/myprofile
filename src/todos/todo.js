import React, { Component } from 'react';
import TodoItem from './todoItem';
import TodoForm from './todoForm';
import { connect } from 'react-redux';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoList : [
        "Android",
        "IOS",
        "Reactjs",
        "Nodejs"
      ]
    }
  }

  remove(index) {
    this.state.todoList.splice(index, 1);
    this.setState(this.state);
  }

  addTodo(note) {
    this.state.todoList.push(note);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <article id="todo">
          <h2 className="major">Todo</h2>
          <p>Welcome to my todo list, This todo created by react js and redux.</p>
          <div className="todo__wrap">
            <TodoForm handleAdd={this.addTodo.bind(this)}/>
            {this.props.todoList.map((e,i) => <TodoItem index={i} handleRemove={this.remove.bind(this)} key={i}>{e}</TodoItem>)}
          </div>
        </article>
      </div>
    )
  }
}

export default connect(function(state) {
  return {todoList: state.todoList}
})(Todo);
