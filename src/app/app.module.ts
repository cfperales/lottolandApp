import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import {HttpClientModule} from '@angular/common/http';
import { KeysPipe } from './pipes/keys.pipe';
import { NumberComponent } from './number/number.component';
import { TableRowComponent } from './table-row/table-row.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
