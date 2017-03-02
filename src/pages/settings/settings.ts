import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { TranslateService } from 'ng2-translate';


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


}
