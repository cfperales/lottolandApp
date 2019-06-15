import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EuroJackpotService} from '../../services/euro-jackpot.service';
import {WinnersInterface} from '../../shared/interfaces/winners.interface';
import {OddModelInterface} from '../../shared/interfaces/winners.model';
import {generateDate, matchLabels, tiersLabels} from './panel.utils';

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
  public date: string;

  constructor(
    private readonly euroJackpotService: EuroJackpotService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.euroJackpotService.getWinners().subscribe((response: WinnersInterface) => {
      this.dataReady = true;
      this.winners = response;
      this.date = generateDate(this.winners.last.date);
      // rank0 needs to be removed as it is not displayed and does not have valid information
      delete this.winners.last.odds.rank0;
      // object built to display the results
      this.tiers = Object.keys(this.winners.last.odds).map((key: string, index: number) => {
        return {
          ...this.winners.last.odds[key],
          // We assume that will be always as many results as Tiers and Matches. Otherwise will fail.
          tier: tiersLabels[index],
          match: matchLabels[index],
        };
      });
      this.changeDetector.detectChanges();
    }, () => {
      console.log('Error in call getWinners');
    });
  }
}
