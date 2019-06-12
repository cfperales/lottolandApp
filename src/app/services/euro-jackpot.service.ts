import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EuroJackpotService {

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getWinners(): Observable<any> {
    return this.http.get<any>('https://www.lottoland.com/api/drawings/euroJackpot');
  }
}
