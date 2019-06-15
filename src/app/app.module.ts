import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PanelComponent} from './components/panel/panel.component';
import {HttpClientModule} from '@angular/common/http';
import {KeysPipe} from './pipes/keys.pipe';
import {NumberComponent} from './components/number/number.component';
import {TableRowComponent} from './components/table-row/table-row.component';
import {EuroJackpotService} from './services/euro-jackpot.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    KeysPipe,
    NumberComponent,
    TableRowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [EuroJackpotService],
  bootstrap: [AppComponent],
})
export class AppModule { }
