import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdkdDisplayComponent } from './gdkd-display/gdkd-display.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';

const gdkdRoutes: Routes = [
  {
    path:'', 
    component: GdkdDisplayComponent
  }
];

@NgModule({
  declarations: [
    GdkdDisplayComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(gdkdRoutes)
  ]
})
export class GdkdModule { }
