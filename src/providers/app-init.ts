import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppInit provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppInit {

  public header:string = "<img style='max-width:30px;' src=\"http://www.ceupna.es/wp-content/uploads/2017/01/Logo2.jpg\" ><ion-icon name=\"md-settings\"></ion-icon>";
  public headerimg:string ="http://www.ceupna.es/wp-content/uploads/2017/01/Logo2.jpg";
 constructor() {

 }

}
