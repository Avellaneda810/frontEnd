import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experienciaList:any;
  constructor(private datosPortafolio:PortafolioService){}
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.experienciaList=data.experiencia;
    });
  } 
}
