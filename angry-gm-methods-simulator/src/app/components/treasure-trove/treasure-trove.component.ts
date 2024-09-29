import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { DiceHelper } from '../../shared/dice-functions';
import { Item } from '../../models/Item';

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

  tradeGoodValuation = [
    {
      rarity: 'Common',
      value: () => DiceHelper.rollADice(6),
      tightAppraisal: '2 gp - 5 gp',
      broadAppraisal: '1 gp - 6 gp'
    },
    {
      rarity: 'Uncommon',
      value: () => DiceHelper.rollADice(6) * 5,
      tightAppraisal: '10 gp - 25 gp',
      broadAppraisal: '5 gp - 30 gp'
    },
    {
      rarity: 'Rare',
      value: () => DiceHelper.rollADice(6) * 10,
      tightAppraisal: '20 gp - 50 gp',
      broadAppraisal: '10 gp - 60 gp'
    },
    {
      rarity: 'Very Rare',
      value: () => DiceHelper.rollADice(6) * 50,
      tightAppraisal: '100 gp - 250 gp',
      broadAppraisal: '50 gp - 300 gp'
    },
    {
      rarity: 'Legendary',
      value: () => DiceHelper.rollADice(6) * 100,
      tightAppraisal: '200 gp - 500 gp',
      broadAppraisal: '100 gp - 600 gp'
    },
  ]

  gemstoneValuation = [
    {
      rarity: 'Common',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 5,
      tightAppraisal: '25 gp - 45 gp',
      broadAppraisal: '10 gp - 60 gp'
    },
    {
      rarity: 'Uncommon',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 10,
      tightAppraisal: '50 gp - 90 gp',
      broadAppraisal: '20 gp - 120 gp'
    },
    {
      rarity: 'Rare',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 50,
      tightAppraisal: '250 gp - 450 gp',
      broadAppraisal: '100 gp - 600 gp'
    },
    {
      rarity: 'Very Rare',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 100,
      tightAppraisal: '500 gp - 900 gp',
      broadAppraisal: '200 gp - 1,200 gp'
    },
    {
      rarity: 'Legendary',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 500,
      tightAppraisal: '2,500 gp - 4,500 gp',
      broadAppraisal: '1,000 gp - 6,000 gp'
    },
  ]

  artObjectValuation = [
    {
      rarity: 'Common',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 10,
      tightAppraisal: '80 gp - 130 gp',
      broadAppraisal: '30 gp - 180 gp'
    },
    {
      rarity: 'Uncommon',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 50,
      tightAppraisal: '400 gp - 650 gp',
      broadAppraisal: '150 gp - 900 gp'
    },
    {
      rarity: 'Rare',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 100,
      tightAppraisal: '800 gp - 1,300 gp',
      broadAppraisal: '300 gp - 1,800 gp'
    },
    {
      rarity: 'Very Rare',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 500,
      tightAppraisal: '4,000 gp - 6,500 gp',
      broadAppraisal: '1,500 gp - 9,000 gp'
    },
    {
      rarity: 'Legendary',
      value: () => DiceHelper.getTotalFromArrayOfDices([DiceHelper.rollADice(6), DiceHelper.rollADice(6), DiceHelper.rollADice(6)]) * 1000,
      tightAppraisal: '8,000 gp - 13,000 gp',
      broadAppraisal: '3,000 gp - 18,000 gp'
    },
  ]

  diceLog = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.initSettings();
  }

  updateDices() {
    setTimeout(() => {
      if (this.dicesForItems > this.adventureTireSelected.numberOfDiceTrove) {
        this.dicesForItems = 0
      } 
      this.dicesForCoin = this.adventureTireSelected.numberOfDiceTrove - this.dicesForItems
      this.saveSettings();
    }, 100);
  }

  getResultOfNumberOfDices(numberOfDices: number, numberOfFaces: number) {
    const results = [];
    for (let index = 0; index < numberOfDices; index++) {
      results.push(DiceHelper.rollADice(numberOfFaces))
    }
    return results;
  }

  startSimulation() {
    this.diceForCoinArray = this.getResultOfNumberOfDices(this.dicesForCoin, 6);
    this.coinValue = DiceHelper.getTotalFromArrayOfDices(this.diceForCoinArray) * this.adventureTireSelected.multiplier;
    this.dicesResultForNumberOfItems = this.getResultOfNumberOfDices(this.dicesForItems, 6);
    this.numberOfItems = DiceHelper.getTotalFromArrayOfDices(this.dicesResultForNumberOfItems)
    this.items = this.calculateItems(this.numberOfItems);
    this.saveSettings();
  }

  saveSettings() {
    const settings = {
      diceLog: this.diceLog,
      adventureTireSelected: this.adventureTireSelected,
      troveProfileSelected: this.troveProfileSelected,
      dicesForCoin: this.dicesForCoin,
      dicesForItems: this.dicesForItems
    }
    this.localStorageService.setItem('treasure-trove-settings', JSON.stringify(settings));
  }

  initSettings() {
    const settingsAsString = this.localStorageService.getItem('treasure-trove-settings');
    if (settingsAsString) {
      const settings = JSON.parse(settingsAsString)
      console.log('settings', settings)
      this.diceLog = settings.diceLog;
      this.adventureTireSelected = this.adventureTiers.find(x => x.text === settings.adventureTireSelected.text)
      this.troveProfileSelected = this.troveProfiles.find(x => x.text === settings.troveProfileSelected.text)
      this.dicesForCoin = settings.dicesForCoin;
      this.dicesForItems = settings.dicesForItems
    }
  }

  calculateItems(numberOfItems: number) {
    const items = [];
    for (let index = 0; index < numberOfItems; index++) {
      let quality = 'Standard';
      let qualityDice = DiceHelper.rollADice(6);
      let qualityDice2;
      if (qualityDice === 1) { // has not normal quality
        qualityDice2 = DiceHelper.rollADice(6);
        quality = qualityDice2 > 3 ? 'Superior' : 'Inferior'
      }
      const objClassDice = DiceHelper.rollADice(6)
      let objClass = this.troveProfileSelected.array[objClassDice-1]
      const rarityDice = DiceHelper.rollADice(6)
      let rarity = this.adventureTireSelected.rarity[rarityDice-1]

      let valuation = this.getValuationOfItem(objClass, rarity, quality);

      items.push(new Item({
        rarity, quality, objClass, rarityDice, 
        qualityDice, qualityDice2, objClassDice,
        value: valuation.value,
        broadAppraisal: valuation.broadAppraisal,
        tightAppraisal: valuation.tightAppraisal,
        valueWithQuality: valuation.valueWithQuality,
      }))
    }

    items.sort((a: Item, b: Item) => (a.objClass < b.objClass ? -1 : 1));
    return items;
  }

  getValuationOfItem(cls:string, rarity: string, quality: string) {
    if (cls.includes('Trade Good')) {
      const obj = this.tradeGoodValuation.find( x => x.rarity === rarity)
      if (obj) {
        return this.assignValuationData(obj, quality);
      }
    }
    if (cls === 'Gemstone') {
      const obj = this.gemstoneValuation.find( x => x.rarity === rarity)
      if (obj) {
        return this.assignValuationData(obj, quality);
      }
    }
    if (cls === 'Art Object') {
      const obj = this.artObjectValuation.find( x => x.rarity === rarity)
      if (obj) {
        return this.assignValuationData(obj, quality);
      }
    }
    return {
      broadAppraisal: '',
      tightAppraisal: '',
      value: 1,
      valueWithQuality: 1,
    };
  }

  assignValuationData(obj: any, quality: string) {
    let result = {
      broadAppraisal: '',
      tightAppraisal: '',
      value: 1,
      valueWithQuality: 1,
    };
    result.broadAppraisal = obj.broadAppraisal
    result.tightAppraisal = obj.tightAppraisal
    result.value = obj.value()
    result.valueWithQuality = 0
    if (quality.includes('Superior')) {
      result.valueWithQuality = result.value * 2
    }
    if (quality.includes('Inferior')) {
      result.valueWithQuality = result.value / 2
    }
    return result
  }


}
