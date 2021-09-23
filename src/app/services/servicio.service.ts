import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  lala: number = 0;
  constructor() {
    console.log('servicio inicializado!! ');
  }
   mifuncion = () => {
    let valor: Boolean = false;
    //  setTimeout(function () {
    //   valor = true;
      
    // }, 5000);
    
    console.log(valor);
  };
}
