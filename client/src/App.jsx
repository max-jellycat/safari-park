import React from 'react';
import './App.scss';

import GuessedWords from './components/guessed-words/guessed-words.component';
import Congrats from './components/congrats/congrats.component';

const App = () => (
  <section className="app">
    <main className="section">
      <h1 className="title is-size-1">Jotto</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 },
          { guessedWord: 'party', letterMatchCount: 5 },
        ]}
      />
    </main>
  </section>
);

export default App;
