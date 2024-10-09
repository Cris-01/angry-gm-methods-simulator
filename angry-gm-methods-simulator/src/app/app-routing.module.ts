import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreasureTroveComponent } from './components/treasure-trove/treasure-trove.component';
import { RandomWeatherComponent } from './components/random-weather/random-weather.component';
import { InjuriesTableComponent } from './components/injures-table/injuries-table.component';

const routes: Routes = [
  { path: 'treasure-trove', component: TreasureTroveComponent },
  { path: 'weather', component: RandomWeatherComponent },
  { path: 'injuries', component: InjuriesTableComponent },
  { path: '', redirectTo: 'treasure-trove', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
