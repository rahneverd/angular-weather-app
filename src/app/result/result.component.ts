import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  weatherData: any;
  weatherError = '';
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.weatherErrorUpdated.subscribe(
      (weatherError) => (this.weatherError = weatherError)
    );
    this.weatherService.weatherDataUpdated.subscribe(
      (weatherData) => (this.weatherData = weatherData)
    );
  }
}
