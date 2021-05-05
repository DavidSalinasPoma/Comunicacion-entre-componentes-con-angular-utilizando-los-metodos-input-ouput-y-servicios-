import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nombre: string = 'Nombre usuario';

  constructor(private DataServices: DataService) { }

  ngOnInit(): void {
  }


  /**
   * cambiarNombreº
   */
  public cambiarNombre() {
    this.nombre = 'David Salinas';
    this.DataServices.nombreUsuario = this.nombre;
  }

  /**
    * recibiendoDelPadre
    */
  public recibiendoDelPadre(datosHijo: string) {
    this.nombre = datosHijo;
  }


}
