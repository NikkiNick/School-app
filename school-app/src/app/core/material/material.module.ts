import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, 
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatTooltipModule,
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatTooltipModule,
    DragDropModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatTooltipModule,
    DragDropModule
  ]
})
export class MaterialModule { }
