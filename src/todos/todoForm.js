import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    // this.props.handleAdd(this.refs.txt.value);
    // this.refs.txt.value = "";
    // this.toggle();

    const {dispatch} = this.props;
    if (this.refs.txt.value !== '' ) {
      dispatch({type: 'ADD_ITEM', item: this.refs.txt.value});
      dispatch({type: 'TOOGLE_IS_ADDING'});
    }
  }

  toggle() {
    // const thisState = this.state;
    // thisState.isAdding = !thisState.isAdding;
    // this.setState(thisState);

    const {dispatch} = this.props;
    dispatch({type: 'TOOGLE_IS_ADDING'});
  }

  render() {
    if(this.props.isAdding) return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-add-todo">
        <div className="form-item">
          <input type="text" placeholder="Enter your note..." ref="txt" />
        </div>
        <div className="form-action">
          <button>Add</button>
        </div>
      </form>
    )

    return (<button onClick={this.toggle.bind(this)}>+</button>)
  }
}



export default connect(function(state) {
  return {isAdding: state.isAdding}
})(TodoForm);
