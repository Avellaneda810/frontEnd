import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  header:any;

  constructor(private datosPortafolio:PortafolioService ){

  }

  ngOnInit(): void{
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.header=data;
    });
  }
}
