import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { MyLocation } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoritesList: MyLocation[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favoritesList = this.favoritesService.getFavorites();
  }

  handleChipRemoved(locationKey: string) {
    this.favoritesService.removeFromFavorites(locationKey)
    this.favoritesList = this.favoritesService.getFavorites();
  }
}
