import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  host: {'[class.euronumber]': 'euronumber'}
})
export class NumberComponent {
  @Input()
  public number: number;
  @Input()
  public euronumber: boolean;
}
