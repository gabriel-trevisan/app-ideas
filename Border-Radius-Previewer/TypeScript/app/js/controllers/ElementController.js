System.register(["../models/Div", "../views/ElementView", "../helpers/CopytToClipBoard"], function (exports_1, context_1) {
    "use strict";
    var Div_1, ElementView_1, CopytToClipBoard_1, ElementController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Div_1_1) {
                Div_1 = Div_1_1;
            },
            function (ElementView_1_1) {
                ElementView_1 = ElementView_1_1;
            },
            function (CopytToClipBoard_1_1) {
                CopytToClipBoard_1 = CopytToClipBoard_1_1;
            }
        ],
        execute: function () {
            ElementController = class ElementController {
                constructor() {
                    this.inputTopRight = document.querySelector('#inputTopRight');
                    this.inputTopLeft = document.querySelector('#inputTopLeft');
                    this.inputBottomRight = document.querySelector('#inputBottomRight');
                    this.inputBottomLeft = document.querySelector('#inputBottomLeft');
                    this.textArea = document.querySelector('textArea');
                }
                update() {
                    const element = new Div_1.Div();
                    element.setBorderTopRightRadius(this.inputTopRight.value);
                    element.setBorderTopLeftRadius(this.inputTopLeft.value);
                    element.setBorderBottomRightRadius(this.inputBottomRight.value);
                    element.setBorderBottomLeftRightRadius(this.inputBottomLeft.value);
                    const view = new ElementView_1.ElementView();
                    view.renderDiv(element);
                }
                copy() {
                    const helper = new CopytToClipBoard_1.CopyToClipBoard(this.textArea);
                    const valueCopied = helper.copy();
                    const view = new ElementView_1.ElementView();
                    view.alertCopied(valueCopied);
                }
            };
            exports_1("ElementController", ElementController);
        }
    };
});
