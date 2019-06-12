import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {WinnersContract} from '../interfaces/winners.contract';

@Injectable({
  providedIn: 'root'
})
export class EuroJackpotService {

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getWinners(): Observable<WinnersContract> {
    return this.http.get<any>('https://www.lottoland.com/api/drawings/euroJackpot');
  }
}
