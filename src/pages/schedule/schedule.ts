import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UniPage } from '../uni/uni';
import { AppInit } from '../../providers/app-init';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})

export class SchedulePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: HttpClient) {
  }
  
  OpenUni(){
    this.navCtrl.push(UniPage);
  }
}
