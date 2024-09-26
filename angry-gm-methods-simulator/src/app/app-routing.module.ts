import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreasureTroveComponent } from './components/treasure-trove/treasure-trove.component';
import { RandomWeatherComponent } from './components/random-weather/random-weather.component';

const routes: Routes = [
  { path: 'treasure-trove', component: TreasureTroveComponent },
  { path: 'weather', component: RandomWeatherComponent },
  { path: '', redirectTo: 'treasure-trove', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
