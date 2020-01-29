import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SplitsmolenGame } from '../splitsmolen-game';
import { Splitsmolen } from '../splitsmolen';

@Component({
  selector: 'app-splitsmolens-game',
  templateUrl: './splitsmolens-game.component.html',
  styleUrls: ['./splitsmolens-game.component.css']
})
export class SplitsmolensGameComponent implements OnInit {

  @Input() splitsmolenGame: SplitsmolenGame;
  @Output() gameCompleted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }
  gotoResult(event: any){
    this.gameCompleted.emit(true);
  }
  gotoResultEarly(event: number){
    for(let i = event+1; i<this.splitsmolenGame.getSplitsmolens().length; i++){
      this.splitsmolenGame.addFouteSplitsmolen(this.splitsmolenGame.getSplitsmolens()[i]);
    }
    this.gameCompleted.emit(true);
  }
  addFouteSplitsmolen(event: Splitsmolen){
    this.splitsmolenGame.addFouteSplitsmolen(event);
  }
  addCorrecteSplitsmolen(event: Splitsmolen){
    this.splitsmolenGame.addCorrecteSplitsmolen(event);
  }
}
