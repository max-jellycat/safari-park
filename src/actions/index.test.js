import moxios from 'moxios';
import { storeFactory } from '../test/testUtils';
import { getSecretPokemon } from '.';

describe('getSecretPokemon action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('add formated response pokemon to state', () => {
    const secretPokemon = {
      id: 25,
      name: 'pikachu',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      },
      types: ['electric'],
    };
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          id: 25,
          name: 'pikachu',
          sprites: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          },
          types: [{ slot: 1, type: { name: 'electric' } }],
        },
      });
    });

    return store.dispatch(getSecretPokemon()).then(() => {
      const newState = store.getState();

      expect(newState.secretPokemon).toEqual(secretPokemon);
    });
  });
});
