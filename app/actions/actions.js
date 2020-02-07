import { ADD_LOCATION, ADD_NOTE } from './types';

export const addNote = payload => ({
  type: ADD_NOTE,
  payload,
});
