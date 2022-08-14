import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { ScoresComponent } from './pages/scores/scores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HowToPlayComponent
      },
      {
        path: 'scores',
        component: ScoresComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
