import { KeysPipe } from '../keys.pipe';

const pipe = new KeysPipe();

describe('KeysPipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns the expected array', () => {
    expect(pipe.transform({a: 1, b: 1})).toEqual(['a', 'b']);
  });
});
