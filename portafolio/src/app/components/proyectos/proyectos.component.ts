import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectosList:any;
  constructor(private datosPortafolio:PortafolioService){}
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.proyectosList=data.proyecto;
    });
  }
}
