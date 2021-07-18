System.register([], function (exports_1, context_1) {
    "use strict";
    var Div;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Div = class Div {
                constructor(borderTopRightRadius, borderTopLeftRadius, borderBottomLeftRadius, borderBottomRightRadius) {
                    this.width = 100;
                    this.heigth = 100;
                    this._borderTopRightRadius = borderTopRightRadius;
                    this._borderTopLeftRadius = borderTopLeftRadius;
                    this._borderBottomLeftRadius = borderBottomLeftRadius;
                    this._borderBottomRightRadius = borderBottomRightRadius;
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
                setBorderTopRightRadius(value) {
                    this._borderTopRightRadius = value;
                }
                setBorderTopLeftRadius(value) {
                    this._borderTopLeftRadius = value;
                }
                setBorderBottomLeftRightRadius(value) {
                    this._borderBottomLeftRadius = value;
                }
                setBorderBottomRightRadius(value) {
                    this._borderBottomRightRadius = value;
                }
            };
            exports_1("Div", Div);
        }
    };
});
