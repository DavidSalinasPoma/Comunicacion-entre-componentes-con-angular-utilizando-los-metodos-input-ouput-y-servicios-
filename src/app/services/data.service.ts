import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public nombreUsuario: string = 'Sin Nombre...';

  constructor() { }
}
