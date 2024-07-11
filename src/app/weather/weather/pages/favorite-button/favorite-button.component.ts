import { Component, Input } from '@angular/core';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { MyLocation } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html'})
  
export class FavoriteButtonComponent {
  @Input() location: MyLocation;
  favoritesList: MyLocation[] = [];

  constructor(private favoritesService: FavoritesService) { }

  toggleFavorite() {
    this.favoritesList = this.favoritesService.getFavorites();
    const isFavorite = this.isFavorite()

    if (isFavorite) {
      this.favoritesService.removeFromFavorites(this.location.Key)
    } else {
      this.favoritesService.addToFavorites(this.location)
    }
  }
  
  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.location.Key);
  }
}
