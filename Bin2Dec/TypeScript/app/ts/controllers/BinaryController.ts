import { Binary } from '../models/Binary' ;
import { BinaryView } from '../views/BinaryView';

export class BinaryController {

    private inputBinary: HTMLInputElement;

    constructor(){
        this.inputBinary = <HTMLInputElement> document.querySelector('#inputBinary');
    }

    convert(event: Event){
        event.preventDefault();

        const binary = new Binary(this.inputBinary.value);
        const view = new BinaryView();

        try {
            view.inputMessage(String(binary.convertToDecimal()));
            view.alert('');
        } catch(error){
            view.alert(error.message);
            view.inputMessage('');
        }

    }
}