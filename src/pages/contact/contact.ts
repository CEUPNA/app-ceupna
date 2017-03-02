import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
