import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AberturaServiceService } from 'src/app/services/abertura-service.service';
import { Abertura } from '../../model/abertura';

@Component({
  selector: 'app-new-abertura',
  templateUrl: './new-abertura.component.html',
  styleUrls: ['./new-abertura.component.css']
})
export class NewAberturaComponent {
  nombre: string = '';
  tipo: string = '';
  detalles: string = '';
  medidas: string = '';
  precio: number = 0;
  urlMiniatura: string = '';
  urlFoto: string = '';

  constructor(private sAbertura: AberturaServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

  
  onCreate(): void {
    const abertura = new Abertura(this.nombre, this.tipo, this.detalles,this.medidas,this.precio,this.urlMiniatura,this.urlFoto);
    this.sAbertura.save(abertura).subscribe(
      data => {
        
        
      }, err => {
        alert("Abertura añadida!!");
        
      }
    )
  }
}
