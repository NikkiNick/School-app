import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SplitsmolensStartComponent } from './splitsmolens-start/splitsmolens-start.component';
import { MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { SplitsmolensGameComponent } from './splitsmolens-game/splitsmolens-game.component';
import { SplitsmolensDisplayComponent } from './splitsmolens-display/splitsmolens-display.component';

const splitsmolensRoutes: Routes = [
  {
    path:'', 
    component: SplitsmolensDisplayComponent}];

@NgModule({
  declarations: [
    SplitsmolensStartComponent,
    SplitsmolensGameComponent,
    SplitsmolensDisplayComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(splitsmolensRoutes),
    MatFormFieldModule
  ]
})
export class SplitsmolensModule { }
