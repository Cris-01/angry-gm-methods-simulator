import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, reduce } from 'rxjs';

@Component({
  selector: 'app-treasure-trove',
  templateUrl: './treasure-trove.component.html',
  styleUrl: './treasure-trove.component.scss'
})
export class TreasureTroveComponent implements OnInit {
  adventureTiers = [
    {
      text: 'Apprentice (lv 1-2) - Trove Dice 2d6 - Coin Multiplier 25',
      numberOfDiceTrove: 2,
      multiplier: 25,
      rarity: ['Common' , 'Common', 'Common', 'Common', 'Common', 'Uncommon']
    },
    {
      text: 'Journeyman (lv 3-5) - Trove Dice 3d6 - Coin Multiplier 50',
      numberOfDiceTrove: 3,
      multiplier: 50,
      rarity: ['Common' , 'Common', 'Uncommon', 'Uncommon', 'Uncommon', 'Rare']
    },
    {
      text: 'Adventurer (lv 6-8) - Trove Dice 3d6 - Coin Multiplier 100',
      numberOfDiceTrove: 3,
      multiplier: 100,
      rarity: ['Common' , 'Common', 'Uncommon', 'Uncommon', 'Rare', 'Rare']
    },
    {
      text: 'Veteran (lv 9-11) - Trove Dice 4d6 - Coin Multiplier 250',
      numberOfDiceTrove: 4,
      multiplier: 250,
      rarity: ['Common' , 'Uncommon', 'Rare', 'Rare', 'Rare', 'Very Rare']
    },
    {
      text: 'Champion (lv 12-14) - Trove Dice 4d6 - Coin Multiplier 1000',
      numberOfDiceTrove: 4,
      multiplier: 1000,
      rarity: ['Uncommon' , 'Rare', 'Rare', 'Very Rare', 'Very Rare', 'Very Rare']
    },
    {
      text: 'Heroic (lv 15-17) - Trove Dice 5d6 - Coin Multiplier 2500',
      numberOfDiceTrove: 5,
      multiplier: 2500,
      rarity: ['Rare' , 'Rare', 'Very Rare', 'Very Rare', 'Very Rare', 'Legendary']
    },
    {
      text: 'Legendary (lv 18+) - Trove Dice 5d6 - Coin Multiplier 5000',
      numberOfDiceTrove: 5,
      multiplier: 5000,
      rarity: ['Rare' , 'Very Rare', 'Very Rare', 'Legendary', 'Legendary', 'Legendary']
    },
  ]

  troveProfiles = [
    {
      text: 'Balanced Trove',
      array: ['Trade Good' , 'Trade Good', 'Gemstone', 'Gemstone', 'Art Object', 'Art Object']
    },
    {
      text: 'More Trade Goods',
      array: ['Trade Good' , 'Trade Good', 'Trade Good', 'Gemstone', 'Gemstone', 'Art Object']
    },
    {
      text: 'More Art Objects',
      array: ['Trade Good' , 'Gemstone', 'Gemstone', 'Art Object', 'Art Object', 'Art Object']
    },
    {
      text: 'No Trade Goods',
      array: ['Gemstone' , 'Gemstone', 'Gemstone', 'Art Object', 'Art Object', 'Art Object']
    },
    {
      text: 'No Art Objects',
      array: ['Trade Good' , 'Trade Good', 'Trade Good', 'Gemstone', 'Gemstone', 'Gemstone']
    },
  ]

  adventureTireSelected: any = this.adventureTiers[1];
  troveProfileSelected: any = this.troveProfiles[0];
  dicesForCoin = 2;
  dicesForItems = 1;

  coinValue = 0;
  numberOfItems = 0;
  diceForCoinArray: number[] = [];
  dicesResultForNumberOfItems: number[] = [];
  items: Item[] = [];

  constructor() {

  }

  ngOnInit(): void {
    
  }

  updateDices() {
    setTimeout(() => {
      if (this.dicesForItems > this.adventureTireSelected.numberOfDiceTrove) {
        this.dicesForItems = 0
      } 
      this.dicesForCoin = this.adventureTireSelected.numberOfDiceTrove - this.dicesForItems
    }, 100);
  }

  getResultOfNumberOfDices(numberOfDices: number, numberOfFaces: number) {
    const results = [];
    for (let index = 0; index < numberOfDices; index++) {
      results.push(this.rollADice(numberOfFaces))
    }
    return results;
  }

  rollADice(numberOfFace:number) {
    const max = numberOfFace;
    const min = 1
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getTotalFromArrayOfDices(array: number[]){
    let tot = 0;
    array.forEach( (x:number) => {
      tot += x;
    })
    return tot
  }

  startSimulation() {
    this.diceForCoinArray = this.getResultOfNumberOfDices(this.dicesForCoin, 6);
    this.coinValue = this.getTotalFromArrayOfDices(this.diceForCoinArray) * this.adventureTireSelected.multiplier;
    this.dicesResultForNumberOfItems = this.getResultOfNumberOfDices(this.dicesForItems, 6);
    this.numberOfItems = this.getTotalFromArrayOfDices(this.dicesResultForNumberOfItems)
    this.items = this.calculateItems(this.numberOfItems);
  }

  calculateItems(numberOfItems: number) {
    const items = [];
    for (let index = 0; index < numberOfItems; index++) {
      let quality = 'Standard';
      let qualityDice = this.rollADice(6);
      let qualityDice2;
      if (qualityDice === 1) { // has not normal quality
        qualityDice2 = this.rollADice(6);
        quality = qualityDice2 > 3 ? 'Superior' : 'Inferior'
      }
      const objClassDice = this.rollADice(6)
      let objClass = this.troveProfileSelected.array[objClassDice-1]
      const rarityDice = this.rollADice(6)
      let rarity = this.adventureTireSelected.rarity[rarityDice-1]
      items.push(new Item({
        rarity, quality, objClass, rarityDice, qualityDice, qualityDice2, objClassDice
      }))
    }

    items.sort((a: Item, b: Item) => (a.objClass < b.objClass ? -1 : 1));
    return items;
  }


}



export class Item {
  rarity: string;
  rarityDice: number;
  objClass: string;
  objClassDice: number;
  quality: boolean;
  qualityDice: number;
  qualityDice2: number;

  constructor(obj: any) {
    this.rarity = obj.rarity;
    this.objClass = obj.objClass;
    this.quality = obj.quality;
    this.rarityDice = obj.rarityDice;
    this.objClassDice = obj.objClassDice;
    this.qualityDice = obj.qualityDice;
    this.qualityDice2 = obj.qualityDice2;
  }
}