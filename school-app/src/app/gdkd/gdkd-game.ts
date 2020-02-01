import { GdkdOefening } from './gdkd-oefening';

export class GdkdGame {

    private _gebruiker: string;
    private _ondergrens: number;
    private _bovengrens: number;
    private _aantal: number;
    private _oefeningen: Array<GdkdOefening> = []
    private _fouteOefeningen: Array<GdkdOefening> = [];
    private _correcteOefeningen: Array<GdkdOefening> = [];

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
    public getOefeningen(): Array<GdkdOefening>{
        return this._oefeningen;
    }
    public getFouteOefeningen(): Array<GdkdOefening>{
        return this._fouteOefeningen;
    }
    public getCorrecteOefeningen(): Array<GdkdOefening>{
        return this._correcteOefeningen;
    }
    public getResultString(){
        return this._correcteOefeningen.length+"/"+this._oefeningen.length;
    }
    public generateOefeningen(){
        for(let i = 0; i < this._aantal; i++){
            let random1 = Math.floor((Math.random()*this._bovengrens)+this._ondergrens);
            let random2 = Math.floor((Math.random()*this._bovengrens)+this._ondergrens);
            let oplossing;
            if(random1 === random2){
                oplossing = "=";
            }
            else if(random1 < random2){
                oplossing = "<";
            }
            else if(random1 > random2){
                oplossing = ">";
            }
            let oefening = new GdkdOefening(random1, oplossing, random2);
            this._oefeningen.push(oefening);
        }
        
    }
    public addCorrecteOefening(oefening: GdkdOefening){
        this._correcteOefeningen.push(oefening);
    }
    public addFouteOefening(oefening: GdkdOefening){
        this._fouteOefeningen.push(oefening);
    }
}
