import { Component, OnInit, Input } from '@angular/core';
import { GdkdGame } from '../gdkd-game';
import { GdkdOefening } from '../gdkd-oefening';

@Component({
  selector: 'app-gdkd-game',
  templateUrl: './gdkd-game.component.html',
  styleUrls: ['./gdkd-game.component.css']
})
export class GdkdGameComponent implements OnInit {

  @Input() gdkdGame: GdkdGame;
  
  constructor() { }

  ngOnInit() {
  }
  addCorrecteOefening(event: GdkdOefening){
    this.gdkdGame.addCorrecteOefening(event);
  }
  addFouteOefening(event: GdkdOefening){
    this.gdkdGame.addFouteOefening(event);
  }

}
