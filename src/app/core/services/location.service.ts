import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyLocation } from 'src/app/shared/models/location.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  getAutocompleteLocation(searchText: string): Observable<MyLocation[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('apikey', environment.apiKey);
    params = params.append('q', searchText);
    
    return this.httpClient.get<MyLocation[]>('http://dataservice.accuweather.com/locations/v1/cities/autocomplete', { params });
  }

  getLocationByKey(locationKey: string): Observable<MyLocation> {
    let params: HttpParams = new HttpParams();
    params = params.append('apikey', environment.apiKey);

    return this.httpClient.get<MyLocation>(`http://dataservice.accuweather.com/locations/v1/${locationKey}`, { params });
  }
}
