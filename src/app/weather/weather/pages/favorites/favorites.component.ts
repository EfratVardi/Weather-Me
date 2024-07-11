import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { MyLocation } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'})
export class FavoritesComponent implements OnInit {
  favoritesList: MyLocation[] = [];

  constructor(private favoritesService: FavoritesService, private router: Router) { }

  ngOnInit() {
    this.favoritesList = this.favoritesService.getFavorites();
  }

  handleChipRemoved(locationKey: string) {
    this.favoritesService.removeFromFavorites(locationKey)
  }

  handleChipClicked(locationKey: string) {
    this.router.navigate([`/search/${locationKey}`]);
  }
}
