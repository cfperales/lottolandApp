import { FormatPrizePipe } from '../format-prize.pipe';

const pipe = new FormatPrizePipe();

describe('FormatPricePipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('handle different currencies', () => {
    expect(pipe.transform(1234, 'EUR')).toEqual(12.34);
    expect(pipe.transform(1234, 'JPY')).toEqual(1234);
  });
});
