import { combineReducers } from 'redux';
import mainReducer from './reducer';
export default function createReducer() {
  const rootReducer = combineReducers({
    map: mainReducer,
  });

  return rootReducer;
}
