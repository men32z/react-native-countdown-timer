import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {default as AppContainer} from './components/App';
import rootReducer from './store/reducers';

const initialState = {
  countdown: {
    time:'15:31',
    message: '',
    messageClass: '',
    speed: 1,
    paused: false,
  }
};

const store = createStore(rootReducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}