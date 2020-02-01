import { Component, OnInit } from '@angular/core';
import { GdkdGame } from '../gdkd-game';

@Component({
  selector: 'app-gdkd-display',
  templateUrl: './gdkd-display.component.html',
  styleUrls: ['./gdkd-display.component.css']
})
export class GdkdDisplayComponent implements OnInit {

  startCompleted: Boolean = false;
  gdkdGame: GdkdGame;

  constructor() { }

  ngOnInit() {
    this.gdkdGame = new GdkdGame();
  }

  setStartCompleted(event: any){
    this.startCompleted = true;
  }

}
