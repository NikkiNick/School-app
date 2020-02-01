import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GdkdGame } from '../gdkd-game';
import { GdkdOefening } from '../gdkd-oefening';

@Component({
  selector: 'app-gdkd-game',
  templateUrl: './gdkd-game.component.html',
  styleUrls: ['./gdkd-game.component.css']
})
export class GdkdGameComponent implements OnInit {

  @Input() gdkdGame: GdkdGame;
  @Output() gameCompleted = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
  addCorrecteOefening(event: GdkdOefening){
    this.gdkdGame.addCorrecteOefening(event);
  }
  addFouteOefening(event: GdkdOefening){
    this.gdkdGame.addFouteOefening(event);
  }
  gotoResult(event: any){
    this.gameCompleted.emit(true);
  }
  gotoResultEarly(event: number){
    for(let i = event+1; i<this.gdkdGame.getOefeningen().length; i++){
      this.gdkdGame.addFouteOefening(this.gdkdGame.getOefeningen()[i]);
    }
    this.gameCompleted.emit(true);
  }

}
