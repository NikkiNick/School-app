import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GdkdGame } from '../gdkd-game';

@Component({
  selector: 'app-gdkd-result',
  templateUrl: './gdkd-result.component.html',
  styleUrls: ['./gdkd-result.component.css']
})
export class GdkdResultComponent implements OnInit {

  @Input() gdkdGame: GdkdGame;
  @Output() resetGame = new EventEmitter<boolean>();
  @Output() startFoute = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  startNieuweOefening(){
      this.resetGame.emit(true);
  }
  startFouteOefeningen(){
    this.startFoute.emit(true);
  }

}
