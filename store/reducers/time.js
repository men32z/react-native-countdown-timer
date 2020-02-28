const timeReducer = (state = [], {type, payload}) => {
  switch (type) {
    case 'SET_STATE':
      return Object.assign(state, {[payload.key] : payload.value});
    default:
      return state;
  }
}

export default timeReducer;