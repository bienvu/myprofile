import React, { Component } from 'react'
import {connect} from 'react-redux'


class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    let code = e.keyCode || e.which
    if (code === 13) {
      this.props.onSave(text)
      this.setState({ text: '' })
    }
  }

  render() {
    const { placeholder } = this.props

    return (
      <input className="new-todo"
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}

export default TodoInput;
