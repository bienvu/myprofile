const redux = require('redux');
const reducer = require('../reducer/reducer.js');

// const todoArray = [
//   "Android",
//   "IOS",
//   "Reactjs",
//   "Nodejs"
// ]
// const todoReducer = (state = todoArray, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return [...state, action.item]
//     case 'REMOVE_ITEM':
//       return state.filter((e, i) => i !== action.index)
//     default:
//       return state;
//   }
// }
//
// const isAddingReducer = (state = false, action) => {
//   switch (action.type) {
//     case 'TOOGLE_IS_ADDING':
//       return !state
//     default:
//       return state;
//   }
// }
//
// const reducer = redux.combineReducers({
//   todoList: todoReducer,
//   isAdding: isAddingReducer
// });

// var reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'TOOGLE_IS_ADDING':
//       return {...state, isAdding: !state.isAdding}
//     case 'ADD_ITEM':
//       return {...state, todoList: [...state.todoList, action.item]}
//     case 'REMOVE_ITEM':
//       return {...state, todoList: state.todoList.filter((e, i) => i !== action.index)}
//     default:
//       return state;
//   }
// }

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension?window.devToolsExtension(): f => f
));

// store.subscribe(() => console.log(store.getState()));
// store.dispatch({type: 'TOOGLE_IS_ADDING'});
// store.dispatch({
//     type: 'ADD_ITEM',
//     item: "Bao boi"
// });
// store.dispatch({
//   type: 'REMOVE_ITEM',
//   index: 1
// });

export default store;
