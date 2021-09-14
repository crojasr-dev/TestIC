import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
  puntajeMalas: number = 0;
  pautaCorrectas = [
    true, false, true,
    false,true,false,
    true,false,false,
    false,false,false,
    false,false,true,
    true,false,false,
    false,false,true,
    false,false,false,
    false,false,false,
    true,false,false,
    false,false,true,
    false,false,false,
    false,true,false,
    false,false,false,
    false,false,true,
    false,false,false,
    false,false,false,
    false,false,false,
    true,false,true,
    true,true,false,
    false,false,true,
    false,false,true,
    true,false,false,
    false,false,false,
    true,true,false
  
  
  ];

  ObtieneRespuesta = (evento: any) => {
    console.clear();
    this.puntajeMalas = 20;

    
    debugger;
    for (let i = 0; i < 3; i++) {
      if (evento.target[i].checked === this.pautaCorrectas[i]) {
        this.puntajeMalas-=1;
      }else if(evento.target[i].checked !== this.pautaCorrectas[i]){
        this.puntajeMalas+=1;
      }
    } 

    console.log('las malas son: ', this.puntajeMalas);
  };
}
