import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UniPage } from '../uni/uni';
import { AppInit } from '../../providers/app-init';
import { TicsPage } from '../ticpage/ticpage';
import { ApiCeupnaProvider } from "../../providers/api-ceupna/api-ceupna";


@Component({
  selector: 'page-tic',
  templateUrl: 'tic.html'
})

export class TicPage {

  /*Petición a API de los recursos*/
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
              private AppInit: AppInit, public api: ApiCeupnaProvider) {
    this.api.getAllTIC()
    console.log(this.api)
  }

  OpenSingleTic(ticid){
    this.navCtrl.push(TicsPage, {ticid: ticid});
  };

  OpenUni(){
    this.navCtrl.push(UniPage);
  };

}
