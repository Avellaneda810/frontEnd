import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
@Component({
  selector: 'app-h',
  templateUrl: './h.component.html',
  styleUrls: ['./h.component.css']
})
export class HComponent {
  hList:any;
  constructor(private datosPortafolio:PortafolioService){}
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.hList=data.habilidades;
    });
  }
}
