import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CeupnaPage } from '../ceupna/ceupna';
import { AppInit } from '../../providers/app-init';


@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html'
})
export class ComplaintsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}
  OpenCeupna(){
    this.navCtrl.push(CeupnaPage);
  }

}
