import { combineReducers } from 'redux';
import appReducer from '../reducers';

export default function createReducer() {
  const rootReducer = combineReducers({
    ...appReducer,
  });

  return rootReducer;
}
