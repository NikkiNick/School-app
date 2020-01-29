import { Component, OnInit } from '@angular/core';
import { SplitsmolensModel } from '../splitsmolens-model';

@Component({
  selector: 'app-splitsmolens-display',
  templateUrl: './splitsmolens-display.component.html',
  styleUrls: ['./splitsmolens-display.component.css']
})
export class SplitsmolensDisplayComponent implements OnInit {

  public splitsmolens: SplitsmolensModel;
  private stepperCompleted: boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.splitsmolens = new SplitsmolensModel();
  }
  gotoNextStep(event: any){
    this.stepperCompleted = event;
  }

}
