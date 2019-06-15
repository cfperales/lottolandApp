import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import {PanelComponent} from '../components/panel/panel.component';
import {KeysPipe} from '../pipes/keys.pipe';
import {NumberComponent} from '../components/number/number.component';
import {TableRowComponent} from '../components/table-row/table-row.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {EuroJackpotService} from '../services/euro-jackpot.service';
import {FormatPrizePipe} from '../pipes/format-prize.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        KeysPipe,
        FormatPrizePipe,
        NumberComponent,
        PanelComponent,
        TableRowComponent,
      ],
      providers: [
        HttpClient, HttpHandler, EuroJackpotService,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
