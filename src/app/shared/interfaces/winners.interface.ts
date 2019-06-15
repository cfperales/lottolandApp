// The date with the results is in last, I assumed that the data that is not displayed in the screen is not mandatory
// This will make easier the configuration of the mocks for testing purposes

export interface WinnersInterface {
  last: RaffleLast;
  next?: RaffleNext;
}

interface RaffleNext {
  nr?: number;
  currency: string;
  date: DateInterface;
  closingDate?: string;
  lateClosingDate?: string;
  drawingDate?: string;
  jackpot?: string;
  marketingJackpot?: string;
  specialMarketingJackpot?: string;
  climbedSince?: number;
}

interface RaffleLast extends RaffleNext {
  numbers: NumbersInterface;
  euroNumbers: EuroNumbersInterface;
  Winners?: number;
  odds: OddsInterface;
}

export interface DateInterface {
  full?: string;
  day: number;
  month: number;
  year: number;
  hour?: number;
  minute?: number;
  dayOfWeek: string;
}

interface EuroNumbersInterface {
  0: number;
  1: number;
}

interface NumbersInterface extends EuroNumbersInterface {
  2: number;
  3: number;
  4: number;
}

interface OddInterface {
  winners: number;
  specialPrize: number;
  prize: number;
}

interface OddsInterface {
  rank0: OddInterface;
  rank1: OddInterface;
  rank2: OddInterface;
  rank3: OddInterface;
  rank4: OddInterface;
  rank5: OddInterface;
  rank6: OddInterface;
  rank7: OddInterface;
  rank8: OddInterface;
  rank9: OddInterface;
  rank10: OddInterface;
  rank11: OddInterface;
  rank12: OddInterface;
}
