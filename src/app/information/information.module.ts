import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRoutingModule } from './information-routing.module';
import { MaterialModule } from '../material/material.module';

import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { ScoresComponent } from './pages/scores/scores.component';



@NgModule({
  declarations: [
    HowToPlayComponent,
    ScoresComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MaterialModule
  ]
})
export class InformationModule { }
