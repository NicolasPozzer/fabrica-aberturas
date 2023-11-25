import { Component } from '@angular/core';
import { Abertura } from 'src/app/components/model/abertura';
import { AberturaServiceService } from 'src/app/services/abertura-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  abertura: Abertura[] = [];

  constructor(private sAbertura: AberturaServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.sAbertura.lista().subscribe(data => { this.abertura = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sAbertura.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("Abertura Eliminada Correctamente!");
          this.cargarProyecto();
        }
      )
    }
  }

}
