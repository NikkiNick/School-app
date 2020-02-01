export class GdkdGame {

    private _gebruiker: string;
    private _ondergrens: number;
    private _bovengrens: number;
    private _aantal: number;

    constructor(){
    }
    public setGebruiker(naam: string){
        this._gebruiker = naam;
    }
    public setOndergrens(ondergrens: number){
        this._ondergrens = ondergrens;
    }
    public setBovengrens(bovengrens: number){
        this._bovengrens = bovengrens;
    }
    public setAantal(aantal: number){
        this._aantal = aantal;
    }
    public getGebruiker(): string{
        return this._gebruiker;
    }   
    public getOndergrens(): number{
        return this._ondergrens;
    }
    public getBovengrens(): number{
        return this._bovengrens;
    }
    public getAantal(): number{
        return this._aantal;
    }
}
