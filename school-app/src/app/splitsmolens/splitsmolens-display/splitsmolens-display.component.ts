import { Component, OnInit } from '@angular/core';
import { SplitsmolenGame } from '../splitsmolen-game';

@Component({
  selector: 'app-splitsmolens-display',
  templateUrl: './splitsmolens-display.component.html',
  styleUrls: ['./splitsmolens-display.component.css']
})
export class SplitsmolensDisplayComponent implements OnInit {

  public splitsmolenGame: SplitsmolenGame;
  public startCompleted: boolean = false;
  public gameCompleted: boolean = false;

  constructor() { }

  ngOnInit() {
      this.splitsmolenGame = new SplitsmolenGame();
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
    this.splitsmolenGame = new SplitsmolenGame();
  }
  startFouteSplitsmolens(event: any){
      this.startCompleted = true;
      this.gameCompleted = false;
      this.splitsmolenGame.setFouteSplitsmolens();
  }
}
