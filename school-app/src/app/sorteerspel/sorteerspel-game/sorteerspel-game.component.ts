import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SorteerOefening } from '../sorteer-oefening';
import { SorteerGame } from '../sorteer-game';

@Component({
  selector: 'app-sorteerspel-game',
  templateUrl: './sorteerspel-game.component.html',
  styleUrls: ['./sorteerspel-game.component.css']
})
export class SorteerspelGameComponent implements OnInit {

  @Input() sorteerGame: SorteerGame;
  @Output() gameCompleted = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
  addCorrecteOefening(event: SorteerOefening){
    this.sorteerGame.addCorrecteOefening(event);
  }
  addFouteOefening(event: SorteerOefening){
    this.sorteerGame.addFouteOefening(event);
  }
  gotoResult(event: any){
    this.gameCompleted.emit(true);
  }
  gotoResultEarly(event: number){
    for(let i = event+1; i<this.sorteerGame.getOefeningen().length; i++){
      this.sorteerGame.addFouteOefening(this.sorteerGame.getOefeningen()[i]);
    }
    this.gameCompleted.emit(true);
  }

}