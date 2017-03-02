import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MentoringPage } from '../mentoring/mentoring';
import { SchedulePage } from '../schedule/schedule';
import { TicPage } from '../tic/tic';
import { AppInit } from '../../providers/app-init';
/*
  Generated class for the Uni page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-uni',
  templateUrl: 'uni.html'
})
export class UniPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}
  OpenMentoring(){
  this.navCtrl.push(MentoringPage);
  }
  OpenTic(){
  this.navCtrl.push(TicPage);
  }
  OpenSchedule(){
  this.navCtrl.push(SchedulePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UniPage');
  }

}
