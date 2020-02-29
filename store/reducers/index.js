import { combineReducers } from 'redux';
import timeReducer from './time';

const rootReducer = combineReducers({
  countdown: timeReducer,
});

export default rootReducer;
