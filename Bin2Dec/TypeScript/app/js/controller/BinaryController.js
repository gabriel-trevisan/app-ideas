System.register(["../models/Binary"], function (exports_1, context_1) {
    "use strict";
    var Binary_1, BinaryController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Binary_1_1) {
                Binary_1 = Binary_1_1;
            }
        ],
        execute: function () {
            BinaryController = class BinaryController {
                constructor() {
                    this.inputBinary = document.querySelector('#inputBinary');
                }
                convert(event) {
                    event.preventDefault();
                    const binary = new Binary_1.Binary(this.inputBinary.value);
                    try {
                        console.log(binary.convertToDecimal());
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                }
            };
            exports_1("BinaryController", BinaryController);
        }
    };
});
