import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-weather',
  templateUrl: './random-weather.component.html',
  styleUrl: './random-weather.component.scss'
})
export class RandomWeatherComponent implements OnInit {

  private urlPDF = '../assets/ClimateWeatherTables.pdf';
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  openFileFromAssets(fileName: string) {
    window.open(this.urlPDF, '_blank');
  }
}


 
