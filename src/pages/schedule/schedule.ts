import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
