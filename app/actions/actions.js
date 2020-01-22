import { ADD_LOCATION, ADD_NOTE } from './types';

export const addLocation = payload => ({
  type: ADD_LOCATION,
  payload,
});

export const addNote = payload => ({
  type: ADD_NOTE,
  payload,
});
