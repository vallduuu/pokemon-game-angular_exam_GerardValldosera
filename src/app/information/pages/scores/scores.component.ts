// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-scores',
//   templateUrl: './scores.component.html',
//   styleUrls: ['./scores.component.css']
// })
// export class ScoresComponent implements OnInit {
//
//   nombre:any
//   punts:any
//   total:any=0
//
//   constructor() { }
//
//   ngOnInit(): void {
//    this.nombre =localStorage.getItem("nombre")
//     this.punts = localStorage.getItem("Puntos")
//     this.total = this.total + parseInt(this.punts, 10);
//   }
// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  nombre: any;
  punts: any;
  total: any = 0;

  constructor() { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem("nombre");
    this.punts = localStorage.getItem("Puntos");

    const jugantara = localStorage.getItem("JugantAra");

    if (this.nombre === jugantara) {
      this.total = parseInt(localStorage.getItem("total") || "0", 10) + parseInt(this.punts, 10);
    } else {
      this.total = parseInt(this.punts, 10);
      localStorage.setItem("JugantAra", this.nombre);
    }
    localStorage.setItem("total", this.total.toString());
  }

}
