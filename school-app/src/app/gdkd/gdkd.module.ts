import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdkdDisplayComponent } from './gdkd-display/gdkd-display.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { GdkdStartComponent } from './gdkd-start/gdkd-start.component';
import { ReactiveFormsModule } from '@angular/forms';

const gdkdRoutes: Routes = [
  {
    path:'', 
    component: GdkdDisplayComponent
  }
];

@NgModule({
  declarations: [
    GdkdDisplayComponent,
    GdkdStartComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(gdkdRoutes)
  ]
})
export class GdkdModule { }
