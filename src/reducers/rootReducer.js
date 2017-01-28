import { combineReducers } from 'redux';
import titles from './searchReducer';

const rootReducer = combineReducers({
  titles: titles
});

export default rootReducer;
