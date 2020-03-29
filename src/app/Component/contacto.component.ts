import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: '../View/contacto.component.html'  
  })
  
  export class ContactoComponent{
      public titulo = "página de contacto";
        public parametro;
      constructor(
          private _route: ActivatedRoute,
          private _router: Router 
      ){}

        ngOnInit(){
            this._route.params.forEach((params: Params) =>{
                this.parametro = params['parametro'];
            });
        }
        redirigir(){
           this._router.navigate(['/contacto','parametro']);
        }
        redirigirDos(){
            this._router.navigate(['/home']);
         }
    }
