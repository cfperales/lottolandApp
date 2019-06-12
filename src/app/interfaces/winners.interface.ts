export interface WinnersInterface {
  last: RaffleLast;
  next: RaffleNext;
}

interface RaffleNext {
  nr: number;
  currency: string;
  date: DateInterface;
  closingDate: string;
  lateClosingDate: string;
  drawingDate: string;
  jackpot: string;
  marketingJackpot: string;
  specialMarketingJackpot: string;
  climbedSince: number;
}

interface RaffleLast extends RaffleNext {
  numbers: NumbersInterface;
  euroNumbers: EuroNumbersInterface;
  Winners: number;
  odds: OddsInterface;
}

export interface DateInterface {
  full: string;
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  dayOfWeek: number;
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
