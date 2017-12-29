import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { TransportPage } from '../transport/transport';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-parada',
  templateUrl: 'parada.html'
})
export class ParadaPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: HttpClient) {

  }

  OpenTransport(){
  this.navCtrl.push(TransportPage);
  }
}
