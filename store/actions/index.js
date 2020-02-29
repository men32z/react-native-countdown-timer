export const setState = payload => ({
  type: 'SET_STATE',
  payload,
});

export const setSpeed = payload => ({
  type: 'SET_SPEED',
  payload,
});

export const pauseToggle = () => ({
  type: 'PAUSE_TOGGLE',
});

export const setSeconds = payload => ({
  type: 'SET_SECONDS',
  payload,
});

export const decrease = () => ({
  type: 'DECREASE',
});
