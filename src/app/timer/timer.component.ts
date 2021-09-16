import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',

  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {

  muestraTabla: boolean = false;
  muestraBtnIniciar: boolean = true;
  inciarTimer() {
    this.muestraTabla = true;
    this.muestraBtnIniciar=false;
    setTimeout(function () {

    }, 5000);
  }


}
