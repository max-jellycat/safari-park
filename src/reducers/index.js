import { combineReducers } from 'redux';
import successReducer from './success.reducer';
import guessedWordsReducer from './guessed-words.reducer';
import secretWordReducer from './secret-word.reducer';

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer,
});
