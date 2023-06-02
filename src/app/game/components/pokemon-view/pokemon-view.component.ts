
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styles: [
    `img {
      filter: brightness(0);
    }`,
    `.cover { object-fit: cover; }`,
    `.show { filter: brightness(1); }`,
    `.negre { background-color: black; }`,
    `.vermell { background-color: red; }`
  ]
})
export class PokemonViewComponent implements OnInit {

  @Input() url: string = '';
  @Input() show: boolean = true;
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() adjust: boolean = false;

  isAnswered: boolean = false;
  isDoubleClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let imatge = document.getElementById("fotopokemon");

    // @ts-ignore
    imatge.addEventListener("dblclick", () => {
      // @ts-ignore
      if (this.isAnswered) {
        // @ts-ignore
        imatge.classList.toggle('vermell');
      } else {
        // @ts-ignore
        imatge.classList.toggle('negre');
      }
      this.isDoubleClicked = !this.isDoubleClicked;
    });

  }
  onAnswer(): void {
    this.isAnswered = true;
    let imatge = document.getElementById("fotopokemon");

  }
}


