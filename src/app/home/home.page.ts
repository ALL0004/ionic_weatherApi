import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  private city: string;
  private dayWeek: [];
  private currentWeather: any;
  constructor(private api: ApiService) {
    //this.getApiWeather();
    //this.getForecast();
  
  }

  getApiWeather(city){
    this.api.getCurrentWeather(city).subscribe(res => 
      {this.currentWeather = res;
      console.log(this.currentWeather)})
  }

  getForecast(city){
    this.api.getForecastWeather(city).subscribe(res => 
      {this.currentWeather = res;
      console.log(this.currentWeather)})
  }

  getCity(event){
    
    this.city = event.target.value;
    if(this.city.length){
      //this.getApiWeather(this.city);
      this.getForecast(this.city);
    }
  }
}
