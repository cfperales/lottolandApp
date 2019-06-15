import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableRowComponent} from '../table-row.component';
import {FormatPrizePipe} from '../../../pipes/format-prize.pipe';

describe('TableRowComponent', () => {
  let component: TableRowComponent;
  let fixture: ComponentFixture<TableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableRowComponent, FormatPrizePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowComponent);
    component = fixture.componentInstance;
    component.tier = {
      winners: 0,
      prize: 0,
      specialPrize: 0,
      tier: 'I',
      match: '5 Numbers + 2 Euronumbers',
      currency: 'EUR',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
