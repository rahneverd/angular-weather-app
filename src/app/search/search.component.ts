import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchField = '';

  constructor(private weatherService: WeatherService) {}

  getWeatherData() {
    this.weatherService.getWeatherData(this.searchField).subscribe(
      (data) => {
        this.weatherService.setWeatherData(data);
        this.weatherService.setWeatherError('');
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.weatherService.setWeatherError(error['error']['message']);
      }
    );
  }
}
