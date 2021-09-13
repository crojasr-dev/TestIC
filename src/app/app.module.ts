import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { TablaComponent } from './tabla/tabla.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstruccionesComponent,
    TablaComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule, CountdownModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
