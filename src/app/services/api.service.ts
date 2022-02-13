import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlBase = "http://api.weatherapi.com/v1";
  private urlBaseCurrentWeather = `${this.urlBase}/current.json?key=`;
  private urlBaseForecastWeather = `${this.urlBase}/forecast.json?key=`
  private apiKey = environment.apiKeyWeather;
  constructor(private http: HttpClient) {

   }

  public getCurrentWeather(city: string){
     return this.http.get<any>(`${this.urlBaseCurrentWeather}${this.apiKey}&q=${city}&aqi=no`);
   }
   public getForecastWeather(city: string){
    return this.http.get<any>(`${this.urlBaseForecastWeather}${this.apiKey}&q=${city}&days=5&aqi=no&alerts=no`);
  }
}
