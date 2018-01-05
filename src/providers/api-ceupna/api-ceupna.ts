import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Doc sobre API REST
  https://ionicacademy.com/http-calls-ionic/
 */


/*
  Generated class for the ApiCeupnaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiCeupnaProvider {

  apiUrl:string = "http://beta.api.ceupna.es";
  //apiUrl: string = "http://127.0.0.1:8001";

  ticResources: any;

  constructor(private http: HttpClient) {
    console.log('Hello ApiCeupnaProvider Provider');
  }

  getAllTIC() {
    if (this.ticResources) {
      return Promise.resolve(this.ticResources)
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/tics').subscribe(data => {
        this.ticResources = data;
        resolve(this.ticResources);
      });
    });

  }


}
