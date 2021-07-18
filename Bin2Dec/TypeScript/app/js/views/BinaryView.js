System.register([], function (exports_1, context_1) {
    "use strict";
    var BinaryView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BinaryView = class BinaryView {
                constructor() {
                    this.inputResult = document.querySelector('#inputResult');
                    this.divAlert = document.querySelector('.divAlert');
                }
                alert(message) {
                    this.divAlert.innerHTML = message;
                }
                inputMessage(result) {
                    this.inputResult.value = result;
                }
            };
            exports_1("BinaryView", BinaryView);
        }
    };
});
