import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Servicios
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {


  // Recibiendo propiedades de otro componente
  @Input() nombreHijo: string = 'Sin nombre';

  // Emitir una propiedad del hijo al padre
  @Output() emitirCambioNombreHijoAlPadre = new EventEmitter<string>(); // se necesita saber de que tipo de informacion se va a emitir


  // public dataServices: se puede utilizar en el html
  // Private dataServices: solo se puede utilizar en la clase

  constructor(private dataServices: DataService) { }

  ngOnInit(): void {
  }

  /**
   * cambiarNombre
   */
  public cambiarNombre() {
    this.nombreHijo = 'Juan Carlos';
    this.emitirCambioNombreHijoAlPadre.emit(this.nombreHijo);
    this.dataServices.nombreUsuario = this.nombreHijo;
  }

}
