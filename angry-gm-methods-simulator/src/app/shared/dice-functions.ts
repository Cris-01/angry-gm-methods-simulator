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

    public static generateRangeArray(size: number, start: number = 1) {
        return [...Array(size).keys()].map(i => i + start)
    }

    public static generateRangeArrayFromStartToEnd(start: number, end: number) {
        const size = end + 1 - start;
        return this.generateRangeArray(size, start)
    }
}