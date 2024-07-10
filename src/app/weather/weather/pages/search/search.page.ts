import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { LocationService } from 'src/app/core/services/location.service';
import { WeatherService } from 'src/app/core/services/weather.service';
import { CurrentWeather } from 'src/app/shared/models/currentWeather.model';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { MyLocation } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage {
  locationCtrl = new FormControl();
  filteredLocations: Observable<MyLocation[]>;
  forecastData: Forecast | null = null;

  constructor(private locationService: LocationService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.filteredLocations = this.locationCtrl.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => value.length >= 2 ? this.locationService.getAutocompleteLocation(value) : [])
    );
  }

  displayLocation(location: MyLocation): string {
    return location ? location.LocalizedName : '';
  }

  onLocationSelected(event: any) {
    const selectedLocation: MyLocation = event.option.value;
    console.log(selectedLocation)
    this.fetchForecast(selectedLocation.Key); 
  }

  fetchForecast(cityName: string) {
    console.log('start')
    this.weatherService.getForecast(cityName).subscribe(
      (forecastData: Forecast) => {
        this.forecastData = forecastData;
      },
      (error) => {
        console.error('Error fetching forecast:', error);
      }
    );
  }
}

