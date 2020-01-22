import { all, takeLatest } from 'redux-saga/effects';

export function* addLocation(action) {
  try {
    console.log('get saga');
    console.log(action.payload);
  } catch (error) {}
}

export default function* root() {
  yield all([takeLatest('test', addLocation)]);
}
