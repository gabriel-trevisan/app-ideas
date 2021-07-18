import { Div } from "../models/Div";

export class ElementView{

    private elementView: HTMLDivElement = document.querySelector("#element");
    private textArea: HTMLTextAreaElement = document.querySelector("textarea");
    private elementController: Div;

    renderDiv(element: Div){
        this.elementController = element;
        const div = this.elementView;

        div.style.borderTopRightRadius = this.elementController.borderTopRightRadius
        div.style.borderTopLeftRadius = this.elementController.borderTopLeftRadius
        div.style.borderBottomLeftRadius = this.elementController.borderBottomLeftRadius
        div.style.borderBottomRightRadius = this.elementController.borderBottomRightRadius

        this.renderTextArea();
    }
    
    alertCopied(valueCopied: string){
        alert(`Copied the text: ${valueCopied}`);
    }

    private renderTextArea(){
        this.textArea.innerHTML = '';
        this.textArea.innerHTML += `${this.elementController.textTopRightRadius} &#10;`
        this.textArea.innerHTML += `${this.elementController.textTopLeftRadius} &#10;`
        this.textArea.innerHTML += `${this.elementController.textBottomLeftRadius} &#10;`
        this.textArea.innerHTML += `${this.elementController.textBottomRightRadius} &#10;`
    }
}