import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SplitsmolensStartComponent } from './splitsmolens-start/splitsmolens-start.component';
import { MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { SplitsmolensGameComponent } from './splitsmolens-game/splitsmolens-game.component';
import { SplitsmolensDisplayComponent } from './splitsmolens-display/splitsmolens-display.component';
import { SplitsmolensGameStepComponent } from './splitsmolens-game-step/splitsmolens-game-step.component';
import { SplitsmolensResultComponent } from './splitsmolens-result/splitsmolens-result.component';

const splitsmolensRoutes: Routes = [
  {
    path:'', 
    component: SplitsmolensDisplayComponent
  }
];

@NgModule({
  declarations: [
    SplitsmolensStartComponent,
    SplitsmolensGameComponent,
    SplitsmolensDisplayComponent,
    SplitsmolensGameStepComponent,
    SplitsmolensResultComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(splitsmolensRoutes),
  ]
})
export class SplitsmolensModule { }
