import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { TicPage } from '../tic/tic';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-new',
  templateUrl: 'ticpage.html'
})
export class TicsPage {
  ticid: any;
  description: any;
  icon: any;
  name: any;
  enlace: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: Http) {
    this.ticid = navParams.get("ticid");
    /* HACEMOS PETICIÓN A API CON EL ID DE LA ENTRADA Y DEFINIMOS VARIABLES*/
    this.http.get('http://beta.api.ceupna.es/tics/'+this.ticid+'/?format=json').map(res => res.json()).subscribe(data => {
         this.description = data.description;
         this.icon = data.icon;
         this.name = data.name;
         this.enlace = data.web;
    });
  }
  OpenTIC(){
  this.navCtrl.push(TicPage);
  }

}
