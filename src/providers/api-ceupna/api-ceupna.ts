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

export class TICResource {
  id: number = -1;
  name: string = "malo";
  description: string = "";
  icon: string = "";
  web: string = "";
}

@Injectable()
export class ApiCeupnaProvider {

  //apiUrl:string = "http://beta.api.ceupna.es";
  apiUrl: string = "http://127.0.0.1:8001";

  ticResources: any;

  constructor(private httpClient: HttpClient) {
    console.log('Hello ApiCeupnaProvider Provider');
  }

  /* Funciones para TIC */
  getAllTIC() {
    if (this.ticResources) {
      return Promise.resolve(this.ticResources)
    }

    return new Promise(resolve => {
      this.httpClient.get(this.apiUrl + '/tics').subscribe(data => {
        this.ticResources = data;
        resolve(this.ticResources);
      });
    });
  }

  getSingleTIC(ticId: number): Promise<TICResource> {
    return new Promise<TICResource>(resolve => {
      this.httpClient.get(this.apiUrl + '/tics/' + ticId + '/?format=json').subscribe(data => {
        let  resource: TICResource = new TICResource();
        resource.id = data['id'];
        resource.name = data['name'];
        resource.description = data['description'];
        resource.icon = data['icon'];
        resource.web = data['web'];
        resolve(resource);
      });
    });
  }

}
