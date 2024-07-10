import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private locationService: LocationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const defaultLocationKey = params['locationKey'];
    //   if (defaultLocationKey) {
    //     this.locationCtrl.setValue(defaultLocationKey);

    //     // Optionally fetch default location details from API using locationService
    //     // this.locationService.getLocationDetails(defaultLocationKey).subscribe(
    //     //   (location: MyLocation) => {
    //     //     this.defaultLocation = location;
    //     //     this.locationCtrl.setValue(this.defaultLocation.LocalizedName);
    //     //   },
    //     //   error => {
    //     //     console.error('Error fetching default location:', error);
    //     //   }
    //     // );
    //   }
    // });
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
    this.router.navigate([`/search/results/${selectedLocation.Key}/${selectedLocation.LocalizedName}`]);
  }


}

