import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';

export const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});
