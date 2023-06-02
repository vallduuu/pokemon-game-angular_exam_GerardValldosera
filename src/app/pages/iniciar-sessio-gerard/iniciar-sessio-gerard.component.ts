import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../../information/pages/ScoresService';
import { PlayerService } from '../../game/services/player.service';


@Component({
  selector: 'app-iniciar-sessio-gerard',
  templateUrl: './iniciar-sessio-gerard.component.html',
  styleUrls: ['./iniciar-sessio-gerard.component.css']
})
export class IniciarSessioGerardComponent implements OnInit {

  constructor(   private playerService: PlayerService,private scoresService: ScoresService) {}

  ngOnInit(): void {

  }

  guardar_nom() {
    let nom;
    let punts;
    // @ts-ignore
    nom=document.getElementById("jugador").value;
    localStorage.setItem("nombre",nom)
    // @ts-ignore
    document.getElementById("jugador").reset

    // @ts-ignore
    punts=document.getElementById("punts").value;
    localStorage.setItem("Puntos",punts)
    // @ts-ignore
    document.getElementById("punts").reset

    const score = this.playerService.score;
    this.scoresService.guardarResultado(nom, punts); // Guardar el resultado en el servicio ScoresService
  }
  }

