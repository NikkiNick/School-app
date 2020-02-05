import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SorteerspelDisplayComponent } from './sorteerspel-display/sorteerspel-display.component';
import { SorteerspelStartComponent } from './sorteerspel-start/sorteerspel-start.component';
import { SorteerspelGameComponent } from './sorteerspel-game/sorteerspel-game.component';
import { SorteerspelGameStepComponent } from './sorteerspel-game-step/sorteerspel-game-step.component';
import { SorteerspelResultComponent } from './sorteerspel-result/sorteerspel-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';

const sorteerspelRoutes: Routes= [
  {path: '', component: SorteerspelDisplayComponent}
] 

@NgModule({
  declarations: [ 
    SorteerspelDisplayComponent,
    SorteerspelStartComponent,
    SorteerspelGameComponent,
    SorteerspelGameStepComponent,
    SorteerspelResultComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(sorteerspelRoutes)
  ]
})
export class SorteerspelModule { }
