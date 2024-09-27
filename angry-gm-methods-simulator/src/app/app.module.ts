import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreasureTroveComponent } from './components/treasure-trove/treasure-trove.component';
import { RandomWeatherComponent } from './components/random-weather/random-weather.component';
import { AppMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Utils } from './shared/utils';

@NgModule({
  declarations: [
    AppComponent,
    TreasureTroveComponent,
    RandomWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }
