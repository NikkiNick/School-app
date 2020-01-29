import { Component, OnInit, Input } from '@angular/core';
import { SplitsmolensModel } from '../splitsmolens-model';

@Component({
  selector: 'app-splitsmolens-game',
  templateUrl: './splitsmolens-game.component.html',
  styleUrls: ['./splitsmolens-game.component.css']
})
export class SplitsmolensGameComponent implements OnInit {

  @Input() splitsmolens: SplitsmolensModel;
  
  constructor() { }

  ngOnInit() {
  }

}
