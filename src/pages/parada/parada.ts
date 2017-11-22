import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { TransportPage } from '../transport/transport';
import { Http } from '@angular/http';



@Component({
  selector: 'page-parada',
  templateUrl: 'parada.html'
})
export class ParadaPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: Http) {

  }

  OpenTransport(){
  this.navCtrl.push(TransportPage);
  }
  }
