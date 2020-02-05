import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { SorteerOefening } from '../sorteer-oefening';
import {DragDropModule, moveItemInArray, transferArrayItem, CdkDragDrop} from '@angular/cdk/drag-drop'; 

@Component({
  selector: 'app-sorteerspel-game-step',
  templateUrl: './sorteerspel-game-step.component.html',
  styleUrls: ['./sorteerspel-game-step.component.css']
})
export class SorteerspelGameStepComponent implements OnInit, OnChanges {
  @Input() oefening: SorteerOefening;
  @Input() isLaatsteOefening: boolean;
  @Output() correcteOefening = new EventEmitter<SorteerOefening>();
  @Output() fouteOefening = new EventEmitter<SorteerOefening>();
  @Output() gameCompleted = new EventEmitter<boolean>();
  @Output() gameStopped = new EventEmitter<any>();
  selected = [];
  opties = [];
  completed: boolean = false;
  resultCheck: boolean = false;
  result: boolean = null;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.oefening.previousValue !== changes.oefening.currentValue){
      if(changes.oefening.currentValue instanceof SorteerOefening){
        this.opties = changes.oefening.currentValue.getGetallen().concat();
      }
    }
  }
  private arraysIdentical(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};
  controleerOplossing(){
    this.result = this.arraysIdentical(this.selected, this.oefening.getOplossing());
    if(this.result){
        this.correcteOefening.emit(this.oefening);
    }else{
      this.fouteOefening.emit(this.oefening);
    }
    this.resultCheck = true;
  }
  gotoResult(){
    this.gameCompleted.emit(true);
  }
  gotoResultEarly(){
    this.gameStopped.emit();
  }
  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        if(this.selected.length === this.oefening.getOplossing().length){
          this.completed = true;
        }
    }
    
  }
}
