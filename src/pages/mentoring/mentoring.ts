import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';


@Component({
  selector: 'page-mentoring',
  templateUrl: 'mentoring.html'
})
export class MentoringPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}


}
