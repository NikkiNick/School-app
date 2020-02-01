import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitsmolensStartComponent } from './splitsmolens/splitsmolens-start/splitsmolens-start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MaterialModule } from './core/material/material.module';
import { LandingpageComponent } from './core/landingpage/landingpage.component';
import { SplitsmolensModule } from './splitsmolens/splitsmolens.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GdkdModule } from './gdkd/gdkd.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitsmolensModule,  
    GdkdModule, 
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
