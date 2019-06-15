import {TestBed} from '@angular/core/testing';
import {EuroJackpotService} from '../euro-jackpot.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {mockWinnersResponse} from '../../shared/test-utils/utils';

describe('EuroJackpotService', () => {

  let service: EuroJackpotService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EuroJackpotService,
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(EuroJackpotService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getWinners() should match the right data', () => {
    service.getWinners().subscribe(data => {
      expect(data.last).toEqual(mockWinnersResponse.last);
    });

    const req = httpTestingController.expectOne('https://www.lottoland.com/api/drawings/euroJackpot');
    req.flush(mockWinnersResponse);
  });
});
