import { Injectable } from '@angular/core';
import {PlayerService} from "../../game/services/player.service";

@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  private scores: { nombre: string, score: number }[] = [];

  constructor(private playerService : PlayerService) { }

  get scoree():number{
    return this.playerService.score;
  }

  guardarResultado(nombre: string, score: number) {

    score=this.scoree
    console.log(this.scoree)
    this.scores.push({ nombre, score });
    this.scores.sort((a, b) => b.score - a.score);
    if (this.scores.length > 10) {
      this.scores.splice(10);
    }
  }
}
