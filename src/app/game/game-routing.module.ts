import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './pages/game/game.component';
import { GameoverComponent } from './pages/gameover/gameover.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GameComponent
      },
      {
        path: 'gameover',
        component: GameoverComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
