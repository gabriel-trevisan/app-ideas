import { Div } from "../models/Div";
import { ElementView } from "../views/ElementView";
import { CopyToClipBoard } from "../helpers/CopytToClipBoard";

export class ElementController{

    private inputTopRight: HTMLInputElement = document.querySelector('#inputTopRight');
    private inputTopLeft: HTMLInputElement = document.querySelector('#inputTopLeft');
    private inputBottomRight: HTMLInputElement = document.querySelector('#inputBottomRight');
    private inputBottomLeft: HTMLInputElement = document.querySelector('#inputBottomLeft');
    private textArea: HTMLTextAreaElement = document.querySelector('textArea');

    update(){
        const element = new Div();
        element.setBorderTopRightRadius(this.inputTopRight.value); 
        element.setBorderTopLeftRadius(this.inputTopLeft.value); 
        element.setBorderBottomRightRadius(this.inputBottomRight.value) 
        element.setBorderBottomLeftRightRadius(this.inputBottomLeft.value)

        const view = new ElementView();
        view.renderDiv(element);
    }

    copy(){
        const helper = new CopyToClipBoard(this.textArea);
        const valueCopied = helper.copy();
        const view = new ElementView();
        view.alertCopied(valueCopied);
    }
}