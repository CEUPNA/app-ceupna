import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { SettingsPage } from '../settings/settings';
/*
  Generated class for the Alerts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {  }
  OpenSettings(){
  this.navCtrl.push(SettingsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

}
