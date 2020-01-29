import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './core/landingpage/landingpage.component';


const routes: Routes = [
  {path:'', component: LandingpageComponent},
  {path:'splitsmolens', loadChildren: () => import(`./splitsmolens/splitsmolens.module`).then(m => m.SplitsmolensModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
