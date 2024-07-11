import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { LocationService } from 'src/app/core/services/location.service';
import { MyLocation } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html'})
export class SearchPage {
  locationCtrl = new FormControl();
  filteredLocations: Observable<MyLocation[]> | null = null;
  selectedLocation: MyLocation | null = null;

  constructor(private locationService: LocationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadDefaultLocation();

    this.filteredLocations = this.locationCtrl.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => value.length >= 2 ? this.locationService.getAutocompleteLocation(value) : [])
    );
  }

  loadDefaultLocation() {
    this.route.paramMap.subscribe(params => {
      const locationKey = params.get('locationKey');
      if (locationKey) {
        this.locationService.getLocationByKey(locationKey).subscribe(
          (location: MyLocation) => {
            this.selectedLocation = location;
            this.locationCtrl.setValue(location);
            this.loadWeather()
          },
          (error) => {
            console.error('Error loading default location:', error);
          }
        );
      }
    });
  }

  displayLocation(location: MyLocation): string {
    return location ? location.LocalizedName : '';
  }

  onLocationSelected(event: any) {
    this.selectedLocation = event.option.value;
    this.loadWeather()
  }

  loadWeather() {
    this.router.navigate([`/search/results/${this.selectedLocation?.Key}/${this.selectedLocation?.LocalizedName}`]);
  }
}

