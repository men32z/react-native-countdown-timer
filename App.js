import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import rootReducer from './store/reducers';

const initialState = {
  countdown: {
    seconds: 0,
    message: '',
    startSeconds: 0,
    messageClass: '',
    speed: 1,
    paused: false,
  },
};

const store = createStore(rootReducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
