var isAddingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOOGLE_IS_ADDING':
      return !state
    default:
      return state;
  }
}

module.exports = isAddingReducer;
