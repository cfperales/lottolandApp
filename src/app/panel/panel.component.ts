import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EuroJackpotService} from '../services/euro-jackpot.service';
import {WinnersInterface} from '../interfaces/winners.interface';
import {OddModelInterface} from '../interfaces/winners.model';
import {matchLabels, tiersLabels} from './panel.utils';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit {
  public dataReady = false;
  public winners: WinnersInterface;
  public tiers: OddModelInterface[];

  constructor(
    private readonly euroJackpotService: EuroJackpotService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.euroJackpotService.getWinners().subscribe((response: WinnersInterface) => {
      this.dataReady = true;
      this.winners = response;
      // rank0 needs to be removed as it is not displayed and does not have valid information
      delete this.winners.last.odds.rank0;
      // object built to display the results
      this.tiers = Object.keys(this.winners.last.odds).map((key: string, index: number) => {
        return {
          ...this.winners.last.odds[key],
          tier: tiersLabels[index],
          match: matchLabels[index],
        };
      });
      this.changeDetector.detectChanges();
    });
  }
}
