import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {  }
  OpenSettings(){
  this.navCtrl.push(SettingsPage);
  }


}
