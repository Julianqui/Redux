// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import dataSlice from '../slices/dataSlice';

export const rootReducer = combineReducers({
  data: dataSlice

});

export default rootReducer;