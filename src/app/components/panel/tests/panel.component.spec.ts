import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from '../panel.component';
import {KeysPipe} from '../../../pipes/keys.pipe';
import {NumberComponent} from '../../number/number.component';
import {TableRowComponent} from '../../table-row/table-row.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {EuroJackpotService} from '../../../services/euro-jackpot.service';
import {FakeEuroJackpotService, mockWinnersResponse} from '../../../shared/test-utils/utils';
import {generateDate} from '../panel.utils';
import {DateInterface} from '../../../shared/interfaces/winners.interface';
import {FormatPrizePipe} from '../../../pipes/format-prize.pipe';

describe('PanelComponent - Backed call successful', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  const fakeEuroJackpotService: FakeEuroJackpotService = new FakeEuroJackpotService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelComponent, FormatPrizePipe, KeysPipe, NumberComponent, TableRowComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {provide: EuroJackpotService, useValue: fakeEuroJackpotService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fakeEuroJackpotService.getWinnersResponse = mockWinnersResponse;
    spyOn(fakeEuroJackpotService, 'getWinners').and.callThrough();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dataReady).toBe(true);
  });

  it('should getWinners method have been call', () => {
    expect(component).toBeTruthy();
    expect(fakeEuroJackpotService.getWinners).toHaveBeenCalled();
  });

  it('should tiers have the correct data', () => {
    expect(component).toBeTruthy();
    Object.keys(component.winners.last.odds).forEach((key, index) => {
      expect(component.tiers[index].winners).toEqual(component.winners.last.odds[key].winners);
      expect(component.tiers[index].prize).toEqual(component.winners.last.odds[key].prize);
    });
  });

  it('should the date be correctly generated', () => {
    expect(component.date).toEqual(generateDate(component.winners.last.date));
    expect(generateDate({dayOfWeek: 'Monday', day: 1, month: 0, year: 1} as DateInterface)).toEqual('Monday 01 Jan 1');
  });
});

describe('PanelComponent - BE call fails', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  const fakeEuroJackpotService: FakeEuroJackpotService = new FakeEuroJackpotService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelComponent, FormatPrizePipe, KeysPipe, NumberComponent, TableRowComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {provide: EuroJackpotService, useValue: fakeEuroJackpotService},
      ],
    })
      .compileComponents();
  }));

  beforeEach(async (() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    // The fail is simulated with this boolean
    fakeEuroJackpotService.returnError = true;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call getWinners and dataReady should be false', () => {
    expect(component.dataReady).toBe(false);
  });
});
