import { ADD_LOCATION } from './constants';

const initialState = {
  notes: [
    {
      id: 1,
      address: 'sample note',
    },
    {
      id: 0,
      address: 'the second note',
    },
  ],
  isError: false,
  count: [],
  count1: [],
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOCATION:
      const newState = {
        ...state,
        notes: state.notes.concat([
          {
            id: state.notes.length,
            address: action.payload,
          },
        ]),
      };
      return newState;
    default:
      return state;
  }
}

export default mainReducer;
