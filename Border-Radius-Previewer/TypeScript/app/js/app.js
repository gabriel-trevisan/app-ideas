System.register(["./controllers/ElementController"], function (exports_1, context_1) {
    "use strict";
    var ElementController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ElementController_1_1) {
                ElementController_1 = ElementController_1_1;
            }
        ],
        execute: function () {
            controller = new ElementController_1.ElementController();
            document.querySelector('#inputTopRight').addEventListener("input", controller.update.bind(controller));
            document.querySelector('#inputTopLeft').addEventListener("input", controller.update.bind(controller));
            document.querySelector('#inputBottomRight').addEventListener("input", controller.update.bind(controller));
            document.querySelector('#inputBottomLeft').addEventListener("input", controller.update.bind(controller));
            document.querySelector('button').addEventListener("click", controller.copy.bind(controller));
        }
    };
});
