import { Injectable } from '@angular/core';
import { MyLocation } from 'src/app/shared/models/location.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: MyLocation[] = [];

  addToFavorites(location: MyLocation): void {
    this.favorites.push(location);
  }

  removeFromFavorites(locationKey: string): void {
    const cityToRemoveIndex = this.favorites.findIndex((favorite) => favorite.Key === locationKey);
    this.favorites.splice(cityToRemoveIndex, 1);
  }

  getFavorites(): MyLocation[] {
    return this.favorites;
  }
}
