export class BinaryView {

    private inputResult: HTMLInputElement;
    private divAlert: HTMLElement;

    constructor(){
        this.inputResult = <HTMLInputElement> document.querySelector('#inputResult');
        this.divAlert = <HTMLElement> document.querySelector('.divAlert');
    }

    alert(message: string){
        this.divAlert.innerHTML = message;
    }

    inputMessage(result: string){
        this.inputResult.value = result;
    }
}