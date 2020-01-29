import { Splitsmolen } from './splitsmolen';

export class SplitsmolenGame {
    private _gebruiker: String;
    private _ondergrens: number;
    private _bovengrens: number;
    private _aantalPerNiveau: number;
    private _splitsmolens: Array<Splitsmolen> =  [];
    private _currentSplitsmolenIndex = 0;
    private _currentSplitsmolen: Splitsmolen = null;

    constructor(){
    }
    public getGebruiker(): String{
        return this._gebruiker;
    }
    public getOndergrens(): number{
        return this._ondergrens;
    }
    public getBovengrens(): number{
        return this._bovengrens;
    }
    public getAantalPerNiveau(): number{
        return this._aantalPerNiveau;
    }
    public getSplitsmolens(){
        return this._splitsmolens;
    }
    public getCurrentSplitsmolen(): Splitsmolen{
        return this._currentSplitsmolen;
    }
    public setGebruiker(naam: String){
        this._gebruiker = naam;
    }
    public setOndergrens(ondergrens: number){
        this._ondergrens = ondergrens;
    }
    public setBovengrens(bovengrens: number){
        this._bovengrens = bovengrens;
    }
    public setAantalPerNiveau(aantal: number){
        this._aantalPerNiveau = aantal;
    }
    setNextSplitsmolen(){
        this._currentSplitsmolen = this._splitsmolens[this._currentSplitsmolenIndex];
        this._currentSplitsmolenIndex++;
    }
    public shuffleSplitsmolens(){
        for (var i = this._splitsmolens.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this._splitsmolens[i];
            this._splitsmolens[i] = this._splitsmolens[j];
            this._splitsmolens[j] = temp;
        }
    }
    public generateSplitsmolens(){
        let splitsmolensTotaal = [];
        // Elk level overlopen; bv 2 -3 - 4 - 5
        for(let i =  this._ondergrens; i <= this._bovengrens; i++){
          var splitsmolensLevel = []
            // Per level alle eenheden van 0 tot level overlopen
            for(let j = 0; j <= i; j++){
                let splitsmolen: Splitsmolen = new Splitsmolen(i, j, (i-j));
                splitsmolensLevel.push(splitsmolen);
            }
            
            var usedIndexes = [];
            while(usedIndexes.length < this._aantalPerNiveau){
                var randomNumber = Math.floor(Math.random()*splitsmolensLevel.length);
                if(usedIndexes.indexOf(randomNumber) === -1){
                usedIndexes.push(randomNumber);
                }
            }

            usedIndexes.forEach(index => {
                splitsmolensTotaal.push(splitsmolensLevel[index]);
            });
            
          
        }
        this._splitsmolens = splitsmolensTotaal;
        this.setNextSplitsmolen();
      }
}
