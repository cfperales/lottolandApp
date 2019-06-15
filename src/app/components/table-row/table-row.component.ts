import {Component, Input} from '@angular/core';
import {OddModelInterface} from '../../shared/interfaces/winners.model';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  @Input()
  tier: OddModelInterface;
}
