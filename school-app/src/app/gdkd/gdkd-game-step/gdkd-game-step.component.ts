import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GdkdOefening } from '../gdkd-oefening';

@Component({
  selector: 'app-gdkd-game-step',
  templateUrl: './gdkd-game-step.component.html',
  styleUrls: ['./gdkd-game-step.component.css']
})
export class GdkdGameStepComponent implements OnInit {

  @Input() oefening: GdkdOefening;
  @Input() isLaatsteOefening: boolean;
  @Output() correcteOefening = new EventEmitter<GdkdOefening>();
  @Output() fouteOefening = new EventEmitter<GdkdOefening>();
  @Output() gameCompleted = new EventEmitter<boolean>();
  @Output() gameStopped = new EventEmitter<any>();
  selected: string = null;
  completed: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  selecteerOptie(optie: string){
    this.completed = true;
    this.selected = optie;
    if(this.selected === this.oefening.getOplossing()){
      this.correcteOefening.emit(this.oefening);
    }
    if(this.selected !== this.oefening.getOplossing()){
      this.fouteOefening.emit(this.oefening);
    }
  }
  gotoResult(){
    this.gameCompleted.emit(true);
  }
  gotoResultEarly(){
    this.gameStopped.emit();
  }
}
