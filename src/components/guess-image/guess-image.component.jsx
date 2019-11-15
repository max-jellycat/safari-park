import React from 'react';
import { connect } from 'react-redux';

import Pokeball from '../../assets/images/pokeball.png';
import Loader from '../loader/loader.component';

const GuessImage = ({ success, secretPokemon }) => (
  <>
    {secretPokemon ? (
      <section className={`guess-image ${!success && 'is-secret'}`}>
        <img
          className="guess-image--image"
          src={secretPokemon.image}
          alt="Who is this?"
          onError={(e) => {
            e.target.src = Pokeball;
            e.target.className += ' no-pokemon';
          }}
        />
      </section>
    ) : (
      <Loader />
    )}
  </>
);

const mapStateToProps = ({ success, secretPokemon }) => ({
  secretPokemon,
  success,
});

export default connect(mapStateToProps)(GuessImage);
