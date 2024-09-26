import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treasure-trove',
  templateUrl: './treasure-trove.component.html',
  styleUrl: './treasure-trove.component.scss'
})
export class TreasureTroveComponent implements OnInit {
  adventureTiers = [
    {
      text: 'Apprentice (lv 1-2)',
      numberOfDiceTrove: 2,
      multiplier: 25
    },
    {
      text: 'Journeyman (lv 3-5)',
      numberOfDiceTrove: 3,
      multiplier: 50
    },
    {
      text: 'Adventurer (lv 6-8)',
      numberOfDiceTrove: 3,
      multiplier: 100
    },
    {
      text: 'Veteran (lv 9-11)',
      numberOfDiceTrove: 4,
      multiplier: 250
    },
    {
      text: 'Champion (lv 12-14)',
      numberOfDiceTrove: 4,
      multiplier: 1000
    },
    {
      text: 'Heroic (lv 15-17)',
      numberOfDiceTrove: 5,
      multiplier: 2500
    },
    {
      text: 'Legendary (lv 18+)',
      numberOfDiceTrove: 5,
      multiplier: 5000
    },
  ]

  troveProfiles = [
    {
      text: 'Balanced Trove',
    },
    {
      text: 'More Trade Goods',
    },
    {
      text: 'More Art Objects',
    },
    {
      text: 'No Trade Goods',
    },
    {
      text: 'No Art Objects',
    },
  ]

  adventureTireSelected: any = this.adventureTiers[1];
  troveProfileSelected: any = this.troveProfiles[0];

  constructor() {

  }

  ngOnInit(): void {
    
  }

  getResultOfNumberOfDices(numberOfDices: number, numberOfFaces: number) {
    const results = [];
    for (let index = 0; index <= numberOfDices; index++) {
      results.push(this.rollADice(numberOfFaces))
    }
    return results;
  }

  rollADice(numberOfFace:number) {
    const max = numberOfFace;
    const min = 1
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
