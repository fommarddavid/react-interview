 import { combineReducers } from 'redux';

import demoReducer from './demo';
import moviesReducer from './movies';

const rootReducer = combineReducers({
  demo: demoReducer,
  movies: moviesReducer,
  // ... autres reducers
});

export default rootReducer;