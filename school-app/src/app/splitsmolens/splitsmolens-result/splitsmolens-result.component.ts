import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SplitsmolenGame } from '../splitsmolen-game';

@Component({
  selector: 'app-splitsmolens-result',
  templateUrl: './splitsmolens-result.component.html',
  styleUrls: ['./splitsmolens-result.component.css']
})
export class SplitsmolensResultComponent implements OnInit {

  @Input() splitsmolenGame: SplitsmolenGame;
  @Output() resetGame = new EventEmitter<boolean>();
  @Output() startFoute = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  startNieuweOefening(){
      this.resetGame.emit(true);
  }
  startFouteSplitsmolens(){
    this.startFoute.emit(true);
  }
}
