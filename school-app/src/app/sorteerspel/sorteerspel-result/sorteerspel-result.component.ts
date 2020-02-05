import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SorteerGame } from '../sorteer-game';

@Component({
  selector: 'app-sorteerspel-result',
  templateUrl: './sorteerspel-result.component.html',
  styleUrls: ['./sorteerspel-result.component.css']
})
export class SorteerspelResultComponent implements OnInit {

  @Input() sorteerGame: SorteerGame;
  @Output() resetGame = new EventEmitter<boolean>();
  @Output() startFoute = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  startNieuweOefening(){
      this.resetGame.emit(true);
  }
  startFouteOefeningen(){
    this.startFoute.emit(true);
  }
}
