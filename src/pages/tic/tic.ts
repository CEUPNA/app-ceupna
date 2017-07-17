import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UniPage } from '../uni/uni';
import { AppInit } from '../../providers/app-init';


@Component({
  selector: 'page-tic',
  templateUrl: 'tic.html'
})
export class TicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}
  OpenUni(){
    this.navCtrl.push(UniPage);
  }

}
