import { SorteerWijze } from './sorteer-wijze.enum';

export class SorteerOefening {
    
    private _getallen: Array<number> = [];
    private _oplossing: Array<number> = [];
    private _sorteerwijze: SorteerWijze;

    constructor(getallen: Array<number>, oplossing: Array<number>, sorteerwijze: SorteerWijze){
        this._getallen = getallen;
        this._oplossing = oplossing;
        this._sorteerwijze = sorteerwijze;
    }
    public getGetallen(): Array<number>{
        return this._getallen;
    }
    public getOplossing(): Array<number>{
        return this._oplossing;
    }
    public getSorteerWijze(): SorteerWijze{
        return this._sorteerwijze;
    }
    toString(){
        return "Getallen: "+this._getallen+" - Oplossing: "+this._oplossing+" ("+this._sorteerwijze+")";
    }

}
