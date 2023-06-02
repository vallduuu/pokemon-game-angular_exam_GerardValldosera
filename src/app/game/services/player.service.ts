import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit {

  private _score: any = 0;
  private _lifes: number = 0;
  private _highScore: number = 0;


  get score(): number {
    return this._score;
  }

  get highScore(): number {
    return this._highScore;
  }

  get lifes(): number {
    return this._lifes;
  }

  constructor(
    private _router: Router
  ) {
    this._highScore = parseInt(localStorage.getItem('highscore') || '0');
    console.log(this._highScore);
    // console.log(Number(localStorage.getItem('highScore')))
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
        this._score = localStorage.getItem("Puntos")
    }

  resetGame() {
    this._score = 0;
    this._lifes = 5;
  }

  increasePoints() {
    this._score += 10;
  }

  decreaseLifes() {
    this._lifes -= 1;
    if (this._lifes <= 0) {

      if (this._score > this._highScore) this.newHighScore()

      this._router.navigate(['/game/gameover']);
    }
  }

  newHighScore() {
    this._highScore = this._score;
    localStorage.setItem('highscore', String(this._highScore));
  }
}
