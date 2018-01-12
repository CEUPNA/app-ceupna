import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { TicPage } from '../tic/tic';
import { ApiCeupnaProvider, TICResource } from "../../providers/api-ceupna/api-ceupna";


@Component({
  selector: 'page-new',
  templateUrl: 'ticpage.html'
})

export class TicsPage {
  ticResource: TICResource = new TICResource();


  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public api: ApiCeupnaProvider) {
    let ticId = navParams.get("ticid");
    this.getTIC(ticId);
  }

  async getTIC(ticId: number) {
    this.ticResource = await this.api.getSingleTIC(ticId);
    console.log(this.ticResource)
  }

  OpenTIC(){
    this.navCtrl.push(TicPage);
  }

}
