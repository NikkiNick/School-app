export class GdkdOefening {
    private _getal1: number;
    private _oplossing: string;
    private _getal2: number;

    constructor(getal1: number, oplossing: string, getal2){
        this._getal1 = getal1;
        this._oplossing = oplossing;
        this._getal2 = getal2;
    }
    public getGetal1(): number{
        return this._getal1;
    }
    public getOplossing(): string{
        return this._oplossing;
    }
    public getGetal2(): number{
        return this._getal2;
    }
}
