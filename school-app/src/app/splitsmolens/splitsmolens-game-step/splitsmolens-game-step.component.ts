import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Splitsmolen } from '../splitsmolen';

@Component({
  selector: 'app-splitsmolens-game-step',
  templateUrl: './splitsmolens-game-step.component.html',
  styleUrls: ['./splitsmolens-game-step.component.css']
})
export class SplitsmolensGameStepComponent implements OnInit {

  @Input() splitsmolen: Splitsmolen;
  @Input() index: number;
  @Input() totaal: number;
  @Output() gameCompleted = new EventEmitter<boolean>();
  @Output() gameStopped = new EventEmitter<number>();
  @Output() fouteSplitsmolen = new EventEmitter<Splitsmolen>();
  @Output() correcteSplitsmolen = new EventEmitter<Splitsmolen>();
  private selected: number = null;
  completed: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  selecteerOptie(optie: number){
    this.completed = true;
    this.selected = optie;
    if(optie !== this.splitsmolen.getOplossing()){
        this.fouteSplitsmolen.emit(this.splitsmolen);
    }else{
      this.correcteSplitsmolen.emit(this.splitsmolen);
    }
  }
  gotoResult(){
    this.gameCompleted.emit(true);
  }
  gotoResultEarly(){
    this.gameStopped.emit(this.index);
  }
}
