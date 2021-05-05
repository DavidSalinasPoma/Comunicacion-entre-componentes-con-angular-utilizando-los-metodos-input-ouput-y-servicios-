import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes de este modulo
import { NavbarsComponent } from './navbars/navbars.component';
import { HijoComponent } from './hijo/hijo.component'; // Aqui se encuentra el ngIf y el ngFor



@NgModule({
  declarations: [
    NavbarsComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // Para que pueda ser utilizao en otros modulos
    NavbarsComponent,
    HijoComponent
  ]
})
export class ComponentsModule { }
