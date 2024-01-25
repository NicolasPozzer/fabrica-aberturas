import { Component, OnDestroy } from '@angular/core';
import { Abertura } from 'src/app/components/model/abertura';
import { AberturaServiceService } from 'src/app/services/abertura-service.service';
import { TokenService } from 'src/app/services/token.service';
import { interval, Subject } from 'rxjs';
import { takeUntil, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnDestroy {

  abertura: Abertura[] = [];
  liveApi: boolean = false;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private sAbertura: AberturaServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    // Ejecutar la función cada 3 segundos
    interval(3000)
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => this.sAbertura.lista()),
        take(1) // Solo toma la primera respuesta
      )
      .subscribe(
        data => {
          this.abertura = data;
          this.liveApi = true;
          console.log('Data lista!!');
          this.destroy$.next(); // Detener la suscripción después de la primera respuesta
        },
        error => {
          // Puedes manejar el error aquí si lo deseas
          console.error('Error al obtener la lista:', error);
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  delete(id?: number) {
    if (id !== undefined) {
      this.sAbertura.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("Abertura Eliminada Correctamente!");
          this.cargarProyecto();
        }
      );
    }
  }

  cargarProyecto(): void {
    this.sAbertura.lista().subscribe(
      data => {
        this.abertura = data;
        this.liveApi = true;
        console.log('Data lista!!');
      },
      error => {
        // Puedes manejar el error aquí si lo deseas
        console.error('Error al obtener la lista:', error);
      }
    );
  }
}
