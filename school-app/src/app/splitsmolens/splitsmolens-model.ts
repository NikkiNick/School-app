export class SplitsmolensModel {
    private _ondergrens: Number;
    private _bovengrens: Number;
    private _aantalPerNiveau: Number;

    getOndergrens(): Number{
        return this._ondergrens;
    }
    getBovengrens(): Number{
        return this._bovengrens;
    }
    getAantalPerNiveau(): Number{
        return this._aantalPerNiveau;
    }
    setOndergrens(grens: Number){
        this._ondergrens = grens;
    }
    setBovengrens(grens: Number){
        this._bovengrens = grens;
    }
    setAantalPerNiveau(aantal: Number){
        this._aantalPerNiveau = aantal;
    }
}
