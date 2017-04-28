import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Datos {
  public informacion:string;
  constructor() {
    
  }

  get Informacion():string{
    return ;
  }

  set Informacion(datos){
    this.informacion = datos;
  }

}
