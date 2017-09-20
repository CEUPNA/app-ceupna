import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Proveedor de variables básicas de la app: Logotipo, Idioma predefinido, carrera del usuario...
*/
@Injectable()
export class AppInit {
  public api:string = "beta.api.ceupna.es";
  public header:string = "<img style='max-width:30px;' src=\"http://www.ceupna.es/wp-content/uploads/2017/01/Logo2.jpg\" ><ion-icon name=\"md-settings\"></ion-icon>";
  public headerimg:string ="http://www.ceupna.es/wp-content/uploads/2017/01/Logo2.jpg";
 constructor() {

 }

}
