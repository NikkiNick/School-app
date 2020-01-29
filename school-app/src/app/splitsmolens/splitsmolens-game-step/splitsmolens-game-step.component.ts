import { Component, OnInit, Input } from '@angular/core';
import { Splitsmolen } from '../splitsmolen';

@Component({
  selector: 'app-splitsmolens-game-step',
  templateUrl: './splitsmolens-game-step.component.html',
  styleUrls: ['./splitsmolens-game-step.component.css']
})
export class SplitsmolensGameStepComponent implements OnInit {

  @Input() splitsmolen: Splitsmolen;
  private selected: number = null;
  completed: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  selecteerOptie(optie: number){
    this.completed = true;
    this.selected = optie;
    console.log(optie+" selecterd");
  }
}
