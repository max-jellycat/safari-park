import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Returns redux thunk function that dispatches GUESS_WORD action
 * and (conditionnaly) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord
 * @returns {function}
 */
export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });

  guessedWord === secretWord
    && dispatch({
      type: actionTypes.CORRECT_GUESS,
    });
};
