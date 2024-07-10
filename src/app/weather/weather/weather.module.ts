import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPage } from './pages/search/search.page';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnglishOnlyDirective } from 'src/app/shared/directives/english-only.directive';

@NgModule({
  declarations: [SearchPage,EnglishOnlyDirective],
  imports: [CommonModule, WeatherRoutingModule,SharedModule],
})
export class WeatherModule {}
