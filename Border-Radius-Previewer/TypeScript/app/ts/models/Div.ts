export class Div {

    private _borderTopRightRadius: string;
    private _borderTopLeftRadius: string;
    private _borderBottomLeftRadius: string;
    private _borderBottomRightRadius: string;
    private _textTopRightRadius: string = 'border-top-right-radius: ';
    private _textTopLeftRadius: string = 'border-top-left-radius: ';
    private _textBottomLeftRadius: string = 'border-bottom-left-radius: ';
    private _textBottomRightRadius: string = 'border-bottom-right-radius: ';

    get borderTopRightRadius():string{
        return this._borderTopRightRadius;
    }

    get borderTopLeftRadius():string{
        return this._borderTopLeftRadius;
    }

    get borderBottomLeftRadius():string{
        return this._borderBottomLeftRadius;
    }

    get borderBottomRightRadius(): string{
        return this._borderBottomRightRadius;
    }

    get textTopRightRadius(): string{
        return this._textTopRightRadius;
    }

    get textTopLeftRadius(): string{
        return this._textTopLeftRadius;
    }

    get textBottomRightRadius(): string{
        return this._textBottomRightRadius;
    }

    get textBottomLeftRadius(): string{
        return this._textBottomLeftRadius;
    }

    setBorderTopRightRadius(value: string): void{
        this._borderTopRightRadius = `${value}px`;
        if(value.length != 0){
            this._textTopRightRadius = `border-top-right-radius: ${this._borderTopRightRadius};`
        }
    }

    setBorderTopLeftRadius(value: string){
        this._borderTopLeftRadius = `${value}px`;
        if(value.length != 0){
            this._textTopLeftRadius = `border-top-left-radius: ${this._borderTopLeftRadius};`
        }
    }

    setBorderBottomLeftRightRadius(value: string){
        this._borderBottomLeftRadius = `${value}px`;
        if(value.length != 0){
            this._textBottomLeftRadius = `border-bottom-left-radius: ${this._borderBottomLeftRadius};`
        }
    }

    setBorderBottomRightRadius(value: string){
        this._borderBottomRightRadius = `${value}px`;
        if(value.length != 0){
            this._textBottomRightRadius = `border-bottom-right-radius: ${this._borderBottomRightRadius};`
        }
    }
}