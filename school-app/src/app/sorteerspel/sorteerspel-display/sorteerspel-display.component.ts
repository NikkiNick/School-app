import { Component, OnInit } from '@angular/core';
import { SorteerGame } from '../sorteer-game';

@Component({
  selector: 'app-sorteerspel-display',
  templateUrl: './sorteerspel-display.component.html',
  styleUrls: ['./sorteerspel-display.component.css']
})
export class SorteerspelDisplayComponent implements OnInit {

  startCompleted: Boolean = false;
  gameCompleted: Boolean = false;
  sorteerGame: SorteerGame;

  constructor() { }

  ngOnInit() {
    this.sorteerGame = new SorteerGame();
  }

  setStartCompleted(event: any){
    this.startCompleted = true;
  }
  setGameCompleted(event: any){
    this.gameCompleted = true;
  }

  resetGame(event: any){
    this.startCompleted = false;
    this.gameCompleted = false;
    this.sorteerGame = new SorteerGame();
  }
  startFouteOefeningen(event: any){
      this.sorteerGame.setFouteOefeningen();
      this.startCompleted = true;
      this.gameCompleted = false;
  }
}

