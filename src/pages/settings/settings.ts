import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public translateService: TranslateService) {}
  changeLanguage(language){
    this.translateService.use(language);
    console.log(language);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
