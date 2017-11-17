import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MentoringPage } from '../mentoring/mentoring';
import { SchedulePage } from '../schedule/schedule';
import { TransportPage } from '../transport/transport';
import { TicPage } from '../tic/tic';
import { AppInit } from '../../providers/app-init';
import { TranslateService } from 'ng2-translate';



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
  OpenTransport(){
  this.navCtrl.push(TransportPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UniPage');
  }

}
