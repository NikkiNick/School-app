import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SorteerspelDisplayComponent } from './sorteerspel-display/sorteerspel-display.component';
import { SorteerspelStartComponent } from './sorteerspel-start/sorteerspel-start.component';
import { SorteerspelGameComponent } from './sorteerspel-game/sorteerspel-game.component';
import { SorteerspelGameStepComponent } from './sorteerspel-game-step/sorteerspel-game-step.component';
import { SorteerspelResultComponent } from './sorteerspel-result/sorteerspel-result.component';

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
    CommonModule,
    RouterModule.forChild(sorteerspelRoutes)
  ]
})
export class SorteerspelModule { }
