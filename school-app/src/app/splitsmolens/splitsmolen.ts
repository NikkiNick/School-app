export class Splitsmolen {
    private _level: number;
    private _opgave: number;
    private _oplossing: number;
    private _mogelijkheden: number[];

    constructor(level: number, opgave: number, oplossing: number){
        this._level = level;
        this._opgave = opgave;
        this._oplossing = oplossing;
        this._mogelijkheden = this.generateMogelijkheden();
    }
    public getLevel(): number{
        return this._level;
    }
    public getOpgave(): number{
        return this._opgave;
    }
    public getOplossing(): number{
        return this._oplossing;
    }
    public getMogelijkheden(): number[]{
        return this._mogelijkheden;
    }
    private generateMogelijkheden(): number[]{
        let mogelijkheden = [];
        for(let i = 0; i <= this._level; i++){
            mogelijkheden.push(i);
        }
        return mogelijkheden;
    }      
    toString(): String{
        return "("+this._level+" = "+this._opgave+" + "+this._oplossing+")";
    }     
}
