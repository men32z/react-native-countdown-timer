const timeReducer = (state = [], {type, payload}) => {
  switch (type) {
    case 'SET_STATE':
      return Object.assign({}, state, {[payload.key] : payload.value});
    case 'SET_SPEED':
      return Object.assign({}, state, {speed : payload});
    case 'PAUSE_TOGGLE':
      return Object.assign({}, state, {paused : !state.paused});
    case 'SET_SECONDS':
      return Object.assign({}, state, {seconds : payload, startSeconds: payload});
    case 'DECREASE':
      return Object.assign({}, state, {seconds : state.seconds - 1});
    default:
      return state;
  }
}

export default timeReducer;