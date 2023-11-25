import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abertura } from '../../model/abertura';
import { AberturaServiceService } from 'src/app/services/abertura-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-edit-abertura',
  templateUrl: './edit-abertura.component.html',
  styleUrls: ['./edit-abertura.component.css']
})

export class EditAberturaComponent implements OnInit {
  abertura: Abertura = null;

  constructor(private sAbertura: AberturaServiceService, private activatedRouter: ActivatedRoute,
    private router: Router, private tokenService: TokenService) { }

    isLogged = false;
  
    ngOnInit(): void {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAbertura.detail(id).subscribe(
      data =>{
        this.abertura = data;
      }, err =>{
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAbertura.update(id, this.abertura).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Abertura Modificada!");
         this.router.navigate(['']);
      }
    )
  }

}

