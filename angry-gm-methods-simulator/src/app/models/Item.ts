export class Item {
    rarity: string;
    rarityDice: number;
    objClass: string;
    objClassDice: number;
    quality: string;
    qualityDice: number;
    qualityDice2: number;
    value: number;
    valueWithQuality: number;
    valueDices: number[];
    valueMultiplier: number;
    tightAppraisal: string;
    broadAppraisal: string;
  
    constructor(obj: any) {
      this.rarity = obj.rarity;
      this.objClass = obj.objClass;
      this.quality = obj.quality;
      this.rarityDice = obj.rarityDice;
      this.objClassDice = obj.objClassDice;
      this.qualityDice = obj.qualityDice;
      this.qualityDice2 = obj.qualityDice2;
      this.value = obj.value;
      this.valueWithQuality = obj.valueWithQuality;
      this.valueDices = obj.valueDices;
      this.valueMultiplier = obj.valueMultiplier;
      this.tightAppraisal = obj.tightAppraisal;
      this.broadAppraisal = obj.broadAppraisal;
    }
  }