import { Component, OnInit } from '@angular/core';

// Servicios
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {

  // public dataServices: se puede utilizar en el html
  // Private dataServices: solo se puede utilizar en la clase

  constructor(public dataServices: DataService) { }

  ngOnInit(): void {
  }

}
