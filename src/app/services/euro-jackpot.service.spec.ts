import { TestBed } from '@angular/core/testing';

import { EuroJackpotService } from './euro-jackpot.service';

describe('EuroJackpotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EuroJackpotService = TestBed.get(EuroJackpotService);
    expect(service).toBeTruthy();
  });
});
