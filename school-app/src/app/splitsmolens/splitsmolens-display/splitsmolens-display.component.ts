import { Component, OnInit } from '@angular/core';
import { SplitsmolenGame } from '../splitsmolen-game';

@Component({
  selector: 'app-splitsmolens-display',
  templateUrl: './splitsmolens-display.component.html',
  styleUrls: ['./splitsmolens-display.component.css']
})
export class SplitsmolensDisplayComponent implements OnInit {

  public splitsmolenGame: SplitsmolenGame;
  private stepperCompleted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.splitsmolenGame = new SplitsmolenGame();
  }
  gotoNextStep(event: any){
      console.log("Going for next step");
      this.stepperCompleted = true;
      console.log("Level: "+this.splitsmolenGame.getCurrentSplitsmolen().getLevel());
  }

}
