System.register([], function (exports_1, context_1) {
    "use strict";
    var Binary;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Binary = class Binary {
                constructor(value) {
                    this.value = value;
                }
                convertToDecimal() {
                    this.onlyBinaryNumbers(this.value);
                    const valueSplited = this.value.split('').map(Number); //Convert a string to a Number
                    let d = this.value.length;
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
                onlyBinaryNumbers(value) {
                    if (value.match(/^[0-1]+$/) === null) {
                        throw Error('Please, insert only numbers 0 or 1');
                    }
                }
            };
            exports_1("Binary", Binary);
        }
    };
});
