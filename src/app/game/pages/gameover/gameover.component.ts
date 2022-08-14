import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  get score(): number {
    return this.playerService.points;
  }

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
  }

}
