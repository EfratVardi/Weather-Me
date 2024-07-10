import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';
import { SearchPage } from './pages/search/search.page';

const routes: Routes = [
  {
    path: 'search', component: SearchPage, children: [
      { path: 'results/:locationKey/:localizedName', component: ResultsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
