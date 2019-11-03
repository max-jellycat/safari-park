import { combineReducers } from 'redux';
import successReducer from './success.reducer';
import guessedWordsReducer from './guessed-words.reducer';

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
});
