import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TodoItem extends Component {
  removeTodo(e) {
    e.preventDefault();
    const {index, dispatch} = this.props;
    // const {index, handleRemove} = this.props;
    // handleRemove(index);
    dispatch({type: 'REMOVE_ITEM', index });
  }

  render() {
    const children = this.props.children;
    return (
      <div className="todo__item">
        <div>{children}</div>
        <a onClick={this.removeTodo.bind(this)}>Delete</a>
      </div>
    )
  }
}

TodoItem.propTypes = {
  children: PropTypes.element.isRequired
}

export default connect()(TodoItem);
