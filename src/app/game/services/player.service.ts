import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _points: number = 0;
  private _lifes: number = 0;

  get points(): number {
    return this._points;
  }

  get lifes(): number {
    return this._lifes;
  }

  constructor(
    private _router: Router
  ) { }

  resetGame() {
    this._points = 0;
    this._lifes = 5;
  }
  
  increasePoints() {
    this._points += 10;
  }

  decreaseLifes() {
    this._lifes -= 1;
    if (this._lifes <= 0) {
      console.log('gameover');
      this._router.navigate(['/game/gameover']);
    }
  }
}
