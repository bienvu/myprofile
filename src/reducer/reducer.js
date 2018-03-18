const redux = require('redux');
const todoReducer = require('./todo.js');
const isAddingReducer = require('./isAdding.js');

var reducer = redux.combineReducers({
  todoList: todoReducer,
  isAdding: isAddingReducer
});

module.exports = reducer;
