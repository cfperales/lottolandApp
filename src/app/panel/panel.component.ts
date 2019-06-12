import { Component, OnInit } from '@angular/core';
import {EuroJackpotService} from '../services/euro-jackpot.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(
    private euroJackpotService: EuroJackpotService,
  ) { }

  ngOnInit() {
    this.euroJackpotService.getWinners().subscribe((response: any) => {
        console.log(response);
      }
    );
  }

}
