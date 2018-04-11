import React, { Component } from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames'
import TodoInput from './TodoInput'


class TodoItem extends Component {
  state = {
    editing: false
  }

  handleDoubleClick = (e) => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props;
    // console.log(this.props);
    let element
    if (this.state.editing) {
      element = (
        <TodoInput text={todo.text} editing={this.state.editing} onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => completeTodo(todo.id)}  />
          <span onDoubleClick={this.handleDoubleClick}> {todo.text} </span>
          <button className="destroy" onClick={() => deleteTodo(todo.id)}  />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

export default TodoItem;
