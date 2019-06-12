import { Component, OnInit } from '@angular/core';
import {EuroJackpotService} from '../services/euro-jackpot.service';
import {WinnersContract} from '../interfaces/winners.contract';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public winners: WinnersContract;

  constructor(
    private euroJackpotService: EuroJackpotService,
  ) { }

  ngOnInit() {
    this.euroJackpotService.getWinners().subscribe((response: WinnersContract) => {
      this.winners = response;
      }
    );
  }

}
