import { ADD_LOCATION } from './constants';

const initialState = {
  address: ['sample note', 'the second note'],
  isError: false,
  count: [],
  count1: [],
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOCATION:
      const newState = {
        ...state,
        address: state.address.concat([action.payload]),
      };
      console.log('newState', newState);

      return newState;
    case 'ADD':
      console.log(state);
      return {
        ...state,
        count: state.count.concat([1]),
        count1: state.count.push(1),
      };
    default:
      return state;
  }
}

export default mainReducer;
