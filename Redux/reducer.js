import { ADD_LOCATION } from './constants';

const initialState = {
  notes: [
    {
      id: 1,
      address: '259 Trần Hưng Đạo, Quận 1, Hồ Chí Minh; Ho Chi Minh City',
    },
    {
      id: 0,
      address: '204 - 206 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Quận 1, TP. HCM',
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
