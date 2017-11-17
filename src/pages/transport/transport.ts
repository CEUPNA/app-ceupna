import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { UniPage } from '../uni/uni';
import { Http } from '@angular/http';



@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html'
})
export class TransportPage {
campus:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: Http) {
this.campus="arrosadia";
  }
  OpenUni(){
  this.navCtrl.push(UniPage);
  }
  }
