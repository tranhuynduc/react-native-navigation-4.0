import { ADD_NOTE } from '../actions/types';

const initialState = [
  {
    id: 1,
    title: 'the first note',
    description: 'The description goes here',
    address: '47 Phan Văn Hân',
    image: { uri: 'https://picsum.photos/700' },
  },
  {
    id: 2,
    title: 'the second note',
    description: 'The description goes here',
    address: '47 Phan Văn Hân',
    image: { uri: 'https://picsum.photos/700' },
  },
];

export default (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_NOTE:
      return [...state, { ...payload, id: state.length }];
    default:
      return state;
  }
};
