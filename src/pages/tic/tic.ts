import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UniPage } from '../uni/uni';
import { AppInit } from '../../providers/app-init';
import { TicsPage } from '../ticpage/ticpage';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-tic',
  templateUrl: 'tic.html'
})
export class TicPage {
recursos: any;
/*Petición a API de los recursos*/
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: HttpClient) {
  this.http.get('http://'+AppInit.api+'/tics/?format=json').subscribe(data => {
           this.recursos = data;
           console.log(data)
      });
}

  OpenSingleTic(ticid){
  this.navCtrl.push(TicsPage, {ticid: ticid});
  };

  OpenUni(){
    this.navCtrl.push(UniPage);
  };
}
