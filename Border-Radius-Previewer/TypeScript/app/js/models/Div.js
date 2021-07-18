System.register([], function (exports_1, context_1) {
    "use strict";
    var Div;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Div = class Div {
                constructor() {
                    this._textTopRightRadius = 'border-top-right-radius: ';
                    this._textTopLeftRadius = 'border-top-left-radius: ';
                    this._textBottomLeftRadius = 'border-bottom-left-radius: ';
                    this._textBottomRightRadius = 'border-bottom-right-radius: ';
                }
                get borderTopRightRadius() {
                    return this._borderTopRightRadius;
                }
                get borderTopLeftRadius() {
                    return this._borderTopLeftRadius;
                }
                get borderBottomLeftRadius() {
                    return this._borderBottomLeftRadius;
                }
                get borderBottomRightRadius() {
                    return this._borderBottomRightRadius;
                }
                get textTopRightRadius() {
                    return this._textTopRightRadius;
                }
                get textTopLeftRadius() {
                    return this._textTopLeftRadius;
                }
                get textBottomRightRadius() {
                    return this._textBottomRightRadius;
                }
                get textBottomLeftRadius() {
                    return this._textBottomLeftRadius;
                }
                setBorderTopRightRadius(value) {
                    this._borderTopRightRadius = `${value}px`;
                    if (value.length != 0) {
                        this._textTopRightRadius = `border-top-right-radius: ${this._borderTopRightRadius};`;
                    }
                }
                setBorderTopLeftRadius(value) {
                    this._borderTopLeftRadius = `${value}px`;
                    if (value.length != 0) {
                        this._textTopLeftRadius = `border-top-left-radius: ${this._borderTopLeftRadius};`;
                    }
                }
                setBorderBottomLeftRightRadius(value) {
                    this._borderBottomLeftRadius = `${value}px`;
                    if (value.length != 0) {
                        this._textBottomLeftRadius = `border-bottom-left-radius: ${this._borderBottomLeftRadius};`;
                    }
                }
                setBorderBottomRightRadius(value) {
                    this._borderBottomRightRadius = `${value}px`;
                    if (value.length != 0) {
                        this._textBottomRightRadius = `border-bottom-right-radius: ${this._borderBottomRightRadius};`;
                    }
                }
            };
            exports_1("Div", Div);
        }
    };
});
