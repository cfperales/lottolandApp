import {Observable, of as _of, throwError} from 'rxjs';
import {WinnersInterface} from '../interfaces/winners.interface';

export class FakeEuroJackpotService {
  public getWinnersResponse: WinnersInterface;
  public returnError: boolean;
  public error: any;

  constructor() {
    // By default the response is set in the constructor of the fake. But it is public in case a different
    // response needs to be assigned
    this.getWinnersResponse = mockWinnersResponse;
  }

  public getWinners(): Observable<WinnersInterface> {
    return this.returnError ? throwError(this.error) : _of(this.getWinnersResponse);
  }
}

// Mocked filled just with the mandatory data
export const mockWinnersResponse = {
  last: {
    currency: 'EUR',
    date: {
      day: 10,
      month: 6,
      year: 1984,
      dayOfWeek: 'Friday',
    },
    numbers: {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
    },
    euroNumbers: {
      0: 6,
      1: 7,
    },
    odds: {
      rank0: {
        winners: 0,
        specialPrize: 0,
        prize: 0,
      },
      rank1: {
        winners: 1,
        specialPrize: 1,
        prize: 1,
      },
      rank2: {
        winners: 2,
        specialPrize: 2,
        prize: 2,
      },
      rank3: {
        winners: 3,
        specialPrize: 3,
        prize: 3,
      },
      rank4: {
        winners: 4,
        specialPrize: 4,
        prize: 4,
      },
      rank5: {
        winners: 5,
        specialPrize: 5,
        prize: 5,
      },
      rank6: {
        winners: 6,
        specialPrize: 6,
        prize: 6,
      },
      rank7: {
        winners: 7,
        specialPrize: 7,
        prize: 7,
      },
      rank8: {
        winners: 8,
        specialPrize: 8,
        prize: 8,
      },
      rank9: {
        winners: 9,
        specialPrize: 9,
        prize: 9,
      },
      rank10: {
        winners: 10,
        specialPrize: 10,
        prize: 10,
      },
      rank11: {
        winners: 11,
        specialPrize: 11,
        prize: 11,
      },
      rank12: {
        winners: 12,
        specialPrize: 12,
        prize: 12,
      },
    },
  },
};
