System.register(["./controllers/BinaryController"], function (exports_1, context_1) {
    "use strict";
    var BinaryController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BinaryController_1_1) {
                BinaryController_1 = BinaryController_1_1;
            }
        ],
        execute: function () {
            controller = new BinaryController_1.BinaryController();
            document.querySelector('#formBinary').addEventListener("submit", controller.convert.bind(controller));
        }
    };
});
