import { Injectable } from '@angular/core';
import { MyLocation } from 'src/app/shared/models/location.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: MyLocation[] = [];
  private localStorageKey = 'favoriteLocations';

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites() {
    const favoritesString = localStorage.getItem(this.localStorageKey);
    if (favoritesString) {
      this.favorites = JSON.parse(favoritesString);
    }
  }

  addToFavorites(location: MyLocation): void {
    this.favorites.push(location);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.favorites))
  }

  removeFromFavorites(locationKey: string): void {
    this.favorites = this.favorites.filter(location => location.Key !== locationKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.favorites));
  }

  getFavorites(): MyLocation[] {
    return this.favorites;
  }

  isFavorite(locationKey: string): boolean {
    return this.favorites.some(location => location.Key === locationKey);
  }
}
