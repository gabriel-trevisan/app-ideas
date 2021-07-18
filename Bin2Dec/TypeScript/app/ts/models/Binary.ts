export class Binary {

    constructor(readonly value: string){}

    convertToDecimal(): number {
        this.onlyBinaryNumbers(this.value);

        const valueSplited: number[] = this.value.split('').map(Number); //Convert a string to a Number
        let d: number = this.value.length;

        const result = valueSplited.reduce((total, value) => {
            d--;
            return total += value * (Math.pow(2, d));
        }, 0);

        /*
            * Example: 10
            * Formula: (0 x (2^1)) + (1 x (2^0))
            * Result: 2
        */

        return result;
    }

    private onlyBinaryNumbers(value: string){

        if(value.match(/^[0-1]+$/) === null){
            throw Error('Please, insert only numbers 0 or 1');
        }

    }
}