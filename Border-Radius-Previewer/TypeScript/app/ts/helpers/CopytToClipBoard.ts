export class CopyToClipBoard{
    private input: HTMLTextAreaElement;
    
    constructor(input: HTMLTextAreaElement){
        this.input = input;
    }

    copy(): string{
        this.input.select();
        this.input.setSelectionRange(0, 99999);

        document.execCommand("copy");
        return this.input.value;
    }
}