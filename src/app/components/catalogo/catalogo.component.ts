import { Component } from '@angular/core';
import { Abertura } from 'src/app/model/abertura';
import { AberturaServiceService } from 'src/app/services/abertura-service.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  abertura: Abertura[] = [];

  constructor(private sAbertura: AberturaServiceService) { }


  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.sAbertura.lista().subscribe(data => { this.abertura = data; })
  }

}
