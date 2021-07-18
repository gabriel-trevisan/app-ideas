System.register(["../models/Binary", "../views/BinaryView"], function (exports_1, context_1) {
    "use strict";
    var Binary_1, BinaryView_1, BinaryController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Binary_1_1) {
                Binary_1 = Binary_1_1;
            },
            function (BinaryView_1_1) {
                BinaryView_1 = BinaryView_1_1;
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
                    const view = new BinaryView_1.BinaryView();
                    try {
                        view.inputMessage(String(binary.convertToDecimal()));
                        view.alert('');
                    }
                    catch (error) {
                        view.alert(error.message);
                        view.inputMessage('');
                    }
                }
            };
            exports_1("BinaryController", BinaryController);
        }
    };
});
