System.register([], function (exports_1, context_1) {
    "use strict";
    var CopyToClipBoard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CopyToClipBoard = class CopyToClipBoard {
                constructor(input) {
                    this.input = input;
                }
                copy() {
                    this.input.select();
                    this.input.setSelectionRange(0, 99999);
                    document.execCommand("copy");
                    return this.input.value;
                }
            };
            exports_1("CopyToClipBoard", CopyToClipBoard);
        }
    };
});
