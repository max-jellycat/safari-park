import { getLetterMatchCount } from '.';

describe('getLetterMatchCount', () => {
  const secretPokemon = 'party';
  it('returns correct count when no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretPokemon);
    expect(letterMatchCount).toBe(0);
  });
  it('returns the correct count when there are matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretPokemon);
    expect(letterMatchCount).toBe(3);
  });
  it('returns correct count when there are duplicate letters', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretPokemon);
    expect(letterMatchCount).toBe(3);
  });
});
