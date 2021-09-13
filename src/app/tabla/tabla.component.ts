import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {

  ObtieneRespuesta = (evento: any) => {
    console.clear();
    for (let index = 0; index < evento.target.length-1; index++) {
      const element :boolean = evento.target[index].checked;
      console.log('Elemento: ' + index + ': ' + element);
    }
  };

}
