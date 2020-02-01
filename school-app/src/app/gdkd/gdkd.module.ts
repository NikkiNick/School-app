import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdkdDisplayComponent } from './gdkd-display/gdkd-display.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { GdkdStartComponent } from './gdkd-start/gdkd-start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GdkdGameComponent } from './gdkd-game/gdkd-game.component';
import { GdkdGameStepComponent } from './gdkd-game-step/gdkd-game-step.component';
import { GdkdResultComponent } from './gdkd-result/gdkd-result.component';

const gdkdRoutes: Routes = [
  {
    path:'', 
    component: GdkdDisplayComponent
  }
];

@NgModule({
  declarations: [
    GdkdDisplayComponent,
    GdkdStartComponent,
    GdkdGameComponent,
    GdkdGameStepComponent,
    GdkdResultComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(gdkdRoutes)
  ]
})
export class GdkdModule { }
