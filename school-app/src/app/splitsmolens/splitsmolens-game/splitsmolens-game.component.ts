import { Component, OnInit, Input } from '@angular/core';
import { SplitsmolenGame } from '../splitsmolen-game';
import { Splitsmolen } from '../splitsmolen';

@Component({
  selector: 'app-splitsmolens-game',
  templateUrl: './splitsmolens-game.component.html',
  styleUrls: ['./splitsmolens-game.component.css']
})
export class SplitsmolensGameComponent implements OnInit {

  @Input() splitsmolenGame: SplitsmolenGame;

  constructor() { }

  ngOnInit() {

  }

}
