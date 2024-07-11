import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './weather/weather/pages/search/search.page';

const defaultLocationKey = '215854'; 

const routes: Routes = [
  {
    path: 'search/:locationKey', 
    component: SearchPage,
  },
  { path: '', redirectTo: `search/${defaultLocationKey}`, pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
