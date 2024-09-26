import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TreasureTroveComponent } from './components/treasure-trove/treasure-trove.component';
import { RandomWeatherComponent } from './components/random-weather/random-weather.component';

const routes: Routes = [
  { path: 'treasure-trove', component: TreasureTroveComponent },
  { path: 'weather', component: RandomWeatherComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
