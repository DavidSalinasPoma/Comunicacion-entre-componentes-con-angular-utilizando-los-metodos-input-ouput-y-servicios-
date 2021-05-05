import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes importados
import { ComponentsModule } from '../components/components.module';

// Componentes de este modulo
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    // Modulos personalizados importados
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
