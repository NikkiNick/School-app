import { SorteerOefening } from './sorteer-oefening';
import {SorteerWijze} from './sorteer-wijze.enum';

export class SorteerGame {

    private _gebruiker: string;
    private _ondergrens: number;
    private _bovengrens: number;
    private _aantalOefeningen: number;
    private _aantalGetallenPerOefening: number;
    private _sorteerWijze: SorteerWijze;
    private _oefeningen: Array<SorteerOefening> = []
    private _fouteOefeningen: Array<SorteerOefening> = [];
    private _correcteOefeningen: Array<SorteerOefening> = [];

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
    public setAantalOefeningen(aantal: number){
        this._aantalOefeningen = aantal;
    }
    public setAantalGetallenPerOefening(aantal: number){
        this._aantalGetallenPerOefening = aantal;
    }
    public setFouteOefeningen(){
        this._oefeningen = this._fouteOefeningen;
        this._fouteOefeningen = [];
        this._correcteOefeningen = [];
    }
    public setSorteerWijze(wijze: SorteerWijze){
        this._sorteerWijze = wijze;
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
    public getAantalOefeningen(): number{
        return this._aantalOefeningen;
    }
    public getAantalPerOefening(): number{
        return this._aantalGetallenPerOefening;
    }
    public getOefeningen(): Array<SorteerOefening>{
        return this._oefeningen;
    }
    public getSorteerWijze(): SorteerWijze{
        return this._sorteerWijze;
    }
    public getFouteOefeningen(): Array<SorteerOefening>{
        return this._fouteOefeningen;
    }
    public getCorrecteOefeningen(): Array<SorteerOefening>{
        return this._correcteOefeningen;
    }
    public getResultString(){
        return this._correcteOefeningen.length+"/"+this._oefeningen.length;
    }
    public generateOefeningen(){
        for(let i = 0; i < this._aantalOefeningen; i++){
            let getallen = [];
            for(let j =0; j < this._aantalGetallenPerOefening; j++){
                
                let randomGetal = null;
                while(randomGetal === null || getallen.indexOf(randomGetal) != -1){
                    randomGetal = Math.floor((Math.random()*(this._bovengrens-this._ondergrens+1))+this._ondergrens);
                }
                getallen.push(randomGetal);
            }
            let getallenDummy = getallen.concat().sort();
            let oplossing, oefening;
            switch(this._sorteerWijze){
                case SorteerWijze.DALEND:
                    oplossing = getallenDummy.sort((a,b) => b-a);
                    oefening = new SorteerOefening(getallen, oplossing, SorteerWijze.DALEND);
                    break;
                case SorteerWijze.STIJGEND:
                    oplossing = getallenDummy.sort((a,b) => a-b);
                    oefening = new SorteerOefening(getallen, oplossing, SorteerWijze.STIJGEND);
                    break;
                case SorteerWijze.RANDOM:
                    let random = Math.floor(Math.random()*2)+1;
                    if(random === 1){
                        oplossing = getallenDummy.sort((a,b) => b-a);
                        oefening = new SorteerOefening(getallen, oplossing, SorteerWijze.DALEND);
                    }
                    else{
                        oplossing = getallenDummy.sort((a,b) => a-b);
                        oefening = new SorteerOefening(getallen, oplossing, SorteerWijze.STIJGEND);
                    }
                    break;
            }
            this._oefeningen.push(oefening);
        }
        
    }
    public addCorrecteOefening(oefening: SorteerOefening){
        this._correcteOefeningen.push(oefening);
    }
    public addFouteOefening(oefening: SorteerOefening){
        this._fouteOefeningen.push(oefening);
    }
}