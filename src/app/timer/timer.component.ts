import { Component } from '@angular/core';

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
