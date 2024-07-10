import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPage } from './pages/search/search.page';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnglishOnlyDirective } from 'src/app/shared/directives/english-only.directive';
import { ResultsComponent } from './pages/results/results.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [SearchPage,EnglishOnlyDirective, ResultsComponent, FavoritesComponent],
  imports: [CommonModule, WeatherRoutingModule,SharedModule],
})
export class WeatherModule {}
