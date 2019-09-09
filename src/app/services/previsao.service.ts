import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoService {
  constructor(private http: HttpClient) {}

  public buscarPrevisao(cidade: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&appid=37e4defe733067fef8b3c3ec85ce8e3c`;
    return this.http.get(url);
  }
}
