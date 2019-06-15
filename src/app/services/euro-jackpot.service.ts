import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {WinnersInterface} from '../shared/interfaces/winners.interface';

@Injectable()
export class EuroJackpotService {

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getWinners(): Observable<WinnersInterface> {
    return this.http.get<WinnersInterface>('https://www.lottoland.com/api/drawings/euroJackpot');
  }
}
