import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
  puntajeMalas: number = 0;
  puntajeBuenas: number = 0;
  muestraTimer: boolean = false;
  muestraBtnIniciar: boolean = true;
  habilitaRespuestas:boolean=true;
  muestraTabla:boolean=false;

  pautaCorrectas: boolean[] = [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
  ];

  inciarTimer() {

    this.muestraTabla=true;


    this.muestraTimer = true;
    this.muestraBtnIniciar = false;
    this.habilitaRespuestas=false;

    setTimeout(() => {
    this.habilitaRespuestas=true;
    console.log('finalizó el timerrrrr...');
    
    }, 5000);
  }

  ObtieneRespuesta = (evento: any) => {
    console.clear();
    this.puntajeMalas = 0;
    this.puntajeBuenas = 0;

    // debugger;
    for (let i = 0; i < evento.target.length - 1; i++) {
      if (evento.target[i].checked === this.pautaCorrectas[i]) {
        this.puntajeBuenas += 1;
        console.log('hizo la resta');
      } else {
        this.puntajeMalas += 1;
        console.log('se hizo la suma');
      }
      console.log(
        'Indice: ',
        i,
        '  -  ',
        evento.target[i].checked,
        'PAuta: ',
        this.pautaCorrectas[i],
        '|  La suma de malas es: ',
        this.puntajeMalas
      );
    }

    // console.log('las malas son: ', this.puntajeMalas);
    alert(
      'las malas son: ' +
        this.puntajeMalas +
        '\n' +
        'Las buenas son: ' +
        this.puntajeBuenas
    );
  };
}
