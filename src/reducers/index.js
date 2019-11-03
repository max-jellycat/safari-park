import { combineReducers } from 'redux';
import successReducer from './success.reducer';

export default combineReducers({
  success: successReducer,
});
