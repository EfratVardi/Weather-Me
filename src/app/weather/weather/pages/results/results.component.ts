import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorModalService } from 'src/app/core/services/error-modal.service';
import { WeatherService } from 'src/app/core/services/weather.service';
import { CurrentWeather } from 'src/app/shared/models/currentWeather.model';
import { Forecast } from 'src/app/shared/models/forecast.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {
  currentWeather: CurrentWeather | null = null;
  forecastData: Forecast | null = null;
  localizedName: string | null = null;
  prompt: string | null = null;
  unit: string | null = null;
  isMetric: boolean = true;
  url: string | null = null;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private errorModalService: ErrorModalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const locationKey = params.get('locationKey');
      this.localizedName = params.get('localizedName')
      if (locationKey) {
        this.fetchCurrentWeather(locationKey);
        this.fetchForecast(locationKey);
      }
    });
    this.isMetric = this.weatherService.isMetric;
    this.unit = this.isMetric ? ' °C' : ' °F';
  }

  fetchCurrentWeather(locationKey: string) {
    this.weatherService.getCurrentWeather(locationKey).subscribe(
      (currentWeather: CurrentWeather) => {
        this.currentWeather = currentWeather[0];
        this.generatPrompt()
      },
      (error) => {
        this.showError('Error fetching currentWeather')
      }
    );
  }

  fetchForecast(locationKey: string) {
    this.weatherService.getForecast(locationKey).subscribe(
      (forecastData: Forecast) => {
        this.forecastData = forecastData;
      },
      (error) => {
        this.showError('Error fetching forecast')
      }
    );
  }

  generatPrompt() {
    const prompt: string = 'Give me recommendations on what to wear on a {dayDescription} day {temperature}' + this.unit + 'in {city} in maximum 100 words';
    const dayDescription = this.currentWeather?.WeatherText
    const temperature = this.rand((this.currentWeather?.Temperature.Metric.Value as number));
    const location = this.localizedName;

    this.prompt = prompt
      .replace('{dayDescription}', dayDescription)
      .replace('{temperature}', temperature.toString())
      .replace('{city}', location)
  };

  showError(error: string) {
    this.errorModalService.openErrorModal('Error', error);
  }

  padWithZero(num: number, size: number): string {
    let numStr = num.toString();
    while (numStr.length < size) {
      numStr = '0' + numStr;
    }
    return numStr;
  }

  getUrl(icon) {
    return 'https://developer.accuweather.com/sites/default/files/' + this.padWithZero(icon, 2) + '-s.png'
  }

  rand(num: number) {
    return Math.floor(num);
  }

}

