import React from 'react';
import { connect } from 'react-redux';

import Pokeball from '../../assets/images/pokeball.png';

const GuessImage = ({ success, secretPokemon }) => (
  <section className={`guess-image ${!success && 'is-secret'}`}>
    {secretPokemon && (
      <img
        src={secretPokemon.image}
        alt=""
        onError={(e) => {
          e.target.src = Pokeball;
        }}
      />
    )}
  </section>
);

const mapStateToProps = ({ success, secretPokemon }) => ({
  secretPokemon,
  success,
});

export default connect(mapStateToProps)(GuessImage);
