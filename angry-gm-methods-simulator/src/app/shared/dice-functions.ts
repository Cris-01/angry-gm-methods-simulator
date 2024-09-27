export class DiceHelper {
    public static rollADice(numberOfFace:number) {
        const max = numberOfFace;
        const min = 1
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    public static getTotalFromArrayOfDices(array: number[]){
        let tot = 0;
        array.forEach( (x:number) => {
          tot += x;
        })
        return tot
    }
}