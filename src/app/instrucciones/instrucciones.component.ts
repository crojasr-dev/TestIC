import { Component } from '@angular/core';


@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls:['./instrucciones.component.css'],
})
export class InstruccionesComponent  {

  pregunta_uno=` 1.- Seleccione en la columna 1 a la altura de cada seguro de incendios
  o accidentes, desde 150.000 a 450.000 pesos inclusive, contratado
  entre el 15 de Marzo de 1975 y el 10 de Mayo de 1976.`;
  
  pregunta_dos=` 2.- Seleccione en la columna 2 a la altura de cada seguro de vida o
  accidentes, hasta 300.000 pesos inclusive, contratado entre el 15 de
  Octubre de 1975 y el 20 de Agosto de 1976.`

  pregunta_tres=`
  3.- Seleccion en la columna 3 a la altura de cada seguro de incendios
  o de vida, desde 200.000 a 500.000 pesos inclusive, contratado entre
  el 10 de Febrero de 1975 y el 15 de Junio de 1976.`

}
