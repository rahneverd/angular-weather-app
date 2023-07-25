import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData = new Subject<any>();
  weatherError = new Subject<string>();
  constructor(private http: HttpClient) {}

  getWeatherData(city: string) {
    let payload = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=800fd005579d27a234b5ea3722aeb935`;
    return this.http.get(payload);
  }

  setWeatherData(data: any) {
    this.weatherData.next(data);
  }
  get weatherDataUpdated() {
    return this.weatherData.asObservable();
  }

  setWeatherError(data: string) {
    this.weatherError.next(data);
  }
  get weatherErrorUpdated() {
    return this.weatherError.asObservable();
  }
}
