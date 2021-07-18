System.register([], function (exports_1, context_1) {
    "use strict";
    var ElementView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ElementView = class ElementView {
                constructor() {
                    this.elementView = document.querySelector("#element");
                    this.textArea = document.querySelector("textarea");
                }
                renderDiv(element) {
                    this.elementController = element;
                    const div = this.elementView;
                    div.style.borderTopRightRadius = this.elementController.borderTopRightRadius;
                    div.style.borderTopLeftRadius = this.elementController.borderTopLeftRadius;
                    div.style.borderBottomLeftRadius = this.elementController.borderBottomLeftRadius;
                    div.style.borderBottomRightRadius = this.elementController.borderBottomRightRadius;
                    this.renderTextArea();
                }
                alertCopied(valueCopied) {
                    alert(`Copied the text: ${valueCopied}`);
                }
                renderTextArea() {
                    this.textArea.innerHTML = '';
                    this.textArea.innerHTML += `${this.elementController.textTopRightRadius} &#10;`;
                    this.textArea.innerHTML += `${this.elementController.textTopLeftRadius} &#10;`;
                    this.textArea.innerHTML += `${this.elementController.textBottomLeftRadius} &#10;`;
                    this.textArea.innerHTML += `${this.elementController.textBottomRightRadius} &#10;`;
                }
            };
            exports_1("ElementView", ElementView);
        }
    };
});
