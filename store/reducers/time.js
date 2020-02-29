const timeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_STATE':
      return { ...state, [payload.key]: payload.value };
    case 'SET_SPEED':
      return { ...state, speed: payload };
    case 'PAUSE_TOGGLE':
      return { ...state, paused: !state.paused };
    case 'SET_SECONDS':
      return { ...state, seconds: payload, startSeconds: payload };
    case 'DECREASE':
      return { ...state, seconds: state.seconds - 1 };
    default:
      return state;
  }
};

export default timeReducer;
